(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();var Gh={exports:{}},hl={};var Tv;function sM(){if(Tv)return hl;Tv=1;var c=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,r,o){var u=null;if(o!==void 0&&(u=""+o),r.key!==void 0&&(u=""+r.key),"key"in r){o={};for(var f in r)f!=="key"&&(o[f]=r[f])}else o=r;return r=o.ref,{$$typeof:c,type:a,key:u,ref:r!==void 0?r:null,props:o}}return hl.Fragment=t,hl.jsx=n,hl.jsxs=n,hl}var Av;function rM(){return Av||(Av=1,Gh.exports=sM()),Gh.exports}var Ft=rM(),Vh={exports:{}},fe={};var wv;function oM(){if(wv)return fe;wv=1;var c=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),o=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.iterator;function y(F){return F===null||typeof F!="object"?null:(F=v&&F[v]||F["@@iterator"],typeof F=="function"?F:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,S={};function x(F,Y,mt){this.props=F,this.context=Y,this.refs=S,this.updater=mt||M}x.prototype.isReactComponent={},x.prototype.setState=function(F,Y){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,Y,"setState")},x.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function T(){}T.prototype=x.prototype;function R(F,Y,mt){this.props=F,this.context=Y,this.refs=S,this.updater=mt||M}var D=R.prototype=new T;D.constructor=R,b(D,x.prototype),D.isPureReactComponent=!0;var L=Array.isArray;function P(){}var B={H:null,A:null,T:null,S:null},W=Object.prototype.hasOwnProperty;function w(F,Y,mt){var bt=mt.ref;return{$$typeof:c,type:F,key:Y,ref:bt!==void 0?bt:null,props:mt}}function O(F,Y){return w(F.type,Y,F.props)}function G(F){return typeof F=="object"&&F!==null&&F.$$typeof===c}function $(F){var Y={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(mt){return Y[mt]})}var V=/\/+/g;function Q(F,Y){return typeof F=="object"&&F!==null&&F.key!=null?$(""+F.key):Y.toString(36)}function j(F){switch(F.status){case"fulfilled":return F.value;case"rejected":throw F.reason;default:switch(typeof F.status=="string"?F.then(P,P):(F.status="pending",F.then(function(Y){F.status==="pending"&&(F.status="fulfilled",F.value=Y)},function(Y){F.status==="pending"&&(F.status="rejected",F.reason=Y)})),F.status){case"fulfilled":return F.value;case"rejected":throw F.reason}}throw F}function z(F,Y,mt,bt,It){var nt=typeof F;(nt==="undefined"||nt==="boolean")&&(F=null);var ft=!1;if(F===null)ft=!0;else switch(nt){case"bigint":case"string":case"number":ft=!0;break;case"object":switch(F.$$typeof){case c:case t:ft=!0;break;case g:return ft=F._init,z(ft(F._payload),Y,mt,bt,It)}}if(ft)return It=It(F),ft=bt===""?"."+Q(F,0):bt,L(It)?(mt="",ft!=null&&(mt=ft.replace(V,"$&/")+"/"),z(It,Y,mt,"",function(Gt){return Gt})):It!=null&&(G(It)&&(It=O(It,mt+(It.key==null||F&&F.key===It.key?"":(""+It.key).replace(V,"$&/")+"/")+ft)),Y.push(It)),1;ft=0;var Ct=bt===""?".":bt+":";if(L(F))for(var kt=0;kt<F.length;kt++)bt=F[kt],nt=Ct+Q(bt,kt),ft+=z(bt,Y,mt,nt,It);else if(kt=y(F),typeof kt=="function")for(F=kt.call(F),kt=0;!(bt=F.next()).done;)bt=bt.value,nt=Ct+Q(bt,kt++),ft+=z(bt,Y,mt,nt,It);else if(nt==="object"){if(typeof F.then=="function")return z(j(F),Y,mt,bt,It);throw Y=String(F),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return ft}function H(F,Y,mt){if(F==null)return F;var bt=[],It=0;return z(F,bt,"","",function(nt){return Y.call(mt,nt,It++)}),bt}function Z(F){if(F._status===-1){var Y=F._result;Y=Y(),Y.then(function(mt){(F._status===0||F._status===-1)&&(F._status=1,F._result=mt)},function(mt){(F._status===0||F._status===-1)&&(F._status=2,F._result=mt)}),F._status===-1&&(F._status=0,F._result=Y)}if(F._status===1)return F._result.default;throw F._result}var ct=typeof reportError=="function"?reportError:function(F){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof F=="object"&&F!==null&&typeof F.message=="string"?String(F.message):String(F),error:F});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",F);return}console.error(F)},vt={map:H,forEach:function(F,Y,mt){H(F,function(){Y.apply(this,arguments)},mt)},count:function(F){var Y=0;return H(F,function(){Y++}),Y},toArray:function(F){return H(F,function(Y){return Y})||[]},only:function(F){if(!G(F))throw Error("React.Children.only expected to receive a single React element child.");return F}};return fe.Activity=_,fe.Children=vt,fe.Component=x,fe.Fragment=n,fe.Profiler=r,fe.PureComponent=R,fe.StrictMode=a,fe.Suspense=p,fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,fe.__COMPILER_RUNTIME={__proto__:null,c:function(F){return B.H.useMemoCache(F)}},fe.cache=function(F){return function(){return F.apply(null,arguments)}},fe.cacheSignal=function(){return null},fe.cloneElement=function(F,Y,mt){if(F==null)throw Error("The argument must be a React element, but you passed "+F+".");var bt=b({},F.props),It=F.key;if(Y!=null)for(nt in Y.key!==void 0&&(It=""+Y.key),Y)!W.call(Y,nt)||nt==="key"||nt==="__self"||nt==="__source"||nt==="ref"&&Y.ref===void 0||(bt[nt]=Y[nt]);var nt=arguments.length-2;if(nt===1)bt.children=mt;else if(1<nt){for(var ft=Array(nt),Ct=0;Ct<nt;Ct++)ft[Ct]=arguments[Ct+2];bt.children=ft}return w(F.type,It,bt)},fe.createContext=function(F){return F={$$typeof:u,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null},F.Provider=F,F.Consumer={$$typeof:o,_context:F},F},fe.createElement=function(F,Y,mt){var bt,It={},nt=null;if(Y!=null)for(bt in Y.key!==void 0&&(nt=""+Y.key),Y)W.call(Y,bt)&&bt!=="key"&&bt!=="__self"&&bt!=="__source"&&(It[bt]=Y[bt]);var ft=arguments.length-2;if(ft===1)It.children=mt;else if(1<ft){for(var Ct=Array(ft),kt=0;kt<ft;kt++)Ct[kt]=arguments[kt+2];It.children=Ct}if(F&&F.defaultProps)for(bt in ft=F.defaultProps,ft)It[bt]===void 0&&(It[bt]=ft[bt]);return w(F,nt,It)},fe.createRef=function(){return{current:null}},fe.forwardRef=function(F){return{$$typeof:f,render:F}},fe.isValidElement=G,fe.lazy=function(F){return{$$typeof:g,_payload:{_status:-1,_result:F},_init:Z}},fe.memo=function(F,Y){return{$$typeof:d,type:F,compare:Y===void 0?null:Y}},fe.startTransition=function(F){var Y=B.T,mt={};B.T=mt;try{var bt=F(),It=B.S;It!==null&&It(mt,bt),typeof bt=="object"&&bt!==null&&typeof bt.then=="function"&&bt.then(P,ct)}catch(nt){ct(nt)}finally{Y!==null&&mt.types!==null&&(Y.types=mt.types),B.T=Y}},fe.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},fe.use=function(F){return B.H.use(F)},fe.useActionState=function(F,Y,mt){return B.H.useActionState(F,Y,mt)},fe.useCallback=function(F,Y){return B.H.useCallback(F,Y)},fe.useContext=function(F){return B.H.useContext(F)},fe.useDebugValue=function(){},fe.useDeferredValue=function(F,Y){return B.H.useDeferredValue(F,Y)},fe.useEffect=function(F,Y){return B.H.useEffect(F,Y)},fe.useEffectEvent=function(F){return B.H.useEffectEvent(F)},fe.useId=function(){return B.H.useId()},fe.useImperativeHandle=function(F,Y,mt){return B.H.useImperativeHandle(F,Y,mt)},fe.useInsertionEffect=function(F,Y){return B.H.useInsertionEffect(F,Y)},fe.useLayoutEffect=function(F,Y){return B.H.useLayoutEffect(F,Y)},fe.useMemo=function(F,Y){return B.H.useMemo(F,Y)},fe.useOptimistic=function(F,Y){return B.H.useOptimistic(F,Y)},fe.useReducer=function(F,Y,mt){return B.H.useReducer(F,Y,mt)},fe.useRef=function(F){return B.H.useRef(F)},fe.useState=function(F){return B.H.useState(F)},fe.useSyncExternalStore=function(F,Y,mt){return B.H.useSyncExternalStore(F,Y,mt)},fe.useTransition=function(){return B.H.useTransition()},fe.version="19.2.4",fe}var Rv;function Cp(){return Rv||(Rv=1,Vh.exports=oM()),Vh.exports}var Ue=Cp(),kh={exports:{}},dl={},qh={exports:{}},Xh={};var Cv;function lM(){return Cv||(Cv=1,(function(c){function t(z,H){var Z=z.length;z.push(H);t:for(;0<Z;){var ct=Z-1>>>1,vt=z[ct];if(0<r(vt,H))z[ct]=H,z[Z]=vt,Z=ct;else break t}}function n(z){return z.length===0?null:z[0]}function a(z){if(z.length===0)return null;var H=z[0],Z=z.pop();if(Z!==H){z[0]=Z;t:for(var ct=0,vt=z.length,F=vt>>>1;ct<F;){var Y=2*(ct+1)-1,mt=z[Y],bt=Y+1,It=z[bt];if(0>r(mt,Z))bt<vt&&0>r(It,mt)?(z[ct]=It,z[bt]=Z,ct=bt):(z[ct]=mt,z[Y]=Z,ct=Y);else if(bt<vt&&0>r(It,Z))z[ct]=It,z[bt]=Z,ct=bt;else break t}}return H}function r(z,H){var Z=z.sortIndex-H.sortIndex;return Z!==0?Z:z.id-H.id}if(c.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var o=performance;c.unstable_now=function(){return o.now()}}else{var u=Date,f=u.now();c.unstable_now=function(){return u.now()-f}}var p=[],d=[],g=1,_=null,v=3,y=!1,M=!1,b=!1,S=!1,x=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;function D(z){for(var H=n(d);H!==null;){if(H.callback===null)a(d);else if(H.startTime<=z)a(d),H.sortIndex=H.expirationTime,t(p,H);else break;H=n(d)}}function L(z){if(b=!1,D(z),!M)if(n(p)!==null)M=!0,P||(P=!0,$());else{var H=n(d);H!==null&&j(L,H.startTime-z)}}var P=!1,B=-1,W=5,w=-1;function O(){return S?!0:!(c.unstable_now()-w<W)}function G(){if(S=!1,P){var z=c.unstable_now();w=z;var H=!0;try{t:{M=!1,b&&(b=!1,T(B),B=-1),y=!0;var Z=v;try{e:{for(D(z),_=n(p);_!==null&&!(_.expirationTime>z&&O());){var ct=_.callback;if(typeof ct=="function"){_.callback=null,v=_.priorityLevel;var vt=ct(_.expirationTime<=z);if(z=c.unstable_now(),typeof vt=="function"){_.callback=vt,D(z),H=!0;break e}_===n(p)&&a(p),D(z)}else a(p);_=n(p)}if(_!==null)H=!0;else{var F=n(d);F!==null&&j(L,F.startTime-z),H=!1}}break t}finally{_=null,v=Z,y=!1}H=void 0}}finally{H?$():P=!1}}}var $;if(typeof R=="function")$=function(){R(G)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,Q=V.port2;V.port1.onmessage=G,$=function(){Q.postMessage(null)}}else $=function(){x(G,0)};function j(z,H){B=x(function(){z(c.unstable_now())},H)}c.unstable_IdlePriority=5,c.unstable_ImmediatePriority=1,c.unstable_LowPriority=4,c.unstable_NormalPriority=3,c.unstable_Profiling=null,c.unstable_UserBlockingPriority=2,c.unstable_cancelCallback=function(z){z.callback=null},c.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<z?Math.floor(1e3/z):5},c.unstable_getCurrentPriorityLevel=function(){return v},c.unstable_next=function(z){switch(v){case 1:case 2:case 3:var H=3;break;default:H=v}var Z=v;v=H;try{return z()}finally{v=Z}},c.unstable_requestPaint=function(){S=!0},c.unstable_runWithPriority=function(z,H){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Z=v;v=z;try{return H()}finally{v=Z}},c.unstable_scheduleCallback=function(z,H,Z){var ct=c.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ct+Z:ct):Z=ct,z){case 1:var vt=-1;break;case 2:vt=250;break;case 5:vt=1073741823;break;case 4:vt=1e4;break;default:vt=5e3}return vt=Z+vt,z={id:g++,callback:H,priorityLevel:z,startTime:Z,expirationTime:vt,sortIndex:-1},Z>ct?(z.sortIndex=Z,t(d,z),n(p)===null&&z===n(d)&&(b?(T(B),B=-1):b=!0,j(L,Z-ct))):(z.sortIndex=vt,t(p,z),M||y||(M=!0,P||(P=!0,$()))),z},c.unstable_shouldYield=O,c.unstable_wrapCallback=function(z){var H=v;return function(){var Z=v;v=H;try{return z.apply(this,arguments)}finally{v=Z}}}})(Xh)),Xh}var Dv;function cM(){return Dv||(Dv=1,qh.exports=lM()),qh.exports}var Wh={exports:{}},Bn={};var Nv;function uM(){if(Nv)return Bn;Nv=1;var c=Cp();function t(p){var d="https://react.dev/errors/"+p;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)d+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},r=Symbol.for("react.portal");function o(p,d,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:r,key:_==null?null:""+_,children:p,containerInfo:d,implementation:g}}var u=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(p,d){if(p==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Bn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Bn.createPortal=function(p,d){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return o(p,d,null,g)},Bn.flushSync=function(p){var d=u.T,g=a.p;try{if(u.T=null,a.p=2,p)return p()}finally{u.T=d,a.p=g,a.d.f()}},Bn.preconnect=function(p,d){typeof p=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,a.d.C(p,d))},Bn.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},Bn.preinit=function(p,d){if(typeof p=="string"&&d&&typeof d.as=="string"){var g=d.as,_=f(g,d.crossOrigin),v=typeof d.integrity=="string"?d.integrity:void 0,y=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;g==="style"?a.d.S(p,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:y}):g==="script"&&a.d.X(p,{crossOrigin:_,integrity:v,fetchPriority:y,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Bn.preinitModule=function(p,d){if(typeof p=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var g=f(d.as,d.crossOrigin);a.d.M(p,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&a.d.M(p)},Bn.preload=function(p,d){if(typeof p=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var g=d.as,_=f(g,d.crossOrigin);a.d.L(p,g,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Bn.preloadModule=function(p,d){if(typeof p=="string")if(d){var g=f(d.as,d.crossOrigin);a.d.m(p,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else a.d.m(p)},Bn.requestFormReset=function(p){a.d.r(p)},Bn.unstable_batchedUpdates=function(p,d){return p(d)},Bn.useFormState=function(p,d,g){return u.H.useFormState(p,d,g)},Bn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Bn.version="19.2.4",Bn}var Uv;function fM(){if(Uv)return Wh.exports;Uv=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(t){console.error(t)}}return c(),Wh.exports=uM(),Wh.exports}var Lv;function hM(){if(Lv)return dl;Lv=1;var c=cM(),t=Cp(),n=fM();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var i=e,s=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(s=i.return),e=i.return;while(e)}return i.tag===3?s:null}function u(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function f(e){if(e.tag===31){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function p(e){if(o(e)!==e)throw Error(a(188))}function d(e){var i=e.alternate;if(!i){if(i=o(e),i===null)throw Error(a(188));return i!==e?null:e}for(var s=e,l=i;;){var h=s.return;if(h===null)break;var m=h.alternate;if(m===null){if(l=h.return,l!==null){s=l;continue}break}if(h.child===m.child){for(m=h.child;m;){if(m===s)return p(h),e;if(m===l)return p(h),i;m=m.sibling}throw Error(a(188))}if(s.return!==l.return)s=h,l=m;else{for(var E=!1,N=h.child;N;){if(N===s){E=!0,s=h,l=m;break}if(N===l){E=!0,l=h,s=m;break}N=N.sibling}if(!E){for(N=m.child;N;){if(N===s){E=!0,s=m,l=h;break}if(N===l){E=!0,l=m,s=h;break}N=N.sibling}if(!E)throw Error(a(189))}}if(s.alternate!==l)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?e:i}function g(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=g(e),i!==null)return i;e=e.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),T=Symbol.for("react.consumer"),R=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),O=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function $(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var V=Symbol.for("react.client.reference");function Q(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===V?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case b:return"Fragment";case x:return"Profiler";case S:return"StrictMode";case L:return"Suspense";case P:return"SuspenseList";case w:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case M:return"Portal";case R:return e.displayName||"Context";case T:return(e._context.displayName||"Context")+".Consumer";case D:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case B:return i=e.displayName||null,i!==null?i:Q(e.type)||"Memo";case W:i=e._payload,e=e._init;try{return Q(e(i))}catch{}}return null}var j=Array.isArray,z=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},ct=[],vt=-1;function F(e){return{current:e}}function Y(e){0>vt||(e.current=ct[vt],ct[vt]=null,vt--)}function mt(e,i){vt++,ct[vt]=e.current,e.current=i}var bt=F(null),It=F(null),nt=F(null),ft=F(null);function Ct(e,i){switch(mt(nt,i),mt(It,e),mt(bt,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?jg(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=jg(i),e=Zg(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Y(bt),mt(bt,e)}function kt(){Y(bt),Y(It),Y(nt)}function Gt(e){e.memoizedState!==null&&mt(ft,e);var i=bt.current,s=Zg(i,e.type);i!==s&&(mt(It,e),mt(bt,s))}function pe(e){It.current===e&&(Y(bt),Y(It)),ft.current===e&&(Y(ft),ll._currentValue=Z)}var Qe,oe;function ue(e){if(Qe===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);Qe=i&&i[1]||"",oe=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qe+e+oe}var Ae=!1;function le(e,i){if(!e||Ae)return"";Ae=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var Mt=function(){throw Error()};if(Object.defineProperty(Mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Mt,[])}catch(dt){var ot=dt}Reflect.construct(e,[],Mt)}else{try{Mt.call()}catch(dt){ot=dt}e.call(Mt.prototype)}}else{try{throw Error()}catch(dt){ot=dt}(Mt=e())&&typeof Mt.catch=="function"&&Mt.catch(function(){})}}catch(dt){if(dt&&ot&&typeof dt.stack=="string")return[dt.stack,ot.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),E=m[0],N=m[1];if(E&&N){var k=E.split(`
`),st=N.split(`
`);for(h=l=0;l<k.length&&!k[l].includes("DetermineComponentFrameRoot");)l++;for(;h<st.length&&!st[h].includes("DetermineComponentFrameRoot");)h++;if(l===k.length||h===st.length)for(l=k.length-1,h=st.length-1;1<=l&&0<=h&&k[l]!==st[h];)h--;for(;1<=l&&0<=h;l--,h--)if(k[l]!==st[h]){if(l!==1||h!==1)do if(l--,h--,0>h||k[l]!==st[h]){var _t=`
`+k[l].replace(" at new "," at ");return e.displayName&&_t.includes("<anonymous>")&&(_t=_t.replace("<anonymous>",e.displayName)),_t}while(1<=l&&0<=h);break}}}finally{Ae=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?ue(s):""}function Je(e,i){switch(e.tag){case 26:case 27:case 5:return ue(e.type);case 16:return ue("Lazy");case 13:return e.child!==i&&i!==null?ue("Suspense Fallback"):ue("Suspense");case 19:return ue("SuspenseList");case 0:case 15:return le(e.type,!1);case 11:return le(e.type.render,!1);case 1:return le(e.type,!0);case 31:return ue("Activity");default:return""}}function X(e){try{var i="",s=null;do i+=Je(e,s),s=e,e=e.return;while(e);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var je=Object.prototype.hasOwnProperty,ve=c.unstable_scheduleCallback,Se=c.unstable_cancelCallback,jt=c.unstable_shouldYield,I=c.unstable_requestPaint,A=c.unstable_now,J=c.unstable_getCurrentPriorityLevel,xt=c.unstable_ImmediatePriority,Tt=c.unstable_UserBlockingPriority,pt=c.unstable_NormalPriority,Zt=c.unstable_LowPriority,Lt=c.unstable_IdlePriority,qt=c.log,ie=c.unstable_setDisableYieldValue,ht=null,gt=null;function Nt(e){if(typeof qt=="function"&&ie(e),gt&&typeof gt.setStrictMode=="function")try{gt.setStrictMode(ht,e)}catch{}}var wt=Math.clz32?Math.clz32:q,Et=Math.log,$t=Math.LN2;function q(e){return e>>>=0,e===0?32:31-(Et(e)/$t|0)|0}var Ut=256,Rt=262144,Ot=4194304;function At(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function yt(e,i,s){var l=e.pendingLanes;if(l===0)return 0;var h=0,m=e.suspendedLanes,E=e.pingedLanes;e=e.warmLanes;var N=l&134217727;return N!==0?(l=N&~m,l!==0?h=At(l):(E&=N,E!==0?h=At(E):s||(s=N&~e,s!==0&&(h=At(s))))):(N=l&~m,N!==0?h=At(N):E!==0?h=At(E):s||(s=l&~e,s!==0&&(h=At(s)))),h===0?0:i!==0&&i!==h&&(i&m)===0&&(m=h&-h,s=i&-i,m>=s||m===32&&(s&4194048)!==0)?i:h}function Dt(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function ae(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function He(){var e=Ot;return Ot<<=1,(Ot&62914560)===0&&(Ot=4194304),e}function we(e){for(var i=[],s=0;31>s;s++)i.push(e);return i}function Pn(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function bi(e,i,s,l,h,m){var E=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var N=e.entanglements,k=e.expirationTimes,st=e.hiddenUpdates;for(s=E&~s;0<s;){var _t=31-wt(s),Mt=1<<_t;N[_t]=0,k[_t]=-1;var ot=st[_t];if(ot!==null)for(st[_t]=null,_t=0;_t<ot.length;_t++){var dt=ot[_t];dt!==null&&(dt.lane&=-536870913)}s&=~Mt}l!==0&&Il(e,l,0),m!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=m&~(E&~i))}function Il(e,i,s){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-wt(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|s&261930}function yo(e,i){var s=e.entangledLanes|=i;for(e=e.entanglements;s;){var l=31-wt(s),h=1<<l;h&i|e[l]&i&&(e[l]|=i),s&=~h}}function or(e,i){var s=i&-i;return s=(s&42)!==0?1:So(s),(s&(e.suspendedLanes|i))!==0?0:s}function So(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function lr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Mo(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:_v(e.type))}function Gi(e,i){var s=H.p;try{return H.p=e,i()}finally{H.p=s}}var hi=Math.random().toString(36).slice(2),fn="__reactFiber$"+hi,bn="__reactProps$"+hi,Ti="__reactContainer$"+hi,cr="__reactEvents$"+hi,ur="__reactListeners$"+hi,Hl="__reactHandles$"+hi,Eo="__reactResources$"+hi,As="__reactMarker$"+hi;function bo(e){delete e[fn],delete e[bn],delete e[cr],delete e[ur],delete e[Hl]}function Va(e){var i=e[fn];if(i)return i;for(var s=e.parentNode;s;){if(i=s[Ti]||s[fn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(e=nv(e);e!==null;){if(s=e[fn])return s;e=nv(e)}return i}e=s,s=e.parentNode}return null}function ka(e){if(e=e[fn]||e[Ti]){var i=e.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return e}return null}function ws(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function qa(e){var i=e[Eo];return i||(i=e[Eo]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function U(e){e[As]=!0}var tt=new Set,ut={};function rt(e,i){it(e,i),it(e+"Capture",i)}function it(e,i){for(ut[e]=i,e=0;e<i.length;e++)tt.add(i[e])}var zt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Vt={},Pt={};function Xt(e){return je.call(Pt,e)?!0:je.call(Vt,e)?!1:zt.test(e)?Pt[e]=!0:(Vt[e]=!0,!1)}function Kt(e,i,s){if(Xt(i))if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+s)}}function ne(e,i,s){if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+s)}}function Qt(e,i,s,l){if(l===null)e.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(i,s,""+l)}}function se(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ze(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function nn(e,i,s){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);if(!e.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var h=l.get,m=l.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return h.call(this)},set:function(E){s=""+E,m.call(this,E)}}),Object.defineProperty(e,i,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(E){s=""+E},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function Ke(e){if(!e._valueTracker){var i=ze(e)?"checked":"value";e._valueTracker=nn(e,i,""+e[i])}}function Ie(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return e&&(l=ze(e)?e.checked?"true":"false":e.value),e=l,e!==s?(i.setValue(e),!0):!1}function te(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Pe=/[\n"\\]/g;function ce(e){return e.replace(Pe,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Tn(e,i,s,l,h,m,E,N){e.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.type=E:e.removeAttribute("type"),i!=null?E==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+se(i)):e.value!==""+se(i)&&(e.value=""+se(i)):E!=="submit"&&E!=="reset"||e.removeAttribute("value"),i!=null?An(e,E,se(i)):s!=null?An(e,E,se(s)):l!=null&&e.removeAttribute("value"),h==null&&m!=null&&(e.defaultChecked=!!m),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),N!=null&&typeof N!="function"&&typeof N!="symbol"&&typeof N!="boolean"?e.name=""+se(N):e.removeAttribute("name")}function ra(e,i,s,l,h,m,E,N){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),i!=null||s!=null){if(!(m!=="submit"&&m!=="reset"||i!=null)){Ke(e);return}s=s!=null?""+se(s):"",i=i!=null?""+se(i):s,N||i===e.value||(e.value=i),e.defaultValue=i}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=N?e.checked:!!l,e.defaultChecked=!!l,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(e.name=E),Ke(e)}function An(e,i,s){i==="number"&&te(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function di(e,i,s,l){if(e=e.options,i){i={};for(var h=0;h<s.length;h++)i["$"+s[h]]=!0;for(s=0;s<e.length;s++)h=i.hasOwnProperty("$"+e[s].value),e[s].selected!==h&&(e[s].selected=h),h&&l&&(e[s].defaultSelected=!0)}else{for(s=""+se(s),i=null,h=0;h<e.length;h++){if(e[h].value===s){e[h].selected=!0,l&&(e[h].defaultSelected=!0);return}i!==null||e[h].disabled||(i=e[h])}i!==null&&(i.selected=!0)}}function Ge(e,i,s){if(i!=null&&(i=""+se(i),i!==e.value&&(e.value=i),s==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=s!=null?""+se(s):""}function wn(e,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(a(92));if(j(l)){if(1<l.length)throw Error(a(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=se(i),e.defaultValue=s,l=e.textContent,l===s&&l!==""&&l!==null&&(e.value=l),Ke(e)}function vn(e,i){if(i){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=i;return}}e.textContent=i}var Rn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Cn(e,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,s):typeof s!="number"||s===0||Rn.has(i)?i==="float"?e.cssFloat=s:e[i]=(""+s).trim():e[i]=s+"px"}function fr(e,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var h in i)l=i[h],i.hasOwnProperty(h)&&s[h]!==l&&Cn(e,h,l)}else for(var m in i)i.hasOwnProperty(m)&&Cn(e,m,i[m])}function Ai(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ey=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ny=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Gl(e){return ny.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function oa(){}var Bu=null;function Fu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var hr=null,dr=null;function Yp(e){var i=ka(e);if(i&&(e=i.stateNode)){var s=e[bn]||null;t:switch(e=i.stateNode,i.type){case"input":if(Tn(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+ce(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==e&&l.form===e.form){var h=l[bn]||null;if(!h)throw Error(a(90));Tn(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===e.form&&Ie(l)}break t;case"textarea":Ge(e,s.value,s.defaultValue);break t;case"select":i=s.value,i!=null&&di(e,!!s.multiple,i,!1)}}}var Iu=!1;function jp(e,i,s){if(Iu)return e(i,s);Iu=!0;try{var l=e(i);return l}finally{if(Iu=!1,(hr!==null||dr!==null)&&(Rc(),hr&&(i=hr,e=dr,dr=hr=null,Yp(i),e)))for(i=0;i<e.length;i++)Yp(e[i])}}function To(e,i){var s=e.stateNode;if(s===null)return null;var l=s[bn]||null;if(l===null)return null;s=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var la=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hu=!1;if(la)try{var Ao={};Object.defineProperty(Ao,"passive",{get:function(){Hu=!0}}),window.addEventListener("test",Ao,Ao),window.removeEventListener("test",Ao,Ao)}catch{Hu=!1}var Xa=null,Gu=null,Vl=null;function Zp(){if(Vl)return Vl;var e,i=Gu,s=i.length,l,h="value"in Xa?Xa.value:Xa.textContent,m=h.length;for(e=0;e<s&&i[e]===h[e];e++);var E=s-e;for(l=1;l<=E&&i[s-l]===h[m-l];l++);return Vl=h.slice(e,1<l?1-l:void 0)}function kl(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function ql(){return!0}function Kp(){return!1}function Xn(e){function i(s,l,h,m,E){this._reactName=s,this._targetInst=h,this.type=l,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var N in e)e.hasOwnProperty(N)&&(s=e[N],this[N]=s?s(m):m[N]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?ql:Kp,this.isPropagationStopped=Kp,this}return _(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=ql)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=ql)},persist:function(){},isPersistent:ql}),i}var Rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xl=Xn(Rs),wo=_({},Rs,{view:0,detail:0}),iy=Xn(wo),Vu,ku,Ro,Wl=_({},wo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ro&&(Ro&&e.type==="mousemove"?(Vu=e.screenX-Ro.screenX,ku=e.screenY-Ro.screenY):ku=Vu=0,Ro=e),Vu)},movementY:function(e){return"movementY"in e?e.movementY:ku}}),Qp=Xn(Wl),ay=_({},Wl,{dataTransfer:0}),sy=Xn(ay),ry=_({},wo,{relatedTarget:0}),qu=Xn(ry),oy=_({},Rs,{animationName:0,elapsedTime:0,pseudoElement:0}),ly=Xn(oy),cy=_({},Rs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),uy=Xn(cy),fy=_({},Rs,{data:0}),Jp=Xn(fy),hy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},py={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function my(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=py[e])?!!i[e]:!1}function Xu(){return my}var gy=_({},wo,{key:function(e){if(e.key){var i=hy[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=kl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?dy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xu,charCode:function(e){return e.type==="keypress"?kl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?kl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),vy=Xn(gy),_y=_({},Wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$p=Xn(_y),xy=_({},wo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xu}),yy=Xn(xy),Sy=_({},Rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),My=Xn(Sy),Ey=_({},Wl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),by=Xn(Ey),Ty=_({},Rs,{newState:0,oldState:0}),Ay=Xn(Ty),wy=[9,13,27,32],Wu=la&&"CompositionEvent"in window,Co=null;la&&"documentMode"in document&&(Co=document.documentMode);var Ry=la&&"TextEvent"in window&&!Co,tm=la&&(!Wu||Co&&8<Co&&11>=Co),em=" ",nm=!1;function im(e,i){switch(e){case"keyup":return wy.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function am(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var pr=!1;function Cy(e,i){switch(e){case"compositionend":return am(i);case"keypress":return i.which!==32?null:(nm=!0,em);case"textInput":return e=i.data,e===em&&nm?null:e;default:return null}}function Dy(e,i){if(pr)return e==="compositionend"||!Wu&&im(e,i)?(e=Zp(),Vl=Gu=Xa=null,pr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return tm&&i.locale!=="ko"?null:i.data;default:return null}}var Ny={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sm(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!Ny[e.type]:i==="textarea"}function rm(e,i,s,l){hr?dr?dr.push(l):dr=[l]:hr=l,i=zc(i,"onChange"),0<i.length&&(s=new Xl("onChange","change",null,s,l),e.push({event:s,listeners:i}))}var Do=null,No=null;function Uy(e){Vg(e,0)}function Yl(e){var i=ws(e);if(Ie(i))return e}function om(e,i){if(e==="change")return i}var lm=!1;if(la){var Yu;if(la){var ju="oninput"in document;if(!ju){var cm=document.createElement("div");cm.setAttribute("oninput","return;"),ju=typeof cm.oninput=="function"}Yu=ju}else Yu=!1;lm=Yu&&(!document.documentMode||9<document.documentMode)}function um(){Do&&(Do.detachEvent("onpropertychange",fm),No=Do=null)}function fm(e){if(e.propertyName==="value"&&Yl(No)){var i=[];rm(i,No,e,Fu(e)),jp(Uy,i)}}function Ly(e,i,s){e==="focusin"?(um(),Do=i,No=s,Do.attachEvent("onpropertychange",fm)):e==="focusout"&&um()}function Oy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Yl(No)}function zy(e,i){if(e==="click")return Yl(i)}function Py(e,i){if(e==="input"||e==="change")return Yl(i)}function By(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var ei=typeof Object.is=="function"?Object.is:By;function Uo(e,i){if(ei(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var s=Object.keys(e),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var h=s[l];if(!je.call(i,h)||!ei(e[h],i[h]))return!1}return!0}function hm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function dm(e,i){var s=hm(e);e=0;for(var l;s;){if(s.nodeType===3){if(l=e+s.textContent.length,e<=i&&l>=i)return{node:s,offset:i-e};e=l}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=hm(s)}}function pm(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?pm(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function mm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=te(e.document);i instanceof e.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)e=i.contentWindow;else break;i=te(e.document)}return i}function Zu(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var Fy=la&&"documentMode"in document&&11>=document.documentMode,mr=null,Ku=null,Lo=null,Qu=!1;function gm(e,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Qu||mr==null||mr!==te(l)||(l=mr,"selectionStart"in l&&Zu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Lo&&Uo(Lo,l)||(Lo=l,l=zc(Ku,"onSelect"),0<l.length&&(i=new Xl("onSelect","select",null,i,s),e.push({event:i,listeners:l}),i.target=mr)))}function Cs(e,i){var s={};return s[e.toLowerCase()]=i.toLowerCase(),s["Webkit"+e]="webkit"+i,s["Moz"+e]="moz"+i,s}var gr={animationend:Cs("Animation","AnimationEnd"),animationiteration:Cs("Animation","AnimationIteration"),animationstart:Cs("Animation","AnimationStart"),transitionrun:Cs("Transition","TransitionRun"),transitionstart:Cs("Transition","TransitionStart"),transitioncancel:Cs("Transition","TransitionCancel"),transitionend:Cs("Transition","TransitionEnd")},Ju={},vm={};la&&(vm=document.createElement("div").style,"AnimationEvent"in window||(delete gr.animationend.animation,delete gr.animationiteration.animation,delete gr.animationstart.animation),"TransitionEvent"in window||delete gr.transitionend.transition);function Ds(e){if(Ju[e])return Ju[e];if(!gr[e])return e;var i=gr[e],s;for(s in i)if(i.hasOwnProperty(s)&&s in vm)return Ju[e]=i[s];return e}var _m=Ds("animationend"),xm=Ds("animationiteration"),ym=Ds("animationstart"),Iy=Ds("transitionrun"),Hy=Ds("transitionstart"),Gy=Ds("transitioncancel"),Sm=Ds("transitionend"),Mm=new Map,$u="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");$u.push("scrollEnd");function wi(e,i){Mm.set(e,i),rt(i,[e])}var jl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},pi=[],vr=0,tf=0;function Zl(){for(var e=vr,i=tf=vr=0;i<e;){var s=pi[i];pi[i++]=null;var l=pi[i];pi[i++]=null;var h=pi[i];pi[i++]=null;var m=pi[i];if(pi[i++]=null,l!==null&&h!==null){var E=l.pending;E===null?h.next=h:(h.next=E.next,E.next=h),l.pending=h}m!==0&&Em(s,h,m)}}function Kl(e,i,s,l){pi[vr++]=e,pi[vr++]=i,pi[vr++]=s,pi[vr++]=l,tf|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function ef(e,i,s,l){return Kl(e,i,s,l),Ql(e)}function Ns(e,i){return Kl(e,null,null,i),Ql(e)}function Em(e,i,s){e.lanes|=s;var l=e.alternate;l!==null&&(l.lanes|=s);for(var h=!1,m=e.return;m!==null;)m.childLanes|=s,l=m.alternate,l!==null&&(l.childLanes|=s),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(h=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,h&&i!==null&&(h=31-wt(s),e=m.hiddenUpdates,l=e[h],l===null?e[h]=[i]:l.push(i),i.lane=s|536870912),m):null}function Ql(e){if(50<el)throw el=0,fh=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var _r={};function Vy(e,i,s,l){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ni(e,i,s,l){return new Vy(e,i,s,l)}function nf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ca(e,i){var s=e.alternate;return s===null?(s=ni(e.tag,i,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=i,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,i=e.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function bm(e,i){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,i=s.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Jl(e,i,s,l,h,m){var E=0;if(l=e,typeof e=="function")nf(e)&&(E=1);else if(typeof e=="string")E=YS(e,s,bt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case w:return e=ni(31,s,i,h),e.elementType=w,e.lanes=m,e;case b:return Us(s.children,h,m,i);case S:E=8,h|=24;break;case x:return e=ni(12,s,i,h|2),e.elementType=x,e.lanes=m,e;case L:return e=ni(13,s,i,h),e.elementType=L,e.lanes=m,e;case P:return e=ni(19,s,i,h),e.elementType=P,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case R:E=10;break t;case T:E=9;break t;case D:E=11;break t;case B:E=14;break t;case W:E=16,l=null;break t}E=29,s=Error(a(130,e===null?"null":typeof e,"")),l=null}return i=ni(E,s,i,h),i.elementType=e,i.type=l,i.lanes=m,i}function Us(e,i,s,l){return e=ni(7,e,l,i),e.lanes=s,e}function af(e,i,s){return e=ni(6,e,null,i),e.lanes=s,e}function Tm(e){var i=ni(18,null,null,0);return i.stateNode=e,i}function sf(e,i,s){return i=ni(4,e.children!==null?e.children:[],e.key,i),i.lanes=s,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var Am=new WeakMap;function mi(e,i){if(typeof e=="object"&&e!==null){var s=Am.get(e);return s!==void 0?s:(i={value:e,source:i,stack:X(i)},Am.set(e,i),i)}return{value:e,source:i,stack:X(i)}}var xr=[],yr=0,$l=null,Oo=0,gi=[],vi=0,Wa=null,Vi=1,ki="";function ua(e,i){xr[yr++]=Oo,xr[yr++]=$l,$l=e,Oo=i}function wm(e,i,s){gi[vi++]=Vi,gi[vi++]=ki,gi[vi++]=Wa,Wa=e;var l=Vi;e=ki;var h=32-wt(l)-1;l&=~(1<<h),s+=1;var m=32-wt(i)+h;if(30<m){var E=h-h%5;m=(l&(1<<E)-1).toString(32),l>>=E,h-=E,Vi=1<<32-wt(i)+h|s<<h|l,ki=m+e}else Vi=1<<m|s<<h|l,ki=e}function rf(e){e.return!==null&&(ua(e,1),wm(e,1,0))}function of(e){for(;e===$l;)$l=xr[--yr],xr[yr]=null,Oo=xr[--yr],xr[yr]=null;for(;e===Wa;)Wa=gi[--vi],gi[vi]=null,ki=gi[--vi],gi[vi]=null,Vi=gi[--vi],gi[vi]=null}function Rm(e,i){gi[vi++]=Vi,gi[vi++]=ki,gi[vi++]=Wa,Vi=i.id,ki=i.overflow,Wa=e}var Dn=null,$e=null,be=!1,Ya=null,_i=!1,lf=Error(a(519));function ja(e){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw zo(mi(i,e)),lf}function Cm(e){var i=e.stateNode,s=e.type,l=e.memoizedProps;switch(i[fn]=e,i[bn]=l,s){case"dialog":ye("cancel",i),ye("close",i);break;case"iframe":case"object":case"embed":ye("load",i);break;case"video":case"audio":for(s=0;s<il.length;s++)ye(il[s],i);break;case"source":ye("error",i);break;case"img":case"image":case"link":ye("error",i),ye("load",i);break;case"details":ye("toggle",i);break;case"input":ye("invalid",i),ra(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":ye("invalid",i);break;case"textarea":ye("invalid",i),wn(i,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||Wg(i.textContent,s)?(l.popover!=null&&(ye("beforetoggle",i),ye("toggle",i)),l.onScroll!=null&&ye("scroll",i),l.onScrollEnd!=null&&ye("scrollend",i),l.onClick!=null&&(i.onclick=oa),i=!0):i=!1,i||ja(e,!0)}function Dm(e){for(Dn=e.return;Dn;)switch(Dn.tag){case 5:case 31:case 13:_i=!1;return;case 27:case 3:_i=!0;return;default:Dn=Dn.return}}function Sr(e){if(e!==Dn)return!1;if(!be)return Dm(e),be=!0,!1;var i=e.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||Ah(e.type,e.memoizedProps)),s=!s),s&&$e&&ja(e),Dm(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));$e=ev(e)}else if(i===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));$e=ev(e)}else i===27?(i=$e,ls(e.type)?(e=Nh,Nh=null,$e=e):$e=i):$e=Dn?yi(e.stateNode.nextSibling):null;return!0}function Ls(){$e=Dn=null,be=!1}function cf(){var e=Ya;return e!==null&&(Zn===null?Zn=e:Zn.push.apply(Zn,e),Ya=null),e}function zo(e){Ya===null?Ya=[e]:Ya.push(e)}var uf=F(null),Os=null,fa=null;function Za(e,i,s){mt(uf,i._currentValue),i._currentValue=s}function ha(e){e._currentValue=uf.current,Y(uf)}function ff(e,i,s){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===s)break;e=e.return}}function hf(e,i,s,l){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var m=h.dependencies;if(m!==null){var E=h.child;m=m.firstContext;t:for(;m!==null;){var N=m;m=h;for(var k=0;k<i.length;k++)if(N.context===i[k]){m.lanes|=s,N=m.alternate,N!==null&&(N.lanes|=s),ff(m.return,s,e),l||(E=null);break t}m=N.next}}else if(h.tag===18){if(E=h.return,E===null)throw Error(a(341));E.lanes|=s,m=E.alternate,m!==null&&(m.lanes|=s),ff(E,s,e),E=null}else E=h.child;if(E!==null)E.return=h;else for(E=h;E!==null;){if(E===e){E=null;break}if(h=E.sibling,h!==null){h.return=E.return,E=h;break}E=E.return}h=E}}function Mr(e,i,s,l){e=null;for(var h=i,m=!1;h!==null;){if(!m){if((h.flags&524288)!==0)m=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var E=h.alternate;if(E===null)throw Error(a(387));if(E=E.memoizedProps,E!==null){var N=h.type;ei(h.pendingProps.value,E.value)||(e!==null?e.push(N):e=[N])}}else if(h===ft.current){if(E=h.alternate,E===null)throw Error(a(387));E.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(ll):e=[ll])}h=h.return}e!==null&&hf(i,e,s,l),i.flags|=262144}function tc(e){for(e=e.firstContext;e!==null;){if(!ei(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function zs(e){Os=e,fa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Nn(e){return Nm(Os,e)}function ec(e,i){return Os===null&&zs(e),Nm(e,i)}function Nm(e,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},fa===null){if(e===null)throw Error(a(308));fa=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else fa=fa.next=i;return s}var ky=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(s,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(s){return s()})}},qy=c.unstable_scheduleCallback,Xy=c.unstable_NormalPriority,hn={$$typeof:R,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function df(){return{controller:new ky,data:new Map,refCount:0}}function Po(e){e.refCount--,e.refCount===0&&qy(Xy,function(){e.controller.abort()})}var Bo=null,pf=0,Er=0,br=null;function Wy(e,i){if(Bo===null){var s=Bo=[];pf=0,Er=vh(),br={status:"pending",value:void 0,then:function(l){s.push(l)}}}return pf++,i.then(Um,Um),i}function Um(){if(--pf===0&&Bo!==null){br!==null&&(br.status="fulfilled");var e=Bo;Bo=null,Er=0,br=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function Yy(e,i){var s=[],l={status:"pending",value:null,reason:null,then:function(h){s.push(h)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var h=0;h<s.length;h++)(0,s[h])(i)},function(h){for(l.status="rejected",l.reason=h,h=0;h<s.length;h++)(0,s[h])(void 0)}),l}var Lm=z.S;z.S=function(e,i){gg=A(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&Wy(e,i),Lm!==null&&Lm(e,i)};var Ps=F(null);function mf(){var e=Ps.current;return e!==null?e:Ze.pooledCache}function nc(e,i){i===null?mt(Ps,Ps.current):mt(Ps,i.pool)}function Om(){var e=mf();return e===null?null:{parent:hn._currentValue,pool:e}}var Tr=Error(a(460)),gf=Error(a(474)),ic=Error(a(542)),ac={then:function(){}};function zm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Pm(e,i,s){switch(s=e[s],s===void 0?e.push(i):s!==i&&(i.then(oa,oa),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Fm(e),e;default:if(typeof i.status=="string")i.then(oa,oa);else{if(e=Ze,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=l}},function(l){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Fm(e),e}throw Fs=i,Tr}}function Bs(e){try{var i=e._init;return i(e._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(Fs=s,Tr):s}}var Fs=null;function Bm(){if(Fs===null)throw Error(a(459));var e=Fs;return Fs=null,e}function Fm(e){if(e===Tr||e===ic)throw Error(a(483))}var Ar=null,Fo=0;function sc(e){var i=Fo;return Fo+=1,Ar===null&&(Ar=[]),Pm(Ar,e,i)}function Io(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function rc(e,i){throw i.$$typeof===v?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function Im(e){function i(et,K){if(e){var at=et.deletions;at===null?(et.deletions=[K],et.flags|=16):at.push(K)}}function s(et,K){if(!e)return null;for(;K!==null;)i(et,K),K=K.sibling;return null}function l(et){for(var K=new Map;et!==null;)et.key!==null?K.set(et.key,et):K.set(et.index,et),et=et.sibling;return K}function h(et,K){return et=ca(et,K),et.index=0,et.sibling=null,et}function m(et,K,at){return et.index=at,e?(at=et.alternate,at!==null?(at=at.index,at<K?(et.flags|=67108866,K):at):(et.flags|=67108866,K)):(et.flags|=1048576,K)}function E(et){return e&&et.alternate===null&&(et.flags|=67108866),et}function N(et,K,at,St){return K===null||K.tag!==6?(K=af(at,et.mode,St),K.return=et,K):(K=h(K,at),K.return=et,K)}function k(et,K,at,St){var ee=at.type;return ee===b?_t(et,K,at.props.children,St,at.key):K!==null&&(K.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===W&&Bs(ee)===K.type)?(K=h(K,at.props),Io(K,at),K.return=et,K):(K=Jl(at.type,at.key,at.props,null,et.mode,St),Io(K,at),K.return=et,K)}function st(et,K,at,St){return K===null||K.tag!==4||K.stateNode.containerInfo!==at.containerInfo||K.stateNode.implementation!==at.implementation?(K=sf(at,et.mode,St),K.return=et,K):(K=h(K,at.children||[]),K.return=et,K)}function _t(et,K,at,St,ee){return K===null||K.tag!==7?(K=Us(at,et.mode,St,ee),K.return=et,K):(K=h(K,at),K.return=et,K)}function Mt(et,K,at){if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return K=af(""+K,et.mode,at),K.return=et,K;if(typeof K=="object"&&K!==null){switch(K.$$typeof){case y:return at=Jl(K.type,K.key,K.props,null,et.mode,at),Io(at,K),at.return=et,at;case M:return K=sf(K,et.mode,at),K.return=et,K;case W:return K=Bs(K),Mt(et,K,at)}if(j(K)||$(K))return K=Us(K,et.mode,at,null),K.return=et,K;if(typeof K.then=="function")return Mt(et,sc(K),at);if(K.$$typeof===R)return Mt(et,ec(et,K),at);rc(et,K)}return null}function ot(et,K,at,St){var ee=K!==null?K.key:null;if(typeof at=="string"&&at!==""||typeof at=="number"||typeof at=="bigint")return ee!==null?null:N(et,K,""+at,St);if(typeof at=="object"&&at!==null){switch(at.$$typeof){case y:return at.key===ee?k(et,K,at,St):null;case M:return at.key===ee?st(et,K,at,St):null;case W:return at=Bs(at),ot(et,K,at,St)}if(j(at)||$(at))return ee!==null?null:_t(et,K,at,St,null);if(typeof at.then=="function")return ot(et,K,sc(at),St);if(at.$$typeof===R)return ot(et,K,ec(et,at),St);rc(et,at)}return null}function dt(et,K,at,St,ee){if(typeof St=="string"&&St!==""||typeof St=="number"||typeof St=="bigint")return et=et.get(at)||null,N(K,et,""+St,ee);if(typeof St=="object"&&St!==null){switch(St.$$typeof){case y:return et=et.get(St.key===null?at:St.key)||null,k(K,et,St,ee);case M:return et=et.get(St.key===null?at:St.key)||null,st(K,et,St,ee);case W:return St=Bs(St),dt(et,K,at,St,ee)}if(j(St)||$(St))return et=et.get(at)||null,_t(K,et,St,ee,null);if(typeof St.then=="function")return dt(et,K,at,sc(St),ee);if(St.$$typeof===R)return dt(et,K,at,ec(K,St),ee);rc(K,St)}return null}function Wt(et,K,at,St){for(var ee=null,De=null,Jt=K,me=K=0,Ee=null;Jt!==null&&me<at.length;me++){Jt.index>me?(Ee=Jt,Jt=null):Ee=Jt.sibling;var Ne=ot(et,Jt,at[me],St);if(Ne===null){Jt===null&&(Jt=Ee);break}e&&Jt&&Ne.alternate===null&&i(et,Jt),K=m(Ne,K,me),De===null?ee=Ne:De.sibling=Ne,De=Ne,Jt=Ee}if(me===at.length)return s(et,Jt),be&&ua(et,me),ee;if(Jt===null){for(;me<at.length;me++)Jt=Mt(et,at[me],St),Jt!==null&&(K=m(Jt,K,me),De===null?ee=Jt:De.sibling=Jt,De=Jt);return be&&ua(et,me),ee}for(Jt=l(Jt);me<at.length;me++)Ee=dt(Jt,et,me,at[me],St),Ee!==null&&(e&&Ee.alternate!==null&&Jt.delete(Ee.key===null?me:Ee.key),K=m(Ee,K,me),De===null?ee=Ee:De.sibling=Ee,De=Ee);return e&&Jt.forEach(function(ds){return i(et,ds)}),be&&ua(et,me),ee}function re(et,K,at,St){if(at==null)throw Error(a(151));for(var ee=null,De=null,Jt=K,me=K=0,Ee=null,Ne=at.next();Jt!==null&&!Ne.done;me++,Ne=at.next()){Jt.index>me?(Ee=Jt,Jt=null):Ee=Jt.sibling;var ds=ot(et,Jt,Ne.value,St);if(ds===null){Jt===null&&(Jt=Ee);break}e&&Jt&&ds.alternate===null&&i(et,Jt),K=m(ds,K,me),De===null?ee=ds:De.sibling=ds,De=ds,Jt=Ee}if(Ne.done)return s(et,Jt),be&&ua(et,me),ee;if(Jt===null){for(;!Ne.done;me++,Ne=at.next())Ne=Mt(et,Ne.value,St),Ne!==null&&(K=m(Ne,K,me),De===null?ee=Ne:De.sibling=Ne,De=Ne);return be&&ua(et,me),ee}for(Jt=l(Jt);!Ne.done;me++,Ne=at.next())Ne=dt(Jt,et,me,Ne.value,St),Ne!==null&&(e&&Ne.alternate!==null&&Jt.delete(Ne.key===null?me:Ne.key),K=m(Ne,K,me),De===null?ee=Ne:De.sibling=Ne,De=Ne);return e&&Jt.forEach(function(aM){return i(et,aM)}),be&&ua(et,me),ee}function Ye(et,K,at,St){if(typeof at=="object"&&at!==null&&at.type===b&&at.key===null&&(at=at.props.children),typeof at=="object"&&at!==null){switch(at.$$typeof){case y:t:{for(var ee=at.key;K!==null;){if(K.key===ee){if(ee=at.type,ee===b){if(K.tag===7){s(et,K.sibling),St=h(K,at.props.children),St.return=et,et=St;break t}}else if(K.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===W&&Bs(ee)===K.type){s(et,K.sibling),St=h(K,at.props),Io(St,at),St.return=et,et=St;break t}s(et,K);break}else i(et,K);K=K.sibling}at.type===b?(St=Us(at.props.children,et.mode,St,at.key),St.return=et,et=St):(St=Jl(at.type,at.key,at.props,null,et.mode,St),Io(St,at),St.return=et,et=St)}return E(et);case M:t:{for(ee=at.key;K!==null;){if(K.key===ee)if(K.tag===4&&K.stateNode.containerInfo===at.containerInfo&&K.stateNode.implementation===at.implementation){s(et,K.sibling),St=h(K,at.children||[]),St.return=et,et=St;break t}else{s(et,K);break}else i(et,K);K=K.sibling}St=sf(at,et.mode,St),St.return=et,et=St}return E(et);case W:return at=Bs(at),Ye(et,K,at,St)}if(j(at))return Wt(et,K,at,St);if($(at)){if(ee=$(at),typeof ee!="function")throw Error(a(150));return at=ee.call(at),re(et,K,at,St)}if(typeof at.then=="function")return Ye(et,K,sc(at),St);if(at.$$typeof===R)return Ye(et,K,ec(et,at),St);rc(et,at)}return typeof at=="string"&&at!==""||typeof at=="number"||typeof at=="bigint"?(at=""+at,K!==null&&K.tag===6?(s(et,K.sibling),St=h(K,at),St.return=et,et=St):(s(et,K),St=af(at,et.mode,St),St.return=et,et=St),E(et)):s(et,K)}return function(et,K,at,St){try{Fo=0;var ee=Ye(et,K,at,St);return Ar=null,ee}catch(Jt){if(Jt===Tr||Jt===ic)throw Jt;var De=ni(29,Jt,null,et.mode);return De.lanes=St,De.return=et,De}}}var Is=Im(!0),Hm=Im(!1),Ka=!1;function vf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function _f(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Qa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ja(e,i,s){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Be&2)!==0){var h=l.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i,i=Ql(e),Em(e,null,s),i}return Kl(e,l,i,s),Ql(e)}function Ho(e,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=e.pendingLanes,s|=l,i.lanes=s,yo(e,s)}}function xf(e,i){var s=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var h=null,m=null;if(s=s.firstBaseUpdate,s!==null){do{var E={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};m===null?h=m=E:m=m.next=E,s=s.next}while(s!==null);m===null?h=m=i:m=m.next=i}else h=m=i;s={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=i:e.next=i,s.lastBaseUpdate=i}var yf=!1;function Go(){if(yf){var e=br;if(e!==null)throw e}}function Vo(e,i,s,l){yf=!1;var h=e.updateQueue;Ka=!1;var m=h.firstBaseUpdate,E=h.lastBaseUpdate,N=h.shared.pending;if(N!==null){h.shared.pending=null;var k=N,st=k.next;k.next=null,E===null?m=st:E.next=st,E=k;var _t=e.alternate;_t!==null&&(_t=_t.updateQueue,N=_t.lastBaseUpdate,N!==E&&(N===null?_t.firstBaseUpdate=st:N.next=st,_t.lastBaseUpdate=k))}if(m!==null){var Mt=h.baseState;E=0,_t=st=k=null,N=m;do{var ot=N.lane&-536870913,dt=ot!==N.lane;if(dt?(Me&ot)===ot:(l&ot)===ot){ot!==0&&ot===Er&&(yf=!0),_t!==null&&(_t=_t.next={lane:0,tag:N.tag,payload:N.payload,callback:null,next:null});t:{var Wt=e,re=N;ot=i;var Ye=s;switch(re.tag){case 1:if(Wt=re.payload,typeof Wt=="function"){Mt=Wt.call(Ye,Mt,ot);break t}Mt=Wt;break t;case 3:Wt.flags=Wt.flags&-65537|128;case 0:if(Wt=re.payload,ot=typeof Wt=="function"?Wt.call(Ye,Mt,ot):Wt,ot==null)break t;Mt=_({},Mt,ot);break t;case 2:Ka=!0}}ot=N.callback,ot!==null&&(e.flags|=64,dt&&(e.flags|=8192),dt=h.callbacks,dt===null?h.callbacks=[ot]:dt.push(ot))}else dt={lane:ot,tag:N.tag,payload:N.payload,callback:N.callback,next:null},_t===null?(st=_t=dt,k=Mt):_t=_t.next=dt,E|=ot;if(N=N.next,N===null){if(N=h.shared.pending,N===null)break;dt=N,N=dt.next,dt.next=null,h.lastBaseUpdate=dt,h.shared.pending=null}}while(!0);_t===null&&(k=Mt),h.baseState=k,h.firstBaseUpdate=st,h.lastBaseUpdate=_t,m===null&&(h.shared.lanes=0),is|=E,e.lanes=E,e.memoizedState=Mt}}function Gm(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function Vm(e,i){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)Gm(s[e],i)}var wr=F(null),oc=F(0);function km(e,i){e=Sa,mt(oc,e),mt(wr,i),Sa=e|i.baseLanes}function Sf(){mt(oc,Sa),mt(wr,wr.current)}function Mf(){Sa=oc.current,Y(wr),Y(oc)}var ii=F(null),xi=null;function $a(e){var i=e.alternate;mt(cn,cn.current&1),mt(ii,e),xi===null&&(i===null||wr.current!==null||i.memoizedState!==null)&&(xi=e)}function Ef(e){mt(cn,cn.current),mt(ii,e),xi===null&&(xi=e)}function qm(e){e.tag===22?(mt(cn,cn.current),mt(ii,e),xi===null&&(xi=e)):ts()}function ts(){mt(cn,cn.current),mt(ii,ii.current)}function ai(e){Y(ii),xi===e&&(xi=null),Y(cn)}var cn=F(0);function lc(e){for(var i=e;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||Ch(s)||Dh(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var da=0,de=null,Xe=null,dn=null,cc=!1,Rr=!1,Hs=!1,uc=0,ko=0,Cr=null,jy=0;function rn(){throw Error(a(321))}function bf(e,i){if(i===null)return!1;for(var s=0;s<i.length&&s<e.length;s++)if(!ei(e[s],i[s]))return!1;return!0}function Tf(e,i,s,l,h,m){return da=m,de=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,z.H=e===null||e.memoizedState===null?w0:Hf,Hs=!1,m=s(l,h),Hs=!1,Rr&&(m=Wm(i,s,l,h)),Xm(e),m}function Xm(e){z.H=Wo;var i=Xe!==null&&Xe.next!==null;if(da=0,dn=Xe=de=null,cc=!1,ko=0,Cr=null,i)throw Error(a(300));e===null||pn||(e=e.dependencies,e!==null&&tc(e)&&(pn=!0))}function Wm(e,i,s,l){de=e;var h=0;do{if(Rr&&(Cr=null),ko=0,Rr=!1,25<=h)throw Error(a(301));if(h+=1,dn=Xe=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}z.H=R0,m=i(s,l)}while(Rr);return m}function Zy(){var e=z.H,i=e.useState()[0];return i=typeof i.then=="function"?qo(i):i,e=e.useState()[0],(Xe!==null?Xe.memoizedState:null)!==e&&(de.flags|=1024),i}function Af(){var e=uc!==0;return uc=0,e}function wf(e,i,s){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~s}function Rf(e){if(cc){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}cc=!1}da=0,dn=Xe=de=null,Rr=!1,ko=uc=0,Cr=null}function Vn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dn===null?de.memoizedState=dn=e:dn=dn.next=e,dn}function un(){if(Xe===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=Xe.next;var i=dn===null?de.memoizedState:dn.next;if(i!==null)dn=i,Xe=e;else{if(e===null)throw de.alternate===null?Error(a(467)):Error(a(310));Xe=e,e={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},dn===null?de.memoizedState=dn=e:dn=dn.next=e}return dn}function fc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function qo(e){var i=ko;return ko+=1,Cr===null&&(Cr=[]),e=Pm(Cr,e,i),i=de,(dn===null?i.memoizedState:dn.next)===null&&(i=i.alternate,z.H=i===null||i.memoizedState===null?w0:Hf),e}function hc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return qo(e);if(e.$$typeof===R)return Nn(e)}throw Error(a(438,String(e)))}function Cf(e){var i=null,s=de.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=de.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=fc(),de.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(e),l=0;l<e;l++)s[l]=O;return i.index++,s}function pa(e,i){return typeof i=="function"?i(e):i}function dc(e){var i=un();return Df(i,Xe,e)}function Df(e,i,s){var l=e.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=s;var h=e.baseQueue,m=l.pending;if(m!==null){if(h!==null){var E=h.next;h.next=m.next,m.next=E}i.baseQueue=h=m,l.pending=null}if(m=e.baseState,h===null)e.memoizedState=m;else{i=h.next;var N=E=null,k=null,st=i,_t=!1;do{var Mt=st.lane&-536870913;if(Mt!==st.lane?(Me&Mt)===Mt:(da&Mt)===Mt){var ot=st.revertLane;if(ot===0)k!==null&&(k=k.next={lane:0,revertLane:0,gesture:null,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null}),Mt===Er&&(_t=!0);else if((da&ot)===ot){st=st.next,ot===Er&&(_t=!0);continue}else Mt={lane:0,revertLane:st.revertLane,gesture:null,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null},k===null?(N=k=Mt,E=m):k=k.next=Mt,de.lanes|=ot,is|=ot;Mt=st.action,Hs&&s(m,Mt),m=st.hasEagerState?st.eagerState:s(m,Mt)}else ot={lane:Mt,revertLane:st.revertLane,gesture:st.gesture,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null},k===null?(N=k=ot,E=m):k=k.next=ot,de.lanes|=Mt,is|=Mt;st=st.next}while(st!==null&&st!==i);if(k===null?E=m:k.next=N,!ei(m,e.memoizedState)&&(pn=!0,_t&&(s=br,s!==null)))throw s;e.memoizedState=m,e.baseState=E,e.baseQueue=k,l.lastRenderedState=m}return h===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Nf(e){var i=un(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=e;var l=s.dispatch,h=s.pending,m=i.memoizedState;if(h!==null){s.pending=null;var E=h=h.next;do m=e(m,E.action),E=E.next;while(E!==h);ei(m,i.memoizedState)||(pn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),s.lastRenderedState=m}return[m,l]}function Ym(e,i,s){var l=de,h=un(),m=be;if(m){if(s===void 0)throw Error(a(407));s=s()}else s=i();var E=!ei((Xe||h).memoizedState,s);if(E&&(h.memoizedState=s,pn=!0),h=h.queue,Of(Km.bind(null,l,h,e),[e]),h.getSnapshot!==i||E||dn!==null&&dn.memoizedState.tag&1){if(l.flags|=2048,Dr(9,{destroy:void 0},Zm.bind(null,l,h,s,i),null),Ze===null)throw Error(a(349));m||(da&127)!==0||jm(l,i,s)}return s}function jm(e,i,s){e.flags|=16384,e={getSnapshot:i,value:s},i=de.updateQueue,i===null?(i=fc(),de.updateQueue=i,i.stores=[e]):(s=i.stores,s===null?i.stores=[e]:s.push(e))}function Zm(e,i,s,l){i.value=s,i.getSnapshot=l,Qm(i)&&Jm(e)}function Km(e,i,s){return s(function(){Qm(i)&&Jm(e)})}function Qm(e){var i=e.getSnapshot;e=e.value;try{var s=i();return!ei(e,s)}catch{return!0}}function Jm(e){var i=Ns(e,2);i!==null&&Kn(i,e,2)}function Uf(e){var i=Vn();if(typeof e=="function"){var s=e;if(e=s(),Hs){Nt(!0);try{s()}finally{Nt(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:e},i}function $m(e,i,s,l){return e.baseState=s,Df(e,Xe,typeof l=="function"?l:pa)}function Ky(e,i,s,l,h){if(gc(e))throw Error(a(485));if(e=i.action,e!==null){var m={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){m.listeners.push(E)}};z.T!==null?s(!0):m.isTransition=!1,l(m),s=i.pending,s===null?(m.next=i.pending=m,t0(i,m)):(m.next=s.next,i.pending=s.next=m)}}function t0(e,i){var s=i.action,l=i.payload,h=e.state;if(i.isTransition){var m=z.T,E={};z.T=E;try{var N=s(h,l),k=z.S;k!==null&&k(E,N),e0(e,i,N)}catch(st){Lf(e,i,st)}finally{m!==null&&E.types!==null&&(m.types=E.types),z.T=m}}else try{m=s(h,l),e0(e,i,m)}catch(st){Lf(e,i,st)}}function e0(e,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){n0(e,i,l)},function(l){return Lf(e,i,l)}):n0(e,i,s)}function n0(e,i,s){i.status="fulfilled",i.value=s,i0(i),e.state=s,i=e.pending,i!==null&&(s=i.next,s===i?e.pending=null:(s=s.next,i.next=s,t0(e,s)))}function Lf(e,i,s){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,i0(i),i=i.next;while(i!==l)}e.action=null}function i0(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function a0(e,i){return i}function s0(e,i){if(be){var s=Ze.formState;if(s!==null){t:{var l=de;if(be){if($e){e:{for(var h=$e,m=_i;h.nodeType!==8;){if(!m){h=null;break e}if(h=yi(h.nextSibling),h===null){h=null;break e}}m=h.data,h=m==="F!"||m==="F"?h:null}if(h){$e=yi(h.nextSibling),l=h.data==="F!";break t}}ja(l)}l=!1}l&&(i=s[0])}}return s=Vn(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:a0,lastRenderedState:i},s.queue=l,s=b0.bind(null,de,l),l.dispatch=s,l=Uf(!1),m=If.bind(null,de,!1,l.queue),l=Vn(),h={state:i,dispatch:null,action:e,pending:null},l.queue=h,s=Ky.bind(null,de,h,m,s),h.dispatch=s,l.memoizedState=e,[i,s,!1]}function r0(e){var i=un();return o0(i,Xe,e)}function o0(e,i,s){if(i=Df(e,i,a0)[0],e=dc(pa)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=qo(i)}catch(E){throw E===Tr?ic:E}else l=i;i=un();var h=i.queue,m=h.dispatch;return s!==i.memoizedState&&(de.flags|=2048,Dr(9,{destroy:void 0},Qy.bind(null,h,s),null)),[l,m,e]}function Qy(e,i){e.action=i}function l0(e){var i=un(),s=Xe;if(s!==null)return o0(i,s,e);un(),i=i.memoizedState,s=un();var l=s.queue.dispatch;return s.memoizedState=e,[i,l,!1]}function Dr(e,i,s,l){return e={tag:e,create:s,deps:l,inst:i,next:null},i=de.updateQueue,i===null&&(i=fc(),de.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=e.next=e:(l=s.next,s.next=e,e.next=l,i.lastEffect=e),e}function c0(){return un().memoizedState}function pc(e,i,s,l){var h=Vn();de.flags|=e,h.memoizedState=Dr(1|i,{destroy:void 0},s,l===void 0?null:l)}function mc(e,i,s,l){var h=un();l=l===void 0?null:l;var m=h.memoizedState.inst;Xe!==null&&l!==null&&bf(l,Xe.memoizedState.deps)?h.memoizedState=Dr(i,m,s,l):(de.flags|=e,h.memoizedState=Dr(1|i,m,s,l))}function u0(e,i){pc(8390656,8,e,i)}function Of(e,i){mc(2048,8,e,i)}function Jy(e){de.flags|=4;var i=de.updateQueue;if(i===null)i=fc(),de.updateQueue=i,i.events=[e];else{var s=i.events;s===null?i.events=[e]:s.push(e)}}function f0(e){var i=un().memoizedState;return Jy({ref:i,nextImpl:e}),function(){if((Be&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function h0(e,i){return mc(4,2,e,i)}function d0(e,i){return mc(4,4,e,i)}function p0(e,i){if(typeof i=="function"){e=e();var s=i(e);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function m0(e,i,s){s=s!=null?s.concat([e]):null,mc(4,4,p0.bind(null,i,e),s)}function zf(){}function g0(e,i){var s=un();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&bf(i,l[1])?l[0]:(s.memoizedState=[e,i],e)}function v0(e,i){var s=un();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&bf(i,l[1]))return l[0];if(l=e(),Hs){Nt(!0);try{e()}finally{Nt(!1)}}return s.memoizedState=[l,i],l}function Pf(e,i,s){return s===void 0||(da&1073741824)!==0&&(Me&261930)===0?e.memoizedState=i:(e.memoizedState=s,e=_g(),de.lanes|=e,is|=e,s)}function _0(e,i,s,l){return ei(s,i)?s:wr.current!==null?(e=Pf(e,s,l),ei(e,i)||(pn=!0),e):(da&42)===0||(da&1073741824)!==0&&(Me&261930)===0?(pn=!0,e.memoizedState=s):(e=_g(),de.lanes|=e,is|=e,i)}function x0(e,i,s,l,h){var m=H.p;H.p=m!==0&&8>m?m:8;var E=z.T,N={};z.T=N,If(e,!1,i,s);try{var k=h(),st=z.S;if(st!==null&&st(N,k),k!==null&&typeof k=="object"&&typeof k.then=="function"){var _t=Yy(k,l);Xo(e,i,_t,oi(e))}else Xo(e,i,l,oi(e))}catch(Mt){Xo(e,i,{then:function(){},status:"rejected",reason:Mt},oi())}finally{H.p=m,E!==null&&N.types!==null&&(E.types=N.types),z.T=E}}function $y(){}function Bf(e,i,s,l){if(e.tag!==5)throw Error(a(476));var h=y0(e).queue;x0(e,h,i,Z,s===null?$y:function(){return S0(e),s(l)})}function y0(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:Z},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:s},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function S0(e){var i=y0(e);i.next===null&&(i=e.alternate.memoizedState),Xo(e,i.next.queue,{},oi())}function Ff(){return Nn(ll)}function M0(){return un().memoizedState}function E0(){return un().memoizedState}function tS(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var s=oi();e=Qa(s);var l=Ja(i,e,s);l!==null&&(Kn(l,i,s),Ho(l,i,s)),i={cache:df()},e.payload=i;return}i=i.return}}function eS(e,i,s){var l=oi();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},gc(e)?T0(i,s):(s=ef(e,i,s,l),s!==null&&(Kn(s,e,l),A0(s,i,l)))}function b0(e,i,s){var l=oi();Xo(e,i,s,l)}function Xo(e,i,s,l){var h={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(gc(e))T0(i,h);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var E=i.lastRenderedState,N=m(E,s);if(h.hasEagerState=!0,h.eagerState=N,ei(N,E))return Kl(e,i,h,0),Ze===null&&Zl(),!1}catch{}if(s=ef(e,i,h,l),s!==null)return Kn(s,e,l),A0(s,i,l),!0}return!1}function If(e,i,s,l){if(l={lane:2,revertLane:vh(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},gc(e)){if(i)throw Error(a(479))}else i=ef(e,s,l,2),i!==null&&Kn(i,e,2)}function gc(e){var i=e.alternate;return e===de||i!==null&&i===de}function T0(e,i){Rr=cc=!0;var s=e.pending;s===null?i.next=i:(i.next=s.next,s.next=i),e.pending=i}function A0(e,i,s){if((s&4194048)!==0){var l=i.lanes;l&=e.pendingLanes,s|=l,i.lanes=s,yo(e,s)}}var Wo={readContext:Nn,use:hc,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useLayoutEffect:rn,useInsertionEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useSyncExternalStore:rn,useId:rn,useHostTransitionStatus:rn,useFormState:rn,useActionState:rn,useOptimistic:rn,useMemoCache:rn,useCacheRefresh:rn};Wo.useEffectEvent=rn;var w0={readContext:Nn,use:hc,useCallback:function(e,i){return Vn().memoizedState=[e,i===void 0?null:i],e},useContext:Nn,useEffect:u0,useImperativeHandle:function(e,i,s){s=s!=null?s.concat([e]):null,pc(4194308,4,p0.bind(null,i,e),s)},useLayoutEffect:function(e,i){return pc(4194308,4,e,i)},useInsertionEffect:function(e,i){pc(4,2,e,i)},useMemo:function(e,i){var s=Vn();i=i===void 0?null:i;var l=e();if(Hs){Nt(!0);try{e()}finally{Nt(!1)}}return s.memoizedState=[l,i],l},useReducer:function(e,i,s){var l=Vn();if(s!==void 0){var h=s(i);if(Hs){Nt(!0);try{s(i)}finally{Nt(!1)}}}else h=i;return l.memoizedState=l.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},l.queue=e,e=e.dispatch=eS.bind(null,de,e),[l.memoizedState,e]},useRef:function(e){var i=Vn();return e={current:e},i.memoizedState=e},useState:function(e){e=Uf(e);var i=e.queue,s=b0.bind(null,de,i);return i.dispatch=s,[e.memoizedState,s]},useDebugValue:zf,useDeferredValue:function(e,i){var s=Vn();return Pf(s,e,i)},useTransition:function(){var e=Uf(!1);return e=x0.bind(null,de,e.queue,!0,!1),Vn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,s){var l=de,h=Vn();if(be){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),Ze===null)throw Error(a(349));(Me&127)!==0||jm(l,i,s)}h.memoizedState=s;var m={value:s,getSnapshot:i};return h.queue=m,u0(Km.bind(null,l,m,e),[e]),l.flags|=2048,Dr(9,{destroy:void 0},Zm.bind(null,l,m,s,i),null),s},useId:function(){var e=Vn(),i=Ze.identifierPrefix;if(be){var s=ki,l=Vi;s=(l&~(1<<32-wt(l)-1)).toString(32)+s,i="_"+i+"R_"+s,s=uc++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=jy++,i="_"+i+"r_"+s.toString(32)+"_";return e.memoizedState=i},useHostTransitionStatus:Ff,useFormState:s0,useActionState:s0,useOptimistic:function(e){var i=Vn();i.memoizedState=i.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=If.bind(null,de,!0,s),s.dispatch=i,[e,i]},useMemoCache:Cf,useCacheRefresh:function(){return Vn().memoizedState=tS.bind(null,de)},useEffectEvent:function(e){var i=Vn(),s={impl:e};return i.memoizedState=s,function(){if((Be&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}},Hf={readContext:Nn,use:hc,useCallback:g0,useContext:Nn,useEffect:Of,useImperativeHandle:m0,useInsertionEffect:h0,useLayoutEffect:d0,useMemo:v0,useReducer:dc,useRef:c0,useState:function(){return dc(pa)},useDebugValue:zf,useDeferredValue:function(e,i){var s=un();return _0(s,Xe.memoizedState,e,i)},useTransition:function(){var e=dc(pa)[0],i=un().memoizedState;return[typeof e=="boolean"?e:qo(e),i]},useSyncExternalStore:Ym,useId:M0,useHostTransitionStatus:Ff,useFormState:r0,useActionState:r0,useOptimistic:function(e,i){var s=un();return $m(s,Xe,e,i)},useMemoCache:Cf,useCacheRefresh:E0};Hf.useEffectEvent=f0;var R0={readContext:Nn,use:hc,useCallback:g0,useContext:Nn,useEffect:Of,useImperativeHandle:m0,useInsertionEffect:h0,useLayoutEffect:d0,useMemo:v0,useReducer:Nf,useRef:c0,useState:function(){return Nf(pa)},useDebugValue:zf,useDeferredValue:function(e,i){var s=un();return Xe===null?Pf(s,e,i):_0(s,Xe.memoizedState,e,i)},useTransition:function(){var e=Nf(pa)[0],i=un().memoizedState;return[typeof e=="boolean"?e:qo(e),i]},useSyncExternalStore:Ym,useId:M0,useHostTransitionStatus:Ff,useFormState:l0,useActionState:l0,useOptimistic:function(e,i){var s=un();return Xe!==null?$m(s,Xe,e,i):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:Cf,useCacheRefresh:E0};R0.useEffectEvent=f0;function Gf(e,i,s,l){i=e.memoizedState,s=s(l,i),s=s==null?i:_({},i,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var Vf={enqueueSetState:function(e,i,s){e=e._reactInternals;var l=oi(),h=Qa(l);h.payload=i,s!=null&&(h.callback=s),i=Ja(e,h,l),i!==null&&(Kn(i,e,l),Ho(i,e,l))},enqueueReplaceState:function(e,i,s){e=e._reactInternals;var l=oi(),h=Qa(l);h.tag=1,h.payload=i,s!=null&&(h.callback=s),i=Ja(e,h,l),i!==null&&(Kn(i,e,l),Ho(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var s=oi(),l=Qa(s);l.tag=2,i!=null&&(l.callback=i),i=Ja(e,l,s),i!==null&&(Kn(i,e,s),Ho(i,e,s))}};function C0(e,i,s,l,h,m,E){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,m,E):i.prototype&&i.prototype.isPureReactComponent?!Uo(s,l)||!Uo(h,m):!0}function D0(e,i,s,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==e&&Vf.enqueueReplaceState(i,i.state,null)}function Gs(e,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(e=e.defaultProps){s===i&&(s=_({},s));for(var h in e)s[h]===void 0&&(s[h]=e[h])}return s}function N0(e){jl(e)}function U0(e){console.error(e)}function L0(e){jl(e)}function vc(e,i){try{var s=e.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function O0(e,i,s){try{var l=e.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function kf(e,i,s){return s=Qa(s),s.tag=3,s.payload={element:null},s.callback=function(){vc(e,i)},s}function z0(e){return e=Qa(e),e.tag=3,e}function P0(e,i,s,l){var h=s.type.getDerivedStateFromError;if(typeof h=="function"){var m=l.value;e.payload=function(){return h(m)},e.callback=function(){O0(i,s,l)}}var E=s.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(e.callback=function(){O0(i,s,l),typeof h!="function"&&(as===null?as=new Set([this]):as.add(this));var N=l.stack;this.componentDidCatch(l.value,{componentStack:N!==null?N:""})})}function nS(e,i,s,l,h){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&Mr(i,s,h,!0),s=ii.current,s!==null){switch(s.tag){case 31:case 13:return xi===null?Cc():s.alternate===null&&on===0&&(on=3),s.flags&=-257,s.flags|=65536,s.lanes=h,l===ac?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),ph(e,l,h)),!1;case 22:return s.flags|=65536,l===ac?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),ph(e,l,h)),!1}throw Error(a(435,s.tag))}return ph(e,l,h),Cc(),!1}if(be)return i=ii.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,l!==lf&&(e=Error(a(422),{cause:l}),zo(mi(e,s)))):(l!==lf&&(i=Error(a(423),{cause:l}),zo(mi(i,s))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,l=mi(l,s),h=kf(e.stateNode,l,h),xf(e,h),on!==4&&(on=2)),!1;var m=Error(a(520),{cause:l});if(m=mi(m,s),tl===null?tl=[m]:tl.push(m),on!==4&&(on=2),i===null)return!0;l=mi(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,e=h&-h,s.lanes|=e,e=kf(s.stateNode,l,e),xf(s,e),!1;case 1:if(i=s.type,m=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(as===null||!as.has(m))))return s.flags|=65536,h&=-h,s.lanes|=h,h=z0(h),P0(h,e,s,l),xf(s,h),!1}s=s.return}while(s!==null);return!1}var qf=Error(a(461)),pn=!1;function Un(e,i,s,l){i.child=e===null?Hm(i,null,s,l):Is(i,e.child,s,l)}function B0(e,i,s,l,h){s=s.render;var m=i.ref;if("ref"in l){var E={};for(var N in l)N!=="ref"&&(E[N]=l[N])}else E=l;return zs(i),l=Tf(e,i,s,E,m,h),N=Af(),e!==null&&!pn?(wf(e,i,h),ma(e,i,h)):(be&&N&&rf(i),i.flags|=1,Un(e,i,l,h),i.child)}function F0(e,i,s,l,h){if(e===null){var m=s.type;return typeof m=="function"&&!nf(m)&&m.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=m,I0(e,i,m,l,h)):(e=Jl(s.type,null,l,i,i.mode,h),e.ref=i.ref,e.return=i,i.child=e)}if(m=e.child,!Jf(e,h)){var E=m.memoizedProps;if(s=s.compare,s=s!==null?s:Uo,s(E,l)&&e.ref===i.ref)return ma(e,i,h)}return i.flags|=1,e=ca(m,l),e.ref=i.ref,e.return=i,i.child=e}function I0(e,i,s,l,h){if(e!==null){var m=e.memoizedProps;if(Uo(m,l)&&e.ref===i.ref)if(pn=!1,i.pendingProps=l=m,Jf(e,h))(e.flags&131072)!==0&&(pn=!0);else return i.lanes=e.lanes,ma(e,i,h)}return Xf(e,i,s,l,h)}function H0(e,i,s,l){var h=l.children,m=e!==null?e.memoizedState:null;if(e===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(m=m!==null?m.baseLanes|s:s,e!==null){for(l=i.child=e.child,h=0;l!==null;)h=h|l.lanes|l.childLanes,l=l.sibling;l=h&~m}else l=0,i.child=null;return G0(e,i,m,s,l)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&nc(i,m!==null?m.cachePool:null),m!==null?km(i,m):Sf(),qm(i);else return l=i.lanes=536870912,G0(e,i,m!==null?m.baseLanes|s:s,s,l)}else m!==null?(nc(i,m.cachePool),km(i,m),ts(),i.memoizedState=null):(e!==null&&nc(i,null),Sf(),ts());return Un(e,i,h,s),i.child}function Yo(e,i){return e!==null&&e.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function G0(e,i,s,l,h){var m=mf();return m=m===null?null:{parent:hn._currentValue,pool:m},i.memoizedState={baseLanes:s,cachePool:m},e!==null&&nc(i,null),Sf(),qm(i),e!==null&&Mr(e,i,l,!0),i.childLanes=h,null}function _c(e,i){return i=yc({mode:i.mode,children:i.children},e.mode),i.ref=e.ref,e.child=i,i.return=e,i}function V0(e,i,s){return Is(i,e.child,null,s),e=_c(i,i.pendingProps),e.flags|=2,ai(i),i.memoizedState=null,e}function iS(e,i,s){var l=i.pendingProps,h=(i.flags&128)!==0;if(i.flags&=-129,e===null){if(be){if(l.mode==="hidden")return e=_c(i,l),i.lanes=536870912,Yo(null,e);if(Ef(i),(e=$e)?(e=tv(e,_i),e=e!==null&&e.data==="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Wa!==null?{id:Vi,overflow:ki}:null,retryLane:536870912,hydrationErrors:null},s=Tm(e),s.return=i,i.child=s,Dn=i,$e=null)):e=null,e===null)throw ja(i);return i.lanes=536870912,null}return _c(i,l)}var m=e.memoizedState;if(m!==null){var E=m.dehydrated;if(Ef(i),h)if(i.flags&256)i.flags&=-257,i=V0(e,i,s);else if(i.memoizedState!==null)i.child=e.child,i.flags|=128,i=null;else throw Error(a(558));else if(pn||Mr(e,i,s,!1),h=(s&e.childLanes)!==0,pn||h){if(l=Ze,l!==null&&(E=or(l,s),E!==0&&E!==m.retryLane))throw m.retryLane=E,Ns(e,E),Kn(l,e,E),qf;Cc(),i=V0(e,i,s)}else e=m.treeContext,$e=yi(E.nextSibling),Dn=i,be=!0,Ya=null,_i=!1,e!==null&&Rm(i,e),i=_c(i,l),i.flags|=4096;return i}return e=ca(e.child,{mode:l.mode,children:l.children}),e.ref=i.ref,i.child=e,e.return=i,e}function xc(e,i){var s=i.ref;if(s===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(e===null||e.ref!==s)&&(i.flags|=4194816)}}function Xf(e,i,s,l,h){return zs(i),s=Tf(e,i,s,l,void 0,h),l=Af(),e!==null&&!pn?(wf(e,i,h),ma(e,i,h)):(be&&l&&rf(i),i.flags|=1,Un(e,i,s,h),i.child)}function k0(e,i,s,l,h,m){return zs(i),i.updateQueue=null,s=Wm(i,l,s,h),Xm(e),l=Af(),e!==null&&!pn?(wf(e,i,m),ma(e,i,m)):(be&&l&&rf(i),i.flags|=1,Un(e,i,s,m),i.child)}function q0(e,i,s,l,h){if(zs(i),i.stateNode===null){var m=_r,E=s.contextType;typeof E=="object"&&E!==null&&(m=Nn(E)),m=new s(l,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Vf,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=l,m.state=i.memoizedState,m.refs={},vf(i),E=s.contextType,m.context=typeof E=="object"&&E!==null?Nn(E):_r,m.state=i.memoizedState,E=s.getDerivedStateFromProps,typeof E=="function"&&(Gf(i,s,E,l),m.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(E=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),E!==m.state&&Vf.enqueueReplaceState(m,m.state,null),Vo(i,l,m,h),Go(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){m=i.stateNode;var N=i.memoizedProps,k=Gs(s,N);m.props=k;var st=m.context,_t=s.contextType;E=_r,typeof _t=="object"&&_t!==null&&(E=Nn(_t));var Mt=s.getDerivedStateFromProps;_t=typeof Mt=="function"||typeof m.getSnapshotBeforeUpdate=="function",N=i.pendingProps!==N,_t||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(N||st!==E)&&D0(i,m,l,E),Ka=!1;var ot=i.memoizedState;m.state=ot,Vo(i,l,m,h),Go(),st=i.memoizedState,N||ot!==st||Ka?(typeof Mt=="function"&&(Gf(i,s,Mt,l),st=i.memoizedState),(k=Ka||C0(i,s,k,l,ot,st,E))?(_t||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=st),m.props=l,m.state=st,m.context=E,l=k):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{m=i.stateNode,_f(e,i),E=i.memoizedProps,_t=Gs(s,E),m.props=_t,Mt=i.pendingProps,ot=m.context,st=s.contextType,k=_r,typeof st=="object"&&st!==null&&(k=Nn(st)),N=s.getDerivedStateFromProps,(st=typeof N=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(E!==Mt||ot!==k)&&D0(i,m,l,k),Ka=!1,ot=i.memoizedState,m.state=ot,Vo(i,l,m,h),Go();var dt=i.memoizedState;E!==Mt||ot!==dt||Ka||e!==null&&e.dependencies!==null&&tc(e.dependencies)?(typeof N=="function"&&(Gf(i,s,N,l),dt=i.memoizedState),(_t=Ka||C0(i,s,_t,l,ot,dt,k)||e!==null&&e.dependencies!==null&&tc(e.dependencies))?(st||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,dt,k),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,dt,k)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||E===e.memoizedProps&&ot===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&ot===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=dt),m.props=l,m.state=dt,m.context=k,l=_t):(typeof m.componentDidUpdate!="function"||E===e.memoizedProps&&ot===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&ot===e.memoizedState||(i.flags|=1024),l=!1)}return m=l,xc(e,i),l=(i.flags&128)!==0,m||l?(m=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,e!==null&&l?(i.child=Is(i,e.child,null,h),i.child=Is(i,null,s,h)):Un(e,i,s,h),i.memoizedState=m.state,e=i.child):e=ma(e,i,h),e}function X0(e,i,s,l){return Ls(),i.flags|=256,Un(e,i,s,l),i.child}var Wf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Yf(e){return{baseLanes:e,cachePool:Om()}}function jf(e,i,s){return e=e!==null?e.childLanes&~s:0,i&&(e|=ri),e}function W0(e,i,s){var l=i.pendingProps,h=!1,m=(i.flags&128)!==0,E;if((E=m)||(E=e!==null&&e.memoizedState===null?!1:(cn.current&2)!==0),E&&(h=!0,i.flags&=-129),E=(i.flags&32)!==0,i.flags&=-33,e===null){if(be){if(h?$a(i):ts(),(e=$e)?(e=tv(e,_i),e=e!==null&&e.data!=="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Wa!==null?{id:Vi,overflow:ki}:null,retryLane:536870912,hydrationErrors:null},s=Tm(e),s.return=i,i.child=s,Dn=i,$e=null)):e=null,e===null)throw ja(i);return Dh(e)?i.lanes=32:i.lanes=536870912,null}var N=l.children;return l=l.fallback,h?(ts(),h=i.mode,N=yc({mode:"hidden",children:N},h),l=Us(l,h,s,null),N.return=i,l.return=i,N.sibling=l,i.child=N,l=i.child,l.memoizedState=Yf(s),l.childLanes=jf(e,E,s),i.memoizedState=Wf,Yo(null,l)):($a(i),Zf(i,N))}var k=e.memoizedState;if(k!==null&&(N=k.dehydrated,N!==null)){if(m)i.flags&256?($a(i),i.flags&=-257,i=Kf(e,i,s)):i.memoizedState!==null?(ts(),i.child=e.child,i.flags|=128,i=null):(ts(),N=l.fallback,h=i.mode,l=yc({mode:"visible",children:l.children},h),N=Us(N,h,s,null),N.flags|=2,l.return=i,N.return=i,l.sibling=N,i.child=l,Is(i,e.child,null,s),l=i.child,l.memoizedState=Yf(s),l.childLanes=jf(e,E,s),i.memoizedState=Wf,i=Yo(null,l));else if($a(i),Dh(N)){if(E=N.nextSibling&&N.nextSibling.dataset,E)var st=E.dgst;E=st,l=Error(a(419)),l.stack="",l.digest=E,zo({value:l,source:null,stack:null}),i=Kf(e,i,s)}else if(pn||Mr(e,i,s,!1),E=(s&e.childLanes)!==0,pn||E){if(E=Ze,E!==null&&(l=or(E,s),l!==0&&l!==k.retryLane))throw k.retryLane=l,Ns(e,l),Kn(E,e,l),qf;Ch(N)||Cc(),i=Kf(e,i,s)}else Ch(N)?(i.flags|=192,i.child=e.child,i=null):(e=k.treeContext,$e=yi(N.nextSibling),Dn=i,be=!0,Ya=null,_i=!1,e!==null&&Rm(i,e),i=Zf(i,l.children),i.flags|=4096);return i}return h?(ts(),N=l.fallback,h=i.mode,k=e.child,st=k.sibling,l=ca(k,{mode:"hidden",children:l.children}),l.subtreeFlags=k.subtreeFlags&65011712,st!==null?N=ca(st,N):(N=Us(N,h,s,null),N.flags|=2),N.return=i,l.return=i,l.sibling=N,i.child=l,Yo(null,l),l=i.child,N=e.child.memoizedState,N===null?N=Yf(s):(h=N.cachePool,h!==null?(k=hn._currentValue,h=h.parent!==k?{parent:k,pool:k}:h):h=Om(),N={baseLanes:N.baseLanes|s,cachePool:h}),l.memoizedState=N,l.childLanes=jf(e,E,s),i.memoizedState=Wf,Yo(e.child,l)):($a(i),s=e.child,e=s.sibling,s=ca(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,e!==null&&(E=i.deletions,E===null?(i.deletions=[e],i.flags|=16):E.push(e)),i.child=s,i.memoizedState=null,s)}function Zf(e,i){return i=yc({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function yc(e,i){return e=ni(22,e,null,i),e.lanes=0,e}function Kf(e,i,s){return Is(i,e.child,null,s),e=Zf(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function Y0(e,i,s){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),ff(e.return,i,s)}function Qf(e,i,s,l,h,m){var E=e.memoizedState;E===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:h,treeForkCount:m}:(E.isBackwards=i,E.rendering=null,E.renderingStartTime=0,E.last=l,E.tail=s,E.tailMode=h,E.treeForkCount=m)}function j0(e,i,s){var l=i.pendingProps,h=l.revealOrder,m=l.tail;l=l.children;var E=cn.current,N=(E&2)!==0;if(N?(E=E&1|2,i.flags|=128):E&=1,mt(cn,E),Un(e,i,l,s),l=be?Oo:0,!N&&e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Y0(e,s,i);else if(e.tag===19)Y0(e,s,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(h){case"forwards":for(s=i.child,h=null;s!==null;)e=s.alternate,e!==null&&lc(e)===null&&(h=s),s=s.sibling;s=h,s===null?(h=i.child,i.child=null):(h=s.sibling,s.sibling=null),Qf(i,!1,h,s,m,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,h=i.child,i.child=null;h!==null;){if(e=h.alternate,e!==null&&lc(e)===null){i.child=h;break}e=h.sibling,h.sibling=s,s=h,h=e}Qf(i,!0,s,null,m,l);break;case"together":Qf(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function ma(e,i,s){if(e!==null&&(i.dependencies=e.dependencies),is|=i.lanes,(s&i.childLanes)===0)if(e!==null){if(Mr(e,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,s=ca(e,e.pendingProps),i.child=s,s.return=i;e.sibling!==null;)e=e.sibling,s=s.sibling=ca(e,e.pendingProps),s.return=i;s.sibling=null}return i.child}function Jf(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&tc(e)))}function aS(e,i,s){switch(i.tag){case 3:Ct(i,i.stateNode.containerInfo),Za(i,hn,e.memoizedState.cache),Ls();break;case 27:case 5:Gt(i);break;case 4:Ct(i,i.stateNode.containerInfo);break;case 10:Za(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,Ef(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?($a(i),i.flags|=128,null):(s&i.child.childLanes)!==0?W0(e,i,s):($a(i),e=ma(e,i,s),e!==null?e.sibling:null);$a(i);break;case 19:var h=(e.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(Mr(e,i,s,!1),l=(s&i.childLanes)!==0),h){if(l)return j0(e,i,s);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),mt(cn,cn.current),l)break;return null;case 22:return i.lanes=0,H0(e,i,s,i.pendingProps);case 24:Za(i,hn,e.memoizedState.cache)}return ma(e,i,s)}function Z0(e,i,s){if(e!==null)if(e.memoizedProps!==i.pendingProps)pn=!0;else{if(!Jf(e,s)&&(i.flags&128)===0)return pn=!1,aS(e,i,s);pn=(e.flags&131072)!==0}else pn=!1,be&&(i.flags&1048576)!==0&&wm(i,Oo,i.index);switch(i.lanes=0,i.tag){case 16:t:{var l=i.pendingProps;if(e=Bs(i.elementType),i.type=e,typeof e=="function")nf(e)?(l=Gs(e,l),i.tag=1,i=q0(null,i,e,l,s)):(i.tag=0,i=Xf(null,i,e,l,s));else{if(e!=null){var h=e.$$typeof;if(h===D){i.tag=11,i=B0(null,i,e,l,s);break t}else if(h===B){i.tag=14,i=F0(null,i,e,l,s);break t}}throw i=Q(e)||e,Error(a(306,i,""))}}return i;case 0:return Xf(e,i,i.type,i.pendingProps,s);case 1:return l=i.type,h=Gs(l,i.pendingProps),q0(e,i,l,h,s);case 3:t:{if(Ct(i,i.stateNode.containerInfo),e===null)throw Error(a(387));l=i.pendingProps;var m=i.memoizedState;h=m.element,_f(e,i),Vo(i,l,null,s);var E=i.memoizedState;if(l=E.cache,Za(i,hn,l),l!==m.cache&&hf(i,[hn],s,!0),Go(),l=E.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:E.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=X0(e,i,l,s);break t}else if(l!==h){h=mi(Error(a(424)),i),zo(h),i=X0(e,i,l,s);break t}else for(e=i.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,$e=yi(e.firstChild),Dn=i,be=!0,Ya=null,_i=!0,s=Hm(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(Ls(),l===h){i=ma(e,i,s);break t}Un(e,i,l,s)}i=i.child}return i;case 26:return xc(e,i),e===null?(s=rv(i.type,null,i.pendingProps,null))?i.memoizedState=s:be||(s=i.type,e=i.pendingProps,l=Pc(nt.current).createElement(s),l[fn]=i,l[bn]=e,Ln(l,s,e),U(l),i.stateNode=l):i.memoizedState=rv(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return Gt(i),e===null&&be&&(l=i.stateNode=iv(i.type,i.pendingProps,nt.current),Dn=i,_i=!0,h=$e,ls(i.type)?(Nh=h,$e=yi(l.firstChild)):$e=h),Un(e,i,i.pendingProps.children,s),xc(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&be&&((h=l=$e)&&(l=OS(l,i.type,i.pendingProps,_i),l!==null?(i.stateNode=l,Dn=i,$e=yi(l.firstChild),_i=!1,h=!0):h=!1),h||ja(i)),Gt(i),h=i.type,m=i.pendingProps,E=e!==null?e.memoizedProps:null,l=m.children,Ah(h,m)?l=null:E!==null&&Ah(h,E)&&(i.flags|=32),i.memoizedState!==null&&(h=Tf(e,i,Zy,null,null,s),ll._currentValue=h),xc(e,i),Un(e,i,l,s),i.child;case 6:return e===null&&be&&((e=s=$e)&&(s=zS(s,i.pendingProps,_i),s!==null?(i.stateNode=s,Dn=i,$e=null,e=!0):e=!1),e||ja(i)),null;case 13:return W0(e,i,s);case 4:return Ct(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=Is(i,null,l,s):Un(e,i,l,s),i.child;case 11:return B0(e,i,i.type,i.pendingProps,s);case 7:return Un(e,i,i.pendingProps,s),i.child;case 8:return Un(e,i,i.pendingProps.children,s),i.child;case 12:return Un(e,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,Za(i,i.type,l.value),Un(e,i,l.children,s),i.child;case 9:return h=i.type._context,l=i.pendingProps.children,zs(i),h=Nn(h),l=l(h),i.flags|=1,Un(e,i,l,s),i.child;case 14:return F0(e,i,i.type,i.pendingProps,s);case 15:return I0(e,i,i.type,i.pendingProps,s);case 19:return j0(e,i,s);case 31:return iS(e,i,s);case 22:return H0(e,i,s,i.pendingProps);case 24:return zs(i),l=Nn(hn),e===null?(h=mf(),h===null&&(h=Ze,m=df(),h.pooledCache=m,m.refCount++,m!==null&&(h.pooledCacheLanes|=s),h=m),i.memoizedState={parent:l,cache:h},vf(i),Za(i,hn,h)):((e.lanes&s)!==0&&(_f(e,i),Vo(i,null,null,s),Go()),h=e.memoizedState,m=i.memoizedState,h.parent!==l?(h={parent:l,cache:l},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),Za(i,hn,l)):(l=m.cache,Za(i,hn,l),l!==h.cache&&hf(i,[hn],s,!0))),Un(e,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function ga(e){e.flags|=4}function $f(e,i,s,l,h){if((i=(e.mode&32)!==0)&&(i=!1),i){if(e.flags|=16777216,(h&335544128)===h)if(e.stateNode.complete)e.flags|=8192;else if(Mg())e.flags|=8192;else throw Fs=ac,gf}else e.flags&=-16777217}function K0(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!fv(i))if(Mg())e.flags|=8192;else throw Fs=ac,gf}function Sc(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?He():536870912,e.lanes|=i,Or|=i)}function jo(e,i){if(!be)switch(e.tailMode){case"hidden":i=e.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function tn(e){var i=e.alternate!==null&&e.alternate.child===e.child,s=0,l=0;if(i)for(var h=e.child;h!==null;)s|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)s|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=l,e.childLanes=s,i}function sS(e,i,s){var l=i.pendingProps;switch(of(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tn(i),null;case 1:return tn(i),null;case 3:return s=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),ha(hn),kt(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(Sr(i)?ga(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,cf())),tn(i),null;case 26:var h=i.type,m=i.memoizedState;return e===null?(ga(i),m!==null?(tn(i),K0(i,m)):(tn(i),$f(i,h,null,l,s))):m?m!==e.memoizedState?(ga(i),tn(i),K0(i,m)):(tn(i),i.flags&=-16777217):(e=e.memoizedProps,e!==l&&ga(i),tn(i),$f(i,h,e,l,s)),null;case 27:if(pe(i),s=nt.current,h=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&ga(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return tn(i),null}e=bt.current,Sr(i)?Cm(i):(e=iv(h,l,s),i.stateNode=e,ga(i))}return tn(i),null;case 5:if(pe(i),h=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&ga(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return tn(i),null}if(m=bt.current,Sr(i))Cm(i);else{var E=Pc(nt.current);switch(m){case 1:m=E.createElementNS("http://www.w3.org/2000/svg",h);break;case 2:m=E.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;default:switch(h){case"svg":m=E.createElementNS("http://www.w3.org/2000/svg",h);break;case"math":m=E.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;case"script":m=E.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof l.is=="string"?E.createElement("select",{is:l.is}):E.createElement("select"),l.multiple?m.multiple=!0:l.size&&(m.size=l.size);break;default:m=typeof l.is=="string"?E.createElement(h,{is:l.is}):E.createElement(h)}}m[fn]=i,m[bn]=l;t:for(E=i.child;E!==null;){if(E.tag===5||E.tag===6)m.appendChild(E.stateNode);else if(E.tag!==4&&E.tag!==27&&E.child!==null){E.child.return=E,E=E.child;continue}if(E===i)break t;for(;E.sibling===null;){if(E.return===null||E.return===i)break t;E=E.return}E.sibling.return=E.return,E=E.sibling}i.stateNode=m;t:switch(Ln(m,h,l),h){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&ga(i)}}return tn(i),$f(i,i.type,e===null?null:e.memoizedProps,i.pendingProps,s),null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&ga(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(e=nt.current,Sr(i)){if(e=i.stateNode,s=i.memoizedProps,l=null,h=Dn,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}e[fn]=i,e=!!(e.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||Wg(e.nodeValue,s)),e||ja(i,!0)}else e=Pc(e).createTextNode(l),e[fn]=i,i.stateNode=e}return tn(i),null;case 31:if(s=i.memoizedState,e===null||e.memoizedState!==null){if(l=Sr(i),s!==null){if(e===null){if(!l)throw Error(a(318));if(e=i.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[fn]=i}else Ls(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;tn(i),e=!1}else s=cf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),e=!0;if(!e)return i.flags&256?(ai(i),i):(ai(i),null);if((i.flags&128)!==0)throw Error(a(558))}return tn(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=Sr(i),l!==null&&l.dehydrated!==null){if(e===null){if(!h)throw Error(a(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(a(317));h[fn]=i}else Ls(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;tn(i),h=!1}else h=cf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(ai(i),i):(ai(i),null)}return ai(i),(i.flags&128)!==0?(i.lanes=s,i):(s=l!==null,e=e!==null&&e.memoizedState!==null,s&&(l=i.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool),m=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==h&&(l.flags|=2048)),s!==e&&s&&(i.child.flags|=8192),Sc(i,i.updateQueue),tn(i),null);case 4:return kt(),e===null&&Sh(i.stateNode.containerInfo),tn(i),null;case 10:return ha(i.type),tn(i),null;case 19:if(Y(cn),l=i.memoizedState,l===null)return tn(i),null;if(h=(i.flags&128)!==0,m=l.rendering,m===null)if(h)jo(l,!1);else{if(on!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(m=lc(e),m!==null){for(i.flags|=128,jo(l,!1),e=m.updateQueue,i.updateQueue=e,Sc(i,e),i.subtreeFlags=0,e=s,s=i.child;s!==null;)bm(s,e),s=s.sibling;return mt(cn,cn.current&1|2),be&&ua(i,l.treeForkCount),i.child}e=e.sibling}l.tail!==null&&A()>Ac&&(i.flags|=128,h=!0,jo(l,!1),i.lanes=4194304)}else{if(!h)if(e=lc(m),e!==null){if(i.flags|=128,h=!0,e=e.updateQueue,i.updateQueue=e,Sc(i,e),jo(l,!0),l.tail===null&&l.tailMode==="hidden"&&!m.alternate&&!be)return tn(i),null}else 2*A()-l.renderingStartTime>Ac&&s!==536870912&&(i.flags|=128,h=!0,jo(l,!1),i.lanes=4194304);l.isBackwards?(m.sibling=i.child,i.child=m):(e=l.last,e!==null?e.sibling=m:i.child=m,l.last=m)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=A(),e.sibling=null,s=cn.current,mt(cn,h?s&1|2:s&1),be&&ua(i,l.treeForkCount),e):(tn(i),null);case 22:case 23:return ai(i),Mf(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(tn(i),i.subtreeFlags&6&&(i.flags|=8192)):tn(i),s=i.updateQueue,s!==null&&Sc(i,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),e!==null&&Y(Ps),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),ha(hn),tn(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function rS(e,i){switch(of(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return ha(hn),kt(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return pe(i),null;case 31:if(i.memoizedState!==null){if(ai(i),i.alternate===null)throw Error(a(340));Ls()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 13:if(ai(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));Ls()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return Y(cn),null;case 4:return kt(),null;case 10:return ha(i.type),null;case 22:case 23:return ai(i),Mf(),e!==null&&Y(Ps),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return ha(hn),null;case 25:return null;default:return null}}function Q0(e,i){switch(of(i),i.tag){case 3:ha(hn),kt();break;case 26:case 27:case 5:pe(i);break;case 4:kt();break;case 31:i.memoizedState!==null&&ai(i);break;case 13:ai(i);break;case 19:Y(cn);break;case 10:ha(i.type);break;case 22:case 23:ai(i),Mf(),e!==null&&Y(Ps);break;case 24:ha(hn)}}function Zo(e,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var h=l.next;s=h;do{if((s.tag&e)===e){l=void 0;var m=s.create,E=s.inst;l=m(),E.destroy=l}s=s.next}while(s!==h)}}catch(N){ke(i,i.return,N)}}function es(e,i,s){try{var l=i.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var m=h.next;l=m;do{if((l.tag&e)===e){var E=l.inst,N=E.destroy;if(N!==void 0){E.destroy=void 0,h=i;var k=s,st=N;try{st()}catch(_t){ke(h,k,_t)}}}l=l.next}while(l!==m)}}catch(_t){ke(i,i.return,_t)}}function J0(e){var i=e.updateQueue;if(i!==null){var s=e.stateNode;try{Vm(i,s)}catch(l){ke(e,e.return,l)}}}function $0(e,i,s){s.props=Gs(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(l){ke(e,i,l)}}function Ko(e,i){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof s=="function"?e.refCleanup=s(l):s.current=l}}catch(h){ke(e,i,h)}}function qi(e,i){var s=e.ref,l=e.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(h){ke(e,i,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(h){ke(e,i,h)}else s.current=null}function tg(e){var i=e.type,s=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break t;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(h){ke(e,e.return,h)}}function th(e,i,s){try{var l=e.stateNode;RS(l,e.type,s,i),l[bn]=i}catch(h){ke(e,e.return,h)}}function eg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ls(e.type)||e.tag===4}function eh(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||eg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ls(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function nh(e,i,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(e),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=oa));else if(l!==4&&(l===27&&ls(e.type)&&(s=e.stateNode,i=null),e=e.child,e!==null))for(nh(e,i,s),e=e.sibling;e!==null;)nh(e,i,s),e=e.sibling}function Mc(e,i,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?s.insertBefore(e,i):s.appendChild(e);else if(l!==4&&(l===27&&ls(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(Mc(e,i,s),e=e.sibling;e!==null;)Mc(e,i,s),e=e.sibling}function ng(e){var i=e.stateNode,s=e.memoizedProps;try{for(var l=e.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);Ln(i,l,s),i[fn]=e,i[bn]=s}catch(m){ke(e,e.return,m)}}var va=!1,mn=!1,ih=!1,ig=typeof WeakSet=="function"?WeakSet:Set,Mn=null;function oS(e,i){if(e=e.containerInfo,bh=kc,e=mm(e),Zu(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var h=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break t}var E=0,N=-1,k=-1,st=0,_t=0,Mt=e,ot=null;e:for(;;){for(var dt;Mt!==s||h!==0&&Mt.nodeType!==3||(N=E+h),Mt!==m||l!==0&&Mt.nodeType!==3||(k=E+l),Mt.nodeType===3&&(E+=Mt.nodeValue.length),(dt=Mt.firstChild)!==null;)ot=Mt,Mt=dt;for(;;){if(Mt===e)break e;if(ot===s&&++st===h&&(N=E),ot===m&&++_t===l&&(k=E),(dt=Mt.nextSibling)!==null)break;Mt=ot,ot=Mt.parentNode}Mt=dt}s=N===-1||k===-1?null:{start:N,end:k}}else s=null}s=s||{start:0,end:0}}else s=null;for(Th={focusedElem:e,selectionRange:s},kc=!1,Mn=i;Mn!==null;)if(i=Mn,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,Mn=e;else for(;Mn!==null;){switch(i=Mn,m=i.alternate,e=i.flags,i.tag){case 0:if((e&4)!==0&&(e=i.updateQueue,e=e!==null?e.events:null,e!==null))for(s=0;s<e.length;s++)h=e[s],h.ref.impl=h.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,s=i,h=m.memoizedProps,m=m.memoizedState,l=s.stateNode;try{var Wt=Gs(s.type,h);e=l.getSnapshotBeforeUpdate(Wt,m),l.__reactInternalSnapshotBeforeUpdate=e}catch(re){ke(s,s.return,re)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,s=e.nodeType,s===9)Rh(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Rh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,Mn=e;break}Mn=i.return}}function ag(e,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:xa(e,s),l&4&&Zo(5,s);break;case 1:if(xa(e,s),l&4)if(e=s.stateNode,i===null)try{e.componentDidMount()}catch(E){ke(s,s.return,E)}else{var h=Gs(s.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(h,i,e.__reactInternalSnapshotBeforeUpdate)}catch(E){ke(s,s.return,E)}}l&64&&J0(s),l&512&&Ko(s,s.return);break;case 3:if(xa(e,s),l&64&&(e=s.updateQueue,e!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{Vm(e,i)}catch(E){ke(s,s.return,E)}}break;case 27:i===null&&l&4&&ng(s);case 26:case 5:xa(e,s),i===null&&l&4&&tg(s),l&512&&Ko(s,s.return);break;case 12:xa(e,s);break;case 31:xa(e,s),l&4&&og(e,s);break;case 13:xa(e,s),l&4&&lg(e,s),l&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=gS.bind(null,s),PS(e,s))));break;case 22:if(l=s.memoizedState!==null||va,!l){i=i!==null&&i.memoizedState!==null||mn,h=va;var m=mn;va=l,(mn=i)&&!m?ya(e,s,(s.subtreeFlags&8772)!==0):xa(e,s),va=h,mn=m}break;case 30:break;default:xa(e,s)}}function sg(e){var i=e.alternate;i!==null&&(e.alternate=null,sg(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&bo(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var an=null,Wn=!1;function _a(e,i,s){for(s=s.child;s!==null;)rg(e,i,s),s=s.sibling}function rg(e,i,s){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(ht,s)}catch{}switch(s.tag){case 26:mn||qi(s,i),_a(e,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:mn||qi(s,i);var l=an,h=Wn;ls(s.type)&&(an=s.stateNode,Wn=!1),_a(e,i,s),sl(s.stateNode),an=l,Wn=h;break;case 5:mn||qi(s,i);case 6:if(l=an,h=Wn,an=null,_a(e,i,s),an=l,Wn=h,an!==null)if(Wn)try{(an.nodeType===9?an.body:an.nodeName==="HTML"?an.ownerDocument.body:an).removeChild(s.stateNode)}catch(m){ke(s,i,m)}else try{an.removeChild(s.stateNode)}catch(m){ke(s,i,m)}break;case 18:an!==null&&(Wn?(e=an,Jg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),Vr(e)):Jg(an,s.stateNode));break;case 4:l=an,h=Wn,an=s.stateNode.containerInfo,Wn=!0,_a(e,i,s),an=l,Wn=h;break;case 0:case 11:case 14:case 15:es(2,s,i),mn||es(4,s,i),_a(e,i,s);break;case 1:mn||(qi(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&$0(s,i,l)),_a(e,i,s);break;case 21:_a(e,i,s);break;case 22:mn=(l=mn)||s.memoizedState!==null,_a(e,i,s),mn=l;break;default:_a(e,i,s)}}function og(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Vr(e)}catch(s){ke(i,i.return,s)}}}function lg(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Vr(e)}catch(s){ke(i,i.return,s)}}function lS(e){switch(e.tag){case 31:case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new ig),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new ig),i;default:throw Error(a(435,e.tag))}}function Ec(e,i){var s=lS(e);i.forEach(function(l){if(!s.has(l)){s.add(l);var h=vS.bind(null,e,l);l.then(h,h)}})}function Yn(e,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var h=s[l],m=e,E=i,N=E;t:for(;N!==null;){switch(N.tag){case 27:if(ls(N.type)){an=N.stateNode,Wn=!1;break t}break;case 5:an=N.stateNode,Wn=!1;break t;case 3:case 4:an=N.stateNode.containerInfo,Wn=!0;break t}N=N.return}if(an===null)throw Error(a(160));rg(m,E,h),an=null,Wn=!1,m=h.alternate,m!==null&&(m.return=null),h.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)cg(i,e),i=i.sibling}var Ri=null;function cg(e,i){var s=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Yn(i,e),jn(e),l&4&&(es(3,e,e.return),Zo(3,e),es(5,e,e.return));break;case 1:Yn(i,e),jn(e),l&512&&(mn||s===null||qi(s,s.return)),l&64&&va&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var h=Ri;if(Yn(i,e),jn(e),l&512&&(mn||s===null||qi(s,s.return)),l&4){var m=s!==null?s.memoizedState:null;if(l=e.memoizedState,s===null)if(l===null)if(e.stateNode===null){t:{l=e.type,s=e.memoizedProps,h=h.ownerDocument||h;e:switch(l){case"title":m=h.getElementsByTagName("title")[0],(!m||m[As]||m[fn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=h.createElement(l),h.head.insertBefore(m,h.querySelector("head > title"))),Ln(m,l,s),m[fn]=e,U(m),l=m;break t;case"link":var E=cv("link","href",h).get(l+(s.href||""));if(E){for(var N=0;N<E.length;N++)if(m=E[N],m.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&m.getAttribute("rel")===(s.rel==null?null:s.rel)&&m.getAttribute("title")===(s.title==null?null:s.title)&&m.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){E.splice(N,1);break e}}m=h.createElement(l),Ln(m,l,s),h.head.appendChild(m);break;case"meta":if(E=cv("meta","content",h).get(l+(s.content||""))){for(N=0;N<E.length;N++)if(m=E[N],m.getAttribute("content")===(s.content==null?null:""+s.content)&&m.getAttribute("name")===(s.name==null?null:s.name)&&m.getAttribute("property")===(s.property==null?null:s.property)&&m.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&m.getAttribute("charset")===(s.charSet==null?null:s.charSet)){E.splice(N,1);break e}}m=h.createElement(l),Ln(m,l,s),h.head.appendChild(m);break;default:throw Error(a(468,l))}m[fn]=e,U(m),l=m}e.stateNode=l}else uv(h,e.type,e.stateNode);else e.stateNode=lv(h,l,e.memoizedProps);else m!==l?(m===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):m.count--,l===null?uv(h,e.type,e.stateNode):lv(h,l,e.memoizedProps)):l===null&&e.stateNode!==null&&th(e,e.memoizedProps,s.memoizedProps)}break;case 27:Yn(i,e),jn(e),l&512&&(mn||s===null||qi(s,s.return)),s!==null&&l&4&&th(e,e.memoizedProps,s.memoizedProps);break;case 5:if(Yn(i,e),jn(e),l&512&&(mn||s===null||qi(s,s.return)),e.flags&32){h=e.stateNode;try{vn(h,"")}catch(Wt){ke(e,e.return,Wt)}}l&4&&e.stateNode!=null&&(h=e.memoizedProps,th(e,h,s!==null?s.memoizedProps:h)),l&1024&&(ih=!0);break;case 6:if(Yn(i,e),jn(e),l&4){if(e.stateNode===null)throw Error(a(162));l=e.memoizedProps,s=e.stateNode;try{s.nodeValue=l}catch(Wt){ke(e,e.return,Wt)}}break;case 3:if(Ic=null,h=Ri,Ri=Bc(i.containerInfo),Yn(i,e),Ri=h,jn(e),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Vr(i.containerInfo)}catch(Wt){ke(e,e.return,Wt)}ih&&(ih=!1,ug(e));break;case 4:l=Ri,Ri=Bc(e.stateNode.containerInfo),Yn(i,e),jn(e),Ri=l;break;case 12:Yn(i,e),jn(e);break;case 31:Yn(i,e),jn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ec(e,l)));break;case 13:Yn(i,e),jn(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Tc=A()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ec(e,l)));break;case 22:h=e.memoizedState!==null;var k=s!==null&&s.memoizedState!==null,st=va,_t=mn;if(va=st||h,mn=_t||k,Yn(i,e),mn=_t,va=st,jn(e),l&8192)t:for(i=e.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(s===null||k||va||mn||Vs(e)),s=null,i=e;;){if(i.tag===5||i.tag===26){if(s===null){k=s=i;try{if(m=k.stateNode,h)E=m.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{N=k.stateNode;var Mt=k.memoizedProps.style,ot=Mt!=null&&Mt.hasOwnProperty("display")?Mt.display:null;N.style.display=ot==null||typeof ot=="boolean"?"":(""+ot).trim()}}catch(Wt){ke(k,k.return,Wt)}}}else if(i.tag===6){if(s===null){k=i;try{k.stateNode.nodeValue=h?"":k.memoizedProps}catch(Wt){ke(k,k.return,Wt)}}}else if(i.tag===18){if(s===null){k=i;try{var dt=k.stateNode;h?$g(dt,!0):$g(k.stateNode,!1)}catch(Wt){ke(k,k.return,Wt)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,Ec(e,s))));break;case 19:Yn(i,e),jn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ec(e,l)));break;case 30:break;case 21:break;default:Yn(i,e),jn(e)}}function jn(e){var i=e.flags;if(i&2){try{for(var s,l=e.return;l!==null;){if(eg(l)){s=l;break}l=l.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var h=s.stateNode,m=eh(e);Mc(e,m,h);break;case 5:var E=s.stateNode;s.flags&32&&(vn(E,""),s.flags&=-33);var N=eh(e);Mc(e,N,E);break;case 3:case 4:var k=s.stateNode.containerInfo,st=eh(e);nh(e,st,k);break;default:throw Error(a(161))}}catch(_t){ke(e,e.return,_t)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function ug(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;ug(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function xa(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)ag(e,i.alternate,i),i=i.sibling}function Vs(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:es(4,i,i.return),Vs(i);break;case 1:qi(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&$0(i,i.return,s),Vs(i);break;case 27:sl(i.stateNode);case 26:case 5:qi(i,i.return),Vs(i);break;case 22:i.memoizedState===null&&Vs(i);break;case 30:Vs(i);break;default:Vs(i)}e=e.sibling}}function ya(e,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,h=e,m=i,E=m.flags;switch(m.tag){case 0:case 11:case 15:ya(h,m,s),Zo(4,m);break;case 1:if(ya(h,m,s),l=m,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(st){ke(l,l.return,st)}if(l=m,h=l.updateQueue,h!==null){var N=l.stateNode;try{var k=h.shared.hiddenCallbacks;if(k!==null)for(h.shared.hiddenCallbacks=null,h=0;h<k.length;h++)Gm(k[h],N)}catch(st){ke(l,l.return,st)}}s&&E&64&&J0(m),Ko(m,m.return);break;case 27:ng(m);case 26:case 5:ya(h,m,s),s&&l===null&&E&4&&tg(m),Ko(m,m.return);break;case 12:ya(h,m,s);break;case 31:ya(h,m,s),s&&E&4&&og(h,m);break;case 13:ya(h,m,s),s&&E&4&&lg(h,m);break;case 22:m.memoizedState===null&&ya(h,m,s),Ko(m,m.return);break;case 30:break;default:ya(h,m,s)}i=i.sibling}}function ah(e,i){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&Po(s))}function sh(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Po(e))}function Ci(e,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)fg(e,i,s,l),i=i.sibling}function fg(e,i,s,l){var h=i.flags;switch(i.tag){case 0:case 11:case 15:Ci(e,i,s,l),h&2048&&Zo(9,i);break;case 1:Ci(e,i,s,l);break;case 3:Ci(e,i,s,l),h&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Po(e)));break;case 12:if(h&2048){Ci(e,i,s,l),e=i.stateNode;try{var m=i.memoizedProps,E=m.id,N=m.onPostCommit;typeof N=="function"&&N(E,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(k){ke(i,i.return,k)}}else Ci(e,i,s,l);break;case 31:Ci(e,i,s,l);break;case 13:Ci(e,i,s,l);break;case 23:break;case 22:m=i.stateNode,E=i.alternate,i.memoizedState!==null?m._visibility&2?Ci(e,i,s,l):Qo(e,i):m._visibility&2?Ci(e,i,s,l):(m._visibility|=2,Nr(e,i,s,l,(i.subtreeFlags&10256)!==0||!1)),h&2048&&ah(E,i);break;case 24:Ci(e,i,s,l),h&2048&&sh(i.alternate,i);break;default:Ci(e,i,s,l)}}function Nr(e,i,s,l,h){for(h=h&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var m=e,E=i,N=s,k=l,st=E.flags;switch(E.tag){case 0:case 11:case 15:Nr(m,E,N,k,h),Zo(8,E);break;case 23:break;case 22:var _t=E.stateNode;E.memoizedState!==null?_t._visibility&2?Nr(m,E,N,k,h):Qo(m,E):(_t._visibility|=2,Nr(m,E,N,k,h)),h&&st&2048&&ah(E.alternate,E);break;case 24:Nr(m,E,N,k,h),h&&st&2048&&sh(E.alternate,E);break;default:Nr(m,E,N,k,h)}i=i.sibling}}function Qo(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=e,l=i,h=l.flags;switch(l.tag){case 22:Qo(s,l),h&2048&&ah(l.alternate,l);break;case 24:Qo(s,l),h&2048&&sh(l.alternate,l);break;default:Qo(s,l)}i=i.sibling}}var Jo=8192;function Ur(e,i,s){if(e.subtreeFlags&Jo)for(e=e.child;e!==null;)hg(e,i,s),e=e.sibling}function hg(e,i,s){switch(e.tag){case 26:Ur(e,i,s),e.flags&Jo&&e.memoizedState!==null&&jS(s,Ri,e.memoizedState,e.memoizedProps);break;case 5:Ur(e,i,s);break;case 3:case 4:var l=Ri;Ri=Bc(e.stateNode.containerInfo),Ur(e,i,s),Ri=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Jo,Jo=16777216,Ur(e,i,s),Jo=l):Ur(e,i,s));break;default:Ur(e,i,s)}}function dg(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function $o(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Mn=l,mg(l,e)}dg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)pg(e),e=e.sibling}function pg(e){switch(e.tag){case 0:case 11:case 15:$o(e),e.flags&2048&&es(9,e,e.return);break;case 3:$o(e);break;case 12:$o(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,bc(e)):$o(e);break;default:$o(e)}}function bc(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Mn=l,mg(l,e)}dg(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:es(8,i,i.return),bc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,bc(i));break;default:bc(i)}e=e.sibling}}function mg(e,i){for(;Mn!==null;){var s=Mn;switch(s.tag){case 0:case 11:case 15:es(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Po(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Mn=l;else t:for(s=e;Mn!==null;){l=Mn;var h=l.sibling,m=l.return;if(sg(l),l===s){Mn=null;break t}if(h!==null){h.return=m,Mn=h;break t}Mn=m}}}var cS={getCacheForType:function(e){var i=Nn(hn),s=i.data.get(e);return s===void 0&&(s=e(),i.data.set(e,s)),s},cacheSignal:function(){return Nn(hn).controller.signal}},uS=typeof WeakMap=="function"?WeakMap:Map,Be=0,Ze=null,xe=null,Me=0,Ve=0,si=null,ns=!1,Lr=!1,rh=!1,Sa=0,on=0,is=0,ks=0,oh=0,ri=0,Or=0,tl=null,Zn=null,lh=!1,Tc=0,gg=0,Ac=1/0,wc=null,as=null,_n=0,ss=null,zr=null,Ma=0,ch=0,uh=null,vg=null,el=0,fh=null;function oi(){return(Be&2)!==0&&Me!==0?Me&-Me:z.T!==null?vh():Mo()}function _g(){if(ri===0)if((Me&536870912)===0||be){var e=Rt;Rt<<=1,(Rt&3932160)===0&&(Rt=262144),ri=e}else ri=536870912;return e=ii.current,e!==null&&(e.flags|=32),ri}function Kn(e,i,s){(e===Ze&&(Ve===2||Ve===9)||e.cancelPendingCommit!==null)&&(Pr(e,0),rs(e,Me,ri,!1)),Pn(e,s),((Be&2)===0||e!==Ze)&&(e===Ze&&((Be&2)===0&&(ks|=s),on===4&&rs(e,Me,ri,!1)),Xi(e))}function xg(e,i,s){if((Be&6)!==0)throw Error(a(327));var l=!s&&(i&127)===0&&(i&e.expiredLanes)===0||Dt(e,i),h=l?dS(e,i):dh(e,i,!0),m=l;do{if(h===0){Lr&&!l&&rs(e,i,0,!1);break}else{if(s=e.current.alternate,m&&!fS(s)){h=dh(e,i,!1),m=!1;continue}if(h===2){if(m=i,e.errorRecoveryDisabledLanes&m)var E=0;else E=e.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){i=E;t:{var N=e;h=tl;var k=N.current.memoizedState.isDehydrated;if(k&&(Pr(N,E).flags|=256),E=dh(N,E,!1),E!==2){if(rh&&!k){N.errorRecoveryDisabledLanes|=m,ks|=m,h=4;break t}m=Zn,Zn=h,m!==null&&(Zn===null?Zn=m:Zn.push.apply(Zn,m))}h=E}if(m=!1,h!==2)continue}}if(h===1){Pr(e,0),rs(e,i,0,!0);break}t:{switch(l=e,m=h,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:rs(l,i,ri,!ns);break t;case 2:Zn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(h=Tc+300-A(),10<h)){if(rs(l,i,ri,!ns),yt(l,0,!0)!==0)break t;Ma=i,l.timeoutHandle=Kg(yg.bind(null,l,s,Zn,wc,lh,i,ri,ks,Or,ns,m,"Throttled",-0,0),h);break t}yg(l,s,Zn,wc,lh,i,ri,ks,Or,ns,m,null,-0,0)}}break}while(!0);Xi(e)}function yg(e,i,s,l,h,m,E,N,k,st,_t,Mt,ot,dt){if(e.timeoutHandle=-1,Mt=i.subtreeFlags,Mt&8192||(Mt&16785408)===16785408){Mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:oa},hg(i,m,Mt);var Wt=(m&62914560)===m?Tc-A():(m&4194048)===m?gg-A():0;if(Wt=ZS(Mt,Wt),Wt!==null){Ma=m,e.cancelPendingCommit=Wt(Rg.bind(null,e,i,m,s,l,h,E,N,k,_t,Mt,null,ot,dt)),rs(e,m,E,!st);return}}Rg(e,i,m,s,l,h,E,N,k)}function fS(e){for(var i=e;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var h=s[l],m=h.getSnapshot;h=h.value;try{if(!ei(m(),h))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function rs(e,i,s,l){i&=~oh,i&=~ks,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var h=i;0<h;){var m=31-wt(h),E=1<<m;l[m]=-1,h&=~E}s!==0&&Il(e,s,i)}function Rc(){return(Be&6)===0?(nl(0),!1):!0}function hh(){if(xe!==null){if(Ve===0)var e=xe.return;else e=xe,fa=Os=null,Rf(e),Ar=null,Fo=0,e=xe;for(;e!==null;)Q0(e.alternate,e),e=e.return;xe=null}}function Pr(e,i){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,NS(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),Ma=0,hh(),Ze=e,xe=s=ca(e.current,null),Me=i,Ve=0,si=null,ns=!1,Lr=Dt(e,i),rh=!1,Or=ri=oh=ks=is=on=0,Zn=tl=null,lh=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var h=31-wt(l),m=1<<h;i|=e[h],l&=~m}return Sa=i,Zl(),s}function Sg(e,i){de=null,z.H=Wo,i===Tr||i===ic?(i=Bm(),Ve=3):i===gf?(i=Bm(),Ve=4):Ve=i===qf?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,si=i,xe===null&&(on=1,vc(e,mi(i,e.current)))}function Mg(){var e=ii.current;return e===null?!0:(Me&4194048)===Me?xi===null:(Me&62914560)===Me||(Me&536870912)!==0?e===xi:!1}function Eg(){var e=z.H;return z.H=Wo,e===null?Wo:e}function bg(){var e=z.A;return z.A=cS,e}function Cc(){on=4,ns||(Me&4194048)!==Me&&ii.current!==null||(Lr=!0),(is&134217727)===0&&(ks&134217727)===0||Ze===null||rs(Ze,Me,ri,!1)}function dh(e,i,s){var l=Be;Be|=2;var h=Eg(),m=bg();(Ze!==e||Me!==i)&&(wc=null,Pr(e,i)),i=!1;var E=on;t:do try{if(Ve!==0&&xe!==null){var N=xe,k=si;switch(Ve){case 8:hh(),E=6;break t;case 3:case 2:case 9:case 6:ii.current===null&&(i=!0);var st=Ve;if(Ve=0,si=null,Br(e,N,k,st),s&&Lr){E=0;break t}break;default:st=Ve,Ve=0,si=null,Br(e,N,k,st)}}hS(),E=on;break}catch(_t){Sg(e,_t)}while(!0);return i&&e.shellSuspendCounter++,fa=Os=null,Be=l,z.H=h,z.A=m,xe===null&&(Ze=null,Me=0,Zl()),E}function hS(){for(;xe!==null;)Tg(xe)}function dS(e,i){var s=Be;Be|=2;var l=Eg(),h=bg();Ze!==e||Me!==i?(wc=null,Ac=A()+500,Pr(e,i)):Lr=Dt(e,i);t:do try{if(Ve!==0&&xe!==null){i=xe;var m=si;e:switch(Ve){case 1:Ve=0,si=null,Br(e,i,m,1);break;case 2:case 9:if(zm(m)){Ve=0,si=null,Ag(i);break}i=function(){Ve!==2&&Ve!==9||Ze!==e||(Ve=7),Xi(e)},m.then(i,i);break t;case 3:Ve=7;break t;case 4:Ve=5;break t;case 7:zm(m)?(Ve=0,si=null,Ag(i)):(Ve=0,si=null,Br(e,i,m,7));break;case 5:var E=null;switch(xe.tag){case 26:E=xe.memoizedState;case 5:case 27:var N=xe;if(E?fv(E):N.stateNode.complete){Ve=0,si=null;var k=N.sibling;if(k!==null)xe=k;else{var st=N.return;st!==null?(xe=st,Dc(st)):xe=null}break e}}Ve=0,si=null,Br(e,i,m,5);break;case 6:Ve=0,si=null,Br(e,i,m,6);break;case 8:hh(),on=6;break t;default:throw Error(a(462))}}pS();break}catch(_t){Sg(e,_t)}while(!0);return fa=Os=null,z.H=l,z.A=h,Be=s,xe!==null?0:(Ze=null,Me=0,Zl(),on)}function pS(){for(;xe!==null&&!jt();)Tg(xe)}function Tg(e){var i=Z0(e.alternate,e,Sa);e.memoizedProps=e.pendingProps,i===null?Dc(e):xe=i}function Ag(e){var i=e,s=i.alternate;switch(i.tag){case 15:case 0:i=k0(s,i,i.pendingProps,i.type,void 0,Me);break;case 11:i=k0(s,i,i.pendingProps,i.type.render,i.ref,Me);break;case 5:Rf(i);default:Q0(s,i),i=xe=bm(i,Sa),i=Z0(s,i,Sa)}e.memoizedProps=e.pendingProps,i===null?Dc(e):xe=i}function Br(e,i,s,l){fa=Os=null,Rf(i),Ar=null,Fo=0;var h=i.return;try{if(nS(e,h,i,s,Me)){on=1,vc(e,mi(s,e.current)),xe=null;return}}catch(m){if(h!==null)throw xe=h,m;on=1,vc(e,mi(s,e.current)),xe=null;return}i.flags&32768?(be||l===1?e=!0:Lr||(Me&536870912)!==0?e=!1:(ns=e=!0,(l===2||l===9||l===3||l===6)&&(l=ii.current,l!==null&&l.tag===13&&(l.flags|=16384))),wg(i,e)):Dc(i)}function Dc(e){var i=e;do{if((i.flags&32768)!==0){wg(i,ns);return}e=i.return;var s=sS(i.alternate,i,Sa);if(s!==null){xe=s;return}if(i=i.sibling,i!==null){xe=i;return}xe=i=e}while(i!==null);on===0&&(on=5)}function wg(e,i){do{var s=rS(e.alternate,e);if(s!==null){s.flags&=32767,xe=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(e=e.sibling,e!==null)){xe=e;return}xe=e=s}while(e!==null);on=6,xe=null}function Rg(e,i,s,l,h,m,E,N,k){e.cancelPendingCommit=null;do Nc();while(_n!==0);if((Be&6)!==0)throw Error(a(327));if(i!==null){if(i===e.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=tf,bi(e,s,m,E,N,k),e===Ze&&(xe=Ze=null,Me=0),zr=i,ss=e,Ma=s,ch=m,uh=h,vg=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,_S(pt,function(){return Lg(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=z.T,z.T=null,h=H.p,H.p=2,E=Be,Be|=4;try{oS(e,i,s)}finally{Be=E,H.p=h,z.T=l}}_n=1,Cg(),Dg(),Ng()}}function Cg(){if(_n===1){_n=0;var e=ss,i=zr,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=z.T,z.T=null;var l=H.p;H.p=2;var h=Be;Be|=4;try{cg(i,e);var m=Th,E=mm(e.containerInfo),N=m.focusedElem,k=m.selectionRange;if(E!==N&&N&&N.ownerDocument&&pm(N.ownerDocument.documentElement,N)){if(k!==null&&Zu(N)){var st=k.start,_t=k.end;if(_t===void 0&&(_t=st),"selectionStart"in N)N.selectionStart=st,N.selectionEnd=Math.min(_t,N.value.length);else{var Mt=N.ownerDocument||document,ot=Mt&&Mt.defaultView||window;if(ot.getSelection){var dt=ot.getSelection(),Wt=N.textContent.length,re=Math.min(k.start,Wt),Ye=k.end===void 0?re:Math.min(k.end,Wt);!dt.extend&&re>Ye&&(E=Ye,Ye=re,re=E);var et=dm(N,re),K=dm(N,Ye);if(et&&K&&(dt.rangeCount!==1||dt.anchorNode!==et.node||dt.anchorOffset!==et.offset||dt.focusNode!==K.node||dt.focusOffset!==K.offset)){var at=Mt.createRange();at.setStart(et.node,et.offset),dt.removeAllRanges(),re>Ye?(dt.addRange(at),dt.extend(K.node,K.offset)):(at.setEnd(K.node,K.offset),dt.addRange(at))}}}}for(Mt=[],dt=N;dt=dt.parentNode;)dt.nodeType===1&&Mt.push({element:dt,left:dt.scrollLeft,top:dt.scrollTop});for(typeof N.focus=="function"&&N.focus(),N=0;N<Mt.length;N++){var St=Mt[N];St.element.scrollLeft=St.left,St.element.scrollTop=St.top}}kc=!!bh,Th=bh=null}finally{Be=h,H.p=l,z.T=s}}e.current=i,_n=2}}function Dg(){if(_n===2){_n=0;var e=ss,i=zr,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=z.T,z.T=null;var l=H.p;H.p=2;var h=Be;Be|=4;try{ag(e,i.alternate,i)}finally{Be=h,H.p=l,z.T=s}}_n=3}}function Ng(){if(_n===4||_n===3){_n=0,I();var e=ss,i=zr,s=Ma,l=vg;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?_n=5:(_n=0,zr=ss=null,Ug(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(as=null),lr(s),i=i.stateNode,gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(ht,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=z.T,h=H.p,H.p=2,z.T=null;try{for(var m=e.onRecoverableError,E=0;E<l.length;E++){var N=l[E];m(N.value,{componentStack:N.stack})}}finally{z.T=i,H.p=h}}(Ma&3)!==0&&Nc(),Xi(e),h=e.pendingLanes,(s&261930)!==0&&(h&42)!==0?e===fh?el++:(el=0,fh=e):el=0,nl(0)}}function Ug(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,Po(i)))}function Nc(){return Cg(),Dg(),Ng(),Lg()}function Lg(){if(_n!==5)return!1;var e=ss,i=ch;ch=0;var s=lr(Ma),l=z.T,h=H.p;try{H.p=32>s?32:s,z.T=null,s=uh,uh=null;var m=ss,E=Ma;if(_n=0,zr=ss=null,Ma=0,(Be&6)!==0)throw Error(a(331));var N=Be;if(Be|=4,pg(m.current),fg(m,m.current,E,s),Be=N,nl(0,!1),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(ht,m)}catch{}return!0}finally{H.p=h,z.T=l,Ug(e,i)}}function Og(e,i,s){i=mi(s,i),i=kf(e.stateNode,i,2),e=Ja(e,i,2),e!==null&&(Pn(e,2),Xi(e))}function ke(e,i,s){if(e.tag===3)Og(e,e,s);else for(;i!==null;){if(i.tag===3){Og(i,e,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(as===null||!as.has(l))){e=mi(s,e),s=z0(2),l=Ja(i,s,2),l!==null&&(P0(s,l,i,e),Pn(l,2),Xi(l));break}}i=i.return}}function ph(e,i,s){var l=e.pingCache;if(l===null){l=e.pingCache=new uS;var h=new Set;l.set(i,h)}else h=l.get(i),h===void 0&&(h=new Set,l.set(i,h));h.has(s)||(rh=!0,h.add(s),e=mS.bind(null,e,i,s),i.then(e,e))}function mS(e,i,s){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,Ze===e&&(Me&s)===s&&(on===4||on===3&&(Me&62914560)===Me&&300>A()-Tc?(Be&2)===0&&Pr(e,0):oh|=s,Or===Me&&(Or=0)),Xi(e)}function zg(e,i){i===0&&(i=He()),e=Ns(e,i),e!==null&&(Pn(e,i),Xi(e))}function gS(e){var i=e.memoizedState,s=0;i!==null&&(s=i.retryLane),zg(e,s)}function vS(e,i){var s=0;switch(e.tag){case 31:case 13:var l=e.stateNode,h=e.memoizedState;h!==null&&(s=h.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),zg(e,s)}function _S(e,i){return ve(e,i)}var Uc=null,Fr=null,mh=!1,Lc=!1,gh=!1,os=0;function Xi(e){e!==Fr&&e.next===null&&(Fr===null?Uc=Fr=e:Fr=Fr.next=e),Lc=!0,mh||(mh=!0,yS())}function nl(e,i){if(!gh&&Lc){gh=!0;do for(var s=!1,l=Uc;l!==null;){if(e!==0){var h=l.pendingLanes;if(h===0)var m=0;else{var E=l.suspendedLanes,N=l.pingedLanes;m=(1<<31-wt(42|e)+1)-1,m&=h&~(E&~N),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(s=!0,Ig(l,m))}else m=Me,m=yt(l,l===Ze?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||Dt(l,m)||(s=!0,Ig(l,m));l=l.next}while(s);gh=!1}}function xS(){Pg()}function Pg(){Lc=mh=!1;var e=0;os!==0&&DS()&&(e=os);for(var i=A(),s=null,l=Uc;l!==null;){var h=l.next,m=Bg(l,i);m===0?(l.next=null,s===null?Uc=h:s.next=h,h===null&&(Fr=s)):(s=l,(e!==0||(m&3)!==0)&&(Lc=!0)),l=h}_n!==0&&_n!==5||nl(e),os!==0&&(os=0)}function Bg(e,i){for(var s=e.suspendedLanes,l=e.pingedLanes,h=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var E=31-wt(m),N=1<<E,k=h[E];k===-1?((N&s)===0||(N&l)!==0)&&(h[E]=ae(N,i)):k<=i&&(e.expiredLanes|=N),m&=~N}if(i=Ze,s=Me,s=yt(e,e===i?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,s===0||e===i&&(Ve===2||Ve===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Se(l),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||Dt(e,s)){if(i=s&-s,i===e.callbackPriority)return i;switch(l!==null&&Se(l),lr(s)){case 2:case 8:s=Tt;break;case 32:s=pt;break;case 268435456:s=Lt;break;default:s=pt}return l=Fg.bind(null,e),s=ve(s,l),e.callbackPriority=i,e.callbackNode=s,i}return l!==null&&l!==null&&Se(l),e.callbackPriority=2,e.callbackNode=null,2}function Fg(e,i){if(_n!==0&&_n!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(Nc()&&e.callbackNode!==s)return null;var l=Me;return l=yt(e,e===Ze?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(xg(e,l,i),Bg(e,A()),e.callbackNode!=null&&e.callbackNode===s?Fg.bind(null,e):null)}function Ig(e,i){if(Nc())return null;xg(e,i,!0)}function yS(){US(function(){(Be&6)!==0?ve(xt,xS):Pg()})}function vh(){if(os===0){var e=Er;e===0&&(e=Ut,Ut<<=1,(Ut&261888)===0&&(Ut=256)),os=e}return os}function Hg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Gl(""+e)}function Gg(e,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,e.id&&s.setAttribute("form",e.id),i.parentNode.insertBefore(s,i),e=new FormData(e),s.parentNode.removeChild(s),e}function SS(e,i,s,l,h){if(i==="submit"&&s&&s.stateNode===h){var m=Hg((h[bn]||null).action),E=l.submitter;E&&(i=(i=E[bn]||null)?Hg(i.formAction):E.getAttribute("formAction"),i!==null&&(m=i,E=null));var N=new Xl("action","action",null,l,h);e.push({event:N,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(os!==0){var k=E?Gg(h,E):new FormData(h);Bf(s,{pending:!0,data:k,method:h.method,action:m},null,k)}}else typeof m=="function"&&(N.preventDefault(),k=E?Gg(h,E):new FormData(h),Bf(s,{pending:!0,data:k,method:h.method,action:m},m,k))},currentTarget:h}]})}}for(var _h=0;_h<$u.length;_h++){var xh=$u[_h],MS=xh.toLowerCase(),ES=xh[0].toUpperCase()+xh.slice(1);wi(MS,"on"+ES)}wi(_m,"onAnimationEnd"),wi(xm,"onAnimationIteration"),wi(ym,"onAnimationStart"),wi("dblclick","onDoubleClick"),wi("focusin","onFocus"),wi("focusout","onBlur"),wi(Iy,"onTransitionRun"),wi(Hy,"onTransitionStart"),wi(Gy,"onTransitionCancel"),wi(Sm,"onTransitionEnd"),it("onMouseEnter",["mouseout","mouseover"]),it("onMouseLeave",["mouseout","mouseover"]),it("onPointerEnter",["pointerout","pointerover"]),it("onPointerLeave",["pointerout","pointerover"]),rt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),rt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),rt("onBeforeInput",["compositionend","keypress","textInput","paste"]),rt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),rt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),rt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var il="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(il));function Vg(e,i){i=(i&4)!==0;for(var s=0;s<e.length;s++){var l=e[s],h=l.event;l=l.listeners;t:{var m=void 0;if(i)for(var E=l.length-1;0<=E;E--){var N=l[E],k=N.instance,st=N.currentTarget;if(N=N.listener,k!==m&&h.isPropagationStopped())break t;m=N,h.currentTarget=st;try{m(h)}catch(_t){jl(_t)}h.currentTarget=null,m=k}else for(E=0;E<l.length;E++){if(N=l[E],k=N.instance,st=N.currentTarget,N=N.listener,k!==m&&h.isPropagationStopped())break t;m=N,h.currentTarget=st;try{m(h)}catch(_t){jl(_t)}h.currentTarget=null,m=k}}}}function ye(e,i){var s=i[cr];s===void 0&&(s=i[cr]=new Set);var l=e+"__bubble";s.has(l)||(kg(i,e,2,!1),s.add(l))}function yh(e,i,s){var l=0;i&&(l|=4),kg(s,e,l,i)}var Oc="_reactListening"+Math.random().toString(36).slice(2);function Sh(e){if(!e[Oc]){e[Oc]=!0,tt.forEach(function(s){s!=="selectionchange"&&(bS.has(s)||yh(s,!1,e),yh(s,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[Oc]||(i[Oc]=!0,yh("selectionchange",!1,i))}}function kg(e,i,s,l){switch(_v(i)){case 2:var h=JS;break;case 8:h=$S;break;default:h=Ph}s=h.bind(null,i,s,e),h=void 0,!Hu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),l?h!==void 0?e.addEventListener(i,s,{capture:!0,passive:h}):e.addEventListener(i,s,!0):h!==void 0?e.addEventListener(i,s,{passive:h}):e.addEventListener(i,s,!1)}function Mh(e,i,s,l,h){var m=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var N=l.stateNode.containerInfo;if(N===h)break;if(E===4)for(E=l.return;E!==null;){var k=E.tag;if((k===3||k===4)&&E.stateNode.containerInfo===h)return;E=E.return}for(;N!==null;){if(E=Va(N),E===null)return;if(k=E.tag,k===5||k===6||k===26||k===27){l=m=E;continue t}N=N.parentNode}}l=l.return}jp(function(){var st=m,_t=Fu(s),Mt=[];t:{var ot=Mm.get(e);if(ot!==void 0){var dt=Xl,Wt=e;switch(e){case"keypress":if(kl(s)===0)break t;case"keydown":case"keyup":dt=vy;break;case"focusin":Wt="focus",dt=qu;break;case"focusout":Wt="blur",dt=qu;break;case"beforeblur":case"afterblur":dt=qu;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":dt=Qp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":dt=sy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":dt=yy;break;case _m:case xm:case ym:dt=ly;break;case Sm:dt=My;break;case"scroll":case"scrollend":dt=iy;break;case"wheel":dt=by;break;case"copy":case"cut":case"paste":dt=uy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":dt=$p;break;case"toggle":case"beforetoggle":dt=Ay}var re=(i&4)!==0,Ye=!re&&(e==="scroll"||e==="scrollend"),et=re?ot!==null?ot+"Capture":null:ot;re=[];for(var K=st,at;K!==null;){var St=K;if(at=St.stateNode,St=St.tag,St!==5&&St!==26&&St!==27||at===null||et===null||(St=To(K,et),St!=null&&re.push(al(K,St,at))),Ye)break;K=K.return}0<re.length&&(ot=new dt(ot,Wt,null,s,_t),Mt.push({event:ot,listeners:re}))}}if((i&7)===0){t:{if(ot=e==="mouseover"||e==="pointerover",dt=e==="mouseout"||e==="pointerout",ot&&s!==Bu&&(Wt=s.relatedTarget||s.fromElement)&&(Va(Wt)||Wt[Ti]))break t;if((dt||ot)&&(ot=_t.window===_t?_t:(ot=_t.ownerDocument)?ot.defaultView||ot.parentWindow:window,dt?(Wt=s.relatedTarget||s.toElement,dt=st,Wt=Wt?Va(Wt):null,Wt!==null&&(Ye=o(Wt),re=Wt.tag,Wt!==Ye||re!==5&&re!==27&&re!==6)&&(Wt=null)):(dt=null,Wt=st),dt!==Wt)){if(re=Qp,St="onMouseLeave",et="onMouseEnter",K="mouse",(e==="pointerout"||e==="pointerover")&&(re=$p,St="onPointerLeave",et="onPointerEnter",K="pointer"),Ye=dt==null?ot:ws(dt),at=Wt==null?ot:ws(Wt),ot=new re(St,K+"leave",dt,s,_t),ot.target=Ye,ot.relatedTarget=at,St=null,Va(_t)===st&&(re=new re(et,K+"enter",Wt,s,_t),re.target=at,re.relatedTarget=Ye,St=re),Ye=St,dt&&Wt)e:{for(re=TS,et=dt,K=Wt,at=0,St=et;St;St=re(St))at++;St=0;for(var ee=K;ee;ee=re(ee))St++;for(;0<at-St;)et=re(et),at--;for(;0<St-at;)K=re(K),St--;for(;at--;){if(et===K||K!==null&&et===K.alternate){re=et;break e}et=re(et),K=re(K)}re=null}else re=null;dt!==null&&qg(Mt,ot,dt,re,!1),Wt!==null&&Ye!==null&&qg(Mt,Ye,Wt,re,!0)}}t:{if(ot=st?ws(st):window,dt=ot.nodeName&&ot.nodeName.toLowerCase(),dt==="select"||dt==="input"&&ot.type==="file")var De=om;else if(sm(ot))if(lm)De=Py;else{De=Oy;var Jt=Ly}else dt=ot.nodeName,!dt||dt.toLowerCase()!=="input"||ot.type!=="checkbox"&&ot.type!=="radio"?st&&Ai(st.elementType)&&(De=om):De=zy;if(De&&(De=De(e,st))){rm(Mt,De,s,_t);break t}Jt&&Jt(e,ot,st),e==="focusout"&&st&&ot.type==="number"&&st.memoizedProps.value!=null&&An(ot,"number",ot.value)}switch(Jt=st?ws(st):window,e){case"focusin":(sm(Jt)||Jt.contentEditable==="true")&&(mr=Jt,Ku=st,Lo=null);break;case"focusout":Lo=Ku=mr=null;break;case"mousedown":Qu=!0;break;case"contextmenu":case"mouseup":case"dragend":Qu=!1,gm(Mt,s,_t);break;case"selectionchange":if(Fy)break;case"keydown":case"keyup":gm(Mt,s,_t)}var me;if(Wu)t:{switch(e){case"compositionstart":var Ee="onCompositionStart";break t;case"compositionend":Ee="onCompositionEnd";break t;case"compositionupdate":Ee="onCompositionUpdate";break t}Ee=void 0}else pr?im(e,s)&&(Ee="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(Ee="onCompositionStart");Ee&&(tm&&s.locale!=="ko"&&(pr||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&pr&&(me=Zp()):(Xa=_t,Gu="value"in Xa?Xa.value:Xa.textContent,pr=!0)),Jt=zc(st,Ee),0<Jt.length&&(Ee=new Jp(Ee,e,null,s,_t),Mt.push({event:Ee,listeners:Jt}),me?Ee.data=me:(me=am(s),me!==null&&(Ee.data=me)))),(me=Ry?Cy(e,s):Dy(e,s))&&(Ee=zc(st,"onBeforeInput"),0<Ee.length&&(Jt=new Jp("onBeforeInput","beforeinput",null,s,_t),Mt.push({event:Jt,listeners:Ee}),Jt.data=me)),SS(Mt,e,st,s,_t)}Vg(Mt,i)})}function al(e,i,s){return{instance:e,listener:i,currentTarget:s}}function zc(e,i){for(var s=i+"Capture",l=[];e!==null;){var h=e,m=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||m===null||(h=To(e,s),h!=null&&l.unshift(al(e,h,m)),h=To(e,i),h!=null&&l.push(al(e,h,m))),e.tag===3)return l;e=e.return}return[]}function TS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function qg(e,i,s,l,h){for(var m=i._reactName,E=[];s!==null&&s!==l;){var N=s,k=N.alternate,st=N.stateNode;if(N=N.tag,k!==null&&k===l)break;N!==5&&N!==26&&N!==27||st===null||(k=st,h?(st=To(s,m),st!=null&&E.unshift(al(s,st,k))):h||(st=To(s,m),st!=null&&E.push(al(s,st,k)))),s=s.return}E.length!==0&&e.push({event:i,listeners:E})}var AS=/\r\n?/g,wS=/\u0000|\uFFFD/g;function Xg(e){return(typeof e=="string"?e:""+e).replace(AS,`
`).replace(wS,"")}function Wg(e,i){return i=Xg(i),Xg(e)===i}function We(e,i,s,l,h,m){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||vn(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&vn(e,""+l);break;case"className":ne(e,"class",l);break;case"tabIndex":ne(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ne(e,s,l);break;case"style":fr(e,l,m);break;case"data":if(i!=="object"){ne(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){e.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=Gl(""+l),e.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(s==="formAction"?(i!=="input"&&We(e,i,"name",h.name,h,null),We(e,i,"formEncType",h.formEncType,h,null),We(e,i,"formMethod",h.formMethod,h,null),We(e,i,"formTarget",h.formTarget,h,null)):(We(e,i,"encType",h.encType,h,null),We(e,i,"method",h.method,h,null),We(e,i,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=Gl(""+l),e.setAttribute(s,l);break;case"onClick":l!=null&&(e.onclick=oa);break;case"onScroll":l!=null&&ye("scroll",e);break;case"onScrollEnd":l!=null&&ye("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}s=Gl(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""+l):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":l===!0?e.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,l):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(s,l):e.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(s):e.setAttribute(s,l);break;case"popover":ye("beforetoggle",e),ye("toggle",e),Kt(e,"popover",l);break;case"xlinkActuate":Qt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Qt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Qt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Qt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Qt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Qt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Qt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Qt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Qt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Kt(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=ey.get(s)||s,Kt(e,s,l))}}function Eh(e,i,s,l,h,m){switch(s){case"style":fr(e,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"children":typeof l=="string"?vn(e,l):(typeof l=="number"||typeof l=="bigint")&&vn(e,""+l);break;case"onScroll":l!=null&&ye("scroll",e);break;case"onScrollEnd":l!=null&&ye("scrollend",e);break;case"onClick":l!=null&&(e.onclick=oa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ut.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(h=s.endsWith("Capture"),i=s.slice(2,h?s.length-7:void 0),m=e[bn]||null,m=m!=null?m[s]:null,typeof m=="function"&&e.removeEventListener(i,m,h),typeof l=="function")){typeof m!="function"&&m!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(i,l,h);break t}s in e?e[s]=l:l===!0?e.setAttribute(s,""):Kt(e,s,l)}}}function Ln(e,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ye("error",e),ye("load",e);var l=!1,h=!1,m;for(m in s)if(s.hasOwnProperty(m)){var E=s[m];if(E!=null)switch(m){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:We(e,i,m,E,s,null)}}h&&We(e,i,"srcSet",s.srcSet,s,null),l&&We(e,i,"src",s.src,s,null);return;case"input":ye("invalid",e);var N=m=E=h=null,k=null,st=null;for(l in s)if(s.hasOwnProperty(l)){var _t=s[l];if(_t!=null)switch(l){case"name":h=_t;break;case"type":E=_t;break;case"checked":k=_t;break;case"defaultChecked":st=_t;break;case"value":m=_t;break;case"defaultValue":N=_t;break;case"children":case"dangerouslySetInnerHTML":if(_t!=null)throw Error(a(137,i));break;default:We(e,i,l,_t,s,null)}}ra(e,m,N,k,st,E,h,!1);return;case"select":ye("invalid",e),l=E=m=null;for(h in s)if(s.hasOwnProperty(h)&&(N=s[h],N!=null))switch(h){case"value":m=N;break;case"defaultValue":E=N;break;case"multiple":l=N;default:We(e,i,h,N,s,null)}i=m,s=E,e.multiple=!!l,i!=null?di(e,!!l,i,!1):s!=null&&di(e,!!l,s,!0);return;case"textarea":ye("invalid",e),m=h=l=null;for(E in s)if(s.hasOwnProperty(E)&&(N=s[E],N!=null))switch(E){case"value":l=N;break;case"defaultValue":h=N;break;case"children":m=N;break;case"dangerouslySetInnerHTML":if(N!=null)throw Error(a(91));break;default:We(e,i,E,N,s,null)}wn(e,l,h,m);return;case"option":for(k in s)s.hasOwnProperty(k)&&(l=s[k],l!=null)&&(k==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":We(e,i,k,l,s,null));return;case"dialog":ye("beforetoggle",e),ye("toggle",e),ye("cancel",e),ye("close",e);break;case"iframe":case"object":ye("load",e);break;case"video":case"audio":for(l=0;l<il.length;l++)ye(il[l],e);break;case"image":ye("error",e),ye("load",e);break;case"details":ye("toggle",e);break;case"embed":case"source":case"link":ye("error",e),ye("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(st in s)if(s.hasOwnProperty(st)&&(l=s[st],l!=null))switch(st){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:We(e,i,st,l,s,null)}return;default:if(Ai(i)){for(_t in s)s.hasOwnProperty(_t)&&(l=s[_t],l!==void 0&&Eh(e,i,_t,l,s,void 0));return}}for(N in s)s.hasOwnProperty(N)&&(l=s[N],l!=null&&We(e,i,N,l,s,null))}function RS(e,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,m=null,E=null,N=null,k=null,st=null,_t=null;for(dt in s){var Mt=s[dt];if(s.hasOwnProperty(dt)&&Mt!=null)switch(dt){case"checked":break;case"value":break;case"defaultValue":k=Mt;default:l.hasOwnProperty(dt)||We(e,i,dt,null,l,Mt)}}for(var ot in l){var dt=l[ot];if(Mt=s[ot],l.hasOwnProperty(ot)&&(dt!=null||Mt!=null))switch(ot){case"type":m=dt;break;case"name":h=dt;break;case"checked":st=dt;break;case"defaultChecked":_t=dt;break;case"value":E=dt;break;case"defaultValue":N=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(a(137,i));break;default:dt!==Mt&&We(e,i,ot,dt,l,Mt)}}Tn(e,E,N,k,st,_t,m,h);return;case"select":dt=E=N=ot=null;for(m in s)if(k=s[m],s.hasOwnProperty(m)&&k!=null)switch(m){case"value":break;case"multiple":dt=k;default:l.hasOwnProperty(m)||We(e,i,m,null,l,k)}for(h in l)if(m=l[h],k=s[h],l.hasOwnProperty(h)&&(m!=null||k!=null))switch(h){case"value":ot=m;break;case"defaultValue":N=m;break;case"multiple":E=m;default:m!==k&&We(e,i,h,m,l,k)}i=N,s=E,l=dt,ot!=null?di(e,!!s,ot,!1):!!l!=!!s&&(i!=null?di(e,!!s,i,!0):di(e,!!s,s?[]:"",!1));return;case"textarea":dt=ot=null;for(N in s)if(h=s[N],s.hasOwnProperty(N)&&h!=null&&!l.hasOwnProperty(N))switch(N){case"value":break;case"children":break;default:We(e,i,N,null,l,h)}for(E in l)if(h=l[E],m=s[E],l.hasOwnProperty(E)&&(h!=null||m!=null))switch(E){case"value":ot=h;break;case"defaultValue":dt=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(a(91));break;default:h!==m&&We(e,i,E,h,l,m)}Ge(e,ot,dt);return;case"option":for(var Wt in s)ot=s[Wt],s.hasOwnProperty(Wt)&&ot!=null&&!l.hasOwnProperty(Wt)&&(Wt==="selected"?e.selected=!1:We(e,i,Wt,null,l,ot));for(k in l)ot=l[k],dt=s[k],l.hasOwnProperty(k)&&ot!==dt&&(ot!=null||dt!=null)&&(k==="selected"?e.selected=ot&&typeof ot!="function"&&typeof ot!="symbol":We(e,i,k,ot,l,dt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var re in s)ot=s[re],s.hasOwnProperty(re)&&ot!=null&&!l.hasOwnProperty(re)&&We(e,i,re,null,l,ot);for(st in l)if(ot=l[st],dt=s[st],l.hasOwnProperty(st)&&ot!==dt&&(ot!=null||dt!=null))switch(st){case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(a(137,i));break;default:We(e,i,st,ot,l,dt)}return;default:if(Ai(i)){for(var Ye in s)ot=s[Ye],s.hasOwnProperty(Ye)&&ot!==void 0&&!l.hasOwnProperty(Ye)&&Eh(e,i,Ye,void 0,l,ot);for(_t in l)ot=l[_t],dt=s[_t],!l.hasOwnProperty(_t)||ot===dt||ot===void 0&&dt===void 0||Eh(e,i,_t,ot,l,dt);return}}for(var et in s)ot=s[et],s.hasOwnProperty(et)&&ot!=null&&!l.hasOwnProperty(et)&&We(e,i,et,null,l,ot);for(Mt in l)ot=l[Mt],dt=s[Mt],!l.hasOwnProperty(Mt)||ot===dt||ot==null&&dt==null||We(e,i,Mt,ot,l,dt)}function Yg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function CS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,i=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var h=s[l],m=h.transferSize,E=h.initiatorType,N=h.duration;if(m&&N&&Yg(E)){for(E=0,N=h.responseEnd,l+=1;l<s.length;l++){var k=s[l],st=k.startTime;if(st>N)break;var _t=k.transferSize,Mt=k.initiatorType;_t&&Yg(Mt)&&(k=k.responseEnd,E+=_t*(k<N?1:(N-st)/(k-st)))}if(--l,i+=8*(m+E)/(h.duration/1e3),e++,10<e)break}}if(0<e)return i/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var bh=null,Th=null;function Pc(e){return e.nodeType===9?e:e.ownerDocument}function jg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Zg(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function Ah(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var wh=null;function DS(){var e=window.event;return e&&e.type==="popstate"?e===wh?!1:(wh=e,!0):(wh=null,!1)}var Kg=typeof setTimeout=="function"?setTimeout:void 0,NS=typeof clearTimeout=="function"?clearTimeout:void 0,Qg=typeof Promise=="function"?Promise:void 0,US=typeof queueMicrotask=="function"?queueMicrotask:typeof Qg<"u"?function(e){return Qg.resolve(null).then(e).catch(LS)}:Kg;function LS(e){setTimeout(function(){throw e})}function ls(e){return e==="head"}function Jg(e,i){var s=i,l=0;do{var h=s.nextSibling;if(e.removeChild(s),h&&h.nodeType===8)if(s=h.data,s==="/$"||s==="/&"){if(l===0){e.removeChild(h),Vr(i);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")sl(e.ownerDocument.documentElement);else if(s==="head"){s=e.ownerDocument.head,sl(s);for(var m=s.firstChild;m;){var E=m.nextSibling,N=m.nodeName;m[As]||N==="SCRIPT"||N==="STYLE"||N==="LINK"&&m.rel.toLowerCase()==="stylesheet"||s.removeChild(m),m=E}}else s==="body"&&sl(e.ownerDocument.body);s=h}while(s);Vr(i)}function $g(e,i){var s=e;e=0;do{var l=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(e===0)break;e--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||e++;s=l}while(s)}function Rh(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Rh(s),bo(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function OS(e,i,s,l){for(;e.nodeType===1;){var h=s;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[As])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var m=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=yi(e.nextSibling),e===null)break}return null}function zS(e,i,s){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=yi(e.nextSibling),e===null))return null;return e}function tv(e,i){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=yi(e.nextSibling),e===null))return null;return e}function Ch(e){return e.data==="$?"||e.data==="$~"}function Dh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function PS(e,i){var s=e.ownerDocument;if(e.data==="$~")e._reactRetry=i;else if(e.data!=="$?"||s.readyState!=="loading")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function yi(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return e}var Nh=null;function ev(e){e=e.nextSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="/$"||s==="/&"){if(i===0)return yi(e.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}e=e.nextSibling}return null}function nv(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return e;i--}else s!=="/$"&&s!=="/&"||i++}e=e.previousSibling}return null}function iv(e,i,s){switch(i=Pc(s),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function sl(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);bo(e)}var Si=new Map,av=new Set;function Bc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ea=H.d;H.d={f:BS,r:FS,D:IS,C:HS,L:GS,m:VS,X:qS,S:kS,M:XS};function BS(){var e=Ea.f(),i=Rc();return e||i}function FS(e){var i=ka(e);i!==null&&i.tag===5&&i.type==="form"?S0(i):Ea.r(e)}var Ir=typeof document>"u"?null:document;function sv(e,i,s){var l=Ir;if(l&&typeof i=="string"&&i){var h=ce(i);h='link[rel="'+e+'"][href="'+h+'"]',typeof s=="string"&&(h+='[crossorigin="'+s+'"]'),av.has(h)||(av.add(h),e={rel:e,crossOrigin:s,href:i},l.querySelector(h)===null&&(i=l.createElement("link"),Ln(i,"link",e),U(i),l.head.appendChild(i)))}}function IS(e){Ea.D(e),sv("dns-prefetch",e,null)}function HS(e,i){Ea.C(e,i),sv("preconnect",e,i)}function GS(e,i,s){Ea.L(e,i,s);var l=Ir;if(l&&e&&i){var h='link[rel="preload"][as="'+ce(i)+'"]';i==="image"&&s&&s.imageSrcSet?(h+='[imagesrcset="'+ce(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(h+='[imagesizes="'+ce(s.imageSizes)+'"]')):h+='[href="'+ce(e)+'"]';var m=h;switch(i){case"style":m=Hr(e);break;case"script":m=Gr(e)}Si.has(m)||(e=_({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:e,as:i},s),Si.set(m,e),l.querySelector(h)!==null||i==="style"&&l.querySelector(rl(m))||i==="script"&&l.querySelector(ol(m))||(i=l.createElement("link"),Ln(i,"link",e),U(i),l.head.appendChild(i)))}}function VS(e,i){Ea.m(e,i);var s=Ir;if(s&&e){var l=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+ce(l)+'"][href="'+ce(e)+'"]',m=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Gr(e)}if(!Si.has(m)&&(e=_({rel:"modulepreload",href:e},i),Si.set(m,e),s.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(ol(m)))return}l=s.createElement("link"),Ln(l,"link",e),U(l),s.head.appendChild(l)}}}function kS(e,i,s){Ea.S(e,i,s);var l=Ir;if(l&&e){var h=qa(l).hoistableStyles,m=Hr(e);i=i||"default";var E=h.get(m);if(!E){var N={loading:0,preload:null};if(E=l.querySelector(rl(m)))N.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":i},s),(s=Si.get(m))&&Uh(e,s);var k=E=l.createElement("link");U(k),Ln(k,"link",e),k._p=new Promise(function(st,_t){k.onload=st,k.onerror=_t}),k.addEventListener("load",function(){N.loading|=1}),k.addEventListener("error",function(){N.loading|=2}),N.loading|=4,Fc(E,i,l)}E={type:"stylesheet",instance:E,count:1,state:N},h.set(m,E)}}}function qS(e,i){Ea.X(e,i);var s=Ir;if(s&&e){var l=qa(s).hoistableScripts,h=Gr(e),m=l.get(h);m||(m=s.querySelector(ol(h)),m||(e=_({src:e,async:!0},i),(i=Si.get(h))&&Lh(e,i),m=s.createElement("script"),U(m),Ln(m,"link",e),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(h,m))}}function XS(e,i){Ea.M(e,i);var s=Ir;if(s&&e){var l=qa(s).hoistableScripts,h=Gr(e),m=l.get(h);m||(m=s.querySelector(ol(h)),m||(e=_({src:e,async:!0,type:"module"},i),(i=Si.get(h))&&Lh(e,i),m=s.createElement("script"),U(m),Ln(m,"link",e),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(h,m))}}function rv(e,i,s,l){var h=(h=nt.current)?Bc(h):null;if(!h)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=Hr(s.href),s=qa(h).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=Hr(s.href);var m=qa(h).hoistableStyles,E=m.get(e);if(E||(h=h.ownerDocument||h,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,E),(m=h.querySelector(rl(e)))&&!m._p&&(E.instance=m,E.state.loading=5),Si.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Si.set(e,s),m||WS(h,e,s,E.state))),i&&l===null)throw Error(a(528,""));return E}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Gr(s),s=qa(h).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Hr(e){return'href="'+ce(e)+'"'}function rl(e){return'link[rel="stylesheet"]['+e+"]"}function ov(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function WS(e,i,s,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Ln(i,"link",s),U(i),e.head.appendChild(i))}function Gr(e){return'[src="'+ce(e)+'"]'}function ol(e){return"script[async]"+e}function lv(e,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+ce(s.href)+'"]');if(l)return i.instance=l,U(l),l;var h=_({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),U(l),Ln(l,"style",h),Fc(l,s.precedence,e),i.instance=l;case"stylesheet":h=Hr(s.href);var m=e.querySelector(rl(h));if(m)return i.state.loading|=4,i.instance=m,U(m),m;l=ov(s),(h=Si.get(h))&&Uh(l,h),m=(e.ownerDocument||e).createElement("link"),U(m);var E=m;return E._p=new Promise(function(N,k){E.onload=N,E.onerror=k}),Ln(m,"link",l),i.state.loading|=4,Fc(m,s.precedence,e),i.instance=m;case"script":return m=Gr(s.src),(h=e.querySelector(ol(m)))?(i.instance=h,U(h),h):(l=s,(h=Si.get(m))&&(l=_({},s),Lh(l,h)),e=e.ownerDocument||e,h=e.createElement("script"),U(h),Ln(h,"link",l),e.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Fc(l,s.precedence,e));return i.instance}function Fc(e,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,m=h,E=0;E<l.length;E++){var N=l[E];if(N.dataset.precedence===i)m=N;else if(m!==h)break}m?m.parentNode.insertBefore(e,m.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(e,i.firstChild))}function Uh(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function Lh(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var Ic=null;function cv(e,i,s){if(Ic===null){var l=new Map,h=Ic=new Map;h.set(s,l)}else h=Ic,l=h.get(s),l||(l=new Map,h.set(s,l));if(l.has(e))return l;for(l.set(e,null),s=s.getElementsByTagName(e),h=0;h<s.length;h++){var m=s[h];if(!(m[As]||m[fn]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var E=m.getAttribute(i)||"";E=e+E;var N=l.get(E);N?N.push(m):l.set(E,[m])}}return l}function uv(e,i,s){e=e.ownerDocument||e,e.head.insertBefore(s,i==="title"?e.querySelector("head > title"):null)}function YS(e,i,s){if(s===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;return i.rel==="stylesheet"?(e=i.disabled,typeof i.precedence=="string"&&e==null):!0;case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function fv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function jS(e,i,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var h=Hr(l.href),m=i.querySelector(rl(h));if(m){i=m._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(e.count++,e=Hc.bind(e),i.then(e,e)),s.state.loading|=4,s.instance=m,U(m);return}m=i.ownerDocument||i,l=ov(l),(h=Si.get(h))&&Uh(l,h),m=m.createElement("link"),U(m);var E=m;E._p=new Promise(function(N,k){E.onload=N,E.onerror=k}),Ln(m,"link",l),s.instance=m}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(e.count++,s=Hc.bind(e),i.addEventListener("load",s),i.addEventListener("error",s))}}var Oh=0;function ZS(e,i){return e.stylesheets&&e.count===0&&Vc(e,e.stylesheets),0<e.count||0<e.imgCount?function(s){var l=setTimeout(function(){if(e.stylesheets&&Vc(e,e.stylesheets),e.unsuspend){var m=e.unsuspend;e.unsuspend=null,m()}},6e4+i);0<e.imgBytes&&Oh===0&&(Oh=62500*CS());var h=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Vc(e,e.stylesheets),e.unsuspend)){var m=e.unsuspend;e.unsuspend=null,m()}},(e.imgBytes>Oh?50:800)+i);return e.unsuspend=s,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(h)}}:null}function Hc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Vc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Gc=null;function Vc(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Gc=new Map,i.forEach(KS,e),Gc=null,Hc.call(e))}function KS(e,i){if(!(i.state.loading&4)){var s=Gc.get(e);if(s)var l=s.get(null);else{s=new Map,Gc.set(e,s);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<h.length;m++){var E=h[m];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(s.set(E.dataset.precedence,E),l=E)}l&&s.set(null,l)}h=i.instance,E=h.getAttribute("data-precedence"),m=s.get(E)||l,m===l&&s.set(null,h),s.set(E,h),this.count++,l=Hc.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),m?m.parentNode.insertBefore(h,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),i.state.loading|=4}}var ll={$$typeof:R,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function QS(e,i,s,l,h,m,E,N,k){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=we(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=we(0),this.hiddenUpdates=we(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=m,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=k,this.incompleteTransitions=new Map}function hv(e,i,s,l,h,m,E,N,k,st,_t,Mt){return e=new QS(e,i,s,E,k,st,_t,Mt,N),i=1,m===!0&&(i|=24),m=ni(3,null,null,i),e.current=m,m.stateNode=e,i=df(),i.refCount++,e.pooledCache=i,i.refCount++,m.memoizedState={element:l,isDehydrated:s,cache:i},vf(m),e}function dv(e){return e?(e=_r,e):_r}function pv(e,i,s,l,h,m){h=dv(h),l.context===null?l.context=h:l.pendingContext=h,l=Qa(i),l.payload={element:s},m=m===void 0?null:m,m!==null&&(l.callback=m),s=Ja(e,l,i),s!==null&&(Kn(s,e,i),Ho(s,e,i))}function mv(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<i?s:i}}function zh(e,i){mv(e,i),(e=e.alternate)&&mv(e,i)}function gv(e){if(e.tag===13||e.tag===31){var i=Ns(e,67108864);i!==null&&Kn(i,e,67108864),zh(e,67108864)}}function vv(e){if(e.tag===13||e.tag===31){var i=oi();i=So(i);var s=Ns(e,i);s!==null&&Kn(s,e,i),zh(e,i)}}var kc=!0;function JS(e,i,s,l){var h=z.T;z.T=null;var m=H.p;try{H.p=2,Ph(e,i,s,l)}finally{H.p=m,z.T=h}}function $S(e,i,s,l){var h=z.T;z.T=null;var m=H.p;try{H.p=8,Ph(e,i,s,l)}finally{H.p=m,z.T=h}}function Ph(e,i,s,l){if(kc){var h=Bh(l);if(h===null)Mh(e,i,l,qc,s),xv(e,l);else if(eM(h,e,i,s,l))l.stopPropagation();else if(xv(e,l),i&4&&-1<tM.indexOf(e)){for(;h!==null;){var m=ka(h);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var E=At(m.pendingLanes);if(E!==0){var N=m;for(N.pendingLanes|=2,N.entangledLanes|=2;E;){var k=1<<31-wt(E);N.entanglements[1]|=k,E&=~k}Xi(m),(Be&6)===0&&(Ac=A()+500,nl(0))}}break;case 31:case 13:N=Ns(m,2),N!==null&&Kn(N,m,2),Rc(),zh(m,2)}if(m=Bh(l),m===null&&Mh(e,i,l,qc,s),m===h)break;h=m}h!==null&&l.stopPropagation()}else Mh(e,i,l,null,s)}}function Bh(e){return e=Fu(e),Fh(e)}var qc=null;function Fh(e){if(qc=null,e=Va(e),e!==null){var i=o(e);if(i===null)e=null;else{var s=i.tag;if(s===13){if(e=u(i),e!==null)return e;e=null}else if(s===31){if(e=f(i),e!==null)return e;e=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return qc=e,null}function _v(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(J()){case xt:return 2;case Tt:return 8;case pt:case Zt:return 32;case Lt:return 268435456;default:return 32}default:return 32}}var Ih=!1,cs=null,us=null,fs=null,cl=new Map,ul=new Map,hs=[],tM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function xv(e,i){switch(e){case"focusin":case"focusout":cs=null;break;case"dragenter":case"dragleave":us=null;break;case"mouseover":case"mouseout":fs=null;break;case"pointerover":case"pointerout":cl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ul.delete(i.pointerId)}}function fl(e,i,s,l,h,m){return e===null||e.nativeEvent!==m?(e={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:m,targetContainers:[h]},i!==null&&(i=ka(i),i!==null&&gv(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),e)}function eM(e,i,s,l,h){switch(i){case"focusin":return cs=fl(cs,e,i,s,l,h),!0;case"dragenter":return us=fl(us,e,i,s,l,h),!0;case"mouseover":return fs=fl(fs,e,i,s,l,h),!0;case"pointerover":var m=h.pointerId;return cl.set(m,fl(cl.get(m)||null,e,i,s,l,h)),!0;case"gotpointercapture":return m=h.pointerId,ul.set(m,fl(ul.get(m)||null,e,i,s,l,h)),!0}return!1}function yv(e){var i=Va(e.target);if(i!==null){var s=o(i);if(s!==null){if(i=s.tag,i===13){if(i=u(s),i!==null){e.blockedOn=i,Gi(e.priority,function(){vv(s)});return}}else if(i===31){if(i=f(s),i!==null){e.blockedOn=i,Gi(e.priority,function(){vv(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Xc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var s=Bh(e.nativeEvent);if(s===null){s=e.nativeEvent;var l=new s.constructor(s.type,s);Bu=l,s.target.dispatchEvent(l),Bu=null}else return i=ka(s),i!==null&&gv(i),e.blockedOn=s,!1;i.shift()}return!0}function Sv(e,i,s){Xc(e)&&s.delete(i)}function nM(){Ih=!1,cs!==null&&Xc(cs)&&(cs=null),us!==null&&Xc(us)&&(us=null),fs!==null&&Xc(fs)&&(fs=null),cl.forEach(Sv),ul.forEach(Sv)}function Wc(e,i){e.blockedOn===i&&(e.blockedOn=null,Ih||(Ih=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,nM)))}var Yc=null;function Mv(e){Yc!==e&&(Yc=e,c.unstable_scheduleCallback(c.unstable_NormalPriority,function(){Yc===e&&(Yc=null);for(var i=0;i<e.length;i+=3){var s=e[i],l=e[i+1],h=e[i+2];if(typeof l!="function"){if(Fh(l||s)===null)continue;break}var m=ka(s);m!==null&&(e.splice(i,3),i-=3,Bf(m,{pending:!0,data:h,method:s.method,action:l},l,h))}}))}function Vr(e){function i(k){return Wc(k,e)}cs!==null&&Wc(cs,e),us!==null&&Wc(us,e),fs!==null&&Wc(fs,e),cl.forEach(i),ul.forEach(i);for(var s=0;s<hs.length;s++){var l=hs[s];l.blockedOn===e&&(l.blockedOn=null)}for(;0<hs.length&&(s=hs[0],s.blockedOn===null);)yv(s),s.blockedOn===null&&hs.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var h=s[l],m=s[l+1],E=h[bn]||null;if(typeof m=="function")E||Mv(s);else if(E){var N=null;if(m&&m.hasAttribute("formAction")){if(h=m,E=m[bn]||null)N=E.formAction;else if(Fh(h)!==null)continue}else N=E.action;typeof N=="function"?s[l+1]=N:(s.splice(l,3),l-=3),Mv(s)}}}function Ev(){function e(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(E){return h=E})},focusReset:"manual",scroll:"manual"})}function i(){h!==null&&(h(),h=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,h=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),h!==null&&(h(),h=null)}}}function Hh(e){this._internalRoot=e}jc.prototype.render=Hh.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,l=oi();pv(s,l,e,i,null,null)},jc.prototype.unmount=Hh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;pv(e.current,2,null,e,null,null),Rc(),i[Ti]=null}};function jc(e){this._internalRoot=e}jc.prototype.unstable_scheduleHydration=function(e){if(e){var i=Mo();e={blockedOn:null,target:e,priority:i};for(var s=0;s<hs.length&&i!==0&&i<hs[s].priority;s++);hs.splice(s,0,e),s===0&&yv(e)}};var bv=t.version;if(bv!=="19.2.4")throw Error(a(527,bv,"19.2.4"));H.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=d(i),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var iM={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zc.isDisabled&&Zc.supportsFiber)try{ht=Zc.inject(iM),gt=Zc}catch{}}return dl.createRoot=function(e,i){if(!r(e))throw Error(a(299));var s=!1,l="",h=N0,m=U0,E=L0;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(E=i.onRecoverableError)),i=hv(e,1,!1,null,null,s,l,null,h,m,E,Ev),e[Ti]=i.current,Sh(e),new Hh(i)},dl.hydrateRoot=function(e,i,s){if(!r(e))throw Error(a(299));var l=!1,h="",m=N0,E=U0,N=L0,k=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onUncaughtError!==void 0&&(m=s.onUncaughtError),s.onCaughtError!==void 0&&(E=s.onCaughtError),s.onRecoverableError!==void 0&&(N=s.onRecoverableError),s.formState!==void 0&&(k=s.formState)),i=hv(e,1,!0,i,s??null,l,h,k,m,E,N,Ev),i.context=dv(null),s=i.current,l=oi(),l=So(l),h=Qa(l),h.callback=null,Ja(s,h,l),s=l,i.current.lanes=s,Pn(i,s),Xi(i),e[Ti]=i.current,Sh(e),new jc(i)},dl.version="19.2.4",dl}var Ov;function dM(){if(Ov)return kh.exports;Ov=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(t){console.error(t)}}return c(),kh.exports=hM(),kh.exports}var pM=dM();const tr=["ones","twos","threes","fours","fives","sixes","quadra","full","seqLow","seqHigh","min","max","yam"],zv=["ones","twos","threes","fours","fives","sixes"],mM=["quadra","full","seqLow","seqHigh","min","max","yam"],kr=[{id:"down",title:"▼"},{id:"up",title:"▲"},{id:"desordem",title:"D"},{id:"seco",title:"S"}],Pv=[{id:"ones",left:"2",label:"1"},{id:"twos",left:"4",label:"2"},{id:"threes",left:"9",label:"3"},{id:"fours",left:"12",label:"4"},{id:"fives",left:"15",label:"5"},{id:"sixes",left:"18",label:"6"},{id:"quadra",left:"20",label:"Q"},{id:"full",left:"30",label:"F"},{id:"seqLow",left:"35",label:"S-"},{id:"seqHigh",left:"40",label:"S+"},{id:"min",left:"X",label:"MIN"},{id:"max",left:"X",label:"MAX"},{id:"yam",left:"50",label:"YAM"}];function gM({sheet:c,openCells:t,clickable:n,pendingPlacement:a,onCellClick:r}){const o=Object.fromEntries(kr.map(f=>{const p=a?.columnId===f.id?{...c[f.id],[a.rowId]:a.value}:c[f.id];return[f.id,ox(p)]})),u=kr.reduce((f,p)=>f+o[p.id].combined,0);return Ft.jsx("div",{className:"w-[340px] max-w-full shrink-0 sm:w-[360px] lg:w-[376px]",children:Ft.jsxs("table",{className:"w-full table-fixed border-separate border-spacing-[2px] bg-white text-center",style:{fontFamily:"'Inter', sans-serif"},children:[Ft.jsxs("colgroup",{children:[Ft.jsx("col",{className:"w-[38px]"}),Ft.jsx("col",{className:"w-[38px]"}),Ft.jsx("col",{className:"w-[58px]"}),Ft.jsx("col",{className:"w-[58px]"}),Ft.jsx("col",{className:"w-[58px]"}),Ft.jsx("col",{className:"w-[58px]"})]}),Ft.jsx("thead",{children:Ft.jsxs("tr",{children:[Ft.jsx("th",{className:"h-7 px-2",colSpan:2}),kr.map(f=>Ft.jsx("th",{className:"h-7 px-2 text-base leading-none font-bold text-slate-800",children:f.id==="down"?Ft.jsx("svg",{viewBox:"0 0 24 24",width:"19",height:"19",fill:"none",stroke:"currentColor",strokeWidth:"2.8",strokeLinecap:"round",strokeLinejoin:"round",className:"mx-auto",children:Ft.jsx("polyline",{points:"6,9 12,15 18,9"})}):f.id==="up"?Ft.jsx("svg",{viewBox:"0 0 24 24",width:"19",height:"19",fill:"none",stroke:"currentColor",strokeWidth:"2.8",strokeLinecap:"round",strokeLinejoin:"round",className:"mx-auto",children:Ft.jsx("polyline",{points:"6,15 12,9 18,15"})}):Ft.jsx("span",{className:"text-[0.9rem] font-semibold tracking-[0.08em]",children:f.title})},f.id))]})}),Ft.jsxs("tbody",{children:[Pv.slice(0,6).map(f=>Ft.jsxs("tr",{children:[Ft.jsx("td",{className:"h-7 bg-transparent px-1"}),Ft.jsx("td",{className:"h-7 border border-slate-700 bg-white px-1 text-sm leading-none font-semibold text-slate-900",children:f.label}),kr.map(p=>Bv({columnId:p.id,rowId:f.id,sheet:c,openCells:t,clickable:n,pendingPlacement:a,onCellClick:r}))]},f.id)),Ft.jsxs("tr",{children:[Ft.jsx("td",{className:"h-4 bg-transparent px-1"}),Ft.jsx("td",{className:"h-4 bg-transparent px-1 text-[8px] leading-none font-bold tracking-[0.1em] text-slate-500",children:"BONUS"}),kr.map(f=>{const p=o[f.id];return Ft.jsx("td",{className:"h-4 bg-transparent px-1 align-middle text-[9px] font-bold text-slate-500",style:p.bonus>0?{fontFamily:"'Kalam', cursive",fontWeight:700,fontSize:"0.78rem"}:void 0,children:p.bonus>0?"30":""},f.id)})]}),Pv.slice(6).map(f=>{const p=f.left!=="X";return Ft.jsxs("tr",{children:[Ft.jsx("td",{className:p?"h-7 bg-transparent px-1 text-[11px] leading-none font-semibold tracking-[0.12em] text-slate-500":"h-7 bg-transparent px-1",style:p?{fontFamily:"'Kalam', cursive"}:void 0,children:p?`+${f.left}`:""}),Ft.jsx("td",{className:"h-7 border border-slate-700 bg-white px-1 text-[10px] leading-none font-semibold text-slate-900",children:f.label}),kr.map(d=>Bv({columnId:d.id,rowId:f.id,sheet:c,openCells:t,clickable:n,pendingPlacement:a,onCellClick:r}))]},f.id)}),Ft.jsxs("tr",{children:[Ft.jsx("td",{className:"h-7 bg-transparent px-1",colSpan:1}),Ft.jsx("td",{className:"h-7 bg-transparent px-1 align-middle text-left text-xs font-bold tracking-[0.1em] text-slate-700",colSpan:3,children:"TOTAL"}),Ft.jsx("td",{className:"h-7 rounded-md bg-transparent px-3 align-middle text-right text-xl font-semibold text-slate-500",style:{fontFamily:"'Kalam', cursive",lineHeight:1},colSpan:2,children:vM(u)})]})]})]})})}function Bv({columnId:c,rowId:t,sheet:n,openCells:a,clickable:r,pendingPlacement:o,onCellClick:u}){const f=`${c}:${t}`,p=n[c][t]!=null,d=a.has(f),g=o?.columnId===c&&o.rowId===t;let _=null;g?_=o.value:n[c][t]!=null&&(_=n[c][t]);const v=_===0,y=g?"#065f46":"#1e293b";return Ft.jsx("td",{onClick:()=>{!r||!d||p||u(c,t)},style:(g||p)&&!v?{fontFamily:"'Kalam', cursive",fontWeight:700,fontSize:"0.95rem",verticalAlign:"middle",paddingTop:"1px"}:void 0,className:`h-7 touch-manipulation select-none border border-slate-700 px-1 text-xs leading-none font-bold ${g?"bg-white text-emerald-900":p?"bg-white text-slate-900":d&&r?"cursor-pointer bg-white text-slate-900 hover:bg-slate-50 active:bg-slate-100":"bg-[#f3f4f6] text-slate-400"}`,children:v?Ft.jsxs("svg",{viewBox:"0 0 50 30",className:"h-full w-full",style:{display:"block",padding:"2px 3px"},children:[Ft.jsx("path",{d:"M 4,3 C 16,10 30,18 46,27",stroke:y,strokeWidth:"2.8",strokeLinecap:"round",fill:"none"}),Ft.jsx("path",{d:"M 46,3 C 33,11 19,18 4,27",stroke:y,strokeWidth:"2.8",strokeLinecap:"round",fill:"none"})]}):_!==null?String(_):""},c)}function ox(c){const t=zv.reduce((f,p)=>f+(c[p]??0),0),n=zv.every(f=>c[f]!=null),a=t>=60?30:0,r=t+a,o=mM.reduce((f,p)=>f+(c[p]??0),0),u=r+o;return{upperTotal:t,upperComplete:n,bonus:a,secondTotal:r,thirdTotal:o,combined:u}}function vM(c){return c>0?String(c):""}class Bi{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const n=this.elements;n[0]=t.x,n[4]=t.y,n[8]=t.z}getTrace(t){t===void 0&&(t=new C);const n=this.elements;return t.x=n[0],t.y=n[4],t.z=n[8],t}vmult(t,n){n===void 0&&(n=new C);const a=this.elements,r=t.x,o=t.y,u=t.z;return n.x=a[0]*r+a[1]*o+a[2]*u,n.y=a[3]*r+a[4]*o+a[5]*u,n.z=a[6]*r+a[7]*o+a[8]*u,n}smult(t){for(let n=0;n<this.elements.length;n++)this.elements[n]*=t}mmult(t,n){n===void 0&&(n=new Bi);const a=this.elements,r=t.elements,o=n.elements,u=a[0],f=a[1],p=a[2],d=a[3],g=a[4],_=a[5],v=a[6],y=a[7],M=a[8],b=r[0],S=r[1],x=r[2],T=r[3],R=r[4],D=r[5],L=r[6],P=r[7],B=r[8];return o[0]=u*b+f*T+p*L,o[1]=u*S+f*R+p*P,o[2]=u*x+f*D+p*B,o[3]=d*b+g*T+_*L,o[4]=d*S+g*R+_*P,o[5]=d*x+g*D+_*B,o[6]=v*b+y*T+M*L,o[7]=v*S+y*R+M*P,o[8]=v*x+y*D+M*B,n}scale(t,n){n===void 0&&(n=new Bi);const a=this.elements,r=n.elements;for(let o=0;o!==3;o++)r[3*o+0]=t.x*a[3*o+0],r[3*o+1]=t.y*a[3*o+1],r[3*o+2]=t.z*a[3*o+2];return n}solve(t,n){n===void 0&&(n=new C);const a=3,r=4,o=[];let u,f;for(u=0;u<a*r;u++)o.push(0);for(u=0;u<3;u++)for(f=0;f<3;f++)o[u+r*f]=this.elements[u+3*f];o[3]=t.x,o[7]=t.y,o[11]=t.z;let p=3;const d=p;let g;const _=4;let v;do{if(u=d-p,o[u+r*u]===0){for(f=u+1;f<d;f++)if(o[u+r*f]!==0){g=_;do v=_-g,o[v+r*u]+=o[v+r*f];while(--g);break}}if(o[u+r*u]!==0)for(f=u+1;f<d;f++){const y=o[u+r*f]/o[u+r*u];g=_;do v=_-g,o[v+r*f]=v<=u?0:o[v+r*f]-o[v+r*u]*y;while(--g)}}while(--p);if(n.z=o[2*r+3]/o[2*r+2],n.y=(o[1*r+3]-o[1*r+2]*n.z)/o[1*r+1],n.x=(o[0*r+3]-o[0*r+2]*n.z-o[0*r+1]*n.y)/o[0*r+0],isNaN(n.x)||isNaN(n.y)||isNaN(n.z)||n.x===1/0||n.y===1/0||n.z===1/0)throw`Could not solve equation! Got x=[${n.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return n}e(t,n,a){if(a===void 0)return this.elements[n+3*t];this.elements[n+3*t]=a}copy(t){for(let n=0;n<t.elements.length;n++)this.elements[n]=t.elements[n];return this}toString(){let t="";for(let a=0;a<9;a++)t+=this.elements[a]+",";return t}reverse(t){t===void 0&&(t=new Bi);const n=3,a=6,r=_M;let o,u;for(o=0;o<3;o++)for(u=0;u<3;u++)r[o+a*u]=this.elements[o+3*u];r[3]=1,r[9]=0,r[15]=0,r[4]=0,r[10]=1,r[16]=0,r[5]=0,r[11]=0,r[17]=1;let f=3;const p=f;let d;const g=a;let _;do{if(o=p-f,r[o+a*o]===0){for(u=o+1;u<p;u++)if(r[o+a*u]!==0){d=g;do _=g-d,r[_+a*o]+=r[_+a*u];while(--d);break}}if(r[o+a*o]!==0)for(u=o+1;u<p;u++){const v=r[o+a*u]/r[o+a*o];d=g;do _=g-d,r[_+a*u]=_<=o?0:r[_+a*u]-r[_+a*o]*v;while(--d)}}while(--f);o=2;do{u=o-1;do{const v=r[o+a*u]/r[o+a*o];d=a;do _=a-d,r[_+a*u]=r[_+a*u]-r[_+a*o]*v;while(--d)}while(u--)}while(--o);o=2;do{const v=1/r[o+a*o];d=a;do _=a-d,r[_+a*o]=r[_+a*o]*v;while(--d)}while(o--);o=2;do{u=2;do{if(_=r[n+u+a*o],isNaN(_)||_===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(o,u,_)}while(u--)}while(o--);return t}setRotationFromQuaternion(t){const n=t.x,a=t.y,r=t.z,o=t.w,u=n+n,f=a+a,p=r+r,d=n*u,g=n*f,_=n*p,v=a*f,y=a*p,M=r*p,b=o*u,S=o*f,x=o*p,T=this.elements;return T[0]=1-(v+M),T[1]=g-x,T[2]=_+S,T[3]=g+x,T[4]=1-(d+M),T[5]=y-b,T[6]=_-S,T[7]=y+b,T[8]=1-(d+v),this}transpose(t){t===void 0&&(t=new Bi);const n=this.elements,a=t.elements;let r;return a[0]=n[0],a[4]=n[4],a[8]=n[8],r=n[1],a[1]=n[3],a[3]=r,r=n[2],a[2]=n[6],a[6]=r,r=n[5],a[5]=n[7],a[7]=r,t}}const _M=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class C{constructor(t,n,a){t===void 0&&(t=0),n===void 0&&(n=0),a===void 0&&(a=0),this.x=t,this.y=n,this.z=a}cross(t,n){n===void 0&&(n=new C);const a=t.x,r=t.y,o=t.z,u=this.x,f=this.y,p=this.z;return n.x=f*o-p*r,n.y=p*a-u*o,n.z=u*r-f*a,n}set(t,n,a){return this.x=t,this.y=n,this.z=a,this}setZero(){this.x=this.y=this.z=0}vadd(t,n){if(n)n.x=t.x+this.x,n.y=t.y+this.y,n.z=t.z+this.z;else return new C(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,n){if(n)n.x=this.x-t.x,n.y=this.y-t.y,n.z=this.z-t.z;else return new C(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new Bi([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,n=this.y,a=this.z,r=Math.sqrt(t*t+n*n+a*a);if(r>0){const o=1/r;this.x*=o,this.y*=o,this.z*=o}else this.x=0,this.y=0,this.z=0;return r}unit(t){t===void 0&&(t=new C);const n=this.x,a=this.y,r=this.z;let o=Math.sqrt(n*n+a*a+r*r);return o>0?(o=1/o,t.x=n*o,t.y=a*o,t.z=r*o):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,n=this.y,a=this.z;return Math.sqrt(t*t+n*n+a*a)}lengthSquared(){return this.dot(this)}distanceTo(t){const n=this.x,a=this.y,r=this.z,o=t.x,u=t.y,f=t.z;return Math.sqrt((o-n)*(o-n)+(u-a)*(u-a)+(f-r)*(f-r))}distanceSquared(t){const n=this.x,a=this.y,r=this.z,o=t.x,u=t.y,f=t.z;return(o-n)*(o-n)+(u-a)*(u-a)+(f-r)*(f-r)}scale(t,n){n===void 0&&(n=new C);const a=this.x,r=this.y,o=this.z;return n.x=t*a,n.y=t*r,n.z=t*o,n}vmul(t,n){return n===void 0&&(n=new C),n.x=t.x*this.x,n.y=t.y*this.y,n.z=t.z*this.z,n}addScaledVector(t,n,a){return a===void 0&&(a=new C),a.x=this.x+t*n.x,a.y=this.y+t*n.y,a.z=this.z+t*n.z,a}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new C),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,n){const a=this.length();if(a>0){const r=xM,o=1/a;r.set(this.x*o,this.y*o,this.z*o);const u=yM;Math.abs(r.x)<.9?(u.set(1,0,0),r.cross(u,t)):(u.set(0,1,0),r.cross(u,t)),r.cross(t,n)}else t.set(1,0,0),n.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,n,a){const r=this.x,o=this.y,u=this.z;a.x=r+(t.x-r)*n,a.y=o+(t.y-o)*n,a.z=u+(t.z-u)*n}almostEquals(t,n){return n===void 0&&(n=1e-6),!(Math.abs(this.x-t.x)>n||Math.abs(this.y-t.y)>n||Math.abs(this.z-t.z)>n)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,n){return this.negate(Fv),Fv.almostEquals(t,n)}clone(){return new C(this.x,this.y,this.z)}}C.ZERO=new C(0,0,0);C.UNIT_X=new C(1,0,0);C.UNIT_Y=new C(0,1,0);C.UNIT_Z=new C(0,0,1);const xM=new C,yM=new C,Fv=new C;class fi{constructor(t){t===void 0&&(t={}),this.lowerBound=new C,this.upperBound=new C,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,n,a,r){const o=this.lowerBound,u=this.upperBound,f=a;o.copy(t[0]),f&&f.vmult(o,o),u.copy(o);for(let p=1;p<t.length;p++){let d=t[p];f&&(f.vmult(d,Iv),d=Iv),d.x>u.x&&(u.x=d.x),d.x<o.x&&(o.x=d.x),d.y>u.y&&(u.y=d.y),d.y<o.y&&(o.y=d.y),d.z>u.z&&(u.z=d.z),d.z<o.z&&(o.z=d.z)}return n&&(n.vadd(o,o),n.vadd(u,u)),r&&(o.x-=r,o.y-=r,o.z-=r,u.x+=r,u.y+=r,u.z+=r),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new fi().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const n=this.lowerBound,a=this.upperBound,r=t.lowerBound,o=t.upperBound,u=r.x<=a.x&&a.x<=o.x||n.x<=o.x&&o.x<=a.x,f=r.y<=a.y&&a.y<=o.y||n.y<=o.y&&o.y<=a.y,p=r.z<=a.z&&a.z<=o.z||n.z<=o.z&&o.z<=a.z;return u&&f&&p}volume(){const t=this.lowerBound,n=this.upperBound;return(n.x-t.x)*(n.y-t.y)*(n.z-t.z)}contains(t){const n=this.lowerBound,a=this.upperBound,r=t.lowerBound,o=t.upperBound;return n.x<=r.x&&a.x>=o.x&&n.y<=r.y&&a.y>=o.y&&n.z<=r.z&&a.z>=o.z}getCorners(t,n,a,r,o,u,f,p){const d=this.lowerBound,g=this.upperBound;t.copy(d),n.set(g.x,d.y,d.z),a.set(g.x,g.y,d.z),r.set(d.x,g.y,g.z),o.set(g.x,d.y,g.z),u.set(d.x,g.y,d.z),f.set(d.x,d.y,g.z),p.copy(g)}toLocalFrame(t,n){const a=Hv,r=a[0],o=a[1],u=a[2],f=a[3],p=a[4],d=a[5],g=a[6],_=a[7];this.getCorners(r,o,u,f,p,d,g,_);for(let v=0;v!==8;v++){const y=a[v];t.pointToLocal(y,y)}return n.setFromPoints(a)}toWorldFrame(t,n){const a=Hv,r=a[0],o=a[1],u=a[2],f=a[3],p=a[4],d=a[5],g=a[6],_=a[7];this.getCorners(r,o,u,f,p,d,g,_);for(let v=0;v!==8;v++){const y=a[v];t.pointToWorld(y,y)}return n.setFromPoints(a)}overlapsRay(t){const{direction:n,from:a}=t,r=1/n.x,o=1/n.y,u=1/n.z,f=(this.lowerBound.x-a.x)*r,p=(this.upperBound.x-a.x)*r,d=(this.lowerBound.y-a.y)*o,g=(this.upperBound.y-a.y)*o,_=(this.lowerBound.z-a.z)*u,v=(this.upperBound.z-a.z)*u,y=Math.max(Math.max(Math.min(f,p),Math.min(d,g)),Math.min(_,v)),M=Math.min(Math.min(Math.max(f,p),Math.max(d,g)),Math.max(_,v));return!(M<0||y>M)}}const Iv=new C,Hv=[new C,new C,new C,new C,new C,new C,new C,new C];class Gv{constructor(){this.matrix=[]}get(t,n){let{index:a}=t,{index:r}=n;if(r>a){const o=r;r=a,a=o}return this.matrix[(a*(a+1)>>1)+r-1]}set(t,n,a){let{index:r}=t,{index:o}=n;if(o>r){const u=o;o=r,r=u}this.matrix[(r*(r+1)>>1)+o-1]=a?1:0}reset(){for(let t=0,n=this.matrix.length;t!==n;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class lx{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;return a[t]===void 0&&(a[t]=[]),a[t].includes(n)||a[t].push(n),this}hasEventListener(t,n){if(this._listeners===void 0)return!1;const a=this._listeners;return!!(a[t]!==void 0&&a[t].includes(n))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,n){if(this._listeners===void 0)return this;const a=this._listeners;if(a[t]===void 0)return this;const r=a[t].indexOf(n);return r!==-1&&a[t].splice(r,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const a=this._listeners[t.type];if(a!==void 0){t.target=this;for(let r=0,o=a.length;r<o;r++)a[r].call(this,t)}return this}}let $n=class Js{constructor(t,n,a,r){t===void 0&&(t=0),n===void 0&&(n=0),a===void 0&&(a=0),r===void 0&&(r=1),this.x=t,this.y=n,this.z=a,this.w=r}set(t,n,a,r){return this.x=t,this.y=n,this.z=a,this.w=r,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,n){const a=Math.sin(n*.5);return this.x=t.x*a,this.y=t.y*a,this.z=t.z*a,this.w=Math.cos(n*.5),this}toAxisAngle(t){t===void 0&&(t=new C),this.normalize();const n=2*Math.acos(this.w),a=Math.sqrt(1-this.w*this.w);return a<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/a,t.y=this.y/a,t.z=this.z/a),[t,n]}setFromVectors(t,n){if(t.isAntiparallelTo(n)){const a=SM,r=MM;t.tangents(a,r),this.setFromAxisAngle(a,Math.PI)}else{const a=t.cross(n);this.x=a.x,this.y=a.y,this.z=a.z,this.w=Math.sqrt(t.length()**2*n.length()**2)+t.dot(n),this.normalize()}return this}mult(t,n){n===void 0&&(n=new Js);const a=this.x,r=this.y,o=this.z,u=this.w,f=t.x,p=t.y,d=t.z,g=t.w;return n.x=a*g+u*f+r*d-o*p,n.y=r*g+u*p+o*f-a*d,n.z=o*g+u*d+a*p-r*f,n.w=u*g-a*f-r*p-o*d,n}inverse(t){t===void 0&&(t=new Js);const n=this.x,a=this.y,r=this.z,o=this.w;this.conjugate(t);const u=1/(n*n+a*a+r*r+o*o);return t.x*=u,t.y*=u,t.z*=u,t.w*=u,t}conjugate(t){return t===void 0&&(t=new Js),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,n){n===void 0&&(n=new C);const a=t.x,r=t.y,o=t.z,u=this.x,f=this.y,p=this.z,d=this.w,g=d*a+f*o-p*r,_=d*r+p*a-u*o,v=d*o+u*r-f*a,y=-u*a-f*r-p*o;return n.x=g*d+y*-u+_*-p-v*-f,n.y=_*d+y*-f+v*-u-g*-p,n.z=v*d+y*-p+g*-f-_*-u,n}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,n){n===void 0&&(n="YZX");let a,r,o;const u=this.x,f=this.y,p=this.z,d=this.w;switch(n){case"YZX":const g=u*f+p*d;if(g>.499&&(a=2*Math.atan2(u,d),r=Math.PI/2,o=0),g<-.499&&(a=-2*Math.atan2(u,d),r=-Math.PI/2,o=0),a===void 0){const _=u*u,v=f*f,y=p*p;a=Math.atan2(2*f*d-2*u*p,1-2*v-2*y),r=Math.asin(2*g),o=Math.atan2(2*u*d-2*f*p,1-2*_-2*y)}break;default:throw new Error(`Euler order ${n} not supported yet.`)}t.y=a,t.z=r,t.x=o}setFromEuler(t,n,a,r){r===void 0&&(r="XYZ");const o=Math.cos(t/2),u=Math.cos(n/2),f=Math.cos(a/2),p=Math.sin(t/2),d=Math.sin(n/2),g=Math.sin(a/2);return r==="XYZ"?(this.x=p*u*f+o*d*g,this.y=o*d*f-p*u*g,this.z=o*u*g+p*d*f,this.w=o*u*f-p*d*g):r==="YXZ"?(this.x=p*u*f+o*d*g,this.y=o*d*f-p*u*g,this.z=o*u*g-p*d*f,this.w=o*u*f+p*d*g):r==="ZXY"?(this.x=p*u*f-o*d*g,this.y=o*d*f+p*u*g,this.z=o*u*g+p*d*f,this.w=o*u*f-p*d*g):r==="ZYX"?(this.x=p*u*f-o*d*g,this.y=o*d*f+p*u*g,this.z=o*u*g-p*d*f,this.w=o*u*f+p*d*g):r==="YZX"?(this.x=p*u*f+o*d*g,this.y=o*d*f+p*u*g,this.z=o*u*g-p*d*f,this.w=o*u*f-p*d*g):r==="XZY"&&(this.x=p*u*f-o*d*g,this.y=o*d*f-p*u*g,this.z=o*u*g+p*d*f,this.w=o*u*f+p*d*g),this}clone(){return new Js(this.x,this.y,this.z,this.w)}slerp(t,n,a){a===void 0&&(a=new Js);const r=this.x,o=this.y,u=this.z,f=this.w;let p=t.x,d=t.y,g=t.z,_=t.w,v,y,M,b,S;return y=r*p+o*d+u*g+f*_,y<0&&(y=-y,p=-p,d=-d,g=-g,_=-_),1-y>1e-6?(v=Math.acos(y),M=Math.sin(v),b=Math.sin((1-n)*v)/M,S=Math.sin(n*v)/M):(b=1-n,S=n),a.x=b*r+S*p,a.y=b*o+S*d,a.z=b*u+S*g,a.w=b*f+S*_,a}integrate(t,n,a,r){r===void 0&&(r=new Js);const o=t.x*a.x,u=t.y*a.y,f=t.z*a.z,p=this.x,d=this.y,g=this.z,_=this.w,v=n*.5;return r.x+=v*(o*_+u*g-f*d),r.y+=v*(u*_+f*p-o*g),r.z+=v*(f*_+o*d-u*p),r.w+=v*(-o*p-u*d-f*g),r}};const SM=new C,MM=new C,EM={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class Yt{constructor(t){t===void 0&&(t={}),this.id=Yt.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,n){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,n,a,r){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}Yt.idCounter=0;Yt.types=EM;class Fe{constructor(t){t===void 0&&(t={}),this.position=new C,this.quaternion=new $n,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,n){return Fe.pointToLocalFrame(this.position,this.quaternion,t,n)}pointToWorld(t,n){return Fe.pointToWorldFrame(this.position,this.quaternion,t,n)}vectorToWorldFrame(t,n){return n===void 0&&(n=new C),this.quaternion.vmult(t,n),n}static pointToLocalFrame(t,n,a,r){return r===void 0&&(r=new C),a.vsub(t,r),n.conjugate(Vv),Vv.vmult(r,r),r}static pointToWorldFrame(t,n,a,r){return r===void 0&&(r=new C),n.vmult(a,r),r.vadd(t,r),r}static vectorToWorldFrame(t,n,a){return a===void 0&&(a=new C),t.vmult(n,a),a}static vectorToLocalFrame(t,n,a,r){return r===void 0&&(r=new C),n.w*=-1,n.vmult(a,r),n.w*=-1,r}}const Vv=new $n;class Rl extends Yt{constructor(t){t===void 0&&(t={});const{vertices:n=[],faces:a=[],normals:r=[],axes:o,boundingSphereRadius:u}=t;super({type:Yt.types.CONVEXPOLYHEDRON}),this.vertices=n,this.faces=a,this.faceNormals=r,this.faceNormals.length===0&&this.computeNormals(),u?this.boundingSphereRadius=u:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=o?o.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,n=this.vertices,a=this.uniqueEdges;a.length=0;const r=new C;for(let o=0;o!==t.length;o++){const u=t[o],f=u.length;for(let p=0;p!==f;p++){const d=(p+1)%f;n[u[p]].vsub(n[u[d]],r),r.normalize();let g=!1;for(let _=0;_!==a.length;_++)if(a[_].almostEquals(r)||a[_].almostEquals(r)){g=!0;break}g||a.push(r.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let r=0;r<this.faces[t].length;r++)if(!this.vertices[this.faces[t][r]])throw new Error(`Vertex ${this.faces[t][r]} not found!`);const n=this.faceNormals[t]||new C;this.getFaceNormal(t,n),n.negate(n),this.faceNormals[t]=n;const a=this.vertices[this.faces[t][0]];if(n.dot(a)<0){console.error(`.faceNormals[${t}] = Vec3(${n.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let r=0;r<this.faces[t].length;r++)console.warn(`.vertices[${this.faces[t][r]}] = Vec3(${this.vertices[this.faces[t][r]].toString()})`)}}}getFaceNormal(t,n){const a=this.faces[t],r=this.vertices[a[0]],o=this.vertices[a[1]],u=this.vertices[a[2]];Rl.computeNormal(r,o,u,n)}static computeNormal(t,n,a,r){const o=new C,u=new C;n.vsub(t,u),a.vsub(n,o),o.cross(u,r),r.isZero()||r.normalize()}clipAgainstHull(t,n,a,r,o,u,f,p,d){const g=new C;let _=-1,v=-Number.MAX_VALUE;for(let M=0;M<a.faces.length;M++){g.copy(a.faceNormals[M]),o.vmult(g,g);const b=g.dot(u);b>v&&(v=b,_=M)}const y=[];for(let M=0;M<a.faces[_].length;M++){const b=a.vertices[a.faces[_][M]],S=new C;S.copy(b),o.vmult(S,S),r.vadd(S,S),y.push(S)}_>=0&&this.clipFaceAgainstHull(u,t,n,y,f,p,d)}findSeparatingAxis(t,n,a,r,o,u,f,p){const d=new C,g=new C,_=new C,v=new C,y=new C,M=new C;let b=Number.MAX_VALUE;const S=this;if(S.uniqueAxes)for(let x=0;x!==S.uniqueAxes.length;x++){a.vmult(S.uniqueAxes[x],d);const T=S.testSepAxis(d,t,n,a,r,o);if(T===!1)return!1;T<b&&(b=T,u.copy(d))}else{const x=f?f.length:S.faces.length;for(let T=0;T<x;T++){const R=f?f[T]:T;d.copy(S.faceNormals[R]),a.vmult(d,d);const D=S.testSepAxis(d,t,n,a,r,o);if(D===!1)return!1;D<b&&(b=D,u.copy(d))}}if(t.uniqueAxes)for(let x=0;x!==t.uniqueAxes.length;x++){o.vmult(t.uniqueAxes[x],g);const T=S.testSepAxis(g,t,n,a,r,o);if(T===!1)return!1;T<b&&(b=T,u.copy(g))}else{const x=p?p.length:t.faces.length;for(let T=0;T<x;T++){const R=p?p[T]:T;g.copy(t.faceNormals[R]),o.vmult(g,g);const D=S.testSepAxis(g,t,n,a,r,o);if(D===!1)return!1;D<b&&(b=D,u.copy(g))}}for(let x=0;x!==S.uniqueEdges.length;x++){a.vmult(S.uniqueEdges[x],v);for(let T=0;T!==t.uniqueEdges.length;T++)if(o.vmult(t.uniqueEdges[T],y),v.cross(y,M),!M.almostZero()){M.normalize();const R=S.testSepAxis(M,t,n,a,r,o);if(R===!1)return!1;R<b&&(b=R,u.copy(M))}}return r.vsub(n,_),_.dot(u)>0&&u.negate(u),!0}testSepAxis(t,n,a,r,o,u){const f=this;Rl.project(f,t,a,r,Yh),Rl.project(n,t,o,u,jh);const p=Yh[0],d=Yh[1],g=jh[0],_=jh[1];if(p<_||g<d)return!1;const v=p-_,y=g-d;return v<y?v:y}calculateLocalInertia(t,n){const a=new C,r=new C;this.computeLocalAABB(r,a);const o=a.x-r.x,u=a.y-r.y,f=a.z-r.z;n.x=1/12*t*(2*u*2*u+2*f*2*f),n.y=1/12*t*(2*o*2*o+2*f*2*f),n.z=1/12*t*(2*u*2*u+2*o*2*o)}getPlaneConstantOfFace(t){const n=this.faces[t],a=this.faceNormals[t],r=this.vertices[n[0]];return-a.dot(r)}clipFaceAgainstHull(t,n,a,r,o,u,f){const p=new C,d=new C,g=new C,_=new C,v=new C,y=new C,M=new C,b=new C,S=this,x=[],T=r,R=x;let D=-1,L=Number.MAX_VALUE;for(let O=0;O<S.faces.length;O++){p.copy(S.faceNormals[O]),a.vmult(p,p);const G=p.dot(t);G<L&&(L=G,D=O)}if(D<0)return;const P=S.faces[D];P.connectedFaces=[];for(let O=0;O<S.faces.length;O++)for(let G=0;G<S.faces[O].length;G++)P.indexOf(S.faces[O][G])!==-1&&O!==D&&P.connectedFaces.indexOf(O)===-1&&P.connectedFaces.push(O);const B=P.length;for(let O=0;O<B;O++){const G=S.vertices[P[O]],$=S.vertices[P[(O+1)%B]];G.vsub($,d),g.copy(d),a.vmult(g,g),n.vadd(g,g),_.copy(this.faceNormals[D]),a.vmult(_,_),n.vadd(_,_),g.cross(_,v),v.negate(v),y.copy(G),a.vmult(y,y),n.vadd(y,y);const V=P.connectedFaces[O];M.copy(this.faceNormals[V]);const Q=this.getPlaneConstantOfFace(V);b.copy(M),a.vmult(b,b);const j=Q-b.dot(n);for(this.clipFaceAgainstPlane(T,R,b,j);T.length;)T.shift();for(;R.length;)T.push(R.shift())}M.copy(this.faceNormals[D]);const W=this.getPlaneConstantOfFace(D);b.copy(M),a.vmult(b,b);const w=W-b.dot(n);for(let O=0;O<T.length;O++){let G=b.dot(T[O])+w;if(G<=o&&(console.log(`clamped: depth=${G} to minDist=${o}`),G=o),G<=u){const $=T[O];if(G<=1e-6){const V={point:$,normal:b,depth:G};f.push(V)}}}}clipFaceAgainstPlane(t,n,a,r){let o,u;const f=t.length;if(f<2)return n;let p=t[t.length-1],d=t[0];o=a.dot(p)+r;for(let g=0;g<f;g++){if(d=t[g],u=a.dot(d)+r,o<0)if(u<0){const _=new C;_.copy(d),n.push(_)}else{const _=new C;p.lerp(d,o/(o-u),_),n.push(_)}else if(u<0){const _=new C;p.lerp(d,o/(o-u),_),n.push(_),n.push(d)}p=d,o=u}return n}computeWorldVertices(t,n){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new C);const a=this.vertices,r=this.worldVertices;for(let o=0;o!==this.vertices.length;o++)n.vmult(a[o],r[o]),t.vadd(r[o],r[o]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,n){const a=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),n.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let r=0;r<this.vertices.length;r++){const o=a[r];o.x<t.x?t.x=o.x:o.x>n.x&&(n.x=o.x),o.y<t.y?t.y=o.y:o.y>n.y&&(n.y=o.y),o.z<t.z?t.z=o.z:o.z>n.z&&(n.z=o.z)}}computeWorldFaceNormals(t){const n=this.faceNormals.length;for(;this.worldFaceNormals.length<n;)this.worldFaceNormals.push(new C);const a=this.faceNormals,r=this.worldFaceNormals;for(let o=0;o!==n;o++)t.vmult(a[o],r[o]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const n=this.vertices;for(let a=0;a!==n.length;a++){const r=n[a].lengthSquared();r>t&&(t=r)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,n,a,r){const o=this.vertices;let u,f,p,d,g,_,v=new C;for(let y=0;y<o.length;y++){v.copy(o[y]),n.vmult(v,v),t.vadd(v,v);const M=v;(u===void 0||M.x<u)&&(u=M.x),(d===void 0||M.x>d)&&(d=M.x),(f===void 0||M.y<f)&&(f=M.y),(g===void 0||M.y>g)&&(g=M.y),(p===void 0||M.z<p)&&(p=M.z),(_===void 0||M.z>_)&&(_=M.z)}a.set(u,f,p),r.set(d,g,_)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new C);const n=this.vertices;for(let a=0;a<n.length;a++)t.vadd(n[a],t);return t.scale(1/n.length,t),t}transformAllPoints(t,n){const a=this.vertices.length,r=this.vertices;if(n){for(let o=0;o<a;o++){const u=r[o];n.vmult(u,u)}for(let o=0;o<this.faceNormals.length;o++){const u=this.faceNormals[o];n.vmult(u,u)}}if(t)for(let o=0;o<a;o++){const u=r[o];u.vadd(t,u)}}pointIsInside(t){const n=this.vertices,a=this.faces,r=this.faceNormals,o=new C;this.getAveragePointLocal(o);for(let u=0;u<this.faces.length;u++){let f=r[u];const p=n[a[u][0]],d=new C;t.vsub(p,d);const g=f.dot(d),_=new C;o.vsub(p,_);const v=f.dot(_);if(g<0&&v>0||g>0&&v<0)return!1}return-1}static project(t,n,a,r,o){const u=t.vertices.length,f=bM;let p=0,d=0;const g=TM,_=t.vertices;g.setZero(),Fe.vectorToLocalFrame(a,r,n,f),Fe.pointToLocalFrame(a,r,g,g);const v=g.dot(f);d=p=_[0].dot(f);for(let y=1;y<u;y++){const M=_[y].dot(f);M>p&&(p=M),M<d&&(d=M)}if(d-=v,p-=v,d>p){const y=d;d=p,p=y}o[0]=p,o[1]=d}}const Yh=[],jh=[];new C;const bM=new C,TM=new C;class ar extends Yt{constructor(t){super({type:Yt.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,n=this.halfExtents.y,a=this.halfExtents.z,r=C,o=[new r(-t,-n,-a),new r(t,-n,-a),new r(t,n,-a),new r(-t,n,-a),new r(-t,-n,a),new r(t,-n,a),new r(t,n,a),new r(-t,n,a)],u=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],f=[new r(0,0,1),new r(0,1,0),new r(1,0,0)],p=new Rl({vertices:o,faces:u,axes:f});this.convexPolyhedronRepresentation=p,p.material=this.material}calculateLocalInertia(t,n){return n===void 0&&(n=new C),ar.calculateInertia(this.halfExtents,t,n),n}static calculateInertia(t,n,a){const r=t;a.x=1/12*n*(2*r.y*2*r.y+2*r.z*2*r.z),a.y=1/12*n*(2*r.x*2*r.x+2*r.z*2*r.z),a.z=1/12*n*(2*r.y*2*r.y+2*r.x*2*r.x)}getSideNormals(t,n){const a=t,r=this.halfExtents;if(a[0].set(r.x,0,0),a[1].set(0,r.y,0),a[2].set(0,0,r.z),a[3].set(-r.x,0,0),a[4].set(0,-r.y,0),a[5].set(0,0,-r.z),n!==void 0)for(let o=0;o!==a.length;o++)n.vmult(a[o],a[o]);return a}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,n,a){const r=this.halfExtents,o=[[r.x,r.y,r.z],[-r.x,r.y,r.z],[-r.x,-r.y,r.z],[-r.x,-r.y,-r.z],[r.x,-r.y,-r.z],[r.x,r.y,-r.z],[-r.x,r.y,-r.z],[r.x,-r.y,r.z]];for(let u=0;u<o.length;u++)ps.set(o[u][0],o[u][1],o[u][2]),n.vmult(ps,ps),t.vadd(ps,ps),a(ps.x,ps.y,ps.z)}calculateWorldAABB(t,n,a,r){const o=this.halfExtents;Wi[0].set(o.x,o.y,o.z),Wi[1].set(-o.x,o.y,o.z),Wi[2].set(-o.x,-o.y,o.z),Wi[3].set(-o.x,-o.y,-o.z),Wi[4].set(o.x,-o.y,-o.z),Wi[5].set(o.x,o.y,-o.z),Wi[6].set(-o.x,o.y,-o.z),Wi[7].set(o.x,-o.y,o.z);const u=Wi[0];n.vmult(u,u),t.vadd(u,u),r.copy(u),a.copy(u);for(let f=1;f<8;f++){const p=Wi[f];n.vmult(p,p),t.vadd(p,p);const d=p.x,g=p.y,_=p.z;d>r.x&&(r.x=d),g>r.y&&(r.y=g),_>r.z&&(r.z=_),d<a.x&&(a.x=d),g<a.y&&(a.y=g),_<a.z&&(a.z=_)}}}const ps=new C,Wi=[new C,new C,new C,new C,new C,new C,new C,new C],Dp={DYNAMIC:1,STATIC:2,KINEMATIC:4},Np={AWAKE:0,SLEEPY:1,SLEEPING:2};class Ht extends lx{constructor(t){t===void 0&&(t={}),super(),this.id=Ht.idCounter++,this.index=-1,this.world=null,this.vlambda=new C,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new C,this.previousPosition=new C,this.interpolatedPosition=new C,this.initPosition=new C,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new C,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new C,this.force=new C;const n=typeof t.mass=="number"?t.mass:0;this.mass=n,this.invMass=n>0?1/n:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=n<=0?Ht.STATIC:Ht.DYNAMIC,typeof t.type==typeof Ht.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=Ht.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new C,this.quaternion=new $n,this.initQuaternion=new $n,this.previousQuaternion=new $n,this.interpolatedQuaternion=new $n,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new C,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new C,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new C,this.invInertia=new C,this.invInertiaWorld=new Bi,this.invMassSolve=0,this.invInertiaSolve=new C,this.invInertiaWorldSolve=new Bi,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new C(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new C(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new fi,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new C,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=Ht.AWAKE,this.wakeUpAfterNarrowphase=!1,t===Ht.SLEEPING&&this.dispatchEvent(Ht.wakeupEvent)}sleep(){this.sleepState=Ht.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const n=this.sleepState,a=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),r=this.sleepSpeedLimit**2;n===Ht.AWAKE&&a<r?(this.sleepState=Ht.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(Ht.sleepyEvent)):n===Ht.SLEEPY&&a>r?this.wakeUp():n===Ht.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(Ht.sleepEvent))}}updateSolveMassProperties(){this.sleepState===Ht.SLEEPING||this.type===Ht.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,n){return n===void 0&&(n=new C),t.vsub(this.position,n),this.quaternion.conjugate().vmult(n,n),n}vectorToLocalFrame(t,n){return n===void 0&&(n=new C),this.quaternion.conjugate().vmult(t,n),n}pointToWorldFrame(t,n){return n===void 0&&(n=new C),this.quaternion.vmult(t,n),n.vadd(this.position,n),n}vectorToWorldFrame(t,n){return n===void 0&&(n=new C),this.quaternion.vmult(t,n),n}addShape(t,n,a){const r=new C,o=new $n;return n&&r.copy(n),a&&o.copy(a),this.shapes.push(t),this.shapeOffsets.push(r),this.shapeOrientations.push(o),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const n=this.shapes.indexOf(t);return n===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(n,1),this.shapeOffsets.splice(n,1),this.shapeOrientations.splice(n,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,n=this.shapeOffsets,a=t.length;let r=0;for(let o=0;o!==a;o++){const u=t[o];u.updateBoundingSphereRadius();const f=n[o].length(),p=u.boundingSphereRadius;f+p>r&&(r=f+p)}this.boundingRadius=r}updateAABB(){const t=this.shapes,n=this.shapeOffsets,a=this.shapeOrientations,r=t.length,o=AM,u=wM,f=this.quaternion,p=this.aabb,d=RM;for(let g=0;g!==r;g++){const _=t[g];f.vmult(n[g],o),o.vadd(this.position,o),f.mult(a[g],u),_.calculateWorldAABB(o,u,d.lowerBound,d.upperBound),g===0?p.copy(d):p.extend(d)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const n=this.invInertia;if(!(n.x===n.y&&n.y===n.z&&!t)){const a=CM,r=DM;a.setRotationFromQuaternion(this.quaternion),a.transpose(r),a.scale(n,a),a.mmult(r,this.invInertiaWorld)}}applyForce(t,n){if(n===void 0&&(n=new C),this.type!==Ht.DYNAMIC)return;this.sleepState===Ht.SLEEPING&&this.wakeUp();const a=NM;n.cross(t,a),this.force.vadd(t,this.force),this.torque.vadd(a,this.torque)}applyLocalForce(t,n){if(n===void 0&&(n=new C),this.type!==Ht.DYNAMIC)return;const a=UM,r=LM;this.vectorToWorldFrame(t,a),this.vectorToWorldFrame(n,r),this.applyForce(a,r)}applyTorque(t){this.type===Ht.DYNAMIC&&(this.sleepState===Ht.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,n){if(n===void 0&&(n=new C),this.type!==Ht.DYNAMIC)return;this.sleepState===Ht.SLEEPING&&this.wakeUp();const a=n,r=OM;r.copy(t),r.scale(this.invMass,r),this.velocity.vadd(r,this.velocity);const o=zM;a.cross(t,o),this.invInertiaWorld.vmult(o,o),this.angularVelocity.vadd(o,this.angularVelocity)}applyLocalImpulse(t,n){if(n===void 0&&(n=new C),this.type!==Ht.DYNAMIC)return;const a=PM,r=BM;this.vectorToWorldFrame(t,a),this.vectorToWorldFrame(n,r),this.applyImpulse(a,r)}updateMassProperties(){const t=FM;this.invMass=this.mass>0?1/this.mass:0;const n=this.inertia,a=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),ar.calculateInertia(t,this.mass,n),this.invInertia.set(n.x>0&&!a?1/n.x:0,n.y>0&&!a?1/n.y:0,n.z>0&&!a?1/n.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,n){const a=new C;return t.vsub(this.position,a),this.angularVelocity.cross(a,n),this.velocity.vadd(n,n),n}integrate(t,n,a){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===Ht.DYNAMIC||this.type===Ht.KINEMATIC)||this.sleepState===Ht.SLEEPING)return;const r=this.velocity,o=this.angularVelocity,u=this.position,f=this.force,p=this.torque,d=this.quaternion,g=this.invMass,_=this.invInertiaWorld,v=this.linearFactor,y=g*t;r.x+=f.x*y*v.x,r.y+=f.y*y*v.y,r.z+=f.z*y*v.z;const M=_.elements,b=this.angularFactor,S=p.x*b.x,x=p.y*b.y,T=p.z*b.z;o.x+=t*(M[0]*S+M[1]*x+M[2]*T),o.y+=t*(M[3]*S+M[4]*x+M[5]*T),o.z+=t*(M[6]*S+M[7]*x+M[8]*T),u.x+=r.x*t,u.y+=r.y*t,u.z+=r.z*t,d.integrate(this.angularVelocity,t,this.angularFactor,d),n&&(a?d.normalizeFast():d.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}Ht.idCounter=0;Ht.COLLIDE_EVENT_NAME="collide";Ht.DYNAMIC=Dp.DYNAMIC;Ht.STATIC=Dp.STATIC;Ht.KINEMATIC=Dp.KINEMATIC;Ht.AWAKE=Np.AWAKE;Ht.SLEEPY=Np.SLEEPY;Ht.SLEEPING=Np.SLEEPING;Ht.wakeupEvent={type:"wakeup"};Ht.sleepyEvent={type:"sleepy"};Ht.sleepEvent={type:"sleep"};const AM=new C,wM=new $n,RM=new fi,CM=new Bi,DM=new Bi;new Bi;const NM=new C,UM=new C,LM=new C,OM=new C,zM=new C,PM=new C,BM=new C,FM=new C;class cx{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,n,a){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,n){return!((t.collisionFilterGroup&n.collisionFilterMask)===0||(n.collisionFilterGroup&t.collisionFilterMask)===0||((t.type&Ht.STATIC)!==0||t.sleepState===Ht.SLEEPING)&&((n.type&Ht.STATIC)!==0||n.sleepState===Ht.SLEEPING))}intersectionTest(t,n,a,r){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,n,a,r):this.doBoundingSphereBroadphase(t,n,a,r)}doBoundingSphereBroadphase(t,n,a,r){const o=IM;n.position.vsub(t.position,o);const u=(t.boundingRadius+n.boundingRadius)**2;o.lengthSquared()<u&&(a.push(t),r.push(n))}doBoundingBoxBroadphase(t,n,a,r){t.aabbNeedsUpdate&&t.updateAABB(),n.aabbNeedsUpdate&&n.updateAABB(),t.aabb.overlaps(n.aabb)&&(a.push(t),r.push(n))}makePairsUnique(t,n){const a=HM,r=GM,o=VM,u=t.length;for(let f=0;f!==u;f++)r[f]=t[f],o[f]=n[f];t.length=0,n.length=0;for(let f=0;f!==u;f++){const p=r[f].id,d=o[f].id,g=p<d?`${p},${d}`:`${d},${p}`;a[g]=f,a.keys.push(g)}for(let f=0;f!==a.keys.length;f++){const p=a.keys.pop(),d=a[p];t.push(r[d]),n.push(o[d]),delete a[p]}}setWorld(t){}static boundingSphereCheck(t,n){const a=new C;t.position.vsub(n.position,a);const r=t.shapes[0],o=n.shapes[0];return Math.pow(r.boundingSphereRadius+o.boundingSphereRadius,2)>a.lengthSquared()}aabbQuery(t,n,a){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const IM=new C;new C;new $n;new C;const HM={keys:[]},GM=[],VM=[];new C;new C;new C;class kM extends cx{constructor(){super()}collisionPairs(t,n,a){const r=t.bodies,o=r.length;let u,f;for(let p=0;p!==o;p++)for(let d=0;d!==p;d++)u=r[p],f=r[d],this.needBroadphaseCollision(u,f)&&this.intersectionTest(u,f,n,a)}aabbQuery(t,n,a){a===void 0&&(a=[]);for(let r=0;r<t.bodies.length;r++){const o=t.bodies[r];o.aabbNeedsUpdate&&o.updateAABB(),o.aabb.overlaps(n)&&a.push(o)}return a}}class Ru{constructor(){this.rayFromWorld=new C,this.rayToWorld=new C,this.hitNormalWorld=new C,this.hitPointWorld=new C,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,n,a,r,o,u,f){this.rayFromWorld.copy(t),this.rayToWorld.copy(n),this.hitNormalWorld.copy(a),this.hitPointWorld.copy(r),this.shape=o,this.body=u,this.distance=f}}let ux,fx,hx,dx,px,mx,gx;const Up={CLOSEST:1,ANY:2,ALL:4};ux=Yt.types.SPHERE;fx=Yt.types.PLANE;hx=Yt.types.BOX;dx=Yt.types.CYLINDER;px=Yt.types.CONVEXPOLYHEDRON;mx=Yt.types.HEIGHTFIELD;gx=Yt.types.TRIMESH;let ta=class Ki{get[ux](){return this._intersectSphere}get[fx](){return this._intersectPlane}get[hx](){return this._intersectBox}get[dx](){return this._intersectConvex}get[px](){return this._intersectConvex}get[mx](){return this._intersectHeightfield}get[gx](){return this._intersectTrimesh}constructor(t,n){t===void 0&&(t=new C),n===void 0&&(n=new C),this.from=t.clone(),this.to=n.clone(),this.direction=new C,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=Ki.ANY,this.result=new Ru,this.hasHit=!1,this.callback=a=>{}}intersectWorld(t,n){return this.mode=n.mode||Ki.ANY,this.result=n.result||new Ru,this.skipBackfaces=!!n.skipBackfaces,this.collisionFilterMask=typeof n.collisionFilterMask<"u"?n.collisionFilterMask:-1,this.collisionFilterGroup=typeof n.collisionFilterGroup<"u"?n.collisionFilterGroup:-1,this.checkCollisionResponse=typeof n.checkCollisionResponse<"u"?n.checkCollisionResponse:!0,n.from&&this.from.copy(n.from),n.to&&this.to.copy(n.to),this.callback=n.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(kv),Zh.length=0,t.broadphase.aabbQuery(t,kv,Zh),this.intersectBodies(Zh),this.hasHit}intersectBody(t,n){n&&(this.result=n,this.updateDirection());const a=this.checkCollisionResponse;if(a&&!t.collisionResponse||(this.collisionFilterGroup&t.collisionFilterMask)===0||(t.collisionFilterGroup&this.collisionFilterMask)===0)return;const r=qM,o=XM;for(let u=0,f=t.shapes.length;u<f;u++){const p=t.shapes[u];if(!(a&&!p.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[u],o),t.quaternion.vmult(t.shapeOffsets[u],r),r.vadd(t.position,r),this.intersectShape(p,o,r,t),this.result.shouldStop))break}}intersectBodies(t,n){n&&(this.result=n,this.updateDirection());for(let a=0,r=t.length;!this.result.shouldStop&&a<r;a++)this.intersectBody(t[a])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,n,a,r){const o=this.from;if(sE(o,this.direction,a)>t.boundingSphereRadius)return;const f=this[t.type];f&&f.call(this,t,n,a,r,t)}_intersectBox(t,n,a,r,o){return this._intersectConvex(t.convexPolyhedronRepresentation,n,a,r,o)}_intersectPlane(t,n,a,r,o){const u=this.from,f=this.to,p=this.direction,d=new C(0,0,1);n.vmult(d,d);const g=new C;u.vsub(a,g);const _=g.dot(d);f.vsub(a,g);const v=g.dot(d);if(_*v>0||u.distanceTo(f)<_)return;const y=d.dot(p);if(Math.abs(y)<this.precision)return;const M=new C,b=new C,S=new C;u.vsub(a,M);const x=-d.dot(M)/y;p.scale(x,b),u.vadd(b,S),this.reportIntersection(d,S,o,r,-1)}getAABB(t){const{lowerBound:n,upperBound:a}=t,r=this.to,o=this.from;n.x=Math.min(r.x,o.x),n.y=Math.min(r.y,o.y),n.z=Math.min(r.z,o.z),a.x=Math.max(r.x,o.x),a.y=Math.max(r.y,o.y),a.z=Math.max(r.z,o.z)}_intersectHeightfield(t,n,a,r,o){t.data,t.elementSize;const u=WM;u.from.copy(this.from),u.to.copy(this.to),Fe.pointToLocalFrame(a,n,u.from,u.from),Fe.pointToLocalFrame(a,n,u.to,u.to),u.updateDirection();const f=YM;let p,d,g,_;p=d=0,g=_=t.data.length-1;const v=new fi;u.getAABB(v),t.getIndexOfPosition(v.lowerBound.x,v.lowerBound.y,f,!0),p=Math.max(p,f[0]),d=Math.max(d,f[1]),t.getIndexOfPosition(v.upperBound.x,v.upperBound.y,f,!0),g=Math.min(g,f[0]+1),_=Math.min(_,f[1]+1);for(let y=p;y<g;y++)for(let M=d;M<_;M++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(y,M,v),!!v.overlapsRay(u)){if(t.getConvexTrianglePillar(y,M,!1),Fe.pointToWorldFrame(a,n,t.pillarOffset,Kc),this._intersectConvex(t.pillarConvex,n,Kc,r,o,qv),this.result.shouldStop)return;t.getConvexTrianglePillar(y,M,!0),Fe.pointToWorldFrame(a,n,t.pillarOffset,Kc),this._intersectConvex(t.pillarConvex,n,Kc,r,o,qv)}}}_intersectSphere(t,n,a,r,o){const u=this.from,f=this.to,p=t.radius,d=(f.x-u.x)**2+(f.y-u.y)**2+(f.z-u.z)**2,g=2*((f.x-u.x)*(u.x-a.x)+(f.y-u.y)*(u.y-a.y)+(f.z-u.z)*(u.z-a.z)),_=(u.x-a.x)**2+(u.y-a.y)**2+(u.z-a.z)**2-p**2,v=g**2-4*d*_,y=jM,M=ZM;if(!(v<0))if(v===0)u.lerp(f,v,y),y.vsub(a,M),M.normalize(),this.reportIntersection(M,y,o,r,-1);else{const b=(-g-Math.sqrt(v))/(2*d),S=(-g+Math.sqrt(v))/(2*d);if(b>=0&&b<=1&&(u.lerp(f,b,y),y.vsub(a,M),M.normalize(),this.reportIntersection(M,y,o,r,-1)),this.result.shouldStop)return;S>=0&&S<=1&&(u.lerp(f,S,y),y.vsub(a,M),M.normalize(),this.reportIntersection(M,y,o,r,-1))}}_intersectConvex(t,n,a,r,o,u){const f=KM,p=Xv,d=u&&u.faceList||null,g=t.faces,_=t.vertices,v=t.faceNormals,y=this.direction,M=this.from,b=this.to,S=M.distanceTo(b),x=d?d.length:g.length,T=this.result;for(let R=0;!T.shouldStop&&R<x;R++){const D=d?d[R]:R,L=g[D],P=v[D],B=n,W=a;p.copy(_[L[0]]),B.vmult(p,p),p.vadd(W,p),p.vsub(M,p),B.vmult(P,f);const w=y.dot(f);if(Math.abs(w)<this.precision)continue;const O=f.dot(p)/w;if(!(O<0)){y.scale(O,Qn),Qn.vadd(M,Qn),Di.copy(_[L[0]]),B.vmult(Di,Di),W.vadd(Di,Di);for(let G=1;!T.shouldStop&&G<L.length-1;G++){Yi.copy(_[L[G]]),ji.copy(_[L[G+1]]),B.vmult(Yi,Yi),B.vmult(ji,ji),W.vadd(Yi,Yi),W.vadd(ji,ji);const $=Qn.distanceTo(M);!(Ki.pointInTriangle(Qn,Di,Yi,ji)||Ki.pointInTriangle(Qn,Yi,Di,ji))||$>S||this.reportIntersection(f,Qn,o,r,D)}}}}_intersectTrimesh(t,n,a,r,o,u){const f=QM,p=iE,d=aE,g=Xv,_=JM,v=$M,y=tE,M=nE,b=eE,S=t.indices;t.vertices;const x=this.from,T=this.to,R=this.direction;d.position.copy(a),d.quaternion.copy(n),Fe.vectorToLocalFrame(a,n,R,_),Fe.pointToLocalFrame(a,n,x,v),Fe.pointToLocalFrame(a,n,T,y),y.x*=t.scale.x,y.y*=t.scale.y,y.z*=t.scale.z,v.x*=t.scale.x,v.y*=t.scale.y,v.z*=t.scale.z,y.vsub(v,_),_.normalize();const D=v.distanceSquared(y);t.tree.rayQuery(this,d,p);for(let L=0,P=p.length;!this.result.shouldStop&&L!==P;L++){const B=p[L];t.getNormal(B,f),t.getVertex(S[B*3],Di),Di.vsub(v,g);const W=_.dot(f),w=f.dot(g)/W;if(w<0)continue;_.scale(w,Qn),Qn.vadd(v,Qn),t.getVertex(S[B*3+1],Yi),t.getVertex(S[B*3+2],ji);const O=Qn.distanceSquared(v);!(Ki.pointInTriangle(Qn,Yi,Di,ji)||Ki.pointInTriangle(Qn,Di,Yi,ji))||O>D||(Fe.vectorToWorldFrame(n,f,b),Fe.pointToWorldFrame(a,n,Qn,M),this.reportIntersection(b,M,o,r,B))}p.length=0}reportIntersection(t,n,a,r,o){const u=this.from,f=this.to,p=u.distanceTo(n),d=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(d.hitFaceIndex=typeof o<"u"?o:-1,this.mode){case Ki.ALL:this.hasHit=!0,d.set(u,f,t,n,a,r,p),d.hasHit=!0,this.callback(d);break;case Ki.CLOSEST:(p<d.distance||!d.hasHit)&&(this.hasHit=!0,d.hasHit=!0,d.set(u,f,t,n,a,r,p));break;case Ki.ANY:this.hasHit=!0,d.hasHit=!0,d.set(u,f,t,n,a,r,p),d.shouldStop=!0;break}}static pointInTriangle(t,n,a,r){r.vsub(n,er),a.vsub(n,pl),t.vsub(n,Kh);const o=er.dot(er),u=er.dot(pl),f=er.dot(Kh),p=pl.dot(pl),d=pl.dot(Kh);let g,_;return(g=p*f-u*d)>=0&&(_=o*d-u*f)>=0&&g+_<o*p-u*u}};ta.CLOSEST=Up.CLOSEST;ta.ANY=Up.ANY;ta.ALL=Up.ALL;const kv=new fi,Zh=[],pl=new C,Kh=new C,qM=new C,XM=new $n,Qn=new C,Di=new C,Yi=new C,ji=new C;new C;new Ru;const qv={faceList:[0]},Kc=new C,WM=new ta,YM=[],jM=new C,ZM=new C,KM=new C;new C;new C;const Xv=new C,QM=new C,JM=new C,$M=new C,tE=new C,eE=new C,nE=new C;new fi;const iE=[],aE=new Fe,er=new C,Qc=new C;function sE(c,t,n){n.vsub(c,er);const a=er.dot(t);return t.scale(a,Qc),Qc.vadd(c,Qc),n.distanceTo(Qc)}class oo extends cx{static checkBounds(t,n,a){let r,o;a===0?(r=t.position.x,o=n.position.x):a===1?(r=t.position.y,o=n.position.y):a===2&&(r=t.position.z,o=n.position.z);const u=t.boundingRadius,f=n.boundingRadius,p=r+u;return o-f<p}static insertionSortX(t){for(let n=1,a=t.length;n<a;n++){const r=t[n];let o;for(o=n-1;o>=0&&!(t[o].aabb.lowerBound.x<=r.aabb.lowerBound.x);o--)t[o+1]=t[o];t[o+1]=r}return t}static insertionSortY(t){for(let n=1,a=t.length;n<a;n++){const r=t[n];let o;for(o=n-1;o>=0&&!(t[o].aabb.lowerBound.y<=r.aabb.lowerBound.y);o--)t[o+1]=t[o];t[o+1]=r}return t}static insertionSortZ(t){for(let n=1,a=t.length;n<a;n++){const r=t[n];let o;for(o=n-1;o>=0&&!(t[o].aabb.lowerBound.z<=r.aabb.lowerBound.z);o--)t[o+1]=t[o];t[o+1]=r}return t}constructor(t){super(),this.axisList=[],this.world=null,this.axisIndex=0;const n=this.axisList;this._addBodyHandler=a=>{n.push(a.body)},this._removeBodyHandler=a=>{const r=n.indexOf(a.body);r!==-1&&n.splice(r,1)},t&&this.setWorld(t)}setWorld(t){this.axisList.length=0;for(let n=0;n<t.bodies.length;n++)this.axisList.push(t.bodies[n]);t.removeEventListener("addBody",this._addBodyHandler),t.removeEventListener("removeBody",this._removeBodyHandler),t.addEventListener("addBody",this._addBodyHandler),t.addEventListener("removeBody",this._removeBodyHandler),this.world=t,this.dirty=!0}collisionPairs(t,n,a){const r=this.axisList,o=r.length,u=this.axisIndex;let f,p;for(this.dirty&&(this.sortList(),this.dirty=!1),f=0;f!==o;f++){const d=r[f];for(p=f+1;p<o;p++){const g=r[p];if(this.needBroadphaseCollision(d,g)){if(!oo.checkBounds(d,g,u))break;this.intersectionTest(d,g,n,a)}}}}sortList(){const t=this.axisList,n=this.axisIndex,a=t.length;for(let r=0;r!==a;r++){const o=t[r];o.aabbNeedsUpdate&&o.updateAABB()}n===0?oo.insertionSortX(t):n===1?oo.insertionSortY(t):n===2&&oo.insertionSortZ(t)}autoDetectAxis(){let t=0,n=0,a=0,r=0,o=0,u=0;const f=this.axisList,p=f.length,d=1/p;for(let y=0;y!==p;y++){const M=f[y],b=M.position.x;t+=b,n+=b*b;const S=M.position.y;a+=S,r+=S*S;const x=M.position.z;o+=x,u+=x*x}const g=n-t*t*d,_=r-a*a*d,v=u-o*o*d;g>_?g>v?this.axisIndex=0:this.axisIndex=2:_>v?this.axisIndex=1:this.axisIndex=2}aabbQuery(t,n,a){a===void 0&&(a=[]),this.dirty&&(this.sortList(),this.dirty=!1);const r=this.axisIndex;let o="x";r===1&&(o="y"),r===2&&(o="z");const u=this.axisList;n.lowerBound[o],n.upperBound[o];for(let f=0;f<u.length;f++){const p=u[f];p.aabbNeedsUpdate&&p.updateAABB(),p.aabb.overlaps(n)&&a.push(p)}return a}}class rE{static defaults(t,n){t===void 0&&(t={});for(let a in n)a in t||(t[a]=n[a]);return t}}class Wv{constructor(){this.spatial=new C,this.rotational=new C}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,n){return t.dot(this.spatial)+n.dot(this.rotational)}}class Ll{constructor(t,n,a,r){a===void 0&&(a=-1e6),r===void 0&&(r=1e6),this.id=Ll.idCounter++,this.minForce=a,this.maxForce=r,this.bi=t,this.bj=n,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new Wv,this.jacobianElementB=new Wv,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,n,a){const r=n,o=t,u=a;this.a=4/(u*(1+4*r)),this.b=4*r/(1+4*r),this.eps=4/(u*u*o*(1+4*r))}computeB(t,n,a){const r=this.computeGW(),o=this.computeGq(),u=this.computeGiMf();return-o*t-r*n-u*a}computeGq(){const t=this.jacobianElementA,n=this.jacobianElementB,a=this.bi,r=this.bj,o=a.position,u=r.position;return t.spatial.dot(o)+n.spatial.dot(u)}computeGW(){const t=this.jacobianElementA,n=this.jacobianElementB,a=this.bi,r=this.bj,o=a.velocity,u=r.velocity,f=a.angularVelocity,p=r.angularVelocity;return t.multiplyVectors(o,f)+n.multiplyVectors(u,p)}computeGWlambda(){const t=this.jacobianElementA,n=this.jacobianElementB,a=this.bi,r=this.bj,o=a.vlambda,u=r.vlambda,f=a.wlambda,p=r.wlambda;return t.multiplyVectors(o,f)+n.multiplyVectors(u,p)}computeGiMf(){const t=this.jacobianElementA,n=this.jacobianElementB,a=this.bi,r=this.bj,o=a.force,u=a.torque,f=r.force,p=r.torque,d=a.invMassSolve,g=r.invMassSolve;return o.scale(d,Yv),f.scale(g,jv),a.invInertiaWorldSolve.vmult(u,Zv),r.invInertiaWorldSolve.vmult(p,Kv),t.multiplyVectors(Yv,Zv)+n.multiplyVectors(jv,Kv)}computeGiMGt(){const t=this.jacobianElementA,n=this.jacobianElementB,a=this.bi,r=this.bj,o=a.invMassSolve,u=r.invMassSolve,f=a.invInertiaWorldSolve,p=r.invInertiaWorldSolve;let d=o+u;return f.vmult(t.rotational,Jc),d+=Jc.dot(t.rotational),p.vmult(n.rotational,Jc),d+=Jc.dot(n.rotational),d}addToWlambda(t){const n=this.jacobianElementA,a=this.jacobianElementB,r=this.bi,o=this.bj,u=oE;r.vlambda.addScaledVector(r.invMassSolve*t,n.spatial,r.vlambda),o.vlambda.addScaledVector(o.invMassSolve*t,a.spatial,o.vlambda),r.invInertiaWorldSolve.vmult(n.rotational,u),r.wlambda.addScaledVector(t,u,r.wlambda),o.invInertiaWorldSolve.vmult(a.rotational,u),o.wlambda.addScaledVector(t,u,o.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}Ll.idCounter=0;const Yv=new C,jv=new C,Zv=new C,Kv=new C,Jc=new C,oE=new C;class lE extends Ll{constructor(t,n,a){a===void 0&&(a=1e6),super(t,n,0,a),this.restitution=0,this.ri=new C,this.rj=new C,this.ni=new C}computeB(t){const n=this.a,a=this.b,r=this.bi,o=this.bj,u=this.ri,f=this.rj,p=cE,d=uE,g=r.velocity,_=r.angularVelocity;r.force,r.torque;const v=o.velocity,y=o.angularVelocity;o.force,o.torque;const M=fE,b=this.jacobianElementA,S=this.jacobianElementB,x=this.ni;u.cross(x,p),f.cross(x,d),x.negate(b.spatial),p.negate(b.rotational),S.spatial.copy(x),S.rotational.copy(d),M.copy(o.position),M.vadd(f,M),M.vsub(r.position,M),M.vsub(u,M);const T=x.dot(M),R=this.restitution+1,D=R*v.dot(x)-R*g.dot(x)+y.dot(d)-_.dot(p),L=this.computeGiMf();return-T*n-D*a-t*L}getImpactVelocityAlongNormal(){const t=hE,n=dE,a=pE,r=mE,o=gE;return this.bi.position.vadd(this.ri,a),this.bj.position.vadd(this.rj,r),this.bi.getVelocityAtWorldPoint(a,t),this.bj.getVelocityAtWorldPoint(r,n),t.vsub(n,o),this.ni.dot(o)}}const cE=new C,uE=new C,fE=new C,hE=new C,dE=new C,pE=new C,mE=new C,gE=new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;class Qv extends Ll{constructor(t,n,a){super(t,n,-a,a),this.ri=new C,this.rj=new C,this.t=new C}computeB(t){this.a;const n=this.b;this.bi,this.bj;const a=this.ri,r=this.rj,o=vE,u=_E,f=this.t;a.cross(f,o),r.cross(f,u);const p=this.jacobianElementA,d=this.jacobianElementB;f.negate(p.spatial),o.negate(p.rotational),d.spatial.copy(f),d.rotational.copy(u);const g=this.computeGW(),_=this.computeGiMf();return-g*n-t*_}}const vE=new C,_E=new C;class uo{constructor(t,n,a){a=rE.defaults(a,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=uo.idCounter++,this.materials=[t,n],this.friction=a.friction,this.restitution=a.restitution,this.contactEquationStiffness=a.contactEquationStiffness,this.contactEquationRelaxation=a.contactEquationRelaxation,this.frictionEquationStiffness=a.frictionEquationStiffness,this.frictionEquationRelaxation=a.frictionEquationRelaxation}}uo.idCounter=0;let Cu=class vx{constructor(t){t===void 0&&(t={});let n="";typeof t=="string"&&(n=t,t={}),this.name=n,this.id=vx.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}};Cu.idCounter=0;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new ta;new C;new C;new C;new C(1,0,0),new C(0,1,0),new C(0,0,1);new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;let xE=class extends Yt{constructor(){super({type:Yt.types.PLANE}),this.worldNormal=new C,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(t){const n=this.worldNormal;n.set(0,0,1),t.vmult(n,n),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(t,n){return n===void 0&&(n=new C),n}volume(){return Number.MAX_VALUE}calculateWorldAABB(t,n,a,r){ba.set(0,0,1),n.vmult(ba,ba);const o=Number.MAX_VALUE;a.set(-o,-o,-o),r.set(o,o,o),ba.x===1?r.x=t.x:ba.x===-1&&(a.x=t.x),ba.y===1?r.y=t.y:ba.y===-1&&(a.y=t.y),ba.z===1?r.z=t.z:ba.z===-1&&(a.z=t.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}};const ba=new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new fi;new C;new fi;new C;new C;new C;new C;new C;new C;new C;new fi;new C;new Fe;new fi;class yE{constructor(){this.equations=[]}solve(t,n){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const n=this.equations,a=n.indexOf(t);a!==-1&&n.splice(a,1)}removeAllEquations(){this.equations.length=0}}class SE extends yE{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,n){let a=0;const r=this.iterations,o=this.tolerance*this.tolerance,u=this.equations,f=u.length,p=n.bodies,d=p.length,g=t;let _,v,y,M,b,S;if(f!==0)for(let D=0;D!==d;D++)p[D].updateSolveMassProperties();const x=EE,T=bE,R=ME;x.length=f,T.length=f,R.length=f;for(let D=0;D!==f;D++){const L=u[D];R[D]=0,T[D]=L.computeB(g),x[D]=1/L.computeC()}if(f!==0){for(let P=0;P!==d;P++){const B=p[P],W=B.vlambda,w=B.wlambda;W.set(0,0,0),w.set(0,0,0)}for(a=0;a!==r;a++){M=0;for(let P=0;P!==f;P++){const B=u[P];_=T[P],v=x[P],S=R[P],b=B.computeGWlambda(),y=v*(_-b-B.eps*S),S+y<B.minForce?y=B.minForce-S:S+y>B.maxForce&&(y=B.maxForce-S),R[P]+=y,M+=y>0?y:-y,B.addToWlambda(y)}if(M*M<o)break}for(let P=0;P!==d;P++){const B=p[P],W=B.velocity,w=B.angularVelocity;B.vlambda.vmul(B.linearFactor,B.vlambda),W.vadd(B.vlambda,W),B.wlambda.vmul(B.angularFactor,B.wlambda),w.vadd(B.wlambda,w)}let D=u.length;const L=1/g;for(;D--;)u[D].multiplier=R[D]*L}return a}}const ME=[],EE=[],bE=[];class TE{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let n=0;n!==t;n++)this.objects.push(n<0||arguments.length<=n?void 0:arguments[n]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const n=this.objects;for(;n.length>t;)n.pop();for(;n.length<t;)n.push(this.constructObject());return this}}class AE extends TE{constructor(){super(...arguments),this.type=C}constructObject(){return new C}}const en={sphereSphere:Yt.types.SPHERE,spherePlane:Yt.types.SPHERE|Yt.types.PLANE,boxBox:Yt.types.BOX|Yt.types.BOX,sphereBox:Yt.types.SPHERE|Yt.types.BOX,planeBox:Yt.types.PLANE|Yt.types.BOX,convexConvex:Yt.types.CONVEXPOLYHEDRON,sphereConvex:Yt.types.SPHERE|Yt.types.CONVEXPOLYHEDRON,planeConvex:Yt.types.PLANE|Yt.types.CONVEXPOLYHEDRON,boxConvex:Yt.types.BOX|Yt.types.CONVEXPOLYHEDRON,sphereHeightfield:Yt.types.SPHERE|Yt.types.HEIGHTFIELD,boxHeightfield:Yt.types.BOX|Yt.types.HEIGHTFIELD,convexHeightfield:Yt.types.CONVEXPOLYHEDRON|Yt.types.HEIGHTFIELD,sphereParticle:Yt.types.PARTICLE|Yt.types.SPHERE,planeParticle:Yt.types.PLANE|Yt.types.PARTICLE,boxParticle:Yt.types.BOX|Yt.types.PARTICLE,convexParticle:Yt.types.PARTICLE|Yt.types.CONVEXPOLYHEDRON,cylinderCylinder:Yt.types.CYLINDER,sphereCylinder:Yt.types.SPHERE|Yt.types.CYLINDER,planeCylinder:Yt.types.PLANE|Yt.types.CYLINDER,boxCylinder:Yt.types.BOX|Yt.types.CYLINDER,convexCylinder:Yt.types.CONVEXPOLYHEDRON|Yt.types.CYLINDER,heightfieldCylinder:Yt.types.HEIGHTFIELD|Yt.types.CYLINDER,particleCylinder:Yt.types.PARTICLE|Yt.types.CYLINDER,sphereTrimesh:Yt.types.SPHERE|Yt.types.TRIMESH,planeTrimesh:Yt.types.PLANE|Yt.types.TRIMESH};class wE{get[en.sphereSphere](){return this.sphereSphere}get[en.spherePlane](){return this.spherePlane}get[en.boxBox](){return this.boxBox}get[en.sphereBox](){return this.sphereBox}get[en.planeBox](){return this.planeBox}get[en.convexConvex](){return this.convexConvex}get[en.sphereConvex](){return this.sphereConvex}get[en.planeConvex](){return this.planeConvex}get[en.boxConvex](){return this.boxConvex}get[en.sphereHeightfield](){return this.sphereHeightfield}get[en.boxHeightfield](){return this.boxHeightfield}get[en.convexHeightfield](){return this.convexHeightfield}get[en.sphereParticle](){return this.sphereParticle}get[en.planeParticle](){return this.planeParticle}get[en.boxParticle](){return this.boxParticle}get[en.convexParticle](){return this.convexParticle}get[en.cylinderCylinder](){return this.convexConvex}get[en.sphereCylinder](){return this.sphereConvex}get[en.planeCylinder](){return this.planeConvex}get[en.boxCylinder](){return this.boxConvex}get[en.convexCylinder](){return this.convexConvex}get[en.heightfieldCylinder](){return this.heightfieldCylinder}get[en.particleCylinder](){return this.particleCylinder}get[en.sphereTrimesh](){return this.sphereTrimesh}get[en.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new AE,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,n,a,r,o,u){let f;this.contactPointPool.length?(f=this.contactPointPool.pop(),f.bi=t,f.bj=n):f=new lE(t,n),f.enabled=t.collisionResponse&&n.collisionResponse&&a.collisionResponse&&r.collisionResponse;const p=this.currentContactMaterial;f.restitution=p.restitution,f.setSpookParams(p.contactEquationStiffness,p.contactEquationRelaxation,this.world.dt);const d=a.material||t.material,g=r.material||n.material;return d&&g&&d.restitution>=0&&g.restitution>=0&&(f.restitution=d.restitution*g.restitution),f.si=o||a,f.sj=u||r,f}createFrictionEquationsFromContact(t,n){const a=t.bi,r=t.bj,o=t.si,u=t.sj,f=this.world,p=this.currentContactMaterial;let d=p.friction;const g=o.material||a.material,_=u.material||r.material;if(g&&_&&g.friction>=0&&_.friction>=0&&(d=g.friction*_.friction),d>0){const v=d*(f.frictionGravity||f.gravity).length();let y=a.invMass+r.invMass;y>0&&(y=1/y);const M=this.frictionEquationPool,b=M.length?M.pop():new Qv(a,r,v*y),S=M.length?M.pop():new Qv(a,r,v*y);return b.bi=S.bi=a,b.bj=S.bj=r,b.minForce=S.minForce=-v*y,b.maxForce=S.maxForce=v*y,b.ri.copy(t.ri),b.rj.copy(t.rj),S.ri.copy(t.ri),S.rj.copy(t.rj),t.ni.tangents(b.t,S.t),b.setSpookParams(p.frictionEquationStiffness,p.frictionEquationRelaxation,f.dt),S.setSpookParams(p.frictionEquationStiffness,p.frictionEquationRelaxation,f.dt),b.enabled=S.enabled=t.enabled,n.push(b,S),!0}return!1}createFrictionFromAverage(t){let n=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(n,this.frictionResult)||t===1)return;const a=this.frictionResult[this.frictionResult.length-2],r=this.frictionResult[this.frictionResult.length-1];qs.setZero(),qr.setZero(),Xr.setZero();const o=n.bi;n.bj;for(let f=0;f!==t;f++)n=this.result[this.result.length-1-f],n.bi!==o?(qs.vadd(n.ni,qs),qr.vadd(n.ri,qr),Xr.vadd(n.rj,Xr)):(qs.vsub(n.ni,qs),qr.vadd(n.rj,qr),Xr.vadd(n.ri,Xr));const u=1/t;qr.scale(u,a.ri),Xr.scale(u,a.rj),r.ri.copy(a.ri),r.rj.copy(a.rj),qs.normalize(),qs.tangents(a.t,r.t)}getContacts(t,n,a,r,o,u,f){this.contactPointPool=o,this.frictionEquationPool=f,this.result=r,this.frictionResult=u;const p=DE,d=NE,g=RE,_=CE;for(let v=0,y=t.length;v!==y;v++){const M=t[v],b=n[v];let S=null;M.material&&b.material&&(S=a.getContactMaterial(M.material,b.material)||null);const x=M.type&Ht.KINEMATIC&&b.type&Ht.STATIC||M.type&Ht.STATIC&&b.type&Ht.KINEMATIC||M.type&Ht.KINEMATIC&&b.type&Ht.KINEMATIC;for(let T=0;T<M.shapes.length;T++){M.quaternion.mult(M.shapeOrientations[T],p),M.quaternion.vmult(M.shapeOffsets[T],g),g.vadd(M.position,g);const R=M.shapes[T];for(let D=0;D<b.shapes.length;D++){b.quaternion.mult(b.shapeOrientations[D],d),b.quaternion.vmult(b.shapeOffsets[D],_),_.vadd(b.position,_);const L=b.shapes[D];if(!(R.collisionFilterMask&L.collisionFilterGroup&&L.collisionFilterMask&R.collisionFilterGroup)||g.distanceTo(_)>R.boundingSphereRadius+L.boundingSphereRadius)continue;let P=null;R.material&&L.material&&(P=a.getContactMaterial(R.material,L.material)||null),this.currentContactMaterial=P||S||a.defaultContactMaterial;const B=R.type|L.type,W=this[B];if(W){let w=!1;R.type<L.type?w=W.call(this,R,L,g,_,p,d,M,b,R,L,x):w=W.call(this,L,R,_,g,d,p,b,M,R,L,x),w&&x&&(a.shapeOverlapKeeper.set(R.id,L.id),a.bodyOverlapKeeper.set(M.id,b.id))}}}}}sphereSphere(t,n,a,r,o,u,f,p,d,g,_){if(_)return a.distanceSquared(r)<(t.radius+n.radius)**2;const v=this.createContactEquation(f,p,t,n,d,g);r.vsub(a,v.ni),v.ni.normalize(),v.ri.copy(v.ni),v.rj.copy(v.ni),v.ri.scale(t.radius,v.ri),v.rj.scale(-n.radius,v.rj),v.ri.vadd(a,v.ri),v.ri.vsub(f.position,v.ri),v.rj.vadd(r,v.rj),v.rj.vsub(p.position,v.rj),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}spherePlane(t,n,a,r,o,u,f,p,d,g,_){const v=this.createContactEquation(f,p,t,n,d,g);if(v.ni.set(0,0,1),u.vmult(v.ni,v.ni),v.ni.negate(v.ni),v.ni.normalize(),v.ni.scale(t.radius,v.ri),a.vsub(r,$c),v.ni.scale(v.ni.dot($c),Jv),$c.vsub(Jv,v.rj),-$c.dot(v.ni)<=t.radius){if(_)return!0;const y=v.ri,M=v.rj;y.vadd(a,y),y.vsub(f.position,y),M.vadd(r,M),M.vsub(p.position,M),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}boxBox(t,n,a,r,o,u,f,p,d,g,_){return t.convexPolyhedronRepresentation.material=t.material,n.convexPolyhedronRepresentation.material=n.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,n.convexPolyhedronRepresentation.collisionResponse=n.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,n.convexPolyhedronRepresentation,a,r,o,u,f,p,t,n,_)}sphereBox(t,n,a,r,o,u,f,p,d,g,_){const v=this.v3pool,y=ib;a.vsub(r,tu),n.getSideNormals(y,u);const M=t.radius;let b=!1;const S=sb,x=rb,T=ob;let R=null,D=0,L=0,P=0,B=null;for(let z=0,H=y.length;z!==H&&b===!1;z++){const Z=tb;Z.copy(y[z]);const ct=Z.length();Z.normalize();const vt=tu.dot(Z);if(vt<ct+M&&vt>0){const F=eb,Y=nb;F.copy(y[(z+1)%3]),Y.copy(y[(z+2)%3]);const mt=F.length(),bt=Y.length();F.normalize(),Y.normalize();const It=tu.dot(F),nt=tu.dot(Y);if(It<mt&&It>-mt&&nt<bt&&nt>-bt){const ft=Math.abs(vt-ct-M);if((B===null||ft<B)&&(B=ft,L=It,P=nt,R=ct,S.copy(Z),x.copy(F),T.copy(Y),D++,_))return!0}}}if(D){b=!0;const z=this.createContactEquation(f,p,t,n,d,g);S.scale(-M,z.ri),z.ni.copy(S),z.ni.negate(z.ni),S.scale(R,S),x.scale(L,x),S.vadd(x,S),T.scale(P,T),S.vadd(T,z.rj),z.ri.vadd(a,z.ri),z.ri.vsub(f.position,z.ri),z.rj.vadd(r,z.rj),z.rj.vsub(p.position,z.rj),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult)}let W=v.get();const w=ab;for(let z=0;z!==2&&!b;z++)for(let H=0;H!==2&&!b;H++)for(let Z=0;Z!==2&&!b;Z++)if(W.set(0,0,0),z?W.vadd(y[0],W):W.vsub(y[0],W),H?W.vadd(y[1],W):W.vsub(y[1],W),Z?W.vadd(y[2],W):W.vsub(y[2],W),r.vadd(W,w),w.vsub(a,w),w.lengthSquared()<M*M){if(_)return!0;b=!0;const ct=this.createContactEquation(f,p,t,n,d,g);ct.ri.copy(w),ct.ri.normalize(),ct.ni.copy(ct.ri),ct.ri.scale(M,ct.ri),ct.rj.copy(W),ct.ri.vadd(a,ct.ri),ct.ri.vsub(f.position,ct.ri),ct.rj.vadd(r,ct.rj),ct.rj.vsub(p.position,ct.rj),this.result.push(ct),this.createFrictionEquationsFromContact(ct,this.frictionResult)}v.release(W),W=null;const O=v.get(),G=v.get(),$=v.get(),V=v.get(),Q=v.get(),j=y.length;for(let z=0;z!==j&&!b;z++)for(let H=0;H!==j&&!b;H++)if(z%3!==H%3){y[H].cross(y[z],O),O.normalize(),y[z].vadd(y[H],G),$.copy(a),$.vsub(G,$),$.vsub(r,$);const Z=$.dot(O);O.scale(Z,V);let ct=0;for(;ct===z%3||ct===H%3;)ct++;Q.copy(a),Q.vsub(V,Q),Q.vsub(G,Q),Q.vsub(r,Q);const vt=Math.abs(Z),F=Q.length();if(vt<y[ct].length()&&F<M){if(_)return!0;b=!0;const Y=this.createContactEquation(f,p,t,n,d,g);G.vadd(V,Y.rj),Y.rj.copy(Y.rj),Q.negate(Y.ni),Y.ni.normalize(),Y.ri.copy(Y.rj),Y.ri.vadd(r,Y.ri),Y.ri.vsub(a,Y.ri),Y.ri.normalize(),Y.ri.scale(M,Y.ri),Y.ri.vadd(a,Y.ri),Y.ri.vsub(f.position,Y.ri),Y.rj.vadd(r,Y.rj),Y.rj.vsub(p.position,Y.rj),this.result.push(Y),this.createFrictionEquationsFromContact(Y,this.frictionResult)}}v.release(O,G,$,V,Q)}planeBox(t,n,a,r,o,u,f,p,d,g,_){return n.convexPolyhedronRepresentation.material=n.material,n.convexPolyhedronRepresentation.collisionResponse=n.collisionResponse,n.convexPolyhedronRepresentation.id=n.id,this.planeConvex(t,n.convexPolyhedronRepresentation,a,r,o,u,f,p,t,n,_)}convexConvex(t,n,a,r,o,u,f,p,d,g,_,v,y){const M=Mb;if(!(a.distanceTo(r)>t.boundingSphereRadius+n.boundingSphereRadius)&&t.findSeparatingAxis(n,a,o,r,u,M,v,y)){const b=[],S=Eb;t.clipAgainstHull(a,o,n,r,u,M,-100,100,b);let x=0;for(let T=0;T!==b.length;T++){if(_)return!0;const R=this.createContactEquation(f,p,t,n,d,g),D=R.ri,L=R.rj;M.negate(R.ni),b[T].normal.negate(S),S.scale(b[T].depth,S),b[T].point.vadd(S,D),L.copy(b[T].point),D.vsub(a,D),L.vsub(r,L),D.vadd(a,D),D.vsub(f.position,D),L.vadd(r,L),L.vsub(p.position,L),this.result.push(R),x++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(R,this.frictionResult)}this.enableFrictionReduction&&x&&this.createFrictionFromAverage(x)}}sphereConvex(t,n,a,r,o,u,f,p,d,g,_){const v=this.v3pool;a.vsub(r,lb);const y=n.faceNormals,M=n.faces,b=n.vertices,S=t.radius;let x=!1;for(let T=0;T!==b.length;T++){const R=b[T],D=hb;u.vmult(R,D),r.vadd(D,D);const L=fb;if(D.vsub(a,L),L.lengthSquared()<S*S){if(_)return!0;x=!0;const P=this.createContactEquation(f,p,t,n,d,g);P.ri.copy(L),P.ri.normalize(),P.ni.copy(P.ri),P.ri.scale(S,P.ri),D.vsub(r,P.rj),P.ri.vadd(a,P.ri),P.ri.vsub(f.position,P.ri),P.rj.vadd(r,P.rj),P.rj.vsub(p.position,P.rj),this.result.push(P),this.createFrictionEquationsFromContact(P,this.frictionResult);return}}for(let T=0,R=M.length;T!==R&&x===!1;T++){const D=y[T],L=M[T],P=db;u.vmult(D,P);const B=pb;u.vmult(b[L[0]],B),B.vadd(r,B);const W=mb;P.scale(-S,W),a.vadd(W,W);const w=gb;W.vsub(B,w);const O=w.dot(P),G=vb;if(a.vsub(B,G),O<0&&G.dot(P)>0){const $=[];for(let V=0,Q=L.length;V!==Q;V++){const j=v.get();u.vmult(b[L[V]],j),r.vadd(j,j),$.push(j)}if($E($,P,a)){if(_)return!0;x=!0;const V=this.createContactEquation(f,p,t,n,d,g);P.scale(-S,V.ri),P.negate(V.ni);const Q=v.get();P.scale(-O,Q);const j=v.get();P.scale(-S,j),a.vsub(r,V.rj),V.rj.vadd(j,V.rj),V.rj.vadd(Q,V.rj),V.rj.vadd(r,V.rj),V.rj.vsub(p.position,V.rj),V.ri.vadd(a,V.ri),V.ri.vsub(f.position,V.ri),v.release(Q),v.release(j),this.result.push(V),this.createFrictionEquationsFromContact(V,this.frictionResult);for(let z=0,H=$.length;z!==H;z++)v.release($[z]);return}else for(let V=0;V!==L.length;V++){const Q=v.get(),j=v.get();u.vmult(b[L[(V+1)%L.length]],Q),u.vmult(b[L[(V+2)%L.length]],j),r.vadd(Q,Q),r.vadd(j,j);const z=cb;j.vsub(Q,z);const H=ub;z.unit(H);const Z=v.get(),ct=v.get();a.vsub(Q,ct);const vt=ct.dot(H);H.scale(vt,Z),Z.vadd(Q,Z);const F=v.get();if(Z.vsub(a,F),vt>0&&vt*vt<z.lengthSquared()&&F.lengthSquared()<S*S){if(_)return!0;const Y=this.createContactEquation(f,p,t,n,d,g);Z.vsub(r,Y.rj),Z.vsub(a,Y.ni),Y.ni.normalize(),Y.ni.scale(S,Y.ri),Y.rj.vadd(r,Y.rj),Y.rj.vsub(p.position,Y.rj),Y.ri.vadd(a,Y.ri),Y.ri.vsub(f.position,Y.ri),this.result.push(Y),this.createFrictionEquationsFromContact(Y,this.frictionResult);for(let mt=0,bt=$.length;mt!==bt;mt++)v.release($[mt]);v.release(Q),v.release(j),v.release(Z),v.release(F),v.release(ct);return}v.release(Q),v.release(j),v.release(Z),v.release(F),v.release(ct)}for(let V=0,Q=$.length;V!==Q;V++)v.release($[V])}}}planeConvex(t,n,a,r,o,u,f,p,d,g,_){const v=_b,y=xb;y.set(0,0,1),o.vmult(y,y);let M=0;const b=yb;for(let S=0;S!==n.vertices.length;S++)if(v.copy(n.vertices[S]),u.vmult(v,v),r.vadd(v,v),v.vsub(a,b),y.dot(b)<=0){if(_)return!0;const T=this.createContactEquation(f,p,t,n,d,g),R=Sb;y.scale(y.dot(b),R),v.vsub(R,R),R.vsub(a,T.ri),T.ni.copy(y),v.vsub(r,T.rj),T.ri.vadd(a,T.ri),T.ri.vsub(f.position,T.ri),T.rj.vadd(r,T.rj),T.rj.vsub(p.position,T.rj),this.result.push(T),M++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(T,this.frictionResult)}this.enableFrictionReduction&&M&&this.createFrictionFromAverage(M)}boxConvex(t,n,a,r,o,u,f,p,d,g,_){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,n,a,r,o,u,f,p,t,n,_)}sphereHeightfield(t,n,a,r,o,u,f,p,d,g,_){const v=n.data,y=t.radius,M=n.elementSize,b=zb,S=Ob;Fe.pointToLocalFrame(r,u,a,S);let x=Math.floor((S.x-y)/M)-1,T=Math.ceil((S.x+y)/M)+1,R=Math.floor((S.y-y)/M)-1,D=Math.ceil((S.y+y)/M)+1;if(T<0||D<0||x>v.length||R>v[0].length)return;x<0&&(x=0),T<0&&(T=0),R<0&&(R=0),D<0&&(D=0),x>=v.length&&(x=v.length-1),T>=v.length&&(T=v.length-1),D>=v[0].length&&(D=v[0].length-1),R>=v[0].length&&(R=v[0].length-1);const L=[];n.getRectMinMax(x,R,T,D,L);const P=L[0],B=L[1];if(S.z-y>B||S.z+y<P)return;const W=this.result;for(let w=x;w<T;w++)for(let O=R;O<D;O++){const G=W.length;let $=!1;if(n.getConvexTrianglePillar(w,O,!1),Fe.pointToWorldFrame(r,u,n.pillarOffset,b),a.distanceTo(b)<n.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&($=this.sphereConvex(t,n.pillarConvex,a,b,o,u,f,p,t,n,_)),_&&$||(n.getConvexTrianglePillar(w,O,!0),Fe.pointToWorldFrame(r,u,n.pillarOffset,b),a.distanceTo(b)<n.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&($=this.sphereConvex(t,n.pillarConvex,a,b,o,u,f,p,t,n,_)),_&&$))return!0;if(W.length-G>2)return}}boxHeightfield(t,n,a,r,o,u,f,p,d,g,_){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,n,a,r,o,u,f,p,t,n,_)}convexHeightfield(t,n,a,r,o,u,f,p,d,g,_){const v=n.data,y=n.elementSize,M=t.boundingSphereRadius,b=Ub,S=Lb,x=Nb;Fe.pointToLocalFrame(r,u,a,x);let T=Math.floor((x.x-M)/y)-1,R=Math.ceil((x.x+M)/y)+1,D=Math.floor((x.y-M)/y)-1,L=Math.ceil((x.y+M)/y)+1;if(R<0||L<0||T>v.length||D>v[0].length)return;T<0&&(T=0),R<0&&(R=0),D<0&&(D=0),L<0&&(L=0),T>=v.length&&(T=v.length-1),R>=v.length&&(R=v.length-1),L>=v[0].length&&(L=v[0].length-1),D>=v[0].length&&(D=v[0].length-1);const P=[];n.getRectMinMax(T,D,R,L,P);const B=P[0],W=P[1];if(!(x.z-M>W||x.z+M<B))for(let w=T;w<R;w++)for(let O=D;O<L;O++){let G=!1;if(n.getConvexTrianglePillar(w,O,!1),Fe.pointToWorldFrame(r,u,n.pillarOffset,b),a.distanceTo(b)<n.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(G=this.convexConvex(t,n.pillarConvex,a,b,o,u,f,p,null,null,_,S,null)),_&&G||(n.getConvexTrianglePillar(w,O,!0),Fe.pointToWorldFrame(r,u,n.pillarOffset,b),a.distanceTo(b)<n.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(G=this.convexConvex(t,n.pillarConvex,a,b,o,u,f,p,null,null,_,S,null)),_&&G))return!0}}sphereParticle(t,n,a,r,o,u,f,p,d,g,_){const v=wb;if(v.set(0,0,1),r.vsub(a,v),v.lengthSquared()<=t.radius*t.radius){if(_)return!0;const M=this.createContactEquation(p,f,n,t,d,g);v.normalize(),M.rj.copy(v),M.rj.scale(t.radius,M.rj),M.ni.copy(v),M.ni.negate(M.ni),M.ri.set(0,0,0),this.result.push(M),this.createFrictionEquationsFromContact(M,this.frictionResult)}}planeParticle(t,n,a,r,o,u,f,p,d,g,_){const v=bb;v.set(0,0,1),f.quaternion.vmult(v,v);const y=Tb;if(r.vsub(f.position,y),v.dot(y)<=0){if(_)return!0;const b=this.createContactEquation(p,f,n,t,d,g);b.ni.copy(v),b.ni.negate(b.ni),b.ri.set(0,0,0);const S=Ab;v.scale(v.dot(r),S),r.vsub(S,S),b.rj.copy(S),this.result.push(b),this.createFrictionEquationsFromContact(b,this.frictionResult)}}boxParticle(t,n,a,r,o,u,f,p,d,g,_){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,n,a,r,o,u,f,p,t,n,_)}convexParticle(t,n,a,r,o,u,f,p,d,g,_){let v=-1;const y=Cb,M=Db;let b=null;const S=Rb;if(S.copy(r),S.vsub(a,S),o.conjugate($v),$v.vmult(S,S),t.pointIsInside(S)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(a,o),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(o);for(let x=0,T=t.faces.length;x!==T;x++){const R=[t.worldVertices[t.faces[x][0]]],D=t.worldFaceNormals[x];r.vsub(R[0],t_);const L=-D.dot(t_);if(b===null||Math.abs(L)<Math.abs(b)){if(_)return!0;b=L,v=x,y.copy(D)}}if(v!==-1){const x=this.createContactEquation(p,f,n,t,d,g);y.scale(b,M),M.vadd(r,M),M.vsub(a,M),x.rj.copy(M),y.negate(x.ni),x.ri.set(0,0,0);const T=x.ri,R=x.rj;T.vadd(r,T),T.vsub(p.position,T),R.vadd(a,R),R.vsub(f.position,R),this.result.push(x),this.createFrictionEquationsFromContact(x,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,n,a,r,o,u,f,p,d,g,_){return this.convexHeightfield(n,t,r,a,u,o,p,f,d,g,_)}particleCylinder(t,n,a,r,o,u,f,p,d,g,_){return this.convexParticle(n,t,r,a,u,o,p,f,d,g,_)}sphereTrimesh(t,n,a,r,o,u,f,p,d,g,_){const v=IE,y=HE,M=GE,b=VE,S=kE,x=qE,T=jE,R=FE,D=PE,L=ZE;Fe.pointToLocalFrame(r,u,a,S);const P=t.radius;T.lowerBound.set(S.x-P,S.y-P,S.z-P),T.upperBound.set(S.x+P,S.y+P,S.z+P),n.getTrianglesInAABB(T,L);const B=BE,W=t.radius*t.radius;for(let V=0;V<L.length;V++)for(let Q=0;Q<3;Q++)if(n.getVertex(n.indices[L[V]*3+Q],B),B.vsub(S,D),D.lengthSquared()<=W){if(R.copy(B),Fe.pointToWorldFrame(r,u,R,B),B.vsub(a,D),_)return!0;let j=this.createContactEquation(f,p,t,n,d,g);j.ni.copy(D),j.ni.normalize(),j.ri.copy(j.ni),j.ri.scale(t.radius,j.ri),j.ri.vadd(a,j.ri),j.ri.vsub(f.position,j.ri),j.rj.copy(B),j.rj.vsub(p.position,j.rj),this.result.push(j),this.createFrictionEquationsFromContact(j,this.frictionResult)}for(let V=0;V<L.length;V++)for(let Q=0;Q<3;Q++){n.getVertex(n.indices[L[V]*3+Q],v),n.getVertex(n.indices[L[V]*3+(Q+1)%3],y),y.vsub(v,M),S.vsub(y,x);const j=x.dot(M);S.vsub(v,x);let z=x.dot(M);if(z>0&&j<0&&(S.vsub(v,x),b.copy(M),b.normalize(),z=x.dot(b),b.scale(z,x),x.vadd(v,x),x.distanceTo(S)<t.radius)){if(_)return!0;const Z=this.createContactEquation(f,p,t,n,d,g);x.vsub(S,Z.ni),Z.ni.normalize(),Z.ni.scale(t.radius,Z.ri),Z.ri.vadd(a,Z.ri),Z.ri.vsub(f.position,Z.ri),Fe.pointToWorldFrame(r,u,x,x),x.vsub(p.position,Z.rj),Fe.vectorToWorldFrame(u,Z.ni,Z.ni),Fe.vectorToWorldFrame(u,Z.ri,Z.ri),this.result.push(Z),this.createFrictionEquationsFromContact(Z,this.frictionResult)}}const w=XE,O=WE,G=YE,$=zE;for(let V=0,Q=L.length;V!==Q;V++){n.getTriangleVertices(L[V],w,O,G),n.getNormal(L[V],$),S.vsub(w,x);let j=x.dot($);if($.scale(j,x),S.vsub(x,x),j=x.distanceTo(S),ta.pointInTriangle(x,w,O,G)&&j<t.radius){if(_)return!0;let z=this.createContactEquation(f,p,t,n,d,g);x.vsub(S,z.ni),z.ni.normalize(),z.ni.scale(t.radius,z.ri),z.ri.vadd(a,z.ri),z.ri.vsub(f.position,z.ri),Fe.pointToWorldFrame(r,u,x,x),x.vsub(p.position,z.rj),Fe.vectorToWorldFrame(u,z.ni,z.ni),Fe.vectorToWorldFrame(u,z.ri,z.ri),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult)}}L.length=0}planeTrimesh(t,n,a,r,o,u,f,p,d,g,_){const v=new C,y=UE;y.set(0,0,1),o.vmult(y,y);for(let M=0;M<n.vertices.length/3;M++){n.getVertex(M,v);const b=new C;b.copy(v),Fe.pointToWorldFrame(r,u,b,v);const S=LE;if(v.vsub(a,S),y.dot(S)<=0){if(_)return!0;const T=this.createContactEquation(f,p,t,n,d,g);T.ni.copy(y);const R=OE;y.scale(S.dot(y),R),v.vsub(R,R),T.ri.copy(R),T.ri.vsub(f.position,T.ri),T.rj.copy(v),T.rj.vsub(p.position,T.rj),this.result.push(T),this.createFrictionEquationsFromContact(T,this.frictionResult)}}}}const qs=new C,qr=new C,Xr=new C,RE=new C,CE=new C,DE=new $n,NE=new $n,UE=new C,LE=new C,OE=new C,zE=new C,PE=new C;new C;const BE=new C,FE=new C,IE=new C,HE=new C,GE=new C,VE=new C,kE=new C,qE=new C,XE=new C,WE=new C,YE=new C,jE=new fi,ZE=[],$c=new C,Jv=new C,KE=new C,QE=new C,JE=new C;function $E(c,t,n){let a=null;const r=c.length;for(let o=0;o!==r;o++){const u=c[o],f=KE;c[(o+1)%r].vsub(u,f);const p=QE;f.cross(t,p);const d=JE;n.vsub(u,d);const g=p.dot(d);if(a===null||g>0&&a===!0||g<=0&&a===!1){a===null&&(a=g>0);continue}else return!1}return!0}const tu=new C,tb=new C,eb=new C,nb=new C,ib=[new C,new C,new C,new C,new C,new C],ab=new C,sb=new C,rb=new C,ob=new C,lb=new C,cb=new C,ub=new C,fb=new C,hb=new C,db=new C,pb=new C,mb=new C,gb=new C,vb=new C;new C;new C;const _b=new C,xb=new C,yb=new C,Sb=new C,Mb=new C,Eb=new C,bb=new C,Tb=new C,Ab=new C,wb=new C,$v=new $n,Rb=new C;new C;const Cb=new C,t_=new C,Db=new C,Nb=new C,Ub=new C,Lb=[0],Ob=new C,zb=new C;class e_{constructor(){this.current=[],this.previous=[]}getKey(t,n){if(n<t){const a=n;n=t,t=a}return t<<16|n}set(t,n){const a=this.getKey(t,n),r=this.current;let o=0;for(;a>r[o];)o++;if(a!==r[o]){for(let u=r.length-1;u>=o;u--)r[u+1]=r[u];r[o]=a}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,n){const a=this.current,r=this.previous,o=a.length,u=r.length;let f=0;for(let p=0;p<o;p++){let d=!1;const g=a[p];for(;g>r[f];)f++;d=g===r[f],d||n_(t,g)}f=0;for(let p=0;p<u;p++){let d=!1;const g=r[p];for(;g>a[f];)f++;d=a[f]===g,d||n_(n,g)}}}function n_(c,t){c.push((t&4294901760)>>16,t&65535)}const Qh=(c,t)=>c<t?`${c}-${t}`:`${t}-${c}`;class Pb{constructor(){this.data={keys:[]}}get(t,n){const a=Qh(t,n);return this.data[a]}set(t,n,a){const r=Qh(t,n);this.get(t,n)||this.data.keys.push(r),this.data[r]=a}delete(t,n){const a=Qh(t,n),r=this.data.keys.indexOf(a);r!==-1&&this.data.keys.splice(r,1),delete this.data[a]}reset(){const t=this.data,n=t.keys;for(;n.length>0;){const a=n.pop();delete t[a]}}}class Bb extends lx{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new C,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new C,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new kM,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new SE,this.constraints=[],this.narrowphase=new wE(this),this.collisionMatrix=new Gv,this.collisionMatrixPrevious=new Gv,this.bodyOverlapKeeper=new e_,this.shapeOverlapKeeper=new e_,this.contactmaterials=[],this.contactMaterialTable=new Pb,this.defaultMaterial=new Cu("default"),this.defaultContactMaterial=new uo(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,n){return this.contactMaterialTable.get(t.id,n.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const n=this.constraints.indexOf(t);n!==-1&&this.constraints.splice(n,1)}rayTest(t,n,a){a instanceof Ru?this.raycastClosest(t,n,{skipBackfaces:!0},a):this.raycastAll(t,n,{skipBackfaces:!0},a)}raycastAll(t,n,a,r){return a===void 0&&(a={}),a.mode=ta.ALL,a.from=t,a.to=n,a.callback=r,Jh.intersectWorld(this,a)}raycastAny(t,n,a,r){return a===void 0&&(a={}),a.mode=ta.ANY,a.from=t,a.to=n,a.result=r,Jh.intersectWorld(this,a)}raycastClosest(t,n,a,r){return a===void 0&&(a={}),a.mode=ta.CLOSEST,a.from=t,a.to=n,a.result=r,Jh.intersectWorld(this,a)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof Ht&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const n=this.bodies.length-1,a=this.bodies,r=a.indexOf(t);if(r!==-1){a.splice(r,1);for(let o=0;o!==a.length;o++)a[o].index=o;this.collisionMatrix.setNumObjects(n),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const n=this.bodies;for(let a=0;a<n.length;a++){const r=n[a].shapes;for(let o=0;o<r.length;o++){const u=r[o];if(u.id===t)return u}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const n=this.contactmaterials.indexOf(t);n!==-1&&(this.contactmaterials.splice(n,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,n){t===void 0&&(t=1/60),n===void 0&&(n=10);const a=xn.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,n);else{const r=a-this.lastCallTime;this.step(t,r,n)}this.lastCallTime=a}step(t,n,a){if(a===void 0&&(a=10),n===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=n;const r=xn.now();let o=0;for(;this.accumulator>=t&&o<a&&(this.internalStep(t),this.accumulator-=t,o++,!(xn.now()-r>t*1e3)););this.accumulator=this.accumulator%t;const u=this.accumulator/t;for(let f=0;f!==this.bodies.length;f++){const p=this.bodies[f];p.previousPosition.lerp(p.position,u,p.interpolatedPosition),p.previousQuaternion.slerp(p.quaternion,u,p.interpolatedQuaternion),p.previousQuaternion.normalize()}this.time+=n}}internalStep(t){this.dt=t;const n=this.contacts,a=Vb,r=kb,o=this.bodies.length,u=this.bodies,f=this.solver,p=this.gravity,d=this.doProfiling,g=this.profile,_=Ht.DYNAMIC;let v=-1/0;const y=this.constraints,M=Gb;p.length();const b=p.x,S=p.y,x=p.z;let T=0;for(d&&(v=xn.now()),T=0;T!==o;T++){const V=u[T];if(V.type===_){const Q=V.force,j=V.mass;Q.x+=j*b,Q.y+=j*S,Q.z+=j*x}}for(let V=0,Q=this.subsystems.length;V!==Q;V++)this.subsystems[V].update();d&&(v=xn.now()),a.length=0,r.length=0,this.broadphase.collisionPairs(this,a,r),d&&(g.broadphase=xn.now()-v);let R=y.length;for(T=0;T!==R;T++){const V=y[T];if(!V.collideConnected)for(let Q=a.length-1;Q>=0;Q-=1)(V.bodyA===a[Q]&&V.bodyB===r[Q]||V.bodyB===a[Q]&&V.bodyA===r[Q])&&(a.splice(Q,1),r.splice(Q,1))}this.collisionMatrixTick(),d&&(v=xn.now());const D=Hb,L=n.length;for(T=0;T!==L;T++)D.push(n[T]);n.length=0;const P=this.frictionEquations.length;for(T=0;T!==P;T++)M.push(this.frictionEquations[T]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(a,r,this,n,D,this.frictionEquations,M),d&&(g.narrowphase=xn.now()-v),d&&(v=xn.now()),T=0;T<this.frictionEquations.length;T++)f.addEquation(this.frictionEquations[T]);const B=n.length;for(let V=0;V!==B;V++){const Q=n[V],j=Q.bi,z=Q.bj,H=Q.si,Z=Q.sj;let ct;if(j.material&&z.material?ct=this.getContactMaterial(j.material,z.material)||this.defaultContactMaterial:ct=this.defaultContactMaterial,ct.friction,j.material&&z.material&&(j.material.friction>=0&&z.material.friction>=0&&j.material.friction*z.material.friction,j.material.restitution>=0&&z.material.restitution>=0&&(Q.restitution=j.material.restitution*z.material.restitution)),f.addEquation(Q),j.allowSleep&&j.type===Ht.DYNAMIC&&j.sleepState===Ht.SLEEPING&&z.sleepState===Ht.AWAKE&&z.type!==Ht.STATIC){const vt=z.velocity.lengthSquared()+z.angularVelocity.lengthSquared(),F=z.sleepSpeedLimit**2;vt>=F*2&&(j.wakeUpAfterNarrowphase=!0)}if(z.allowSleep&&z.type===Ht.DYNAMIC&&z.sleepState===Ht.SLEEPING&&j.sleepState===Ht.AWAKE&&j.type!==Ht.STATIC){const vt=j.velocity.lengthSquared()+j.angularVelocity.lengthSquared(),F=j.sleepSpeedLimit**2;vt>=F*2&&(z.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(j,z,!0),this.collisionMatrixPrevious.get(j,z)||(ml.body=z,ml.contact=Q,j.dispatchEvent(ml),ml.body=j,z.dispatchEvent(ml)),this.bodyOverlapKeeper.set(j.id,z.id),this.shapeOverlapKeeper.set(H.id,Z.id)}for(this.emitContactEvents(),d&&(g.makeContactConstraints=xn.now()-v,v=xn.now()),T=0;T!==o;T++){const V=u[T];V.wakeUpAfterNarrowphase&&(V.wakeUp(),V.wakeUpAfterNarrowphase=!1)}for(R=y.length,T=0;T!==R;T++){const V=y[T];V.update();for(let Q=0,j=V.equations.length;Q!==j;Q++){const z=V.equations[Q];f.addEquation(z)}}f.solve(t,this),d&&(g.solve=xn.now()-v),f.removeAllEquations();const W=Math.pow;for(T=0;T!==o;T++){const V=u[T];if(V.type&_){const Q=W(1-V.linearDamping,t),j=V.velocity;j.scale(Q,j);const z=V.angularVelocity;if(z){const H=W(1-V.angularDamping,t);z.scale(H,z)}}}this.dispatchEvent(Ib),d&&(v=xn.now());const O=this.stepnumber%(this.quatNormalizeSkip+1)===0,G=this.quatNormalizeFast;for(T=0;T!==o;T++)u[T].integrate(t,O,G);this.clearForces(),this.broadphase.dirty=!0,d&&(g.integrate=xn.now()-v),this.stepnumber+=1,this.dispatchEvent(Fb);let $=!0;if(this.allowSleep)for($=!1,T=0;T!==o;T++){const V=u[T];V.sleepTick(this.time),V.sleepState!==Ht.SLEEPING&&($=!0)}this.hasActiveBodies=$}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),n=this.hasAnyEventListener("endContact");if((t||n)&&this.bodyOverlapKeeper.getDiff(Ta,Aa),t){for(let o=0,u=Ta.length;o<u;o+=2)gl.bodyA=this.getBodyById(Ta[o]),gl.bodyB=this.getBodyById(Ta[o+1]),this.dispatchEvent(gl);gl.bodyA=gl.bodyB=null}if(n){for(let o=0,u=Aa.length;o<u;o+=2)vl.bodyA=this.getBodyById(Aa[o]),vl.bodyB=this.getBodyById(Aa[o+1]),this.dispatchEvent(vl);vl.bodyA=vl.bodyB=null}Ta.length=Aa.length=0;const a=this.hasAnyEventListener("beginShapeContact"),r=this.hasAnyEventListener("endShapeContact");if((a||r)&&this.shapeOverlapKeeper.getDiff(Ta,Aa),a){for(let o=0,u=Ta.length;o<u;o+=2){const f=this.getShapeById(Ta[o]),p=this.getShapeById(Ta[o+1]);wa.shapeA=f,wa.shapeB=p,f&&(wa.bodyA=f.body),p&&(wa.bodyB=p.body),this.dispatchEvent(wa)}wa.bodyA=wa.bodyB=wa.shapeA=wa.shapeB=null}if(r){for(let o=0,u=Aa.length;o<u;o+=2){const f=this.getShapeById(Aa[o]),p=this.getShapeById(Aa[o+1]);Ra.shapeA=f,Ra.shapeB=p,f&&(Ra.bodyA=f.body),p&&(Ra.bodyB=p.body),this.dispatchEvent(Ra)}Ra.bodyA=Ra.bodyB=Ra.shapeA=Ra.shapeB=null}}clearForces(){const t=this.bodies,n=t.length;for(let a=0;a!==n;a++){const r=t[a];r.force,r.torque,r.force.set(0,0,0),r.torque.set(0,0,0)}}}new fi;const Jh=new ta,xn=globalThis.performance||{};if(!xn.now){let c=Date.now();xn.timing&&xn.timing.navigationStart&&(c=xn.timing.navigationStart),xn.now=()=>Date.now()-c}new C;const Fb={type:"postStep"},Ib={type:"preStep"},ml={type:Ht.COLLIDE_EVENT_NAME,body:null,contact:null},Hb=[],Gb=[],Vb=[],kb=[],Ta=[],Aa=[],gl={type:"beginContact",bodyA:null,bodyB:null},vl={type:"endContact",bodyA:null,bodyB:null},wa={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Ra={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};const Lp="182",qb=0,i_=1,Xb=2,Mu=1,_x=2,Al=3,Ts=0,ti=1,Oa=2,Pa=0,lo=1,a_=2,s_=3,r_=4,Wb=5,nr=100,Yb=101,jb=102,Zb=103,Kb=104,Qb=200,Jb=201,$b=202,t1=203,Od=204,zd=205,e1=206,n1=207,i1=208,a1=209,s1=210,r1=211,o1=212,l1=213,c1=214,Pd=0,Bd=1,Fd=2,fo=3,Id=4,Hd=5,Gd=6,Vd=7,xx=0,u1=1,f1=2,Ii=0,yx=1,Sx=2,Mx=3,Ex=4,bx=5,Tx=6,Ax=7,wx=300,rr=301,ho=302,kd=303,qd=304,Lu=306,Xd=1e3,za=1001,Wd=1002,On=1003,h1=1004,eu=1005,zn=1006,$h=1007,Es=1008,ui=1009,Rx=1010,Cx=1011,Cl=1012,Op=1013,ia=1014,Ji=1015,Ia=1016,zp=1017,Pp=1018,Dl=1020,Dx=35902,Nx=35899,Ux=1021,Lx=1022,Fi=1023,Ha=1026,sr=1027,Ox=1028,Bp=1029,po=1030,Fp=1031,Ip=1033,Eu=33776,bu=33777,Tu=33778,Au=33779,Yd=35840,jd=35841,Zd=35842,Kd=35843,Qd=36196,Jd=37492,$d=37496,tp=37488,ep=37489,np=37490,ip=37491,ap=37808,sp=37809,rp=37810,op=37811,lp=37812,cp=37813,up=37814,fp=37815,hp=37816,dp=37817,pp=37818,mp=37819,gp=37820,vp=37821,_p=36492,xp=36494,yp=36495,Sp=36283,Mp=36284,Ep=36285,bp=36286,d1=3200,zx=0,p1=1,Ms="",qn="srgb",mo="srgb-linear",Du="linear",qe="srgb",Wr=7680,o_=519,m1=512,g1=513,v1=514,Hp=515,_1=516,x1=517,Gp=518,y1=519,l_=35044,c_="300 es",$i=2e3,Nu=2001;function Px(c){for(let t=c.length-1;t>=0;--t)if(c[t]>=65535)return!0;return!1}function Uu(c){return document.createElementNS("http://www.w3.org/1999/xhtml",c)}function S1(){const c=Uu("canvas");return c.style.display="block",c}const u_={};function f_(...c){const t="THREE."+c.shift();console.log(t,...c)}function he(...c){const t="THREE."+c.shift();console.warn(t,...c)}function Re(...c){const t="THREE."+c.shift();console.error(t,...c)}function Nl(...c){const t=c.join(" ");t in u_||(u_[t]=!0,he(...c))}function M1(c,t,n){return new Promise(function(a,r){function o(){switch(c.clientWaitSync(t,c.SYNC_FLUSH_COMMANDS_BIT,0)){case c.WAIT_FAILED:r();break;case c.TIMEOUT_EXPIRED:setTimeout(o,n);break;default:a()}}setTimeout(o,n)})}class vo{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){const a=this._listeners;if(a===void 0)return;const r=a[t];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const a=n[t.type];if(a!==void 0){t.target=this;const r=a.slice(0);for(let o=0,u=r.length;o<u;o++)r[o].call(this,t);t.target=null}}}const Fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],td=Math.PI/180,Tp=180/Math.PI;function Ol(){const c=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Fn[c&255]+Fn[c>>8&255]+Fn[c>>16&255]+Fn[c>>24&255]+"-"+Fn[t&255]+Fn[t>>8&255]+"-"+Fn[t>>16&15|64]+Fn[t>>24&255]+"-"+Fn[n&63|128]+Fn[n>>8&255]+"-"+Fn[n>>16&255]+Fn[n>>24&255]+Fn[a&255]+Fn[a>>8&255]+Fn[a>>16&255]+Fn[a>>24&255]).toLowerCase()}function Te(c,t,n){return Math.max(t,Math.min(n,c))}function E1(c,t){return(c%t+t)%t}function ed(c,t,n){return(1-n)*c+n*t}function _l(c,t){switch(t.constructor){case Float32Array:return c;case Uint32Array:return c/4294967295;case Uint16Array:return c/65535;case Uint8Array:return c/255;case Int32Array:return Math.max(c/2147483647,-1);case Int16Array:return Math.max(c/32767,-1);case Int8Array:return Math.max(c/127,-1);default:throw new Error("Invalid component type.")}}function Jn(c,t){switch(t.constructor){case Float32Array:return c;case Uint32Array:return Math.round(c*4294967295);case Uint16Array:return Math.round(c*65535);case Uint8Array:return Math.round(c*255);case Int32Array:return Math.round(c*2147483647);case Int16Array:return Math.round(c*32767);case Int8Array:return Math.round(c*127);default:throw new Error("Invalid component type.")}}class Oe{constructor(t=0,n=0){Oe.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,r=t.elements;return this.x=r[0]*n+r[3]*a+r[6],this.y=r[1]*n+r[4]*a+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Te(this.x,t.x,n.x),this.y=Te(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Te(this.x,t,n),this.y=Te(this.y,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Te(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(Te(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),r=Math.sin(n),o=this.x-t.x,u=this.y-t.y;return this.x=o*a-u*r+t.x,this.y=o*r+u*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zl{constructor(t=0,n=0,a=0,r=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=r}static slerpFlat(t,n,a,r,o,u,f){let p=a[r+0],d=a[r+1],g=a[r+2],_=a[r+3],v=o[u+0],y=o[u+1],M=o[u+2],b=o[u+3];if(f<=0){t[n+0]=p,t[n+1]=d,t[n+2]=g,t[n+3]=_;return}if(f>=1){t[n+0]=v,t[n+1]=y,t[n+2]=M,t[n+3]=b;return}if(_!==b||p!==v||d!==y||g!==M){let S=p*v+d*y+g*M+_*b;S<0&&(v=-v,y=-y,M=-M,b=-b,S=-S);let x=1-f;if(S<.9995){const T=Math.acos(S),R=Math.sin(T);x=Math.sin(x*T)/R,f=Math.sin(f*T)/R,p=p*x+v*f,d=d*x+y*f,g=g*x+M*f,_=_*x+b*f}else{p=p*x+v*f,d=d*x+y*f,g=g*x+M*f,_=_*x+b*f;const T=1/Math.sqrt(p*p+d*d+g*g+_*_);p*=T,d*=T,g*=T,_*=T}}t[n]=p,t[n+1]=d,t[n+2]=g,t[n+3]=_}static multiplyQuaternionsFlat(t,n,a,r,o,u){const f=a[r],p=a[r+1],d=a[r+2],g=a[r+3],_=o[u],v=o[u+1],y=o[u+2],M=o[u+3];return t[n]=f*M+g*_+p*y-d*v,t[n+1]=p*M+g*v+d*_-f*y,t[n+2]=d*M+g*y+f*v-p*_,t[n+3]=g*M-f*_-p*v-d*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,r){return this._x=t,this._y=n,this._z=a,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const a=t._x,r=t._y,o=t._z,u=t._order,f=Math.cos,p=Math.sin,d=f(a/2),g=f(r/2),_=f(o/2),v=p(a/2),y=p(r/2),M=p(o/2);switch(u){case"XYZ":this._x=v*g*_+d*y*M,this._y=d*y*_-v*g*M,this._z=d*g*M+v*y*_,this._w=d*g*_-v*y*M;break;case"YXZ":this._x=v*g*_+d*y*M,this._y=d*y*_-v*g*M,this._z=d*g*M-v*y*_,this._w=d*g*_+v*y*M;break;case"ZXY":this._x=v*g*_-d*y*M,this._y=d*y*_+v*g*M,this._z=d*g*M+v*y*_,this._w=d*g*_-v*y*M;break;case"ZYX":this._x=v*g*_-d*y*M,this._y=d*y*_+v*g*M,this._z=d*g*M-v*y*_,this._w=d*g*_+v*y*M;break;case"YZX":this._x=v*g*_+d*y*M,this._y=d*y*_+v*g*M,this._z=d*g*M-v*y*_,this._w=d*g*_-v*y*M;break;case"XZY":this._x=v*g*_-d*y*M,this._y=d*y*_-v*g*M,this._z=d*g*M+v*y*_,this._w=d*g*_+v*y*M;break;default:he("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,r=Math.sin(a);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],r=n[4],o=n[8],u=n[1],f=n[5],p=n[9],d=n[2],g=n[6],_=n[10],v=a+f+_;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(g-p)*y,this._y=(o-d)*y,this._z=(u-r)*y}else if(a>f&&a>_){const y=2*Math.sqrt(1+a-f-_);this._w=(g-p)/y,this._x=.25*y,this._y=(r+u)/y,this._z=(o+d)/y}else if(f>_){const y=2*Math.sqrt(1+f-a-_);this._w=(o-d)/y,this._x=(r+u)/y,this._y=.25*y,this._z=(p+g)/y}else{const y=2*Math.sqrt(1+_-a-f);this._w=(u-r)/y,this._x=(o+d)/y,this._y=(p+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<1e-8?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Te(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const r=Math.min(1,n/a);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,r=t._y,o=t._z,u=t._w,f=n._x,p=n._y,d=n._z,g=n._w;return this._x=a*g+u*f+r*d-o*p,this._y=r*g+u*p+o*f-a*d,this._z=o*g+u*d+a*p-r*f,this._w=u*g-a*f-r*p-o*d,this._onChangeCallback(),this}slerp(t,n){if(n<=0)return this;if(n>=1)return this.copy(t);let a=t._x,r=t._y,o=t._z,u=t._w,f=this.dot(t);f<0&&(a=-a,r=-r,o=-o,u=-u,f=-f);let p=1-n;if(f<.9995){const d=Math.acos(f),g=Math.sin(d);p=Math.sin(p*d)/g,n=Math.sin(n*d)/g,this._x=this._x*p+a*n,this._y=this._y*p+r*n,this._z=this._z*p+o*n,this._w=this._w*p+u*n,this._onChangeCallback()}else this._x=this._x*p+a*n,this._y=this._y*p+r*n,this._z=this._z*p+o*n,this._w=this._w*p+u*n,this.normalize();return this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),r=Math.sqrt(1-a),o=Math.sqrt(a);return this.set(r*Math.sin(t),r*Math.cos(t),o*Math.sin(n),o*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class lt{constructor(t=0,n=0,a=0){lt.prototype.isVector3=!0,this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(h_.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(h_.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,r=this.z,o=t.elements;return this.x=o[0]*n+o[3]*a+o[6]*r,this.y=o[1]*n+o[4]*a+o[7]*r,this.z=o[2]*n+o[5]*a+o[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,r=this.z,o=t.elements,u=1/(o[3]*n+o[7]*a+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*a+o[8]*r+o[12])*u,this.y=(o[1]*n+o[5]*a+o[9]*r+o[13])*u,this.z=(o[2]*n+o[6]*a+o[10]*r+o[14])*u,this}applyQuaternion(t){const n=this.x,a=this.y,r=this.z,o=t.x,u=t.y,f=t.z,p=t.w,d=2*(u*r-f*a),g=2*(f*n-o*r),_=2*(o*a-u*n);return this.x=n+p*d+u*_-f*g,this.y=a+p*g+f*d-o*_,this.z=r+p*_+o*g-u*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,r=this.z,o=t.elements;return this.x=o[0]*n+o[4]*a+o[8]*r,this.y=o[1]*n+o[5]*a+o[9]*r,this.z=o[2]*n+o[6]*a+o[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Te(this.x,t.x,n.x),this.y=Te(this.y,t.y,n.y),this.z=Te(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Te(this.x,t,n),this.y=Te(this.y,t,n),this.z=Te(this.z,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Te(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,r=t.y,o=t.z,u=n.x,f=n.y,p=n.z;return this.x=r*p-o*f,this.y=o*u-a*p,this.z=a*f-r*u,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return nd.copy(this).projectOnVector(t),this.sub(nd)}reflect(t){return this.sub(nd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(Te(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,r=this.z-t.z;return n*n+a*a+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const r=Math.sin(n)*t;return this.x=r*Math.sin(a),this.y=Math.cos(n)*t,this.z=r*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=r,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(t),this.y=n,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const nd=new lt,h_=new zl;class ge{constructor(t,n,a,r,o,u,f,p,d){ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,r,o,u,f,p,d)}set(t,n,a,r,o,u,f,p,d){const g=this.elements;return g[0]=t,g[1]=r,g[2]=f,g[3]=n,g[4]=o,g[5]=p,g[6]=a,g[7]=u,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,r=n.elements,o=this.elements,u=a[0],f=a[3],p=a[6],d=a[1],g=a[4],_=a[7],v=a[2],y=a[5],M=a[8],b=r[0],S=r[3],x=r[6],T=r[1],R=r[4],D=r[7],L=r[2],P=r[5],B=r[8];return o[0]=u*b+f*T+p*L,o[3]=u*S+f*R+p*P,o[6]=u*x+f*D+p*B,o[1]=d*b+g*T+_*L,o[4]=d*S+g*R+_*P,o[7]=d*x+g*D+_*B,o[2]=v*b+y*T+M*L,o[5]=v*S+y*R+M*P,o[8]=v*x+y*D+M*B,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],r=t[2],o=t[3],u=t[4],f=t[5],p=t[6],d=t[7],g=t[8];return n*u*g-n*f*d-a*o*g+a*f*p+r*o*d-r*u*p}invert(){const t=this.elements,n=t[0],a=t[1],r=t[2],o=t[3],u=t[4],f=t[5],p=t[6],d=t[7],g=t[8],_=g*u-f*d,v=f*p-g*o,y=d*o-u*p,M=n*_+a*v+r*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/M;return t[0]=_*b,t[1]=(r*d-g*a)*b,t[2]=(f*a-r*u)*b,t[3]=v*b,t[4]=(g*n-r*p)*b,t[5]=(r*o-f*n)*b,t[6]=y*b,t[7]=(a*p-d*n)*b,t[8]=(u*n-a*o)*b,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,r,o,u,f){const p=Math.cos(o),d=Math.sin(o);return this.set(a*p,a*d,-a*(p*u+d*f)+u+t,-r*d,r*p,-r*(-d*u+p*f)+f+n,0,0,1),this}scale(t,n){return this.premultiply(id.makeScale(t,n)),this}rotate(t){return this.premultiply(id.makeRotation(-t)),this}translate(t,n){return this.premultiply(id.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let r=0;r<9;r++)if(n[r]!==a[r])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const id=new ge,d_=new ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),p_=new ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function b1(){const c={enabled:!0,workingColorSpace:mo,spaces:{},convert:function(r,o,u){return this.enabled===!1||o===u||!o||!u||(this.spaces[o].transfer===qe&&(r.r=Ba(r.r),r.g=Ba(r.g),r.b=Ba(r.b)),this.spaces[o].primaries!==this.spaces[u].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===qe&&(r.r=co(r.r),r.g=co(r.g),r.b=co(r.b))),r},workingToColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},colorSpaceToWorking:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ms?Du:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,u){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,o){return Nl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),c.workingToColorSpace(r,o)},toWorkingColorSpace:function(r,o){return Nl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),c.colorSpaceToWorking(r,o)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return c.define({[mo]:{primaries:t,whitePoint:a,transfer:Du,toXYZ:d_,fromXYZ:p_,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:qn},outputColorSpaceConfig:{drawingBufferColorSpace:qn}},[qn]:{primaries:t,whitePoint:a,transfer:qe,toXYZ:d_,fromXYZ:p_,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:qn}}}),c}const Ce=b1();function Ba(c){return c<.04045?c*.0773993808:Math.pow(c*.9478672986+.0521327014,2.4)}function co(c){return c<.0031308?c*12.92:1.055*Math.pow(c,.41666)-.055}let Yr;class T1{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{Yr===void 0&&(Yr=Uu("canvas")),Yr.width=t.width,Yr.height=t.height;const r=Yr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),a=Yr}return a.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Uu("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const r=a.getImageData(0,0,t.width,t.height),o=r.data;for(let u=0;u<o.length;u++)o[u]=Ba(o[u]/255)*255;return a.putImageData(r,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(Ba(n[a]/255)*255):n[a]=Ba(n[a]);return{data:n,width:t.width,height:t.height}}else return he("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let A1=0;class Vp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:A1++}),this.uuid=Ol(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let u=0,f=r.length;u<f;u++)r[u].isDataTexture?o.push(ad(r[u].image)):o.push(ad(r[u]))}else o=ad(r);a.url=o}return n||(t.images[this.uuid]=a),a}}function ad(c){return typeof HTMLImageElement<"u"&&c instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&c instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&c instanceof ImageBitmap?T1.getDataURL(c):c.data?{data:Array.from(c.data),width:c.width,height:c.height,type:c.data.constructor.name}:(he("Texture: Unable to serialize Texture."),{})}let w1=0;const sd=new lt;class Hn extends vo{constructor(t=Hn.DEFAULT_IMAGE,n=Hn.DEFAULT_MAPPING,a=za,r=za,o=zn,u=Es,f=Fi,p=ui,d=Hn.DEFAULT_ANISOTROPY,g=Ms){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:w1++}),this.uuid=Ol(),this.name="",this.source=new Vp(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=r,this.magFilter=o,this.minFilter=u,this.anisotropy=d,this.format=f,this.internalFormat=null,this.type=p,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(sd).x}get height(){return this.source.getSize(sd).y}get depth(){return this.source.getSize(sd).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const a=t[n];if(a===void 0){he(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){he(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&a&&r.isVector2&&a.isVector2||r&&a&&r.isVector3&&a.isVector3||r&&a&&r.isMatrix3&&a.isMatrix3?r.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==wx)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Xd:t.x=t.x-Math.floor(t.x);break;case za:t.x=t.x<0?0:1;break;case Wd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Xd:t.y=t.y-Math.floor(t.y);break;case za:t.y=t.y<0?0:1;break;case Wd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=wx;Hn.DEFAULT_ANISOTROPY=1;class ln{constructor(t=0,n=0,a=0,r=1){ln.prototype.isVector4=!0,this.x=t,this.y=n,this.z=a,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,a,r){return this.x=t,this.y=n,this.z=a,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,a=this.y,r=this.z,o=this.w,u=t.elements;return this.x=u[0]*n+u[4]*a+u[8]*r+u[12]*o,this.y=u[1]*n+u[5]*a+u[9]*r+u[13]*o,this.z=u[2]*n+u[6]*a+u[10]*r+u[14]*o,this.w=u[3]*n+u[7]*a+u[11]*r+u[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,a,r,o;const p=t.elements,d=p[0],g=p[4],_=p[8],v=p[1],y=p[5],M=p[9],b=p[2],S=p[6],x=p[10];if(Math.abs(g-v)<.01&&Math.abs(_-b)<.01&&Math.abs(M-S)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+b)<.1&&Math.abs(M+S)<.1&&Math.abs(d+y+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const R=(d+1)/2,D=(y+1)/2,L=(x+1)/2,P=(g+v)/4,B=(_+b)/4,W=(M+S)/4;return R>D&&R>L?R<.01?(a=0,r=.707106781,o=.707106781):(a=Math.sqrt(R),r=P/a,o=B/a):D>L?D<.01?(a=.707106781,r=0,o=.707106781):(r=Math.sqrt(D),a=P/r,o=W/r):L<.01?(a=.707106781,r=.707106781,o=0):(o=Math.sqrt(L),a=B/o,r=W/o),this.set(a,r,o,n),this}let T=Math.sqrt((S-M)*(S-M)+(_-b)*(_-b)+(v-g)*(v-g));return Math.abs(T)<.001&&(T=1),this.x=(S-M)/T,this.y=(_-b)/T,this.z=(v-g)/T,this.w=Math.acos((d+y+x-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Te(this.x,t.x,n.x),this.y=Te(this.y,t.y,n.y),this.z=Te(this.z,t.z,n.z),this.w=Te(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Te(this.x,t,n),this.y=Te(this.y,t,n),this.z=Te(this.z,t,n),this.w=Te(this.w,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Te(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this.w=t.w+(n.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class R1 extends vo{constructor(t=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=a.depth,this.scissor=new ln(0,0,t,n),this.scissorTest=!1,this.viewport=new ln(0,0,t,n);const r={width:t,height:n,depth:a.depth},o=new Hn(r);this.textures=[];const u=a.count;for(let f=0;f<u;f++)this.textures[f]=o.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(t={}){const n={minFilter:zn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,a=1){if(this.width!==t||this.height!==n||this.depth!==a){this.width=t,this.height=n,this.depth=a;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=t,this.textures[r].image.height=n,this.textures[r].image.depth=a,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,a=t.textures.length;n<a;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},t.textures[n].image);this.textures[n].source=new Vp(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ea extends R1{constructor(t=1,n=1,a={}){super(t,n,a),this.isWebGLRenderTarget=!0}}class Bx extends Hn{constructor(t=null,n=1,a=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:a,depth:r},this.magFilter=On,this.minFilter=On,this.wrapR=za,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class C1 extends Hn{constructor(t=null,n=1,a=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:a,depth:r},this.magFilter=On,this.minFilter=On,this.wrapR=za,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pl{constructor(t=new lt(1/0,1/0,1/0),n=new lt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n+=3)this.expandByPoint(Ni.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,a=t.count;n<a;n++)this.expandByPoint(Ni.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=Ni.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const o=a.getAttribute("position");if(n===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let u=0,f=o.count;u<f;u++)t.isMesh===!0?t.getVertexPosition(u,Ni):Ni.fromBufferAttribute(o,u),Ni.applyMatrix4(t.matrixWorld),this.expandByPoint(Ni);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),nu.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),nu.copy(a.boundingBox)),nu.applyMatrix4(t.matrixWorld),this.union(nu)}const r=t.children;for(let o=0,u=r.length;o<u;o++)this.expandByObject(r[o],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ni),Ni.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,a;return t.normal.x>0?(n=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),n<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(xl),iu.subVectors(this.max,xl),jr.subVectors(t.a,xl),Zr.subVectors(t.b,xl),Kr.subVectors(t.c,xl),ms.subVectors(Zr,jr),gs.subVectors(Kr,Zr),Xs.subVectors(jr,Kr);let n=[0,-ms.z,ms.y,0,-gs.z,gs.y,0,-Xs.z,Xs.y,ms.z,0,-ms.x,gs.z,0,-gs.x,Xs.z,0,-Xs.x,-ms.y,ms.x,0,-gs.y,gs.x,0,-Xs.y,Xs.x,0];return!rd(n,jr,Zr,Kr,iu)||(n=[1,0,0,0,1,0,0,0,1],!rd(n,jr,Zr,Kr,iu))?!1:(au.crossVectors(ms,gs),n=[au.x,au.y,au.z],rd(n,jr,Zr,Kr,iu))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ni).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ni).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ca[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ca[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ca[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ca[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ca[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ca[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ca[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ca[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ca),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ca=[new lt,new lt,new lt,new lt,new lt,new lt,new lt,new lt],Ni=new lt,nu=new Pl,jr=new lt,Zr=new lt,Kr=new lt,ms=new lt,gs=new lt,Xs=new lt,xl=new lt,iu=new lt,au=new lt,Ws=new lt;function rd(c,t,n,a,r){for(let o=0,u=c.length-3;o<=u;o+=3){Ws.fromArray(c,o);const f=r.x*Math.abs(Ws.x)+r.y*Math.abs(Ws.y)+r.z*Math.abs(Ws.z),p=t.dot(Ws),d=n.dot(Ws),g=a.dot(Ws);if(Math.max(-Math.max(p,d,g),Math.min(p,d,g))>f)return!1}return!0}const D1=new Pl,yl=new lt,od=new lt;class kp{constructor(t=new lt,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const a=this.center;n!==void 0?a.copy(n):D1.setFromPoints(t).getCenter(a);let r=0;for(let o=0,u=t.length;o<u;o++)r=Math.max(r,a.distanceToSquared(t[o]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const a=this.center.distanceToSquared(t);return n.copy(t),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;yl.subVectors(t,this.center);const n=yl.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),r=(a-this.radius)*.5;this.center.addScaledVector(yl,r/a),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(od.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(yl.copy(t.center).add(od)),this.expandByPoint(yl.copy(t.center).sub(od))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Da=new lt,ld=new lt,su=new lt,vs=new lt,cd=new lt,ru=new lt,ud=new lt;class Fx{constructor(t=new lt,n=new lt(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Da)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Da.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Da.copy(this.origin).addScaledVector(this.direction,n),Da.distanceToSquared(t))}distanceSqToSegment(t,n,a,r){ld.copy(t).add(n).multiplyScalar(.5),su.copy(n).sub(t).normalize(),vs.copy(this.origin).sub(ld);const o=t.distanceTo(n)*.5,u=-this.direction.dot(su),f=vs.dot(this.direction),p=-vs.dot(su),d=vs.lengthSq(),g=Math.abs(1-u*u);let _,v,y,M;if(g>0)if(_=u*p-f,v=u*f-p,M=o*g,_>=0)if(v>=-M)if(v<=M){const b=1/g;_*=b,v*=b,y=_*(_+u*v+2*f)+v*(u*_+v+2*p)+d}else v=o,_=Math.max(0,-(u*v+f)),y=-_*_+v*(v+2*p)+d;else v=-o,_=Math.max(0,-(u*v+f)),y=-_*_+v*(v+2*p)+d;else v<=-M?(_=Math.max(0,-(-u*o+f)),v=_>0?-o:Math.min(Math.max(-o,-p),o),y=-_*_+v*(v+2*p)+d):v<=M?(_=0,v=Math.min(Math.max(-o,-p),o),y=v*(v+2*p)+d):(_=Math.max(0,-(u*o+f)),v=_>0?o:Math.min(Math.max(-o,-p),o),y=-_*_+v*(v+2*p)+d);else v=u>0?-o:o,_=Math.max(0,-(u*v+f)),y=-_*_+v*(v+2*p)+d;return a&&a.copy(this.origin).addScaledVector(this.direction,_),r&&r.copy(ld).addScaledVector(su,v),y}intersectSphere(t,n){Da.subVectors(t.center,this.origin);const a=Da.dot(this.direction),r=Da.dot(Da)-a*a,o=t.radius*t.radius;if(r>o)return null;const u=Math.sqrt(o-r),f=a-u,p=a+u;return p<0?null:f<0?this.at(p,n):this.at(f,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/n;return a>=0?a:null}intersectPlane(t,n){const a=this.distanceToPlane(t);return a===null?null:this.at(a,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let a,r,o,u,f,p;const d=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return d>=0?(a=(t.min.x-v.x)*d,r=(t.max.x-v.x)*d):(a=(t.max.x-v.x)*d,r=(t.min.x-v.x)*d),g>=0?(o=(t.min.y-v.y)*g,u=(t.max.y-v.y)*g):(o=(t.max.y-v.y)*g,u=(t.min.y-v.y)*g),a>u||o>r||((o>a||isNaN(a))&&(a=o),(u<r||isNaN(r))&&(r=u),_>=0?(f=(t.min.z-v.z)*_,p=(t.max.z-v.z)*_):(f=(t.max.z-v.z)*_,p=(t.min.z-v.z)*_),a>p||f>r)||((f>a||a!==a)&&(a=f),(p<r||r!==r)&&(r=p),r<0)?null:this.at(a>=0?a:r,n)}intersectsBox(t){return this.intersectBox(t,Da)!==null}intersectTriangle(t,n,a,r,o){cd.subVectors(n,t),ru.subVectors(a,t),ud.crossVectors(cd,ru);let u=this.direction.dot(ud),f;if(u>0){if(r)return null;f=1}else if(u<0)f=-1,u=-u;else return null;vs.subVectors(this.origin,t);const p=f*this.direction.dot(ru.crossVectors(vs,ru));if(p<0)return null;const d=f*this.direction.dot(cd.cross(vs));if(d<0||p+d>u)return null;const g=-f*vs.dot(ud);return g<0?null:this.at(g/u,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class sn{constructor(t,n,a,r,o,u,f,p,d,g,_,v,y,M,b,S){sn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,r,o,u,f,p,d,g,_,v,y,M,b,S)}set(t,n,a,r,o,u,f,p,d,g,_,v,y,M,b,S){const x=this.elements;return x[0]=t,x[4]=n,x[8]=a,x[12]=r,x[1]=o,x[5]=u,x[9]=f,x[13]=p,x[2]=d,x[6]=g,x[10]=_,x[14]=v,x[3]=y,x[7]=M,x[11]=b,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sn().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return this.determinant()===0?(t.set(1,0,0),n.set(0,1,0),a.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const n=this.elements,a=t.elements,r=1/Qr.setFromMatrixColumn(t,0).length(),o=1/Qr.setFromMatrixColumn(t,1).length(),u=1/Qr.setFromMatrixColumn(t,2).length();return n[0]=a[0]*r,n[1]=a[1]*r,n[2]=a[2]*r,n[3]=0,n[4]=a[4]*o,n[5]=a[5]*o,n[6]=a[6]*o,n[7]=0,n[8]=a[8]*u,n[9]=a[9]*u,n[10]=a[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,r=t.y,o=t.z,u=Math.cos(a),f=Math.sin(a),p=Math.cos(r),d=Math.sin(r),g=Math.cos(o),_=Math.sin(o);if(t.order==="XYZ"){const v=u*g,y=u*_,M=f*g,b=f*_;n[0]=p*g,n[4]=-p*_,n[8]=d,n[1]=y+M*d,n[5]=v-b*d,n[9]=-f*p,n[2]=b-v*d,n[6]=M+y*d,n[10]=u*p}else if(t.order==="YXZ"){const v=p*g,y=p*_,M=d*g,b=d*_;n[0]=v+b*f,n[4]=M*f-y,n[8]=u*d,n[1]=u*_,n[5]=u*g,n[9]=-f,n[2]=y*f-M,n[6]=b+v*f,n[10]=u*p}else if(t.order==="ZXY"){const v=p*g,y=p*_,M=d*g,b=d*_;n[0]=v-b*f,n[4]=-u*_,n[8]=M+y*f,n[1]=y+M*f,n[5]=u*g,n[9]=b-v*f,n[2]=-u*d,n[6]=f,n[10]=u*p}else if(t.order==="ZYX"){const v=u*g,y=u*_,M=f*g,b=f*_;n[0]=p*g,n[4]=M*d-y,n[8]=v*d+b,n[1]=p*_,n[5]=b*d+v,n[9]=y*d-M,n[2]=-d,n[6]=f*p,n[10]=u*p}else if(t.order==="YZX"){const v=u*p,y=u*d,M=f*p,b=f*d;n[0]=p*g,n[4]=b-v*_,n[8]=M*_+y,n[1]=_,n[5]=u*g,n[9]=-f*g,n[2]=-d*g,n[6]=y*_+M,n[10]=v-b*_}else if(t.order==="XZY"){const v=u*p,y=u*d,M=f*p,b=f*d;n[0]=p*g,n[4]=-_,n[8]=d*g,n[1]=v*_+b,n[5]=u*g,n[9]=y*_-M,n[2]=M*_-y,n[6]=f*g,n[10]=b*_+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(N1,t,U1)}lookAt(t,n,a){const r=this.elements;return li.subVectors(t,n),li.lengthSq()===0&&(li.z=1),li.normalize(),_s.crossVectors(a,li),_s.lengthSq()===0&&(Math.abs(a.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),_s.crossVectors(a,li)),_s.normalize(),ou.crossVectors(li,_s),r[0]=_s.x,r[4]=ou.x,r[8]=li.x,r[1]=_s.y,r[5]=ou.y,r[9]=li.y,r[2]=_s.z,r[6]=ou.z,r[10]=li.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,r=n.elements,o=this.elements,u=a[0],f=a[4],p=a[8],d=a[12],g=a[1],_=a[5],v=a[9],y=a[13],M=a[2],b=a[6],S=a[10],x=a[14],T=a[3],R=a[7],D=a[11],L=a[15],P=r[0],B=r[4],W=r[8],w=r[12],O=r[1],G=r[5],$=r[9],V=r[13],Q=r[2],j=r[6],z=r[10],H=r[14],Z=r[3],ct=r[7],vt=r[11],F=r[15];return o[0]=u*P+f*O+p*Q+d*Z,o[4]=u*B+f*G+p*j+d*ct,o[8]=u*W+f*$+p*z+d*vt,o[12]=u*w+f*V+p*H+d*F,o[1]=g*P+_*O+v*Q+y*Z,o[5]=g*B+_*G+v*j+y*ct,o[9]=g*W+_*$+v*z+y*vt,o[13]=g*w+_*V+v*H+y*F,o[2]=M*P+b*O+S*Q+x*Z,o[6]=M*B+b*G+S*j+x*ct,o[10]=M*W+b*$+S*z+x*vt,o[14]=M*w+b*V+S*H+x*F,o[3]=T*P+R*O+D*Q+L*Z,o[7]=T*B+R*G+D*j+L*ct,o[11]=T*W+R*$+D*z+L*vt,o[15]=T*w+R*V+D*H+L*F,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],r=t[8],o=t[12],u=t[1],f=t[5],p=t[9],d=t[13],g=t[2],_=t[6],v=t[10],y=t[14],M=t[3],b=t[7],S=t[11],x=t[15],T=p*y-d*v,R=f*y-d*_,D=f*v-p*_,L=u*y-d*g,P=u*v-p*g,B=u*_-f*g;return n*(b*T-S*R+x*D)-a*(M*T-S*L+x*P)+r*(M*R-b*L+x*B)-o*(M*D-b*P+S*B)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=n,r[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],r=t[2],o=t[3],u=t[4],f=t[5],p=t[6],d=t[7],g=t[8],_=t[9],v=t[10],y=t[11],M=t[12],b=t[13],S=t[14],x=t[15],T=_*S*d-b*v*d+b*p*y-f*S*y-_*p*x+f*v*x,R=M*v*d-g*S*d-M*p*y+u*S*y+g*p*x-u*v*x,D=g*b*d-M*_*d+M*f*y-u*b*y-g*f*x+u*_*x,L=M*_*p-g*b*p-M*f*v+u*b*v+g*f*S-u*_*S,P=n*T+a*R+r*D+o*L;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/P;return t[0]=T*B,t[1]=(b*v*o-_*S*o-b*r*y+a*S*y+_*r*x-a*v*x)*B,t[2]=(f*S*o-b*p*o+b*r*d-a*S*d-f*r*x+a*p*x)*B,t[3]=(_*p*o-f*v*o-_*r*d+a*v*d+f*r*y-a*p*y)*B,t[4]=R*B,t[5]=(g*S*o-M*v*o+M*r*y-n*S*y-g*r*x+n*v*x)*B,t[6]=(M*p*o-u*S*o-M*r*d+n*S*d+u*r*x-n*p*x)*B,t[7]=(u*v*o-g*p*o+g*r*d-n*v*d-u*r*y+n*p*y)*B,t[8]=D*B,t[9]=(M*_*o-g*b*o-M*a*y+n*b*y+g*a*x-n*_*x)*B,t[10]=(u*b*o-M*f*o+M*a*d-n*b*d-u*a*x+n*f*x)*B,t[11]=(g*f*o-u*_*o-g*a*d+n*_*d+u*a*y-n*f*y)*B,t[12]=L*B,t[13]=(g*b*r-M*_*r+M*a*v-n*b*v-g*a*S+n*_*S)*B,t[14]=(M*f*r-u*b*r-M*a*p+n*b*p+u*a*S-n*f*S)*B,t[15]=(u*_*r-g*f*r+g*a*p-n*_*p-u*a*v+n*f*v)*B,this}scale(t){const n=this.elements,a=t.x,r=t.y,o=t.z;return n[0]*=a,n[4]*=r,n[8]*=o,n[1]*=a,n[5]*=r,n[9]*=o,n[2]*=a,n[6]*=r,n[10]*=o,n[3]*=a,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,r))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),r=Math.sin(n),o=1-a,u=t.x,f=t.y,p=t.z,d=o*u,g=o*f;return this.set(d*u+a,d*f-r*p,d*p+r*f,0,d*f+r*p,g*f+a,g*p-r*u,0,d*p-r*f,g*p+r*u,o*p*p+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,r,o,u){return this.set(1,a,o,0,t,1,u,0,n,r,1,0,0,0,0,1),this}compose(t,n,a){const r=this.elements,o=n._x,u=n._y,f=n._z,p=n._w,d=o+o,g=u+u,_=f+f,v=o*d,y=o*g,M=o*_,b=u*g,S=u*_,x=f*_,T=p*d,R=p*g,D=p*_,L=a.x,P=a.y,B=a.z;return r[0]=(1-(b+x))*L,r[1]=(y+D)*L,r[2]=(M-R)*L,r[3]=0,r[4]=(y-D)*P,r[5]=(1-(v+x))*P,r[6]=(S+T)*P,r[7]=0,r[8]=(M+R)*B,r[9]=(S-T)*B,r[10]=(1-(v+b))*B,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,n,a){const r=this.elements;if(t.x=r[12],t.y=r[13],t.z=r[14],this.determinant()===0)return a.set(1,1,1),n.identity(),this;let o=Qr.set(r[0],r[1],r[2]).length();const u=Qr.set(r[4],r[5],r[6]).length(),f=Qr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),Ui.copy(this);const d=1/o,g=1/u,_=1/f;return Ui.elements[0]*=d,Ui.elements[1]*=d,Ui.elements[2]*=d,Ui.elements[4]*=g,Ui.elements[5]*=g,Ui.elements[6]*=g,Ui.elements[8]*=_,Ui.elements[9]*=_,Ui.elements[10]*=_,n.setFromRotationMatrix(Ui),a.x=o,a.y=u,a.z=f,this}makePerspective(t,n,a,r,o,u,f=$i,p=!1){const d=this.elements,g=2*o/(n-t),_=2*o/(a-r),v=(n+t)/(n-t),y=(a+r)/(a-r);let M,b;if(p)M=o/(u-o),b=u*o/(u-o);else if(f===$i)M=-(u+o)/(u-o),b=-2*u*o/(u-o);else if(f===Nu)M=-u/(u-o),b=-u*o/(u-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=g,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=_,d[9]=y,d[13]=0,d[2]=0,d[6]=0,d[10]=M,d[14]=b,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,n,a,r,o,u,f=$i,p=!1){const d=this.elements,g=2/(n-t),_=2/(a-r),v=-(n+t)/(n-t),y=-(a+r)/(a-r);let M,b;if(p)M=1/(u-o),b=u/(u-o);else if(f===$i)M=-2/(u-o),b=-(u+o)/(u-o);else if(f===Nu)M=-1/(u-o),b=-o/(u-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=g,d[4]=0,d[8]=0,d[12]=v,d[1]=0,d[5]=_,d[9]=0,d[13]=y,d[2]=0,d[6]=0,d[10]=M,d[14]=b,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let r=0;r<16;r++)if(n[r]!==a[r])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}}const Qr=new lt,Ui=new sn,N1=new lt(0,0,0),U1=new lt(1,1,1),_s=new lt,ou=new lt,li=new lt,m_=new sn,g_=new zl;class aa{constructor(t=0,n=0,a=0,r=aa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,r=this._order){return this._x=t,this._y=n,this._z=a,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const r=t.elements,o=r[0],u=r[4],f=r[8],p=r[1],d=r[5],g=r[9],_=r[2],v=r[6],y=r[10];switch(n){case"XYZ":this._y=Math.asin(Te(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-u,o)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(p,d)):(this._y=Math.atan2(-_,o),this._z=0);break;case"ZXY":this._x=Math.asin(Te(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-u,d)):(this._y=0,this._z=Math.atan2(p,o));break;case"ZYX":this._y=Math.asin(-Te(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(p,o)):(this._x=0,this._z=Math.atan2(-u,d));break;case"YZX":this._z=Math.asin(Te(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-_,o)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-Te(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(f,o)):(this._x=Math.atan2(-g,y),this._y=0);break;default:he("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return m_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(m_,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return g_.setFromEuler(this),this.setFromQuaternion(g_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}aa.DEFAULT_ORDER="XYZ";class qp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let L1=0;const v_=new lt,Jr=new zl,Na=new sn,lu=new lt,Sl=new lt,O1=new lt,z1=new zl,__=new lt(1,0,0),x_=new lt(0,1,0),y_=new lt(0,0,1),S_={type:"added"},P1={type:"removed"},$r={type:"childadded",child:null},fd={type:"childremoved",child:null};class Gn extends vo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:L1++}),this.uuid=Ol(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gn.DEFAULT_UP.clone();const t=new lt,n=new aa,a=new zl,r=new lt(1,1,1);function o(){a.setFromEuler(n,!1)}function u(){n.setFromQuaternion(a,void 0,!1)}n._onChange(o),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new sn},normalMatrix:{value:new ge}}),this.matrix=new sn,this.matrixWorld=new sn,this.matrixAutoUpdate=Gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Jr.setFromAxisAngle(t,n),this.quaternion.multiply(Jr),this}rotateOnWorldAxis(t,n){return Jr.setFromAxisAngle(t,n),this.quaternion.premultiply(Jr),this}rotateX(t){return this.rotateOnAxis(__,t)}rotateY(t){return this.rotateOnAxis(x_,t)}rotateZ(t){return this.rotateOnAxis(y_,t)}translateOnAxis(t,n){return v_.copy(t).applyQuaternion(this.quaternion),this.position.add(v_.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(__,t)}translateY(t){return this.translateOnAxis(x_,t)}translateZ(t){return this.translateOnAxis(y_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Na.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?lu.copy(t):lu.set(t,n,a);const r=this.parent;this.updateWorldMatrix(!0,!1),Sl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Na.lookAt(Sl,lu,this.up):Na.lookAt(lu,Sl,this.up),this.quaternion.setFromRotationMatrix(Na),r&&(Na.extractRotation(r.matrixWorld),Jr.setFromRotationMatrix(Na),this.quaternion.premultiply(Jr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Re("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(S_),$r.child=t,this.dispatchEvent($r),$r.child=null):Re("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(P1),fd.child=t,this.dispatchEvent(fd),fd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Na.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Na.multiply(t.parent.matrixWorld)),t.applyMatrix4(Na),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(S_),$r.child=t,this.dispatchEvent($r),$r.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,r=this.children.length;a<r;a++){const u=this.children[a].getObjectByProperty(t,n);if(u!==void 0)return u}}getObjectsByProperty(t,n,a=[]){this[t]===n&&a.push(this);const r=this.children;for(let o=0,u=r.length;o<u;o++)r[o].getObjectsByProperty(t,n,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sl,t,O1),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sl,z1,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].updateMatrixWorld(t)}updateWorldMatrix(t,n){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let o=0,u=r.length;o<u;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(f=>({...f})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function o(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(t.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let d=0,g=p.length;d<g;d++){const _=p[d];o(t.shapes,_)}else o(t.shapes,p)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,d=this.material.length;p<d;p++)f.push(o(t.materials,this.material[p]));r.material=f}else r.material=o(t.materials,this.material);if(this.children.length>0){r.children=[];for(let f=0;f<this.children.length;f++)r.children.push(this.children[f].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];r.animations.push(o(t.animations,p))}}if(n){const f=u(t.geometries),p=u(t.materials),d=u(t.textures),g=u(t.images),_=u(t.shapes),v=u(t.skeletons),y=u(t.animations),M=u(t.nodes);f.length>0&&(a.geometries=f),p.length>0&&(a.materials=p),d.length>0&&(a.textures=d),g.length>0&&(a.images=g),_.length>0&&(a.shapes=_),v.length>0&&(a.skeletons=v),y.length>0&&(a.animations=y),M.length>0&&(a.nodes=M)}return a.object=r,a;function u(f){const p=[];for(const d in f){const g=f[d];delete g.metadata,p.push(g)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const r=t.children[a];this.add(r.clone())}return this}}Gn.DEFAULT_UP=new lt(0,1,0);Gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Li=new lt,Ua=new lt,hd=new lt,La=new lt,to=new lt,eo=new lt,M_=new lt,dd=new lt,pd=new lt,md=new lt,gd=new ln,vd=new ln,_d=new ln;class Pi{constructor(t=new lt,n=new lt,a=new lt){this.a=t,this.b=n,this.c=a}static getNormal(t,n,a,r){r.subVectors(a,n),Li.subVectors(t,n),r.cross(Li);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(t,n,a,r,o){Li.subVectors(r,n),Ua.subVectors(a,n),hd.subVectors(t,n);const u=Li.dot(Li),f=Li.dot(Ua),p=Li.dot(hd),d=Ua.dot(Ua),g=Ua.dot(hd),_=u*d-f*f;if(_===0)return o.set(0,0,0),null;const v=1/_,y=(d*p-f*g)*v,M=(u*g-f*p)*v;return o.set(1-y-M,M,y)}static containsPoint(t,n,a,r){return this.getBarycoord(t,n,a,r,La)===null?!1:La.x>=0&&La.y>=0&&La.x+La.y<=1}static getInterpolation(t,n,a,r,o,u,f,p){return this.getBarycoord(t,n,a,r,La)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(o,La.x),p.addScaledVector(u,La.y),p.addScaledVector(f,La.z),p)}static getInterpolatedAttribute(t,n,a,r,o,u){return gd.setScalar(0),vd.setScalar(0),_d.setScalar(0),gd.fromBufferAttribute(t,n),vd.fromBufferAttribute(t,a),_d.fromBufferAttribute(t,r),u.setScalar(0),u.addScaledVector(gd,o.x),u.addScaledVector(vd,o.y),u.addScaledVector(_d,o.z),u}static isFrontFacing(t,n,a,r){return Li.subVectors(a,n),Ua.subVectors(t,n),Li.cross(Ua).dot(r)<0}set(t,n,a){return this.a.copy(t),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(t,n,a,r){return this.a.copy(t[n]),this.b.copy(t[a]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,n,a,r){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Li.subVectors(this.c,this.b),Ua.subVectors(this.a,this.b),Li.cross(Ua).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Pi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Pi.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,a,r,o){return Pi.getInterpolation(t,this.a,this.b,this.c,n,a,r,o)}containsPoint(t){return Pi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Pi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const a=this.a,r=this.b,o=this.c;let u,f;to.subVectors(r,a),eo.subVectors(o,a),dd.subVectors(t,a);const p=to.dot(dd),d=eo.dot(dd);if(p<=0&&d<=0)return n.copy(a);pd.subVectors(t,r);const g=to.dot(pd),_=eo.dot(pd);if(g>=0&&_<=g)return n.copy(r);const v=p*_-g*d;if(v<=0&&p>=0&&g<=0)return u=p/(p-g),n.copy(a).addScaledVector(to,u);md.subVectors(t,o);const y=to.dot(md),M=eo.dot(md);if(M>=0&&y<=M)return n.copy(o);const b=y*d-p*M;if(b<=0&&d>=0&&M<=0)return f=d/(d-M),n.copy(a).addScaledVector(eo,f);const S=g*M-y*_;if(S<=0&&_-g>=0&&y-M>=0)return M_.subVectors(o,r),f=(_-g)/(_-g+(y-M)),n.copy(r).addScaledVector(M_,f);const x=1/(S+b+v);return u=b*x,f=v*x,n.copy(a).addScaledVector(to,u).addScaledVector(eo,f)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ix={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xs={h:0,s:0,l:0},cu={h:0,s:0,l:0};function xd(c,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?c+(t-c)*6*n:n<1/2?t:n<2/3?c+(t-c)*6*(2/3-n):c}class Le{constructor(t,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,a)}set(t,n,a){if(n===void 0&&a===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,n,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=qn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ce.colorSpaceToWorking(this,n),this}setRGB(t,n,a,r=Ce.workingColorSpace){return this.r=t,this.g=n,this.b=a,Ce.colorSpaceToWorking(this,r),this}setHSL(t,n,a,r=Ce.workingColorSpace){if(t=E1(t,1),n=Te(n,0,1),a=Te(a,0,1),n===0)this.r=this.g=this.b=a;else{const o=a<=.5?a*(1+n):a+n-a*n,u=2*a-o;this.r=xd(u,o,t+1/3),this.g=xd(u,o,t),this.b=xd(u,o,t-1/3)}return Ce.colorSpaceToWorking(this,r),this}setStyle(t,n=qn){function a(o){o!==void 0&&parseFloat(o)<1&&he("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const u=r[1],f=r[2];switch(u){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:he("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=r[1],u=o.length;if(u===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(o,16),n);he("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=qn){const a=Ix[t.toLowerCase()];return a!==void 0?this.setHex(a,n):he("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ba(t.r),this.g=Ba(t.g),this.b=Ba(t.b),this}copyLinearToSRGB(t){return this.r=co(t.r),this.g=co(t.g),this.b=co(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=qn){return Ce.workingToColorSpace(In.copy(this),t),Math.round(Te(In.r*255,0,255))*65536+Math.round(Te(In.g*255,0,255))*256+Math.round(Te(In.b*255,0,255))}getHexString(t=qn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Ce.workingColorSpace){Ce.workingToColorSpace(In.copy(this),n);const a=In.r,r=In.g,o=In.b,u=Math.max(a,r,o),f=Math.min(a,r,o);let p,d;const g=(f+u)/2;if(f===u)p=0,d=0;else{const _=u-f;switch(d=g<=.5?_/(u+f):_/(2-u-f),u){case a:p=(r-o)/_+(r<o?6:0);break;case r:p=(o-a)/_+2;break;case o:p=(a-r)/_+4;break}p/=6}return t.h=p,t.s=d,t.l=g,t}getRGB(t,n=Ce.workingColorSpace){return Ce.workingToColorSpace(In.copy(this),n),t.r=In.r,t.g=In.g,t.b=In.b,t}getStyle(t=qn){Ce.workingToColorSpace(In.copy(this),t);const n=In.r,a=In.g,r=In.b;return t!==qn?`color(${t} ${n.toFixed(3)} ${a.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(r*255)})`}offsetHSL(t,n,a){return this.getHSL(xs),this.setHSL(xs.h+t,xs.s+n,xs.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,a){return this.r=t.r+(n.r-t.r)*a,this.g=t.g+(n.g-t.g)*a,this.b=t.b+(n.b-t.b)*a,this}lerpHSL(t,n){this.getHSL(xs),t.getHSL(cu);const a=ed(xs.h,cu.h,n),r=ed(xs.s,cu.s,n),o=ed(xs.l,cu.l,n);return this.setHSL(a,r,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,a=this.g,r=this.b,o=t.elements;return this.r=o[0]*n+o[3]*a+o[6]*r,this.g=o[1]*n+o[4]*a+o[7]*r,this.b=o[2]*n+o[5]*a+o[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new Le;Le.NAMES=Ix;let B1=0;class Bl extends vo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:B1++}),this.uuid=Ol(),this.name="",this.type="Material",this.blending=lo,this.side=Ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Od,this.blendDst=zd,this.blendEquation=nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=fo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=o_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wr,this.stencilZFail=Wr,this.stencilZPass=Wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const a=t[n];if(a===void 0){he(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){he(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(a):r&&r.isVector3&&a&&a.isVector3?r.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==lo&&(a.blending=this.blending),this.side!==Ts&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==Od&&(a.blendSrc=this.blendSrc),this.blendDst!==zd&&(a.blendDst=this.blendDst),this.blendEquation!==nr&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==fo&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==o_&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wr&&(a.stencilFail=this.stencilFail),this.stencilZFail!==Wr&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==Wr&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.allowOverride===!1&&(a.allowOverride=!1),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function r(o){const u=[];for(const f in o){const p=o[f];delete p.metadata,u.push(p)}return u}if(n){const o=r(t.textures),u=r(t.images);o.length>0&&(a.textures=o),u.length>0&&(a.images=u)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let a=null;if(n!==null){const r=n.length;a=new Array(r);for(let o=0;o!==r;++o)a[o]=n[o].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Hx extends Bl{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new aa,this.combine=xx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const gn=new lt,uu=new Oe;let F1=0;class na{constructor(t,n,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:F1++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=a,this.usage=l_,this.updateRanges=[],this.gpuType=Ji,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,a){t*=this.itemSize,a*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[t+r]=n.array[a+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)uu.fromBufferAttribute(this,n),uu.applyMatrix3(t),this.setXY(n,uu.x,uu.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)gn.fromBufferAttribute(this,n),gn.applyMatrix3(t),this.setXYZ(n,gn.x,gn.y,gn.z);return this}applyMatrix4(t){for(let n=0,a=this.count;n<a;n++)gn.fromBufferAttribute(this,n),gn.applyMatrix4(t),this.setXYZ(n,gn.x,gn.y,gn.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)gn.fromBufferAttribute(this,n),gn.applyNormalMatrix(t),this.setXYZ(n,gn.x,gn.y,gn.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)gn.fromBufferAttribute(this,n),gn.transformDirection(t),this.setXYZ(n,gn.x,gn.y,gn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let a=this.array[t*this.itemSize+n];return this.normalized&&(a=_l(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=Jn(a,this.array)),this.array[t*this.itemSize+n]=a,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=_l(n,this.array)),n}setX(t,n){return this.normalized&&(n=Jn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=_l(n,this.array)),n}setY(t,n){return this.normalized&&(n=Jn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=_l(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Jn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=_l(n,this.array)),n}setW(t,n){return this.normalized&&(n=Jn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,a){return t*=this.itemSize,this.normalized&&(n=Jn(n,this.array),a=Jn(a,this.array)),this.array[t+0]=n,this.array[t+1]=a,this}setXYZ(t,n,a,r){return t*=this.itemSize,this.normalized&&(n=Jn(n,this.array),a=Jn(a,this.array),r=Jn(r,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=r,this}setXYZW(t,n,a,r,o){return t*=this.itemSize,this.normalized&&(n=Jn(n,this.array),a=Jn(a,this.array),r=Jn(r,this.array),o=Jn(o,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=r,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==l_&&(t.usage=this.usage),t}}class Gx extends na{constructor(t,n,a){super(new Uint16Array(t),n,a)}}class Vx extends na{constructor(t,n,a){super(new Uint32Array(t),n,a)}}class Fa extends na{constructor(t,n,a){super(new Float32Array(t),n,a)}}let I1=0;const Mi=new sn,yd=new Gn,no=new lt,ci=new Pl,Ml=new Pl,En=new lt;class Ga extends vo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:I1++}),this.uuid=Ol(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Px(t)?Vx:Gx)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,a=0){this.groups.push({start:t,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const o=new ge().getNormalMatrix(t);a.applyNormalMatrix(o),a.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Mi.makeRotationFromQuaternion(t),this.applyMatrix4(Mi),this}rotateX(t){return Mi.makeRotationX(t),this.applyMatrix4(Mi),this}rotateY(t){return Mi.makeRotationY(t),this.applyMatrix4(Mi),this}rotateZ(t){return Mi.makeRotationZ(t),this.applyMatrix4(Mi),this}translate(t,n,a){return Mi.makeTranslation(t,n,a),this.applyMatrix4(Mi),this}scale(t,n,a){return Mi.makeScale(t,n,a),this.applyMatrix4(Mi),this}lookAt(t){return yd.lookAt(t),yd.updateMatrix(),this.applyMatrix4(yd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(no).negate(),this.translate(no.x,no.y,no.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let r=0,o=t.length;r<o;r++){const u=t[r];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Fa(a,3))}else{const a=Math.min(t.length,n.count);for(let r=0;r<a;r++){const o=t[r];n.setXYZ(r,o.x,o.y,o.z||0)}t.length>n.count&&he("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pl);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Re("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new lt(-1/0,-1/0,-1/0),new lt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let a=0,r=n.length;a<r;a++){const o=n[a];ci.setFromBufferAttribute(o),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Re('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kp);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Re("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new lt,1/0);return}if(t){const a=this.boundingSphere.center;if(ci.setFromBufferAttribute(t),n)for(let o=0,u=n.length;o<u;o++){const f=n[o];Ml.setFromBufferAttribute(f),this.morphTargetsRelative?(En.addVectors(ci.min,Ml.min),ci.expandByPoint(En),En.addVectors(ci.max,Ml.max),ci.expandByPoint(En)):(ci.expandByPoint(Ml.min),ci.expandByPoint(Ml.max))}ci.getCenter(a);let r=0;for(let o=0,u=t.count;o<u;o++)En.fromBufferAttribute(t,o),r=Math.max(r,a.distanceToSquared(En));if(n)for(let o=0,u=n.length;o<u;o++){const f=n[o],p=this.morphTargetsRelative;for(let d=0,g=f.count;d<g;d++)En.fromBufferAttribute(f,d),p&&(no.fromBufferAttribute(t,d),En.add(no)),r=Math.max(r,a.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Re('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Re("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,r=n.normal,o=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new na(new Float32Array(4*a.count),4));const u=this.getAttribute("tangent"),f=[],p=[];for(let W=0;W<a.count;W++)f[W]=new lt,p[W]=new lt;const d=new lt,g=new lt,_=new lt,v=new Oe,y=new Oe,M=new Oe,b=new lt,S=new lt;function x(W,w,O){d.fromBufferAttribute(a,W),g.fromBufferAttribute(a,w),_.fromBufferAttribute(a,O),v.fromBufferAttribute(o,W),y.fromBufferAttribute(o,w),M.fromBufferAttribute(o,O),g.sub(d),_.sub(d),y.sub(v),M.sub(v);const G=1/(y.x*M.y-M.x*y.y);isFinite(G)&&(b.copy(g).multiplyScalar(M.y).addScaledVector(_,-y.y).multiplyScalar(G),S.copy(_).multiplyScalar(y.x).addScaledVector(g,-M.x).multiplyScalar(G),f[W].add(b),f[w].add(b),f[O].add(b),p[W].add(S),p[w].add(S),p[O].add(S))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let W=0,w=T.length;W<w;++W){const O=T[W],G=O.start,$=O.count;for(let V=G,Q=G+$;V<Q;V+=3)x(t.getX(V+0),t.getX(V+1),t.getX(V+2))}const R=new lt,D=new lt,L=new lt,P=new lt;function B(W){L.fromBufferAttribute(r,W),P.copy(L);const w=f[W];R.copy(w),R.sub(L.multiplyScalar(L.dot(w))).normalize(),D.crossVectors(P,w);const G=D.dot(p[W])<0?-1:1;u.setXYZW(W,R.x,R.y,R.z,G)}for(let W=0,w=T.length;W<w;++W){const O=T[W],G=O.start,$=O.count;for(let V=G,Q=G+$;V<Q;V+=3)B(t.getX(V+0)),B(t.getX(V+1)),B(t.getX(V+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new na(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let v=0,y=a.count;v<y;v++)a.setXYZ(v,0,0,0);const r=new lt,o=new lt,u=new lt,f=new lt,p=new lt,d=new lt,g=new lt,_=new lt;if(t)for(let v=0,y=t.count;v<y;v+=3){const M=t.getX(v+0),b=t.getX(v+1),S=t.getX(v+2);r.fromBufferAttribute(n,M),o.fromBufferAttribute(n,b),u.fromBufferAttribute(n,S),g.subVectors(u,o),_.subVectors(r,o),g.cross(_),f.fromBufferAttribute(a,M),p.fromBufferAttribute(a,b),d.fromBufferAttribute(a,S),f.add(g),p.add(g),d.add(g),a.setXYZ(M,f.x,f.y,f.z),a.setXYZ(b,p.x,p.y,p.z),a.setXYZ(S,d.x,d.y,d.z)}else for(let v=0,y=n.count;v<y;v+=3)r.fromBufferAttribute(n,v+0),o.fromBufferAttribute(n,v+1),u.fromBufferAttribute(n,v+2),g.subVectors(u,o),_.subVectors(r,o),g.cross(_),a.setXYZ(v+0,g.x,g.y,g.z),a.setXYZ(v+1,g.x,g.y,g.z),a.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,a=t.count;n<a;n++)En.fromBufferAttribute(t,n),En.normalize(),t.setXYZ(n,En.x,En.y,En.z)}toNonIndexed(){function t(f,p){const d=f.array,g=f.itemSize,_=f.normalized,v=new d.constructor(p.length*g);let y=0,M=0;for(let b=0,S=p.length;b<S;b++){f.isInterleavedBufferAttribute?y=p[b]*f.data.stride+f.offset:y=p[b]*g;for(let x=0;x<g;x++)v[M++]=d[y++]}return new na(v,g,_)}if(this.index===null)return he("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ga,a=this.index.array,r=this.attributes;for(const f in r){const p=r[f],d=t(p,a);n.setAttribute(f,d)}const o=this.morphAttributes;for(const f in o){const p=[],d=o[f];for(let g=0,_=d.length;g<_;g++){const v=d[g],y=t(v,a);p.push(y)}n.morphAttributes[f]=p}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,p=u.length;f<p;f++){const d=u[f];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const d in p)p[d]!==void 0&&(t[d]=p[d]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const p in a){const d=a[p];t.data.attributes[p]=d.toJSON(t.data)}const r={};let o=!1;for(const p in this.morphAttributes){const d=this.morphAttributes[p],g=[];for(let _=0,v=d.length;_<v;_++){const y=d[_];g.push(y.toJSON(t.data))}g.length>0&&(r[p]=g,o=!0)}o&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(t.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(t.data.boundingSphere=f.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const r=t.attributes;for(const d in r){const g=r[d];this.setAttribute(d,g.clone(n))}const o=t.morphAttributes;for(const d in o){const g=[],_=o[d];for(let v=0,y=_.length;v<y;v++)g.push(_[v].clone(n));this.morphAttributes[d]=g}this.morphTargetsRelative=t.morphTargetsRelative;const u=t.groups;for(let d=0,g=u.length;d<g;d++){const _=u[d];this.addGroup(_.start,_.count,_.materialIndex)}const f=t.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const E_=new sn,Ys=new Fx,fu=new kp,b_=new lt,hu=new lt,du=new lt,pu=new lt,Sd=new lt,mu=new lt,T_=new lt,gu=new lt;class Hi extends Gn{constructor(t=new Ga,n=new Hx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const r=n[a[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=r.length;o<u;o++){const f=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=o}}}}getVertexPosition(t,n){const a=this.geometry,r=a.attributes.position,o=a.morphAttributes.position,u=a.morphTargetsRelative;n.fromBufferAttribute(r,t);const f=this.morphTargetInfluences;if(o&&f){mu.set(0,0,0);for(let p=0,d=o.length;p<d;p++){const g=f[p],_=o[p];g!==0&&(Sd.fromBufferAttribute(_,t),u?mu.addScaledVector(Sd,g):mu.addScaledVector(Sd.sub(n),g))}n.add(mu)}return n}raycast(t,n){const a=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),fu.copy(a.boundingSphere),fu.applyMatrix4(o),Ys.copy(t.ray).recast(t.near),!(fu.containsPoint(Ys.origin)===!1&&(Ys.intersectSphere(fu,b_)===null||Ys.origin.distanceToSquared(b_)>(t.far-t.near)**2))&&(E_.copy(o).invert(),Ys.copy(t.ray).applyMatrix4(E_),!(a.boundingBox!==null&&Ys.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,n,Ys)))}_computeIntersections(t,n,a){let r;const o=this.geometry,u=this.material,f=o.index,p=o.attributes.position,d=o.attributes.uv,g=o.attributes.uv1,_=o.attributes.normal,v=o.groups,y=o.drawRange;if(f!==null)if(Array.isArray(u))for(let M=0,b=v.length;M<b;M++){const S=v[M],x=u[S.materialIndex],T=Math.max(S.start,y.start),R=Math.min(f.count,Math.min(S.start+S.count,y.start+y.count));for(let D=T,L=R;D<L;D+=3){const P=f.getX(D),B=f.getX(D+1),W=f.getX(D+2);r=vu(this,x,t,a,d,g,_,P,B,W),r&&(r.faceIndex=Math.floor(D/3),r.face.materialIndex=S.materialIndex,n.push(r))}}else{const M=Math.max(0,y.start),b=Math.min(f.count,y.start+y.count);for(let S=M,x=b;S<x;S+=3){const T=f.getX(S),R=f.getX(S+1),D=f.getX(S+2);r=vu(this,u,t,a,d,g,_,T,R,D),r&&(r.faceIndex=Math.floor(S/3),n.push(r))}}else if(p!==void 0)if(Array.isArray(u))for(let M=0,b=v.length;M<b;M++){const S=v[M],x=u[S.materialIndex],T=Math.max(S.start,y.start),R=Math.min(p.count,Math.min(S.start+S.count,y.start+y.count));for(let D=T,L=R;D<L;D+=3){const P=D,B=D+1,W=D+2;r=vu(this,x,t,a,d,g,_,P,B,W),r&&(r.faceIndex=Math.floor(D/3),r.face.materialIndex=S.materialIndex,n.push(r))}}else{const M=Math.max(0,y.start),b=Math.min(p.count,y.start+y.count);for(let S=M,x=b;S<x;S+=3){const T=S,R=S+1,D=S+2;r=vu(this,u,t,a,d,g,_,T,R,D),r&&(r.faceIndex=Math.floor(S/3),n.push(r))}}}}function H1(c,t,n,a,r,o,u,f){let p;if(t.side===ti?p=a.intersectTriangle(u,o,r,!0,f):p=a.intersectTriangle(r,o,u,t.side===Ts,f),p===null)return null;gu.copy(f),gu.applyMatrix4(c.matrixWorld);const d=n.ray.origin.distanceTo(gu);return d<n.near||d>n.far?null:{distance:d,point:gu.clone(),object:c}}function vu(c,t,n,a,r,o,u,f,p,d){c.getVertexPosition(f,hu),c.getVertexPosition(p,du),c.getVertexPosition(d,pu);const g=H1(c,t,n,a,hu,du,pu,T_);if(g){const _=new lt;Pi.getBarycoord(T_,hu,du,pu,_),r&&(g.uv=Pi.getInterpolatedAttribute(r,f,p,d,_,new Oe)),o&&(g.uv1=Pi.getInterpolatedAttribute(o,f,p,d,_,new Oe)),u&&(g.normal=Pi.getInterpolatedAttribute(u,f,p,d,_,new lt),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const v={a:f,b:p,c:d,normal:new lt,materialIndex:0};Pi.getNormal(hu,du,pu,v.normal),g.face=v,g.barycoord=_}return g}class _o extends Ga{constructor(t=1,n=1,a=1,r=1,o=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:a,widthSegments:r,heightSegments:o,depthSegments:u};const f=this;r=Math.floor(r),o=Math.floor(o),u=Math.floor(u);const p=[],d=[],g=[],_=[];let v=0,y=0;M("z","y","x",-1,-1,a,n,t,u,o,0),M("z","y","x",1,-1,a,n,-t,u,o,1),M("x","z","y",1,1,t,a,n,r,u,2),M("x","z","y",1,-1,t,a,-n,r,u,3),M("x","y","z",1,-1,t,n,a,r,o,4),M("x","y","z",-1,-1,t,n,-a,r,o,5),this.setIndex(p),this.setAttribute("position",new Fa(d,3)),this.setAttribute("normal",new Fa(g,3)),this.setAttribute("uv",new Fa(_,2));function M(b,S,x,T,R,D,L,P,B,W,w){const O=D/B,G=L/W,$=D/2,V=L/2,Q=P/2,j=B+1,z=W+1;let H=0,Z=0;const ct=new lt;for(let vt=0;vt<z;vt++){const F=vt*G-V;for(let Y=0;Y<j;Y++){const mt=Y*O-$;ct[b]=mt*T,ct[S]=F*R,ct[x]=Q,d.push(ct.x,ct.y,ct.z),ct[b]=0,ct[S]=0,ct[x]=P>0?1:-1,g.push(ct.x,ct.y,ct.z),_.push(Y/B),_.push(1-vt/W),H+=1}}for(let vt=0;vt<W;vt++)for(let F=0;F<B;F++){const Y=v+F+j*vt,mt=v+F+j*(vt+1),bt=v+(F+1)+j*(vt+1),It=v+(F+1)+j*vt;p.push(Y,mt,It),p.push(mt,bt,It),Z+=6}f.addGroup(y,Z,w),y+=Z,v+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _o(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function go(c){const t={};for(const n in c){t[n]={};for(const a in c[n]){const r=c[n][a];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(he("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][a]=null):t[n][a]=r.clone():Array.isArray(r)?t[n][a]=r.slice():t[n][a]=r}}return t}function kn(c){const t={};for(let n=0;n<c.length;n++){const a=go(c[n]);for(const r in a)t[r]=a[r]}return t}function G1(c){const t=[];for(let n=0;n<c.length;n++)t.push(c[n].clone());return t}function kx(c){const t=c.getRenderTarget();return t===null?c.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ce.workingColorSpace}const V1={clone:go,merge:kn};var k1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,q1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sa extends Bl{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=k1,this.fragmentShader=q1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=go(t.uniforms),this.uniformsGroups=G1(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const u=this.uniforms[r].value;u&&u.isTexture?n.uniforms[r]={type:"t",value:u.toJSON(t).uuid}:u&&u.isColor?n.uniforms[r]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[r]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[r]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[r]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[r]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[r]={type:"m4",value:u.toArray()}:n.uniforms[r]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const r in this.extensions)this.extensions[r]===!0&&(a[r]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class qx extends Gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new sn,this.projectionMatrix=new sn,this.projectionMatrixInverse=new sn,this.coordinateSystem=$i,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ys=new lt,A_=new Oe,w_=new Oe;class zi extends qx{constructor(t=50,n=1,a=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Tp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(td*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Tp*2*Math.atan(Math.tan(td*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,a){ys.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ys.x,ys.y).multiplyScalar(-t/ys.z),ys.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(ys.x,ys.y).multiplyScalar(-t/ys.z)}getViewSize(t,n){return this.getViewBounds(t,A_,w_),n.subVectors(w_,A_)}setViewOffset(t,n,a,r,o,u){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=r,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(td*.5*this.fov)/this.zoom,a=2*n,r=this.aspect*a,o=-.5*r;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,d=u.fullHeight;o+=u.offsetX*r/p,n-=u.offsetY*a/d,r*=u.width/p,a*=u.height/d}const f=this.filmOffset;f!==0&&(o+=t*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-a,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const io=-90,ao=1;class X1 extends Gn{constructor(t,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new zi(io,ao,t,n);r.layers=this.layers,this.add(r);const o=new zi(io,ao,t,n);o.layers=this.layers,this.add(o);const u=new zi(io,ao,t,n);u.layers=this.layers,this.add(u);const f=new zi(io,ao,t,n);f.layers=this.layers,this.add(f);const p=new zi(io,ao,t,n);p.layers=this.layers,this.add(p);const d=new zi(io,ao,t,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[a,r,o,u,f,p]=n;for(const d of n)this.remove(d);if(t===$i)a.up.set(0,1,0),a.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===Nu)a.up.set(0,-1,0),a.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of n)this.add(d),d.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,u,f,p,d,g]=this.children,_=t.getRenderTarget(),v=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;const b=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0,r),t.render(n,o),t.setRenderTarget(a,1,r),t.render(n,u),t.setRenderTarget(a,2,r),t.render(n,f),t.setRenderTarget(a,3,r),t.render(n,p),t.setRenderTarget(a,4,r),t.render(n,d),a.texture.generateMipmaps=b,t.setRenderTarget(a,5,r),t.render(n,g),t.setRenderTarget(_,v,y),t.xr.enabled=M,a.texture.needsPMREMUpdate=!0}}class Xx extends Hn{constructor(t=[],n=rr,a,r,o,u,f,p,d,g){super(t,n,a,r,o,u,f,p,d,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Wx extends ea{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},r=[a,a,a,a,a,a];this.texture=new Xx(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new _o(5,5,5),o=new sa({name:"CubemapFromEquirect",uniforms:go(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:ti,blending:Pa});o.uniforms.tEquirect.value=n;const u=new Hi(r,o),f=n.minFilter;return n.minFilter===Es&&(n.minFilter=zn),new X1(1,10,this).update(t,u),n.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(t,n=!0,a=!0,r=!0){const o=t.getRenderTarget();for(let u=0;u<6;u++)t.setRenderTarget(this,u),t.clear(n,a,r);t.setRenderTarget(o)}}class _u extends Gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const W1={type:"move"};class Md{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _u,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _u,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new lt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new lt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _u,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new lt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new lt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const a of t.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,a){let r=null,o=null,u=null;const f=this._targetRay,p=this._grip,d=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(d&&t.hand){u=!0;for(const b of t.hand.values()){const S=n.getJointPose(b,a),x=this._getHandJoint(d,b);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const g=d.joints["index-finger-tip"],_=d.joints["thumb-tip"],v=g.position.distanceTo(_.position),y=.02,M=.005;d.inputState.pinching&&v>y+M?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&v<=y-M&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(o=n.getPose(t.gripSpace,a),o!==null&&(p.matrix.fromArray(o.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,o.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(o.linearVelocity)):p.hasLinearVelocity=!1,o.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(o.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(r=n.getPose(t.targetRaySpace,a),r===null&&o!==null&&(r=o),r!==null&&(f.matrix.fromArray(r.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,r.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(r.linearVelocity)):f.hasLinearVelocity=!1,r.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(r.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(W1)))}return f!==null&&(f.visible=r!==null),p!==null&&(p.visible=o!==null),d!==null&&(d.visible=u!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const a=new _u;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[n.jointName]=a,t.add(a)}return t.joints[n.jointName]}}class Y1 extends Gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new aa,this.environmentIntensity=1,this.environmentRotation=new aa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class j1 extends Hn{constructor(t=null,n=1,a=1,r,o,u,f,p,d=On,g=On,_,v){super(null,u,f,p,d,g,r,o,_,v),this.isDataTexture=!0,this.image={data:t,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ed=new lt,Z1=new lt,K1=new ge;class $s{constructor(t=new lt(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,a,r){return this.normal.set(t,n,a),this.constant=r,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,a){const r=Ed.subVectors(a,n).cross(Z1.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const a=t.delta(Ed),r=this.normal.dot(a);if(r===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(t.start).addScaledVector(a,o)}intersectsLine(t){const n=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return n<0&&a>0||a<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const a=n||K1.getNormalMatrix(t),r=this.coplanarPoint(Ed).applyMatrix4(t),o=this.normal.applyMatrix3(a).normalize();return this.constant=-r.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const js=new kp,Q1=new Oe(.5,.5),xu=new lt;class Xp{constructor(t=new $s,n=new $s,a=new $s,r=new $s,o=new $s,u=new $s){this.planes=[t,n,a,r,o,u]}set(t,n,a,r,o,u){const f=this.planes;return f[0].copy(t),f[1].copy(n),f[2].copy(a),f[3].copy(r),f[4].copy(o),f[5].copy(u),this}copy(t){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,n=$i,a=!1){const r=this.planes,o=t.elements,u=o[0],f=o[1],p=o[2],d=o[3],g=o[4],_=o[5],v=o[6],y=o[7],M=o[8],b=o[9],S=o[10],x=o[11],T=o[12],R=o[13],D=o[14],L=o[15];if(r[0].setComponents(d-u,y-g,x-M,L-T).normalize(),r[1].setComponents(d+u,y+g,x+M,L+T).normalize(),r[2].setComponents(d+f,y+_,x+b,L+R).normalize(),r[3].setComponents(d-f,y-_,x-b,L-R).normalize(),a)r[4].setComponents(p,v,S,D).normalize(),r[5].setComponents(d-p,y-v,x-S,L-D).normalize();else if(r[4].setComponents(d-p,y-v,x-S,L-D).normalize(),n===$i)r[5].setComponents(d+p,y+v,x+S,L+D).normalize();else if(n===Nu)r[5].setComponents(p,v,S,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),js.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),js.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(js)}intersectsSprite(t){js.center.set(0,0,0);const n=Q1.distanceTo(t.center);return js.radius=.7071067811865476+n,js.applyMatrix4(t.matrixWorld),this.intersectsSphere(js)}intersectsSphere(t){const n=this.planes,a=t.center,r=-t.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(a)<r)return!1;return!0}intersectsBox(t){const n=this.planes;for(let a=0;a<6;a++){const r=n[a];if(xu.x=r.normal.x>0?t.max.x:t.min.x,xu.y=r.normal.y>0?t.max.y:t.min.y,xu.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(xu)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class R_ extends Hn{constructor(t,n,a,r,o,u,f,p,d){super(t,n,a,r,o,u,f,p,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ul extends Hn{constructor(t,n,a=ia,r,o,u,f=On,p=On,d,g=Ha,_=1){if(g!==Ha&&g!==sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:n,depth:_};super(v,r,o,u,f,p,g,a,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Vp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class J1 extends Ul{constructor(t,n=ia,a=rr,r,o,u=On,f=On,p,d=Ha){const g={width:t,height:t,depth:1},_=[g,g,g,g,g,g];super(t,t,n,a,r,o,u,f,p,d),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Yx extends Hn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Fl extends Ga{constructor(t=1,n=1,a=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:a,heightSegments:r};const o=t/2,u=n/2,f=Math.floor(a),p=Math.floor(r),d=f+1,g=p+1,_=t/f,v=n/p,y=[],M=[],b=[],S=[];for(let x=0;x<g;x++){const T=x*v-u;for(let R=0;R<d;R++){const D=R*_-o;M.push(D,-T,0),b.push(0,0,1),S.push(R/f),S.push(1-x/p)}}for(let x=0;x<p;x++)for(let T=0;T<f;T++){const R=T+d*x,D=T+d*(x+1),L=T+1+d*(x+1),P=T+1+d*x;y.push(R,D,P),y.push(D,L,P)}this.setIndex(y),this.setAttribute("position",new Fa(M,3)),this.setAttribute("normal",new Fa(b,3)),this.setAttribute("uv",new Fa(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fl(t.width,t.height,t.widthSegments,t.heightSegments)}}class $1 extends sa{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class C_ extends Bl{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zx,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new aa,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class tT extends Bl{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=d1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class eT extends Bl{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class jx extends Gn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(t),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const bd=new sn,D_=new lt,N_=new lt;class nT{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.mapType=ui,this.map=null,this.mapPass=null,this.matrix=new sn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xp,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new ln(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,a=this.matrix;D_.setFromMatrixPosition(t.matrixWorld),n.position.copy(D_),N_.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(N_),n.updateMatrixWorld(),bd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bd,n.coordinateSystem,n.reversedDepth),n.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(bd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Ou extends qx{constructor(t=-1,n=1,a=1,r=-1,o=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=a,this.bottom=r,this.near=o,this.far=u,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,a,r,o,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=r,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=a-t,u=a+t,f=r+n,p=r-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=d*this.view.offsetX,u=o+d*this.view.width,f-=g*this.view.offsetY,p=f-g*this.view.height}this.projectionMatrix.makeOrthographic(o,u,f,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class iT extends nT{constructor(){super(new Ou(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class aT extends jx{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gn.DEFAULT_UP),this.updateMatrix(),this.target=new Gn,this.shadow=new iT}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class sT extends jx{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class rT extends zi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class oT{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}}const U_=new sn;class lT{constructor(t,n,a=0,r=1/0){this.ray=new Fx(t,n),this.near=a,this.far=r,this.camera=null,this.layers=new qp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):Re("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return U_.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(U_),this}intersectObject(t,n=!0,a=[]){return Ap(t,this,a,n),a.sort(L_),a}intersectObjects(t,n=!0,a=[]){for(let r=0,o=t.length;r<o;r++)Ap(t[r],this,a,n);return a.sort(L_),a}}function L_(c,t){return c.distance-t.distance}function Ap(c,t,n,a){let r=!0;if(c.layers.test(t.layers)&&c.raycast(t,n)===!1&&(r=!1),r===!0&&a===!0){const o=c.children;for(let u=0,f=o.length;u<f;u++)Ap(o[u],t,n,!0)}}function O_(c,t,n,a){const r=cT(a);switch(n){case Ux:return c*t;case Ox:return c*t/r.components*r.byteLength;case Bp:return c*t/r.components*r.byteLength;case po:return c*t*2/r.components*r.byteLength;case Fp:return c*t*2/r.components*r.byteLength;case Lx:return c*t*3/r.components*r.byteLength;case Fi:return c*t*4/r.components*r.byteLength;case Ip:return c*t*4/r.components*r.byteLength;case Eu:case bu:return Math.floor((c+3)/4)*Math.floor((t+3)/4)*8;case Tu:case Au:return Math.floor((c+3)/4)*Math.floor((t+3)/4)*16;case jd:case Kd:return Math.max(c,16)*Math.max(t,8)/4;case Yd:case Zd:return Math.max(c,8)*Math.max(t,8)/2;case Qd:case Jd:case tp:case ep:return Math.floor((c+3)/4)*Math.floor((t+3)/4)*8;case $d:case np:case ip:return Math.floor((c+3)/4)*Math.floor((t+3)/4)*16;case ap:return Math.floor((c+3)/4)*Math.floor((t+3)/4)*16;case sp:return Math.floor((c+4)/5)*Math.floor((t+3)/4)*16;case rp:return Math.floor((c+4)/5)*Math.floor((t+4)/5)*16;case op:return Math.floor((c+5)/6)*Math.floor((t+4)/5)*16;case lp:return Math.floor((c+5)/6)*Math.floor((t+5)/6)*16;case cp:return Math.floor((c+7)/8)*Math.floor((t+4)/5)*16;case up:return Math.floor((c+7)/8)*Math.floor((t+5)/6)*16;case fp:return Math.floor((c+7)/8)*Math.floor((t+7)/8)*16;case hp:return Math.floor((c+9)/10)*Math.floor((t+4)/5)*16;case dp:return Math.floor((c+9)/10)*Math.floor((t+5)/6)*16;case pp:return Math.floor((c+9)/10)*Math.floor((t+7)/8)*16;case mp:return Math.floor((c+9)/10)*Math.floor((t+9)/10)*16;case gp:return Math.floor((c+11)/12)*Math.floor((t+9)/10)*16;case vp:return Math.floor((c+11)/12)*Math.floor((t+11)/12)*16;case _p:case xp:case yp:return Math.ceil(c/4)*Math.ceil(t/4)*16;case Sp:case Mp:return Math.ceil(c/4)*Math.ceil(t/4)*8;case Ep:case bp:return Math.ceil(c/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function cT(c){switch(c){case ui:case Rx:return{byteLength:1,components:1};case Cl:case Cx:case Ia:return{byteLength:2,components:1};case zp:case Pp:return{byteLength:2,components:4};case ia:case Op:case Ji:return{byteLength:4,components:1};case Dx:case Nx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${c}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lp}}));typeof window<"u"&&(window.__THREE__?he("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lp);function Zx(){let c=null,t=!1,n=null,a=null;function r(o,u){n(o,u),a=c.requestAnimationFrame(r)}return{start:function(){t!==!0&&n!==null&&(a=c.requestAnimationFrame(r),t=!0)},stop:function(){c.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(o){n=o},setContext:function(o){c=o}}}function uT(c){const t=new WeakMap;function n(f,p){const d=f.array,g=f.usage,_=d.byteLength,v=c.createBuffer();c.bindBuffer(p,v),c.bufferData(p,d,g),f.onUploadCallback();let y;if(d instanceof Float32Array)y=c.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)y=c.HALF_FLOAT;else if(d instanceof Uint16Array)f.isFloat16BufferAttribute?y=c.HALF_FLOAT:y=c.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=c.SHORT;else if(d instanceof Uint32Array)y=c.UNSIGNED_INT;else if(d instanceof Int32Array)y=c.INT;else if(d instanceof Int8Array)y=c.BYTE;else if(d instanceof Uint8Array)y=c.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=c.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:f.version,size:_}}function a(f,p,d){const g=p.array,_=p.updateRanges;if(c.bindBuffer(d,f),_.length===0)c.bufferSubData(d,0,g);else{_.sort((y,M)=>y.start-M.start);let v=0;for(let y=1;y<_.length;y++){const M=_[v],b=_[y];b.start<=M.start+M.count+1?M.count=Math.max(M.count,b.start+b.count-M.start):(++v,_[v]=b)}_.length=v+1;for(let y=0,M=_.length;y<M;y++){const b=_[y];c.bufferSubData(d,b.start*g.BYTES_PER_ELEMENT,g,b.start,b.count)}p.clearUpdateRanges()}p.onUploadCallback()}function r(f){return f.isInterleavedBufferAttribute&&(f=f.data),t.get(f)}function o(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=t.get(f);p&&(c.deleteBuffer(p.buffer),t.delete(f))}function u(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=t.get(f);(!g||g.version<f.version)&&t.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const d=t.get(f);if(d===void 0)t.set(f,n(f,p));else if(d.version<f.version){if(d.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(d.buffer,f,p),d.version=f.version}}return{get:r,remove:o,update:u}}var fT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hT=`#ifdef USE_ALPHAHASH
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
#endif`,dT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vT=`#ifdef USE_AOMAP
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
#endif`,_T=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xT=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,yT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ST=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,MT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ET=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bT=`#ifdef USE_IRIDESCENCE
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
#endif`,TT=`#ifdef USE_BUMPMAP
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
#endif`,AT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,RT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,CT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,DT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,NT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,UT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,LT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,OT=`#define PI 3.141592653589793
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
} // validated`,zT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,PT=`vec3 transformedNormal = objectNormal;
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
#endif`,BT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,FT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,IT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,HT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,GT="gl_FragColor = linearToOutputTexel( gl_FragColor );",VT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kT=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,qT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,XT=`#ifdef USE_ENVMAP
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
#endif`,WT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,YT=`#ifdef USE_ENVMAP
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
#endif`,jT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ZT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,KT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,QT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,JT=`#ifdef USE_GRADIENTMAP
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
}`,$T=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,eA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nA=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,iA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,aA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,oA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lA=`PhysicalMaterial material;
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
#endif`,cA=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
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
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
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
}`,uA=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fA=`#if defined( RE_IndirectDiffuse )
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
#endif`,hA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_A=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yA=`#if defined( USE_POINTS_UV )
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
#endif`,SA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,MA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,EA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,TA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,AA=`#ifdef USE_MORPHTARGETS
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
#endif`,wA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,RA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,CA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,DA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,LA=`#ifdef USE_NORMALMAP
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
#endif`,OA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,PA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,BA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,FA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,IA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,HA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,GA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,VA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,XA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,WA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
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
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
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
			shadowCoord.z += shadowBias;
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
			shadowCoord.z += shadowBias;
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,YA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,jA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ZA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
}`,KA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,QA=`#ifdef USE_SKINNING
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
#endif`,JA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$A=`#ifdef USE_SKINNING
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
#endif`,tw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ew=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,iw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,aw=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,sw=`#ifdef USE_TRANSMISSION
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
#endif`,rw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ow=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fw=`uniform sampler2D t2D;
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
}`,hw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gw=`#include <common>
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
}`,vw=`#if DEPTH_PACKING == 3200
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
}`,_w=`#define DISTANCE
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
}`,xw=`#define DISTANCE
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
void main () {
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
}`,yw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mw=`uniform float scale;
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
}`,Ew=`uniform vec3 diffuse;
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
}`,bw=`#include <common>
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
}`,Tw=`uniform vec3 diffuse;
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
}`,Aw=`#define LAMBERT
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
}`,ww=`#define LAMBERT
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
}`,Rw=`#define MATCAP
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
}`,Cw=`#define MATCAP
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
}`,Dw=`#define NORMAL
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
}`,Nw=`#define NORMAL
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
}`,Uw=`#define PHONG
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
}`,Lw=`#define PHONG
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
}`,Ow=`#define STANDARD
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
}`,zw=`#define STANDARD
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
}`,Pw=`#define TOON
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
}`,Bw=`#define TOON
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
}`,Fw=`uniform float size;
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
}`,Iw=`uniform vec3 diffuse;
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
}`,Hw=`#include <common>
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
}`,Gw=`uniform vec3 color;
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
}`,Vw=`uniform float rotation;
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
}`,kw=`uniform vec3 diffuse;
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
}`,_e={alphahash_fragment:fT,alphahash_pars_fragment:hT,alphamap_fragment:dT,alphamap_pars_fragment:pT,alphatest_fragment:mT,alphatest_pars_fragment:gT,aomap_fragment:vT,aomap_pars_fragment:_T,batching_pars_vertex:xT,batching_vertex:yT,begin_vertex:ST,beginnormal_vertex:MT,bsdfs:ET,iridescence_fragment:bT,bumpmap_pars_fragment:TT,clipping_planes_fragment:AT,clipping_planes_pars_fragment:wT,clipping_planes_pars_vertex:RT,clipping_planes_vertex:CT,color_fragment:DT,color_pars_fragment:NT,color_pars_vertex:UT,color_vertex:LT,common:OT,cube_uv_reflection_fragment:zT,defaultnormal_vertex:PT,displacementmap_pars_vertex:BT,displacementmap_vertex:FT,emissivemap_fragment:IT,emissivemap_pars_fragment:HT,colorspace_fragment:GT,colorspace_pars_fragment:VT,envmap_fragment:kT,envmap_common_pars_fragment:qT,envmap_pars_fragment:XT,envmap_pars_vertex:WT,envmap_physical_pars_fragment:iA,envmap_vertex:YT,fog_vertex:jT,fog_pars_vertex:ZT,fog_fragment:KT,fog_pars_fragment:QT,gradientmap_pars_fragment:JT,lightmap_pars_fragment:$T,lights_lambert_fragment:tA,lights_lambert_pars_fragment:eA,lights_pars_begin:nA,lights_toon_fragment:aA,lights_toon_pars_fragment:sA,lights_phong_fragment:rA,lights_phong_pars_fragment:oA,lights_physical_fragment:lA,lights_physical_pars_fragment:cA,lights_fragment_begin:uA,lights_fragment_maps:fA,lights_fragment_end:hA,logdepthbuf_fragment:dA,logdepthbuf_pars_fragment:pA,logdepthbuf_pars_vertex:mA,logdepthbuf_vertex:gA,map_fragment:vA,map_pars_fragment:_A,map_particle_fragment:xA,map_particle_pars_fragment:yA,metalnessmap_fragment:SA,metalnessmap_pars_fragment:MA,morphinstance_vertex:EA,morphcolor_vertex:bA,morphnormal_vertex:TA,morphtarget_pars_vertex:AA,morphtarget_vertex:wA,normal_fragment_begin:RA,normal_fragment_maps:CA,normal_pars_fragment:DA,normal_pars_vertex:NA,normal_vertex:UA,normalmap_pars_fragment:LA,clearcoat_normal_fragment_begin:OA,clearcoat_normal_fragment_maps:zA,clearcoat_pars_fragment:PA,iridescence_pars_fragment:BA,opaque_fragment:FA,packing:IA,premultiplied_alpha_fragment:HA,project_vertex:GA,dithering_fragment:VA,dithering_pars_fragment:kA,roughnessmap_fragment:qA,roughnessmap_pars_fragment:XA,shadowmap_pars_fragment:WA,shadowmap_pars_vertex:YA,shadowmap_vertex:jA,shadowmask_pars_fragment:ZA,skinbase_vertex:KA,skinning_pars_vertex:QA,skinning_vertex:JA,skinnormal_vertex:$A,specularmap_fragment:tw,specularmap_pars_fragment:ew,tonemapping_fragment:nw,tonemapping_pars_fragment:iw,transmission_fragment:aw,transmission_pars_fragment:sw,uv_pars_fragment:rw,uv_pars_vertex:ow,uv_vertex:lw,worldpos_vertex:cw,background_vert:uw,background_frag:fw,backgroundCube_vert:hw,backgroundCube_frag:dw,cube_vert:pw,cube_frag:mw,depth_vert:gw,depth_frag:vw,distance_vert:_w,distance_frag:xw,equirect_vert:yw,equirect_frag:Sw,linedashed_vert:Mw,linedashed_frag:Ew,meshbasic_vert:bw,meshbasic_frag:Tw,meshlambert_vert:Aw,meshlambert_frag:ww,meshmatcap_vert:Rw,meshmatcap_frag:Cw,meshnormal_vert:Dw,meshnormal_frag:Nw,meshphong_vert:Uw,meshphong_frag:Lw,meshphysical_vert:Ow,meshphysical_frag:zw,meshtoon_vert:Pw,meshtoon_frag:Bw,points_vert:Fw,points_frag:Iw,shadow_vert:Hw,shadow_frag:Gw,sprite_vert:Vw,sprite_frag:kw},Bt={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ge}},envmap:{envMap:{value:null},envMapRotation:{value:new ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ge},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0},uvTransform:{value:new ge}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}}},Qi={basic:{uniforms:kn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.fog]),vertexShader:_e.meshbasic_vert,fragmentShader:_e.meshbasic_frag},lambert:{uniforms:kn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new Le(0)}}]),vertexShader:_e.meshlambert_vert,fragmentShader:_e.meshlambert_frag},phong:{uniforms:kn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30}}]),vertexShader:_e.meshphong_vert,fragmentShader:_e.meshphong_frag},standard:{uniforms:kn([Bt.common,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.roughnessmap,Bt.metalnessmap,Bt.fog,Bt.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag},toon:{uniforms:kn([Bt.common,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.gradientmap,Bt.fog,Bt.lights,{emissive:{value:new Le(0)}}]),vertexShader:_e.meshtoon_vert,fragmentShader:_e.meshtoon_frag},matcap:{uniforms:kn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,{matcap:{value:null}}]),vertexShader:_e.meshmatcap_vert,fragmentShader:_e.meshmatcap_frag},points:{uniforms:kn([Bt.points,Bt.fog]),vertexShader:_e.points_vert,fragmentShader:_e.points_frag},dashed:{uniforms:kn([Bt.common,Bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_e.linedashed_vert,fragmentShader:_e.linedashed_frag},depth:{uniforms:kn([Bt.common,Bt.displacementmap]),vertexShader:_e.depth_vert,fragmentShader:_e.depth_frag},normal:{uniforms:kn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,{opacity:{value:1}}]),vertexShader:_e.meshnormal_vert,fragmentShader:_e.meshnormal_frag},sprite:{uniforms:kn([Bt.sprite,Bt.fog]),vertexShader:_e.sprite_vert,fragmentShader:_e.sprite_frag},background:{uniforms:{uvTransform:{value:new ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_e.background_vert,fragmentShader:_e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ge}},vertexShader:_e.backgroundCube_vert,fragmentShader:_e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_e.cube_vert,fragmentShader:_e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_e.equirect_vert,fragmentShader:_e.equirect_frag},distance:{uniforms:kn([Bt.common,Bt.displacementmap,{referencePosition:{value:new lt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_e.distance_vert,fragmentShader:_e.distance_frag},shadow:{uniforms:kn([Bt.lights,Bt.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:_e.shadow_vert,fragmentShader:_e.shadow_frag}};Qi.physical={uniforms:kn([Qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ge},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ge},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ge},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ge},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ge},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ge}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag};const yu={r:0,b:0,g:0},Zs=new aa,qw=new sn;function Xw(c,t,n,a,r,o,u){const f=new Le(0);let p=o===!0?0:1,d,g,_=null,v=0,y=null;function M(R){let D=R.isScene===!0?R.background:null;return D&&D.isTexture&&(D=(R.backgroundBlurriness>0?n:t).get(D)),D}function b(R){let D=!1;const L=M(R);L===null?x(f,p):L&&L.isColor&&(x(L,1),D=!0);const P=c.xr.getEnvironmentBlendMode();P==="additive"?a.buffers.color.setClear(0,0,0,1,u):P==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,u),(c.autoClear||D)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),c.clear(c.autoClearColor,c.autoClearDepth,c.autoClearStencil))}function S(R,D){const L=M(D);L&&(L.isCubeTexture||L.mapping===Lu)?(g===void 0&&(g=new Hi(new _o(1,1,1),new sa({name:"BackgroundCubeMaterial",uniforms:go(Qi.backgroundCube.uniforms),vertexShader:Qi.backgroundCube.vertexShader,fragmentShader:Qi.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(P,B,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(g)),Zs.copy(D.backgroundRotation),Zs.x*=-1,Zs.y*=-1,Zs.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Zs.y*=-1,Zs.z*=-1),g.material.uniforms.envMap.value=L,g.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(qw.makeRotationFromEuler(Zs)),g.material.toneMapped=Ce.getTransfer(L.colorSpace)!==qe,(_!==L||v!==L.version||y!==c.toneMapping)&&(g.material.needsUpdate=!0,_=L,v=L.version,y=c.toneMapping),g.layers.enableAll(),R.unshift(g,g.geometry,g.material,0,0,null)):L&&L.isTexture&&(d===void 0&&(d=new Hi(new Fl(2,2),new sa({name:"BackgroundMaterial",uniforms:go(Qi.background.uniforms),vertexShader:Qi.background.vertexShader,fragmentShader:Qi.background.fragmentShader,side:Ts,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=L,d.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,d.material.toneMapped=Ce.getTransfer(L.colorSpace)!==qe,L.matrixAutoUpdate===!0&&L.updateMatrix(),d.material.uniforms.uvTransform.value.copy(L.matrix),(_!==L||v!==L.version||y!==c.toneMapping)&&(d.material.needsUpdate=!0,_=L,v=L.version,y=c.toneMapping),d.layers.enableAll(),R.unshift(d,d.geometry,d.material,0,0,null))}function x(R,D){R.getRGB(yu,kx(c)),a.buffers.color.setClear(yu.r,yu.g,yu.b,D,u)}function T(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return f},setClearColor:function(R,D=1){f.set(R),p=D,x(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(R){p=R,x(f,p)},render:b,addToRenderList:S,dispose:T}}function Ww(c,t){const n=c.getParameter(c.MAX_VERTEX_ATTRIBS),a={},r=v(null);let o=r,u=!1;function f(O,G,$,V,Q){let j=!1;const z=_(V,$,G);o!==z&&(o=z,d(o.object)),j=y(O,V,$,Q),j&&M(O,V,$,Q),Q!==null&&t.update(Q,c.ELEMENT_ARRAY_BUFFER),(j||u)&&(u=!1,D(O,G,$,V),Q!==null&&c.bindBuffer(c.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function p(){return c.createVertexArray()}function d(O){return c.bindVertexArray(O)}function g(O){return c.deleteVertexArray(O)}function _(O,G,$){const V=$.wireframe===!0;let Q=a[O.id];Q===void 0&&(Q={},a[O.id]=Q);let j=Q[G.id];j===void 0&&(j={},Q[G.id]=j);let z=j[V];return z===void 0&&(z=v(p()),j[V]=z),z}function v(O){const G=[],$=[],V=[];for(let Q=0;Q<n;Q++)G[Q]=0,$[Q]=0,V[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:$,attributeDivisors:V,object:O,attributes:{},index:null}}function y(O,G,$,V){const Q=o.attributes,j=G.attributes;let z=0;const H=$.getAttributes();for(const Z in H)if(H[Z].location>=0){const vt=Q[Z];let F=j[Z];if(F===void 0&&(Z==="instanceMatrix"&&O.instanceMatrix&&(F=O.instanceMatrix),Z==="instanceColor"&&O.instanceColor&&(F=O.instanceColor)),vt===void 0||vt.attribute!==F||F&&vt.data!==F.data)return!0;z++}return o.attributesNum!==z||o.index!==V}function M(O,G,$,V){const Q={},j=G.attributes;let z=0;const H=$.getAttributes();for(const Z in H)if(H[Z].location>=0){let vt=j[Z];vt===void 0&&(Z==="instanceMatrix"&&O.instanceMatrix&&(vt=O.instanceMatrix),Z==="instanceColor"&&O.instanceColor&&(vt=O.instanceColor));const F={};F.attribute=vt,vt&&vt.data&&(F.data=vt.data),Q[Z]=F,z++}o.attributes=Q,o.attributesNum=z,o.index=V}function b(){const O=o.newAttributes;for(let G=0,$=O.length;G<$;G++)O[G]=0}function S(O){x(O,0)}function x(O,G){const $=o.newAttributes,V=o.enabledAttributes,Q=o.attributeDivisors;$[O]=1,V[O]===0&&(c.enableVertexAttribArray(O),V[O]=1),Q[O]!==G&&(c.vertexAttribDivisor(O,G),Q[O]=G)}function T(){const O=o.newAttributes,G=o.enabledAttributes;for(let $=0,V=G.length;$<V;$++)G[$]!==O[$]&&(c.disableVertexAttribArray($),G[$]=0)}function R(O,G,$,V,Q,j,z){z===!0?c.vertexAttribIPointer(O,G,$,Q,j):c.vertexAttribPointer(O,G,$,V,Q,j)}function D(O,G,$,V){b();const Q=V.attributes,j=$.getAttributes(),z=G.defaultAttributeValues;for(const H in j){const Z=j[H];if(Z.location>=0){let ct=Q[H];if(ct===void 0&&(H==="instanceMatrix"&&O.instanceMatrix&&(ct=O.instanceMatrix),H==="instanceColor"&&O.instanceColor&&(ct=O.instanceColor)),ct!==void 0){const vt=ct.normalized,F=ct.itemSize,Y=t.get(ct);if(Y===void 0)continue;const mt=Y.buffer,bt=Y.type,It=Y.bytesPerElement,nt=bt===c.INT||bt===c.UNSIGNED_INT||ct.gpuType===Op;if(ct.isInterleavedBufferAttribute){const ft=ct.data,Ct=ft.stride,kt=ct.offset;if(ft.isInstancedInterleavedBuffer){for(let Gt=0;Gt<Z.locationSize;Gt++)x(Z.location+Gt,ft.meshPerAttribute);O.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let Gt=0;Gt<Z.locationSize;Gt++)S(Z.location+Gt);c.bindBuffer(c.ARRAY_BUFFER,mt);for(let Gt=0;Gt<Z.locationSize;Gt++)R(Z.location+Gt,F/Z.locationSize,bt,vt,Ct*It,(kt+F/Z.locationSize*Gt)*It,nt)}else{if(ct.isInstancedBufferAttribute){for(let ft=0;ft<Z.locationSize;ft++)x(Z.location+ft,ct.meshPerAttribute);O.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let ft=0;ft<Z.locationSize;ft++)S(Z.location+ft);c.bindBuffer(c.ARRAY_BUFFER,mt);for(let ft=0;ft<Z.locationSize;ft++)R(Z.location+ft,F/Z.locationSize,bt,vt,F*It,F/Z.locationSize*ft*It,nt)}}else if(z!==void 0){const vt=z[H];if(vt!==void 0)switch(vt.length){case 2:c.vertexAttrib2fv(Z.location,vt);break;case 3:c.vertexAttrib3fv(Z.location,vt);break;case 4:c.vertexAttrib4fv(Z.location,vt);break;default:c.vertexAttrib1fv(Z.location,vt)}}}}T()}function L(){W();for(const O in a){const G=a[O];for(const $ in G){const V=G[$];for(const Q in V)g(V[Q].object),delete V[Q];delete G[$]}delete a[O]}}function P(O){if(a[O.id]===void 0)return;const G=a[O.id];for(const $ in G){const V=G[$];for(const Q in V)g(V[Q].object),delete V[Q];delete G[$]}delete a[O.id]}function B(O){for(const G in a){const $=a[G];if($[O.id]===void 0)continue;const V=$[O.id];for(const Q in V)g(V[Q].object),delete V[Q];delete $[O.id]}}function W(){w(),u=!0,o!==r&&(o=r,d(o.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:f,reset:W,resetDefaultState:w,dispose:L,releaseStatesOfGeometry:P,releaseStatesOfProgram:B,initAttributes:b,enableAttribute:S,disableUnusedAttributes:T}}function Yw(c,t,n){let a;function r(d){a=d}function o(d,g){c.drawArrays(a,d,g),n.update(g,a,1)}function u(d,g,_){_!==0&&(c.drawArraysInstanced(a,d,g,_),n.update(g,a,_))}function f(d,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,d,0,g,0,_);let y=0;for(let M=0;M<_;M++)y+=g[M];n.update(y,a,1)}function p(d,g,_,v){if(_===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let M=0;M<d.length;M++)u(d[M],g[M],v[M]);else{y.multiDrawArraysInstancedWEBGL(a,d,0,g,0,v,0,_);let M=0;for(let b=0;b<_;b++)M+=g[b]*v[b];n.update(M,a,1)}}this.setMode=r,this.render=o,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function jw(c,t,n,a){let r;function o(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");r=c.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function u(B){return!(B!==Fi&&a.convert(B)!==c.getParameter(c.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(B){const W=B===Ia&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==ui&&a.convert(B)!==c.getParameter(c.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==Ji&&!W)}function p(B){if(B==="highp"){if(c.getShaderPrecisionFormat(c.VERTEX_SHADER,c.HIGH_FLOAT).precision>0&&c.getShaderPrecisionFormat(c.FRAGMENT_SHADER,c.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&c.getShaderPrecisionFormat(c.VERTEX_SHADER,c.MEDIUM_FLOAT).precision>0&&c.getShaderPrecisionFormat(c.FRAGMENT_SHADER,c.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const g=p(d);g!==d&&(he("WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);const _=n.logarithmicDepthBuffer===!0,v=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=c.getParameter(c.MAX_TEXTURE_IMAGE_UNITS),M=c.getParameter(c.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=c.getParameter(c.MAX_TEXTURE_SIZE),S=c.getParameter(c.MAX_CUBE_MAP_TEXTURE_SIZE),x=c.getParameter(c.MAX_VERTEX_ATTRIBS),T=c.getParameter(c.MAX_VERTEX_UNIFORM_VECTORS),R=c.getParameter(c.MAX_VARYING_VECTORS),D=c.getParameter(c.MAX_FRAGMENT_UNIFORM_VECTORS),L=c.getParameter(c.MAX_SAMPLES),P=c.getParameter(c.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:f,precision:d,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:y,maxVertexTextures:M,maxTextureSize:b,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:T,maxVaryings:R,maxFragmentUniforms:D,maxSamples:L,samples:P}}function Zw(c){const t=this;let n=null,a=0,r=!1,o=!1;const u=new $s,f=new ge,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const y=_.length!==0||v||a!==0||r;return r=v,a=_.length,y},this.beginShadows=function(){o=!0,g(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(_,v){n=g(_,v,0)},this.setState=function(_,v,y){const M=_.clippingPlanes,b=_.clipIntersection,S=_.clipShadows,x=c.get(_);if(!r||M===null||M.length===0||o&&!S)o?g(null):d();else{const T=o?0:a,R=T*4;let D=x.clippingState||null;p.value=D,D=g(M,v,R,y);for(let L=0;L!==R;++L)D[L]=n[L];x.clippingState=D,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=T}};function d(){p.value!==n&&(p.value=n,p.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function g(_,v,y,M){const b=_!==null?_.length:0;let S=null;if(b!==0){if(S=p.value,M!==!0||S===null){const x=y+b*4,T=v.matrixWorldInverse;f.getNormalMatrix(T),(S===null||S.length<x)&&(S=new Float32Array(x));for(let R=0,D=y;R!==b;++R,D+=4)u.copy(_[R]).applyMatrix4(T,f),u.normal.toArray(S,D),S[D+3]=u.constant}p.value=S,p.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,S}}function Kw(c){let t=new WeakMap;function n(u,f){return f===kd?u.mapping=rr:f===qd&&(u.mapping=ho),u}function a(u){if(u&&u.isTexture){const f=u.mapping;if(f===kd||f===qd)if(t.has(u)){const p=t.get(u).texture;return n(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const d=new Wx(p.height);return d.fromEquirectangularTexture(c,u),t.set(u,d),u.addEventListener("dispose",r),n(d.texture,u.mapping)}else return null}}return u}function r(u){const f=u.target;f.removeEventListener("dispose",r);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function o(){t=new WeakMap}return{get:a,dispose:o}}const bs=4,z_=[.125,.215,.35,.446,.526,.582],ir=20,Qw=256,El=new Ou,P_=new Le;let Td=null,Ad=0,wd=0,Rd=!1;const Jw=new lt;class B_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,a=.1,r=100,o={}){const{size:u=256,position:f=Jw}=o;Td=this._renderer.getRenderTarget(),Ad=this._renderer.getActiveCubeFace(),wd=this._renderer.getActiveMipmapLevel(),Rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,a,r,p,f),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=H_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=I_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Td,Ad,wd),this._renderer.xr.enabled=Rd,t.scissorTest=!1,so(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===rr||t.mapping===ho?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Td=this._renderer.getRenderTarget(),Ad=this._renderer.getActiveCubeFace(),wd=this._renderer.getActiveMipmapLevel(),Rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:Ia,format:Fi,colorSpace:mo,depthBuffer:!1},r=F_(t,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=F_(t,n,a);const{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=$w(o)),this._blurMaterial=eR(o,t,n),this._ggxMaterial=tR(o,t,n)}return r}_compileMaterial(t){const n=new Hi(new Ga,t);this._renderer.compile(n,El)}_sceneToCubeUV(t,n,a,r,o){const p=new zi(90,1,n,a),d=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,y=_.toneMapping;_.getClearColor(P_),_.toneMapping=Ii,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(r),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Hi(new _o,new Hx({name:"PMREM.Background",side:ti,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,S=b.material;let x=!1;const T=t.background;T?T.isColor&&(S.color.copy(T),t.background=null,x=!0):(S.color.copy(P_),x=!0);for(let R=0;R<6;R++){const D=R%3;D===0?(p.up.set(0,d[R],0),p.position.set(o.x,o.y,o.z),p.lookAt(o.x+g[R],o.y,o.z)):D===1?(p.up.set(0,0,d[R]),p.position.set(o.x,o.y,o.z),p.lookAt(o.x,o.y+g[R],o.z)):(p.up.set(0,d[R],0),p.position.set(o.x,o.y,o.z),p.lookAt(o.x,o.y,o.z+g[R]));const L=this._cubeSize;so(r,D*L,R>2?L:0,L,L),_.setRenderTarget(r),x&&_.render(b,p),_.render(t,p)}_.toneMapping=y,_.autoClear=v,t.background=T}_textureToCubeUV(t,n){const a=this._renderer,r=t.mapping===rr||t.mapping===ho;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=H_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=I_());const o=r?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=o;const f=o.uniforms;f.envMap.value=t;const p=this._cubeSize;so(n,0,0,3*p,2*p),a.setRenderTarget(n),a.render(u,El)}_applyPMREM(t){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let o=1;o<r;o++)this._applyGGXFilter(t,o-1,o);n.autoClear=a}_applyGGXFilter(t,n,a){const r=this._renderer,o=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[a];f.material=u;const p=u.uniforms,d=a/(this._lodMeshes.length-1),g=n/(this._lodMeshes.length-1),_=Math.sqrt(d*d-g*g),v=0+d*1.25,y=_*v,{_lodMax:M}=this,b=this._sizeLods[a],S=3*b*(a>M-bs?a-M+bs:0),x=4*(this._cubeSize-b);p.envMap.value=t.texture,p.roughness.value=y,p.mipInt.value=M-n,so(o,S,x,3*b,2*b),r.setRenderTarget(o),r.render(f,El),p.envMap.value=o.texture,p.roughness.value=0,p.mipInt.value=M-a,so(t,S,x,3*b,2*b),r.setRenderTarget(t),r.render(f,El)}_blur(t,n,a,r,o){const u=this._pingPongRenderTarget;this._halfBlur(t,u,n,a,r,"latitudinal",o),this._halfBlur(u,t,a,a,r,"longitudinal",o)}_halfBlur(t,n,a,r,o,u,f){const p=this._renderer,d=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Re("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[r];_.material=d;const v=d.uniforms,y=this._sizeLods[a]-1,M=isFinite(o)?Math.PI/(2*y):2*Math.PI/(2*ir-1),b=o/M,S=isFinite(o)?1+Math.floor(g*b):ir;S>ir&&he(`sigmaRadians, ${o}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${ir}`);const x=[];let T=0;for(let B=0;B<ir;++B){const W=B/b,w=Math.exp(-W*W/2);x.push(w),B===0?T+=w:B<S&&(T+=2*w)}for(let B=0;B<x.length;B++)x[B]=x[B]/T;v.envMap.value=t.texture,v.samples.value=S,v.weights.value=x,v.latitudinal.value=u==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:R}=this;v.dTheta.value=M,v.mipInt.value=R-a;const D=this._sizeLods[r],L=3*D*(r>R-bs?r-R+bs:0),P=4*(this._cubeSize-D);so(n,L,P,3*D,2*D),p.setRenderTarget(n),p.render(_,El)}}function $w(c){const t=[],n=[],a=[];let r=c;const o=c-bs+1+z_.length;for(let u=0;u<o;u++){const f=Math.pow(2,r);t.push(f);let p=1/f;u>c-bs?p=z_[u-c+bs-1]:u===0&&(p=0),n.push(p);const d=1/(f-2),g=-d,_=1+d,v=[g,g,_,g,_,_,g,g,_,_,g,_],y=6,M=6,b=3,S=2,x=1,T=new Float32Array(b*M*y),R=new Float32Array(S*M*y),D=new Float32Array(x*M*y);for(let P=0;P<y;P++){const B=P%3*2/3-1,W=P>2?0:-1,w=[B,W,0,B+2/3,W,0,B+2/3,W+1,0,B,W,0,B+2/3,W+1,0,B,W+1,0];T.set(w,b*M*P),R.set(v,S*M*P);const O=[P,P,P,P,P,P];D.set(O,x*M*P)}const L=new Ga;L.setAttribute("position",new na(T,b)),L.setAttribute("uv",new na(R,S)),L.setAttribute("faceIndex",new na(D,x)),a.push(new Hi(L,null)),r>bs&&r--}return{lodMeshes:a,sizeLods:t,sigmas:n}}function F_(c,t,n){const a=new ea(c,t,n);return a.texture.mapping=Lu,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function so(c,t,n,a,r){c.viewport.set(t,n,a,r),c.scissor.set(t,n,a,r)}function tR(c,t,n){return new sa({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Qw,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${c}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:zu(),fragmentShader:`

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

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

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
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function eR(c,t,n){const a=new Float32Array(ir),r=new lt(0,1,0);return new sa({name:"SphericalGaussianBlur",defines:{n:ir,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${c}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:zu(),fragmentShader:`

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
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function I_(){return new sa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zu(),fragmentShader:`

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
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function H_(){return new sa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function zu(){return`

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
	`}function nR(c){let t=new WeakMap,n=null;function a(f){if(f&&f.isTexture){const p=f.mapping,d=p===kd||p===qd,g=p===rr||p===ho;if(d||g){let _=t.get(f);const v=_!==void 0?_.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==v)return n===null&&(n=new B_(c)),_=d?n.fromEquirectangular(f,_):n.fromCubemap(f,_),_.texture.pmremVersion=f.pmremVersion,t.set(f,_),_.texture;if(_!==void 0)return _.texture;{const y=f.image;return d&&y&&y.height>0||g&&y&&r(y)?(n===null&&(n=new B_(c)),_=d?n.fromEquirectangular(f):n.fromCubemap(f),_.texture.pmremVersion=f.pmremVersion,t.set(f,_),f.addEventListener("dispose",o),_.texture):null}}}return f}function r(f){let p=0;const d=6;for(let g=0;g<d;g++)f[g]!==void 0&&p++;return p===d}function o(f){const p=f.target;p.removeEventListener("dispose",o);const d=t.get(p);d!==void 0&&(t.delete(p),d.dispose())}function u(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:u}}function iR(c){const t={};function n(a){if(t[a]!==void 0)return t[a];const r=c.getExtension(a);return t[a]=r,r}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const r=n(a);return r===null&&Nl("WebGLRenderer: "+a+" extension not supported."),r}}}function aR(c,t,n,a){const r={},o=new WeakMap;function u(_){const v=_.target;v.index!==null&&t.remove(v.index);for(const M in v.attributes)t.remove(v.attributes[M]);v.removeEventListener("dispose",u),delete r[v.id];const y=o.get(v);y&&(t.remove(y),o.delete(v)),a.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function f(_,v){return r[v.id]===!0||(v.addEventListener("dispose",u),r[v.id]=!0,n.memory.geometries++),v}function p(_){const v=_.attributes;for(const y in v)t.update(v[y],c.ARRAY_BUFFER)}function d(_){const v=[],y=_.index,M=_.attributes.position;let b=0;if(y!==null){const T=y.array;b=y.version;for(let R=0,D=T.length;R<D;R+=3){const L=T[R+0],P=T[R+1],B=T[R+2];v.push(L,P,P,B,B,L)}}else if(M!==void 0){const T=M.array;b=M.version;for(let R=0,D=T.length/3-1;R<D;R+=3){const L=R+0,P=R+1,B=R+2;v.push(L,P,P,B,B,L)}}else return;const S=new(Px(v)?Vx:Gx)(v,1);S.version=b;const x=o.get(_);x&&t.remove(x),o.set(_,S)}function g(_){const v=o.get(_);if(v){const y=_.index;y!==null&&v.version<y.version&&d(_)}else d(_);return o.get(_)}return{get:f,update:p,getWireframeAttribute:g}}function sR(c,t,n){let a;function r(v){a=v}let o,u;function f(v){o=v.type,u=v.bytesPerElement}function p(v,y){c.drawElements(a,y,o,v*u),n.update(y,a,1)}function d(v,y,M){M!==0&&(c.drawElementsInstanced(a,y,o,v*u,M),n.update(y,a,M))}function g(v,y,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,y,0,o,v,0,M);let S=0;for(let x=0;x<M;x++)S+=y[x];n.update(S,a,1)}function _(v,y,M,b){if(M===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<v.length;x++)d(v[x]/u,y[x],b[x]);else{S.multiDrawElementsInstancedWEBGL(a,y,0,o,v,0,b,0,M);let x=0;for(let T=0;T<M;T++)x+=y[T]*b[T];n.update(x,a,1)}}this.setMode=r,this.setIndex=f,this.render=p,this.renderInstances=d,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function rR(c){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(o,u,f){switch(n.calls++,u){case c.TRIANGLES:n.triangles+=f*(o/3);break;case c.LINES:n.lines+=f*(o/2);break;case c.LINE_STRIP:n.lines+=f*(o-1);break;case c.LINE_LOOP:n.lines+=f*o;break;case c.POINTS:n.points+=f*o;break;default:Re("WebGLInfo: Unknown draw mode:",u);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:r,update:a}}function oR(c,t,n){const a=new WeakMap,r=new ln;function o(u,f,p){const d=u.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=g!==void 0?g.length:0;let v=a.get(f);if(v===void 0||v.count!==_){let O=function(){W.dispose(),a.delete(f),f.removeEventListener("dispose",O)};var y=O;v!==void 0&&v.texture.dispose();const M=f.morphAttributes.position!==void 0,b=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,x=f.morphAttributes.position||[],T=f.morphAttributes.normal||[],R=f.morphAttributes.color||[];let D=0;M===!0&&(D=1),b===!0&&(D=2),S===!0&&(D=3);let L=f.attributes.position.count*D,P=1;L>t.maxTextureSize&&(P=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const B=new Float32Array(L*P*4*_),W=new Bx(B,L,P,_);W.type=Ji,W.needsUpdate=!0;const w=D*4;for(let G=0;G<_;G++){const $=x[G],V=T[G],Q=R[G],j=L*P*4*G;for(let z=0;z<$.count;z++){const H=z*w;M===!0&&(r.fromBufferAttribute($,z),B[j+H+0]=r.x,B[j+H+1]=r.y,B[j+H+2]=r.z,B[j+H+3]=0),b===!0&&(r.fromBufferAttribute(V,z),B[j+H+4]=r.x,B[j+H+5]=r.y,B[j+H+6]=r.z,B[j+H+7]=0),S===!0&&(r.fromBufferAttribute(Q,z),B[j+H+8]=r.x,B[j+H+9]=r.y,B[j+H+10]=r.z,B[j+H+11]=Q.itemSize===4?r.w:1)}}v={count:_,texture:W,size:new Oe(L,P)},a.set(f,v),f.addEventListener("dispose",O)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(c,"morphTexture",u.morphTexture,n);else{let M=0;for(let S=0;S<d.length;S++)M+=d[S];const b=f.morphTargetsRelative?1:1-M;p.getUniforms().setValue(c,"morphTargetBaseInfluence",b),p.getUniforms().setValue(c,"morphTargetInfluences",d)}p.getUniforms().setValue(c,"morphTargetsTexture",v.texture,n),p.getUniforms().setValue(c,"morphTargetsTextureSize",v.size)}return{update:o}}function lR(c,t,n,a){let r=new WeakMap;function o(p){const d=a.render.frame,g=p.geometry,_=t.get(p,g);if(r.get(_)!==d&&(t.update(_),r.set(_,d)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),r.get(p)!==d&&(n.update(p.instanceMatrix,c.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,c.ARRAY_BUFFER),r.set(p,d))),p.isSkinnedMesh){const v=p.skeleton;r.get(v)!==d&&(v.update(),r.set(v,d))}return _}function u(){r=new WeakMap}function f(p){const d=p.target;d.removeEventListener("dispose",f),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:o,dispose:u}}const cR={[yx]:"LINEAR_TONE_MAPPING",[Sx]:"REINHARD_TONE_MAPPING",[Mx]:"CINEON_TONE_MAPPING",[Ex]:"ACES_FILMIC_TONE_MAPPING",[Tx]:"AGX_TONE_MAPPING",[Ax]:"NEUTRAL_TONE_MAPPING",[bx]:"CUSTOM_TONE_MAPPING"};function uR(c,t,n,a,r){const o=new ea(t,n,{type:c,depthBuffer:a,stencilBuffer:r}),u=new ea(t,n,{type:Ia,depthBuffer:!1,stencilBuffer:!1}),f=new Ga;f.setAttribute("position",new Fa([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new Fa([0,2,0,0,2,0],2));const p=new $1({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Hi(f,p),g=new Ou(-1,1,1,-1,0,1);let _=null,v=null,y=!1,M,b=null,S=[],x=!1;this.setSize=function(T,R){o.setSize(T,R),u.setSize(T,R);for(let D=0;D<S.length;D++){const L=S[D];L.setSize&&L.setSize(T,R)}},this.setEffects=function(T){S=T,x=S.length>0&&S[0].isRenderPass===!0;const R=o.width,D=o.height;for(let L=0;L<S.length;L++){const P=S[L];P.setSize&&P.setSize(R,D)}},this.begin=function(T,R){if(y||T.toneMapping===Ii&&S.length===0)return!1;if(b=R,R!==null){const D=R.width,L=R.height;(o.width!==D||o.height!==L)&&this.setSize(D,L)}return x===!1&&T.setRenderTarget(o),M=T.toneMapping,T.toneMapping=Ii,!0},this.hasRenderPass=function(){return x},this.end=function(T,R){T.toneMapping=M,y=!0;let D=o,L=u;for(let P=0;P<S.length;P++){const B=S[P];if(B.enabled!==!1&&(B.render(T,L,D,R),B.needsSwap!==!1)){const W=D;D=L,L=W}}if(_!==T.outputColorSpace||v!==T.toneMapping){_=T.outputColorSpace,v=T.toneMapping,p.defines={},Ce.getTransfer(_)===qe&&(p.defines.SRGB_TRANSFER="");const P=cR[v];P&&(p.defines[P]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=D.texture,T.setRenderTarget(b),T.render(d,g),b=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){o.dispose(),u.dispose(),f.dispose(),p.dispose()}}const Kx=new Hn,wp=new Ul(1,1),Qx=new Bx,Jx=new C1,$x=new Xx,G_=[],V_=[],k_=new Float32Array(16),q_=new Float32Array(9),X_=new Float32Array(4);function xo(c,t,n){const a=c[0];if(a<=0||a>0)return c;const r=t*n;let o=G_[r];if(o===void 0&&(o=new Float32Array(r),G_[r]=o),t!==0){a.toArray(o,0);for(let u=1,f=0;u!==t;++u)f+=n,c[u].toArray(o,f)}return o}function yn(c,t){if(c.length!==t.length)return!1;for(let n=0,a=c.length;n<a;n++)if(c[n]!==t[n])return!1;return!0}function Sn(c,t){for(let n=0,a=t.length;n<a;n++)c[n]=t[n]}function Pu(c,t){let n=V_[t];n===void 0&&(n=new Int32Array(t),V_[t]=n);for(let a=0;a!==t;++a)n[a]=c.allocateTextureUnit();return n}function fR(c,t){const n=this.cache;n[0]!==t&&(c.uniform1f(this.addr,t),n[0]=t)}function hR(c,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(c.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(yn(n,t))return;c.uniform2fv(this.addr,t),Sn(n,t)}}function dR(c,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(c.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(c.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(yn(n,t))return;c.uniform3fv(this.addr,t),Sn(n,t)}}function pR(c,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(c.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(yn(n,t))return;c.uniform4fv(this.addr,t),Sn(n,t)}}function mR(c,t){const n=this.cache,a=t.elements;if(a===void 0){if(yn(n,t))return;c.uniformMatrix2fv(this.addr,!1,t),Sn(n,t)}else{if(yn(n,a))return;X_.set(a),c.uniformMatrix2fv(this.addr,!1,X_),Sn(n,a)}}function gR(c,t){const n=this.cache,a=t.elements;if(a===void 0){if(yn(n,t))return;c.uniformMatrix3fv(this.addr,!1,t),Sn(n,t)}else{if(yn(n,a))return;q_.set(a),c.uniformMatrix3fv(this.addr,!1,q_),Sn(n,a)}}function vR(c,t){const n=this.cache,a=t.elements;if(a===void 0){if(yn(n,t))return;c.uniformMatrix4fv(this.addr,!1,t),Sn(n,t)}else{if(yn(n,a))return;k_.set(a),c.uniformMatrix4fv(this.addr,!1,k_),Sn(n,a)}}function _R(c,t){const n=this.cache;n[0]!==t&&(c.uniform1i(this.addr,t),n[0]=t)}function xR(c,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(c.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(yn(n,t))return;c.uniform2iv(this.addr,t),Sn(n,t)}}function yR(c,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(c.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(yn(n,t))return;c.uniform3iv(this.addr,t),Sn(n,t)}}function SR(c,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(c.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(yn(n,t))return;c.uniform4iv(this.addr,t),Sn(n,t)}}function MR(c,t){const n=this.cache;n[0]!==t&&(c.uniform1ui(this.addr,t),n[0]=t)}function ER(c,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(c.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(yn(n,t))return;c.uniform2uiv(this.addr,t),Sn(n,t)}}function bR(c,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(c.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(yn(n,t))return;c.uniform3uiv(this.addr,t),Sn(n,t)}}function TR(c,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(c.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(yn(n,t))return;c.uniform4uiv(this.addr,t),Sn(n,t)}}function AR(c,t,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(c.uniform1i(this.addr,r),a[0]=r);let o;this.type===c.SAMPLER_2D_SHADOW?(wp.compareFunction=n.isReversedDepthBuffer()?Gp:Hp,o=wp):o=Kx,n.setTexture2D(t||o,r)}function wR(c,t,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(c.uniform1i(this.addr,r),a[0]=r),n.setTexture3D(t||Jx,r)}function RR(c,t,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(c.uniform1i(this.addr,r),a[0]=r),n.setTextureCube(t||$x,r)}function CR(c,t,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(c.uniform1i(this.addr,r),a[0]=r),n.setTexture2DArray(t||Qx,r)}function DR(c){switch(c){case 5126:return fR;case 35664:return hR;case 35665:return dR;case 35666:return pR;case 35674:return mR;case 35675:return gR;case 35676:return vR;case 5124:case 35670:return _R;case 35667:case 35671:return xR;case 35668:case 35672:return yR;case 35669:case 35673:return SR;case 5125:return MR;case 36294:return ER;case 36295:return bR;case 36296:return TR;case 35678:case 36198:case 36298:case 36306:case 35682:return AR;case 35679:case 36299:case 36307:return wR;case 35680:case 36300:case 36308:case 36293:return RR;case 36289:case 36303:case 36311:case 36292:return CR}}function NR(c,t){c.uniform1fv(this.addr,t)}function UR(c,t){const n=xo(t,this.size,2);c.uniform2fv(this.addr,n)}function LR(c,t){const n=xo(t,this.size,3);c.uniform3fv(this.addr,n)}function OR(c,t){const n=xo(t,this.size,4);c.uniform4fv(this.addr,n)}function zR(c,t){const n=xo(t,this.size,4);c.uniformMatrix2fv(this.addr,!1,n)}function PR(c,t){const n=xo(t,this.size,9);c.uniformMatrix3fv(this.addr,!1,n)}function BR(c,t){const n=xo(t,this.size,16);c.uniformMatrix4fv(this.addr,!1,n)}function FR(c,t){c.uniform1iv(this.addr,t)}function IR(c,t){c.uniform2iv(this.addr,t)}function HR(c,t){c.uniform3iv(this.addr,t)}function GR(c,t){c.uniform4iv(this.addr,t)}function VR(c,t){c.uniform1uiv(this.addr,t)}function kR(c,t){c.uniform2uiv(this.addr,t)}function qR(c,t){c.uniform3uiv(this.addr,t)}function XR(c,t){c.uniform4uiv(this.addr,t)}function WR(c,t,n){const a=this.cache,r=t.length,o=Pu(n,r);yn(a,o)||(c.uniform1iv(this.addr,o),Sn(a,o));let u;this.type===c.SAMPLER_2D_SHADOW?u=wp:u=Kx;for(let f=0;f!==r;++f)n.setTexture2D(t[f]||u,o[f])}function YR(c,t,n){const a=this.cache,r=t.length,o=Pu(n,r);yn(a,o)||(c.uniform1iv(this.addr,o),Sn(a,o));for(let u=0;u!==r;++u)n.setTexture3D(t[u]||Jx,o[u])}function jR(c,t,n){const a=this.cache,r=t.length,o=Pu(n,r);yn(a,o)||(c.uniform1iv(this.addr,o),Sn(a,o));for(let u=0;u!==r;++u)n.setTextureCube(t[u]||$x,o[u])}function ZR(c,t,n){const a=this.cache,r=t.length,o=Pu(n,r);yn(a,o)||(c.uniform1iv(this.addr,o),Sn(a,o));for(let u=0;u!==r;++u)n.setTexture2DArray(t[u]||Qx,o[u])}function KR(c){switch(c){case 5126:return NR;case 35664:return UR;case 35665:return LR;case 35666:return OR;case 35674:return zR;case 35675:return PR;case 35676:return BR;case 5124:case 35670:return FR;case 35667:case 35671:return IR;case 35668:case 35672:return HR;case 35669:case 35673:return GR;case 5125:return VR;case 36294:return kR;case 36295:return qR;case 36296:return XR;case 35678:case 36198:case 36298:case 36306:case 35682:return WR;case 35679:case 36299:case 36307:return YR;case 35680:case 36300:case 36308:case 36293:return jR;case 36289:case 36303:case 36311:case 36292:return ZR}}class QR{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.setValue=DR(n.type)}}class JR{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=KR(n.type)}}class $R{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,a){const r=this.seq;for(let o=0,u=r.length;o!==u;++o){const f=r[o];f.setValue(t,n[f.id],a)}}}const Cd=/(\w+)(\])?(\[|\.)?/g;function W_(c,t){c.seq.push(t),c.map[t.id]=t}function tC(c,t,n){const a=c.name,r=a.length;for(Cd.lastIndex=0;;){const o=Cd.exec(a),u=Cd.lastIndex;let f=o[1];const p=o[2]==="]",d=o[3];if(p&&(f=f|0),d===void 0||d==="["&&u+2===r){W_(n,d===void 0?new QR(f,c,t):new JR(f,c,t));break}else{let _=n.map[f];_===void 0&&(_=new $R(f),W_(n,_)),n=_}}}class wu{constructor(t,n){this.seq=[],this.map={};const a=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let u=0;u<a;++u){const f=t.getActiveUniform(n,u),p=t.getUniformLocation(n,f.name);tC(f,p,this)}const r=[],o=[];for(const u of this.seq)u.type===t.SAMPLER_2D_SHADOW||u.type===t.SAMPLER_CUBE_SHADOW||u.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(u):o.push(u);r.length>0&&(this.seq=r.concat(o))}setValue(t,n,a,r){const o=this.map[n];o!==void 0&&o.setValue(t,a,r)}setOptional(t,n,a){const r=n[a];r!==void 0&&this.setValue(t,a,r)}static upload(t,n,a,r){for(let o=0,u=n.length;o!==u;++o){const f=n[o],p=a[f.id];p.needsUpdate!==!1&&f.setValue(t,p.value,r)}}static seqWithValue(t,n){const a=[];for(let r=0,o=t.length;r!==o;++r){const u=t[r];u.id in n&&a.push(u)}return a}}function Y_(c,t,n){const a=c.createShader(t);return c.shaderSource(a,n),c.compileShader(a),a}const eC=37297;let nC=0;function iC(c,t){const n=c.split(`
`),a=[],r=Math.max(t-6,0),o=Math.min(t+6,n.length);for(let u=r;u<o;u++){const f=u+1;a.push(`${f===t?">":" "} ${f}: ${n[u]}`)}return a.join(`
`)}const j_=new ge;function aC(c){Ce._getMatrix(j_,Ce.workingColorSpace,c);const t=`mat3( ${j_.elements.map(n=>n.toFixed(4))} )`;switch(Ce.getTransfer(c)){case Du:return[t,"LinearTransferOETF"];case qe:return[t,"sRGBTransferOETF"];default:return he("WebGLProgram: Unsupported color space: ",c),[t,"LinearTransferOETF"]}}function Z_(c,t,n){const a=c.getShaderParameter(t,c.COMPILE_STATUS),o=(c.getShaderInfoLog(t)||"").trim();if(a&&o==="")return"";const u=/ERROR: 0:(\d+)/.exec(o);if(u){const f=parseInt(u[1]);return n.toUpperCase()+`

`+o+`

`+iC(c.getShaderSource(t),f)}else return o}function sC(c,t){const n=aC(t);return[`vec4 ${c}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const rC={[yx]:"Linear",[Sx]:"Reinhard",[Mx]:"Cineon",[Ex]:"ACESFilmic",[Tx]:"AgX",[Ax]:"Neutral",[bx]:"Custom"};function oC(c,t){const n=rC[t];return n===void 0?(he("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+c+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+c+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Su=new lt;function lC(){Ce.getLuminanceCoefficients(Su);const c=Su.x.toFixed(4),t=Su.y.toFixed(4),n=Su.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${c}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cC(c){return[c.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",c.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wl).join(`
`)}function uC(c){const t=[];for(const n in c){const a=c[n];a!==!1&&t.push("#define "+n+" "+a)}return t.join(`
`)}function fC(c,t){const n={},a=c.getProgramParameter(t,c.ACTIVE_ATTRIBUTES);for(let r=0;r<a;r++){const o=c.getActiveAttrib(t,r),u=o.name;let f=1;o.type===c.FLOAT_MAT2&&(f=2),o.type===c.FLOAT_MAT3&&(f=3),o.type===c.FLOAT_MAT4&&(f=4),n[u]={type:o.type,location:c.getAttribLocation(t,u),locationSize:f}}return n}function wl(c){return c!==""}function K_(c,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return c.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Q_(c,t){return c.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const hC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rp(c){return c.replace(hC,pC)}const dC=new Map;function pC(c,t){let n=_e[t];if(n===void 0){const a=dC.get(t);if(a!==void 0)n=_e[a],he('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return Rp(n)}const mC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function J_(c){return c.replace(mC,gC)}function gC(c,t,n,a){let r="";for(let o=parseInt(t);o<parseInt(n);o++)r+=a.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function $_(c){let t=`precision ${c.precision} float;
	precision ${c.precision} int;
	precision ${c.precision} sampler2D;
	precision ${c.precision} samplerCube;
	precision ${c.precision} sampler3D;
	precision ${c.precision} sampler2DArray;
	precision ${c.precision} sampler2DShadow;
	precision ${c.precision} samplerCubeShadow;
	precision ${c.precision} sampler2DArrayShadow;
	precision ${c.precision} isampler2D;
	precision ${c.precision} isampler3D;
	precision ${c.precision} isamplerCube;
	precision ${c.precision} isampler2DArray;
	precision ${c.precision} usampler2D;
	precision ${c.precision} usampler3D;
	precision ${c.precision} usamplerCube;
	precision ${c.precision} usampler2DArray;
	`;return c.precision==="highp"?t+=`
#define HIGH_PRECISION`:c.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:c.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const vC={[Mu]:"SHADOWMAP_TYPE_PCF",[Al]:"SHADOWMAP_TYPE_VSM"};function _C(c){return vC[c.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const xC={[rr]:"ENVMAP_TYPE_CUBE",[ho]:"ENVMAP_TYPE_CUBE",[Lu]:"ENVMAP_TYPE_CUBE_UV"};function yC(c){return c.envMap===!1?"ENVMAP_TYPE_CUBE":xC[c.envMapMode]||"ENVMAP_TYPE_CUBE"}const SC={[ho]:"ENVMAP_MODE_REFRACTION"};function MC(c){return c.envMap===!1?"ENVMAP_MODE_REFLECTION":SC[c.envMapMode]||"ENVMAP_MODE_REFLECTION"}const EC={[xx]:"ENVMAP_BLENDING_MULTIPLY",[u1]:"ENVMAP_BLENDING_MIX",[f1]:"ENVMAP_BLENDING_ADD"};function bC(c){return c.envMap===!1?"ENVMAP_BLENDING_NONE":EC[c.combine]||"ENVMAP_BLENDING_NONE"}function TC(c){const t=c.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function AC(c,t,n,a){const r=c.getContext(),o=n.defines;let u=n.vertexShader,f=n.fragmentShader;const p=_C(n),d=yC(n),g=MC(n),_=bC(n),v=TC(n),y=cC(n),M=uC(o),b=r.createProgram();let S,x,T=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(wl).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(wl).join(`
`),x.length>0&&(x+=`
`)):(S=[$_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wl).join(`
`),x=[$_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ii?"#define TONE_MAPPING":"",n.toneMapping!==Ii?_e.tonemapping_pars_fragment:"",n.toneMapping!==Ii?oC("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",_e.colorspace_pars_fragment,sC("linearToOutputTexel",n.outputColorSpace),lC(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(wl).join(`
`)),u=Rp(u),u=K_(u,n),u=Q_(u,n),f=Rp(f),f=K_(f,n),f=Q_(f,n),u=J_(u),f=J_(f),n.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",n.glslVersion===c_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===c_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const R=T+S+u,D=T+x+f,L=Y_(r,r.VERTEX_SHADER,R),P=Y_(r,r.FRAGMENT_SHADER,D);r.attachShader(b,L),r.attachShader(b,P),n.index0AttributeName!==void 0?r.bindAttribLocation(b,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function B(G){if(c.debug.checkShaderErrors){const $=r.getProgramInfoLog(b)||"",V=r.getShaderInfoLog(L)||"",Q=r.getShaderInfoLog(P)||"",j=$.trim(),z=V.trim(),H=Q.trim();let Z=!0,ct=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(Z=!1,typeof c.debug.onShaderError=="function")c.debug.onShaderError(r,b,L,P);else{const vt=Z_(r,L,"vertex"),F=Z_(r,P,"fragment");Re("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+j+`
`+vt+`
`+F)}else j!==""?he("WebGLProgram: Program Info Log:",j):(z===""||H==="")&&(ct=!1);ct&&(G.diagnostics={runnable:Z,programLog:j,vertexShader:{log:z,prefix:S},fragmentShader:{log:H,prefix:x}})}r.deleteShader(L),r.deleteShader(P),W=new wu(r,b),w=fC(r,b)}let W;this.getUniforms=function(){return W===void 0&&B(this),W};let w;this.getAttributes=function(){return w===void 0&&B(this),w};let O=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=r.getProgramParameter(b,eC)),O},this.destroy=function(){a.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=nC++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=L,this.fragmentShader=P,this}let wC=0;class RC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,a=t.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(a),u=this._getShaderCacheForMaterial(t);return u.has(r)===!1&&(u.add(r),r.usedTimes++),u.has(o)===!1&&(u.add(o),o.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let a=n.get(t);return a===void 0&&(a=new Set,n.set(t,a)),a}_getShaderStage(t){const n=this.shaderCache;let a=n.get(t);return a===void 0&&(a=new CC(t),n.set(t,a)),a}}class CC{constructor(t){this.id=wC++,this.code=t,this.usedTimes=0}}function DC(c,t,n,a,r,o,u){const f=new qp,p=new RC,d=new Set,g=[],_=new Map,v=r.logarithmicDepthBuffer;let y=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(w){return d.add(w),w===0?"uv":`uv${w}`}function S(w,O,G,$,V){const Q=$.fog,j=V.geometry,z=w.isMeshStandardMaterial?$.environment:null,H=(w.isMeshStandardMaterial?n:t).get(w.envMap||z),Z=H&&H.mapping===Lu?H.image.height:null,ct=M[w.type];w.precision!==null&&(y=r.getMaxPrecision(w.precision),y!==w.precision&&he("WebGLProgram.getParameters:",w.precision,"not supported, using",y,"instead."));const vt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,F=vt!==void 0?vt.length:0;let Y=0;j.morphAttributes.position!==void 0&&(Y=1),j.morphAttributes.normal!==void 0&&(Y=2),j.morphAttributes.color!==void 0&&(Y=3);let mt,bt,It,nt;if(ct){const we=Qi[ct];mt=we.vertexShader,bt=we.fragmentShader}else mt=w.vertexShader,bt=w.fragmentShader,p.update(w),It=p.getVertexShaderID(w),nt=p.getFragmentShaderID(w);const ft=c.getRenderTarget(),Ct=c.state.buffers.depth.getReversed(),kt=V.isInstancedMesh===!0,Gt=V.isBatchedMesh===!0,pe=!!w.map,Qe=!!w.matcap,oe=!!H,ue=!!w.aoMap,Ae=!!w.lightMap,le=!!w.bumpMap,Je=!!w.normalMap,X=!!w.displacementMap,je=!!w.emissiveMap,ve=!!w.metalnessMap,Se=!!w.roughnessMap,jt=w.anisotropy>0,I=w.clearcoat>0,A=w.dispersion>0,J=w.iridescence>0,xt=w.sheen>0,Tt=w.transmission>0,pt=jt&&!!w.anisotropyMap,Zt=I&&!!w.clearcoatMap,Lt=I&&!!w.clearcoatNormalMap,qt=I&&!!w.clearcoatRoughnessMap,ie=J&&!!w.iridescenceMap,ht=J&&!!w.iridescenceThicknessMap,gt=xt&&!!w.sheenColorMap,Nt=xt&&!!w.sheenRoughnessMap,wt=!!w.specularMap,Et=!!w.specularColorMap,$t=!!w.specularIntensityMap,q=Tt&&!!w.transmissionMap,Ut=Tt&&!!w.thicknessMap,Rt=!!w.gradientMap,Ot=!!w.alphaMap,At=w.alphaTest>0,yt=!!w.alphaHash,Dt=!!w.extensions;let ae=Ii;w.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(ae=c.toneMapping);const He={shaderID:ct,shaderType:w.type,shaderName:w.name,vertexShader:mt,fragmentShader:bt,defines:w.defines,customVertexShaderID:It,customFragmentShaderID:nt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:y,batching:Gt,batchingColor:Gt&&V._colorsTexture!==null,instancing:kt,instancingColor:kt&&V.instanceColor!==null,instancingMorph:kt&&V.morphTexture!==null,outputColorSpace:ft===null?c.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:mo,alphaToCoverage:!!w.alphaToCoverage,map:pe,matcap:Qe,envMap:oe,envMapMode:oe&&H.mapping,envMapCubeUVHeight:Z,aoMap:ue,lightMap:Ae,bumpMap:le,normalMap:Je,displacementMap:X,emissiveMap:je,normalMapObjectSpace:Je&&w.normalMapType===p1,normalMapTangentSpace:Je&&w.normalMapType===zx,metalnessMap:ve,roughnessMap:Se,anisotropy:jt,anisotropyMap:pt,clearcoat:I,clearcoatMap:Zt,clearcoatNormalMap:Lt,clearcoatRoughnessMap:qt,dispersion:A,iridescence:J,iridescenceMap:ie,iridescenceThicknessMap:ht,sheen:xt,sheenColorMap:gt,sheenRoughnessMap:Nt,specularMap:wt,specularColorMap:Et,specularIntensityMap:$t,transmission:Tt,transmissionMap:q,thicknessMap:Ut,gradientMap:Rt,opaque:w.transparent===!1&&w.blending===lo&&w.alphaToCoverage===!1,alphaMap:Ot,alphaTest:At,alphaHash:yt,combine:w.combine,mapUv:pe&&b(w.map.channel),aoMapUv:ue&&b(w.aoMap.channel),lightMapUv:Ae&&b(w.lightMap.channel),bumpMapUv:le&&b(w.bumpMap.channel),normalMapUv:Je&&b(w.normalMap.channel),displacementMapUv:X&&b(w.displacementMap.channel),emissiveMapUv:je&&b(w.emissiveMap.channel),metalnessMapUv:ve&&b(w.metalnessMap.channel),roughnessMapUv:Se&&b(w.roughnessMap.channel),anisotropyMapUv:pt&&b(w.anisotropyMap.channel),clearcoatMapUv:Zt&&b(w.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&b(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:qt&&b(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&b(w.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&b(w.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&b(w.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&b(w.sheenRoughnessMap.channel),specularMapUv:wt&&b(w.specularMap.channel),specularColorMapUv:Et&&b(w.specularColorMap.channel),specularIntensityMapUv:$t&&b(w.specularIntensityMap.channel),transmissionMapUv:q&&b(w.transmissionMap.channel),thicknessMapUv:Ut&&b(w.thicknessMap.channel),alphaMapUv:Ot&&b(w.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Je||jt),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!j.attributes.uv&&(pe||Ot),fog:!!Q,useFog:w.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ct,skinning:V.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:Y,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:w.dithering,shadowMapEnabled:c.shadowMap.enabled&&G.length>0,shadowMapType:c.shadowMap.type,toneMapping:ae,decodeVideoTexture:pe&&w.map.isVideoTexture===!0&&Ce.getTransfer(w.map.colorSpace)===qe,decodeVideoTextureEmissive:je&&w.emissiveMap.isVideoTexture===!0&&Ce.getTransfer(w.emissiveMap.colorSpace)===qe,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Oa,flipSided:w.side===ti,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Dt&&w.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&w.extensions.multiDraw===!0||Gt)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return He.vertexUv1s=d.has(1),He.vertexUv2s=d.has(2),He.vertexUv3s=d.has(3),d.clear(),He}function x(w){const O=[];if(w.shaderID?O.push(w.shaderID):(O.push(w.customVertexShaderID),O.push(w.customFragmentShaderID)),w.defines!==void 0)for(const G in w.defines)O.push(G),O.push(w.defines[G]);return w.isRawShaderMaterial===!1&&(T(O,w),R(O,w),O.push(c.outputColorSpace)),O.push(w.customProgramCacheKey),O.join()}function T(w,O){w.push(O.precision),w.push(O.outputColorSpace),w.push(O.envMapMode),w.push(O.envMapCubeUVHeight),w.push(O.mapUv),w.push(O.alphaMapUv),w.push(O.lightMapUv),w.push(O.aoMapUv),w.push(O.bumpMapUv),w.push(O.normalMapUv),w.push(O.displacementMapUv),w.push(O.emissiveMapUv),w.push(O.metalnessMapUv),w.push(O.roughnessMapUv),w.push(O.anisotropyMapUv),w.push(O.clearcoatMapUv),w.push(O.clearcoatNormalMapUv),w.push(O.clearcoatRoughnessMapUv),w.push(O.iridescenceMapUv),w.push(O.iridescenceThicknessMapUv),w.push(O.sheenColorMapUv),w.push(O.sheenRoughnessMapUv),w.push(O.specularMapUv),w.push(O.specularColorMapUv),w.push(O.specularIntensityMapUv),w.push(O.transmissionMapUv),w.push(O.thicknessMapUv),w.push(O.combine),w.push(O.fogExp2),w.push(O.sizeAttenuation),w.push(O.morphTargetsCount),w.push(O.morphAttributeCount),w.push(O.numDirLights),w.push(O.numPointLights),w.push(O.numSpotLights),w.push(O.numSpotLightMaps),w.push(O.numHemiLights),w.push(O.numRectAreaLights),w.push(O.numDirLightShadows),w.push(O.numPointLightShadows),w.push(O.numSpotLightShadows),w.push(O.numSpotLightShadowsWithMaps),w.push(O.numLightProbes),w.push(O.shadowMapType),w.push(O.toneMapping),w.push(O.numClippingPlanes),w.push(O.numClipIntersection),w.push(O.depthPacking)}function R(w,O){f.disableAll(),O.instancing&&f.enable(0),O.instancingColor&&f.enable(1),O.instancingMorph&&f.enable(2),O.matcap&&f.enable(3),O.envMap&&f.enable(4),O.normalMapObjectSpace&&f.enable(5),O.normalMapTangentSpace&&f.enable(6),O.clearcoat&&f.enable(7),O.iridescence&&f.enable(8),O.alphaTest&&f.enable(9),O.vertexColors&&f.enable(10),O.vertexAlphas&&f.enable(11),O.vertexUv1s&&f.enable(12),O.vertexUv2s&&f.enable(13),O.vertexUv3s&&f.enable(14),O.vertexTangents&&f.enable(15),O.anisotropy&&f.enable(16),O.alphaHash&&f.enable(17),O.batching&&f.enable(18),O.dispersion&&f.enable(19),O.batchingColor&&f.enable(20),O.gradientMap&&f.enable(21),w.push(f.mask),f.disableAll(),O.fog&&f.enable(0),O.useFog&&f.enable(1),O.flatShading&&f.enable(2),O.logarithmicDepthBuffer&&f.enable(3),O.reversedDepthBuffer&&f.enable(4),O.skinning&&f.enable(5),O.morphTargets&&f.enable(6),O.morphNormals&&f.enable(7),O.morphColors&&f.enable(8),O.premultipliedAlpha&&f.enable(9),O.shadowMapEnabled&&f.enable(10),O.doubleSided&&f.enable(11),O.flipSided&&f.enable(12),O.useDepthPacking&&f.enable(13),O.dithering&&f.enable(14),O.transmission&&f.enable(15),O.sheen&&f.enable(16),O.opaque&&f.enable(17),O.pointsUvs&&f.enable(18),O.decodeVideoTexture&&f.enable(19),O.decodeVideoTextureEmissive&&f.enable(20),O.alphaToCoverage&&f.enable(21),w.push(f.mask)}function D(w){const O=M[w.type];let G;if(O){const $=Qi[O];G=V1.clone($.uniforms)}else G=w.uniforms;return G}function L(w,O){let G=_.get(O);return G!==void 0?++G.usedTimes:(G=new AC(c,O,w,o),g.push(G),_.set(O,G)),G}function P(w){if(--w.usedTimes===0){const O=g.indexOf(w);g[O]=g[g.length-1],g.pop(),_.delete(w.cacheKey),w.destroy()}}function B(w){p.remove(w)}function W(){p.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:D,acquireProgram:L,releaseProgram:P,releaseShaderCache:B,programs:g,dispose:W}}function NC(){let c=new WeakMap;function t(u){return c.has(u)}function n(u){let f=c.get(u);return f===void 0&&(f={},c.set(u,f)),f}function a(u){c.delete(u)}function r(u,f,p){c.get(u)[f]=p}function o(){c=new WeakMap}return{has:t,get:n,remove:a,update:r,dispose:o}}function UC(c,t){return c.groupOrder!==t.groupOrder?c.groupOrder-t.groupOrder:c.renderOrder!==t.renderOrder?c.renderOrder-t.renderOrder:c.material.id!==t.material.id?c.material.id-t.material.id:c.z!==t.z?c.z-t.z:c.id-t.id}function tx(c,t){return c.groupOrder!==t.groupOrder?c.groupOrder-t.groupOrder:c.renderOrder!==t.renderOrder?c.renderOrder-t.renderOrder:c.z!==t.z?t.z-c.z:c.id-t.id}function ex(){const c=[];let t=0;const n=[],a=[],r=[];function o(){t=0,n.length=0,a.length=0,r.length=0}function u(_,v,y,M,b,S){let x=c[t];return x===void 0?(x={id:_.id,object:_,geometry:v,material:y,groupOrder:M,renderOrder:_.renderOrder,z:b,group:S},c[t]=x):(x.id=_.id,x.object=_,x.geometry=v,x.material=y,x.groupOrder=M,x.renderOrder=_.renderOrder,x.z=b,x.group=S),t++,x}function f(_,v,y,M,b,S){const x=u(_,v,y,M,b,S);y.transmission>0?a.push(x):y.transparent===!0?r.push(x):n.push(x)}function p(_,v,y,M,b,S){const x=u(_,v,y,M,b,S);y.transmission>0?a.unshift(x):y.transparent===!0?r.unshift(x):n.unshift(x)}function d(_,v){n.length>1&&n.sort(_||UC),a.length>1&&a.sort(v||tx),r.length>1&&r.sort(v||tx)}function g(){for(let _=t,v=c.length;_<v;_++){const y=c[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:a,transparent:r,init:o,push:f,unshift:p,finish:g,sort:d}}function LC(){let c=new WeakMap;function t(a,r){const o=c.get(a);let u;return o===void 0?(u=new ex,c.set(a,[u])):r>=o.length?(u=new ex,o.push(u)):u=o[r],u}function n(){c=new WeakMap}return{get:t,dispose:n}}function OC(){const c={};return{get:function(t){if(c[t.id]!==void 0)return c[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new lt,color:new Le};break;case"SpotLight":n={position:new lt,direction:new lt,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new lt,color:new Le,distance:0,decay:0};break;case"HemisphereLight":n={direction:new lt,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":n={color:new Le,position:new lt,halfWidth:new lt,halfHeight:new lt};break}return c[t.id]=n,n}}}function zC(){const c={};return{get:function(t){if(c[t.id]!==void 0)return c[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return c[t.id]=n,n}}}let PC=0;function BC(c,t){return(t.castShadow?2:0)-(c.castShadow?2:0)+(t.map?1:0)-(c.map?1:0)}function FC(c){const t=new OC,n=zC(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)a.probe.push(new lt);const r=new lt,o=new sn,u=new sn;function f(d){let g=0,_=0,v=0;for(let w=0;w<9;w++)a.probe[w].set(0,0,0);let y=0,M=0,b=0,S=0,x=0,T=0,R=0,D=0,L=0,P=0,B=0;d.sort(BC);for(let w=0,O=d.length;w<O;w++){const G=d[w],$=G.color,V=G.intensity,Q=G.distance;let j=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===po?j=G.shadow.map.texture:j=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)g+=$.r*V,_+=$.g*V,v+=$.b*V;else if(G.isLightProbe){for(let z=0;z<9;z++)a.probe[z].addScaledVector(G.sh.coefficients[z],V);B++}else if(G.isDirectionalLight){const z=t.get(G);if(z.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const H=G.shadow,Z=n.get(G);Z.shadowIntensity=H.intensity,Z.shadowBias=H.bias,Z.shadowNormalBias=H.normalBias,Z.shadowRadius=H.radius,Z.shadowMapSize=H.mapSize,a.directionalShadow[y]=Z,a.directionalShadowMap[y]=j,a.directionalShadowMatrix[y]=G.shadow.matrix,T++}a.directional[y]=z,y++}else if(G.isSpotLight){const z=t.get(G);z.position.setFromMatrixPosition(G.matrixWorld),z.color.copy($).multiplyScalar(V),z.distance=Q,z.coneCos=Math.cos(G.angle),z.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),z.decay=G.decay,a.spot[b]=z;const H=G.shadow;if(G.map&&(a.spotLightMap[L]=G.map,L++,H.updateMatrices(G),G.castShadow&&P++),a.spotLightMatrix[b]=H.matrix,G.castShadow){const Z=n.get(G);Z.shadowIntensity=H.intensity,Z.shadowBias=H.bias,Z.shadowNormalBias=H.normalBias,Z.shadowRadius=H.radius,Z.shadowMapSize=H.mapSize,a.spotShadow[b]=Z,a.spotShadowMap[b]=j,D++}b++}else if(G.isRectAreaLight){const z=t.get(G);z.color.copy($).multiplyScalar(V),z.halfWidth.set(G.width*.5,0,0),z.halfHeight.set(0,G.height*.5,0),a.rectArea[S]=z,S++}else if(G.isPointLight){const z=t.get(G);if(z.color.copy(G.color).multiplyScalar(G.intensity),z.distance=G.distance,z.decay=G.decay,G.castShadow){const H=G.shadow,Z=n.get(G);Z.shadowIntensity=H.intensity,Z.shadowBias=H.bias,Z.shadowNormalBias=H.normalBias,Z.shadowRadius=H.radius,Z.shadowMapSize=H.mapSize,Z.shadowCameraNear=H.camera.near,Z.shadowCameraFar=H.camera.far,a.pointShadow[M]=Z,a.pointShadowMap[M]=j,a.pointShadowMatrix[M]=G.shadow.matrix,R++}a.point[M]=z,M++}else if(G.isHemisphereLight){const z=t.get(G);z.skyColor.copy(G.color).multiplyScalar(V),z.groundColor.copy(G.groundColor).multiplyScalar(V),a.hemi[x]=z,x++}}S>0&&(c.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Bt.LTC_FLOAT_1,a.rectAreaLTC2=Bt.LTC_FLOAT_2):(a.rectAreaLTC1=Bt.LTC_HALF_1,a.rectAreaLTC2=Bt.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=_,a.ambient[2]=v;const W=a.hash;(W.directionalLength!==y||W.pointLength!==M||W.spotLength!==b||W.rectAreaLength!==S||W.hemiLength!==x||W.numDirectionalShadows!==T||W.numPointShadows!==R||W.numSpotShadows!==D||W.numSpotMaps!==L||W.numLightProbes!==B)&&(a.directional.length=y,a.spot.length=b,a.rectArea.length=S,a.point.length=M,a.hemi.length=x,a.directionalShadow.length=T,a.directionalShadowMap.length=T,a.pointShadow.length=R,a.pointShadowMap.length=R,a.spotShadow.length=D,a.spotShadowMap.length=D,a.directionalShadowMatrix.length=T,a.pointShadowMatrix.length=R,a.spotLightMatrix.length=D+L-P,a.spotLightMap.length=L,a.numSpotLightShadowsWithMaps=P,a.numLightProbes=B,W.directionalLength=y,W.pointLength=M,W.spotLength=b,W.rectAreaLength=S,W.hemiLength=x,W.numDirectionalShadows=T,W.numPointShadows=R,W.numSpotShadows=D,W.numSpotMaps=L,W.numLightProbes=B,a.version=PC++)}function p(d,g){let _=0,v=0,y=0,M=0,b=0;const S=g.matrixWorldInverse;for(let x=0,T=d.length;x<T;x++){const R=d[x];if(R.isDirectionalLight){const D=a.directional[_];D.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),D.direction.sub(r),D.direction.transformDirection(S),_++}else if(R.isSpotLight){const D=a.spot[y];D.position.setFromMatrixPosition(R.matrixWorld),D.position.applyMatrix4(S),D.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),D.direction.sub(r),D.direction.transformDirection(S),y++}else if(R.isRectAreaLight){const D=a.rectArea[M];D.position.setFromMatrixPosition(R.matrixWorld),D.position.applyMatrix4(S),u.identity(),o.copy(R.matrixWorld),o.premultiply(S),u.extractRotation(o),D.halfWidth.set(R.width*.5,0,0),D.halfHeight.set(0,R.height*.5,0),D.halfWidth.applyMatrix4(u),D.halfHeight.applyMatrix4(u),M++}else if(R.isPointLight){const D=a.point[v];D.position.setFromMatrixPosition(R.matrixWorld),D.position.applyMatrix4(S),v++}else if(R.isHemisphereLight){const D=a.hemi[b];D.direction.setFromMatrixPosition(R.matrixWorld),D.direction.transformDirection(S),b++}}}return{setup:f,setupView:p,state:a}}function nx(c){const t=new FC(c),n=[],a=[];function r(g){d.camera=g,n.length=0,a.length=0}function o(g){n.push(g)}function u(g){a.push(g)}function f(){t.setup(n)}function p(g){t.setupView(n,g)}const d={lightsArray:n,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:d,setupLights:f,setupLightsView:p,pushLight:o,pushShadow:u}}function IC(c){let t=new WeakMap;function n(r,o=0){const u=t.get(r);let f;return u===void 0?(f=new nx(c),t.set(r,[f])):o>=u.length?(f=new nx(c),u.push(f)):f=u[o],f}function a(){t=new WeakMap}return{get:n,dispose:a}}const HC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,GC=`uniform sampler2D shadow_pass;
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
}`,VC=[new lt(1,0,0),new lt(-1,0,0),new lt(0,1,0),new lt(0,-1,0),new lt(0,0,1),new lt(0,0,-1)],kC=[new lt(0,-1,0),new lt(0,-1,0),new lt(0,0,1),new lt(0,0,-1),new lt(0,-1,0),new lt(0,-1,0)],ix=new sn,bl=new lt,Dd=new lt;function qC(c,t,n){let a=new Xp;const r=new Oe,o=new Oe,u=new ln,f=new tT,p=new eT,d={},g=n.maxTextureSize,_={[Ts]:ti,[ti]:Ts,[Oa]:Oa},v=new sa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:HC,fragmentShader:GC}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const M=new Ga;M.setAttribute("position",new na(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Hi(M,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mu;let x=this.type;this.render=function(P,B,W){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||P.length===0)return;P.type===_x&&(he("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),P.type=Mu);const w=c.getRenderTarget(),O=c.getActiveCubeFace(),G=c.getActiveMipmapLevel(),$=c.state;$.setBlending(Pa),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const V=x!==this.type;V&&B.traverse(function(Q){Q.material&&(Array.isArray(Q.material)?Q.material.forEach(j=>j.needsUpdate=!0):Q.material.needsUpdate=!0)});for(let Q=0,j=P.length;Q<j;Q++){const z=P[Q],H=z.shadow;if(H===void 0){he("WebGLShadowMap:",z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const Z=H.getFrameExtents();if(r.multiply(Z),o.copy(H.mapSize),(r.x>g||r.y>g)&&(r.x>g&&(o.x=Math.floor(g/Z.x),r.x=o.x*Z.x,H.mapSize.x=o.x),r.y>g&&(o.y=Math.floor(g/Z.y),r.y=o.y*Z.y,H.mapSize.y=o.y)),H.map===null||V===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Al){if(z.isPointLight){he("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new ea(r.x,r.y,{format:po,type:Ia,minFilter:zn,magFilter:zn,generateMipmaps:!1}),H.map.texture.name=z.name+".shadowMap",H.map.depthTexture=new Ul(r.x,r.y,Ji),H.map.depthTexture.name=z.name+".shadowMapDepth",H.map.depthTexture.format=Ha,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=On,H.map.depthTexture.magFilter=On}else{z.isPointLight?(H.map=new Wx(r.x),H.map.depthTexture=new J1(r.x,ia)):(H.map=new ea(r.x,r.y),H.map.depthTexture=new Ul(r.x,r.y,ia)),H.map.depthTexture.name=z.name+".shadowMap",H.map.depthTexture.format=Ha;const vt=c.state.buffers.depth.getReversed();this.type===Mu?(H.map.depthTexture.compareFunction=vt?Gp:Hp,H.map.depthTexture.minFilter=zn,H.map.depthTexture.magFilter=zn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=On,H.map.depthTexture.magFilter=On)}H.camera.updateProjectionMatrix()}const ct=H.map.isWebGLCubeRenderTarget?6:1;for(let vt=0;vt<ct;vt++){if(H.map.isWebGLCubeRenderTarget)c.setRenderTarget(H.map,vt),c.clear();else{vt===0&&(c.setRenderTarget(H.map),c.clear());const F=H.getViewport(vt);u.set(o.x*F.x,o.y*F.y,o.x*F.z,o.y*F.w),$.viewport(u)}if(z.isPointLight){const F=H.camera,Y=H.matrix,mt=z.distance||F.far;mt!==F.far&&(F.far=mt,F.updateProjectionMatrix()),bl.setFromMatrixPosition(z.matrixWorld),F.position.copy(bl),Dd.copy(F.position),Dd.add(VC[vt]),F.up.copy(kC[vt]),F.lookAt(Dd),F.updateMatrixWorld(),Y.makeTranslation(-bl.x,-bl.y,-bl.z),ix.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),H._frustum.setFromProjectionMatrix(ix,F.coordinateSystem,F.reversedDepth)}else H.updateMatrices(z);a=H.getFrustum(),D(B,W,H.camera,z,this.type)}H.isPointLightShadow!==!0&&this.type===Al&&T(H,W),H.needsUpdate=!1}x=this.type,S.needsUpdate=!1,c.setRenderTarget(w,O,G)};function T(P,B){const W=t.update(b);v.defines.VSM_SAMPLES!==P.blurSamples&&(v.defines.VSM_SAMPLES=P.blurSamples,y.defines.VSM_SAMPLES=P.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new ea(r.x,r.y,{format:po,type:Ia})),v.uniforms.shadow_pass.value=P.map.depthTexture,v.uniforms.resolution.value=P.mapSize,v.uniforms.radius.value=P.radius,c.setRenderTarget(P.mapPass),c.clear(),c.renderBufferDirect(B,null,W,v,b,null),y.uniforms.shadow_pass.value=P.mapPass.texture,y.uniforms.resolution.value=P.mapSize,y.uniforms.radius.value=P.radius,c.setRenderTarget(P.map),c.clear(),c.renderBufferDirect(B,null,W,y,b,null)}function R(P,B,W,w){let O=null;const G=W.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(G!==void 0)O=G;else if(O=W.isPointLight===!0?p:f,c.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const $=O.uuid,V=B.uuid;let Q=d[$];Q===void 0&&(Q={},d[$]=Q);let j=Q[V];j===void 0&&(j=O.clone(),Q[V]=j,B.addEventListener("dispose",L)),O=j}if(O.visible=B.visible,O.wireframe=B.wireframe,w===Al?O.side=B.shadowSide!==null?B.shadowSide:B.side:O.side=B.shadowSide!==null?B.shadowSide:_[B.side],O.alphaMap=B.alphaMap,O.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,O.map=B.map,O.clipShadows=B.clipShadows,O.clippingPlanes=B.clippingPlanes,O.clipIntersection=B.clipIntersection,O.displacementMap=B.displacementMap,O.displacementScale=B.displacementScale,O.displacementBias=B.displacementBias,O.wireframeLinewidth=B.wireframeLinewidth,O.linewidth=B.linewidth,W.isPointLight===!0&&O.isMeshDistanceMaterial===!0){const $=c.properties.get(O);$.light=W}return O}function D(P,B,W,w,O){if(P.visible===!1)return;if(P.layers.test(B.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&O===Al)&&(!P.frustumCulled||a.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,P.matrixWorld);const V=t.update(P),Q=P.material;if(Array.isArray(Q)){const j=V.groups;for(let z=0,H=j.length;z<H;z++){const Z=j[z],ct=Q[Z.materialIndex];if(ct&&ct.visible){const vt=R(P,ct,w,O);P.onBeforeShadow(c,P,B,W,V,vt,Z),c.renderBufferDirect(W,null,V,vt,P,Z),P.onAfterShadow(c,P,B,W,V,vt,Z)}}}else if(Q.visible){const j=R(P,Q,w,O);P.onBeforeShadow(c,P,B,W,V,j,null),c.renderBufferDirect(W,null,V,j,P,null),P.onAfterShadow(c,P,B,W,V,j,null)}}const $=P.children;for(let V=0,Q=$.length;V<Q;V++)D($[V],B,W,w,O)}function L(P){P.target.removeEventListener("dispose",L);for(const W in d){const w=d[W],O=P.target.uuid;O in w&&(w[O].dispose(),delete w[O])}}}const XC={[Pd]:Bd,[Fd]:Gd,[Id]:Vd,[fo]:Hd,[Bd]:Pd,[Gd]:Fd,[Vd]:Id,[Hd]:fo};function WC(c,t){function n(){let q=!1;const Ut=new ln;let Rt=null;const Ot=new ln(0,0,0,0);return{setMask:function(At){Rt!==At&&!q&&(c.colorMask(At,At,At,At),Rt=At)},setLocked:function(At){q=At},setClear:function(At,yt,Dt,ae,He){He===!0&&(At*=ae,yt*=ae,Dt*=ae),Ut.set(At,yt,Dt,ae),Ot.equals(Ut)===!1&&(c.clearColor(At,yt,Dt,ae),Ot.copy(Ut))},reset:function(){q=!1,Rt=null,Ot.set(-1,0,0,0)}}}function a(){let q=!1,Ut=!1,Rt=null,Ot=null,At=null;return{setReversed:function(yt){if(Ut!==yt){const Dt=t.get("EXT_clip_control");yt?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT),Ut=yt;const ae=At;At=null,this.setClear(ae)}},getReversed:function(){return Ut},setTest:function(yt){yt?ft(c.DEPTH_TEST):Ct(c.DEPTH_TEST)},setMask:function(yt){Rt!==yt&&!q&&(c.depthMask(yt),Rt=yt)},setFunc:function(yt){if(Ut&&(yt=XC[yt]),Ot!==yt){switch(yt){case Pd:c.depthFunc(c.NEVER);break;case Bd:c.depthFunc(c.ALWAYS);break;case Fd:c.depthFunc(c.LESS);break;case fo:c.depthFunc(c.LEQUAL);break;case Id:c.depthFunc(c.EQUAL);break;case Hd:c.depthFunc(c.GEQUAL);break;case Gd:c.depthFunc(c.GREATER);break;case Vd:c.depthFunc(c.NOTEQUAL);break;default:c.depthFunc(c.LEQUAL)}Ot=yt}},setLocked:function(yt){q=yt},setClear:function(yt){At!==yt&&(Ut&&(yt=1-yt),c.clearDepth(yt),At=yt)},reset:function(){q=!1,Rt=null,Ot=null,At=null,Ut=!1}}}function r(){let q=!1,Ut=null,Rt=null,Ot=null,At=null,yt=null,Dt=null,ae=null,He=null;return{setTest:function(we){q||(we?ft(c.STENCIL_TEST):Ct(c.STENCIL_TEST))},setMask:function(we){Ut!==we&&!q&&(c.stencilMask(we),Ut=we)},setFunc:function(we,Pn,bi){(Rt!==we||Ot!==Pn||At!==bi)&&(c.stencilFunc(we,Pn,bi),Rt=we,Ot=Pn,At=bi)},setOp:function(we,Pn,bi){(yt!==we||Dt!==Pn||ae!==bi)&&(c.stencilOp(we,Pn,bi),yt=we,Dt=Pn,ae=bi)},setLocked:function(we){q=we},setClear:function(we){He!==we&&(c.clearStencil(we),He=we)},reset:function(){q=!1,Ut=null,Rt=null,Ot=null,At=null,yt=null,Dt=null,ae=null,He=null}}}const o=new n,u=new a,f=new r,p=new WeakMap,d=new WeakMap;let g={},_={},v=new WeakMap,y=[],M=null,b=!1,S=null,x=null,T=null,R=null,D=null,L=null,P=null,B=new Le(0,0,0),W=0,w=!1,O=null,G=null,$=null,V=null,Q=null;const j=c.getParameter(c.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,H=0;const Z=c.getParameter(c.VERSION);Z.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(Z)[1]),z=H>=1):Z.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),z=H>=2);let ct=null,vt={};const F=c.getParameter(c.SCISSOR_BOX),Y=c.getParameter(c.VIEWPORT),mt=new ln().fromArray(F),bt=new ln().fromArray(Y);function It(q,Ut,Rt,Ot){const At=new Uint8Array(4),yt=c.createTexture();c.bindTexture(q,yt),c.texParameteri(q,c.TEXTURE_MIN_FILTER,c.NEAREST),c.texParameteri(q,c.TEXTURE_MAG_FILTER,c.NEAREST);for(let Dt=0;Dt<Rt;Dt++)q===c.TEXTURE_3D||q===c.TEXTURE_2D_ARRAY?c.texImage3D(Ut,0,c.RGBA,1,1,Ot,0,c.RGBA,c.UNSIGNED_BYTE,At):c.texImage2D(Ut+Dt,0,c.RGBA,1,1,0,c.RGBA,c.UNSIGNED_BYTE,At);return yt}const nt={};nt[c.TEXTURE_2D]=It(c.TEXTURE_2D,c.TEXTURE_2D,1),nt[c.TEXTURE_CUBE_MAP]=It(c.TEXTURE_CUBE_MAP,c.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[c.TEXTURE_2D_ARRAY]=It(c.TEXTURE_2D_ARRAY,c.TEXTURE_2D_ARRAY,1,1),nt[c.TEXTURE_3D]=It(c.TEXTURE_3D,c.TEXTURE_3D,1,1),o.setClear(0,0,0,1),u.setClear(1),f.setClear(0),ft(c.DEPTH_TEST),u.setFunc(fo),le(!1),Je(i_),ft(c.CULL_FACE),ue(Pa);function ft(q){g[q]!==!0&&(c.enable(q),g[q]=!0)}function Ct(q){g[q]!==!1&&(c.disable(q),g[q]=!1)}function kt(q,Ut){return _[q]!==Ut?(c.bindFramebuffer(q,Ut),_[q]=Ut,q===c.DRAW_FRAMEBUFFER&&(_[c.FRAMEBUFFER]=Ut),q===c.FRAMEBUFFER&&(_[c.DRAW_FRAMEBUFFER]=Ut),!0):!1}function Gt(q,Ut){let Rt=y,Ot=!1;if(q){Rt=v.get(Ut),Rt===void 0&&(Rt=[],v.set(Ut,Rt));const At=q.textures;if(Rt.length!==At.length||Rt[0]!==c.COLOR_ATTACHMENT0){for(let yt=0,Dt=At.length;yt<Dt;yt++)Rt[yt]=c.COLOR_ATTACHMENT0+yt;Rt.length=At.length,Ot=!0}}else Rt[0]!==c.BACK&&(Rt[0]=c.BACK,Ot=!0);Ot&&c.drawBuffers(Rt)}function pe(q){return M!==q?(c.useProgram(q),M=q,!0):!1}const Qe={[nr]:c.FUNC_ADD,[Yb]:c.FUNC_SUBTRACT,[jb]:c.FUNC_REVERSE_SUBTRACT};Qe[Zb]=c.MIN,Qe[Kb]=c.MAX;const oe={[Qb]:c.ZERO,[Jb]:c.ONE,[$b]:c.SRC_COLOR,[Od]:c.SRC_ALPHA,[s1]:c.SRC_ALPHA_SATURATE,[i1]:c.DST_COLOR,[e1]:c.DST_ALPHA,[t1]:c.ONE_MINUS_SRC_COLOR,[zd]:c.ONE_MINUS_SRC_ALPHA,[a1]:c.ONE_MINUS_DST_COLOR,[n1]:c.ONE_MINUS_DST_ALPHA,[r1]:c.CONSTANT_COLOR,[o1]:c.ONE_MINUS_CONSTANT_COLOR,[l1]:c.CONSTANT_ALPHA,[c1]:c.ONE_MINUS_CONSTANT_ALPHA};function ue(q,Ut,Rt,Ot,At,yt,Dt,ae,He,we){if(q===Pa){b===!0&&(Ct(c.BLEND),b=!1);return}if(b===!1&&(ft(c.BLEND),b=!0),q!==Wb){if(q!==S||we!==w){if((x!==nr||D!==nr)&&(c.blendEquation(c.FUNC_ADD),x=nr,D=nr),we)switch(q){case lo:c.blendFuncSeparate(c.ONE,c.ONE_MINUS_SRC_ALPHA,c.ONE,c.ONE_MINUS_SRC_ALPHA);break;case a_:c.blendFunc(c.ONE,c.ONE);break;case s_:c.blendFuncSeparate(c.ZERO,c.ONE_MINUS_SRC_COLOR,c.ZERO,c.ONE);break;case r_:c.blendFuncSeparate(c.DST_COLOR,c.ONE_MINUS_SRC_ALPHA,c.ZERO,c.ONE);break;default:Re("WebGLState: Invalid blending: ",q);break}else switch(q){case lo:c.blendFuncSeparate(c.SRC_ALPHA,c.ONE_MINUS_SRC_ALPHA,c.ONE,c.ONE_MINUS_SRC_ALPHA);break;case a_:c.blendFuncSeparate(c.SRC_ALPHA,c.ONE,c.ONE,c.ONE);break;case s_:Re("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case r_:Re("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Re("WebGLState: Invalid blending: ",q);break}T=null,R=null,L=null,P=null,B.set(0,0,0),W=0,S=q,w=we}return}At=At||Ut,yt=yt||Rt,Dt=Dt||Ot,(Ut!==x||At!==D)&&(c.blendEquationSeparate(Qe[Ut],Qe[At]),x=Ut,D=At),(Rt!==T||Ot!==R||yt!==L||Dt!==P)&&(c.blendFuncSeparate(oe[Rt],oe[Ot],oe[yt],oe[Dt]),T=Rt,R=Ot,L=yt,P=Dt),(ae.equals(B)===!1||He!==W)&&(c.blendColor(ae.r,ae.g,ae.b,He),B.copy(ae),W=He),S=q,w=!1}function Ae(q,Ut){q.side===Oa?Ct(c.CULL_FACE):ft(c.CULL_FACE);let Rt=q.side===ti;Ut&&(Rt=!Rt),le(Rt),q.blending===lo&&q.transparent===!1?ue(Pa):ue(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),u.setFunc(q.depthFunc),u.setTest(q.depthTest),u.setMask(q.depthWrite),o.setMask(q.colorWrite);const Ot=q.stencilWrite;f.setTest(Ot),Ot&&(f.setMask(q.stencilWriteMask),f.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),f.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),je(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?ft(c.SAMPLE_ALPHA_TO_COVERAGE):Ct(c.SAMPLE_ALPHA_TO_COVERAGE)}function le(q){O!==q&&(q?c.frontFace(c.CW):c.frontFace(c.CCW),O=q)}function Je(q){q!==qb?(ft(c.CULL_FACE),q!==G&&(q===i_?c.cullFace(c.BACK):q===Xb?c.cullFace(c.FRONT):c.cullFace(c.FRONT_AND_BACK))):Ct(c.CULL_FACE),G=q}function X(q){q!==$&&(z&&c.lineWidth(q),$=q)}function je(q,Ut,Rt){q?(ft(c.POLYGON_OFFSET_FILL),(V!==Ut||Q!==Rt)&&(c.polygonOffset(Ut,Rt),V=Ut,Q=Rt)):Ct(c.POLYGON_OFFSET_FILL)}function ve(q){q?ft(c.SCISSOR_TEST):Ct(c.SCISSOR_TEST)}function Se(q){q===void 0&&(q=c.TEXTURE0+j-1),ct!==q&&(c.activeTexture(q),ct=q)}function jt(q,Ut,Rt){Rt===void 0&&(ct===null?Rt=c.TEXTURE0+j-1:Rt=ct);let Ot=vt[Rt];Ot===void 0&&(Ot={type:void 0,texture:void 0},vt[Rt]=Ot),(Ot.type!==q||Ot.texture!==Ut)&&(ct!==Rt&&(c.activeTexture(Rt),ct=Rt),c.bindTexture(q,Ut||nt[q]),Ot.type=q,Ot.texture=Ut)}function I(){const q=vt[ct];q!==void 0&&q.type!==void 0&&(c.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function A(){try{c.compressedTexImage2D(...arguments)}catch(q){Re("WebGLState:",q)}}function J(){try{c.compressedTexImage3D(...arguments)}catch(q){Re("WebGLState:",q)}}function xt(){try{c.texSubImage2D(...arguments)}catch(q){Re("WebGLState:",q)}}function Tt(){try{c.texSubImage3D(...arguments)}catch(q){Re("WebGLState:",q)}}function pt(){try{c.compressedTexSubImage2D(...arguments)}catch(q){Re("WebGLState:",q)}}function Zt(){try{c.compressedTexSubImage3D(...arguments)}catch(q){Re("WebGLState:",q)}}function Lt(){try{c.texStorage2D(...arguments)}catch(q){Re("WebGLState:",q)}}function qt(){try{c.texStorage3D(...arguments)}catch(q){Re("WebGLState:",q)}}function ie(){try{c.texImage2D(...arguments)}catch(q){Re("WebGLState:",q)}}function ht(){try{c.texImage3D(...arguments)}catch(q){Re("WebGLState:",q)}}function gt(q){mt.equals(q)===!1&&(c.scissor(q.x,q.y,q.z,q.w),mt.copy(q))}function Nt(q){bt.equals(q)===!1&&(c.viewport(q.x,q.y,q.z,q.w),bt.copy(q))}function wt(q,Ut){let Rt=d.get(Ut);Rt===void 0&&(Rt=new WeakMap,d.set(Ut,Rt));let Ot=Rt.get(q);Ot===void 0&&(Ot=c.getUniformBlockIndex(Ut,q.name),Rt.set(q,Ot))}function Et(q,Ut){const Ot=d.get(Ut).get(q);p.get(Ut)!==Ot&&(c.uniformBlockBinding(Ut,Ot,q.__bindingPointIndex),p.set(Ut,Ot))}function $t(){c.disable(c.BLEND),c.disable(c.CULL_FACE),c.disable(c.DEPTH_TEST),c.disable(c.POLYGON_OFFSET_FILL),c.disable(c.SCISSOR_TEST),c.disable(c.STENCIL_TEST),c.disable(c.SAMPLE_ALPHA_TO_COVERAGE),c.blendEquation(c.FUNC_ADD),c.blendFunc(c.ONE,c.ZERO),c.blendFuncSeparate(c.ONE,c.ZERO,c.ONE,c.ZERO),c.blendColor(0,0,0,0),c.colorMask(!0,!0,!0,!0),c.clearColor(0,0,0,0),c.depthMask(!0),c.depthFunc(c.LESS),u.setReversed(!1),c.clearDepth(1),c.stencilMask(4294967295),c.stencilFunc(c.ALWAYS,0,4294967295),c.stencilOp(c.KEEP,c.KEEP,c.KEEP),c.clearStencil(0),c.cullFace(c.BACK),c.frontFace(c.CCW),c.polygonOffset(0,0),c.activeTexture(c.TEXTURE0),c.bindFramebuffer(c.FRAMEBUFFER,null),c.bindFramebuffer(c.DRAW_FRAMEBUFFER,null),c.bindFramebuffer(c.READ_FRAMEBUFFER,null),c.useProgram(null),c.lineWidth(1),c.scissor(0,0,c.canvas.width,c.canvas.height),c.viewport(0,0,c.canvas.width,c.canvas.height),g={},ct=null,vt={},_={},v=new WeakMap,y=[],M=null,b=!1,S=null,x=null,T=null,R=null,D=null,L=null,P=null,B=new Le(0,0,0),W=0,w=!1,O=null,G=null,$=null,V=null,Q=null,mt.set(0,0,c.canvas.width,c.canvas.height),bt.set(0,0,c.canvas.width,c.canvas.height),o.reset(),u.reset(),f.reset()}return{buffers:{color:o,depth:u,stencil:f},enable:ft,disable:Ct,bindFramebuffer:kt,drawBuffers:Gt,useProgram:pe,setBlending:ue,setMaterial:Ae,setFlipSided:le,setCullFace:Je,setLineWidth:X,setPolygonOffset:je,setScissorTest:ve,activeTexture:Se,bindTexture:jt,unbindTexture:I,compressedTexImage2D:A,compressedTexImage3D:J,texImage2D:ie,texImage3D:ht,updateUBOMapping:wt,uniformBlockBinding:Et,texStorage2D:Lt,texStorage3D:qt,texSubImage2D:xt,texSubImage3D:Tt,compressedTexSubImage2D:pt,compressedTexSubImage3D:Zt,scissor:gt,viewport:Nt,reset:$t}}function YC(c,t,n,a,r,o,u){const f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Oe,g=new WeakMap;let _;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(I,A){return y?new OffscreenCanvas(I,A):Uu("canvas")}function b(I,A,J){let xt=1;const Tt=jt(I);if((Tt.width>J||Tt.height>J)&&(xt=J/Math.max(Tt.width,Tt.height)),xt<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const pt=Math.floor(xt*Tt.width),Zt=Math.floor(xt*Tt.height);_===void 0&&(_=M(pt,Zt));const Lt=A?M(pt,Zt):_;return Lt.width=pt,Lt.height=Zt,Lt.getContext("2d").drawImage(I,0,0,pt,Zt),he("WebGLRenderer: Texture has been resized from ("+Tt.width+"x"+Tt.height+") to ("+pt+"x"+Zt+")."),Lt}else return"data"in I&&he("WebGLRenderer: Image in DataTexture is too big ("+Tt.width+"x"+Tt.height+")."),I;return I}function S(I){return I.generateMipmaps}function x(I){c.generateMipmap(I)}function T(I){return I.isWebGLCubeRenderTarget?c.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?c.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?c.TEXTURE_2D_ARRAY:c.TEXTURE_2D}function R(I,A,J,xt,Tt=!1){if(I!==null){if(c[I]!==void 0)return c[I];he("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let pt=A;if(A===c.RED&&(J===c.FLOAT&&(pt=c.R32F),J===c.HALF_FLOAT&&(pt=c.R16F),J===c.UNSIGNED_BYTE&&(pt=c.R8)),A===c.RED_INTEGER&&(J===c.UNSIGNED_BYTE&&(pt=c.R8UI),J===c.UNSIGNED_SHORT&&(pt=c.R16UI),J===c.UNSIGNED_INT&&(pt=c.R32UI),J===c.BYTE&&(pt=c.R8I),J===c.SHORT&&(pt=c.R16I),J===c.INT&&(pt=c.R32I)),A===c.RG&&(J===c.FLOAT&&(pt=c.RG32F),J===c.HALF_FLOAT&&(pt=c.RG16F),J===c.UNSIGNED_BYTE&&(pt=c.RG8)),A===c.RG_INTEGER&&(J===c.UNSIGNED_BYTE&&(pt=c.RG8UI),J===c.UNSIGNED_SHORT&&(pt=c.RG16UI),J===c.UNSIGNED_INT&&(pt=c.RG32UI),J===c.BYTE&&(pt=c.RG8I),J===c.SHORT&&(pt=c.RG16I),J===c.INT&&(pt=c.RG32I)),A===c.RGB_INTEGER&&(J===c.UNSIGNED_BYTE&&(pt=c.RGB8UI),J===c.UNSIGNED_SHORT&&(pt=c.RGB16UI),J===c.UNSIGNED_INT&&(pt=c.RGB32UI),J===c.BYTE&&(pt=c.RGB8I),J===c.SHORT&&(pt=c.RGB16I),J===c.INT&&(pt=c.RGB32I)),A===c.RGBA_INTEGER&&(J===c.UNSIGNED_BYTE&&(pt=c.RGBA8UI),J===c.UNSIGNED_SHORT&&(pt=c.RGBA16UI),J===c.UNSIGNED_INT&&(pt=c.RGBA32UI),J===c.BYTE&&(pt=c.RGBA8I),J===c.SHORT&&(pt=c.RGBA16I),J===c.INT&&(pt=c.RGBA32I)),A===c.RGB&&(J===c.UNSIGNED_INT_5_9_9_9_REV&&(pt=c.RGB9_E5),J===c.UNSIGNED_INT_10F_11F_11F_REV&&(pt=c.R11F_G11F_B10F)),A===c.RGBA){const Zt=Tt?Du:Ce.getTransfer(xt);J===c.FLOAT&&(pt=c.RGBA32F),J===c.HALF_FLOAT&&(pt=c.RGBA16F),J===c.UNSIGNED_BYTE&&(pt=Zt===qe?c.SRGB8_ALPHA8:c.RGBA8),J===c.UNSIGNED_SHORT_4_4_4_4&&(pt=c.RGBA4),J===c.UNSIGNED_SHORT_5_5_5_1&&(pt=c.RGB5_A1)}return(pt===c.R16F||pt===c.R32F||pt===c.RG16F||pt===c.RG32F||pt===c.RGBA16F||pt===c.RGBA32F)&&t.get("EXT_color_buffer_float"),pt}function D(I,A){let J;return I?A===null||A===ia||A===Dl?J=c.DEPTH24_STENCIL8:A===Ji?J=c.DEPTH32F_STENCIL8:A===Cl&&(J=c.DEPTH24_STENCIL8,he("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===ia||A===Dl?J=c.DEPTH_COMPONENT24:A===Ji?J=c.DEPTH_COMPONENT32F:A===Cl&&(J=c.DEPTH_COMPONENT16),J}function L(I,A){return S(I)===!0||I.isFramebufferTexture&&I.minFilter!==On&&I.minFilter!==zn?Math.log2(Math.max(A.width,A.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?A.mipmaps.length:1}function P(I){const A=I.target;A.removeEventListener("dispose",P),W(A),A.isVideoTexture&&g.delete(A)}function B(I){const A=I.target;A.removeEventListener("dispose",B),O(A)}function W(I){const A=a.get(I);if(A.__webglInit===void 0)return;const J=I.source,xt=v.get(J);if(xt){const Tt=xt[A.__cacheKey];Tt.usedTimes--,Tt.usedTimes===0&&w(I),Object.keys(xt).length===0&&v.delete(J)}a.remove(I)}function w(I){const A=a.get(I);c.deleteTexture(A.__webglTexture);const J=I.source,xt=v.get(J);delete xt[A.__cacheKey],u.memory.textures--}function O(I){const A=a.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),a.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let xt=0;xt<6;xt++){if(Array.isArray(A.__webglFramebuffer[xt]))for(let Tt=0;Tt<A.__webglFramebuffer[xt].length;Tt++)c.deleteFramebuffer(A.__webglFramebuffer[xt][Tt]);else c.deleteFramebuffer(A.__webglFramebuffer[xt]);A.__webglDepthbuffer&&c.deleteRenderbuffer(A.__webglDepthbuffer[xt])}else{if(Array.isArray(A.__webglFramebuffer))for(let xt=0;xt<A.__webglFramebuffer.length;xt++)c.deleteFramebuffer(A.__webglFramebuffer[xt]);else c.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&c.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&c.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let xt=0;xt<A.__webglColorRenderbuffer.length;xt++)A.__webglColorRenderbuffer[xt]&&c.deleteRenderbuffer(A.__webglColorRenderbuffer[xt]);A.__webglDepthRenderbuffer&&c.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const J=I.textures;for(let xt=0,Tt=J.length;xt<Tt;xt++){const pt=a.get(J[xt]);pt.__webglTexture&&(c.deleteTexture(pt.__webglTexture),u.memory.textures--),a.remove(J[xt])}a.remove(I)}let G=0;function $(){G=0}function V(){const I=G;return I>=r.maxTextures&&he("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+r.maxTextures),G+=1,I}function Q(I){const A=[];return A.push(I.wrapS),A.push(I.wrapT),A.push(I.wrapR||0),A.push(I.magFilter),A.push(I.minFilter),A.push(I.anisotropy),A.push(I.internalFormat),A.push(I.format),A.push(I.type),A.push(I.generateMipmaps),A.push(I.premultiplyAlpha),A.push(I.flipY),A.push(I.unpackAlignment),A.push(I.colorSpace),A.join()}function j(I,A){const J=a.get(I);if(I.isVideoTexture&&ve(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&J.__version!==I.version){const xt=I.image;if(xt===null)he("WebGLRenderer: Texture marked for update but no image data found.");else if(xt.complete===!1)he("WebGLRenderer: Texture marked for update but image is incomplete");else{nt(J,I,A);return}}else I.isExternalTexture&&(J.__webglTexture=I.sourceTexture?I.sourceTexture:null);n.bindTexture(c.TEXTURE_2D,J.__webglTexture,c.TEXTURE0+A)}function z(I,A){const J=a.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&J.__version!==I.version){nt(J,I,A);return}else I.isExternalTexture&&(J.__webglTexture=I.sourceTexture?I.sourceTexture:null);n.bindTexture(c.TEXTURE_2D_ARRAY,J.__webglTexture,c.TEXTURE0+A)}function H(I,A){const J=a.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&J.__version!==I.version){nt(J,I,A);return}n.bindTexture(c.TEXTURE_3D,J.__webglTexture,c.TEXTURE0+A)}function Z(I,A){const J=a.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&J.__version!==I.version){ft(J,I,A);return}n.bindTexture(c.TEXTURE_CUBE_MAP,J.__webglTexture,c.TEXTURE0+A)}const ct={[Xd]:c.REPEAT,[za]:c.CLAMP_TO_EDGE,[Wd]:c.MIRRORED_REPEAT},vt={[On]:c.NEAREST,[h1]:c.NEAREST_MIPMAP_NEAREST,[eu]:c.NEAREST_MIPMAP_LINEAR,[zn]:c.LINEAR,[$h]:c.LINEAR_MIPMAP_NEAREST,[Es]:c.LINEAR_MIPMAP_LINEAR},F={[m1]:c.NEVER,[y1]:c.ALWAYS,[g1]:c.LESS,[Hp]:c.LEQUAL,[v1]:c.EQUAL,[Gp]:c.GEQUAL,[_1]:c.GREATER,[x1]:c.NOTEQUAL};function Y(I,A){if(A.type===Ji&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===zn||A.magFilter===$h||A.magFilter===eu||A.magFilter===Es||A.minFilter===zn||A.minFilter===$h||A.minFilter===eu||A.minFilter===Es)&&he("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),c.texParameteri(I,c.TEXTURE_WRAP_S,ct[A.wrapS]),c.texParameteri(I,c.TEXTURE_WRAP_T,ct[A.wrapT]),(I===c.TEXTURE_3D||I===c.TEXTURE_2D_ARRAY)&&c.texParameteri(I,c.TEXTURE_WRAP_R,ct[A.wrapR]),c.texParameteri(I,c.TEXTURE_MAG_FILTER,vt[A.magFilter]),c.texParameteri(I,c.TEXTURE_MIN_FILTER,vt[A.minFilter]),A.compareFunction&&(c.texParameteri(I,c.TEXTURE_COMPARE_MODE,c.COMPARE_REF_TO_TEXTURE),c.texParameteri(I,c.TEXTURE_COMPARE_FUNC,F[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===On||A.minFilter!==eu&&A.minFilter!==Es||A.type===Ji&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||a.get(A).__currentAnisotropy){const J=t.get("EXT_texture_filter_anisotropic");c.texParameterf(I,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),a.get(A).__currentAnisotropy=A.anisotropy}}}function mt(I,A){let J=!1;I.__webglInit===void 0&&(I.__webglInit=!0,A.addEventListener("dispose",P));const xt=A.source;let Tt=v.get(xt);Tt===void 0&&(Tt={},v.set(xt,Tt));const pt=Q(A);if(pt!==I.__cacheKey){Tt[pt]===void 0&&(Tt[pt]={texture:c.createTexture(),usedTimes:0},u.memory.textures++,J=!0),Tt[pt].usedTimes++;const Zt=Tt[I.__cacheKey];Zt!==void 0&&(Tt[I.__cacheKey].usedTimes--,Zt.usedTimes===0&&w(A)),I.__cacheKey=pt,I.__webglTexture=Tt[pt].texture}return J}function bt(I,A,J){return Math.floor(Math.floor(I/J)/A)}function It(I,A,J,xt){const pt=I.updateRanges;if(pt.length===0)n.texSubImage2D(c.TEXTURE_2D,0,0,0,A.width,A.height,J,xt,A.data);else{pt.sort((ht,gt)=>ht.start-gt.start);let Zt=0;for(let ht=1;ht<pt.length;ht++){const gt=pt[Zt],Nt=pt[ht],wt=gt.start+gt.count,Et=bt(Nt.start,A.width,4),$t=bt(gt.start,A.width,4);Nt.start<=wt+1&&Et===$t&&bt(Nt.start+Nt.count-1,A.width,4)===Et?gt.count=Math.max(gt.count,Nt.start+Nt.count-gt.start):(++Zt,pt[Zt]=Nt)}pt.length=Zt+1;const Lt=c.getParameter(c.UNPACK_ROW_LENGTH),qt=c.getParameter(c.UNPACK_SKIP_PIXELS),ie=c.getParameter(c.UNPACK_SKIP_ROWS);c.pixelStorei(c.UNPACK_ROW_LENGTH,A.width);for(let ht=0,gt=pt.length;ht<gt;ht++){const Nt=pt[ht],wt=Math.floor(Nt.start/4),Et=Math.ceil(Nt.count/4),$t=wt%A.width,q=Math.floor(wt/A.width),Ut=Et,Rt=1;c.pixelStorei(c.UNPACK_SKIP_PIXELS,$t),c.pixelStorei(c.UNPACK_SKIP_ROWS,q),n.texSubImage2D(c.TEXTURE_2D,0,$t,q,Ut,Rt,J,xt,A.data)}I.clearUpdateRanges(),c.pixelStorei(c.UNPACK_ROW_LENGTH,Lt),c.pixelStorei(c.UNPACK_SKIP_PIXELS,qt),c.pixelStorei(c.UNPACK_SKIP_ROWS,ie)}}function nt(I,A,J){let xt=c.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(xt=c.TEXTURE_2D_ARRAY),A.isData3DTexture&&(xt=c.TEXTURE_3D);const Tt=mt(I,A),pt=A.source;n.bindTexture(xt,I.__webglTexture,c.TEXTURE0+J);const Zt=a.get(pt);if(pt.version!==Zt.__version||Tt===!0){n.activeTexture(c.TEXTURE0+J);const Lt=Ce.getPrimaries(Ce.workingColorSpace),qt=A.colorSpace===Ms?null:Ce.getPrimaries(A.colorSpace),ie=A.colorSpace===Ms||Lt===qt?c.NONE:c.BROWSER_DEFAULT_WEBGL;c.pixelStorei(c.UNPACK_FLIP_Y_WEBGL,A.flipY),c.pixelStorei(c.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),c.pixelStorei(c.UNPACK_ALIGNMENT,A.unpackAlignment),c.pixelStorei(c.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let ht=b(A.image,!1,r.maxTextureSize);ht=Se(A,ht);const gt=o.convert(A.format,A.colorSpace),Nt=o.convert(A.type);let wt=R(A.internalFormat,gt,Nt,A.colorSpace,A.isVideoTexture);Y(xt,A);let Et;const $t=A.mipmaps,q=A.isVideoTexture!==!0,Ut=Zt.__version===void 0||Tt===!0,Rt=pt.dataReady,Ot=L(A,ht);if(A.isDepthTexture)wt=D(A.format===sr,A.type),Ut&&(q?n.texStorage2D(c.TEXTURE_2D,1,wt,ht.width,ht.height):n.texImage2D(c.TEXTURE_2D,0,wt,ht.width,ht.height,0,gt,Nt,null));else if(A.isDataTexture)if($t.length>0){q&&Ut&&n.texStorage2D(c.TEXTURE_2D,Ot,wt,$t[0].width,$t[0].height);for(let At=0,yt=$t.length;At<yt;At++)Et=$t[At],q?Rt&&n.texSubImage2D(c.TEXTURE_2D,At,0,0,Et.width,Et.height,gt,Nt,Et.data):n.texImage2D(c.TEXTURE_2D,At,wt,Et.width,Et.height,0,gt,Nt,Et.data);A.generateMipmaps=!1}else q?(Ut&&n.texStorage2D(c.TEXTURE_2D,Ot,wt,ht.width,ht.height),Rt&&It(A,ht,gt,Nt)):n.texImage2D(c.TEXTURE_2D,0,wt,ht.width,ht.height,0,gt,Nt,ht.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){q&&Ut&&n.texStorage3D(c.TEXTURE_2D_ARRAY,Ot,wt,$t[0].width,$t[0].height,ht.depth);for(let At=0,yt=$t.length;At<yt;At++)if(Et=$t[At],A.format!==Fi)if(gt!==null)if(q){if(Rt)if(A.layerUpdates.size>0){const Dt=O_(Et.width,Et.height,A.format,A.type);for(const ae of A.layerUpdates){const He=Et.data.subarray(ae*Dt/Et.data.BYTES_PER_ELEMENT,(ae+1)*Dt/Et.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(c.TEXTURE_2D_ARRAY,At,0,0,ae,Et.width,Et.height,1,gt,He)}A.clearLayerUpdates()}else n.compressedTexSubImage3D(c.TEXTURE_2D_ARRAY,At,0,0,0,Et.width,Et.height,ht.depth,gt,Et.data)}else n.compressedTexImage3D(c.TEXTURE_2D_ARRAY,At,wt,Et.width,Et.height,ht.depth,0,Et.data,0,0);else he("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?Rt&&n.texSubImage3D(c.TEXTURE_2D_ARRAY,At,0,0,0,Et.width,Et.height,ht.depth,gt,Nt,Et.data):n.texImage3D(c.TEXTURE_2D_ARRAY,At,wt,Et.width,Et.height,ht.depth,0,gt,Nt,Et.data)}else{q&&Ut&&n.texStorage2D(c.TEXTURE_2D,Ot,wt,$t[0].width,$t[0].height);for(let At=0,yt=$t.length;At<yt;At++)Et=$t[At],A.format!==Fi?gt!==null?q?Rt&&n.compressedTexSubImage2D(c.TEXTURE_2D,At,0,0,Et.width,Et.height,gt,Et.data):n.compressedTexImage2D(c.TEXTURE_2D,At,wt,Et.width,Et.height,0,Et.data):he("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?Rt&&n.texSubImage2D(c.TEXTURE_2D,At,0,0,Et.width,Et.height,gt,Nt,Et.data):n.texImage2D(c.TEXTURE_2D,At,wt,Et.width,Et.height,0,gt,Nt,Et.data)}else if(A.isDataArrayTexture)if(q){if(Ut&&n.texStorage3D(c.TEXTURE_2D_ARRAY,Ot,wt,ht.width,ht.height,ht.depth),Rt)if(A.layerUpdates.size>0){const At=O_(ht.width,ht.height,A.format,A.type);for(const yt of A.layerUpdates){const Dt=ht.data.subarray(yt*At/ht.data.BYTES_PER_ELEMENT,(yt+1)*At/ht.data.BYTES_PER_ELEMENT);n.texSubImage3D(c.TEXTURE_2D_ARRAY,0,0,0,yt,ht.width,ht.height,1,gt,Nt,Dt)}A.clearLayerUpdates()}else n.texSubImage3D(c.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,gt,Nt,ht.data)}else n.texImage3D(c.TEXTURE_2D_ARRAY,0,wt,ht.width,ht.height,ht.depth,0,gt,Nt,ht.data);else if(A.isData3DTexture)q?(Ut&&n.texStorage3D(c.TEXTURE_3D,Ot,wt,ht.width,ht.height,ht.depth),Rt&&n.texSubImage3D(c.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,gt,Nt,ht.data)):n.texImage3D(c.TEXTURE_3D,0,wt,ht.width,ht.height,ht.depth,0,gt,Nt,ht.data);else if(A.isFramebufferTexture){if(Ut)if(q)n.texStorage2D(c.TEXTURE_2D,Ot,wt,ht.width,ht.height);else{let At=ht.width,yt=ht.height;for(let Dt=0;Dt<Ot;Dt++)n.texImage2D(c.TEXTURE_2D,Dt,wt,At,yt,0,gt,Nt,null),At>>=1,yt>>=1}}else if($t.length>0){if(q&&Ut){const At=jt($t[0]);n.texStorage2D(c.TEXTURE_2D,Ot,wt,At.width,At.height)}for(let At=0,yt=$t.length;At<yt;At++)Et=$t[At],q?Rt&&n.texSubImage2D(c.TEXTURE_2D,At,0,0,gt,Nt,Et):n.texImage2D(c.TEXTURE_2D,At,wt,gt,Nt,Et);A.generateMipmaps=!1}else if(q){if(Ut){const At=jt(ht);n.texStorage2D(c.TEXTURE_2D,Ot,wt,At.width,At.height)}Rt&&n.texSubImage2D(c.TEXTURE_2D,0,0,0,gt,Nt,ht)}else n.texImage2D(c.TEXTURE_2D,0,wt,gt,Nt,ht);S(A)&&x(xt),Zt.__version=pt.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function ft(I,A,J){if(A.image.length!==6)return;const xt=mt(I,A),Tt=A.source;n.bindTexture(c.TEXTURE_CUBE_MAP,I.__webglTexture,c.TEXTURE0+J);const pt=a.get(Tt);if(Tt.version!==pt.__version||xt===!0){n.activeTexture(c.TEXTURE0+J);const Zt=Ce.getPrimaries(Ce.workingColorSpace),Lt=A.colorSpace===Ms?null:Ce.getPrimaries(A.colorSpace),qt=A.colorSpace===Ms||Zt===Lt?c.NONE:c.BROWSER_DEFAULT_WEBGL;c.pixelStorei(c.UNPACK_FLIP_Y_WEBGL,A.flipY),c.pixelStorei(c.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),c.pixelStorei(c.UNPACK_ALIGNMENT,A.unpackAlignment),c.pixelStorei(c.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);const ie=A.isCompressedTexture||A.image[0].isCompressedTexture,ht=A.image[0]&&A.image[0].isDataTexture,gt=[];for(let yt=0;yt<6;yt++)!ie&&!ht?gt[yt]=b(A.image[yt],!0,r.maxCubemapSize):gt[yt]=ht?A.image[yt].image:A.image[yt],gt[yt]=Se(A,gt[yt]);const Nt=gt[0],wt=o.convert(A.format,A.colorSpace),Et=o.convert(A.type),$t=R(A.internalFormat,wt,Et,A.colorSpace),q=A.isVideoTexture!==!0,Ut=pt.__version===void 0||xt===!0,Rt=Tt.dataReady;let Ot=L(A,Nt);Y(c.TEXTURE_CUBE_MAP,A);let At;if(ie){q&&Ut&&n.texStorage2D(c.TEXTURE_CUBE_MAP,Ot,$t,Nt.width,Nt.height);for(let yt=0;yt<6;yt++){At=gt[yt].mipmaps;for(let Dt=0;Dt<At.length;Dt++){const ae=At[Dt];A.format!==Fi?wt!==null?q?Rt&&n.compressedTexSubImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Dt,0,0,ae.width,ae.height,wt,ae.data):n.compressedTexImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Dt,$t,ae.width,ae.height,0,ae.data):he("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?Rt&&n.texSubImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Dt,0,0,ae.width,ae.height,wt,Et,ae.data):n.texImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Dt,$t,ae.width,ae.height,0,wt,Et,ae.data)}}}else{if(At=A.mipmaps,q&&Ut){At.length>0&&Ot++;const yt=jt(gt[0]);n.texStorage2D(c.TEXTURE_CUBE_MAP,Ot,$t,yt.width,yt.height)}for(let yt=0;yt<6;yt++)if(ht){q?Rt&&n.texSubImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,gt[yt].width,gt[yt].height,wt,Et,gt[yt].data):n.texImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,$t,gt[yt].width,gt[yt].height,0,wt,Et,gt[yt].data);for(let Dt=0;Dt<At.length;Dt++){const He=At[Dt].image[yt].image;q?Rt&&n.texSubImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Dt+1,0,0,He.width,He.height,wt,Et,He.data):n.texImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Dt+1,$t,He.width,He.height,0,wt,Et,He.data)}}else{q?Rt&&n.texSubImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,wt,Et,gt[yt]):n.texImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,$t,wt,Et,gt[yt]);for(let Dt=0;Dt<At.length;Dt++){const ae=At[Dt];q?Rt&&n.texSubImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Dt+1,0,0,wt,Et,ae.image[yt]):n.texImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Dt+1,$t,wt,Et,ae.image[yt])}}}S(A)&&x(c.TEXTURE_CUBE_MAP),pt.__version=Tt.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function Ct(I,A,J,xt,Tt,pt){const Zt=o.convert(J.format,J.colorSpace),Lt=o.convert(J.type),qt=R(J.internalFormat,Zt,Lt,J.colorSpace),ie=a.get(A),ht=a.get(J);if(ht.__renderTarget=A,!ie.__hasExternalTextures){const gt=Math.max(1,A.width>>pt),Nt=Math.max(1,A.height>>pt);Tt===c.TEXTURE_3D||Tt===c.TEXTURE_2D_ARRAY?n.texImage3D(Tt,pt,qt,gt,Nt,A.depth,0,Zt,Lt,null):n.texImage2D(Tt,pt,qt,gt,Nt,0,Zt,Lt,null)}n.bindFramebuffer(c.FRAMEBUFFER,I),je(A)?f.framebufferTexture2DMultisampleEXT(c.FRAMEBUFFER,xt,Tt,ht.__webglTexture,0,X(A)):(Tt===c.TEXTURE_2D||Tt>=c.TEXTURE_CUBE_MAP_POSITIVE_X&&Tt<=c.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&c.framebufferTexture2D(c.FRAMEBUFFER,xt,Tt,ht.__webglTexture,pt),n.bindFramebuffer(c.FRAMEBUFFER,null)}function kt(I,A,J){if(c.bindRenderbuffer(c.RENDERBUFFER,I),A.depthBuffer){const xt=A.depthTexture,Tt=xt&&xt.isDepthTexture?xt.type:null,pt=D(A.stencilBuffer,Tt),Zt=A.stencilBuffer?c.DEPTH_STENCIL_ATTACHMENT:c.DEPTH_ATTACHMENT;je(A)?f.renderbufferStorageMultisampleEXT(c.RENDERBUFFER,X(A),pt,A.width,A.height):J?c.renderbufferStorageMultisample(c.RENDERBUFFER,X(A),pt,A.width,A.height):c.renderbufferStorage(c.RENDERBUFFER,pt,A.width,A.height),c.framebufferRenderbuffer(c.FRAMEBUFFER,Zt,c.RENDERBUFFER,I)}else{const xt=A.textures;for(let Tt=0;Tt<xt.length;Tt++){const pt=xt[Tt],Zt=o.convert(pt.format,pt.colorSpace),Lt=o.convert(pt.type),qt=R(pt.internalFormat,Zt,Lt,pt.colorSpace);je(A)?f.renderbufferStorageMultisampleEXT(c.RENDERBUFFER,X(A),qt,A.width,A.height):J?c.renderbufferStorageMultisample(c.RENDERBUFFER,X(A),qt,A.width,A.height):c.renderbufferStorage(c.RENDERBUFFER,qt,A.width,A.height)}}c.bindRenderbuffer(c.RENDERBUFFER,null)}function Gt(I,A,J){const xt=A.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(c.FRAMEBUFFER,I),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Tt=a.get(A.depthTexture);if(Tt.__renderTarget=A,(!Tt.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),xt){if(Tt.__webglInit===void 0&&(Tt.__webglInit=!0,A.depthTexture.addEventListener("dispose",P)),Tt.__webglTexture===void 0){Tt.__webglTexture=c.createTexture(),n.bindTexture(c.TEXTURE_CUBE_MAP,Tt.__webglTexture),Y(c.TEXTURE_CUBE_MAP,A.depthTexture);const ie=o.convert(A.depthTexture.format),ht=o.convert(A.depthTexture.type);let gt;A.depthTexture.format===Ha?gt=c.DEPTH_COMPONENT24:A.depthTexture.format===sr&&(gt=c.DEPTH24_STENCIL8);for(let Nt=0;Nt<6;Nt++)c.texImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,0,gt,A.width,A.height,0,ie,ht,null)}}else j(A.depthTexture,0);const pt=Tt.__webglTexture,Zt=X(A),Lt=xt?c.TEXTURE_CUBE_MAP_POSITIVE_X+J:c.TEXTURE_2D,qt=A.depthTexture.format===sr?c.DEPTH_STENCIL_ATTACHMENT:c.DEPTH_ATTACHMENT;if(A.depthTexture.format===Ha)je(A)?f.framebufferTexture2DMultisampleEXT(c.FRAMEBUFFER,qt,Lt,pt,0,Zt):c.framebufferTexture2D(c.FRAMEBUFFER,qt,Lt,pt,0);else if(A.depthTexture.format===sr)je(A)?f.framebufferTexture2DMultisampleEXT(c.FRAMEBUFFER,qt,Lt,pt,0,Zt):c.framebufferTexture2D(c.FRAMEBUFFER,qt,Lt,pt,0);else throw new Error("Unknown depthTexture format")}function pe(I){const A=a.get(I),J=I.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==I.depthTexture){const xt=I.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),xt){const Tt=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,xt.removeEventListener("dispose",Tt)};xt.addEventListener("dispose",Tt),A.__depthDisposeCallback=Tt}A.__boundDepthTexture=xt}if(I.depthTexture&&!A.__autoAllocateDepthBuffer)if(J)for(let xt=0;xt<6;xt++)Gt(A.__webglFramebuffer[xt],I,xt);else{const xt=I.texture.mipmaps;xt&&xt.length>0?Gt(A.__webglFramebuffer[0],I,0):Gt(A.__webglFramebuffer,I,0)}else if(J){A.__webglDepthbuffer=[];for(let xt=0;xt<6;xt++)if(n.bindFramebuffer(c.FRAMEBUFFER,A.__webglFramebuffer[xt]),A.__webglDepthbuffer[xt]===void 0)A.__webglDepthbuffer[xt]=c.createRenderbuffer(),kt(A.__webglDepthbuffer[xt],I,!1);else{const Tt=I.stencilBuffer?c.DEPTH_STENCIL_ATTACHMENT:c.DEPTH_ATTACHMENT,pt=A.__webglDepthbuffer[xt];c.bindRenderbuffer(c.RENDERBUFFER,pt),c.framebufferRenderbuffer(c.FRAMEBUFFER,Tt,c.RENDERBUFFER,pt)}}else{const xt=I.texture.mipmaps;if(xt&&xt.length>0?n.bindFramebuffer(c.FRAMEBUFFER,A.__webglFramebuffer[0]):n.bindFramebuffer(c.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=c.createRenderbuffer(),kt(A.__webglDepthbuffer,I,!1);else{const Tt=I.stencilBuffer?c.DEPTH_STENCIL_ATTACHMENT:c.DEPTH_ATTACHMENT,pt=A.__webglDepthbuffer;c.bindRenderbuffer(c.RENDERBUFFER,pt),c.framebufferRenderbuffer(c.FRAMEBUFFER,Tt,c.RENDERBUFFER,pt)}}n.bindFramebuffer(c.FRAMEBUFFER,null)}function Qe(I,A,J){const xt=a.get(I);A!==void 0&&Ct(xt.__webglFramebuffer,I,I.texture,c.COLOR_ATTACHMENT0,c.TEXTURE_2D,0),J!==void 0&&pe(I)}function oe(I){const A=I.texture,J=a.get(I),xt=a.get(A);I.addEventListener("dispose",B);const Tt=I.textures,pt=I.isWebGLCubeRenderTarget===!0,Zt=Tt.length>1;if(Zt||(xt.__webglTexture===void 0&&(xt.__webglTexture=c.createTexture()),xt.__version=A.version,u.memory.textures++),pt){J.__webglFramebuffer=[];for(let Lt=0;Lt<6;Lt++)if(A.mipmaps&&A.mipmaps.length>0){J.__webglFramebuffer[Lt]=[];for(let qt=0;qt<A.mipmaps.length;qt++)J.__webglFramebuffer[Lt][qt]=c.createFramebuffer()}else J.__webglFramebuffer[Lt]=c.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){J.__webglFramebuffer=[];for(let Lt=0;Lt<A.mipmaps.length;Lt++)J.__webglFramebuffer[Lt]=c.createFramebuffer()}else J.__webglFramebuffer=c.createFramebuffer();if(Zt)for(let Lt=0,qt=Tt.length;Lt<qt;Lt++){const ie=a.get(Tt[Lt]);ie.__webglTexture===void 0&&(ie.__webglTexture=c.createTexture(),u.memory.textures++)}if(I.samples>0&&je(I)===!1){J.__webglMultisampledFramebuffer=c.createFramebuffer(),J.__webglColorRenderbuffer=[],n.bindFramebuffer(c.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Lt=0;Lt<Tt.length;Lt++){const qt=Tt[Lt];J.__webglColorRenderbuffer[Lt]=c.createRenderbuffer(),c.bindRenderbuffer(c.RENDERBUFFER,J.__webglColorRenderbuffer[Lt]);const ie=o.convert(qt.format,qt.colorSpace),ht=o.convert(qt.type),gt=R(qt.internalFormat,ie,ht,qt.colorSpace,I.isXRRenderTarget===!0),Nt=X(I);c.renderbufferStorageMultisample(c.RENDERBUFFER,Nt,gt,I.width,I.height),c.framebufferRenderbuffer(c.FRAMEBUFFER,c.COLOR_ATTACHMENT0+Lt,c.RENDERBUFFER,J.__webglColorRenderbuffer[Lt])}c.bindRenderbuffer(c.RENDERBUFFER,null),I.depthBuffer&&(J.__webglDepthRenderbuffer=c.createRenderbuffer(),kt(J.__webglDepthRenderbuffer,I,!0)),n.bindFramebuffer(c.FRAMEBUFFER,null)}}if(pt){n.bindTexture(c.TEXTURE_CUBE_MAP,xt.__webglTexture),Y(c.TEXTURE_CUBE_MAP,A);for(let Lt=0;Lt<6;Lt++)if(A.mipmaps&&A.mipmaps.length>0)for(let qt=0;qt<A.mipmaps.length;qt++)Ct(J.__webglFramebuffer[Lt][qt],I,A,c.COLOR_ATTACHMENT0,c.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,qt);else Ct(J.__webglFramebuffer[Lt],I,A,c.COLOR_ATTACHMENT0,c.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0);S(A)&&x(c.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Zt){for(let Lt=0,qt=Tt.length;Lt<qt;Lt++){const ie=Tt[Lt],ht=a.get(ie);let gt=c.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(gt=I.isWebGL3DRenderTarget?c.TEXTURE_3D:c.TEXTURE_2D_ARRAY),n.bindTexture(gt,ht.__webglTexture),Y(gt,ie),Ct(J.__webglFramebuffer,I,ie,c.COLOR_ATTACHMENT0+Lt,gt,0),S(ie)&&x(gt)}n.unbindTexture()}else{let Lt=c.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Lt=I.isWebGL3DRenderTarget?c.TEXTURE_3D:c.TEXTURE_2D_ARRAY),n.bindTexture(Lt,xt.__webglTexture),Y(Lt,A),A.mipmaps&&A.mipmaps.length>0)for(let qt=0;qt<A.mipmaps.length;qt++)Ct(J.__webglFramebuffer[qt],I,A,c.COLOR_ATTACHMENT0,Lt,qt);else Ct(J.__webglFramebuffer,I,A,c.COLOR_ATTACHMENT0,Lt,0);S(A)&&x(Lt),n.unbindTexture()}I.depthBuffer&&pe(I)}function ue(I){const A=I.textures;for(let J=0,xt=A.length;J<xt;J++){const Tt=A[J];if(S(Tt)){const pt=T(I),Zt=a.get(Tt).__webglTexture;n.bindTexture(pt,Zt),x(pt),n.unbindTexture()}}}const Ae=[],le=[];function Je(I){if(I.samples>0){if(je(I)===!1){const A=I.textures,J=I.width,xt=I.height;let Tt=c.COLOR_BUFFER_BIT;const pt=I.stencilBuffer?c.DEPTH_STENCIL_ATTACHMENT:c.DEPTH_ATTACHMENT,Zt=a.get(I),Lt=A.length>1;if(Lt)for(let ie=0;ie<A.length;ie++)n.bindFramebuffer(c.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),c.framebufferRenderbuffer(c.FRAMEBUFFER,c.COLOR_ATTACHMENT0+ie,c.RENDERBUFFER,null),n.bindFramebuffer(c.FRAMEBUFFER,Zt.__webglFramebuffer),c.framebufferTexture2D(c.DRAW_FRAMEBUFFER,c.COLOR_ATTACHMENT0+ie,c.TEXTURE_2D,null,0);n.bindFramebuffer(c.READ_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer);const qt=I.texture.mipmaps;qt&&qt.length>0?n.bindFramebuffer(c.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer[0]):n.bindFramebuffer(c.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer);for(let ie=0;ie<A.length;ie++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(Tt|=c.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(Tt|=c.STENCIL_BUFFER_BIT)),Lt){c.framebufferRenderbuffer(c.READ_FRAMEBUFFER,c.COLOR_ATTACHMENT0,c.RENDERBUFFER,Zt.__webglColorRenderbuffer[ie]);const ht=a.get(A[ie]).__webglTexture;c.framebufferTexture2D(c.DRAW_FRAMEBUFFER,c.COLOR_ATTACHMENT0,c.TEXTURE_2D,ht,0)}c.blitFramebuffer(0,0,J,xt,0,0,J,xt,Tt,c.NEAREST),p===!0&&(Ae.length=0,le.length=0,Ae.push(c.COLOR_ATTACHMENT0+ie),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Ae.push(pt),le.push(pt),c.invalidateFramebuffer(c.DRAW_FRAMEBUFFER,le)),c.invalidateFramebuffer(c.READ_FRAMEBUFFER,Ae))}if(n.bindFramebuffer(c.READ_FRAMEBUFFER,null),n.bindFramebuffer(c.DRAW_FRAMEBUFFER,null),Lt)for(let ie=0;ie<A.length;ie++){n.bindFramebuffer(c.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),c.framebufferRenderbuffer(c.FRAMEBUFFER,c.COLOR_ATTACHMENT0+ie,c.RENDERBUFFER,Zt.__webglColorRenderbuffer[ie]);const ht=a.get(A[ie]).__webglTexture;n.bindFramebuffer(c.FRAMEBUFFER,Zt.__webglFramebuffer),c.framebufferTexture2D(c.DRAW_FRAMEBUFFER,c.COLOR_ATTACHMENT0+ie,c.TEXTURE_2D,ht,0)}n.bindFramebuffer(c.DRAW_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&p){const A=I.stencilBuffer?c.DEPTH_STENCIL_ATTACHMENT:c.DEPTH_ATTACHMENT;c.invalidateFramebuffer(c.DRAW_FRAMEBUFFER,[A])}}}function X(I){return Math.min(r.maxSamples,I.samples)}function je(I){const A=a.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function ve(I){const A=u.render.frame;g.get(I)!==A&&(g.set(I,A),I.update())}function Se(I,A){const J=I.colorSpace,xt=I.format,Tt=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||J!==mo&&J!==Ms&&(Ce.getTransfer(J)===qe?(xt!==Fi||Tt!==ui)&&he("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Re("WebGLTextures: Unsupported texture color space:",J)),A}function jt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(d.width=I.naturalWidth||I.width,d.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(d.width=I.displayWidth,d.height=I.displayHeight):(d.width=I.width,d.height=I.height),d}this.allocateTextureUnit=V,this.resetTextureUnits=$,this.setTexture2D=j,this.setTexture2DArray=z,this.setTexture3D=H,this.setTextureCube=Z,this.rebindTextures=Qe,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=Je,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=je,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function jC(c,t){function n(a,r=Ms){let o;const u=Ce.getTransfer(r);if(a===ui)return c.UNSIGNED_BYTE;if(a===zp)return c.UNSIGNED_SHORT_4_4_4_4;if(a===Pp)return c.UNSIGNED_SHORT_5_5_5_1;if(a===Dx)return c.UNSIGNED_INT_5_9_9_9_REV;if(a===Nx)return c.UNSIGNED_INT_10F_11F_11F_REV;if(a===Rx)return c.BYTE;if(a===Cx)return c.SHORT;if(a===Cl)return c.UNSIGNED_SHORT;if(a===Op)return c.INT;if(a===ia)return c.UNSIGNED_INT;if(a===Ji)return c.FLOAT;if(a===Ia)return c.HALF_FLOAT;if(a===Ux)return c.ALPHA;if(a===Lx)return c.RGB;if(a===Fi)return c.RGBA;if(a===Ha)return c.DEPTH_COMPONENT;if(a===sr)return c.DEPTH_STENCIL;if(a===Ox)return c.RED;if(a===Bp)return c.RED_INTEGER;if(a===po)return c.RG;if(a===Fp)return c.RG_INTEGER;if(a===Ip)return c.RGBA_INTEGER;if(a===Eu||a===bu||a===Tu||a===Au)if(u===qe)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(a===Eu)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===bu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Tu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Au)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(a===Eu)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===bu)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Tu)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Au)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Yd||a===jd||a===Zd||a===Kd)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(a===Yd)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===jd)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Zd)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Kd)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Qd||a===Jd||a===$d||a===tp||a===ep||a===np||a===ip)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(a===Qd||a===Jd)return u===qe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(a===$d)return u===qe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(a===tp)return o.COMPRESSED_R11_EAC;if(a===ep)return o.COMPRESSED_SIGNED_R11_EAC;if(a===np)return o.COMPRESSED_RG11_EAC;if(a===ip)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===ap||a===sp||a===rp||a===op||a===lp||a===cp||a===up||a===fp||a===hp||a===dp||a===pp||a===mp||a===gp||a===vp)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(a===ap)return u===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===sp)return u===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===rp)return u===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===op)return u===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===lp)return u===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===cp)return u===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===up)return u===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===fp)return u===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===hp)return u===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===dp)return u===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===pp)return u===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===mp)return u===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===gp)return u===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===vp)return u===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===_p||a===xp||a===yp)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(a===_p)return u===qe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===xp)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===yp)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Sp||a===Mp||a===Ep||a===bp)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(a===Sp)return o.COMPRESSED_RED_RGTC1_EXT;if(a===Mp)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Ep)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===bp)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Dl?c.UNSIGNED_INT_24_8:c[a]!==void 0?c[a]:null}return{convert:n}}const ZC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,KC=`
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

}`;class QC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const a=new Yx(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,a=new sa({vertexShader:ZC,fragmentShader:KC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Hi(new Fl(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class JC extends vo{constructor(t,n){super();const a=this;let r=null,o=1,u=null,f="local-floor",p=1,d=null,g=null,_=null,v=null,y=null,M=null;const b=typeof XRWebGLBinding<"u",S=new QC,x={},T=n.getContextAttributes();let R=null,D=null;const L=[],P=[],B=new Oe;let W=null;const w=new zi;w.viewport=new ln;const O=new zi;O.viewport=new ln;const G=[w,O],$=new rT;let V=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let ft=L[nt];return ft===void 0&&(ft=new Md,L[nt]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(nt){let ft=L[nt];return ft===void 0&&(ft=new Md,L[nt]=ft),ft.getGripSpace()},this.getHand=function(nt){let ft=L[nt];return ft===void 0&&(ft=new Md,L[nt]=ft),ft.getHandSpace()};function j(nt){const ft=P.indexOf(nt.inputSource);if(ft===-1)return;const Ct=L[ft];Ct!==void 0&&(Ct.update(nt.inputSource,nt.frame,d||u),Ct.dispatchEvent({type:nt.type,data:nt.inputSource}))}function z(){r.removeEventListener("select",j),r.removeEventListener("selectstart",j),r.removeEventListener("selectend",j),r.removeEventListener("squeeze",j),r.removeEventListener("squeezestart",j),r.removeEventListener("squeezeend",j),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",H);for(let nt=0;nt<L.length;nt++){const ft=P[nt];ft!==null&&(P[nt]=null,L[nt].disconnect(ft))}V=null,Q=null,S.reset();for(const nt in x)delete x[nt];t.setRenderTarget(R),y=null,v=null,_=null,r=null,D=null,It.stop(),a.isPresenting=!1,t.setPixelRatio(W),t.setSize(B.width,B.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){o=nt,a.isPresenting===!0&&he("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){f=nt,a.isPresenting===!0&&he("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||u},this.setReferenceSpace=function(nt){d=nt},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return _===null&&b&&(_=new XRWebGLBinding(r,n)),_},this.getFrame=function(){return M},this.getSession=function(){return r},this.setSession=async function(nt){if(r=nt,r!==null){if(R=t.getRenderTarget(),r.addEventListener("select",j),r.addEventListener("selectstart",j),r.addEventListener("selectend",j),r.addEventListener("squeeze",j),r.addEventListener("squeezestart",j),r.addEventListener("squeezeend",j),r.addEventListener("end",z),r.addEventListener("inputsourceschange",H),T.xrCompatible!==!0&&await n.makeXRCompatible(),W=t.getPixelRatio(),t.getSize(B),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ct=null,kt=null,Gt=null;T.depth&&(Gt=T.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Ct=T.stencil?sr:Ha,kt=T.stencil?Dl:ia);const pe={colorFormat:n.RGBA8,depthFormat:Gt,scaleFactor:o};_=this.getBinding(),v=_.createProjectionLayer(pe),r.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),D=new ea(v.textureWidth,v.textureHeight,{format:Fi,type:ui,depthTexture:new Ul(v.textureWidth,v.textureHeight,kt,void 0,void 0,void 0,void 0,void 0,void 0,Ct),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Ct={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:o};y=new XRWebGLLayer(r,n,Ct),r.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),D=new ea(y.framebufferWidth,y.framebufferHeight,{format:Fi,type:ui,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(p),d=null,u=await r.requestReferenceSpace(f),It.setContext(r),It.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function H(nt){for(let ft=0;ft<nt.removed.length;ft++){const Ct=nt.removed[ft],kt=P.indexOf(Ct);kt>=0&&(P[kt]=null,L[kt].disconnect(Ct))}for(let ft=0;ft<nt.added.length;ft++){const Ct=nt.added[ft];let kt=P.indexOf(Ct);if(kt===-1){for(let pe=0;pe<L.length;pe++)if(pe>=P.length){P.push(Ct),kt=pe;break}else if(P[pe]===null){P[pe]=Ct,kt=pe;break}if(kt===-1)break}const Gt=L[kt];Gt&&Gt.connect(Ct)}}const Z=new lt,ct=new lt;function vt(nt,ft,Ct){Z.setFromMatrixPosition(ft.matrixWorld),ct.setFromMatrixPosition(Ct.matrixWorld);const kt=Z.distanceTo(ct),Gt=ft.projectionMatrix.elements,pe=Ct.projectionMatrix.elements,Qe=Gt[14]/(Gt[10]-1),oe=Gt[14]/(Gt[10]+1),ue=(Gt[9]+1)/Gt[5],Ae=(Gt[9]-1)/Gt[5],le=(Gt[8]-1)/Gt[0],Je=(pe[8]+1)/pe[0],X=Qe*le,je=Qe*Je,ve=kt/(-le+Je),Se=ve*-le;if(ft.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(Se),nt.translateZ(ve),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),Gt[10]===-1)nt.projectionMatrix.copy(ft.projectionMatrix),nt.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const jt=Qe+ve,I=oe+ve,A=X-Se,J=je+(kt-Se),xt=ue*oe/I*jt,Tt=Ae*oe/I*jt;nt.projectionMatrix.makePerspective(A,J,xt,Tt,jt,I),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function F(nt,ft){ft===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(ft.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(r===null)return;let ft=nt.near,Ct=nt.far;S.texture!==null&&(S.depthNear>0&&(ft=S.depthNear),S.depthFar>0&&(Ct=S.depthFar)),$.near=O.near=w.near=ft,$.far=O.far=w.far=Ct,(V!==$.near||Q!==$.far)&&(r.updateRenderState({depthNear:$.near,depthFar:$.far}),V=$.near,Q=$.far),$.layers.mask=nt.layers.mask|6,w.layers.mask=$.layers.mask&3,O.layers.mask=$.layers.mask&5;const kt=nt.parent,Gt=$.cameras;F($,kt);for(let pe=0;pe<Gt.length;pe++)F(Gt[pe],kt);Gt.length===2?vt($,w,O):$.projectionMatrix.copy(w.projectionMatrix),Y(nt,$,kt)};function Y(nt,ft,Ct){Ct===null?nt.matrix.copy(ft.matrixWorld):(nt.matrix.copy(Ct.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(ft.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(ft.projectionMatrix),nt.projectionMatrixInverse.copy(ft.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=Tp*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(v===null&&y===null))return p},this.setFoveation=function(nt){p=nt,v!==null&&(v.fixedFoveation=nt),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=nt)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh($)},this.getCameraTexture=function(nt){return x[nt]};let mt=null;function bt(nt,ft){if(g=ft.getViewerPose(d||u),M=ft,g!==null){const Ct=g.views;y!==null&&(t.setRenderTargetFramebuffer(D,y.framebuffer),t.setRenderTarget(D));let kt=!1;Ct.length!==$.cameras.length&&($.cameras.length=0,kt=!0);for(let oe=0;oe<Ct.length;oe++){const ue=Ct[oe];let Ae=null;if(y!==null)Ae=y.getViewport(ue);else{const Je=_.getViewSubImage(v,ue);Ae=Je.viewport,oe===0&&(t.setRenderTargetTextures(D,Je.colorTexture,Je.depthStencilTexture),t.setRenderTarget(D))}let le=G[oe];le===void 0&&(le=new zi,le.layers.enable(oe),le.viewport=new ln,G[oe]=le),le.matrix.fromArray(ue.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(ue.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),oe===0&&($.matrix.copy(le.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),kt===!0&&$.cameras.push(le)}const Gt=r.enabledFeatures;if(Gt&&Gt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&b){_=a.getBinding();const oe=_.getDepthInformation(Ct[0]);oe&&oe.isValid&&oe.texture&&S.init(oe,r.renderState)}if(Gt&&Gt.includes("camera-access")&&b){t.state.unbindTexture(),_=a.getBinding();for(let oe=0;oe<Ct.length;oe++){const ue=Ct[oe].camera;if(ue){let Ae=x[ue];Ae||(Ae=new Yx,x[ue]=Ae);const le=_.getCameraImage(ue);Ae.sourceTexture=le}}}}for(let Ct=0;Ct<L.length;Ct++){const kt=P[Ct],Gt=L[Ct];kt!==null&&Gt!==void 0&&Gt.update(kt,ft,d||u)}mt&&mt(nt,ft),ft.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:ft}),M=null}const It=new Zx;It.setAnimationLoop(bt),this.setAnimationLoop=function(nt){mt=nt},this.dispose=function(){}}}const Ks=new aa,$C=new sn;function t2(c,t){function n(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function a(S,x){x.color.getRGB(S.fogColor.value,kx(c)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function r(S,x,T,R,D){x.isMeshBasicMaterial||x.isMeshLambertMaterial?o(S,x):x.isMeshToonMaterial?(o(S,x),_(S,x)):x.isMeshPhongMaterial?(o(S,x),g(S,x)):x.isMeshStandardMaterial?(o(S,x),v(S,x),x.isMeshPhysicalMaterial&&y(S,x,D)):x.isMeshMatcapMaterial?(o(S,x),M(S,x)):x.isMeshDepthMaterial?o(S,x):x.isMeshDistanceMaterial?(o(S,x),b(S,x)):x.isMeshNormalMaterial?o(S,x):x.isLineBasicMaterial?(u(S,x),x.isLineDashedMaterial&&f(S,x)):x.isPointsMaterial?p(S,x,T,R):x.isSpriteMaterial?d(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function o(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,n(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,n(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===ti&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,n(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===ti&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,n(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,n(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const T=t.get(x),R=T.envMap,D=T.envMapRotation;R&&(S.envMap.value=R,Ks.copy(D),Ks.x*=-1,Ks.y*=-1,Ks.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Ks.y*=-1,Ks.z*=-1),S.envMapRotation.value.setFromMatrix4($C.makeRotationFromEuler(Ks)),S.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,S.aoMapTransform))}function u(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,n(x.map,S.mapTransform))}function f(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function p(S,x,T,R){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*T,S.scale.value=R*.5,x.map&&(S.map.value=x.map,n(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function d(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,n(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function g(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function _(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function v(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function y(S,x,T){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===ti&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=T.texture,S.transmissionSamplerSize.value.set(T.width,T.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,x){x.matcap&&(S.matcap.value=x.matcap)}function b(S,x){const T=t.get(x).light;S.referencePosition.value.setFromMatrixPosition(T.matrixWorld),S.nearDistance.value=T.shadow.camera.near,S.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:r}}function e2(c,t,n,a){let r={},o={},u=[];const f=c.getParameter(c.MAX_UNIFORM_BUFFER_BINDINGS);function p(T,R){const D=R.program;a.uniformBlockBinding(T,D)}function d(T,R){let D=r[T.id];D===void 0&&(M(T),D=g(T),r[T.id]=D,T.addEventListener("dispose",S));const L=R.program;a.updateUBOMapping(T,L);const P=t.render.frame;o[T.id]!==P&&(v(T),o[T.id]=P)}function g(T){const R=_();T.__bindingPointIndex=R;const D=c.createBuffer(),L=T.__size,P=T.usage;return c.bindBuffer(c.UNIFORM_BUFFER,D),c.bufferData(c.UNIFORM_BUFFER,L,P),c.bindBuffer(c.UNIFORM_BUFFER,null),c.bindBufferBase(c.UNIFORM_BUFFER,R,D),D}function _(){for(let T=0;T<f;T++)if(u.indexOf(T)===-1)return u.push(T),T;return Re("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(T){const R=r[T.id],D=T.uniforms,L=T.__cache;c.bindBuffer(c.UNIFORM_BUFFER,R);for(let P=0,B=D.length;P<B;P++){const W=Array.isArray(D[P])?D[P]:[D[P]];for(let w=0,O=W.length;w<O;w++){const G=W[w];if(y(G,P,w,L)===!0){const $=G.__offset,V=Array.isArray(G.value)?G.value:[G.value];let Q=0;for(let j=0;j<V.length;j++){const z=V[j],H=b(z);typeof z=="number"||typeof z=="boolean"?(G.__data[0]=z,c.bufferSubData(c.UNIFORM_BUFFER,$+Q,G.__data)):z.isMatrix3?(G.__data[0]=z.elements[0],G.__data[1]=z.elements[1],G.__data[2]=z.elements[2],G.__data[3]=0,G.__data[4]=z.elements[3],G.__data[5]=z.elements[4],G.__data[6]=z.elements[5],G.__data[7]=0,G.__data[8]=z.elements[6],G.__data[9]=z.elements[7],G.__data[10]=z.elements[8],G.__data[11]=0):(z.toArray(G.__data,Q),Q+=H.storage/Float32Array.BYTES_PER_ELEMENT)}c.bufferSubData(c.UNIFORM_BUFFER,$,G.__data)}}}c.bindBuffer(c.UNIFORM_BUFFER,null)}function y(T,R,D,L){const P=T.value,B=R+"_"+D;if(L[B]===void 0)return typeof P=="number"||typeof P=="boolean"?L[B]=P:L[B]=P.clone(),!0;{const W=L[B];if(typeof P=="number"||typeof P=="boolean"){if(W!==P)return L[B]=P,!0}else if(W.equals(P)===!1)return W.copy(P),!0}return!1}function M(T){const R=T.uniforms;let D=0;const L=16;for(let B=0,W=R.length;B<W;B++){const w=Array.isArray(R[B])?R[B]:[R[B]];for(let O=0,G=w.length;O<G;O++){const $=w[O],V=Array.isArray($.value)?$.value:[$.value];for(let Q=0,j=V.length;Q<j;Q++){const z=V[Q],H=b(z),Z=D%L,ct=Z%H.boundary,vt=Z+ct;D+=ct,vt!==0&&L-vt<H.storage&&(D+=L-vt),$.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=D,D+=H.storage}}}const P=D%L;return P>0&&(D+=L-P),T.__size=D,T.__cache={},this}function b(T){const R={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(R.boundary=4,R.storage=4):T.isVector2?(R.boundary=8,R.storage=8):T.isVector3||T.isColor?(R.boundary=16,R.storage=12):T.isVector4?(R.boundary=16,R.storage=16):T.isMatrix3?(R.boundary=48,R.storage=48):T.isMatrix4?(R.boundary=64,R.storage=64):T.isTexture?he("WebGLRenderer: Texture samplers can not be part of an uniforms group."):he("WebGLRenderer: Unsupported uniform value type.",T),R}function S(T){const R=T.target;R.removeEventListener("dispose",S);const D=u.indexOf(R.__bindingPointIndex);u.splice(D,1),c.deleteBuffer(r[R.id]),delete r[R.id],delete o[R.id]}function x(){for(const T in r)c.deleteBuffer(r[T]);u=[],r={},o={}}return{bind:p,update:d,dispose:x}}const n2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Zi=null;function i2(){return Zi===null&&(Zi=new j1(n2,16,16,po,Ia),Zi.name="DFG_LUT",Zi.minFilter=zn,Zi.magFilter=zn,Zi.wrapS=za,Zi.wrapT=za,Zi.generateMipmaps=!1,Zi.needsUpdate=!0),Zi}class a2{constructor(t={}){const{canvas:n=S1(),context:a=null,depth:r=!0,stencil:o=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:y=ui}=t;this.isWebGLRenderer=!0;let M;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=a.getContextAttributes().alpha}else M=u;const b=y,S=new Set([Ip,Fp,Bp]),x=new Set([ui,ia,Cl,Dl,zp,Pp]),T=new Uint32Array(4),R=new Int32Array(4);let D=null,L=null;const P=[],B=[];let W=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let O=!1;this._outputColorSpace=qn;let G=0,$=0,V=null,Q=-1,j=null;const z=new ln,H=new ln;let Z=null;const ct=new Le(0);let vt=0,F=n.width,Y=n.height,mt=1,bt=null,It=null;const nt=new ln(0,0,F,Y),ft=new ln(0,0,F,Y);let Ct=!1;const kt=new Xp;let Gt=!1,pe=!1;const Qe=new sn,oe=new lt,ue=new ln,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let le=!1;function Je(){return V===null?mt:1}let X=a;function je(U,tt){return n.getContext(U,tt)}try{const U={alpha:!0,depth:r,stencil:o,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Lp}`),n.addEventListener("webglcontextlost",ae,!1),n.addEventListener("webglcontextrestored",He,!1),n.addEventListener("webglcontextcreationerror",we,!1),X===null){const tt="webgl2";if(X=je(tt,U),X===null)throw je(tt)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(U){throw Re("WebGLRenderer: "+U.message),U}let ve,Se,jt,I,A,J,xt,Tt,pt,Zt,Lt,qt,ie,ht,gt,Nt,wt,Et,$t,q,Ut,Rt,Ot,At;function yt(){ve=new iR(X),ve.init(),Rt=new jC(X,ve),Se=new jw(X,ve,t,Rt),jt=new WC(X,ve),Se.reversedDepthBuffer&&v&&jt.buffers.depth.setReversed(!0),I=new rR(X),A=new NC,J=new YC(X,ve,jt,A,Se,Rt,I),xt=new Kw(w),Tt=new nR(w),pt=new uT(X),Ot=new Ww(X,pt),Zt=new aR(X,pt,I,Ot),Lt=new lR(X,Zt,pt,I),$t=new oR(X,Se,J),Nt=new Zw(A),qt=new DC(w,xt,Tt,ve,Se,Ot,Nt),ie=new t2(w,A),ht=new LC,gt=new IC(ve),Et=new Xw(w,xt,Tt,jt,Lt,M,p),wt=new qC(w,Lt,Se),At=new e2(X,I,Se,jt),q=new Yw(X,ve,I),Ut=new sR(X,ve,I),I.programs=qt.programs,w.capabilities=Se,w.extensions=ve,w.properties=A,w.renderLists=ht,w.shadowMap=wt,w.state=jt,w.info=I}yt(),b!==ui&&(W=new uR(b,n.width,n.height,r,o));const Dt=new JC(w,X);this.xr=Dt,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const U=ve.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){const U=ve.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return mt},this.setPixelRatio=function(U){U!==void 0&&(mt=U,this.setSize(F,Y,!1))},this.getSize=function(U){return U.set(F,Y)},this.setSize=function(U,tt,ut=!0){if(Dt.isPresenting){he("WebGLRenderer: Can't change size while VR device is presenting.");return}F=U,Y=tt,n.width=Math.floor(U*mt),n.height=Math.floor(tt*mt),ut===!0&&(n.style.width=U+"px",n.style.height=tt+"px"),W!==null&&W.setSize(n.width,n.height),this.setViewport(0,0,U,tt)},this.getDrawingBufferSize=function(U){return U.set(F*mt,Y*mt).floor()},this.setDrawingBufferSize=function(U,tt,ut){F=U,Y=tt,mt=ut,n.width=Math.floor(U*ut),n.height=Math.floor(tt*ut),this.setViewport(0,0,U,tt)},this.setEffects=function(U){if(b===ui){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(U){for(let tt=0;tt<U.length;tt++)if(U[tt].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}W.setEffects(U||[])},this.getCurrentViewport=function(U){return U.copy(z)},this.getViewport=function(U){return U.copy(nt)},this.setViewport=function(U,tt,ut,rt){U.isVector4?nt.set(U.x,U.y,U.z,U.w):nt.set(U,tt,ut,rt),jt.viewport(z.copy(nt).multiplyScalar(mt).round())},this.getScissor=function(U){return U.copy(ft)},this.setScissor=function(U,tt,ut,rt){U.isVector4?ft.set(U.x,U.y,U.z,U.w):ft.set(U,tt,ut,rt),jt.scissor(H.copy(ft).multiplyScalar(mt).round())},this.getScissorTest=function(){return Ct},this.setScissorTest=function(U){jt.setScissorTest(Ct=U)},this.setOpaqueSort=function(U){bt=U},this.setTransparentSort=function(U){It=U},this.getClearColor=function(U){return U.copy(Et.getClearColor())},this.setClearColor=function(){Et.setClearColor(...arguments)},this.getClearAlpha=function(){return Et.getClearAlpha()},this.setClearAlpha=function(){Et.setClearAlpha(...arguments)},this.clear=function(U=!0,tt=!0,ut=!0){let rt=0;if(U){let it=!1;if(V!==null){const zt=V.texture.format;it=S.has(zt)}if(it){const zt=V.texture.type,Vt=x.has(zt),Pt=Et.getClearColor(),Xt=Et.getClearAlpha(),Kt=Pt.r,ne=Pt.g,Qt=Pt.b;Vt?(T[0]=Kt,T[1]=ne,T[2]=Qt,T[3]=Xt,X.clearBufferuiv(X.COLOR,0,T)):(R[0]=Kt,R[1]=ne,R[2]=Qt,R[3]=Xt,X.clearBufferiv(X.COLOR,0,R))}else rt|=X.COLOR_BUFFER_BIT}tt&&(rt|=X.DEPTH_BUFFER_BIT),ut&&(rt|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ae,!1),n.removeEventListener("webglcontextrestored",He,!1),n.removeEventListener("webglcontextcreationerror",we,!1),Et.dispose(),ht.dispose(),gt.dispose(),A.dispose(),xt.dispose(),Tt.dispose(),Lt.dispose(),Ot.dispose(),At.dispose(),qt.dispose(),Dt.dispose(),Dt.removeEventListener("sessionstart",lr),Dt.removeEventListener("sessionend",Mo),Gi.stop()};function ae(U){U.preventDefault(),f_("WebGLRenderer: Context Lost."),O=!0}function He(){f_("WebGLRenderer: Context Restored."),O=!1;const U=I.autoReset,tt=wt.enabled,ut=wt.autoUpdate,rt=wt.needsUpdate,it=wt.type;yt(),I.autoReset=U,wt.enabled=tt,wt.autoUpdate=ut,wt.needsUpdate=rt,wt.type=it}function we(U){Re("WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function Pn(U){const tt=U.target;tt.removeEventListener("dispose",Pn),bi(tt)}function bi(U){Il(U),A.remove(U)}function Il(U){const tt=A.get(U).programs;tt!==void 0&&(tt.forEach(function(ut){qt.releaseProgram(ut)}),U.isShaderMaterial&&qt.releaseShaderCache(U))}this.renderBufferDirect=function(U,tt,ut,rt,it,zt){tt===null&&(tt=Ae);const Vt=it.isMesh&&it.matrixWorld.determinant()<0,Pt=As(U,tt,ut,rt,it);jt.setMaterial(rt,Vt);let Xt=ut.index,Kt=1;if(rt.wireframe===!0){if(Xt=Zt.getWireframeAttribute(ut),Xt===void 0)return;Kt=2}const ne=ut.drawRange,Qt=ut.attributes.position;let se=ne.start*Kt,ze=(ne.start+ne.count)*Kt;zt!==null&&(se=Math.max(se,zt.start*Kt),ze=Math.min(ze,(zt.start+zt.count)*Kt)),Xt!==null?(se=Math.max(se,0),ze=Math.min(ze,Xt.count)):Qt!=null&&(se=Math.max(se,0),ze=Math.min(ze,Qt.count));const nn=ze-se;if(nn<0||nn===1/0)return;Ot.setup(it,rt,Pt,ut,Xt);let Ke,Ie=q;if(Xt!==null&&(Ke=pt.get(Xt),Ie=Ut,Ie.setIndex(Ke)),it.isMesh)rt.wireframe===!0?(jt.setLineWidth(rt.wireframeLinewidth*Je()),Ie.setMode(X.LINES)):Ie.setMode(X.TRIANGLES);else if(it.isLine){let te=rt.linewidth;te===void 0&&(te=1),jt.setLineWidth(te*Je()),it.isLineSegments?Ie.setMode(X.LINES):it.isLineLoop?Ie.setMode(X.LINE_LOOP):Ie.setMode(X.LINE_STRIP)}else it.isPoints?Ie.setMode(X.POINTS):it.isSprite&&Ie.setMode(X.TRIANGLES);if(it.isBatchedMesh)if(it._multiDrawInstances!==null)Nl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ie.renderMultiDrawInstances(it._multiDrawStarts,it._multiDrawCounts,it._multiDrawCount,it._multiDrawInstances);else if(ve.get("WEBGL_multi_draw"))Ie.renderMultiDraw(it._multiDrawStarts,it._multiDrawCounts,it._multiDrawCount);else{const te=it._multiDrawStarts,Pe=it._multiDrawCounts,ce=it._multiDrawCount,Tn=Xt?pt.get(Xt).bytesPerElement:1,ra=A.get(rt).currentProgram.getUniforms();for(let An=0;An<ce;An++)ra.setValue(X,"_gl_DrawID",An),Ie.render(te[An]/Tn,Pe[An])}else if(it.isInstancedMesh)Ie.renderInstances(se,nn,it.count);else if(ut.isInstancedBufferGeometry){const te=ut._maxInstanceCount!==void 0?ut._maxInstanceCount:1/0,Pe=Math.min(ut.instanceCount,te);Ie.renderInstances(se,nn,Pe)}else Ie.render(se,nn)};function yo(U,tt,ut){U.transparent===!0&&U.side===Oa&&U.forceSinglePass===!1?(U.side=ti,U.needsUpdate=!0,ur(U,tt,ut),U.side=Ts,U.needsUpdate=!0,ur(U,tt,ut),U.side=Oa):ur(U,tt,ut)}this.compile=function(U,tt,ut=null){ut===null&&(ut=U),L=gt.get(ut),L.init(tt),B.push(L),ut.traverseVisible(function(it){it.isLight&&it.layers.test(tt.layers)&&(L.pushLight(it),it.castShadow&&L.pushShadow(it))}),U!==ut&&U.traverseVisible(function(it){it.isLight&&it.layers.test(tt.layers)&&(L.pushLight(it),it.castShadow&&L.pushShadow(it))}),L.setupLights();const rt=new Set;return U.traverse(function(it){if(!(it.isMesh||it.isPoints||it.isLine||it.isSprite))return;const zt=it.material;if(zt)if(Array.isArray(zt))for(let Vt=0;Vt<zt.length;Vt++){const Pt=zt[Vt];yo(Pt,ut,it),rt.add(Pt)}else yo(zt,ut,it),rt.add(zt)}),L=B.pop(),rt},this.compileAsync=function(U,tt,ut=null){const rt=this.compile(U,tt,ut);return new Promise(it=>{function zt(){if(rt.forEach(function(Vt){A.get(Vt).currentProgram.isReady()&&rt.delete(Vt)}),rt.size===0){it(U);return}setTimeout(zt,10)}ve.get("KHR_parallel_shader_compile")!==null?zt():setTimeout(zt,10)})};let or=null;function So(U){or&&or(U)}function lr(){Gi.stop()}function Mo(){Gi.start()}const Gi=new Zx;Gi.setAnimationLoop(So),typeof self<"u"&&Gi.setContext(self),this.setAnimationLoop=function(U){or=U,Dt.setAnimationLoop(U),U===null?Gi.stop():Gi.start()},Dt.addEventListener("sessionstart",lr),Dt.addEventListener("sessionend",Mo),this.render=function(U,tt){if(tt!==void 0&&tt.isCamera!==!0){Re("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;const ut=Dt.enabled===!0&&Dt.isPresenting===!0,rt=W!==null&&(V===null||ut)&&W.begin(w,V);if(U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),tt.parent===null&&tt.matrixWorldAutoUpdate===!0&&tt.updateMatrixWorld(),Dt.enabled===!0&&Dt.isPresenting===!0&&(W===null||W.isCompositing()===!1)&&(Dt.cameraAutoUpdate===!0&&Dt.updateCamera(tt),tt=Dt.getCamera()),U.isScene===!0&&U.onBeforeRender(w,U,tt,V),L=gt.get(U,B.length),L.init(tt),B.push(L),Qe.multiplyMatrices(tt.projectionMatrix,tt.matrixWorldInverse),kt.setFromProjectionMatrix(Qe,$i,tt.reversedDepth),pe=this.localClippingEnabled,Gt=Nt.init(this.clippingPlanes,pe),D=ht.get(U,P.length),D.init(),P.push(D),Dt.enabled===!0&&Dt.isPresenting===!0){const Vt=w.xr.getDepthSensingMesh();Vt!==null&&hi(Vt,tt,-1/0,w.sortObjects)}hi(U,tt,0,w.sortObjects),D.finish(),w.sortObjects===!0&&D.sort(bt,It),le=Dt.enabled===!1||Dt.isPresenting===!1||Dt.hasDepthSensing()===!1,le&&Et.addToRenderList(D,U),this.info.render.frame++,Gt===!0&&Nt.beginShadows();const it=L.state.shadowsArray;if(wt.render(it,U,tt),Gt===!0&&Nt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(rt&&W.hasRenderPass())===!1){const Vt=D.opaque,Pt=D.transmissive;if(L.setupLights(),tt.isArrayCamera){const Xt=tt.cameras;if(Pt.length>0)for(let Kt=0,ne=Xt.length;Kt<ne;Kt++){const Qt=Xt[Kt];bn(Vt,Pt,U,Qt)}le&&Et.render(U);for(let Kt=0,ne=Xt.length;Kt<ne;Kt++){const Qt=Xt[Kt];fn(D,U,Qt,Qt.viewport)}}else Pt.length>0&&bn(Vt,Pt,U,tt),le&&Et.render(U),fn(D,U,tt)}V!==null&&$===0&&(J.updateMultisampleRenderTarget(V),J.updateRenderTargetMipmap(V)),rt&&W.end(w),U.isScene===!0&&U.onAfterRender(w,U,tt),Ot.resetDefaultState(),Q=-1,j=null,B.pop(),B.length>0?(L=B[B.length-1],Gt===!0&&Nt.setGlobalState(w.clippingPlanes,L.state.camera)):L=null,P.pop(),P.length>0?D=P[P.length-1]:D=null};function hi(U,tt,ut,rt){if(U.visible===!1)return;if(U.layers.test(tt.layers)){if(U.isGroup)ut=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(tt);else if(U.isLight)L.pushLight(U),U.castShadow&&L.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||kt.intersectsSprite(U)){rt&&ue.setFromMatrixPosition(U.matrixWorld).applyMatrix4(Qe);const Vt=Lt.update(U),Pt=U.material;Pt.visible&&D.push(U,Vt,Pt,ut,ue.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||kt.intersectsObject(U))){const Vt=Lt.update(U),Pt=U.material;if(rt&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),ue.copy(U.boundingSphere.center)):(Vt.boundingSphere===null&&Vt.computeBoundingSphere(),ue.copy(Vt.boundingSphere.center)),ue.applyMatrix4(U.matrixWorld).applyMatrix4(Qe)),Array.isArray(Pt)){const Xt=Vt.groups;for(let Kt=0,ne=Xt.length;Kt<ne;Kt++){const Qt=Xt[Kt],se=Pt[Qt.materialIndex];se&&se.visible&&D.push(U,Vt,se,ut,ue.z,Qt)}}else Pt.visible&&D.push(U,Vt,Pt,ut,ue.z,null)}}const zt=U.children;for(let Vt=0,Pt=zt.length;Vt<Pt;Vt++)hi(zt[Vt],tt,ut,rt)}function fn(U,tt,ut,rt){const{opaque:it,transmissive:zt,transparent:Vt}=U;L.setupLightsView(ut),Gt===!0&&Nt.setGlobalState(w.clippingPlanes,ut),rt&&jt.viewport(z.copy(rt)),it.length>0&&Ti(it,tt,ut),zt.length>0&&Ti(zt,tt,ut),Vt.length>0&&Ti(Vt,tt,ut),jt.buffers.depth.setTest(!0),jt.buffers.depth.setMask(!0),jt.buffers.color.setMask(!0),jt.setPolygonOffset(!1)}function bn(U,tt,ut,rt){if((ut.isScene===!0?ut.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[rt.id]===void 0){const se=ve.has("EXT_color_buffer_half_float")||ve.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[rt.id]=new ea(1,1,{generateMipmaps:!0,type:se?Ia:ui,minFilter:Es,samples:Se.samples,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ce.workingColorSpace})}const zt=L.state.transmissionRenderTarget[rt.id],Vt=rt.viewport||z;zt.setSize(Vt.z*w.transmissionResolutionScale,Vt.w*w.transmissionResolutionScale);const Pt=w.getRenderTarget(),Xt=w.getActiveCubeFace(),Kt=w.getActiveMipmapLevel();w.setRenderTarget(zt),w.getClearColor(ct),vt=w.getClearAlpha(),vt<1&&w.setClearColor(16777215,.5),w.clear(),le&&Et.render(ut);const ne=w.toneMapping;w.toneMapping=Ii;const Qt=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),L.setupLightsView(rt),Gt===!0&&Nt.setGlobalState(w.clippingPlanes,rt),Ti(U,ut,rt),J.updateMultisampleRenderTarget(zt),J.updateRenderTargetMipmap(zt),ve.has("WEBGL_multisampled_render_to_texture")===!1){let se=!1;for(let ze=0,nn=tt.length;ze<nn;ze++){const Ke=tt[ze],{object:Ie,geometry:te,material:Pe,group:ce}=Ke;if(Pe.side===Oa&&Ie.layers.test(rt.layers)){const Tn=Pe.side;Pe.side=ti,Pe.needsUpdate=!0,cr(Ie,ut,rt,te,Pe,ce),Pe.side=Tn,Pe.needsUpdate=!0,se=!0}}se===!0&&(J.updateMultisampleRenderTarget(zt),J.updateRenderTargetMipmap(zt))}w.setRenderTarget(Pt,Xt,Kt),w.setClearColor(ct,vt),Qt!==void 0&&(rt.viewport=Qt),w.toneMapping=ne}function Ti(U,tt,ut){const rt=tt.isScene===!0?tt.overrideMaterial:null;for(let it=0,zt=U.length;it<zt;it++){const Vt=U[it],{object:Pt,geometry:Xt,group:Kt}=Vt;let ne=Vt.material;ne.allowOverride===!0&&rt!==null&&(ne=rt),Pt.layers.test(ut.layers)&&cr(Pt,tt,ut,Xt,ne,Kt)}}function cr(U,tt,ut,rt,it,zt){U.onBeforeRender(w,tt,ut,rt,it,zt),U.modelViewMatrix.multiplyMatrices(ut.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),it.onBeforeRender(w,tt,ut,rt,U,zt),it.transparent===!0&&it.side===Oa&&it.forceSinglePass===!1?(it.side=ti,it.needsUpdate=!0,w.renderBufferDirect(ut,tt,rt,it,U,zt),it.side=Ts,it.needsUpdate=!0,w.renderBufferDirect(ut,tt,rt,it,U,zt),it.side=Oa):w.renderBufferDirect(ut,tt,rt,it,U,zt),U.onAfterRender(w,tt,ut,rt,it,zt)}function ur(U,tt,ut){tt.isScene!==!0&&(tt=Ae);const rt=A.get(U),it=L.state.lights,zt=L.state.shadowsArray,Vt=it.state.version,Pt=qt.getParameters(U,it.state,zt,tt,ut),Xt=qt.getProgramCacheKey(Pt);let Kt=rt.programs;rt.environment=U.isMeshStandardMaterial?tt.environment:null,rt.fog=tt.fog,rt.envMap=(U.isMeshStandardMaterial?Tt:xt).get(U.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&U.envMap===null?tt.environmentRotation:U.envMapRotation,Kt===void 0&&(U.addEventListener("dispose",Pn),Kt=new Map,rt.programs=Kt);let ne=Kt.get(Xt);if(ne!==void 0){if(rt.currentProgram===ne&&rt.lightsStateVersion===Vt)return Eo(U,Pt),ne}else Pt.uniforms=qt.getUniforms(U),U.onBeforeCompile(Pt,w),ne=qt.acquireProgram(Pt,Xt),Kt.set(Xt,ne),rt.uniforms=Pt.uniforms;const Qt=rt.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(Qt.clippingPlanes=Nt.uniform),Eo(U,Pt),rt.needsLights=Va(U),rt.lightsStateVersion=Vt,rt.needsLights&&(Qt.ambientLightColor.value=it.state.ambient,Qt.lightProbe.value=it.state.probe,Qt.directionalLights.value=it.state.directional,Qt.directionalLightShadows.value=it.state.directionalShadow,Qt.spotLights.value=it.state.spot,Qt.spotLightShadows.value=it.state.spotShadow,Qt.rectAreaLights.value=it.state.rectArea,Qt.ltc_1.value=it.state.rectAreaLTC1,Qt.ltc_2.value=it.state.rectAreaLTC2,Qt.pointLights.value=it.state.point,Qt.pointLightShadows.value=it.state.pointShadow,Qt.hemisphereLights.value=it.state.hemi,Qt.directionalShadowMap.value=it.state.directionalShadowMap,Qt.directionalShadowMatrix.value=it.state.directionalShadowMatrix,Qt.spotShadowMap.value=it.state.spotShadowMap,Qt.spotLightMatrix.value=it.state.spotLightMatrix,Qt.spotLightMap.value=it.state.spotLightMap,Qt.pointShadowMap.value=it.state.pointShadowMap,Qt.pointShadowMatrix.value=it.state.pointShadowMatrix),rt.currentProgram=ne,rt.uniformsList=null,ne}function Hl(U){if(U.uniformsList===null){const tt=U.currentProgram.getUniforms();U.uniformsList=wu.seqWithValue(tt.seq,U.uniforms)}return U.uniformsList}function Eo(U,tt){const ut=A.get(U);ut.outputColorSpace=tt.outputColorSpace,ut.batching=tt.batching,ut.batchingColor=tt.batchingColor,ut.instancing=tt.instancing,ut.instancingColor=tt.instancingColor,ut.instancingMorph=tt.instancingMorph,ut.skinning=tt.skinning,ut.morphTargets=tt.morphTargets,ut.morphNormals=tt.morphNormals,ut.morphColors=tt.morphColors,ut.morphTargetsCount=tt.morphTargetsCount,ut.numClippingPlanes=tt.numClippingPlanes,ut.numIntersection=tt.numClipIntersection,ut.vertexAlphas=tt.vertexAlphas,ut.vertexTangents=tt.vertexTangents,ut.toneMapping=tt.toneMapping}function As(U,tt,ut,rt,it){tt.isScene!==!0&&(tt=Ae),J.resetTextureUnits();const zt=tt.fog,Vt=rt.isMeshStandardMaterial?tt.environment:null,Pt=V===null?w.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:mo,Xt=(rt.isMeshStandardMaterial?Tt:xt).get(rt.envMap||Vt),Kt=rt.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,ne=!!ut.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),Qt=!!ut.morphAttributes.position,se=!!ut.morphAttributes.normal,ze=!!ut.morphAttributes.color;let nn=Ii;rt.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(nn=w.toneMapping);const Ke=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,Ie=Ke!==void 0?Ke.length:0,te=A.get(rt),Pe=L.state.lights;if(Gt===!0&&(pe===!0||U!==j)){const Rn=U===j&&rt.id===Q;Nt.setState(rt,U,Rn)}let ce=!1;rt.version===te.__version?(te.needsLights&&te.lightsStateVersion!==Pe.state.version||te.outputColorSpace!==Pt||it.isBatchedMesh&&te.batching===!1||!it.isBatchedMesh&&te.batching===!0||it.isBatchedMesh&&te.batchingColor===!0&&it.colorTexture===null||it.isBatchedMesh&&te.batchingColor===!1&&it.colorTexture!==null||it.isInstancedMesh&&te.instancing===!1||!it.isInstancedMesh&&te.instancing===!0||it.isSkinnedMesh&&te.skinning===!1||!it.isSkinnedMesh&&te.skinning===!0||it.isInstancedMesh&&te.instancingColor===!0&&it.instanceColor===null||it.isInstancedMesh&&te.instancingColor===!1&&it.instanceColor!==null||it.isInstancedMesh&&te.instancingMorph===!0&&it.morphTexture===null||it.isInstancedMesh&&te.instancingMorph===!1&&it.morphTexture!==null||te.envMap!==Xt||rt.fog===!0&&te.fog!==zt||te.numClippingPlanes!==void 0&&(te.numClippingPlanes!==Nt.numPlanes||te.numIntersection!==Nt.numIntersection)||te.vertexAlphas!==Kt||te.vertexTangents!==ne||te.morphTargets!==Qt||te.morphNormals!==se||te.morphColors!==ze||te.toneMapping!==nn||te.morphTargetsCount!==Ie)&&(ce=!0):(ce=!0,te.__version=rt.version);let Tn=te.currentProgram;ce===!0&&(Tn=ur(rt,tt,it));let ra=!1,An=!1,di=!1;const Ge=Tn.getUniforms(),wn=te.uniforms;if(jt.useProgram(Tn.program)&&(ra=!0,An=!0,di=!0),rt.id!==Q&&(Q=rt.id,An=!0),ra||j!==U){jt.buffers.depth.getReversed()&&U.reversedDepth!==!0&&(U._reversedDepth=!0,U.updateProjectionMatrix()),Ge.setValue(X,"projectionMatrix",U.projectionMatrix),Ge.setValue(X,"viewMatrix",U.matrixWorldInverse);const Cn=Ge.map.cameraPosition;Cn!==void 0&&Cn.setValue(X,oe.setFromMatrixPosition(U.matrixWorld)),Se.logarithmicDepthBuffer&&Ge.setValue(X,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&Ge.setValue(X,"isOrthographic",U.isOrthographicCamera===!0),j!==U&&(j=U,An=!0,di=!0)}if(te.needsLights&&(Pe.state.directionalShadowMap.length>0&&Ge.setValue(X,"directionalShadowMap",Pe.state.directionalShadowMap,J),Pe.state.spotShadowMap.length>0&&Ge.setValue(X,"spotShadowMap",Pe.state.spotShadowMap,J),Pe.state.pointShadowMap.length>0&&Ge.setValue(X,"pointShadowMap",Pe.state.pointShadowMap,J)),it.isSkinnedMesh){Ge.setOptional(X,it,"bindMatrix"),Ge.setOptional(X,it,"bindMatrixInverse");const Rn=it.skeleton;Rn&&(Rn.boneTexture===null&&Rn.computeBoneTexture(),Ge.setValue(X,"boneTexture",Rn.boneTexture,J))}it.isBatchedMesh&&(Ge.setOptional(X,it,"batchingTexture"),Ge.setValue(X,"batchingTexture",it._matricesTexture,J),Ge.setOptional(X,it,"batchingIdTexture"),Ge.setValue(X,"batchingIdTexture",it._indirectTexture,J),Ge.setOptional(X,it,"batchingColorTexture"),it._colorsTexture!==null&&Ge.setValue(X,"batchingColorTexture",it._colorsTexture,J));const vn=ut.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&$t.update(it,ut,Tn),(An||te.receiveShadow!==it.receiveShadow)&&(te.receiveShadow=it.receiveShadow,Ge.setValue(X,"receiveShadow",it.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(wn.envMap.value=Xt,wn.flipEnvMap.value=Xt.isCubeTexture&&Xt.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&tt.environment!==null&&(wn.envMapIntensity.value=tt.environmentIntensity),wn.dfgLUT!==void 0&&(wn.dfgLUT.value=i2()),An&&(Ge.setValue(X,"toneMappingExposure",w.toneMappingExposure),te.needsLights&&bo(wn,di),zt&&rt.fog===!0&&ie.refreshFogUniforms(wn,zt),ie.refreshMaterialUniforms(wn,rt,mt,Y,L.state.transmissionRenderTarget[U.id]),wu.upload(X,Hl(te),wn,J)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(wu.upload(X,Hl(te),wn,J),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&Ge.setValue(X,"center",it.center),Ge.setValue(X,"modelViewMatrix",it.modelViewMatrix),Ge.setValue(X,"normalMatrix",it.normalMatrix),Ge.setValue(X,"modelMatrix",it.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const Rn=rt.uniformsGroups;for(let Cn=0,fr=Rn.length;Cn<fr;Cn++){const Ai=Rn[Cn];At.update(Ai,Tn),At.bind(Ai,Tn)}}return Tn}function bo(U,tt){U.ambientLightColor.needsUpdate=tt,U.lightProbe.needsUpdate=tt,U.directionalLights.needsUpdate=tt,U.directionalLightShadows.needsUpdate=tt,U.pointLights.needsUpdate=tt,U.pointLightShadows.needsUpdate=tt,U.spotLights.needsUpdate=tt,U.spotLightShadows.needsUpdate=tt,U.rectAreaLights.needsUpdate=tt,U.hemisphereLights.needsUpdate=tt}function Va(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(U,tt,ut){const rt=A.get(U);rt.__autoAllocateDepthBuffer=U.resolveDepthBuffer===!1,rt.__autoAllocateDepthBuffer===!1&&(rt.__useRenderToTexture=!1),A.get(U.texture).__webglTexture=tt,A.get(U.depthTexture).__webglTexture=rt.__autoAllocateDepthBuffer?void 0:ut,rt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(U,tt){const ut=A.get(U);ut.__webglFramebuffer=tt,ut.__useDefaultFramebuffer=tt===void 0};const ka=X.createFramebuffer();this.setRenderTarget=function(U,tt=0,ut=0){V=U,G=tt,$=ut;let rt=null,it=!1,zt=!1;if(U){const Pt=A.get(U);if(Pt.__useDefaultFramebuffer!==void 0){jt.bindFramebuffer(X.FRAMEBUFFER,Pt.__webglFramebuffer),z.copy(U.viewport),H.copy(U.scissor),Z=U.scissorTest,jt.viewport(z),jt.scissor(H),jt.setScissorTest(Z),Q=-1;return}else if(Pt.__webglFramebuffer===void 0)J.setupRenderTarget(U);else if(Pt.__hasExternalTextures)J.rebindTextures(U,A.get(U.texture).__webglTexture,A.get(U.depthTexture).__webglTexture);else if(U.depthBuffer){const ne=U.depthTexture;if(Pt.__boundDepthTexture!==ne){if(ne!==null&&A.has(ne)&&(U.width!==ne.image.width||U.height!==ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(U)}}const Xt=U.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(zt=!0);const Kt=A.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(Kt[tt])?rt=Kt[tt][ut]:rt=Kt[tt],it=!0):U.samples>0&&J.useMultisampledRTT(U)===!1?rt=A.get(U).__webglMultisampledFramebuffer:Array.isArray(Kt)?rt=Kt[ut]:rt=Kt,z.copy(U.viewport),H.copy(U.scissor),Z=U.scissorTest}else z.copy(nt).multiplyScalar(mt).floor(),H.copy(ft).multiplyScalar(mt).floor(),Z=Ct;if(ut!==0&&(rt=ka),jt.bindFramebuffer(X.FRAMEBUFFER,rt)&&jt.drawBuffers(U,rt),jt.viewport(z),jt.scissor(H),jt.setScissorTest(Z),it){const Pt=A.get(U.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Pt.__webglTexture,ut)}else if(zt){const Pt=tt;for(let Xt=0;Xt<U.textures.length;Xt++){const Kt=A.get(U.textures[Xt]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+Xt,Kt.__webglTexture,ut,Pt)}}else if(U!==null&&ut!==0){const Pt=A.get(U.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Pt.__webglTexture,ut)}Q=-1},this.readRenderTargetPixels=function(U,tt,ut,rt,it,zt,Vt,Pt=0){if(!(U&&U.isWebGLRenderTarget)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xt=A.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Vt!==void 0&&(Xt=Xt[Vt]),Xt){jt.bindFramebuffer(X.FRAMEBUFFER,Xt);try{const Kt=U.textures[Pt],ne=Kt.format,Qt=Kt.type;if(!Se.textureFormatReadable(ne)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Se.textureTypeReadable(Qt)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}tt>=0&&tt<=U.width-rt&&ut>=0&&ut<=U.height-it&&(U.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Pt),X.readPixels(tt,ut,rt,it,Rt.convert(ne),Rt.convert(Qt),zt))}finally{const Kt=V!==null?A.get(V).__webglFramebuffer:null;jt.bindFramebuffer(X.FRAMEBUFFER,Kt)}}},this.readRenderTargetPixelsAsync=async function(U,tt,ut,rt,it,zt,Vt,Pt=0){if(!(U&&U.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xt=A.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Vt!==void 0&&(Xt=Xt[Vt]),Xt)if(tt>=0&&tt<=U.width-rt&&ut>=0&&ut<=U.height-it){jt.bindFramebuffer(X.FRAMEBUFFER,Xt);const Kt=U.textures[Pt],ne=Kt.format,Qt=Kt.type;if(!Se.textureFormatReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Se.textureTypeReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const se=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,se),X.bufferData(X.PIXEL_PACK_BUFFER,zt.byteLength,X.STREAM_READ),U.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Pt),X.readPixels(tt,ut,rt,it,Rt.convert(ne),Rt.convert(Qt),0);const ze=V!==null?A.get(V).__webglFramebuffer:null;jt.bindFramebuffer(X.FRAMEBUFFER,ze);const nn=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await M1(X,nn,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,se),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,zt),X.deleteBuffer(se),X.deleteSync(nn),zt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(U,tt=null,ut=0){const rt=Math.pow(2,-ut),it=Math.floor(U.image.width*rt),zt=Math.floor(U.image.height*rt),Vt=tt!==null?tt.x:0,Pt=tt!==null?tt.y:0;J.setTexture2D(U,0),X.copyTexSubImage2D(X.TEXTURE_2D,ut,0,0,Vt,Pt,it,zt),jt.unbindTexture()};const ws=X.createFramebuffer(),qa=X.createFramebuffer();this.copyTextureToTexture=function(U,tt,ut=null,rt=null,it=0,zt=null){zt===null&&(it!==0?(Nl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),zt=it,it=0):zt=0);let Vt,Pt,Xt,Kt,ne,Qt,se,ze,nn;const Ke=U.isCompressedTexture?U.mipmaps[zt]:U.image;if(ut!==null)Vt=ut.max.x-ut.min.x,Pt=ut.max.y-ut.min.y,Xt=ut.isBox3?ut.max.z-ut.min.z:1,Kt=ut.min.x,ne=ut.min.y,Qt=ut.isBox3?ut.min.z:0;else{const vn=Math.pow(2,-it);Vt=Math.floor(Ke.width*vn),Pt=Math.floor(Ke.height*vn),U.isDataArrayTexture?Xt=Ke.depth:U.isData3DTexture?Xt=Math.floor(Ke.depth*vn):Xt=1,Kt=0,ne=0,Qt=0}rt!==null?(se=rt.x,ze=rt.y,nn=rt.z):(se=0,ze=0,nn=0);const Ie=Rt.convert(tt.format),te=Rt.convert(tt.type);let Pe;tt.isData3DTexture?(J.setTexture3D(tt,0),Pe=X.TEXTURE_3D):tt.isDataArrayTexture||tt.isCompressedArrayTexture?(J.setTexture2DArray(tt,0),Pe=X.TEXTURE_2D_ARRAY):(J.setTexture2D(tt,0),Pe=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,tt.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,tt.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,tt.unpackAlignment);const ce=X.getParameter(X.UNPACK_ROW_LENGTH),Tn=X.getParameter(X.UNPACK_IMAGE_HEIGHT),ra=X.getParameter(X.UNPACK_SKIP_PIXELS),An=X.getParameter(X.UNPACK_SKIP_ROWS),di=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,Ke.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Ke.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Kt),X.pixelStorei(X.UNPACK_SKIP_ROWS,ne),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Qt);const Ge=U.isDataArrayTexture||U.isData3DTexture,wn=tt.isDataArrayTexture||tt.isData3DTexture;if(U.isDepthTexture){const vn=A.get(U),Rn=A.get(tt),Cn=A.get(vn.__renderTarget),fr=A.get(Rn.__renderTarget);jt.bindFramebuffer(X.READ_FRAMEBUFFER,Cn.__webglFramebuffer),jt.bindFramebuffer(X.DRAW_FRAMEBUFFER,fr.__webglFramebuffer);for(let Ai=0;Ai<Xt;Ai++)Ge&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,A.get(U).__webglTexture,it,Qt+Ai),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,A.get(tt).__webglTexture,zt,nn+Ai)),X.blitFramebuffer(Kt,ne,Vt,Pt,se,ze,Vt,Pt,X.DEPTH_BUFFER_BIT,X.NEAREST);jt.bindFramebuffer(X.READ_FRAMEBUFFER,null),jt.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(it!==0||U.isRenderTargetTexture||A.has(U)){const vn=A.get(U),Rn=A.get(tt);jt.bindFramebuffer(X.READ_FRAMEBUFFER,ws),jt.bindFramebuffer(X.DRAW_FRAMEBUFFER,qa);for(let Cn=0;Cn<Xt;Cn++)Ge?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,vn.__webglTexture,it,Qt+Cn):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,vn.__webglTexture,it),wn?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Rn.__webglTexture,zt,nn+Cn):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Rn.__webglTexture,zt),it!==0?X.blitFramebuffer(Kt,ne,Vt,Pt,se,ze,Vt,Pt,X.COLOR_BUFFER_BIT,X.NEAREST):wn?X.copyTexSubImage3D(Pe,zt,se,ze,nn+Cn,Kt,ne,Vt,Pt):X.copyTexSubImage2D(Pe,zt,se,ze,Kt,ne,Vt,Pt);jt.bindFramebuffer(X.READ_FRAMEBUFFER,null),jt.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else wn?U.isDataTexture||U.isData3DTexture?X.texSubImage3D(Pe,zt,se,ze,nn,Vt,Pt,Xt,Ie,te,Ke.data):tt.isCompressedArrayTexture?X.compressedTexSubImage3D(Pe,zt,se,ze,nn,Vt,Pt,Xt,Ie,Ke.data):X.texSubImage3D(Pe,zt,se,ze,nn,Vt,Pt,Xt,Ie,te,Ke):U.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,zt,se,ze,Vt,Pt,Ie,te,Ke.data):U.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,zt,se,ze,Ke.width,Ke.height,Ie,Ke.data):X.texSubImage2D(X.TEXTURE_2D,zt,se,ze,Vt,Pt,Ie,te,Ke);X.pixelStorei(X.UNPACK_ROW_LENGTH,ce),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Tn),X.pixelStorei(X.UNPACK_SKIP_PIXELS,ra),X.pixelStorei(X.UNPACK_SKIP_ROWS,An),X.pixelStorei(X.UNPACK_SKIP_IMAGES,di),zt===0&&tt.generateMipmaps&&X.generateMipmap(Pe),jt.unbindTexture()},this.initRenderTarget=function(U){A.get(U).__webglFramebuffer===void 0&&J.setupRenderTarget(U)},this.initTexture=function(U){U.isCubeTexture?J.setTextureCube(U,0):U.isData3DTexture?J.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?J.setTexture2DArray(U,0):J.setTexture2D(U,0),jt.unbindTexture()},this.resetState=function(){G=0,$=0,V=null,jt.reset(),Ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Ce._getDrawingBufferColorSpace(t),n.unpackColorSpace=Ce._getUnpackColorSpace()}}const Tl=new lt;function Ei(c,t,n,a,r,o){const u=2*Math.PI*r/4,f=Math.max(o-2*r,0),p=Math.PI/4;Tl.copy(t),Tl[a]=0,Tl.normalize();const d=.5*u/(u+f),g=1-Tl.angleTo(c)/p;return Math.sign(Tl[n])===1?g*d:f/(u+f)+d+d*(1-g)}class Wp extends _o{constructor(t=1,n=1,a=1,r=2,o=.1){const u=r*2+1;if(o=Math.min(t/2,n/2,a/2,o),super(1,1,1,u,u,u),this.type="RoundedBoxGeometry",this.parameters={width:t,height:n,depth:a,segments:r,radius:o},u===1)return;const f=this.toNonIndexed();this.index=null,this.attributes.position=f.attributes.position,this.attributes.normal=f.attributes.normal,this.attributes.uv=f.attributes.uv;const p=new lt,d=new lt,g=new lt(t,n,a).divideScalar(2).subScalar(o),_=this.attributes.position.array,v=this.attributes.normal.array,y=this.attributes.uv.array,M=_.length/6,b=new lt,S=.5/u;for(let x=0,T=0;x<_.length;x+=3,T+=2)switch(p.fromArray(_,x),d.copy(p),d.x-=Math.sign(d.x)*S,d.y-=Math.sign(d.y)*S,d.z-=Math.sign(d.z)*S,d.normalize(),_[x+0]=g.x*Math.sign(p.x)+d.x*o,_[x+1]=g.y*Math.sign(p.y)+d.y*o,_[x+2]=g.z*Math.sign(p.z)+d.z*o,v[x+0]=d.x,v[x+1]=d.y,v[x+2]=d.z,Math.floor(x/M)){case 0:b.set(1,0,0),y[T+0]=Ei(b,d,"z","y",o,a),y[T+1]=1-Ei(b,d,"y","z",o,n);break;case 1:b.set(-1,0,0),y[T+0]=1-Ei(b,d,"z","y",o,a),y[T+1]=1-Ei(b,d,"y","z",o,n);break;case 2:b.set(0,1,0),y[T+0]=1-Ei(b,d,"x","z",o,t),y[T+1]=Ei(b,d,"z","x",o,a);break;case 3:b.set(0,-1,0),y[T+0]=1-Ei(b,d,"x","z",o,t),y[T+1]=1-Ei(b,d,"z","x",o,a);break;case 4:b.set(0,0,1),y[T+0]=1-Ei(b,d,"x","y",o,t),y[T+1]=1-Ei(b,d,"y","x",o,n);break;case 5:b.set(0,0,-1),y[T+0]=Ei(b,d,"x","y",o,t),y[T+1]=1-Ei(b,d,"y","x",o,n);break}}static fromJSON(t){return new Wp(t.width,t.height,t.depth,t.segments,t.radius)}}const s2=18,Nd=1.2,r2=28;class o2{ctx=null;masterGain=null;lastPlayTime=0;primed=!1;unlock(){const t=this.ensureContext();if(t.state==="suspended"&&t.resume(),!this.primed){this.primed=!0;try{const n=t.createBufferSource();n.buffer=t.createBuffer(1,1,t.sampleRate),n.connect(t.destination),n.start(0)}catch{}}}ensureContext(){return this.ctx||(this.ctx=new AudioContext,this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=.55,this.masterGain.connect(this.ctx.destination)),this.ctx}playImpact(t,n){if(n<Nd)return;const a=performance.now();if(a-this.lastPlayTime<r2)return;this.lastPlayTime=a;const r=this.ensureContext();if(r.state!=="running"&&(this.unlock(),this.ctx?.state!=="running"))return;const o=this.masterGain,u=Math.min((n-Nd)/(s2-Nd),1);t==="table"?this.playTableHit(r,o,u):this.playDiceHit(r,o,u)}playTableHit(t,n,a){const r=t.currentTime,o=.18+a*.42,u=.04+a*.06,f=.02+a*.03,p=this.createNoiseBuffer(t,f),d=t.createBufferSource();d.buffer=p;const g=t.createBiquadFilter();g.type="lowpass",g.frequency.setValueAtTime(800+a*1200,r),g.Q.value=.7;const _=t.createGain();_.gain.setValueAtTime(o*.7,r),_.gain.exponentialRampToValueAtTime(.001,r+u),d.connect(g).connect(_).connect(n),d.start(r),d.stop(r+u+.01);const v=t.createOscillator();v.type="sine",v.frequency.setValueAtTime(90+a*50,r),v.frequency.exponentialRampToValueAtTime(40,r+u);const y=t.createGain();y.gain.setValueAtTime(o*.5,r),y.gain.exponentialRampToValueAtTime(.001,r+u),v.connect(y).connect(n),v.start(r),v.stop(r+u+.01)}playDiceHit(t,n,a){const r=t.currentTime,o=.12+a*.3,u=.018+a*.032,f=.005+a*.008,p=this.createNoiseBuffer(t,f),d=t.createBufferSource();d.buffer=p;const g=t.createBiquadFilter();g.type="highpass",g.frequency.setValueAtTime(1200,r),g.Q.value=.5;const _=t.createBiquadFilter();_.type="lowpass",_.frequency.setValueAtTime(6e3+a*2e3,r),_.Q.value=.6;const v=t.createGain();v.gain.setValueAtTime(o*.9,r),v.gain.exponentialRampToValueAtTime(.001,r+u*.6),d.connect(g).connect(_).connect(v).connect(n),d.start(r),d.stop(r+u+.01);const y=420+a*180,M=y*1.47;for(const b of[y,M]){const S=t.createOscillator();S.type="sine",S.frequency.setValueAtTime(b,r),S.frequency.exponentialRampToValueAtTime(b*.7,r+u);const x=t.createGain();x.gain.setValueAtTime(o*.18,r),x.gain.exponentialRampToValueAtTime(.001,r+u*.8),S.connect(x).connect(n),S.start(r),S.stop(r+u+.01)}}createNoiseBuffer(t,n){const a=Math.ceil(t.sampleRate*n),r=t.createBuffer(1,a,t.sampleRate),o=r.getChannelData(0);for(let u=0;u<a;u++)o[u]=Math.random()*2-1;return r}dispose(){this.ctx&&(this.ctx.close(),this.ctx=null,this.masterGain=null)}}const l2=1.36,c2=2,u2=6.8,f2=6,Qs=.9,Ss=8,ax=1735242,ty=[3,4,1,6,2,5],h2={1:[[0,0]],2:[[-.52,-.52],[.52,.52]],3:[[-.52,-.52],[0,0],[.52,.52]],4:[[-.52,-.52],[.52,-.52],[-.52,.52],[.52,.52]],5:[[-.52,-.52],[.52,-.52],[0,0],[-.52,.52],[.52,.52]],6:[[-.52,-.52],[.52,-.52],[-.52,0],[.52,0],[-.52,.52],[.52,.52]]},Ud=16777215,sx=15895426;function d2({diceCount:c=5,maxAttempts:t=3,onDiceResult:n,onRollStart:a,forceSingleAttempt:r=!1,hasPendingPlacement:o=!1,onCommitPlacement:u}){const f=Ue.useRef(null),p=Ue.useRef(()=>{}),d=Ue.useRef(()=>{}),g=Ue.useRef(!1),[_,v]=Ue.useState(!1),[y,M]=Ue.useState([]),[b,S]=Ue.useState(0),[x,T]=Ue.useState(()=>Array(c).fill(!1)),R=Ue.useRef(x);R.current=x;const D=Ue.useRef(b);D.current=b;const L=Ue.useRef([]),P=r?1:t,B=Ue.useRef(P);B.current=P;const W=Ue.useRef(n);W.current=n;const w=Ue.useRef(a);w.current=a;const O=Ue.useCallback(H=>{D.current<1||D.current>=B.current||T(Z=>{const ct=[...Z];ct[H]=!ct[H];const vt=L.current[H];if(vt){const F=vt.mesh.material,Y=ct[H]?sx:Ud;F.forEach(mt=>mt.color.set(Y))}return ct})},[]),G=Ue.useRef(u);G.current=u;const $=Ue.useCallback(()=>{G.current?.(),S(0),D.current=0,M([]);const H=Array(c).fill(!1);T(H),R.current=H,L.current.forEach(Z=>{Z.mesh.material.forEach(vt=>vt.color.set(Ud))}),p.current()},[c]);Ue.useEffect(()=>{const H=f.current;if(!H)return;const Z=typeof window<"u"&&window.matchMedia("(min-width: 1024px)").matches,ct=Z?l2:c2,vt=ct/2,F=Z?u2:f2,Y=new Y1;Y.background=new Le(ax);const mt=new Ou(-1,1,1,-1,.1,80);mt.position.set(0,14,0),mt.up.set(0,0,-1),mt.lookAt(0,0,0);const bt=new a2({antialias:!0,alpha:!0});bt.setPixelRatio(Math.min(window.devicePixelRatio,2)),bt.outputColorSpace=qn,bt.toneMapping=Ii,bt.shadowMap.enabled=!0,bt.shadowMap.type=_x,bt.domElement.style.width="100%",bt.domElement.style.height="100%",bt.domElement.style.display="block",bt.domElement.style.touchAction="manipulation",bt.domElement.style.userSelect="none",H.appendChild(bt.domElement);const It=new sT(16777215,.85);Y.add(It);const nt=new aT(16777215,1.1);nt.position.set(3,18,-2),nt.castShadow=!0,nt.shadow.mapSize.width=2048,nt.shadow.mapSize.height=2048,nt.shadow.camera.near=1,nt.shadow.camera.far=40,nt.shadow.camera.left=-30,nt.shadow.camera.right=30,nt.shadow.camera.top=20,nt.shadow.camera.bottom=-20,Y.add(nt);const ft=new Hi(new Fl(1,1),new C_({color:ax,roughness:.96,metalness:0}));ft.rotation.x=-Math.PI/2,ft.position.y=0,ft.receiveShadow=!0,Y.add(ft);const Ct=new Bb({gravity:new C(0,-40,0),allowSleep:!0});Ct.broadphase=new oo(Ct),Ct.solver.iterations=14;const kt=new Cu("table"),Gt=new Cu("die");Ct.addContactMaterial(new uo(Gt,kt,{friction:.24,restitution:.36})),Ct.addContactMaterial(new uo(Gt,Gt,{friction:.3,restitution:.4}));const pe=new Ht({type:Ht.STATIC,shape:new xE,material:kt});pe.quaternion.setFromEuler(-Math.PI/2,0,0),Ct.addBody(pe);const Qe=new Wp(ct,ct,ct,6,.16),oe=[];for(let ht=0;ht<c;ht+=1){const gt=ty.map(Et=>new C_({map:p2(Et),color:Ud,roughness:.38,metalness:.02})),Nt=new Hi(Qe,gt);Nt.castShadow=!0,Nt.receiveShadow=!0,Nt.userData.dieIndex=ht,Y.add(Nt);const wt=new Ht({mass:1,shape:new ar(new C(vt,vt,vt)),material:Gt,sleepSpeedLimit:.14,sleepTimeLimit:.18});wt.linearDamping=.17,wt.angularDamping=.19,wt.allowSleep=!0,Ct.addBody(wt),oe.push({mesh:Nt,body:wt,locked:!1})}L.current=oe;const ue=new o2,Ae=new Set(oe.map(ht=>ht.body)),le=()=>ue.unlock();window.addEventListener("pointerdown",le,{passive:!0}),window.addEventListener("touchstart",le,{passive:!0}),window.addEventListener("click",le,{passive:!0}),oe.forEach(ht=>{ht.body.addEventListener("collide",gt=>{const{body:Nt,contact:wt}=gt,Et=Math.abs(wt.getImpactVelocityAlongNormal());Ae.has(Nt)?ue.playImpact("dice",Et):ue.playImpact("table",Et)})});const Je=new lT,X=new Oe,je=ht=>{ue.unlock();const gt=bt.domElement.getBoundingClientRect();X.x=(ht.clientX-gt.left)/gt.width*2-1,X.y=-((ht.clientY-gt.top)/gt.height)*2+1,Je.setFromCamera(X,mt);const Nt=oe.map(Et=>Et.mesh),wt=Je.intersectObjects(Nt,!1);if(wt.length>0){const $t=wt[0].object.userData.dieIndex;$t!==void 0&&O($t)}};bt.domElement.addEventListener("pointerdown",je);let ve={minX:-6,maxX:6,minZ:-3,maxZ:3,depth:6},Se=[];const jt=(ht,gt)=>{Se.forEach(At=>Ct.removeBody(At)),Se=[];const Nt=new ar(new C(Qs/2,Ss/2,gt/2)),wt=new ar(new C(ht/2,Ss/2,Qs/2));[{shape:Nt,position:new C(-ht/2-Qs/2,Ss/2,0)},{shape:Nt,position:new C(ht/2+Qs/2,Ss/2,0)},{shape:wt,position:new C(0,Ss/2,-gt/2-Qs/2)},{shape:wt,position:new C(0,Ss/2,gt/2+Qs/2)}].forEach(({shape:At,position:yt})=>{const Dt=new Ht({type:Ht.STATIC,shape:At,material:kt});Dt.position.copy(yt),Ct.addBody(Dt),Se.push(Dt)});const $t=ct*1.8,q=new ar(new C($t/2,Ss/2,Qs/2)),Ut=ht/2,Rt=gt/2;[{x:-Ut,z:-Rt,angle:Math.PI/4},{x:Ut,z:-Rt,angle:-Math.PI/4},{x:-Ut,z:Rt,angle:-Math.PI/4},{x:Ut,z:Rt,angle:Math.PI/4}].forEach(({x:At,z:yt,angle:Dt})=>{const ae=new Ht({type:Ht.STATIC,shape:q,material:kt});ae.position.set(At,Ss/2,yt),ae.quaternion.setFromEuler(0,Dt,0),Ct.addBody(ae),Se.push(ae)})},I=()=>{const ht=H.clientWidth,gt=H.clientHeight;if(!ht||!gt)return;const Nt=ht/gt,wt=F,Et=wt*Nt;mt.left=-Et,mt.right=Et,mt.top=wt,mt.bottom=-wt,mt.updateProjectionMatrix();const $t=Et*2,q=wt*2;ft.scale.set($t,q,1),ve={minX:-$t/2,maxX:$t/2,minZ:-q/2,maxZ:q/2,width:$t,depth:q},jt($t,q),bt.setSize(ht,gt,!0),bt.render(Y,mt)},A=new ResizeObserver(I);A.observe(H),I();let J=0;const xt=()=>{oe.forEach(ht=>{ht.body.type=Ht.STATIC,ht.body.velocity.setZero(),ht.body.angularVelocity.setZero(),ht.body.position.set(0,-10,0),ht.mesh.position.set(0,-10,0)})},Tt=()=>{if(g.current||D.current>=B.current)return;ue.unlock(),g.current=!0,v(!0),w.current?.(),J=0;const ht=R.current,gt=D.current===0,Nt=ve.minX+ct*.8;let wt=0;oe.forEach((Et,$t)=>{if(!gt&&ht[$t]){Et.body.type=Ht.STATIC,Et.body.velocity.setZero(),Et.body.angularVelocity.setZero();return}Et.body.type=Ht.DYNAMIC,Et.body.mass=1,Et.body.updateMassProperties(),Et.body.wakeUp(),Et.body.velocity.setZero(),Et.body.angularVelocity.setZero(),Et.body.force.setZero(),Et.body.torque.setZero();const q=Nt+wt*.56+Oi(-.1,.1),Ut=4+wt*.22,Rt=Oi(-ve.depth*.25,ve.depth*.25);Et.body.position.set(q,Ut,Rt);const Ot=new $n;Ot.setFromEuler(Oi(0,Math.PI),Oi(0,Math.PI),Oi(0,Math.PI),"XYZ"),Et.body.quaternion.copy(Ot);const At=new C(Oi(12.2,15.8),Oi(5.4,7.2),Oi(-1.2,1.2)),yt=new C(Oi(-.2,.2),Oi(-.08,.08),Oi(-.2,.2));Et.body.applyImpulse(At,yt),wt++})};p.current=Tt,d.current=xt,xt();const pt=ht=>{if(ht.code!=="Space")return;const gt=ht.target;gt?.tagName==="INPUT"||gt?.tagName==="TEXTAREA"||gt?.isContentEditable||(ht.preventDefault(),Tt())};window.addEventListener("keydown",pt);const Zt=new oT,Lt=1/60;let qt=0;const ie=()=>{const ht=Math.min(Zt.getDelta(),.04);if(Ct.step(Lt,ht,4),oe.forEach(gt=>{g2(gt.body,ve,vt),gt.mesh.position.set(gt.body.position.x,gt.body.position.y,gt.body.position.z),gt.mesh.quaternion.set(gt.body.quaternion.x,gt.body.quaternion.y,gt.body.quaternion.z,gt.body.quaternion.w)}),g.current){const gt=R.current;if(oe.every((wt,Et)=>{if(gt[Et]||wt.body.sleepState===Ht.SLEEPING)return!0;const $t=wt.body.velocity.lengthSquared()<.02,q=wt.body.angularVelocity.lengthSquared()<.03;return $t&&q&&wt.body.position.y<=vt+.08})){if(J+=ht,J>.26){g.current=!1,v(!1);const wt=oe.map(q=>m2(q.body));M(wt);const Et=D.current+1;if(Et>=B.current){const q=Array(c).fill(!0);T(q),R.current=q,oe.forEach(Ut=>{Ut.mesh.material.forEach(Ot=>Ot.color.set(sx))})}S(q=>q+1);const $t=wt.reduce((q,Ut)=>q+Ut,0);W.current?.({total:$t,values:wt,attempt:Et})}}else J=0}bt.render(Y,mt),qt=window.requestAnimationFrame(ie)};return ie(),()=>{window.cancelAnimationFrame(qt),A.disconnect(),window.removeEventListener("keydown",pt),window.removeEventListener("pointerdown",le),window.removeEventListener("touchstart",le),window.removeEventListener("click",le),bt.domElement.removeEventListener("pointerdown",je),ue.dispose(),H.removeChild(bt.domElement),Se.forEach(ht=>Ct.removeBody(ht)),Ct.removeBody(pe),oe.forEach(ht=>{Ct.removeBody(ht.body),Y.remove(ht.mesh)}),ft.geometry.dispose(),ft.material.dispose(),Y.remove(ft),Qe.dispose(),oe.forEach(ht=>{ht.mesh.material.forEach(gt=>{gt.map?.dispose(),gt.dispose()})}),bt.dispose()}},[c,O]);const V=y.reduce((H,Z)=>H+Z,0),Q=b>=P&&!_,j=!_&&(b<P||o),z=b>=1&&b<P;return Ft.jsxs("div",{className:"flex h-full w-full flex-col",children:[Ft.jsx("div",{className:"min-h-0 flex-1 overflow-hidden rounded-none bg-[#1a7a4a]",children:Ft.jsx("div",{ref:f,className:"h-full w-full"})}),Ft.jsxs("div",{className:"relative flex items-center justify-between px-2 py-0",style:{fontFamily:"'Inter', sans-serif"},children:[Ft.jsx("div",{className:"relative flex h-7 items-center gap-2.5",children:y.length>0?Ft.jsxs(Ft.Fragment,{children:[Ft.jsx("div",{className:"flex items-center gap-1",children:y.map((H,Z)=>Ft.jsx("button",{type:"button",onClick:()=>z&&O(Z),className:`grid h-6 w-6 select-none place-items-center rounded-md border text-[11px] font-bold shadow-sm transition-colors ${x[Z]?"border-red-400 bg-red-100 text-red-800":"border-slate-300 bg-white text-slate-800"} ${z?"cursor-pointer touch-manipulation hover:border-slate-400 active:scale-95":""}`,"aria-label":`Die ${Z+1}`,children:H},Z))}),Ft.jsx("span",{className:"text-[11px] font-medium text-slate-400",children:"="}),Ft.jsx("span",{className:"text-base font-bold text-slate-800",children:V}),b>0&&Ft.jsx("span",{className:"ml-1 inline-flex h-5 items-center rounded-full bg-slate-200 px-2 text-[10px] font-bold text-slate-600",children:Q&&!o?"PLACE":`${b} of ${P}`}),_&&Ft.jsx("span",{className:"text-[11px] font-medium text-slate-500",children:"Rolling..."})]}):Ft.jsxs(Ft.Fragment,{children:[Ft.jsx("div",{className:"flex items-center gap-1",children:Array.from({length:5}).map((H,Z)=>Ft.jsx("span",{className:"grid h-6 w-6 place-items-center rounded-md border border-transparent text-[11px]"},Z))}),Ft.jsx("span",{className:"text-[11px] font-medium text-transparent",children:"="}),Ft.jsx("span",{className:"text-base font-bold text-transparent",children:"00"}),Ft.jsx("span",{className:"ml-1 inline-flex h-5 items-center rounded-full bg-transparent px-2 text-[10px] font-bold text-transparent",children:"0 of 0"}),Ft.jsx("span",{className:"absolute top-1/2 left-0 -translate-y-1/2 text-[11px] font-medium text-slate-500",children:_?"Rolling...":""})]})}),Ft.jsx("div",{className:"flex items-center gap-3"}),(!Q||o)&&Ft.jsx("button",{"aria-disabled":!j,onClick:()=>{j&&(o?$():p.current())},className:`absolute right-2 -top-6 z-20 h-14 w-14 touch-manipulation appearance-none rounded-full border-2 text-center text-[10px] font-bold uppercase tracking-widest shadow-md transition-colors ${j?"cursor-pointer border-red-600 bg-red-500 text-white hover:bg-red-500":"cursor-not-allowed border-red-300 bg-red-300 text-white"}`,style:{WebkitTapHighlightColor:"transparent",boxShadow:"0 0 0 2px rgba(0,0,0,0.16), 0 8px 16px rgba(0,0,0,0.28)"},children:Ft.jsx("span",{className:"text-[11px] font-extrabold",style:{textShadow:"0 1px 1px rgba(0,0,0,0.28)"},children:"PLAY"})})]})]})}function p2(c){const t=document.createElement("canvas");t.width=256,t.height=256;const n=t.getContext("2d");if(!n){const u=new R_(t);return u.colorSpace=qn,u}n.fillStyle="#ffffff",n.fillRect(0,0,t.width,t.height),n.lineWidth=3,n.strokeStyle="#e2e8f0",n.strokeRect(4,4,t.width-8,t.height-8);const a=26,r=h2[c];n.fillStyle="#000000",r.forEach(([u,f])=>{const p=t.width/2+u*112,d=t.height/2+f*112;n.beginPath(),n.arc(p,d,a,0,Math.PI*2),n.fill()});const o=new R_(t);return o.colorSpace=qn,o.anisotropy=4,o.minFilter=Es,o.magFilter=zn,o.needsUpdate=!0,o}function Oi(c,t){return c+Math.random()*(t-c)}function m2(c){const t=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],n=ty;let a=-1/0,r=1;const o=new C;for(let u=0;u<6;u++)c.quaternion.vmult(t[u],o),o.y>a&&(a=o.y,r=n[u]);return r}function g2(c,t,n){const a=t.minX+n,r=t.maxX-n,o=t.minZ+n,u=t.maxZ-n;c.position.x<a?(c.position.x=a,c.velocity.x=Math.abs(c.velocity.x)*.55):c.position.x>r&&(c.position.x=r,c.velocity.x=-Math.abs(c.velocity.x)*.55),c.position.z<o?(c.position.z=o,c.velocity.z=Math.abs(c.velocity.z)*.55):c.position.z>u&&(c.position.z=u,c.velocity.z=-Math.abs(c.velocity.z)*.55)}const Ld=["down","up","desordem","seco"],v2=[...tr],_2=[...tr].reverse(),x2={down:{},up:{},desordem:{},seco:{}};function y2(){const[c,t]=Ue.useState(x2),[n,a]=Ue.useState(null),[r,o]=Ue.useState(!1),[u,f]=Ue.useState(null),p=n?.attempt??0,d=Ue.useMemo(()=>{const R=["down","up","desordem"].every(L=>tr.every(P=>c[L][P]!=null)),D=tr.some(L=>c.seco[L]==null);return R&&D},[c]),g=Ue.useMemo(()=>{const T=new Set;for(const R of Ld){const D=c[R];if(R==="down"){const L=v2.find(P=>D[P]==null);L&&T.add(`${R}:${L}`);continue}if(R==="up"){const L=_2.find(P=>D[P]==null);L&&T.add(`${R}:${L}`);continue}if(R==="desordem"){tr.forEach(L=>{D[L]==null&&T.add(`${R}:${L}`)});continue}R==="seco"&&p===1&&tr.forEach(L=>{D[L]==null&&T.add(`${R}:${L}`)})}return T},[c,p]),_=Ue.useMemo(()=>Ld.every(T=>tr.every(R=>c[T][R]!=null)),[c]),v=Ue.useMemo(()=>Ld.reduce((T,R)=>T+ox(c[R]).combined,0),[c]),y=Ue.useCallback(T=>{a(T),o(!0),f(null)},[]),M=Ue.useCallback(()=>{o(!1),f(null)},[]),b=Ue.useCallback((T,R)=>{if(!r||!n)return;const D=`${T}:${R}`;if(!g.has(D)||c[T][R]!=null)return;if(u?.columnId===T&&u.rowId===R){f(null);return}const L=S2(R,n.values,c[T]);f({columnId:T,rowId:R,value:L})},[r,g,u,n,c]),S=Ue.useCallback(()=>{if(!u)return;const{columnId:T,rowId:R,value:D}=u;t(L=>({...L,[T]:{...L[T],[R]:D}})),f(null),o(!1),a(null)},[u]),x=Ue.useCallback(()=>{t({down:{},up:{},desordem:{},seco:{}}),a(null),o(!1),f(null)},[]);return Ft.jsx("main",{className:"min-h-screen touch-manipulation bg-white px-0 py-0 sm:px-8 sm:py-8",children:Ft.jsxs("section",{className:"mx-auto flex w-full max-w-[1400px] flex-col gap-0 lg:flex-row lg:items-start lg:gap-8",children:[Ft.jsx("div",{className:"order-2 ml-[5px] flex flex-col items-start gap-0 pl-2 lg:order-1 lg:ml-0 lg:shrink-0 lg:items-start lg:gap-5 lg:pl-0",children:Ft.jsx(gM,{sheet:c,openCells:g,clickable:r,pendingPlacement:u,onCellClick:b})}),Ft.jsx("div",{className:"order-1 min-w-0 flex-1 lg:order-2 lg:sticky lg:top-8 lg:pt-[30px]",children:_?Ft.jsxs("div",{className:"flex min-h-[320px] flex-col items-center justify-center gap-6 rounded-3xl border border-[#ccc8c0] bg-[#f7f4ef] px-8 py-10 lg:h-[60vh]",style:{fontFamily:"'Inter', sans-serif"},children:[Ft.jsx("p",{className:"text-[11px] font-bold uppercase tracking-[0.22em] text-[#8a8070]",children:"Game Over"}),Ft.jsx("p",{className:"text-7xl font-bold leading-none text-[#2d2820]",style:{fontFamily:"'Kalam', cursive"},children:v}),Ft.jsx("p",{className:"text-sm text-[#8a8070]",children:"final score"}),Ft.jsx("button",{onClick:x,className:"mt-2 rounded-full border border-[#ccc8c0] bg-white px-8 py-2.5 text-xs font-bold uppercase tracking-widest text-[#5a5448] shadow-sm transition hover:bg-[#f0ece4]",children:"New Game"})]}):Ft.jsx("div",{className:"h-[24vh] min-h-[150px] min-w-0 sm:h-[34vh] lg:h-[421px]",children:Ft.jsx(d2,{diceCount:5,maxAttempts:3,onDiceResult:y,onRollStart:M,forceSingleAttempt:d,hasPendingPlacement:u!=null,onCommitPlacement:S})})})]})})}function S2(c,t,n){const a=M2(t),r=t.reduce((o,u)=>o+u,0);switch(c){case"ones":return ro(a,1);case"twos":return ro(a,2);case"threes":return ro(a,3);case"fours":return ro(a,4);case"fives":return ro(a,5);case"sixes":return ro(a,6);case"quadra":{const o=a.findIndex((u,f)=>f>0&&u>=4);return o>0?20+4*o:0}case"full":return b2(a)?30+r:0;case"seqLow":return rx(t,[1,2,3,4,5])?35+r:0;case"seqHigh":return rx(t,[2,3,4,5,6])?40+r:0;case"min":{const o=n?.max;return o==null||r<o?r:0}case"max":{const o=n?.min;return o==null||r>o?r:0}case"yam":return E2(a,5)?50+r:0}}function M2(c){const t=Array(7).fill(0);return c.forEach(n=>{n>=1&&n<=6&&(t[n]+=1)}),t}function ro(c,t){return c[t]*t}function E2(c,t){return c.some(n=>n===t)}function b2(c){const t=c.filter(n=>n>0);return t.length===2&&t.includes(3)&&t.includes(2)}function rx(c,t){const n=[...new Set(c)].sort((a,r)=>a-r);return n.length!==t.length?!1:t.every((a,r)=>n[r]===a)}pM.createRoot(document.getElementById("root")).render(Ft.jsx(Ue.StrictMode,{children:Ft.jsx(y2,{})}));
