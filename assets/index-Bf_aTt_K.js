(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();var qh={exports:{}},dl={};var wv;function rM(){if(wv)return dl;wv=1;var c=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,r,o){var u=null;if(o!==void 0&&(u=""+o),r.key!==void 0&&(u=""+r.key),"key"in r){o={};for(var f in r)f!=="key"&&(o[f]=r[f])}else o=r;return r=o.ref,{$$typeof:c,type:a,key:u,ref:r!==void 0?r:null,props:o}}return dl.Fragment=t,dl.jsx=n,dl.jsxs=n,dl}var Rv;function oM(){return Rv||(Rv=1,qh.exports=rM()),qh.exports}var qt=oM(),Xh={exports:{}},ce={};var Cv;function lM(){if(Cv)return ce;Cv=1;var c=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),o=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.iterator;function y(F){return F===null||typeof F!="object"?null:(F=v&&F[v]||F["@@iterator"],typeof F=="function"?F:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,S={};function x(F,Z,_t){this.props=F,this.context=Z,this.refs=S,this.updater=_t||M}x.prototype.isReactComponent={},x.prototype.setState=function(F,Z){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,Z,"setState")},x.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function T(){}T.prototype=x.prototype;function C(F,Z,_t){this.props=F,this.context=Z,this.refs=S,this.updater=_t||M}var L=C.prototype=new T;L.constructor=C,b(L,x.prototype),L.isPureReactComponent=!0;var z=Array.isArray;function B(){}var P={H:null,A:null,T:null,S:null},Y=Object.prototype.hasOwnProperty;function w(F,Z,_t){var Tt=_t.ref;return{$$typeof:c,type:F,key:Z,ref:Tt!==void 0?Tt:null,props:_t}}function O(F,Z){return w(F.type,Z,F.props)}function G(F){return typeof F=="object"&&F!==null&&F.$$typeof===c}function $(F){var Z={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(_t){return Z[_t]})}var V=/\/+/g;function j(F,Z){return typeof F=="object"&&F!==null&&F.key!=null?$(""+F.key):Z.toString(36)}function X(F){switch(F.status){case"fulfilled":return F.value;case"rejected":throw F.reason;default:switch(typeof F.status=="string"?F.then(B,B):(F.status="pending",F.then(function(Z){F.status==="pending"&&(F.status="fulfilled",F.value=Z)},function(Z){F.status==="pending"&&(F.status="rejected",F.reason=Z)})),F.status){case"fulfilled":return F.value;case"rejected":throw F.reason}}throw F}function D(F,Z,_t,Tt,Ft){var nt=typeof F;(nt==="undefined"||nt==="boolean")&&(F=null);var pt=!1;if(F===null)pt=!0;else switch(nt){case"bigint":case"string":case"number":pt=!0;break;case"object":switch(F.$$typeof){case c:case t:pt=!0;break;case g:return pt=F._init,D(pt(F._payload),Z,_t,Tt,Ft)}}if(pt)return Ft=Ft(F),pt=Tt===""?"."+j(F,0):Tt,z(Ft)?(_t="",pt!=null&&(_t=pt.replace(V,"$&/")+"/"),D(Ft,Z,_t,"",function(Vt){return Vt})):Ft!=null&&(G(Ft)&&(Ft=O(Ft,_t+(Ft.key==null||F&&F.key===Ft.key?"":(""+Ft.key).replace(V,"$&/")+"/")+pt)),Z.push(Ft)),1;pt=0;var Nt=Tt===""?".":Tt+":";if(z(F))for(var Xt=0;Xt<F.length;Xt++)Tt=F[Xt],nt=Nt+j(Tt,Xt),pt+=D(Tt,Z,_t,nt,Ft);else if(Xt=y(F),typeof Xt=="function")for(F=Xt.call(F),Xt=0;!(Tt=F.next()).done;)Tt=Tt.value,nt=Nt+j(Tt,Xt++),pt+=D(Tt,Z,_t,nt,Ft);else if(nt==="object"){if(typeof F.then=="function")return D(X(F),Z,_t,Tt,Ft);throw Z=String(F),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return pt}function H(F,Z,_t){if(F==null)return F;var Tt=[],Ft=0;return D(F,Tt,"","",function(nt){return Z.call(_t,nt,Ft++)}),Tt}function Q(F){if(F._status===-1){var Z=F._result;Z=Z(),Z.then(function(_t){(F._status===0||F._status===-1)&&(F._status=1,F._result=_t)},function(_t){(F._status===0||F._status===-1)&&(F._status=2,F._result=_t)}),F._status===-1&&(F._status=0,F._result=Z)}if(F._status===1)return F._result.default;throw F._result}var ft=typeof reportError=="function"?reportError:function(F){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof F=="object"&&F!==null&&typeof F.message=="string"?String(F.message):String(F),error:F});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",F);return}console.error(F)},mt={map:H,forEach:function(F,Z,_t){H(F,function(){Z.apply(this,arguments)},_t)},count:function(F){var Z=0;return H(F,function(){Z++}),Z},toArray:function(F){return H(F,function(Z){return Z})||[]},only:function(F){if(!G(F))throw Error("React.Children.only expected to receive a single React element child.");return F}};return ce.Activity=_,ce.Children=mt,ce.Component=x,ce.Fragment=n,ce.Profiler=r,ce.PureComponent=C,ce.StrictMode=a,ce.Suspense=p,ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,ce.__COMPILER_RUNTIME={__proto__:null,c:function(F){return P.H.useMemoCache(F)}},ce.cache=function(F){return function(){return F.apply(null,arguments)}},ce.cacheSignal=function(){return null},ce.cloneElement=function(F,Z,_t){if(F==null)throw Error("The argument must be a React element, but you passed "+F+".");var Tt=b({},F.props),Ft=F.key;if(Z!=null)for(nt in Z.key!==void 0&&(Ft=""+Z.key),Z)!Y.call(Z,nt)||nt==="key"||nt==="__self"||nt==="__source"||nt==="ref"&&Z.ref===void 0||(Tt[nt]=Z[nt]);var nt=arguments.length-2;if(nt===1)Tt.children=_t;else if(1<nt){for(var pt=Array(nt),Nt=0;Nt<nt;Nt++)pt[Nt]=arguments[Nt+2];Tt.children=pt}return w(F.type,Ft,Tt)},ce.createContext=function(F){return F={$$typeof:u,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null},F.Provider=F,F.Consumer={$$typeof:o,_context:F},F},ce.createElement=function(F,Z,_t){var Tt,Ft={},nt=null;if(Z!=null)for(Tt in Z.key!==void 0&&(nt=""+Z.key),Z)Y.call(Z,Tt)&&Tt!=="key"&&Tt!=="__self"&&Tt!=="__source"&&(Ft[Tt]=Z[Tt]);var pt=arguments.length-2;if(pt===1)Ft.children=_t;else if(1<pt){for(var Nt=Array(pt),Xt=0;Xt<pt;Xt++)Nt[Xt]=arguments[Xt+2];Ft.children=Nt}if(F&&F.defaultProps)for(Tt in pt=F.defaultProps,pt)Ft[Tt]===void 0&&(Ft[Tt]=pt[Tt]);return w(F,nt,Ft)},ce.createRef=function(){return{current:null}},ce.forwardRef=function(F){return{$$typeof:f,render:F}},ce.isValidElement=G,ce.lazy=function(F){return{$$typeof:g,_payload:{_status:-1,_result:F},_init:Q}},ce.memo=function(F,Z){return{$$typeof:h,type:F,compare:Z===void 0?null:Z}},ce.startTransition=function(F){var Z=P.T,_t={};P.T=_t;try{var Tt=F(),Ft=P.S;Ft!==null&&Ft(_t,Tt),typeof Tt=="object"&&Tt!==null&&typeof Tt.then=="function"&&Tt.then(B,ft)}catch(nt){ft(nt)}finally{Z!==null&&_t.types!==null&&(Z.types=_t.types),P.T=Z}},ce.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},ce.use=function(F){return P.H.use(F)},ce.useActionState=function(F,Z,_t){return P.H.useActionState(F,Z,_t)},ce.useCallback=function(F,Z){return P.H.useCallback(F,Z)},ce.useContext=function(F){return P.H.useContext(F)},ce.useDebugValue=function(){},ce.useDeferredValue=function(F,Z){return P.H.useDeferredValue(F,Z)},ce.useEffect=function(F,Z){return P.H.useEffect(F,Z)},ce.useEffectEvent=function(F){return P.H.useEffectEvent(F)},ce.useId=function(){return P.H.useId()},ce.useImperativeHandle=function(F,Z,_t){return P.H.useImperativeHandle(F,Z,_t)},ce.useInsertionEffect=function(F,Z){return P.H.useInsertionEffect(F,Z)},ce.useLayoutEffect=function(F,Z){return P.H.useLayoutEffect(F,Z)},ce.useMemo=function(F,Z){return P.H.useMemo(F,Z)},ce.useOptimistic=function(F,Z){return P.H.useOptimistic(F,Z)},ce.useReducer=function(F,Z,_t){return P.H.useReducer(F,Z,_t)},ce.useRef=function(F){return P.H.useRef(F)},ce.useState=function(F){return P.H.useState(F)},ce.useSyncExternalStore=function(F,Z,_t){return P.H.useSyncExternalStore(F,Z,_t)},ce.useTransition=function(){return P.H.useTransition()},ce.version="19.2.4",ce}var Dv;function Np(){return Dv||(Dv=1,Xh.exports=lM()),Xh.exports}var Ie=Np(),Wh={exports:{}},pl={},Yh={exports:{}},jh={};var Nv;function cM(){return Nv||(Nv=1,(function(c){function t(D,H){var Q=D.length;D.push(H);t:for(;0<Q;){var ft=Q-1>>>1,mt=D[ft];if(0<r(mt,H))D[ft]=H,D[Q]=mt,Q=ft;else break t}}function n(D){return D.length===0?null:D[0]}function a(D){if(D.length===0)return null;var H=D[0],Q=D.pop();if(Q!==H){D[0]=Q;t:for(var ft=0,mt=D.length,F=mt>>>1;ft<F;){var Z=2*(ft+1)-1,_t=D[Z],Tt=Z+1,Ft=D[Tt];if(0>r(_t,Q))Tt<mt&&0>r(Ft,_t)?(D[ft]=Ft,D[Tt]=Q,ft=Tt):(D[ft]=_t,D[Z]=Q,ft=Z);else if(Tt<mt&&0>r(Ft,Q))D[ft]=Ft,D[Tt]=Q,ft=Tt;else break t}}return H}function r(D,H){var Q=D.sortIndex-H.sortIndex;return Q!==0?Q:D.id-H.id}if(c.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var o=performance;c.unstable_now=function(){return o.now()}}else{var u=Date,f=u.now();c.unstable_now=function(){return u.now()-f}}var p=[],h=[],g=1,_=null,v=3,y=!1,M=!1,b=!1,S=!1,x=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;function L(D){for(var H=n(h);H!==null;){if(H.callback===null)a(h);else if(H.startTime<=D)a(h),H.sortIndex=H.expirationTime,t(p,H);else break;H=n(h)}}function z(D){if(b=!1,L(D),!M)if(n(p)!==null)M=!0,B||(B=!0,$());else{var H=n(h);H!==null&&X(z,H.startTime-D)}}var B=!1,P=-1,Y=5,w=-1;function O(){return S?!0:!(c.unstable_now()-w<Y)}function G(){if(S=!1,B){var D=c.unstable_now();w=D;var H=!0;try{t:{M=!1,b&&(b=!1,T(P),P=-1),y=!0;var Q=v;try{e:{for(L(D),_=n(p);_!==null&&!(_.expirationTime>D&&O());){var ft=_.callback;if(typeof ft=="function"){_.callback=null,v=_.priorityLevel;var mt=ft(_.expirationTime<=D);if(D=c.unstable_now(),typeof mt=="function"){_.callback=mt,L(D),H=!0;break e}_===n(p)&&a(p),L(D)}else a(p);_=n(p)}if(_!==null)H=!0;else{var F=n(h);F!==null&&X(z,F.startTime-D),H=!1}}break t}finally{_=null,v=Q,y=!1}H=void 0}}finally{H?$():B=!1}}}var $;if(typeof C=="function")$=function(){C(G)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,j=V.port2;V.port1.onmessage=G,$=function(){j.postMessage(null)}}else $=function(){x(G,0)};function X(D,H){P=x(function(){D(c.unstable_now())},H)}c.unstable_IdlePriority=5,c.unstable_ImmediatePriority=1,c.unstable_LowPriority=4,c.unstable_NormalPriority=3,c.unstable_Profiling=null,c.unstable_UserBlockingPriority=2,c.unstable_cancelCallback=function(D){D.callback=null},c.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<D?Math.floor(1e3/D):5},c.unstable_getCurrentPriorityLevel=function(){return v},c.unstable_next=function(D){switch(v){case 1:case 2:case 3:var H=3;break;default:H=v}var Q=v;v=H;try{return D()}finally{v=Q}},c.unstable_requestPaint=function(){S=!0},c.unstable_runWithPriority=function(D,H){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var Q=v;v=D;try{return H()}finally{v=Q}},c.unstable_scheduleCallback=function(D,H,Q){var ft=c.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?ft+Q:ft):Q=ft,D){case 1:var mt=-1;break;case 2:mt=250;break;case 5:mt=1073741823;break;case 4:mt=1e4;break;default:mt=5e3}return mt=Q+mt,D={id:g++,callback:H,priorityLevel:D,startTime:Q,expirationTime:mt,sortIndex:-1},Q>ft?(D.sortIndex=Q,t(h,D),n(p)===null&&D===n(h)&&(b?(T(P),P=-1):b=!0,X(z,Q-ft))):(D.sortIndex=mt,t(p,D),M||y||(M=!0,B||(B=!0,$()))),D},c.unstable_shouldYield=O,c.unstable_wrapCallback=function(D){var H=v;return function(){var Q=v;v=H;try{return D.apply(this,arguments)}finally{v=Q}}}})(jh)),jh}var Uv;function uM(){return Uv||(Uv=1,Yh.exports=cM()),Yh.exports}var Zh={exports:{}},Bn={};var Lv;function fM(){if(Lv)return Bn;Lv=1;var c=Np();function t(p){var h="https://react.dev/errors/"+p;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)h+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},r=Symbol.for("react.portal");function o(p,h,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:r,key:_==null?null:""+_,children:p,containerInfo:h,implementation:g}}var u=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(p,h){if(p==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Bn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Bn.createPortal=function(p,h){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(t(299));return o(p,h,null,g)},Bn.flushSync=function(p){var h=u.T,g=a.p;try{if(u.T=null,a.p=2,p)return p()}finally{u.T=h,a.p=g,a.d.f()}},Bn.preconnect=function(p,h){typeof p=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,a.d.C(p,h))},Bn.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},Bn.preinit=function(p,h){if(typeof p=="string"&&h&&typeof h.as=="string"){var g=h.as,_=f(g,h.crossOrigin),v=typeof h.integrity=="string"?h.integrity:void 0,y=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;g==="style"?a.d.S(p,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:y}):g==="script"&&a.d.X(p,{crossOrigin:_,integrity:v,fetchPriority:y,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Bn.preinitModule=function(p,h){if(typeof p=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var g=f(h.as,h.crossOrigin);a.d.M(p,{crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&a.d.M(p)},Bn.preload=function(p,h){if(typeof p=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var g=h.as,_=f(g,h.crossOrigin);a.d.L(p,g,{crossOrigin:_,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Bn.preloadModule=function(p,h){if(typeof p=="string")if(h){var g=f(h.as,h.crossOrigin);a.d.m(p,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else a.d.m(p)},Bn.requestFormReset=function(p){a.d.r(p)},Bn.unstable_batchedUpdates=function(p,h){return p(h)},Bn.useFormState=function(p,h,g){return u.H.useFormState(p,h,g)},Bn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Bn.version="19.2.4",Bn}var Ov;function hM(){if(Ov)return Zh.exports;Ov=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(t){console.error(t)}}return c(),Zh.exports=fM(),Zh.exports}var zv;function dM(){if(zv)return pl;zv=1;var c=uM(),t=Np(),n=hM();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var i=e,s=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(s=i.return),e=i.return;while(e)}return i.tag===3?s:null}function u(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function f(e){if(e.tag===31){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function p(e){if(o(e)!==e)throw Error(a(188))}function h(e){var i=e.alternate;if(!i){if(i=o(e),i===null)throw Error(a(188));return i!==e?null:e}for(var s=e,l=i;;){var d=s.return;if(d===null)break;var m=d.alternate;if(m===null){if(l=d.return,l!==null){s=l;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===s)return p(d),e;if(m===l)return p(d),i;m=m.sibling}throw Error(a(188))}if(s.return!==l.return)s=d,l=m;else{for(var E=!1,N=d.child;N;){if(N===s){E=!0,s=d,l=m;break}if(N===l){E=!0,l=d,s=m;break}N=N.sibling}if(!E){for(N=m.child;N;){if(N===s){E=!0,s=m,l=d;break}if(N===l){E=!0,l=m,s=d;break}N=N.sibling}if(!E)throw Error(a(189))}}if(s.alternate!==l)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?e:i}function g(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=g(e),i!==null)return i;e=e.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),T=Symbol.for("react.consumer"),C=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),O=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function $(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var V=Symbol.for("react.client.reference");function j(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===V?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case b:return"Fragment";case x:return"Profiler";case S:return"StrictMode";case z:return"Suspense";case B:return"SuspenseList";case w:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case M:return"Portal";case C:return e.displayName||"Context";case T:return(e._context.displayName||"Context")+".Consumer";case L:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return i=e.displayName||null,i!==null?i:j(e.type)||"Memo";case Y:i=e._payload,e=e._init;try{return j(e(i))}catch{}}return null}var X=Array.isArray,D=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q={pending:!1,data:null,method:null,action:null},ft=[],mt=-1;function F(e){return{current:e}}function Z(e){0>mt||(e.current=ft[mt],ft[mt]=null,mt--)}function _t(e,i){mt++,ft[mt]=e.current,e.current=i}var Tt=F(null),Ft=F(null),nt=F(null),pt=F(null);function Nt(e,i){switch(_t(nt,i),_t(Ft,e),_t(Tt,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?Kg(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=Kg(i),e=Qg(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Z(Tt),_t(Tt,e)}function Xt(){Z(Tt),Z(Ft),Z(nt)}function Vt(e){e.memoizedState!==null&&_t(pt,e);var i=Tt.current,s=Qg(i,e.type);i!==s&&(_t(Ft,e),_t(Tt,s))}function me(e){Ft.current===e&&(Z(Tt),Z(Ft)),pt.current===e&&(Z(pt),cl._currentValue=Q)}var Xe,fe;function ve(e){if(Xe===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);Xe=i&&i[1]||"",fe=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Xe+e+fe}var Te=!1;function se(e,i){if(!e||Te)return"";Te=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var yt=function(){throw Error()};if(Object.defineProperty(yt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(yt,[])}catch(dt){var ct=dt}Reflect.construct(e,[],yt)}else{try{yt.call()}catch(dt){ct=dt}e.call(yt.prototype)}}else{try{throw Error()}catch(dt){ct=dt}(yt=e())&&typeof yt.catch=="function"&&yt.catch(function(){})}}catch(dt){if(dt&&ct&&typeof dt.stack=="string")return[dt.stack,ct.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),E=m[0],N=m[1];if(E&&N){var k=E.split(`
`),ot=N.split(`
`);for(d=l=0;l<k.length&&!k[l].includes("DetermineComponentFrameRoot");)l++;for(;d<ot.length&&!ot[d].includes("DetermineComponentFrameRoot");)d++;if(l===k.length||d===ot.length)for(l=k.length-1,d=ot.length-1;1<=l&&0<=d&&k[l]!==ot[d];)d--;for(;1<=l&&0<=d;l--,d--)if(k[l]!==ot[d]){if(l!==1||d!==1)do if(l--,d--,0>d||k[l]!==ot[d]){var vt=`
`+k[l].replace(" at new "," at ");return e.displayName&&vt.includes("<anonymous>")&&(vt=vt.replace("<anonymous>",e.displayName)),vt}while(1<=l&&0<=d);break}}}finally{Te=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?ve(s):""}function Ze(e,i){switch(e.tag){case 26:case 27:case 5:return ve(e.type);case 16:return ve("Lazy");case 13:return e.child!==i&&i!==null?ve("Suspense Fallback"):ve("Suspense");case 19:return ve("SuspenseList");case 0:case 15:return se(e.type,!1);case 11:return se(e.type.render,!1);case 1:return se(e.type,!0);case 31:return ve("Activity");default:return""}}function W(e){try{var i="",s=null;do i+=Ze(e,s),s=e,e=e.return;while(e);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Ke=Object.prototype.hasOwnProperty,_e=c.unstable_scheduleCallback,Ce=c.unstable_cancelCallback,Zt=c.unstable_shouldYield,I=c.unstable_requestPaint,A=c.unstable_now,q=c.unstable_getCurrentPriorityLevel,st=c.unstable_ImmediatePriority,gt=c.unstable_UserBlockingPriority,at=c.unstable_NormalPriority,wt=c.unstable_LowPriority,Et=c.unstable_IdlePriority,Pt=c.log,te=c.unstable_setDisableYieldValue,Mt=null,At=null;function Ut(e){if(typeof Pt=="function"&&te(e),At&&typeof At.setStrictMode=="function")try{At.setStrictMode(Mt,e)}catch{}}var Lt=Math.clz32?Math.clz32:J,Ct=Math.log,re=Math.LN2;function J(e){return e>>>=0,e===0?32:31-(Ct(e)/re|0)|0}var zt=256,Rt=262144,Ht=4194304;function bt(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function St(e,i,s){var l=e.pendingLanes;if(l===0)return 0;var d=0,m=e.suspendedLanes,E=e.pingedLanes;e=e.warmLanes;var N=l&134217727;return N!==0?(l=N&~m,l!==0?d=bt(l):(E&=N,E!==0?d=bt(E):s||(s=N&~e,s!==0&&(d=bt(s))))):(N=l&~m,N!==0?d=bt(N):E!==0?d=bt(E):s||(s=l&~e,s!==0&&(d=bt(s)))),d===0?0:i!==0&&i!==d&&(i&m)===0&&(m=d&-d,s=i&-i,m>=s||m===32&&(s&4194048)!==0)?i:d}function Dt(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function oe(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function He(){var e=Ht;return Ht<<=1,(Ht&62914560)===0&&(Ht=4194304),e}function Ae(e){for(var i=[],s=0;31>s;s++)i.push(e);return i}function Pn(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function bi(e,i,s,l,d,m){var E=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var N=e.entanglements,k=e.expirationTimes,ot=e.hiddenUpdates;for(s=E&~s;0<s;){var vt=31-Lt(s),yt=1<<vt;N[vt]=0,k[vt]=-1;var ct=ot[vt];if(ct!==null)for(ot[vt]=null,vt=0;vt<ct.length;vt++){var dt=ct[vt];dt!==null&&(dt.lane&=-536870913)}s&=~yt}l!==0&&Gl(e,l,0),m!==0&&d===0&&e.tag!==0&&(e.suspendedLanes|=m&~(E&~i))}function Gl(e,i,s){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-Lt(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|s&261930}function So(e,i){var s=e.entangledLanes|=i;for(e=e.entanglements;s;){var l=31-Lt(s),d=1<<l;d&i|e[l]&i&&(e[l]|=i),s&=~d}}function or(e,i){var s=i&-i;return s=(s&42)!==0?1:Mo(s),(s&(e.suspendedLanes|i))!==0?0:s}function Mo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function lr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Eo(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:yv(e.type))}function Gi(e,i){var s=H.p;try{return H.p=e,i()}finally{H.p=s}}var hi=Math.random().toString(36).slice(2),fn="__reactFiber$"+hi,bn="__reactProps$"+hi,Ti="__reactContainer$"+hi,cr="__reactEvents$"+hi,ur="__reactListeners$"+hi,Vl="__reactHandles$"+hi,bo="__reactResources$"+hi,ws="__reactMarker$"+hi;function To(e){delete e[fn],delete e[bn],delete e[cr],delete e[ur],delete e[Vl]}function Va(e){var i=e[fn];if(i)return i;for(var s=e.parentNode;s;){if(i=s[Ti]||s[fn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(e=av(e);e!==null;){if(s=e[fn])return s;e=av(e)}return i}e=s,s=e.parentNode}return null}function ka(e){if(e=e[fn]||e[Ti]){var i=e.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return e}return null}function Rs(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function qa(e){var i=e[bo];return i||(i=e[bo]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function U(e){e[ws]=!0}var tt=new Set,ht={};function lt(e,i){it(e,i),it(e+"Capture",i)}function it(e,i){for(ht[e]=i,e=0;e<i.length;e++)tt.add(i[e])}var Ot=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),kt={},Bt={};function Wt(e){return Ke.call(Bt,e)?!0:Ke.call(kt,e)?!1:Ot.test(e)?Bt[e]=!0:(kt[e]=!0,!1)}function Kt(e,i,s){if(Wt(i))if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+s)}}function ne(e,i,s){if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+s)}}function Qt(e,i,s,l){if(l===null)e.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(i,s,""+l)}}function ie(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Oe(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function nn(e,i,s){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);if(!e.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var d=l.get,m=l.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return d.call(this)},set:function(E){s=""+E,m.call(this,E)}}),Object.defineProperty(e,i,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(E){s=""+E},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function Je(e){if(!e._valueTracker){var i=Oe(e)?"checked":"value";e._valueTracker=nn(e,i,""+e[i])}}function Fe(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return e&&(l=Oe(e)?e.checked?"true":"false":e.value),e=l,e!==s?(i.setValue(e),!0):!1}function $t(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ze=/[\n"\\]/g;function le(e){return e.replace(ze,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Tn(e,i,s,l,d,m,E,N){e.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.type=E:e.removeAttribute("type"),i!=null?E==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+ie(i)):e.value!==""+ie(i)&&(e.value=""+ie(i)):E!=="submit"&&E!=="reset"||e.removeAttribute("value"),i!=null?An(e,E,ie(i)):s!=null?An(e,E,ie(s)):l!=null&&e.removeAttribute("value"),d==null&&m!=null&&(e.defaultChecked=!!m),d!=null&&(e.checked=d&&typeof d!="function"&&typeof d!="symbol"),N!=null&&typeof N!="function"&&typeof N!="symbol"&&typeof N!="boolean"?e.name=""+ie(N):e.removeAttribute("name")}function ra(e,i,s,l,d,m,E,N){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),i!=null||s!=null){if(!(m!=="submit"&&m!=="reset"||i!=null)){Je(e);return}s=s!=null?""+ie(s):"",i=i!=null?""+ie(i):s,N||i===e.value||(e.value=i),e.defaultValue=i}l=l??d,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=N?e.checked:!!l,e.defaultChecked=!!l,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(e.name=E),Je(e)}function An(e,i,s){i==="number"&&$t(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function di(e,i,s,l){if(e=e.options,i){i={};for(var d=0;d<s.length;d++)i["$"+s[d]]=!0;for(s=0;s<e.length;s++)d=i.hasOwnProperty("$"+e[s].value),e[s].selected!==d&&(e[s].selected=d),d&&l&&(e[s].defaultSelected=!0)}else{for(s=""+ie(s),i=null,d=0;d<e.length;d++){if(e[d].value===s){e[d].selected=!0,l&&(e[d].defaultSelected=!0);return}i!==null||e[d].disabled||(i=e[d])}i!==null&&(i.selected=!0)}}function Ge(e,i,s){if(i!=null&&(i=""+ie(i),i!==e.value&&(e.value=i),s==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=s!=null?""+ie(s):""}function wn(e,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(a(92));if(X(l)){if(1<l.length)throw Error(a(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=ie(i),e.defaultValue=s,l=e.textContent,l===s&&l!==""&&l!==null&&(e.value=l),Je(e)}function vn(e,i){if(i){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=i;return}}e.textContent=i}var Rn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Cn(e,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,s):typeof s!="number"||s===0||Rn.has(i)?i==="float"?e.cssFloat=s:e[i]=(""+s).trim():e[i]=s+"px"}function fr(e,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var d in i)l=i[d],i.hasOwnProperty(d)&&s[d]!==l&&Cn(e,d,l)}else for(var m in i)i.hasOwnProperty(m)&&Cn(e,m,i[m])}function Ai(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ny=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),iy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function kl(e){return iy.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function oa(){}var Hu=null;function Gu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var hr=null,dr=null;function Zp(e){var i=ka(e);if(i&&(e=i.stateNode)){var s=e[bn]||null;t:switch(e=i.stateNode,i.type){case"input":if(Tn(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+le(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==e&&l.form===e.form){var d=l[bn]||null;if(!d)throw Error(a(90));Tn(l,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===e.form&&Fe(l)}break t;case"textarea":Ge(e,s.value,s.defaultValue);break t;case"select":i=s.value,i!=null&&di(e,!!s.multiple,i,!1)}}}var Vu=!1;function Kp(e,i,s){if(Vu)return e(i,s);Vu=!0;try{var l=e(i);return l}finally{if(Vu=!1,(hr!==null||dr!==null)&&(Dc(),hr&&(i=hr,e=dr,dr=hr=null,Zp(i),e)))for(i=0;i<e.length;i++)Zp(e[i])}}function Ao(e,i){var s=e.stateNode;if(s===null)return null;var l=s[bn]||null;if(l===null)return null;s=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var la=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ku=!1;if(la)try{var wo={};Object.defineProperty(wo,"passive",{get:function(){ku=!0}}),window.addEventListener("test",wo,wo),window.removeEventListener("test",wo,wo)}catch{ku=!1}var Xa=null,qu=null,ql=null;function Qp(){if(ql)return ql;var e,i=qu,s=i.length,l,d="value"in Xa?Xa.value:Xa.textContent,m=d.length;for(e=0;e<s&&i[e]===d[e];e++);var E=s-e;for(l=1;l<=E&&i[s-l]===d[m-l];l++);return ql=d.slice(e,1<l?1-l:void 0)}function Xl(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function Wl(){return!0}function Jp(){return!1}function Xn(e){function i(s,l,d,m,E){this._reactName=s,this._targetInst=d,this.type=l,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var N in e)e.hasOwnProperty(N)&&(s=e[N],this[N]=s?s(m):m[N]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Wl:Jp,this.isPropagationStopped=Jp,this}return _(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Wl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Wl)},persist:function(){},isPersistent:Wl}),i}var Cs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yl=Xn(Cs),Ro=_({},Cs,{view:0,detail:0}),ay=Xn(Ro),Xu,Wu,Co,jl=_({},Ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ju,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Co&&(Co&&e.type==="mousemove"?(Xu=e.screenX-Co.screenX,Wu=e.screenY-Co.screenY):Wu=Xu=0,Co=e),Xu)},movementY:function(e){return"movementY"in e?e.movementY:Wu}}),$p=Xn(jl),sy=_({},jl,{dataTransfer:0}),ry=Xn(sy),oy=_({},Ro,{relatedTarget:0}),Yu=Xn(oy),ly=_({},Cs,{animationName:0,elapsedTime:0,pseudoElement:0}),cy=Xn(ly),uy=_({},Cs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),fy=Xn(uy),hy=_({},Cs,{data:0}),tm=Xn(hy),dy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},py={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},my={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gy(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=my[e])?!!i[e]:!1}function ju(){return gy}var vy=_({},Ro,{key:function(e){if(e.key){var i=dy[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=Xl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?py[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ju,charCode:function(e){return e.type==="keypress"?Xl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Xl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_y=Xn(vy),xy=_({},jl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),em=Xn(xy),yy=_({},Ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ju}),Sy=Xn(yy),My=_({},Cs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ey=Xn(My),by=_({},jl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ty=Xn(by),Ay=_({},Cs,{newState:0,oldState:0}),wy=Xn(Ay),Ry=[9,13,27,32],Zu=la&&"CompositionEvent"in window,Do=null;la&&"documentMode"in document&&(Do=document.documentMode);var Cy=la&&"TextEvent"in window&&!Do,nm=la&&(!Zu||Do&&8<Do&&11>=Do),im=" ",am=!1;function sm(e,i){switch(e){case"keyup":return Ry.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var pr=!1;function Dy(e,i){switch(e){case"compositionend":return rm(i);case"keypress":return i.which!==32?null:(am=!0,im);case"textInput":return e=i.data,e===im&&am?null:e;default:return null}}function Ny(e,i){if(pr)return e==="compositionend"||!Zu&&sm(e,i)?(e=Qp(),ql=qu=Xa=null,pr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return nm&&i.locale!=="ko"?null:i.data;default:return null}}var Uy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function om(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!Uy[e.type]:i==="textarea"}function lm(e,i,s,l){hr?dr?dr.push(l):dr=[l]:hr=l,i=Bc(i,"onChange"),0<i.length&&(s=new Yl("onChange","change",null,s,l),e.push({event:s,listeners:i}))}var No=null,Uo=null;function Ly(e){qg(e,0)}function Zl(e){var i=Rs(e);if(Fe(i))return e}function cm(e,i){if(e==="change")return i}var um=!1;if(la){var Ku;if(la){var Qu="oninput"in document;if(!Qu){var fm=document.createElement("div");fm.setAttribute("oninput","return;"),Qu=typeof fm.oninput=="function"}Ku=Qu}else Ku=!1;um=Ku&&(!document.documentMode||9<document.documentMode)}function hm(){No&&(No.detachEvent("onpropertychange",dm),Uo=No=null)}function dm(e){if(e.propertyName==="value"&&Zl(Uo)){var i=[];lm(i,Uo,e,Gu(e)),Kp(Ly,i)}}function Oy(e,i,s){e==="focusin"?(hm(),No=i,Uo=s,No.attachEvent("onpropertychange",dm)):e==="focusout"&&hm()}function zy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Zl(Uo)}function Py(e,i){if(e==="click")return Zl(i)}function By(e,i){if(e==="input"||e==="change")return Zl(i)}function Fy(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var ei=typeof Object.is=="function"?Object.is:Fy;function Lo(e,i){if(ei(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var s=Object.keys(e),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var d=s[l];if(!Ke.call(i,d)||!ei(e[d],i[d]))return!1}return!0}function pm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function mm(e,i){var s=pm(e);e=0;for(var l;s;){if(s.nodeType===3){if(l=e+s.textContent.length,e<=i&&l>=i)return{node:s,offset:i-e};e=l}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=pm(s)}}function gm(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?gm(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function vm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=$t(e.document);i instanceof e.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)e=i.contentWindow;else break;i=$t(e.document)}return i}function Ju(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var Iy=la&&"documentMode"in document&&11>=document.documentMode,mr=null,$u=null,Oo=null,tf=!1;function _m(e,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;tf||mr==null||mr!==$t(l)||(l=mr,"selectionStart"in l&&Ju(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Oo&&Lo(Oo,l)||(Oo=l,l=Bc($u,"onSelect"),0<l.length&&(i=new Yl("onSelect","select",null,i,s),e.push({event:i,listeners:l}),i.target=mr)))}function Ds(e,i){var s={};return s[e.toLowerCase()]=i.toLowerCase(),s["Webkit"+e]="webkit"+i,s["Moz"+e]="moz"+i,s}var gr={animationend:Ds("Animation","AnimationEnd"),animationiteration:Ds("Animation","AnimationIteration"),animationstart:Ds("Animation","AnimationStart"),transitionrun:Ds("Transition","TransitionRun"),transitionstart:Ds("Transition","TransitionStart"),transitioncancel:Ds("Transition","TransitionCancel"),transitionend:Ds("Transition","TransitionEnd")},ef={},xm={};la&&(xm=document.createElement("div").style,"AnimationEvent"in window||(delete gr.animationend.animation,delete gr.animationiteration.animation,delete gr.animationstart.animation),"TransitionEvent"in window||delete gr.transitionend.transition);function Ns(e){if(ef[e])return ef[e];if(!gr[e])return e;var i=gr[e],s;for(s in i)if(i.hasOwnProperty(s)&&s in xm)return ef[e]=i[s];return e}var ym=Ns("animationend"),Sm=Ns("animationiteration"),Mm=Ns("animationstart"),Hy=Ns("transitionrun"),Gy=Ns("transitionstart"),Vy=Ns("transitioncancel"),Em=Ns("transitionend"),bm=new Map,nf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");nf.push("scrollEnd");function wi(e,i){bm.set(e,i),lt(i,[e])}var Kl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},pi=[],vr=0,af=0;function Ql(){for(var e=vr,i=af=vr=0;i<e;){var s=pi[i];pi[i++]=null;var l=pi[i];pi[i++]=null;var d=pi[i];pi[i++]=null;var m=pi[i];if(pi[i++]=null,l!==null&&d!==null){var E=l.pending;E===null?d.next=d:(d.next=E.next,E.next=d),l.pending=d}m!==0&&Tm(s,d,m)}}function Jl(e,i,s,l){pi[vr++]=e,pi[vr++]=i,pi[vr++]=s,pi[vr++]=l,af|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function sf(e,i,s,l){return Jl(e,i,s,l),$l(e)}function Us(e,i){return Jl(e,null,null,i),$l(e)}function Tm(e,i,s){e.lanes|=s;var l=e.alternate;l!==null&&(l.lanes|=s);for(var d=!1,m=e.return;m!==null;)m.childLanes|=s,l=m.alternate,l!==null&&(l.childLanes|=s),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(d=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,d&&i!==null&&(d=31-Lt(s),e=m.hiddenUpdates,l=e[d],l===null?e[d]=[i]:l.push(i),i.lane=s|536870912),m):null}function $l(e){if(50<nl)throw nl=0,ph=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var _r={};function ky(e,i,s,l){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ni(e,i,s,l){return new ky(e,i,s,l)}function rf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ca(e,i){var s=e.alternate;return s===null?(s=ni(e.tag,i,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=i,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,i=e.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function Am(e,i){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,i=s.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function tc(e,i,s,l,d,m){var E=0;if(l=e,typeof e=="function")rf(e)&&(E=1);else if(typeof e=="string")E=jS(e,s,Tt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case w:return e=ni(31,s,i,d),e.elementType=w,e.lanes=m,e;case b:return Ls(s.children,d,m,i);case S:E=8,d|=24;break;case x:return e=ni(12,s,i,d|2),e.elementType=x,e.lanes=m,e;case z:return e=ni(13,s,i,d),e.elementType=z,e.lanes=m,e;case B:return e=ni(19,s,i,d),e.elementType=B,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case C:E=10;break t;case T:E=9;break t;case L:E=11;break t;case P:E=14;break t;case Y:E=16,l=null;break t}E=29,s=Error(a(130,e===null?"null":typeof e,"")),l=null}return i=ni(E,s,i,d),i.elementType=e,i.type=l,i.lanes=m,i}function Ls(e,i,s,l){return e=ni(7,e,l,i),e.lanes=s,e}function of(e,i,s){return e=ni(6,e,null,i),e.lanes=s,e}function wm(e){var i=ni(18,null,null,0);return i.stateNode=e,i}function lf(e,i,s){return i=ni(4,e.children!==null?e.children:[],e.key,i),i.lanes=s,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var Rm=new WeakMap;function mi(e,i){if(typeof e=="object"&&e!==null){var s=Rm.get(e);return s!==void 0?s:(i={value:e,source:i,stack:W(i)},Rm.set(e,i),i)}return{value:e,source:i,stack:W(i)}}var xr=[],yr=0,ec=null,zo=0,gi=[],vi=0,Wa=null,Vi=1,ki="";function ua(e,i){xr[yr++]=zo,xr[yr++]=ec,ec=e,zo=i}function Cm(e,i,s){gi[vi++]=Vi,gi[vi++]=ki,gi[vi++]=Wa,Wa=e;var l=Vi;e=ki;var d=32-Lt(l)-1;l&=~(1<<d),s+=1;var m=32-Lt(i)+d;if(30<m){var E=d-d%5;m=(l&(1<<E)-1).toString(32),l>>=E,d-=E,Vi=1<<32-Lt(i)+d|s<<d|l,ki=m+e}else Vi=1<<m|s<<d|l,ki=e}function cf(e){e.return!==null&&(ua(e,1),Cm(e,1,0))}function uf(e){for(;e===ec;)ec=xr[--yr],xr[yr]=null,zo=xr[--yr],xr[yr]=null;for(;e===Wa;)Wa=gi[--vi],gi[vi]=null,ki=gi[--vi],gi[vi]=null,Vi=gi[--vi],gi[vi]=null}function Dm(e,i){gi[vi++]=Vi,gi[vi++]=ki,gi[vi++]=Wa,Vi=i.id,ki=i.overflow,Wa=e}var Dn=null,$e=null,Ee=!1,Ya=null,_i=!1,ff=Error(a(519));function ja(e){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Po(mi(i,e)),ff}function Nm(e){var i=e.stateNode,s=e.type,l=e.memoizedProps;switch(i[fn]=e,i[bn]=l,s){case"dialog":ye("cancel",i),ye("close",i);break;case"iframe":case"object":case"embed":ye("load",i);break;case"video":case"audio":for(s=0;s<al.length;s++)ye(al[s],i);break;case"source":ye("error",i);break;case"img":case"image":case"link":ye("error",i),ye("load",i);break;case"details":ye("toggle",i);break;case"input":ye("invalid",i),ra(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":ye("invalid",i);break;case"textarea":ye("invalid",i),wn(i,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||jg(i.textContent,s)?(l.popover!=null&&(ye("beforetoggle",i),ye("toggle",i)),l.onScroll!=null&&ye("scroll",i),l.onScrollEnd!=null&&ye("scrollend",i),l.onClick!=null&&(i.onclick=oa),i=!0):i=!1,i||ja(e,!0)}function Um(e){for(Dn=e.return;Dn;)switch(Dn.tag){case 5:case 31:case 13:_i=!1;return;case 27:case 3:_i=!0;return;default:Dn=Dn.return}}function Sr(e){if(e!==Dn)return!1;if(!Ee)return Um(e),Ee=!0,!1;var i=e.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||Ch(e.type,e.memoizedProps)),s=!s),s&&$e&&ja(e),Um(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));$e=iv(e)}else if(i===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));$e=iv(e)}else i===27?(i=$e,ls(e.type)?(e=Oh,Oh=null,$e=e):$e=i):$e=Dn?yi(e.stateNode.nextSibling):null;return!0}function Os(){$e=Dn=null,Ee=!1}function hf(){var e=Ya;return e!==null&&(Zn===null?Zn=e:Zn.push.apply(Zn,e),Ya=null),e}function Po(e){Ya===null?Ya=[e]:Ya.push(e)}var df=F(null),zs=null,fa=null;function Za(e,i,s){_t(df,i._currentValue),i._currentValue=s}function ha(e){e._currentValue=df.current,Z(df)}function pf(e,i,s){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===s)break;e=e.return}}function mf(e,i,s,l){var d=e.child;for(d!==null&&(d.return=e);d!==null;){var m=d.dependencies;if(m!==null){var E=d.child;m=m.firstContext;t:for(;m!==null;){var N=m;m=d;for(var k=0;k<i.length;k++)if(N.context===i[k]){m.lanes|=s,N=m.alternate,N!==null&&(N.lanes|=s),pf(m.return,s,e),l||(E=null);break t}m=N.next}}else if(d.tag===18){if(E=d.return,E===null)throw Error(a(341));E.lanes|=s,m=E.alternate,m!==null&&(m.lanes|=s),pf(E,s,e),E=null}else E=d.child;if(E!==null)E.return=d;else for(E=d;E!==null;){if(E===e){E=null;break}if(d=E.sibling,d!==null){d.return=E.return,E=d;break}E=E.return}d=E}}function Mr(e,i,s,l){e=null;for(var d=i,m=!1;d!==null;){if(!m){if((d.flags&524288)!==0)m=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var E=d.alternate;if(E===null)throw Error(a(387));if(E=E.memoizedProps,E!==null){var N=d.type;ei(d.pendingProps.value,E.value)||(e!==null?e.push(N):e=[N])}}else if(d===pt.current){if(E=d.alternate,E===null)throw Error(a(387));E.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(e!==null?e.push(cl):e=[cl])}d=d.return}e!==null&&mf(i,e,s,l),i.flags|=262144}function nc(e){for(e=e.firstContext;e!==null;){if(!ei(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ps(e){zs=e,fa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Nn(e){return Lm(zs,e)}function ic(e,i){return zs===null&&Ps(e),Lm(e,i)}function Lm(e,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},fa===null){if(e===null)throw Error(a(308));fa=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else fa=fa.next=i;return s}var qy=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(s,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(s){return s()})}},Xy=c.unstable_scheduleCallback,Wy=c.unstable_NormalPriority,hn={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function gf(){return{controller:new qy,data:new Map,refCount:0}}function Bo(e){e.refCount--,e.refCount===0&&Xy(Wy,function(){e.controller.abort()})}var Fo=null,vf=0,Er=0,br=null;function Yy(e,i){if(Fo===null){var s=Fo=[];vf=0,Er=yh(),br={status:"pending",value:void 0,then:function(l){s.push(l)}}}return vf++,i.then(Om,Om),i}function Om(){if(--vf===0&&Fo!==null){br!==null&&(br.status="fulfilled");var e=Fo;Fo=null,Er=0,br=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function jy(e,i){var s=[],l={status:"pending",value:null,reason:null,then:function(d){s.push(d)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var d=0;d<s.length;d++)(0,s[d])(i)},function(d){for(l.status="rejected",l.reason=d,d=0;d<s.length;d++)(0,s[d])(void 0)}),l}var zm=D.S;D.S=function(e,i){_g=A(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&Yy(e,i),zm!==null&&zm(e,i)};var Bs=F(null);function _f(){var e=Bs.current;return e!==null?e:Qe.pooledCache}function ac(e,i){i===null?_t(Bs,Bs.current):_t(Bs,i.pool)}function Pm(){var e=_f();return e===null?null:{parent:hn._currentValue,pool:e}}var Tr=Error(a(460)),xf=Error(a(474)),sc=Error(a(542)),rc={then:function(){}};function Bm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Fm(e,i,s){switch(s=e[s],s===void 0?e.push(i):s!==i&&(i.then(oa,oa),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Hm(e),e;default:if(typeof i.status=="string")i.then(oa,oa);else{if(e=Qe,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var d=i;d.status="fulfilled",d.value=l}},function(l){if(i.status==="pending"){var d=i;d.status="rejected",d.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Hm(e),e}throw Is=i,Tr}}function Fs(e){try{var i=e._init;return i(e._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(Is=s,Tr):s}}var Is=null;function Im(){if(Is===null)throw Error(a(459));var e=Is;return Is=null,e}function Hm(e){if(e===Tr||e===sc)throw Error(a(483))}var Ar=null,Io=0;function oc(e){var i=Io;return Io+=1,Ar===null&&(Ar=[]),Fm(Ar,e,i)}function Ho(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function lc(e,i){throw i.$$typeof===v?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function Gm(e){function i(et,K){if(e){var rt=et.deletions;rt===null?(et.deletions=[K],et.flags|=16):rt.push(K)}}function s(et,K){if(!e)return null;for(;K!==null;)i(et,K),K=K.sibling;return null}function l(et){for(var K=new Map;et!==null;)et.key!==null?K.set(et.key,et):K.set(et.index,et),et=et.sibling;return K}function d(et,K){return et=ca(et,K),et.index=0,et.sibling=null,et}function m(et,K,rt){return et.index=rt,e?(rt=et.alternate,rt!==null?(rt=rt.index,rt<K?(et.flags|=67108866,K):rt):(et.flags|=67108866,K)):(et.flags|=1048576,K)}function E(et){return e&&et.alternate===null&&(et.flags|=67108866),et}function N(et,K,rt,xt){return K===null||K.tag!==6?(K=of(rt,et.mode,xt),K.return=et,K):(K=d(K,rt),K.return=et,K)}function k(et,K,rt,xt){var ee=rt.type;return ee===b?vt(et,K,rt.props.children,xt,rt.key):K!==null&&(K.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===Y&&Fs(ee)===K.type)?(K=d(K,rt.props),Ho(K,rt),K.return=et,K):(K=tc(rt.type,rt.key,rt.props,null,et.mode,xt),Ho(K,rt),K.return=et,K)}function ot(et,K,rt,xt){return K===null||K.tag!==4||K.stateNode.containerInfo!==rt.containerInfo||K.stateNode.implementation!==rt.implementation?(K=lf(rt,et.mode,xt),K.return=et,K):(K=d(K,rt.children||[]),K.return=et,K)}function vt(et,K,rt,xt,ee){return K===null||K.tag!==7?(K=Ls(rt,et.mode,xt,ee),K.return=et,K):(K=d(K,rt),K.return=et,K)}function yt(et,K,rt){if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return K=of(""+K,et.mode,rt),K.return=et,K;if(typeof K=="object"&&K!==null){switch(K.$$typeof){case y:return rt=tc(K.type,K.key,K.props,null,et.mode,rt),Ho(rt,K),rt.return=et,rt;case M:return K=lf(K,et.mode,rt),K.return=et,K;case Y:return K=Fs(K),yt(et,K,rt)}if(X(K)||$(K))return K=Ls(K,et.mode,rt,null),K.return=et,K;if(typeof K.then=="function")return yt(et,oc(K),rt);if(K.$$typeof===C)return yt(et,ic(et,K),rt);lc(et,K)}return null}function ct(et,K,rt,xt){var ee=K!==null?K.key:null;if(typeof rt=="string"&&rt!==""||typeof rt=="number"||typeof rt=="bigint")return ee!==null?null:N(et,K,""+rt,xt);if(typeof rt=="object"&&rt!==null){switch(rt.$$typeof){case y:return rt.key===ee?k(et,K,rt,xt):null;case M:return rt.key===ee?ot(et,K,rt,xt):null;case Y:return rt=Fs(rt),ct(et,K,rt,xt)}if(X(rt)||$(rt))return ee!==null?null:vt(et,K,rt,xt,null);if(typeof rt.then=="function")return ct(et,K,oc(rt),xt);if(rt.$$typeof===C)return ct(et,K,ic(et,rt),xt);lc(et,rt)}return null}function dt(et,K,rt,xt,ee){if(typeof xt=="string"&&xt!==""||typeof xt=="number"||typeof xt=="bigint")return et=et.get(rt)||null,N(K,et,""+xt,ee);if(typeof xt=="object"&&xt!==null){switch(xt.$$typeof){case y:return et=et.get(xt.key===null?rt:xt.key)||null,k(K,et,xt,ee);case M:return et=et.get(xt.key===null?rt:xt.key)||null,ot(K,et,xt,ee);case Y:return xt=Fs(xt),dt(et,K,rt,xt,ee)}if(X(xt)||$(xt))return et=et.get(rt)||null,vt(K,et,xt,ee,null);if(typeof xt.then=="function")return dt(et,K,rt,oc(xt),ee);if(xt.$$typeof===C)return dt(et,K,rt,ic(K,xt),ee);lc(K,xt)}return null}function Yt(et,K,rt,xt){for(var ee=null,De=null,Jt=K,de=K=0,Me=null;Jt!==null&&de<rt.length;de++){Jt.index>de?(Me=Jt,Jt=null):Me=Jt.sibling;var Ne=ct(et,Jt,rt[de],xt);if(Ne===null){Jt===null&&(Jt=Me);break}e&&Jt&&Ne.alternate===null&&i(et,Jt),K=m(Ne,K,de),De===null?ee=Ne:De.sibling=Ne,De=Ne,Jt=Me}if(de===rt.length)return s(et,Jt),Ee&&ua(et,de),ee;if(Jt===null){for(;de<rt.length;de++)Jt=yt(et,rt[de],xt),Jt!==null&&(K=m(Jt,K,de),De===null?ee=Jt:De.sibling=Jt,De=Jt);return Ee&&ua(et,de),ee}for(Jt=l(Jt);de<rt.length;de++)Me=dt(Jt,et,de,rt[de],xt),Me!==null&&(e&&Me.alternate!==null&&Jt.delete(Me.key===null?de:Me.key),K=m(Me,K,de),De===null?ee=Me:De.sibling=Me,De=Me);return e&&Jt.forEach(function(ds){return i(et,ds)}),Ee&&ua(et,de),ee}function ae(et,K,rt,xt){if(rt==null)throw Error(a(151));for(var ee=null,De=null,Jt=K,de=K=0,Me=null,Ne=rt.next();Jt!==null&&!Ne.done;de++,Ne=rt.next()){Jt.index>de?(Me=Jt,Jt=null):Me=Jt.sibling;var ds=ct(et,Jt,Ne.value,xt);if(ds===null){Jt===null&&(Jt=Me);break}e&&Jt&&ds.alternate===null&&i(et,Jt),K=m(ds,K,de),De===null?ee=ds:De.sibling=ds,De=ds,Jt=Me}if(Ne.done)return s(et,Jt),Ee&&ua(et,de),ee;if(Jt===null){for(;!Ne.done;de++,Ne=rt.next())Ne=yt(et,Ne.value,xt),Ne!==null&&(K=m(Ne,K,de),De===null?ee=Ne:De.sibling=Ne,De=Ne);return Ee&&ua(et,de),ee}for(Jt=l(Jt);!Ne.done;de++,Ne=rt.next())Ne=dt(Jt,et,de,Ne.value,xt),Ne!==null&&(e&&Ne.alternate!==null&&Jt.delete(Ne.key===null?de:Ne.key),K=m(Ne,K,de),De===null?ee=Ne:De.sibling=Ne,De=Ne);return e&&Jt.forEach(function(sM){return i(et,sM)}),Ee&&ua(et,de),ee}function je(et,K,rt,xt){if(typeof rt=="object"&&rt!==null&&rt.type===b&&rt.key===null&&(rt=rt.props.children),typeof rt=="object"&&rt!==null){switch(rt.$$typeof){case y:t:{for(var ee=rt.key;K!==null;){if(K.key===ee){if(ee=rt.type,ee===b){if(K.tag===7){s(et,K.sibling),xt=d(K,rt.props.children),xt.return=et,et=xt;break t}}else if(K.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===Y&&Fs(ee)===K.type){s(et,K.sibling),xt=d(K,rt.props),Ho(xt,rt),xt.return=et,et=xt;break t}s(et,K);break}else i(et,K);K=K.sibling}rt.type===b?(xt=Ls(rt.props.children,et.mode,xt,rt.key),xt.return=et,et=xt):(xt=tc(rt.type,rt.key,rt.props,null,et.mode,xt),Ho(xt,rt),xt.return=et,et=xt)}return E(et);case M:t:{for(ee=rt.key;K!==null;){if(K.key===ee)if(K.tag===4&&K.stateNode.containerInfo===rt.containerInfo&&K.stateNode.implementation===rt.implementation){s(et,K.sibling),xt=d(K,rt.children||[]),xt.return=et,et=xt;break t}else{s(et,K);break}else i(et,K);K=K.sibling}xt=lf(rt,et.mode,xt),xt.return=et,et=xt}return E(et);case Y:return rt=Fs(rt),je(et,K,rt,xt)}if(X(rt))return Yt(et,K,rt,xt);if($(rt)){if(ee=$(rt),typeof ee!="function")throw Error(a(150));return rt=ee.call(rt),ae(et,K,rt,xt)}if(typeof rt.then=="function")return je(et,K,oc(rt),xt);if(rt.$$typeof===C)return je(et,K,ic(et,rt),xt);lc(et,rt)}return typeof rt=="string"&&rt!==""||typeof rt=="number"||typeof rt=="bigint"?(rt=""+rt,K!==null&&K.tag===6?(s(et,K.sibling),xt=d(K,rt),xt.return=et,et=xt):(s(et,K),xt=of(rt,et.mode,xt),xt.return=et,et=xt),E(et)):s(et,K)}return function(et,K,rt,xt){try{Io=0;var ee=je(et,K,rt,xt);return Ar=null,ee}catch(Jt){if(Jt===Tr||Jt===sc)throw Jt;var De=ni(29,Jt,null,et.mode);return De.lanes=xt,De.return=et,De}}}var Hs=Gm(!0),Vm=Gm(!1),Ka=!1;function yf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Sf(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Qa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ja(e,i,s){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Pe&2)!==0){var d=l.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),l.pending=i,i=$l(e),Tm(e,null,s),i}return Jl(e,l,i,s),$l(e)}function Go(e,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=e.pendingLanes,s|=l,i.lanes=s,So(e,s)}}function Mf(e,i){var s=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var d=null,m=null;if(s=s.firstBaseUpdate,s!==null){do{var E={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};m===null?d=m=E:m=m.next=E,s=s.next}while(s!==null);m===null?d=m=i:m=m.next=i}else d=m=i;s={baseState:l.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=i:e.next=i,s.lastBaseUpdate=i}var Ef=!1;function Vo(){if(Ef){var e=br;if(e!==null)throw e}}function ko(e,i,s,l){Ef=!1;var d=e.updateQueue;Ka=!1;var m=d.firstBaseUpdate,E=d.lastBaseUpdate,N=d.shared.pending;if(N!==null){d.shared.pending=null;var k=N,ot=k.next;k.next=null,E===null?m=ot:E.next=ot,E=k;var vt=e.alternate;vt!==null&&(vt=vt.updateQueue,N=vt.lastBaseUpdate,N!==E&&(N===null?vt.firstBaseUpdate=ot:N.next=ot,vt.lastBaseUpdate=k))}if(m!==null){var yt=d.baseState;E=0,vt=ot=k=null,N=m;do{var ct=N.lane&-536870913,dt=ct!==N.lane;if(dt?(Se&ct)===ct:(l&ct)===ct){ct!==0&&ct===Er&&(Ef=!0),vt!==null&&(vt=vt.next={lane:0,tag:N.tag,payload:N.payload,callback:null,next:null});t:{var Yt=e,ae=N;ct=i;var je=s;switch(ae.tag){case 1:if(Yt=ae.payload,typeof Yt=="function"){yt=Yt.call(je,yt,ct);break t}yt=Yt;break t;case 3:Yt.flags=Yt.flags&-65537|128;case 0:if(Yt=ae.payload,ct=typeof Yt=="function"?Yt.call(je,yt,ct):Yt,ct==null)break t;yt=_({},yt,ct);break t;case 2:Ka=!0}}ct=N.callback,ct!==null&&(e.flags|=64,dt&&(e.flags|=8192),dt=d.callbacks,dt===null?d.callbacks=[ct]:dt.push(ct))}else dt={lane:ct,tag:N.tag,payload:N.payload,callback:N.callback,next:null},vt===null?(ot=vt=dt,k=yt):vt=vt.next=dt,E|=ct;if(N=N.next,N===null){if(N=d.shared.pending,N===null)break;dt=N,N=dt.next,dt.next=null,d.lastBaseUpdate=dt,d.shared.pending=null}}while(!0);vt===null&&(k=yt),d.baseState=k,d.firstBaseUpdate=ot,d.lastBaseUpdate=vt,m===null&&(d.shared.lanes=0),is|=E,e.lanes=E,e.memoizedState=yt}}function km(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function qm(e,i){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)km(s[e],i)}var wr=F(null),cc=F(0);function Xm(e,i){e=Sa,_t(cc,e),_t(wr,i),Sa=e|i.baseLanes}function bf(){_t(cc,Sa),_t(wr,wr.current)}function Tf(){Sa=cc.current,Z(wr),Z(cc)}var ii=F(null),xi=null;function $a(e){var i=e.alternate;_t(cn,cn.current&1),_t(ii,e),xi===null&&(i===null||wr.current!==null||i.memoizedState!==null)&&(xi=e)}function Af(e){_t(cn,cn.current),_t(ii,e),xi===null&&(xi=e)}function Wm(e){e.tag===22?(_t(cn,cn.current),_t(ii,e),xi===null&&(xi=e)):ts()}function ts(){_t(cn,cn.current),_t(ii,ii.current)}function ai(e){Z(ii),xi===e&&(xi=null),Z(cn)}var cn=F(0);function uc(e){for(var i=e;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||Uh(s)||Lh(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var da=0,he=null,We=null,dn=null,fc=!1,Rr=!1,Gs=!1,hc=0,qo=0,Cr=null,Zy=0;function rn(){throw Error(a(321))}function wf(e,i){if(i===null)return!1;for(var s=0;s<i.length&&s<e.length;s++)if(!ei(e[s],i[s]))return!1;return!0}function Rf(e,i,s,l,d,m){return da=m,he=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,D.H=e===null||e.memoizedState===null?C0:kf,Gs=!1,m=s(l,d),Gs=!1,Rr&&(m=jm(i,s,l,d)),Ym(e),m}function Ym(e){D.H=Yo;var i=We!==null&&We.next!==null;if(da=0,dn=We=he=null,fc=!1,qo=0,Cr=null,i)throw Error(a(300));e===null||pn||(e=e.dependencies,e!==null&&nc(e)&&(pn=!0))}function jm(e,i,s,l){he=e;var d=0;do{if(Rr&&(Cr=null),qo=0,Rr=!1,25<=d)throw Error(a(301));if(d+=1,dn=We=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}D.H=D0,m=i(s,l)}while(Rr);return m}function Ky(){var e=D.H,i=e.useState()[0];return i=typeof i.then=="function"?Xo(i):i,e=e.useState()[0],(We!==null?We.memoizedState:null)!==e&&(he.flags|=1024),i}function Cf(){var e=hc!==0;return hc=0,e}function Df(e,i,s){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~s}function Nf(e){if(fc){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}fc=!1}da=0,dn=We=he=null,Rr=!1,qo=hc=0,Cr=null}function Vn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dn===null?he.memoizedState=dn=e:dn=dn.next=e,dn}function un(){if(We===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=We.next;var i=dn===null?he.memoizedState:dn.next;if(i!==null)dn=i,We=e;else{if(e===null)throw he.alternate===null?Error(a(467)):Error(a(310));We=e,e={memoizedState:We.memoizedState,baseState:We.baseState,baseQueue:We.baseQueue,queue:We.queue,next:null},dn===null?he.memoizedState=dn=e:dn=dn.next=e}return dn}function dc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Xo(e){var i=qo;return qo+=1,Cr===null&&(Cr=[]),e=Fm(Cr,e,i),i=he,(dn===null?i.memoizedState:dn.next)===null&&(i=i.alternate,D.H=i===null||i.memoizedState===null?C0:kf),e}function pc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Xo(e);if(e.$$typeof===C)return Nn(e)}throw Error(a(438,String(e)))}function Uf(e){var i=null,s=he.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=he.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(d){return d.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=dc(),he.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(e),l=0;l<e;l++)s[l]=O;return i.index++,s}function pa(e,i){return typeof i=="function"?i(e):i}function mc(e){var i=un();return Lf(i,We,e)}function Lf(e,i,s){var l=e.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=s;var d=e.baseQueue,m=l.pending;if(m!==null){if(d!==null){var E=d.next;d.next=m.next,m.next=E}i.baseQueue=d=m,l.pending=null}if(m=e.baseState,d===null)e.memoizedState=m;else{i=d.next;var N=E=null,k=null,ot=i,vt=!1;do{var yt=ot.lane&-536870913;if(yt!==ot.lane?(Se&yt)===yt:(da&yt)===yt){var ct=ot.revertLane;if(ct===0)k!==null&&(k=k.next={lane:0,revertLane:0,gesture:null,action:ot.action,hasEagerState:ot.hasEagerState,eagerState:ot.eagerState,next:null}),yt===Er&&(vt=!0);else if((da&ct)===ct){ot=ot.next,ct===Er&&(vt=!0);continue}else yt={lane:0,revertLane:ot.revertLane,gesture:null,action:ot.action,hasEagerState:ot.hasEagerState,eagerState:ot.eagerState,next:null},k===null?(N=k=yt,E=m):k=k.next=yt,he.lanes|=ct,is|=ct;yt=ot.action,Gs&&s(m,yt),m=ot.hasEagerState?ot.eagerState:s(m,yt)}else ct={lane:yt,revertLane:ot.revertLane,gesture:ot.gesture,action:ot.action,hasEagerState:ot.hasEagerState,eagerState:ot.eagerState,next:null},k===null?(N=k=ct,E=m):k=k.next=ct,he.lanes|=yt,is|=yt;ot=ot.next}while(ot!==null&&ot!==i);if(k===null?E=m:k.next=N,!ei(m,e.memoizedState)&&(pn=!0,vt&&(s=br,s!==null)))throw s;e.memoizedState=m,e.baseState=E,e.baseQueue=k,l.lastRenderedState=m}return d===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Of(e){var i=un(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=e;var l=s.dispatch,d=s.pending,m=i.memoizedState;if(d!==null){s.pending=null;var E=d=d.next;do m=e(m,E.action),E=E.next;while(E!==d);ei(m,i.memoizedState)||(pn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),s.lastRenderedState=m}return[m,l]}function Zm(e,i,s){var l=he,d=un(),m=Ee;if(m){if(s===void 0)throw Error(a(407));s=s()}else s=i();var E=!ei((We||d).memoizedState,s);if(E&&(d.memoizedState=s,pn=!0),d=d.queue,Bf(Jm.bind(null,l,d,e),[e]),d.getSnapshot!==i||E||dn!==null&&dn.memoizedState.tag&1){if(l.flags|=2048,Dr(9,{destroy:void 0},Qm.bind(null,l,d,s,i),null),Qe===null)throw Error(a(349));m||(da&127)!==0||Km(l,i,s)}return s}function Km(e,i,s){e.flags|=16384,e={getSnapshot:i,value:s},i=he.updateQueue,i===null?(i=dc(),he.updateQueue=i,i.stores=[e]):(s=i.stores,s===null?i.stores=[e]:s.push(e))}function Qm(e,i,s,l){i.value=s,i.getSnapshot=l,$m(i)&&t0(e)}function Jm(e,i,s){return s(function(){$m(i)&&t0(e)})}function $m(e){var i=e.getSnapshot;e=e.value;try{var s=i();return!ei(e,s)}catch{return!0}}function t0(e){var i=Us(e,2);i!==null&&Kn(i,e,2)}function zf(e){var i=Vn();if(typeof e=="function"){var s=e;if(e=s(),Gs){Ut(!0);try{s()}finally{Ut(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:e},i}function e0(e,i,s,l){return e.baseState=s,Lf(e,We,typeof l=="function"?l:pa)}function Qy(e,i,s,l,d){if(_c(e))throw Error(a(485));if(e=i.action,e!==null){var m={payload:d,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){m.listeners.push(E)}};D.T!==null?s(!0):m.isTransition=!1,l(m),s=i.pending,s===null?(m.next=i.pending=m,n0(i,m)):(m.next=s.next,i.pending=s.next=m)}}function n0(e,i){var s=i.action,l=i.payload,d=e.state;if(i.isTransition){var m=D.T,E={};D.T=E;try{var N=s(d,l),k=D.S;k!==null&&k(E,N),i0(e,i,N)}catch(ot){Pf(e,i,ot)}finally{m!==null&&E.types!==null&&(m.types=E.types),D.T=m}}else try{m=s(d,l),i0(e,i,m)}catch(ot){Pf(e,i,ot)}}function i0(e,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){a0(e,i,l)},function(l){return Pf(e,i,l)}):a0(e,i,s)}function a0(e,i,s){i.status="fulfilled",i.value=s,s0(i),e.state=s,i=e.pending,i!==null&&(s=i.next,s===i?e.pending=null:(s=s.next,i.next=s,n0(e,s)))}function Pf(e,i,s){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,s0(i),i=i.next;while(i!==l)}e.action=null}function s0(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function r0(e,i){return i}function o0(e,i){if(Ee){var s=Qe.formState;if(s!==null){t:{var l=he;if(Ee){if($e){e:{for(var d=$e,m=_i;d.nodeType!==8;){if(!m){d=null;break e}if(d=yi(d.nextSibling),d===null){d=null;break e}}m=d.data,d=m==="F!"||m==="F"?d:null}if(d){$e=yi(d.nextSibling),l=d.data==="F!";break t}}ja(l)}l=!1}l&&(i=s[0])}}return s=Vn(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:r0,lastRenderedState:i},s.queue=l,s=A0.bind(null,he,l),l.dispatch=s,l=zf(!1),m=Vf.bind(null,he,!1,l.queue),l=Vn(),d={state:i,dispatch:null,action:e,pending:null},l.queue=d,s=Qy.bind(null,he,d,m,s),d.dispatch=s,l.memoizedState=e,[i,s,!1]}function l0(e){var i=un();return c0(i,We,e)}function c0(e,i,s){if(i=Lf(e,i,r0)[0],e=mc(pa)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Xo(i)}catch(E){throw E===Tr?sc:E}else l=i;i=un();var d=i.queue,m=d.dispatch;return s!==i.memoizedState&&(he.flags|=2048,Dr(9,{destroy:void 0},Jy.bind(null,d,s),null)),[l,m,e]}function Jy(e,i){e.action=i}function u0(e){var i=un(),s=We;if(s!==null)return c0(i,s,e);un(),i=i.memoizedState,s=un();var l=s.queue.dispatch;return s.memoizedState=e,[i,l,!1]}function Dr(e,i,s,l){return e={tag:e,create:s,deps:l,inst:i,next:null},i=he.updateQueue,i===null&&(i=dc(),he.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=e.next=e:(l=s.next,s.next=e,e.next=l,i.lastEffect=e),e}function f0(){return un().memoizedState}function gc(e,i,s,l){var d=Vn();he.flags|=e,d.memoizedState=Dr(1|i,{destroy:void 0},s,l===void 0?null:l)}function vc(e,i,s,l){var d=un();l=l===void 0?null:l;var m=d.memoizedState.inst;We!==null&&l!==null&&wf(l,We.memoizedState.deps)?d.memoizedState=Dr(i,m,s,l):(he.flags|=e,d.memoizedState=Dr(1|i,m,s,l))}function h0(e,i){gc(8390656,8,e,i)}function Bf(e,i){vc(2048,8,e,i)}function $y(e){he.flags|=4;var i=he.updateQueue;if(i===null)i=dc(),he.updateQueue=i,i.events=[e];else{var s=i.events;s===null?i.events=[e]:s.push(e)}}function d0(e){var i=un().memoizedState;return $y({ref:i,nextImpl:e}),function(){if((Pe&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function p0(e,i){return vc(4,2,e,i)}function m0(e,i){return vc(4,4,e,i)}function g0(e,i){if(typeof i=="function"){e=e();var s=i(e);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function v0(e,i,s){s=s!=null?s.concat([e]):null,vc(4,4,g0.bind(null,i,e),s)}function Ff(){}function _0(e,i){var s=un();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&wf(i,l[1])?l[0]:(s.memoizedState=[e,i],e)}function x0(e,i){var s=un();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&wf(i,l[1]))return l[0];if(l=e(),Gs){Ut(!0);try{e()}finally{Ut(!1)}}return s.memoizedState=[l,i],l}function If(e,i,s){return s===void 0||(da&1073741824)!==0&&(Se&261930)===0?e.memoizedState=i:(e.memoizedState=s,e=yg(),he.lanes|=e,is|=e,s)}function y0(e,i,s,l){return ei(s,i)?s:wr.current!==null?(e=If(e,s,l),ei(e,i)||(pn=!0),e):(da&42)===0||(da&1073741824)!==0&&(Se&261930)===0?(pn=!0,e.memoizedState=s):(e=yg(),he.lanes|=e,is|=e,i)}function S0(e,i,s,l,d){var m=H.p;H.p=m!==0&&8>m?m:8;var E=D.T,N={};D.T=N,Vf(e,!1,i,s);try{var k=d(),ot=D.S;if(ot!==null&&ot(N,k),k!==null&&typeof k=="object"&&typeof k.then=="function"){var vt=jy(k,l);Wo(e,i,vt,oi(e))}else Wo(e,i,l,oi(e))}catch(yt){Wo(e,i,{then:function(){},status:"rejected",reason:yt},oi())}finally{H.p=m,E!==null&&N.types!==null&&(E.types=N.types),D.T=E}}function tS(){}function Hf(e,i,s,l){if(e.tag!==5)throw Error(a(476));var d=M0(e).queue;S0(e,d,i,Q,s===null?tS:function(){return E0(e),s(l)})}function M0(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:Q,baseState:Q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:Q},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:s},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function E0(e){var i=M0(e);i.next===null&&(i=e.alternate.memoizedState),Wo(e,i.next.queue,{},oi())}function Gf(){return Nn(cl)}function b0(){return un().memoizedState}function T0(){return un().memoizedState}function eS(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var s=oi();e=Qa(s);var l=Ja(i,e,s);l!==null&&(Kn(l,i,s),Go(l,i,s)),i={cache:gf()},e.payload=i;return}i=i.return}}function nS(e,i,s){var l=oi();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},_c(e)?w0(i,s):(s=sf(e,i,s,l),s!==null&&(Kn(s,e,l),R0(s,i,l)))}function A0(e,i,s){var l=oi();Wo(e,i,s,l)}function Wo(e,i,s,l){var d={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(_c(e))w0(i,d);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var E=i.lastRenderedState,N=m(E,s);if(d.hasEagerState=!0,d.eagerState=N,ei(N,E))return Jl(e,i,d,0),Qe===null&&Ql(),!1}catch{}if(s=sf(e,i,d,l),s!==null)return Kn(s,e,l),R0(s,i,l),!0}return!1}function Vf(e,i,s,l){if(l={lane:2,revertLane:yh(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},_c(e)){if(i)throw Error(a(479))}else i=sf(e,s,l,2),i!==null&&Kn(i,e,2)}function _c(e){var i=e.alternate;return e===he||i!==null&&i===he}function w0(e,i){Rr=fc=!0;var s=e.pending;s===null?i.next=i:(i.next=s.next,s.next=i),e.pending=i}function R0(e,i,s){if((s&4194048)!==0){var l=i.lanes;l&=e.pendingLanes,s|=l,i.lanes=s,So(e,s)}}var Yo={readContext:Nn,use:pc,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useLayoutEffect:rn,useInsertionEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useSyncExternalStore:rn,useId:rn,useHostTransitionStatus:rn,useFormState:rn,useActionState:rn,useOptimistic:rn,useMemoCache:rn,useCacheRefresh:rn};Yo.useEffectEvent=rn;var C0={readContext:Nn,use:pc,useCallback:function(e,i){return Vn().memoizedState=[e,i===void 0?null:i],e},useContext:Nn,useEffect:h0,useImperativeHandle:function(e,i,s){s=s!=null?s.concat([e]):null,gc(4194308,4,g0.bind(null,i,e),s)},useLayoutEffect:function(e,i){return gc(4194308,4,e,i)},useInsertionEffect:function(e,i){gc(4,2,e,i)},useMemo:function(e,i){var s=Vn();i=i===void 0?null:i;var l=e();if(Gs){Ut(!0);try{e()}finally{Ut(!1)}}return s.memoizedState=[l,i],l},useReducer:function(e,i,s){var l=Vn();if(s!==void 0){var d=s(i);if(Gs){Ut(!0);try{s(i)}finally{Ut(!1)}}}else d=i;return l.memoizedState=l.baseState=d,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:d},l.queue=e,e=e.dispatch=nS.bind(null,he,e),[l.memoizedState,e]},useRef:function(e){var i=Vn();return e={current:e},i.memoizedState=e},useState:function(e){e=zf(e);var i=e.queue,s=A0.bind(null,he,i);return i.dispatch=s,[e.memoizedState,s]},useDebugValue:Ff,useDeferredValue:function(e,i){var s=Vn();return If(s,e,i)},useTransition:function(){var e=zf(!1);return e=S0.bind(null,he,e.queue,!0,!1),Vn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,s){var l=he,d=Vn();if(Ee){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),Qe===null)throw Error(a(349));(Se&127)!==0||Km(l,i,s)}d.memoizedState=s;var m={value:s,getSnapshot:i};return d.queue=m,h0(Jm.bind(null,l,m,e),[e]),l.flags|=2048,Dr(9,{destroy:void 0},Qm.bind(null,l,m,s,i),null),s},useId:function(){var e=Vn(),i=Qe.identifierPrefix;if(Ee){var s=ki,l=Vi;s=(l&~(1<<32-Lt(l)-1)).toString(32)+s,i="_"+i+"R_"+s,s=hc++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=Zy++,i="_"+i+"r_"+s.toString(32)+"_";return e.memoizedState=i},useHostTransitionStatus:Gf,useFormState:o0,useActionState:o0,useOptimistic:function(e){var i=Vn();i.memoizedState=i.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=Vf.bind(null,he,!0,s),s.dispatch=i,[e,i]},useMemoCache:Uf,useCacheRefresh:function(){return Vn().memoizedState=eS.bind(null,he)},useEffectEvent:function(e){var i=Vn(),s={impl:e};return i.memoizedState=s,function(){if((Pe&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}},kf={readContext:Nn,use:pc,useCallback:_0,useContext:Nn,useEffect:Bf,useImperativeHandle:v0,useInsertionEffect:p0,useLayoutEffect:m0,useMemo:x0,useReducer:mc,useRef:f0,useState:function(){return mc(pa)},useDebugValue:Ff,useDeferredValue:function(e,i){var s=un();return y0(s,We.memoizedState,e,i)},useTransition:function(){var e=mc(pa)[0],i=un().memoizedState;return[typeof e=="boolean"?e:Xo(e),i]},useSyncExternalStore:Zm,useId:b0,useHostTransitionStatus:Gf,useFormState:l0,useActionState:l0,useOptimistic:function(e,i){var s=un();return e0(s,We,e,i)},useMemoCache:Uf,useCacheRefresh:T0};kf.useEffectEvent=d0;var D0={readContext:Nn,use:pc,useCallback:_0,useContext:Nn,useEffect:Bf,useImperativeHandle:v0,useInsertionEffect:p0,useLayoutEffect:m0,useMemo:x0,useReducer:Of,useRef:f0,useState:function(){return Of(pa)},useDebugValue:Ff,useDeferredValue:function(e,i){var s=un();return We===null?If(s,e,i):y0(s,We.memoizedState,e,i)},useTransition:function(){var e=Of(pa)[0],i=un().memoizedState;return[typeof e=="boolean"?e:Xo(e),i]},useSyncExternalStore:Zm,useId:b0,useHostTransitionStatus:Gf,useFormState:u0,useActionState:u0,useOptimistic:function(e,i){var s=un();return We!==null?e0(s,We,e,i):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:Uf,useCacheRefresh:T0};D0.useEffectEvent=d0;function qf(e,i,s,l){i=e.memoizedState,s=s(l,i),s=s==null?i:_({},i,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var Xf={enqueueSetState:function(e,i,s){e=e._reactInternals;var l=oi(),d=Qa(l);d.payload=i,s!=null&&(d.callback=s),i=Ja(e,d,l),i!==null&&(Kn(i,e,l),Go(i,e,l))},enqueueReplaceState:function(e,i,s){e=e._reactInternals;var l=oi(),d=Qa(l);d.tag=1,d.payload=i,s!=null&&(d.callback=s),i=Ja(e,d,l),i!==null&&(Kn(i,e,l),Go(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var s=oi(),l=Qa(s);l.tag=2,i!=null&&(l.callback=i),i=Ja(e,l,s),i!==null&&(Kn(i,e,s),Go(i,e,s))}};function N0(e,i,s,l,d,m,E){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,m,E):i.prototype&&i.prototype.isPureReactComponent?!Lo(s,l)||!Lo(d,m):!0}function U0(e,i,s,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==e&&Xf.enqueueReplaceState(i,i.state,null)}function Vs(e,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(e=e.defaultProps){s===i&&(s=_({},s));for(var d in e)s[d]===void 0&&(s[d]=e[d])}return s}function L0(e){Kl(e)}function O0(e){console.error(e)}function z0(e){Kl(e)}function xc(e,i){try{var s=e.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function P0(e,i,s){try{var l=e.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function Wf(e,i,s){return s=Qa(s),s.tag=3,s.payload={element:null},s.callback=function(){xc(e,i)},s}function B0(e){return e=Qa(e),e.tag=3,e}function F0(e,i,s,l){var d=s.type.getDerivedStateFromError;if(typeof d=="function"){var m=l.value;e.payload=function(){return d(m)},e.callback=function(){P0(i,s,l)}}var E=s.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(e.callback=function(){P0(i,s,l),typeof d!="function"&&(as===null?as=new Set([this]):as.add(this));var N=l.stack;this.componentDidCatch(l.value,{componentStack:N!==null?N:""})})}function iS(e,i,s,l,d){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&Mr(i,s,d,!0),s=ii.current,s!==null){switch(s.tag){case 31:case 13:return xi===null?Nc():s.alternate===null&&on===0&&(on=3),s.flags&=-257,s.flags|=65536,s.lanes=d,l===rc?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),vh(e,l,d)),!1;case 22:return s.flags|=65536,l===rc?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),vh(e,l,d)),!1}throw Error(a(435,s.tag))}return vh(e,l,d),Nc(),!1}if(Ee)return i=ii.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=d,l!==ff&&(e=Error(a(422),{cause:l}),Po(mi(e,s)))):(l!==ff&&(i=Error(a(423),{cause:l}),Po(mi(i,s))),e=e.current.alternate,e.flags|=65536,d&=-d,e.lanes|=d,l=mi(l,s),d=Wf(e.stateNode,l,d),Mf(e,d),on!==4&&(on=2)),!1;var m=Error(a(520),{cause:l});if(m=mi(m,s),el===null?el=[m]:el.push(m),on!==4&&(on=2),i===null)return!0;l=mi(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,e=d&-d,s.lanes|=e,e=Wf(s.stateNode,l,e),Mf(s,e),!1;case 1:if(i=s.type,m=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(as===null||!as.has(m))))return s.flags|=65536,d&=-d,s.lanes|=d,d=B0(d),F0(d,e,s,l),Mf(s,d),!1}s=s.return}while(s!==null);return!1}var Yf=Error(a(461)),pn=!1;function Un(e,i,s,l){i.child=e===null?Vm(i,null,s,l):Hs(i,e.child,s,l)}function I0(e,i,s,l,d){s=s.render;var m=i.ref;if("ref"in l){var E={};for(var N in l)N!=="ref"&&(E[N]=l[N])}else E=l;return Ps(i),l=Rf(e,i,s,E,m,d),N=Cf(),e!==null&&!pn?(Df(e,i,d),ma(e,i,d)):(Ee&&N&&cf(i),i.flags|=1,Un(e,i,l,d),i.child)}function H0(e,i,s,l,d){if(e===null){var m=s.type;return typeof m=="function"&&!rf(m)&&m.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=m,G0(e,i,m,l,d)):(e=tc(s.type,null,l,i,i.mode,d),e.ref=i.ref,e.return=i,i.child=e)}if(m=e.child,!eh(e,d)){var E=m.memoizedProps;if(s=s.compare,s=s!==null?s:Lo,s(E,l)&&e.ref===i.ref)return ma(e,i,d)}return i.flags|=1,e=ca(m,l),e.ref=i.ref,e.return=i,i.child=e}function G0(e,i,s,l,d){if(e!==null){var m=e.memoizedProps;if(Lo(m,l)&&e.ref===i.ref)if(pn=!1,i.pendingProps=l=m,eh(e,d))(e.flags&131072)!==0&&(pn=!0);else return i.lanes=e.lanes,ma(e,i,d)}return jf(e,i,s,l,d)}function V0(e,i,s,l){var d=l.children,m=e!==null?e.memoizedState:null;if(e===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(m=m!==null?m.baseLanes|s:s,e!==null){for(l=i.child=e.child,d=0;l!==null;)d=d|l.lanes|l.childLanes,l=l.sibling;l=d&~m}else l=0,i.child=null;return k0(e,i,m,s,l)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&ac(i,m!==null?m.cachePool:null),m!==null?Xm(i,m):bf(),Wm(i);else return l=i.lanes=536870912,k0(e,i,m!==null?m.baseLanes|s:s,s,l)}else m!==null?(ac(i,m.cachePool),Xm(i,m),ts(),i.memoizedState=null):(e!==null&&ac(i,null),bf(),ts());return Un(e,i,d,s),i.child}function jo(e,i){return e!==null&&e.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function k0(e,i,s,l,d){var m=_f();return m=m===null?null:{parent:hn._currentValue,pool:m},i.memoizedState={baseLanes:s,cachePool:m},e!==null&&ac(i,null),bf(),Wm(i),e!==null&&Mr(e,i,l,!0),i.childLanes=d,null}function yc(e,i){return i=Mc({mode:i.mode,children:i.children},e.mode),i.ref=e.ref,e.child=i,i.return=e,i}function q0(e,i,s){return Hs(i,e.child,null,s),e=yc(i,i.pendingProps),e.flags|=2,ai(i),i.memoizedState=null,e}function aS(e,i,s){var l=i.pendingProps,d=(i.flags&128)!==0;if(i.flags&=-129,e===null){if(Ee){if(l.mode==="hidden")return e=yc(i,l),i.lanes=536870912,jo(null,e);if(Af(i),(e=$e)?(e=nv(e,_i),e=e!==null&&e.data==="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Wa!==null?{id:Vi,overflow:ki}:null,retryLane:536870912,hydrationErrors:null},s=wm(e),s.return=i,i.child=s,Dn=i,$e=null)):e=null,e===null)throw ja(i);return i.lanes=536870912,null}return yc(i,l)}var m=e.memoizedState;if(m!==null){var E=m.dehydrated;if(Af(i),d)if(i.flags&256)i.flags&=-257,i=q0(e,i,s);else if(i.memoizedState!==null)i.child=e.child,i.flags|=128,i=null;else throw Error(a(558));else if(pn||Mr(e,i,s,!1),d=(s&e.childLanes)!==0,pn||d){if(l=Qe,l!==null&&(E=or(l,s),E!==0&&E!==m.retryLane))throw m.retryLane=E,Us(e,E),Kn(l,e,E),Yf;Nc(),i=q0(e,i,s)}else e=m.treeContext,$e=yi(E.nextSibling),Dn=i,Ee=!0,Ya=null,_i=!1,e!==null&&Dm(i,e),i=yc(i,l),i.flags|=4096;return i}return e=ca(e.child,{mode:l.mode,children:l.children}),e.ref=i.ref,i.child=e,e.return=i,e}function Sc(e,i){var s=i.ref;if(s===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(e===null||e.ref!==s)&&(i.flags|=4194816)}}function jf(e,i,s,l,d){return Ps(i),s=Rf(e,i,s,l,void 0,d),l=Cf(),e!==null&&!pn?(Df(e,i,d),ma(e,i,d)):(Ee&&l&&cf(i),i.flags|=1,Un(e,i,s,d),i.child)}function X0(e,i,s,l,d,m){return Ps(i),i.updateQueue=null,s=jm(i,l,s,d),Ym(e),l=Cf(),e!==null&&!pn?(Df(e,i,m),ma(e,i,m)):(Ee&&l&&cf(i),i.flags|=1,Un(e,i,s,m),i.child)}function W0(e,i,s,l,d){if(Ps(i),i.stateNode===null){var m=_r,E=s.contextType;typeof E=="object"&&E!==null&&(m=Nn(E)),m=new s(l,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Xf,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=l,m.state=i.memoizedState,m.refs={},yf(i),E=s.contextType,m.context=typeof E=="object"&&E!==null?Nn(E):_r,m.state=i.memoizedState,E=s.getDerivedStateFromProps,typeof E=="function"&&(qf(i,s,E,l),m.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(E=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),E!==m.state&&Xf.enqueueReplaceState(m,m.state,null),ko(i,l,m,d),Vo(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){m=i.stateNode;var N=i.memoizedProps,k=Vs(s,N);m.props=k;var ot=m.context,vt=s.contextType;E=_r,typeof vt=="object"&&vt!==null&&(E=Nn(vt));var yt=s.getDerivedStateFromProps;vt=typeof yt=="function"||typeof m.getSnapshotBeforeUpdate=="function",N=i.pendingProps!==N,vt||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(N||ot!==E)&&U0(i,m,l,E),Ka=!1;var ct=i.memoizedState;m.state=ct,ko(i,l,m,d),Vo(),ot=i.memoizedState,N||ct!==ot||Ka?(typeof yt=="function"&&(qf(i,s,yt,l),ot=i.memoizedState),(k=Ka||N0(i,s,k,l,ct,ot,E))?(vt||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=ot),m.props=l,m.state=ot,m.context=E,l=k):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{m=i.stateNode,Sf(e,i),E=i.memoizedProps,vt=Vs(s,E),m.props=vt,yt=i.pendingProps,ct=m.context,ot=s.contextType,k=_r,typeof ot=="object"&&ot!==null&&(k=Nn(ot)),N=s.getDerivedStateFromProps,(ot=typeof N=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(E!==yt||ct!==k)&&U0(i,m,l,k),Ka=!1,ct=i.memoizedState,m.state=ct,ko(i,l,m,d),Vo();var dt=i.memoizedState;E!==yt||ct!==dt||Ka||e!==null&&e.dependencies!==null&&nc(e.dependencies)?(typeof N=="function"&&(qf(i,s,N,l),dt=i.memoizedState),(vt=Ka||N0(i,s,vt,l,ct,dt,k)||e!==null&&e.dependencies!==null&&nc(e.dependencies))?(ot||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,dt,k),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,dt,k)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||E===e.memoizedProps&&ct===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&ct===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=dt),m.props=l,m.state=dt,m.context=k,l=vt):(typeof m.componentDidUpdate!="function"||E===e.memoizedProps&&ct===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&ct===e.memoizedState||(i.flags|=1024),l=!1)}return m=l,Sc(e,i),l=(i.flags&128)!==0,m||l?(m=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,e!==null&&l?(i.child=Hs(i,e.child,null,d),i.child=Hs(i,null,s,d)):Un(e,i,s,d),i.memoizedState=m.state,e=i.child):e=ma(e,i,d),e}function Y0(e,i,s,l){return Os(),i.flags|=256,Un(e,i,s,l),i.child}var Zf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Kf(e){return{baseLanes:e,cachePool:Pm()}}function Qf(e,i,s){return e=e!==null?e.childLanes&~s:0,i&&(e|=ri),e}function j0(e,i,s){var l=i.pendingProps,d=!1,m=(i.flags&128)!==0,E;if((E=m)||(E=e!==null&&e.memoizedState===null?!1:(cn.current&2)!==0),E&&(d=!0,i.flags&=-129),E=(i.flags&32)!==0,i.flags&=-33,e===null){if(Ee){if(d?$a(i):ts(),(e=$e)?(e=nv(e,_i),e=e!==null&&e.data!=="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Wa!==null?{id:Vi,overflow:ki}:null,retryLane:536870912,hydrationErrors:null},s=wm(e),s.return=i,i.child=s,Dn=i,$e=null)):e=null,e===null)throw ja(i);return Lh(e)?i.lanes=32:i.lanes=536870912,null}var N=l.children;return l=l.fallback,d?(ts(),d=i.mode,N=Mc({mode:"hidden",children:N},d),l=Ls(l,d,s,null),N.return=i,l.return=i,N.sibling=l,i.child=N,l=i.child,l.memoizedState=Kf(s),l.childLanes=Qf(e,E,s),i.memoizedState=Zf,jo(null,l)):($a(i),Jf(i,N))}var k=e.memoizedState;if(k!==null&&(N=k.dehydrated,N!==null)){if(m)i.flags&256?($a(i),i.flags&=-257,i=$f(e,i,s)):i.memoizedState!==null?(ts(),i.child=e.child,i.flags|=128,i=null):(ts(),N=l.fallback,d=i.mode,l=Mc({mode:"visible",children:l.children},d),N=Ls(N,d,s,null),N.flags|=2,l.return=i,N.return=i,l.sibling=N,i.child=l,Hs(i,e.child,null,s),l=i.child,l.memoizedState=Kf(s),l.childLanes=Qf(e,E,s),i.memoizedState=Zf,i=jo(null,l));else if($a(i),Lh(N)){if(E=N.nextSibling&&N.nextSibling.dataset,E)var ot=E.dgst;E=ot,l=Error(a(419)),l.stack="",l.digest=E,Po({value:l,source:null,stack:null}),i=$f(e,i,s)}else if(pn||Mr(e,i,s,!1),E=(s&e.childLanes)!==0,pn||E){if(E=Qe,E!==null&&(l=or(E,s),l!==0&&l!==k.retryLane))throw k.retryLane=l,Us(e,l),Kn(E,e,l),Yf;Uh(N)||Nc(),i=$f(e,i,s)}else Uh(N)?(i.flags|=192,i.child=e.child,i=null):(e=k.treeContext,$e=yi(N.nextSibling),Dn=i,Ee=!0,Ya=null,_i=!1,e!==null&&Dm(i,e),i=Jf(i,l.children),i.flags|=4096);return i}return d?(ts(),N=l.fallback,d=i.mode,k=e.child,ot=k.sibling,l=ca(k,{mode:"hidden",children:l.children}),l.subtreeFlags=k.subtreeFlags&65011712,ot!==null?N=ca(ot,N):(N=Ls(N,d,s,null),N.flags|=2),N.return=i,l.return=i,l.sibling=N,i.child=l,jo(null,l),l=i.child,N=e.child.memoizedState,N===null?N=Kf(s):(d=N.cachePool,d!==null?(k=hn._currentValue,d=d.parent!==k?{parent:k,pool:k}:d):d=Pm(),N={baseLanes:N.baseLanes|s,cachePool:d}),l.memoizedState=N,l.childLanes=Qf(e,E,s),i.memoizedState=Zf,jo(e.child,l)):($a(i),s=e.child,e=s.sibling,s=ca(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,e!==null&&(E=i.deletions,E===null?(i.deletions=[e],i.flags|=16):E.push(e)),i.child=s,i.memoizedState=null,s)}function Jf(e,i){return i=Mc({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function Mc(e,i){return e=ni(22,e,null,i),e.lanes=0,e}function $f(e,i,s){return Hs(i,e.child,null,s),e=Jf(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function Z0(e,i,s){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),pf(e.return,i,s)}function th(e,i,s,l,d,m){var E=e.memoizedState;E===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:d,treeForkCount:m}:(E.isBackwards=i,E.rendering=null,E.renderingStartTime=0,E.last=l,E.tail=s,E.tailMode=d,E.treeForkCount=m)}function K0(e,i,s){var l=i.pendingProps,d=l.revealOrder,m=l.tail;l=l.children;var E=cn.current,N=(E&2)!==0;if(N?(E=E&1|2,i.flags|=128):E&=1,_t(cn,E),Un(e,i,l,s),l=Ee?zo:0,!N&&e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Z0(e,s,i);else if(e.tag===19)Z0(e,s,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(d){case"forwards":for(s=i.child,d=null;s!==null;)e=s.alternate,e!==null&&uc(e)===null&&(d=s),s=s.sibling;s=d,s===null?(d=i.child,i.child=null):(d=s.sibling,s.sibling=null),th(i,!1,d,s,m,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,d=i.child,i.child=null;d!==null;){if(e=d.alternate,e!==null&&uc(e)===null){i.child=d;break}e=d.sibling,d.sibling=s,s=d,d=e}th(i,!0,s,null,m,l);break;case"together":th(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function ma(e,i,s){if(e!==null&&(i.dependencies=e.dependencies),is|=i.lanes,(s&i.childLanes)===0)if(e!==null){if(Mr(e,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,s=ca(e,e.pendingProps),i.child=s,s.return=i;e.sibling!==null;)e=e.sibling,s=s.sibling=ca(e,e.pendingProps),s.return=i;s.sibling=null}return i.child}function eh(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&nc(e)))}function sS(e,i,s){switch(i.tag){case 3:Nt(i,i.stateNode.containerInfo),Za(i,hn,e.memoizedState.cache),Os();break;case 27:case 5:Vt(i);break;case 4:Nt(i,i.stateNode.containerInfo);break;case 10:Za(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,Af(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?($a(i),i.flags|=128,null):(s&i.child.childLanes)!==0?j0(e,i,s):($a(i),e=ma(e,i,s),e!==null?e.sibling:null);$a(i);break;case 19:var d=(e.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(Mr(e,i,s,!1),l=(s&i.childLanes)!==0),d){if(l)return K0(e,i,s);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),_t(cn,cn.current),l)break;return null;case 22:return i.lanes=0,V0(e,i,s,i.pendingProps);case 24:Za(i,hn,e.memoizedState.cache)}return ma(e,i,s)}function Q0(e,i,s){if(e!==null)if(e.memoizedProps!==i.pendingProps)pn=!0;else{if(!eh(e,s)&&(i.flags&128)===0)return pn=!1,sS(e,i,s);pn=(e.flags&131072)!==0}else pn=!1,Ee&&(i.flags&1048576)!==0&&Cm(i,zo,i.index);switch(i.lanes=0,i.tag){case 16:t:{var l=i.pendingProps;if(e=Fs(i.elementType),i.type=e,typeof e=="function")rf(e)?(l=Vs(e,l),i.tag=1,i=W0(null,i,e,l,s)):(i.tag=0,i=jf(null,i,e,l,s));else{if(e!=null){var d=e.$$typeof;if(d===L){i.tag=11,i=I0(null,i,e,l,s);break t}else if(d===P){i.tag=14,i=H0(null,i,e,l,s);break t}}throw i=j(e)||e,Error(a(306,i,""))}}return i;case 0:return jf(e,i,i.type,i.pendingProps,s);case 1:return l=i.type,d=Vs(l,i.pendingProps),W0(e,i,l,d,s);case 3:t:{if(Nt(i,i.stateNode.containerInfo),e===null)throw Error(a(387));l=i.pendingProps;var m=i.memoizedState;d=m.element,Sf(e,i),ko(i,l,null,s);var E=i.memoizedState;if(l=E.cache,Za(i,hn,l),l!==m.cache&&mf(i,[hn],s,!0),Vo(),l=E.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:E.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=Y0(e,i,l,s);break t}else if(l!==d){d=mi(Error(a(424)),i),Po(d),i=Y0(e,i,l,s);break t}else for(e=i.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,$e=yi(e.firstChild),Dn=i,Ee=!0,Ya=null,_i=!0,s=Vm(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(Os(),l===d){i=ma(e,i,s);break t}Un(e,i,l,s)}i=i.child}return i;case 26:return Sc(e,i),e===null?(s=lv(i.type,null,i.pendingProps,null))?i.memoizedState=s:Ee||(s=i.type,e=i.pendingProps,l=Fc(nt.current).createElement(s),l[fn]=i,l[bn]=e,Ln(l,s,e),U(l),i.stateNode=l):i.memoizedState=lv(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return Vt(i),e===null&&Ee&&(l=i.stateNode=sv(i.type,i.pendingProps,nt.current),Dn=i,_i=!0,d=$e,ls(i.type)?(Oh=d,$e=yi(l.firstChild)):$e=d),Un(e,i,i.pendingProps.children,s),Sc(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Ee&&((d=l=$e)&&(l=zS(l,i.type,i.pendingProps,_i),l!==null?(i.stateNode=l,Dn=i,$e=yi(l.firstChild),_i=!1,d=!0):d=!1),d||ja(i)),Vt(i),d=i.type,m=i.pendingProps,E=e!==null?e.memoizedProps:null,l=m.children,Ch(d,m)?l=null:E!==null&&Ch(d,E)&&(i.flags|=32),i.memoizedState!==null&&(d=Rf(e,i,Ky,null,null,s),cl._currentValue=d),Sc(e,i),Un(e,i,l,s),i.child;case 6:return e===null&&Ee&&((e=s=$e)&&(s=PS(s,i.pendingProps,_i),s!==null?(i.stateNode=s,Dn=i,$e=null,e=!0):e=!1),e||ja(i)),null;case 13:return j0(e,i,s);case 4:return Nt(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=Hs(i,null,l,s):Un(e,i,l,s),i.child;case 11:return I0(e,i,i.type,i.pendingProps,s);case 7:return Un(e,i,i.pendingProps,s),i.child;case 8:return Un(e,i,i.pendingProps.children,s),i.child;case 12:return Un(e,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,Za(i,i.type,l.value),Un(e,i,l.children,s),i.child;case 9:return d=i.type._context,l=i.pendingProps.children,Ps(i),d=Nn(d),l=l(d),i.flags|=1,Un(e,i,l,s),i.child;case 14:return H0(e,i,i.type,i.pendingProps,s);case 15:return G0(e,i,i.type,i.pendingProps,s);case 19:return K0(e,i,s);case 31:return aS(e,i,s);case 22:return V0(e,i,s,i.pendingProps);case 24:return Ps(i),l=Nn(hn),e===null?(d=_f(),d===null&&(d=Qe,m=gf(),d.pooledCache=m,m.refCount++,m!==null&&(d.pooledCacheLanes|=s),d=m),i.memoizedState={parent:l,cache:d},yf(i),Za(i,hn,d)):((e.lanes&s)!==0&&(Sf(e,i),ko(i,null,null,s),Vo()),d=e.memoizedState,m=i.memoizedState,d.parent!==l?(d={parent:l,cache:l},i.memoizedState=d,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=d),Za(i,hn,l)):(l=m.cache,Za(i,hn,l),l!==d.cache&&mf(i,[hn],s,!0))),Un(e,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function ga(e){e.flags|=4}function nh(e,i,s,l,d){if((i=(e.mode&32)!==0)&&(i=!1),i){if(e.flags|=16777216,(d&335544128)===d)if(e.stateNode.complete)e.flags|=8192;else if(bg())e.flags|=8192;else throw Is=rc,xf}else e.flags&=-16777217}function J0(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!dv(i))if(bg())e.flags|=8192;else throw Is=rc,xf}function Ec(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?He():536870912,e.lanes|=i,Or|=i)}function Zo(e,i){if(!Ee)switch(e.tailMode){case"hidden":i=e.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function tn(e){var i=e.alternate!==null&&e.alternate.child===e.child,s=0,l=0;if(i)for(var d=e.child;d!==null;)s|=d.lanes|d.childLanes,l|=d.subtreeFlags&65011712,l|=d.flags&65011712,d.return=e,d=d.sibling;else for(d=e.child;d!==null;)s|=d.lanes|d.childLanes,l|=d.subtreeFlags,l|=d.flags,d.return=e,d=d.sibling;return e.subtreeFlags|=l,e.childLanes=s,i}function rS(e,i,s){var l=i.pendingProps;switch(uf(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tn(i),null;case 1:return tn(i),null;case 3:return s=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),ha(hn),Xt(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(Sr(i)?ga(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,hf())),tn(i),null;case 26:var d=i.type,m=i.memoizedState;return e===null?(ga(i),m!==null?(tn(i),J0(i,m)):(tn(i),nh(i,d,null,l,s))):m?m!==e.memoizedState?(ga(i),tn(i),J0(i,m)):(tn(i),i.flags&=-16777217):(e=e.memoizedProps,e!==l&&ga(i),tn(i),nh(i,d,e,l,s)),null;case 27:if(me(i),s=nt.current,d=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&ga(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return tn(i),null}e=Tt.current,Sr(i)?Nm(i):(e=sv(d,l,s),i.stateNode=e,ga(i))}return tn(i),null;case 5:if(me(i),d=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&ga(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return tn(i),null}if(m=Tt.current,Sr(i))Nm(i);else{var E=Fc(nt.current);switch(m){case 1:m=E.createElementNS("http://www.w3.org/2000/svg",d);break;case 2:m=E.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;default:switch(d){case"svg":m=E.createElementNS("http://www.w3.org/2000/svg",d);break;case"math":m=E.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;case"script":m=E.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof l.is=="string"?E.createElement("select",{is:l.is}):E.createElement("select"),l.multiple?m.multiple=!0:l.size&&(m.size=l.size);break;default:m=typeof l.is=="string"?E.createElement(d,{is:l.is}):E.createElement(d)}}m[fn]=i,m[bn]=l;t:for(E=i.child;E!==null;){if(E.tag===5||E.tag===6)m.appendChild(E.stateNode);else if(E.tag!==4&&E.tag!==27&&E.child!==null){E.child.return=E,E=E.child;continue}if(E===i)break t;for(;E.sibling===null;){if(E.return===null||E.return===i)break t;E=E.return}E.sibling.return=E.return,E=E.sibling}i.stateNode=m;t:switch(Ln(m,d,l),d){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&ga(i)}}return tn(i),nh(i,i.type,e===null?null:e.memoizedProps,i.pendingProps,s),null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&ga(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(e=nt.current,Sr(i)){if(e=i.stateNode,s=i.memoizedProps,l=null,d=Dn,d!==null)switch(d.tag){case 27:case 5:l=d.memoizedProps}e[fn]=i,e=!!(e.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||jg(e.nodeValue,s)),e||ja(i,!0)}else e=Fc(e).createTextNode(l),e[fn]=i,i.stateNode=e}return tn(i),null;case 31:if(s=i.memoizedState,e===null||e.memoizedState!==null){if(l=Sr(i),s!==null){if(e===null){if(!l)throw Error(a(318));if(e=i.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[fn]=i}else Os(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;tn(i),e=!1}else s=hf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),e=!0;if(!e)return i.flags&256?(ai(i),i):(ai(i),null);if((i.flags&128)!==0)throw Error(a(558))}return tn(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(d=Sr(i),l!==null&&l.dehydrated!==null){if(e===null){if(!d)throw Error(a(318));if(d=i.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(a(317));d[fn]=i}else Os(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;tn(i),d=!1}else d=hf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=d),d=!0;if(!d)return i.flags&256?(ai(i),i):(ai(i),null)}return ai(i),(i.flags&128)!==0?(i.lanes=s,i):(s=l!==null,e=e!==null&&e.memoizedState!==null,s&&(l=i.child,d=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(d=l.alternate.memoizedState.cachePool.pool),m=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==d&&(l.flags|=2048)),s!==e&&s&&(i.child.flags|=8192),Ec(i,i.updateQueue),tn(i),null);case 4:return Xt(),e===null&&bh(i.stateNode.containerInfo),tn(i),null;case 10:return ha(i.type),tn(i),null;case 19:if(Z(cn),l=i.memoizedState,l===null)return tn(i),null;if(d=(i.flags&128)!==0,m=l.rendering,m===null)if(d)Zo(l,!1);else{if(on!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(m=uc(e),m!==null){for(i.flags|=128,Zo(l,!1),e=m.updateQueue,i.updateQueue=e,Ec(i,e),i.subtreeFlags=0,e=s,s=i.child;s!==null;)Am(s,e),s=s.sibling;return _t(cn,cn.current&1|2),Ee&&ua(i,l.treeForkCount),i.child}e=e.sibling}l.tail!==null&&A()>Rc&&(i.flags|=128,d=!0,Zo(l,!1),i.lanes=4194304)}else{if(!d)if(e=uc(m),e!==null){if(i.flags|=128,d=!0,e=e.updateQueue,i.updateQueue=e,Ec(i,e),Zo(l,!0),l.tail===null&&l.tailMode==="hidden"&&!m.alternate&&!Ee)return tn(i),null}else 2*A()-l.renderingStartTime>Rc&&s!==536870912&&(i.flags|=128,d=!0,Zo(l,!1),i.lanes=4194304);l.isBackwards?(m.sibling=i.child,i.child=m):(e=l.last,e!==null?e.sibling=m:i.child=m,l.last=m)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=A(),e.sibling=null,s=cn.current,_t(cn,d?s&1|2:s&1),Ee&&ua(i,l.treeForkCount),e):(tn(i),null);case 22:case 23:return ai(i),Tf(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(tn(i),i.subtreeFlags&6&&(i.flags|=8192)):tn(i),s=i.updateQueue,s!==null&&Ec(i,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),e!==null&&Z(Bs),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),ha(hn),tn(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function oS(e,i){switch(uf(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return ha(hn),Xt(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return me(i),null;case 31:if(i.memoizedState!==null){if(ai(i),i.alternate===null)throw Error(a(340));Os()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 13:if(ai(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));Os()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return Z(cn),null;case 4:return Xt(),null;case 10:return ha(i.type),null;case 22:case 23:return ai(i),Tf(),e!==null&&Z(Bs),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return ha(hn),null;case 25:return null;default:return null}}function $0(e,i){switch(uf(i),i.tag){case 3:ha(hn),Xt();break;case 26:case 27:case 5:me(i);break;case 4:Xt();break;case 31:i.memoizedState!==null&&ai(i);break;case 13:ai(i);break;case 19:Z(cn);break;case 10:ha(i.type);break;case 22:case 23:ai(i),Tf(),e!==null&&Z(Bs);break;case 24:ha(hn)}}function Ko(e,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var d=l.next;s=d;do{if((s.tag&e)===e){l=void 0;var m=s.create,E=s.inst;l=m(),E.destroy=l}s=s.next}while(s!==d)}}catch(N){ke(i,i.return,N)}}function es(e,i,s){try{var l=i.updateQueue,d=l!==null?l.lastEffect:null;if(d!==null){var m=d.next;l=m;do{if((l.tag&e)===e){var E=l.inst,N=E.destroy;if(N!==void 0){E.destroy=void 0,d=i;var k=s,ot=N;try{ot()}catch(vt){ke(d,k,vt)}}}l=l.next}while(l!==m)}}catch(vt){ke(i,i.return,vt)}}function tg(e){var i=e.updateQueue;if(i!==null){var s=e.stateNode;try{qm(i,s)}catch(l){ke(e,e.return,l)}}}function eg(e,i,s){s.props=Vs(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(l){ke(e,i,l)}}function Qo(e,i){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof s=="function"?e.refCleanup=s(l):s.current=l}}catch(d){ke(e,i,d)}}function qi(e,i){var s=e.ref,l=e.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(d){ke(e,i,d)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(d){ke(e,i,d)}else s.current=null}function ng(e){var i=e.type,s=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break t;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(d){ke(e,e.return,d)}}function ih(e,i,s){try{var l=e.stateNode;CS(l,e.type,s,i),l[bn]=i}catch(d){ke(e,e.return,d)}}function ig(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ls(e.type)||e.tag===4}function ah(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||ig(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ls(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function sh(e,i,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(e),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=oa));else if(l!==4&&(l===27&&ls(e.type)&&(s=e.stateNode,i=null),e=e.child,e!==null))for(sh(e,i,s),e=e.sibling;e!==null;)sh(e,i,s),e=e.sibling}function bc(e,i,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?s.insertBefore(e,i):s.appendChild(e);else if(l!==4&&(l===27&&ls(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(bc(e,i,s),e=e.sibling;e!==null;)bc(e,i,s),e=e.sibling}function ag(e){var i=e.stateNode,s=e.memoizedProps;try{for(var l=e.type,d=i.attributes;d.length;)i.removeAttributeNode(d[0]);Ln(i,l,s),i[fn]=e,i[bn]=s}catch(m){ke(e,e.return,m)}}var va=!1,mn=!1,rh=!1,sg=typeof WeakSet=="function"?WeakSet:Set,Mn=null;function lS(e,i){if(e=e.containerInfo,wh=Xc,e=vm(e),Ju(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var d=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break t}var E=0,N=-1,k=-1,ot=0,vt=0,yt=e,ct=null;e:for(;;){for(var dt;yt!==s||d!==0&&yt.nodeType!==3||(N=E+d),yt!==m||l!==0&&yt.nodeType!==3||(k=E+l),yt.nodeType===3&&(E+=yt.nodeValue.length),(dt=yt.firstChild)!==null;)ct=yt,yt=dt;for(;;){if(yt===e)break e;if(ct===s&&++ot===d&&(N=E),ct===m&&++vt===l&&(k=E),(dt=yt.nextSibling)!==null)break;yt=ct,ct=yt.parentNode}yt=dt}s=N===-1||k===-1?null:{start:N,end:k}}else s=null}s=s||{start:0,end:0}}else s=null;for(Rh={focusedElem:e,selectionRange:s},Xc=!1,Mn=i;Mn!==null;)if(i=Mn,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,Mn=e;else for(;Mn!==null;){switch(i=Mn,m=i.alternate,e=i.flags,i.tag){case 0:if((e&4)!==0&&(e=i.updateQueue,e=e!==null?e.events:null,e!==null))for(s=0;s<e.length;s++)d=e[s],d.ref.impl=d.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,s=i,d=m.memoizedProps,m=m.memoizedState,l=s.stateNode;try{var Yt=Vs(s.type,d);e=l.getSnapshotBeforeUpdate(Yt,m),l.__reactInternalSnapshotBeforeUpdate=e}catch(ae){ke(s,s.return,ae)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,s=e.nodeType,s===9)Nh(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Nh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,Mn=e;break}Mn=i.return}}function rg(e,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:xa(e,s),l&4&&Ko(5,s);break;case 1:if(xa(e,s),l&4)if(e=s.stateNode,i===null)try{e.componentDidMount()}catch(E){ke(s,s.return,E)}else{var d=Vs(s.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(d,i,e.__reactInternalSnapshotBeforeUpdate)}catch(E){ke(s,s.return,E)}}l&64&&tg(s),l&512&&Qo(s,s.return);break;case 3:if(xa(e,s),l&64&&(e=s.updateQueue,e!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{qm(e,i)}catch(E){ke(s,s.return,E)}}break;case 27:i===null&&l&4&&ag(s);case 26:case 5:xa(e,s),i===null&&l&4&&ng(s),l&512&&Qo(s,s.return);break;case 12:xa(e,s);break;case 31:xa(e,s),l&4&&cg(e,s);break;case 13:xa(e,s),l&4&&ug(e,s),l&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=vS.bind(null,s),BS(e,s))));break;case 22:if(l=s.memoizedState!==null||va,!l){i=i!==null&&i.memoizedState!==null||mn,d=va;var m=mn;va=l,(mn=i)&&!m?ya(e,s,(s.subtreeFlags&8772)!==0):xa(e,s),va=d,mn=m}break;case 30:break;default:xa(e,s)}}function og(e){var i=e.alternate;i!==null&&(e.alternate=null,og(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&To(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var an=null,Wn=!1;function _a(e,i,s){for(s=s.child;s!==null;)lg(e,i,s),s=s.sibling}function lg(e,i,s){if(At&&typeof At.onCommitFiberUnmount=="function")try{At.onCommitFiberUnmount(Mt,s)}catch{}switch(s.tag){case 26:mn||qi(s,i),_a(e,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:mn||qi(s,i);var l=an,d=Wn;ls(s.type)&&(an=s.stateNode,Wn=!1),_a(e,i,s),rl(s.stateNode),an=l,Wn=d;break;case 5:mn||qi(s,i);case 6:if(l=an,d=Wn,an=null,_a(e,i,s),an=l,Wn=d,an!==null)if(Wn)try{(an.nodeType===9?an.body:an.nodeName==="HTML"?an.ownerDocument.body:an).removeChild(s.stateNode)}catch(m){ke(s,i,m)}else try{an.removeChild(s.stateNode)}catch(m){ke(s,i,m)}break;case 18:an!==null&&(Wn?(e=an,tv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),Vr(e)):tv(an,s.stateNode));break;case 4:l=an,d=Wn,an=s.stateNode.containerInfo,Wn=!0,_a(e,i,s),an=l,Wn=d;break;case 0:case 11:case 14:case 15:es(2,s,i),mn||es(4,s,i),_a(e,i,s);break;case 1:mn||(qi(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&eg(s,i,l)),_a(e,i,s);break;case 21:_a(e,i,s);break;case 22:mn=(l=mn)||s.memoizedState!==null,_a(e,i,s),mn=l;break;default:_a(e,i,s)}}function cg(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Vr(e)}catch(s){ke(i,i.return,s)}}}function ug(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Vr(e)}catch(s){ke(i,i.return,s)}}function cS(e){switch(e.tag){case 31:case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new sg),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new sg),i;default:throw Error(a(435,e.tag))}}function Tc(e,i){var s=cS(e);i.forEach(function(l){if(!s.has(l)){s.add(l);var d=_S.bind(null,e,l);l.then(d,d)}})}function Yn(e,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var d=s[l],m=e,E=i,N=E;t:for(;N!==null;){switch(N.tag){case 27:if(ls(N.type)){an=N.stateNode,Wn=!1;break t}break;case 5:an=N.stateNode,Wn=!1;break t;case 3:case 4:an=N.stateNode.containerInfo,Wn=!0;break t}N=N.return}if(an===null)throw Error(a(160));lg(m,E,d),an=null,Wn=!1,m=d.alternate,m!==null&&(m.return=null),d.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)fg(i,e),i=i.sibling}var Ri=null;function fg(e,i){var s=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Yn(i,e),jn(e),l&4&&(es(3,e,e.return),Ko(3,e),es(5,e,e.return));break;case 1:Yn(i,e),jn(e),l&512&&(mn||s===null||qi(s,s.return)),l&64&&va&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var d=Ri;if(Yn(i,e),jn(e),l&512&&(mn||s===null||qi(s,s.return)),l&4){var m=s!==null?s.memoizedState:null;if(l=e.memoizedState,s===null)if(l===null)if(e.stateNode===null){t:{l=e.type,s=e.memoizedProps,d=d.ownerDocument||d;e:switch(l){case"title":m=d.getElementsByTagName("title")[0],(!m||m[ws]||m[fn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=d.createElement(l),d.head.insertBefore(m,d.querySelector("head > title"))),Ln(m,l,s),m[fn]=e,U(m),l=m;break t;case"link":var E=fv("link","href",d).get(l+(s.href||""));if(E){for(var N=0;N<E.length;N++)if(m=E[N],m.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&m.getAttribute("rel")===(s.rel==null?null:s.rel)&&m.getAttribute("title")===(s.title==null?null:s.title)&&m.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){E.splice(N,1);break e}}m=d.createElement(l),Ln(m,l,s),d.head.appendChild(m);break;case"meta":if(E=fv("meta","content",d).get(l+(s.content||""))){for(N=0;N<E.length;N++)if(m=E[N],m.getAttribute("content")===(s.content==null?null:""+s.content)&&m.getAttribute("name")===(s.name==null?null:s.name)&&m.getAttribute("property")===(s.property==null?null:s.property)&&m.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&m.getAttribute("charset")===(s.charSet==null?null:s.charSet)){E.splice(N,1);break e}}m=d.createElement(l),Ln(m,l,s),d.head.appendChild(m);break;default:throw Error(a(468,l))}m[fn]=e,U(m),l=m}e.stateNode=l}else hv(d,e.type,e.stateNode);else e.stateNode=uv(d,l,e.memoizedProps);else m!==l?(m===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):m.count--,l===null?hv(d,e.type,e.stateNode):uv(d,l,e.memoizedProps)):l===null&&e.stateNode!==null&&ih(e,e.memoizedProps,s.memoizedProps)}break;case 27:Yn(i,e),jn(e),l&512&&(mn||s===null||qi(s,s.return)),s!==null&&l&4&&ih(e,e.memoizedProps,s.memoizedProps);break;case 5:if(Yn(i,e),jn(e),l&512&&(mn||s===null||qi(s,s.return)),e.flags&32){d=e.stateNode;try{vn(d,"")}catch(Yt){ke(e,e.return,Yt)}}l&4&&e.stateNode!=null&&(d=e.memoizedProps,ih(e,d,s!==null?s.memoizedProps:d)),l&1024&&(rh=!0);break;case 6:if(Yn(i,e),jn(e),l&4){if(e.stateNode===null)throw Error(a(162));l=e.memoizedProps,s=e.stateNode;try{s.nodeValue=l}catch(Yt){ke(e,e.return,Yt)}}break;case 3:if(Gc=null,d=Ri,Ri=Ic(i.containerInfo),Yn(i,e),Ri=d,jn(e),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Vr(i.containerInfo)}catch(Yt){ke(e,e.return,Yt)}rh&&(rh=!1,hg(e));break;case 4:l=Ri,Ri=Ic(e.stateNode.containerInfo),Yn(i,e),jn(e),Ri=l;break;case 12:Yn(i,e),jn(e);break;case 31:Yn(i,e),jn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Tc(e,l)));break;case 13:Yn(i,e),jn(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(wc=A()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Tc(e,l)));break;case 22:d=e.memoizedState!==null;var k=s!==null&&s.memoizedState!==null,ot=va,vt=mn;if(va=ot||d,mn=vt||k,Yn(i,e),mn=vt,va=ot,jn(e),l&8192)t:for(i=e.stateNode,i._visibility=d?i._visibility&-2:i._visibility|1,d&&(s===null||k||va||mn||ks(e)),s=null,i=e;;){if(i.tag===5||i.tag===26){if(s===null){k=s=i;try{if(m=k.stateNode,d)E=m.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{N=k.stateNode;var yt=k.memoizedProps.style,ct=yt!=null&&yt.hasOwnProperty("display")?yt.display:null;N.style.display=ct==null||typeof ct=="boolean"?"":(""+ct).trim()}}catch(Yt){ke(k,k.return,Yt)}}}else if(i.tag===6){if(s===null){k=i;try{k.stateNode.nodeValue=d?"":k.memoizedProps}catch(Yt){ke(k,k.return,Yt)}}}else if(i.tag===18){if(s===null){k=i;try{var dt=k.stateNode;d?ev(dt,!0):ev(k.stateNode,!1)}catch(Yt){ke(k,k.return,Yt)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,Tc(e,s))));break;case 19:Yn(i,e),jn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Tc(e,l)));break;case 30:break;case 21:break;default:Yn(i,e),jn(e)}}function jn(e){var i=e.flags;if(i&2){try{for(var s,l=e.return;l!==null;){if(ig(l)){s=l;break}l=l.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var d=s.stateNode,m=ah(e);bc(e,m,d);break;case 5:var E=s.stateNode;s.flags&32&&(vn(E,""),s.flags&=-33);var N=ah(e);bc(e,N,E);break;case 3:case 4:var k=s.stateNode.containerInfo,ot=ah(e);sh(e,ot,k);break;default:throw Error(a(161))}}catch(vt){ke(e,e.return,vt)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function hg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;hg(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function xa(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)rg(e,i.alternate,i),i=i.sibling}function ks(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:es(4,i,i.return),ks(i);break;case 1:qi(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&eg(i,i.return,s),ks(i);break;case 27:rl(i.stateNode);case 26:case 5:qi(i,i.return),ks(i);break;case 22:i.memoizedState===null&&ks(i);break;case 30:ks(i);break;default:ks(i)}e=e.sibling}}function ya(e,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,d=e,m=i,E=m.flags;switch(m.tag){case 0:case 11:case 15:ya(d,m,s),Ko(4,m);break;case 1:if(ya(d,m,s),l=m,d=l.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(ot){ke(l,l.return,ot)}if(l=m,d=l.updateQueue,d!==null){var N=l.stateNode;try{var k=d.shared.hiddenCallbacks;if(k!==null)for(d.shared.hiddenCallbacks=null,d=0;d<k.length;d++)km(k[d],N)}catch(ot){ke(l,l.return,ot)}}s&&E&64&&tg(m),Qo(m,m.return);break;case 27:ag(m);case 26:case 5:ya(d,m,s),s&&l===null&&E&4&&ng(m),Qo(m,m.return);break;case 12:ya(d,m,s);break;case 31:ya(d,m,s),s&&E&4&&cg(d,m);break;case 13:ya(d,m,s),s&&E&4&&ug(d,m);break;case 22:m.memoizedState===null&&ya(d,m,s),Qo(m,m.return);break;case 30:break;default:ya(d,m,s)}i=i.sibling}}function oh(e,i){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&Bo(s))}function lh(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Bo(e))}function Ci(e,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)dg(e,i,s,l),i=i.sibling}function dg(e,i,s,l){var d=i.flags;switch(i.tag){case 0:case 11:case 15:Ci(e,i,s,l),d&2048&&Ko(9,i);break;case 1:Ci(e,i,s,l);break;case 3:Ci(e,i,s,l),d&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Bo(e)));break;case 12:if(d&2048){Ci(e,i,s,l),e=i.stateNode;try{var m=i.memoizedProps,E=m.id,N=m.onPostCommit;typeof N=="function"&&N(E,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(k){ke(i,i.return,k)}}else Ci(e,i,s,l);break;case 31:Ci(e,i,s,l);break;case 13:Ci(e,i,s,l);break;case 23:break;case 22:m=i.stateNode,E=i.alternate,i.memoizedState!==null?m._visibility&2?Ci(e,i,s,l):Jo(e,i):m._visibility&2?Ci(e,i,s,l):(m._visibility|=2,Nr(e,i,s,l,(i.subtreeFlags&10256)!==0||!1)),d&2048&&oh(E,i);break;case 24:Ci(e,i,s,l),d&2048&&lh(i.alternate,i);break;default:Ci(e,i,s,l)}}function Nr(e,i,s,l,d){for(d=d&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var m=e,E=i,N=s,k=l,ot=E.flags;switch(E.tag){case 0:case 11:case 15:Nr(m,E,N,k,d),Ko(8,E);break;case 23:break;case 22:var vt=E.stateNode;E.memoizedState!==null?vt._visibility&2?Nr(m,E,N,k,d):Jo(m,E):(vt._visibility|=2,Nr(m,E,N,k,d)),d&&ot&2048&&oh(E.alternate,E);break;case 24:Nr(m,E,N,k,d),d&&ot&2048&&lh(E.alternate,E);break;default:Nr(m,E,N,k,d)}i=i.sibling}}function Jo(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=e,l=i,d=l.flags;switch(l.tag){case 22:Jo(s,l),d&2048&&oh(l.alternate,l);break;case 24:Jo(s,l),d&2048&&lh(l.alternate,l);break;default:Jo(s,l)}i=i.sibling}}var $o=8192;function Ur(e,i,s){if(e.subtreeFlags&$o)for(e=e.child;e!==null;)pg(e,i,s),e=e.sibling}function pg(e,i,s){switch(e.tag){case 26:Ur(e,i,s),e.flags&$o&&e.memoizedState!==null&&ZS(s,Ri,e.memoizedState,e.memoizedProps);break;case 5:Ur(e,i,s);break;case 3:case 4:var l=Ri;Ri=Ic(e.stateNode.containerInfo),Ur(e,i,s),Ri=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=$o,$o=16777216,Ur(e,i,s),$o=l):Ur(e,i,s));break;default:Ur(e,i,s)}}function mg(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function tl(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Mn=l,vg(l,e)}mg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)gg(e),e=e.sibling}function gg(e){switch(e.tag){case 0:case 11:case 15:tl(e),e.flags&2048&&es(9,e,e.return);break;case 3:tl(e);break;case 12:tl(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,Ac(e)):tl(e);break;default:tl(e)}}function Ac(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Mn=l,vg(l,e)}mg(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:es(8,i,i.return),Ac(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,Ac(i));break;default:Ac(i)}e=e.sibling}}function vg(e,i){for(;Mn!==null;){var s=Mn;switch(s.tag){case 0:case 11:case 15:es(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Bo(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Mn=l;else t:for(s=e;Mn!==null;){l=Mn;var d=l.sibling,m=l.return;if(og(l),l===s){Mn=null;break t}if(d!==null){d.return=m,Mn=d;break t}Mn=m}}}var uS={getCacheForType:function(e){var i=Nn(hn),s=i.data.get(e);return s===void 0&&(s=e(),i.data.set(e,s)),s},cacheSignal:function(){return Nn(hn).controller.signal}},fS=typeof WeakMap=="function"?WeakMap:Map,Pe=0,Qe=null,xe=null,Se=0,Ve=0,si=null,ns=!1,Lr=!1,ch=!1,Sa=0,on=0,is=0,qs=0,uh=0,ri=0,Or=0,el=null,Zn=null,fh=!1,wc=0,_g=0,Rc=1/0,Cc=null,as=null,_n=0,ss=null,zr=null,Ma=0,hh=0,dh=null,xg=null,nl=0,ph=null;function oi(){return(Pe&2)!==0&&Se!==0?Se&-Se:D.T!==null?yh():Eo()}function yg(){if(ri===0)if((Se&536870912)===0||Ee){var e=Rt;Rt<<=1,(Rt&3932160)===0&&(Rt=262144),ri=e}else ri=536870912;return e=ii.current,e!==null&&(e.flags|=32),ri}function Kn(e,i,s){(e===Qe&&(Ve===2||Ve===9)||e.cancelPendingCommit!==null)&&(Pr(e,0),rs(e,Se,ri,!1)),Pn(e,s),((Pe&2)===0||e!==Qe)&&(e===Qe&&((Pe&2)===0&&(qs|=s),on===4&&rs(e,Se,ri,!1)),Xi(e))}function Sg(e,i,s){if((Pe&6)!==0)throw Error(a(327));var l=!s&&(i&127)===0&&(i&e.expiredLanes)===0||Dt(e,i),d=l?pS(e,i):gh(e,i,!0),m=l;do{if(d===0){Lr&&!l&&rs(e,i,0,!1);break}else{if(s=e.current.alternate,m&&!hS(s)){d=gh(e,i,!1),m=!1;continue}if(d===2){if(m=i,e.errorRecoveryDisabledLanes&m)var E=0;else E=e.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){i=E;t:{var N=e;d=el;var k=N.current.memoizedState.isDehydrated;if(k&&(Pr(N,E).flags|=256),E=gh(N,E,!1),E!==2){if(ch&&!k){N.errorRecoveryDisabledLanes|=m,qs|=m,d=4;break t}m=Zn,Zn=d,m!==null&&(Zn===null?Zn=m:Zn.push.apply(Zn,m))}d=E}if(m=!1,d!==2)continue}}if(d===1){Pr(e,0),rs(e,i,0,!0);break}t:{switch(l=e,m=d,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:rs(l,i,ri,!ns);break t;case 2:Zn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(d=wc+300-A(),10<d)){if(rs(l,i,ri,!ns),St(l,0,!0)!==0)break t;Ma=i,l.timeoutHandle=Jg(Mg.bind(null,l,s,Zn,Cc,fh,i,ri,qs,Or,ns,m,"Throttled",-0,0),d);break t}Mg(l,s,Zn,Cc,fh,i,ri,qs,Or,ns,m,null,-0,0)}}break}while(!0);Xi(e)}function Mg(e,i,s,l,d,m,E,N,k,ot,vt,yt,ct,dt){if(e.timeoutHandle=-1,yt=i.subtreeFlags,yt&8192||(yt&16785408)===16785408){yt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:oa},pg(i,m,yt);var Yt=(m&62914560)===m?wc-A():(m&4194048)===m?_g-A():0;if(Yt=KS(yt,Yt),Yt!==null){Ma=m,e.cancelPendingCommit=Yt(Dg.bind(null,e,i,m,s,l,d,E,N,k,vt,yt,null,ct,dt)),rs(e,m,E,!ot);return}}Dg(e,i,m,s,l,d,E,N,k)}function hS(e){for(var i=e;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var d=s[l],m=d.getSnapshot;d=d.value;try{if(!ei(m(),d))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function rs(e,i,s,l){i&=~uh,i&=~qs,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var d=i;0<d;){var m=31-Lt(d),E=1<<m;l[m]=-1,d&=~E}s!==0&&Gl(e,s,i)}function Dc(){return(Pe&6)===0?(il(0),!1):!0}function mh(){if(xe!==null){if(Ve===0)var e=xe.return;else e=xe,fa=zs=null,Nf(e),Ar=null,Io=0,e=xe;for(;e!==null;)$0(e.alternate,e),e=e.return;xe=null}}function Pr(e,i){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,US(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),Ma=0,mh(),Qe=e,xe=s=ca(e.current,null),Se=i,Ve=0,si=null,ns=!1,Lr=Dt(e,i),ch=!1,Or=ri=uh=qs=is=on=0,Zn=el=null,fh=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var d=31-Lt(l),m=1<<d;i|=e[d],l&=~m}return Sa=i,Ql(),s}function Eg(e,i){he=null,D.H=Yo,i===Tr||i===sc?(i=Im(),Ve=3):i===xf?(i=Im(),Ve=4):Ve=i===Yf?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,si=i,xe===null&&(on=1,xc(e,mi(i,e.current)))}function bg(){var e=ii.current;return e===null?!0:(Se&4194048)===Se?xi===null:(Se&62914560)===Se||(Se&536870912)!==0?e===xi:!1}function Tg(){var e=D.H;return D.H=Yo,e===null?Yo:e}function Ag(){var e=D.A;return D.A=uS,e}function Nc(){on=4,ns||(Se&4194048)!==Se&&ii.current!==null||(Lr=!0),(is&134217727)===0&&(qs&134217727)===0||Qe===null||rs(Qe,Se,ri,!1)}function gh(e,i,s){var l=Pe;Pe|=2;var d=Tg(),m=Ag();(Qe!==e||Se!==i)&&(Cc=null,Pr(e,i)),i=!1;var E=on;t:do try{if(Ve!==0&&xe!==null){var N=xe,k=si;switch(Ve){case 8:mh(),E=6;break t;case 3:case 2:case 9:case 6:ii.current===null&&(i=!0);var ot=Ve;if(Ve=0,si=null,Br(e,N,k,ot),s&&Lr){E=0;break t}break;default:ot=Ve,Ve=0,si=null,Br(e,N,k,ot)}}dS(),E=on;break}catch(vt){Eg(e,vt)}while(!0);return i&&e.shellSuspendCounter++,fa=zs=null,Pe=l,D.H=d,D.A=m,xe===null&&(Qe=null,Se=0,Ql()),E}function dS(){for(;xe!==null;)wg(xe)}function pS(e,i){var s=Pe;Pe|=2;var l=Tg(),d=Ag();Qe!==e||Se!==i?(Cc=null,Rc=A()+500,Pr(e,i)):Lr=Dt(e,i);t:do try{if(Ve!==0&&xe!==null){i=xe;var m=si;e:switch(Ve){case 1:Ve=0,si=null,Br(e,i,m,1);break;case 2:case 9:if(Bm(m)){Ve=0,si=null,Rg(i);break}i=function(){Ve!==2&&Ve!==9||Qe!==e||(Ve=7),Xi(e)},m.then(i,i);break t;case 3:Ve=7;break t;case 4:Ve=5;break t;case 7:Bm(m)?(Ve=0,si=null,Rg(i)):(Ve=0,si=null,Br(e,i,m,7));break;case 5:var E=null;switch(xe.tag){case 26:E=xe.memoizedState;case 5:case 27:var N=xe;if(E?dv(E):N.stateNode.complete){Ve=0,si=null;var k=N.sibling;if(k!==null)xe=k;else{var ot=N.return;ot!==null?(xe=ot,Uc(ot)):xe=null}break e}}Ve=0,si=null,Br(e,i,m,5);break;case 6:Ve=0,si=null,Br(e,i,m,6);break;case 8:mh(),on=6;break t;default:throw Error(a(462))}}mS();break}catch(vt){Eg(e,vt)}while(!0);return fa=zs=null,D.H=l,D.A=d,Pe=s,xe!==null?0:(Qe=null,Se=0,Ql(),on)}function mS(){for(;xe!==null&&!Zt();)wg(xe)}function wg(e){var i=Q0(e.alternate,e,Sa);e.memoizedProps=e.pendingProps,i===null?Uc(e):xe=i}function Rg(e){var i=e,s=i.alternate;switch(i.tag){case 15:case 0:i=X0(s,i,i.pendingProps,i.type,void 0,Se);break;case 11:i=X0(s,i,i.pendingProps,i.type.render,i.ref,Se);break;case 5:Nf(i);default:$0(s,i),i=xe=Am(i,Sa),i=Q0(s,i,Sa)}e.memoizedProps=e.pendingProps,i===null?Uc(e):xe=i}function Br(e,i,s,l){fa=zs=null,Nf(i),Ar=null,Io=0;var d=i.return;try{if(iS(e,d,i,s,Se)){on=1,xc(e,mi(s,e.current)),xe=null;return}}catch(m){if(d!==null)throw xe=d,m;on=1,xc(e,mi(s,e.current)),xe=null;return}i.flags&32768?(Ee||l===1?e=!0:Lr||(Se&536870912)!==0?e=!1:(ns=e=!0,(l===2||l===9||l===3||l===6)&&(l=ii.current,l!==null&&l.tag===13&&(l.flags|=16384))),Cg(i,e)):Uc(i)}function Uc(e){var i=e;do{if((i.flags&32768)!==0){Cg(i,ns);return}e=i.return;var s=rS(i.alternate,i,Sa);if(s!==null){xe=s;return}if(i=i.sibling,i!==null){xe=i;return}xe=i=e}while(i!==null);on===0&&(on=5)}function Cg(e,i){do{var s=oS(e.alternate,e);if(s!==null){s.flags&=32767,xe=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(e=e.sibling,e!==null)){xe=e;return}xe=e=s}while(e!==null);on=6,xe=null}function Dg(e,i,s,l,d,m,E,N,k){e.cancelPendingCommit=null;do Lc();while(_n!==0);if((Pe&6)!==0)throw Error(a(327));if(i!==null){if(i===e.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=af,bi(e,s,m,E,N,k),e===Qe&&(xe=Qe=null,Se=0),zr=i,ss=e,Ma=s,hh=m,dh=d,xg=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,xS(at,function(){return zg(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=D.T,D.T=null,d=H.p,H.p=2,E=Pe,Pe|=4;try{lS(e,i,s)}finally{Pe=E,H.p=d,D.T=l}}_n=1,Ng(),Ug(),Lg()}}function Ng(){if(_n===1){_n=0;var e=ss,i=zr,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=D.T,D.T=null;var l=H.p;H.p=2;var d=Pe;Pe|=4;try{fg(i,e);var m=Rh,E=vm(e.containerInfo),N=m.focusedElem,k=m.selectionRange;if(E!==N&&N&&N.ownerDocument&&gm(N.ownerDocument.documentElement,N)){if(k!==null&&Ju(N)){var ot=k.start,vt=k.end;if(vt===void 0&&(vt=ot),"selectionStart"in N)N.selectionStart=ot,N.selectionEnd=Math.min(vt,N.value.length);else{var yt=N.ownerDocument||document,ct=yt&&yt.defaultView||window;if(ct.getSelection){var dt=ct.getSelection(),Yt=N.textContent.length,ae=Math.min(k.start,Yt),je=k.end===void 0?ae:Math.min(k.end,Yt);!dt.extend&&ae>je&&(E=je,je=ae,ae=E);var et=mm(N,ae),K=mm(N,je);if(et&&K&&(dt.rangeCount!==1||dt.anchorNode!==et.node||dt.anchorOffset!==et.offset||dt.focusNode!==K.node||dt.focusOffset!==K.offset)){var rt=yt.createRange();rt.setStart(et.node,et.offset),dt.removeAllRanges(),ae>je?(dt.addRange(rt),dt.extend(K.node,K.offset)):(rt.setEnd(K.node,K.offset),dt.addRange(rt))}}}}for(yt=[],dt=N;dt=dt.parentNode;)dt.nodeType===1&&yt.push({element:dt,left:dt.scrollLeft,top:dt.scrollTop});for(typeof N.focus=="function"&&N.focus(),N=0;N<yt.length;N++){var xt=yt[N];xt.element.scrollLeft=xt.left,xt.element.scrollTop=xt.top}}Xc=!!wh,Rh=wh=null}finally{Pe=d,H.p=l,D.T=s}}e.current=i,_n=2}}function Ug(){if(_n===2){_n=0;var e=ss,i=zr,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=D.T,D.T=null;var l=H.p;H.p=2;var d=Pe;Pe|=4;try{rg(e,i.alternate,i)}finally{Pe=d,H.p=l,D.T=s}}_n=3}}function Lg(){if(_n===4||_n===3){_n=0,I();var e=ss,i=zr,s=Ma,l=xg;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?_n=5:(_n=0,zr=ss=null,Og(e,e.pendingLanes));var d=e.pendingLanes;if(d===0&&(as=null),lr(s),i=i.stateNode,At&&typeof At.onCommitFiberRoot=="function")try{At.onCommitFiberRoot(Mt,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=D.T,d=H.p,H.p=2,D.T=null;try{for(var m=e.onRecoverableError,E=0;E<l.length;E++){var N=l[E];m(N.value,{componentStack:N.stack})}}finally{D.T=i,H.p=d}}(Ma&3)!==0&&Lc(),Xi(e),d=e.pendingLanes,(s&261930)!==0&&(d&42)!==0?e===ph?nl++:(nl=0,ph=e):nl=0,il(0)}}function Og(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,Bo(i)))}function Lc(){return Ng(),Ug(),Lg(),zg()}function zg(){if(_n!==5)return!1;var e=ss,i=hh;hh=0;var s=lr(Ma),l=D.T,d=H.p;try{H.p=32>s?32:s,D.T=null,s=dh,dh=null;var m=ss,E=Ma;if(_n=0,zr=ss=null,Ma=0,(Pe&6)!==0)throw Error(a(331));var N=Pe;if(Pe|=4,gg(m.current),dg(m,m.current,E,s),Pe=N,il(0,!1),At&&typeof At.onPostCommitFiberRoot=="function")try{At.onPostCommitFiberRoot(Mt,m)}catch{}return!0}finally{H.p=d,D.T=l,Og(e,i)}}function Pg(e,i,s){i=mi(s,i),i=Wf(e.stateNode,i,2),e=Ja(e,i,2),e!==null&&(Pn(e,2),Xi(e))}function ke(e,i,s){if(e.tag===3)Pg(e,e,s);else for(;i!==null;){if(i.tag===3){Pg(i,e,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(as===null||!as.has(l))){e=mi(s,e),s=B0(2),l=Ja(i,s,2),l!==null&&(F0(s,l,i,e),Pn(l,2),Xi(l));break}}i=i.return}}function vh(e,i,s){var l=e.pingCache;if(l===null){l=e.pingCache=new fS;var d=new Set;l.set(i,d)}else d=l.get(i),d===void 0&&(d=new Set,l.set(i,d));d.has(s)||(ch=!0,d.add(s),e=gS.bind(null,e,i,s),i.then(e,e))}function gS(e,i,s){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,Qe===e&&(Se&s)===s&&(on===4||on===3&&(Se&62914560)===Se&&300>A()-wc?(Pe&2)===0&&Pr(e,0):uh|=s,Or===Se&&(Or=0)),Xi(e)}function Bg(e,i){i===0&&(i=He()),e=Us(e,i),e!==null&&(Pn(e,i),Xi(e))}function vS(e){var i=e.memoizedState,s=0;i!==null&&(s=i.retryLane),Bg(e,s)}function _S(e,i){var s=0;switch(e.tag){case 31:case 13:var l=e.stateNode,d=e.memoizedState;d!==null&&(s=d.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),Bg(e,s)}function xS(e,i){return _e(e,i)}var Oc=null,Fr=null,_h=!1,zc=!1,xh=!1,os=0;function Xi(e){e!==Fr&&e.next===null&&(Fr===null?Oc=Fr=e:Fr=Fr.next=e),zc=!0,_h||(_h=!0,SS())}function il(e,i){if(!xh&&zc){xh=!0;do for(var s=!1,l=Oc;l!==null;){if(e!==0){var d=l.pendingLanes;if(d===0)var m=0;else{var E=l.suspendedLanes,N=l.pingedLanes;m=(1<<31-Lt(42|e)+1)-1,m&=d&~(E&~N),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(s=!0,Gg(l,m))}else m=Se,m=St(l,l===Qe?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||Dt(l,m)||(s=!0,Gg(l,m));l=l.next}while(s);xh=!1}}function yS(){Fg()}function Fg(){zc=_h=!1;var e=0;os!==0&&NS()&&(e=os);for(var i=A(),s=null,l=Oc;l!==null;){var d=l.next,m=Ig(l,i);m===0?(l.next=null,s===null?Oc=d:s.next=d,d===null&&(Fr=s)):(s=l,(e!==0||(m&3)!==0)&&(zc=!0)),l=d}_n!==0&&_n!==5||il(e),os!==0&&(os=0)}function Ig(e,i){for(var s=e.suspendedLanes,l=e.pingedLanes,d=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var E=31-Lt(m),N=1<<E,k=d[E];k===-1?((N&s)===0||(N&l)!==0)&&(d[E]=oe(N,i)):k<=i&&(e.expiredLanes|=N),m&=~N}if(i=Qe,s=Se,s=St(e,e===i?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,s===0||e===i&&(Ve===2||Ve===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Ce(l),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||Dt(e,s)){if(i=s&-s,i===e.callbackPriority)return i;switch(l!==null&&Ce(l),lr(s)){case 2:case 8:s=gt;break;case 32:s=at;break;case 268435456:s=Et;break;default:s=at}return l=Hg.bind(null,e),s=_e(s,l),e.callbackPriority=i,e.callbackNode=s,i}return l!==null&&l!==null&&Ce(l),e.callbackPriority=2,e.callbackNode=null,2}function Hg(e,i){if(_n!==0&&_n!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(Lc()&&e.callbackNode!==s)return null;var l=Se;return l=St(e,e===Qe?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Sg(e,l,i),Ig(e,A()),e.callbackNode!=null&&e.callbackNode===s?Hg.bind(null,e):null)}function Gg(e,i){if(Lc())return null;Sg(e,i,!0)}function SS(){LS(function(){(Pe&6)!==0?_e(st,yS):Fg()})}function yh(){if(os===0){var e=Er;e===0&&(e=zt,zt<<=1,(zt&261888)===0&&(zt=256)),os=e}return os}function Vg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:kl(""+e)}function kg(e,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,e.id&&s.setAttribute("form",e.id),i.parentNode.insertBefore(s,i),e=new FormData(e),s.parentNode.removeChild(s),e}function MS(e,i,s,l,d){if(i==="submit"&&s&&s.stateNode===d){var m=Vg((d[bn]||null).action),E=l.submitter;E&&(i=(i=E[bn]||null)?Vg(i.formAction):E.getAttribute("formAction"),i!==null&&(m=i,E=null));var N=new Yl("action","action",null,l,d);e.push({event:N,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(os!==0){var k=E?kg(d,E):new FormData(d);Hf(s,{pending:!0,data:k,method:d.method,action:m},null,k)}}else typeof m=="function"&&(N.preventDefault(),k=E?kg(d,E):new FormData(d),Hf(s,{pending:!0,data:k,method:d.method,action:m},m,k))},currentTarget:d}]})}}for(var Sh=0;Sh<nf.length;Sh++){var Mh=nf[Sh],ES=Mh.toLowerCase(),bS=Mh[0].toUpperCase()+Mh.slice(1);wi(ES,"on"+bS)}wi(ym,"onAnimationEnd"),wi(Sm,"onAnimationIteration"),wi(Mm,"onAnimationStart"),wi("dblclick","onDoubleClick"),wi("focusin","onFocus"),wi("focusout","onBlur"),wi(Hy,"onTransitionRun"),wi(Gy,"onTransitionStart"),wi(Vy,"onTransitionCancel"),wi(Em,"onTransitionEnd"),it("onMouseEnter",["mouseout","mouseover"]),it("onMouseLeave",["mouseout","mouseover"]),it("onPointerEnter",["pointerout","pointerover"]),it("onPointerLeave",["pointerout","pointerover"]),lt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),lt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),lt("onBeforeInput",["compositionend","keypress","textInput","paste"]),lt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),lt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),lt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var al="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),TS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(al));function qg(e,i){i=(i&4)!==0;for(var s=0;s<e.length;s++){var l=e[s],d=l.event;l=l.listeners;t:{var m=void 0;if(i)for(var E=l.length-1;0<=E;E--){var N=l[E],k=N.instance,ot=N.currentTarget;if(N=N.listener,k!==m&&d.isPropagationStopped())break t;m=N,d.currentTarget=ot;try{m(d)}catch(vt){Kl(vt)}d.currentTarget=null,m=k}else for(E=0;E<l.length;E++){if(N=l[E],k=N.instance,ot=N.currentTarget,N=N.listener,k!==m&&d.isPropagationStopped())break t;m=N,d.currentTarget=ot;try{m(d)}catch(vt){Kl(vt)}d.currentTarget=null,m=k}}}}function ye(e,i){var s=i[cr];s===void 0&&(s=i[cr]=new Set);var l=e+"__bubble";s.has(l)||(Xg(i,e,2,!1),s.add(l))}function Eh(e,i,s){var l=0;i&&(l|=4),Xg(s,e,l,i)}var Pc="_reactListening"+Math.random().toString(36).slice(2);function bh(e){if(!e[Pc]){e[Pc]=!0,tt.forEach(function(s){s!=="selectionchange"&&(TS.has(s)||Eh(s,!1,e),Eh(s,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[Pc]||(i[Pc]=!0,Eh("selectionchange",!1,i))}}function Xg(e,i,s,l){switch(yv(i)){case 2:var d=$S;break;case 8:d=tM;break;default:d=Ih}s=d.bind(null,i,s,e),d=void 0,!ku||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),l?d!==void 0?e.addEventListener(i,s,{capture:!0,passive:d}):e.addEventListener(i,s,!0):d!==void 0?e.addEventListener(i,s,{passive:d}):e.addEventListener(i,s,!1)}function Th(e,i,s,l,d){var m=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var N=l.stateNode.containerInfo;if(N===d)break;if(E===4)for(E=l.return;E!==null;){var k=E.tag;if((k===3||k===4)&&E.stateNode.containerInfo===d)return;E=E.return}for(;N!==null;){if(E=Va(N),E===null)return;if(k=E.tag,k===5||k===6||k===26||k===27){l=m=E;continue t}N=N.parentNode}}l=l.return}Kp(function(){var ot=m,vt=Gu(s),yt=[];t:{var ct=bm.get(e);if(ct!==void 0){var dt=Yl,Yt=e;switch(e){case"keypress":if(Xl(s)===0)break t;case"keydown":case"keyup":dt=_y;break;case"focusin":Yt="focus",dt=Yu;break;case"focusout":Yt="blur",dt=Yu;break;case"beforeblur":case"afterblur":dt=Yu;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":dt=$p;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":dt=ry;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":dt=Sy;break;case ym:case Sm:case Mm:dt=cy;break;case Em:dt=Ey;break;case"scroll":case"scrollend":dt=ay;break;case"wheel":dt=Ty;break;case"copy":case"cut":case"paste":dt=fy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":dt=em;break;case"toggle":case"beforetoggle":dt=wy}var ae=(i&4)!==0,je=!ae&&(e==="scroll"||e==="scrollend"),et=ae?ct!==null?ct+"Capture":null:ct;ae=[];for(var K=ot,rt;K!==null;){var xt=K;if(rt=xt.stateNode,xt=xt.tag,xt!==5&&xt!==26&&xt!==27||rt===null||et===null||(xt=Ao(K,et),xt!=null&&ae.push(sl(K,xt,rt))),je)break;K=K.return}0<ae.length&&(ct=new dt(ct,Yt,null,s,vt),yt.push({event:ct,listeners:ae}))}}if((i&7)===0){t:{if(ct=e==="mouseover"||e==="pointerover",dt=e==="mouseout"||e==="pointerout",ct&&s!==Hu&&(Yt=s.relatedTarget||s.fromElement)&&(Va(Yt)||Yt[Ti]))break t;if((dt||ct)&&(ct=vt.window===vt?vt:(ct=vt.ownerDocument)?ct.defaultView||ct.parentWindow:window,dt?(Yt=s.relatedTarget||s.toElement,dt=ot,Yt=Yt?Va(Yt):null,Yt!==null&&(je=o(Yt),ae=Yt.tag,Yt!==je||ae!==5&&ae!==27&&ae!==6)&&(Yt=null)):(dt=null,Yt=ot),dt!==Yt)){if(ae=$p,xt="onMouseLeave",et="onMouseEnter",K="mouse",(e==="pointerout"||e==="pointerover")&&(ae=em,xt="onPointerLeave",et="onPointerEnter",K="pointer"),je=dt==null?ct:Rs(dt),rt=Yt==null?ct:Rs(Yt),ct=new ae(xt,K+"leave",dt,s,vt),ct.target=je,ct.relatedTarget=rt,xt=null,Va(vt)===ot&&(ae=new ae(et,K+"enter",Yt,s,vt),ae.target=rt,ae.relatedTarget=je,xt=ae),je=xt,dt&&Yt)e:{for(ae=AS,et=dt,K=Yt,rt=0,xt=et;xt;xt=ae(xt))rt++;xt=0;for(var ee=K;ee;ee=ae(ee))xt++;for(;0<rt-xt;)et=ae(et),rt--;for(;0<xt-rt;)K=ae(K),xt--;for(;rt--;){if(et===K||K!==null&&et===K.alternate){ae=et;break e}et=ae(et),K=ae(K)}ae=null}else ae=null;dt!==null&&Wg(yt,ct,dt,ae,!1),Yt!==null&&je!==null&&Wg(yt,je,Yt,ae,!0)}}t:{if(ct=ot?Rs(ot):window,dt=ct.nodeName&&ct.nodeName.toLowerCase(),dt==="select"||dt==="input"&&ct.type==="file")var De=cm;else if(om(ct))if(um)De=By;else{De=zy;var Jt=Oy}else dt=ct.nodeName,!dt||dt.toLowerCase()!=="input"||ct.type!=="checkbox"&&ct.type!=="radio"?ot&&Ai(ot.elementType)&&(De=cm):De=Py;if(De&&(De=De(e,ot))){lm(yt,De,s,vt);break t}Jt&&Jt(e,ct,ot),e==="focusout"&&ot&&ct.type==="number"&&ot.memoizedProps.value!=null&&An(ct,"number",ct.value)}switch(Jt=ot?Rs(ot):window,e){case"focusin":(om(Jt)||Jt.contentEditable==="true")&&(mr=Jt,$u=ot,Oo=null);break;case"focusout":Oo=$u=mr=null;break;case"mousedown":tf=!0;break;case"contextmenu":case"mouseup":case"dragend":tf=!1,_m(yt,s,vt);break;case"selectionchange":if(Iy)break;case"keydown":case"keyup":_m(yt,s,vt)}var de;if(Zu)t:{switch(e){case"compositionstart":var Me="onCompositionStart";break t;case"compositionend":Me="onCompositionEnd";break t;case"compositionupdate":Me="onCompositionUpdate";break t}Me=void 0}else pr?sm(e,s)&&(Me="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(Me="onCompositionStart");Me&&(nm&&s.locale!=="ko"&&(pr||Me!=="onCompositionStart"?Me==="onCompositionEnd"&&pr&&(de=Qp()):(Xa=vt,qu="value"in Xa?Xa.value:Xa.textContent,pr=!0)),Jt=Bc(ot,Me),0<Jt.length&&(Me=new tm(Me,e,null,s,vt),yt.push({event:Me,listeners:Jt}),de?Me.data=de:(de=rm(s),de!==null&&(Me.data=de)))),(de=Cy?Dy(e,s):Ny(e,s))&&(Me=Bc(ot,"onBeforeInput"),0<Me.length&&(Jt=new tm("onBeforeInput","beforeinput",null,s,vt),yt.push({event:Jt,listeners:Me}),Jt.data=de)),MS(yt,e,ot,s,vt)}qg(yt,i)})}function sl(e,i,s){return{instance:e,listener:i,currentTarget:s}}function Bc(e,i){for(var s=i+"Capture",l=[];e!==null;){var d=e,m=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||m===null||(d=Ao(e,s),d!=null&&l.unshift(sl(e,d,m)),d=Ao(e,i),d!=null&&l.push(sl(e,d,m))),e.tag===3)return l;e=e.return}return[]}function AS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Wg(e,i,s,l,d){for(var m=i._reactName,E=[];s!==null&&s!==l;){var N=s,k=N.alternate,ot=N.stateNode;if(N=N.tag,k!==null&&k===l)break;N!==5&&N!==26&&N!==27||ot===null||(k=ot,d?(ot=Ao(s,m),ot!=null&&E.unshift(sl(s,ot,k))):d||(ot=Ao(s,m),ot!=null&&E.push(sl(s,ot,k)))),s=s.return}E.length!==0&&e.push({event:i,listeners:E})}var wS=/\r\n?/g,RS=/\u0000|\uFFFD/g;function Yg(e){return(typeof e=="string"?e:""+e).replace(wS,`
`).replace(RS,"")}function jg(e,i){return i=Yg(i),Yg(e)===i}function Ye(e,i,s,l,d,m){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||vn(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&vn(e,""+l);break;case"className":ne(e,"class",l);break;case"tabIndex":ne(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ne(e,s,l);break;case"style":fr(e,l,m);break;case"data":if(i!=="object"){ne(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){e.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=kl(""+l),e.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(s==="formAction"?(i!=="input"&&Ye(e,i,"name",d.name,d,null),Ye(e,i,"formEncType",d.formEncType,d,null),Ye(e,i,"formMethod",d.formMethod,d,null),Ye(e,i,"formTarget",d.formTarget,d,null)):(Ye(e,i,"encType",d.encType,d,null),Ye(e,i,"method",d.method,d,null),Ye(e,i,"target",d.target,d,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=kl(""+l),e.setAttribute(s,l);break;case"onClick":l!=null&&(e.onclick=oa);break;case"onScroll":l!=null&&ye("scroll",e);break;case"onScrollEnd":l!=null&&ye("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(d.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}s=kl(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""+l):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":l===!0?e.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,l):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(s,l):e.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(s):e.setAttribute(s,l);break;case"popover":ye("beforetoggle",e),ye("toggle",e),Kt(e,"popover",l);break;case"xlinkActuate":Qt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Qt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Qt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Qt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Qt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Qt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Qt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Qt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Qt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Kt(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=ny.get(s)||s,Kt(e,s,l))}}function Ah(e,i,s,l,d,m){switch(s){case"style":fr(e,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(d.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"children":typeof l=="string"?vn(e,l):(typeof l=="number"||typeof l=="bigint")&&vn(e,""+l);break;case"onScroll":l!=null&&ye("scroll",e);break;case"onScrollEnd":l!=null&&ye("scrollend",e);break;case"onClick":l!=null&&(e.onclick=oa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ht.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(d=s.endsWith("Capture"),i=s.slice(2,d?s.length-7:void 0),m=e[bn]||null,m=m!=null?m[s]:null,typeof m=="function"&&e.removeEventListener(i,m,d),typeof l=="function")){typeof m!="function"&&m!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(i,l,d);break t}s in e?e[s]=l:l===!0?e.setAttribute(s,""):Kt(e,s,l)}}}function Ln(e,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ye("error",e),ye("load",e);var l=!1,d=!1,m;for(m in s)if(s.hasOwnProperty(m)){var E=s[m];if(E!=null)switch(m){case"src":l=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Ye(e,i,m,E,s,null)}}d&&Ye(e,i,"srcSet",s.srcSet,s,null),l&&Ye(e,i,"src",s.src,s,null);return;case"input":ye("invalid",e);var N=m=E=d=null,k=null,ot=null;for(l in s)if(s.hasOwnProperty(l)){var vt=s[l];if(vt!=null)switch(l){case"name":d=vt;break;case"type":E=vt;break;case"checked":k=vt;break;case"defaultChecked":ot=vt;break;case"value":m=vt;break;case"defaultValue":N=vt;break;case"children":case"dangerouslySetInnerHTML":if(vt!=null)throw Error(a(137,i));break;default:Ye(e,i,l,vt,s,null)}}ra(e,m,N,k,ot,E,d,!1);return;case"select":ye("invalid",e),l=E=m=null;for(d in s)if(s.hasOwnProperty(d)&&(N=s[d],N!=null))switch(d){case"value":m=N;break;case"defaultValue":E=N;break;case"multiple":l=N;default:Ye(e,i,d,N,s,null)}i=m,s=E,e.multiple=!!l,i!=null?di(e,!!l,i,!1):s!=null&&di(e,!!l,s,!0);return;case"textarea":ye("invalid",e),m=d=l=null;for(E in s)if(s.hasOwnProperty(E)&&(N=s[E],N!=null))switch(E){case"value":l=N;break;case"defaultValue":d=N;break;case"children":m=N;break;case"dangerouslySetInnerHTML":if(N!=null)throw Error(a(91));break;default:Ye(e,i,E,N,s,null)}wn(e,l,d,m);return;case"option":for(k in s)s.hasOwnProperty(k)&&(l=s[k],l!=null)&&(k==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":Ye(e,i,k,l,s,null));return;case"dialog":ye("beforetoggle",e),ye("toggle",e),ye("cancel",e),ye("close",e);break;case"iframe":case"object":ye("load",e);break;case"video":case"audio":for(l=0;l<al.length;l++)ye(al[l],e);break;case"image":ye("error",e),ye("load",e);break;case"details":ye("toggle",e);break;case"embed":case"source":case"link":ye("error",e),ye("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ot in s)if(s.hasOwnProperty(ot)&&(l=s[ot],l!=null))switch(ot){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Ye(e,i,ot,l,s,null)}return;default:if(Ai(i)){for(vt in s)s.hasOwnProperty(vt)&&(l=s[vt],l!==void 0&&Ah(e,i,vt,l,s,void 0));return}}for(N in s)s.hasOwnProperty(N)&&(l=s[N],l!=null&&Ye(e,i,N,l,s,null))}function CS(e,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,m=null,E=null,N=null,k=null,ot=null,vt=null;for(dt in s){var yt=s[dt];if(s.hasOwnProperty(dt)&&yt!=null)switch(dt){case"checked":break;case"value":break;case"defaultValue":k=yt;default:l.hasOwnProperty(dt)||Ye(e,i,dt,null,l,yt)}}for(var ct in l){var dt=l[ct];if(yt=s[ct],l.hasOwnProperty(ct)&&(dt!=null||yt!=null))switch(ct){case"type":m=dt;break;case"name":d=dt;break;case"checked":ot=dt;break;case"defaultChecked":vt=dt;break;case"value":E=dt;break;case"defaultValue":N=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(a(137,i));break;default:dt!==yt&&Ye(e,i,ct,dt,l,yt)}}Tn(e,E,N,k,ot,vt,m,d);return;case"select":dt=E=N=ct=null;for(m in s)if(k=s[m],s.hasOwnProperty(m)&&k!=null)switch(m){case"value":break;case"multiple":dt=k;default:l.hasOwnProperty(m)||Ye(e,i,m,null,l,k)}for(d in l)if(m=l[d],k=s[d],l.hasOwnProperty(d)&&(m!=null||k!=null))switch(d){case"value":ct=m;break;case"defaultValue":N=m;break;case"multiple":E=m;default:m!==k&&Ye(e,i,d,m,l,k)}i=N,s=E,l=dt,ct!=null?di(e,!!s,ct,!1):!!l!=!!s&&(i!=null?di(e,!!s,i,!0):di(e,!!s,s?[]:"",!1));return;case"textarea":dt=ct=null;for(N in s)if(d=s[N],s.hasOwnProperty(N)&&d!=null&&!l.hasOwnProperty(N))switch(N){case"value":break;case"children":break;default:Ye(e,i,N,null,l,d)}for(E in l)if(d=l[E],m=s[E],l.hasOwnProperty(E)&&(d!=null||m!=null))switch(E){case"value":ct=d;break;case"defaultValue":dt=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(a(91));break;default:d!==m&&Ye(e,i,E,d,l,m)}Ge(e,ct,dt);return;case"option":for(var Yt in s)ct=s[Yt],s.hasOwnProperty(Yt)&&ct!=null&&!l.hasOwnProperty(Yt)&&(Yt==="selected"?e.selected=!1:Ye(e,i,Yt,null,l,ct));for(k in l)ct=l[k],dt=s[k],l.hasOwnProperty(k)&&ct!==dt&&(ct!=null||dt!=null)&&(k==="selected"?e.selected=ct&&typeof ct!="function"&&typeof ct!="symbol":Ye(e,i,k,ct,l,dt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ae in s)ct=s[ae],s.hasOwnProperty(ae)&&ct!=null&&!l.hasOwnProperty(ae)&&Ye(e,i,ae,null,l,ct);for(ot in l)if(ct=l[ot],dt=s[ot],l.hasOwnProperty(ot)&&ct!==dt&&(ct!=null||dt!=null))switch(ot){case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(a(137,i));break;default:Ye(e,i,ot,ct,l,dt)}return;default:if(Ai(i)){for(var je in s)ct=s[je],s.hasOwnProperty(je)&&ct!==void 0&&!l.hasOwnProperty(je)&&Ah(e,i,je,void 0,l,ct);for(vt in l)ct=l[vt],dt=s[vt],!l.hasOwnProperty(vt)||ct===dt||ct===void 0&&dt===void 0||Ah(e,i,vt,ct,l,dt);return}}for(var et in s)ct=s[et],s.hasOwnProperty(et)&&ct!=null&&!l.hasOwnProperty(et)&&Ye(e,i,et,null,l,ct);for(yt in l)ct=l[yt],dt=s[yt],!l.hasOwnProperty(yt)||ct===dt||ct==null&&dt==null||Ye(e,i,yt,ct,l,dt)}function Zg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function DS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,i=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var d=s[l],m=d.transferSize,E=d.initiatorType,N=d.duration;if(m&&N&&Zg(E)){for(E=0,N=d.responseEnd,l+=1;l<s.length;l++){var k=s[l],ot=k.startTime;if(ot>N)break;var vt=k.transferSize,yt=k.initiatorType;vt&&Zg(yt)&&(k=k.responseEnd,E+=vt*(k<N?1:(N-ot)/(k-ot)))}if(--l,i+=8*(m+E)/(d.duration/1e3),e++,10<e)break}}if(0<e)return i/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var wh=null,Rh=null;function Fc(e){return e.nodeType===9?e:e.ownerDocument}function Kg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Qg(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function Ch(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Dh=null;function NS(){var e=window.event;return e&&e.type==="popstate"?e===Dh?!1:(Dh=e,!0):(Dh=null,!1)}var Jg=typeof setTimeout=="function"?setTimeout:void 0,US=typeof clearTimeout=="function"?clearTimeout:void 0,$g=typeof Promise=="function"?Promise:void 0,LS=typeof queueMicrotask=="function"?queueMicrotask:typeof $g<"u"?function(e){return $g.resolve(null).then(e).catch(OS)}:Jg;function OS(e){setTimeout(function(){throw e})}function ls(e){return e==="head"}function tv(e,i){var s=i,l=0;do{var d=s.nextSibling;if(e.removeChild(s),d&&d.nodeType===8)if(s=d.data,s==="/$"||s==="/&"){if(l===0){e.removeChild(d),Vr(i);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")rl(e.ownerDocument.documentElement);else if(s==="head"){s=e.ownerDocument.head,rl(s);for(var m=s.firstChild;m;){var E=m.nextSibling,N=m.nodeName;m[ws]||N==="SCRIPT"||N==="STYLE"||N==="LINK"&&m.rel.toLowerCase()==="stylesheet"||s.removeChild(m),m=E}}else s==="body"&&rl(e.ownerDocument.body);s=d}while(s);Vr(i)}function ev(e,i){var s=e;e=0;do{var l=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(e===0)break;e--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||e++;s=l}while(s)}function Nh(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Nh(s),To(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function zS(e,i,s,l){for(;e.nodeType===1;){var d=s;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[ws])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==d.rel||e.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||e.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||e.getAttribute("title")!==(d.title==null?null:d.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(d.src==null?null:d.src)||e.getAttribute("type")!==(d.type==null?null:d.type)||e.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var m=d.name==null?null:""+d.name;if(d.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=yi(e.nextSibling),e===null)break}return null}function PS(e,i,s){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=yi(e.nextSibling),e===null))return null;return e}function nv(e,i){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=yi(e.nextSibling),e===null))return null;return e}function Uh(e){return e.data==="$?"||e.data==="$~"}function Lh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function BS(e,i){var s=e.ownerDocument;if(e.data==="$~")e._reactRetry=i;else if(e.data!=="$?"||s.readyState!=="loading")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function yi(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return e}var Oh=null;function iv(e){e=e.nextSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="/$"||s==="/&"){if(i===0)return yi(e.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}e=e.nextSibling}return null}function av(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return e;i--}else s!=="/$"&&s!=="/&"||i++}e=e.previousSibling}return null}function sv(e,i,s){switch(i=Fc(s),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function rl(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);To(e)}var Si=new Map,rv=new Set;function Ic(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ea=H.d;H.d={f:FS,r:IS,D:HS,C:GS,L:VS,m:kS,X:XS,S:qS,M:WS};function FS(){var e=Ea.f(),i=Dc();return e||i}function IS(e){var i=ka(e);i!==null&&i.tag===5&&i.type==="form"?E0(i):Ea.r(e)}var Ir=typeof document>"u"?null:document;function ov(e,i,s){var l=Ir;if(l&&typeof i=="string"&&i){var d=le(i);d='link[rel="'+e+'"][href="'+d+'"]',typeof s=="string"&&(d+='[crossorigin="'+s+'"]'),rv.has(d)||(rv.add(d),e={rel:e,crossOrigin:s,href:i},l.querySelector(d)===null&&(i=l.createElement("link"),Ln(i,"link",e),U(i),l.head.appendChild(i)))}}function HS(e){Ea.D(e),ov("dns-prefetch",e,null)}function GS(e,i){Ea.C(e,i),ov("preconnect",e,i)}function VS(e,i,s){Ea.L(e,i,s);var l=Ir;if(l&&e&&i){var d='link[rel="preload"][as="'+le(i)+'"]';i==="image"&&s&&s.imageSrcSet?(d+='[imagesrcset="'+le(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(d+='[imagesizes="'+le(s.imageSizes)+'"]')):d+='[href="'+le(e)+'"]';var m=d;switch(i){case"style":m=Hr(e);break;case"script":m=Gr(e)}Si.has(m)||(e=_({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:e,as:i},s),Si.set(m,e),l.querySelector(d)!==null||i==="style"&&l.querySelector(ol(m))||i==="script"&&l.querySelector(ll(m))||(i=l.createElement("link"),Ln(i,"link",e),U(i),l.head.appendChild(i)))}}function kS(e,i){Ea.m(e,i);var s=Ir;if(s&&e){var l=i&&typeof i.as=="string"?i.as:"script",d='link[rel="modulepreload"][as="'+le(l)+'"][href="'+le(e)+'"]',m=d;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Gr(e)}if(!Si.has(m)&&(e=_({rel:"modulepreload",href:e},i),Si.set(m,e),s.querySelector(d)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(ll(m)))return}l=s.createElement("link"),Ln(l,"link",e),U(l),s.head.appendChild(l)}}}function qS(e,i,s){Ea.S(e,i,s);var l=Ir;if(l&&e){var d=qa(l).hoistableStyles,m=Hr(e);i=i||"default";var E=d.get(m);if(!E){var N={loading:0,preload:null};if(E=l.querySelector(ol(m)))N.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":i},s),(s=Si.get(m))&&zh(e,s);var k=E=l.createElement("link");U(k),Ln(k,"link",e),k._p=new Promise(function(ot,vt){k.onload=ot,k.onerror=vt}),k.addEventListener("load",function(){N.loading|=1}),k.addEventListener("error",function(){N.loading|=2}),N.loading|=4,Hc(E,i,l)}E={type:"stylesheet",instance:E,count:1,state:N},d.set(m,E)}}}function XS(e,i){Ea.X(e,i);var s=Ir;if(s&&e){var l=qa(s).hoistableScripts,d=Gr(e),m=l.get(d);m||(m=s.querySelector(ll(d)),m||(e=_({src:e,async:!0},i),(i=Si.get(d))&&Ph(e,i),m=s.createElement("script"),U(m),Ln(m,"link",e),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(d,m))}}function WS(e,i){Ea.M(e,i);var s=Ir;if(s&&e){var l=qa(s).hoistableScripts,d=Gr(e),m=l.get(d);m||(m=s.querySelector(ll(d)),m||(e=_({src:e,async:!0,type:"module"},i),(i=Si.get(d))&&Ph(e,i),m=s.createElement("script"),U(m),Ln(m,"link",e),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(d,m))}}function lv(e,i,s,l){var d=(d=nt.current)?Ic(d):null;if(!d)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=Hr(s.href),s=qa(d).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=Hr(s.href);var m=qa(d).hoistableStyles,E=m.get(e);if(E||(d=d.ownerDocument||d,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,E),(m=d.querySelector(ol(e)))&&!m._p&&(E.instance=m,E.state.loading=5),Si.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Si.set(e,s),m||YS(d,e,s,E.state))),i&&l===null)throw Error(a(528,""));return E}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Gr(s),s=qa(d).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Hr(e){return'href="'+le(e)+'"'}function ol(e){return'link[rel="stylesheet"]['+e+"]"}function cv(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function YS(e,i,s,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Ln(i,"link",s),U(i),e.head.appendChild(i))}function Gr(e){return'[src="'+le(e)+'"]'}function ll(e){return"script[async]"+e}function uv(e,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+le(s.href)+'"]');if(l)return i.instance=l,U(l),l;var d=_({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),U(l),Ln(l,"style",d),Hc(l,s.precedence,e),i.instance=l;case"stylesheet":d=Hr(s.href);var m=e.querySelector(ol(d));if(m)return i.state.loading|=4,i.instance=m,U(m),m;l=cv(s),(d=Si.get(d))&&zh(l,d),m=(e.ownerDocument||e).createElement("link"),U(m);var E=m;return E._p=new Promise(function(N,k){E.onload=N,E.onerror=k}),Ln(m,"link",l),i.state.loading|=4,Hc(m,s.precedence,e),i.instance=m;case"script":return m=Gr(s.src),(d=e.querySelector(ll(m)))?(i.instance=d,U(d),d):(l=s,(d=Si.get(m))&&(l=_({},s),Ph(l,d)),e=e.ownerDocument||e,d=e.createElement("script"),U(d),Ln(d,"link",l),e.head.appendChild(d),i.instance=d);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Hc(l,s.precedence,e));return i.instance}function Hc(e,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=l.length?l[l.length-1]:null,m=d,E=0;E<l.length;E++){var N=l[E];if(N.dataset.precedence===i)m=N;else if(m!==d)break}m?m.parentNode.insertBefore(e,m.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(e,i.firstChild))}function zh(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function Ph(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var Gc=null;function fv(e,i,s){if(Gc===null){var l=new Map,d=Gc=new Map;d.set(s,l)}else d=Gc,l=d.get(s),l||(l=new Map,d.set(s,l));if(l.has(e))return l;for(l.set(e,null),s=s.getElementsByTagName(e),d=0;d<s.length;d++){var m=s[d];if(!(m[ws]||m[fn]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var E=m.getAttribute(i)||"";E=e+E;var N=l.get(E);N?N.push(m):l.set(E,[m])}}return l}function hv(e,i,s){e=e.ownerDocument||e,e.head.insertBefore(s,i==="title"?e.querySelector("head > title"):null)}function jS(e,i,s){if(s===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;return i.rel==="stylesheet"?(e=i.disabled,typeof i.precedence=="string"&&e==null):!0;case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function dv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function ZS(e,i,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var d=Hr(l.href),m=i.querySelector(ol(d));if(m){i=m._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(e.count++,e=Vc.bind(e),i.then(e,e)),s.state.loading|=4,s.instance=m,U(m);return}m=i.ownerDocument||i,l=cv(l),(d=Si.get(d))&&zh(l,d),m=m.createElement("link"),U(m);var E=m;E._p=new Promise(function(N,k){E.onload=N,E.onerror=k}),Ln(m,"link",l),s.instance=m}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(e.count++,s=Vc.bind(e),i.addEventListener("load",s),i.addEventListener("error",s))}}var Bh=0;function KS(e,i){return e.stylesheets&&e.count===0&&qc(e,e.stylesheets),0<e.count||0<e.imgCount?function(s){var l=setTimeout(function(){if(e.stylesheets&&qc(e,e.stylesheets),e.unsuspend){var m=e.unsuspend;e.unsuspend=null,m()}},6e4+i);0<e.imgBytes&&Bh===0&&(Bh=62500*DS());var d=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&qc(e,e.stylesheets),e.unsuspend)){var m=e.unsuspend;e.unsuspend=null,m()}},(e.imgBytes>Bh?50:800)+i);return e.unsuspend=s,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(d)}}:null}function Vc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)qc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var kc=null;function qc(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,kc=new Map,i.forEach(QS,e),kc=null,Vc.call(e))}function QS(e,i){if(!(i.state.loading&4)){var s=kc.get(e);if(s)var l=s.get(null);else{s=new Map,kc.set(e,s);for(var d=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<d.length;m++){var E=d[m];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(s.set(E.dataset.precedence,E),l=E)}l&&s.set(null,l)}d=i.instance,E=d.getAttribute("data-precedence"),m=s.get(E)||l,m===l&&s.set(null,d),s.set(E,d),this.count++,l=Vc.bind(this),d.addEventListener("load",l),d.addEventListener("error",l),m?m.parentNode.insertBefore(d,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(d,e.firstChild)),i.state.loading|=4}}var cl={$$typeof:C,Provider:null,Consumer:null,_currentValue:Q,_currentValue2:Q,_threadCount:0};function JS(e,i,s,l,d,m,E,N,k){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ae(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ae(0),this.hiddenUpdates=Ae(null),this.identifierPrefix=l,this.onUncaughtError=d,this.onCaughtError=m,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=k,this.incompleteTransitions=new Map}function pv(e,i,s,l,d,m,E,N,k,ot,vt,yt){return e=new JS(e,i,s,E,k,ot,vt,yt,N),i=1,m===!0&&(i|=24),m=ni(3,null,null,i),e.current=m,m.stateNode=e,i=gf(),i.refCount++,e.pooledCache=i,i.refCount++,m.memoizedState={element:l,isDehydrated:s,cache:i},yf(m),e}function mv(e){return e?(e=_r,e):_r}function gv(e,i,s,l,d,m){d=mv(d),l.context===null?l.context=d:l.pendingContext=d,l=Qa(i),l.payload={element:s},m=m===void 0?null:m,m!==null&&(l.callback=m),s=Ja(e,l,i),s!==null&&(Kn(s,e,i),Go(s,e,i))}function vv(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<i?s:i}}function Fh(e,i){vv(e,i),(e=e.alternate)&&vv(e,i)}function _v(e){if(e.tag===13||e.tag===31){var i=Us(e,67108864);i!==null&&Kn(i,e,67108864),Fh(e,67108864)}}function xv(e){if(e.tag===13||e.tag===31){var i=oi();i=Mo(i);var s=Us(e,i);s!==null&&Kn(s,e,i),Fh(e,i)}}var Xc=!0;function $S(e,i,s,l){var d=D.T;D.T=null;var m=H.p;try{H.p=2,Ih(e,i,s,l)}finally{H.p=m,D.T=d}}function tM(e,i,s,l){var d=D.T;D.T=null;var m=H.p;try{H.p=8,Ih(e,i,s,l)}finally{H.p=m,D.T=d}}function Ih(e,i,s,l){if(Xc){var d=Hh(l);if(d===null)Th(e,i,l,Wc,s),Sv(e,l);else if(nM(d,e,i,s,l))l.stopPropagation();else if(Sv(e,l),i&4&&-1<eM.indexOf(e)){for(;d!==null;){var m=ka(d);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var E=bt(m.pendingLanes);if(E!==0){var N=m;for(N.pendingLanes|=2,N.entangledLanes|=2;E;){var k=1<<31-Lt(E);N.entanglements[1]|=k,E&=~k}Xi(m),(Pe&6)===0&&(Rc=A()+500,il(0))}}break;case 31:case 13:N=Us(m,2),N!==null&&Kn(N,m,2),Dc(),Fh(m,2)}if(m=Hh(l),m===null&&Th(e,i,l,Wc,s),m===d)break;d=m}d!==null&&l.stopPropagation()}else Th(e,i,l,null,s)}}function Hh(e){return e=Gu(e),Gh(e)}var Wc=null;function Gh(e){if(Wc=null,e=Va(e),e!==null){var i=o(e);if(i===null)e=null;else{var s=i.tag;if(s===13){if(e=u(i),e!==null)return e;e=null}else if(s===31){if(e=f(i),e!==null)return e;e=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return Wc=e,null}function yv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(q()){case st:return 2;case gt:return 8;case at:case wt:return 32;case Et:return 268435456;default:return 32}default:return 32}}var Vh=!1,cs=null,us=null,fs=null,ul=new Map,fl=new Map,hs=[],eM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Sv(e,i){switch(e){case"focusin":case"focusout":cs=null;break;case"dragenter":case"dragleave":us=null;break;case"mouseover":case"mouseout":fs=null;break;case"pointerover":case"pointerout":ul.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":fl.delete(i.pointerId)}}function hl(e,i,s,l,d,m){return e===null||e.nativeEvent!==m?(e={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:m,targetContainers:[d]},i!==null&&(i=ka(i),i!==null&&_v(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),e)}function nM(e,i,s,l,d){switch(i){case"focusin":return cs=hl(cs,e,i,s,l,d),!0;case"dragenter":return us=hl(us,e,i,s,l,d),!0;case"mouseover":return fs=hl(fs,e,i,s,l,d),!0;case"pointerover":var m=d.pointerId;return ul.set(m,hl(ul.get(m)||null,e,i,s,l,d)),!0;case"gotpointercapture":return m=d.pointerId,fl.set(m,hl(fl.get(m)||null,e,i,s,l,d)),!0}return!1}function Mv(e){var i=Va(e.target);if(i!==null){var s=o(i);if(s!==null){if(i=s.tag,i===13){if(i=u(s),i!==null){e.blockedOn=i,Gi(e.priority,function(){xv(s)});return}}else if(i===31){if(i=f(s),i!==null){e.blockedOn=i,Gi(e.priority,function(){xv(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Yc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var s=Hh(e.nativeEvent);if(s===null){s=e.nativeEvent;var l=new s.constructor(s.type,s);Hu=l,s.target.dispatchEvent(l),Hu=null}else return i=ka(s),i!==null&&_v(i),e.blockedOn=s,!1;i.shift()}return!0}function Ev(e,i,s){Yc(e)&&s.delete(i)}function iM(){Vh=!1,cs!==null&&Yc(cs)&&(cs=null),us!==null&&Yc(us)&&(us=null),fs!==null&&Yc(fs)&&(fs=null),ul.forEach(Ev),fl.forEach(Ev)}function jc(e,i){e.blockedOn===i&&(e.blockedOn=null,Vh||(Vh=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,iM)))}var Zc=null;function bv(e){Zc!==e&&(Zc=e,c.unstable_scheduleCallback(c.unstable_NormalPriority,function(){Zc===e&&(Zc=null);for(var i=0;i<e.length;i+=3){var s=e[i],l=e[i+1],d=e[i+2];if(typeof l!="function"){if(Gh(l||s)===null)continue;break}var m=ka(s);m!==null&&(e.splice(i,3),i-=3,Hf(m,{pending:!0,data:d,method:s.method,action:l},l,d))}}))}function Vr(e){function i(k){return jc(k,e)}cs!==null&&jc(cs,e),us!==null&&jc(us,e),fs!==null&&jc(fs,e),ul.forEach(i),fl.forEach(i);for(var s=0;s<hs.length;s++){var l=hs[s];l.blockedOn===e&&(l.blockedOn=null)}for(;0<hs.length&&(s=hs[0],s.blockedOn===null);)Mv(s),s.blockedOn===null&&hs.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var d=s[l],m=s[l+1],E=d[bn]||null;if(typeof m=="function")E||bv(s);else if(E){var N=null;if(m&&m.hasAttribute("formAction")){if(d=m,E=m[bn]||null)N=E.formAction;else if(Gh(d)!==null)continue}else N=E.action;typeof N=="function"?s[l+1]=N:(s.splice(l,3),l-=3),bv(s)}}}function Tv(){function e(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(E){return d=E})},focusReset:"manual",scroll:"manual"})}function i(){d!==null&&(d(),d=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,d=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),d!==null&&(d(),d=null)}}}function kh(e){this._internalRoot=e}Kc.prototype.render=kh.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,l=oi();gv(s,l,e,i,null,null)},Kc.prototype.unmount=kh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;gv(e.current,2,null,e,null,null),Dc(),i[Ti]=null}};function Kc(e){this._internalRoot=e}Kc.prototype.unstable_scheduleHydration=function(e){if(e){var i=Eo();e={blockedOn:null,target:e,priority:i};for(var s=0;s<hs.length&&i!==0&&i<hs[s].priority;s++);hs.splice(s,0,e),s===0&&Mv(e)}};var Av=t.version;if(Av!=="19.2.4")throw Error(a(527,Av,"19.2.4"));H.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=h(i),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var aM={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qc.isDisabled&&Qc.supportsFiber)try{Mt=Qc.inject(aM),At=Qc}catch{}}return pl.createRoot=function(e,i){if(!r(e))throw Error(a(299));var s=!1,l="",d=L0,m=O0,E=z0;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(d=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(E=i.onRecoverableError)),i=pv(e,1,!1,null,null,s,l,null,d,m,E,Tv),e[Ti]=i.current,bh(e),new kh(i)},pl.hydrateRoot=function(e,i,s){if(!r(e))throw Error(a(299));var l=!1,d="",m=L0,E=O0,N=z0,k=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(d=s.identifierPrefix),s.onUncaughtError!==void 0&&(m=s.onUncaughtError),s.onCaughtError!==void 0&&(E=s.onCaughtError),s.onRecoverableError!==void 0&&(N=s.onRecoverableError),s.formState!==void 0&&(k=s.formState)),i=pv(e,1,!0,i,s??null,l,d,k,m,E,N,Tv),i.context=mv(null),s=i.current,l=oi(),l=Mo(l),d=Qa(l),d.callback=null,Ja(s,d,l),s=l,i.current.lanes=s,Pn(i,s),Xi(i),e[Ti]=i.current,bh(e),new Kc(i)},pl.version="19.2.4",pl}var Pv;function pM(){if(Pv)return Wh.exports;Pv=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(t){console.error(t)}}return c(),Wh.exports=dM(),Wh.exports}var mM=pM();const Cl=["ones","twos","threes","fours","fives","sixes","quadra","full","seqLow","seqHigh","min","max","yam"],Bv=["ones","twos","threes","fours","fives","sixes"],gM=["quadra","full","seqLow","seqHigh","min","max","yam"],kr=[{id:"down",title:"▼"},{id:"up",title:"▲"},{id:"desordem",title:"D"},{id:"seco",title:"S"}],Fv=[{id:"ones",left:"2",label:"1"},{id:"twos",left:"4",label:"2"},{id:"threes",left:"9",label:"3"},{id:"fours",left:"12",label:"4"},{id:"fives",left:"15",label:"5"},{id:"sixes",left:"18",label:"6"},{id:"quadra",left:"20",label:"Q"},{id:"full",left:"30",label:"F"},{id:"seqLow",left:"35",label:"S-"},{id:"seqHigh",left:"40",label:"S+"},{id:"min",left:"X",label:"MIN"},{id:"max",left:"X",label:"MAX"},{id:"yam",left:"50",label:"YAM"}];function vM({sheet:c,openCells:t,clickable:n,pendingPlacement:a,onCellClick:r}){const o=Object.fromEntries(kr.map(f=>{const p=a?.columnId===f.id?{...c[f.id],[a.rowId]:a.value}:c[f.id];return[f.id,lx(p)]})),u=kr.reduce((f,p)=>f+o[p.id].combined,0);return qt.jsx("div",{className:"w-[340px] max-w-full shrink-0 sm:w-[360px] lg:w-[376px]",children:qt.jsxs("table",{className:"w-full table-fixed border-separate border-spacing-[2px] bg-white text-center",style:{fontFamily:"'Inter', sans-serif"},children:[qt.jsxs("colgroup",{children:[qt.jsx("col",{className:"w-[38px]"}),qt.jsx("col",{className:"w-[38px]"}),qt.jsx("col",{className:"w-[58px]"}),qt.jsx("col",{className:"w-[58px]"}),qt.jsx("col",{className:"w-[58px]"}),qt.jsx("col",{className:"w-[58px]"})]}),qt.jsx("thead",{children:qt.jsxs("tr",{children:[qt.jsx("th",{className:"h-7 px-2",colSpan:2}),kr.map(f=>qt.jsx("th",{className:"h-7 px-2 text-base leading-none font-bold text-slate-800",children:f.id==="down"?qt.jsx("svg",{viewBox:"0 0 24 24",width:"19",height:"19",fill:"none",stroke:"currentColor",strokeWidth:"2.8",strokeLinecap:"round",strokeLinejoin:"round",className:"mx-auto",children:qt.jsx("polyline",{points:"6,9 12,15 18,9"})}):f.id==="up"?qt.jsx("svg",{viewBox:"0 0 24 24",width:"19",height:"19",fill:"none",stroke:"currentColor",strokeWidth:"2.8",strokeLinecap:"round",strokeLinejoin:"round",className:"mx-auto",children:qt.jsx("polyline",{points:"6,15 12,9 18,15"})}):qt.jsx("span",{className:"text-[0.9rem] font-semibold tracking-[0.08em]",children:f.title})},f.id))]})}),qt.jsxs("tbody",{children:[Fv.slice(0,6).map(f=>qt.jsxs("tr",{children:[qt.jsx("td",{className:"h-7 bg-transparent px-1"}),qt.jsx("td",{className:"h-7 border border-slate-700 bg-white px-1 text-sm leading-none font-semibold text-slate-900",children:f.label}),kr.map(p=>Iv({columnId:p.id,rowId:f.id,sheet:c,openCells:t,clickable:n,pendingPlacement:a,onCellClick:r}))]},f.id)),qt.jsxs("tr",{children:[qt.jsx("td",{className:"h-4 bg-transparent px-1"}),qt.jsx("td",{className:"h-4 bg-transparent px-1 text-[8px] leading-none font-bold tracking-[0.1em] text-slate-500",children:"BONUS"}),kr.map(f=>{const p=o[f.id];return qt.jsx("td",{className:"h-4 bg-transparent px-1 align-middle text-[9px] font-bold text-slate-500",style:p.bonus>0?{fontFamily:"'Kalam', cursive",fontWeight:700,fontSize:"0.78rem"}:void 0,children:p.bonus>0?"30":""},f.id)})]}),Fv.slice(6).map(f=>{const p=f.left!=="X";return qt.jsxs("tr",{children:[qt.jsx("td",{className:p?"h-7 bg-transparent px-1 text-[11px] leading-none font-semibold tracking-[0.12em] text-slate-500":"h-7 bg-transparent px-1",style:p?{fontFamily:"'Kalam', cursive"}:void 0,children:p?`+${f.left}`:""}),qt.jsx("td",{className:"h-7 border border-slate-700 bg-white px-1 text-[10px] leading-none font-semibold text-slate-900",children:f.label}),kr.map(h=>Iv({columnId:h.id,rowId:f.id,sheet:c,openCells:t,clickable:n,pendingPlacement:a,onCellClick:r}))]},f.id)}),qt.jsxs("tr",{children:[qt.jsx("td",{className:"h-7 bg-transparent px-1",colSpan:1}),qt.jsx("td",{className:"h-7 bg-transparent px-1 align-middle text-left text-xs font-bold tracking-[0.1em] text-slate-700",colSpan:3,children:"TOTAL"}),qt.jsx("td",{className:"h-7 rounded-md bg-transparent px-3 align-middle text-right text-xl font-semibold text-slate-500",style:{fontFamily:"'Kalam', cursive",lineHeight:1},colSpan:2,children:_M(u)})]})]})]})})}function Iv({columnId:c,rowId:t,sheet:n,openCells:a,clickable:r,pendingPlacement:o,onCellClick:u}){const f=`${c}:${t}`,p=n[c][t]!=null,h=a.has(f),g=o?.columnId===c&&o.rowId===t;let _=null;g?_=o.value:n[c][t]!=null&&(_=n[c][t]);const v=_===0,y=g?"#065f46":"#1e293b";return qt.jsx("td",{onClick:()=>{!r||!h||p||u(c,t)},style:(g||p)&&!v?{fontFamily:"'Kalam', cursive",fontWeight:700,fontSize:"0.95rem",verticalAlign:"middle",paddingTop:"1px"}:void 0,className:`h-7 touch-manipulation select-none border border-slate-700 px-1 text-xs leading-none font-bold ${g?"bg-white text-emerald-900":p?"bg-white text-slate-900":h&&r?"cursor-pointer bg-white text-slate-900 hover:bg-slate-50 active:bg-slate-100":"bg-[#f3f4f6] text-slate-400"}`,children:v?qt.jsxs("svg",{viewBox:"0 0 50 30",className:"h-full w-full",style:{display:"block",padding:"2px 3px"},children:[qt.jsx("path",{d:"M 4,3 C 16,10 30,18 46,27",stroke:y,strokeWidth:"2.8",strokeLinecap:"round",fill:"none"}),qt.jsx("path",{d:"M 46,3 C 33,11 19,18 4,27",stroke:y,strokeWidth:"2.8",strokeLinecap:"round",fill:"none"})]}):_!==null?String(_):""},c)}function lx(c){const t=Bv.reduce((f,p)=>f+(c[p]??0),0),n=Bv.every(f=>c[f]!=null),a=t>=60?30:0,r=t+a,o=gM.reduce((f,p)=>f+(c[p]??0),0),u=r+o;return{upperTotal:t,upperComplete:n,bonus:a,secondTotal:r,thirdTotal:o,combined:u}}function _M(c){return c>0?String(c):""}class Bi{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const n=this.elements;n[0]=t.x,n[4]=t.y,n[8]=t.z}getTrace(t){t===void 0&&(t=new R);const n=this.elements;return t.x=n[0],t.y=n[4],t.z=n[8],t}vmult(t,n){n===void 0&&(n=new R);const a=this.elements,r=t.x,o=t.y,u=t.z;return n.x=a[0]*r+a[1]*o+a[2]*u,n.y=a[3]*r+a[4]*o+a[5]*u,n.z=a[6]*r+a[7]*o+a[8]*u,n}smult(t){for(let n=0;n<this.elements.length;n++)this.elements[n]*=t}mmult(t,n){n===void 0&&(n=new Bi);const a=this.elements,r=t.elements,o=n.elements,u=a[0],f=a[1],p=a[2],h=a[3],g=a[4],_=a[5],v=a[6],y=a[7],M=a[8],b=r[0],S=r[1],x=r[2],T=r[3],C=r[4],L=r[5],z=r[6],B=r[7],P=r[8];return o[0]=u*b+f*T+p*z,o[1]=u*S+f*C+p*B,o[2]=u*x+f*L+p*P,o[3]=h*b+g*T+_*z,o[4]=h*S+g*C+_*B,o[5]=h*x+g*L+_*P,o[6]=v*b+y*T+M*z,o[7]=v*S+y*C+M*B,o[8]=v*x+y*L+M*P,n}scale(t,n){n===void 0&&(n=new Bi);const a=this.elements,r=n.elements;for(let o=0;o!==3;o++)r[3*o+0]=t.x*a[3*o+0],r[3*o+1]=t.y*a[3*o+1],r[3*o+2]=t.z*a[3*o+2];return n}solve(t,n){n===void 0&&(n=new R);const a=3,r=4,o=[];let u,f;for(u=0;u<a*r;u++)o.push(0);for(u=0;u<3;u++)for(f=0;f<3;f++)o[u+r*f]=this.elements[u+3*f];o[3]=t.x,o[7]=t.y,o[11]=t.z;let p=3;const h=p;let g;const _=4;let v;do{if(u=h-p,o[u+r*u]===0){for(f=u+1;f<h;f++)if(o[u+r*f]!==0){g=_;do v=_-g,o[v+r*u]+=o[v+r*f];while(--g);break}}if(o[u+r*u]!==0)for(f=u+1;f<h;f++){const y=o[u+r*f]/o[u+r*u];g=_;do v=_-g,o[v+r*f]=v<=u?0:o[v+r*f]-o[v+r*u]*y;while(--g)}}while(--p);if(n.z=o[2*r+3]/o[2*r+2],n.y=(o[1*r+3]-o[1*r+2]*n.z)/o[1*r+1],n.x=(o[0*r+3]-o[0*r+2]*n.z-o[0*r+1]*n.y)/o[0*r+0],isNaN(n.x)||isNaN(n.y)||isNaN(n.z)||n.x===1/0||n.y===1/0||n.z===1/0)throw`Could not solve equation! Got x=[${n.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return n}e(t,n,a){if(a===void 0)return this.elements[n+3*t];this.elements[n+3*t]=a}copy(t){for(let n=0;n<t.elements.length;n++)this.elements[n]=t.elements[n];return this}toString(){let t="";for(let a=0;a<9;a++)t+=this.elements[a]+",";return t}reverse(t){t===void 0&&(t=new Bi);const n=3,a=6,r=xM;let o,u;for(o=0;o<3;o++)for(u=0;u<3;u++)r[o+a*u]=this.elements[o+3*u];r[3]=1,r[9]=0,r[15]=0,r[4]=0,r[10]=1,r[16]=0,r[5]=0,r[11]=0,r[17]=1;let f=3;const p=f;let h;const g=a;let _;do{if(o=p-f,r[o+a*o]===0){for(u=o+1;u<p;u++)if(r[o+a*u]!==0){h=g;do _=g-h,r[_+a*o]+=r[_+a*u];while(--h);break}}if(r[o+a*o]!==0)for(u=o+1;u<p;u++){const v=r[o+a*u]/r[o+a*o];h=g;do _=g-h,r[_+a*u]=_<=o?0:r[_+a*u]-r[_+a*o]*v;while(--h)}}while(--f);o=2;do{u=o-1;do{const v=r[o+a*u]/r[o+a*o];h=a;do _=a-h,r[_+a*u]=r[_+a*u]-r[_+a*o]*v;while(--h)}while(u--)}while(--o);o=2;do{const v=1/r[o+a*o];h=a;do _=a-h,r[_+a*o]=r[_+a*o]*v;while(--h)}while(o--);o=2;do{u=2;do{if(_=r[n+u+a*o],isNaN(_)||_===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(o,u,_)}while(u--)}while(o--);return t}setRotationFromQuaternion(t){const n=t.x,a=t.y,r=t.z,o=t.w,u=n+n,f=a+a,p=r+r,h=n*u,g=n*f,_=n*p,v=a*f,y=a*p,M=r*p,b=o*u,S=o*f,x=o*p,T=this.elements;return T[0]=1-(v+M),T[1]=g-x,T[2]=_+S,T[3]=g+x,T[4]=1-(h+M),T[5]=y-b,T[6]=_-S,T[7]=y+b,T[8]=1-(h+v),this}transpose(t){t===void 0&&(t=new Bi);const n=this.elements,a=t.elements;let r;return a[0]=n[0],a[4]=n[4],a[8]=n[8],r=n[1],a[1]=n[3],a[3]=r,r=n[2],a[2]=n[6],a[6]=r,r=n[5],a[5]=n[7],a[7]=r,t}}const xM=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class R{constructor(t,n,a){t===void 0&&(t=0),n===void 0&&(n=0),a===void 0&&(a=0),this.x=t,this.y=n,this.z=a}cross(t,n){n===void 0&&(n=new R);const a=t.x,r=t.y,o=t.z,u=this.x,f=this.y,p=this.z;return n.x=f*o-p*r,n.y=p*a-u*o,n.z=u*r-f*a,n}set(t,n,a){return this.x=t,this.y=n,this.z=a,this}setZero(){this.x=this.y=this.z=0}vadd(t,n){if(n)n.x=t.x+this.x,n.y=t.y+this.y,n.z=t.z+this.z;else return new R(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,n){if(n)n.x=this.x-t.x,n.y=this.y-t.y,n.z=this.z-t.z;else return new R(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new Bi([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,n=this.y,a=this.z,r=Math.sqrt(t*t+n*n+a*a);if(r>0){const o=1/r;this.x*=o,this.y*=o,this.z*=o}else this.x=0,this.y=0,this.z=0;return r}unit(t){t===void 0&&(t=new R);const n=this.x,a=this.y,r=this.z;let o=Math.sqrt(n*n+a*a+r*r);return o>0?(o=1/o,t.x=n*o,t.y=a*o,t.z=r*o):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,n=this.y,a=this.z;return Math.sqrt(t*t+n*n+a*a)}lengthSquared(){return this.dot(this)}distanceTo(t){const n=this.x,a=this.y,r=this.z,o=t.x,u=t.y,f=t.z;return Math.sqrt((o-n)*(o-n)+(u-a)*(u-a)+(f-r)*(f-r))}distanceSquared(t){const n=this.x,a=this.y,r=this.z,o=t.x,u=t.y,f=t.z;return(o-n)*(o-n)+(u-a)*(u-a)+(f-r)*(f-r)}scale(t,n){n===void 0&&(n=new R);const a=this.x,r=this.y,o=this.z;return n.x=t*a,n.y=t*r,n.z=t*o,n}vmul(t,n){return n===void 0&&(n=new R),n.x=t.x*this.x,n.y=t.y*this.y,n.z=t.z*this.z,n}addScaledVector(t,n,a){return a===void 0&&(a=new R),a.x=this.x+t*n.x,a.y=this.y+t*n.y,a.z=this.z+t*n.z,a}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new R),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,n){const a=this.length();if(a>0){const r=yM,o=1/a;r.set(this.x*o,this.y*o,this.z*o);const u=SM;Math.abs(r.x)<.9?(u.set(1,0,0),r.cross(u,t)):(u.set(0,1,0),r.cross(u,t)),r.cross(t,n)}else t.set(1,0,0),n.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,n,a){const r=this.x,o=this.y,u=this.z;a.x=r+(t.x-r)*n,a.y=o+(t.y-o)*n,a.z=u+(t.z-u)*n}almostEquals(t,n){return n===void 0&&(n=1e-6),!(Math.abs(this.x-t.x)>n||Math.abs(this.y-t.y)>n||Math.abs(this.z-t.z)>n)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,n){return this.negate(Hv),Hv.almostEquals(t,n)}clone(){return new R(this.x,this.y,this.z)}}R.ZERO=new R(0,0,0);R.UNIT_X=new R(1,0,0);R.UNIT_Y=new R(0,1,0);R.UNIT_Z=new R(0,0,1);const yM=new R,SM=new R,Hv=new R;class fi{constructor(t){t===void 0&&(t={}),this.lowerBound=new R,this.upperBound=new R,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,n,a,r){const o=this.lowerBound,u=this.upperBound,f=a;o.copy(t[0]),f&&f.vmult(o,o),u.copy(o);for(let p=1;p<t.length;p++){let h=t[p];f&&(f.vmult(h,Gv),h=Gv),h.x>u.x&&(u.x=h.x),h.x<o.x&&(o.x=h.x),h.y>u.y&&(u.y=h.y),h.y<o.y&&(o.y=h.y),h.z>u.z&&(u.z=h.z),h.z<o.z&&(o.z=h.z)}return n&&(n.vadd(o,o),n.vadd(u,u)),r&&(o.x-=r,o.y-=r,o.z-=r,u.x+=r,u.y+=r,u.z+=r),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new fi().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const n=this.lowerBound,a=this.upperBound,r=t.lowerBound,o=t.upperBound,u=r.x<=a.x&&a.x<=o.x||n.x<=o.x&&o.x<=a.x,f=r.y<=a.y&&a.y<=o.y||n.y<=o.y&&o.y<=a.y,p=r.z<=a.z&&a.z<=o.z||n.z<=o.z&&o.z<=a.z;return u&&f&&p}volume(){const t=this.lowerBound,n=this.upperBound;return(n.x-t.x)*(n.y-t.y)*(n.z-t.z)}contains(t){const n=this.lowerBound,a=this.upperBound,r=t.lowerBound,o=t.upperBound;return n.x<=r.x&&a.x>=o.x&&n.y<=r.y&&a.y>=o.y&&n.z<=r.z&&a.z>=o.z}getCorners(t,n,a,r,o,u,f,p){const h=this.lowerBound,g=this.upperBound;t.copy(h),n.set(g.x,h.y,h.z),a.set(g.x,g.y,h.z),r.set(h.x,g.y,g.z),o.set(g.x,h.y,g.z),u.set(h.x,g.y,h.z),f.set(h.x,h.y,g.z),p.copy(g)}toLocalFrame(t,n){const a=Vv,r=a[0],o=a[1],u=a[2],f=a[3],p=a[4],h=a[5],g=a[6],_=a[7];this.getCorners(r,o,u,f,p,h,g,_);for(let v=0;v!==8;v++){const y=a[v];t.pointToLocal(y,y)}return n.setFromPoints(a)}toWorldFrame(t,n){const a=Vv,r=a[0],o=a[1],u=a[2],f=a[3],p=a[4],h=a[5],g=a[6],_=a[7];this.getCorners(r,o,u,f,p,h,g,_);for(let v=0;v!==8;v++){const y=a[v];t.pointToWorld(y,y)}return n.setFromPoints(a)}overlapsRay(t){const{direction:n,from:a}=t,r=1/n.x,o=1/n.y,u=1/n.z,f=(this.lowerBound.x-a.x)*r,p=(this.upperBound.x-a.x)*r,h=(this.lowerBound.y-a.y)*o,g=(this.upperBound.y-a.y)*o,_=(this.lowerBound.z-a.z)*u,v=(this.upperBound.z-a.z)*u,y=Math.max(Math.max(Math.min(f,p),Math.min(h,g)),Math.min(_,v)),M=Math.min(Math.min(Math.max(f,p),Math.max(h,g)),Math.max(_,v));return!(M<0||y>M)}}const Gv=new R,Vv=[new R,new R,new R,new R,new R,new R,new R,new R];class kv{constructor(){this.matrix=[]}get(t,n){let{index:a}=t,{index:r}=n;if(r>a){const o=r;r=a,a=o}return this.matrix[(a*(a+1)>>1)+r-1]}set(t,n,a){let{index:r}=t,{index:o}=n;if(o>r){const u=o;o=r,r=u}this.matrix[(r*(r+1)>>1)+o-1]=a?1:0}reset(){for(let t=0,n=this.matrix.length;t!==n;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class cx{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;return a[t]===void 0&&(a[t]=[]),a[t].includes(n)||a[t].push(n),this}hasEventListener(t,n){if(this._listeners===void 0)return!1;const a=this._listeners;return!!(a[t]!==void 0&&a[t].includes(n))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,n){if(this._listeners===void 0)return this;const a=this._listeners;if(a[t]===void 0)return this;const r=a[t].indexOf(n);return r!==-1&&a[t].splice(r,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const a=this._listeners[t.type];if(a!==void 0){t.target=this;for(let r=0,o=a.length;r<o;r++)a[r].call(this,t)}return this}}let $n=class $s{constructor(t,n,a,r){t===void 0&&(t=0),n===void 0&&(n=0),a===void 0&&(a=0),r===void 0&&(r=1),this.x=t,this.y=n,this.z=a,this.w=r}set(t,n,a,r){return this.x=t,this.y=n,this.z=a,this.w=r,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,n){const a=Math.sin(n*.5);return this.x=t.x*a,this.y=t.y*a,this.z=t.z*a,this.w=Math.cos(n*.5),this}toAxisAngle(t){t===void 0&&(t=new R),this.normalize();const n=2*Math.acos(this.w),a=Math.sqrt(1-this.w*this.w);return a<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/a,t.y=this.y/a,t.z=this.z/a),[t,n]}setFromVectors(t,n){if(t.isAntiparallelTo(n)){const a=MM,r=EM;t.tangents(a,r),this.setFromAxisAngle(a,Math.PI)}else{const a=t.cross(n);this.x=a.x,this.y=a.y,this.z=a.z,this.w=Math.sqrt(t.length()**2*n.length()**2)+t.dot(n),this.normalize()}return this}mult(t,n){n===void 0&&(n=new $s);const a=this.x,r=this.y,o=this.z,u=this.w,f=t.x,p=t.y,h=t.z,g=t.w;return n.x=a*g+u*f+r*h-o*p,n.y=r*g+u*p+o*f-a*h,n.z=o*g+u*h+a*p-r*f,n.w=u*g-a*f-r*p-o*h,n}inverse(t){t===void 0&&(t=new $s);const n=this.x,a=this.y,r=this.z,o=this.w;this.conjugate(t);const u=1/(n*n+a*a+r*r+o*o);return t.x*=u,t.y*=u,t.z*=u,t.w*=u,t}conjugate(t){return t===void 0&&(t=new $s),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,n){n===void 0&&(n=new R);const a=t.x,r=t.y,o=t.z,u=this.x,f=this.y,p=this.z,h=this.w,g=h*a+f*o-p*r,_=h*r+p*a-u*o,v=h*o+u*r-f*a,y=-u*a-f*r-p*o;return n.x=g*h+y*-u+_*-p-v*-f,n.y=_*h+y*-f+v*-u-g*-p,n.z=v*h+y*-p+g*-f-_*-u,n}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,n){n===void 0&&(n="YZX");let a,r,o;const u=this.x,f=this.y,p=this.z,h=this.w;switch(n){case"YZX":const g=u*f+p*h;if(g>.499&&(a=2*Math.atan2(u,h),r=Math.PI/2,o=0),g<-.499&&(a=-2*Math.atan2(u,h),r=-Math.PI/2,o=0),a===void 0){const _=u*u,v=f*f,y=p*p;a=Math.atan2(2*f*h-2*u*p,1-2*v-2*y),r=Math.asin(2*g),o=Math.atan2(2*u*h-2*f*p,1-2*_-2*y)}break;default:throw new Error(`Euler order ${n} not supported yet.`)}t.y=a,t.z=r,t.x=o}setFromEuler(t,n,a,r){r===void 0&&(r="XYZ");const o=Math.cos(t/2),u=Math.cos(n/2),f=Math.cos(a/2),p=Math.sin(t/2),h=Math.sin(n/2),g=Math.sin(a/2);return r==="XYZ"?(this.x=p*u*f+o*h*g,this.y=o*h*f-p*u*g,this.z=o*u*g+p*h*f,this.w=o*u*f-p*h*g):r==="YXZ"?(this.x=p*u*f+o*h*g,this.y=o*h*f-p*u*g,this.z=o*u*g-p*h*f,this.w=o*u*f+p*h*g):r==="ZXY"?(this.x=p*u*f-o*h*g,this.y=o*h*f+p*u*g,this.z=o*u*g+p*h*f,this.w=o*u*f-p*h*g):r==="ZYX"?(this.x=p*u*f-o*h*g,this.y=o*h*f+p*u*g,this.z=o*u*g-p*h*f,this.w=o*u*f+p*h*g):r==="YZX"?(this.x=p*u*f+o*h*g,this.y=o*h*f+p*u*g,this.z=o*u*g-p*h*f,this.w=o*u*f-p*h*g):r==="XZY"&&(this.x=p*u*f-o*h*g,this.y=o*h*f-p*u*g,this.z=o*u*g+p*h*f,this.w=o*u*f+p*h*g),this}clone(){return new $s(this.x,this.y,this.z,this.w)}slerp(t,n,a){a===void 0&&(a=new $s);const r=this.x,o=this.y,u=this.z,f=this.w;let p=t.x,h=t.y,g=t.z,_=t.w,v,y,M,b,S;return y=r*p+o*h+u*g+f*_,y<0&&(y=-y,p=-p,h=-h,g=-g,_=-_),1-y>1e-6?(v=Math.acos(y),M=Math.sin(v),b=Math.sin((1-n)*v)/M,S=Math.sin(n*v)/M):(b=1-n,S=n),a.x=b*r+S*p,a.y=b*o+S*h,a.z=b*u+S*g,a.w=b*f+S*_,a}integrate(t,n,a,r){r===void 0&&(r=new $s);const o=t.x*a.x,u=t.y*a.y,f=t.z*a.z,p=this.x,h=this.y,g=this.z,_=this.w,v=n*.5;return r.x+=v*(o*_+u*g-f*h),r.y+=v*(u*_+f*p-o*g),r.z+=v*(f*_+o*h-u*p),r.w+=v*(-o*p-u*h-f*g),r}};const MM=new R,EM=new R,bM={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class jt{constructor(t){t===void 0&&(t={}),this.id=jt.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,n){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,n,a,r){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}jt.idCounter=0;jt.types=bM;class Be{constructor(t){t===void 0&&(t={}),this.position=new R,this.quaternion=new $n,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,n){return Be.pointToLocalFrame(this.position,this.quaternion,t,n)}pointToWorld(t,n){return Be.pointToWorldFrame(this.position,this.quaternion,t,n)}vectorToWorldFrame(t,n){return n===void 0&&(n=new R),this.quaternion.vmult(t,n),n}static pointToLocalFrame(t,n,a,r){return r===void 0&&(r=new R),a.vsub(t,r),n.conjugate(qv),qv.vmult(r,r),r}static pointToWorldFrame(t,n,a,r){return r===void 0&&(r=new R),n.vmult(a,r),r.vadd(t,r),r}static vectorToWorldFrame(t,n,a){return a===void 0&&(a=new R),t.vmult(n,a),a}static vectorToLocalFrame(t,n,a,r){return r===void 0&&(r=new R),n.w*=-1,n.vmult(a,r),n.w*=-1,r}}const qv=new $n;class Dl extends jt{constructor(t){t===void 0&&(t={});const{vertices:n=[],faces:a=[],normals:r=[],axes:o,boundingSphereRadius:u}=t;super({type:jt.types.CONVEXPOLYHEDRON}),this.vertices=n,this.faces=a,this.faceNormals=r,this.faceNormals.length===0&&this.computeNormals(),u?this.boundingSphereRadius=u:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=o?o.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,n=this.vertices,a=this.uniqueEdges;a.length=0;const r=new R;for(let o=0;o!==t.length;o++){const u=t[o],f=u.length;for(let p=0;p!==f;p++){const h=(p+1)%f;n[u[p]].vsub(n[u[h]],r),r.normalize();let g=!1;for(let _=0;_!==a.length;_++)if(a[_].almostEquals(r)||a[_].almostEquals(r)){g=!0;break}g||a.push(r.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let r=0;r<this.faces[t].length;r++)if(!this.vertices[this.faces[t][r]])throw new Error(`Vertex ${this.faces[t][r]} not found!`);const n=this.faceNormals[t]||new R;this.getFaceNormal(t,n),n.negate(n),this.faceNormals[t]=n;const a=this.vertices[this.faces[t][0]];if(n.dot(a)<0){console.error(`.faceNormals[${t}] = Vec3(${n.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let r=0;r<this.faces[t].length;r++)console.warn(`.vertices[${this.faces[t][r]}] = Vec3(${this.vertices[this.faces[t][r]].toString()})`)}}}getFaceNormal(t,n){const a=this.faces[t],r=this.vertices[a[0]],o=this.vertices[a[1]],u=this.vertices[a[2]];Dl.computeNormal(r,o,u,n)}static computeNormal(t,n,a,r){const o=new R,u=new R;n.vsub(t,u),a.vsub(n,o),o.cross(u,r),r.isZero()||r.normalize()}clipAgainstHull(t,n,a,r,o,u,f,p,h){const g=new R;let _=-1,v=-Number.MAX_VALUE;for(let M=0;M<a.faces.length;M++){g.copy(a.faceNormals[M]),o.vmult(g,g);const b=g.dot(u);b>v&&(v=b,_=M)}const y=[];for(let M=0;M<a.faces[_].length;M++){const b=a.vertices[a.faces[_][M]],S=new R;S.copy(b),o.vmult(S,S),r.vadd(S,S),y.push(S)}_>=0&&this.clipFaceAgainstHull(u,t,n,y,f,p,h)}findSeparatingAxis(t,n,a,r,o,u,f,p){const h=new R,g=new R,_=new R,v=new R,y=new R,M=new R;let b=Number.MAX_VALUE;const S=this;if(S.uniqueAxes)for(let x=0;x!==S.uniqueAxes.length;x++){a.vmult(S.uniqueAxes[x],h);const T=S.testSepAxis(h,t,n,a,r,o);if(T===!1)return!1;T<b&&(b=T,u.copy(h))}else{const x=f?f.length:S.faces.length;for(let T=0;T<x;T++){const C=f?f[T]:T;h.copy(S.faceNormals[C]),a.vmult(h,h);const L=S.testSepAxis(h,t,n,a,r,o);if(L===!1)return!1;L<b&&(b=L,u.copy(h))}}if(t.uniqueAxes)for(let x=0;x!==t.uniqueAxes.length;x++){o.vmult(t.uniqueAxes[x],g);const T=S.testSepAxis(g,t,n,a,r,o);if(T===!1)return!1;T<b&&(b=T,u.copy(g))}else{const x=p?p.length:t.faces.length;for(let T=0;T<x;T++){const C=p?p[T]:T;g.copy(t.faceNormals[C]),o.vmult(g,g);const L=S.testSepAxis(g,t,n,a,r,o);if(L===!1)return!1;L<b&&(b=L,u.copy(g))}}for(let x=0;x!==S.uniqueEdges.length;x++){a.vmult(S.uniqueEdges[x],v);for(let T=0;T!==t.uniqueEdges.length;T++)if(o.vmult(t.uniqueEdges[T],y),v.cross(y,M),!M.almostZero()){M.normalize();const C=S.testSepAxis(M,t,n,a,r,o);if(C===!1)return!1;C<b&&(b=C,u.copy(M))}}return r.vsub(n,_),_.dot(u)>0&&u.negate(u),!0}testSepAxis(t,n,a,r,o,u){const f=this;Dl.project(f,t,a,r,Kh),Dl.project(n,t,o,u,Qh);const p=Kh[0],h=Kh[1],g=Qh[0],_=Qh[1];if(p<_||g<h)return!1;const v=p-_,y=g-h;return v<y?v:y}calculateLocalInertia(t,n){const a=new R,r=new R;this.computeLocalAABB(r,a);const o=a.x-r.x,u=a.y-r.y,f=a.z-r.z;n.x=1/12*t*(2*u*2*u+2*f*2*f),n.y=1/12*t*(2*o*2*o+2*f*2*f),n.z=1/12*t*(2*u*2*u+2*o*2*o)}getPlaneConstantOfFace(t){const n=this.faces[t],a=this.faceNormals[t],r=this.vertices[n[0]];return-a.dot(r)}clipFaceAgainstHull(t,n,a,r,o,u,f){const p=new R,h=new R,g=new R,_=new R,v=new R,y=new R,M=new R,b=new R,S=this,x=[],T=r,C=x;let L=-1,z=Number.MAX_VALUE;for(let O=0;O<S.faces.length;O++){p.copy(S.faceNormals[O]),a.vmult(p,p);const G=p.dot(t);G<z&&(z=G,L=O)}if(L<0)return;const B=S.faces[L];B.connectedFaces=[];for(let O=0;O<S.faces.length;O++)for(let G=0;G<S.faces[O].length;G++)B.indexOf(S.faces[O][G])!==-1&&O!==L&&B.connectedFaces.indexOf(O)===-1&&B.connectedFaces.push(O);const P=B.length;for(let O=0;O<P;O++){const G=S.vertices[B[O]],$=S.vertices[B[(O+1)%P]];G.vsub($,h),g.copy(h),a.vmult(g,g),n.vadd(g,g),_.copy(this.faceNormals[L]),a.vmult(_,_),n.vadd(_,_),g.cross(_,v),v.negate(v),y.copy(G),a.vmult(y,y),n.vadd(y,y);const V=B.connectedFaces[O];M.copy(this.faceNormals[V]);const j=this.getPlaneConstantOfFace(V);b.copy(M),a.vmult(b,b);const X=j-b.dot(n);for(this.clipFaceAgainstPlane(T,C,b,X);T.length;)T.shift();for(;C.length;)T.push(C.shift())}M.copy(this.faceNormals[L]);const Y=this.getPlaneConstantOfFace(L);b.copy(M),a.vmult(b,b);const w=Y-b.dot(n);for(let O=0;O<T.length;O++){let G=b.dot(T[O])+w;if(G<=o&&(console.log(`clamped: depth=${G} to minDist=${o}`),G=o),G<=u){const $=T[O];if(G<=1e-6){const V={point:$,normal:b,depth:G};f.push(V)}}}}clipFaceAgainstPlane(t,n,a,r){let o,u;const f=t.length;if(f<2)return n;let p=t[t.length-1],h=t[0];o=a.dot(p)+r;for(let g=0;g<f;g++){if(h=t[g],u=a.dot(h)+r,o<0)if(u<0){const _=new R;_.copy(h),n.push(_)}else{const _=new R;p.lerp(h,o/(o-u),_),n.push(_)}else if(u<0){const _=new R;p.lerp(h,o/(o-u),_),n.push(_),n.push(h)}p=h,o=u}return n}computeWorldVertices(t,n){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new R);const a=this.vertices,r=this.worldVertices;for(let o=0;o!==this.vertices.length;o++)n.vmult(a[o],r[o]),t.vadd(r[o],r[o]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,n){const a=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),n.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let r=0;r<this.vertices.length;r++){const o=a[r];o.x<t.x?t.x=o.x:o.x>n.x&&(n.x=o.x),o.y<t.y?t.y=o.y:o.y>n.y&&(n.y=o.y),o.z<t.z?t.z=o.z:o.z>n.z&&(n.z=o.z)}}computeWorldFaceNormals(t){const n=this.faceNormals.length;for(;this.worldFaceNormals.length<n;)this.worldFaceNormals.push(new R);const a=this.faceNormals,r=this.worldFaceNormals;for(let o=0;o!==n;o++)t.vmult(a[o],r[o]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const n=this.vertices;for(let a=0;a!==n.length;a++){const r=n[a].lengthSquared();r>t&&(t=r)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,n,a,r){const o=this.vertices;let u,f,p,h,g,_,v=new R;for(let y=0;y<o.length;y++){v.copy(o[y]),n.vmult(v,v),t.vadd(v,v);const M=v;(u===void 0||M.x<u)&&(u=M.x),(h===void 0||M.x>h)&&(h=M.x),(f===void 0||M.y<f)&&(f=M.y),(g===void 0||M.y>g)&&(g=M.y),(p===void 0||M.z<p)&&(p=M.z),(_===void 0||M.z>_)&&(_=M.z)}a.set(u,f,p),r.set(h,g,_)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new R);const n=this.vertices;for(let a=0;a<n.length;a++)t.vadd(n[a],t);return t.scale(1/n.length,t),t}transformAllPoints(t,n){const a=this.vertices.length,r=this.vertices;if(n){for(let o=0;o<a;o++){const u=r[o];n.vmult(u,u)}for(let o=0;o<this.faceNormals.length;o++){const u=this.faceNormals[o];n.vmult(u,u)}}if(t)for(let o=0;o<a;o++){const u=r[o];u.vadd(t,u)}}pointIsInside(t){const n=this.vertices,a=this.faces,r=this.faceNormals,o=new R;this.getAveragePointLocal(o);for(let u=0;u<this.faces.length;u++){let f=r[u];const p=n[a[u][0]],h=new R;t.vsub(p,h);const g=f.dot(h),_=new R;o.vsub(p,_);const v=f.dot(_);if(g<0&&v>0||g>0&&v<0)return!1}return-1}static project(t,n,a,r,o){const u=t.vertices.length,f=TM;let p=0,h=0;const g=AM,_=t.vertices;g.setZero(),Be.vectorToLocalFrame(a,r,n,f),Be.pointToLocalFrame(a,r,g,g);const v=g.dot(f);h=p=_[0].dot(f);for(let y=1;y<u;y++){const M=_[y].dot(f);M>p&&(p=M),M<h&&(h=M)}if(h-=v,p-=v,h>p){const y=h;h=p,p=y}o[0]=p,o[1]=h}}const Kh=[],Qh=[];new R;const TM=new R,AM=new R;class ar extends jt{constructor(t){super({type:jt.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,n=this.halfExtents.y,a=this.halfExtents.z,r=R,o=[new r(-t,-n,-a),new r(t,-n,-a),new r(t,n,-a),new r(-t,n,-a),new r(-t,-n,a),new r(t,-n,a),new r(t,n,a),new r(-t,n,a)],u=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],f=[new r(0,0,1),new r(0,1,0),new r(1,0,0)],p=new Dl({vertices:o,faces:u,axes:f});this.convexPolyhedronRepresentation=p,p.material=this.material}calculateLocalInertia(t,n){return n===void 0&&(n=new R),ar.calculateInertia(this.halfExtents,t,n),n}static calculateInertia(t,n,a){const r=t;a.x=1/12*n*(2*r.y*2*r.y+2*r.z*2*r.z),a.y=1/12*n*(2*r.x*2*r.x+2*r.z*2*r.z),a.z=1/12*n*(2*r.y*2*r.y+2*r.x*2*r.x)}getSideNormals(t,n){const a=t,r=this.halfExtents;if(a[0].set(r.x,0,0),a[1].set(0,r.y,0),a[2].set(0,0,r.z),a[3].set(-r.x,0,0),a[4].set(0,-r.y,0),a[5].set(0,0,-r.z),n!==void 0)for(let o=0;o!==a.length;o++)n.vmult(a[o],a[o]);return a}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,n,a){const r=this.halfExtents,o=[[r.x,r.y,r.z],[-r.x,r.y,r.z],[-r.x,-r.y,r.z],[-r.x,-r.y,-r.z],[r.x,-r.y,-r.z],[r.x,r.y,-r.z],[-r.x,r.y,-r.z],[r.x,-r.y,r.z]];for(let u=0;u<o.length;u++)ps.set(o[u][0],o[u][1],o[u][2]),n.vmult(ps,ps),t.vadd(ps,ps),a(ps.x,ps.y,ps.z)}calculateWorldAABB(t,n,a,r){const o=this.halfExtents;Wi[0].set(o.x,o.y,o.z),Wi[1].set(-o.x,o.y,o.z),Wi[2].set(-o.x,-o.y,o.z),Wi[3].set(-o.x,-o.y,-o.z),Wi[4].set(o.x,-o.y,-o.z),Wi[5].set(o.x,o.y,-o.z),Wi[6].set(-o.x,o.y,-o.z),Wi[7].set(o.x,-o.y,o.z);const u=Wi[0];n.vmult(u,u),t.vadd(u,u),r.copy(u),a.copy(u);for(let f=1;f<8;f++){const p=Wi[f];n.vmult(p,p),t.vadd(p,p);const h=p.x,g=p.y,_=p.z;h>r.x&&(r.x=h),g>r.y&&(r.y=g),_>r.z&&(r.z=_),h<a.x&&(a.x=h),g<a.y&&(a.y=g),_<a.z&&(a.z=_)}}}const ps=new R,Wi=[new R,new R,new R,new R,new R,new R,new R,new R],Up={DYNAMIC:1,STATIC:2,KINEMATIC:4},Lp={AWAKE:0,SLEEPY:1,SLEEPING:2};class Gt extends cx{constructor(t){t===void 0&&(t={}),super(),this.id=Gt.idCounter++,this.index=-1,this.world=null,this.vlambda=new R,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new R,this.previousPosition=new R,this.interpolatedPosition=new R,this.initPosition=new R,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new R,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new R,this.force=new R;const n=typeof t.mass=="number"?t.mass:0;this.mass=n,this.invMass=n>0?1/n:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=n<=0?Gt.STATIC:Gt.DYNAMIC,typeof t.type==typeof Gt.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=Gt.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new R,this.quaternion=new $n,this.initQuaternion=new $n,this.previousQuaternion=new $n,this.interpolatedQuaternion=new $n,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new R,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new R,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new R,this.invInertia=new R,this.invInertiaWorld=new Bi,this.invMassSolve=0,this.invInertiaSolve=new R,this.invInertiaWorldSolve=new Bi,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new R(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new R(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new fi,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new R,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=Gt.AWAKE,this.wakeUpAfterNarrowphase=!1,t===Gt.SLEEPING&&this.dispatchEvent(Gt.wakeupEvent)}sleep(){this.sleepState=Gt.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const n=this.sleepState,a=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),r=this.sleepSpeedLimit**2;n===Gt.AWAKE&&a<r?(this.sleepState=Gt.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(Gt.sleepyEvent)):n===Gt.SLEEPY&&a>r?this.wakeUp():n===Gt.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(Gt.sleepEvent))}}updateSolveMassProperties(){this.sleepState===Gt.SLEEPING||this.type===Gt.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,n){return n===void 0&&(n=new R),t.vsub(this.position,n),this.quaternion.conjugate().vmult(n,n),n}vectorToLocalFrame(t,n){return n===void 0&&(n=new R),this.quaternion.conjugate().vmult(t,n),n}pointToWorldFrame(t,n){return n===void 0&&(n=new R),this.quaternion.vmult(t,n),n.vadd(this.position,n),n}vectorToWorldFrame(t,n){return n===void 0&&(n=new R),this.quaternion.vmult(t,n),n}addShape(t,n,a){const r=new R,o=new $n;return n&&r.copy(n),a&&o.copy(a),this.shapes.push(t),this.shapeOffsets.push(r),this.shapeOrientations.push(o),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const n=this.shapes.indexOf(t);return n===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(n,1),this.shapeOffsets.splice(n,1),this.shapeOrientations.splice(n,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,n=this.shapeOffsets,a=t.length;let r=0;for(let o=0;o!==a;o++){const u=t[o];u.updateBoundingSphereRadius();const f=n[o].length(),p=u.boundingSphereRadius;f+p>r&&(r=f+p)}this.boundingRadius=r}updateAABB(){const t=this.shapes,n=this.shapeOffsets,a=this.shapeOrientations,r=t.length,o=wM,u=RM,f=this.quaternion,p=this.aabb,h=CM;for(let g=0;g!==r;g++){const _=t[g];f.vmult(n[g],o),o.vadd(this.position,o),f.mult(a[g],u),_.calculateWorldAABB(o,u,h.lowerBound,h.upperBound),g===0?p.copy(h):p.extend(h)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const n=this.invInertia;if(!(n.x===n.y&&n.y===n.z&&!t)){const a=DM,r=NM;a.setRotationFromQuaternion(this.quaternion),a.transpose(r),a.scale(n,a),a.mmult(r,this.invInertiaWorld)}}applyForce(t,n){if(n===void 0&&(n=new R),this.type!==Gt.DYNAMIC)return;this.sleepState===Gt.SLEEPING&&this.wakeUp();const a=UM;n.cross(t,a),this.force.vadd(t,this.force),this.torque.vadd(a,this.torque)}applyLocalForce(t,n){if(n===void 0&&(n=new R),this.type!==Gt.DYNAMIC)return;const a=LM,r=OM;this.vectorToWorldFrame(t,a),this.vectorToWorldFrame(n,r),this.applyForce(a,r)}applyTorque(t){this.type===Gt.DYNAMIC&&(this.sleepState===Gt.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,n){if(n===void 0&&(n=new R),this.type!==Gt.DYNAMIC)return;this.sleepState===Gt.SLEEPING&&this.wakeUp();const a=n,r=zM;r.copy(t),r.scale(this.invMass,r),this.velocity.vadd(r,this.velocity);const o=PM;a.cross(t,o),this.invInertiaWorld.vmult(o,o),this.angularVelocity.vadd(o,this.angularVelocity)}applyLocalImpulse(t,n){if(n===void 0&&(n=new R),this.type!==Gt.DYNAMIC)return;const a=BM,r=FM;this.vectorToWorldFrame(t,a),this.vectorToWorldFrame(n,r),this.applyImpulse(a,r)}updateMassProperties(){const t=IM;this.invMass=this.mass>0?1/this.mass:0;const n=this.inertia,a=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),ar.calculateInertia(t,this.mass,n),this.invInertia.set(n.x>0&&!a?1/n.x:0,n.y>0&&!a?1/n.y:0,n.z>0&&!a?1/n.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,n){const a=new R;return t.vsub(this.position,a),this.angularVelocity.cross(a,n),this.velocity.vadd(n,n),n}integrate(t,n,a){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===Gt.DYNAMIC||this.type===Gt.KINEMATIC)||this.sleepState===Gt.SLEEPING)return;const r=this.velocity,o=this.angularVelocity,u=this.position,f=this.force,p=this.torque,h=this.quaternion,g=this.invMass,_=this.invInertiaWorld,v=this.linearFactor,y=g*t;r.x+=f.x*y*v.x,r.y+=f.y*y*v.y,r.z+=f.z*y*v.z;const M=_.elements,b=this.angularFactor,S=p.x*b.x,x=p.y*b.y,T=p.z*b.z;o.x+=t*(M[0]*S+M[1]*x+M[2]*T),o.y+=t*(M[3]*S+M[4]*x+M[5]*T),o.z+=t*(M[6]*S+M[7]*x+M[8]*T),u.x+=r.x*t,u.y+=r.y*t,u.z+=r.z*t,h.integrate(this.angularVelocity,t,this.angularFactor,h),n&&(a?h.normalizeFast():h.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}Gt.idCounter=0;Gt.COLLIDE_EVENT_NAME="collide";Gt.DYNAMIC=Up.DYNAMIC;Gt.STATIC=Up.STATIC;Gt.KINEMATIC=Up.KINEMATIC;Gt.AWAKE=Lp.AWAKE;Gt.SLEEPY=Lp.SLEEPY;Gt.SLEEPING=Lp.SLEEPING;Gt.wakeupEvent={type:"wakeup"};Gt.sleepyEvent={type:"sleepy"};Gt.sleepEvent={type:"sleep"};const wM=new R,RM=new $n,CM=new fi,DM=new Bi,NM=new Bi;new Bi;const UM=new R,LM=new R,OM=new R,zM=new R,PM=new R,BM=new R,FM=new R,IM=new R;class ux{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,n,a){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,n){return!((t.collisionFilterGroup&n.collisionFilterMask)===0||(n.collisionFilterGroup&t.collisionFilterMask)===0||((t.type&Gt.STATIC)!==0||t.sleepState===Gt.SLEEPING)&&((n.type&Gt.STATIC)!==0||n.sleepState===Gt.SLEEPING))}intersectionTest(t,n,a,r){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,n,a,r):this.doBoundingSphereBroadphase(t,n,a,r)}doBoundingSphereBroadphase(t,n,a,r){const o=HM;n.position.vsub(t.position,o);const u=(t.boundingRadius+n.boundingRadius)**2;o.lengthSquared()<u&&(a.push(t),r.push(n))}doBoundingBoxBroadphase(t,n,a,r){t.aabbNeedsUpdate&&t.updateAABB(),n.aabbNeedsUpdate&&n.updateAABB(),t.aabb.overlaps(n.aabb)&&(a.push(t),r.push(n))}makePairsUnique(t,n){const a=GM,r=VM,o=kM,u=t.length;for(let f=0;f!==u;f++)r[f]=t[f],o[f]=n[f];t.length=0,n.length=0;for(let f=0;f!==u;f++){const p=r[f].id,h=o[f].id,g=p<h?`${p},${h}`:`${h},${p}`;a[g]=f,a.keys.push(g)}for(let f=0;f!==a.keys.length;f++){const p=a.keys.pop(),h=a[p];t.push(r[h]),n.push(o[h]),delete a[p]}}setWorld(t){}static boundingSphereCheck(t,n){const a=new R;t.position.vsub(n.position,a);const r=t.shapes[0],o=n.shapes[0];return Math.pow(r.boundingSphereRadius+o.boundingSphereRadius,2)>a.lengthSquared()}aabbQuery(t,n,a){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const HM=new R;new R;new $n;new R;const GM={keys:[]},VM=[],kM=[];new R;new R;new R;class qM extends ux{constructor(){super()}collisionPairs(t,n,a){const r=t.bodies,o=r.length;let u,f;for(let p=0;p!==o;p++)for(let h=0;h!==p;h++)u=r[p],f=r[h],this.needBroadphaseCollision(u,f)&&this.intersectionTest(u,f,n,a)}aabbQuery(t,n,a){a===void 0&&(a=[]);for(let r=0;r<t.bodies.length;r++){const o=t.bodies[r];o.aabbNeedsUpdate&&o.updateAABB(),o.aabb.overlaps(n)&&a.push(o)}return a}}class Nu{constructor(){this.rayFromWorld=new R,this.rayToWorld=new R,this.hitNormalWorld=new R,this.hitPointWorld=new R,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,n,a,r,o,u,f){this.rayFromWorld.copy(t),this.rayToWorld.copy(n),this.hitNormalWorld.copy(a),this.hitPointWorld.copy(r),this.shape=o,this.body=u,this.distance=f}}let fx,hx,dx,px,mx,gx,vx;const Op={CLOSEST:1,ANY:2,ALL:4};fx=jt.types.SPHERE;hx=jt.types.PLANE;dx=jt.types.BOX;px=jt.types.CYLINDER;mx=jt.types.CONVEXPOLYHEDRON;gx=jt.types.HEIGHTFIELD;vx=jt.types.TRIMESH;let ta=class Ki{get[fx](){return this._intersectSphere}get[hx](){return this._intersectPlane}get[dx](){return this._intersectBox}get[px](){return this._intersectConvex}get[mx](){return this._intersectConvex}get[gx](){return this._intersectHeightfield}get[vx](){return this._intersectTrimesh}constructor(t,n){t===void 0&&(t=new R),n===void 0&&(n=new R),this.from=t.clone(),this.to=n.clone(),this.direction=new R,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=Ki.ANY,this.result=new Nu,this.hasHit=!1,this.callback=a=>{}}intersectWorld(t,n){return this.mode=n.mode||Ki.ANY,this.result=n.result||new Nu,this.skipBackfaces=!!n.skipBackfaces,this.collisionFilterMask=typeof n.collisionFilterMask<"u"?n.collisionFilterMask:-1,this.collisionFilterGroup=typeof n.collisionFilterGroup<"u"?n.collisionFilterGroup:-1,this.checkCollisionResponse=typeof n.checkCollisionResponse<"u"?n.checkCollisionResponse:!0,n.from&&this.from.copy(n.from),n.to&&this.to.copy(n.to),this.callback=n.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Xv),Jh.length=0,t.broadphase.aabbQuery(t,Xv,Jh),this.intersectBodies(Jh),this.hasHit}intersectBody(t,n){n&&(this.result=n,this.updateDirection());const a=this.checkCollisionResponse;if(a&&!t.collisionResponse||(this.collisionFilterGroup&t.collisionFilterMask)===0||(t.collisionFilterGroup&this.collisionFilterMask)===0)return;const r=XM,o=WM;for(let u=0,f=t.shapes.length;u<f;u++){const p=t.shapes[u];if(!(a&&!p.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[u],o),t.quaternion.vmult(t.shapeOffsets[u],r),r.vadd(t.position,r),this.intersectShape(p,o,r,t),this.result.shouldStop))break}}intersectBodies(t,n){n&&(this.result=n,this.updateDirection());for(let a=0,r=t.length;!this.result.shouldStop&&a<r;a++)this.intersectBody(t[a])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,n,a,r){const o=this.from;if(rE(o,this.direction,a)>t.boundingSphereRadius)return;const f=this[t.type];f&&f.call(this,t,n,a,r,t)}_intersectBox(t,n,a,r,o){return this._intersectConvex(t.convexPolyhedronRepresentation,n,a,r,o)}_intersectPlane(t,n,a,r,o){const u=this.from,f=this.to,p=this.direction,h=new R(0,0,1);n.vmult(h,h);const g=new R;u.vsub(a,g);const _=g.dot(h);f.vsub(a,g);const v=g.dot(h);if(_*v>0||u.distanceTo(f)<_)return;const y=h.dot(p);if(Math.abs(y)<this.precision)return;const M=new R,b=new R,S=new R;u.vsub(a,M);const x=-h.dot(M)/y;p.scale(x,b),u.vadd(b,S),this.reportIntersection(h,S,o,r,-1)}getAABB(t){const{lowerBound:n,upperBound:a}=t,r=this.to,o=this.from;n.x=Math.min(r.x,o.x),n.y=Math.min(r.y,o.y),n.z=Math.min(r.z,o.z),a.x=Math.max(r.x,o.x),a.y=Math.max(r.y,o.y),a.z=Math.max(r.z,o.z)}_intersectHeightfield(t,n,a,r,o){t.data,t.elementSize;const u=YM;u.from.copy(this.from),u.to.copy(this.to),Be.pointToLocalFrame(a,n,u.from,u.from),Be.pointToLocalFrame(a,n,u.to,u.to),u.updateDirection();const f=jM;let p,h,g,_;p=h=0,g=_=t.data.length-1;const v=new fi;u.getAABB(v),t.getIndexOfPosition(v.lowerBound.x,v.lowerBound.y,f,!0),p=Math.max(p,f[0]),h=Math.max(h,f[1]),t.getIndexOfPosition(v.upperBound.x,v.upperBound.y,f,!0),g=Math.min(g,f[0]+1),_=Math.min(_,f[1]+1);for(let y=p;y<g;y++)for(let M=h;M<_;M++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(y,M,v),!!v.overlapsRay(u)){if(t.getConvexTrianglePillar(y,M,!1),Be.pointToWorldFrame(a,n,t.pillarOffset,Jc),this._intersectConvex(t.pillarConvex,n,Jc,r,o,Wv),this.result.shouldStop)return;t.getConvexTrianglePillar(y,M,!0),Be.pointToWorldFrame(a,n,t.pillarOffset,Jc),this._intersectConvex(t.pillarConvex,n,Jc,r,o,Wv)}}}_intersectSphere(t,n,a,r,o){const u=this.from,f=this.to,p=t.radius,h=(f.x-u.x)**2+(f.y-u.y)**2+(f.z-u.z)**2,g=2*((f.x-u.x)*(u.x-a.x)+(f.y-u.y)*(u.y-a.y)+(f.z-u.z)*(u.z-a.z)),_=(u.x-a.x)**2+(u.y-a.y)**2+(u.z-a.z)**2-p**2,v=g**2-4*h*_,y=ZM,M=KM;if(!(v<0))if(v===0)u.lerp(f,v,y),y.vsub(a,M),M.normalize(),this.reportIntersection(M,y,o,r,-1);else{const b=(-g-Math.sqrt(v))/(2*h),S=(-g+Math.sqrt(v))/(2*h);if(b>=0&&b<=1&&(u.lerp(f,b,y),y.vsub(a,M),M.normalize(),this.reportIntersection(M,y,o,r,-1)),this.result.shouldStop)return;S>=0&&S<=1&&(u.lerp(f,S,y),y.vsub(a,M),M.normalize(),this.reportIntersection(M,y,o,r,-1))}}_intersectConvex(t,n,a,r,o,u){const f=QM,p=Yv,h=u&&u.faceList||null,g=t.faces,_=t.vertices,v=t.faceNormals,y=this.direction,M=this.from,b=this.to,S=M.distanceTo(b),x=h?h.length:g.length,T=this.result;for(let C=0;!T.shouldStop&&C<x;C++){const L=h?h[C]:C,z=g[L],B=v[L],P=n,Y=a;p.copy(_[z[0]]),P.vmult(p,p),p.vadd(Y,p),p.vsub(M,p),P.vmult(B,f);const w=y.dot(f);if(Math.abs(w)<this.precision)continue;const O=f.dot(p)/w;if(!(O<0)){y.scale(O,Qn),Qn.vadd(M,Qn),Di.copy(_[z[0]]),P.vmult(Di,Di),Y.vadd(Di,Di);for(let G=1;!T.shouldStop&&G<z.length-1;G++){Yi.copy(_[z[G]]),ji.copy(_[z[G+1]]),P.vmult(Yi,Yi),P.vmult(ji,ji),Y.vadd(Yi,Yi),Y.vadd(ji,ji);const $=Qn.distanceTo(M);!(Ki.pointInTriangle(Qn,Di,Yi,ji)||Ki.pointInTriangle(Qn,Yi,Di,ji))||$>S||this.reportIntersection(f,Qn,o,r,L)}}}}_intersectTrimesh(t,n,a,r,o,u){const f=JM,p=aE,h=sE,g=Yv,_=$M,v=tE,y=eE,M=iE,b=nE,S=t.indices;t.vertices;const x=this.from,T=this.to,C=this.direction;h.position.copy(a),h.quaternion.copy(n),Be.vectorToLocalFrame(a,n,C,_),Be.pointToLocalFrame(a,n,x,v),Be.pointToLocalFrame(a,n,T,y),y.x*=t.scale.x,y.y*=t.scale.y,y.z*=t.scale.z,v.x*=t.scale.x,v.y*=t.scale.y,v.z*=t.scale.z,y.vsub(v,_),_.normalize();const L=v.distanceSquared(y);t.tree.rayQuery(this,h,p);for(let z=0,B=p.length;!this.result.shouldStop&&z!==B;z++){const P=p[z];t.getNormal(P,f),t.getVertex(S[P*3],Di),Di.vsub(v,g);const Y=_.dot(f),w=f.dot(g)/Y;if(w<0)continue;_.scale(w,Qn),Qn.vadd(v,Qn),t.getVertex(S[P*3+1],Yi),t.getVertex(S[P*3+2],ji);const O=Qn.distanceSquared(v);!(Ki.pointInTriangle(Qn,Yi,Di,ji)||Ki.pointInTriangle(Qn,Di,Yi,ji))||O>L||(Be.vectorToWorldFrame(n,f,b),Be.pointToWorldFrame(a,n,Qn,M),this.reportIntersection(b,M,o,r,P))}p.length=0}reportIntersection(t,n,a,r,o){const u=this.from,f=this.to,p=u.distanceTo(n),h=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(h.hitFaceIndex=typeof o<"u"?o:-1,this.mode){case Ki.ALL:this.hasHit=!0,h.set(u,f,t,n,a,r,p),h.hasHit=!0,this.callback(h);break;case Ki.CLOSEST:(p<h.distance||!h.hasHit)&&(this.hasHit=!0,h.hasHit=!0,h.set(u,f,t,n,a,r,p));break;case Ki.ANY:this.hasHit=!0,h.hasHit=!0,h.set(u,f,t,n,a,r,p),h.shouldStop=!0;break}}static pointInTriangle(t,n,a,r){r.vsub(n,er),a.vsub(n,ml),t.vsub(n,$h);const o=er.dot(er),u=er.dot(ml),f=er.dot($h),p=ml.dot(ml),h=ml.dot($h);let g,_;return(g=p*f-u*h)>=0&&(_=o*h-u*f)>=0&&g+_<o*p-u*u}};ta.CLOSEST=Op.CLOSEST;ta.ANY=Op.ANY;ta.ALL=Op.ALL;const Xv=new fi,Jh=[],ml=new R,$h=new R,XM=new R,WM=new $n,Qn=new R,Di=new R,Yi=new R,ji=new R;new R;new Nu;const Wv={faceList:[0]},Jc=new R,YM=new ta,jM=[],ZM=new R,KM=new R,QM=new R;new R;new R;const Yv=new R,JM=new R,$M=new R,tE=new R,eE=new R,nE=new R,iE=new R;new fi;const aE=[],sE=new Be,er=new R,$c=new R;function rE(c,t,n){n.vsub(c,er);const a=er.dot(t);return t.scale(a,$c),$c.vadd(c,$c),n.distanceTo($c)}class lo extends ux{static checkBounds(t,n,a){let r,o;a===0?(r=t.position.x,o=n.position.x):a===1?(r=t.position.y,o=n.position.y):a===2&&(r=t.position.z,o=n.position.z);const u=t.boundingRadius,f=n.boundingRadius,p=r+u;return o-f<p}static insertionSortX(t){for(let n=1,a=t.length;n<a;n++){const r=t[n];let o;for(o=n-1;o>=0&&!(t[o].aabb.lowerBound.x<=r.aabb.lowerBound.x);o--)t[o+1]=t[o];t[o+1]=r}return t}static insertionSortY(t){for(let n=1,a=t.length;n<a;n++){const r=t[n];let o;for(o=n-1;o>=0&&!(t[o].aabb.lowerBound.y<=r.aabb.lowerBound.y);o--)t[o+1]=t[o];t[o+1]=r}return t}static insertionSortZ(t){for(let n=1,a=t.length;n<a;n++){const r=t[n];let o;for(o=n-1;o>=0&&!(t[o].aabb.lowerBound.z<=r.aabb.lowerBound.z);o--)t[o+1]=t[o];t[o+1]=r}return t}constructor(t){super(),this.axisList=[],this.world=null,this.axisIndex=0;const n=this.axisList;this._addBodyHandler=a=>{n.push(a.body)},this._removeBodyHandler=a=>{const r=n.indexOf(a.body);r!==-1&&n.splice(r,1)},t&&this.setWorld(t)}setWorld(t){this.axisList.length=0;for(let n=0;n<t.bodies.length;n++)this.axisList.push(t.bodies[n]);t.removeEventListener("addBody",this._addBodyHandler),t.removeEventListener("removeBody",this._removeBodyHandler),t.addEventListener("addBody",this._addBodyHandler),t.addEventListener("removeBody",this._removeBodyHandler),this.world=t,this.dirty=!0}collisionPairs(t,n,a){const r=this.axisList,o=r.length,u=this.axisIndex;let f,p;for(this.dirty&&(this.sortList(),this.dirty=!1),f=0;f!==o;f++){const h=r[f];for(p=f+1;p<o;p++){const g=r[p];if(this.needBroadphaseCollision(h,g)){if(!lo.checkBounds(h,g,u))break;this.intersectionTest(h,g,n,a)}}}}sortList(){const t=this.axisList,n=this.axisIndex,a=t.length;for(let r=0;r!==a;r++){const o=t[r];o.aabbNeedsUpdate&&o.updateAABB()}n===0?lo.insertionSortX(t):n===1?lo.insertionSortY(t):n===2&&lo.insertionSortZ(t)}autoDetectAxis(){let t=0,n=0,a=0,r=0,o=0,u=0;const f=this.axisList,p=f.length,h=1/p;for(let y=0;y!==p;y++){const M=f[y],b=M.position.x;t+=b,n+=b*b;const S=M.position.y;a+=S,r+=S*S;const x=M.position.z;o+=x,u+=x*x}const g=n-t*t*h,_=r-a*a*h,v=u-o*o*h;g>_?g>v?this.axisIndex=0:this.axisIndex=2:_>v?this.axisIndex=1:this.axisIndex=2}aabbQuery(t,n,a){a===void 0&&(a=[]),this.dirty&&(this.sortList(),this.dirty=!1);const r=this.axisIndex;let o="x";r===1&&(o="y"),r===2&&(o="z");const u=this.axisList;n.lowerBound[o],n.upperBound[o];for(let f=0;f<u.length;f++){const p=u[f];p.aabbNeedsUpdate&&p.updateAABB(),p.aabb.overlaps(n)&&a.push(p)}return a}}class oE{static defaults(t,n){t===void 0&&(t={});for(let a in n)a in t||(t[a]=n[a]);return t}}class jv{constructor(){this.spatial=new R,this.rotational=new R}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,n){return t.dot(this.spatial)+n.dot(this.rotational)}}class zl{constructor(t,n,a,r){a===void 0&&(a=-1e6),r===void 0&&(r=1e6),this.id=zl.idCounter++,this.minForce=a,this.maxForce=r,this.bi=t,this.bj=n,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new jv,this.jacobianElementB=new jv,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,n,a){const r=n,o=t,u=a;this.a=4/(u*(1+4*r)),this.b=4*r/(1+4*r),this.eps=4/(u*u*o*(1+4*r))}computeB(t,n,a){const r=this.computeGW(),o=this.computeGq(),u=this.computeGiMf();return-o*t-r*n-u*a}computeGq(){const t=this.jacobianElementA,n=this.jacobianElementB,a=this.bi,r=this.bj,o=a.position,u=r.position;return t.spatial.dot(o)+n.spatial.dot(u)}computeGW(){const t=this.jacobianElementA,n=this.jacobianElementB,a=this.bi,r=this.bj,o=a.velocity,u=r.velocity,f=a.angularVelocity,p=r.angularVelocity;return t.multiplyVectors(o,f)+n.multiplyVectors(u,p)}computeGWlambda(){const t=this.jacobianElementA,n=this.jacobianElementB,a=this.bi,r=this.bj,o=a.vlambda,u=r.vlambda,f=a.wlambda,p=r.wlambda;return t.multiplyVectors(o,f)+n.multiplyVectors(u,p)}computeGiMf(){const t=this.jacobianElementA,n=this.jacobianElementB,a=this.bi,r=this.bj,o=a.force,u=a.torque,f=r.force,p=r.torque,h=a.invMassSolve,g=r.invMassSolve;return o.scale(h,Zv),f.scale(g,Kv),a.invInertiaWorldSolve.vmult(u,Qv),r.invInertiaWorldSolve.vmult(p,Jv),t.multiplyVectors(Zv,Qv)+n.multiplyVectors(Kv,Jv)}computeGiMGt(){const t=this.jacobianElementA,n=this.jacobianElementB,a=this.bi,r=this.bj,o=a.invMassSolve,u=r.invMassSolve,f=a.invInertiaWorldSolve,p=r.invInertiaWorldSolve;let h=o+u;return f.vmult(t.rotational,tu),h+=tu.dot(t.rotational),p.vmult(n.rotational,tu),h+=tu.dot(n.rotational),h}addToWlambda(t){const n=this.jacobianElementA,a=this.jacobianElementB,r=this.bi,o=this.bj,u=lE;r.vlambda.addScaledVector(r.invMassSolve*t,n.spatial,r.vlambda),o.vlambda.addScaledVector(o.invMassSolve*t,a.spatial,o.vlambda),r.invInertiaWorldSolve.vmult(n.rotational,u),r.wlambda.addScaledVector(t,u,r.wlambda),o.invInertiaWorldSolve.vmult(a.rotational,u),o.wlambda.addScaledVector(t,u,o.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}zl.idCounter=0;const Zv=new R,Kv=new R,Qv=new R,Jv=new R,tu=new R,lE=new R;class cE extends zl{constructor(t,n,a){a===void 0&&(a=1e6),super(t,n,0,a),this.restitution=0,this.ri=new R,this.rj=new R,this.ni=new R}computeB(t){const n=this.a,a=this.b,r=this.bi,o=this.bj,u=this.ri,f=this.rj,p=uE,h=fE,g=r.velocity,_=r.angularVelocity;r.force,r.torque;const v=o.velocity,y=o.angularVelocity;o.force,o.torque;const M=hE,b=this.jacobianElementA,S=this.jacobianElementB,x=this.ni;u.cross(x,p),f.cross(x,h),x.negate(b.spatial),p.negate(b.rotational),S.spatial.copy(x),S.rotational.copy(h),M.copy(o.position),M.vadd(f,M),M.vsub(r.position,M),M.vsub(u,M);const T=x.dot(M),C=this.restitution+1,L=C*v.dot(x)-C*g.dot(x)+y.dot(h)-_.dot(p),z=this.computeGiMf();return-T*n-L*a-t*z}getImpactVelocityAlongNormal(){const t=dE,n=pE,a=mE,r=gE,o=vE;return this.bi.position.vadd(this.ri,a),this.bj.position.vadd(this.rj,r),this.bi.getVelocityAtWorldPoint(a,t),this.bj.getVelocityAtWorldPoint(r,n),t.vsub(n,o),this.ni.dot(o)}}const uE=new R,fE=new R,hE=new R,dE=new R,pE=new R,mE=new R,gE=new R,vE=new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;class $v extends zl{constructor(t,n,a){super(t,n,-a,a),this.ri=new R,this.rj=new R,this.t=new R}computeB(t){this.a;const n=this.b;this.bi,this.bj;const a=this.ri,r=this.rj,o=_E,u=xE,f=this.t;a.cross(f,o),r.cross(f,u);const p=this.jacobianElementA,h=this.jacobianElementB;f.negate(p.spatial),o.negate(p.rotational),h.spatial.copy(f),h.rotational.copy(u);const g=this.computeGW(),_=this.computeGiMf();return-g*n-t*_}}const _E=new R,xE=new R;class fo{constructor(t,n,a){a=oE.defaults(a,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=fo.idCounter++,this.materials=[t,n],this.friction=a.friction,this.restitution=a.restitution,this.contactEquationStiffness=a.contactEquationStiffness,this.contactEquationRelaxation=a.contactEquationRelaxation,this.frictionEquationStiffness=a.frictionEquationStiffness,this.frictionEquationRelaxation=a.frictionEquationRelaxation}}fo.idCounter=0;let Uu=class _x{constructor(t){t===void 0&&(t={});let n="";typeof t=="string"&&(n=t,t={}),this.name=n,this.id=_x.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}};Uu.idCounter=0;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new ta;new R;new R;new R;new R(1,0,0),new R(0,1,0),new R(0,0,1);new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;let yE=class extends jt{constructor(){super({type:jt.types.PLANE}),this.worldNormal=new R,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(t){const n=this.worldNormal;n.set(0,0,1),t.vmult(n,n),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(t,n){return n===void 0&&(n=new R),n}volume(){return Number.MAX_VALUE}calculateWorldAABB(t,n,a,r){ba.set(0,0,1),n.vmult(ba,ba);const o=Number.MAX_VALUE;a.set(-o,-o,-o),r.set(o,o,o),ba.x===1?r.x=t.x:ba.x===-1&&(a.x=t.x),ba.y===1?r.y=t.y:ba.y===-1&&(a.y=t.y),ba.z===1?r.z=t.z:ba.z===-1&&(a.z=t.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}};const ba=new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new fi;new R;new fi;new R;new R;new R;new R;new R;new R;new R;new fi;new R;new Be;new fi;class SE{constructor(){this.equations=[]}solve(t,n){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const n=this.equations,a=n.indexOf(t);a!==-1&&n.splice(a,1)}removeAllEquations(){this.equations.length=0}}class ME extends SE{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,n){let a=0;const r=this.iterations,o=this.tolerance*this.tolerance,u=this.equations,f=u.length,p=n.bodies,h=p.length,g=t;let _,v,y,M,b,S;if(f!==0)for(let L=0;L!==h;L++)p[L].updateSolveMassProperties();const x=bE,T=TE,C=EE;x.length=f,T.length=f,C.length=f;for(let L=0;L!==f;L++){const z=u[L];C[L]=0,T[L]=z.computeB(g),x[L]=1/z.computeC()}if(f!==0){for(let B=0;B!==h;B++){const P=p[B],Y=P.vlambda,w=P.wlambda;Y.set(0,0,0),w.set(0,0,0)}for(a=0;a!==r;a++){M=0;for(let B=0;B!==f;B++){const P=u[B];_=T[B],v=x[B],S=C[B],b=P.computeGWlambda(),y=v*(_-b-P.eps*S),S+y<P.minForce?y=P.minForce-S:S+y>P.maxForce&&(y=P.maxForce-S),C[B]+=y,M+=y>0?y:-y,P.addToWlambda(y)}if(M*M<o)break}for(let B=0;B!==h;B++){const P=p[B],Y=P.velocity,w=P.angularVelocity;P.vlambda.vmul(P.linearFactor,P.vlambda),Y.vadd(P.vlambda,Y),P.wlambda.vmul(P.angularFactor,P.wlambda),w.vadd(P.wlambda,w)}let L=u.length;const z=1/g;for(;L--;)u[L].multiplier=C[L]*z}return a}}const EE=[],bE=[],TE=[];class AE{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let n=0;n!==t;n++)this.objects.push(n<0||arguments.length<=n?void 0:arguments[n]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const n=this.objects;for(;n.length>t;)n.pop();for(;n.length<t;)n.push(this.constructObject());return this}}class wE extends AE{constructor(){super(...arguments),this.type=R}constructObject(){return new R}}const en={sphereSphere:jt.types.SPHERE,spherePlane:jt.types.SPHERE|jt.types.PLANE,boxBox:jt.types.BOX|jt.types.BOX,sphereBox:jt.types.SPHERE|jt.types.BOX,planeBox:jt.types.PLANE|jt.types.BOX,convexConvex:jt.types.CONVEXPOLYHEDRON,sphereConvex:jt.types.SPHERE|jt.types.CONVEXPOLYHEDRON,planeConvex:jt.types.PLANE|jt.types.CONVEXPOLYHEDRON,boxConvex:jt.types.BOX|jt.types.CONVEXPOLYHEDRON,sphereHeightfield:jt.types.SPHERE|jt.types.HEIGHTFIELD,boxHeightfield:jt.types.BOX|jt.types.HEIGHTFIELD,convexHeightfield:jt.types.CONVEXPOLYHEDRON|jt.types.HEIGHTFIELD,sphereParticle:jt.types.PARTICLE|jt.types.SPHERE,planeParticle:jt.types.PLANE|jt.types.PARTICLE,boxParticle:jt.types.BOX|jt.types.PARTICLE,convexParticle:jt.types.PARTICLE|jt.types.CONVEXPOLYHEDRON,cylinderCylinder:jt.types.CYLINDER,sphereCylinder:jt.types.SPHERE|jt.types.CYLINDER,planeCylinder:jt.types.PLANE|jt.types.CYLINDER,boxCylinder:jt.types.BOX|jt.types.CYLINDER,convexCylinder:jt.types.CONVEXPOLYHEDRON|jt.types.CYLINDER,heightfieldCylinder:jt.types.HEIGHTFIELD|jt.types.CYLINDER,particleCylinder:jt.types.PARTICLE|jt.types.CYLINDER,sphereTrimesh:jt.types.SPHERE|jt.types.TRIMESH,planeTrimesh:jt.types.PLANE|jt.types.TRIMESH};class RE{get[en.sphereSphere](){return this.sphereSphere}get[en.spherePlane](){return this.spherePlane}get[en.boxBox](){return this.boxBox}get[en.sphereBox](){return this.sphereBox}get[en.planeBox](){return this.planeBox}get[en.convexConvex](){return this.convexConvex}get[en.sphereConvex](){return this.sphereConvex}get[en.planeConvex](){return this.planeConvex}get[en.boxConvex](){return this.boxConvex}get[en.sphereHeightfield](){return this.sphereHeightfield}get[en.boxHeightfield](){return this.boxHeightfield}get[en.convexHeightfield](){return this.convexHeightfield}get[en.sphereParticle](){return this.sphereParticle}get[en.planeParticle](){return this.planeParticle}get[en.boxParticle](){return this.boxParticle}get[en.convexParticle](){return this.convexParticle}get[en.cylinderCylinder](){return this.convexConvex}get[en.sphereCylinder](){return this.sphereConvex}get[en.planeCylinder](){return this.planeConvex}get[en.boxCylinder](){return this.boxConvex}get[en.convexCylinder](){return this.convexConvex}get[en.heightfieldCylinder](){return this.heightfieldCylinder}get[en.particleCylinder](){return this.particleCylinder}get[en.sphereTrimesh](){return this.sphereTrimesh}get[en.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new wE,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,n,a,r,o,u){let f;this.contactPointPool.length?(f=this.contactPointPool.pop(),f.bi=t,f.bj=n):f=new cE(t,n),f.enabled=t.collisionResponse&&n.collisionResponse&&a.collisionResponse&&r.collisionResponse;const p=this.currentContactMaterial;f.restitution=p.restitution,f.setSpookParams(p.contactEquationStiffness,p.contactEquationRelaxation,this.world.dt);const h=a.material||t.material,g=r.material||n.material;return h&&g&&h.restitution>=0&&g.restitution>=0&&(f.restitution=h.restitution*g.restitution),f.si=o||a,f.sj=u||r,f}createFrictionEquationsFromContact(t,n){const a=t.bi,r=t.bj,o=t.si,u=t.sj,f=this.world,p=this.currentContactMaterial;let h=p.friction;const g=o.material||a.material,_=u.material||r.material;if(g&&_&&g.friction>=0&&_.friction>=0&&(h=g.friction*_.friction),h>0){const v=h*(f.frictionGravity||f.gravity).length();let y=a.invMass+r.invMass;y>0&&(y=1/y);const M=this.frictionEquationPool,b=M.length?M.pop():new $v(a,r,v*y),S=M.length?M.pop():new $v(a,r,v*y);return b.bi=S.bi=a,b.bj=S.bj=r,b.minForce=S.minForce=-v*y,b.maxForce=S.maxForce=v*y,b.ri.copy(t.ri),b.rj.copy(t.rj),S.ri.copy(t.ri),S.rj.copy(t.rj),t.ni.tangents(b.t,S.t),b.setSpookParams(p.frictionEquationStiffness,p.frictionEquationRelaxation,f.dt),S.setSpookParams(p.frictionEquationStiffness,p.frictionEquationRelaxation,f.dt),b.enabled=S.enabled=t.enabled,n.push(b,S),!0}return!1}createFrictionFromAverage(t){let n=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(n,this.frictionResult)||t===1)return;const a=this.frictionResult[this.frictionResult.length-2],r=this.frictionResult[this.frictionResult.length-1];Xs.setZero(),qr.setZero(),Xr.setZero();const o=n.bi;n.bj;for(let f=0;f!==t;f++)n=this.result[this.result.length-1-f],n.bi!==o?(Xs.vadd(n.ni,Xs),qr.vadd(n.ri,qr),Xr.vadd(n.rj,Xr)):(Xs.vsub(n.ni,Xs),qr.vadd(n.rj,qr),Xr.vadd(n.ri,Xr));const u=1/t;qr.scale(u,a.ri),Xr.scale(u,a.rj),r.ri.copy(a.ri),r.rj.copy(a.rj),Xs.normalize(),Xs.tangents(a.t,r.t)}getContacts(t,n,a,r,o,u,f){this.contactPointPool=o,this.frictionEquationPool=f,this.result=r,this.frictionResult=u;const p=NE,h=UE,g=CE,_=DE;for(let v=0,y=t.length;v!==y;v++){const M=t[v],b=n[v];let S=null;M.material&&b.material&&(S=a.getContactMaterial(M.material,b.material)||null);const x=M.type&Gt.KINEMATIC&&b.type&Gt.STATIC||M.type&Gt.STATIC&&b.type&Gt.KINEMATIC||M.type&Gt.KINEMATIC&&b.type&Gt.KINEMATIC;for(let T=0;T<M.shapes.length;T++){M.quaternion.mult(M.shapeOrientations[T],p),M.quaternion.vmult(M.shapeOffsets[T],g),g.vadd(M.position,g);const C=M.shapes[T];for(let L=0;L<b.shapes.length;L++){b.quaternion.mult(b.shapeOrientations[L],h),b.quaternion.vmult(b.shapeOffsets[L],_),_.vadd(b.position,_);const z=b.shapes[L];if(!(C.collisionFilterMask&z.collisionFilterGroup&&z.collisionFilterMask&C.collisionFilterGroup)||g.distanceTo(_)>C.boundingSphereRadius+z.boundingSphereRadius)continue;let B=null;C.material&&z.material&&(B=a.getContactMaterial(C.material,z.material)||null),this.currentContactMaterial=B||S||a.defaultContactMaterial;const P=C.type|z.type,Y=this[P];if(Y){let w=!1;C.type<z.type?w=Y.call(this,C,z,g,_,p,h,M,b,C,z,x):w=Y.call(this,z,C,_,g,h,p,b,M,C,z,x),w&&x&&(a.shapeOverlapKeeper.set(C.id,z.id),a.bodyOverlapKeeper.set(M.id,b.id))}}}}}sphereSphere(t,n,a,r,o,u,f,p,h,g,_){if(_)return a.distanceSquared(r)<(t.radius+n.radius)**2;const v=this.createContactEquation(f,p,t,n,h,g);r.vsub(a,v.ni),v.ni.normalize(),v.ri.copy(v.ni),v.rj.copy(v.ni),v.ri.scale(t.radius,v.ri),v.rj.scale(-n.radius,v.rj),v.ri.vadd(a,v.ri),v.ri.vsub(f.position,v.ri),v.rj.vadd(r,v.rj),v.rj.vsub(p.position,v.rj),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}spherePlane(t,n,a,r,o,u,f,p,h,g,_){const v=this.createContactEquation(f,p,t,n,h,g);if(v.ni.set(0,0,1),u.vmult(v.ni,v.ni),v.ni.negate(v.ni),v.ni.normalize(),v.ni.scale(t.radius,v.ri),a.vsub(r,eu),v.ni.scale(v.ni.dot(eu),t_),eu.vsub(t_,v.rj),-eu.dot(v.ni)<=t.radius){if(_)return!0;const y=v.ri,M=v.rj;y.vadd(a,y),y.vsub(f.position,y),M.vadd(r,M),M.vsub(p.position,M),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}boxBox(t,n,a,r,o,u,f,p,h,g,_){return t.convexPolyhedronRepresentation.material=t.material,n.convexPolyhedronRepresentation.material=n.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,n.convexPolyhedronRepresentation.collisionResponse=n.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,n.convexPolyhedronRepresentation,a,r,o,u,f,p,t,n,_)}sphereBox(t,n,a,r,o,u,f,p,h,g,_){const v=this.v3pool,y=ab;a.vsub(r,nu),n.getSideNormals(y,u);const M=t.radius;let b=!1;const S=rb,x=ob,T=lb;let C=null,L=0,z=0,B=0,P=null;for(let D=0,H=y.length;D!==H&&b===!1;D++){const Q=eb;Q.copy(y[D]);const ft=Q.length();Q.normalize();const mt=nu.dot(Q);if(mt<ft+M&&mt>0){const F=nb,Z=ib;F.copy(y[(D+1)%3]),Z.copy(y[(D+2)%3]);const _t=F.length(),Tt=Z.length();F.normalize(),Z.normalize();const Ft=nu.dot(F),nt=nu.dot(Z);if(Ft<_t&&Ft>-_t&&nt<Tt&&nt>-Tt){const pt=Math.abs(mt-ft-M);if((P===null||pt<P)&&(P=pt,z=Ft,B=nt,C=ft,S.copy(Q),x.copy(F),T.copy(Z),L++,_))return!0}}}if(L){b=!0;const D=this.createContactEquation(f,p,t,n,h,g);S.scale(-M,D.ri),D.ni.copy(S),D.ni.negate(D.ni),S.scale(C,S),x.scale(z,x),S.vadd(x,S),T.scale(B,T),S.vadd(T,D.rj),D.ri.vadd(a,D.ri),D.ri.vsub(f.position,D.ri),D.rj.vadd(r,D.rj),D.rj.vsub(p.position,D.rj),this.result.push(D),this.createFrictionEquationsFromContact(D,this.frictionResult)}let Y=v.get();const w=sb;for(let D=0;D!==2&&!b;D++)for(let H=0;H!==2&&!b;H++)for(let Q=0;Q!==2&&!b;Q++)if(Y.set(0,0,0),D?Y.vadd(y[0],Y):Y.vsub(y[0],Y),H?Y.vadd(y[1],Y):Y.vsub(y[1],Y),Q?Y.vadd(y[2],Y):Y.vsub(y[2],Y),r.vadd(Y,w),w.vsub(a,w),w.lengthSquared()<M*M){if(_)return!0;b=!0;const ft=this.createContactEquation(f,p,t,n,h,g);ft.ri.copy(w),ft.ri.normalize(),ft.ni.copy(ft.ri),ft.ri.scale(M,ft.ri),ft.rj.copy(Y),ft.ri.vadd(a,ft.ri),ft.ri.vsub(f.position,ft.ri),ft.rj.vadd(r,ft.rj),ft.rj.vsub(p.position,ft.rj),this.result.push(ft),this.createFrictionEquationsFromContact(ft,this.frictionResult)}v.release(Y),Y=null;const O=v.get(),G=v.get(),$=v.get(),V=v.get(),j=v.get(),X=y.length;for(let D=0;D!==X&&!b;D++)for(let H=0;H!==X&&!b;H++)if(D%3!==H%3){y[H].cross(y[D],O),O.normalize(),y[D].vadd(y[H],G),$.copy(a),$.vsub(G,$),$.vsub(r,$);const Q=$.dot(O);O.scale(Q,V);let ft=0;for(;ft===D%3||ft===H%3;)ft++;j.copy(a),j.vsub(V,j),j.vsub(G,j),j.vsub(r,j);const mt=Math.abs(Q),F=j.length();if(mt<y[ft].length()&&F<M){if(_)return!0;b=!0;const Z=this.createContactEquation(f,p,t,n,h,g);G.vadd(V,Z.rj),Z.rj.copy(Z.rj),j.negate(Z.ni),Z.ni.normalize(),Z.ri.copy(Z.rj),Z.ri.vadd(r,Z.ri),Z.ri.vsub(a,Z.ri),Z.ri.normalize(),Z.ri.scale(M,Z.ri),Z.ri.vadd(a,Z.ri),Z.ri.vsub(f.position,Z.ri),Z.rj.vadd(r,Z.rj),Z.rj.vsub(p.position,Z.rj),this.result.push(Z),this.createFrictionEquationsFromContact(Z,this.frictionResult)}}v.release(O,G,$,V,j)}planeBox(t,n,a,r,o,u,f,p,h,g,_){return n.convexPolyhedronRepresentation.material=n.material,n.convexPolyhedronRepresentation.collisionResponse=n.collisionResponse,n.convexPolyhedronRepresentation.id=n.id,this.planeConvex(t,n.convexPolyhedronRepresentation,a,r,o,u,f,p,t,n,_)}convexConvex(t,n,a,r,o,u,f,p,h,g,_,v,y){const M=Eb;if(!(a.distanceTo(r)>t.boundingSphereRadius+n.boundingSphereRadius)&&t.findSeparatingAxis(n,a,o,r,u,M,v,y)){const b=[],S=bb;t.clipAgainstHull(a,o,n,r,u,M,-100,100,b);let x=0;for(let T=0;T!==b.length;T++){if(_)return!0;const C=this.createContactEquation(f,p,t,n,h,g),L=C.ri,z=C.rj;M.negate(C.ni),b[T].normal.negate(S),S.scale(b[T].depth,S),b[T].point.vadd(S,L),z.copy(b[T].point),L.vsub(a,L),z.vsub(r,z),L.vadd(a,L),L.vsub(f.position,L),z.vadd(r,z),z.vsub(p.position,z),this.result.push(C),x++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(C,this.frictionResult)}this.enableFrictionReduction&&x&&this.createFrictionFromAverage(x)}}sphereConvex(t,n,a,r,o,u,f,p,h,g,_){const v=this.v3pool;a.vsub(r,cb);const y=n.faceNormals,M=n.faces,b=n.vertices,S=t.radius;let x=!1;for(let T=0;T!==b.length;T++){const C=b[T],L=db;u.vmult(C,L),r.vadd(L,L);const z=hb;if(L.vsub(a,z),z.lengthSquared()<S*S){if(_)return!0;x=!0;const B=this.createContactEquation(f,p,t,n,h,g);B.ri.copy(z),B.ri.normalize(),B.ni.copy(B.ri),B.ri.scale(S,B.ri),L.vsub(r,B.rj),B.ri.vadd(a,B.ri),B.ri.vsub(f.position,B.ri),B.rj.vadd(r,B.rj),B.rj.vsub(p.position,B.rj),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult);return}}for(let T=0,C=M.length;T!==C&&x===!1;T++){const L=y[T],z=M[T],B=pb;u.vmult(L,B);const P=mb;u.vmult(b[z[0]],P),P.vadd(r,P);const Y=gb;B.scale(-S,Y),a.vadd(Y,Y);const w=vb;Y.vsub(P,w);const O=w.dot(B),G=_b;if(a.vsub(P,G),O<0&&G.dot(B)>0){const $=[];for(let V=0,j=z.length;V!==j;V++){const X=v.get();u.vmult(b[z[V]],X),r.vadd(X,X),$.push(X)}if(tb($,B,a)){if(_)return!0;x=!0;const V=this.createContactEquation(f,p,t,n,h,g);B.scale(-S,V.ri),B.negate(V.ni);const j=v.get();B.scale(-O,j);const X=v.get();B.scale(-S,X),a.vsub(r,V.rj),V.rj.vadd(X,V.rj),V.rj.vadd(j,V.rj),V.rj.vadd(r,V.rj),V.rj.vsub(p.position,V.rj),V.ri.vadd(a,V.ri),V.ri.vsub(f.position,V.ri),v.release(j),v.release(X),this.result.push(V),this.createFrictionEquationsFromContact(V,this.frictionResult);for(let D=0,H=$.length;D!==H;D++)v.release($[D]);return}else for(let V=0;V!==z.length;V++){const j=v.get(),X=v.get();u.vmult(b[z[(V+1)%z.length]],j),u.vmult(b[z[(V+2)%z.length]],X),r.vadd(j,j),r.vadd(X,X);const D=ub;X.vsub(j,D);const H=fb;D.unit(H);const Q=v.get(),ft=v.get();a.vsub(j,ft);const mt=ft.dot(H);H.scale(mt,Q),Q.vadd(j,Q);const F=v.get();if(Q.vsub(a,F),mt>0&&mt*mt<D.lengthSquared()&&F.lengthSquared()<S*S){if(_)return!0;const Z=this.createContactEquation(f,p,t,n,h,g);Q.vsub(r,Z.rj),Q.vsub(a,Z.ni),Z.ni.normalize(),Z.ni.scale(S,Z.ri),Z.rj.vadd(r,Z.rj),Z.rj.vsub(p.position,Z.rj),Z.ri.vadd(a,Z.ri),Z.ri.vsub(f.position,Z.ri),this.result.push(Z),this.createFrictionEquationsFromContact(Z,this.frictionResult);for(let _t=0,Tt=$.length;_t!==Tt;_t++)v.release($[_t]);v.release(j),v.release(X),v.release(Q),v.release(F),v.release(ft);return}v.release(j),v.release(X),v.release(Q),v.release(F),v.release(ft)}for(let V=0,j=$.length;V!==j;V++)v.release($[V])}}}planeConvex(t,n,a,r,o,u,f,p,h,g,_){const v=xb,y=yb;y.set(0,0,1),o.vmult(y,y);let M=0;const b=Sb;for(let S=0;S!==n.vertices.length;S++)if(v.copy(n.vertices[S]),u.vmult(v,v),r.vadd(v,v),v.vsub(a,b),y.dot(b)<=0){if(_)return!0;const T=this.createContactEquation(f,p,t,n,h,g),C=Mb;y.scale(y.dot(b),C),v.vsub(C,C),C.vsub(a,T.ri),T.ni.copy(y),v.vsub(r,T.rj),T.ri.vadd(a,T.ri),T.ri.vsub(f.position,T.ri),T.rj.vadd(r,T.rj),T.rj.vsub(p.position,T.rj),this.result.push(T),M++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(T,this.frictionResult)}this.enableFrictionReduction&&M&&this.createFrictionFromAverage(M)}boxConvex(t,n,a,r,o,u,f,p,h,g,_){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,n,a,r,o,u,f,p,t,n,_)}sphereHeightfield(t,n,a,r,o,u,f,p,h,g,_){const v=n.data,y=t.radius,M=n.elementSize,b=Pb,S=zb;Be.pointToLocalFrame(r,u,a,S);let x=Math.floor((S.x-y)/M)-1,T=Math.ceil((S.x+y)/M)+1,C=Math.floor((S.y-y)/M)-1,L=Math.ceil((S.y+y)/M)+1;if(T<0||L<0||x>v.length||C>v[0].length)return;x<0&&(x=0),T<0&&(T=0),C<0&&(C=0),L<0&&(L=0),x>=v.length&&(x=v.length-1),T>=v.length&&(T=v.length-1),L>=v[0].length&&(L=v[0].length-1),C>=v[0].length&&(C=v[0].length-1);const z=[];n.getRectMinMax(x,C,T,L,z);const B=z[0],P=z[1];if(S.z-y>P||S.z+y<B)return;const Y=this.result;for(let w=x;w<T;w++)for(let O=C;O<L;O++){const G=Y.length;let $=!1;if(n.getConvexTrianglePillar(w,O,!1),Be.pointToWorldFrame(r,u,n.pillarOffset,b),a.distanceTo(b)<n.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&($=this.sphereConvex(t,n.pillarConvex,a,b,o,u,f,p,t,n,_)),_&&$||(n.getConvexTrianglePillar(w,O,!0),Be.pointToWorldFrame(r,u,n.pillarOffset,b),a.distanceTo(b)<n.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&($=this.sphereConvex(t,n.pillarConvex,a,b,o,u,f,p,t,n,_)),_&&$))return!0;if(Y.length-G>2)return}}boxHeightfield(t,n,a,r,o,u,f,p,h,g,_){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,n,a,r,o,u,f,p,t,n,_)}convexHeightfield(t,n,a,r,o,u,f,p,h,g,_){const v=n.data,y=n.elementSize,M=t.boundingSphereRadius,b=Lb,S=Ob,x=Ub;Be.pointToLocalFrame(r,u,a,x);let T=Math.floor((x.x-M)/y)-1,C=Math.ceil((x.x+M)/y)+1,L=Math.floor((x.y-M)/y)-1,z=Math.ceil((x.y+M)/y)+1;if(C<0||z<0||T>v.length||L>v[0].length)return;T<0&&(T=0),C<0&&(C=0),L<0&&(L=0),z<0&&(z=0),T>=v.length&&(T=v.length-1),C>=v.length&&(C=v.length-1),z>=v[0].length&&(z=v[0].length-1),L>=v[0].length&&(L=v[0].length-1);const B=[];n.getRectMinMax(T,L,C,z,B);const P=B[0],Y=B[1];if(!(x.z-M>Y||x.z+M<P))for(let w=T;w<C;w++)for(let O=L;O<z;O++){let G=!1;if(n.getConvexTrianglePillar(w,O,!1),Be.pointToWorldFrame(r,u,n.pillarOffset,b),a.distanceTo(b)<n.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(G=this.convexConvex(t,n.pillarConvex,a,b,o,u,f,p,null,null,_,S,null)),_&&G||(n.getConvexTrianglePillar(w,O,!0),Be.pointToWorldFrame(r,u,n.pillarOffset,b),a.distanceTo(b)<n.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(G=this.convexConvex(t,n.pillarConvex,a,b,o,u,f,p,null,null,_,S,null)),_&&G))return!0}}sphereParticle(t,n,a,r,o,u,f,p,h,g,_){const v=Rb;if(v.set(0,0,1),r.vsub(a,v),v.lengthSquared()<=t.radius*t.radius){if(_)return!0;const M=this.createContactEquation(p,f,n,t,h,g);v.normalize(),M.rj.copy(v),M.rj.scale(t.radius,M.rj),M.ni.copy(v),M.ni.negate(M.ni),M.ri.set(0,0,0),this.result.push(M),this.createFrictionEquationsFromContact(M,this.frictionResult)}}planeParticle(t,n,a,r,o,u,f,p,h,g,_){const v=Tb;v.set(0,0,1),f.quaternion.vmult(v,v);const y=Ab;if(r.vsub(f.position,y),v.dot(y)<=0){if(_)return!0;const b=this.createContactEquation(p,f,n,t,h,g);b.ni.copy(v),b.ni.negate(b.ni),b.ri.set(0,0,0);const S=wb;v.scale(v.dot(r),S),r.vsub(S,S),b.rj.copy(S),this.result.push(b),this.createFrictionEquationsFromContact(b,this.frictionResult)}}boxParticle(t,n,a,r,o,u,f,p,h,g,_){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,n,a,r,o,u,f,p,t,n,_)}convexParticle(t,n,a,r,o,u,f,p,h,g,_){let v=-1;const y=Db,M=Nb;let b=null;const S=Cb;if(S.copy(r),S.vsub(a,S),o.conjugate(e_),e_.vmult(S,S),t.pointIsInside(S)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(a,o),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(o);for(let x=0,T=t.faces.length;x!==T;x++){const C=[t.worldVertices[t.faces[x][0]]],L=t.worldFaceNormals[x];r.vsub(C[0],n_);const z=-L.dot(n_);if(b===null||Math.abs(z)<Math.abs(b)){if(_)return!0;b=z,v=x,y.copy(L)}}if(v!==-1){const x=this.createContactEquation(p,f,n,t,h,g);y.scale(b,M),M.vadd(r,M),M.vsub(a,M),x.rj.copy(M),y.negate(x.ni),x.ri.set(0,0,0);const T=x.ri,C=x.rj;T.vadd(r,T),T.vsub(p.position,T),C.vadd(a,C),C.vsub(f.position,C),this.result.push(x),this.createFrictionEquationsFromContact(x,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,n,a,r,o,u,f,p,h,g,_){return this.convexHeightfield(n,t,r,a,u,o,p,f,h,g,_)}particleCylinder(t,n,a,r,o,u,f,p,h,g,_){return this.convexParticle(n,t,r,a,u,o,p,f,h,g,_)}sphereTrimesh(t,n,a,r,o,u,f,p,h,g,_){const v=HE,y=GE,M=VE,b=kE,S=qE,x=XE,T=ZE,C=IE,L=BE,z=KE;Be.pointToLocalFrame(r,u,a,S);const B=t.radius;T.lowerBound.set(S.x-B,S.y-B,S.z-B),T.upperBound.set(S.x+B,S.y+B,S.z+B),n.getTrianglesInAABB(T,z);const P=FE,Y=t.radius*t.radius;for(let V=0;V<z.length;V++)for(let j=0;j<3;j++)if(n.getVertex(n.indices[z[V]*3+j],P),P.vsub(S,L),L.lengthSquared()<=Y){if(C.copy(P),Be.pointToWorldFrame(r,u,C,P),P.vsub(a,L),_)return!0;let X=this.createContactEquation(f,p,t,n,h,g);X.ni.copy(L),X.ni.normalize(),X.ri.copy(X.ni),X.ri.scale(t.radius,X.ri),X.ri.vadd(a,X.ri),X.ri.vsub(f.position,X.ri),X.rj.copy(P),X.rj.vsub(p.position,X.rj),this.result.push(X),this.createFrictionEquationsFromContact(X,this.frictionResult)}for(let V=0;V<z.length;V++)for(let j=0;j<3;j++){n.getVertex(n.indices[z[V]*3+j],v),n.getVertex(n.indices[z[V]*3+(j+1)%3],y),y.vsub(v,M),S.vsub(y,x);const X=x.dot(M);S.vsub(v,x);let D=x.dot(M);if(D>0&&X<0&&(S.vsub(v,x),b.copy(M),b.normalize(),D=x.dot(b),b.scale(D,x),x.vadd(v,x),x.distanceTo(S)<t.radius)){if(_)return!0;const Q=this.createContactEquation(f,p,t,n,h,g);x.vsub(S,Q.ni),Q.ni.normalize(),Q.ni.scale(t.radius,Q.ri),Q.ri.vadd(a,Q.ri),Q.ri.vsub(f.position,Q.ri),Be.pointToWorldFrame(r,u,x,x),x.vsub(p.position,Q.rj),Be.vectorToWorldFrame(u,Q.ni,Q.ni),Be.vectorToWorldFrame(u,Q.ri,Q.ri),this.result.push(Q),this.createFrictionEquationsFromContact(Q,this.frictionResult)}}const w=WE,O=YE,G=jE,$=PE;for(let V=0,j=z.length;V!==j;V++){n.getTriangleVertices(z[V],w,O,G),n.getNormal(z[V],$),S.vsub(w,x);let X=x.dot($);if($.scale(X,x),S.vsub(x,x),X=x.distanceTo(S),ta.pointInTriangle(x,w,O,G)&&X<t.radius){if(_)return!0;let D=this.createContactEquation(f,p,t,n,h,g);x.vsub(S,D.ni),D.ni.normalize(),D.ni.scale(t.radius,D.ri),D.ri.vadd(a,D.ri),D.ri.vsub(f.position,D.ri),Be.pointToWorldFrame(r,u,x,x),x.vsub(p.position,D.rj),Be.vectorToWorldFrame(u,D.ni,D.ni),Be.vectorToWorldFrame(u,D.ri,D.ri),this.result.push(D),this.createFrictionEquationsFromContact(D,this.frictionResult)}}z.length=0}planeTrimesh(t,n,a,r,o,u,f,p,h,g,_){const v=new R,y=LE;y.set(0,0,1),o.vmult(y,y);for(let M=0;M<n.vertices.length/3;M++){n.getVertex(M,v);const b=new R;b.copy(v),Be.pointToWorldFrame(r,u,b,v);const S=OE;if(v.vsub(a,S),y.dot(S)<=0){if(_)return!0;const T=this.createContactEquation(f,p,t,n,h,g);T.ni.copy(y);const C=zE;y.scale(S.dot(y),C),v.vsub(C,C),T.ri.copy(C),T.ri.vsub(f.position,T.ri),T.rj.copy(v),T.rj.vsub(p.position,T.rj),this.result.push(T),this.createFrictionEquationsFromContact(T,this.frictionResult)}}}}const Xs=new R,qr=new R,Xr=new R,CE=new R,DE=new R,NE=new $n,UE=new $n,LE=new R,OE=new R,zE=new R,PE=new R,BE=new R;new R;const FE=new R,IE=new R,HE=new R,GE=new R,VE=new R,kE=new R,qE=new R,XE=new R,WE=new R,YE=new R,jE=new R,ZE=new fi,KE=[],eu=new R,t_=new R,QE=new R,JE=new R,$E=new R;function tb(c,t,n){let a=null;const r=c.length;for(let o=0;o!==r;o++){const u=c[o],f=QE;c[(o+1)%r].vsub(u,f);const p=JE;f.cross(t,p);const h=$E;n.vsub(u,h);const g=p.dot(h);if(a===null||g>0&&a===!0||g<=0&&a===!1){a===null&&(a=g>0);continue}else return!1}return!0}const nu=new R,eb=new R,nb=new R,ib=new R,ab=[new R,new R,new R,new R,new R,new R],sb=new R,rb=new R,ob=new R,lb=new R,cb=new R,ub=new R,fb=new R,hb=new R,db=new R,pb=new R,mb=new R,gb=new R,vb=new R,_b=new R;new R;new R;const xb=new R,yb=new R,Sb=new R,Mb=new R,Eb=new R,bb=new R,Tb=new R,Ab=new R,wb=new R,Rb=new R,e_=new $n,Cb=new R;new R;const Db=new R,n_=new R,Nb=new R,Ub=new R,Lb=new R,Ob=[0],zb=new R,Pb=new R;class i_{constructor(){this.current=[],this.previous=[]}getKey(t,n){if(n<t){const a=n;n=t,t=a}return t<<16|n}set(t,n){const a=this.getKey(t,n),r=this.current;let o=0;for(;a>r[o];)o++;if(a!==r[o]){for(let u=r.length-1;u>=o;u--)r[u+1]=r[u];r[o]=a}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,n){const a=this.current,r=this.previous,o=a.length,u=r.length;let f=0;for(let p=0;p<o;p++){let h=!1;const g=a[p];for(;g>r[f];)f++;h=g===r[f],h||a_(t,g)}f=0;for(let p=0;p<u;p++){let h=!1;const g=r[p];for(;g>a[f];)f++;h=a[f]===g,h||a_(n,g)}}}function a_(c,t){c.push((t&4294901760)>>16,t&65535)}const td=(c,t)=>c<t?`${c}-${t}`:`${t}-${c}`;class Bb{constructor(){this.data={keys:[]}}get(t,n){const a=td(t,n);return this.data[a]}set(t,n,a){const r=td(t,n);this.get(t,n)||this.data.keys.push(r),this.data[r]=a}delete(t,n){const a=td(t,n),r=this.data.keys.indexOf(a);r!==-1&&this.data.keys.splice(r,1),delete this.data[a]}reset(){const t=this.data,n=t.keys;for(;n.length>0;){const a=n.pop();delete t[a]}}}class Fb extends cx{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new R,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new R,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new qM,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new ME,this.constraints=[],this.narrowphase=new RE(this),this.collisionMatrix=new kv,this.collisionMatrixPrevious=new kv,this.bodyOverlapKeeper=new i_,this.shapeOverlapKeeper=new i_,this.contactmaterials=[],this.contactMaterialTable=new Bb,this.defaultMaterial=new Uu("default"),this.defaultContactMaterial=new fo(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,n){return this.contactMaterialTable.get(t.id,n.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const n=this.constraints.indexOf(t);n!==-1&&this.constraints.splice(n,1)}rayTest(t,n,a){a instanceof Nu?this.raycastClosest(t,n,{skipBackfaces:!0},a):this.raycastAll(t,n,{skipBackfaces:!0},a)}raycastAll(t,n,a,r){return a===void 0&&(a={}),a.mode=ta.ALL,a.from=t,a.to=n,a.callback=r,ed.intersectWorld(this,a)}raycastAny(t,n,a,r){return a===void 0&&(a={}),a.mode=ta.ANY,a.from=t,a.to=n,a.result=r,ed.intersectWorld(this,a)}raycastClosest(t,n,a,r){return a===void 0&&(a={}),a.mode=ta.CLOSEST,a.from=t,a.to=n,a.result=r,ed.intersectWorld(this,a)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof Gt&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const n=this.bodies.length-1,a=this.bodies,r=a.indexOf(t);if(r!==-1){a.splice(r,1);for(let o=0;o!==a.length;o++)a[o].index=o;this.collisionMatrix.setNumObjects(n),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const n=this.bodies;for(let a=0;a<n.length;a++){const r=n[a].shapes;for(let o=0;o<r.length;o++){const u=r[o];if(u.id===t)return u}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const n=this.contactmaterials.indexOf(t);n!==-1&&(this.contactmaterials.splice(n,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,n){t===void 0&&(t=1/60),n===void 0&&(n=10);const a=xn.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,n);else{const r=a-this.lastCallTime;this.step(t,r,n)}this.lastCallTime=a}step(t,n,a){if(a===void 0&&(a=10),n===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=n;const r=xn.now();let o=0;for(;this.accumulator>=t&&o<a&&(this.internalStep(t),this.accumulator-=t,o++,!(xn.now()-r>t*1e3)););this.accumulator=this.accumulator%t;const u=this.accumulator/t;for(let f=0;f!==this.bodies.length;f++){const p=this.bodies[f];p.previousPosition.lerp(p.position,u,p.interpolatedPosition),p.previousQuaternion.slerp(p.quaternion,u,p.interpolatedQuaternion),p.previousQuaternion.normalize()}this.time+=n}}internalStep(t){this.dt=t;const n=this.contacts,a=kb,r=qb,o=this.bodies.length,u=this.bodies,f=this.solver,p=this.gravity,h=this.doProfiling,g=this.profile,_=Gt.DYNAMIC;let v=-1/0;const y=this.constraints,M=Vb;p.length();const b=p.x,S=p.y,x=p.z;let T=0;for(h&&(v=xn.now()),T=0;T!==o;T++){const V=u[T];if(V.type===_){const j=V.force,X=V.mass;j.x+=X*b,j.y+=X*S,j.z+=X*x}}for(let V=0,j=this.subsystems.length;V!==j;V++)this.subsystems[V].update();h&&(v=xn.now()),a.length=0,r.length=0,this.broadphase.collisionPairs(this,a,r),h&&(g.broadphase=xn.now()-v);let C=y.length;for(T=0;T!==C;T++){const V=y[T];if(!V.collideConnected)for(let j=a.length-1;j>=0;j-=1)(V.bodyA===a[j]&&V.bodyB===r[j]||V.bodyB===a[j]&&V.bodyA===r[j])&&(a.splice(j,1),r.splice(j,1))}this.collisionMatrixTick(),h&&(v=xn.now());const L=Gb,z=n.length;for(T=0;T!==z;T++)L.push(n[T]);n.length=0;const B=this.frictionEquations.length;for(T=0;T!==B;T++)M.push(this.frictionEquations[T]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(a,r,this,n,L,this.frictionEquations,M),h&&(g.narrowphase=xn.now()-v),h&&(v=xn.now()),T=0;T<this.frictionEquations.length;T++)f.addEquation(this.frictionEquations[T]);const P=n.length;for(let V=0;V!==P;V++){const j=n[V],X=j.bi,D=j.bj,H=j.si,Q=j.sj;let ft;if(X.material&&D.material?ft=this.getContactMaterial(X.material,D.material)||this.defaultContactMaterial:ft=this.defaultContactMaterial,ft.friction,X.material&&D.material&&(X.material.friction>=0&&D.material.friction>=0&&X.material.friction*D.material.friction,X.material.restitution>=0&&D.material.restitution>=0&&(j.restitution=X.material.restitution*D.material.restitution)),f.addEquation(j),X.allowSleep&&X.type===Gt.DYNAMIC&&X.sleepState===Gt.SLEEPING&&D.sleepState===Gt.AWAKE&&D.type!==Gt.STATIC){const mt=D.velocity.lengthSquared()+D.angularVelocity.lengthSquared(),F=D.sleepSpeedLimit**2;mt>=F*2&&(X.wakeUpAfterNarrowphase=!0)}if(D.allowSleep&&D.type===Gt.DYNAMIC&&D.sleepState===Gt.SLEEPING&&X.sleepState===Gt.AWAKE&&X.type!==Gt.STATIC){const mt=X.velocity.lengthSquared()+X.angularVelocity.lengthSquared(),F=X.sleepSpeedLimit**2;mt>=F*2&&(D.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(X,D,!0),this.collisionMatrixPrevious.get(X,D)||(gl.body=D,gl.contact=j,X.dispatchEvent(gl),gl.body=X,D.dispatchEvent(gl)),this.bodyOverlapKeeper.set(X.id,D.id),this.shapeOverlapKeeper.set(H.id,Q.id)}for(this.emitContactEvents(),h&&(g.makeContactConstraints=xn.now()-v,v=xn.now()),T=0;T!==o;T++){const V=u[T];V.wakeUpAfterNarrowphase&&(V.wakeUp(),V.wakeUpAfterNarrowphase=!1)}for(C=y.length,T=0;T!==C;T++){const V=y[T];V.update();for(let j=0,X=V.equations.length;j!==X;j++){const D=V.equations[j];f.addEquation(D)}}f.solve(t,this),h&&(g.solve=xn.now()-v),f.removeAllEquations();const Y=Math.pow;for(T=0;T!==o;T++){const V=u[T];if(V.type&_){const j=Y(1-V.linearDamping,t),X=V.velocity;X.scale(j,X);const D=V.angularVelocity;if(D){const H=Y(1-V.angularDamping,t);D.scale(H,D)}}}this.dispatchEvent(Hb),h&&(v=xn.now());const O=this.stepnumber%(this.quatNormalizeSkip+1)===0,G=this.quatNormalizeFast;for(T=0;T!==o;T++)u[T].integrate(t,O,G);this.clearForces(),this.broadphase.dirty=!0,h&&(g.integrate=xn.now()-v),this.stepnumber+=1,this.dispatchEvent(Ib);let $=!0;if(this.allowSleep)for($=!1,T=0;T!==o;T++){const V=u[T];V.sleepTick(this.time),V.sleepState!==Gt.SLEEPING&&($=!0)}this.hasActiveBodies=$}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),n=this.hasAnyEventListener("endContact");if((t||n)&&this.bodyOverlapKeeper.getDiff(Ta,Aa),t){for(let o=0,u=Ta.length;o<u;o+=2)vl.bodyA=this.getBodyById(Ta[o]),vl.bodyB=this.getBodyById(Ta[o+1]),this.dispatchEvent(vl);vl.bodyA=vl.bodyB=null}if(n){for(let o=0,u=Aa.length;o<u;o+=2)_l.bodyA=this.getBodyById(Aa[o]),_l.bodyB=this.getBodyById(Aa[o+1]),this.dispatchEvent(_l);_l.bodyA=_l.bodyB=null}Ta.length=Aa.length=0;const a=this.hasAnyEventListener("beginShapeContact"),r=this.hasAnyEventListener("endShapeContact");if((a||r)&&this.shapeOverlapKeeper.getDiff(Ta,Aa),a){for(let o=0,u=Ta.length;o<u;o+=2){const f=this.getShapeById(Ta[o]),p=this.getShapeById(Ta[o+1]);wa.shapeA=f,wa.shapeB=p,f&&(wa.bodyA=f.body),p&&(wa.bodyB=p.body),this.dispatchEvent(wa)}wa.bodyA=wa.bodyB=wa.shapeA=wa.shapeB=null}if(r){for(let o=0,u=Aa.length;o<u;o+=2){const f=this.getShapeById(Aa[o]),p=this.getShapeById(Aa[o+1]);Ra.shapeA=f,Ra.shapeB=p,f&&(Ra.bodyA=f.body),p&&(Ra.bodyB=p.body),this.dispatchEvent(Ra)}Ra.bodyA=Ra.bodyB=Ra.shapeA=Ra.shapeB=null}}clearForces(){const t=this.bodies,n=t.length;for(let a=0;a!==n;a++){const r=t[a];r.force,r.torque,r.force.set(0,0,0),r.torque.set(0,0,0)}}}new fi;const ed=new ta,xn=globalThis.performance||{};if(!xn.now){let c=Date.now();xn.timing&&xn.timing.navigationStart&&(c=xn.timing.navigationStart),xn.now=()=>Date.now()-c}new R;const Ib={type:"postStep"},Hb={type:"preStep"},gl={type:Gt.COLLIDE_EVENT_NAME,body:null,contact:null},Gb=[],Vb=[],kb=[],qb=[],Ta=[],Aa=[],vl={type:"beginContact",bodyA:null,bodyB:null},_l={type:"endContact",bodyA:null,bodyB:null},wa={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Ra={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};const zp="182",Xb=0,s_=1,Wb=2,Tu=1,xx=2,wl=3,As=0,ti=1,Oa=2,Pa=0,co=1,r_=2,o_=3,l_=4,Yb=5,nr=100,jb=101,Zb=102,Kb=103,Qb=104,Jb=200,$b=201,tT=202,eT=203,Pd=204,Bd=205,nT=206,iT=207,aT=208,sT=209,rT=210,oT=211,lT=212,cT=213,uT=214,Fd=0,Id=1,Hd=2,ho=3,Gd=4,Vd=5,kd=6,qd=7,yx=0,fT=1,hT=2,Ii=0,Sx=1,Mx=2,Ex=3,bx=4,Tx=5,Ax=6,wx=7,Rx=300,rr=301,po=302,Xd=303,Wd=304,Pu=306,Yd=1e3,za=1001,jd=1002,On=1003,dT=1004,iu=1005,zn=1006,nd=1007,Es=1008,ui=1009,Cx=1010,Dx=1011,Nl=1012,Pp=1013,ia=1014,Ji=1015,Ia=1016,Bp=1017,Fp=1018,Ul=1020,Nx=35902,Ux=35899,Lx=1021,Ox=1022,Fi=1023,Ha=1026,sr=1027,zx=1028,Ip=1029,mo=1030,Hp=1031,Gp=1033,Au=33776,wu=33777,Ru=33778,Cu=33779,Zd=35840,Kd=35841,Qd=35842,Jd=35843,$d=36196,tp=37492,ep=37496,np=37488,ip=37489,ap=37490,sp=37491,rp=37808,op=37809,lp=37810,cp=37811,up=37812,fp=37813,hp=37814,dp=37815,pp=37816,mp=37817,gp=37818,vp=37819,_p=37820,xp=37821,yp=36492,Sp=36494,Mp=36495,Ep=36283,bp=36284,Tp=36285,Ap=36286,pT=3200,Px=0,mT=1,Ms="",qn="srgb",go="srgb-linear",Lu="linear",qe="srgb",Wr=7680,c_=519,gT=512,vT=513,_T=514,Vp=515,xT=516,yT=517,kp=518,ST=519,u_=35044,f_="300 es",$i=2e3,Ou=2001;function Bx(c){for(let t=c.length-1;t>=0;--t)if(c[t]>=65535)return!0;return!1}function zu(c){return document.createElementNS("http://www.w3.org/1999/xhtml",c)}function MT(){const c=zu("canvas");return c.style.display="block",c}const h_={};function d_(...c){const t="THREE."+c.shift();console.log(t,...c)}function ue(...c){const t="THREE."+c.shift();console.warn(t,...c)}function we(...c){const t="THREE."+c.shift();console.error(t,...c)}function Ll(...c){const t=c.join(" ");t in h_||(h_[t]=!0,ue(...c))}function ET(c,t,n){return new Promise(function(a,r){function o(){switch(c.clientWaitSync(t,c.SYNC_FLUSH_COMMANDS_BIT,0)){case c.WAIT_FAILED:r();break;case c.TIMEOUT_EXPIRED:setTimeout(o,n);break;default:a()}}setTimeout(o,n)})}class _o{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){const a=this._listeners;if(a===void 0)return;const r=a[t];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const a=n[t.type];if(a!==void 0){t.target=this;const r=a.slice(0);for(let o=0,u=r.length;o<u;o++)r[o].call(this,t);t.target=null}}}const Fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],id=Math.PI/180,wp=180/Math.PI;function Pl(){const c=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Fn[c&255]+Fn[c>>8&255]+Fn[c>>16&255]+Fn[c>>24&255]+"-"+Fn[t&255]+Fn[t>>8&255]+"-"+Fn[t>>16&15|64]+Fn[t>>24&255]+"-"+Fn[n&63|128]+Fn[n>>8&255]+"-"+Fn[n>>16&255]+Fn[n>>24&255]+Fn[a&255]+Fn[a>>8&255]+Fn[a>>16&255]+Fn[a>>24&255]).toLowerCase()}function be(c,t,n){return Math.max(t,Math.min(n,c))}function bT(c,t){return(c%t+t)%t}function ad(c,t,n){return(1-n)*c+n*t}function xl(c,t){switch(t.constructor){case Float32Array:return c;case Uint32Array:return c/4294967295;case Uint16Array:return c/65535;case Uint8Array:return c/255;case Int32Array:return Math.max(c/2147483647,-1);case Int16Array:return Math.max(c/32767,-1);case Int8Array:return Math.max(c/127,-1);default:throw new Error("Invalid component type.")}}function Jn(c,t){switch(t.constructor){case Float32Array:return c;case Uint32Array:return Math.round(c*4294967295);case Uint16Array:return Math.round(c*65535);case Uint8Array:return Math.round(c*255);case Int32Array:return Math.round(c*2147483647);case Int16Array:return Math.round(c*32767);case Int8Array:return Math.round(c*127);default:throw new Error("Invalid component type.")}}class Le{constructor(t=0,n=0){Le.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,r=t.elements;return this.x=r[0]*n+r[3]*a+r[6],this.y=r[1]*n+r[4]*a+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=be(this.x,t.x,n.x),this.y=be(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=be(this.x,t,n),this.y=be(this.y,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(be(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(be(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),r=Math.sin(n),o=this.x-t.x,u=this.y-t.y;return this.x=o*a-u*r+t.x,this.y=o*r+u*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bl{constructor(t=0,n=0,a=0,r=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=r}static slerpFlat(t,n,a,r,o,u,f){let p=a[r+0],h=a[r+1],g=a[r+2],_=a[r+3],v=o[u+0],y=o[u+1],M=o[u+2],b=o[u+3];if(f<=0){t[n+0]=p,t[n+1]=h,t[n+2]=g,t[n+3]=_;return}if(f>=1){t[n+0]=v,t[n+1]=y,t[n+2]=M,t[n+3]=b;return}if(_!==b||p!==v||h!==y||g!==M){let S=p*v+h*y+g*M+_*b;S<0&&(v=-v,y=-y,M=-M,b=-b,S=-S);let x=1-f;if(S<.9995){const T=Math.acos(S),C=Math.sin(T);x=Math.sin(x*T)/C,f=Math.sin(f*T)/C,p=p*x+v*f,h=h*x+y*f,g=g*x+M*f,_=_*x+b*f}else{p=p*x+v*f,h=h*x+y*f,g=g*x+M*f,_=_*x+b*f;const T=1/Math.sqrt(p*p+h*h+g*g+_*_);p*=T,h*=T,g*=T,_*=T}}t[n]=p,t[n+1]=h,t[n+2]=g,t[n+3]=_}static multiplyQuaternionsFlat(t,n,a,r,o,u){const f=a[r],p=a[r+1],h=a[r+2],g=a[r+3],_=o[u],v=o[u+1],y=o[u+2],M=o[u+3];return t[n]=f*M+g*_+p*y-h*v,t[n+1]=p*M+g*v+h*_-f*y,t[n+2]=h*M+g*y+f*v-p*_,t[n+3]=g*M-f*_-p*v-h*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,r){return this._x=t,this._y=n,this._z=a,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const a=t._x,r=t._y,o=t._z,u=t._order,f=Math.cos,p=Math.sin,h=f(a/2),g=f(r/2),_=f(o/2),v=p(a/2),y=p(r/2),M=p(o/2);switch(u){case"XYZ":this._x=v*g*_+h*y*M,this._y=h*y*_-v*g*M,this._z=h*g*M+v*y*_,this._w=h*g*_-v*y*M;break;case"YXZ":this._x=v*g*_+h*y*M,this._y=h*y*_-v*g*M,this._z=h*g*M-v*y*_,this._w=h*g*_+v*y*M;break;case"ZXY":this._x=v*g*_-h*y*M,this._y=h*y*_+v*g*M,this._z=h*g*M+v*y*_,this._w=h*g*_-v*y*M;break;case"ZYX":this._x=v*g*_-h*y*M,this._y=h*y*_+v*g*M,this._z=h*g*M-v*y*_,this._w=h*g*_+v*y*M;break;case"YZX":this._x=v*g*_+h*y*M,this._y=h*y*_+v*g*M,this._z=h*g*M-v*y*_,this._w=h*g*_-v*y*M;break;case"XZY":this._x=v*g*_-h*y*M,this._y=h*y*_-v*g*M,this._z=h*g*M+v*y*_,this._w=h*g*_+v*y*M;break;default:ue("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,r=Math.sin(a);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],r=n[4],o=n[8],u=n[1],f=n[5],p=n[9],h=n[2],g=n[6],_=n[10],v=a+f+_;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(g-p)*y,this._y=(o-h)*y,this._z=(u-r)*y}else if(a>f&&a>_){const y=2*Math.sqrt(1+a-f-_);this._w=(g-p)/y,this._x=.25*y,this._y=(r+u)/y,this._z=(o+h)/y}else if(f>_){const y=2*Math.sqrt(1+f-a-_);this._w=(o-h)/y,this._x=(r+u)/y,this._y=.25*y,this._z=(p+g)/y}else{const y=2*Math.sqrt(1+_-a-f);this._w=(u-r)/y,this._x=(o+h)/y,this._y=(p+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<1e-8?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const r=Math.min(1,n/a);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,r=t._y,o=t._z,u=t._w,f=n._x,p=n._y,h=n._z,g=n._w;return this._x=a*g+u*f+r*h-o*p,this._y=r*g+u*p+o*f-a*h,this._z=o*g+u*h+a*p-r*f,this._w=u*g-a*f-r*p-o*h,this._onChangeCallback(),this}slerp(t,n){if(n<=0)return this;if(n>=1)return this.copy(t);let a=t._x,r=t._y,o=t._z,u=t._w,f=this.dot(t);f<0&&(a=-a,r=-r,o=-o,u=-u,f=-f);let p=1-n;if(f<.9995){const h=Math.acos(f),g=Math.sin(h);p=Math.sin(p*h)/g,n=Math.sin(n*h)/g,this._x=this._x*p+a*n,this._y=this._y*p+r*n,this._z=this._z*p+o*n,this._w=this._w*p+u*n,this._onChangeCallback()}else this._x=this._x*p+a*n,this._y=this._y*p+r*n,this._z=this._z*p+o*n,this._w=this._w*p+u*n,this.normalize();return this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),r=Math.sqrt(1-a),o=Math.sqrt(a);return this.set(r*Math.sin(t),r*Math.cos(t),o*Math.sin(n),o*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ut{constructor(t=0,n=0,a=0){ut.prototype.isVector3=!0,this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(p_.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(p_.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,r=this.z,o=t.elements;return this.x=o[0]*n+o[3]*a+o[6]*r,this.y=o[1]*n+o[4]*a+o[7]*r,this.z=o[2]*n+o[5]*a+o[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,r=this.z,o=t.elements,u=1/(o[3]*n+o[7]*a+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*a+o[8]*r+o[12])*u,this.y=(o[1]*n+o[5]*a+o[9]*r+o[13])*u,this.z=(o[2]*n+o[6]*a+o[10]*r+o[14])*u,this}applyQuaternion(t){const n=this.x,a=this.y,r=this.z,o=t.x,u=t.y,f=t.z,p=t.w,h=2*(u*r-f*a),g=2*(f*n-o*r),_=2*(o*a-u*n);return this.x=n+p*h+u*_-f*g,this.y=a+p*g+f*h-o*_,this.z=r+p*_+o*g-u*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,r=this.z,o=t.elements;return this.x=o[0]*n+o[4]*a+o[8]*r,this.y=o[1]*n+o[5]*a+o[9]*r,this.z=o[2]*n+o[6]*a+o[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=be(this.x,t.x,n.x),this.y=be(this.y,t.y,n.y),this.z=be(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=be(this.x,t,n),this.y=be(this.y,t,n),this.z=be(this.z,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(be(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,r=t.y,o=t.z,u=n.x,f=n.y,p=n.z;return this.x=r*p-o*f,this.y=o*u-a*p,this.z=a*f-r*u,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return sd.copy(this).projectOnVector(t),this.sub(sd)}reflect(t){return this.sub(sd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(be(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,r=this.z-t.z;return n*n+a*a+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const r=Math.sin(n)*t;return this.x=r*Math.sin(a),this.y=Math.cos(n)*t,this.z=r*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=r,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(t),this.y=n,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sd=new ut,p_=new Bl;class pe{constructor(t,n,a,r,o,u,f,p,h){pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,r,o,u,f,p,h)}set(t,n,a,r,o,u,f,p,h){const g=this.elements;return g[0]=t,g[1]=r,g[2]=f,g[3]=n,g[4]=o,g[5]=p,g[6]=a,g[7]=u,g[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,r=n.elements,o=this.elements,u=a[0],f=a[3],p=a[6],h=a[1],g=a[4],_=a[7],v=a[2],y=a[5],M=a[8],b=r[0],S=r[3],x=r[6],T=r[1],C=r[4],L=r[7],z=r[2],B=r[5],P=r[8];return o[0]=u*b+f*T+p*z,o[3]=u*S+f*C+p*B,o[6]=u*x+f*L+p*P,o[1]=h*b+g*T+_*z,o[4]=h*S+g*C+_*B,o[7]=h*x+g*L+_*P,o[2]=v*b+y*T+M*z,o[5]=v*S+y*C+M*B,o[8]=v*x+y*L+M*P,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],r=t[2],o=t[3],u=t[4],f=t[5],p=t[6],h=t[7],g=t[8];return n*u*g-n*f*h-a*o*g+a*f*p+r*o*h-r*u*p}invert(){const t=this.elements,n=t[0],a=t[1],r=t[2],o=t[3],u=t[4],f=t[5],p=t[6],h=t[7],g=t[8],_=g*u-f*h,v=f*p-g*o,y=h*o-u*p,M=n*_+a*v+r*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/M;return t[0]=_*b,t[1]=(r*h-g*a)*b,t[2]=(f*a-r*u)*b,t[3]=v*b,t[4]=(g*n-r*p)*b,t[5]=(r*o-f*n)*b,t[6]=y*b,t[7]=(a*p-h*n)*b,t[8]=(u*n-a*o)*b,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,r,o,u,f){const p=Math.cos(o),h=Math.sin(o);return this.set(a*p,a*h,-a*(p*u+h*f)+u+t,-r*h,r*p,-r*(-h*u+p*f)+f+n,0,0,1),this}scale(t,n){return this.premultiply(rd.makeScale(t,n)),this}rotate(t){return this.premultiply(rd.makeRotation(-t)),this}translate(t,n){return this.premultiply(rd.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let r=0;r<9;r++)if(n[r]!==a[r])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const rd=new pe,m_=new pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),g_=new pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function TT(){const c={enabled:!0,workingColorSpace:go,spaces:{},convert:function(r,o,u){return this.enabled===!1||o===u||!o||!u||(this.spaces[o].transfer===qe&&(r.r=Ba(r.r),r.g=Ba(r.g),r.b=Ba(r.b)),this.spaces[o].primaries!==this.spaces[u].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===qe&&(r.r=uo(r.r),r.g=uo(r.g),r.b=uo(r.b))),r},workingToColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},colorSpaceToWorking:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ms?Lu:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,u){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,o){return Ll("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),c.workingToColorSpace(r,o)},toWorkingColorSpace:function(r,o){return Ll("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),c.colorSpaceToWorking(r,o)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return c.define({[go]:{primaries:t,whitePoint:a,transfer:Lu,toXYZ:m_,fromXYZ:g_,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:qn},outputColorSpaceConfig:{drawingBufferColorSpace:qn}},[qn]:{primaries:t,whitePoint:a,transfer:qe,toXYZ:m_,fromXYZ:g_,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:qn}}}),c}const Re=TT();function Ba(c){return c<.04045?c*.0773993808:Math.pow(c*.9478672986+.0521327014,2.4)}function uo(c){return c<.0031308?c*12.92:1.055*Math.pow(c,.41666)-.055}let Yr;class AT{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{Yr===void 0&&(Yr=zu("canvas")),Yr.width=t.width,Yr.height=t.height;const r=Yr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),a=Yr}return a.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=zu("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const r=a.getImageData(0,0,t.width,t.height),o=r.data;for(let u=0;u<o.length;u++)o[u]=Ba(o[u]/255)*255;return a.putImageData(r,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(Ba(n[a]/255)*255):n[a]=Ba(n[a]);return{data:n,width:t.width,height:t.height}}else return ue("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let wT=0;class qp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wT++}),this.uuid=Pl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let u=0,f=r.length;u<f;u++)r[u].isDataTexture?o.push(od(r[u].image)):o.push(od(r[u]))}else o=od(r);a.url=o}return n||(t.images[this.uuid]=a),a}}function od(c){return typeof HTMLImageElement<"u"&&c instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&c instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&c instanceof ImageBitmap?AT.getDataURL(c):c.data?{data:Array.from(c.data),width:c.width,height:c.height,type:c.data.constructor.name}:(ue("Texture: Unable to serialize Texture."),{})}let RT=0;const ld=new ut;class Hn extends _o{constructor(t=Hn.DEFAULT_IMAGE,n=Hn.DEFAULT_MAPPING,a=za,r=za,o=zn,u=Es,f=Fi,p=ui,h=Hn.DEFAULT_ANISOTROPY,g=Ms){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:RT++}),this.uuid=Pl(),this.name="",this.source=new qp(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=r,this.magFilter=o,this.minFilter=u,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=p,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ld).x}get height(){return this.source.getSize(ld).y}get depth(){return this.source.getSize(ld).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const a=t[n];if(a===void 0){ue(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){ue(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&a&&r.isVector2&&a.isVector2||r&&a&&r.isVector3&&a.isVector3||r&&a&&r.isMatrix3&&a.isMatrix3?r.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Rx)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Yd:t.x=t.x-Math.floor(t.x);break;case za:t.x=t.x<0?0:1;break;case jd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Yd:t.y=t.y-Math.floor(t.y);break;case za:t.y=t.y<0?0:1;break;case jd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=Rx;Hn.DEFAULT_ANISOTROPY=1;class ln{constructor(t=0,n=0,a=0,r=1){ln.prototype.isVector4=!0,this.x=t,this.y=n,this.z=a,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,a,r){return this.x=t,this.y=n,this.z=a,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,a=this.y,r=this.z,o=this.w,u=t.elements;return this.x=u[0]*n+u[4]*a+u[8]*r+u[12]*o,this.y=u[1]*n+u[5]*a+u[9]*r+u[13]*o,this.z=u[2]*n+u[6]*a+u[10]*r+u[14]*o,this.w=u[3]*n+u[7]*a+u[11]*r+u[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,a,r,o;const p=t.elements,h=p[0],g=p[4],_=p[8],v=p[1],y=p[5],M=p[9],b=p[2],S=p[6],x=p[10];if(Math.abs(g-v)<.01&&Math.abs(_-b)<.01&&Math.abs(M-S)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+b)<.1&&Math.abs(M+S)<.1&&Math.abs(h+y+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const C=(h+1)/2,L=(y+1)/2,z=(x+1)/2,B=(g+v)/4,P=(_+b)/4,Y=(M+S)/4;return C>L&&C>z?C<.01?(a=0,r=.707106781,o=.707106781):(a=Math.sqrt(C),r=B/a,o=P/a):L>z?L<.01?(a=.707106781,r=0,o=.707106781):(r=Math.sqrt(L),a=B/r,o=Y/r):z<.01?(a=.707106781,r=.707106781,o=0):(o=Math.sqrt(z),a=P/o,r=Y/o),this.set(a,r,o,n),this}let T=Math.sqrt((S-M)*(S-M)+(_-b)*(_-b)+(v-g)*(v-g));return Math.abs(T)<.001&&(T=1),this.x=(S-M)/T,this.y=(_-b)/T,this.z=(v-g)/T,this.w=Math.acos((h+y+x-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=be(this.x,t.x,n.x),this.y=be(this.y,t.y,n.y),this.z=be(this.z,t.z,n.z),this.w=be(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=be(this.x,t,n),this.y=be(this.y,t,n),this.z=be(this.z,t,n),this.w=be(this.w,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(be(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this.w=t.w+(n.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class CT extends _o{constructor(t=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=a.depth,this.scissor=new ln(0,0,t,n),this.scissorTest=!1,this.viewport=new ln(0,0,t,n);const r={width:t,height:n,depth:a.depth},o=new Hn(r);this.textures=[];const u=a.count;for(let f=0;f<u;f++)this.textures[f]=o.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(t={}){const n={minFilter:zn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,a=1){if(this.width!==t||this.height!==n||this.depth!==a){this.width=t,this.height=n,this.depth=a;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=t,this.textures[r].image.height=n,this.textures[r].image.depth=a,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,a=t.textures.length;n<a;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},t.textures[n].image);this.textures[n].source=new qp(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ea extends CT{constructor(t=1,n=1,a={}){super(t,n,a),this.isWebGLRenderTarget=!0}}class Fx extends Hn{constructor(t=null,n=1,a=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:a,depth:r},this.magFilter=On,this.minFilter=On,this.wrapR=za,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class DT extends Hn{constructor(t=null,n=1,a=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:a,depth:r},this.magFilter=On,this.minFilter=On,this.wrapR=za,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fl{constructor(t=new ut(1/0,1/0,1/0),n=new ut(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n+=3)this.expandByPoint(Ni.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,a=t.count;n<a;n++)this.expandByPoint(Ni.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=Ni.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const o=a.getAttribute("position");if(n===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let u=0,f=o.count;u<f;u++)t.isMesh===!0?t.getVertexPosition(u,Ni):Ni.fromBufferAttribute(o,u),Ni.applyMatrix4(t.matrixWorld),this.expandByPoint(Ni);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),au.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),au.copy(a.boundingBox)),au.applyMatrix4(t.matrixWorld),this.union(au)}const r=t.children;for(let o=0,u=r.length;o<u;o++)this.expandByObject(r[o],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ni),Ni.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,a;return t.normal.x>0?(n=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),n<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(yl),su.subVectors(this.max,yl),jr.subVectors(t.a,yl),Zr.subVectors(t.b,yl),Kr.subVectors(t.c,yl),ms.subVectors(Zr,jr),gs.subVectors(Kr,Zr),Ws.subVectors(jr,Kr);let n=[0,-ms.z,ms.y,0,-gs.z,gs.y,0,-Ws.z,Ws.y,ms.z,0,-ms.x,gs.z,0,-gs.x,Ws.z,0,-Ws.x,-ms.y,ms.x,0,-gs.y,gs.x,0,-Ws.y,Ws.x,0];return!cd(n,jr,Zr,Kr,su)||(n=[1,0,0,0,1,0,0,0,1],!cd(n,jr,Zr,Kr,su))?!1:(ru.crossVectors(ms,gs),n=[ru.x,ru.y,ru.z],cd(n,jr,Zr,Kr,su))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ni).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ni).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ca[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ca[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ca[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ca[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ca[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ca[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ca[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ca[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ca),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ca=[new ut,new ut,new ut,new ut,new ut,new ut,new ut,new ut],Ni=new ut,au=new Fl,jr=new ut,Zr=new ut,Kr=new ut,ms=new ut,gs=new ut,Ws=new ut,yl=new ut,su=new ut,ru=new ut,Ys=new ut;function cd(c,t,n,a,r){for(let o=0,u=c.length-3;o<=u;o+=3){Ys.fromArray(c,o);const f=r.x*Math.abs(Ys.x)+r.y*Math.abs(Ys.y)+r.z*Math.abs(Ys.z),p=t.dot(Ys),h=n.dot(Ys),g=a.dot(Ys);if(Math.max(-Math.max(p,h,g),Math.min(p,h,g))>f)return!1}return!0}const NT=new Fl,Sl=new ut,ud=new ut;class Xp{constructor(t=new ut,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const a=this.center;n!==void 0?a.copy(n):NT.setFromPoints(t).getCenter(a);let r=0;for(let o=0,u=t.length;o<u;o++)r=Math.max(r,a.distanceToSquared(t[o]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const a=this.center.distanceToSquared(t);return n.copy(t),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Sl.subVectors(t,this.center);const n=Sl.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),r=(a-this.radius)*.5;this.center.addScaledVector(Sl,r/a),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ud.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Sl.copy(t.center).add(ud)),this.expandByPoint(Sl.copy(t.center).sub(ud))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Da=new ut,fd=new ut,ou=new ut,vs=new ut,hd=new ut,lu=new ut,dd=new ut;class Ix{constructor(t=new ut,n=new ut(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Da)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Da.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Da.copy(this.origin).addScaledVector(this.direction,n),Da.distanceToSquared(t))}distanceSqToSegment(t,n,a,r){fd.copy(t).add(n).multiplyScalar(.5),ou.copy(n).sub(t).normalize(),vs.copy(this.origin).sub(fd);const o=t.distanceTo(n)*.5,u=-this.direction.dot(ou),f=vs.dot(this.direction),p=-vs.dot(ou),h=vs.lengthSq(),g=Math.abs(1-u*u);let _,v,y,M;if(g>0)if(_=u*p-f,v=u*f-p,M=o*g,_>=0)if(v>=-M)if(v<=M){const b=1/g;_*=b,v*=b,y=_*(_+u*v+2*f)+v*(u*_+v+2*p)+h}else v=o,_=Math.max(0,-(u*v+f)),y=-_*_+v*(v+2*p)+h;else v=-o,_=Math.max(0,-(u*v+f)),y=-_*_+v*(v+2*p)+h;else v<=-M?(_=Math.max(0,-(-u*o+f)),v=_>0?-o:Math.min(Math.max(-o,-p),o),y=-_*_+v*(v+2*p)+h):v<=M?(_=0,v=Math.min(Math.max(-o,-p),o),y=v*(v+2*p)+h):(_=Math.max(0,-(u*o+f)),v=_>0?o:Math.min(Math.max(-o,-p),o),y=-_*_+v*(v+2*p)+h);else v=u>0?-o:o,_=Math.max(0,-(u*v+f)),y=-_*_+v*(v+2*p)+h;return a&&a.copy(this.origin).addScaledVector(this.direction,_),r&&r.copy(fd).addScaledVector(ou,v),y}intersectSphere(t,n){Da.subVectors(t.center,this.origin);const a=Da.dot(this.direction),r=Da.dot(Da)-a*a,o=t.radius*t.radius;if(r>o)return null;const u=Math.sqrt(o-r),f=a-u,p=a+u;return p<0?null:f<0?this.at(p,n):this.at(f,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/n;return a>=0?a:null}intersectPlane(t,n){const a=this.distanceToPlane(t);return a===null?null:this.at(a,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let a,r,o,u,f,p;const h=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return h>=0?(a=(t.min.x-v.x)*h,r=(t.max.x-v.x)*h):(a=(t.max.x-v.x)*h,r=(t.min.x-v.x)*h),g>=0?(o=(t.min.y-v.y)*g,u=(t.max.y-v.y)*g):(o=(t.max.y-v.y)*g,u=(t.min.y-v.y)*g),a>u||o>r||((o>a||isNaN(a))&&(a=o),(u<r||isNaN(r))&&(r=u),_>=0?(f=(t.min.z-v.z)*_,p=(t.max.z-v.z)*_):(f=(t.max.z-v.z)*_,p=(t.min.z-v.z)*_),a>p||f>r)||((f>a||a!==a)&&(a=f),(p<r||r!==r)&&(r=p),r<0)?null:this.at(a>=0?a:r,n)}intersectsBox(t){return this.intersectBox(t,Da)!==null}intersectTriangle(t,n,a,r,o){hd.subVectors(n,t),lu.subVectors(a,t),dd.crossVectors(hd,lu);let u=this.direction.dot(dd),f;if(u>0){if(r)return null;f=1}else if(u<0)f=-1,u=-u;else return null;vs.subVectors(this.origin,t);const p=f*this.direction.dot(lu.crossVectors(vs,lu));if(p<0)return null;const h=f*this.direction.dot(hd.cross(vs));if(h<0||p+h>u)return null;const g=-f*vs.dot(dd);return g<0?null:this.at(g/u,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class sn{constructor(t,n,a,r,o,u,f,p,h,g,_,v,y,M,b,S){sn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,r,o,u,f,p,h,g,_,v,y,M,b,S)}set(t,n,a,r,o,u,f,p,h,g,_,v,y,M,b,S){const x=this.elements;return x[0]=t,x[4]=n,x[8]=a,x[12]=r,x[1]=o,x[5]=u,x[9]=f,x[13]=p,x[2]=h,x[6]=g,x[10]=_,x[14]=v,x[3]=y,x[7]=M,x[11]=b,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sn().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return this.determinant()===0?(t.set(1,0,0),n.set(0,1,0),a.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const n=this.elements,a=t.elements,r=1/Qr.setFromMatrixColumn(t,0).length(),o=1/Qr.setFromMatrixColumn(t,1).length(),u=1/Qr.setFromMatrixColumn(t,2).length();return n[0]=a[0]*r,n[1]=a[1]*r,n[2]=a[2]*r,n[3]=0,n[4]=a[4]*o,n[5]=a[5]*o,n[6]=a[6]*o,n[7]=0,n[8]=a[8]*u,n[9]=a[9]*u,n[10]=a[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,r=t.y,o=t.z,u=Math.cos(a),f=Math.sin(a),p=Math.cos(r),h=Math.sin(r),g=Math.cos(o),_=Math.sin(o);if(t.order==="XYZ"){const v=u*g,y=u*_,M=f*g,b=f*_;n[0]=p*g,n[4]=-p*_,n[8]=h,n[1]=y+M*h,n[5]=v-b*h,n[9]=-f*p,n[2]=b-v*h,n[6]=M+y*h,n[10]=u*p}else if(t.order==="YXZ"){const v=p*g,y=p*_,M=h*g,b=h*_;n[0]=v+b*f,n[4]=M*f-y,n[8]=u*h,n[1]=u*_,n[5]=u*g,n[9]=-f,n[2]=y*f-M,n[6]=b+v*f,n[10]=u*p}else if(t.order==="ZXY"){const v=p*g,y=p*_,M=h*g,b=h*_;n[0]=v-b*f,n[4]=-u*_,n[8]=M+y*f,n[1]=y+M*f,n[5]=u*g,n[9]=b-v*f,n[2]=-u*h,n[6]=f,n[10]=u*p}else if(t.order==="ZYX"){const v=u*g,y=u*_,M=f*g,b=f*_;n[0]=p*g,n[4]=M*h-y,n[8]=v*h+b,n[1]=p*_,n[5]=b*h+v,n[9]=y*h-M,n[2]=-h,n[6]=f*p,n[10]=u*p}else if(t.order==="YZX"){const v=u*p,y=u*h,M=f*p,b=f*h;n[0]=p*g,n[4]=b-v*_,n[8]=M*_+y,n[1]=_,n[5]=u*g,n[9]=-f*g,n[2]=-h*g,n[6]=y*_+M,n[10]=v-b*_}else if(t.order==="XZY"){const v=u*p,y=u*h,M=f*p,b=f*h;n[0]=p*g,n[4]=-_,n[8]=h*g,n[1]=v*_+b,n[5]=u*g,n[9]=y*_-M,n[2]=M*_-y,n[6]=f*g,n[10]=b*_+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(UT,t,LT)}lookAt(t,n,a){const r=this.elements;return li.subVectors(t,n),li.lengthSq()===0&&(li.z=1),li.normalize(),_s.crossVectors(a,li),_s.lengthSq()===0&&(Math.abs(a.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),_s.crossVectors(a,li)),_s.normalize(),cu.crossVectors(li,_s),r[0]=_s.x,r[4]=cu.x,r[8]=li.x,r[1]=_s.y,r[5]=cu.y,r[9]=li.y,r[2]=_s.z,r[6]=cu.z,r[10]=li.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,r=n.elements,o=this.elements,u=a[0],f=a[4],p=a[8],h=a[12],g=a[1],_=a[5],v=a[9],y=a[13],M=a[2],b=a[6],S=a[10],x=a[14],T=a[3],C=a[7],L=a[11],z=a[15],B=r[0],P=r[4],Y=r[8],w=r[12],O=r[1],G=r[5],$=r[9],V=r[13],j=r[2],X=r[6],D=r[10],H=r[14],Q=r[3],ft=r[7],mt=r[11],F=r[15];return o[0]=u*B+f*O+p*j+h*Q,o[4]=u*P+f*G+p*X+h*ft,o[8]=u*Y+f*$+p*D+h*mt,o[12]=u*w+f*V+p*H+h*F,o[1]=g*B+_*O+v*j+y*Q,o[5]=g*P+_*G+v*X+y*ft,o[9]=g*Y+_*$+v*D+y*mt,o[13]=g*w+_*V+v*H+y*F,o[2]=M*B+b*O+S*j+x*Q,o[6]=M*P+b*G+S*X+x*ft,o[10]=M*Y+b*$+S*D+x*mt,o[14]=M*w+b*V+S*H+x*F,o[3]=T*B+C*O+L*j+z*Q,o[7]=T*P+C*G+L*X+z*ft,o[11]=T*Y+C*$+L*D+z*mt,o[15]=T*w+C*V+L*H+z*F,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],r=t[8],o=t[12],u=t[1],f=t[5],p=t[9],h=t[13],g=t[2],_=t[6],v=t[10],y=t[14],M=t[3],b=t[7],S=t[11],x=t[15],T=p*y-h*v,C=f*y-h*_,L=f*v-p*_,z=u*y-h*g,B=u*v-p*g,P=u*_-f*g;return n*(b*T-S*C+x*L)-a*(M*T-S*z+x*B)+r*(M*C-b*z+x*P)-o*(M*L-b*B+S*P)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=n,r[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],r=t[2],o=t[3],u=t[4],f=t[5],p=t[6],h=t[7],g=t[8],_=t[9],v=t[10],y=t[11],M=t[12],b=t[13],S=t[14],x=t[15],T=_*S*h-b*v*h+b*p*y-f*S*y-_*p*x+f*v*x,C=M*v*h-g*S*h-M*p*y+u*S*y+g*p*x-u*v*x,L=g*b*h-M*_*h+M*f*y-u*b*y-g*f*x+u*_*x,z=M*_*p-g*b*p-M*f*v+u*b*v+g*f*S-u*_*S,B=n*T+a*C+r*L+o*z;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/B;return t[0]=T*P,t[1]=(b*v*o-_*S*o-b*r*y+a*S*y+_*r*x-a*v*x)*P,t[2]=(f*S*o-b*p*o+b*r*h-a*S*h-f*r*x+a*p*x)*P,t[3]=(_*p*o-f*v*o-_*r*h+a*v*h+f*r*y-a*p*y)*P,t[4]=C*P,t[5]=(g*S*o-M*v*o+M*r*y-n*S*y-g*r*x+n*v*x)*P,t[6]=(M*p*o-u*S*o-M*r*h+n*S*h+u*r*x-n*p*x)*P,t[7]=(u*v*o-g*p*o+g*r*h-n*v*h-u*r*y+n*p*y)*P,t[8]=L*P,t[9]=(M*_*o-g*b*o-M*a*y+n*b*y+g*a*x-n*_*x)*P,t[10]=(u*b*o-M*f*o+M*a*h-n*b*h-u*a*x+n*f*x)*P,t[11]=(g*f*o-u*_*o-g*a*h+n*_*h+u*a*y-n*f*y)*P,t[12]=z*P,t[13]=(g*b*r-M*_*r+M*a*v-n*b*v-g*a*S+n*_*S)*P,t[14]=(M*f*r-u*b*r-M*a*p+n*b*p+u*a*S-n*f*S)*P,t[15]=(u*_*r-g*f*r+g*a*p-n*_*p-u*a*v+n*f*v)*P,this}scale(t){const n=this.elements,a=t.x,r=t.y,o=t.z;return n[0]*=a,n[4]*=r,n[8]*=o,n[1]*=a,n[5]*=r,n[9]*=o,n[2]*=a,n[6]*=r,n[10]*=o,n[3]*=a,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,r))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),r=Math.sin(n),o=1-a,u=t.x,f=t.y,p=t.z,h=o*u,g=o*f;return this.set(h*u+a,h*f-r*p,h*p+r*f,0,h*f+r*p,g*f+a,g*p-r*u,0,h*p-r*f,g*p+r*u,o*p*p+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,r,o,u){return this.set(1,a,o,0,t,1,u,0,n,r,1,0,0,0,0,1),this}compose(t,n,a){const r=this.elements,o=n._x,u=n._y,f=n._z,p=n._w,h=o+o,g=u+u,_=f+f,v=o*h,y=o*g,M=o*_,b=u*g,S=u*_,x=f*_,T=p*h,C=p*g,L=p*_,z=a.x,B=a.y,P=a.z;return r[0]=(1-(b+x))*z,r[1]=(y+L)*z,r[2]=(M-C)*z,r[3]=0,r[4]=(y-L)*B,r[5]=(1-(v+x))*B,r[6]=(S+T)*B,r[7]=0,r[8]=(M+C)*P,r[9]=(S-T)*P,r[10]=(1-(v+b))*P,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,n,a){const r=this.elements;if(t.x=r[12],t.y=r[13],t.z=r[14],this.determinant()===0)return a.set(1,1,1),n.identity(),this;let o=Qr.set(r[0],r[1],r[2]).length();const u=Qr.set(r[4],r[5],r[6]).length(),f=Qr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),Ui.copy(this);const h=1/o,g=1/u,_=1/f;return Ui.elements[0]*=h,Ui.elements[1]*=h,Ui.elements[2]*=h,Ui.elements[4]*=g,Ui.elements[5]*=g,Ui.elements[6]*=g,Ui.elements[8]*=_,Ui.elements[9]*=_,Ui.elements[10]*=_,n.setFromRotationMatrix(Ui),a.x=o,a.y=u,a.z=f,this}makePerspective(t,n,a,r,o,u,f=$i,p=!1){const h=this.elements,g=2*o/(n-t),_=2*o/(a-r),v=(n+t)/(n-t),y=(a+r)/(a-r);let M,b;if(p)M=o/(u-o),b=u*o/(u-o);else if(f===$i)M=-(u+o)/(u-o),b=-2*u*o/(u-o);else if(f===Ou)M=-u/(u-o),b=-u*o/(u-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=g,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=_,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=b,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,n,a,r,o,u,f=$i,p=!1){const h=this.elements,g=2/(n-t),_=2/(a-r),v=-(n+t)/(n-t),y=-(a+r)/(a-r);let M,b;if(p)M=1/(u-o),b=u/(u-o);else if(f===$i)M=-2/(u-o),b=-(u+o)/(u-o);else if(f===Ou)M=-1/(u-o),b=-o/(u-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=g,h[4]=0,h[8]=0,h[12]=v,h[1]=0,h[5]=_,h[9]=0,h[13]=y,h[2]=0,h[6]=0,h[10]=M,h[14]=b,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let r=0;r<16;r++)if(n[r]!==a[r])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}}const Qr=new ut,Ui=new sn,UT=new ut(0,0,0),LT=new ut(1,1,1),_s=new ut,cu=new ut,li=new ut,v_=new sn,__=new Bl;class aa{constructor(t=0,n=0,a=0,r=aa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,r=this._order){return this._x=t,this._y=n,this._z=a,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const r=t.elements,o=r[0],u=r[4],f=r[8],p=r[1],h=r[5],g=r[9],_=r[2],v=r[6],y=r[10];switch(n){case"XYZ":this._y=Math.asin(be(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-u,o)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-be(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(p,h)):(this._y=Math.atan2(-_,o),this._z=0);break;case"ZXY":this._x=Math.asin(be(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(p,o));break;case"ZYX":this._y=Math.asin(-be(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(p,o)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(be(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,h),this._y=Math.atan2(-_,o)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-be(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(f,o)):(this._x=Math.atan2(-g,y),this._y=0);break;default:ue("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return v_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(v_,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return __.setFromEuler(this),this.setFromQuaternion(__,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}aa.DEFAULT_ORDER="XYZ";class Wp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let OT=0;const x_=new ut,Jr=new Bl,Na=new sn,uu=new ut,Ml=new ut,zT=new ut,PT=new Bl,y_=new ut(1,0,0),S_=new ut(0,1,0),M_=new ut(0,0,1),E_={type:"added"},BT={type:"removed"},$r={type:"childadded",child:null},pd={type:"childremoved",child:null};class Gn extends _o{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:OT++}),this.uuid=Pl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gn.DEFAULT_UP.clone();const t=new ut,n=new aa,a=new Bl,r=new ut(1,1,1);function o(){a.setFromEuler(n,!1)}function u(){n.setFromQuaternion(a,void 0,!1)}n._onChange(o),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new sn},normalMatrix:{value:new pe}}),this.matrix=new sn,this.matrixWorld=new sn,this.matrixAutoUpdate=Gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Jr.setFromAxisAngle(t,n),this.quaternion.multiply(Jr),this}rotateOnWorldAxis(t,n){return Jr.setFromAxisAngle(t,n),this.quaternion.premultiply(Jr),this}rotateX(t){return this.rotateOnAxis(y_,t)}rotateY(t){return this.rotateOnAxis(S_,t)}rotateZ(t){return this.rotateOnAxis(M_,t)}translateOnAxis(t,n){return x_.copy(t).applyQuaternion(this.quaternion),this.position.add(x_.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(y_,t)}translateY(t){return this.translateOnAxis(S_,t)}translateZ(t){return this.translateOnAxis(M_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Na.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?uu.copy(t):uu.set(t,n,a);const r=this.parent;this.updateWorldMatrix(!0,!1),Ml.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Na.lookAt(Ml,uu,this.up):Na.lookAt(uu,Ml,this.up),this.quaternion.setFromRotationMatrix(Na),r&&(Na.extractRotation(r.matrixWorld),Jr.setFromRotationMatrix(Na),this.quaternion.premultiply(Jr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(we("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(E_),$r.child=t,this.dispatchEvent($r),$r.child=null):we("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(BT),pd.child=t,this.dispatchEvent(pd),pd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Na.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Na.multiply(t.parent.matrixWorld)),t.applyMatrix4(Na),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(E_),$r.child=t,this.dispatchEvent($r),$r.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,r=this.children.length;a<r;a++){const u=this.children[a].getObjectByProperty(t,n);if(u!==void 0)return u}}getObjectsByProperty(t,n,a=[]){this[t]===n&&a.push(this);const r=this.children;for(let o=0,u=r.length;o<u;o++)r[o].getObjectsByProperty(t,n,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ml,t,zT),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ml,PT,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].updateMatrixWorld(t)}updateWorldMatrix(t,n){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let o=0,u=r.length;o<u;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(f=>({...f})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function o(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(t.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let h=0,g=p.length;h<g;h++){const _=p[h];o(t.shapes,_)}else o(t.shapes,p)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,h=this.material.length;p<h;p++)f.push(o(t.materials,this.material[p]));r.material=f}else r.material=o(t.materials,this.material);if(this.children.length>0){r.children=[];for(let f=0;f<this.children.length;f++)r.children.push(this.children[f].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];r.animations.push(o(t.animations,p))}}if(n){const f=u(t.geometries),p=u(t.materials),h=u(t.textures),g=u(t.images),_=u(t.shapes),v=u(t.skeletons),y=u(t.animations),M=u(t.nodes);f.length>0&&(a.geometries=f),p.length>0&&(a.materials=p),h.length>0&&(a.textures=h),g.length>0&&(a.images=g),_.length>0&&(a.shapes=_),v.length>0&&(a.skeletons=v),y.length>0&&(a.animations=y),M.length>0&&(a.nodes=M)}return a.object=r,a;function u(f){const p=[];for(const h in f){const g=f[h];delete g.metadata,p.push(g)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const r=t.children[a];this.add(r.clone())}return this}}Gn.DEFAULT_UP=new ut(0,1,0);Gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Li=new ut,Ua=new ut,md=new ut,La=new ut,to=new ut,eo=new ut,b_=new ut,gd=new ut,vd=new ut,_d=new ut,xd=new ln,yd=new ln,Sd=new ln;class Pi{constructor(t=new ut,n=new ut,a=new ut){this.a=t,this.b=n,this.c=a}static getNormal(t,n,a,r){r.subVectors(a,n),Li.subVectors(t,n),r.cross(Li);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(t,n,a,r,o){Li.subVectors(r,n),Ua.subVectors(a,n),md.subVectors(t,n);const u=Li.dot(Li),f=Li.dot(Ua),p=Li.dot(md),h=Ua.dot(Ua),g=Ua.dot(md),_=u*h-f*f;if(_===0)return o.set(0,0,0),null;const v=1/_,y=(h*p-f*g)*v,M=(u*g-f*p)*v;return o.set(1-y-M,M,y)}static containsPoint(t,n,a,r){return this.getBarycoord(t,n,a,r,La)===null?!1:La.x>=0&&La.y>=0&&La.x+La.y<=1}static getInterpolation(t,n,a,r,o,u,f,p){return this.getBarycoord(t,n,a,r,La)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(o,La.x),p.addScaledVector(u,La.y),p.addScaledVector(f,La.z),p)}static getInterpolatedAttribute(t,n,a,r,o,u){return xd.setScalar(0),yd.setScalar(0),Sd.setScalar(0),xd.fromBufferAttribute(t,n),yd.fromBufferAttribute(t,a),Sd.fromBufferAttribute(t,r),u.setScalar(0),u.addScaledVector(xd,o.x),u.addScaledVector(yd,o.y),u.addScaledVector(Sd,o.z),u}static isFrontFacing(t,n,a,r){return Li.subVectors(a,n),Ua.subVectors(t,n),Li.cross(Ua).dot(r)<0}set(t,n,a){return this.a.copy(t),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(t,n,a,r){return this.a.copy(t[n]),this.b.copy(t[a]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,n,a,r){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Li.subVectors(this.c,this.b),Ua.subVectors(this.a,this.b),Li.cross(Ua).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Pi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Pi.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,a,r,o){return Pi.getInterpolation(t,this.a,this.b,this.c,n,a,r,o)}containsPoint(t){return Pi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Pi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const a=this.a,r=this.b,o=this.c;let u,f;to.subVectors(r,a),eo.subVectors(o,a),gd.subVectors(t,a);const p=to.dot(gd),h=eo.dot(gd);if(p<=0&&h<=0)return n.copy(a);vd.subVectors(t,r);const g=to.dot(vd),_=eo.dot(vd);if(g>=0&&_<=g)return n.copy(r);const v=p*_-g*h;if(v<=0&&p>=0&&g<=0)return u=p/(p-g),n.copy(a).addScaledVector(to,u);_d.subVectors(t,o);const y=to.dot(_d),M=eo.dot(_d);if(M>=0&&y<=M)return n.copy(o);const b=y*h-p*M;if(b<=0&&h>=0&&M<=0)return f=h/(h-M),n.copy(a).addScaledVector(eo,f);const S=g*M-y*_;if(S<=0&&_-g>=0&&y-M>=0)return b_.subVectors(o,r),f=(_-g)/(_-g+(y-M)),n.copy(r).addScaledVector(b_,f);const x=1/(S+b+v);return u=b*x,f=v*x,n.copy(a).addScaledVector(to,u).addScaledVector(eo,f)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Hx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xs={h:0,s:0,l:0},fu={h:0,s:0,l:0};function Md(c,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?c+(t-c)*6*n:n<1/2?t:n<2/3?c+(t-c)*6*(2/3-n):c}class Ue{constructor(t,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,a)}set(t,n,a){if(n===void 0&&a===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,n,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=qn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Re.colorSpaceToWorking(this,n),this}setRGB(t,n,a,r=Re.workingColorSpace){return this.r=t,this.g=n,this.b=a,Re.colorSpaceToWorking(this,r),this}setHSL(t,n,a,r=Re.workingColorSpace){if(t=bT(t,1),n=be(n,0,1),a=be(a,0,1),n===0)this.r=this.g=this.b=a;else{const o=a<=.5?a*(1+n):a+n-a*n,u=2*a-o;this.r=Md(u,o,t+1/3),this.g=Md(u,o,t),this.b=Md(u,o,t-1/3)}return Re.colorSpaceToWorking(this,r),this}setStyle(t,n=qn){function a(o){o!==void 0&&parseFloat(o)<1&&ue("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const u=r[1],f=r[2];switch(u){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:ue("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=r[1],u=o.length;if(u===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(o,16),n);ue("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=qn){const a=Hx[t.toLowerCase()];return a!==void 0?this.setHex(a,n):ue("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ba(t.r),this.g=Ba(t.g),this.b=Ba(t.b),this}copyLinearToSRGB(t){return this.r=uo(t.r),this.g=uo(t.g),this.b=uo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=qn){return Re.workingToColorSpace(In.copy(this),t),Math.round(be(In.r*255,0,255))*65536+Math.round(be(In.g*255,0,255))*256+Math.round(be(In.b*255,0,255))}getHexString(t=qn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Re.workingColorSpace){Re.workingToColorSpace(In.copy(this),n);const a=In.r,r=In.g,o=In.b,u=Math.max(a,r,o),f=Math.min(a,r,o);let p,h;const g=(f+u)/2;if(f===u)p=0,h=0;else{const _=u-f;switch(h=g<=.5?_/(u+f):_/(2-u-f),u){case a:p=(r-o)/_+(r<o?6:0);break;case r:p=(o-a)/_+2;break;case o:p=(a-r)/_+4;break}p/=6}return t.h=p,t.s=h,t.l=g,t}getRGB(t,n=Re.workingColorSpace){return Re.workingToColorSpace(In.copy(this),n),t.r=In.r,t.g=In.g,t.b=In.b,t}getStyle(t=qn){Re.workingToColorSpace(In.copy(this),t);const n=In.r,a=In.g,r=In.b;return t!==qn?`color(${t} ${n.toFixed(3)} ${a.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(r*255)})`}offsetHSL(t,n,a){return this.getHSL(xs),this.setHSL(xs.h+t,xs.s+n,xs.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,a){return this.r=t.r+(n.r-t.r)*a,this.g=t.g+(n.g-t.g)*a,this.b=t.b+(n.b-t.b)*a,this}lerpHSL(t,n){this.getHSL(xs),t.getHSL(fu);const a=ad(xs.h,fu.h,n),r=ad(xs.s,fu.s,n),o=ad(xs.l,fu.l,n);return this.setHSL(a,r,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,a=this.g,r=this.b,o=t.elements;return this.r=o[0]*n+o[3]*a+o[6]*r,this.g=o[1]*n+o[4]*a+o[7]*r,this.b=o[2]*n+o[5]*a+o[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new Ue;Ue.NAMES=Hx;let FT=0;class Il extends _o{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:FT++}),this.uuid=Pl(),this.name="",this.type="Material",this.blending=co,this.side=As,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pd,this.blendDst=Bd,this.blendEquation=nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=ho,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=c_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wr,this.stencilZFail=Wr,this.stencilZPass=Wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const a=t[n];if(a===void 0){ue(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){ue(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(a):r&&r.isVector3&&a&&a.isVector3?r.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==co&&(a.blending=this.blending),this.side!==As&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==Pd&&(a.blendSrc=this.blendSrc),this.blendDst!==Bd&&(a.blendDst=this.blendDst),this.blendEquation!==nr&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==ho&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==c_&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wr&&(a.stencilFail=this.stencilFail),this.stencilZFail!==Wr&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==Wr&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.allowOverride===!1&&(a.allowOverride=!1),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function r(o){const u=[];for(const f in o){const p=o[f];delete p.metadata,u.push(p)}return u}if(n){const o=r(t.textures),u=r(t.images);o.length>0&&(a.textures=o),u.length>0&&(a.images=u)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let a=null;if(n!==null){const r=n.length;a=new Array(r);for(let o=0;o!==r;++o)a[o]=n[o].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Gx extends Il{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new aa,this.combine=yx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const gn=new ut,hu=new Le;let IT=0;class na{constructor(t,n,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:IT++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=a,this.usage=u_,this.updateRanges=[],this.gpuType=Ji,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,a){t*=this.itemSize,a*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[t+r]=n.array[a+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)hu.fromBufferAttribute(this,n),hu.applyMatrix3(t),this.setXY(n,hu.x,hu.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)gn.fromBufferAttribute(this,n),gn.applyMatrix3(t),this.setXYZ(n,gn.x,gn.y,gn.z);return this}applyMatrix4(t){for(let n=0,a=this.count;n<a;n++)gn.fromBufferAttribute(this,n),gn.applyMatrix4(t),this.setXYZ(n,gn.x,gn.y,gn.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)gn.fromBufferAttribute(this,n),gn.applyNormalMatrix(t),this.setXYZ(n,gn.x,gn.y,gn.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)gn.fromBufferAttribute(this,n),gn.transformDirection(t),this.setXYZ(n,gn.x,gn.y,gn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let a=this.array[t*this.itemSize+n];return this.normalized&&(a=xl(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=Jn(a,this.array)),this.array[t*this.itemSize+n]=a,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=xl(n,this.array)),n}setX(t,n){return this.normalized&&(n=Jn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=xl(n,this.array)),n}setY(t,n){return this.normalized&&(n=Jn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=xl(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Jn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=xl(n,this.array)),n}setW(t,n){return this.normalized&&(n=Jn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,a){return t*=this.itemSize,this.normalized&&(n=Jn(n,this.array),a=Jn(a,this.array)),this.array[t+0]=n,this.array[t+1]=a,this}setXYZ(t,n,a,r){return t*=this.itemSize,this.normalized&&(n=Jn(n,this.array),a=Jn(a,this.array),r=Jn(r,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=r,this}setXYZW(t,n,a,r,o){return t*=this.itemSize,this.normalized&&(n=Jn(n,this.array),a=Jn(a,this.array),r=Jn(r,this.array),o=Jn(o,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=r,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==u_&&(t.usage=this.usage),t}}class Vx extends na{constructor(t,n,a){super(new Uint16Array(t),n,a)}}class kx extends na{constructor(t,n,a){super(new Uint32Array(t),n,a)}}class Fa extends na{constructor(t,n,a){super(new Float32Array(t),n,a)}}let HT=0;const Mi=new sn,Ed=new Gn,no=new ut,ci=new Fl,El=new Fl,En=new ut;class Ga extends _o{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:HT++}),this.uuid=Pl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Bx(t)?kx:Vx)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,a=0){this.groups.push({start:t,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const o=new pe().getNormalMatrix(t);a.applyNormalMatrix(o),a.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Mi.makeRotationFromQuaternion(t),this.applyMatrix4(Mi),this}rotateX(t){return Mi.makeRotationX(t),this.applyMatrix4(Mi),this}rotateY(t){return Mi.makeRotationY(t),this.applyMatrix4(Mi),this}rotateZ(t){return Mi.makeRotationZ(t),this.applyMatrix4(Mi),this}translate(t,n,a){return Mi.makeTranslation(t,n,a),this.applyMatrix4(Mi),this}scale(t,n,a){return Mi.makeScale(t,n,a),this.applyMatrix4(Mi),this}lookAt(t){return Ed.lookAt(t),Ed.updateMatrix(),this.applyMatrix4(Ed.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(no).negate(),this.translate(no.x,no.y,no.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let r=0,o=t.length;r<o;r++){const u=t[r];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Fa(a,3))}else{const a=Math.min(t.length,n.count);for(let r=0;r<a;r++){const o=t[r];n.setXYZ(r,o.x,o.y,o.z||0)}t.length>n.count&&ue("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fl);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){we("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ut(-1/0,-1/0,-1/0),new ut(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let a=0,r=n.length;a<r;a++){const o=n[a];ci.setFromBufferAttribute(o),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&we('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xp);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){we("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ut,1/0);return}if(t){const a=this.boundingSphere.center;if(ci.setFromBufferAttribute(t),n)for(let o=0,u=n.length;o<u;o++){const f=n[o];El.setFromBufferAttribute(f),this.morphTargetsRelative?(En.addVectors(ci.min,El.min),ci.expandByPoint(En),En.addVectors(ci.max,El.max),ci.expandByPoint(En)):(ci.expandByPoint(El.min),ci.expandByPoint(El.max))}ci.getCenter(a);let r=0;for(let o=0,u=t.count;o<u;o++)En.fromBufferAttribute(t,o),r=Math.max(r,a.distanceToSquared(En));if(n)for(let o=0,u=n.length;o<u;o++){const f=n[o],p=this.morphTargetsRelative;for(let h=0,g=f.count;h<g;h++)En.fromBufferAttribute(f,h),p&&(no.fromBufferAttribute(t,h),En.add(no)),r=Math.max(r,a.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&we('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){we("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,r=n.normal,o=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new na(new Float32Array(4*a.count),4));const u=this.getAttribute("tangent"),f=[],p=[];for(let Y=0;Y<a.count;Y++)f[Y]=new ut,p[Y]=new ut;const h=new ut,g=new ut,_=new ut,v=new Le,y=new Le,M=new Le,b=new ut,S=new ut;function x(Y,w,O){h.fromBufferAttribute(a,Y),g.fromBufferAttribute(a,w),_.fromBufferAttribute(a,O),v.fromBufferAttribute(o,Y),y.fromBufferAttribute(o,w),M.fromBufferAttribute(o,O),g.sub(h),_.sub(h),y.sub(v),M.sub(v);const G=1/(y.x*M.y-M.x*y.y);isFinite(G)&&(b.copy(g).multiplyScalar(M.y).addScaledVector(_,-y.y).multiplyScalar(G),S.copy(_).multiplyScalar(y.x).addScaledVector(g,-M.x).multiplyScalar(G),f[Y].add(b),f[w].add(b),f[O].add(b),p[Y].add(S),p[w].add(S),p[O].add(S))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let Y=0,w=T.length;Y<w;++Y){const O=T[Y],G=O.start,$=O.count;for(let V=G,j=G+$;V<j;V+=3)x(t.getX(V+0),t.getX(V+1),t.getX(V+2))}const C=new ut,L=new ut,z=new ut,B=new ut;function P(Y){z.fromBufferAttribute(r,Y),B.copy(z);const w=f[Y];C.copy(w),C.sub(z.multiplyScalar(z.dot(w))).normalize(),L.crossVectors(B,w);const G=L.dot(p[Y])<0?-1:1;u.setXYZW(Y,C.x,C.y,C.z,G)}for(let Y=0,w=T.length;Y<w;++Y){const O=T[Y],G=O.start,$=O.count;for(let V=G,j=G+$;V<j;V+=3)P(t.getX(V+0)),P(t.getX(V+1)),P(t.getX(V+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new na(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let v=0,y=a.count;v<y;v++)a.setXYZ(v,0,0,0);const r=new ut,o=new ut,u=new ut,f=new ut,p=new ut,h=new ut,g=new ut,_=new ut;if(t)for(let v=0,y=t.count;v<y;v+=3){const M=t.getX(v+0),b=t.getX(v+1),S=t.getX(v+2);r.fromBufferAttribute(n,M),o.fromBufferAttribute(n,b),u.fromBufferAttribute(n,S),g.subVectors(u,o),_.subVectors(r,o),g.cross(_),f.fromBufferAttribute(a,M),p.fromBufferAttribute(a,b),h.fromBufferAttribute(a,S),f.add(g),p.add(g),h.add(g),a.setXYZ(M,f.x,f.y,f.z),a.setXYZ(b,p.x,p.y,p.z),a.setXYZ(S,h.x,h.y,h.z)}else for(let v=0,y=n.count;v<y;v+=3)r.fromBufferAttribute(n,v+0),o.fromBufferAttribute(n,v+1),u.fromBufferAttribute(n,v+2),g.subVectors(u,o),_.subVectors(r,o),g.cross(_),a.setXYZ(v+0,g.x,g.y,g.z),a.setXYZ(v+1,g.x,g.y,g.z),a.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,a=t.count;n<a;n++)En.fromBufferAttribute(t,n),En.normalize(),t.setXYZ(n,En.x,En.y,En.z)}toNonIndexed(){function t(f,p){const h=f.array,g=f.itemSize,_=f.normalized,v=new h.constructor(p.length*g);let y=0,M=0;for(let b=0,S=p.length;b<S;b++){f.isInterleavedBufferAttribute?y=p[b]*f.data.stride+f.offset:y=p[b]*g;for(let x=0;x<g;x++)v[M++]=h[y++]}return new na(v,g,_)}if(this.index===null)return ue("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ga,a=this.index.array,r=this.attributes;for(const f in r){const p=r[f],h=t(p,a);n.setAttribute(f,h)}const o=this.morphAttributes;for(const f in o){const p=[],h=o[f];for(let g=0,_=h.length;g<_;g++){const v=h[g],y=t(v,a);p.push(y)}n.morphAttributes[f]=p}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,p=u.length;f<p;f++){const h=u[f];n.addGroup(h.start,h.count,h.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const h in p)p[h]!==void 0&&(t[h]=p[h]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const p in a){const h=a[p];t.data.attributes[p]=h.toJSON(t.data)}const r={};let o=!1;for(const p in this.morphAttributes){const h=this.morphAttributes[p],g=[];for(let _=0,v=h.length;_<v;_++){const y=h[_];g.push(y.toJSON(t.data))}g.length>0&&(r[p]=g,o=!0)}o&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(t.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(t.data.boundingSphere=f.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const r=t.attributes;for(const h in r){const g=r[h];this.setAttribute(h,g.clone(n))}const o=t.morphAttributes;for(const h in o){const g=[],_=o[h];for(let v=0,y=_.length;v<y;v++)g.push(_[v].clone(n));this.morphAttributes[h]=g}this.morphTargetsRelative=t.morphTargetsRelative;const u=t.groups;for(let h=0,g=u.length;h<g;h++){const _=u[h];this.addGroup(_.start,_.count,_.materialIndex)}const f=t.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const T_=new sn,js=new Ix,du=new Xp,A_=new ut,pu=new ut,mu=new ut,gu=new ut,bd=new ut,vu=new ut,w_=new ut,_u=new ut;class Hi extends Gn{constructor(t=new Ga,n=new Gx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const r=n[a[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=r.length;o<u;o++){const f=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=o}}}}getVertexPosition(t,n){const a=this.geometry,r=a.attributes.position,o=a.morphAttributes.position,u=a.morphTargetsRelative;n.fromBufferAttribute(r,t);const f=this.morphTargetInfluences;if(o&&f){vu.set(0,0,0);for(let p=0,h=o.length;p<h;p++){const g=f[p],_=o[p];g!==0&&(bd.fromBufferAttribute(_,t),u?vu.addScaledVector(bd,g):vu.addScaledVector(bd.sub(n),g))}n.add(vu)}return n}raycast(t,n){const a=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),du.copy(a.boundingSphere),du.applyMatrix4(o),js.copy(t.ray).recast(t.near),!(du.containsPoint(js.origin)===!1&&(js.intersectSphere(du,A_)===null||js.origin.distanceToSquared(A_)>(t.far-t.near)**2))&&(T_.copy(o).invert(),js.copy(t.ray).applyMatrix4(T_),!(a.boundingBox!==null&&js.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,n,js)))}_computeIntersections(t,n,a){let r;const o=this.geometry,u=this.material,f=o.index,p=o.attributes.position,h=o.attributes.uv,g=o.attributes.uv1,_=o.attributes.normal,v=o.groups,y=o.drawRange;if(f!==null)if(Array.isArray(u))for(let M=0,b=v.length;M<b;M++){const S=v[M],x=u[S.materialIndex],T=Math.max(S.start,y.start),C=Math.min(f.count,Math.min(S.start+S.count,y.start+y.count));for(let L=T,z=C;L<z;L+=3){const B=f.getX(L),P=f.getX(L+1),Y=f.getX(L+2);r=xu(this,x,t,a,h,g,_,B,P,Y),r&&(r.faceIndex=Math.floor(L/3),r.face.materialIndex=S.materialIndex,n.push(r))}}else{const M=Math.max(0,y.start),b=Math.min(f.count,y.start+y.count);for(let S=M,x=b;S<x;S+=3){const T=f.getX(S),C=f.getX(S+1),L=f.getX(S+2);r=xu(this,u,t,a,h,g,_,T,C,L),r&&(r.faceIndex=Math.floor(S/3),n.push(r))}}else if(p!==void 0)if(Array.isArray(u))for(let M=0,b=v.length;M<b;M++){const S=v[M],x=u[S.materialIndex],T=Math.max(S.start,y.start),C=Math.min(p.count,Math.min(S.start+S.count,y.start+y.count));for(let L=T,z=C;L<z;L+=3){const B=L,P=L+1,Y=L+2;r=xu(this,x,t,a,h,g,_,B,P,Y),r&&(r.faceIndex=Math.floor(L/3),r.face.materialIndex=S.materialIndex,n.push(r))}}else{const M=Math.max(0,y.start),b=Math.min(p.count,y.start+y.count);for(let S=M,x=b;S<x;S+=3){const T=S,C=S+1,L=S+2;r=xu(this,u,t,a,h,g,_,T,C,L),r&&(r.faceIndex=Math.floor(S/3),n.push(r))}}}}function GT(c,t,n,a,r,o,u,f){let p;if(t.side===ti?p=a.intersectTriangle(u,o,r,!0,f):p=a.intersectTriangle(r,o,u,t.side===As,f),p===null)return null;_u.copy(f),_u.applyMatrix4(c.matrixWorld);const h=n.ray.origin.distanceTo(_u);return h<n.near||h>n.far?null:{distance:h,point:_u.clone(),object:c}}function xu(c,t,n,a,r,o,u,f,p,h){c.getVertexPosition(f,pu),c.getVertexPosition(p,mu),c.getVertexPosition(h,gu);const g=GT(c,t,n,a,pu,mu,gu,w_);if(g){const _=new ut;Pi.getBarycoord(w_,pu,mu,gu,_),r&&(g.uv=Pi.getInterpolatedAttribute(r,f,p,h,_,new Le)),o&&(g.uv1=Pi.getInterpolatedAttribute(o,f,p,h,_,new Le)),u&&(g.normal=Pi.getInterpolatedAttribute(u,f,p,h,_,new ut),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const v={a:f,b:p,c:h,normal:new ut,materialIndex:0};Pi.getNormal(pu,mu,gu,v.normal),g.face=v,g.barycoord=_}return g}class xo extends Ga{constructor(t=1,n=1,a=1,r=1,o=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:a,widthSegments:r,heightSegments:o,depthSegments:u};const f=this;r=Math.floor(r),o=Math.floor(o),u=Math.floor(u);const p=[],h=[],g=[],_=[];let v=0,y=0;M("z","y","x",-1,-1,a,n,t,u,o,0),M("z","y","x",1,-1,a,n,-t,u,o,1),M("x","z","y",1,1,t,a,n,r,u,2),M("x","z","y",1,-1,t,a,-n,r,u,3),M("x","y","z",1,-1,t,n,a,r,o,4),M("x","y","z",-1,-1,t,n,-a,r,o,5),this.setIndex(p),this.setAttribute("position",new Fa(h,3)),this.setAttribute("normal",new Fa(g,3)),this.setAttribute("uv",new Fa(_,2));function M(b,S,x,T,C,L,z,B,P,Y,w){const O=L/P,G=z/Y,$=L/2,V=z/2,j=B/2,X=P+1,D=Y+1;let H=0,Q=0;const ft=new ut;for(let mt=0;mt<D;mt++){const F=mt*G-V;for(let Z=0;Z<X;Z++){const _t=Z*O-$;ft[b]=_t*T,ft[S]=F*C,ft[x]=j,h.push(ft.x,ft.y,ft.z),ft[b]=0,ft[S]=0,ft[x]=B>0?1:-1,g.push(ft.x,ft.y,ft.z),_.push(Z/P),_.push(1-mt/Y),H+=1}}for(let mt=0;mt<Y;mt++)for(let F=0;F<P;F++){const Z=v+F+X*mt,_t=v+F+X*(mt+1),Tt=v+(F+1)+X*(mt+1),Ft=v+(F+1)+X*mt;p.push(Z,_t,Ft),p.push(_t,Tt,Ft),Q+=6}f.addGroup(y,Q,w),y+=Q,v+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function vo(c){const t={};for(const n in c){t[n]={};for(const a in c[n]){const r=c[n][a];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(ue("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][a]=null):t[n][a]=r.clone():Array.isArray(r)?t[n][a]=r.slice():t[n][a]=r}}return t}function kn(c){const t={};for(let n=0;n<c.length;n++){const a=vo(c[n]);for(const r in a)t[r]=a[r]}return t}function VT(c){const t=[];for(let n=0;n<c.length;n++)t.push(c[n].clone());return t}function qx(c){const t=c.getRenderTarget();return t===null?c.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Re.workingColorSpace}const kT={clone:vo,merge:kn};var qT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,XT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sa extends Il{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qT,this.fragmentShader=XT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=vo(t.uniforms),this.uniformsGroups=VT(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const u=this.uniforms[r].value;u&&u.isTexture?n.uniforms[r]={type:"t",value:u.toJSON(t).uuid}:u&&u.isColor?n.uniforms[r]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[r]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[r]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[r]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[r]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[r]={type:"m4",value:u.toArray()}:n.uniforms[r]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const r in this.extensions)this.extensions[r]===!0&&(a[r]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class Xx extends Gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new sn,this.projectionMatrix=new sn,this.projectionMatrixInverse=new sn,this.coordinateSystem=$i,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ys=new ut,R_=new Le,C_=new Le;class zi extends Xx{constructor(t=50,n=1,a=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=wp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(id*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return wp*2*Math.atan(Math.tan(id*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,a){ys.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ys.x,ys.y).multiplyScalar(-t/ys.z),ys.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(ys.x,ys.y).multiplyScalar(-t/ys.z)}getViewSize(t,n){return this.getViewBounds(t,R_,C_),n.subVectors(C_,R_)}setViewOffset(t,n,a,r,o,u){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=r,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(id*.5*this.fov)/this.zoom,a=2*n,r=this.aspect*a,o=-.5*r;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,h=u.fullHeight;o+=u.offsetX*r/p,n-=u.offsetY*a/h,r*=u.width/p,a*=u.height/h}const f=this.filmOffset;f!==0&&(o+=t*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-a,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const io=-90,ao=1;class WT extends Gn{constructor(t,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new zi(io,ao,t,n);r.layers=this.layers,this.add(r);const o=new zi(io,ao,t,n);o.layers=this.layers,this.add(o);const u=new zi(io,ao,t,n);u.layers=this.layers,this.add(u);const f=new zi(io,ao,t,n);f.layers=this.layers,this.add(f);const p=new zi(io,ao,t,n);p.layers=this.layers,this.add(p);const h=new zi(io,ao,t,n);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[a,r,o,u,f,p]=n;for(const h of n)this.remove(h);if(t===$i)a.up.set(0,1,0),a.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===Ou)a.up.set(0,-1,0),a.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of n)this.add(h),h.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,u,f,p,h,g]=this.children,_=t.getRenderTarget(),v=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;const b=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0,r),t.render(n,o),t.setRenderTarget(a,1,r),t.render(n,u),t.setRenderTarget(a,2,r),t.render(n,f),t.setRenderTarget(a,3,r),t.render(n,p),t.setRenderTarget(a,4,r),t.render(n,h),a.texture.generateMipmaps=b,t.setRenderTarget(a,5,r),t.render(n,g),t.setRenderTarget(_,v,y),t.xr.enabled=M,a.texture.needsPMREMUpdate=!0}}class Wx extends Hn{constructor(t=[],n=rr,a,r,o,u,f,p,h,g){super(t,n,a,r,o,u,f,p,h,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Yx extends ea{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},r=[a,a,a,a,a,a];this.texture=new Wx(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new xo(5,5,5),o=new sa({name:"CubemapFromEquirect",uniforms:vo(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:ti,blending:Pa});o.uniforms.tEquirect.value=n;const u=new Hi(r,o),f=n.minFilter;return n.minFilter===Es&&(n.minFilter=zn),new WT(1,10,this).update(t,u),n.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(t,n=!0,a=!0,r=!0){const o=t.getRenderTarget();for(let u=0;u<6;u++)t.setRenderTarget(this,u),t.clear(n,a,r);t.setRenderTarget(o)}}class yu extends Gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const YT={type:"move"};class Td{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ut,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ut),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ut,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ut),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const a of t.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,a){let r=null,o=null,u=null;const f=this._targetRay,p=this._grip,h=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(h&&t.hand){u=!0;for(const b of t.hand.values()){const S=n.getJointPose(b,a),x=this._getHandJoint(h,b);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const g=h.joints["index-finger-tip"],_=h.joints["thumb-tip"],v=g.position.distanceTo(_.position),y=.02,M=.005;h.inputState.pinching&&v>y+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&v<=y-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(o=n.getPose(t.gripSpace,a),o!==null&&(p.matrix.fromArray(o.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,o.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(o.linearVelocity)):p.hasLinearVelocity=!1,o.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(o.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(r=n.getPose(t.targetRaySpace,a),r===null&&o!==null&&(r=o),r!==null&&(f.matrix.fromArray(r.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,r.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(r.linearVelocity)):f.hasLinearVelocity=!1,r.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(r.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(YT)))}return f!==null&&(f.visible=r!==null),p!==null&&(p.visible=o!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const a=new yu;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[n.jointName]=a,t.add(a)}return t.joints[n.jointName]}}class jT extends Gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new aa,this.environmentIntensity=1,this.environmentRotation=new aa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class ZT extends Hn{constructor(t=null,n=1,a=1,r,o,u,f,p,h=On,g=On,_,v){super(null,u,f,p,h,g,r,o,_,v),this.isDataTexture=!0,this.image={data:t,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ad=new ut,KT=new ut,QT=new pe;class tr{constructor(t=new ut(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,a,r){return this.normal.set(t,n,a),this.constant=r,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,a){const r=Ad.subVectors(a,n).cross(KT.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const a=t.delta(Ad),r=this.normal.dot(a);if(r===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(t.start).addScaledVector(a,o)}intersectsLine(t){const n=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return n<0&&a>0||a<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const a=n||QT.getNormalMatrix(t),r=this.coplanarPoint(Ad).applyMatrix4(t),o=this.normal.applyMatrix3(a).normalize();return this.constant=-r.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zs=new Xp,JT=new Le(.5,.5),Su=new ut;class Yp{constructor(t=new tr,n=new tr,a=new tr,r=new tr,o=new tr,u=new tr){this.planes=[t,n,a,r,o,u]}set(t,n,a,r,o,u){const f=this.planes;return f[0].copy(t),f[1].copy(n),f[2].copy(a),f[3].copy(r),f[4].copy(o),f[5].copy(u),this}copy(t){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,n=$i,a=!1){const r=this.planes,o=t.elements,u=o[0],f=o[1],p=o[2],h=o[3],g=o[4],_=o[5],v=o[6],y=o[7],M=o[8],b=o[9],S=o[10],x=o[11],T=o[12],C=o[13],L=o[14],z=o[15];if(r[0].setComponents(h-u,y-g,x-M,z-T).normalize(),r[1].setComponents(h+u,y+g,x+M,z+T).normalize(),r[2].setComponents(h+f,y+_,x+b,z+C).normalize(),r[3].setComponents(h-f,y-_,x-b,z-C).normalize(),a)r[4].setComponents(p,v,S,L).normalize(),r[5].setComponents(h-p,y-v,x-S,z-L).normalize();else if(r[4].setComponents(h-p,y-v,x-S,z-L).normalize(),n===$i)r[5].setComponents(h+p,y+v,x+S,z+L).normalize();else if(n===Ou)r[5].setComponents(p,v,S,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Zs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Zs.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Zs)}intersectsSprite(t){Zs.center.set(0,0,0);const n=JT.distanceTo(t.center);return Zs.radius=.7071067811865476+n,Zs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Zs)}intersectsSphere(t){const n=this.planes,a=t.center,r=-t.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(a)<r)return!1;return!0}intersectsBox(t){const n=this.planes;for(let a=0;a<6;a++){const r=n[a];if(Su.x=r.normal.x>0?t.max.x:t.min.x,Su.y=r.normal.y>0?t.max.y:t.min.y,Su.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Su)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class D_ extends Hn{constructor(t,n,a,r,o,u,f,p,h){super(t,n,a,r,o,u,f,p,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ol extends Hn{constructor(t,n,a=ia,r,o,u,f=On,p=On,h,g=Ha,_=1){if(g!==Ha&&g!==sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:n,depth:_};super(v,r,o,u,f,p,g,a,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new qp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class $T extends Ol{constructor(t,n=ia,a=rr,r,o,u=On,f=On,p,h=Ha){const g={width:t,height:t,depth:1},_=[g,g,g,g,g,g];super(t,t,n,a,r,o,u,f,p,h),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class jx extends Hn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Hl extends Ga{constructor(t=1,n=1,a=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:a,heightSegments:r};const o=t/2,u=n/2,f=Math.floor(a),p=Math.floor(r),h=f+1,g=p+1,_=t/f,v=n/p,y=[],M=[],b=[],S=[];for(let x=0;x<g;x++){const T=x*v-u;for(let C=0;C<h;C++){const L=C*_-o;M.push(L,-T,0),b.push(0,0,1),S.push(C/f),S.push(1-x/p)}}for(let x=0;x<p;x++)for(let T=0;T<f;T++){const C=T+h*x,L=T+h*(x+1),z=T+1+h*(x+1),B=T+1+h*x;y.push(C,L,B),y.push(L,z,B)}this.setIndex(y),this.setAttribute("position",new Fa(M,3)),this.setAttribute("normal",new Fa(b,3)),this.setAttribute("uv",new Fa(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hl(t.width,t.height,t.widthSegments,t.heightSegments)}}class t1 extends sa{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class N_ extends Il{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Px,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new aa,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class e1 extends Il{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class n1 extends Il{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Zx extends Gn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(t),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const wd=new sn,U_=new ut,L_=new ut;class i1{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.mapType=ui,this.map=null,this.mapPass=null,this.matrix=new sn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yp,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new ln(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,a=this.matrix;U_.setFromMatrixPosition(t.matrixWorld),n.position.copy(U_),L_.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(L_),n.updateMatrixWorld(),wd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wd,n.coordinateSystem,n.reversedDepth),n.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(wd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Bu extends Xx{constructor(t=-1,n=1,a=1,r=-1,o=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=a,this.bottom=r,this.near=o,this.far=u,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,a,r,o,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=r,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=a-t,u=a+t,f=r+n,p=r-n;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=h*this.view.offsetX,u=o+h*this.view.width,f-=g*this.view.offsetY,p=f-g*this.view.height}this.projectionMatrix.makeOrthographic(o,u,f,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class a1 extends i1{constructor(){super(new Bu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class s1 extends Zx{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gn.DEFAULT_UP),this.updateMatrix(),this.target=new Gn,this.shadow=new a1}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class r1 extends Zx{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class o1 extends zi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class l1{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}}const O_=new sn;class c1{constructor(t,n,a=0,r=1/0){this.ray=new Ix(t,n),this.near=a,this.far=r,this.camera=null,this.layers=new Wp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):we("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return O_.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(O_),this}intersectObject(t,n=!0,a=[]){return Rp(t,this,a,n),a.sort(z_),a}intersectObjects(t,n=!0,a=[]){for(let r=0,o=t.length;r<o;r++)Rp(t[r],this,a,n);return a.sort(z_),a}}function z_(c,t){return c.distance-t.distance}function Rp(c,t,n,a){let r=!0;if(c.layers.test(t.layers)&&c.raycast(t,n)===!1&&(r=!1),r===!0&&a===!0){const o=c.children;for(let u=0,f=o.length;u<f;u++)Rp(o[u],t,n,!0)}}function P_(c,t,n,a){const r=u1(a);switch(n){case Lx:return c*t;case zx:return c*t/r.components*r.byteLength;case Ip:return c*t/r.components*r.byteLength;case mo:return c*t*2/r.components*r.byteLength;case Hp:return c*t*2/r.components*r.byteLength;case Ox:return c*t*3/r.components*r.byteLength;case Fi:return c*t*4/r.components*r.byteLength;case Gp:return c*t*4/r.components*r.byteLength;case Au:case wu:return Math.floor((c+3)/4)*Math.floor((t+3)/4)*8;case Ru:case Cu:return Math.floor((c+3)/4)*Math.floor((t+3)/4)*16;case Kd:case Jd:return Math.max(c,16)*Math.max(t,8)/4;case Zd:case Qd:return Math.max(c,8)*Math.max(t,8)/2;case $d:case tp:case np:case ip:return Math.floor((c+3)/4)*Math.floor((t+3)/4)*8;case ep:case ap:case sp:return Math.floor((c+3)/4)*Math.floor((t+3)/4)*16;case rp:return Math.floor((c+3)/4)*Math.floor((t+3)/4)*16;case op:return Math.floor((c+4)/5)*Math.floor((t+3)/4)*16;case lp:return Math.floor((c+4)/5)*Math.floor((t+4)/5)*16;case cp:return Math.floor((c+5)/6)*Math.floor((t+4)/5)*16;case up:return Math.floor((c+5)/6)*Math.floor((t+5)/6)*16;case fp:return Math.floor((c+7)/8)*Math.floor((t+4)/5)*16;case hp:return Math.floor((c+7)/8)*Math.floor((t+5)/6)*16;case dp:return Math.floor((c+7)/8)*Math.floor((t+7)/8)*16;case pp:return Math.floor((c+9)/10)*Math.floor((t+4)/5)*16;case mp:return Math.floor((c+9)/10)*Math.floor((t+5)/6)*16;case gp:return Math.floor((c+9)/10)*Math.floor((t+7)/8)*16;case vp:return Math.floor((c+9)/10)*Math.floor((t+9)/10)*16;case _p:return Math.floor((c+11)/12)*Math.floor((t+9)/10)*16;case xp:return Math.floor((c+11)/12)*Math.floor((t+11)/12)*16;case yp:case Sp:case Mp:return Math.ceil(c/4)*Math.ceil(t/4)*16;case Ep:case bp:return Math.ceil(c/4)*Math.ceil(t/4)*8;case Tp:case Ap:return Math.ceil(c/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function u1(c){switch(c){case ui:case Cx:return{byteLength:1,components:1};case Nl:case Dx:case Ia:return{byteLength:2,components:1};case Bp:case Fp:return{byteLength:2,components:4};case ia:case Pp:case Ji:return{byteLength:4,components:1};case Nx:case Ux:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${c}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zp}}));typeof window<"u"&&(window.__THREE__?ue("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zp);function Kx(){let c=null,t=!1,n=null,a=null;function r(o,u){n(o,u),a=c.requestAnimationFrame(r)}return{start:function(){t!==!0&&n!==null&&(a=c.requestAnimationFrame(r),t=!0)},stop:function(){c.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(o){n=o},setContext:function(o){c=o}}}function f1(c){const t=new WeakMap;function n(f,p){const h=f.array,g=f.usage,_=h.byteLength,v=c.createBuffer();c.bindBuffer(p,v),c.bufferData(p,h,g),f.onUploadCallback();let y;if(h instanceof Float32Array)y=c.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)y=c.HALF_FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?y=c.HALF_FLOAT:y=c.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=c.SHORT;else if(h instanceof Uint32Array)y=c.UNSIGNED_INT;else if(h instanceof Int32Array)y=c.INT;else if(h instanceof Int8Array)y=c.BYTE;else if(h instanceof Uint8Array)y=c.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=c.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:_}}function a(f,p,h){const g=p.array,_=p.updateRanges;if(c.bindBuffer(h,f),_.length===0)c.bufferSubData(h,0,g);else{_.sort((y,M)=>y.start-M.start);let v=0;for(let y=1;y<_.length;y++){const M=_[v],b=_[y];b.start<=M.start+M.count+1?M.count=Math.max(M.count,b.start+b.count-M.start):(++v,_[v]=b)}_.length=v+1;for(let y=0,M=_.length;y<M;y++){const b=_[y];c.bufferSubData(h,b.start*g.BYTES_PER_ELEMENT,g,b.start,b.count)}p.clearUpdateRanges()}p.onUploadCallback()}function r(f){return f.isInterleavedBufferAttribute&&(f=f.data),t.get(f)}function o(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=t.get(f);p&&(c.deleteBuffer(p.buffer),t.delete(f))}function u(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=t.get(f);(!g||g.version<f.version)&&t.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const h=t.get(f);if(h===void 0)t.set(f,n(f,p));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(h.buffer,f,p),h.version=f.version}}return{get:r,remove:o,update:u}}var h1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,d1=`#ifdef USE_ALPHAHASH
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
#endif`,p1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,m1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,g1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,v1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_1=`#ifdef USE_AOMAP
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
#endif`,x1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,y1=`#ifdef USE_BATCHING
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
#endif`,S1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,M1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,E1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,b1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,T1=`#ifdef USE_IRIDESCENCE
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
#endif`,A1=`#ifdef USE_BUMPMAP
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
#endif`,w1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,R1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,C1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,D1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,N1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,U1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,L1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,O1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,z1=`#define PI 3.141592653589793
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
} // validated`,P1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,B1=`vec3 transformedNormal = objectNormal;
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
#endif`,F1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,I1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,H1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,G1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,V1="gl_FragColor = linearToOutputTexel( gl_FragColor );",k1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,q1=`#ifdef USE_ENVMAP
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
#endif`,X1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,W1=`#ifdef USE_ENVMAP
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
#endif`,Y1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,j1=`#ifdef USE_ENVMAP
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
#endif`,Z1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,K1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Q1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,J1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$1=`#ifdef USE_GRADIENTMAP
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
}`,tA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,iA=`uniform bool receiveShadow;
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
#endif`,aA=`#ifdef USE_ENVMAP
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
#endif`,sA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,oA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cA=`PhysicalMaterial material;
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
#endif`,uA=`uniform sampler2D dfgLUT;
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
}`,fA=`
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
#endif`,hA=`#if defined( RE_IndirectDiffuse )
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
#endif`,dA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_A=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,SA=`#if defined( USE_POINTS_UV )
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
#endif`,MA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,EA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,TA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,AA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wA=`#ifdef USE_MORPHTARGETS
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
#endif`,RA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,DA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,NA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,OA=`#ifdef USE_NORMALMAP
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
#endif`,zA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,PA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,BA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,FA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,IA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,HA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,GA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,VA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,XA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,WA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,YA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ZA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,KA=`float getShadowMask() {
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
}`,QA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,JA=`#ifdef USE_SKINNING
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
#endif`,$A=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tw=`#ifdef USE_SKINNING
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
#endif`,ew=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,iw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,aw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sw=`#ifdef USE_TRANSMISSION
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
#endif`,rw=`#ifdef USE_TRANSMISSION
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
#endif`,ow=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hw=`uniform sampler2D t2D;
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
}`,dw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,mw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vw=`#include <common>
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
}`,_w=`#if DEPTH_PACKING == 3200
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
}`,xw=`#define DISTANCE
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
}`,yw=`#define DISTANCE
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
}`,Sw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ew=`uniform float scale;
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
}`,bw=`uniform vec3 diffuse;
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
}`,Tw=`#include <common>
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
}`,Aw=`uniform vec3 diffuse;
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
}`,ww=`#define LAMBERT
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
}`,Rw=`#define LAMBERT
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
}`,Cw=`#define MATCAP
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
}`,Dw=`#define MATCAP
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
}`,Nw=`#define NORMAL
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
}`,Uw=`#define NORMAL
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
}`,Lw=`#define PHONG
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
}`,Ow=`#define PHONG
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
}`,zw=`#define STANDARD
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
}`,Pw=`#define STANDARD
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
}`,Bw=`#define TOON
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
}`,Fw=`#define TOON
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
}`,Iw=`uniform float size;
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
}`,Hw=`uniform vec3 diffuse;
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
}`,Gw=`#include <common>
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
}`,Vw=`uniform vec3 color;
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
}`,kw=`uniform float rotation;
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
}`,qw=`uniform vec3 diffuse;
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
}`,ge={alphahash_fragment:h1,alphahash_pars_fragment:d1,alphamap_fragment:p1,alphamap_pars_fragment:m1,alphatest_fragment:g1,alphatest_pars_fragment:v1,aomap_fragment:_1,aomap_pars_fragment:x1,batching_pars_vertex:y1,batching_vertex:S1,begin_vertex:M1,beginnormal_vertex:E1,bsdfs:b1,iridescence_fragment:T1,bumpmap_pars_fragment:A1,clipping_planes_fragment:w1,clipping_planes_pars_fragment:R1,clipping_planes_pars_vertex:C1,clipping_planes_vertex:D1,color_fragment:N1,color_pars_fragment:U1,color_pars_vertex:L1,color_vertex:O1,common:z1,cube_uv_reflection_fragment:P1,defaultnormal_vertex:B1,displacementmap_pars_vertex:F1,displacementmap_vertex:I1,emissivemap_fragment:H1,emissivemap_pars_fragment:G1,colorspace_fragment:V1,colorspace_pars_fragment:k1,envmap_fragment:q1,envmap_common_pars_fragment:X1,envmap_pars_fragment:W1,envmap_pars_vertex:Y1,envmap_physical_pars_fragment:aA,envmap_vertex:j1,fog_vertex:Z1,fog_pars_vertex:K1,fog_fragment:Q1,fog_pars_fragment:J1,gradientmap_pars_fragment:$1,lightmap_pars_fragment:tA,lights_lambert_fragment:eA,lights_lambert_pars_fragment:nA,lights_pars_begin:iA,lights_toon_fragment:sA,lights_toon_pars_fragment:rA,lights_phong_fragment:oA,lights_phong_pars_fragment:lA,lights_physical_fragment:cA,lights_physical_pars_fragment:uA,lights_fragment_begin:fA,lights_fragment_maps:hA,lights_fragment_end:dA,logdepthbuf_fragment:pA,logdepthbuf_pars_fragment:mA,logdepthbuf_pars_vertex:gA,logdepthbuf_vertex:vA,map_fragment:_A,map_pars_fragment:xA,map_particle_fragment:yA,map_particle_pars_fragment:SA,metalnessmap_fragment:MA,metalnessmap_pars_fragment:EA,morphinstance_vertex:bA,morphcolor_vertex:TA,morphnormal_vertex:AA,morphtarget_pars_vertex:wA,morphtarget_vertex:RA,normal_fragment_begin:CA,normal_fragment_maps:DA,normal_pars_fragment:NA,normal_pars_vertex:UA,normal_vertex:LA,normalmap_pars_fragment:OA,clearcoat_normal_fragment_begin:zA,clearcoat_normal_fragment_maps:PA,clearcoat_pars_fragment:BA,iridescence_pars_fragment:FA,opaque_fragment:IA,packing:HA,premultiplied_alpha_fragment:GA,project_vertex:VA,dithering_fragment:kA,dithering_pars_fragment:qA,roughnessmap_fragment:XA,roughnessmap_pars_fragment:WA,shadowmap_pars_fragment:YA,shadowmap_pars_vertex:jA,shadowmap_vertex:ZA,shadowmask_pars_fragment:KA,skinbase_vertex:QA,skinning_pars_vertex:JA,skinning_vertex:$A,skinnormal_vertex:tw,specularmap_fragment:ew,specularmap_pars_fragment:nw,tonemapping_fragment:iw,tonemapping_pars_fragment:aw,transmission_fragment:sw,transmission_pars_fragment:rw,uv_pars_fragment:ow,uv_pars_vertex:lw,uv_vertex:cw,worldpos_vertex:uw,background_vert:fw,background_frag:hw,backgroundCube_vert:dw,backgroundCube_frag:pw,cube_vert:mw,cube_frag:gw,depth_vert:vw,depth_frag:_w,distance_vert:xw,distance_frag:yw,equirect_vert:Sw,equirect_frag:Mw,linedashed_vert:Ew,linedashed_frag:bw,meshbasic_vert:Tw,meshbasic_frag:Aw,meshlambert_vert:ww,meshlambert_frag:Rw,meshmatcap_vert:Cw,meshmatcap_frag:Dw,meshnormal_vert:Nw,meshnormal_frag:Uw,meshphong_vert:Lw,meshphong_frag:Ow,meshphysical_vert:zw,meshphysical_frag:Pw,meshtoon_vert:Bw,meshtoon_frag:Fw,points_vert:Iw,points_frag:Hw,shadow_vert:Gw,shadow_frag:Vw,sprite_vert:kw,sprite_frag:qw},It={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},Qi={basic:{uniforms:kn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:ge.meshbasic_vert,fragmentShader:ge.meshbasic_frag},lambert:{uniforms:kn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Ue(0)}}]),vertexShader:ge.meshlambert_vert,fragmentShader:ge.meshlambert_frag},phong:{uniforms:kn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:ge.meshphong_vert,fragmentShader:ge.meshphong_frag},standard:{uniforms:kn([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag},toon:{uniforms:kn([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new Ue(0)}}]),vertexShader:ge.meshtoon_vert,fragmentShader:ge.meshtoon_frag},matcap:{uniforms:kn([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:ge.meshmatcap_vert,fragmentShader:ge.meshmatcap_frag},points:{uniforms:kn([It.points,It.fog]),vertexShader:ge.points_vert,fragmentShader:ge.points_frag},dashed:{uniforms:kn([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ge.linedashed_vert,fragmentShader:ge.linedashed_frag},depth:{uniforms:kn([It.common,It.displacementmap]),vertexShader:ge.depth_vert,fragmentShader:ge.depth_frag},normal:{uniforms:kn([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:ge.meshnormal_vert,fragmentShader:ge.meshnormal_frag},sprite:{uniforms:kn([It.sprite,It.fog]),vertexShader:ge.sprite_vert,fragmentShader:ge.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ge.background_vert,fragmentShader:ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:ge.backgroundCube_vert,fragmentShader:ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ge.cube_vert,fragmentShader:ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ge.equirect_vert,fragmentShader:ge.equirect_frag},distance:{uniforms:kn([It.common,It.displacementmap,{referencePosition:{value:new ut},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ge.distance_vert,fragmentShader:ge.distance_frag},shadow:{uniforms:kn([It.lights,It.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:ge.shadow_vert,fragmentShader:ge.shadow_frag}};Qi.physical={uniforms:kn([Qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag};const Mu={r:0,b:0,g:0},Ks=new aa,Xw=new sn;function Ww(c,t,n,a,r,o,u){const f=new Ue(0);let p=o===!0?0:1,h,g,_=null,v=0,y=null;function M(C){let L=C.isScene===!0?C.background:null;return L&&L.isTexture&&(L=(C.backgroundBlurriness>0?n:t).get(L)),L}function b(C){let L=!1;const z=M(C);z===null?x(f,p):z&&z.isColor&&(x(z,1),L=!0);const B=c.xr.getEnvironmentBlendMode();B==="additive"?a.buffers.color.setClear(0,0,0,1,u):B==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,u),(c.autoClear||L)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),c.clear(c.autoClearColor,c.autoClearDepth,c.autoClearStencil))}function S(C,L){const z=M(L);z&&(z.isCubeTexture||z.mapping===Pu)?(g===void 0&&(g=new Hi(new xo(1,1,1),new sa({name:"BackgroundCubeMaterial",uniforms:vo(Qi.backgroundCube.uniforms),vertexShader:Qi.backgroundCube.vertexShader,fragmentShader:Qi.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(B,P,Y){this.matrixWorld.copyPosition(Y.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(g)),Ks.copy(L.backgroundRotation),Ks.x*=-1,Ks.y*=-1,Ks.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(Ks.y*=-1,Ks.z*=-1),g.material.uniforms.envMap.value=z,g.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(Xw.makeRotationFromEuler(Ks)),g.material.toneMapped=Re.getTransfer(z.colorSpace)!==qe,(_!==z||v!==z.version||y!==c.toneMapping)&&(g.material.needsUpdate=!0,_=z,v=z.version,y=c.toneMapping),g.layers.enableAll(),C.unshift(g,g.geometry,g.material,0,0,null)):z&&z.isTexture&&(h===void 0&&(h=new Hi(new Hl(2,2),new sa({name:"BackgroundMaterial",uniforms:vo(Qi.background.uniforms),vertexShader:Qi.background.vertexShader,fragmentShader:Qi.background.fragmentShader,side:As,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=z,h.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,h.material.toneMapped=Re.getTransfer(z.colorSpace)!==qe,z.matrixAutoUpdate===!0&&z.updateMatrix(),h.material.uniforms.uvTransform.value.copy(z.matrix),(_!==z||v!==z.version||y!==c.toneMapping)&&(h.material.needsUpdate=!0,_=z,v=z.version,y=c.toneMapping),h.layers.enableAll(),C.unshift(h,h.geometry,h.material,0,0,null))}function x(C,L){C.getRGB(Mu,qx(c)),a.buffers.color.setClear(Mu.r,Mu.g,Mu.b,L,u)}function T(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return f},setClearColor:function(C,L=1){f.set(C),p=L,x(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(C){p=C,x(f,p)},render:b,addToRenderList:S,dispose:T}}function Yw(c,t){const n=c.getParameter(c.MAX_VERTEX_ATTRIBS),a={},r=v(null);let o=r,u=!1;function f(O,G,$,V,j){let X=!1;const D=_(V,$,G);o!==D&&(o=D,h(o.object)),X=y(O,V,$,j),X&&M(O,V,$,j),j!==null&&t.update(j,c.ELEMENT_ARRAY_BUFFER),(X||u)&&(u=!1,L(O,G,$,V),j!==null&&c.bindBuffer(c.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function p(){return c.createVertexArray()}function h(O){return c.bindVertexArray(O)}function g(O){return c.deleteVertexArray(O)}function _(O,G,$){const V=$.wireframe===!0;let j=a[O.id];j===void 0&&(j={},a[O.id]=j);let X=j[G.id];X===void 0&&(X={},j[G.id]=X);let D=X[V];return D===void 0&&(D=v(p()),X[V]=D),D}function v(O){const G=[],$=[],V=[];for(let j=0;j<n;j++)G[j]=0,$[j]=0,V[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:$,attributeDivisors:V,object:O,attributes:{},index:null}}function y(O,G,$,V){const j=o.attributes,X=G.attributes;let D=0;const H=$.getAttributes();for(const Q in H)if(H[Q].location>=0){const mt=j[Q];let F=X[Q];if(F===void 0&&(Q==="instanceMatrix"&&O.instanceMatrix&&(F=O.instanceMatrix),Q==="instanceColor"&&O.instanceColor&&(F=O.instanceColor)),mt===void 0||mt.attribute!==F||F&&mt.data!==F.data)return!0;D++}return o.attributesNum!==D||o.index!==V}function M(O,G,$,V){const j={},X=G.attributes;let D=0;const H=$.getAttributes();for(const Q in H)if(H[Q].location>=0){let mt=X[Q];mt===void 0&&(Q==="instanceMatrix"&&O.instanceMatrix&&(mt=O.instanceMatrix),Q==="instanceColor"&&O.instanceColor&&(mt=O.instanceColor));const F={};F.attribute=mt,mt&&mt.data&&(F.data=mt.data),j[Q]=F,D++}o.attributes=j,o.attributesNum=D,o.index=V}function b(){const O=o.newAttributes;for(let G=0,$=O.length;G<$;G++)O[G]=0}function S(O){x(O,0)}function x(O,G){const $=o.newAttributes,V=o.enabledAttributes,j=o.attributeDivisors;$[O]=1,V[O]===0&&(c.enableVertexAttribArray(O),V[O]=1),j[O]!==G&&(c.vertexAttribDivisor(O,G),j[O]=G)}function T(){const O=o.newAttributes,G=o.enabledAttributes;for(let $=0,V=G.length;$<V;$++)G[$]!==O[$]&&(c.disableVertexAttribArray($),G[$]=0)}function C(O,G,$,V,j,X,D){D===!0?c.vertexAttribIPointer(O,G,$,j,X):c.vertexAttribPointer(O,G,$,V,j,X)}function L(O,G,$,V){b();const j=V.attributes,X=$.getAttributes(),D=G.defaultAttributeValues;for(const H in X){const Q=X[H];if(Q.location>=0){let ft=j[H];if(ft===void 0&&(H==="instanceMatrix"&&O.instanceMatrix&&(ft=O.instanceMatrix),H==="instanceColor"&&O.instanceColor&&(ft=O.instanceColor)),ft!==void 0){const mt=ft.normalized,F=ft.itemSize,Z=t.get(ft);if(Z===void 0)continue;const _t=Z.buffer,Tt=Z.type,Ft=Z.bytesPerElement,nt=Tt===c.INT||Tt===c.UNSIGNED_INT||ft.gpuType===Pp;if(ft.isInterleavedBufferAttribute){const pt=ft.data,Nt=pt.stride,Xt=ft.offset;if(pt.isInstancedInterleavedBuffer){for(let Vt=0;Vt<Q.locationSize;Vt++)x(Q.location+Vt,pt.meshPerAttribute);O.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let Vt=0;Vt<Q.locationSize;Vt++)S(Q.location+Vt);c.bindBuffer(c.ARRAY_BUFFER,_t);for(let Vt=0;Vt<Q.locationSize;Vt++)C(Q.location+Vt,F/Q.locationSize,Tt,mt,Nt*Ft,(Xt+F/Q.locationSize*Vt)*Ft,nt)}else{if(ft.isInstancedBufferAttribute){for(let pt=0;pt<Q.locationSize;pt++)x(Q.location+pt,ft.meshPerAttribute);O.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let pt=0;pt<Q.locationSize;pt++)S(Q.location+pt);c.bindBuffer(c.ARRAY_BUFFER,_t);for(let pt=0;pt<Q.locationSize;pt++)C(Q.location+pt,F/Q.locationSize,Tt,mt,F*Ft,F/Q.locationSize*pt*Ft,nt)}}else if(D!==void 0){const mt=D[H];if(mt!==void 0)switch(mt.length){case 2:c.vertexAttrib2fv(Q.location,mt);break;case 3:c.vertexAttrib3fv(Q.location,mt);break;case 4:c.vertexAttrib4fv(Q.location,mt);break;default:c.vertexAttrib1fv(Q.location,mt)}}}}T()}function z(){Y();for(const O in a){const G=a[O];for(const $ in G){const V=G[$];for(const j in V)g(V[j].object),delete V[j];delete G[$]}delete a[O]}}function B(O){if(a[O.id]===void 0)return;const G=a[O.id];for(const $ in G){const V=G[$];for(const j in V)g(V[j].object),delete V[j];delete G[$]}delete a[O.id]}function P(O){for(const G in a){const $=a[G];if($[O.id]===void 0)continue;const V=$[O.id];for(const j in V)g(V[j].object),delete V[j];delete $[O.id]}}function Y(){w(),u=!0,o!==r&&(o=r,h(o.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:f,reset:Y,resetDefaultState:w,dispose:z,releaseStatesOfGeometry:B,releaseStatesOfProgram:P,initAttributes:b,enableAttribute:S,disableUnusedAttributes:T}}function jw(c,t,n){let a;function r(h){a=h}function o(h,g){c.drawArrays(a,h,g),n.update(g,a,1)}function u(h,g,_){_!==0&&(c.drawArraysInstanced(a,h,g,_),n.update(g,a,_))}function f(h,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,h,0,g,0,_);let y=0;for(let M=0;M<_;M++)y+=g[M];n.update(y,a,1)}function p(h,g,_,v){if(_===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let M=0;M<h.length;M++)u(h[M],g[M],v[M]);else{y.multiDrawArraysInstancedWEBGL(a,h,0,g,0,v,0,_);let M=0;for(let b=0;b<_;b++)M+=g[b]*v[b];n.update(M,a,1)}}this.setMode=r,this.render=o,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function Zw(c,t,n,a){let r;function o(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");r=c.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function u(P){return!(P!==Fi&&a.convert(P)!==c.getParameter(c.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(P){const Y=P===Ia&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==ui&&a.convert(P)!==c.getParameter(c.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Ji&&!Y)}function p(P){if(P==="highp"){if(c.getShaderPrecisionFormat(c.VERTEX_SHADER,c.HIGH_FLOAT).precision>0&&c.getShaderPrecisionFormat(c.FRAGMENT_SHADER,c.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&c.getShaderPrecisionFormat(c.VERTEX_SHADER,c.MEDIUM_FLOAT).precision>0&&c.getShaderPrecisionFormat(c.FRAGMENT_SHADER,c.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=n.precision!==void 0?n.precision:"highp";const g=p(h);g!==h&&(ue("WebGLRenderer:",h,"not supported, using",g,"instead."),h=g);const _=n.logarithmicDepthBuffer===!0,v=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=c.getParameter(c.MAX_TEXTURE_IMAGE_UNITS),M=c.getParameter(c.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=c.getParameter(c.MAX_TEXTURE_SIZE),S=c.getParameter(c.MAX_CUBE_MAP_TEXTURE_SIZE),x=c.getParameter(c.MAX_VERTEX_ATTRIBS),T=c.getParameter(c.MAX_VERTEX_UNIFORM_VECTORS),C=c.getParameter(c.MAX_VARYING_VECTORS),L=c.getParameter(c.MAX_FRAGMENT_UNIFORM_VECTORS),z=c.getParameter(c.MAX_SAMPLES),B=c.getParameter(c.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:y,maxVertexTextures:M,maxTextureSize:b,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:T,maxVaryings:C,maxFragmentUniforms:L,maxSamples:z,samples:B}}function Kw(c){const t=this;let n=null,a=0,r=!1,o=!1;const u=new tr,f=new pe,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const y=_.length!==0||v||a!==0||r;return r=v,a=_.length,y},this.beginShadows=function(){o=!0,g(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(_,v){n=g(_,v,0)},this.setState=function(_,v,y){const M=_.clippingPlanes,b=_.clipIntersection,S=_.clipShadows,x=c.get(_);if(!r||M===null||M.length===0||o&&!S)o?g(null):h();else{const T=o?0:a,C=T*4;let L=x.clippingState||null;p.value=L,L=g(M,v,C,y);for(let z=0;z!==C;++z)L[z]=n[z];x.clippingState=L,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=T}};function h(){p.value!==n&&(p.value=n,p.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function g(_,v,y,M){const b=_!==null?_.length:0;let S=null;if(b!==0){if(S=p.value,M!==!0||S===null){const x=y+b*4,T=v.matrixWorldInverse;f.getNormalMatrix(T),(S===null||S.length<x)&&(S=new Float32Array(x));for(let C=0,L=y;C!==b;++C,L+=4)u.copy(_[C]).applyMatrix4(T,f),u.normal.toArray(S,L),S[L+3]=u.constant}p.value=S,p.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,S}}function Qw(c){let t=new WeakMap;function n(u,f){return f===Xd?u.mapping=rr:f===Wd&&(u.mapping=po),u}function a(u){if(u&&u.isTexture){const f=u.mapping;if(f===Xd||f===Wd)if(t.has(u)){const p=t.get(u).texture;return n(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const h=new Yx(p.height);return h.fromEquirectangularTexture(c,u),t.set(u,h),u.addEventListener("dispose",r),n(h.texture,u.mapping)}else return null}}return u}function r(u){const f=u.target;f.removeEventListener("dispose",r);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function o(){t=new WeakMap}return{get:a,dispose:o}}const bs=4,B_=[.125,.215,.35,.446,.526,.582],ir=20,Jw=256,bl=new Bu,F_=new Ue;let Rd=null,Cd=0,Dd=0,Nd=!1;const $w=new ut;class I_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,a=.1,r=100,o={}){const{size:u=256,position:f=$w}=o;Rd=this._renderer.getRenderTarget(),Cd=this._renderer.getActiveCubeFace(),Dd=this._renderer.getActiveMipmapLevel(),Nd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,a,r,p,f),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=V_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=G_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Rd,Cd,Dd),this._renderer.xr.enabled=Nd,t.scissorTest=!1,so(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===rr||t.mapping===po?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Rd=this._renderer.getRenderTarget(),Cd=this._renderer.getActiveCubeFace(),Dd=this._renderer.getActiveMipmapLevel(),Nd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:Ia,format:Fi,colorSpace:go,depthBuffer:!1},r=H_(t,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=H_(t,n,a);const{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=tR(o)),this._blurMaterial=nR(o,t,n),this._ggxMaterial=eR(o,t,n)}return r}_compileMaterial(t){const n=new Hi(new Ga,t);this._renderer.compile(n,bl)}_sceneToCubeUV(t,n,a,r,o){const p=new zi(90,1,n,a),h=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,y=_.toneMapping;_.getClearColor(F_),_.toneMapping=Ii,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(r),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Hi(new xo,new Gx({name:"PMREM.Background",side:ti,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,S=b.material;let x=!1;const T=t.background;T?T.isColor&&(S.color.copy(T),t.background=null,x=!0):(S.color.copy(F_),x=!0);for(let C=0;C<6;C++){const L=C%3;L===0?(p.up.set(0,h[C],0),p.position.set(o.x,o.y,o.z),p.lookAt(o.x+g[C],o.y,o.z)):L===1?(p.up.set(0,0,h[C]),p.position.set(o.x,o.y,o.z),p.lookAt(o.x,o.y+g[C],o.z)):(p.up.set(0,h[C],0),p.position.set(o.x,o.y,o.z),p.lookAt(o.x,o.y,o.z+g[C]));const z=this._cubeSize;so(r,L*z,C>2?z:0,z,z),_.setRenderTarget(r),x&&_.render(b,p),_.render(t,p)}_.toneMapping=y,_.autoClear=v,t.background=T}_textureToCubeUV(t,n){const a=this._renderer,r=t.mapping===rr||t.mapping===po;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=V_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=G_());const o=r?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=o;const f=o.uniforms;f.envMap.value=t;const p=this._cubeSize;so(n,0,0,3*p,2*p),a.setRenderTarget(n),a.render(u,bl)}_applyPMREM(t){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let o=1;o<r;o++)this._applyGGXFilter(t,o-1,o);n.autoClear=a}_applyGGXFilter(t,n,a){const r=this._renderer,o=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[a];f.material=u;const p=u.uniforms,h=a/(this._lodMeshes.length-1),g=n/(this._lodMeshes.length-1),_=Math.sqrt(h*h-g*g),v=0+h*1.25,y=_*v,{_lodMax:M}=this,b=this._sizeLods[a],S=3*b*(a>M-bs?a-M+bs:0),x=4*(this._cubeSize-b);p.envMap.value=t.texture,p.roughness.value=y,p.mipInt.value=M-n,so(o,S,x,3*b,2*b),r.setRenderTarget(o),r.render(f,bl),p.envMap.value=o.texture,p.roughness.value=0,p.mipInt.value=M-a,so(t,S,x,3*b,2*b),r.setRenderTarget(t),r.render(f,bl)}_blur(t,n,a,r,o){const u=this._pingPongRenderTarget;this._halfBlur(t,u,n,a,r,"latitudinal",o),this._halfBlur(u,t,a,a,r,"longitudinal",o)}_halfBlur(t,n,a,r,o,u,f){const p=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&we("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[r];_.material=h;const v=h.uniforms,y=this._sizeLods[a]-1,M=isFinite(o)?Math.PI/(2*y):2*Math.PI/(2*ir-1),b=o/M,S=isFinite(o)?1+Math.floor(g*b):ir;S>ir&&ue(`sigmaRadians, ${o}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${ir}`);const x=[];let T=0;for(let P=0;P<ir;++P){const Y=P/b,w=Math.exp(-Y*Y/2);x.push(w),P===0?T+=w:P<S&&(T+=2*w)}for(let P=0;P<x.length;P++)x[P]=x[P]/T;v.envMap.value=t.texture,v.samples.value=S,v.weights.value=x,v.latitudinal.value=u==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:C}=this;v.dTheta.value=M,v.mipInt.value=C-a;const L=this._sizeLods[r],z=3*L*(r>C-bs?r-C+bs:0),B=4*(this._cubeSize-L);so(n,z,B,3*L,2*L),p.setRenderTarget(n),p.render(_,bl)}}function tR(c){const t=[],n=[],a=[];let r=c;const o=c-bs+1+B_.length;for(let u=0;u<o;u++){const f=Math.pow(2,r);t.push(f);let p=1/f;u>c-bs?p=B_[u-c+bs-1]:u===0&&(p=0),n.push(p);const h=1/(f-2),g=-h,_=1+h,v=[g,g,_,g,_,_,g,g,_,_,g,_],y=6,M=6,b=3,S=2,x=1,T=new Float32Array(b*M*y),C=new Float32Array(S*M*y),L=new Float32Array(x*M*y);for(let B=0;B<y;B++){const P=B%3*2/3-1,Y=B>2?0:-1,w=[P,Y,0,P+2/3,Y,0,P+2/3,Y+1,0,P,Y,0,P+2/3,Y+1,0,P,Y+1,0];T.set(w,b*M*B),C.set(v,S*M*B);const O=[B,B,B,B,B,B];L.set(O,x*M*B)}const z=new Ga;z.setAttribute("position",new na(T,b)),z.setAttribute("uv",new na(C,S)),z.setAttribute("faceIndex",new na(L,x)),a.push(new Hi(z,null)),r>bs&&r--}return{lodMeshes:a,sizeLods:t,sigmas:n}}function H_(c,t,n){const a=new ea(c,t,n);return a.texture.mapping=Pu,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function so(c,t,n,a,r){c.viewport.set(t,n,a,r),c.scissor.set(t,n,a,r)}function eR(c,t,n){return new sa({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Jw,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${c}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Fu(),fragmentShader:`

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
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function nR(c,t,n){const a=new Float32Array(ir),r=new ut(0,1,0);return new sa({name:"SphericalGaussianBlur",defines:{n:ir,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${c}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Fu(),fragmentShader:`

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
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function G_(){return new sa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fu(),fragmentShader:`

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
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function V_(){return new sa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function Fu(){return`

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
	`}function iR(c){let t=new WeakMap,n=null;function a(f){if(f&&f.isTexture){const p=f.mapping,h=p===Xd||p===Wd,g=p===rr||p===po;if(h||g){let _=t.get(f);const v=_!==void 0?_.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==v)return n===null&&(n=new I_(c)),_=h?n.fromEquirectangular(f,_):n.fromCubemap(f,_),_.texture.pmremVersion=f.pmremVersion,t.set(f,_),_.texture;if(_!==void 0)return _.texture;{const y=f.image;return h&&y&&y.height>0||g&&y&&r(y)?(n===null&&(n=new I_(c)),_=h?n.fromEquirectangular(f):n.fromCubemap(f),_.texture.pmremVersion=f.pmremVersion,t.set(f,_),f.addEventListener("dispose",o),_.texture):null}}}return f}function r(f){let p=0;const h=6;for(let g=0;g<h;g++)f[g]!==void 0&&p++;return p===h}function o(f){const p=f.target;p.removeEventListener("dispose",o);const h=t.get(p);h!==void 0&&(t.delete(p),h.dispose())}function u(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:u}}function aR(c){const t={};function n(a){if(t[a]!==void 0)return t[a];const r=c.getExtension(a);return t[a]=r,r}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const r=n(a);return r===null&&Ll("WebGLRenderer: "+a+" extension not supported."),r}}}function sR(c,t,n,a){const r={},o=new WeakMap;function u(_){const v=_.target;v.index!==null&&t.remove(v.index);for(const M in v.attributes)t.remove(v.attributes[M]);v.removeEventListener("dispose",u),delete r[v.id];const y=o.get(v);y&&(t.remove(y),o.delete(v)),a.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function f(_,v){return r[v.id]===!0||(v.addEventListener("dispose",u),r[v.id]=!0,n.memory.geometries++),v}function p(_){const v=_.attributes;for(const y in v)t.update(v[y],c.ARRAY_BUFFER)}function h(_){const v=[],y=_.index,M=_.attributes.position;let b=0;if(y!==null){const T=y.array;b=y.version;for(let C=0,L=T.length;C<L;C+=3){const z=T[C+0],B=T[C+1],P=T[C+2];v.push(z,B,B,P,P,z)}}else if(M!==void 0){const T=M.array;b=M.version;for(let C=0,L=T.length/3-1;C<L;C+=3){const z=C+0,B=C+1,P=C+2;v.push(z,B,B,P,P,z)}}else return;const S=new(Bx(v)?kx:Vx)(v,1);S.version=b;const x=o.get(_);x&&t.remove(x),o.set(_,S)}function g(_){const v=o.get(_);if(v){const y=_.index;y!==null&&v.version<y.version&&h(_)}else h(_);return o.get(_)}return{get:f,update:p,getWireframeAttribute:g}}function rR(c,t,n){let a;function r(v){a=v}let o,u;function f(v){o=v.type,u=v.bytesPerElement}function p(v,y){c.drawElements(a,y,o,v*u),n.update(y,a,1)}function h(v,y,M){M!==0&&(c.drawElementsInstanced(a,y,o,v*u,M),n.update(y,a,M))}function g(v,y,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,y,0,o,v,0,M);let S=0;for(let x=0;x<M;x++)S+=y[x];n.update(S,a,1)}function _(v,y,M,b){if(M===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<v.length;x++)h(v[x]/u,y[x],b[x]);else{S.multiDrawElementsInstancedWEBGL(a,y,0,o,v,0,b,0,M);let x=0;for(let T=0;T<M;T++)x+=y[T]*b[T];n.update(x,a,1)}}this.setMode=r,this.setIndex=f,this.render=p,this.renderInstances=h,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function oR(c){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(o,u,f){switch(n.calls++,u){case c.TRIANGLES:n.triangles+=f*(o/3);break;case c.LINES:n.lines+=f*(o/2);break;case c.LINE_STRIP:n.lines+=f*(o-1);break;case c.LINE_LOOP:n.lines+=f*o;break;case c.POINTS:n.points+=f*o;break;default:we("WebGLInfo: Unknown draw mode:",u);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:r,update:a}}function lR(c,t,n){const a=new WeakMap,r=new ln;function o(u,f,p){const h=u.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=g!==void 0?g.length:0;let v=a.get(f);if(v===void 0||v.count!==_){let O=function(){Y.dispose(),a.delete(f),f.removeEventListener("dispose",O)};var y=O;v!==void 0&&v.texture.dispose();const M=f.morphAttributes.position!==void 0,b=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,x=f.morphAttributes.position||[],T=f.morphAttributes.normal||[],C=f.morphAttributes.color||[];let L=0;M===!0&&(L=1),b===!0&&(L=2),S===!0&&(L=3);let z=f.attributes.position.count*L,B=1;z>t.maxTextureSize&&(B=Math.ceil(z/t.maxTextureSize),z=t.maxTextureSize);const P=new Float32Array(z*B*4*_),Y=new Fx(P,z,B,_);Y.type=Ji,Y.needsUpdate=!0;const w=L*4;for(let G=0;G<_;G++){const $=x[G],V=T[G],j=C[G],X=z*B*4*G;for(let D=0;D<$.count;D++){const H=D*w;M===!0&&(r.fromBufferAttribute($,D),P[X+H+0]=r.x,P[X+H+1]=r.y,P[X+H+2]=r.z,P[X+H+3]=0),b===!0&&(r.fromBufferAttribute(V,D),P[X+H+4]=r.x,P[X+H+5]=r.y,P[X+H+6]=r.z,P[X+H+7]=0),S===!0&&(r.fromBufferAttribute(j,D),P[X+H+8]=r.x,P[X+H+9]=r.y,P[X+H+10]=r.z,P[X+H+11]=j.itemSize===4?r.w:1)}}v={count:_,texture:Y,size:new Le(z,B)},a.set(f,v),f.addEventListener("dispose",O)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(c,"morphTexture",u.morphTexture,n);else{let M=0;for(let S=0;S<h.length;S++)M+=h[S];const b=f.morphTargetsRelative?1:1-M;p.getUniforms().setValue(c,"morphTargetBaseInfluence",b),p.getUniforms().setValue(c,"morphTargetInfluences",h)}p.getUniforms().setValue(c,"morphTargetsTexture",v.texture,n),p.getUniforms().setValue(c,"morphTargetsTextureSize",v.size)}return{update:o}}function cR(c,t,n,a){let r=new WeakMap;function o(p){const h=a.render.frame,g=p.geometry,_=t.get(p,g);if(r.get(_)!==h&&(t.update(_),r.set(_,h)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),r.get(p)!==h&&(n.update(p.instanceMatrix,c.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,c.ARRAY_BUFFER),r.set(p,h))),p.isSkinnedMesh){const v=p.skeleton;r.get(v)!==h&&(v.update(),r.set(v,h))}return _}function u(){r=new WeakMap}function f(p){const h=p.target;h.removeEventListener("dispose",f),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:o,dispose:u}}const uR={[Sx]:"LINEAR_TONE_MAPPING",[Mx]:"REINHARD_TONE_MAPPING",[Ex]:"CINEON_TONE_MAPPING",[bx]:"ACES_FILMIC_TONE_MAPPING",[Ax]:"AGX_TONE_MAPPING",[wx]:"NEUTRAL_TONE_MAPPING",[Tx]:"CUSTOM_TONE_MAPPING"};function fR(c,t,n,a,r){const o=new ea(t,n,{type:c,depthBuffer:a,stencilBuffer:r}),u=new ea(t,n,{type:Ia,depthBuffer:!1,stencilBuffer:!1}),f=new Ga;f.setAttribute("position",new Fa([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new Fa([0,2,0,0,2,0],2));const p=new t1({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Hi(f,p),g=new Bu(-1,1,1,-1,0,1);let _=null,v=null,y=!1,M,b=null,S=[],x=!1;this.setSize=function(T,C){o.setSize(T,C),u.setSize(T,C);for(let L=0;L<S.length;L++){const z=S[L];z.setSize&&z.setSize(T,C)}},this.setEffects=function(T){S=T,x=S.length>0&&S[0].isRenderPass===!0;const C=o.width,L=o.height;for(let z=0;z<S.length;z++){const B=S[z];B.setSize&&B.setSize(C,L)}},this.begin=function(T,C){if(y||T.toneMapping===Ii&&S.length===0)return!1;if(b=C,C!==null){const L=C.width,z=C.height;(o.width!==L||o.height!==z)&&this.setSize(L,z)}return x===!1&&T.setRenderTarget(o),M=T.toneMapping,T.toneMapping=Ii,!0},this.hasRenderPass=function(){return x},this.end=function(T,C){T.toneMapping=M,y=!0;let L=o,z=u;for(let B=0;B<S.length;B++){const P=S[B];if(P.enabled!==!1&&(P.render(T,z,L,C),P.needsSwap!==!1)){const Y=L;L=z,z=Y}}if(_!==T.outputColorSpace||v!==T.toneMapping){_=T.outputColorSpace,v=T.toneMapping,p.defines={},Re.getTransfer(_)===qe&&(p.defines.SRGB_TRANSFER="");const B=uR[v];B&&(p.defines[B]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=L.texture,T.setRenderTarget(b),T.render(h,g),b=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){o.dispose(),u.dispose(),f.dispose(),p.dispose()}}const Qx=new Hn,Cp=new Ol(1,1),Jx=new Fx,$x=new DT,ty=new Wx,k_=[],q_=[],X_=new Float32Array(16),W_=new Float32Array(9),Y_=new Float32Array(4);function yo(c,t,n){const a=c[0];if(a<=0||a>0)return c;const r=t*n;let o=k_[r];if(o===void 0&&(o=new Float32Array(r),k_[r]=o),t!==0){a.toArray(o,0);for(let u=1,f=0;u!==t;++u)f+=n,c[u].toArray(o,f)}return o}function yn(c,t){if(c.length!==t.length)return!1;for(let n=0,a=c.length;n<a;n++)if(c[n]!==t[n])return!1;return!0}function Sn(c,t){for(let n=0,a=t.length;n<a;n++)c[n]=t[n]}function Iu(c,t){let n=q_[t];n===void 0&&(n=new Int32Array(t),q_[t]=n);for(let a=0;a!==t;++a)n[a]=c.allocateTextureUnit();return n}function hR(c,t){const n=this.cache;n[0]!==t&&(c.uniform1f(this.addr,t),n[0]=t)}function dR(c,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(c.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(yn(n,t))return;c.uniform2fv(this.addr,t),Sn(n,t)}}function pR(c,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(c.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(c.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(yn(n,t))return;c.uniform3fv(this.addr,t),Sn(n,t)}}function mR(c,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(c.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(yn(n,t))return;c.uniform4fv(this.addr,t),Sn(n,t)}}function gR(c,t){const n=this.cache,a=t.elements;if(a===void 0){if(yn(n,t))return;c.uniformMatrix2fv(this.addr,!1,t),Sn(n,t)}else{if(yn(n,a))return;Y_.set(a),c.uniformMatrix2fv(this.addr,!1,Y_),Sn(n,a)}}function vR(c,t){const n=this.cache,a=t.elements;if(a===void 0){if(yn(n,t))return;c.uniformMatrix3fv(this.addr,!1,t),Sn(n,t)}else{if(yn(n,a))return;W_.set(a),c.uniformMatrix3fv(this.addr,!1,W_),Sn(n,a)}}function _R(c,t){const n=this.cache,a=t.elements;if(a===void 0){if(yn(n,t))return;c.uniformMatrix4fv(this.addr,!1,t),Sn(n,t)}else{if(yn(n,a))return;X_.set(a),c.uniformMatrix4fv(this.addr,!1,X_),Sn(n,a)}}function xR(c,t){const n=this.cache;n[0]!==t&&(c.uniform1i(this.addr,t),n[0]=t)}function yR(c,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(c.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(yn(n,t))return;c.uniform2iv(this.addr,t),Sn(n,t)}}function SR(c,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(c.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(yn(n,t))return;c.uniform3iv(this.addr,t),Sn(n,t)}}function MR(c,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(c.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(yn(n,t))return;c.uniform4iv(this.addr,t),Sn(n,t)}}function ER(c,t){const n=this.cache;n[0]!==t&&(c.uniform1ui(this.addr,t),n[0]=t)}function bR(c,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(c.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(yn(n,t))return;c.uniform2uiv(this.addr,t),Sn(n,t)}}function TR(c,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(c.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(yn(n,t))return;c.uniform3uiv(this.addr,t),Sn(n,t)}}function AR(c,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(c.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(yn(n,t))return;c.uniform4uiv(this.addr,t),Sn(n,t)}}function wR(c,t,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(c.uniform1i(this.addr,r),a[0]=r);let o;this.type===c.SAMPLER_2D_SHADOW?(Cp.compareFunction=n.isReversedDepthBuffer()?kp:Vp,o=Cp):o=Qx,n.setTexture2D(t||o,r)}function RR(c,t,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(c.uniform1i(this.addr,r),a[0]=r),n.setTexture3D(t||$x,r)}function CR(c,t,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(c.uniform1i(this.addr,r),a[0]=r),n.setTextureCube(t||ty,r)}function DR(c,t,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(c.uniform1i(this.addr,r),a[0]=r),n.setTexture2DArray(t||Jx,r)}function NR(c){switch(c){case 5126:return hR;case 35664:return dR;case 35665:return pR;case 35666:return mR;case 35674:return gR;case 35675:return vR;case 35676:return _R;case 5124:case 35670:return xR;case 35667:case 35671:return yR;case 35668:case 35672:return SR;case 35669:case 35673:return MR;case 5125:return ER;case 36294:return bR;case 36295:return TR;case 36296:return AR;case 35678:case 36198:case 36298:case 36306:case 35682:return wR;case 35679:case 36299:case 36307:return RR;case 35680:case 36300:case 36308:case 36293:return CR;case 36289:case 36303:case 36311:case 36292:return DR}}function UR(c,t){c.uniform1fv(this.addr,t)}function LR(c,t){const n=yo(t,this.size,2);c.uniform2fv(this.addr,n)}function OR(c,t){const n=yo(t,this.size,3);c.uniform3fv(this.addr,n)}function zR(c,t){const n=yo(t,this.size,4);c.uniform4fv(this.addr,n)}function PR(c,t){const n=yo(t,this.size,4);c.uniformMatrix2fv(this.addr,!1,n)}function BR(c,t){const n=yo(t,this.size,9);c.uniformMatrix3fv(this.addr,!1,n)}function FR(c,t){const n=yo(t,this.size,16);c.uniformMatrix4fv(this.addr,!1,n)}function IR(c,t){c.uniform1iv(this.addr,t)}function HR(c,t){c.uniform2iv(this.addr,t)}function GR(c,t){c.uniform3iv(this.addr,t)}function VR(c,t){c.uniform4iv(this.addr,t)}function kR(c,t){c.uniform1uiv(this.addr,t)}function qR(c,t){c.uniform2uiv(this.addr,t)}function XR(c,t){c.uniform3uiv(this.addr,t)}function WR(c,t){c.uniform4uiv(this.addr,t)}function YR(c,t,n){const a=this.cache,r=t.length,o=Iu(n,r);yn(a,o)||(c.uniform1iv(this.addr,o),Sn(a,o));let u;this.type===c.SAMPLER_2D_SHADOW?u=Cp:u=Qx;for(let f=0;f!==r;++f)n.setTexture2D(t[f]||u,o[f])}function jR(c,t,n){const a=this.cache,r=t.length,o=Iu(n,r);yn(a,o)||(c.uniform1iv(this.addr,o),Sn(a,o));for(let u=0;u!==r;++u)n.setTexture3D(t[u]||$x,o[u])}function ZR(c,t,n){const a=this.cache,r=t.length,o=Iu(n,r);yn(a,o)||(c.uniform1iv(this.addr,o),Sn(a,o));for(let u=0;u!==r;++u)n.setTextureCube(t[u]||ty,o[u])}function KR(c,t,n){const a=this.cache,r=t.length,o=Iu(n,r);yn(a,o)||(c.uniform1iv(this.addr,o),Sn(a,o));for(let u=0;u!==r;++u)n.setTexture2DArray(t[u]||Jx,o[u])}function QR(c){switch(c){case 5126:return UR;case 35664:return LR;case 35665:return OR;case 35666:return zR;case 35674:return PR;case 35675:return BR;case 35676:return FR;case 5124:case 35670:return IR;case 35667:case 35671:return HR;case 35668:case 35672:return GR;case 35669:case 35673:return VR;case 5125:return kR;case 36294:return qR;case 36295:return XR;case 36296:return WR;case 35678:case 36198:case 36298:case 36306:case 35682:return YR;case 35679:case 36299:case 36307:return jR;case 35680:case 36300:case 36308:case 36293:return ZR;case 36289:case 36303:case 36311:case 36292:return KR}}class JR{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.setValue=NR(n.type)}}class $R{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=QR(n.type)}}class tC{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,a){const r=this.seq;for(let o=0,u=r.length;o!==u;++o){const f=r[o];f.setValue(t,n[f.id],a)}}}const Ud=/(\w+)(\])?(\[|\.)?/g;function j_(c,t){c.seq.push(t),c.map[t.id]=t}function eC(c,t,n){const a=c.name,r=a.length;for(Ud.lastIndex=0;;){const o=Ud.exec(a),u=Ud.lastIndex;let f=o[1];const p=o[2]==="]",h=o[3];if(p&&(f=f|0),h===void 0||h==="["&&u+2===r){j_(n,h===void 0?new JR(f,c,t):new $R(f,c,t));break}else{let _=n.map[f];_===void 0&&(_=new tC(f),j_(n,_)),n=_}}}class Du{constructor(t,n){this.seq=[],this.map={};const a=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let u=0;u<a;++u){const f=t.getActiveUniform(n,u),p=t.getUniformLocation(n,f.name);eC(f,p,this)}const r=[],o=[];for(const u of this.seq)u.type===t.SAMPLER_2D_SHADOW||u.type===t.SAMPLER_CUBE_SHADOW||u.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(u):o.push(u);r.length>0&&(this.seq=r.concat(o))}setValue(t,n,a,r){const o=this.map[n];o!==void 0&&o.setValue(t,a,r)}setOptional(t,n,a){const r=n[a];r!==void 0&&this.setValue(t,a,r)}static upload(t,n,a,r){for(let o=0,u=n.length;o!==u;++o){const f=n[o],p=a[f.id];p.needsUpdate!==!1&&f.setValue(t,p.value,r)}}static seqWithValue(t,n){const a=[];for(let r=0,o=t.length;r!==o;++r){const u=t[r];u.id in n&&a.push(u)}return a}}function Z_(c,t,n){const a=c.createShader(t);return c.shaderSource(a,n),c.compileShader(a),a}const nC=37297;let iC=0;function aC(c,t){const n=c.split(`
`),a=[],r=Math.max(t-6,0),o=Math.min(t+6,n.length);for(let u=r;u<o;u++){const f=u+1;a.push(`${f===t?">":" "} ${f}: ${n[u]}`)}return a.join(`
`)}const K_=new pe;function sC(c){Re._getMatrix(K_,Re.workingColorSpace,c);const t=`mat3( ${K_.elements.map(n=>n.toFixed(4))} )`;switch(Re.getTransfer(c)){case Lu:return[t,"LinearTransferOETF"];case qe:return[t,"sRGBTransferOETF"];default:return ue("WebGLProgram: Unsupported color space: ",c),[t,"LinearTransferOETF"]}}function Q_(c,t,n){const a=c.getShaderParameter(t,c.COMPILE_STATUS),o=(c.getShaderInfoLog(t)||"").trim();if(a&&o==="")return"";const u=/ERROR: 0:(\d+)/.exec(o);if(u){const f=parseInt(u[1]);return n.toUpperCase()+`

`+o+`

`+aC(c.getShaderSource(t),f)}else return o}function rC(c,t){const n=sC(t);return[`vec4 ${c}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const oC={[Sx]:"Linear",[Mx]:"Reinhard",[Ex]:"Cineon",[bx]:"ACESFilmic",[Ax]:"AgX",[wx]:"Neutral",[Tx]:"Custom"};function lC(c,t){const n=oC[t];return n===void 0?(ue("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+c+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+c+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Eu=new ut;function cC(){Re.getLuminanceCoefficients(Eu);const c=Eu.x.toFixed(4),t=Eu.y.toFixed(4),n=Eu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${c}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uC(c){return[c.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",c.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rl).join(`
`)}function fC(c){const t=[];for(const n in c){const a=c[n];a!==!1&&t.push("#define "+n+" "+a)}return t.join(`
`)}function hC(c,t){const n={},a=c.getProgramParameter(t,c.ACTIVE_ATTRIBUTES);for(let r=0;r<a;r++){const o=c.getActiveAttrib(t,r),u=o.name;let f=1;o.type===c.FLOAT_MAT2&&(f=2),o.type===c.FLOAT_MAT3&&(f=3),o.type===c.FLOAT_MAT4&&(f=4),n[u]={type:o.type,location:c.getAttribLocation(t,u),locationSize:f}}return n}function Rl(c){return c!==""}function J_(c,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return c.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $_(c,t){return c.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const dC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dp(c){return c.replace(dC,mC)}const pC=new Map;function mC(c,t){let n=ge[t];if(n===void 0){const a=pC.get(t);if(a!==void 0)n=ge[a],ue('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return Dp(n)}const gC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tx(c){return c.replace(gC,vC)}function vC(c,t,n,a){let r="";for(let o=parseInt(t);o<parseInt(n);o++)r+=a.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function ex(c){let t=`precision ${c.precision} float;
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
#define LOW_PRECISION`),t}const _C={[Tu]:"SHADOWMAP_TYPE_PCF",[wl]:"SHADOWMAP_TYPE_VSM"};function xC(c){return _C[c.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const yC={[rr]:"ENVMAP_TYPE_CUBE",[po]:"ENVMAP_TYPE_CUBE",[Pu]:"ENVMAP_TYPE_CUBE_UV"};function SC(c){return c.envMap===!1?"ENVMAP_TYPE_CUBE":yC[c.envMapMode]||"ENVMAP_TYPE_CUBE"}const MC={[po]:"ENVMAP_MODE_REFRACTION"};function EC(c){return c.envMap===!1?"ENVMAP_MODE_REFLECTION":MC[c.envMapMode]||"ENVMAP_MODE_REFLECTION"}const bC={[yx]:"ENVMAP_BLENDING_MULTIPLY",[fT]:"ENVMAP_BLENDING_MIX",[hT]:"ENVMAP_BLENDING_ADD"};function TC(c){return c.envMap===!1?"ENVMAP_BLENDING_NONE":bC[c.combine]||"ENVMAP_BLENDING_NONE"}function AC(c){const t=c.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function wC(c,t,n,a){const r=c.getContext(),o=n.defines;let u=n.vertexShader,f=n.fragmentShader;const p=xC(n),h=SC(n),g=EC(n),_=TC(n),v=AC(n),y=uC(n),M=fC(o),b=r.createProgram();let S,x,T=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(Rl).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(Rl).join(`
`),x.length>0&&(x+=`
`)):(S=[ex(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rl).join(`
`),x=[ex(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ii?"#define TONE_MAPPING":"",n.toneMapping!==Ii?ge.tonemapping_pars_fragment:"",n.toneMapping!==Ii?lC("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ge.colorspace_pars_fragment,rC("linearToOutputTexel",n.outputColorSpace),cC(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Rl).join(`
`)),u=Dp(u),u=J_(u,n),u=$_(u,n),f=Dp(f),f=J_(f,n),f=$_(f,n),u=tx(u),f=tx(f),n.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",n.glslVersion===f_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===f_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const C=T+S+u,L=T+x+f,z=Z_(r,r.VERTEX_SHADER,C),B=Z_(r,r.FRAGMENT_SHADER,L);r.attachShader(b,z),r.attachShader(b,B),n.index0AttributeName!==void 0?r.bindAttribLocation(b,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function P(G){if(c.debug.checkShaderErrors){const $=r.getProgramInfoLog(b)||"",V=r.getShaderInfoLog(z)||"",j=r.getShaderInfoLog(B)||"",X=$.trim(),D=V.trim(),H=j.trim();let Q=!0,ft=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(Q=!1,typeof c.debug.onShaderError=="function")c.debug.onShaderError(r,b,z,B);else{const mt=Q_(r,z,"vertex"),F=Q_(r,B,"fragment");we("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+X+`
`+mt+`
`+F)}else X!==""?ue("WebGLProgram: Program Info Log:",X):(D===""||H==="")&&(ft=!1);ft&&(G.diagnostics={runnable:Q,programLog:X,vertexShader:{log:D,prefix:S},fragmentShader:{log:H,prefix:x}})}r.deleteShader(z),r.deleteShader(B),Y=new Du(r,b),w=hC(r,b)}let Y;this.getUniforms=function(){return Y===void 0&&P(this),Y};let w;this.getAttributes=function(){return w===void 0&&P(this),w};let O=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=r.getProgramParameter(b,nC)),O},this.destroy=function(){a.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=iC++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=z,this.fragmentShader=B,this}let RC=0;class CC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,a=t.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(a),u=this._getShaderCacheForMaterial(t);return u.has(r)===!1&&(u.add(r),r.usedTimes++),u.has(o)===!1&&(u.add(o),o.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let a=n.get(t);return a===void 0&&(a=new Set,n.set(t,a)),a}_getShaderStage(t){const n=this.shaderCache;let a=n.get(t);return a===void 0&&(a=new DC(t),n.set(t,a)),a}}class DC{constructor(t){this.id=RC++,this.code=t,this.usedTimes=0}}function NC(c,t,n,a,r,o,u){const f=new Wp,p=new CC,h=new Set,g=[],_=new Map,v=r.logarithmicDepthBuffer;let y=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(w){return h.add(w),w===0?"uv":`uv${w}`}function S(w,O,G,$,V){const j=$.fog,X=V.geometry,D=w.isMeshStandardMaterial?$.environment:null,H=(w.isMeshStandardMaterial?n:t).get(w.envMap||D),Q=H&&H.mapping===Pu?H.image.height:null,ft=M[w.type];w.precision!==null&&(y=r.getMaxPrecision(w.precision),y!==w.precision&&ue("WebGLProgram.getParameters:",w.precision,"not supported, using",y,"instead."));const mt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,F=mt!==void 0?mt.length:0;let Z=0;X.morphAttributes.position!==void 0&&(Z=1),X.morphAttributes.normal!==void 0&&(Z=2),X.morphAttributes.color!==void 0&&(Z=3);let _t,Tt,Ft,nt;if(ft){const Ae=Qi[ft];_t=Ae.vertexShader,Tt=Ae.fragmentShader}else _t=w.vertexShader,Tt=w.fragmentShader,p.update(w),Ft=p.getVertexShaderID(w),nt=p.getFragmentShaderID(w);const pt=c.getRenderTarget(),Nt=c.state.buffers.depth.getReversed(),Xt=V.isInstancedMesh===!0,Vt=V.isBatchedMesh===!0,me=!!w.map,Xe=!!w.matcap,fe=!!H,ve=!!w.aoMap,Te=!!w.lightMap,se=!!w.bumpMap,Ze=!!w.normalMap,W=!!w.displacementMap,Ke=!!w.emissiveMap,_e=!!w.metalnessMap,Ce=!!w.roughnessMap,Zt=w.anisotropy>0,I=w.clearcoat>0,A=w.dispersion>0,q=w.iridescence>0,st=w.sheen>0,gt=w.transmission>0,at=Zt&&!!w.anisotropyMap,wt=I&&!!w.clearcoatMap,Et=I&&!!w.clearcoatNormalMap,Pt=I&&!!w.clearcoatRoughnessMap,te=q&&!!w.iridescenceMap,Mt=q&&!!w.iridescenceThicknessMap,At=st&&!!w.sheenColorMap,Ut=st&&!!w.sheenRoughnessMap,Lt=!!w.specularMap,Ct=!!w.specularColorMap,re=!!w.specularIntensityMap,J=gt&&!!w.transmissionMap,zt=gt&&!!w.thicknessMap,Rt=!!w.gradientMap,Ht=!!w.alphaMap,bt=w.alphaTest>0,St=!!w.alphaHash,Dt=!!w.extensions;let oe=Ii;w.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(oe=c.toneMapping);const He={shaderID:ft,shaderType:w.type,shaderName:w.name,vertexShader:_t,fragmentShader:Tt,defines:w.defines,customVertexShaderID:Ft,customFragmentShaderID:nt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:y,batching:Vt,batchingColor:Vt&&V._colorsTexture!==null,instancing:Xt,instancingColor:Xt&&V.instanceColor!==null,instancingMorph:Xt&&V.morphTexture!==null,outputColorSpace:pt===null?c.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:go,alphaToCoverage:!!w.alphaToCoverage,map:me,matcap:Xe,envMap:fe,envMapMode:fe&&H.mapping,envMapCubeUVHeight:Q,aoMap:ve,lightMap:Te,bumpMap:se,normalMap:Ze,displacementMap:W,emissiveMap:Ke,normalMapObjectSpace:Ze&&w.normalMapType===mT,normalMapTangentSpace:Ze&&w.normalMapType===Px,metalnessMap:_e,roughnessMap:Ce,anisotropy:Zt,anisotropyMap:at,clearcoat:I,clearcoatMap:wt,clearcoatNormalMap:Et,clearcoatRoughnessMap:Pt,dispersion:A,iridescence:q,iridescenceMap:te,iridescenceThicknessMap:Mt,sheen:st,sheenColorMap:At,sheenRoughnessMap:Ut,specularMap:Lt,specularColorMap:Ct,specularIntensityMap:re,transmission:gt,transmissionMap:J,thicknessMap:zt,gradientMap:Rt,opaque:w.transparent===!1&&w.blending===co&&w.alphaToCoverage===!1,alphaMap:Ht,alphaTest:bt,alphaHash:St,combine:w.combine,mapUv:me&&b(w.map.channel),aoMapUv:ve&&b(w.aoMap.channel),lightMapUv:Te&&b(w.lightMap.channel),bumpMapUv:se&&b(w.bumpMap.channel),normalMapUv:Ze&&b(w.normalMap.channel),displacementMapUv:W&&b(w.displacementMap.channel),emissiveMapUv:Ke&&b(w.emissiveMap.channel),metalnessMapUv:_e&&b(w.metalnessMap.channel),roughnessMapUv:Ce&&b(w.roughnessMap.channel),anisotropyMapUv:at&&b(w.anisotropyMap.channel),clearcoatMapUv:wt&&b(w.clearcoatMap.channel),clearcoatNormalMapUv:Et&&b(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pt&&b(w.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&b(w.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&b(w.iridescenceThicknessMap.channel),sheenColorMapUv:At&&b(w.sheenColorMap.channel),sheenRoughnessMapUv:Ut&&b(w.sheenRoughnessMap.channel),specularMapUv:Lt&&b(w.specularMap.channel),specularColorMapUv:Ct&&b(w.specularColorMap.channel),specularIntensityMapUv:re&&b(w.specularIntensityMap.channel),transmissionMapUv:J&&b(w.transmissionMap.channel),thicknessMapUv:zt&&b(w.thicknessMap.channel),alphaMapUv:Ht&&b(w.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Ze||Zt),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!X.attributes.uv&&(me||Ht),fog:!!j,useFog:w.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Nt,skinning:V.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:Z,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:w.dithering,shadowMapEnabled:c.shadowMap.enabled&&G.length>0,shadowMapType:c.shadowMap.type,toneMapping:oe,decodeVideoTexture:me&&w.map.isVideoTexture===!0&&Re.getTransfer(w.map.colorSpace)===qe,decodeVideoTextureEmissive:Ke&&w.emissiveMap.isVideoTexture===!0&&Re.getTransfer(w.emissiveMap.colorSpace)===qe,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Oa,flipSided:w.side===ti,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Dt&&w.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&w.extensions.multiDraw===!0||Vt)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return He.vertexUv1s=h.has(1),He.vertexUv2s=h.has(2),He.vertexUv3s=h.has(3),h.clear(),He}function x(w){const O=[];if(w.shaderID?O.push(w.shaderID):(O.push(w.customVertexShaderID),O.push(w.customFragmentShaderID)),w.defines!==void 0)for(const G in w.defines)O.push(G),O.push(w.defines[G]);return w.isRawShaderMaterial===!1&&(T(O,w),C(O,w),O.push(c.outputColorSpace)),O.push(w.customProgramCacheKey),O.join()}function T(w,O){w.push(O.precision),w.push(O.outputColorSpace),w.push(O.envMapMode),w.push(O.envMapCubeUVHeight),w.push(O.mapUv),w.push(O.alphaMapUv),w.push(O.lightMapUv),w.push(O.aoMapUv),w.push(O.bumpMapUv),w.push(O.normalMapUv),w.push(O.displacementMapUv),w.push(O.emissiveMapUv),w.push(O.metalnessMapUv),w.push(O.roughnessMapUv),w.push(O.anisotropyMapUv),w.push(O.clearcoatMapUv),w.push(O.clearcoatNormalMapUv),w.push(O.clearcoatRoughnessMapUv),w.push(O.iridescenceMapUv),w.push(O.iridescenceThicknessMapUv),w.push(O.sheenColorMapUv),w.push(O.sheenRoughnessMapUv),w.push(O.specularMapUv),w.push(O.specularColorMapUv),w.push(O.specularIntensityMapUv),w.push(O.transmissionMapUv),w.push(O.thicknessMapUv),w.push(O.combine),w.push(O.fogExp2),w.push(O.sizeAttenuation),w.push(O.morphTargetsCount),w.push(O.morphAttributeCount),w.push(O.numDirLights),w.push(O.numPointLights),w.push(O.numSpotLights),w.push(O.numSpotLightMaps),w.push(O.numHemiLights),w.push(O.numRectAreaLights),w.push(O.numDirLightShadows),w.push(O.numPointLightShadows),w.push(O.numSpotLightShadows),w.push(O.numSpotLightShadowsWithMaps),w.push(O.numLightProbes),w.push(O.shadowMapType),w.push(O.toneMapping),w.push(O.numClippingPlanes),w.push(O.numClipIntersection),w.push(O.depthPacking)}function C(w,O){f.disableAll(),O.instancing&&f.enable(0),O.instancingColor&&f.enable(1),O.instancingMorph&&f.enable(2),O.matcap&&f.enable(3),O.envMap&&f.enable(4),O.normalMapObjectSpace&&f.enable(5),O.normalMapTangentSpace&&f.enable(6),O.clearcoat&&f.enable(7),O.iridescence&&f.enable(8),O.alphaTest&&f.enable(9),O.vertexColors&&f.enable(10),O.vertexAlphas&&f.enable(11),O.vertexUv1s&&f.enable(12),O.vertexUv2s&&f.enable(13),O.vertexUv3s&&f.enable(14),O.vertexTangents&&f.enable(15),O.anisotropy&&f.enable(16),O.alphaHash&&f.enable(17),O.batching&&f.enable(18),O.dispersion&&f.enable(19),O.batchingColor&&f.enable(20),O.gradientMap&&f.enable(21),w.push(f.mask),f.disableAll(),O.fog&&f.enable(0),O.useFog&&f.enable(1),O.flatShading&&f.enable(2),O.logarithmicDepthBuffer&&f.enable(3),O.reversedDepthBuffer&&f.enable(4),O.skinning&&f.enable(5),O.morphTargets&&f.enable(6),O.morphNormals&&f.enable(7),O.morphColors&&f.enable(8),O.premultipliedAlpha&&f.enable(9),O.shadowMapEnabled&&f.enable(10),O.doubleSided&&f.enable(11),O.flipSided&&f.enable(12),O.useDepthPacking&&f.enable(13),O.dithering&&f.enable(14),O.transmission&&f.enable(15),O.sheen&&f.enable(16),O.opaque&&f.enable(17),O.pointsUvs&&f.enable(18),O.decodeVideoTexture&&f.enable(19),O.decodeVideoTextureEmissive&&f.enable(20),O.alphaToCoverage&&f.enable(21),w.push(f.mask)}function L(w){const O=M[w.type];let G;if(O){const $=Qi[O];G=kT.clone($.uniforms)}else G=w.uniforms;return G}function z(w,O){let G=_.get(O);return G!==void 0?++G.usedTimes:(G=new wC(c,O,w,o),g.push(G),_.set(O,G)),G}function B(w){if(--w.usedTimes===0){const O=g.indexOf(w);g[O]=g[g.length-1],g.pop(),_.delete(w.cacheKey),w.destroy()}}function P(w){p.remove(w)}function Y(){p.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:L,acquireProgram:z,releaseProgram:B,releaseShaderCache:P,programs:g,dispose:Y}}function UC(){let c=new WeakMap;function t(u){return c.has(u)}function n(u){let f=c.get(u);return f===void 0&&(f={},c.set(u,f)),f}function a(u){c.delete(u)}function r(u,f,p){c.get(u)[f]=p}function o(){c=new WeakMap}return{has:t,get:n,remove:a,update:r,dispose:o}}function LC(c,t){return c.groupOrder!==t.groupOrder?c.groupOrder-t.groupOrder:c.renderOrder!==t.renderOrder?c.renderOrder-t.renderOrder:c.material.id!==t.material.id?c.material.id-t.material.id:c.z!==t.z?c.z-t.z:c.id-t.id}function nx(c,t){return c.groupOrder!==t.groupOrder?c.groupOrder-t.groupOrder:c.renderOrder!==t.renderOrder?c.renderOrder-t.renderOrder:c.z!==t.z?t.z-c.z:c.id-t.id}function ix(){const c=[];let t=0;const n=[],a=[],r=[];function o(){t=0,n.length=0,a.length=0,r.length=0}function u(_,v,y,M,b,S){let x=c[t];return x===void 0?(x={id:_.id,object:_,geometry:v,material:y,groupOrder:M,renderOrder:_.renderOrder,z:b,group:S},c[t]=x):(x.id=_.id,x.object=_,x.geometry=v,x.material=y,x.groupOrder=M,x.renderOrder=_.renderOrder,x.z=b,x.group=S),t++,x}function f(_,v,y,M,b,S){const x=u(_,v,y,M,b,S);y.transmission>0?a.push(x):y.transparent===!0?r.push(x):n.push(x)}function p(_,v,y,M,b,S){const x=u(_,v,y,M,b,S);y.transmission>0?a.unshift(x):y.transparent===!0?r.unshift(x):n.unshift(x)}function h(_,v){n.length>1&&n.sort(_||LC),a.length>1&&a.sort(v||nx),r.length>1&&r.sort(v||nx)}function g(){for(let _=t,v=c.length;_<v;_++){const y=c[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:a,transparent:r,init:o,push:f,unshift:p,finish:g,sort:h}}function OC(){let c=new WeakMap;function t(a,r){const o=c.get(a);let u;return o===void 0?(u=new ix,c.set(a,[u])):r>=o.length?(u=new ix,o.push(u)):u=o[r],u}function n(){c=new WeakMap}return{get:t,dispose:n}}function zC(){const c={};return{get:function(t){if(c[t.id]!==void 0)return c[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new ut,color:new Ue};break;case"SpotLight":n={position:new ut,direction:new ut,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ut,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ut,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":n={color:new Ue,position:new ut,halfWidth:new ut,halfHeight:new ut};break}return c[t.id]=n,n}}}function PC(){const c={};return{get:function(t){if(c[t.id]!==void 0)return c[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return c[t.id]=n,n}}}let BC=0;function FC(c,t){return(t.castShadow?2:0)-(c.castShadow?2:0)+(t.map?1:0)-(c.map?1:0)}function IC(c){const t=new zC,n=PC(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)a.probe.push(new ut);const r=new ut,o=new sn,u=new sn;function f(h){let g=0,_=0,v=0;for(let w=0;w<9;w++)a.probe[w].set(0,0,0);let y=0,M=0,b=0,S=0,x=0,T=0,C=0,L=0,z=0,B=0,P=0;h.sort(FC);for(let w=0,O=h.length;w<O;w++){const G=h[w],$=G.color,V=G.intensity,j=G.distance;let X=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===mo?X=G.shadow.map.texture:X=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)g+=$.r*V,_+=$.g*V,v+=$.b*V;else if(G.isLightProbe){for(let D=0;D<9;D++)a.probe[D].addScaledVector(G.sh.coefficients[D],V);P++}else if(G.isDirectionalLight){const D=t.get(G);if(D.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const H=G.shadow,Q=n.get(G);Q.shadowIntensity=H.intensity,Q.shadowBias=H.bias,Q.shadowNormalBias=H.normalBias,Q.shadowRadius=H.radius,Q.shadowMapSize=H.mapSize,a.directionalShadow[y]=Q,a.directionalShadowMap[y]=X,a.directionalShadowMatrix[y]=G.shadow.matrix,T++}a.directional[y]=D,y++}else if(G.isSpotLight){const D=t.get(G);D.position.setFromMatrixPosition(G.matrixWorld),D.color.copy($).multiplyScalar(V),D.distance=j,D.coneCos=Math.cos(G.angle),D.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),D.decay=G.decay,a.spot[b]=D;const H=G.shadow;if(G.map&&(a.spotLightMap[z]=G.map,z++,H.updateMatrices(G),G.castShadow&&B++),a.spotLightMatrix[b]=H.matrix,G.castShadow){const Q=n.get(G);Q.shadowIntensity=H.intensity,Q.shadowBias=H.bias,Q.shadowNormalBias=H.normalBias,Q.shadowRadius=H.radius,Q.shadowMapSize=H.mapSize,a.spotShadow[b]=Q,a.spotShadowMap[b]=X,L++}b++}else if(G.isRectAreaLight){const D=t.get(G);D.color.copy($).multiplyScalar(V),D.halfWidth.set(G.width*.5,0,0),D.halfHeight.set(0,G.height*.5,0),a.rectArea[S]=D,S++}else if(G.isPointLight){const D=t.get(G);if(D.color.copy(G.color).multiplyScalar(G.intensity),D.distance=G.distance,D.decay=G.decay,G.castShadow){const H=G.shadow,Q=n.get(G);Q.shadowIntensity=H.intensity,Q.shadowBias=H.bias,Q.shadowNormalBias=H.normalBias,Q.shadowRadius=H.radius,Q.shadowMapSize=H.mapSize,Q.shadowCameraNear=H.camera.near,Q.shadowCameraFar=H.camera.far,a.pointShadow[M]=Q,a.pointShadowMap[M]=X,a.pointShadowMatrix[M]=G.shadow.matrix,C++}a.point[M]=D,M++}else if(G.isHemisphereLight){const D=t.get(G);D.skyColor.copy(G.color).multiplyScalar(V),D.groundColor.copy(G.groundColor).multiplyScalar(V),a.hemi[x]=D,x++}}S>0&&(c.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=It.LTC_FLOAT_1,a.rectAreaLTC2=It.LTC_FLOAT_2):(a.rectAreaLTC1=It.LTC_HALF_1,a.rectAreaLTC2=It.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=_,a.ambient[2]=v;const Y=a.hash;(Y.directionalLength!==y||Y.pointLength!==M||Y.spotLength!==b||Y.rectAreaLength!==S||Y.hemiLength!==x||Y.numDirectionalShadows!==T||Y.numPointShadows!==C||Y.numSpotShadows!==L||Y.numSpotMaps!==z||Y.numLightProbes!==P)&&(a.directional.length=y,a.spot.length=b,a.rectArea.length=S,a.point.length=M,a.hemi.length=x,a.directionalShadow.length=T,a.directionalShadowMap.length=T,a.pointShadow.length=C,a.pointShadowMap.length=C,a.spotShadow.length=L,a.spotShadowMap.length=L,a.directionalShadowMatrix.length=T,a.pointShadowMatrix.length=C,a.spotLightMatrix.length=L+z-B,a.spotLightMap.length=z,a.numSpotLightShadowsWithMaps=B,a.numLightProbes=P,Y.directionalLength=y,Y.pointLength=M,Y.spotLength=b,Y.rectAreaLength=S,Y.hemiLength=x,Y.numDirectionalShadows=T,Y.numPointShadows=C,Y.numSpotShadows=L,Y.numSpotMaps=z,Y.numLightProbes=P,a.version=BC++)}function p(h,g){let _=0,v=0,y=0,M=0,b=0;const S=g.matrixWorldInverse;for(let x=0,T=h.length;x<T;x++){const C=h[x];if(C.isDirectionalLight){const L=a.directional[_];L.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(S),_++}else if(C.isSpotLight){const L=a.spot[y];L.position.setFromMatrixPosition(C.matrixWorld),L.position.applyMatrix4(S),L.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(S),y++}else if(C.isRectAreaLight){const L=a.rectArea[M];L.position.setFromMatrixPosition(C.matrixWorld),L.position.applyMatrix4(S),u.identity(),o.copy(C.matrixWorld),o.premultiply(S),u.extractRotation(o),L.halfWidth.set(C.width*.5,0,0),L.halfHeight.set(0,C.height*.5,0),L.halfWidth.applyMatrix4(u),L.halfHeight.applyMatrix4(u),M++}else if(C.isPointLight){const L=a.point[v];L.position.setFromMatrixPosition(C.matrixWorld),L.position.applyMatrix4(S),v++}else if(C.isHemisphereLight){const L=a.hemi[b];L.direction.setFromMatrixPosition(C.matrixWorld),L.direction.transformDirection(S),b++}}}return{setup:f,setupView:p,state:a}}function ax(c){const t=new IC(c),n=[],a=[];function r(g){h.camera=g,n.length=0,a.length=0}function o(g){n.push(g)}function u(g){a.push(g)}function f(){t.setup(n)}function p(g){t.setupView(n,g)}const h={lightsArray:n,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:h,setupLights:f,setupLightsView:p,pushLight:o,pushShadow:u}}function HC(c){let t=new WeakMap;function n(r,o=0){const u=t.get(r);let f;return u===void 0?(f=new ax(c),t.set(r,[f])):o>=u.length?(f=new ax(c),u.push(f)):f=u[o],f}function a(){t=new WeakMap}return{get:n,dispose:a}}const GC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,VC=`uniform sampler2D shadow_pass;
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
}`,kC=[new ut(1,0,0),new ut(-1,0,0),new ut(0,1,0),new ut(0,-1,0),new ut(0,0,1),new ut(0,0,-1)],qC=[new ut(0,-1,0),new ut(0,-1,0),new ut(0,0,1),new ut(0,0,-1),new ut(0,-1,0),new ut(0,-1,0)],sx=new sn,Tl=new ut,Ld=new ut;function XC(c,t,n){let a=new Yp;const r=new Le,o=new Le,u=new ln,f=new e1,p=new n1,h={},g=n.maxTextureSize,_={[As]:ti,[ti]:As,[Oa]:Oa},v=new sa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:GC,fragmentShader:VC}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const M=new Ga;M.setAttribute("position",new na(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Hi(M,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tu;let x=this.type;this.render=function(B,P,Y){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||B.length===0)return;B.type===xx&&(ue("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),B.type=Tu);const w=c.getRenderTarget(),O=c.getActiveCubeFace(),G=c.getActiveMipmapLevel(),$=c.state;$.setBlending(Pa),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const V=x!==this.type;V&&P.traverse(function(j){j.material&&(Array.isArray(j.material)?j.material.forEach(X=>X.needsUpdate=!0):j.material.needsUpdate=!0)});for(let j=0,X=B.length;j<X;j++){const D=B[j],H=D.shadow;if(H===void 0){ue("WebGLShadowMap:",D,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const Q=H.getFrameExtents();if(r.multiply(Q),o.copy(H.mapSize),(r.x>g||r.y>g)&&(r.x>g&&(o.x=Math.floor(g/Q.x),r.x=o.x*Q.x,H.mapSize.x=o.x),r.y>g&&(o.y=Math.floor(g/Q.y),r.y=o.y*Q.y,H.mapSize.y=o.y)),H.map===null||V===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===wl){if(D.isPointLight){ue("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new ea(r.x,r.y,{format:mo,type:Ia,minFilter:zn,magFilter:zn,generateMipmaps:!1}),H.map.texture.name=D.name+".shadowMap",H.map.depthTexture=new Ol(r.x,r.y,Ji),H.map.depthTexture.name=D.name+".shadowMapDepth",H.map.depthTexture.format=Ha,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=On,H.map.depthTexture.magFilter=On}else{D.isPointLight?(H.map=new Yx(r.x),H.map.depthTexture=new $T(r.x,ia)):(H.map=new ea(r.x,r.y),H.map.depthTexture=new Ol(r.x,r.y,ia)),H.map.depthTexture.name=D.name+".shadowMap",H.map.depthTexture.format=Ha;const mt=c.state.buffers.depth.getReversed();this.type===Tu?(H.map.depthTexture.compareFunction=mt?kp:Vp,H.map.depthTexture.minFilter=zn,H.map.depthTexture.magFilter=zn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=On,H.map.depthTexture.magFilter=On)}H.camera.updateProjectionMatrix()}const ft=H.map.isWebGLCubeRenderTarget?6:1;for(let mt=0;mt<ft;mt++){if(H.map.isWebGLCubeRenderTarget)c.setRenderTarget(H.map,mt),c.clear();else{mt===0&&(c.setRenderTarget(H.map),c.clear());const F=H.getViewport(mt);u.set(o.x*F.x,o.y*F.y,o.x*F.z,o.y*F.w),$.viewport(u)}if(D.isPointLight){const F=H.camera,Z=H.matrix,_t=D.distance||F.far;_t!==F.far&&(F.far=_t,F.updateProjectionMatrix()),Tl.setFromMatrixPosition(D.matrixWorld),F.position.copy(Tl),Ld.copy(F.position),Ld.add(kC[mt]),F.up.copy(qC[mt]),F.lookAt(Ld),F.updateMatrixWorld(),Z.makeTranslation(-Tl.x,-Tl.y,-Tl.z),sx.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),H._frustum.setFromProjectionMatrix(sx,F.coordinateSystem,F.reversedDepth)}else H.updateMatrices(D);a=H.getFrustum(),L(P,Y,H.camera,D,this.type)}H.isPointLightShadow!==!0&&this.type===wl&&T(H,Y),H.needsUpdate=!1}x=this.type,S.needsUpdate=!1,c.setRenderTarget(w,O,G)};function T(B,P){const Y=t.update(b);v.defines.VSM_SAMPLES!==B.blurSamples&&(v.defines.VSM_SAMPLES=B.blurSamples,y.defines.VSM_SAMPLES=B.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new ea(r.x,r.y,{format:mo,type:Ia})),v.uniforms.shadow_pass.value=B.map.depthTexture,v.uniforms.resolution.value=B.mapSize,v.uniforms.radius.value=B.radius,c.setRenderTarget(B.mapPass),c.clear(),c.renderBufferDirect(P,null,Y,v,b,null),y.uniforms.shadow_pass.value=B.mapPass.texture,y.uniforms.resolution.value=B.mapSize,y.uniforms.radius.value=B.radius,c.setRenderTarget(B.map),c.clear(),c.renderBufferDirect(P,null,Y,y,b,null)}function C(B,P,Y,w){let O=null;const G=Y.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(G!==void 0)O=G;else if(O=Y.isPointLight===!0?p:f,c.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const $=O.uuid,V=P.uuid;let j=h[$];j===void 0&&(j={},h[$]=j);let X=j[V];X===void 0&&(X=O.clone(),j[V]=X,P.addEventListener("dispose",z)),O=X}if(O.visible=P.visible,O.wireframe=P.wireframe,w===wl?O.side=P.shadowSide!==null?P.shadowSide:P.side:O.side=P.shadowSide!==null?P.shadowSide:_[P.side],O.alphaMap=P.alphaMap,O.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,O.map=P.map,O.clipShadows=P.clipShadows,O.clippingPlanes=P.clippingPlanes,O.clipIntersection=P.clipIntersection,O.displacementMap=P.displacementMap,O.displacementScale=P.displacementScale,O.displacementBias=P.displacementBias,O.wireframeLinewidth=P.wireframeLinewidth,O.linewidth=P.linewidth,Y.isPointLight===!0&&O.isMeshDistanceMaterial===!0){const $=c.properties.get(O);$.light=Y}return O}function L(B,P,Y,w,O){if(B.visible===!1)return;if(B.layers.test(P.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&O===wl)&&(!B.frustumCulled||a.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,B.matrixWorld);const V=t.update(B),j=B.material;if(Array.isArray(j)){const X=V.groups;for(let D=0,H=X.length;D<H;D++){const Q=X[D],ft=j[Q.materialIndex];if(ft&&ft.visible){const mt=C(B,ft,w,O);B.onBeforeShadow(c,B,P,Y,V,mt,Q),c.renderBufferDirect(Y,null,V,mt,B,Q),B.onAfterShadow(c,B,P,Y,V,mt,Q)}}}else if(j.visible){const X=C(B,j,w,O);B.onBeforeShadow(c,B,P,Y,V,X,null),c.renderBufferDirect(Y,null,V,X,B,null),B.onAfterShadow(c,B,P,Y,V,X,null)}}const $=B.children;for(let V=0,j=$.length;V<j;V++)L($[V],P,Y,w,O)}function z(B){B.target.removeEventListener("dispose",z);for(const Y in h){const w=h[Y],O=B.target.uuid;O in w&&(w[O].dispose(),delete w[O])}}}const WC={[Fd]:Id,[Hd]:kd,[Gd]:qd,[ho]:Vd,[Id]:Fd,[kd]:Hd,[qd]:Gd,[Vd]:ho};function YC(c,t){function n(){let J=!1;const zt=new ln;let Rt=null;const Ht=new ln(0,0,0,0);return{setMask:function(bt){Rt!==bt&&!J&&(c.colorMask(bt,bt,bt,bt),Rt=bt)},setLocked:function(bt){J=bt},setClear:function(bt,St,Dt,oe,He){He===!0&&(bt*=oe,St*=oe,Dt*=oe),zt.set(bt,St,Dt,oe),Ht.equals(zt)===!1&&(c.clearColor(bt,St,Dt,oe),Ht.copy(zt))},reset:function(){J=!1,Rt=null,Ht.set(-1,0,0,0)}}}function a(){let J=!1,zt=!1,Rt=null,Ht=null,bt=null;return{setReversed:function(St){if(zt!==St){const Dt=t.get("EXT_clip_control");St?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT),zt=St;const oe=bt;bt=null,this.setClear(oe)}},getReversed:function(){return zt},setTest:function(St){St?pt(c.DEPTH_TEST):Nt(c.DEPTH_TEST)},setMask:function(St){Rt!==St&&!J&&(c.depthMask(St),Rt=St)},setFunc:function(St){if(zt&&(St=WC[St]),Ht!==St){switch(St){case Fd:c.depthFunc(c.NEVER);break;case Id:c.depthFunc(c.ALWAYS);break;case Hd:c.depthFunc(c.LESS);break;case ho:c.depthFunc(c.LEQUAL);break;case Gd:c.depthFunc(c.EQUAL);break;case Vd:c.depthFunc(c.GEQUAL);break;case kd:c.depthFunc(c.GREATER);break;case qd:c.depthFunc(c.NOTEQUAL);break;default:c.depthFunc(c.LEQUAL)}Ht=St}},setLocked:function(St){J=St},setClear:function(St){bt!==St&&(zt&&(St=1-St),c.clearDepth(St),bt=St)},reset:function(){J=!1,Rt=null,Ht=null,bt=null,zt=!1}}}function r(){let J=!1,zt=null,Rt=null,Ht=null,bt=null,St=null,Dt=null,oe=null,He=null;return{setTest:function(Ae){J||(Ae?pt(c.STENCIL_TEST):Nt(c.STENCIL_TEST))},setMask:function(Ae){zt!==Ae&&!J&&(c.stencilMask(Ae),zt=Ae)},setFunc:function(Ae,Pn,bi){(Rt!==Ae||Ht!==Pn||bt!==bi)&&(c.stencilFunc(Ae,Pn,bi),Rt=Ae,Ht=Pn,bt=bi)},setOp:function(Ae,Pn,bi){(St!==Ae||Dt!==Pn||oe!==bi)&&(c.stencilOp(Ae,Pn,bi),St=Ae,Dt=Pn,oe=bi)},setLocked:function(Ae){J=Ae},setClear:function(Ae){He!==Ae&&(c.clearStencil(Ae),He=Ae)},reset:function(){J=!1,zt=null,Rt=null,Ht=null,bt=null,St=null,Dt=null,oe=null,He=null}}}const o=new n,u=new a,f=new r,p=new WeakMap,h=new WeakMap;let g={},_={},v=new WeakMap,y=[],M=null,b=!1,S=null,x=null,T=null,C=null,L=null,z=null,B=null,P=new Ue(0,0,0),Y=0,w=!1,O=null,G=null,$=null,V=null,j=null;const X=c.getParameter(c.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,H=0;const Q=c.getParameter(c.VERSION);Q.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(Q)[1]),D=H>=1):Q.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),D=H>=2);let ft=null,mt={};const F=c.getParameter(c.SCISSOR_BOX),Z=c.getParameter(c.VIEWPORT),_t=new ln().fromArray(F),Tt=new ln().fromArray(Z);function Ft(J,zt,Rt,Ht){const bt=new Uint8Array(4),St=c.createTexture();c.bindTexture(J,St),c.texParameteri(J,c.TEXTURE_MIN_FILTER,c.NEAREST),c.texParameteri(J,c.TEXTURE_MAG_FILTER,c.NEAREST);for(let Dt=0;Dt<Rt;Dt++)J===c.TEXTURE_3D||J===c.TEXTURE_2D_ARRAY?c.texImage3D(zt,0,c.RGBA,1,1,Ht,0,c.RGBA,c.UNSIGNED_BYTE,bt):c.texImage2D(zt+Dt,0,c.RGBA,1,1,0,c.RGBA,c.UNSIGNED_BYTE,bt);return St}const nt={};nt[c.TEXTURE_2D]=Ft(c.TEXTURE_2D,c.TEXTURE_2D,1),nt[c.TEXTURE_CUBE_MAP]=Ft(c.TEXTURE_CUBE_MAP,c.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[c.TEXTURE_2D_ARRAY]=Ft(c.TEXTURE_2D_ARRAY,c.TEXTURE_2D_ARRAY,1,1),nt[c.TEXTURE_3D]=Ft(c.TEXTURE_3D,c.TEXTURE_3D,1,1),o.setClear(0,0,0,1),u.setClear(1),f.setClear(0),pt(c.DEPTH_TEST),u.setFunc(ho),se(!1),Ze(s_),pt(c.CULL_FACE),ve(Pa);function pt(J){g[J]!==!0&&(c.enable(J),g[J]=!0)}function Nt(J){g[J]!==!1&&(c.disable(J),g[J]=!1)}function Xt(J,zt){return _[J]!==zt?(c.bindFramebuffer(J,zt),_[J]=zt,J===c.DRAW_FRAMEBUFFER&&(_[c.FRAMEBUFFER]=zt),J===c.FRAMEBUFFER&&(_[c.DRAW_FRAMEBUFFER]=zt),!0):!1}function Vt(J,zt){let Rt=y,Ht=!1;if(J){Rt=v.get(zt),Rt===void 0&&(Rt=[],v.set(zt,Rt));const bt=J.textures;if(Rt.length!==bt.length||Rt[0]!==c.COLOR_ATTACHMENT0){for(let St=0,Dt=bt.length;St<Dt;St++)Rt[St]=c.COLOR_ATTACHMENT0+St;Rt.length=bt.length,Ht=!0}}else Rt[0]!==c.BACK&&(Rt[0]=c.BACK,Ht=!0);Ht&&c.drawBuffers(Rt)}function me(J){return M!==J?(c.useProgram(J),M=J,!0):!1}const Xe={[nr]:c.FUNC_ADD,[jb]:c.FUNC_SUBTRACT,[Zb]:c.FUNC_REVERSE_SUBTRACT};Xe[Kb]=c.MIN,Xe[Qb]=c.MAX;const fe={[Jb]:c.ZERO,[$b]:c.ONE,[tT]:c.SRC_COLOR,[Pd]:c.SRC_ALPHA,[rT]:c.SRC_ALPHA_SATURATE,[aT]:c.DST_COLOR,[nT]:c.DST_ALPHA,[eT]:c.ONE_MINUS_SRC_COLOR,[Bd]:c.ONE_MINUS_SRC_ALPHA,[sT]:c.ONE_MINUS_DST_COLOR,[iT]:c.ONE_MINUS_DST_ALPHA,[oT]:c.CONSTANT_COLOR,[lT]:c.ONE_MINUS_CONSTANT_COLOR,[cT]:c.CONSTANT_ALPHA,[uT]:c.ONE_MINUS_CONSTANT_ALPHA};function ve(J,zt,Rt,Ht,bt,St,Dt,oe,He,Ae){if(J===Pa){b===!0&&(Nt(c.BLEND),b=!1);return}if(b===!1&&(pt(c.BLEND),b=!0),J!==Yb){if(J!==S||Ae!==w){if((x!==nr||L!==nr)&&(c.blendEquation(c.FUNC_ADD),x=nr,L=nr),Ae)switch(J){case co:c.blendFuncSeparate(c.ONE,c.ONE_MINUS_SRC_ALPHA,c.ONE,c.ONE_MINUS_SRC_ALPHA);break;case r_:c.blendFunc(c.ONE,c.ONE);break;case o_:c.blendFuncSeparate(c.ZERO,c.ONE_MINUS_SRC_COLOR,c.ZERO,c.ONE);break;case l_:c.blendFuncSeparate(c.DST_COLOR,c.ONE_MINUS_SRC_ALPHA,c.ZERO,c.ONE);break;default:we("WebGLState: Invalid blending: ",J);break}else switch(J){case co:c.blendFuncSeparate(c.SRC_ALPHA,c.ONE_MINUS_SRC_ALPHA,c.ONE,c.ONE_MINUS_SRC_ALPHA);break;case r_:c.blendFuncSeparate(c.SRC_ALPHA,c.ONE,c.ONE,c.ONE);break;case o_:we("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case l_:we("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:we("WebGLState: Invalid blending: ",J);break}T=null,C=null,z=null,B=null,P.set(0,0,0),Y=0,S=J,w=Ae}return}bt=bt||zt,St=St||Rt,Dt=Dt||Ht,(zt!==x||bt!==L)&&(c.blendEquationSeparate(Xe[zt],Xe[bt]),x=zt,L=bt),(Rt!==T||Ht!==C||St!==z||Dt!==B)&&(c.blendFuncSeparate(fe[Rt],fe[Ht],fe[St],fe[Dt]),T=Rt,C=Ht,z=St,B=Dt),(oe.equals(P)===!1||He!==Y)&&(c.blendColor(oe.r,oe.g,oe.b,He),P.copy(oe),Y=He),S=J,w=!1}function Te(J,zt){J.side===Oa?Nt(c.CULL_FACE):pt(c.CULL_FACE);let Rt=J.side===ti;zt&&(Rt=!Rt),se(Rt),J.blending===co&&J.transparent===!1?ve(Pa):ve(J.blending,J.blendEquation,J.blendSrc,J.blendDst,J.blendEquationAlpha,J.blendSrcAlpha,J.blendDstAlpha,J.blendColor,J.blendAlpha,J.premultipliedAlpha),u.setFunc(J.depthFunc),u.setTest(J.depthTest),u.setMask(J.depthWrite),o.setMask(J.colorWrite);const Ht=J.stencilWrite;f.setTest(Ht),Ht&&(f.setMask(J.stencilWriteMask),f.setFunc(J.stencilFunc,J.stencilRef,J.stencilFuncMask),f.setOp(J.stencilFail,J.stencilZFail,J.stencilZPass)),Ke(J.polygonOffset,J.polygonOffsetFactor,J.polygonOffsetUnits),J.alphaToCoverage===!0?pt(c.SAMPLE_ALPHA_TO_COVERAGE):Nt(c.SAMPLE_ALPHA_TO_COVERAGE)}function se(J){O!==J&&(J?c.frontFace(c.CW):c.frontFace(c.CCW),O=J)}function Ze(J){J!==Xb?(pt(c.CULL_FACE),J!==G&&(J===s_?c.cullFace(c.BACK):J===Wb?c.cullFace(c.FRONT):c.cullFace(c.FRONT_AND_BACK))):Nt(c.CULL_FACE),G=J}function W(J){J!==$&&(D&&c.lineWidth(J),$=J)}function Ke(J,zt,Rt){J?(pt(c.POLYGON_OFFSET_FILL),(V!==zt||j!==Rt)&&(c.polygonOffset(zt,Rt),V=zt,j=Rt)):Nt(c.POLYGON_OFFSET_FILL)}function _e(J){J?pt(c.SCISSOR_TEST):Nt(c.SCISSOR_TEST)}function Ce(J){J===void 0&&(J=c.TEXTURE0+X-1),ft!==J&&(c.activeTexture(J),ft=J)}function Zt(J,zt,Rt){Rt===void 0&&(ft===null?Rt=c.TEXTURE0+X-1:Rt=ft);let Ht=mt[Rt];Ht===void 0&&(Ht={type:void 0,texture:void 0},mt[Rt]=Ht),(Ht.type!==J||Ht.texture!==zt)&&(ft!==Rt&&(c.activeTexture(Rt),ft=Rt),c.bindTexture(J,zt||nt[J]),Ht.type=J,Ht.texture=zt)}function I(){const J=mt[ft];J!==void 0&&J.type!==void 0&&(c.bindTexture(J.type,null),J.type=void 0,J.texture=void 0)}function A(){try{c.compressedTexImage2D(...arguments)}catch(J){we("WebGLState:",J)}}function q(){try{c.compressedTexImage3D(...arguments)}catch(J){we("WebGLState:",J)}}function st(){try{c.texSubImage2D(...arguments)}catch(J){we("WebGLState:",J)}}function gt(){try{c.texSubImage3D(...arguments)}catch(J){we("WebGLState:",J)}}function at(){try{c.compressedTexSubImage2D(...arguments)}catch(J){we("WebGLState:",J)}}function wt(){try{c.compressedTexSubImage3D(...arguments)}catch(J){we("WebGLState:",J)}}function Et(){try{c.texStorage2D(...arguments)}catch(J){we("WebGLState:",J)}}function Pt(){try{c.texStorage3D(...arguments)}catch(J){we("WebGLState:",J)}}function te(){try{c.texImage2D(...arguments)}catch(J){we("WebGLState:",J)}}function Mt(){try{c.texImage3D(...arguments)}catch(J){we("WebGLState:",J)}}function At(J){_t.equals(J)===!1&&(c.scissor(J.x,J.y,J.z,J.w),_t.copy(J))}function Ut(J){Tt.equals(J)===!1&&(c.viewport(J.x,J.y,J.z,J.w),Tt.copy(J))}function Lt(J,zt){let Rt=h.get(zt);Rt===void 0&&(Rt=new WeakMap,h.set(zt,Rt));let Ht=Rt.get(J);Ht===void 0&&(Ht=c.getUniformBlockIndex(zt,J.name),Rt.set(J,Ht))}function Ct(J,zt){const Ht=h.get(zt).get(J);p.get(zt)!==Ht&&(c.uniformBlockBinding(zt,Ht,J.__bindingPointIndex),p.set(zt,Ht))}function re(){c.disable(c.BLEND),c.disable(c.CULL_FACE),c.disable(c.DEPTH_TEST),c.disable(c.POLYGON_OFFSET_FILL),c.disable(c.SCISSOR_TEST),c.disable(c.STENCIL_TEST),c.disable(c.SAMPLE_ALPHA_TO_COVERAGE),c.blendEquation(c.FUNC_ADD),c.blendFunc(c.ONE,c.ZERO),c.blendFuncSeparate(c.ONE,c.ZERO,c.ONE,c.ZERO),c.blendColor(0,0,0,0),c.colorMask(!0,!0,!0,!0),c.clearColor(0,0,0,0),c.depthMask(!0),c.depthFunc(c.LESS),u.setReversed(!1),c.clearDepth(1),c.stencilMask(4294967295),c.stencilFunc(c.ALWAYS,0,4294967295),c.stencilOp(c.KEEP,c.KEEP,c.KEEP),c.clearStencil(0),c.cullFace(c.BACK),c.frontFace(c.CCW),c.polygonOffset(0,0),c.activeTexture(c.TEXTURE0),c.bindFramebuffer(c.FRAMEBUFFER,null),c.bindFramebuffer(c.DRAW_FRAMEBUFFER,null),c.bindFramebuffer(c.READ_FRAMEBUFFER,null),c.useProgram(null),c.lineWidth(1),c.scissor(0,0,c.canvas.width,c.canvas.height),c.viewport(0,0,c.canvas.width,c.canvas.height),g={},ft=null,mt={},_={},v=new WeakMap,y=[],M=null,b=!1,S=null,x=null,T=null,C=null,L=null,z=null,B=null,P=new Ue(0,0,0),Y=0,w=!1,O=null,G=null,$=null,V=null,j=null,_t.set(0,0,c.canvas.width,c.canvas.height),Tt.set(0,0,c.canvas.width,c.canvas.height),o.reset(),u.reset(),f.reset()}return{buffers:{color:o,depth:u,stencil:f},enable:pt,disable:Nt,bindFramebuffer:Xt,drawBuffers:Vt,useProgram:me,setBlending:ve,setMaterial:Te,setFlipSided:se,setCullFace:Ze,setLineWidth:W,setPolygonOffset:Ke,setScissorTest:_e,activeTexture:Ce,bindTexture:Zt,unbindTexture:I,compressedTexImage2D:A,compressedTexImage3D:q,texImage2D:te,texImage3D:Mt,updateUBOMapping:Lt,uniformBlockBinding:Ct,texStorage2D:Et,texStorage3D:Pt,texSubImage2D:st,texSubImage3D:gt,compressedTexSubImage2D:at,compressedTexSubImage3D:wt,scissor:At,viewport:Ut,reset:re}}function jC(c,t,n,a,r,o,u){const f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Le,g=new WeakMap;let _;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(I,A){return y?new OffscreenCanvas(I,A):zu("canvas")}function b(I,A,q){let st=1;const gt=Zt(I);if((gt.width>q||gt.height>q)&&(st=q/Math.max(gt.width,gt.height)),st<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const at=Math.floor(st*gt.width),wt=Math.floor(st*gt.height);_===void 0&&(_=M(at,wt));const Et=A?M(at,wt):_;return Et.width=at,Et.height=wt,Et.getContext("2d").drawImage(I,0,0,at,wt),ue("WebGLRenderer: Texture has been resized from ("+gt.width+"x"+gt.height+") to ("+at+"x"+wt+")."),Et}else return"data"in I&&ue("WebGLRenderer: Image in DataTexture is too big ("+gt.width+"x"+gt.height+")."),I;return I}function S(I){return I.generateMipmaps}function x(I){c.generateMipmap(I)}function T(I){return I.isWebGLCubeRenderTarget?c.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?c.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?c.TEXTURE_2D_ARRAY:c.TEXTURE_2D}function C(I,A,q,st,gt=!1){if(I!==null){if(c[I]!==void 0)return c[I];ue("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let at=A;if(A===c.RED&&(q===c.FLOAT&&(at=c.R32F),q===c.HALF_FLOAT&&(at=c.R16F),q===c.UNSIGNED_BYTE&&(at=c.R8)),A===c.RED_INTEGER&&(q===c.UNSIGNED_BYTE&&(at=c.R8UI),q===c.UNSIGNED_SHORT&&(at=c.R16UI),q===c.UNSIGNED_INT&&(at=c.R32UI),q===c.BYTE&&(at=c.R8I),q===c.SHORT&&(at=c.R16I),q===c.INT&&(at=c.R32I)),A===c.RG&&(q===c.FLOAT&&(at=c.RG32F),q===c.HALF_FLOAT&&(at=c.RG16F),q===c.UNSIGNED_BYTE&&(at=c.RG8)),A===c.RG_INTEGER&&(q===c.UNSIGNED_BYTE&&(at=c.RG8UI),q===c.UNSIGNED_SHORT&&(at=c.RG16UI),q===c.UNSIGNED_INT&&(at=c.RG32UI),q===c.BYTE&&(at=c.RG8I),q===c.SHORT&&(at=c.RG16I),q===c.INT&&(at=c.RG32I)),A===c.RGB_INTEGER&&(q===c.UNSIGNED_BYTE&&(at=c.RGB8UI),q===c.UNSIGNED_SHORT&&(at=c.RGB16UI),q===c.UNSIGNED_INT&&(at=c.RGB32UI),q===c.BYTE&&(at=c.RGB8I),q===c.SHORT&&(at=c.RGB16I),q===c.INT&&(at=c.RGB32I)),A===c.RGBA_INTEGER&&(q===c.UNSIGNED_BYTE&&(at=c.RGBA8UI),q===c.UNSIGNED_SHORT&&(at=c.RGBA16UI),q===c.UNSIGNED_INT&&(at=c.RGBA32UI),q===c.BYTE&&(at=c.RGBA8I),q===c.SHORT&&(at=c.RGBA16I),q===c.INT&&(at=c.RGBA32I)),A===c.RGB&&(q===c.UNSIGNED_INT_5_9_9_9_REV&&(at=c.RGB9_E5),q===c.UNSIGNED_INT_10F_11F_11F_REV&&(at=c.R11F_G11F_B10F)),A===c.RGBA){const wt=gt?Lu:Re.getTransfer(st);q===c.FLOAT&&(at=c.RGBA32F),q===c.HALF_FLOAT&&(at=c.RGBA16F),q===c.UNSIGNED_BYTE&&(at=wt===qe?c.SRGB8_ALPHA8:c.RGBA8),q===c.UNSIGNED_SHORT_4_4_4_4&&(at=c.RGBA4),q===c.UNSIGNED_SHORT_5_5_5_1&&(at=c.RGB5_A1)}return(at===c.R16F||at===c.R32F||at===c.RG16F||at===c.RG32F||at===c.RGBA16F||at===c.RGBA32F)&&t.get("EXT_color_buffer_float"),at}function L(I,A){let q;return I?A===null||A===ia||A===Ul?q=c.DEPTH24_STENCIL8:A===Ji?q=c.DEPTH32F_STENCIL8:A===Nl&&(q=c.DEPTH24_STENCIL8,ue("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===ia||A===Ul?q=c.DEPTH_COMPONENT24:A===Ji?q=c.DEPTH_COMPONENT32F:A===Nl&&(q=c.DEPTH_COMPONENT16),q}function z(I,A){return S(I)===!0||I.isFramebufferTexture&&I.minFilter!==On&&I.minFilter!==zn?Math.log2(Math.max(A.width,A.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?A.mipmaps.length:1}function B(I){const A=I.target;A.removeEventListener("dispose",B),Y(A),A.isVideoTexture&&g.delete(A)}function P(I){const A=I.target;A.removeEventListener("dispose",P),O(A)}function Y(I){const A=a.get(I);if(A.__webglInit===void 0)return;const q=I.source,st=v.get(q);if(st){const gt=st[A.__cacheKey];gt.usedTimes--,gt.usedTimes===0&&w(I),Object.keys(st).length===0&&v.delete(q)}a.remove(I)}function w(I){const A=a.get(I);c.deleteTexture(A.__webglTexture);const q=I.source,st=v.get(q);delete st[A.__cacheKey],u.memory.textures--}function O(I){const A=a.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),a.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(A.__webglFramebuffer[st]))for(let gt=0;gt<A.__webglFramebuffer[st].length;gt++)c.deleteFramebuffer(A.__webglFramebuffer[st][gt]);else c.deleteFramebuffer(A.__webglFramebuffer[st]);A.__webglDepthbuffer&&c.deleteRenderbuffer(A.__webglDepthbuffer[st])}else{if(Array.isArray(A.__webglFramebuffer))for(let st=0;st<A.__webglFramebuffer.length;st++)c.deleteFramebuffer(A.__webglFramebuffer[st]);else c.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&c.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&c.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let st=0;st<A.__webglColorRenderbuffer.length;st++)A.__webglColorRenderbuffer[st]&&c.deleteRenderbuffer(A.__webglColorRenderbuffer[st]);A.__webglDepthRenderbuffer&&c.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const q=I.textures;for(let st=0,gt=q.length;st<gt;st++){const at=a.get(q[st]);at.__webglTexture&&(c.deleteTexture(at.__webglTexture),u.memory.textures--),a.remove(q[st])}a.remove(I)}let G=0;function $(){G=0}function V(){const I=G;return I>=r.maxTextures&&ue("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+r.maxTextures),G+=1,I}function j(I){const A=[];return A.push(I.wrapS),A.push(I.wrapT),A.push(I.wrapR||0),A.push(I.magFilter),A.push(I.minFilter),A.push(I.anisotropy),A.push(I.internalFormat),A.push(I.format),A.push(I.type),A.push(I.generateMipmaps),A.push(I.premultiplyAlpha),A.push(I.flipY),A.push(I.unpackAlignment),A.push(I.colorSpace),A.join()}function X(I,A){const q=a.get(I);if(I.isVideoTexture&&_e(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&q.__version!==I.version){const st=I.image;if(st===null)ue("WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)ue("WebGLRenderer: Texture marked for update but image is incomplete");else{nt(q,I,A);return}}else I.isExternalTexture&&(q.__webglTexture=I.sourceTexture?I.sourceTexture:null);n.bindTexture(c.TEXTURE_2D,q.__webglTexture,c.TEXTURE0+A)}function D(I,A){const q=a.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&q.__version!==I.version){nt(q,I,A);return}else I.isExternalTexture&&(q.__webglTexture=I.sourceTexture?I.sourceTexture:null);n.bindTexture(c.TEXTURE_2D_ARRAY,q.__webglTexture,c.TEXTURE0+A)}function H(I,A){const q=a.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&q.__version!==I.version){nt(q,I,A);return}n.bindTexture(c.TEXTURE_3D,q.__webglTexture,c.TEXTURE0+A)}function Q(I,A){const q=a.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&q.__version!==I.version){pt(q,I,A);return}n.bindTexture(c.TEXTURE_CUBE_MAP,q.__webglTexture,c.TEXTURE0+A)}const ft={[Yd]:c.REPEAT,[za]:c.CLAMP_TO_EDGE,[jd]:c.MIRRORED_REPEAT},mt={[On]:c.NEAREST,[dT]:c.NEAREST_MIPMAP_NEAREST,[iu]:c.NEAREST_MIPMAP_LINEAR,[zn]:c.LINEAR,[nd]:c.LINEAR_MIPMAP_NEAREST,[Es]:c.LINEAR_MIPMAP_LINEAR},F={[gT]:c.NEVER,[ST]:c.ALWAYS,[vT]:c.LESS,[Vp]:c.LEQUAL,[_T]:c.EQUAL,[kp]:c.GEQUAL,[xT]:c.GREATER,[yT]:c.NOTEQUAL};function Z(I,A){if(A.type===Ji&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===zn||A.magFilter===nd||A.magFilter===iu||A.magFilter===Es||A.minFilter===zn||A.minFilter===nd||A.minFilter===iu||A.minFilter===Es)&&ue("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),c.texParameteri(I,c.TEXTURE_WRAP_S,ft[A.wrapS]),c.texParameteri(I,c.TEXTURE_WRAP_T,ft[A.wrapT]),(I===c.TEXTURE_3D||I===c.TEXTURE_2D_ARRAY)&&c.texParameteri(I,c.TEXTURE_WRAP_R,ft[A.wrapR]),c.texParameteri(I,c.TEXTURE_MAG_FILTER,mt[A.magFilter]),c.texParameteri(I,c.TEXTURE_MIN_FILTER,mt[A.minFilter]),A.compareFunction&&(c.texParameteri(I,c.TEXTURE_COMPARE_MODE,c.COMPARE_REF_TO_TEXTURE),c.texParameteri(I,c.TEXTURE_COMPARE_FUNC,F[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===On||A.minFilter!==iu&&A.minFilter!==Es||A.type===Ji&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||a.get(A).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");c.texParameterf(I,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),a.get(A).__currentAnisotropy=A.anisotropy}}}function _t(I,A){let q=!1;I.__webglInit===void 0&&(I.__webglInit=!0,A.addEventListener("dispose",B));const st=A.source;let gt=v.get(st);gt===void 0&&(gt={},v.set(st,gt));const at=j(A);if(at!==I.__cacheKey){gt[at]===void 0&&(gt[at]={texture:c.createTexture(),usedTimes:0},u.memory.textures++,q=!0),gt[at].usedTimes++;const wt=gt[I.__cacheKey];wt!==void 0&&(gt[I.__cacheKey].usedTimes--,wt.usedTimes===0&&w(A)),I.__cacheKey=at,I.__webglTexture=gt[at].texture}return q}function Tt(I,A,q){return Math.floor(Math.floor(I/q)/A)}function Ft(I,A,q,st){const at=I.updateRanges;if(at.length===0)n.texSubImage2D(c.TEXTURE_2D,0,0,0,A.width,A.height,q,st,A.data);else{at.sort((Mt,At)=>Mt.start-At.start);let wt=0;for(let Mt=1;Mt<at.length;Mt++){const At=at[wt],Ut=at[Mt],Lt=At.start+At.count,Ct=Tt(Ut.start,A.width,4),re=Tt(At.start,A.width,4);Ut.start<=Lt+1&&Ct===re&&Tt(Ut.start+Ut.count-1,A.width,4)===Ct?At.count=Math.max(At.count,Ut.start+Ut.count-At.start):(++wt,at[wt]=Ut)}at.length=wt+1;const Et=c.getParameter(c.UNPACK_ROW_LENGTH),Pt=c.getParameter(c.UNPACK_SKIP_PIXELS),te=c.getParameter(c.UNPACK_SKIP_ROWS);c.pixelStorei(c.UNPACK_ROW_LENGTH,A.width);for(let Mt=0,At=at.length;Mt<At;Mt++){const Ut=at[Mt],Lt=Math.floor(Ut.start/4),Ct=Math.ceil(Ut.count/4),re=Lt%A.width,J=Math.floor(Lt/A.width),zt=Ct,Rt=1;c.pixelStorei(c.UNPACK_SKIP_PIXELS,re),c.pixelStorei(c.UNPACK_SKIP_ROWS,J),n.texSubImage2D(c.TEXTURE_2D,0,re,J,zt,Rt,q,st,A.data)}I.clearUpdateRanges(),c.pixelStorei(c.UNPACK_ROW_LENGTH,Et),c.pixelStorei(c.UNPACK_SKIP_PIXELS,Pt),c.pixelStorei(c.UNPACK_SKIP_ROWS,te)}}function nt(I,A,q){let st=c.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(st=c.TEXTURE_2D_ARRAY),A.isData3DTexture&&(st=c.TEXTURE_3D);const gt=_t(I,A),at=A.source;n.bindTexture(st,I.__webglTexture,c.TEXTURE0+q);const wt=a.get(at);if(at.version!==wt.__version||gt===!0){n.activeTexture(c.TEXTURE0+q);const Et=Re.getPrimaries(Re.workingColorSpace),Pt=A.colorSpace===Ms?null:Re.getPrimaries(A.colorSpace),te=A.colorSpace===Ms||Et===Pt?c.NONE:c.BROWSER_DEFAULT_WEBGL;c.pixelStorei(c.UNPACK_FLIP_Y_WEBGL,A.flipY),c.pixelStorei(c.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),c.pixelStorei(c.UNPACK_ALIGNMENT,A.unpackAlignment),c.pixelStorei(c.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let Mt=b(A.image,!1,r.maxTextureSize);Mt=Ce(A,Mt);const At=o.convert(A.format,A.colorSpace),Ut=o.convert(A.type);let Lt=C(A.internalFormat,At,Ut,A.colorSpace,A.isVideoTexture);Z(st,A);let Ct;const re=A.mipmaps,J=A.isVideoTexture!==!0,zt=wt.__version===void 0||gt===!0,Rt=at.dataReady,Ht=z(A,Mt);if(A.isDepthTexture)Lt=L(A.format===sr,A.type),zt&&(J?n.texStorage2D(c.TEXTURE_2D,1,Lt,Mt.width,Mt.height):n.texImage2D(c.TEXTURE_2D,0,Lt,Mt.width,Mt.height,0,At,Ut,null));else if(A.isDataTexture)if(re.length>0){J&&zt&&n.texStorage2D(c.TEXTURE_2D,Ht,Lt,re[0].width,re[0].height);for(let bt=0,St=re.length;bt<St;bt++)Ct=re[bt],J?Rt&&n.texSubImage2D(c.TEXTURE_2D,bt,0,0,Ct.width,Ct.height,At,Ut,Ct.data):n.texImage2D(c.TEXTURE_2D,bt,Lt,Ct.width,Ct.height,0,At,Ut,Ct.data);A.generateMipmaps=!1}else J?(zt&&n.texStorage2D(c.TEXTURE_2D,Ht,Lt,Mt.width,Mt.height),Rt&&Ft(A,Mt,At,Ut)):n.texImage2D(c.TEXTURE_2D,0,Lt,Mt.width,Mt.height,0,At,Ut,Mt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){J&&zt&&n.texStorage3D(c.TEXTURE_2D_ARRAY,Ht,Lt,re[0].width,re[0].height,Mt.depth);for(let bt=0,St=re.length;bt<St;bt++)if(Ct=re[bt],A.format!==Fi)if(At!==null)if(J){if(Rt)if(A.layerUpdates.size>0){const Dt=P_(Ct.width,Ct.height,A.format,A.type);for(const oe of A.layerUpdates){const He=Ct.data.subarray(oe*Dt/Ct.data.BYTES_PER_ELEMENT,(oe+1)*Dt/Ct.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(c.TEXTURE_2D_ARRAY,bt,0,0,oe,Ct.width,Ct.height,1,At,He)}A.clearLayerUpdates()}else n.compressedTexSubImage3D(c.TEXTURE_2D_ARRAY,bt,0,0,0,Ct.width,Ct.height,Mt.depth,At,Ct.data)}else n.compressedTexImage3D(c.TEXTURE_2D_ARRAY,bt,Lt,Ct.width,Ct.height,Mt.depth,0,Ct.data,0,0);else ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else J?Rt&&n.texSubImage3D(c.TEXTURE_2D_ARRAY,bt,0,0,0,Ct.width,Ct.height,Mt.depth,At,Ut,Ct.data):n.texImage3D(c.TEXTURE_2D_ARRAY,bt,Lt,Ct.width,Ct.height,Mt.depth,0,At,Ut,Ct.data)}else{J&&zt&&n.texStorage2D(c.TEXTURE_2D,Ht,Lt,re[0].width,re[0].height);for(let bt=0,St=re.length;bt<St;bt++)Ct=re[bt],A.format!==Fi?At!==null?J?Rt&&n.compressedTexSubImage2D(c.TEXTURE_2D,bt,0,0,Ct.width,Ct.height,At,Ct.data):n.compressedTexImage2D(c.TEXTURE_2D,bt,Lt,Ct.width,Ct.height,0,Ct.data):ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):J?Rt&&n.texSubImage2D(c.TEXTURE_2D,bt,0,0,Ct.width,Ct.height,At,Ut,Ct.data):n.texImage2D(c.TEXTURE_2D,bt,Lt,Ct.width,Ct.height,0,At,Ut,Ct.data)}else if(A.isDataArrayTexture)if(J){if(zt&&n.texStorage3D(c.TEXTURE_2D_ARRAY,Ht,Lt,Mt.width,Mt.height,Mt.depth),Rt)if(A.layerUpdates.size>0){const bt=P_(Mt.width,Mt.height,A.format,A.type);for(const St of A.layerUpdates){const Dt=Mt.data.subarray(St*bt/Mt.data.BYTES_PER_ELEMENT,(St+1)*bt/Mt.data.BYTES_PER_ELEMENT);n.texSubImage3D(c.TEXTURE_2D_ARRAY,0,0,0,St,Mt.width,Mt.height,1,At,Ut,Dt)}A.clearLayerUpdates()}else n.texSubImage3D(c.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,At,Ut,Mt.data)}else n.texImage3D(c.TEXTURE_2D_ARRAY,0,Lt,Mt.width,Mt.height,Mt.depth,0,At,Ut,Mt.data);else if(A.isData3DTexture)J?(zt&&n.texStorage3D(c.TEXTURE_3D,Ht,Lt,Mt.width,Mt.height,Mt.depth),Rt&&n.texSubImage3D(c.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,At,Ut,Mt.data)):n.texImage3D(c.TEXTURE_3D,0,Lt,Mt.width,Mt.height,Mt.depth,0,At,Ut,Mt.data);else if(A.isFramebufferTexture){if(zt)if(J)n.texStorage2D(c.TEXTURE_2D,Ht,Lt,Mt.width,Mt.height);else{let bt=Mt.width,St=Mt.height;for(let Dt=0;Dt<Ht;Dt++)n.texImage2D(c.TEXTURE_2D,Dt,Lt,bt,St,0,At,Ut,null),bt>>=1,St>>=1}}else if(re.length>0){if(J&&zt){const bt=Zt(re[0]);n.texStorage2D(c.TEXTURE_2D,Ht,Lt,bt.width,bt.height)}for(let bt=0,St=re.length;bt<St;bt++)Ct=re[bt],J?Rt&&n.texSubImage2D(c.TEXTURE_2D,bt,0,0,At,Ut,Ct):n.texImage2D(c.TEXTURE_2D,bt,Lt,At,Ut,Ct);A.generateMipmaps=!1}else if(J){if(zt){const bt=Zt(Mt);n.texStorage2D(c.TEXTURE_2D,Ht,Lt,bt.width,bt.height)}Rt&&n.texSubImage2D(c.TEXTURE_2D,0,0,0,At,Ut,Mt)}else n.texImage2D(c.TEXTURE_2D,0,Lt,At,Ut,Mt);S(A)&&x(st),wt.__version=at.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function pt(I,A,q){if(A.image.length!==6)return;const st=_t(I,A),gt=A.source;n.bindTexture(c.TEXTURE_CUBE_MAP,I.__webglTexture,c.TEXTURE0+q);const at=a.get(gt);if(gt.version!==at.__version||st===!0){n.activeTexture(c.TEXTURE0+q);const wt=Re.getPrimaries(Re.workingColorSpace),Et=A.colorSpace===Ms?null:Re.getPrimaries(A.colorSpace),Pt=A.colorSpace===Ms||wt===Et?c.NONE:c.BROWSER_DEFAULT_WEBGL;c.pixelStorei(c.UNPACK_FLIP_Y_WEBGL,A.flipY),c.pixelStorei(c.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),c.pixelStorei(c.UNPACK_ALIGNMENT,A.unpackAlignment),c.pixelStorei(c.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);const te=A.isCompressedTexture||A.image[0].isCompressedTexture,Mt=A.image[0]&&A.image[0].isDataTexture,At=[];for(let St=0;St<6;St++)!te&&!Mt?At[St]=b(A.image[St],!0,r.maxCubemapSize):At[St]=Mt?A.image[St].image:A.image[St],At[St]=Ce(A,At[St]);const Ut=At[0],Lt=o.convert(A.format,A.colorSpace),Ct=o.convert(A.type),re=C(A.internalFormat,Lt,Ct,A.colorSpace),J=A.isVideoTexture!==!0,zt=at.__version===void 0||st===!0,Rt=gt.dataReady;let Ht=z(A,Ut);Z(c.TEXTURE_CUBE_MAP,A);let bt;if(te){J&&zt&&n.texStorage2D(c.TEXTURE_CUBE_MAP,Ht,re,Ut.width,Ut.height);for(let St=0;St<6;St++){bt=At[St].mipmaps;for(let Dt=0;Dt<bt.length;Dt++){const oe=bt[Dt];A.format!==Fi?Lt!==null?J?Rt&&n.compressedTexSubImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+St,Dt,0,0,oe.width,oe.height,Lt,oe.data):n.compressedTexImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+St,Dt,re,oe.width,oe.height,0,oe.data):ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):J?Rt&&n.texSubImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+St,Dt,0,0,oe.width,oe.height,Lt,Ct,oe.data):n.texImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+St,Dt,re,oe.width,oe.height,0,Lt,Ct,oe.data)}}}else{if(bt=A.mipmaps,J&&zt){bt.length>0&&Ht++;const St=Zt(At[0]);n.texStorage2D(c.TEXTURE_CUBE_MAP,Ht,re,St.width,St.height)}for(let St=0;St<6;St++)if(Mt){J?Rt&&n.texSubImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,At[St].width,At[St].height,Lt,Ct,At[St].data):n.texImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,re,At[St].width,At[St].height,0,Lt,Ct,At[St].data);for(let Dt=0;Dt<bt.length;Dt++){const He=bt[Dt].image[St].image;J?Rt&&n.texSubImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+St,Dt+1,0,0,He.width,He.height,Lt,Ct,He.data):n.texImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+St,Dt+1,re,He.width,He.height,0,Lt,Ct,He.data)}}else{J?Rt&&n.texSubImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,Lt,Ct,At[St]):n.texImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,re,Lt,Ct,At[St]);for(let Dt=0;Dt<bt.length;Dt++){const oe=bt[Dt];J?Rt&&n.texSubImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+St,Dt+1,0,0,Lt,Ct,oe.image[St]):n.texImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+St,Dt+1,re,Lt,Ct,oe.image[St])}}}S(A)&&x(c.TEXTURE_CUBE_MAP),at.__version=gt.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function Nt(I,A,q,st,gt,at){const wt=o.convert(q.format,q.colorSpace),Et=o.convert(q.type),Pt=C(q.internalFormat,wt,Et,q.colorSpace),te=a.get(A),Mt=a.get(q);if(Mt.__renderTarget=A,!te.__hasExternalTextures){const At=Math.max(1,A.width>>at),Ut=Math.max(1,A.height>>at);gt===c.TEXTURE_3D||gt===c.TEXTURE_2D_ARRAY?n.texImage3D(gt,at,Pt,At,Ut,A.depth,0,wt,Et,null):n.texImage2D(gt,at,Pt,At,Ut,0,wt,Et,null)}n.bindFramebuffer(c.FRAMEBUFFER,I),Ke(A)?f.framebufferTexture2DMultisampleEXT(c.FRAMEBUFFER,st,gt,Mt.__webglTexture,0,W(A)):(gt===c.TEXTURE_2D||gt>=c.TEXTURE_CUBE_MAP_POSITIVE_X&&gt<=c.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&c.framebufferTexture2D(c.FRAMEBUFFER,st,gt,Mt.__webglTexture,at),n.bindFramebuffer(c.FRAMEBUFFER,null)}function Xt(I,A,q){if(c.bindRenderbuffer(c.RENDERBUFFER,I),A.depthBuffer){const st=A.depthTexture,gt=st&&st.isDepthTexture?st.type:null,at=L(A.stencilBuffer,gt),wt=A.stencilBuffer?c.DEPTH_STENCIL_ATTACHMENT:c.DEPTH_ATTACHMENT;Ke(A)?f.renderbufferStorageMultisampleEXT(c.RENDERBUFFER,W(A),at,A.width,A.height):q?c.renderbufferStorageMultisample(c.RENDERBUFFER,W(A),at,A.width,A.height):c.renderbufferStorage(c.RENDERBUFFER,at,A.width,A.height),c.framebufferRenderbuffer(c.FRAMEBUFFER,wt,c.RENDERBUFFER,I)}else{const st=A.textures;for(let gt=0;gt<st.length;gt++){const at=st[gt],wt=o.convert(at.format,at.colorSpace),Et=o.convert(at.type),Pt=C(at.internalFormat,wt,Et,at.colorSpace);Ke(A)?f.renderbufferStorageMultisampleEXT(c.RENDERBUFFER,W(A),Pt,A.width,A.height):q?c.renderbufferStorageMultisample(c.RENDERBUFFER,W(A),Pt,A.width,A.height):c.renderbufferStorage(c.RENDERBUFFER,Pt,A.width,A.height)}}c.bindRenderbuffer(c.RENDERBUFFER,null)}function Vt(I,A,q){const st=A.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(c.FRAMEBUFFER,I),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const gt=a.get(A.depthTexture);if(gt.__renderTarget=A,(!gt.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),st){if(gt.__webglInit===void 0&&(gt.__webglInit=!0,A.depthTexture.addEventListener("dispose",B)),gt.__webglTexture===void 0){gt.__webglTexture=c.createTexture(),n.bindTexture(c.TEXTURE_CUBE_MAP,gt.__webglTexture),Z(c.TEXTURE_CUBE_MAP,A.depthTexture);const te=o.convert(A.depthTexture.format),Mt=o.convert(A.depthTexture.type);let At;A.depthTexture.format===Ha?At=c.DEPTH_COMPONENT24:A.depthTexture.format===sr&&(At=c.DEPTH24_STENCIL8);for(let Ut=0;Ut<6;Ut++)c.texImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0,At,A.width,A.height,0,te,Mt,null)}}else X(A.depthTexture,0);const at=gt.__webglTexture,wt=W(A),Et=st?c.TEXTURE_CUBE_MAP_POSITIVE_X+q:c.TEXTURE_2D,Pt=A.depthTexture.format===sr?c.DEPTH_STENCIL_ATTACHMENT:c.DEPTH_ATTACHMENT;if(A.depthTexture.format===Ha)Ke(A)?f.framebufferTexture2DMultisampleEXT(c.FRAMEBUFFER,Pt,Et,at,0,wt):c.framebufferTexture2D(c.FRAMEBUFFER,Pt,Et,at,0);else if(A.depthTexture.format===sr)Ke(A)?f.framebufferTexture2DMultisampleEXT(c.FRAMEBUFFER,Pt,Et,at,0,wt):c.framebufferTexture2D(c.FRAMEBUFFER,Pt,Et,at,0);else throw new Error("Unknown depthTexture format")}function me(I){const A=a.get(I),q=I.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==I.depthTexture){const st=I.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),st){const gt=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,st.removeEventListener("dispose",gt)};st.addEventListener("dispose",gt),A.__depthDisposeCallback=gt}A.__boundDepthTexture=st}if(I.depthTexture&&!A.__autoAllocateDepthBuffer)if(q)for(let st=0;st<6;st++)Vt(A.__webglFramebuffer[st],I,st);else{const st=I.texture.mipmaps;st&&st.length>0?Vt(A.__webglFramebuffer[0],I,0):Vt(A.__webglFramebuffer,I,0)}else if(q){A.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(n.bindFramebuffer(c.FRAMEBUFFER,A.__webglFramebuffer[st]),A.__webglDepthbuffer[st]===void 0)A.__webglDepthbuffer[st]=c.createRenderbuffer(),Xt(A.__webglDepthbuffer[st],I,!1);else{const gt=I.stencilBuffer?c.DEPTH_STENCIL_ATTACHMENT:c.DEPTH_ATTACHMENT,at=A.__webglDepthbuffer[st];c.bindRenderbuffer(c.RENDERBUFFER,at),c.framebufferRenderbuffer(c.FRAMEBUFFER,gt,c.RENDERBUFFER,at)}}else{const st=I.texture.mipmaps;if(st&&st.length>0?n.bindFramebuffer(c.FRAMEBUFFER,A.__webglFramebuffer[0]):n.bindFramebuffer(c.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=c.createRenderbuffer(),Xt(A.__webglDepthbuffer,I,!1);else{const gt=I.stencilBuffer?c.DEPTH_STENCIL_ATTACHMENT:c.DEPTH_ATTACHMENT,at=A.__webglDepthbuffer;c.bindRenderbuffer(c.RENDERBUFFER,at),c.framebufferRenderbuffer(c.FRAMEBUFFER,gt,c.RENDERBUFFER,at)}}n.bindFramebuffer(c.FRAMEBUFFER,null)}function Xe(I,A,q){const st=a.get(I);A!==void 0&&Nt(st.__webglFramebuffer,I,I.texture,c.COLOR_ATTACHMENT0,c.TEXTURE_2D,0),q!==void 0&&me(I)}function fe(I){const A=I.texture,q=a.get(I),st=a.get(A);I.addEventListener("dispose",P);const gt=I.textures,at=I.isWebGLCubeRenderTarget===!0,wt=gt.length>1;if(wt||(st.__webglTexture===void 0&&(st.__webglTexture=c.createTexture()),st.__version=A.version,u.memory.textures++),at){q.__webglFramebuffer=[];for(let Et=0;Et<6;Et++)if(A.mipmaps&&A.mipmaps.length>0){q.__webglFramebuffer[Et]=[];for(let Pt=0;Pt<A.mipmaps.length;Pt++)q.__webglFramebuffer[Et][Pt]=c.createFramebuffer()}else q.__webglFramebuffer[Et]=c.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){q.__webglFramebuffer=[];for(let Et=0;Et<A.mipmaps.length;Et++)q.__webglFramebuffer[Et]=c.createFramebuffer()}else q.__webglFramebuffer=c.createFramebuffer();if(wt)for(let Et=0,Pt=gt.length;Et<Pt;Et++){const te=a.get(gt[Et]);te.__webglTexture===void 0&&(te.__webglTexture=c.createTexture(),u.memory.textures++)}if(I.samples>0&&Ke(I)===!1){q.__webglMultisampledFramebuffer=c.createFramebuffer(),q.__webglColorRenderbuffer=[],n.bindFramebuffer(c.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Et=0;Et<gt.length;Et++){const Pt=gt[Et];q.__webglColorRenderbuffer[Et]=c.createRenderbuffer(),c.bindRenderbuffer(c.RENDERBUFFER,q.__webglColorRenderbuffer[Et]);const te=o.convert(Pt.format,Pt.colorSpace),Mt=o.convert(Pt.type),At=C(Pt.internalFormat,te,Mt,Pt.colorSpace,I.isXRRenderTarget===!0),Ut=W(I);c.renderbufferStorageMultisample(c.RENDERBUFFER,Ut,At,I.width,I.height),c.framebufferRenderbuffer(c.FRAMEBUFFER,c.COLOR_ATTACHMENT0+Et,c.RENDERBUFFER,q.__webglColorRenderbuffer[Et])}c.bindRenderbuffer(c.RENDERBUFFER,null),I.depthBuffer&&(q.__webglDepthRenderbuffer=c.createRenderbuffer(),Xt(q.__webglDepthRenderbuffer,I,!0)),n.bindFramebuffer(c.FRAMEBUFFER,null)}}if(at){n.bindTexture(c.TEXTURE_CUBE_MAP,st.__webglTexture),Z(c.TEXTURE_CUBE_MAP,A);for(let Et=0;Et<6;Et++)if(A.mipmaps&&A.mipmaps.length>0)for(let Pt=0;Pt<A.mipmaps.length;Pt++)Nt(q.__webglFramebuffer[Et][Pt],I,A,c.COLOR_ATTACHMENT0,c.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Pt);else Nt(q.__webglFramebuffer[Et],I,A,c.COLOR_ATTACHMENT0,c.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0);S(A)&&x(c.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(wt){for(let Et=0,Pt=gt.length;Et<Pt;Et++){const te=gt[Et],Mt=a.get(te);let At=c.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(At=I.isWebGL3DRenderTarget?c.TEXTURE_3D:c.TEXTURE_2D_ARRAY),n.bindTexture(At,Mt.__webglTexture),Z(At,te),Nt(q.__webglFramebuffer,I,te,c.COLOR_ATTACHMENT0+Et,At,0),S(te)&&x(At)}n.unbindTexture()}else{let Et=c.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Et=I.isWebGL3DRenderTarget?c.TEXTURE_3D:c.TEXTURE_2D_ARRAY),n.bindTexture(Et,st.__webglTexture),Z(Et,A),A.mipmaps&&A.mipmaps.length>0)for(let Pt=0;Pt<A.mipmaps.length;Pt++)Nt(q.__webglFramebuffer[Pt],I,A,c.COLOR_ATTACHMENT0,Et,Pt);else Nt(q.__webglFramebuffer,I,A,c.COLOR_ATTACHMENT0,Et,0);S(A)&&x(Et),n.unbindTexture()}I.depthBuffer&&me(I)}function ve(I){const A=I.textures;for(let q=0,st=A.length;q<st;q++){const gt=A[q];if(S(gt)){const at=T(I),wt=a.get(gt).__webglTexture;n.bindTexture(at,wt),x(at),n.unbindTexture()}}}const Te=[],se=[];function Ze(I){if(I.samples>0){if(Ke(I)===!1){const A=I.textures,q=I.width,st=I.height;let gt=c.COLOR_BUFFER_BIT;const at=I.stencilBuffer?c.DEPTH_STENCIL_ATTACHMENT:c.DEPTH_ATTACHMENT,wt=a.get(I),Et=A.length>1;if(Et)for(let te=0;te<A.length;te++)n.bindFramebuffer(c.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),c.framebufferRenderbuffer(c.FRAMEBUFFER,c.COLOR_ATTACHMENT0+te,c.RENDERBUFFER,null),n.bindFramebuffer(c.FRAMEBUFFER,wt.__webglFramebuffer),c.framebufferTexture2D(c.DRAW_FRAMEBUFFER,c.COLOR_ATTACHMENT0+te,c.TEXTURE_2D,null,0);n.bindFramebuffer(c.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer);const Pt=I.texture.mipmaps;Pt&&Pt.length>0?n.bindFramebuffer(c.DRAW_FRAMEBUFFER,wt.__webglFramebuffer[0]):n.bindFramebuffer(c.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let te=0;te<A.length;te++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(gt|=c.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(gt|=c.STENCIL_BUFFER_BIT)),Et){c.framebufferRenderbuffer(c.READ_FRAMEBUFFER,c.COLOR_ATTACHMENT0,c.RENDERBUFFER,wt.__webglColorRenderbuffer[te]);const Mt=a.get(A[te]).__webglTexture;c.framebufferTexture2D(c.DRAW_FRAMEBUFFER,c.COLOR_ATTACHMENT0,c.TEXTURE_2D,Mt,0)}c.blitFramebuffer(0,0,q,st,0,0,q,st,gt,c.NEAREST),p===!0&&(Te.length=0,se.length=0,Te.push(c.COLOR_ATTACHMENT0+te),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Te.push(at),se.push(at),c.invalidateFramebuffer(c.DRAW_FRAMEBUFFER,se)),c.invalidateFramebuffer(c.READ_FRAMEBUFFER,Te))}if(n.bindFramebuffer(c.READ_FRAMEBUFFER,null),n.bindFramebuffer(c.DRAW_FRAMEBUFFER,null),Et)for(let te=0;te<A.length;te++){n.bindFramebuffer(c.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),c.framebufferRenderbuffer(c.FRAMEBUFFER,c.COLOR_ATTACHMENT0+te,c.RENDERBUFFER,wt.__webglColorRenderbuffer[te]);const Mt=a.get(A[te]).__webglTexture;n.bindFramebuffer(c.FRAMEBUFFER,wt.__webglFramebuffer),c.framebufferTexture2D(c.DRAW_FRAMEBUFFER,c.COLOR_ATTACHMENT0+te,c.TEXTURE_2D,Mt,0)}n.bindFramebuffer(c.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&p){const A=I.stencilBuffer?c.DEPTH_STENCIL_ATTACHMENT:c.DEPTH_ATTACHMENT;c.invalidateFramebuffer(c.DRAW_FRAMEBUFFER,[A])}}}function W(I){return Math.min(r.maxSamples,I.samples)}function Ke(I){const A=a.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function _e(I){const A=u.render.frame;g.get(I)!==A&&(g.set(I,A),I.update())}function Ce(I,A){const q=I.colorSpace,st=I.format,gt=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||q!==go&&q!==Ms&&(Re.getTransfer(q)===qe?(st!==Fi||gt!==ui)&&ue("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):we("WebGLTextures: Unsupported texture color space:",q)),A}function Zt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(h.width=I.naturalWidth||I.width,h.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(h.width=I.displayWidth,h.height=I.displayHeight):(h.width=I.width,h.height=I.height),h}this.allocateTextureUnit=V,this.resetTextureUnits=$,this.setTexture2D=X,this.setTexture2DArray=D,this.setTexture3D=H,this.setTextureCube=Q,this.rebindTextures=Xe,this.setupRenderTarget=fe,this.updateRenderTargetMipmap=ve,this.updateMultisampleRenderTarget=Ze,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=Nt,this.useMultisampledRTT=Ke,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function ZC(c,t){function n(a,r=Ms){let o;const u=Re.getTransfer(r);if(a===ui)return c.UNSIGNED_BYTE;if(a===Bp)return c.UNSIGNED_SHORT_4_4_4_4;if(a===Fp)return c.UNSIGNED_SHORT_5_5_5_1;if(a===Nx)return c.UNSIGNED_INT_5_9_9_9_REV;if(a===Ux)return c.UNSIGNED_INT_10F_11F_11F_REV;if(a===Cx)return c.BYTE;if(a===Dx)return c.SHORT;if(a===Nl)return c.UNSIGNED_SHORT;if(a===Pp)return c.INT;if(a===ia)return c.UNSIGNED_INT;if(a===Ji)return c.FLOAT;if(a===Ia)return c.HALF_FLOAT;if(a===Lx)return c.ALPHA;if(a===Ox)return c.RGB;if(a===Fi)return c.RGBA;if(a===Ha)return c.DEPTH_COMPONENT;if(a===sr)return c.DEPTH_STENCIL;if(a===zx)return c.RED;if(a===Ip)return c.RED_INTEGER;if(a===mo)return c.RG;if(a===Hp)return c.RG_INTEGER;if(a===Gp)return c.RGBA_INTEGER;if(a===Au||a===wu||a===Ru||a===Cu)if(u===qe)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(a===Au)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===wu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Ru)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Cu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(a===Au)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===wu)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Ru)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Cu)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Zd||a===Kd||a===Qd||a===Jd)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(a===Zd)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Kd)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Qd)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Jd)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===$d||a===tp||a===ep||a===np||a===ip||a===ap||a===sp)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(a===$d||a===tp)return u===qe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(a===ep)return u===qe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(a===np)return o.COMPRESSED_R11_EAC;if(a===ip)return o.COMPRESSED_SIGNED_R11_EAC;if(a===ap)return o.COMPRESSED_RG11_EAC;if(a===sp)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===rp||a===op||a===lp||a===cp||a===up||a===fp||a===hp||a===dp||a===pp||a===mp||a===gp||a===vp||a===_p||a===xp)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(a===rp)return u===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===op)return u===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===lp)return u===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===cp)return u===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===up)return u===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===fp)return u===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===hp)return u===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===dp)return u===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===pp)return u===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===mp)return u===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===gp)return u===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===vp)return u===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===_p)return u===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===xp)return u===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===yp||a===Sp||a===Mp)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(a===yp)return u===qe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Sp)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Mp)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Ep||a===bp||a===Tp||a===Ap)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(a===Ep)return o.COMPRESSED_RED_RGTC1_EXT;if(a===bp)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Tp)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Ap)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Ul?c.UNSIGNED_INT_24_8:c[a]!==void 0?c[a]:null}return{convert:n}}const KC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,QC=`
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

}`;class JC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const a=new jx(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,a=new sa({vertexShader:KC,fragmentShader:QC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Hi(new Hl(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $C extends _o{constructor(t,n){super();const a=this;let r=null,o=1,u=null,f="local-floor",p=1,h=null,g=null,_=null,v=null,y=null,M=null;const b=typeof XRWebGLBinding<"u",S=new JC,x={},T=n.getContextAttributes();let C=null,L=null;const z=[],B=[],P=new Le;let Y=null;const w=new zi;w.viewport=new ln;const O=new zi;O.viewport=new ln;const G=[w,O],$=new o1;let V=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let pt=z[nt];return pt===void 0&&(pt=new Td,z[nt]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(nt){let pt=z[nt];return pt===void 0&&(pt=new Td,z[nt]=pt),pt.getGripSpace()},this.getHand=function(nt){let pt=z[nt];return pt===void 0&&(pt=new Td,z[nt]=pt),pt.getHandSpace()};function X(nt){const pt=B.indexOf(nt.inputSource);if(pt===-1)return;const Nt=z[pt];Nt!==void 0&&(Nt.update(nt.inputSource,nt.frame,h||u),Nt.dispatchEvent({type:nt.type,data:nt.inputSource}))}function D(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",D),r.removeEventListener("inputsourceschange",H);for(let nt=0;nt<z.length;nt++){const pt=B[nt];pt!==null&&(B[nt]=null,z[nt].disconnect(pt))}V=null,j=null,S.reset();for(const nt in x)delete x[nt];t.setRenderTarget(C),y=null,v=null,_=null,r=null,L=null,Ft.stop(),a.isPresenting=!1,t.setPixelRatio(Y),t.setSize(P.width,P.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){o=nt,a.isPresenting===!0&&ue("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){f=nt,a.isPresenting===!0&&ue("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(nt){h=nt},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return _===null&&b&&(_=new XRWebGLBinding(r,n)),_},this.getFrame=function(){return M},this.getSession=function(){return r},this.setSession=async function(nt){if(r=nt,r!==null){if(C=t.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",D),r.addEventListener("inputsourceschange",H),T.xrCompatible!==!0&&await n.makeXRCompatible(),Y=t.getPixelRatio(),t.getSize(P),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let Nt=null,Xt=null,Vt=null;T.depth&&(Vt=T.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Nt=T.stencil?sr:Ha,Xt=T.stencil?Ul:ia);const me={colorFormat:n.RGBA8,depthFormat:Vt,scaleFactor:o};_=this.getBinding(),v=_.createProjectionLayer(me),r.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),L=new ea(v.textureWidth,v.textureHeight,{format:Fi,type:ui,depthTexture:new Ol(v.textureWidth,v.textureHeight,Xt,void 0,void 0,void 0,void 0,void 0,void 0,Nt),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Nt={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:o};y=new XRWebGLLayer(r,n,Nt),r.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),L=new ea(y.framebufferWidth,y.framebufferHeight,{format:Fi,type:ui,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(p),h=null,u=await r.requestReferenceSpace(f),Ft.setContext(r),Ft.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function H(nt){for(let pt=0;pt<nt.removed.length;pt++){const Nt=nt.removed[pt],Xt=B.indexOf(Nt);Xt>=0&&(B[Xt]=null,z[Xt].disconnect(Nt))}for(let pt=0;pt<nt.added.length;pt++){const Nt=nt.added[pt];let Xt=B.indexOf(Nt);if(Xt===-1){for(let me=0;me<z.length;me++)if(me>=B.length){B.push(Nt),Xt=me;break}else if(B[me]===null){B[me]=Nt,Xt=me;break}if(Xt===-1)break}const Vt=z[Xt];Vt&&Vt.connect(Nt)}}const Q=new ut,ft=new ut;function mt(nt,pt,Nt){Q.setFromMatrixPosition(pt.matrixWorld),ft.setFromMatrixPosition(Nt.matrixWorld);const Xt=Q.distanceTo(ft),Vt=pt.projectionMatrix.elements,me=Nt.projectionMatrix.elements,Xe=Vt[14]/(Vt[10]-1),fe=Vt[14]/(Vt[10]+1),ve=(Vt[9]+1)/Vt[5],Te=(Vt[9]-1)/Vt[5],se=(Vt[8]-1)/Vt[0],Ze=(me[8]+1)/me[0],W=Xe*se,Ke=Xe*Ze,_e=Xt/(-se+Ze),Ce=_e*-se;if(pt.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(Ce),nt.translateZ(_e),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),Vt[10]===-1)nt.projectionMatrix.copy(pt.projectionMatrix),nt.projectionMatrixInverse.copy(pt.projectionMatrixInverse);else{const Zt=Xe+_e,I=fe+_e,A=W-Ce,q=Ke+(Xt-Ce),st=ve*fe/I*Zt,gt=Te*fe/I*Zt;nt.projectionMatrix.makePerspective(A,q,st,gt,Zt,I),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function F(nt,pt){pt===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(pt.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(r===null)return;let pt=nt.near,Nt=nt.far;S.texture!==null&&(S.depthNear>0&&(pt=S.depthNear),S.depthFar>0&&(Nt=S.depthFar)),$.near=O.near=w.near=pt,$.far=O.far=w.far=Nt,(V!==$.near||j!==$.far)&&(r.updateRenderState({depthNear:$.near,depthFar:$.far}),V=$.near,j=$.far),$.layers.mask=nt.layers.mask|6,w.layers.mask=$.layers.mask&3,O.layers.mask=$.layers.mask&5;const Xt=nt.parent,Vt=$.cameras;F($,Xt);for(let me=0;me<Vt.length;me++)F(Vt[me],Xt);Vt.length===2?mt($,w,O):$.projectionMatrix.copy(w.projectionMatrix),Z(nt,$,Xt)};function Z(nt,pt,Nt){Nt===null?nt.matrix.copy(pt.matrixWorld):(nt.matrix.copy(Nt.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(pt.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(pt.projectionMatrix),nt.projectionMatrixInverse.copy(pt.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=wp*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(v===null&&y===null))return p},this.setFoveation=function(nt){p=nt,v!==null&&(v.fixedFoveation=nt),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=nt)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh($)},this.getCameraTexture=function(nt){return x[nt]};let _t=null;function Tt(nt,pt){if(g=pt.getViewerPose(h||u),M=pt,g!==null){const Nt=g.views;y!==null&&(t.setRenderTargetFramebuffer(L,y.framebuffer),t.setRenderTarget(L));let Xt=!1;Nt.length!==$.cameras.length&&($.cameras.length=0,Xt=!0);for(let fe=0;fe<Nt.length;fe++){const ve=Nt[fe];let Te=null;if(y!==null)Te=y.getViewport(ve);else{const Ze=_.getViewSubImage(v,ve);Te=Ze.viewport,fe===0&&(t.setRenderTargetTextures(L,Ze.colorTexture,Ze.depthStencilTexture),t.setRenderTarget(L))}let se=G[fe];se===void 0&&(se=new zi,se.layers.enable(fe),se.viewport=new ln,G[fe]=se),se.matrix.fromArray(ve.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(ve.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(Te.x,Te.y,Te.width,Te.height),fe===0&&($.matrix.copy(se.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),Xt===!0&&$.cameras.push(se)}const Vt=r.enabledFeatures;if(Vt&&Vt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&b){_=a.getBinding();const fe=_.getDepthInformation(Nt[0]);fe&&fe.isValid&&fe.texture&&S.init(fe,r.renderState)}if(Vt&&Vt.includes("camera-access")&&b){t.state.unbindTexture(),_=a.getBinding();for(let fe=0;fe<Nt.length;fe++){const ve=Nt[fe].camera;if(ve){let Te=x[ve];Te||(Te=new jx,x[ve]=Te);const se=_.getCameraImage(ve);Te.sourceTexture=se}}}}for(let Nt=0;Nt<z.length;Nt++){const Xt=B[Nt],Vt=z[Nt];Xt!==null&&Vt!==void 0&&Vt.update(Xt,pt,h||u)}_t&&_t(nt,pt),pt.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:pt}),M=null}const Ft=new Kx;Ft.setAnimationLoop(Tt),this.setAnimationLoop=function(nt){_t=nt},this.dispose=function(){}}}const Qs=new aa,t2=new sn;function e2(c,t){function n(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function a(S,x){x.color.getRGB(S.fogColor.value,qx(c)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function r(S,x,T,C,L){x.isMeshBasicMaterial||x.isMeshLambertMaterial?o(S,x):x.isMeshToonMaterial?(o(S,x),_(S,x)):x.isMeshPhongMaterial?(o(S,x),g(S,x)):x.isMeshStandardMaterial?(o(S,x),v(S,x),x.isMeshPhysicalMaterial&&y(S,x,L)):x.isMeshMatcapMaterial?(o(S,x),M(S,x)):x.isMeshDepthMaterial?o(S,x):x.isMeshDistanceMaterial?(o(S,x),b(S,x)):x.isMeshNormalMaterial?o(S,x):x.isLineBasicMaterial?(u(S,x),x.isLineDashedMaterial&&f(S,x)):x.isPointsMaterial?p(S,x,T,C):x.isSpriteMaterial?h(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function o(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,n(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,n(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===ti&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,n(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===ti&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,n(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,n(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const T=t.get(x),C=T.envMap,L=T.envMapRotation;C&&(S.envMap.value=C,Qs.copy(L),Qs.x*=-1,Qs.y*=-1,Qs.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Qs.y*=-1,Qs.z*=-1),S.envMapRotation.value.setFromMatrix4(t2.makeRotationFromEuler(Qs)),S.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,S.aoMapTransform))}function u(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,n(x.map,S.mapTransform))}function f(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function p(S,x,T,C){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*T,S.scale.value=C*.5,x.map&&(S.map.value=x.map,n(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function h(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,n(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function g(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function _(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function v(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function y(S,x,T){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===ti&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=T.texture,S.transmissionSamplerSize.value.set(T.width,T.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,x){x.matcap&&(S.matcap.value=x.matcap)}function b(S,x){const T=t.get(x).light;S.referencePosition.value.setFromMatrixPosition(T.matrixWorld),S.nearDistance.value=T.shadow.camera.near,S.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:r}}function n2(c,t,n,a){let r={},o={},u=[];const f=c.getParameter(c.MAX_UNIFORM_BUFFER_BINDINGS);function p(T,C){const L=C.program;a.uniformBlockBinding(T,L)}function h(T,C){let L=r[T.id];L===void 0&&(M(T),L=g(T),r[T.id]=L,T.addEventListener("dispose",S));const z=C.program;a.updateUBOMapping(T,z);const B=t.render.frame;o[T.id]!==B&&(v(T),o[T.id]=B)}function g(T){const C=_();T.__bindingPointIndex=C;const L=c.createBuffer(),z=T.__size,B=T.usage;return c.bindBuffer(c.UNIFORM_BUFFER,L),c.bufferData(c.UNIFORM_BUFFER,z,B),c.bindBuffer(c.UNIFORM_BUFFER,null),c.bindBufferBase(c.UNIFORM_BUFFER,C,L),L}function _(){for(let T=0;T<f;T++)if(u.indexOf(T)===-1)return u.push(T),T;return we("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(T){const C=r[T.id],L=T.uniforms,z=T.__cache;c.bindBuffer(c.UNIFORM_BUFFER,C);for(let B=0,P=L.length;B<P;B++){const Y=Array.isArray(L[B])?L[B]:[L[B]];for(let w=0,O=Y.length;w<O;w++){const G=Y[w];if(y(G,B,w,z)===!0){const $=G.__offset,V=Array.isArray(G.value)?G.value:[G.value];let j=0;for(let X=0;X<V.length;X++){const D=V[X],H=b(D);typeof D=="number"||typeof D=="boolean"?(G.__data[0]=D,c.bufferSubData(c.UNIFORM_BUFFER,$+j,G.__data)):D.isMatrix3?(G.__data[0]=D.elements[0],G.__data[1]=D.elements[1],G.__data[2]=D.elements[2],G.__data[3]=0,G.__data[4]=D.elements[3],G.__data[5]=D.elements[4],G.__data[6]=D.elements[5],G.__data[7]=0,G.__data[8]=D.elements[6],G.__data[9]=D.elements[7],G.__data[10]=D.elements[8],G.__data[11]=0):(D.toArray(G.__data,j),j+=H.storage/Float32Array.BYTES_PER_ELEMENT)}c.bufferSubData(c.UNIFORM_BUFFER,$,G.__data)}}}c.bindBuffer(c.UNIFORM_BUFFER,null)}function y(T,C,L,z){const B=T.value,P=C+"_"+L;if(z[P]===void 0)return typeof B=="number"||typeof B=="boolean"?z[P]=B:z[P]=B.clone(),!0;{const Y=z[P];if(typeof B=="number"||typeof B=="boolean"){if(Y!==B)return z[P]=B,!0}else if(Y.equals(B)===!1)return Y.copy(B),!0}return!1}function M(T){const C=T.uniforms;let L=0;const z=16;for(let P=0,Y=C.length;P<Y;P++){const w=Array.isArray(C[P])?C[P]:[C[P]];for(let O=0,G=w.length;O<G;O++){const $=w[O],V=Array.isArray($.value)?$.value:[$.value];for(let j=0,X=V.length;j<X;j++){const D=V[j],H=b(D),Q=L%z,ft=Q%H.boundary,mt=Q+ft;L+=ft,mt!==0&&z-mt<H.storage&&(L+=z-mt),$.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=L,L+=H.storage}}}const B=L%z;return B>0&&(L+=z-B),T.__size=L,T.__cache={},this}function b(T){const C={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(C.boundary=4,C.storage=4):T.isVector2?(C.boundary=8,C.storage=8):T.isVector3||T.isColor?(C.boundary=16,C.storage=12):T.isVector4?(C.boundary=16,C.storage=16):T.isMatrix3?(C.boundary=48,C.storage=48):T.isMatrix4?(C.boundary=64,C.storage=64):T.isTexture?ue("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ue("WebGLRenderer: Unsupported uniform value type.",T),C}function S(T){const C=T.target;C.removeEventListener("dispose",S);const L=u.indexOf(C.__bindingPointIndex);u.splice(L,1),c.deleteBuffer(r[C.id]),delete r[C.id],delete o[C.id]}function x(){for(const T in r)c.deleteBuffer(r[T]);u=[],r={},o={}}return{bind:p,update:h,dispose:x}}const i2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Zi=null;function a2(){return Zi===null&&(Zi=new ZT(i2,16,16,mo,Ia),Zi.name="DFG_LUT",Zi.minFilter=zn,Zi.magFilter=zn,Zi.wrapS=za,Zi.wrapT=za,Zi.generateMipmaps=!1,Zi.needsUpdate=!0),Zi}class s2{constructor(t={}){const{canvas:n=MT(),context:a=null,depth:r=!0,stencil:o=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:h=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:y=ui}=t;this.isWebGLRenderer=!0;let M;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=a.getContextAttributes().alpha}else M=u;const b=y,S=new Set([Gp,Hp,Ip]),x=new Set([ui,ia,Nl,Ul,Bp,Fp]),T=new Uint32Array(4),C=new Int32Array(4);let L=null,z=null;const B=[],P=[];let Y=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let O=!1;this._outputColorSpace=qn;let G=0,$=0,V=null,j=-1,X=null;const D=new ln,H=new ln;let Q=null;const ft=new Ue(0);let mt=0,F=n.width,Z=n.height,_t=1,Tt=null,Ft=null;const nt=new ln(0,0,F,Z),pt=new ln(0,0,F,Z);let Nt=!1;const Xt=new Yp;let Vt=!1,me=!1;const Xe=new sn,fe=new ut,ve=new ln,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let se=!1;function Ze(){return V===null?_t:1}let W=a;function Ke(U,tt){return n.getContext(U,tt)}try{const U={alpha:!0,depth:r,stencil:o,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:h,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${zp}`),n.addEventListener("webglcontextlost",oe,!1),n.addEventListener("webglcontextrestored",He,!1),n.addEventListener("webglcontextcreationerror",Ae,!1),W===null){const tt="webgl2";if(W=Ke(tt,U),W===null)throw Ke(tt)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(U){throw we("WebGLRenderer: "+U.message),U}let _e,Ce,Zt,I,A,q,st,gt,at,wt,Et,Pt,te,Mt,At,Ut,Lt,Ct,re,J,zt,Rt,Ht,bt;function St(){_e=new aR(W),_e.init(),Rt=new ZC(W,_e),Ce=new Zw(W,_e,t,Rt),Zt=new YC(W,_e),Ce.reversedDepthBuffer&&v&&Zt.buffers.depth.setReversed(!0),I=new oR(W),A=new UC,q=new jC(W,_e,Zt,A,Ce,Rt,I),st=new Qw(w),gt=new iR(w),at=new f1(W),Ht=new Yw(W,at),wt=new sR(W,at,I,Ht),Et=new cR(W,wt,at,I),re=new lR(W,Ce,q),Ut=new Kw(A),Pt=new NC(w,st,gt,_e,Ce,Ht,Ut),te=new e2(w,A),Mt=new OC,At=new HC(_e),Ct=new Ww(w,st,gt,Zt,Et,M,p),Lt=new XC(w,Et,Ce),bt=new n2(W,I,Ce,Zt),J=new jw(W,_e,I),zt=new rR(W,_e,I),I.programs=Pt.programs,w.capabilities=Ce,w.extensions=_e,w.properties=A,w.renderLists=Mt,w.shadowMap=Lt,w.state=Zt,w.info=I}St(),b!==ui&&(Y=new fR(b,n.width,n.height,r,o));const Dt=new $C(w,W);this.xr=Dt,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const U=_e.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){const U=_e.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(U){U!==void 0&&(_t=U,this.setSize(F,Z,!1))},this.getSize=function(U){return U.set(F,Z)},this.setSize=function(U,tt,ht=!0){if(Dt.isPresenting){ue("WebGLRenderer: Can't change size while VR device is presenting.");return}F=U,Z=tt,n.width=Math.floor(U*_t),n.height=Math.floor(tt*_t),ht===!0&&(n.style.width=U+"px",n.style.height=tt+"px"),Y!==null&&Y.setSize(n.width,n.height),this.setViewport(0,0,U,tt)},this.getDrawingBufferSize=function(U){return U.set(F*_t,Z*_t).floor()},this.setDrawingBufferSize=function(U,tt,ht){F=U,Z=tt,_t=ht,n.width=Math.floor(U*ht),n.height=Math.floor(tt*ht),this.setViewport(0,0,U,tt)},this.setEffects=function(U){if(b===ui){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(U){for(let tt=0;tt<U.length;tt++)if(U[tt].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}Y.setEffects(U||[])},this.getCurrentViewport=function(U){return U.copy(D)},this.getViewport=function(U){return U.copy(nt)},this.setViewport=function(U,tt,ht,lt){U.isVector4?nt.set(U.x,U.y,U.z,U.w):nt.set(U,tt,ht,lt),Zt.viewport(D.copy(nt).multiplyScalar(_t).round())},this.getScissor=function(U){return U.copy(pt)},this.setScissor=function(U,tt,ht,lt){U.isVector4?pt.set(U.x,U.y,U.z,U.w):pt.set(U,tt,ht,lt),Zt.scissor(H.copy(pt).multiplyScalar(_t).round())},this.getScissorTest=function(){return Nt},this.setScissorTest=function(U){Zt.setScissorTest(Nt=U)},this.setOpaqueSort=function(U){Tt=U},this.setTransparentSort=function(U){Ft=U},this.getClearColor=function(U){return U.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor(...arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha(...arguments)},this.clear=function(U=!0,tt=!0,ht=!0){let lt=0;if(U){let it=!1;if(V!==null){const Ot=V.texture.format;it=S.has(Ot)}if(it){const Ot=V.texture.type,kt=x.has(Ot),Bt=Ct.getClearColor(),Wt=Ct.getClearAlpha(),Kt=Bt.r,ne=Bt.g,Qt=Bt.b;kt?(T[0]=Kt,T[1]=ne,T[2]=Qt,T[3]=Wt,W.clearBufferuiv(W.COLOR,0,T)):(C[0]=Kt,C[1]=ne,C[2]=Qt,C[3]=Wt,W.clearBufferiv(W.COLOR,0,C))}else lt|=W.COLOR_BUFFER_BIT}tt&&(lt|=W.DEPTH_BUFFER_BIT),ht&&(lt|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(lt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",oe,!1),n.removeEventListener("webglcontextrestored",He,!1),n.removeEventListener("webglcontextcreationerror",Ae,!1),Ct.dispose(),Mt.dispose(),At.dispose(),A.dispose(),st.dispose(),gt.dispose(),Et.dispose(),Ht.dispose(),bt.dispose(),Pt.dispose(),Dt.dispose(),Dt.removeEventListener("sessionstart",lr),Dt.removeEventListener("sessionend",Eo),Gi.stop()};function oe(U){U.preventDefault(),d_("WebGLRenderer: Context Lost."),O=!0}function He(){d_("WebGLRenderer: Context Restored."),O=!1;const U=I.autoReset,tt=Lt.enabled,ht=Lt.autoUpdate,lt=Lt.needsUpdate,it=Lt.type;St(),I.autoReset=U,Lt.enabled=tt,Lt.autoUpdate=ht,Lt.needsUpdate=lt,Lt.type=it}function Ae(U){we("WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function Pn(U){const tt=U.target;tt.removeEventListener("dispose",Pn),bi(tt)}function bi(U){Gl(U),A.remove(U)}function Gl(U){const tt=A.get(U).programs;tt!==void 0&&(tt.forEach(function(ht){Pt.releaseProgram(ht)}),U.isShaderMaterial&&Pt.releaseShaderCache(U))}this.renderBufferDirect=function(U,tt,ht,lt,it,Ot){tt===null&&(tt=Te);const kt=it.isMesh&&it.matrixWorld.determinant()<0,Bt=ws(U,tt,ht,lt,it);Zt.setMaterial(lt,kt);let Wt=ht.index,Kt=1;if(lt.wireframe===!0){if(Wt=wt.getWireframeAttribute(ht),Wt===void 0)return;Kt=2}const ne=ht.drawRange,Qt=ht.attributes.position;let ie=ne.start*Kt,Oe=(ne.start+ne.count)*Kt;Ot!==null&&(ie=Math.max(ie,Ot.start*Kt),Oe=Math.min(Oe,(Ot.start+Ot.count)*Kt)),Wt!==null?(ie=Math.max(ie,0),Oe=Math.min(Oe,Wt.count)):Qt!=null&&(ie=Math.max(ie,0),Oe=Math.min(Oe,Qt.count));const nn=Oe-ie;if(nn<0||nn===1/0)return;Ht.setup(it,lt,Bt,ht,Wt);let Je,Fe=J;if(Wt!==null&&(Je=at.get(Wt),Fe=zt,Fe.setIndex(Je)),it.isMesh)lt.wireframe===!0?(Zt.setLineWidth(lt.wireframeLinewidth*Ze()),Fe.setMode(W.LINES)):Fe.setMode(W.TRIANGLES);else if(it.isLine){let $t=lt.linewidth;$t===void 0&&($t=1),Zt.setLineWidth($t*Ze()),it.isLineSegments?Fe.setMode(W.LINES):it.isLineLoop?Fe.setMode(W.LINE_LOOP):Fe.setMode(W.LINE_STRIP)}else it.isPoints?Fe.setMode(W.POINTS):it.isSprite&&Fe.setMode(W.TRIANGLES);if(it.isBatchedMesh)if(it._multiDrawInstances!==null)Ll("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Fe.renderMultiDrawInstances(it._multiDrawStarts,it._multiDrawCounts,it._multiDrawCount,it._multiDrawInstances);else if(_e.get("WEBGL_multi_draw"))Fe.renderMultiDraw(it._multiDrawStarts,it._multiDrawCounts,it._multiDrawCount);else{const $t=it._multiDrawStarts,ze=it._multiDrawCounts,le=it._multiDrawCount,Tn=Wt?at.get(Wt).bytesPerElement:1,ra=A.get(lt).currentProgram.getUniforms();for(let An=0;An<le;An++)ra.setValue(W,"_gl_DrawID",An),Fe.render($t[An]/Tn,ze[An])}else if(it.isInstancedMesh)Fe.renderInstances(ie,nn,it.count);else if(ht.isInstancedBufferGeometry){const $t=ht._maxInstanceCount!==void 0?ht._maxInstanceCount:1/0,ze=Math.min(ht.instanceCount,$t);Fe.renderInstances(ie,nn,ze)}else Fe.render(ie,nn)};function So(U,tt,ht){U.transparent===!0&&U.side===Oa&&U.forceSinglePass===!1?(U.side=ti,U.needsUpdate=!0,ur(U,tt,ht),U.side=As,U.needsUpdate=!0,ur(U,tt,ht),U.side=Oa):ur(U,tt,ht)}this.compile=function(U,tt,ht=null){ht===null&&(ht=U),z=At.get(ht),z.init(tt),P.push(z),ht.traverseVisible(function(it){it.isLight&&it.layers.test(tt.layers)&&(z.pushLight(it),it.castShadow&&z.pushShadow(it))}),U!==ht&&U.traverseVisible(function(it){it.isLight&&it.layers.test(tt.layers)&&(z.pushLight(it),it.castShadow&&z.pushShadow(it))}),z.setupLights();const lt=new Set;return U.traverse(function(it){if(!(it.isMesh||it.isPoints||it.isLine||it.isSprite))return;const Ot=it.material;if(Ot)if(Array.isArray(Ot))for(let kt=0;kt<Ot.length;kt++){const Bt=Ot[kt];So(Bt,ht,it),lt.add(Bt)}else So(Ot,ht,it),lt.add(Ot)}),z=P.pop(),lt},this.compileAsync=function(U,tt,ht=null){const lt=this.compile(U,tt,ht);return new Promise(it=>{function Ot(){if(lt.forEach(function(kt){A.get(kt).currentProgram.isReady()&&lt.delete(kt)}),lt.size===0){it(U);return}setTimeout(Ot,10)}_e.get("KHR_parallel_shader_compile")!==null?Ot():setTimeout(Ot,10)})};let or=null;function Mo(U){or&&or(U)}function lr(){Gi.stop()}function Eo(){Gi.start()}const Gi=new Kx;Gi.setAnimationLoop(Mo),typeof self<"u"&&Gi.setContext(self),this.setAnimationLoop=function(U){or=U,Dt.setAnimationLoop(U),U===null?Gi.stop():Gi.start()},Dt.addEventListener("sessionstart",lr),Dt.addEventListener("sessionend",Eo),this.render=function(U,tt){if(tt!==void 0&&tt.isCamera!==!0){we("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;const ht=Dt.enabled===!0&&Dt.isPresenting===!0,lt=Y!==null&&(V===null||ht)&&Y.begin(w,V);if(U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),tt.parent===null&&tt.matrixWorldAutoUpdate===!0&&tt.updateMatrixWorld(),Dt.enabled===!0&&Dt.isPresenting===!0&&(Y===null||Y.isCompositing()===!1)&&(Dt.cameraAutoUpdate===!0&&Dt.updateCamera(tt),tt=Dt.getCamera()),U.isScene===!0&&U.onBeforeRender(w,U,tt,V),z=At.get(U,P.length),z.init(tt),P.push(z),Xe.multiplyMatrices(tt.projectionMatrix,tt.matrixWorldInverse),Xt.setFromProjectionMatrix(Xe,$i,tt.reversedDepth),me=this.localClippingEnabled,Vt=Ut.init(this.clippingPlanes,me),L=Mt.get(U,B.length),L.init(),B.push(L),Dt.enabled===!0&&Dt.isPresenting===!0){const kt=w.xr.getDepthSensingMesh();kt!==null&&hi(kt,tt,-1/0,w.sortObjects)}hi(U,tt,0,w.sortObjects),L.finish(),w.sortObjects===!0&&L.sort(Tt,Ft),se=Dt.enabled===!1||Dt.isPresenting===!1||Dt.hasDepthSensing()===!1,se&&Ct.addToRenderList(L,U),this.info.render.frame++,Vt===!0&&Ut.beginShadows();const it=z.state.shadowsArray;if(Lt.render(it,U,tt),Vt===!0&&Ut.endShadows(),this.info.autoReset===!0&&this.info.reset(),(lt&&Y.hasRenderPass())===!1){const kt=L.opaque,Bt=L.transmissive;if(z.setupLights(),tt.isArrayCamera){const Wt=tt.cameras;if(Bt.length>0)for(let Kt=0,ne=Wt.length;Kt<ne;Kt++){const Qt=Wt[Kt];bn(kt,Bt,U,Qt)}se&&Ct.render(U);for(let Kt=0,ne=Wt.length;Kt<ne;Kt++){const Qt=Wt[Kt];fn(L,U,Qt,Qt.viewport)}}else Bt.length>0&&bn(kt,Bt,U,tt),se&&Ct.render(U),fn(L,U,tt)}V!==null&&$===0&&(q.updateMultisampleRenderTarget(V),q.updateRenderTargetMipmap(V)),lt&&Y.end(w),U.isScene===!0&&U.onAfterRender(w,U,tt),Ht.resetDefaultState(),j=-1,X=null,P.pop(),P.length>0?(z=P[P.length-1],Vt===!0&&Ut.setGlobalState(w.clippingPlanes,z.state.camera)):z=null,B.pop(),B.length>0?L=B[B.length-1]:L=null};function hi(U,tt,ht,lt){if(U.visible===!1)return;if(U.layers.test(tt.layers)){if(U.isGroup)ht=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(tt);else if(U.isLight)z.pushLight(U),U.castShadow&&z.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||Xt.intersectsSprite(U)){lt&&ve.setFromMatrixPosition(U.matrixWorld).applyMatrix4(Xe);const kt=Et.update(U),Bt=U.material;Bt.visible&&L.push(U,kt,Bt,ht,ve.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||Xt.intersectsObject(U))){const kt=Et.update(U),Bt=U.material;if(lt&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),ve.copy(U.boundingSphere.center)):(kt.boundingSphere===null&&kt.computeBoundingSphere(),ve.copy(kt.boundingSphere.center)),ve.applyMatrix4(U.matrixWorld).applyMatrix4(Xe)),Array.isArray(Bt)){const Wt=kt.groups;for(let Kt=0,ne=Wt.length;Kt<ne;Kt++){const Qt=Wt[Kt],ie=Bt[Qt.materialIndex];ie&&ie.visible&&L.push(U,kt,ie,ht,ve.z,Qt)}}else Bt.visible&&L.push(U,kt,Bt,ht,ve.z,null)}}const Ot=U.children;for(let kt=0,Bt=Ot.length;kt<Bt;kt++)hi(Ot[kt],tt,ht,lt)}function fn(U,tt,ht,lt){const{opaque:it,transmissive:Ot,transparent:kt}=U;z.setupLightsView(ht),Vt===!0&&Ut.setGlobalState(w.clippingPlanes,ht),lt&&Zt.viewport(D.copy(lt)),it.length>0&&Ti(it,tt,ht),Ot.length>0&&Ti(Ot,tt,ht),kt.length>0&&Ti(kt,tt,ht),Zt.buffers.depth.setTest(!0),Zt.buffers.depth.setMask(!0),Zt.buffers.color.setMask(!0),Zt.setPolygonOffset(!1)}function bn(U,tt,ht,lt){if((ht.isScene===!0?ht.overrideMaterial:null)!==null)return;if(z.state.transmissionRenderTarget[lt.id]===void 0){const ie=_e.has("EXT_color_buffer_half_float")||_e.has("EXT_color_buffer_float");z.state.transmissionRenderTarget[lt.id]=new ea(1,1,{generateMipmaps:!0,type:ie?Ia:ui,minFilter:Es,samples:Ce.samples,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Re.workingColorSpace})}const Ot=z.state.transmissionRenderTarget[lt.id],kt=lt.viewport||D;Ot.setSize(kt.z*w.transmissionResolutionScale,kt.w*w.transmissionResolutionScale);const Bt=w.getRenderTarget(),Wt=w.getActiveCubeFace(),Kt=w.getActiveMipmapLevel();w.setRenderTarget(Ot),w.getClearColor(ft),mt=w.getClearAlpha(),mt<1&&w.setClearColor(16777215,.5),w.clear(),se&&Ct.render(ht);const ne=w.toneMapping;w.toneMapping=Ii;const Qt=lt.viewport;if(lt.viewport!==void 0&&(lt.viewport=void 0),z.setupLightsView(lt),Vt===!0&&Ut.setGlobalState(w.clippingPlanes,lt),Ti(U,ht,lt),q.updateMultisampleRenderTarget(Ot),q.updateRenderTargetMipmap(Ot),_e.has("WEBGL_multisampled_render_to_texture")===!1){let ie=!1;for(let Oe=0,nn=tt.length;Oe<nn;Oe++){const Je=tt[Oe],{object:Fe,geometry:$t,material:ze,group:le}=Je;if(ze.side===Oa&&Fe.layers.test(lt.layers)){const Tn=ze.side;ze.side=ti,ze.needsUpdate=!0,cr(Fe,ht,lt,$t,ze,le),ze.side=Tn,ze.needsUpdate=!0,ie=!0}}ie===!0&&(q.updateMultisampleRenderTarget(Ot),q.updateRenderTargetMipmap(Ot))}w.setRenderTarget(Bt,Wt,Kt),w.setClearColor(ft,mt),Qt!==void 0&&(lt.viewport=Qt),w.toneMapping=ne}function Ti(U,tt,ht){const lt=tt.isScene===!0?tt.overrideMaterial:null;for(let it=0,Ot=U.length;it<Ot;it++){const kt=U[it],{object:Bt,geometry:Wt,group:Kt}=kt;let ne=kt.material;ne.allowOverride===!0&&lt!==null&&(ne=lt),Bt.layers.test(ht.layers)&&cr(Bt,tt,ht,Wt,ne,Kt)}}function cr(U,tt,ht,lt,it,Ot){U.onBeforeRender(w,tt,ht,lt,it,Ot),U.modelViewMatrix.multiplyMatrices(ht.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),it.onBeforeRender(w,tt,ht,lt,U,Ot),it.transparent===!0&&it.side===Oa&&it.forceSinglePass===!1?(it.side=ti,it.needsUpdate=!0,w.renderBufferDirect(ht,tt,lt,it,U,Ot),it.side=As,it.needsUpdate=!0,w.renderBufferDirect(ht,tt,lt,it,U,Ot),it.side=Oa):w.renderBufferDirect(ht,tt,lt,it,U,Ot),U.onAfterRender(w,tt,ht,lt,it,Ot)}function ur(U,tt,ht){tt.isScene!==!0&&(tt=Te);const lt=A.get(U),it=z.state.lights,Ot=z.state.shadowsArray,kt=it.state.version,Bt=Pt.getParameters(U,it.state,Ot,tt,ht),Wt=Pt.getProgramCacheKey(Bt);let Kt=lt.programs;lt.environment=U.isMeshStandardMaterial?tt.environment:null,lt.fog=tt.fog,lt.envMap=(U.isMeshStandardMaterial?gt:st).get(U.envMap||lt.environment),lt.envMapRotation=lt.environment!==null&&U.envMap===null?tt.environmentRotation:U.envMapRotation,Kt===void 0&&(U.addEventListener("dispose",Pn),Kt=new Map,lt.programs=Kt);let ne=Kt.get(Wt);if(ne!==void 0){if(lt.currentProgram===ne&&lt.lightsStateVersion===kt)return bo(U,Bt),ne}else Bt.uniforms=Pt.getUniforms(U),U.onBeforeCompile(Bt,w),ne=Pt.acquireProgram(Bt,Wt),Kt.set(Wt,ne),lt.uniforms=Bt.uniforms;const Qt=lt.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(Qt.clippingPlanes=Ut.uniform),bo(U,Bt),lt.needsLights=Va(U),lt.lightsStateVersion=kt,lt.needsLights&&(Qt.ambientLightColor.value=it.state.ambient,Qt.lightProbe.value=it.state.probe,Qt.directionalLights.value=it.state.directional,Qt.directionalLightShadows.value=it.state.directionalShadow,Qt.spotLights.value=it.state.spot,Qt.spotLightShadows.value=it.state.spotShadow,Qt.rectAreaLights.value=it.state.rectArea,Qt.ltc_1.value=it.state.rectAreaLTC1,Qt.ltc_2.value=it.state.rectAreaLTC2,Qt.pointLights.value=it.state.point,Qt.pointLightShadows.value=it.state.pointShadow,Qt.hemisphereLights.value=it.state.hemi,Qt.directionalShadowMap.value=it.state.directionalShadowMap,Qt.directionalShadowMatrix.value=it.state.directionalShadowMatrix,Qt.spotShadowMap.value=it.state.spotShadowMap,Qt.spotLightMatrix.value=it.state.spotLightMatrix,Qt.spotLightMap.value=it.state.spotLightMap,Qt.pointShadowMap.value=it.state.pointShadowMap,Qt.pointShadowMatrix.value=it.state.pointShadowMatrix),lt.currentProgram=ne,lt.uniformsList=null,ne}function Vl(U){if(U.uniformsList===null){const tt=U.currentProgram.getUniforms();U.uniformsList=Du.seqWithValue(tt.seq,U.uniforms)}return U.uniformsList}function bo(U,tt){const ht=A.get(U);ht.outputColorSpace=tt.outputColorSpace,ht.batching=tt.batching,ht.batchingColor=tt.batchingColor,ht.instancing=tt.instancing,ht.instancingColor=tt.instancingColor,ht.instancingMorph=tt.instancingMorph,ht.skinning=tt.skinning,ht.morphTargets=tt.morphTargets,ht.morphNormals=tt.morphNormals,ht.morphColors=tt.morphColors,ht.morphTargetsCount=tt.morphTargetsCount,ht.numClippingPlanes=tt.numClippingPlanes,ht.numIntersection=tt.numClipIntersection,ht.vertexAlphas=tt.vertexAlphas,ht.vertexTangents=tt.vertexTangents,ht.toneMapping=tt.toneMapping}function ws(U,tt,ht,lt,it){tt.isScene!==!0&&(tt=Te),q.resetTextureUnits();const Ot=tt.fog,kt=lt.isMeshStandardMaterial?tt.environment:null,Bt=V===null?w.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:go,Wt=(lt.isMeshStandardMaterial?gt:st).get(lt.envMap||kt),Kt=lt.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,ne=!!ht.attributes.tangent&&(!!lt.normalMap||lt.anisotropy>0),Qt=!!ht.morphAttributes.position,ie=!!ht.morphAttributes.normal,Oe=!!ht.morphAttributes.color;let nn=Ii;lt.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(nn=w.toneMapping);const Je=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,Fe=Je!==void 0?Je.length:0,$t=A.get(lt),ze=z.state.lights;if(Vt===!0&&(me===!0||U!==X)){const Rn=U===X&&lt.id===j;Ut.setState(lt,U,Rn)}let le=!1;lt.version===$t.__version?($t.needsLights&&$t.lightsStateVersion!==ze.state.version||$t.outputColorSpace!==Bt||it.isBatchedMesh&&$t.batching===!1||!it.isBatchedMesh&&$t.batching===!0||it.isBatchedMesh&&$t.batchingColor===!0&&it.colorTexture===null||it.isBatchedMesh&&$t.batchingColor===!1&&it.colorTexture!==null||it.isInstancedMesh&&$t.instancing===!1||!it.isInstancedMesh&&$t.instancing===!0||it.isSkinnedMesh&&$t.skinning===!1||!it.isSkinnedMesh&&$t.skinning===!0||it.isInstancedMesh&&$t.instancingColor===!0&&it.instanceColor===null||it.isInstancedMesh&&$t.instancingColor===!1&&it.instanceColor!==null||it.isInstancedMesh&&$t.instancingMorph===!0&&it.morphTexture===null||it.isInstancedMesh&&$t.instancingMorph===!1&&it.morphTexture!==null||$t.envMap!==Wt||lt.fog===!0&&$t.fog!==Ot||$t.numClippingPlanes!==void 0&&($t.numClippingPlanes!==Ut.numPlanes||$t.numIntersection!==Ut.numIntersection)||$t.vertexAlphas!==Kt||$t.vertexTangents!==ne||$t.morphTargets!==Qt||$t.morphNormals!==ie||$t.morphColors!==Oe||$t.toneMapping!==nn||$t.morphTargetsCount!==Fe)&&(le=!0):(le=!0,$t.__version=lt.version);let Tn=$t.currentProgram;le===!0&&(Tn=ur(lt,tt,it));let ra=!1,An=!1,di=!1;const Ge=Tn.getUniforms(),wn=$t.uniforms;if(Zt.useProgram(Tn.program)&&(ra=!0,An=!0,di=!0),lt.id!==j&&(j=lt.id,An=!0),ra||X!==U){Zt.buffers.depth.getReversed()&&U.reversedDepth!==!0&&(U._reversedDepth=!0,U.updateProjectionMatrix()),Ge.setValue(W,"projectionMatrix",U.projectionMatrix),Ge.setValue(W,"viewMatrix",U.matrixWorldInverse);const Cn=Ge.map.cameraPosition;Cn!==void 0&&Cn.setValue(W,fe.setFromMatrixPosition(U.matrixWorld)),Ce.logarithmicDepthBuffer&&Ge.setValue(W,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(lt.isMeshPhongMaterial||lt.isMeshToonMaterial||lt.isMeshLambertMaterial||lt.isMeshBasicMaterial||lt.isMeshStandardMaterial||lt.isShaderMaterial)&&Ge.setValue(W,"isOrthographic",U.isOrthographicCamera===!0),X!==U&&(X=U,An=!0,di=!0)}if($t.needsLights&&(ze.state.directionalShadowMap.length>0&&Ge.setValue(W,"directionalShadowMap",ze.state.directionalShadowMap,q),ze.state.spotShadowMap.length>0&&Ge.setValue(W,"spotShadowMap",ze.state.spotShadowMap,q),ze.state.pointShadowMap.length>0&&Ge.setValue(W,"pointShadowMap",ze.state.pointShadowMap,q)),it.isSkinnedMesh){Ge.setOptional(W,it,"bindMatrix"),Ge.setOptional(W,it,"bindMatrixInverse");const Rn=it.skeleton;Rn&&(Rn.boneTexture===null&&Rn.computeBoneTexture(),Ge.setValue(W,"boneTexture",Rn.boneTexture,q))}it.isBatchedMesh&&(Ge.setOptional(W,it,"batchingTexture"),Ge.setValue(W,"batchingTexture",it._matricesTexture,q),Ge.setOptional(W,it,"batchingIdTexture"),Ge.setValue(W,"batchingIdTexture",it._indirectTexture,q),Ge.setOptional(W,it,"batchingColorTexture"),it._colorsTexture!==null&&Ge.setValue(W,"batchingColorTexture",it._colorsTexture,q));const vn=ht.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&re.update(it,ht,Tn),(An||$t.receiveShadow!==it.receiveShadow)&&($t.receiveShadow=it.receiveShadow,Ge.setValue(W,"receiveShadow",it.receiveShadow)),lt.isMeshGouraudMaterial&&lt.envMap!==null&&(wn.envMap.value=Wt,wn.flipEnvMap.value=Wt.isCubeTexture&&Wt.isRenderTargetTexture===!1?-1:1),lt.isMeshStandardMaterial&&lt.envMap===null&&tt.environment!==null&&(wn.envMapIntensity.value=tt.environmentIntensity),wn.dfgLUT!==void 0&&(wn.dfgLUT.value=a2()),An&&(Ge.setValue(W,"toneMappingExposure",w.toneMappingExposure),$t.needsLights&&To(wn,di),Ot&&lt.fog===!0&&te.refreshFogUniforms(wn,Ot),te.refreshMaterialUniforms(wn,lt,_t,Z,z.state.transmissionRenderTarget[U.id]),Du.upload(W,Vl($t),wn,q)),lt.isShaderMaterial&&lt.uniformsNeedUpdate===!0&&(Du.upload(W,Vl($t),wn,q),lt.uniformsNeedUpdate=!1),lt.isSpriteMaterial&&Ge.setValue(W,"center",it.center),Ge.setValue(W,"modelViewMatrix",it.modelViewMatrix),Ge.setValue(W,"normalMatrix",it.normalMatrix),Ge.setValue(W,"modelMatrix",it.matrixWorld),lt.isShaderMaterial||lt.isRawShaderMaterial){const Rn=lt.uniformsGroups;for(let Cn=0,fr=Rn.length;Cn<fr;Cn++){const Ai=Rn[Cn];bt.update(Ai,Tn),bt.bind(Ai,Tn)}}return Tn}function To(U,tt){U.ambientLightColor.needsUpdate=tt,U.lightProbe.needsUpdate=tt,U.directionalLights.needsUpdate=tt,U.directionalLightShadows.needsUpdate=tt,U.pointLights.needsUpdate=tt,U.pointLightShadows.needsUpdate=tt,U.spotLights.needsUpdate=tt,U.spotLightShadows.needsUpdate=tt,U.rectAreaLights.needsUpdate=tt,U.hemisphereLights.needsUpdate=tt}function Va(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(U,tt,ht){const lt=A.get(U);lt.__autoAllocateDepthBuffer=U.resolveDepthBuffer===!1,lt.__autoAllocateDepthBuffer===!1&&(lt.__useRenderToTexture=!1),A.get(U.texture).__webglTexture=tt,A.get(U.depthTexture).__webglTexture=lt.__autoAllocateDepthBuffer?void 0:ht,lt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(U,tt){const ht=A.get(U);ht.__webglFramebuffer=tt,ht.__useDefaultFramebuffer=tt===void 0};const ka=W.createFramebuffer();this.setRenderTarget=function(U,tt=0,ht=0){V=U,G=tt,$=ht;let lt=null,it=!1,Ot=!1;if(U){const Bt=A.get(U);if(Bt.__useDefaultFramebuffer!==void 0){Zt.bindFramebuffer(W.FRAMEBUFFER,Bt.__webglFramebuffer),D.copy(U.viewport),H.copy(U.scissor),Q=U.scissorTest,Zt.viewport(D),Zt.scissor(H),Zt.setScissorTest(Q),j=-1;return}else if(Bt.__webglFramebuffer===void 0)q.setupRenderTarget(U);else if(Bt.__hasExternalTextures)q.rebindTextures(U,A.get(U.texture).__webglTexture,A.get(U.depthTexture).__webglTexture);else if(U.depthBuffer){const ne=U.depthTexture;if(Bt.__boundDepthTexture!==ne){if(ne!==null&&A.has(ne)&&(U.width!==ne.image.width||U.height!==ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(U)}}const Wt=U.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(Ot=!0);const Kt=A.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(Kt[tt])?lt=Kt[tt][ht]:lt=Kt[tt],it=!0):U.samples>0&&q.useMultisampledRTT(U)===!1?lt=A.get(U).__webglMultisampledFramebuffer:Array.isArray(Kt)?lt=Kt[ht]:lt=Kt,D.copy(U.viewport),H.copy(U.scissor),Q=U.scissorTest}else D.copy(nt).multiplyScalar(_t).floor(),H.copy(pt).multiplyScalar(_t).floor(),Q=Nt;if(ht!==0&&(lt=ka),Zt.bindFramebuffer(W.FRAMEBUFFER,lt)&&Zt.drawBuffers(U,lt),Zt.viewport(D),Zt.scissor(H),Zt.setScissorTest(Q),it){const Bt=A.get(U.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Bt.__webglTexture,ht)}else if(Ot){const Bt=tt;for(let Wt=0;Wt<U.textures.length;Wt++){const Kt=A.get(U.textures[Wt]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+Wt,Kt.__webglTexture,ht,Bt)}}else if(U!==null&&ht!==0){const Bt=A.get(U.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Bt.__webglTexture,ht)}j=-1},this.readRenderTargetPixels=function(U,tt,ht,lt,it,Ot,kt,Bt=0){if(!(U&&U.isWebGLRenderTarget)){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Wt=A.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&kt!==void 0&&(Wt=Wt[kt]),Wt){Zt.bindFramebuffer(W.FRAMEBUFFER,Wt);try{const Kt=U.textures[Bt],ne=Kt.format,Qt=Kt.type;if(!Ce.textureFormatReadable(ne)){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ce.textureTypeReadable(Qt)){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}tt>=0&&tt<=U.width-lt&&ht>=0&&ht<=U.height-it&&(U.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Bt),W.readPixels(tt,ht,lt,it,Rt.convert(ne),Rt.convert(Qt),Ot))}finally{const Kt=V!==null?A.get(V).__webglFramebuffer:null;Zt.bindFramebuffer(W.FRAMEBUFFER,Kt)}}},this.readRenderTargetPixelsAsync=async function(U,tt,ht,lt,it,Ot,kt,Bt=0){if(!(U&&U.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Wt=A.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&kt!==void 0&&(Wt=Wt[kt]),Wt)if(tt>=0&&tt<=U.width-lt&&ht>=0&&ht<=U.height-it){Zt.bindFramebuffer(W.FRAMEBUFFER,Wt);const Kt=U.textures[Bt],ne=Kt.format,Qt=Kt.type;if(!Ce.textureFormatReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ce.textureTypeReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ie=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,ie),W.bufferData(W.PIXEL_PACK_BUFFER,Ot.byteLength,W.STREAM_READ),U.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Bt),W.readPixels(tt,ht,lt,it,Rt.convert(ne),Rt.convert(Qt),0);const Oe=V!==null?A.get(V).__webglFramebuffer:null;Zt.bindFramebuffer(W.FRAMEBUFFER,Oe);const nn=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await ET(W,nn,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,ie),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Ot),W.deleteBuffer(ie),W.deleteSync(nn),Ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(U,tt=null,ht=0){const lt=Math.pow(2,-ht),it=Math.floor(U.image.width*lt),Ot=Math.floor(U.image.height*lt),kt=tt!==null?tt.x:0,Bt=tt!==null?tt.y:0;q.setTexture2D(U,0),W.copyTexSubImage2D(W.TEXTURE_2D,ht,0,0,kt,Bt,it,Ot),Zt.unbindTexture()};const Rs=W.createFramebuffer(),qa=W.createFramebuffer();this.copyTextureToTexture=function(U,tt,ht=null,lt=null,it=0,Ot=null){Ot===null&&(it!==0?(Ll("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ot=it,it=0):Ot=0);let kt,Bt,Wt,Kt,ne,Qt,ie,Oe,nn;const Je=U.isCompressedTexture?U.mipmaps[Ot]:U.image;if(ht!==null)kt=ht.max.x-ht.min.x,Bt=ht.max.y-ht.min.y,Wt=ht.isBox3?ht.max.z-ht.min.z:1,Kt=ht.min.x,ne=ht.min.y,Qt=ht.isBox3?ht.min.z:0;else{const vn=Math.pow(2,-it);kt=Math.floor(Je.width*vn),Bt=Math.floor(Je.height*vn),U.isDataArrayTexture?Wt=Je.depth:U.isData3DTexture?Wt=Math.floor(Je.depth*vn):Wt=1,Kt=0,ne=0,Qt=0}lt!==null?(ie=lt.x,Oe=lt.y,nn=lt.z):(ie=0,Oe=0,nn=0);const Fe=Rt.convert(tt.format),$t=Rt.convert(tt.type);let ze;tt.isData3DTexture?(q.setTexture3D(tt,0),ze=W.TEXTURE_3D):tt.isDataArrayTexture||tt.isCompressedArrayTexture?(q.setTexture2DArray(tt,0),ze=W.TEXTURE_2D_ARRAY):(q.setTexture2D(tt,0),ze=W.TEXTURE_2D),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,tt.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,tt.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,tt.unpackAlignment);const le=W.getParameter(W.UNPACK_ROW_LENGTH),Tn=W.getParameter(W.UNPACK_IMAGE_HEIGHT),ra=W.getParameter(W.UNPACK_SKIP_PIXELS),An=W.getParameter(W.UNPACK_SKIP_ROWS),di=W.getParameter(W.UNPACK_SKIP_IMAGES);W.pixelStorei(W.UNPACK_ROW_LENGTH,Je.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Je.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,Kt),W.pixelStorei(W.UNPACK_SKIP_ROWS,ne),W.pixelStorei(W.UNPACK_SKIP_IMAGES,Qt);const Ge=U.isDataArrayTexture||U.isData3DTexture,wn=tt.isDataArrayTexture||tt.isData3DTexture;if(U.isDepthTexture){const vn=A.get(U),Rn=A.get(tt),Cn=A.get(vn.__renderTarget),fr=A.get(Rn.__renderTarget);Zt.bindFramebuffer(W.READ_FRAMEBUFFER,Cn.__webglFramebuffer),Zt.bindFramebuffer(W.DRAW_FRAMEBUFFER,fr.__webglFramebuffer);for(let Ai=0;Ai<Wt;Ai++)Ge&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,A.get(U).__webglTexture,it,Qt+Ai),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,A.get(tt).__webglTexture,Ot,nn+Ai)),W.blitFramebuffer(Kt,ne,kt,Bt,ie,Oe,kt,Bt,W.DEPTH_BUFFER_BIT,W.NEAREST);Zt.bindFramebuffer(W.READ_FRAMEBUFFER,null),Zt.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(it!==0||U.isRenderTargetTexture||A.has(U)){const vn=A.get(U),Rn=A.get(tt);Zt.bindFramebuffer(W.READ_FRAMEBUFFER,Rs),Zt.bindFramebuffer(W.DRAW_FRAMEBUFFER,qa);for(let Cn=0;Cn<Wt;Cn++)Ge?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,vn.__webglTexture,it,Qt+Cn):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,vn.__webglTexture,it),wn?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Rn.__webglTexture,Ot,nn+Cn):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Rn.__webglTexture,Ot),it!==0?W.blitFramebuffer(Kt,ne,kt,Bt,ie,Oe,kt,Bt,W.COLOR_BUFFER_BIT,W.NEAREST):wn?W.copyTexSubImage3D(ze,Ot,ie,Oe,nn+Cn,Kt,ne,kt,Bt):W.copyTexSubImage2D(ze,Ot,ie,Oe,Kt,ne,kt,Bt);Zt.bindFramebuffer(W.READ_FRAMEBUFFER,null),Zt.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else wn?U.isDataTexture||U.isData3DTexture?W.texSubImage3D(ze,Ot,ie,Oe,nn,kt,Bt,Wt,Fe,$t,Je.data):tt.isCompressedArrayTexture?W.compressedTexSubImage3D(ze,Ot,ie,Oe,nn,kt,Bt,Wt,Fe,Je.data):W.texSubImage3D(ze,Ot,ie,Oe,nn,kt,Bt,Wt,Fe,$t,Je):U.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,Ot,ie,Oe,kt,Bt,Fe,$t,Je.data):U.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,Ot,ie,Oe,Je.width,Je.height,Fe,Je.data):W.texSubImage2D(W.TEXTURE_2D,Ot,ie,Oe,kt,Bt,Fe,$t,Je);W.pixelStorei(W.UNPACK_ROW_LENGTH,le),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Tn),W.pixelStorei(W.UNPACK_SKIP_PIXELS,ra),W.pixelStorei(W.UNPACK_SKIP_ROWS,An),W.pixelStorei(W.UNPACK_SKIP_IMAGES,di),Ot===0&&tt.generateMipmaps&&W.generateMipmap(ze),Zt.unbindTexture()},this.initRenderTarget=function(U){A.get(U).__webglFramebuffer===void 0&&q.setupRenderTarget(U)},this.initTexture=function(U){U.isCubeTexture?q.setTextureCube(U,0):U.isData3DTexture?q.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?q.setTexture2DArray(U,0):q.setTexture2D(U,0),Zt.unbindTexture()},this.resetState=function(){G=0,$=0,V=null,Zt.reset(),Ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Re._getDrawingBufferColorSpace(t),n.unpackColorSpace=Re._getUnpackColorSpace()}}const Al=new ut;function Ei(c,t,n,a,r,o){const u=2*Math.PI*r/4,f=Math.max(o-2*r,0),p=Math.PI/4;Al.copy(t),Al[a]=0,Al.normalize();const h=.5*u/(u+f),g=1-Al.angleTo(c)/p;return Math.sign(Al[n])===1?g*h:f/(u+f)+h+h*(1-g)}class jp extends xo{constructor(t=1,n=1,a=1,r=2,o=.1){const u=r*2+1;if(o=Math.min(t/2,n/2,a/2,o),super(1,1,1,u,u,u),this.type="RoundedBoxGeometry",this.parameters={width:t,height:n,depth:a,segments:r,radius:o},u===1)return;const f=this.toNonIndexed();this.index=null,this.attributes.position=f.attributes.position,this.attributes.normal=f.attributes.normal,this.attributes.uv=f.attributes.uv;const p=new ut,h=new ut,g=new ut(t,n,a).divideScalar(2).subScalar(o),_=this.attributes.position.array,v=this.attributes.normal.array,y=this.attributes.uv.array,M=_.length/6,b=new ut,S=.5/u;for(let x=0,T=0;x<_.length;x+=3,T+=2)switch(p.fromArray(_,x),h.copy(p),h.x-=Math.sign(h.x)*S,h.y-=Math.sign(h.y)*S,h.z-=Math.sign(h.z)*S,h.normalize(),_[x+0]=g.x*Math.sign(p.x)+h.x*o,_[x+1]=g.y*Math.sign(p.y)+h.y*o,_[x+2]=g.z*Math.sign(p.z)+h.z*o,v[x+0]=h.x,v[x+1]=h.y,v[x+2]=h.z,Math.floor(x/M)){case 0:b.set(1,0,0),y[T+0]=Ei(b,h,"z","y",o,a),y[T+1]=1-Ei(b,h,"y","z",o,n);break;case 1:b.set(-1,0,0),y[T+0]=1-Ei(b,h,"z","y",o,a),y[T+1]=1-Ei(b,h,"y","z",o,n);break;case 2:b.set(0,1,0),y[T+0]=1-Ei(b,h,"x","z",o,t),y[T+1]=Ei(b,h,"z","x",o,a);break;case 3:b.set(0,-1,0),y[T+0]=1-Ei(b,h,"x","z",o,t),y[T+1]=1-Ei(b,h,"z","x",o,a);break;case 4:b.set(0,0,1),y[T+0]=1-Ei(b,h,"x","y",o,t),y[T+1]=1-Ei(b,h,"y","x",o,n);break;case 5:b.set(0,0,-1),y[T+0]=Ei(b,h,"x","y",o,t),y[T+1]=1-Ei(b,h,"y","x",o,n);break}}static fromJSON(t){return new jp(t.width,t.height,t.depth,t.segments,t.radius)}}const r2=18,Od=1.2,o2=28;class l2{ctx=null;masterGain=null;lastPlayTime=0;ensureContext(){return this.ctx||(this.ctx=new AudioContext,this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=.55,this.masterGain.connect(this.ctx.destination)),this.ctx.state==="suspended"&&this.ctx.resume(),this.ctx}playImpact(t,n){if(n<Od)return;const a=performance.now();if(a-this.lastPlayTime<o2)return;this.lastPlayTime=a;const r=this.ensureContext(),o=this.masterGain,u=Math.min((n-Od)/(r2-Od),1);t==="table"?this.playTableHit(r,o,u):this.playDiceHit(r,o,u)}playTableHit(t,n,a){const r=t.currentTime,o=.18+a*.42,u=.04+a*.06,f=.02+a*.03,p=this.createNoiseBuffer(t,f),h=t.createBufferSource();h.buffer=p;const g=t.createBiquadFilter();g.type="lowpass",g.frequency.setValueAtTime(800+a*1200,r),g.Q.value=.7;const _=t.createGain();_.gain.setValueAtTime(o*.7,r),_.gain.exponentialRampToValueAtTime(.001,r+u),h.connect(g).connect(_).connect(n),h.start(r),h.stop(r+u+.01);const v=t.createOscillator();v.type="sine",v.frequency.setValueAtTime(90+a*50,r),v.frequency.exponentialRampToValueAtTime(40,r+u);const y=t.createGain();y.gain.setValueAtTime(o*.5,r),y.gain.exponentialRampToValueAtTime(.001,r+u),v.connect(y).connect(n),v.start(r),v.stop(r+u+.01)}playDiceHit(t,n,a){const r=t.currentTime,o=.12+a*.3,u=.018+a*.032,f=.005+a*.008,p=this.createNoiseBuffer(t,f),h=t.createBufferSource();h.buffer=p;const g=t.createBiquadFilter();g.type="highpass",g.frequency.setValueAtTime(1200,r),g.Q.value=.5;const _=t.createBiquadFilter();_.type="lowpass",_.frequency.setValueAtTime(6e3+a*2e3,r),_.Q.value=.6;const v=t.createGain();v.gain.setValueAtTime(o*.9,r),v.gain.exponentialRampToValueAtTime(.001,r+u*.6),h.connect(g).connect(_).connect(v).connect(n),h.start(r),h.stop(r+u+.01);const y=420+a*180,M=y*1.47;for(const b of[y,M]){const S=t.createOscillator();S.type="sine",S.frequency.setValueAtTime(b,r),S.frequency.exponentialRampToValueAtTime(b*.7,r+u);const x=t.createGain();x.gain.setValueAtTime(o*.18,r),x.gain.exponentialRampToValueAtTime(.001,r+u*.8),S.connect(x).connect(n),S.start(r),S.stop(r+u+.01)}}createNoiseBuffer(t,n){const a=Math.ceil(t.sampleRate*n),r=t.createBuffer(1,a,t.sampleRate),o=r.getChannelData(0);for(let u=0;u<a;u++)o[u]=Math.random()*2-1;return r}dispose(){this.ctx&&(this.ctx.close(),this.ctx=null,this.masterGain=null)}}const oo=1.36,Ts=oo/2,c2=6.8,Js=.9,Ss=8,rx=1735242,ey=[3,4,1,6,2,5],u2={1:[[0,0]],2:[[-.52,-.52],[.52,.52]],3:[[-.52,-.52],[0,0],[.52,.52]],4:[[-.52,-.52],[.52,-.52],[-.52,.52],[.52,.52]],5:[[-.52,-.52],[.52,-.52],[0,0],[-.52,.52],[.52,.52]],6:[[-.52,-.52],[.52,-.52],[-.52,0],[.52,0],[-.52,.52],[.52,.52]]},bu=16777215,f2=15895426;function h2({diceCount:c=5,maxAttempts:t=3,onDiceResult:n,hasPendingPlacement:a=!1,onCommitPlacement:r}){const o=Ie.useRef(null),u=Ie.useRef(()=>{}),f=Ie.useRef(()=>{}),p=Ie.useRef(!1),[h,g]=Ie.useState(!1),[_,v]=Ie.useState([]),[y,M]=Ie.useState(0),[b,S]=Ie.useState(()=>Array(c).fill(!1)),x=Ie.useRef(b);x.current=b;const T=Ie.useRef(y);T.current=y;const C=Ie.useRef([]),L=Ie.useRef(n);L.current=n;const z=Ie.useCallback(j=>{p.current||T.current<1||T.current>=t||S(X=>{const D=[...X];D[j]=!D[j];const H=C.current[j];if(H){const Q=H.mesh.material,ft=D[j]?f2:bu;Q.forEach(mt=>mt.color.set(ft))}return D})},[t]),B=Ie.useCallback(()=>{M(0),v([]),S(Array(c).fill(!1)),C.current.forEach(j=>{j.mesh.material.forEach(D=>D.color.set(bu))}),f.current()},[c]),P=Ie.useRef(r);P.current=r;const Y=Ie.useCallback(()=>{P.current?.(),M(0),T.current=0,v([]);const j=Array(c).fill(!1);S(j),x.current=j,C.current.forEach(X=>{X.mesh.material.forEach(H=>H.color.set(bu))}),u.current()},[c]),w=Ie.useCallback(()=>{P.current?.(),B()},[B]);Ie.useEffect(()=>{const j=o.current;if(!j)return;const X=new jT;X.background=new Ue(rx);const D=new Bu(-1,1,1,-1,.1,80);D.position.set(0,14,0),D.up.set(0,0,-1),D.lookAt(0,0,0);const H=new s2({antialias:!0,alpha:!0});H.setPixelRatio(Math.min(window.devicePixelRatio,2)),H.outputColorSpace=qn,H.toneMapping=Ii,H.shadowMap.enabled=!0,H.shadowMap.type=xx,H.domElement.style.width="100%",H.domElement.style.height="100%",H.domElement.style.display="block",H.domElement.style.touchAction="manipulation",H.domElement.style.userSelect="none",j.appendChild(H.domElement);const Q=new r1(16777215,.85);X.add(Q);const ft=new s1(16777215,1.1);ft.position.set(3,18,-2),ft.castShadow=!0,ft.shadow.mapSize.width=2048,ft.shadow.mapSize.height=2048,ft.shadow.camera.near=1,ft.shadow.camera.far=40,ft.shadow.camera.left=-30,ft.shadow.camera.right=30,ft.shadow.camera.top=20,ft.shadow.camera.bottom=-20,X.add(ft);const mt=new Hi(new Hl(1,1),new N_({color:rx,roughness:.96,metalness:0}));mt.rotation.x=-Math.PI/2,mt.position.y=0,mt.receiveShadow=!0,X.add(mt);const F=new Fb({gravity:new R(0,-40,0),allowSleep:!0});F.broadphase=new lo(F),F.solver.iterations=14;const Z=new Uu("table"),_t=new Uu("die");F.addContactMaterial(new fo(_t,Z,{friction:.24,restitution:.36})),F.addContactMaterial(new fo(_t,_t,{friction:.3,restitution:.4}));const Tt=new Gt({type:Gt.STATIC,shape:new yE,material:Z});Tt.quaternion.setFromEuler(-Math.PI/2,0,0),F.addBody(Tt);const Ft=new jp(oo,oo,oo,6,.16),nt=[];for(let q=0;q<c;q+=1){const st=ey.map(wt=>new N_({map:d2(wt),color:bu,roughness:.38,metalness:.02})),gt=new Hi(Ft,st);gt.castShadow=!0,gt.receiveShadow=!0,gt.userData.dieIndex=q,X.add(gt);const at=new Gt({mass:1,shape:new ar(new R(Ts,Ts,Ts)),material:_t,sleepSpeedLimit:.14,sleepTimeLimit:.18});at.linearDamping=.17,at.angularDamping=.19,at.allowSleep=!0,F.addBody(at),nt.push({mesh:gt,body:at,locked:!1})}C.current=nt;const pt=new l2,Nt=new Set(nt.map(q=>q.body));nt.forEach(q=>{q.body.addEventListener("collide",st=>{const{body:gt,contact:at}=st,wt=Math.abs(at.getImpactVelocityAlongNormal());Nt.has(gt)?pt.playImpact("dice",wt):pt.playImpact("table",wt)})});const Xt=new c1,Vt=new Le,me=q=>{if(p.current)return;const st=H.domElement.getBoundingClientRect();Vt.x=(q.clientX-st.left)/st.width*2-1,Vt.y=-((q.clientY-st.top)/st.height)*2+1,Xt.setFromCamera(Vt,D);const gt=nt.map(wt=>wt.mesh),at=Xt.intersectObjects(gt,!1);if(at.length>0){const Et=at[0].object.userData.dieIndex;Et!==void 0&&z(Et)}};H.domElement.addEventListener("pointerdown",me);let Xe={minX:-6,maxX:6,minZ:-3,maxZ:3,depth:6},fe=[];const ve=(q,st)=>{fe.forEach(Ut=>F.removeBody(Ut)),fe=[];const gt=new ar(new R(Js/2,Ss/2,st/2)),at=new ar(new R(q/2,Ss/2,Js/2));[{shape:gt,position:new R(-q/2-Js/2,Ss/2,0)},{shape:gt,position:new R(q/2+Js/2,Ss/2,0)},{shape:at,position:new R(0,Ss/2,-st/2-Js/2)},{shape:at,position:new R(0,Ss/2,st/2+Js/2)}].forEach(({shape:Ut,position:Lt})=>{const Ct=new Gt({type:Gt.STATIC,shape:Ut,material:Z});Ct.position.copy(Lt),F.addBody(Ct),fe.push(Ct)});const Et=oo*1.8,Pt=new ar(new R(Et/2,Ss/2,Js/2)),te=q/2,Mt=st/2;[{x:-te,z:-Mt,angle:Math.PI/4},{x:te,z:-Mt,angle:-Math.PI/4},{x:-te,z:Mt,angle:-Math.PI/4},{x:te,z:Mt,angle:Math.PI/4}].forEach(({x:Ut,z:Lt,angle:Ct})=>{const re=new Gt({type:Gt.STATIC,shape:Pt,material:Z});re.position.set(Ut,Ss/2,Lt),re.quaternion.setFromEuler(0,Ct,0),F.addBody(re),fe.push(re)})},Te=()=>{const q=j.clientWidth,st=j.clientHeight;if(!q||!st)return;const gt=q/st,at=c2,wt=at*gt;D.left=-wt,D.right=wt,D.top=at,D.bottom=-at,D.updateProjectionMatrix();const Et=wt*2,Pt=at*2;mt.scale.set(Et,Pt,1),Xe={minX:-Et/2,maxX:Et/2,minZ:-Pt/2,maxZ:Pt/2,width:Et,depth:Pt},ve(Et,Pt),H.setSize(q,st,!0),H.render(X,D)},se=new ResizeObserver(Te);se.observe(j),Te();let Ze=0;const W=()=>{nt.forEach(q=>{q.body.type=Gt.STATIC,q.body.velocity.setZero(),q.body.angularVelocity.setZero(),q.body.position.set(0,-10,0),q.mesh.position.set(0,-10,0)})},Ke=()=>{if(p.current||T.current>=t)return;p.current=!0,g(!0),Ze=0;const q=x.current,st=T.current===0,gt=Xe.minX+oo*.8;let at=0;nt.forEach((wt,Et)=>{if(!st&&q[Et]){wt.body.type=Gt.STATIC,wt.body.velocity.setZero(),wt.body.angularVelocity.setZero();return}wt.body.type=Gt.DYNAMIC,wt.body.mass=1,wt.body.updateMassProperties(),wt.body.wakeUp(),wt.body.velocity.setZero(),wt.body.angularVelocity.setZero(),wt.body.force.setZero(),wt.body.torque.setZero();const Pt=gt+at*.56+Oi(-.1,.1),te=4+at*.22,Mt=Oi(-Xe.depth*.25,Xe.depth*.25);wt.body.position.set(Pt,te,Mt);const At=new $n;At.setFromEuler(Oi(0,Math.PI),Oi(0,Math.PI),Oi(0,Math.PI),"XYZ"),wt.body.quaternion.copy(At);const Ut=new R(Oi(12.2,15.8),Oi(5.4,7.2),Oi(-1.2,1.2)),Lt=new R(Oi(-.2,.2),Oi(-.08,.08),Oi(-.2,.2));wt.body.applyImpulse(Ut,Lt),at++})};u.current=Ke,f.current=W,W();const _e=q=>{if(q.code!=="Space")return;const st=q.target;st?.tagName==="INPUT"||st?.tagName==="TEXTAREA"||st?.isContentEditable||(q.preventDefault(),Ke())};window.addEventListener("keydown",_e);const Ce=new l1,Zt=1/60;let I=0;const A=()=>{const q=Math.min(Ce.getDelta(),.04);if(F.step(Zt,q,4),nt.forEach(st=>{m2(st.body,Xe),st.mesh.position.set(st.body.position.x,st.body.position.y,st.body.position.z),st.mesh.quaternion.set(st.body.quaternion.x,st.body.quaternion.y,st.body.quaternion.z,st.body.quaternion.w)}),p.current){const st=x.current;if(nt.every((at,wt)=>{if(st[wt]||at.body.sleepState===Gt.SLEEPING)return!0;const Et=at.body.velocity.lengthSquared()<.02,Pt=at.body.angularVelocity.lengthSquared()<.03;return Et&&Pt&&at.body.position.y<=Ts+.08})){if(Ze+=q,Ze>.26){p.current=!1,g(!1);const at=nt.map(Et=>p2(Et.body));v(at),M(Et=>Et+1);const wt=at.reduce((Et,Pt)=>Et+Pt,0);L.current?.({total:wt,values:at,attempt:T.current+1})}}else Ze=0}H.render(X,D),I=window.requestAnimationFrame(A)};return A(),()=>{window.cancelAnimationFrame(I),se.disconnect(),window.removeEventListener("keydown",_e),H.domElement.removeEventListener("pointerdown",me),pt.dispose(),j.removeChild(H.domElement),fe.forEach(q=>F.removeBody(q)),F.removeBody(Tt),nt.forEach(q=>{F.removeBody(q.body),X.remove(q.mesh)}),mt.geometry.dispose(),mt.material.dispose(),X.remove(mt),Ft.dispose(),nt.forEach(q=>{q.mesh.material.forEach(st=>{st.map?.dispose(),st.dispose()})}),H.dispose()}},[c,t,z]);const O=_.reduce((j,X)=>j+X,0),G=y>=t&&!h,$=!h&&y<t,V=!h&&y>=1&&y<t;return qt.jsxs("div",{className:"flex h-full w-full flex-col",children:[qt.jsx("div",{className:"min-h-0 flex-1 overflow-hidden rounded-3xl bg-[#1a7a4a]",children:qt.jsx("div",{ref:o,className:"h-full w-full"})}),qt.jsxs("div",{className:"flex items-center justify-between px-2 py-0",style:{fontFamily:"'Inter', sans-serif"},children:[qt.jsx("div",{className:"flex items-center gap-2.5",children:_.length>0&&!h?qt.jsxs(qt.Fragment,{children:[qt.jsx("div",{className:"flex items-center gap-1",children:_.map((j,X)=>qt.jsx("button",{type:"button",onClick:()=>V&&z(X),className:`grid h-6 w-6 select-none place-items-center rounded-md border text-[11px] font-bold shadow-sm transition-colors ${b[X]?"border-red-400 bg-red-100 text-red-800":"border-slate-300 bg-white text-slate-800"} ${V?"cursor-pointer touch-manipulation hover:border-slate-400 active:scale-95":""}`,"aria-label":`Die ${X+1}`,children:j},X))}),qt.jsx("span",{className:"text-[11px] font-medium text-slate-400",children:"="}),qt.jsx("span",{className:"text-base font-bold text-slate-800",children:O})]}):qt.jsx("span",{className:"text-sm font-medium text-slate-400",children:h?"Rolling...":""})}),qt.jsxs("div",{className:"flex items-center gap-3",children:[!h&&y>0&&qt.jsx("span",{className:"text-xs font-semibold text-slate-400",children:G&&!a?"Place on board":`${y} of ${t}`}),G?a?qt.jsx("button",{onClick:w,className:"w-24 touch-manipulation rounded-full border border-emerald-400 bg-emerald-50 py-1 text-center text-[10px] font-bold uppercase tracking-widest text-emerald-700 shadow-sm transition hover:bg-emerald-100 active:scale-[0.98]",children:"Confirm"}):null:qt.jsx("button",{disabled:!$,onClick:()=>{a?Y():u.current()},className:"w-20 touch-manipulation rounded-full border border-slate-300 bg-white/90 py-1 text-center text-[10px] font-bold uppercase tracking-widest text-slate-700 shadow-sm transition hover:bg-white active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-45",children:"Play"})]})]})]})}function d2(c){const t=document.createElement("canvas");t.width=256,t.height=256;const n=t.getContext("2d");if(!n){const u=new D_(t);return u.colorSpace=qn,u}n.fillStyle="#ffffff",n.fillRect(0,0,t.width,t.height),n.lineWidth=3,n.strokeStyle="#e2e8f0",n.strokeRect(4,4,t.width-8,t.height-8);const a=26,r=u2[c];n.fillStyle="#000000",r.forEach(([u,f])=>{const p=t.width/2+u*112,h=t.height/2+f*112;n.beginPath(),n.arc(p,h,a,0,Math.PI*2),n.fill()});const o=new D_(t);return o.colorSpace=qn,o.anisotropy=4,o.minFilter=Es,o.magFilter=zn,o.needsUpdate=!0,o}function Oi(c,t){return c+Math.random()*(t-c)}function p2(c){const t=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],n=ey;let a=-1/0,r=1;const o=new R;for(let u=0;u<6;u++)c.quaternion.vmult(t[u],o),o.y>a&&(a=o.y,r=n[u]);return r}function m2(c,t){const n=t.minX+Ts,a=t.maxX-Ts,r=t.minZ+Ts,o=t.maxZ-Ts;c.position.x<n?(c.position.x=n,c.velocity.x=Math.abs(c.velocity.x)*.55):c.position.x>a&&(c.position.x=a,c.velocity.x=-Math.abs(c.velocity.x)*.55),c.position.z<r?(c.position.z=r,c.velocity.z=Math.abs(c.velocity.z)*.55):c.position.z>o&&(c.position.z=o,c.velocity.z=-Math.abs(c.velocity.z)*.55)}const zd=["down","up","desordem","seco"],g2=[...Cl],v2=[...Cl].reverse(),_2={down:{},up:{},desordem:{},seco:{}};function x2(){const[c,t]=Ie.useState(_2),[n,a]=Ie.useState(null),[r,o]=Ie.useState(!1),[u,f]=Ie.useState(null),p=n?.attempt??0,h=Ie.useMemo(()=>{const S=new Set;for(const x of zd){const T=c[x];if(x==="down"){const C=g2.find(L=>T[L]==null);C&&S.add(`${x}:${C}`);continue}if(x==="up"){const C=v2.find(L=>T[L]==null);C&&S.add(`${x}:${C}`);continue}if(x==="desordem"){Cl.forEach(C=>{T[C]==null&&S.add(`${x}:${C}`)});continue}x==="seco"&&p===1&&Cl.forEach(C=>{T[C]==null&&S.add(`${x}:${C}`)})}return S},[c,p]),g=Ie.useMemo(()=>zd.every(S=>Cl.every(x=>c[S][x]!=null)),[c]),_=Ie.useMemo(()=>zd.reduce((S,x)=>S+lx(c[x]).combined,0),[c]),v=Ie.useCallback(S=>{a(S),o(!0),f(null)},[]),y=Ie.useCallback((S,x)=>{if(!r||!n)return;const T=`${S}:${x}`;if(!h.has(T)||c[S][x]!=null)return;if(u?.columnId===S&&u.rowId===x){f(null);return}const C=y2(x,n.values,c[S]);f({columnId:S,rowId:x,value:C})},[r,h,u,n,c]),M=Ie.useCallback(()=>{if(!u)return;const{columnId:S,rowId:x,value:T}=u;t(C=>({...C,[S]:{...C[S],[x]:T}})),f(null),o(!1),a(null)},[u]),b=Ie.useCallback(()=>{t({down:{},up:{},desordem:{},seco:{}}),a(null),o(!1),f(null)},[]);return qt.jsx("main",{className:"min-h-screen touch-manipulation bg-white px-1 py-1 sm:px-8 sm:py-8",children:qt.jsxs("section",{className:"mx-auto flex w-full max-w-[1400px] flex-col gap-0 lg:flex-row lg:items-start lg:gap-8",children:[qt.jsx("div",{className:"order-2 flex flex-col items-center gap-0 lg:order-1 lg:shrink-0 lg:items-start lg:gap-5",children:qt.jsx(vM,{sheet:c,openCells:h,clickable:r,pendingPlacement:u,onCellClick:y})}),qt.jsx("div",{className:"order-1 min-w-0 flex-1 lg:order-2 lg:sticky lg:top-8 lg:pt-[30px]",children:g?qt.jsxs("div",{className:"flex min-h-[320px] flex-col items-center justify-center gap-6 rounded-3xl border border-[#ccc8c0] bg-[#f7f4ef] px-8 py-10 lg:h-[60vh]",style:{fontFamily:"'Inter', sans-serif"},children:[qt.jsx("p",{className:"text-[11px] font-bold uppercase tracking-[0.22em] text-[#8a8070]",children:"Game Over"}),qt.jsx("p",{className:"text-7xl font-bold leading-none text-[#2d2820]",style:{fontFamily:"'Kalam', cursive"},children:_}),qt.jsx("p",{className:"text-sm text-[#8a8070]",children:"final score"}),qt.jsx("button",{onClick:b,className:"mt-2 rounded-full border border-[#ccc8c0] bg-white px-8 py-2.5 text-xs font-bold uppercase tracking-widest text-[#5a5448] shadow-sm transition hover:bg-[#f0ece4]",children:"New Game"})]}):qt.jsx("div",{className:"h-[30vh] min-h-[180px] min-w-0 sm:h-[38vh] lg:h-[421px]",children:qt.jsx(h2,{diceCount:5,maxAttempts:3,onDiceResult:v,hasPendingPlacement:u!=null,onCommitPlacement:M})})})]})})}function y2(c,t,n){const a=S2(t),r=t.reduce((o,u)=>o+u,0);switch(c){case"ones":return ro(a,1);case"twos":return ro(a,2);case"threes":return ro(a,3);case"fours":return ro(a,4);case"fives":return ro(a,5);case"sixes":return ro(a,6);case"quadra":{const o=a.findIndex((u,f)=>f>0&&u>=4);return o>0?20+4*o:0}case"full":return E2(a)?30+r:0;case"seqLow":return ox(t,[1,2,3,4,5])?35+r:0;case"seqHigh":return ox(t,[2,3,4,5,6])?40+r:0;case"min":{const o=n?.max;return o==null||r<o?r:0}case"max":{const o=n?.min;return o==null||r>o?r:0}case"yam":return M2(a,5)?50+r:0}}function S2(c){const t=Array(7).fill(0);return c.forEach(n=>{n>=1&&n<=6&&(t[n]+=1)}),t}function ro(c,t){return c[t]*t}function M2(c,t){return c.some(n=>n===t)}function E2(c){const t=c.filter(n=>n>0);return t.length===2&&t.includes(3)&&t.includes(2)}function ox(c,t){const n=[...new Set(c)].sort((a,r)=>a-r);return n.length!==t.length?!1:t.every((a,r)=>n[r]===a)}mM.createRoot(document.getElementById("root")).render(qt.jsx(Ie.StrictMode,{children:qt.jsx(x2,{})}));
