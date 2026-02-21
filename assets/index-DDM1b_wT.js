(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();var Vh={exports:{}},gl={};var wv;function cM(){if(wv)return gl;wv=1;var c=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,r,o){var u=null;if(o!==void 0&&(u=""+o),r.key!==void 0&&(u=""+r.key),"key"in r){o={};for(var f in r)f!=="key"&&(o[f]=r[f])}else o=r;return r=o.ref,{$$typeof:c,type:a,key:u,ref:r!==void 0?r:null,props:o}}return gl.Fragment=t,gl.jsx=n,gl.jsxs=n,gl}var Rv;function uM(){return Rv||(Rv=1,Vh.exports=cM()),Vh.exports}var Rt=uM(),kh={exports:{}},he={};var Cv;function fM(){if(Cv)return he;Cv=1;var c=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),o=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.iterator;function y(I){return I===null||typeof I!="object"?null:(I=v&&I[v]||I["@@iterator"],typeof I=="function"?I:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,S={};function x(I,j,_t){this.props=I,this.context=j,this.refs=S,this.updater=_t||M}x.prototype.isReactComponent={},x.prototype.setState=function(I,j){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,j,"setState")},x.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function T(){}T.prototype=x.prototype;function C(I,j,_t){this.props=I,this.context=j,this.refs=S,this.updater=_t||M}var N=C.prototype=new T;N.constructor=C,b(N,x.prototype),N.isPureReactComponent=!0;var U=Array.isArray;function P(){}var B={H:null,A:null,T:null,S:null},X=Object.prototype.hasOwnProperty;function w(I,j,_t){var At=_t.ref;return{$$typeof:c,type:I,key:j,ref:At!==void 0?At:null,props:_t}}function O(I,j){return w(I.type,j,I.props)}function H(I){return typeof I=="object"&&I!==null&&I.$$typeof===c}function $(I){var j={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(_t){return j[_t]})}var V=/\/+/g;function K(I,j){return typeof I=="object"&&I!==null&&I.key!=null?$(""+I.key):j.toString(36)}function W(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(P,P):(I.status="pending",I.then(function(j){I.status==="pending"&&(I.status="fulfilled",I.value=j)},function(j){I.status==="pending"&&(I.status="rejected",I.reason=j)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function z(I,j,_t,At,Ot){var at=typeof I;(at==="undefined"||at==="boolean")&&(I=null);var dt=!1;if(I===null)dt=!0;else switch(at){case"bigint":case"string":case"number":dt=!0;break;case"object":switch(I.$$typeof){case c:case t:dt=!0;break;case g:return dt=I._init,z(dt(I._payload),j,_t,At,Ot)}}if(dt)return Ot=Ot(I),dt=At===""?"."+K(I,0):At,U(Ot)?(_t="",dt!=null&&(_t=dt.replace(V,"$&/")+"/"),z(Ot,j,_t,"",function(Xt){return Xt})):Ot!=null&&(H(Ot)&&(Ot=O(Ot,_t+(Ot.key==null||I&&I.key===Ot.key?"":(""+Ot.key).replace(V,"$&/")+"/")+dt)),j.push(Ot)),1;dt=0;var Ut=At===""?".":At+":";if(U(I))for(var Yt=0;Yt<I.length;Yt++)At=I[Yt],at=Ut+K(At,Yt),dt+=z(At,j,_t,at,Ot);else if(Yt=y(I),typeof Yt=="function")for(I=Yt.call(I),Yt=0;!(At=I.next()).done;)At=At.value,at=Ut+K(At,Yt++),dt+=z(At,j,_t,at,Ot);else if(at==="object"){if(typeof I.then=="function")return z(W(I),j,_t,At,Ot);throw j=String(I),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return dt}function G(I,j,_t){if(I==null)return I;var At=[],Ot=0;return z(I,At,"","",function(at){return j.call(_t,at,Ot++)}),At}function J(I){if(I._status===-1){var j=I._result;j=j(),j.then(function(_t){(I._status===0||I._status===-1)&&(I._status=1,I._result=_t)},function(_t){(I._status===0||I._status===-1)&&(I._status=2,I._result=_t)}),I._status===-1&&(I._status=0,I._result=j)}if(I._status===1)return I._result.default;throw I._result}var ft=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)},vt={map:G,forEach:function(I,j,_t){G(I,function(){j.apply(this,arguments)},_t)},count:function(I){var j=0;return G(I,function(){j++}),j},toArray:function(I){return G(I,function(j){return j})||[]},only:function(I){if(!H(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return he.Activity=_,he.Children=vt,he.Component=x,he.Fragment=n,he.Profiler=r,he.PureComponent=C,he.StrictMode=a,he.Suspense=p,he.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,he.__COMPILER_RUNTIME={__proto__:null,c:function(I){return B.H.useMemoCache(I)}},he.cache=function(I){return function(){return I.apply(null,arguments)}},he.cacheSignal=function(){return null},he.cloneElement=function(I,j,_t){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var At=b({},I.props),Ot=I.key;if(j!=null)for(at in j.key!==void 0&&(Ot=""+j.key),j)!X.call(j,at)||at==="key"||at==="__self"||at==="__source"||at==="ref"&&j.ref===void 0||(At[at]=j[at]);var at=arguments.length-2;if(at===1)At.children=_t;else if(1<at){for(var dt=Array(at),Ut=0;Ut<at;Ut++)dt[Ut]=arguments[Ut+2];At.children=dt}return w(I.type,Ot,At)},he.createContext=function(I){return I={$$typeof:u,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:o,_context:I},I},he.createElement=function(I,j,_t){var At,Ot={},at=null;if(j!=null)for(At in j.key!==void 0&&(at=""+j.key),j)X.call(j,At)&&At!=="key"&&At!=="__self"&&At!=="__source"&&(Ot[At]=j[At]);var dt=arguments.length-2;if(dt===1)Ot.children=_t;else if(1<dt){for(var Ut=Array(dt),Yt=0;Yt<dt;Yt++)Ut[Yt]=arguments[Yt+2];Ot.children=Ut}if(I&&I.defaultProps)for(At in dt=I.defaultProps,dt)Ot[At]===void 0&&(Ot[At]=dt[At]);return w(I,at,Ot)},he.createRef=function(){return{current:null}},he.forwardRef=function(I){return{$$typeof:f,render:I}},he.isValidElement=H,he.lazy=function(I){return{$$typeof:g,_payload:{_status:-1,_result:I},_init:J}},he.memo=function(I,j){return{$$typeof:h,type:I,compare:j===void 0?null:j}},he.startTransition=function(I){var j=B.T,_t={};B.T=_t;try{var At=I(),Ot=B.S;Ot!==null&&Ot(_t,At),typeof At=="object"&&At!==null&&typeof At.then=="function"&&At.then(P,ft)}catch(at){ft(at)}finally{j!==null&&_t.types!==null&&(j.types=_t.types),B.T=j}},he.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},he.use=function(I){return B.H.use(I)},he.useActionState=function(I,j,_t){return B.H.useActionState(I,j,_t)},he.useCallback=function(I,j){return B.H.useCallback(I,j)},he.useContext=function(I){return B.H.useContext(I)},he.useDebugValue=function(){},he.useDeferredValue=function(I,j){return B.H.useDeferredValue(I,j)},he.useEffect=function(I,j){return B.H.useEffect(I,j)},he.useEffectEvent=function(I){return B.H.useEffectEvent(I)},he.useId=function(){return B.H.useId()},he.useImperativeHandle=function(I,j,_t){return B.H.useImperativeHandle(I,j,_t)},he.useInsertionEffect=function(I,j){return B.H.useInsertionEffect(I,j)},he.useLayoutEffect=function(I,j){return B.H.useLayoutEffect(I,j)},he.useMemo=function(I,j){return B.H.useMemo(I,j)},he.useOptimistic=function(I,j){return B.H.useOptimistic(I,j)},he.useReducer=function(I,j,_t){return B.H.useReducer(I,j,_t)},he.useRef=function(I){return B.H.useRef(I)},he.useState=function(I){return B.H.useState(I)},he.useSyncExternalStore=function(I,j,_t){return B.H.useSyncExternalStore(I,j,_t)},he.useTransition=function(){return B.H.useTransition()},he.version="19.2.4",he}var Dv;function Dp(){return Dv||(Dv=1,kh.exports=fM()),kh.exports}var de=Dp(),qh={exports:{}},vl={},Xh={exports:{}},Wh={};var Nv;function hM(){return Nv||(Nv=1,(function(c){function t(z,G){var J=z.length;z.push(G);t:for(;0<J;){var ft=J-1>>>1,vt=z[ft];if(0<r(vt,G))z[ft]=G,z[J]=vt,J=ft;else break t}}function n(z){return z.length===0?null:z[0]}function a(z){if(z.length===0)return null;var G=z[0],J=z.pop();if(J!==G){z[0]=J;t:for(var ft=0,vt=z.length,I=vt>>>1;ft<I;){var j=2*(ft+1)-1,_t=z[j],At=j+1,Ot=z[At];if(0>r(_t,J))At<vt&&0>r(Ot,_t)?(z[ft]=Ot,z[At]=J,ft=At):(z[ft]=_t,z[j]=J,ft=j);else if(At<vt&&0>r(Ot,J))z[ft]=Ot,z[At]=J,ft=At;else break t}}return G}function r(z,G){var J=z.sortIndex-G.sortIndex;return J!==0?J:z.id-G.id}if(c.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var o=performance;c.unstable_now=function(){return o.now()}}else{var u=Date,f=u.now();c.unstable_now=function(){return u.now()-f}}var p=[],h=[],g=1,_=null,v=3,y=!1,M=!1,b=!1,S=!1,x=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;function N(z){for(var G=n(h);G!==null;){if(G.callback===null)a(h);else if(G.startTime<=z)a(h),G.sortIndex=G.expirationTime,t(p,G);else break;G=n(h)}}function U(z){if(b=!1,N(z),!M)if(n(p)!==null)M=!0,P||(P=!0,$());else{var G=n(h);G!==null&&W(U,G.startTime-z)}}var P=!1,B=-1,X=5,w=-1;function O(){return S?!0:!(c.unstable_now()-w<X)}function H(){if(S=!1,P){var z=c.unstable_now();w=z;var G=!0;try{t:{M=!1,b&&(b=!1,T(B),B=-1),y=!0;var J=v;try{e:{for(N(z),_=n(p);_!==null&&!(_.expirationTime>z&&O());){var ft=_.callback;if(typeof ft=="function"){_.callback=null,v=_.priorityLevel;var vt=ft(_.expirationTime<=z);if(z=c.unstable_now(),typeof vt=="function"){_.callback=vt,N(z),G=!0;break e}_===n(p)&&a(p),N(z)}else a(p);_=n(p)}if(_!==null)G=!0;else{var I=n(h);I!==null&&W(U,I.startTime-z),G=!1}}break t}finally{_=null,v=J,y=!1}G=void 0}}finally{G?$():P=!1}}}var $;if(typeof C=="function")$=function(){C(H)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,K=V.port2;V.port1.onmessage=H,$=function(){K.postMessage(null)}}else $=function(){x(H,0)};function W(z,G){B=x(function(){z(c.unstable_now())},G)}c.unstable_IdlePriority=5,c.unstable_ImmediatePriority=1,c.unstable_LowPriority=4,c.unstable_NormalPriority=3,c.unstable_Profiling=null,c.unstable_UserBlockingPriority=2,c.unstable_cancelCallback=function(z){z.callback=null},c.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<z?Math.floor(1e3/z):5},c.unstable_getCurrentPriorityLevel=function(){return v},c.unstable_next=function(z){switch(v){case 1:case 2:case 3:var G=3;break;default:G=v}var J=v;v=G;try{return z()}finally{v=J}},c.unstable_requestPaint=function(){S=!0},c.unstable_runWithPriority=function(z,G){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var J=v;v=z;try{return G()}finally{v=J}},c.unstable_scheduleCallback=function(z,G,J){var ft=c.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ft+J:ft):J=ft,z){case 1:var vt=-1;break;case 2:vt=250;break;case 5:vt=1073741823;break;case 4:vt=1e4;break;default:vt=5e3}return vt=J+vt,z={id:g++,callback:G,priorityLevel:z,startTime:J,expirationTime:vt,sortIndex:-1},J>ft?(z.sortIndex=J,t(h,z),n(p)===null&&z===n(h)&&(b?(T(B),B=-1):b=!0,W(U,J-ft))):(z.sortIndex=vt,t(p,z),M||y||(M=!0,P||(P=!0,$()))),z},c.unstable_shouldYield=O,c.unstable_wrapCallback=function(z){var G=v;return function(){var J=v;v=G;try{return z.apply(this,arguments)}finally{v=J}}}})(Wh)),Wh}var Lv;function dM(){return Lv||(Lv=1,Xh.exports=hM()),Xh.exports}var Yh={exports:{}},Kn={};var Uv;function pM(){if(Uv)return Kn;Uv=1;var c=Dp();function t(p){var h="https://react.dev/errors/"+p;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)h+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},r=Symbol.for("react.portal");function o(p,h,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:r,key:_==null?null:""+_,children:p,containerInfo:h,implementation:g}}var u=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(p,h){if(p==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Kn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Kn.createPortal=function(p,h){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(t(299));return o(p,h,null,g)},Kn.flushSync=function(p){var h=u.T,g=a.p;try{if(u.T=null,a.p=2,p)return p()}finally{u.T=h,a.p=g,a.d.f()}},Kn.preconnect=function(p,h){typeof p=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,a.d.C(p,h))},Kn.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},Kn.preinit=function(p,h){if(typeof p=="string"&&h&&typeof h.as=="string"){var g=h.as,_=f(g,h.crossOrigin),v=typeof h.integrity=="string"?h.integrity:void 0,y=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;g==="style"?a.d.S(p,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:y}):g==="script"&&a.d.X(p,{crossOrigin:_,integrity:v,fetchPriority:y,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Kn.preinitModule=function(p,h){if(typeof p=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var g=f(h.as,h.crossOrigin);a.d.M(p,{crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&a.d.M(p)},Kn.preload=function(p,h){if(typeof p=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var g=h.as,_=f(g,h.crossOrigin);a.d.L(p,g,{crossOrigin:_,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Kn.preloadModule=function(p,h){if(typeof p=="string")if(h){var g=f(h.as,h.crossOrigin);a.d.m(p,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else a.d.m(p)},Kn.requestFormReset=function(p){a.d.r(p)},Kn.unstable_batchedUpdates=function(p,h){return p(h)},Kn.useFormState=function(p,h,g){return u.H.useFormState(p,h,g)},Kn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Kn.version="19.2.4",Kn}var Ov;function mM(){if(Ov)return Yh.exports;Ov=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(t){console.error(t)}}return c(),Yh.exports=pM(),Yh.exports}var zv;function gM(){if(zv)return vl;zv=1;var c=dM(),t=Dp(),n=mM();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var i=e,s=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(s=i.return),e=i.return;while(e)}return i.tag===3?s:null}function u(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function f(e){if(e.tag===31){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function p(e){if(o(e)!==e)throw Error(a(188))}function h(e){var i=e.alternate;if(!i){if(i=o(e),i===null)throw Error(a(188));return i!==e?null:e}for(var s=e,l=i;;){var d=s.return;if(d===null)break;var m=d.alternate;if(m===null){if(l=d.return,l!==null){s=l;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===s)return p(d),e;if(m===l)return p(d),i;m=m.sibling}throw Error(a(188))}if(s.return!==l.return)s=d,l=m;else{for(var E=!1,L=d.child;L;){if(L===s){E=!0,s=d,l=m;break}if(L===l){E=!0,l=d,s=m;break}L=L.sibling}if(!E){for(L=m.child;L;){if(L===s){E=!0,s=m,l=d;break}if(L===l){E=!0,l=m,s=d;break}L=L.sibling}if(!E)throw Error(a(189))}}if(s.alternate!==l)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?e:i}function g(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=g(e),i!==null)return i;e=e.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),T=Symbol.for("react.consumer"),C=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),U=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),O=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function $(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var V=Symbol.for("react.client.reference");function K(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===V?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case b:return"Fragment";case x:return"Profiler";case S:return"StrictMode";case U:return"Suspense";case P:return"SuspenseList";case w:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case M:return"Portal";case C:return e.displayName||"Context";case T:return(e._context.displayName||"Context")+".Consumer";case N:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case B:return i=e.displayName||null,i!==null?i:K(e.type)||"Memo";case X:i=e._payload,e=e._init;try{return K(e(i))}catch{}}return null}var W=Array.isArray,z=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},ft=[],vt=-1;function I(e){return{current:e}}function j(e){0>vt||(e.current=ft[vt],ft[vt]=null,vt--)}function _t(e,i){vt++,ft[vt]=e.current,e.current=i}var At=I(null),Ot=I(null),at=I(null),dt=I(null);function Ut(e,i){switch(_t(at,i),_t(Ot,e),_t(At,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?Kg(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=Kg(i),e=Qg(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}j(At),_t(At,e)}function Yt(){j(At),j(Ot),j(at)}function Xt(e){e.memoizedState!==null&&_t(dt,e);var i=At.current,s=Qg(i,e.type);i!==s&&(_t(Ot,e),_t(At,s))}function Ee(e){Ot.current===e&&(j(At),j(Ot)),dt.current===e&&(j(dt),hl._currentValue=J)}var Ke,_e;function be(e){if(Ke===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);Ke=i&&i[1]||"",_e=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ke+e+_e}var Pe=!1;function Bt(e,i){if(!e||Pe)return"";Pe=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var St=function(){throw Error()};if(Object.defineProperty(St.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(St,[])}catch(ut){var ot=ut}Reflect.construct(e,[],St)}else{try{St.call()}catch(ut){ot=ut}e.call(St.prototype)}}else{try{throw Error()}catch(ut){ot=ut}(St=e())&&typeof St.catch=="function"&&St.catch(function(){})}}catch(ut){if(ut&&ot&&typeof ut.stack=="string")return[ut.stack,ot.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),E=m[0],L=m[1];if(E&&L){var q=E.split(`
`),st=L.split(`
`);for(d=l=0;l<q.length&&!q[l].includes("DetermineComponentFrameRoot");)l++;for(;d<st.length&&!st[d].includes("DetermineComponentFrameRoot");)d++;if(l===q.length||d===st.length)for(l=q.length-1,d=st.length-1;1<=l&&0<=d&&q[l]!==st[d];)d--;for(;1<=l&&0<=d;l--,d--)if(q[l]!==st[d]){if(l!==1||d!==1)do if(l--,d--,0>d||q[l]!==st[d]){var mt=`
`+q[l].replace(" at new "," at ");return e.displayName&&mt.includes("<anonymous>")&&(mt=mt.replace("<anonymous>",e.displayName)),mt}while(1<=l&&0<=d);break}}}finally{Pe=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?be(s):""}function xe(e,i){switch(e.tag){case 26:case 27:case 5:return be(e.type);case 16:return be("Lazy");case 13:return e.child!==i&&i!==null?be("Suspense Fallback"):be("Suspense");case 19:return be("SuspenseList");case 0:case 15:return Bt(e.type,!1);case 11:return Bt(e.type.render,!1);case 1:return Bt(e.type,!0);case 31:return be("Activity");default:return""}}function k(e){try{var i="",s=null;do i+=xe(e,s),s=e,e=e.return;while(e);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Ne=Object.prototype.hasOwnProperty,ye=c.unstable_scheduleCallback,ue=c.unstable_cancelCallback,Ht=c.unstable_shouldYield,F=c.unstable_requestPaint,A=c.unstable_now,Q=c.unstable_getCurrentPriorityLevel,pt=c.unstable_ImmediatePriority,gt=c.unstable_UserBlockingPriority,ht=c.unstable_NormalPriority,Zt=c.unstable_LowPriority,Nt=c.unstable_IdlePriority,Kt=c.log,se=c.unstable_setDisableYieldValue,bt=null,Mt=null;function It(e){if(typeof Kt=="function"&&se(e),Mt&&typeof Mt.setStrictMode=="function")try{Mt.setStrictMode(bt,e)}catch{}}var Gt=Math.clz32?Math.clz32:Z,Dt=Math.log,fe=Math.LN2;function Z(e){return e>>>=0,e===0?32:31-(Dt(e)/fe|0)|0}var zt=256,Tt=262144,Ft=4194304;function Et(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function yt(e,i,s){var l=e.pendingLanes;if(l===0)return 0;var d=0,m=e.suspendedLanes,E=e.pingedLanes;e=e.warmLanes;var L=l&134217727;return L!==0?(l=L&~m,l!==0?d=Et(l):(E&=L,E!==0?d=Et(E):s||(s=L&~e,s!==0&&(d=Et(s))))):(L=l&~m,L!==0?d=Et(L):E!==0?d=Et(E):s||(s=l&~e,s!==0&&(d=Et(s)))),d===0?0:i!==0&&i!==d&&(i&m)===0&&(m=d&-d,s=i&-i,m>=s||m===32&&(s&4194048)!==0)?i:d}function Ct(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function re(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ze(){var e=Ft;return Ft<<=1,(Ft&62914560)===0&&(Ft=4194304),e}function Te(e){for(var i=[],s=0;31>s;s++)i.push(e);return i}function mn(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Bn(e,i,s,l,d,m){var E=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var L=e.entanglements,q=e.expirationTimes,st=e.hiddenUpdates;for(s=E&~s;0<s;){var mt=31-Gt(s),St=1<<mt;L[mt]=0,q[mt]=-1;var ot=st[mt];if(ot!==null)for(st[mt]=null,mt=0;mt<ot.length;mt++){var ut=ot[mt];ut!==null&&(ut.lane&=-536870913)}s&=~St}l!==0&&Fs(e,l,0),m!==0&&d===0&&e.tag!==0&&(e.suspendedLanes|=m&~(E&~i))}function Fs(e,i,s){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-Gt(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|s&261930}function es(e,i){var s=e.entangledLanes|=i;for(e=e.entanglements;s;){var l=31-Gt(s),d=1<<l;d&i|e[l]&i&&(e[l]|=i),s&=~d}}function va(e,i){var s=i&-i;return s=(s&42)!==0?1:Is(s),(s&(e.suspendedLanes|i))!==0?0:s}function Is(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ns(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ji(){var e=G.p;return e!==0?e:(e=window.event,e===void 0?32:yv(e.type))}function ei(e,i){var s=G.p;try{return G.p=e,i()}finally{G.p=s}}var ne=Math.random().toString(36).slice(2),wt="__reactFiber$"+ne,Se="__reactProps$"+ne,Re="__reactContainer$"+ne,gn="__reactEvents$"+ne,Xe="__reactListeners$"+ne,vn="__reactHandles$"+ne,Cn="__reactResources$"+ne,We="__reactMarker$"+ne;function ln(e){delete e[wt],delete e[Se],delete e[gn],delete e[Xe],delete e[vn]}function hn(e){var i=e[wt];if(i)return i;for(var s=e.parentNode;s;){if(i=s[Re]||s[wt]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(e=av(e);e!==null;){if(s=e[wt])return s;e=av(e)}return i}e=s,s=e.parentNode}return null}function Le(e){if(e=e[wt]||e[Re]){var i=e.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return e}return null}function Fn(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function ni(e){var i=e[Cn];return i||(i=e[Cn]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function D(e){e[We]=!0}var tt=new Set,ct={};function rt(e,i){nt(e,i),nt(e+"Capture",i)}function nt(e,i){for(ct[e]=i,e=0;e<i.length;e++)tt.add(i[e])}var Pt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),qt={},Lt={};function Wt(e){return Ne.call(Lt,e)?!0:Ne.call(qt,e)?!1:Pt.test(e)?Lt[e]=!0:(qt[e]=!0,!1)}function jt(e,i,s){if(Wt(i))if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+s)}}function ie(e,i,s){if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+s)}}function Qt(e,i,s,l){if(l===null)e.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(i,s,""+l)}}function oe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Be(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function rn(e,i,s){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);if(!e.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var d=l.get,m=l.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return d.call(this)},set:function(E){s=""+E,m.call(this,E)}}),Object.defineProperty(e,i,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(E){s=""+E},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function en(e){if(!e._valueTracker){var i=Be(e)?"checked":"value";e._valueTracker=rn(e,i,""+e[i])}}function He(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return e&&(l=Be(e)?e.checked?"true":"false":e.value),e=l,e!==s?(i.setValue(e),!0):!1}function ee(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ye=/[\n"\\]/g;function ce(e){return e.replace(Ye,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function In(e,i,s,l,d,m,E,L){e.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.type=E:e.removeAttribute("type"),i!=null?E==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+oe(i)):e.value!==""+oe(i)&&(e.value=""+oe(i)):E!=="submit"&&E!=="reset"||e.removeAttribute("value"),i!=null?Hn(e,E,oe(i)):s!=null?Hn(e,E,oe(s)):l!=null&&e.removeAttribute("value"),d==null&&m!=null&&(e.defaultChecked=!!m),d!=null&&(e.checked=d&&typeof d!="function"&&typeof d!="symbol"),L!=null&&typeof L!="function"&&typeof L!="symbol"&&typeof L!="boolean"?e.name=""+oe(L):e.removeAttribute("name")}function _a(e,i,s,l,d,m,E,L){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),i!=null||s!=null){if(!(m!=="submit"&&m!=="reset"||i!=null)){en(e);return}s=s!=null?""+oe(s):"",i=i!=null?""+oe(i):s,L||i===e.value||(e.value=i),e.defaultValue=i}l=l??d,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=L?e.checked:!!l,e.defaultChecked=!!l,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(e.name=E),en(e)}function Hn(e,i,s){i==="number"&&ee(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function wi(e,i,s,l){if(e=e.options,i){i={};for(var d=0;d<s.length;d++)i["$"+s[d]]=!0;for(s=0;s<e.length;s++)d=i.hasOwnProperty("$"+e[s].value),e[s].selected!==d&&(e[s].selected=d),d&&l&&(e[s].defaultSelected=!0)}else{for(s=""+oe(s),i=null,d=0;d<e.length;d++){if(e[d].value===s){e[d].selected=!0,l&&(e[d].defaultSelected=!0);return}i!==null||e[d].disabled||(i=e[d])}i!==null&&(i.selected=!0)}}function Qe(e,i,s){if(i!=null&&(i=""+oe(i),i!==e.value&&(e.value=i),s==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=s!=null?""+oe(s):""}function Gn(e,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(a(92));if(W(l)){if(1<l.length)throw Error(a(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=oe(i),e.defaultValue=s,l=e.textContent,l===s&&l!==""&&l!==null&&(e.value=l),en(e)}function Dn(e,i){if(i){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=i;return}}e.textContent=i}var Vn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function kn(e,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,s):typeof s!="number"||s===0||Vn.has(i)?i==="float"?e.cssFloat=s:e[i]=(""+s).trim():e[i]=s+"px"}function yr(e,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var d in i)l=i[d],i.hasOwnProperty(d)&&s[d]!==l&&kn(e,d,l)}else for(var m in i)i.hasOwnProperty(m)&&kn(e,m,i[m])}function Fi(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ry=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Vl(e){return ry.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function xa(){}var Fu=null;function Iu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Sr=null,Mr=null;function Zp(e){var i=Le(e);if(i&&(e=i.stateNode)){var s=e[Se]||null;t:switch(e=i.stateNode,i.type){case"input":if(In(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+ce(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==e&&l.form===e.form){var d=l[Se]||null;if(!d)throw Error(a(90));In(l,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===e.form&&He(l)}break t;case"textarea":Qe(e,s.value,s.defaultValue);break t;case"select":i=s.value,i!=null&&wi(e,!!s.multiple,i,!1)}}}var Hu=!1;function Kp(e,i,s){if(Hu)return e(i,s);Hu=!0;try{var l=e(i);return l}finally{if(Hu=!1,(Sr!==null||Mr!==null)&&(Cc(),Sr&&(i=Sr,e=Mr,Mr=Sr=null,Zp(i),e)))for(i=0;i<e.length;i++)Zp(e[i])}}function Co(e,i){var s=e.stateNode;if(s===null)return null;var l=s[Se]||null;if(l===null)return null;s=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var ya=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gu=!1;if(ya)try{var Do={};Object.defineProperty(Do,"passive",{get:function(){Gu=!0}}),window.addEventListener("test",Do,Do),window.removeEventListener("test",Do,Do)}catch{Gu=!1}var is=null,Vu=null,kl=null;function Qp(){if(kl)return kl;var e,i=Vu,s=i.length,l,d="value"in is?is.value:is.textContent,m=d.length;for(e=0;e<s&&i[e]===d[e];e++);var E=s-e;for(l=1;l<=E&&i[s-l]===d[m-l];l++);return kl=d.slice(e,1<l?1-l:void 0)}function ql(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function Xl(){return!0}function Jp(){return!1}function ri(e){function i(s,l,d,m,E){this._reactName=s,this._targetInst=d,this.type=l,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var L in e)e.hasOwnProperty(L)&&(s=e[L],this[L]=s?s(m):m[L]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Xl:Jp,this.isPropagationStopped=Jp,this}return _(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Xl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Xl)},persist:function(){},isPersistent:Xl}),i}var Hs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wl=ri(Hs),No=_({},Hs,{view:0,detail:0}),oy=ri(No),ku,qu,Lo,Yl=_({},No,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Lo&&(Lo&&e.type==="mousemove"?(ku=e.screenX-Lo.screenX,qu=e.screenY-Lo.screenY):qu=ku=0,Lo=e),ku)},movementY:function(e){return"movementY"in e?e.movementY:qu}}),$p=ri(Yl),ly=_({},Yl,{dataTransfer:0}),cy=ri(ly),uy=_({},No,{relatedTarget:0}),Xu=ri(uy),fy=_({},Hs,{animationName:0,elapsedTime:0,pseudoElement:0}),hy=ri(fy),dy=_({},Hs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),py=ri(dy),my=_({},Hs,{data:0}),tm=ri(my),gy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_y={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xy(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=_y[e])?!!i[e]:!1}function Wu(){return xy}var yy=_({},No,{key:function(e){if(e.key){var i=gy[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=ql(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wu,charCode:function(e){return e.type==="keypress"?ql(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ql(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Sy=ri(yy),My=_({},Yl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),em=ri(My),Ey=_({},No,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wu}),by=ri(Ey),Ty=_({},Hs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ay=ri(Ty),wy=_({},Yl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ry=ri(wy),Cy=_({},Hs,{newState:0,oldState:0}),Dy=ri(Cy),Ny=[9,13,27,32],Yu=ya&&"CompositionEvent"in window,Uo=null;ya&&"documentMode"in document&&(Uo=document.documentMode);var Ly=ya&&"TextEvent"in window&&!Uo,nm=ya&&(!Yu||Uo&&8<Uo&&11>=Uo),im=" ",am=!1;function sm(e,i){switch(e){case"keyup":return Ny.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Er=!1;function Uy(e,i){switch(e){case"compositionend":return rm(i);case"keypress":return i.which!==32?null:(am=!0,im);case"textInput":return e=i.data,e===im&&am?null:e;default:return null}}function Oy(e,i){if(Er)return e==="compositionend"||!Yu&&sm(e,i)?(e=Qp(),kl=Vu=is=null,Er=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return nm&&i.locale!=="ko"?null:i.data;default:return null}}var zy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function om(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!zy[e.type]:i==="textarea"}function lm(e,i,s,l){Sr?Mr?Mr.push(l):Mr=[l]:Sr=l,i=Pc(i,"onChange"),0<i.length&&(s=new Wl("onChange","change",null,s,l),e.push({event:s,listeners:i}))}var Oo=null,zo=null;function Py(e){qg(e,0)}function jl(e){var i=Fn(e);if(He(i))return e}function cm(e,i){if(e==="change")return i}var um=!1;if(ya){var ju;if(ya){var Zu="oninput"in document;if(!Zu){var fm=document.createElement("div");fm.setAttribute("oninput","return;"),Zu=typeof fm.oninput=="function"}ju=Zu}else ju=!1;um=ju&&(!document.documentMode||9<document.documentMode)}function hm(){Oo&&(Oo.detachEvent("onpropertychange",dm),zo=Oo=null)}function dm(e){if(e.propertyName==="value"&&jl(zo)){var i=[];lm(i,zo,e,Iu(e)),Kp(Py,i)}}function By(e,i,s){e==="focusin"?(hm(),Oo=i,zo=s,Oo.attachEvent("onpropertychange",dm)):e==="focusout"&&hm()}function Fy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return jl(zo)}function Iy(e,i){if(e==="click")return jl(i)}function Hy(e,i){if(e==="input"||e==="change")return jl(i)}function Gy(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var gi=typeof Object.is=="function"?Object.is:Gy;function Po(e,i){if(gi(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var s=Object.keys(e),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var d=s[l];if(!Ne.call(i,d)||!gi(e[d],i[d]))return!1}return!0}function pm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function mm(e,i){var s=pm(e);e=0;for(var l;s;){if(s.nodeType===3){if(l=e+s.textContent.length,e<=i&&l>=i)return{node:s,offset:i-e};e=l}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=pm(s)}}function gm(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?gm(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function vm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=ee(e.document);i instanceof e.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)e=i.contentWindow;else break;i=ee(e.document)}return i}function Ku(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var Vy=ya&&"documentMode"in document&&11>=document.documentMode,br=null,Qu=null,Bo=null,Ju=!1;function _m(e,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Ju||br==null||br!==ee(l)||(l=br,"selectionStart"in l&&Ku(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Bo&&Po(Bo,l)||(Bo=l,l=Pc(Qu,"onSelect"),0<l.length&&(i=new Wl("onSelect","select",null,i,s),e.push({event:i,listeners:l}),i.target=br)))}function Gs(e,i){var s={};return s[e.toLowerCase()]=i.toLowerCase(),s["Webkit"+e]="webkit"+i,s["Moz"+e]="moz"+i,s}var Tr={animationend:Gs("Animation","AnimationEnd"),animationiteration:Gs("Animation","AnimationIteration"),animationstart:Gs("Animation","AnimationStart"),transitionrun:Gs("Transition","TransitionRun"),transitionstart:Gs("Transition","TransitionStart"),transitioncancel:Gs("Transition","TransitionCancel"),transitionend:Gs("Transition","TransitionEnd")},$u={},xm={};ya&&(xm=document.createElement("div").style,"AnimationEvent"in window||(delete Tr.animationend.animation,delete Tr.animationiteration.animation,delete Tr.animationstart.animation),"TransitionEvent"in window||delete Tr.transitionend.transition);function Vs(e){if($u[e])return $u[e];if(!Tr[e])return e;var i=Tr[e],s;for(s in i)if(i.hasOwnProperty(s)&&s in xm)return $u[e]=i[s];return e}var ym=Vs("animationend"),Sm=Vs("animationiteration"),Mm=Vs("animationstart"),ky=Vs("transitionrun"),qy=Vs("transitionstart"),Xy=Vs("transitioncancel"),Em=Vs("transitionend"),bm=new Map,tf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");tf.push("scrollEnd");function Ii(e,i){bm.set(e,i),rt(i,[e])}var Zl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ri=[],Ar=0,ef=0;function Kl(){for(var e=Ar,i=ef=Ar=0;i<e;){var s=Ri[i];Ri[i++]=null;var l=Ri[i];Ri[i++]=null;var d=Ri[i];Ri[i++]=null;var m=Ri[i];if(Ri[i++]=null,l!==null&&d!==null){var E=l.pending;E===null?d.next=d:(d.next=E.next,E.next=d),l.pending=d}m!==0&&Tm(s,d,m)}}function Ql(e,i,s,l){Ri[Ar++]=e,Ri[Ar++]=i,Ri[Ar++]=s,Ri[Ar++]=l,ef|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function nf(e,i,s,l){return Ql(e,i,s,l),Jl(e)}function ks(e,i){return Ql(e,null,null,i),Jl(e)}function Tm(e,i,s){e.lanes|=s;var l=e.alternate;l!==null&&(l.lanes|=s);for(var d=!1,m=e.return;m!==null;)m.childLanes|=s,l=m.alternate,l!==null&&(l.childLanes|=s),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(d=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,d&&i!==null&&(d=31-Gt(s),e=m.hiddenUpdates,l=e[d],l===null?e[d]=[i]:l.push(i),i.lane=s|536870912),m):null}function Jl(e){if(50<sl)throw sl=0,hh=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var wr={};function Wy(e,i,s,l){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vi(e,i,s,l){return new Wy(e,i,s,l)}function af(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Sa(e,i){var s=e.alternate;return s===null?(s=vi(e.tag,i,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=i,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,i=e.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function Am(e,i){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,i=s.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function $l(e,i,s,l,d,m){var E=0;if(l=e,typeof e=="function")af(e)&&(E=1);else if(typeof e=="string")E=QS(e,s,At.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case w:return e=vi(31,s,i,d),e.elementType=w,e.lanes=m,e;case b:return qs(s.children,d,m,i);case S:E=8,d|=24;break;case x:return e=vi(12,s,i,d|2),e.elementType=x,e.lanes=m,e;case U:return e=vi(13,s,i,d),e.elementType=U,e.lanes=m,e;case P:return e=vi(19,s,i,d),e.elementType=P,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case C:E=10;break t;case T:E=9;break t;case N:E=11;break t;case B:E=14;break t;case X:E=16,l=null;break t}E=29,s=Error(a(130,e===null?"null":typeof e,"")),l=null}return i=vi(E,s,i,d),i.elementType=e,i.type=l,i.lanes=m,i}function qs(e,i,s,l){return e=vi(7,e,l,i),e.lanes=s,e}function sf(e,i,s){return e=vi(6,e,null,i),e.lanes=s,e}function wm(e){var i=vi(18,null,null,0);return i.stateNode=e,i}function rf(e,i,s){return i=vi(4,e.children!==null?e.children:[],e.key,i),i.lanes=s,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var Rm=new WeakMap;function Ci(e,i){if(typeof e=="object"&&e!==null){var s=Rm.get(e);return s!==void 0?s:(i={value:e,source:i,stack:k(i)},Rm.set(e,i),i)}return{value:e,source:i,stack:k(i)}}var Rr=[],Cr=0,tc=null,Fo=0,Di=[],Ni=0,as=null,$i=1,ta="";function Ma(e,i){Rr[Cr++]=Fo,Rr[Cr++]=tc,tc=e,Fo=i}function Cm(e,i,s){Di[Ni++]=$i,Di[Ni++]=ta,Di[Ni++]=as,as=e;var l=$i;e=ta;var d=32-Gt(l)-1;l&=~(1<<d),s+=1;var m=32-Gt(i)+d;if(30<m){var E=d-d%5;m=(l&(1<<E)-1).toString(32),l>>=E,d-=E,$i=1<<32-Gt(i)+d|s<<d|l,ta=m+e}else $i=1<<m|s<<d|l,ta=e}function of(e){e.return!==null&&(Ma(e,1),Cm(e,1,0))}function lf(e){for(;e===tc;)tc=Rr[--Cr],Rr[Cr]=null,Fo=Rr[--Cr],Rr[Cr]=null;for(;e===as;)as=Di[--Ni],Di[Ni]=null,ta=Di[--Ni],Di[Ni]=null,$i=Di[--Ni],Di[Ni]=null}function Dm(e,i){Di[Ni++]=$i,Di[Ni++]=ta,Di[Ni++]=as,$i=i.id,ta=i.overflow,as=e}var qn=null,cn=null,Ue=!1,ss=null,Li=!1,cf=Error(a(519));function rs(e){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Io(Ci(i,e)),cf}function Nm(e){var i=e.stateNode,s=e.type,l=e.memoizedProps;switch(i[wt]=e,i[Se]=l,s){case"dialog":we("cancel",i),we("close",i);break;case"iframe":case"object":case"embed":we("load",i);break;case"video":case"audio":for(s=0;s<ol.length;s++)we(ol[s],i);break;case"source":we("error",i);break;case"img":case"image":case"link":we("error",i),we("load",i);break;case"details":we("toggle",i);break;case"input":we("invalid",i),_a(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":we("invalid",i);break;case"textarea":we("invalid",i),Gn(i,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||jg(i.textContent,s)?(l.popover!=null&&(we("beforetoggle",i),we("toggle",i)),l.onScroll!=null&&we("scroll",i),l.onScrollEnd!=null&&we("scrollend",i),l.onClick!=null&&(i.onclick=xa),i=!0):i=!1,i||rs(e,!0)}function Lm(e){for(qn=e.return;qn;)switch(qn.tag){case 5:case 31:case 13:Li=!1;return;case 27:case 3:Li=!0;return;default:qn=qn.return}}function Dr(e){if(e!==qn)return!1;if(!Ue)return Lm(e),Ue=!0,!1;var i=e.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||wh(e.type,e.memoizedProps)),s=!s),s&&cn&&rs(e),Lm(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));cn=iv(e)}else if(i===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));cn=iv(e)}else i===27?(i=cn,ys(e.type)?(e=Lh,Lh=null,cn=e):cn=i):cn=qn?Oi(e.stateNode.nextSibling):null;return!0}function Xs(){cn=qn=null,Ue=!1}function uf(){var e=ss;return e!==null&&(ui===null?ui=e:ui.push.apply(ui,e),ss=null),e}function Io(e){ss===null?ss=[e]:ss.push(e)}var ff=I(null),Ws=null,Ea=null;function os(e,i,s){_t(ff,i._currentValue),i._currentValue=s}function ba(e){e._currentValue=ff.current,j(ff)}function hf(e,i,s){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===s)break;e=e.return}}function df(e,i,s,l){var d=e.child;for(d!==null&&(d.return=e);d!==null;){var m=d.dependencies;if(m!==null){var E=d.child;m=m.firstContext;t:for(;m!==null;){var L=m;m=d;for(var q=0;q<i.length;q++)if(L.context===i[q]){m.lanes|=s,L=m.alternate,L!==null&&(L.lanes|=s),hf(m.return,s,e),l||(E=null);break t}m=L.next}}else if(d.tag===18){if(E=d.return,E===null)throw Error(a(341));E.lanes|=s,m=E.alternate,m!==null&&(m.lanes|=s),hf(E,s,e),E=null}else E=d.child;if(E!==null)E.return=d;else for(E=d;E!==null;){if(E===e){E=null;break}if(d=E.sibling,d!==null){d.return=E.return,E=d;break}E=E.return}d=E}}function Nr(e,i,s,l){e=null;for(var d=i,m=!1;d!==null;){if(!m){if((d.flags&524288)!==0)m=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var E=d.alternate;if(E===null)throw Error(a(387));if(E=E.memoizedProps,E!==null){var L=d.type;gi(d.pendingProps.value,E.value)||(e!==null?e.push(L):e=[L])}}else if(d===dt.current){if(E=d.alternate,E===null)throw Error(a(387));E.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(e!==null?e.push(hl):e=[hl])}d=d.return}e!==null&&df(i,e,s,l),i.flags|=262144}function ec(e){for(e=e.firstContext;e!==null;){if(!gi(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ys(e){Ws=e,Ea=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Xn(e){return Um(Ws,e)}function nc(e,i){return Ws===null&&Ys(e),Um(e,i)}function Um(e,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},Ea===null){if(e===null)throw Error(a(308));Ea=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else Ea=Ea.next=i;return s}var Yy=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(s,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(s){return s()})}},jy=c.unstable_scheduleCallback,Zy=c.unstable_NormalPriority,bn={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function pf(){return{controller:new Yy,data:new Map,refCount:0}}function Ho(e){e.refCount--,e.refCount===0&&jy(Zy,function(){e.controller.abort()})}var Go=null,mf=0,Lr=0,Ur=null;function Ky(e,i){if(Go===null){var s=Go=[];mf=0,Lr=_h(),Ur={status:"pending",value:void 0,then:function(l){s.push(l)}}}return mf++,i.then(Om,Om),i}function Om(){if(--mf===0&&Go!==null){Ur!==null&&(Ur.status="fulfilled");var e=Go;Go=null,Lr=0,Ur=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function Qy(e,i){var s=[],l={status:"pending",value:null,reason:null,then:function(d){s.push(d)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var d=0;d<s.length;d++)(0,s[d])(i)},function(d){for(l.status="rejected",l.reason=d,d=0;d<s.length;d++)(0,s[d])(void 0)}),l}var zm=z.S;z.S=function(e,i){_g=A(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&Ky(e,i),zm!==null&&zm(e,i)};var js=I(null);function gf(){var e=js.current;return e!==null?e:on.pooledCache}function ic(e,i){i===null?_t(js,js.current):_t(js,i.pool)}function Pm(){var e=gf();return e===null?null:{parent:bn._currentValue,pool:e}}var Or=Error(a(460)),vf=Error(a(474)),ac=Error(a(542)),sc={then:function(){}};function Bm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Fm(e,i,s){switch(s=e[s],s===void 0?e.push(i):s!==i&&(i.then(xa,xa),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Hm(e),e;default:if(typeof i.status=="string")i.then(xa,xa);else{if(e=on,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var d=i;d.status="fulfilled",d.value=l}},function(l){if(i.status==="pending"){var d=i;d.status="rejected",d.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Hm(e),e}throw Ks=i,Or}}function Zs(e){try{var i=e._init;return i(e._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(Ks=s,Or):s}}var Ks=null;function Im(){if(Ks===null)throw Error(a(459));var e=Ks;return Ks=null,e}function Hm(e){if(e===Or||e===ac)throw Error(a(483))}var zr=null,Vo=0;function rc(e){var i=Vo;return Vo+=1,zr===null&&(zr=[]),Fm(zr,e,i)}function ko(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function oc(e,i){throw i.$$typeof===v?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function Gm(e){function i(et,Y){if(e){var it=et.deletions;it===null?(et.deletions=[Y],et.flags|=16):it.push(Y)}}function s(et,Y){if(!e)return null;for(;Y!==null;)i(et,Y),Y=Y.sibling;return null}function l(et){for(var Y=new Map;et!==null;)et.key!==null?Y.set(et.key,et):Y.set(et.index,et),et=et.sibling;return Y}function d(et,Y){return et=Sa(et,Y),et.index=0,et.sibling=null,et}function m(et,Y,it){return et.index=it,e?(it=et.alternate,it!==null?(it=it.index,it<Y?(et.flags|=67108866,Y):it):(et.flags|=67108866,Y)):(et.flags|=1048576,Y)}function E(et){return e&&et.alternate===null&&(et.flags|=67108866),et}function L(et,Y,it,xt){return Y===null||Y.tag!==6?(Y=sf(it,et.mode,xt),Y.return=et,Y):(Y=d(Y,it),Y.return=et,Y)}function q(et,Y,it,xt){var ae=it.type;return ae===b?mt(et,Y,it.props.children,xt,it.key):Y!==null&&(Y.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===X&&Zs(ae)===Y.type)?(Y=d(Y,it.props),ko(Y,it),Y.return=et,Y):(Y=$l(it.type,it.key,it.props,null,et.mode,xt),ko(Y,it),Y.return=et,Y)}function st(et,Y,it,xt){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==it.containerInfo||Y.stateNode.implementation!==it.implementation?(Y=rf(it,et.mode,xt),Y.return=et,Y):(Y=d(Y,it.children||[]),Y.return=et,Y)}function mt(et,Y,it,xt,ae){return Y===null||Y.tag!==7?(Y=qs(it,et.mode,xt,ae),Y.return=et,Y):(Y=d(Y,it),Y.return=et,Y)}function St(et,Y,it){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return Y=sf(""+Y,et.mode,it),Y.return=et,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case y:return it=$l(Y.type,Y.key,Y.props,null,et.mode,it),ko(it,Y),it.return=et,it;case M:return Y=rf(Y,et.mode,it),Y.return=et,Y;case X:return Y=Zs(Y),St(et,Y,it)}if(W(Y)||$(Y))return Y=qs(Y,et.mode,it,null),Y.return=et,Y;if(typeof Y.then=="function")return St(et,rc(Y),it);if(Y.$$typeof===C)return St(et,nc(et,Y),it);oc(et,Y)}return null}function ot(et,Y,it,xt){var ae=Y!==null?Y.key:null;if(typeof it=="string"&&it!==""||typeof it=="number"||typeof it=="bigint")return ae!==null?null:L(et,Y,""+it,xt);if(typeof it=="object"&&it!==null){switch(it.$$typeof){case y:return it.key===ae?q(et,Y,it,xt):null;case M:return it.key===ae?st(et,Y,it,xt):null;case X:return it=Zs(it),ot(et,Y,it,xt)}if(W(it)||$(it))return ae!==null?null:mt(et,Y,it,xt,null);if(typeof it.then=="function")return ot(et,Y,rc(it),xt);if(it.$$typeof===C)return ot(et,Y,nc(et,it),xt);oc(et,it)}return null}function ut(et,Y,it,xt,ae){if(typeof xt=="string"&&xt!==""||typeof xt=="number"||typeof xt=="bigint")return et=et.get(it)||null,L(Y,et,""+xt,ae);if(typeof xt=="object"&&xt!==null){switch(xt.$$typeof){case y:return et=et.get(xt.key===null?it:xt.key)||null,q(Y,et,xt,ae);case M:return et=et.get(xt.key===null?it:xt.key)||null,st(Y,et,xt,ae);case X:return xt=Zs(xt),ut(et,Y,it,xt,ae)}if(W(xt)||$(xt))return et=et.get(it)||null,mt(Y,et,xt,ae,null);if(typeof xt.then=="function")return ut(et,Y,it,rc(xt),ae);if(xt.$$typeof===C)return ut(et,Y,it,nc(Y,xt),ae);oc(Y,xt)}return null}function Jt(et,Y,it,xt){for(var ae=null,Ge=null,te=Y,ge=Y=0,De=null;te!==null&&ge<it.length;ge++){te.index>ge?(De=te,te=null):De=te.sibling;var Ve=ot(et,te,it[ge],xt);if(Ve===null){te===null&&(te=De);break}e&&te&&Ve.alternate===null&&i(et,te),Y=m(Ve,Y,ge),Ge===null?ae=Ve:Ge.sibling=Ve,Ge=Ve,te=De}if(ge===it.length)return s(et,te),Ue&&Ma(et,ge),ae;if(te===null){for(;ge<it.length;ge++)te=St(et,it[ge],xt),te!==null&&(Y=m(te,Y,ge),Ge===null?ae=te:Ge.sibling=te,Ge=te);return Ue&&Ma(et,ge),ae}for(te=l(te);ge<it.length;ge++)De=ut(te,et,ge,it[ge],xt),De!==null&&(e&&De.alternate!==null&&te.delete(De.key===null?ge:De.key),Y=m(De,Y,ge),Ge===null?ae=De:Ge.sibling=De,Ge=De);return e&&te.forEach(function(Ts){return i(et,Ts)}),Ue&&Ma(et,ge),ae}function le(et,Y,it,xt){if(it==null)throw Error(a(151));for(var ae=null,Ge=null,te=Y,ge=Y=0,De=null,Ve=it.next();te!==null&&!Ve.done;ge++,Ve=it.next()){te.index>ge?(De=te,te=null):De=te.sibling;var Ts=ot(et,te,Ve.value,xt);if(Ts===null){te===null&&(te=De);break}e&&te&&Ts.alternate===null&&i(et,te),Y=m(Ts,Y,ge),Ge===null?ae=Ts:Ge.sibling=Ts,Ge=Ts,te=De}if(Ve.done)return s(et,te),Ue&&Ma(et,ge),ae;if(te===null){for(;!Ve.done;ge++,Ve=it.next())Ve=St(et,Ve.value,xt),Ve!==null&&(Y=m(Ve,Y,ge),Ge===null?ae=Ve:Ge.sibling=Ve,Ge=Ve);return Ue&&Ma(et,ge),ae}for(te=l(te);!Ve.done;ge++,Ve=it.next())Ve=ut(te,et,ge,Ve.value,xt),Ve!==null&&(e&&Ve.alternate!==null&&te.delete(Ve.key===null?ge:Ve.key),Y=m(Ve,Y,ge),Ge===null?ae=Ve:Ge.sibling=Ve,Ge=Ve);return e&&te.forEach(function(lM){return i(et,lM)}),Ue&&Ma(et,ge),ae}function sn(et,Y,it,xt){if(typeof it=="object"&&it!==null&&it.type===b&&it.key===null&&(it=it.props.children),typeof it=="object"&&it!==null){switch(it.$$typeof){case y:t:{for(var ae=it.key;Y!==null;){if(Y.key===ae){if(ae=it.type,ae===b){if(Y.tag===7){s(et,Y.sibling),xt=d(Y,it.props.children),xt.return=et,et=xt;break t}}else if(Y.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===X&&Zs(ae)===Y.type){s(et,Y.sibling),xt=d(Y,it.props),ko(xt,it),xt.return=et,et=xt;break t}s(et,Y);break}else i(et,Y);Y=Y.sibling}it.type===b?(xt=qs(it.props.children,et.mode,xt,it.key),xt.return=et,et=xt):(xt=$l(it.type,it.key,it.props,null,et.mode,xt),ko(xt,it),xt.return=et,et=xt)}return E(et);case M:t:{for(ae=it.key;Y!==null;){if(Y.key===ae)if(Y.tag===4&&Y.stateNode.containerInfo===it.containerInfo&&Y.stateNode.implementation===it.implementation){s(et,Y.sibling),xt=d(Y,it.children||[]),xt.return=et,et=xt;break t}else{s(et,Y);break}else i(et,Y);Y=Y.sibling}xt=rf(it,et.mode,xt),xt.return=et,et=xt}return E(et);case X:return it=Zs(it),sn(et,Y,it,xt)}if(W(it))return Jt(et,Y,it,xt);if($(it)){if(ae=$(it),typeof ae!="function")throw Error(a(150));return it=ae.call(it),le(et,Y,it,xt)}if(typeof it.then=="function")return sn(et,Y,rc(it),xt);if(it.$$typeof===C)return sn(et,Y,nc(et,it),xt);oc(et,it)}return typeof it=="string"&&it!==""||typeof it=="number"||typeof it=="bigint"?(it=""+it,Y!==null&&Y.tag===6?(s(et,Y.sibling),xt=d(Y,it),xt.return=et,et=xt):(s(et,Y),xt=sf(it,et.mode,xt),xt.return=et,et=xt),E(et)):s(et,Y)}return function(et,Y,it,xt){try{Vo=0;var ae=sn(et,Y,it,xt);return zr=null,ae}catch(te){if(te===Or||te===ac)throw te;var Ge=vi(29,te,null,et.mode);return Ge.lanes=xt,Ge.return=et,Ge}}}var Qs=Gm(!0),Vm=Gm(!1),ls=!1;function _f(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function xf(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function cs(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function us(e,i,s){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(je&2)!==0){var d=l.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),l.pending=i,i=Jl(e),Tm(e,null,s),i}return Ql(e,l,i,s),Jl(e)}function qo(e,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=e.pendingLanes,s|=l,i.lanes=s,es(e,s)}}function yf(e,i){var s=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var d=null,m=null;if(s=s.firstBaseUpdate,s!==null){do{var E={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};m===null?d=m=E:m=m.next=E,s=s.next}while(s!==null);m===null?d=m=i:m=m.next=i}else d=m=i;s={baseState:l.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=i:e.next=i,s.lastBaseUpdate=i}var Sf=!1;function Xo(){if(Sf){var e=Ur;if(e!==null)throw e}}function Wo(e,i,s,l){Sf=!1;var d=e.updateQueue;ls=!1;var m=d.firstBaseUpdate,E=d.lastBaseUpdate,L=d.shared.pending;if(L!==null){d.shared.pending=null;var q=L,st=q.next;q.next=null,E===null?m=st:E.next=st,E=q;var mt=e.alternate;mt!==null&&(mt=mt.updateQueue,L=mt.lastBaseUpdate,L!==E&&(L===null?mt.firstBaseUpdate=st:L.next=st,mt.lastBaseUpdate=q))}if(m!==null){var St=d.baseState;E=0,mt=st=q=null,L=m;do{var ot=L.lane&-536870913,ut=ot!==L.lane;if(ut?(Ce&ot)===ot:(l&ot)===ot){ot!==0&&ot===Lr&&(Sf=!0),mt!==null&&(mt=mt.next={lane:0,tag:L.tag,payload:L.payload,callback:null,next:null});t:{var Jt=e,le=L;ot=i;var sn=s;switch(le.tag){case 1:if(Jt=le.payload,typeof Jt=="function"){St=Jt.call(sn,St,ot);break t}St=Jt;break t;case 3:Jt.flags=Jt.flags&-65537|128;case 0:if(Jt=le.payload,ot=typeof Jt=="function"?Jt.call(sn,St,ot):Jt,ot==null)break t;St=_({},St,ot);break t;case 2:ls=!0}}ot=L.callback,ot!==null&&(e.flags|=64,ut&&(e.flags|=8192),ut=d.callbacks,ut===null?d.callbacks=[ot]:ut.push(ot))}else ut={lane:ot,tag:L.tag,payload:L.payload,callback:L.callback,next:null},mt===null?(st=mt=ut,q=St):mt=mt.next=ut,E|=ot;if(L=L.next,L===null){if(L=d.shared.pending,L===null)break;ut=L,L=ut.next,ut.next=null,d.lastBaseUpdate=ut,d.shared.pending=null}}while(!0);mt===null&&(q=St),d.baseState=q,d.firstBaseUpdate=st,d.lastBaseUpdate=mt,m===null&&(d.shared.lanes=0),ms|=E,e.lanes=E,e.memoizedState=St}}function km(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function qm(e,i){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)km(s[e],i)}var Pr=I(null),lc=I(0);function Xm(e,i){e=Ua,_t(lc,e),_t(Pr,i),Ua=e|i.baseLanes}function Mf(){_t(lc,Ua),_t(Pr,Pr.current)}function Ef(){Ua=lc.current,j(Pr),j(lc)}var _i=I(null),Ui=null;function fs(e){var i=e.alternate;_t(Mn,Mn.current&1),_t(_i,e),Ui===null&&(i===null||Pr.current!==null||i.memoizedState!==null)&&(Ui=e)}function bf(e){_t(Mn,Mn.current),_t(_i,e),Ui===null&&(Ui=e)}function Wm(e){e.tag===22?(_t(Mn,Mn.current),_t(_i,e),Ui===null&&(Ui=e)):hs()}function hs(){_t(Mn,Mn.current),_t(_i,_i.current)}function xi(e){j(_i),Ui===e&&(Ui=null),j(Mn)}var Mn=I(0);function cc(e){for(var i=e;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||Dh(s)||Nh(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Ta=0,me=null,nn=null,Tn=null,uc=!1,Br=!1,Js=!1,fc=0,Yo=0,Fr=null,Jy=0;function _n(){throw Error(a(321))}function Tf(e,i){if(i===null)return!1;for(var s=0;s<i.length&&s<e.length;s++)if(!gi(e[s],i[s]))return!1;return!0}function Af(e,i,s,l,d,m){return Ta=m,me=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,z.H=e===null||e.memoizedState===null?C0:Gf,Js=!1,m=s(l,d),Js=!1,Br&&(m=jm(i,s,l,d)),Ym(e),m}function Ym(e){z.H=Ko;var i=nn!==null&&nn.next!==null;if(Ta=0,Tn=nn=me=null,uc=!1,Yo=0,Fr=null,i)throw Error(a(300));e===null||An||(e=e.dependencies,e!==null&&ec(e)&&(An=!0))}function jm(e,i,s,l){me=e;var d=0;do{if(Br&&(Fr=null),Yo=0,Br=!1,25<=d)throw Error(a(301));if(d+=1,Tn=nn=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}z.H=D0,m=i(s,l)}while(Br);return m}function $y(){var e=z.H,i=e.useState()[0];return i=typeof i.then=="function"?jo(i):i,e=e.useState()[0],(nn!==null?nn.memoizedState:null)!==e&&(me.flags|=1024),i}function wf(){var e=fc!==0;return fc=0,e}function Rf(e,i,s){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~s}function Cf(e){if(uc){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}uc=!1}Ta=0,Tn=nn=me=null,Br=!1,Yo=fc=0,Fr=null}function ii(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tn===null?me.memoizedState=Tn=e:Tn=Tn.next=e,Tn}function En(){if(nn===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=nn.next;var i=Tn===null?me.memoizedState:Tn.next;if(i!==null)Tn=i,nn=e;else{if(e===null)throw me.alternate===null?Error(a(467)):Error(a(310));nn=e,e={memoizedState:nn.memoizedState,baseState:nn.baseState,baseQueue:nn.baseQueue,queue:nn.queue,next:null},Tn===null?me.memoizedState=Tn=e:Tn=Tn.next=e}return Tn}function hc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function jo(e){var i=Yo;return Yo+=1,Fr===null&&(Fr=[]),e=Fm(Fr,e,i),i=me,(Tn===null?i.memoizedState:Tn.next)===null&&(i=i.alternate,z.H=i===null||i.memoizedState===null?C0:Gf),e}function dc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return jo(e);if(e.$$typeof===C)return Xn(e)}throw Error(a(438,String(e)))}function Df(e){var i=null,s=me.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=me.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(d){return d.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=hc(),me.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(e),l=0;l<e;l++)s[l]=O;return i.index++,s}function Aa(e,i){return typeof i=="function"?i(e):i}function pc(e){var i=En();return Nf(i,nn,e)}function Nf(e,i,s){var l=e.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=s;var d=e.baseQueue,m=l.pending;if(m!==null){if(d!==null){var E=d.next;d.next=m.next,m.next=E}i.baseQueue=d=m,l.pending=null}if(m=e.baseState,d===null)e.memoizedState=m;else{i=d.next;var L=E=null,q=null,st=i,mt=!1;do{var St=st.lane&-536870913;if(St!==st.lane?(Ce&St)===St:(Ta&St)===St){var ot=st.revertLane;if(ot===0)q!==null&&(q=q.next={lane:0,revertLane:0,gesture:null,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null}),St===Lr&&(mt=!0);else if((Ta&ot)===ot){st=st.next,ot===Lr&&(mt=!0);continue}else St={lane:0,revertLane:st.revertLane,gesture:null,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null},q===null?(L=q=St,E=m):q=q.next=St,me.lanes|=ot,ms|=ot;St=st.action,Js&&s(m,St),m=st.hasEagerState?st.eagerState:s(m,St)}else ot={lane:St,revertLane:st.revertLane,gesture:st.gesture,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null},q===null?(L=q=ot,E=m):q=q.next=ot,me.lanes|=St,ms|=St;st=st.next}while(st!==null&&st!==i);if(q===null?E=m:q.next=L,!gi(m,e.memoizedState)&&(An=!0,mt&&(s=Ur,s!==null)))throw s;e.memoizedState=m,e.baseState=E,e.baseQueue=q,l.lastRenderedState=m}return d===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Lf(e){var i=En(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=e;var l=s.dispatch,d=s.pending,m=i.memoizedState;if(d!==null){s.pending=null;var E=d=d.next;do m=e(m,E.action),E=E.next;while(E!==d);gi(m,i.memoizedState)||(An=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),s.lastRenderedState=m}return[m,l]}function Zm(e,i,s){var l=me,d=En(),m=Ue;if(m){if(s===void 0)throw Error(a(407));s=s()}else s=i();var E=!gi((nn||d).memoizedState,s);if(E&&(d.memoizedState=s,An=!0),d=d.queue,zf(Jm.bind(null,l,d,e),[e]),d.getSnapshot!==i||E||Tn!==null&&Tn.memoizedState.tag&1){if(l.flags|=2048,Ir(9,{destroy:void 0},Qm.bind(null,l,d,s,i),null),on===null)throw Error(a(349));m||(Ta&127)!==0||Km(l,i,s)}return s}function Km(e,i,s){e.flags|=16384,e={getSnapshot:i,value:s},i=me.updateQueue,i===null?(i=hc(),me.updateQueue=i,i.stores=[e]):(s=i.stores,s===null?i.stores=[e]:s.push(e))}function Qm(e,i,s,l){i.value=s,i.getSnapshot=l,$m(i)&&t0(e)}function Jm(e,i,s){return s(function(){$m(i)&&t0(e)})}function $m(e){var i=e.getSnapshot;e=e.value;try{var s=i();return!gi(e,s)}catch{return!0}}function t0(e){var i=ks(e,2);i!==null&&fi(i,e,2)}function Uf(e){var i=ii();if(typeof e=="function"){var s=e;if(e=s(),Js){It(!0);try{s()}finally{It(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Aa,lastRenderedState:e},i}function e0(e,i,s,l){return e.baseState=s,Nf(e,nn,typeof l=="function"?l:Aa)}function tS(e,i,s,l,d){if(vc(e))throw Error(a(485));if(e=i.action,e!==null){var m={payload:d,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){m.listeners.push(E)}};z.T!==null?s(!0):m.isTransition=!1,l(m),s=i.pending,s===null?(m.next=i.pending=m,n0(i,m)):(m.next=s.next,i.pending=s.next=m)}}function n0(e,i){var s=i.action,l=i.payload,d=e.state;if(i.isTransition){var m=z.T,E={};z.T=E;try{var L=s(d,l),q=z.S;q!==null&&q(E,L),i0(e,i,L)}catch(st){Of(e,i,st)}finally{m!==null&&E.types!==null&&(m.types=E.types),z.T=m}}else try{m=s(d,l),i0(e,i,m)}catch(st){Of(e,i,st)}}function i0(e,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){a0(e,i,l)},function(l){return Of(e,i,l)}):a0(e,i,s)}function a0(e,i,s){i.status="fulfilled",i.value=s,s0(i),e.state=s,i=e.pending,i!==null&&(s=i.next,s===i?e.pending=null:(s=s.next,i.next=s,n0(e,s)))}function Of(e,i,s){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,s0(i),i=i.next;while(i!==l)}e.action=null}function s0(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function r0(e,i){return i}function o0(e,i){if(Ue){var s=on.formState;if(s!==null){t:{var l=me;if(Ue){if(cn){e:{for(var d=cn,m=Li;d.nodeType!==8;){if(!m){d=null;break e}if(d=Oi(d.nextSibling),d===null){d=null;break e}}m=d.data,d=m==="F!"||m==="F"?d:null}if(d){cn=Oi(d.nextSibling),l=d.data==="F!";break t}}rs(l)}l=!1}l&&(i=s[0])}}return s=ii(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:r0,lastRenderedState:i},s.queue=l,s=A0.bind(null,me,l),l.dispatch=s,l=Uf(!1),m=Hf.bind(null,me,!1,l.queue),l=ii(),d={state:i,dispatch:null,action:e,pending:null},l.queue=d,s=tS.bind(null,me,d,m,s),d.dispatch=s,l.memoizedState=e,[i,s,!1]}function l0(e){var i=En();return c0(i,nn,e)}function c0(e,i,s){if(i=Nf(e,i,r0)[0],e=pc(Aa)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=jo(i)}catch(E){throw E===Or?ac:E}else l=i;i=En();var d=i.queue,m=d.dispatch;return s!==i.memoizedState&&(me.flags|=2048,Ir(9,{destroy:void 0},eS.bind(null,d,s),null)),[l,m,e]}function eS(e,i){e.action=i}function u0(e){var i=En(),s=nn;if(s!==null)return c0(i,s,e);En(),i=i.memoizedState,s=En();var l=s.queue.dispatch;return s.memoizedState=e,[i,l,!1]}function Ir(e,i,s,l){return e={tag:e,create:s,deps:l,inst:i,next:null},i=me.updateQueue,i===null&&(i=hc(),me.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=e.next=e:(l=s.next,s.next=e,e.next=l,i.lastEffect=e),e}function f0(){return En().memoizedState}function mc(e,i,s,l){var d=ii();me.flags|=e,d.memoizedState=Ir(1|i,{destroy:void 0},s,l===void 0?null:l)}function gc(e,i,s,l){var d=En();l=l===void 0?null:l;var m=d.memoizedState.inst;nn!==null&&l!==null&&Tf(l,nn.memoizedState.deps)?d.memoizedState=Ir(i,m,s,l):(me.flags|=e,d.memoizedState=Ir(1|i,m,s,l))}function h0(e,i){mc(8390656,8,e,i)}function zf(e,i){gc(2048,8,e,i)}function nS(e){me.flags|=4;var i=me.updateQueue;if(i===null)i=hc(),me.updateQueue=i,i.events=[e];else{var s=i.events;s===null?i.events=[e]:s.push(e)}}function d0(e){var i=En().memoizedState;return nS({ref:i,nextImpl:e}),function(){if((je&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function p0(e,i){return gc(4,2,e,i)}function m0(e,i){return gc(4,4,e,i)}function g0(e,i){if(typeof i=="function"){e=e();var s=i(e);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function v0(e,i,s){s=s!=null?s.concat([e]):null,gc(4,4,g0.bind(null,i,e),s)}function Pf(){}function _0(e,i){var s=En();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&Tf(i,l[1])?l[0]:(s.memoizedState=[e,i],e)}function x0(e,i){var s=En();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&Tf(i,l[1]))return l[0];if(l=e(),Js){It(!0);try{e()}finally{It(!1)}}return s.memoizedState=[l,i],l}function Bf(e,i,s){return s===void 0||(Ta&1073741824)!==0&&(Ce&261930)===0?e.memoizedState=i:(e.memoizedState=s,e=yg(),me.lanes|=e,ms|=e,s)}function y0(e,i,s,l){return gi(s,i)?s:Pr.current!==null?(e=Bf(e,s,l),gi(e,i)||(An=!0),e):(Ta&42)===0||(Ta&1073741824)!==0&&(Ce&261930)===0?(An=!0,e.memoizedState=s):(e=yg(),me.lanes|=e,ms|=e,i)}function S0(e,i,s,l,d){var m=G.p;G.p=m!==0&&8>m?m:8;var E=z.T,L={};z.T=L,Hf(e,!1,i,s);try{var q=d(),st=z.S;if(st!==null&&st(L,q),q!==null&&typeof q=="object"&&typeof q.then=="function"){var mt=Qy(q,l);Zo(e,i,mt,Mi(e))}else Zo(e,i,l,Mi(e))}catch(St){Zo(e,i,{then:function(){},status:"rejected",reason:St},Mi())}finally{G.p=m,E!==null&&L.types!==null&&(E.types=L.types),z.T=E}}function iS(){}function Ff(e,i,s,l){if(e.tag!==5)throw Error(a(476));var d=M0(e).queue;S0(e,d,i,J,s===null?iS:function(){return E0(e),s(l)})}function M0(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Aa,lastRenderedState:J},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Aa,lastRenderedState:s},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function E0(e){var i=M0(e);i.next===null&&(i=e.alternate.memoizedState),Zo(e,i.next.queue,{},Mi())}function If(){return Xn(hl)}function b0(){return En().memoizedState}function T0(){return En().memoizedState}function aS(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var s=Mi();e=cs(s);var l=us(i,e,s);l!==null&&(fi(l,i,s),qo(l,i,s)),i={cache:pf()},e.payload=i;return}i=i.return}}function sS(e,i,s){var l=Mi();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},vc(e)?w0(i,s):(s=nf(e,i,s,l),s!==null&&(fi(s,e,l),R0(s,i,l)))}function A0(e,i,s){var l=Mi();Zo(e,i,s,l)}function Zo(e,i,s,l){var d={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(vc(e))w0(i,d);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var E=i.lastRenderedState,L=m(E,s);if(d.hasEagerState=!0,d.eagerState=L,gi(L,E))return Ql(e,i,d,0),on===null&&Kl(),!1}catch{}if(s=nf(e,i,d,l),s!==null)return fi(s,e,l),R0(s,i,l),!0}return!1}function Hf(e,i,s,l){if(l={lane:2,revertLane:_h(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},vc(e)){if(i)throw Error(a(479))}else i=nf(e,s,l,2),i!==null&&fi(i,e,2)}function vc(e){var i=e.alternate;return e===me||i!==null&&i===me}function w0(e,i){Br=uc=!0;var s=e.pending;s===null?i.next=i:(i.next=s.next,s.next=i),e.pending=i}function R0(e,i,s){if((s&4194048)!==0){var l=i.lanes;l&=e.pendingLanes,s|=l,i.lanes=s,es(e,s)}}var Ko={readContext:Xn,use:dc,useCallback:_n,useContext:_n,useEffect:_n,useImperativeHandle:_n,useLayoutEffect:_n,useInsertionEffect:_n,useMemo:_n,useReducer:_n,useRef:_n,useState:_n,useDebugValue:_n,useDeferredValue:_n,useTransition:_n,useSyncExternalStore:_n,useId:_n,useHostTransitionStatus:_n,useFormState:_n,useActionState:_n,useOptimistic:_n,useMemoCache:_n,useCacheRefresh:_n};Ko.useEffectEvent=_n;var C0={readContext:Xn,use:dc,useCallback:function(e,i){return ii().memoizedState=[e,i===void 0?null:i],e},useContext:Xn,useEffect:h0,useImperativeHandle:function(e,i,s){s=s!=null?s.concat([e]):null,mc(4194308,4,g0.bind(null,i,e),s)},useLayoutEffect:function(e,i){return mc(4194308,4,e,i)},useInsertionEffect:function(e,i){mc(4,2,e,i)},useMemo:function(e,i){var s=ii();i=i===void 0?null:i;var l=e();if(Js){It(!0);try{e()}finally{It(!1)}}return s.memoizedState=[l,i],l},useReducer:function(e,i,s){var l=ii();if(s!==void 0){var d=s(i);if(Js){It(!0);try{s(i)}finally{It(!1)}}}else d=i;return l.memoizedState=l.baseState=d,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:d},l.queue=e,e=e.dispatch=sS.bind(null,me,e),[l.memoizedState,e]},useRef:function(e){var i=ii();return e={current:e},i.memoizedState=e},useState:function(e){e=Uf(e);var i=e.queue,s=A0.bind(null,me,i);return i.dispatch=s,[e.memoizedState,s]},useDebugValue:Pf,useDeferredValue:function(e,i){var s=ii();return Bf(s,e,i)},useTransition:function(){var e=Uf(!1);return e=S0.bind(null,me,e.queue,!0,!1),ii().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,s){var l=me,d=ii();if(Ue){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),on===null)throw Error(a(349));(Ce&127)!==0||Km(l,i,s)}d.memoizedState=s;var m={value:s,getSnapshot:i};return d.queue=m,h0(Jm.bind(null,l,m,e),[e]),l.flags|=2048,Ir(9,{destroy:void 0},Qm.bind(null,l,m,s,i),null),s},useId:function(){var e=ii(),i=on.identifierPrefix;if(Ue){var s=ta,l=$i;s=(l&~(1<<32-Gt(l)-1)).toString(32)+s,i="_"+i+"R_"+s,s=fc++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=Jy++,i="_"+i+"r_"+s.toString(32)+"_";return e.memoizedState=i},useHostTransitionStatus:If,useFormState:o0,useActionState:o0,useOptimistic:function(e){var i=ii();i.memoizedState=i.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=Hf.bind(null,me,!0,s),s.dispatch=i,[e,i]},useMemoCache:Df,useCacheRefresh:function(){return ii().memoizedState=aS.bind(null,me)},useEffectEvent:function(e){var i=ii(),s={impl:e};return i.memoizedState=s,function(){if((je&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}},Gf={readContext:Xn,use:dc,useCallback:_0,useContext:Xn,useEffect:zf,useImperativeHandle:v0,useInsertionEffect:p0,useLayoutEffect:m0,useMemo:x0,useReducer:pc,useRef:f0,useState:function(){return pc(Aa)},useDebugValue:Pf,useDeferredValue:function(e,i){var s=En();return y0(s,nn.memoizedState,e,i)},useTransition:function(){var e=pc(Aa)[0],i=En().memoizedState;return[typeof e=="boolean"?e:jo(e),i]},useSyncExternalStore:Zm,useId:b0,useHostTransitionStatus:If,useFormState:l0,useActionState:l0,useOptimistic:function(e,i){var s=En();return e0(s,nn,e,i)},useMemoCache:Df,useCacheRefresh:T0};Gf.useEffectEvent=d0;var D0={readContext:Xn,use:dc,useCallback:_0,useContext:Xn,useEffect:zf,useImperativeHandle:v0,useInsertionEffect:p0,useLayoutEffect:m0,useMemo:x0,useReducer:Lf,useRef:f0,useState:function(){return Lf(Aa)},useDebugValue:Pf,useDeferredValue:function(e,i){var s=En();return nn===null?Bf(s,e,i):y0(s,nn.memoizedState,e,i)},useTransition:function(){var e=Lf(Aa)[0],i=En().memoizedState;return[typeof e=="boolean"?e:jo(e),i]},useSyncExternalStore:Zm,useId:b0,useHostTransitionStatus:If,useFormState:u0,useActionState:u0,useOptimistic:function(e,i){var s=En();return nn!==null?e0(s,nn,e,i):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:Df,useCacheRefresh:T0};D0.useEffectEvent=d0;function Vf(e,i,s,l){i=e.memoizedState,s=s(l,i),s=s==null?i:_({},i,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var kf={enqueueSetState:function(e,i,s){e=e._reactInternals;var l=Mi(),d=cs(l);d.payload=i,s!=null&&(d.callback=s),i=us(e,d,l),i!==null&&(fi(i,e,l),qo(i,e,l))},enqueueReplaceState:function(e,i,s){e=e._reactInternals;var l=Mi(),d=cs(l);d.tag=1,d.payload=i,s!=null&&(d.callback=s),i=us(e,d,l),i!==null&&(fi(i,e,l),qo(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var s=Mi(),l=cs(s);l.tag=2,i!=null&&(l.callback=i),i=us(e,l,s),i!==null&&(fi(i,e,s),qo(i,e,s))}};function N0(e,i,s,l,d,m,E){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,m,E):i.prototype&&i.prototype.isPureReactComponent?!Po(s,l)||!Po(d,m):!0}function L0(e,i,s,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==e&&kf.enqueueReplaceState(i,i.state,null)}function $s(e,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(e=e.defaultProps){s===i&&(s=_({},s));for(var d in e)s[d]===void 0&&(s[d]=e[d])}return s}function U0(e){Zl(e)}function O0(e){console.error(e)}function z0(e){Zl(e)}function _c(e,i){try{var s=e.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function P0(e,i,s){try{var l=e.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function qf(e,i,s){return s=cs(s),s.tag=3,s.payload={element:null},s.callback=function(){_c(e,i)},s}function B0(e){return e=cs(e),e.tag=3,e}function F0(e,i,s,l){var d=s.type.getDerivedStateFromError;if(typeof d=="function"){var m=l.value;e.payload=function(){return d(m)},e.callback=function(){P0(i,s,l)}}var E=s.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(e.callback=function(){P0(i,s,l),typeof d!="function"&&(gs===null?gs=new Set([this]):gs.add(this));var L=l.stack;this.componentDidCatch(l.value,{componentStack:L!==null?L:""})})}function rS(e,i,s,l,d){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&Nr(i,s,d,!0),s=_i.current,s!==null){switch(s.tag){case 31:case 13:return Ui===null?Dc():s.alternate===null&&xn===0&&(xn=3),s.flags&=-257,s.flags|=65536,s.lanes=d,l===sc?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),mh(e,l,d)),!1;case 22:return s.flags|=65536,l===sc?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),mh(e,l,d)),!1}throw Error(a(435,s.tag))}return mh(e,l,d),Dc(),!1}if(Ue)return i=_i.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=d,l!==cf&&(e=Error(a(422),{cause:l}),Io(Ci(e,s)))):(l!==cf&&(i=Error(a(423),{cause:l}),Io(Ci(i,s))),e=e.current.alternate,e.flags|=65536,d&=-d,e.lanes|=d,l=Ci(l,s),d=qf(e.stateNode,l,d),yf(e,d),xn!==4&&(xn=2)),!1;var m=Error(a(520),{cause:l});if(m=Ci(m,s),al===null?al=[m]:al.push(m),xn!==4&&(xn=2),i===null)return!0;l=Ci(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,e=d&-d,s.lanes|=e,e=qf(s.stateNode,l,e),yf(s,e),!1;case 1:if(i=s.type,m=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(gs===null||!gs.has(m))))return s.flags|=65536,d&=-d,s.lanes|=d,d=B0(d),F0(d,e,s,l),yf(s,d),!1}s=s.return}while(s!==null);return!1}var Xf=Error(a(461)),An=!1;function Wn(e,i,s,l){i.child=e===null?Vm(i,null,s,l):Qs(i,e.child,s,l)}function I0(e,i,s,l,d){s=s.render;var m=i.ref;if("ref"in l){var E={};for(var L in l)L!=="ref"&&(E[L]=l[L])}else E=l;return Ys(i),l=Af(e,i,s,E,m,d),L=wf(),e!==null&&!An?(Rf(e,i,d),wa(e,i,d)):(Ue&&L&&of(i),i.flags|=1,Wn(e,i,l,d),i.child)}function H0(e,i,s,l,d){if(e===null){var m=s.type;return typeof m=="function"&&!af(m)&&m.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=m,G0(e,i,m,l,d)):(e=$l(s.type,null,l,i,i.mode,d),e.ref=i.ref,e.return=i,i.child=e)}if(m=e.child,!$f(e,d)){var E=m.memoizedProps;if(s=s.compare,s=s!==null?s:Po,s(E,l)&&e.ref===i.ref)return wa(e,i,d)}return i.flags|=1,e=Sa(m,l),e.ref=i.ref,e.return=i,i.child=e}function G0(e,i,s,l,d){if(e!==null){var m=e.memoizedProps;if(Po(m,l)&&e.ref===i.ref)if(An=!1,i.pendingProps=l=m,$f(e,d))(e.flags&131072)!==0&&(An=!0);else return i.lanes=e.lanes,wa(e,i,d)}return Wf(e,i,s,l,d)}function V0(e,i,s,l){var d=l.children,m=e!==null?e.memoizedState:null;if(e===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(m=m!==null?m.baseLanes|s:s,e!==null){for(l=i.child=e.child,d=0;l!==null;)d=d|l.lanes|l.childLanes,l=l.sibling;l=d&~m}else l=0,i.child=null;return k0(e,i,m,s,l)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&ic(i,m!==null?m.cachePool:null),m!==null?Xm(i,m):Mf(),Wm(i);else return l=i.lanes=536870912,k0(e,i,m!==null?m.baseLanes|s:s,s,l)}else m!==null?(ic(i,m.cachePool),Xm(i,m),hs(),i.memoizedState=null):(e!==null&&ic(i,null),Mf(),hs());return Wn(e,i,d,s),i.child}function Qo(e,i){return e!==null&&e.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function k0(e,i,s,l,d){var m=gf();return m=m===null?null:{parent:bn._currentValue,pool:m},i.memoizedState={baseLanes:s,cachePool:m},e!==null&&ic(i,null),Mf(),Wm(i),e!==null&&Nr(e,i,l,!0),i.childLanes=d,null}function xc(e,i){return i=Sc({mode:i.mode,children:i.children},e.mode),i.ref=e.ref,e.child=i,i.return=e,i}function q0(e,i,s){return Qs(i,e.child,null,s),e=xc(i,i.pendingProps),e.flags|=2,xi(i),i.memoizedState=null,e}function oS(e,i,s){var l=i.pendingProps,d=(i.flags&128)!==0;if(i.flags&=-129,e===null){if(Ue){if(l.mode==="hidden")return e=xc(i,l),i.lanes=536870912,Qo(null,e);if(bf(i),(e=cn)?(e=nv(e,Li),e=e!==null&&e.data==="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:as!==null?{id:$i,overflow:ta}:null,retryLane:536870912,hydrationErrors:null},s=wm(e),s.return=i,i.child=s,qn=i,cn=null)):e=null,e===null)throw rs(i);return i.lanes=536870912,null}return xc(i,l)}var m=e.memoizedState;if(m!==null){var E=m.dehydrated;if(bf(i),d)if(i.flags&256)i.flags&=-257,i=q0(e,i,s);else if(i.memoizedState!==null)i.child=e.child,i.flags|=128,i=null;else throw Error(a(558));else if(An||Nr(e,i,s,!1),d=(s&e.childLanes)!==0,An||d){if(l=on,l!==null&&(E=va(l,s),E!==0&&E!==m.retryLane))throw m.retryLane=E,ks(e,E),fi(l,e,E),Xf;Dc(),i=q0(e,i,s)}else e=m.treeContext,cn=Oi(E.nextSibling),qn=i,Ue=!0,ss=null,Li=!1,e!==null&&Dm(i,e),i=xc(i,l),i.flags|=4096;return i}return e=Sa(e.child,{mode:l.mode,children:l.children}),e.ref=i.ref,i.child=e,e.return=i,e}function yc(e,i){var s=i.ref;if(s===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(e===null||e.ref!==s)&&(i.flags|=4194816)}}function Wf(e,i,s,l,d){return Ys(i),s=Af(e,i,s,l,void 0,d),l=wf(),e!==null&&!An?(Rf(e,i,d),wa(e,i,d)):(Ue&&l&&of(i),i.flags|=1,Wn(e,i,s,d),i.child)}function X0(e,i,s,l,d,m){return Ys(i),i.updateQueue=null,s=jm(i,l,s,d),Ym(e),l=wf(),e!==null&&!An?(Rf(e,i,m),wa(e,i,m)):(Ue&&l&&of(i),i.flags|=1,Wn(e,i,s,m),i.child)}function W0(e,i,s,l,d){if(Ys(i),i.stateNode===null){var m=wr,E=s.contextType;typeof E=="object"&&E!==null&&(m=Xn(E)),m=new s(l,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=kf,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=l,m.state=i.memoizedState,m.refs={},_f(i),E=s.contextType,m.context=typeof E=="object"&&E!==null?Xn(E):wr,m.state=i.memoizedState,E=s.getDerivedStateFromProps,typeof E=="function"&&(Vf(i,s,E,l),m.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(E=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),E!==m.state&&kf.enqueueReplaceState(m,m.state,null),Wo(i,l,m,d),Xo(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){m=i.stateNode;var L=i.memoizedProps,q=$s(s,L);m.props=q;var st=m.context,mt=s.contextType;E=wr,typeof mt=="object"&&mt!==null&&(E=Xn(mt));var St=s.getDerivedStateFromProps;mt=typeof St=="function"||typeof m.getSnapshotBeforeUpdate=="function",L=i.pendingProps!==L,mt||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(L||st!==E)&&L0(i,m,l,E),ls=!1;var ot=i.memoizedState;m.state=ot,Wo(i,l,m,d),Xo(),st=i.memoizedState,L||ot!==st||ls?(typeof St=="function"&&(Vf(i,s,St,l),st=i.memoizedState),(q=ls||N0(i,s,q,l,ot,st,E))?(mt||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=st),m.props=l,m.state=st,m.context=E,l=q):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{m=i.stateNode,xf(e,i),E=i.memoizedProps,mt=$s(s,E),m.props=mt,St=i.pendingProps,ot=m.context,st=s.contextType,q=wr,typeof st=="object"&&st!==null&&(q=Xn(st)),L=s.getDerivedStateFromProps,(st=typeof L=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(E!==St||ot!==q)&&L0(i,m,l,q),ls=!1,ot=i.memoizedState,m.state=ot,Wo(i,l,m,d),Xo();var ut=i.memoizedState;E!==St||ot!==ut||ls||e!==null&&e.dependencies!==null&&ec(e.dependencies)?(typeof L=="function"&&(Vf(i,s,L,l),ut=i.memoizedState),(mt=ls||N0(i,s,mt,l,ot,ut,q)||e!==null&&e.dependencies!==null&&ec(e.dependencies))?(st||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,ut,q),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,ut,q)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||E===e.memoizedProps&&ot===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&ot===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ut),m.props=l,m.state=ut,m.context=q,l=mt):(typeof m.componentDidUpdate!="function"||E===e.memoizedProps&&ot===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&ot===e.memoizedState||(i.flags|=1024),l=!1)}return m=l,yc(e,i),l=(i.flags&128)!==0,m||l?(m=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,e!==null&&l?(i.child=Qs(i,e.child,null,d),i.child=Qs(i,null,s,d)):Wn(e,i,s,d),i.memoizedState=m.state,e=i.child):e=wa(e,i,d),e}function Y0(e,i,s,l){return Xs(),i.flags|=256,Wn(e,i,s,l),i.child}var Yf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function jf(e){return{baseLanes:e,cachePool:Pm()}}function Zf(e,i,s){return e=e!==null?e.childLanes&~s:0,i&&(e|=Si),e}function j0(e,i,s){var l=i.pendingProps,d=!1,m=(i.flags&128)!==0,E;if((E=m)||(E=e!==null&&e.memoizedState===null?!1:(Mn.current&2)!==0),E&&(d=!0,i.flags&=-129),E=(i.flags&32)!==0,i.flags&=-33,e===null){if(Ue){if(d?fs(i):hs(),(e=cn)?(e=nv(e,Li),e=e!==null&&e.data!=="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:as!==null?{id:$i,overflow:ta}:null,retryLane:536870912,hydrationErrors:null},s=wm(e),s.return=i,i.child=s,qn=i,cn=null)):e=null,e===null)throw rs(i);return Nh(e)?i.lanes=32:i.lanes=536870912,null}var L=l.children;return l=l.fallback,d?(hs(),d=i.mode,L=Sc({mode:"hidden",children:L},d),l=qs(l,d,s,null),L.return=i,l.return=i,L.sibling=l,i.child=L,l=i.child,l.memoizedState=jf(s),l.childLanes=Zf(e,E,s),i.memoizedState=Yf,Qo(null,l)):(fs(i),Kf(i,L))}var q=e.memoizedState;if(q!==null&&(L=q.dehydrated,L!==null)){if(m)i.flags&256?(fs(i),i.flags&=-257,i=Qf(e,i,s)):i.memoizedState!==null?(hs(),i.child=e.child,i.flags|=128,i=null):(hs(),L=l.fallback,d=i.mode,l=Sc({mode:"visible",children:l.children},d),L=qs(L,d,s,null),L.flags|=2,l.return=i,L.return=i,l.sibling=L,i.child=l,Qs(i,e.child,null,s),l=i.child,l.memoizedState=jf(s),l.childLanes=Zf(e,E,s),i.memoizedState=Yf,i=Qo(null,l));else if(fs(i),Nh(L)){if(E=L.nextSibling&&L.nextSibling.dataset,E)var st=E.dgst;E=st,l=Error(a(419)),l.stack="",l.digest=E,Io({value:l,source:null,stack:null}),i=Qf(e,i,s)}else if(An||Nr(e,i,s,!1),E=(s&e.childLanes)!==0,An||E){if(E=on,E!==null&&(l=va(E,s),l!==0&&l!==q.retryLane))throw q.retryLane=l,ks(e,l),fi(E,e,l),Xf;Dh(L)||Dc(),i=Qf(e,i,s)}else Dh(L)?(i.flags|=192,i.child=e.child,i=null):(e=q.treeContext,cn=Oi(L.nextSibling),qn=i,Ue=!0,ss=null,Li=!1,e!==null&&Dm(i,e),i=Kf(i,l.children),i.flags|=4096);return i}return d?(hs(),L=l.fallback,d=i.mode,q=e.child,st=q.sibling,l=Sa(q,{mode:"hidden",children:l.children}),l.subtreeFlags=q.subtreeFlags&65011712,st!==null?L=Sa(st,L):(L=qs(L,d,s,null),L.flags|=2),L.return=i,l.return=i,l.sibling=L,i.child=l,Qo(null,l),l=i.child,L=e.child.memoizedState,L===null?L=jf(s):(d=L.cachePool,d!==null?(q=bn._currentValue,d=d.parent!==q?{parent:q,pool:q}:d):d=Pm(),L={baseLanes:L.baseLanes|s,cachePool:d}),l.memoizedState=L,l.childLanes=Zf(e,E,s),i.memoizedState=Yf,Qo(e.child,l)):(fs(i),s=e.child,e=s.sibling,s=Sa(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,e!==null&&(E=i.deletions,E===null?(i.deletions=[e],i.flags|=16):E.push(e)),i.child=s,i.memoizedState=null,s)}function Kf(e,i){return i=Sc({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function Sc(e,i){return e=vi(22,e,null,i),e.lanes=0,e}function Qf(e,i,s){return Qs(i,e.child,null,s),e=Kf(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function Z0(e,i,s){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),hf(e.return,i,s)}function Jf(e,i,s,l,d,m){var E=e.memoizedState;E===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:d,treeForkCount:m}:(E.isBackwards=i,E.rendering=null,E.renderingStartTime=0,E.last=l,E.tail=s,E.tailMode=d,E.treeForkCount=m)}function K0(e,i,s){var l=i.pendingProps,d=l.revealOrder,m=l.tail;l=l.children;var E=Mn.current,L=(E&2)!==0;if(L?(E=E&1|2,i.flags|=128):E&=1,_t(Mn,E),Wn(e,i,l,s),l=Ue?Fo:0,!L&&e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Z0(e,s,i);else if(e.tag===19)Z0(e,s,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(d){case"forwards":for(s=i.child,d=null;s!==null;)e=s.alternate,e!==null&&cc(e)===null&&(d=s),s=s.sibling;s=d,s===null?(d=i.child,i.child=null):(d=s.sibling,s.sibling=null),Jf(i,!1,d,s,m,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,d=i.child,i.child=null;d!==null;){if(e=d.alternate,e!==null&&cc(e)===null){i.child=d;break}e=d.sibling,d.sibling=s,s=d,d=e}Jf(i,!0,s,null,m,l);break;case"together":Jf(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function wa(e,i,s){if(e!==null&&(i.dependencies=e.dependencies),ms|=i.lanes,(s&i.childLanes)===0)if(e!==null){if(Nr(e,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,s=Sa(e,e.pendingProps),i.child=s,s.return=i;e.sibling!==null;)e=e.sibling,s=s.sibling=Sa(e,e.pendingProps),s.return=i;s.sibling=null}return i.child}function $f(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&ec(e)))}function lS(e,i,s){switch(i.tag){case 3:Ut(i,i.stateNode.containerInfo),os(i,bn,e.memoizedState.cache),Xs();break;case 27:case 5:Xt(i);break;case 4:Ut(i,i.stateNode.containerInfo);break;case 10:os(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,bf(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(fs(i),i.flags|=128,null):(s&i.child.childLanes)!==0?j0(e,i,s):(fs(i),e=wa(e,i,s),e!==null?e.sibling:null);fs(i);break;case 19:var d=(e.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(Nr(e,i,s,!1),l=(s&i.childLanes)!==0),d){if(l)return K0(e,i,s);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),_t(Mn,Mn.current),l)break;return null;case 22:return i.lanes=0,V0(e,i,s,i.pendingProps);case 24:os(i,bn,e.memoizedState.cache)}return wa(e,i,s)}function Q0(e,i,s){if(e!==null)if(e.memoizedProps!==i.pendingProps)An=!0;else{if(!$f(e,s)&&(i.flags&128)===0)return An=!1,lS(e,i,s);An=(e.flags&131072)!==0}else An=!1,Ue&&(i.flags&1048576)!==0&&Cm(i,Fo,i.index);switch(i.lanes=0,i.tag){case 16:t:{var l=i.pendingProps;if(e=Zs(i.elementType),i.type=e,typeof e=="function")af(e)?(l=$s(e,l),i.tag=1,i=W0(null,i,e,l,s)):(i.tag=0,i=Wf(null,i,e,l,s));else{if(e!=null){var d=e.$$typeof;if(d===N){i.tag=11,i=I0(null,i,e,l,s);break t}else if(d===B){i.tag=14,i=H0(null,i,e,l,s);break t}}throw i=K(e)||e,Error(a(306,i,""))}}return i;case 0:return Wf(e,i,i.type,i.pendingProps,s);case 1:return l=i.type,d=$s(l,i.pendingProps),W0(e,i,l,d,s);case 3:t:{if(Ut(i,i.stateNode.containerInfo),e===null)throw Error(a(387));l=i.pendingProps;var m=i.memoizedState;d=m.element,xf(e,i),Wo(i,l,null,s);var E=i.memoizedState;if(l=E.cache,os(i,bn,l),l!==m.cache&&df(i,[bn],s,!0),Xo(),l=E.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:E.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=Y0(e,i,l,s);break t}else if(l!==d){d=Ci(Error(a(424)),i),Io(d),i=Y0(e,i,l,s);break t}else for(e=i.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,cn=Oi(e.firstChild),qn=i,Ue=!0,ss=null,Li=!0,s=Vm(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(Xs(),l===d){i=wa(e,i,s);break t}Wn(e,i,l,s)}i=i.child}return i;case 26:return yc(e,i),e===null?(s=lv(i.type,null,i.pendingProps,null))?i.memoizedState=s:Ue||(s=i.type,e=i.pendingProps,l=Bc(at.current).createElement(s),l[wt]=i,l[Se]=e,Yn(l,s,e),D(l),i.stateNode=l):i.memoizedState=lv(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return Xt(i),e===null&&Ue&&(l=i.stateNode=sv(i.type,i.pendingProps,at.current),qn=i,Li=!0,d=cn,ys(i.type)?(Lh=d,cn=Oi(l.firstChild)):cn=d),Wn(e,i,i.pendingProps.children,s),yc(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Ue&&((d=l=cn)&&(l=FS(l,i.type,i.pendingProps,Li),l!==null?(i.stateNode=l,qn=i,cn=Oi(l.firstChild),Li=!1,d=!0):d=!1),d||rs(i)),Xt(i),d=i.type,m=i.pendingProps,E=e!==null?e.memoizedProps:null,l=m.children,wh(d,m)?l=null:E!==null&&wh(d,E)&&(i.flags|=32),i.memoizedState!==null&&(d=Af(e,i,$y,null,null,s),hl._currentValue=d),yc(e,i),Wn(e,i,l,s),i.child;case 6:return e===null&&Ue&&((e=s=cn)&&(s=IS(s,i.pendingProps,Li),s!==null?(i.stateNode=s,qn=i,cn=null,e=!0):e=!1),e||rs(i)),null;case 13:return j0(e,i,s);case 4:return Ut(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=Qs(i,null,l,s):Wn(e,i,l,s),i.child;case 11:return I0(e,i,i.type,i.pendingProps,s);case 7:return Wn(e,i,i.pendingProps,s),i.child;case 8:return Wn(e,i,i.pendingProps.children,s),i.child;case 12:return Wn(e,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,os(i,i.type,l.value),Wn(e,i,l.children,s),i.child;case 9:return d=i.type._context,l=i.pendingProps.children,Ys(i),d=Xn(d),l=l(d),i.flags|=1,Wn(e,i,l,s),i.child;case 14:return H0(e,i,i.type,i.pendingProps,s);case 15:return G0(e,i,i.type,i.pendingProps,s);case 19:return K0(e,i,s);case 31:return oS(e,i,s);case 22:return V0(e,i,s,i.pendingProps);case 24:return Ys(i),l=Xn(bn),e===null?(d=gf(),d===null&&(d=on,m=pf(),d.pooledCache=m,m.refCount++,m!==null&&(d.pooledCacheLanes|=s),d=m),i.memoizedState={parent:l,cache:d},_f(i),os(i,bn,d)):((e.lanes&s)!==0&&(xf(e,i),Wo(i,null,null,s),Xo()),d=e.memoizedState,m=i.memoizedState,d.parent!==l?(d={parent:l,cache:l},i.memoizedState=d,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=d),os(i,bn,l)):(l=m.cache,os(i,bn,l),l!==d.cache&&df(i,[bn],s,!0))),Wn(e,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function Ra(e){e.flags|=4}function th(e,i,s,l,d){if((i=(e.mode&32)!==0)&&(i=!1),i){if(e.flags|=16777216,(d&335544128)===d)if(e.stateNode.complete)e.flags|=8192;else if(bg())e.flags|=8192;else throw Ks=sc,vf}else e.flags&=-16777217}function J0(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!dv(i))if(bg())e.flags|=8192;else throw Ks=sc,vf}function Mc(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?ze():536870912,e.lanes|=i,kr|=i)}function Jo(e,i){if(!Ue)switch(e.tailMode){case"hidden":i=e.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function un(e){var i=e.alternate!==null&&e.alternate.child===e.child,s=0,l=0;if(i)for(var d=e.child;d!==null;)s|=d.lanes|d.childLanes,l|=d.subtreeFlags&65011712,l|=d.flags&65011712,d.return=e,d=d.sibling;else for(d=e.child;d!==null;)s|=d.lanes|d.childLanes,l|=d.subtreeFlags,l|=d.flags,d.return=e,d=d.sibling;return e.subtreeFlags|=l,e.childLanes=s,i}function cS(e,i,s){var l=i.pendingProps;switch(lf(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return un(i),null;case 1:return un(i),null;case 3:return s=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),ba(bn),Yt(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(Dr(i)?Ra(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,uf())),un(i),null;case 26:var d=i.type,m=i.memoizedState;return e===null?(Ra(i),m!==null?(un(i),J0(i,m)):(un(i),th(i,d,null,l,s))):m?m!==e.memoizedState?(Ra(i),un(i),J0(i,m)):(un(i),i.flags&=-16777217):(e=e.memoizedProps,e!==l&&Ra(i),un(i),th(i,d,e,l,s)),null;case 27:if(Ee(i),s=at.current,d=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Ra(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return un(i),null}e=At.current,Dr(i)?Nm(i):(e=sv(d,l,s),i.stateNode=e,Ra(i))}return un(i),null;case 5:if(Ee(i),d=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Ra(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return un(i),null}if(m=At.current,Dr(i))Nm(i);else{var E=Bc(at.current);switch(m){case 1:m=E.createElementNS("http://www.w3.org/2000/svg",d);break;case 2:m=E.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;default:switch(d){case"svg":m=E.createElementNS("http://www.w3.org/2000/svg",d);break;case"math":m=E.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;case"script":m=E.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof l.is=="string"?E.createElement("select",{is:l.is}):E.createElement("select"),l.multiple?m.multiple=!0:l.size&&(m.size=l.size);break;default:m=typeof l.is=="string"?E.createElement(d,{is:l.is}):E.createElement(d)}}m[wt]=i,m[Se]=l;t:for(E=i.child;E!==null;){if(E.tag===5||E.tag===6)m.appendChild(E.stateNode);else if(E.tag!==4&&E.tag!==27&&E.child!==null){E.child.return=E,E=E.child;continue}if(E===i)break t;for(;E.sibling===null;){if(E.return===null||E.return===i)break t;E=E.return}E.sibling.return=E.return,E=E.sibling}i.stateNode=m;t:switch(Yn(m,d,l),d){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&Ra(i)}}return un(i),th(i,i.type,e===null?null:e.memoizedProps,i.pendingProps,s),null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&Ra(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(e=at.current,Dr(i)){if(e=i.stateNode,s=i.memoizedProps,l=null,d=qn,d!==null)switch(d.tag){case 27:case 5:l=d.memoizedProps}e[wt]=i,e=!!(e.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||jg(e.nodeValue,s)),e||rs(i,!0)}else e=Bc(e).createTextNode(l),e[wt]=i,i.stateNode=e}return un(i),null;case 31:if(s=i.memoizedState,e===null||e.memoizedState!==null){if(l=Dr(i),s!==null){if(e===null){if(!l)throw Error(a(318));if(e=i.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[wt]=i}else Xs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;un(i),e=!1}else s=uf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),e=!0;if(!e)return i.flags&256?(xi(i),i):(xi(i),null);if((i.flags&128)!==0)throw Error(a(558))}return un(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(d=Dr(i),l!==null&&l.dehydrated!==null){if(e===null){if(!d)throw Error(a(318));if(d=i.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(a(317));d[wt]=i}else Xs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;un(i),d=!1}else d=uf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=d),d=!0;if(!d)return i.flags&256?(xi(i),i):(xi(i),null)}return xi(i),(i.flags&128)!==0?(i.lanes=s,i):(s=l!==null,e=e!==null&&e.memoizedState!==null,s&&(l=i.child,d=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(d=l.alternate.memoizedState.cachePool.pool),m=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==d&&(l.flags|=2048)),s!==e&&s&&(i.child.flags|=8192),Mc(i,i.updateQueue),un(i),null);case 4:return Yt(),e===null&&Mh(i.stateNode.containerInfo),un(i),null;case 10:return ba(i.type),un(i),null;case 19:if(j(Mn),l=i.memoizedState,l===null)return un(i),null;if(d=(i.flags&128)!==0,m=l.rendering,m===null)if(d)Jo(l,!1);else{if(xn!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(m=cc(e),m!==null){for(i.flags|=128,Jo(l,!1),e=m.updateQueue,i.updateQueue=e,Mc(i,e),i.subtreeFlags=0,e=s,s=i.child;s!==null;)Am(s,e),s=s.sibling;return _t(Mn,Mn.current&1|2),Ue&&Ma(i,l.treeForkCount),i.child}e=e.sibling}l.tail!==null&&A()>wc&&(i.flags|=128,d=!0,Jo(l,!1),i.lanes=4194304)}else{if(!d)if(e=cc(m),e!==null){if(i.flags|=128,d=!0,e=e.updateQueue,i.updateQueue=e,Mc(i,e),Jo(l,!0),l.tail===null&&l.tailMode==="hidden"&&!m.alternate&&!Ue)return un(i),null}else 2*A()-l.renderingStartTime>wc&&s!==536870912&&(i.flags|=128,d=!0,Jo(l,!1),i.lanes=4194304);l.isBackwards?(m.sibling=i.child,i.child=m):(e=l.last,e!==null?e.sibling=m:i.child=m,l.last=m)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=A(),e.sibling=null,s=Mn.current,_t(Mn,d?s&1|2:s&1),Ue&&Ma(i,l.treeForkCount),e):(un(i),null);case 22:case 23:return xi(i),Ef(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(un(i),i.subtreeFlags&6&&(i.flags|=8192)):un(i),s=i.updateQueue,s!==null&&Mc(i,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),e!==null&&j(js),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),ba(bn),un(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function uS(e,i){switch(lf(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return ba(bn),Yt(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return Ee(i),null;case 31:if(i.memoizedState!==null){if(xi(i),i.alternate===null)throw Error(a(340));Xs()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 13:if(xi(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));Xs()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return j(Mn),null;case 4:return Yt(),null;case 10:return ba(i.type),null;case 22:case 23:return xi(i),Ef(),e!==null&&j(js),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return ba(bn),null;case 25:return null;default:return null}}function $0(e,i){switch(lf(i),i.tag){case 3:ba(bn),Yt();break;case 26:case 27:case 5:Ee(i);break;case 4:Yt();break;case 31:i.memoizedState!==null&&xi(i);break;case 13:xi(i);break;case 19:j(Mn);break;case 10:ba(i.type);break;case 22:case 23:xi(i),Ef(),e!==null&&j(js);break;case 24:ba(bn)}}function $o(e,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var d=l.next;s=d;do{if((s.tag&e)===e){l=void 0;var m=s.create,E=s.inst;l=m(),E.destroy=l}s=s.next}while(s!==d)}}catch(L){$e(i,i.return,L)}}function ds(e,i,s){try{var l=i.updateQueue,d=l!==null?l.lastEffect:null;if(d!==null){var m=d.next;l=m;do{if((l.tag&e)===e){var E=l.inst,L=E.destroy;if(L!==void 0){E.destroy=void 0,d=i;var q=s,st=L;try{st()}catch(mt){$e(d,q,mt)}}}l=l.next}while(l!==m)}}catch(mt){$e(i,i.return,mt)}}function tg(e){var i=e.updateQueue;if(i!==null){var s=e.stateNode;try{qm(i,s)}catch(l){$e(e,e.return,l)}}}function eg(e,i,s){s.props=$s(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(l){$e(e,i,l)}}function tl(e,i){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof s=="function"?e.refCleanup=s(l):s.current=l}}catch(d){$e(e,i,d)}}function ea(e,i){var s=e.ref,l=e.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(d){$e(e,i,d)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(d){$e(e,i,d)}else s.current=null}function ng(e){var i=e.type,s=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break t;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(d){$e(e,e.return,d)}}function eh(e,i,s){try{var l=e.stateNode;LS(l,e.type,s,i),l[Se]=i}catch(d){$e(e,e.return,d)}}function ig(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ys(e.type)||e.tag===4}function nh(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||ig(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ys(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ih(e,i,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(e),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=xa));else if(l!==4&&(l===27&&ys(e.type)&&(s=e.stateNode,i=null),e=e.child,e!==null))for(ih(e,i,s),e=e.sibling;e!==null;)ih(e,i,s),e=e.sibling}function Ec(e,i,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?s.insertBefore(e,i):s.appendChild(e);else if(l!==4&&(l===27&&ys(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(Ec(e,i,s),e=e.sibling;e!==null;)Ec(e,i,s),e=e.sibling}function ag(e){var i=e.stateNode,s=e.memoizedProps;try{for(var l=e.type,d=i.attributes;d.length;)i.removeAttributeNode(d[0]);Yn(i,l,s),i[wt]=e,i[Se]=s}catch(m){$e(e,e.return,m)}}var Ca=!1,wn=!1,ah=!1,sg=typeof WeakSet=="function"?WeakSet:Set,zn=null;function fS(e,i){if(e=e.containerInfo,Th=qc,e=vm(e),Ku(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var d=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break t}var E=0,L=-1,q=-1,st=0,mt=0,St=e,ot=null;e:for(;;){for(var ut;St!==s||d!==0&&St.nodeType!==3||(L=E+d),St!==m||l!==0&&St.nodeType!==3||(q=E+l),St.nodeType===3&&(E+=St.nodeValue.length),(ut=St.firstChild)!==null;)ot=St,St=ut;for(;;){if(St===e)break e;if(ot===s&&++st===d&&(L=E),ot===m&&++mt===l&&(q=E),(ut=St.nextSibling)!==null)break;St=ot,ot=St.parentNode}St=ut}s=L===-1||q===-1?null:{start:L,end:q}}else s=null}s=s||{start:0,end:0}}else s=null;for(Ah={focusedElem:e,selectionRange:s},qc=!1,zn=i;zn!==null;)if(i=zn,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,zn=e;else for(;zn!==null;){switch(i=zn,m=i.alternate,e=i.flags,i.tag){case 0:if((e&4)!==0&&(e=i.updateQueue,e=e!==null?e.events:null,e!==null))for(s=0;s<e.length;s++)d=e[s],d.ref.impl=d.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,s=i,d=m.memoizedProps,m=m.memoizedState,l=s.stateNode;try{var Jt=$s(s.type,d);e=l.getSnapshotBeforeUpdate(Jt,m),l.__reactInternalSnapshotBeforeUpdate=e}catch(le){$e(s,s.return,le)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,s=e.nodeType,s===9)Ch(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ch(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,zn=e;break}zn=i.return}}function rg(e,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Na(e,s),l&4&&$o(5,s);break;case 1:if(Na(e,s),l&4)if(e=s.stateNode,i===null)try{e.componentDidMount()}catch(E){$e(s,s.return,E)}else{var d=$s(s.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(d,i,e.__reactInternalSnapshotBeforeUpdate)}catch(E){$e(s,s.return,E)}}l&64&&tg(s),l&512&&tl(s,s.return);break;case 3:if(Na(e,s),l&64&&(e=s.updateQueue,e!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{qm(e,i)}catch(E){$e(s,s.return,E)}}break;case 27:i===null&&l&4&&ag(s);case 26:case 5:Na(e,s),i===null&&l&4&&ng(s),l&512&&tl(s,s.return);break;case 12:Na(e,s);break;case 31:Na(e,s),l&4&&cg(e,s);break;case 13:Na(e,s),l&4&&ug(e,s),l&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=yS.bind(null,s),HS(e,s))));break;case 22:if(l=s.memoizedState!==null||Ca,!l){i=i!==null&&i.memoizedState!==null||wn,d=Ca;var m=wn;Ca=l,(wn=i)&&!m?La(e,s,(s.subtreeFlags&8772)!==0):Na(e,s),Ca=d,wn=m}break;case 30:break;default:Na(e,s)}}function og(e){var i=e.alternate;i!==null&&(e.alternate=null,og(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&ln(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var dn=null,oi=!1;function Da(e,i,s){for(s=s.child;s!==null;)lg(e,i,s),s=s.sibling}function lg(e,i,s){if(Mt&&typeof Mt.onCommitFiberUnmount=="function")try{Mt.onCommitFiberUnmount(bt,s)}catch{}switch(s.tag){case 26:wn||ea(s,i),Da(e,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:wn||ea(s,i);var l=dn,d=oi;ys(s.type)&&(dn=s.stateNode,oi=!1),Da(e,i,s),cl(s.stateNode),dn=l,oi=d;break;case 5:wn||ea(s,i);case 6:if(l=dn,d=oi,dn=null,Da(e,i,s),dn=l,oi=d,dn!==null)if(oi)try{(dn.nodeType===9?dn.body:dn.nodeName==="HTML"?dn.ownerDocument.body:dn).removeChild(s.stateNode)}catch(m){$e(s,i,m)}else try{dn.removeChild(s.stateNode)}catch(m){$e(s,i,m)}break;case 18:dn!==null&&(oi?(e=dn,tv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),Qr(e)):tv(dn,s.stateNode));break;case 4:l=dn,d=oi,dn=s.stateNode.containerInfo,oi=!0,Da(e,i,s),dn=l,oi=d;break;case 0:case 11:case 14:case 15:ds(2,s,i),wn||ds(4,s,i),Da(e,i,s);break;case 1:wn||(ea(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&eg(s,i,l)),Da(e,i,s);break;case 21:Da(e,i,s);break;case 22:wn=(l=wn)||s.memoizedState!==null,Da(e,i,s),wn=l;break;default:Da(e,i,s)}}function cg(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Qr(e)}catch(s){$e(i,i.return,s)}}}function ug(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Qr(e)}catch(s){$e(i,i.return,s)}}function hS(e){switch(e.tag){case 31:case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new sg),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new sg),i;default:throw Error(a(435,e.tag))}}function bc(e,i){var s=hS(e);i.forEach(function(l){if(!s.has(l)){s.add(l);var d=SS.bind(null,e,l);l.then(d,d)}})}function li(e,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var d=s[l],m=e,E=i,L=E;t:for(;L!==null;){switch(L.tag){case 27:if(ys(L.type)){dn=L.stateNode,oi=!1;break t}break;case 5:dn=L.stateNode,oi=!1;break t;case 3:case 4:dn=L.stateNode.containerInfo,oi=!0;break t}L=L.return}if(dn===null)throw Error(a(160));lg(m,E,d),dn=null,oi=!1,m=d.alternate,m!==null&&(m.return=null),d.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)fg(i,e),i=i.sibling}var Hi=null;function fg(e,i){var s=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:li(i,e),ci(e),l&4&&(ds(3,e,e.return),$o(3,e),ds(5,e,e.return));break;case 1:li(i,e),ci(e),l&512&&(wn||s===null||ea(s,s.return)),l&64&&Ca&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var d=Hi;if(li(i,e),ci(e),l&512&&(wn||s===null||ea(s,s.return)),l&4){var m=s!==null?s.memoizedState:null;if(l=e.memoizedState,s===null)if(l===null)if(e.stateNode===null){t:{l=e.type,s=e.memoizedProps,d=d.ownerDocument||d;e:switch(l){case"title":m=d.getElementsByTagName("title")[0],(!m||m[We]||m[wt]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=d.createElement(l),d.head.insertBefore(m,d.querySelector("head > title"))),Yn(m,l,s),m[wt]=e,D(m),l=m;break t;case"link":var E=fv("link","href",d).get(l+(s.href||""));if(E){for(var L=0;L<E.length;L++)if(m=E[L],m.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&m.getAttribute("rel")===(s.rel==null?null:s.rel)&&m.getAttribute("title")===(s.title==null?null:s.title)&&m.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){E.splice(L,1);break e}}m=d.createElement(l),Yn(m,l,s),d.head.appendChild(m);break;case"meta":if(E=fv("meta","content",d).get(l+(s.content||""))){for(L=0;L<E.length;L++)if(m=E[L],m.getAttribute("content")===(s.content==null?null:""+s.content)&&m.getAttribute("name")===(s.name==null?null:s.name)&&m.getAttribute("property")===(s.property==null?null:s.property)&&m.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&m.getAttribute("charset")===(s.charSet==null?null:s.charSet)){E.splice(L,1);break e}}m=d.createElement(l),Yn(m,l,s),d.head.appendChild(m);break;default:throw Error(a(468,l))}m[wt]=e,D(m),l=m}e.stateNode=l}else hv(d,e.type,e.stateNode);else e.stateNode=uv(d,l,e.memoizedProps);else m!==l?(m===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):m.count--,l===null?hv(d,e.type,e.stateNode):uv(d,l,e.memoizedProps)):l===null&&e.stateNode!==null&&eh(e,e.memoizedProps,s.memoizedProps)}break;case 27:li(i,e),ci(e),l&512&&(wn||s===null||ea(s,s.return)),s!==null&&l&4&&eh(e,e.memoizedProps,s.memoizedProps);break;case 5:if(li(i,e),ci(e),l&512&&(wn||s===null||ea(s,s.return)),e.flags&32){d=e.stateNode;try{Dn(d,"")}catch(Jt){$e(e,e.return,Jt)}}l&4&&e.stateNode!=null&&(d=e.memoizedProps,eh(e,d,s!==null?s.memoizedProps:d)),l&1024&&(ah=!0);break;case 6:if(li(i,e),ci(e),l&4){if(e.stateNode===null)throw Error(a(162));l=e.memoizedProps,s=e.stateNode;try{s.nodeValue=l}catch(Jt){$e(e,e.return,Jt)}}break;case 3:if(Hc=null,d=Hi,Hi=Fc(i.containerInfo),li(i,e),Hi=d,ci(e),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Qr(i.containerInfo)}catch(Jt){$e(e,e.return,Jt)}ah&&(ah=!1,hg(e));break;case 4:l=Hi,Hi=Fc(e.stateNode.containerInfo),li(i,e),ci(e),Hi=l;break;case 12:li(i,e),ci(e);break;case 31:li(i,e),ci(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,bc(e,l)));break;case 13:li(i,e),ci(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Ac=A()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,bc(e,l)));break;case 22:d=e.memoizedState!==null;var q=s!==null&&s.memoizedState!==null,st=Ca,mt=wn;if(Ca=st||d,wn=mt||q,li(i,e),wn=mt,Ca=st,ci(e),l&8192)t:for(i=e.stateNode,i._visibility=d?i._visibility&-2:i._visibility|1,d&&(s===null||q||Ca||wn||tr(e)),s=null,i=e;;){if(i.tag===5||i.tag===26){if(s===null){q=s=i;try{if(m=q.stateNode,d)E=m.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{L=q.stateNode;var St=q.memoizedProps.style,ot=St!=null&&St.hasOwnProperty("display")?St.display:null;L.style.display=ot==null||typeof ot=="boolean"?"":(""+ot).trim()}}catch(Jt){$e(q,q.return,Jt)}}}else if(i.tag===6){if(s===null){q=i;try{q.stateNode.nodeValue=d?"":q.memoizedProps}catch(Jt){$e(q,q.return,Jt)}}}else if(i.tag===18){if(s===null){q=i;try{var ut=q.stateNode;d?ev(ut,!0):ev(q.stateNode,!1)}catch(Jt){$e(q,q.return,Jt)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,bc(e,s))));break;case 19:li(i,e),ci(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,bc(e,l)));break;case 30:break;case 21:break;default:li(i,e),ci(e)}}function ci(e){var i=e.flags;if(i&2){try{for(var s,l=e.return;l!==null;){if(ig(l)){s=l;break}l=l.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var d=s.stateNode,m=nh(e);Ec(e,m,d);break;case 5:var E=s.stateNode;s.flags&32&&(Dn(E,""),s.flags&=-33);var L=nh(e);Ec(e,L,E);break;case 3:case 4:var q=s.stateNode.containerInfo,st=nh(e);ih(e,st,q);break;default:throw Error(a(161))}}catch(mt){$e(e,e.return,mt)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function hg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;hg(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function Na(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)rg(e,i.alternate,i),i=i.sibling}function tr(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:ds(4,i,i.return),tr(i);break;case 1:ea(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&eg(i,i.return,s),tr(i);break;case 27:cl(i.stateNode);case 26:case 5:ea(i,i.return),tr(i);break;case 22:i.memoizedState===null&&tr(i);break;case 30:tr(i);break;default:tr(i)}e=e.sibling}}function La(e,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,d=e,m=i,E=m.flags;switch(m.tag){case 0:case 11:case 15:La(d,m,s),$o(4,m);break;case 1:if(La(d,m,s),l=m,d=l.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(st){$e(l,l.return,st)}if(l=m,d=l.updateQueue,d!==null){var L=l.stateNode;try{var q=d.shared.hiddenCallbacks;if(q!==null)for(d.shared.hiddenCallbacks=null,d=0;d<q.length;d++)km(q[d],L)}catch(st){$e(l,l.return,st)}}s&&E&64&&tg(m),tl(m,m.return);break;case 27:ag(m);case 26:case 5:La(d,m,s),s&&l===null&&E&4&&ng(m),tl(m,m.return);break;case 12:La(d,m,s);break;case 31:La(d,m,s),s&&E&4&&cg(d,m);break;case 13:La(d,m,s),s&&E&4&&ug(d,m);break;case 22:m.memoizedState===null&&La(d,m,s),tl(m,m.return);break;case 30:break;default:La(d,m,s)}i=i.sibling}}function sh(e,i){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&Ho(s))}function rh(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Ho(e))}function Gi(e,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)dg(e,i,s,l),i=i.sibling}function dg(e,i,s,l){var d=i.flags;switch(i.tag){case 0:case 11:case 15:Gi(e,i,s,l),d&2048&&$o(9,i);break;case 1:Gi(e,i,s,l);break;case 3:Gi(e,i,s,l),d&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Ho(e)));break;case 12:if(d&2048){Gi(e,i,s,l),e=i.stateNode;try{var m=i.memoizedProps,E=m.id,L=m.onPostCommit;typeof L=="function"&&L(E,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(q){$e(i,i.return,q)}}else Gi(e,i,s,l);break;case 31:Gi(e,i,s,l);break;case 13:Gi(e,i,s,l);break;case 23:break;case 22:m=i.stateNode,E=i.alternate,i.memoizedState!==null?m._visibility&2?Gi(e,i,s,l):el(e,i):m._visibility&2?Gi(e,i,s,l):(m._visibility|=2,Hr(e,i,s,l,(i.subtreeFlags&10256)!==0||!1)),d&2048&&sh(E,i);break;case 24:Gi(e,i,s,l),d&2048&&rh(i.alternate,i);break;default:Gi(e,i,s,l)}}function Hr(e,i,s,l,d){for(d=d&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var m=e,E=i,L=s,q=l,st=E.flags;switch(E.tag){case 0:case 11:case 15:Hr(m,E,L,q,d),$o(8,E);break;case 23:break;case 22:var mt=E.stateNode;E.memoizedState!==null?mt._visibility&2?Hr(m,E,L,q,d):el(m,E):(mt._visibility|=2,Hr(m,E,L,q,d)),d&&st&2048&&sh(E.alternate,E);break;case 24:Hr(m,E,L,q,d),d&&st&2048&&rh(E.alternate,E);break;default:Hr(m,E,L,q,d)}i=i.sibling}}function el(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=e,l=i,d=l.flags;switch(l.tag){case 22:el(s,l),d&2048&&sh(l.alternate,l);break;case 24:el(s,l),d&2048&&rh(l.alternate,l);break;default:el(s,l)}i=i.sibling}}var nl=8192;function Gr(e,i,s){if(e.subtreeFlags&nl)for(e=e.child;e!==null;)pg(e,i,s),e=e.sibling}function pg(e,i,s){switch(e.tag){case 26:Gr(e,i,s),e.flags&nl&&e.memoizedState!==null&&JS(s,Hi,e.memoizedState,e.memoizedProps);break;case 5:Gr(e,i,s);break;case 3:case 4:var l=Hi;Hi=Fc(e.stateNode.containerInfo),Gr(e,i,s),Hi=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=nl,nl=16777216,Gr(e,i,s),nl=l):Gr(e,i,s));break;default:Gr(e,i,s)}}function mg(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function il(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];zn=l,vg(l,e)}mg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)gg(e),e=e.sibling}function gg(e){switch(e.tag){case 0:case 11:case 15:il(e),e.flags&2048&&ds(9,e,e.return);break;case 3:il(e);break;case 12:il(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,Tc(e)):il(e);break;default:il(e)}}function Tc(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];zn=l,vg(l,e)}mg(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:ds(8,i,i.return),Tc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,Tc(i));break;default:Tc(i)}e=e.sibling}}function vg(e,i){for(;zn!==null;){var s=zn;switch(s.tag){case 0:case 11:case 15:ds(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Ho(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,zn=l;else t:for(s=e;zn!==null;){l=zn;var d=l.sibling,m=l.return;if(og(l),l===s){zn=null;break t}if(d!==null){d.return=m,zn=d;break t}zn=m}}}var dS={getCacheForType:function(e){var i=Xn(bn),s=i.data.get(e);return s===void 0&&(s=e(),i.data.set(e,s)),s},cacheSignal:function(){return Xn(bn).controller.signal}},pS=typeof WeakMap=="function"?WeakMap:Map,je=0,on=null,Ae=null,Ce=0,Je=0,yi=null,ps=!1,Vr=!1,oh=!1,Ua=0,xn=0,ms=0,er=0,lh=0,Si=0,kr=0,al=null,ui=null,ch=!1,Ac=0,_g=0,wc=1/0,Rc=null,gs=null,Nn=0,vs=null,qr=null,Oa=0,uh=0,fh=null,xg=null,sl=0,hh=null;function Mi(){return(je&2)!==0&&Ce!==0?Ce&-Ce:z.T!==null?_h():Ji()}function yg(){if(Si===0)if((Ce&536870912)===0||Ue){var e=Tt;Tt<<=1,(Tt&3932160)===0&&(Tt=262144),Si=e}else Si=536870912;return e=_i.current,e!==null&&(e.flags|=32),Si}function fi(e,i,s){(e===on&&(Je===2||Je===9)||e.cancelPendingCommit!==null)&&(Xr(e,0),_s(e,Ce,Si,!1)),mn(e,s),((je&2)===0||e!==on)&&(e===on&&((je&2)===0&&(er|=s),xn===4&&_s(e,Ce,Si,!1)),na(e))}function Sg(e,i,s){if((je&6)!==0)throw Error(a(327));var l=!s&&(i&127)===0&&(i&e.expiredLanes)===0||Ct(e,i),d=l?vS(e,i):ph(e,i,!0),m=l;do{if(d===0){Vr&&!l&&_s(e,i,0,!1);break}else{if(s=e.current.alternate,m&&!mS(s)){d=ph(e,i,!1),m=!1;continue}if(d===2){if(m=i,e.errorRecoveryDisabledLanes&m)var E=0;else E=e.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){i=E;t:{var L=e;d=al;var q=L.current.memoizedState.isDehydrated;if(q&&(Xr(L,E).flags|=256),E=ph(L,E,!1),E!==2){if(oh&&!q){L.errorRecoveryDisabledLanes|=m,er|=m,d=4;break t}m=ui,ui=d,m!==null&&(ui===null?ui=m:ui.push.apply(ui,m))}d=E}if(m=!1,d!==2)continue}}if(d===1){Xr(e,0),_s(e,i,0,!0);break}t:{switch(l=e,m=d,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:_s(l,i,Si,!ps);break t;case 2:ui=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(d=Ac+300-A(),10<d)){if(_s(l,i,Si,!ps),yt(l,0,!0)!==0)break t;Oa=i,l.timeoutHandle=Jg(Mg.bind(null,l,s,ui,Rc,ch,i,Si,er,kr,ps,m,"Throttled",-0,0),d);break t}Mg(l,s,ui,Rc,ch,i,Si,er,kr,ps,m,null,-0,0)}}break}while(!0);na(e)}function Mg(e,i,s,l,d,m,E,L,q,st,mt,St,ot,ut){if(e.timeoutHandle=-1,St=i.subtreeFlags,St&8192||(St&16785408)===16785408){St={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:xa},pg(i,m,St);var Jt=(m&62914560)===m?Ac-A():(m&4194048)===m?_g-A():0;if(Jt=$S(St,Jt),Jt!==null){Oa=m,e.cancelPendingCommit=Jt(Dg.bind(null,e,i,m,s,l,d,E,L,q,mt,St,null,ot,ut)),_s(e,m,E,!st);return}}Dg(e,i,m,s,l,d,E,L,q)}function mS(e){for(var i=e;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var d=s[l],m=d.getSnapshot;d=d.value;try{if(!gi(m(),d))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function _s(e,i,s,l){i&=~lh,i&=~er,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var d=i;0<d;){var m=31-Gt(d),E=1<<m;l[m]=-1,d&=~E}s!==0&&Fs(e,s,i)}function Cc(){return(je&6)===0?(rl(0),!1):!0}function dh(){if(Ae!==null){if(Je===0)var e=Ae.return;else e=Ae,Ea=Ws=null,Cf(e),zr=null,Vo=0,e=Ae;for(;e!==null;)$0(e.alternate,e),e=e.return;Ae=null}}function Xr(e,i){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,zS(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),Oa=0,dh(),on=e,Ae=s=Sa(e.current,null),Ce=i,Je=0,yi=null,ps=!1,Vr=Ct(e,i),oh=!1,kr=Si=lh=er=ms=xn=0,ui=al=null,ch=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var d=31-Gt(l),m=1<<d;i|=e[d],l&=~m}return Ua=i,Kl(),s}function Eg(e,i){me=null,z.H=Ko,i===Or||i===ac?(i=Im(),Je=3):i===vf?(i=Im(),Je=4):Je=i===Xf?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,yi=i,Ae===null&&(xn=1,_c(e,Ci(i,e.current)))}function bg(){var e=_i.current;return e===null?!0:(Ce&4194048)===Ce?Ui===null:(Ce&62914560)===Ce||(Ce&536870912)!==0?e===Ui:!1}function Tg(){var e=z.H;return z.H=Ko,e===null?Ko:e}function Ag(){var e=z.A;return z.A=dS,e}function Dc(){xn=4,ps||(Ce&4194048)!==Ce&&_i.current!==null||(Vr=!0),(ms&134217727)===0&&(er&134217727)===0||on===null||_s(on,Ce,Si,!1)}function ph(e,i,s){var l=je;je|=2;var d=Tg(),m=Ag();(on!==e||Ce!==i)&&(Rc=null,Xr(e,i)),i=!1;var E=xn;t:do try{if(Je!==0&&Ae!==null){var L=Ae,q=yi;switch(Je){case 8:dh(),E=6;break t;case 3:case 2:case 9:case 6:_i.current===null&&(i=!0);var st=Je;if(Je=0,yi=null,Wr(e,L,q,st),s&&Vr){E=0;break t}break;default:st=Je,Je=0,yi=null,Wr(e,L,q,st)}}gS(),E=xn;break}catch(mt){Eg(e,mt)}while(!0);return i&&e.shellSuspendCounter++,Ea=Ws=null,je=l,z.H=d,z.A=m,Ae===null&&(on=null,Ce=0,Kl()),E}function gS(){for(;Ae!==null;)wg(Ae)}function vS(e,i){var s=je;je|=2;var l=Tg(),d=Ag();on!==e||Ce!==i?(Rc=null,wc=A()+500,Xr(e,i)):Vr=Ct(e,i);t:do try{if(Je!==0&&Ae!==null){i=Ae;var m=yi;e:switch(Je){case 1:Je=0,yi=null,Wr(e,i,m,1);break;case 2:case 9:if(Bm(m)){Je=0,yi=null,Rg(i);break}i=function(){Je!==2&&Je!==9||on!==e||(Je=7),na(e)},m.then(i,i);break t;case 3:Je=7;break t;case 4:Je=5;break t;case 7:Bm(m)?(Je=0,yi=null,Rg(i)):(Je=0,yi=null,Wr(e,i,m,7));break;case 5:var E=null;switch(Ae.tag){case 26:E=Ae.memoizedState;case 5:case 27:var L=Ae;if(E?dv(E):L.stateNode.complete){Je=0,yi=null;var q=L.sibling;if(q!==null)Ae=q;else{var st=L.return;st!==null?(Ae=st,Nc(st)):Ae=null}break e}}Je=0,yi=null,Wr(e,i,m,5);break;case 6:Je=0,yi=null,Wr(e,i,m,6);break;case 8:dh(),xn=6;break t;default:throw Error(a(462))}}_S();break}catch(mt){Eg(e,mt)}while(!0);return Ea=Ws=null,z.H=l,z.A=d,je=s,Ae!==null?0:(on=null,Ce=0,Kl(),xn)}function _S(){for(;Ae!==null&&!Ht();)wg(Ae)}function wg(e){var i=Q0(e.alternate,e,Ua);e.memoizedProps=e.pendingProps,i===null?Nc(e):Ae=i}function Rg(e){var i=e,s=i.alternate;switch(i.tag){case 15:case 0:i=X0(s,i,i.pendingProps,i.type,void 0,Ce);break;case 11:i=X0(s,i,i.pendingProps,i.type.render,i.ref,Ce);break;case 5:Cf(i);default:$0(s,i),i=Ae=Am(i,Ua),i=Q0(s,i,Ua)}e.memoizedProps=e.pendingProps,i===null?Nc(e):Ae=i}function Wr(e,i,s,l){Ea=Ws=null,Cf(i),zr=null,Vo=0;var d=i.return;try{if(rS(e,d,i,s,Ce)){xn=1,_c(e,Ci(s,e.current)),Ae=null;return}}catch(m){if(d!==null)throw Ae=d,m;xn=1,_c(e,Ci(s,e.current)),Ae=null;return}i.flags&32768?(Ue||l===1?e=!0:Vr||(Ce&536870912)!==0?e=!1:(ps=e=!0,(l===2||l===9||l===3||l===6)&&(l=_i.current,l!==null&&l.tag===13&&(l.flags|=16384))),Cg(i,e)):Nc(i)}function Nc(e){var i=e;do{if((i.flags&32768)!==0){Cg(i,ps);return}e=i.return;var s=cS(i.alternate,i,Ua);if(s!==null){Ae=s;return}if(i=i.sibling,i!==null){Ae=i;return}Ae=i=e}while(i!==null);xn===0&&(xn=5)}function Cg(e,i){do{var s=uS(e.alternate,e);if(s!==null){s.flags&=32767,Ae=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(e=e.sibling,e!==null)){Ae=e;return}Ae=e=s}while(e!==null);xn=6,Ae=null}function Dg(e,i,s,l,d,m,E,L,q){e.cancelPendingCommit=null;do Lc();while(Nn!==0);if((je&6)!==0)throw Error(a(327));if(i!==null){if(i===e.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=ef,Bn(e,s,m,E,L,q),e===on&&(Ae=on=null,Ce=0),qr=i,vs=e,Oa=s,uh=m,fh=d,xg=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,MS(ht,function(){return zg(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=z.T,z.T=null,d=G.p,G.p=2,E=je,je|=4;try{fS(e,i,s)}finally{je=E,G.p=d,z.T=l}}Nn=1,Ng(),Lg(),Ug()}}function Ng(){if(Nn===1){Nn=0;var e=vs,i=qr,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=z.T,z.T=null;var l=G.p;G.p=2;var d=je;je|=4;try{fg(i,e);var m=Ah,E=vm(e.containerInfo),L=m.focusedElem,q=m.selectionRange;if(E!==L&&L&&L.ownerDocument&&gm(L.ownerDocument.documentElement,L)){if(q!==null&&Ku(L)){var st=q.start,mt=q.end;if(mt===void 0&&(mt=st),"selectionStart"in L)L.selectionStart=st,L.selectionEnd=Math.min(mt,L.value.length);else{var St=L.ownerDocument||document,ot=St&&St.defaultView||window;if(ot.getSelection){var ut=ot.getSelection(),Jt=L.textContent.length,le=Math.min(q.start,Jt),sn=q.end===void 0?le:Math.min(q.end,Jt);!ut.extend&&le>sn&&(E=sn,sn=le,le=E);var et=mm(L,le),Y=mm(L,sn);if(et&&Y&&(ut.rangeCount!==1||ut.anchorNode!==et.node||ut.anchorOffset!==et.offset||ut.focusNode!==Y.node||ut.focusOffset!==Y.offset)){var it=St.createRange();it.setStart(et.node,et.offset),ut.removeAllRanges(),le>sn?(ut.addRange(it),ut.extend(Y.node,Y.offset)):(it.setEnd(Y.node,Y.offset),ut.addRange(it))}}}}for(St=[],ut=L;ut=ut.parentNode;)ut.nodeType===1&&St.push({element:ut,left:ut.scrollLeft,top:ut.scrollTop});for(typeof L.focus=="function"&&L.focus(),L=0;L<St.length;L++){var xt=St[L];xt.element.scrollLeft=xt.left,xt.element.scrollTop=xt.top}}qc=!!Th,Ah=Th=null}finally{je=d,G.p=l,z.T=s}}e.current=i,Nn=2}}function Lg(){if(Nn===2){Nn=0;var e=vs,i=qr,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=z.T,z.T=null;var l=G.p;G.p=2;var d=je;je|=4;try{rg(e,i.alternate,i)}finally{je=d,G.p=l,z.T=s}}Nn=3}}function Ug(){if(Nn===4||Nn===3){Nn=0,F();var e=vs,i=qr,s=Oa,l=xg;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Nn=5:(Nn=0,qr=vs=null,Og(e,e.pendingLanes));var d=e.pendingLanes;if(d===0&&(gs=null),ns(s),i=i.stateNode,Mt&&typeof Mt.onCommitFiberRoot=="function")try{Mt.onCommitFiberRoot(bt,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=z.T,d=G.p,G.p=2,z.T=null;try{for(var m=e.onRecoverableError,E=0;E<l.length;E++){var L=l[E];m(L.value,{componentStack:L.stack})}}finally{z.T=i,G.p=d}}(Oa&3)!==0&&Lc(),na(e),d=e.pendingLanes,(s&261930)!==0&&(d&42)!==0?e===hh?sl++:(sl=0,hh=e):sl=0,rl(0)}}function Og(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,Ho(i)))}function Lc(){return Ng(),Lg(),Ug(),zg()}function zg(){if(Nn!==5)return!1;var e=vs,i=uh;uh=0;var s=ns(Oa),l=z.T,d=G.p;try{G.p=32>s?32:s,z.T=null,s=fh,fh=null;var m=vs,E=Oa;if(Nn=0,qr=vs=null,Oa=0,(je&6)!==0)throw Error(a(331));var L=je;if(je|=4,gg(m.current),dg(m,m.current,E,s),je=L,rl(0,!1),Mt&&typeof Mt.onPostCommitFiberRoot=="function")try{Mt.onPostCommitFiberRoot(bt,m)}catch{}return!0}finally{G.p=d,z.T=l,Og(e,i)}}function Pg(e,i,s){i=Ci(s,i),i=qf(e.stateNode,i,2),e=us(e,i,2),e!==null&&(mn(e,2),na(e))}function $e(e,i,s){if(e.tag===3)Pg(e,e,s);else for(;i!==null;){if(i.tag===3){Pg(i,e,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(gs===null||!gs.has(l))){e=Ci(s,e),s=B0(2),l=us(i,s,2),l!==null&&(F0(s,l,i,e),mn(l,2),na(l));break}}i=i.return}}function mh(e,i,s){var l=e.pingCache;if(l===null){l=e.pingCache=new pS;var d=new Set;l.set(i,d)}else d=l.get(i),d===void 0&&(d=new Set,l.set(i,d));d.has(s)||(oh=!0,d.add(s),e=xS.bind(null,e,i,s),i.then(e,e))}function xS(e,i,s){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,on===e&&(Ce&s)===s&&(xn===4||xn===3&&(Ce&62914560)===Ce&&300>A()-Ac?(je&2)===0&&Xr(e,0):lh|=s,kr===Ce&&(kr=0)),na(e)}function Bg(e,i){i===0&&(i=ze()),e=ks(e,i),e!==null&&(mn(e,i),na(e))}function yS(e){var i=e.memoizedState,s=0;i!==null&&(s=i.retryLane),Bg(e,s)}function SS(e,i){var s=0;switch(e.tag){case 31:case 13:var l=e.stateNode,d=e.memoizedState;d!==null&&(s=d.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),Bg(e,s)}function MS(e,i){return ye(e,i)}var Uc=null,Yr=null,gh=!1,Oc=!1,vh=!1,xs=0;function na(e){e!==Yr&&e.next===null&&(Yr===null?Uc=Yr=e:Yr=Yr.next=e),Oc=!0,gh||(gh=!0,bS())}function rl(e,i){if(!vh&&Oc){vh=!0;do for(var s=!1,l=Uc;l!==null;){if(e!==0){var d=l.pendingLanes;if(d===0)var m=0;else{var E=l.suspendedLanes,L=l.pingedLanes;m=(1<<31-Gt(42|e)+1)-1,m&=d&~(E&~L),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(s=!0,Gg(l,m))}else m=Ce,m=yt(l,l===on?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||Ct(l,m)||(s=!0,Gg(l,m));l=l.next}while(s);vh=!1}}function ES(){Fg()}function Fg(){Oc=gh=!1;var e=0;xs!==0&&OS()&&(e=xs);for(var i=A(),s=null,l=Uc;l!==null;){var d=l.next,m=Ig(l,i);m===0?(l.next=null,s===null?Uc=d:s.next=d,d===null&&(Yr=s)):(s=l,(e!==0||(m&3)!==0)&&(Oc=!0)),l=d}Nn!==0&&Nn!==5||rl(e),xs!==0&&(xs=0)}function Ig(e,i){for(var s=e.suspendedLanes,l=e.pingedLanes,d=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var E=31-Gt(m),L=1<<E,q=d[E];q===-1?((L&s)===0||(L&l)!==0)&&(d[E]=re(L,i)):q<=i&&(e.expiredLanes|=L),m&=~L}if(i=on,s=Ce,s=yt(e,e===i?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,s===0||e===i&&(Je===2||Je===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&ue(l),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||Ct(e,s)){if(i=s&-s,i===e.callbackPriority)return i;switch(l!==null&&ue(l),ns(s)){case 2:case 8:s=gt;break;case 32:s=ht;break;case 268435456:s=Nt;break;default:s=ht}return l=Hg.bind(null,e),s=ye(s,l),e.callbackPriority=i,e.callbackNode=s,i}return l!==null&&l!==null&&ue(l),e.callbackPriority=2,e.callbackNode=null,2}function Hg(e,i){if(Nn!==0&&Nn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(Lc()&&e.callbackNode!==s)return null;var l=Ce;return l=yt(e,e===on?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Sg(e,l,i),Ig(e,A()),e.callbackNode!=null&&e.callbackNode===s?Hg.bind(null,e):null)}function Gg(e,i){if(Lc())return null;Sg(e,i,!0)}function bS(){PS(function(){(je&6)!==0?ye(pt,ES):Fg()})}function _h(){if(xs===0){var e=Lr;e===0&&(e=zt,zt<<=1,(zt&261888)===0&&(zt=256)),xs=e}return xs}function Vg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Vl(""+e)}function kg(e,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,e.id&&s.setAttribute("form",e.id),i.parentNode.insertBefore(s,i),e=new FormData(e),s.parentNode.removeChild(s),e}function TS(e,i,s,l,d){if(i==="submit"&&s&&s.stateNode===d){var m=Vg((d[Se]||null).action),E=l.submitter;E&&(i=(i=E[Se]||null)?Vg(i.formAction):E.getAttribute("formAction"),i!==null&&(m=i,E=null));var L=new Wl("action","action",null,l,d);e.push({event:L,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(xs!==0){var q=E?kg(d,E):new FormData(d);Ff(s,{pending:!0,data:q,method:d.method,action:m},null,q)}}else typeof m=="function"&&(L.preventDefault(),q=E?kg(d,E):new FormData(d),Ff(s,{pending:!0,data:q,method:d.method,action:m},m,q))},currentTarget:d}]})}}for(var xh=0;xh<tf.length;xh++){var yh=tf[xh],AS=yh.toLowerCase(),wS=yh[0].toUpperCase()+yh.slice(1);Ii(AS,"on"+wS)}Ii(ym,"onAnimationEnd"),Ii(Sm,"onAnimationIteration"),Ii(Mm,"onAnimationStart"),Ii("dblclick","onDoubleClick"),Ii("focusin","onFocus"),Ii("focusout","onBlur"),Ii(ky,"onTransitionRun"),Ii(qy,"onTransitionStart"),Ii(Xy,"onTransitionCancel"),Ii(Em,"onTransitionEnd"),nt("onMouseEnter",["mouseout","mouseover"]),nt("onMouseLeave",["mouseout","mouseover"]),nt("onPointerEnter",["pointerout","pointerover"]),nt("onPointerLeave",["pointerout","pointerover"]),rt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),rt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),rt("onBeforeInput",["compositionend","keypress","textInput","paste"]),rt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),rt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),rt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ol="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),RS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ol));function qg(e,i){i=(i&4)!==0;for(var s=0;s<e.length;s++){var l=e[s],d=l.event;l=l.listeners;t:{var m=void 0;if(i)for(var E=l.length-1;0<=E;E--){var L=l[E],q=L.instance,st=L.currentTarget;if(L=L.listener,q!==m&&d.isPropagationStopped())break t;m=L,d.currentTarget=st;try{m(d)}catch(mt){Zl(mt)}d.currentTarget=null,m=q}else for(E=0;E<l.length;E++){if(L=l[E],q=L.instance,st=L.currentTarget,L=L.listener,q!==m&&d.isPropagationStopped())break t;m=L,d.currentTarget=st;try{m(d)}catch(mt){Zl(mt)}d.currentTarget=null,m=q}}}}function we(e,i){var s=i[gn];s===void 0&&(s=i[gn]=new Set);var l=e+"__bubble";s.has(l)||(Xg(i,e,2,!1),s.add(l))}function Sh(e,i,s){var l=0;i&&(l|=4),Xg(s,e,l,i)}var zc="_reactListening"+Math.random().toString(36).slice(2);function Mh(e){if(!e[zc]){e[zc]=!0,tt.forEach(function(s){s!=="selectionchange"&&(RS.has(s)||Sh(s,!1,e),Sh(s,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[zc]||(i[zc]=!0,Sh("selectionchange",!1,i))}}function Xg(e,i,s,l){switch(yv(i)){case 2:var d=nM;break;case 8:d=iM;break;default:d=Bh}s=d.bind(null,i,s,e),d=void 0,!Gu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),l?d!==void 0?e.addEventListener(i,s,{capture:!0,passive:d}):e.addEventListener(i,s,!0):d!==void 0?e.addEventListener(i,s,{passive:d}):e.addEventListener(i,s,!1)}function Eh(e,i,s,l,d){var m=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var L=l.stateNode.containerInfo;if(L===d)break;if(E===4)for(E=l.return;E!==null;){var q=E.tag;if((q===3||q===4)&&E.stateNode.containerInfo===d)return;E=E.return}for(;L!==null;){if(E=hn(L),E===null)return;if(q=E.tag,q===5||q===6||q===26||q===27){l=m=E;continue t}L=L.parentNode}}l=l.return}Kp(function(){var st=m,mt=Iu(s),St=[];t:{var ot=bm.get(e);if(ot!==void 0){var ut=Wl,Jt=e;switch(e){case"keypress":if(ql(s)===0)break t;case"keydown":case"keyup":ut=Sy;break;case"focusin":Jt="focus",ut=Xu;break;case"focusout":Jt="blur",ut=Xu;break;case"beforeblur":case"afterblur":ut=Xu;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ut=$p;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ut=cy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ut=by;break;case ym:case Sm:case Mm:ut=hy;break;case Em:ut=Ay;break;case"scroll":case"scrollend":ut=oy;break;case"wheel":ut=Ry;break;case"copy":case"cut":case"paste":ut=py;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ut=em;break;case"toggle":case"beforetoggle":ut=Dy}var le=(i&4)!==0,sn=!le&&(e==="scroll"||e==="scrollend"),et=le?ot!==null?ot+"Capture":null:ot;le=[];for(var Y=st,it;Y!==null;){var xt=Y;if(it=xt.stateNode,xt=xt.tag,xt!==5&&xt!==26&&xt!==27||it===null||et===null||(xt=Co(Y,et),xt!=null&&le.push(ll(Y,xt,it))),sn)break;Y=Y.return}0<le.length&&(ot=new ut(ot,Jt,null,s,mt),St.push({event:ot,listeners:le}))}}if((i&7)===0){t:{if(ot=e==="mouseover"||e==="pointerover",ut=e==="mouseout"||e==="pointerout",ot&&s!==Fu&&(Jt=s.relatedTarget||s.fromElement)&&(hn(Jt)||Jt[Re]))break t;if((ut||ot)&&(ot=mt.window===mt?mt:(ot=mt.ownerDocument)?ot.defaultView||ot.parentWindow:window,ut?(Jt=s.relatedTarget||s.toElement,ut=st,Jt=Jt?hn(Jt):null,Jt!==null&&(sn=o(Jt),le=Jt.tag,Jt!==sn||le!==5&&le!==27&&le!==6)&&(Jt=null)):(ut=null,Jt=st),ut!==Jt)){if(le=$p,xt="onMouseLeave",et="onMouseEnter",Y="mouse",(e==="pointerout"||e==="pointerover")&&(le=em,xt="onPointerLeave",et="onPointerEnter",Y="pointer"),sn=ut==null?ot:Fn(ut),it=Jt==null?ot:Fn(Jt),ot=new le(xt,Y+"leave",ut,s,mt),ot.target=sn,ot.relatedTarget=it,xt=null,hn(mt)===st&&(le=new le(et,Y+"enter",Jt,s,mt),le.target=it,le.relatedTarget=sn,xt=le),sn=xt,ut&&Jt)e:{for(le=CS,et=ut,Y=Jt,it=0,xt=et;xt;xt=le(xt))it++;xt=0;for(var ae=Y;ae;ae=le(ae))xt++;for(;0<it-xt;)et=le(et),it--;for(;0<xt-it;)Y=le(Y),xt--;for(;it--;){if(et===Y||Y!==null&&et===Y.alternate){le=et;break e}et=le(et),Y=le(Y)}le=null}else le=null;ut!==null&&Wg(St,ot,ut,le,!1),Jt!==null&&sn!==null&&Wg(St,sn,Jt,le,!0)}}t:{if(ot=st?Fn(st):window,ut=ot.nodeName&&ot.nodeName.toLowerCase(),ut==="select"||ut==="input"&&ot.type==="file")var Ge=cm;else if(om(ot))if(um)Ge=Hy;else{Ge=Fy;var te=By}else ut=ot.nodeName,!ut||ut.toLowerCase()!=="input"||ot.type!=="checkbox"&&ot.type!=="radio"?st&&Fi(st.elementType)&&(Ge=cm):Ge=Iy;if(Ge&&(Ge=Ge(e,st))){lm(St,Ge,s,mt);break t}te&&te(e,ot,st),e==="focusout"&&st&&ot.type==="number"&&st.memoizedProps.value!=null&&Hn(ot,"number",ot.value)}switch(te=st?Fn(st):window,e){case"focusin":(om(te)||te.contentEditable==="true")&&(br=te,Qu=st,Bo=null);break;case"focusout":Bo=Qu=br=null;break;case"mousedown":Ju=!0;break;case"contextmenu":case"mouseup":case"dragend":Ju=!1,_m(St,s,mt);break;case"selectionchange":if(Vy)break;case"keydown":case"keyup":_m(St,s,mt)}var ge;if(Yu)t:{switch(e){case"compositionstart":var De="onCompositionStart";break t;case"compositionend":De="onCompositionEnd";break t;case"compositionupdate":De="onCompositionUpdate";break t}De=void 0}else Er?sm(e,s)&&(De="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(De="onCompositionStart");De&&(nm&&s.locale!=="ko"&&(Er||De!=="onCompositionStart"?De==="onCompositionEnd"&&Er&&(ge=Qp()):(is=mt,Vu="value"in is?is.value:is.textContent,Er=!0)),te=Pc(st,De),0<te.length&&(De=new tm(De,e,null,s,mt),St.push({event:De,listeners:te}),ge?De.data=ge:(ge=rm(s),ge!==null&&(De.data=ge)))),(ge=Ly?Uy(e,s):Oy(e,s))&&(De=Pc(st,"onBeforeInput"),0<De.length&&(te=new tm("onBeforeInput","beforeinput",null,s,mt),St.push({event:te,listeners:De}),te.data=ge)),TS(St,e,st,s,mt)}qg(St,i)})}function ll(e,i,s){return{instance:e,listener:i,currentTarget:s}}function Pc(e,i){for(var s=i+"Capture",l=[];e!==null;){var d=e,m=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||m===null||(d=Co(e,s),d!=null&&l.unshift(ll(e,d,m)),d=Co(e,i),d!=null&&l.push(ll(e,d,m))),e.tag===3)return l;e=e.return}return[]}function CS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Wg(e,i,s,l,d){for(var m=i._reactName,E=[];s!==null&&s!==l;){var L=s,q=L.alternate,st=L.stateNode;if(L=L.tag,q!==null&&q===l)break;L!==5&&L!==26&&L!==27||st===null||(q=st,d?(st=Co(s,m),st!=null&&E.unshift(ll(s,st,q))):d||(st=Co(s,m),st!=null&&E.push(ll(s,st,q)))),s=s.return}E.length!==0&&e.push({event:i,listeners:E})}var DS=/\r\n?/g,NS=/\u0000|\uFFFD/g;function Yg(e){return(typeof e=="string"?e:""+e).replace(DS,`
`).replace(NS,"")}function jg(e,i){return i=Yg(i),Yg(e)===i}function an(e,i,s,l,d,m){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Dn(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Dn(e,""+l);break;case"className":ie(e,"class",l);break;case"tabIndex":ie(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ie(e,s,l);break;case"style":yr(e,l,m);break;case"data":if(i!=="object"){ie(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){e.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=Vl(""+l),e.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(s==="formAction"?(i!=="input"&&an(e,i,"name",d.name,d,null),an(e,i,"formEncType",d.formEncType,d,null),an(e,i,"formMethod",d.formMethod,d,null),an(e,i,"formTarget",d.formTarget,d,null)):(an(e,i,"encType",d.encType,d,null),an(e,i,"method",d.method,d,null),an(e,i,"target",d.target,d,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=Vl(""+l),e.setAttribute(s,l);break;case"onClick":l!=null&&(e.onclick=xa);break;case"onScroll":l!=null&&we("scroll",e);break;case"onScrollEnd":l!=null&&we("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(d.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}s=Vl(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""+l):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":l===!0?e.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,l):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(s,l):e.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(s):e.setAttribute(s,l);break;case"popover":we("beforetoggle",e),we("toggle",e),jt(e,"popover",l);break;case"xlinkActuate":Qt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Qt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Qt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Qt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Qt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Qt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Qt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Qt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Qt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":jt(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=sy.get(s)||s,jt(e,s,l))}}function bh(e,i,s,l,d,m){switch(s){case"style":yr(e,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(d.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"children":typeof l=="string"?Dn(e,l):(typeof l=="number"||typeof l=="bigint")&&Dn(e,""+l);break;case"onScroll":l!=null&&we("scroll",e);break;case"onScrollEnd":l!=null&&we("scrollend",e);break;case"onClick":l!=null&&(e.onclick=xa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ct.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(d=s.endsWith("Capture"),i=s.slice(2,d?s.length-7:void 0),m=e[Se]||null,m=m!=null?m[s]:null,typeof m=="function"&&e.removeEventListener(i,m,d),typeof l=="function")){typeof m!="function"&&m!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(i,l,d);break t}s in e?e[s]=l:l===!0?e.setAttribute(s,""):jt(e,s,l)}}}function Yn(e,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":we("error",e),we("load",e);var l=!1,d=!1,m;for(m in s)if(s.hasOwnProperty(m)){var E=s[m];if(E!=null)switch(m){case"src":l=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:an(e,i,m,E,s,null)}}d&&an(e,i,"srcSet",s.srcSet,s,null),l&&an(e,i,"src",s.src,s,null);return;case"input":we("invalid",e);var L=m=E=d=null,q=null,st=null;for(l in s)if(s.hasOwnProperty(l)){var mt=s[l];if(mt!=null)switch(l){case"name":d=mt;break;case"type":E=mt;break;case"checked":q=mt;break;case"defaultChecked":st=mt;break;case"value":m=mt;break;case"defaultValue":L=mt;break;case"children":case"dangerouslySetInnerHTML":if(mt!=null)throw Error(a(137,i));break;default:an(e,i,l,mt,s,null)}}_a(e,m,L,q,st,E,d,!1);return;case"select":we("invalid",e),l=E=m=null;for(d in s)if(s.hasOwnProperty(d)&&(L=s[d],L!=null))switch(d){case"value":m=L;break;case"defaultValue":E=L;break;case"multiple":l=L;default:an(e,i,d,L,s,null)}i=m,s=E,e.multiple=!!l,i!=null?wi(e,!!l,i,!1):s!=null&&wi(e,!!l,s,!0);return;case"textarea":we("invalid",e),m=d=l=null;for(E in s)if(s.hasOwnProperty(E)&&(L=s[E],L!=null))switch(E){case"value":l=L;break;case"defaultValue":d=L;break;case"children":m=L;break;case"dangerouslySetInnerHTML":if(L!=null)throw Error(a(91));break;default:an(e,i,E,L,s,null)}Gn(e,l,d,m);return;case"option":for(q in s)s.hasOwnProperty(q)&&(l=s[q],l!=null)&&(q==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":an(e,i,q,l,s,null));return;case"dialog":we("beforetoggle",e),we("toggle",e),we("cancel",e),we("close",e);break;case"iframe":case"object":we("load",e);break;case"video":case"audio":for(l=0;l<ol.length;l++)we(ol[l],e);break;case"image":we("error",e),we("load",e);break;case"details":we("toggle",e);break;case"embed":case"source":case"link":we("error",e),we("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(st in s)if(s.hasOwnProperty(st)&&(l=s[st],l!=null))switch(st){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:an(e,i,st,l,s,null)}return;default:if(Fi(i)){for(mt in s)s.hasOwnProperty(mt)&&(l=s[mt],l!==void 0&&bh(e,i,mt,l,s,void 0));return}}for(L in s)s.hasOwnProperty(L)&&(l=s[L],l!=null&&an(e,i,L,l,s,null))}function LS(e,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,m=null,E=null,L=null,q=null,st=null,mt=null;for(ut in s){var St=s[ut];if(s.hasOwnProperty(ut)&&St!=null)switch(ut){case"checked":break;case"value":break;case"defaultValue":q=St;default:l.hasOwnProperty(ut)||an(e,i,ut,null,l,St)}}for(var ot in l){var ut=l[ot];if(St=s[ot],l.hasOwnProperty(ot)&&(ut!=null||St!=null))switch(ot){case"type":m=ut;break;case"name":d=ut;break;case"checked":st=ut;break;case"defaultChecked":mt=ut;break;case"value":E=ut;break;case"defaultValue":L=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(a(137,i));break;default:ut!==St&&an(e,i,ot,ut,l,St)}}In(e,E,L,q,st,mt,m,d);return;case"select":ut=E=L=ot=null;for(m in s)if(q=s[m],s.hasOwnProperty(m)&&q!=null)switch(m){case"value":break;case"multiple":ut=q;default:l.hasOwnProperty(m)||an(e,i,m,null,l,q)}for(d in l)if(m=l[d],q=s[d],l.hasOwnProperty(d)&&(m!=null||q!=null))switch(d){case"value":ot=m;break;case"defaultValue":L=m;break;case"multiple":E=m;default:m!==q&&an(e,i,d,m,l,q)}i=L,s=E,l=ut,ot!=null?wi(e,!!s,ot,!1):!!l!=!!s&&(i!=null?wi(e,!!s,i,!0):wi(e,!!s,s?[]:"",!1));return;case"textarea":ut=ot=null;for(L in s)if(d=s[L],s.hasOwnProperty(L)&&d!=null&&!l.hasOwnProperty(L))switch(L){case"value":break;case"children":break;default:an(e,i,L,null,l,d)}for(E in l)if(d=l[E],m=s[E],l.hasOwnProperty(E)&&(d!=null||m!=null))switch(E){case"value":ot=d;break;case"defaultValue":ut=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(a(91));break;default:d!==m&&an(e,i,E,d,l,m)}Qe(e,ot,ut);return;case"option":for(var Jt in s)ot=s[Jt],s.hasOwnProperty(Jt)&&ot!=null&&!l.hasOwnProperty(Jt)&&(Jt==="selected"?e.selected=!1:an(e,i,Jt,null,l,ot));for(q in l)ot=l[q],ut=s[q],l.hasOwnProperty(q)&&ot!==ut&&(ot!=null||ut!=null)&&(q==="selected"?e.selected=ot&&typeof ot!="function"&&typeof ot!="symbol":an(e,i,q,ot,l,ut));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var le in s)ot=s[le],s.hasOwnProperty(le)&&ot!=null&&!l.hasOwnProperty(le)&&an(e,i,le,null,l,ot);for(st in l)if(ot=l[st],ut=s[st],l.hasOwnProperty(st)&&ot!==ut&&(ot!=null||ut!=null))switch(st){case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(a(137,i));break;default:an(e,i,st,ot,l,ut)}return;default:if(Fi(i)){for(var sn in s)ot=s[sn],s.hasOwnProperty(sn)&&ot!==void 0&&!l.hasOwnProperty(sn)&&bh(e,i,sn,void 0,l,ot);for(mt in l)ot=l[mt],ut=s[mt],!l.hasOwnProperty(mt)||ot===ut||ot===void 0&&ut===void 0||bh(e,i,mt,ot,l,ut);return}}for(var et in s)ot=s[et],s.hasOwnProperty(et)&&ot!=null&&!l.hasOwnProperty(et)&&an(e,i,et,null,l,ot);for(St in l)ot=l[St],ut=s[St],!l.hasOwnProperty(St)||ot===ut||ot==null&&ut==null||an(e,i,St,ot,l,ut)}function Zg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function US(){if(typeof performance.getEntriesByType=="function"){for(var e=0,i=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var d=s[l],m=d.transferSize,E=d.initiatorType,L=d.duration;if(m&&L&&Zg(E)){for(E=0,L=d.responseEnd,l+=1;l<s.length;l++){var q=s[l],st=q.startTime;if(st>L)break;var mt=q.transferSize,St=q.initiatorType;mt&&Zg(St)&&(q=q.responseEnd,E+=mt*(q<L?1:(L-st)/(q-st)))}if(--l,i+=8*(m+E)/(d.duration/1e3),e++,10<e)break}}if(0<e)return i/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Th=null,Ah=null;function Bc(e){return e.nodeType===9?e:e.ownerDocument}function Kg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Qg(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function wh(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Rh=null;function OS(){var e=window.event;return e&&e.type==="popstate"?e===Rh?!1:(Rh=e,!0):(Rh=null,!1)}var Jg=typeof setTimeout=="function"?setTimeout:void 0,zS=typeof clearTimeout=="function"?clearTimeout:void 0,$g=typeof Promise=="function"?Promise:void 0,PS=typeof queueMicrotask=="function"?queueMicrotask:typeof $g<"u"?function(e){return $g.resolve(null).then(e).catch(BS)}:Jg;function BS(e){setTimeout(function(){throw e})}function ys(e){return e==="head"}function tv(e,i){var s=i,l=0;do{var d=s.nextSibling;if(e.removeChild(s),d&&d.nodeType===8)if(s=d.data,s==="/$"||s==="/&"){if(l===0){e.removeChild(d),Qr(i);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")cl(e.ownerDocument.documentElement);else if(s==="head"){s=e.ownerDocument.head,cl(s);for(var m=s.firstChild;m;){var E=m.nextSibling,L=m.nodeName;m[We]||L==="SCRIPT"||L==="STYLE"||L==="LINK"&&m.rel.toLowerCase()==="stylesheet"||s.removeChild(m),m=E}}else s==="body"&&cl(e.ownerDocument.body);s=d}while(s);Qr(i)}function ev(e,i){var s=e;e=0;do{var l=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(e===0)break;e--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||e++;s=l}while(s)}function Ch(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Ch(s),ln(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function FS(e,i,s,l){for(;e.nodeType===1;){var d=s;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[We])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==d.rel||e.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||e.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||e.getAttribute("title")!==(d.title==null?null:d.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(d.src==null?null:d.src)||e.getAttribute("type")!==(d.type==null?null:d.type)||e.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var m=d.name==null?null:""+d.name;if(d.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=Oi(e.nextSibling),e===null)break}return null}function IS(e,i,s){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=Oi(e.nextSibling),e===null))return null;return e}function nv(e,i){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=Oi(e.nextSibling),e===null))return null;return e}function Dh(e){return e.data==="$?"||e.data==="$~"}function Nh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function HS(e,i){var s=e.ownerDocument;if(e.data==="$~")e._reactRetry=i;else if(e.data!=="$?"||s.readyState!=="loading")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Oi(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return e}var Lh=null;function iv(e){e=e.nextSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="/$"||s==="/&"){if(i===0)return Oi(e.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}e=e.nextSibling}return null}function av(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return e;i--}else s!=="/$"&&s!=="/&"||i++}e=e.previousSibling}return null}function sv(e,i,s){switch(i=Bc(s),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function cl(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);ln(e)}var zi=new Map,rv=new Set;function Fc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var za=G.d;G.d={f:GS,r:VS,D:kS,C:qS,L:XS,m:WS,X:jS,S:YS,M:ZS};function GS(){var e=za.f(),i=Cc();return e||i}function VS(e){var i=Le(e);i!==null&&i.tag===5&&i.type==="form"?E0(i):za.r(e)}var jr=typeof document>"u"?null:document;function ov(e,i,s){var l=jr;if(l&&typeof i=="string"&&i){var d=ce(i);d='link[rel="'+e+'"][href="'+d+'"]',typeof s=="string"&&(d+='[crossorigin="'+s+'"]'),rv.has(d)||(rv.add(d),e={rel:e,crossOrigin:s,href:i},l.querySelector(d)===null&&(i=l.createElement("link"),Yn(i,"link",e),D(i),l.head.appendChild(i)))}}function kS(e){za.D(e),ov("dns-prefetch",e,null)}function qS(e,i){za.C(e,i),ov("preconnect",e,i)}function XS(e,i,s){za.L(e,i,s);var l=jr;if(l&&e&&i){var d='link[rel="preload"][as="'+ce(i)+'"]';i==="image"&&s&&s.imageSrcSet?(d+='[imagesrcset="'+ce(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(d+='[imagesizes="'+ce(s.imageSizes)+'"]')):d+='[href="'+ce(e)+'"]';var m=d;switch(i){case"style":m=Zr(e);break;case"script":m=Kr(e)}zi.has(m)||(e=_({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:e,as:i},s),zi.set(m,e),l.querySelector(d)!==null||i==="style"&&l.querySelector(ul(m))||i==="script"&&l.querySelector(fl(m))||(i=l.createElement("link"),Yn(i,"link",e),D(i),l.head.appendChild(i)))}}function WS(e,i){za.m(e,i);var s=jr;if(s&&e){var l=i&&typeof i.as=="string"?i.as:"script",d='link[rel="modulepreload"][as="'+ce(l)+'"][href="'+ce(e)+'"]',m=d;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Kr(e)}if(!zi.has(m)&&(e=_({rel:"modulepreload",href:e},i),zi.set(m,e),s.querySelector(d)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(fl(m)))return}l=s.createElement("link"),Yn(l,"link",e),D(l),s.head.appendChild(l)}}}function YS(e,i,s){za.S(e,i,s);var l=jr;if(l&&e){var d=ni(l).hoistableStyles,m=Zr(e);i=i||"default";var E=d.get(m);if(!E){var L={loading:0,preload:null};if(E=l.querySelector(ul(m)))L.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":i},s),(s=zi.get(m))&&Uh(e,s);var q=E=l.createElement("link");D(q),Yn(q,"link",e),q._p=new Promise(function(st,mt){q.onload=st,q.onerror=mt}),q.addEventListener("load",function(){L.loading|=1}),q.addEventListener("error",function(){L.loading|=2}),L.loading|=4,Ic(E,i,l)}E={type:"stylesheet",instance:E,count:1,state:L},d.set(m,E)}}}function jS(e,i){za.X(e,i);var s=jr;if(s&&e){var l=ni(s).hoistableScripts,d=Kr(e),m=l.get(d);m||(m=s.querySelector(fl(d)),m||(e=_({src:e,async:!0},i),(i=zi.get(d))&&Oh(e,i),m=s.createElement("script"),D(m),Yn(m,"link",e),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(d,m))}}function ZS(e,i){za.M(e,i);var s=jr;if(s&&e){var l=ni(s).hoistableScripts,d=Kr(e),m=l.get(d);m||(m=s.querySelector(fl(d)),m||(e=_({src:e,async:!0,type:"module"},i),(i=zi.get(d))&&Oh(e,i),m=s.createElement("script"),D(m),Yn(m,"link",e),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(d,m))}}function lv(e,i,s,l){var d=(d=at.current)?Fc(d):null;if(!d)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=Zr(s.href),s=ni(d).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=Zr(s.href);var m=ni(d).hoistableStyles,E=m.get(e);if(E||(d=d.ownerDocument||d,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,E),(m=d.querySelector(ul(e)))&&!m._p&&(E.instance=m,E.state.loading=5),zi.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},zi.set(e,s),m||KS(d,e,s,E.state))),i&&l===null)throw Error(a(528,""));return E}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Kr(s),s=ni(d).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Zr(e){return'href="'+ce(e)+'"'}function ul(e){return'link[rel="stylesheet"]['+e+"]"}function cv(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function KS(e,i,s,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Yn(i,"link",s),D(i),e.head.appendChild(i))}function Kr(e){return'[src="'+ce(e)+'"]'}function fl(e){return"script[async]"+e}function uv(e,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+ce(s.href)+'"]');if(l)return i.instance=l,D(l),l;var d=_({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),D(l),Yn(l,"style",d),Ic(l,s.precedence,e),i.instance=l;case"stylesheet":d=Zr(s.href);var m=e.querySelector(ul(d));if(m)return i.state.loading|=4,i.instance=m,D(m),m;l=cv(s),(d=zi.get(d))&&Uh(l,d),m=(e.ownerDocument||e).createElement("link"),D(m);var E=m;return E._p=new Promise(function(L,q){E.onload=L,E.onerror=q}),Yn(m,"link",l),i.state.loading|=4,Ic(m,s.precedence,e),i.instance=m;case"script":return m=Kr(s.src),(d=e.querySelector(fl(m)))?(i.instance=d,D(d),d):(l=s,(d=zi.get(m))&&(l=_({},s),Oh(l,d)),e=e.ownerDocument||e,d=e.createElement("script"),D(d),Yn(d,"link",l),e.head.appendChild(d),i.instance=d);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Ic(l,s.precedence,e));return i.instance}function Ic(e,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=l.length?l[l.length-1]:null,m=d,E=0;E<l.length;E++){var L=l[E];if(L.dataset.precedence===i)m=L;else if(m!==d)break}m?m.parentNode.insertBefore(e,m.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(e,i.firstChild))}function Uh(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function Oh(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var Hc=null;function fv(e,i,s){if(Hc===null){var l=new Map,d=Hc=new Map;d.set(s,l)}else d=Hc,l=d.get(s),l||(l=new Map,d.set(s,l));if(l.has(e))return l;for(l.set(e,null),s=s.getElementsByTagName(e),d=0;d<s.length;d++){var m=s[d];if(!(m[We]||m[wt]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var E=m.getAttribute(i)||"";E=e+E;var L=l.get(E);L?L.push(m):l.set(E,[m])}}return l}function hv(e,i,s){e=e.ownerDocument||e,e.head.insertBefore(s,i==="title"?e.querySelector("head > title"):null)}function QS(e,i,s){if(s===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;return i.rel==="stylesheet"?(e=i.disabled,typeof i.precedence=="string"&&e==null):!0;case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function dv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function JS(e,i,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var d=Zr(l.href),m=i.querySelector(ul(d));if(m){i=m._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(e.count++,e=Gc.bind(e),i.then(e,e)),s.state.loading|=4,s.instance=m,D(m);return}m=i.ownerDocument||i,l=cv(l),(d=zi.get(d))&&Uh(l,d),m=m.createElement("link"),D(m);var E=m;E._p=new Promise(function(L,q){E.onload=L,E.onerror=q}),Yn(m,"link",l),s.instance=m}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(e.count++,s=Gc.bind(e),i.addEventListener("load",s),i.addEventListener("error",s))}}var zh=0;function $S(e,i){return e.stylesheets&&e.count===0&&kc(e,e.stylesheets),0<e.count||0<e.imgCount?function(s){var l=setTimeout(function(){if(e.stylesheets&&kc(e,e.stylesheets),e.unsuspend){var m=e.unsuspend;e.unsuspend=null,m()}},6e4+i);0<e.imgBytes&&zh===0&&(zh=62500*US());var d=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&kc(e,e.stylesheets),e.unsuspend)){var m=e.unsuspend;e.unsuspend=null,m()}},(e.imgBytes>zh?50:800)+i);return e.unsuspend=s,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(d)}}:null}function Gc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)kc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Vc=null;function kc(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Vc=new Map,i.forEach(tM,e),Vc=null,Gc.call(e))}function tM(e,i){if(!(i.state.loading&4)){var s=Vc.get(e);if(s)var l=s.get(null);else{s=new Map,Vc.set(e,s);for(var d=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<d.length;m++){var E=d[m];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(s.set(E.dataset.precedence,E),l=E)}l&&s.set(null,l)}d=i.instance,E=d.getAttribute("data-precedence"),m=s.get(E)||l,m===l&&s.set(null,d),s.set(E,d),this.count++,l=Gc.bind(this),d.addEventListener("load",l),d.addEventListener("error",l),m?m.parentNode.insertBefore(d,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(d,e.firstChild)),i.state.loading|=4}}var hl={$$typeof:C,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function eM(e,i,s,l,d,m,E,L,q){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Te(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Te(0),this.hiddenUpdates=Te(null),this.identifierPrefix=l,this.onUncaughtError=d,this.onCaughtError=m,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=q,this.incompleteTransitions=new Map}function pv(e,i,s,l,d,m,E,L,q,st,mt,St){return e=new eM(e,i,s,E,q,st,mt,St,L),i=1,m===!0&&(i|=24),m=vi(3,null,null,i),e.current=m,m.stateNode=e,i=pf(),i.refCount++,e.pooledCache=i,i.refCount++,m.memoizedState={element:l,isDehydrated:s,cache:i},_f(m),e}function mv(e){return e?(e=wr,e):wr}function gv(e,i,s,l,d,m){d=mv(d),l.context===null?l.context=d:l.pendingContext=d,l=cs(i),l.payload={element:s},m=m===void 0?null:m,m!==null&&(l.callback=m),s=us(e,l,i),s!==null&&(fi(s,e,i),qo(s,e,i))}function vv(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<i?s:i}}function Ph(e,i){vv(e,i),(e=e.alternate)&&vv(e,i)}function _v(e){if(e.tag===13||e.tag===31){var i=ks(e,67108864);i!==null&&fi(i,e,67108864),Ph(e,67108864)}}function xv(e){if(e.tag===13||e.tag===31){var i=Mi();i=Is(i);var s=ks(e,i);s!==null&&fi(s,e,i),Ph(e,i)}}var qc=!0;function nM(e,i,s,l){var d=z.T;z.T=null;var m=G.p;try{G.p=2,Bh(e,i,s,l)}finally{G.p=m,z.T=d}}function iM(e,i,s,l){var d=z.T;z.T=null;var m=G.p;try{G.p=8,Bh(e,i,s,l)}finally{G.p=m,z.T=d}}function Bh(e,i,s,l){if(qc){var d=Fh(l);if(d===null)Eh(e,i,l,Xc,s),Sv(e,l);else if(sM(d,e,i,s,l))l.stopPropagation();else if(Sv(e,l),i&4&&-1<aM.indexOf(e)){for(;d!==null;){var m=Le(d);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var E=Et(m.pendingLanes);if(E!==0){var L=m;for(L.pendingLanes|=2,L.entangledLanes|=2;E;){var q=1<<31-Gt(E);L.entanglements[1]|=q,E&=~q}na(m),(je&6)===0&&(wc=A()+500,rl(0))}}break;case 31:case 13:L=ks(m,2),L!==null&&fi(L,m,2),Cc(),Ph(m,2)}if(m=Fh(l),m===null&&Eh(e,i,l,Xc,s),m===d)break;d=m}d!==null&&l.stopPropagation()}else Eh(e,i,l,null,s)}}function Fh(e){return e=Iu(e),Ih(e)}var Xc=null;function Ih(e){if(Xc=null,e=hn(e),e!==null){var i=o(e);if(i===null)e=null;else{var s=i.tag;if(s===13){if(e=u(i),e!==null)return e;e=null}else if(s===31){if(e=f(i),e!==null)return e;e=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return Xc=e,null}function yv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Q()){case pt:return 2;case gt:return 8;case ht:case Zt:return 32;case Nt:return 268435456;default:return 32}default:return 32}}var Hh=!1,Ss=null,Ms=null,Es=null,dl=new Map,pl=new Map,bs=[],aM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Sv(e,i){switch(e){case"focusin":case"focusout":Ss=null;break;case"dragenter":case"dragleave":Ms=null;break;case"mouseover":case"mouseout":Es=null;break;case"pointerover":case"pointerout":dl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":pl.delete(i.pointerId)}}function ml(e,i,s,l,d,m){return e===null||e.nativeEvent!==m?(e={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:m,targetContainers:[d]},i!==null&&(i=Le(i),i!==null&&_v(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),e)}function sM(e,i,s,l,d){switch(i){case"focusin":return Ss=ml(Ss,e,i,s,l,d),!0;case"dragenter":return Ms=ml(Ms,e,i,s,l,d),!0;case"mouseover":return Es=ml(Es,e,i,s,l,d),!0;case"pointerover":var m=d.pointerId;return dl.set(m,ml(dl.get(m)||null,e,i,s,l,d)),!0;case"gotpointercapture":return m=d.pointerId,pl.set(m,ml(pl.get(m)||null,e,i,s,l,d)),!0}return!1}function Mv(e){var i=hn(e.target);if(i!==null){var s=o(i);if(s!==null){if(i=s.tag,i===13){if(i=u(s),i!==null){e.blockedOn=i,ei(e.priority,function(){xv(s)});return}}else if(i===31){if(i=f(s),i!==null){e.blockedOn=i,ei(e.priority,function(){xv(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Wc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var s=Fh(e.nativeEvent);if(s===null){s=e.nativeEvent;var l=new s.constructor(s.type,s);Fu=l,s.target.dispatchEvent(l),Fu=null}else return i=Le(s),i!==null&&_v(i),e.blockedOn=s,!1;i.shift()}return!0}function Ev(e,i,s){Wc(e)&&s.delete(i)}function rM(){Hh=!1,Ss!==null&&Wc(Ss)&&(Ss=null),Ms!==null&&Wc(Ms)&&(Ms=null),Es!==null&&Wc(Es)&&(Es=null),dl.forEach(Ev),pl.forEach(Ev)}function Yc(e,i){e.blockedOn===i&&(e.blockedOn=null,Hh||(Hh=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,rM)))}var jc=null;function bv(e){jc!==e&&(jc=e,c.unstable_scheduleCallback(c.unstable_NormalPriority,function(){jc===e&&(jc=null);for(var i=0;i<e.length;i+=3){var s=e[i],l=e[i+1],d=e[i+2];if(typeof l!="function"){if(Ih(l||s)===null)continue;break}var m=Le(s);m!==null&&(e.splice(i,3),i-=3,Ff(m,{pending:!0,data:d,method:s.method,action:l},l,d))}}))}function Qr(e){function i(q){return Yc(q,e)}Ss!==null&&Yc(Ss,e),Ms!==null&&Yc(Ms,e),Es!==null&&Yc(Es,e),dl.forEach(i),pl.forEach(i);for(var s=0;s<bs.length;s++){var l=bs[s];l.blockedOn===e&&(l.blockedOn=null)}for(;0<bs.length&&(s=bs[0],s.blockedOn===null);)Mv(s),s.blockedOn===null&&bs.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var d=s[l],m=s[l+1],E=d[Se]||null;if(typeof m=="function")E||bv(s);else if(E){var L=null;if(m&&m.hasAttribute("formAction")){if(d=m,E=m[Se]||null)L=E.formAction;else if(Ih(d)!==null)continue}else L=E.action;typeof L=="function"?s[l+1]=L:(s.splice(l,3),l-=3),bv(s)}}}function Tv(){function e(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(E){return d=E})},focusReset:"manual",scroll:"manual"})}function i(){d!==null&&(d(),d=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,d=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),d!==null&&(d(),d=null)}}}function Gh(e){this._internalRoot=e}Zc.prototype.render=Gh.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,l=Mi();gv(s,l,e,i,null,null)},Zc.prototype.unmount=Gh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;gv(e.current,2,null,e,null,null),Cc(),i[Re]=null}};function Zc(e){this._internalRoot=e}Zc.prototype.unstable_scheduleHydration=function(e){if(e){var i=Ji();e={blockedOn:null,target:e,priority:i};for(var s=0;s<bs.length&&i!==0&&i<bs[s].priority;s++);bs.splice(s,0,e),s===0&&Mv(e)}};var Av=t.version;if(Av!=="19.2.4")throw Error(a(527,Av,"19.2.4"));G.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=h(i),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var oM={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Kc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Kc.isDisabled&&Kc.supportsFiber)try{bt=Kc.inject(oM),Mt=Kc}catch{}}return vl.createRoot=function(e,i){if(!r(e))throw Error(a(299));var s=!1,l="",d=U0,m=O0,E=z0;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(d=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(E=i.onRecoverableError)),i=pv(e,1,!1,null,null,s,l,null,d,m,E,Tv),e[Re]=i.current,Mh(e),new Gh(i)},vl.hydrateRoot=function(e,i,s){if(!r(e))throw Error(a(299));var l=!1,d="",m=U0,E=O0,L=z0,q=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(d=s.identifierPrefix),s.onUncaughtError!==void 0&&(m=s.onUncaughtError),s.onCaughtError!==void 0&&(E=s.onCaughtError),s.onRecoverableError!==void 0&&(L=s.onRecoverableError),s.formState!==void 0&&(q=s.formState)),i=pv(e,1,!0,i,s??null,l,d,q,m,E,L,Tv),i.context=mv(null),s=i.current,l=Mi(),l=Is(l),d=cs(l),d.callback=null,us(s,d,l),s=l,i.current.lanes=s,mn(i,s),na(i),e[Re]=i.current,Mh(e),new Zc(i)},vl.version="19.2.4",vl}var Pv;function vM(){if(Pv)return qh.exports;Pv=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(t){console.error(t)}}return c(),qh.exports=gM(),qh.exports}var _M=vM();const hr=["ones","twos","threes","fours","fives","sixes","quadra","full","seqLow","seqHigh","min","max","yam"],Bv=["ones","twos","threes","fours","fives","sixes"],xM=["quadra","full","seqLow","seqHigh","min","max","yam"],Jr=[{id:"down",title:"▼"},{id:"up",title:"▲"},{id:"desordem",title:"D"},{id:"seco",title:"S"}],Fv=[{id:"ones",left:"2",label:"1"},{id:"twos",left:"4",label:"2"},{id:"threes",left:"9",label:"3"},{id:"fours",left:"12",label:"4"},{id:"fives",left:"15",label:"5"},{id:"sixes",left:"18",label:"6"},{id:"quadra",left:"20",label:"Q"},{id:"full",left:"30",label:"F"},{id:"seqLow",left:"35",label:"S-"},{id:"seqHigh",left:"40",label:"S+"},{id:"min",left:"X",label:"-"},{id:"max",left:"X",label:"+"},{id:"yam",left:"50",label:"Y"}];function yM({sheet:c,openCells:t,clickable:n,pendingPlacement:a,onCellClick:r}){const o=Object.fromEntries(Jr.map(f=>{const p=a?.columnId===f.id?{...c[f.id],[a.rowId]:a.value}:c[f.id];return[f.id,fx(p)]})),u=Jr.reduce((f,p)=>f+o[p.id].combined,0);return Rt.jsxs("div",{className:"w-[340px] max-w-full shrink-0 sm:w-[360px] lg:w-[376px]",children:[Rt.jsxs("table",{className:"w-full table-fixed border-collapse bg-white text-center",style:{fontFamily:"'Atkinson Hyperlegible', 'Source Sans 3', 'Inter', sans-serif"},children:[Rt.jsxs("colgroup",{children:[Rt.jsx("col",{className:"w-[44px]"}),Rt.jsx("col",{className:"w-[58px]"}),Rt.jsx("col",{className:"w-[58px]"}),Rt.jsx("col",{className:"w-[58px]"}),Rt.jsx("col",{className:"w-[58px]"}),Rt.jsx("col",{className:"w-[36px]"})]}),Rt.jsx("thead",{children:Rt.jsxs("tr",{children:[Rt.jsx("th",{className:"h-7 px-2"}),Jr.map(f=>Rt.jsx("th",{className:"h-7 px-2 text-[0.98rem] leading-none font-semibold text-slate-600",children:f.id==="down"?Rt.jsx("svg",{viewBox:"0 0 24 24",width:"19",height:"19",fill:"none",stroke:"currentColor",strokeWidth:"2.8",strokeLinecap:"round",strokeLinejoin:"round",className:"mx-auto",children:Rt.jsx("polyline",{points:"6,9 12,15 18,9"})}):f.id==="up"?Rt.jsx("svg",{viewBox:"0 0 24 24",width:"19",height:"19",fill:"none",stroke:"currentColor",strokeWidth:"2.8",strokeLinecap:"round",strokeLinejoin:"round",className:"mx-auto",children:Rt.jsx("polyline",{points:"6,15 12,9 18,15"})}):Rt.jsx("span",{className:"text-[0.98rem] font-semibold tracking-[0.08em]",children:f.title})},f.id)),Rt.jsx("th",{className:"h-7 px-1"})]})}),Rt.jsxs("tbody",{children:[Fv.slice(0,6).map(f=>Rt.jsxs("tr",{children:[Rt.jsx("td",{className:"h-7 bg-transparent pl-1 pr-3 text-right text-[0.98rem] leading-none font-semibold tracking-[0.02em] text-slate-500",children:f.label}),Jr.map(p=>Iv({columnId:p.id,rowId:f.id,sheet:c,openCells:t,clickable:n,pendingPlacement:a,onCellClick:r})),Rt.jsx("td",{className:"h-7 bg-transparent px-1"})]},f.id)),Rt.jsxs("tr",{children:[Rt.jsx("td",{className:"h-6 bg-transparent px-1"}),Jr.map(f=>{const p=o[f.id];return Rt.jsx("td",{className:"h-6 bg-transparent px-1 align-middle text-[0.9rem] font-semibold tabular-nums text-slate-500",children:p.bonus>0?"30":""},f.id)}),Rt.jsx("td",{className:"h-6 bg-transparent pl-3 pr-0 text-left text-[0.68rem] leading-none font-semibold tracking-[0.08em] text-slate-500",children:"BONUS"})]}),Fv.slice(6).map(f=>{const p=f.left!=="X";return Rt.jsxs("tr",{children:[Rt.jsx("td",{className:"h-7 bg-transparent pl-1 pr-3 text-right text-[0.98rem] leading-none font-semibold tracking-[0.02em] text-slate-500",children:f.label}),Jr.map(h=>Iv({columnId:h.id,rowId:f.id,sheet:c,openCells:t,clickable:n,pendingPlacement:a,onCellClick:r})),Rt.jsx("td",{className:p?"h-7 bg-transparent pl-3 pr-0 text-left text-[0.68rem] leading-none font-semibold tabular-nums tracking-[0.02em] text-slate-500":"h-7 bg-transparent pl-3 pr-0 text-left",children:p?`+${f.left}`:""})]},f.id)})]})]}),Rt.jsx("div",{className:"mt-2 flex justify-center",children:Rt.jsxs("div",{className:"inline-flex h-6 items-center gap-2 rounded-full border border-slate-400 bg-transparent px-3",style:{fontFamily:"'Atkinson Hyperlegible', 'Source Sans 3', 'Inter', sans-serif"},children:[Rt.jsx("span",{className:"text-[0.86rem] font-bold leading-none text-slate-500",children:"TOTAL"}),Rt.jsx("span",{className:"inline-block w-[4ch] text-right text-[0.86rem] font-bold leading-none tabular-nums text-slate-950",children:SM(u)})]})})]})}function Iv({columnId:c,rowId:t,sheet:n,openCells:a,clickable:r,pendingPlacement:o,onCellClick:u}){const f=`${c}:${t}`,p=n[c][t]!=null,h=a.has(f),g=o?.columnId===c&&o.rowId===t;let _=null;g?_=o.value:n[c][t]!=null&&(_=n[c][t]);const v=_===0,y=g?"#065f46":"#1e293b";return Rt.jsx("td",{onClick:()=>{!r||!h||p||u(c,t)},style:(g||p)&&!v?{fontWeight:700,fontSize:"0.98rem",verticalAlign:"middle",paddingTop:"1px"}:void 0,className:`h-7 touch-manipulation select-none border border-slate-500/70 px-1 text-[0.92rem] leading-none font-semibold transition-colors ${g?"bg-emerald-50 text-emerald-950":p?"bg-white text-slate-950":h&&r?"cursor-pointer bg-white text-slate-700 hover:bg-slate-50 active:bg-slate-100":"bg-slate-100 text-slate-400"}`,children:v?Rt.jsxs("svg",{viewBox:"0 0 50 30",className:"h-full w-full",style:{display:"block",padding:"2px 3px"},children:[Rt.jsx("path",{d:"M 4,3 C 16,10 30,18 46,27",stroke:y,strokeWidth:"2.8",strokeLinecap:"round",fill:"none"}),Rt.jsx("path",{d:"M 46,3 C 33,11 19,18 4,27",stroke:y,strokeWidth:"2.8",strokeLinecap:"round",fill:"none"})]}):_!==null?String(_):""},c)}function fx(c){const t=Bv.reduce((f,p)=>f+(c[p]??0),0),n=Bv.every(f=>c[f]!=null),a=t>=60?30:0,r=t+a,o=xM.reduce((f,p)=>f+(c[p]??0),0),u=r+o;return{upperTotal:t,upperComplete:n,bonus:a,secondTotal:r,thirdTotal:o,combined:u}}function SM(c){return c>0?String(c):""}class ji{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const n=this.elements;n[0]=t.x,n[4]=t.y,n[8]=t.z}getTrace(t){t===void 0&&(t=new R);const n=this.elements;return t.x=n[0],t.y=n[4],t.z=n[8],t}vmult(t,n){n===void 0&&(n=new R);const a=this.elements,r=t.x,o=t.y,u=t.z;return n.x=a[0]*r+a[1]*o+a[2]*u,n.y=a[3]*r+a[4]*o+a[5]*u,n.z=a[6]*r+a[7]*o+a[8]*u,n}smult(t){for(let n=0;n<this.elements.length;n++)this.elements[n]*=t}mmult(t,n){n===void 0&&(n=new ji);const a=this.elements,r=t.elements,o=n.elements,u=a[0],f=a[1],p=a[2],h=a[3],g=a[4],_=a[5],v=a[6],y=a[7],M=a[8],b=r[0],S=r[1],x=r[2],T=r[3],C=r[4],N=r[5],U=r[6],P=r[7],B=r[8];return o[0]=u*b+f*T+p*U,o[1]=u*S+f*C+p*P,o[2]=u*x+f*N+p*B,o[3]=h*b+g*T+_*U,o[4]=h*S+g*C+_*P,o[5]=h*x+g*N+_*B,o[6]=v*b+y*T+M*U,o[7]=v*S+y*C+M*P,o[8]=v*x+y*N+M*B,n}scale(t,n){n===void 0&&(n=new ji);const a=this.elements,r=n.elements;for(let o=0;o!==3;o++)r[3*o+0]=t.x*a[3*o+0],r[3*o+1]=t.y*a[3*o+1],r[3*o+2]=t.z*a[3*o+2];return n}solve(t,n){n===void 0&&(n=new R);const a=3,r=4,o=[];let u,f;for(u=0;u<a*r;u++)o.push(0);for(u=0;u<3;u++)for(f=0;f<3;f++)o[u+r*f]=this.elements[u+3*f];o[3]=t.x,o[7]=t.y,o[11]=t.z;let p=3;const h=p;let g;const _=4;let v;do{if(u=h-p,o[u+r*u]===0){for(f=u+1;f<h;f++)if(o[u+r*f]!==0){g=_;do v=_-g,o[v+r*u]+=o[v+r*f];while(--g);break}}if(o[u+r*u]!==0)for(f=u+1;f<h;f++){const y=o[u+r*f]/o[u+r*u];g=_;do v=_-g,o[v+r*f]=v<=u?0:o[v+r*f]-o[v+r*u]*y;while(--g)}}while(--p);if(n.z=o[2*r+3]/o[2*r+2],n.y=(o[1*r+3]-o[1*r+2]*n.z)/o[1*r+1],n.x=(o[0*r+3]-o[0*r+2]*n.z-o[0*r+1]*n.y)/o[0*r+0],isNaN(n.x)||isNaN(n.y)||isNaN(n.z)||n.x===1/0||n.y===1/0||n.z===1/0)throw`Could not solve equation! Got x=[${n.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return n}e(t,n,a){if(a===void 0)return this.elements[n+3*t];this.elements[n+3*t]=a}copy(t){for(let n=0;n<t.elements.length;n++)this.elements[n]=t.elements[n];return this}toString(){let t="";for(let a=0;a<9;a++)t+=this.elements[a]+",";return t}reverse(t){t===void 0&&(t=new ji);const n=3,a=6,r=MM;let o,u;for(o=0;o<3;o++)for(u=0;u<3;u++)r[o+a*u]=this.elements[o+3*u];r[3]=1,r[9]=0,r[15]=0,r[4]=0,r[10]=1,r[16]=0,r[5]=0,r[11]=0,r[17]=1;let f=3;const p=f;let h;const g=a;let _;do{if(o=p-f,r[o+a*o]===0){for(u=o+1;u<p;u++)if(r[o+a*u]!==0){h=g;do _=g-h,r[_+a*o]+=r[_+a*u];while(--h);break}}if(r[o+a*o]!==0)for(u=o+1;u<p;u++){const v=r[o+a*u]/r[o+a*o];h=g;do _=g-h,r[_+a*u]=_<=o?0:r[_+a*u]-r[_+a*o]*v;while(--h)}}while(--f);o=2;do{u=o-1;do{const v=r[o+a*u]/r[o+a*o];h=a;do _=a-h,r[_+a*u]=r[_+a*u]-r[_+a*o]*v;while(--h)}while(u--)}while(--o);o=2;do{const v=1/r[o+a*o];h=a;do _=a-h,r[_+a*o]=r[_+a*o]*v;while(--h)}while(o--);o=2;do{u=2;do{if(_=r[n+u+a*o],isNaN(_)||_===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(o,u,_)}while(u--)}while(o--);return t}setRotationFromQuaternion(t){const n=t.x,a=t.y,r=t.z,o=t.w,u=n+n,f=a+a,p=r+r,h=n*u,g=n*f,_=n*p,v=a*f,y=a*p,M=r*p,b=o*u,S=o*f,x=o*p,T=this.elements;return T[0]=1-(v+M),T[1]=g-x,T[2]=_+S,T[3]=g+x,T[4]=1-(h+M),T[5]=y-b,T[6]=_-S,T[7]=y+b,T[8]=1-(h+v),this}transpose(t){t===void 0&&(t=new ji);const n=this.elements,a=t.elements;let r;return a[0]=n[0],a[4]=n[4],a[8]=n[8],r=n[1],a[1]=n[3],a[3]=r,r=n[2],a[2]=n[6],a[6]=r,r=n[5],a[5]=n[7],a[7]=r,t}}const MM=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class R{constructor(t,n,a){t===void 0&&(t=0),n===void 0&&(n=0),a===void 0&&(a=0),this.x=t,this.y=n,this.z=a}cross(t,n){n===void 0&&(n=new R);const a=t.x,r=t.y,o=t.z,u=this.x,f=this.y,p=this.z;return n.x=f*o-p*r,n.y=p*a-u*o,n.z=u*r-f*a,n}set(t,n,a){return this.x=t,this.y=n,this.z=a,this}setZero(){this.x=this.y=this.z=0}vadd(t,n){if(n)n.x=t.x+this.x,n.y=t.y+this.y,n.z=t.z+this.z;else return new R(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,n){if(n)n.x=this.x-t.x,n.y=this.y-t.y,n.z=this.z-t.z;else return new R(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new ji([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,n=this.y,a=this.z,r=Math.sqrt(t*t+n*n+a*a);if(r>0){const o=1/r;this.x*=o,this.y*=o,this.z*=o}else this.x=0,this.y=0,this.z=0;return r}unit(t){t===void 0&&(t=new R);const n=this.x,a=this.y,r=this.z;let o=Math.sqrt(n*n+a*a+r*r);return o>0?(o=1/o,t.x=n*o,t.y=a*o,t.z=r*o):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,n=this.y,a=this.z;return Math.sqrt(t*t+n*n+a*a)}lengthSquared(){return this.dot(this)}distanceTo(t){const n=this.x,a=this.y,r=this.z,o=t.x,u=t.y,f=t.z;return Math.sqrt((o-n)*(o-n)+(u-a)*(u-a)+(f-r)*(f-r))}distanceSquared(t){const n=this.x,a=this.y,r=this.z,o=t.x,u=t.y,f=t.z;return(o-n)*(o-n)+(u-a)*(u-a)+(f-r)*(f-r)}scale(t,n){n===void 0&&(n=new R);const a=this.x,r=this.y,o=this.z;return n.x=t*a,n.y=t*r,n.z=t*o,n}vmul(t,n){return n===void 0&&(n=new R),n.x=t.x*this.x,n.y=t.y*this.y,n.z=t.z*this.z,n}addScaledVector(t,n,a){return a===void 0&&(a=new R),a.x=this.x+t*n.x,a.y=this.y+t*n.y,a.z=this.z+t*n.z,a}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new R),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,n){const a=this.length();if(a>0){const r=EM,o=1/a;r.set(this.x*o,this.y*o,this.z*o);const u=bM;Math.abs(r.x)<.9?(u.set(1,0,0),r.cross(u,t)):(u.set(0,1,0),r.cross(u,t)),r.cross(t,n)}else t.set(1,0,0),n.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,n,a){const r=this.x,o=this.y,u=this.z;a.x=r+(t.x-r)*n,a.y=o+(t.y-o)*n,a.z=u+(t.z-u)*n}almostEquals(t,n){return n===void 0&&(n=1e-6),!(Math.abs(this.x-t.x)>n||Math.abs(this.y-t.y)>n||Math.abs(this.z-t.z)>n)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,n){return this.negate(Hv),Hv.almostEquals(t,n)}clone(){return new R(this.x,this.y,this.z)}}R.ZERO=new R(0,0,0);R.UNIT_X=new R(1,0,0);R.UNIT_Y=new R(0,1,0);R.UNIT_Z=new R(0,0,1);const EM=new R,bM=new R,Hv=new R;class Ai{constructor(t){t===void 0&&(t={}),this.lowerBound=new R,this.upperBound=new R,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,n,a,r){const o=this.lowerBound,u=this.upperBound,f=a;o.copy(t[0]),f&&f.vmult(o,o),u.copy(o);for(let p=1;p<t.length;p++){let h=t[p];f&&(f.vmult(h,Gv),h=Gv),h.x>u.x&&(u.x=h.x),h.x<o.x&&(o.x=h.x),h.y>u.y&&(u.y=h.y),h.y<o.y&&(o.y=h.y),h.z>u.z&&(u.z=h.z),h.z<o.z&&(o.z=h.z)}return n&&(n.vadd(o,o),n.vadd(u,u)),r&&(o.x-=r,o.y-=r,o.z-=r,u.x+=r,u.y+=r,u.z+=r),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new Ai().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const n=this.lowerBound,a=this.upperBound,r=t.lowerBound,o=t.upperBound,u=r.x<=a.x&&a.x<=o.x||n.x<=o.x&&o.x<=a.x,f=r.y<=a.y&&a.y<=o.y||n.y<=o.y&&o.y<=a.y,p=r.z<=a.z&&a.z<=o.z||n.z<=o.z&&o.z<=a.z;return u&&f&&p}volume(){const t=this.lowerBound,n=this.upperBound;return(n.x-t.x)*(n.y-t.y)*(n.z-t.z)}contains(t){const n=this.lowerBound,a=this.upperBound,r=t.lowerBound,o=t.upperBound;return n.x<=r.x&&a.x>=o.x&&n.y<=r.y&&a.y>=o.y&&n.z<=r.z&&a.z>=o.z}getCorners(t,n,a,r,o,u,f,p){const h=this.lowerBound,g=this.upperBound;t.copy(h),n.set(g.x,h.y,h.z),a.set(g.x,g.y,h.z),r.set(h.x,g.y,g.z),o.set(g.x,h.y,g.z),u.set(h.x,g.y,h.z),f.set(h.x,h.y,g.z),p.copy(g)}toLocalFrame(t,n){const a=Vv,r=a[0],o=a[1],u=a[2],f=a[3],p=a[4],h=a[5],g=a[6],_=a[7];this.getCorners(r,o,u,f,p,h,g,_);for(let v=0;v!==8;v++){const y=a[v];t.pointToLocal(y,y)}return n.setFromPoints(a)}toWorldFrame(t,n){const a=Vv,r=a[0],o=a[1],u=a[2],f=a[3],p=a[4],h=a[5],g=a[6],_=a[7];this.getCorners(r,o,u,f,p,h,g,_);for(let v=0;v!==8;v++){const y=a[v];t.pointToWorld(y,y)}return n.setFromPoints(a)}overlapsRay(t){const{direction:n,from:a}=t,r=1/n.x,o=1/n.y,u=1/n.z,f=(this.lowerBound.x-a.x)*r,p=(this.upperBound.x-a.x)*r,h=(this.lowerBound.y-a.y)*o,g=(this.upperBound.y-a.y)*o,_=(this.lowerBound.z-a.z)*u,v=(this.upperBound.z-a.z)*u,y=Math.max(Math.max(Math.min(f,p),Math.min(h,g)),Math.min(_,v)),M=Math.min(Math.min(Math.max(f,p),Math.max(h,g)),Math.max(_,v));return!(M<0||y>M)}}const Gv=new R,Vv=[new R,new R,new R,new R,new R,new R,new R,new R];class kv{constructor(){this.matrix=[]}get(t,n){let{index:a}=t,{index:r}=n;if(r>a){const o=r;r=a,a=o}return this.matrix[(a*(a+1)>>1)+r-1]}set(t,n,a){let{index:r}=t,{index:o}=n;if(o>r){const u=o;o=r,r=u}this.matrix[(r*(r+1)>>1)+o-1]=a?1:0}reset(){for(let t=0,n=this.matrix.length;t!==n;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class hx{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;return a[t]===void 0&&(a[t]=[]),a[t].includes(n)||a[t].push(n),this}hasEventListener(t,n){if(this._listeners===void 0)return!1;const a=this._listeners;return!!(a[t]!==void 0&&a[t].includes(n))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,n){if(this._listeners===void 0)return this;const a=this._listeners;if(a[t]===void 0)return this;const r=a[t].indexOf(n);return r!==-1&&a[t].splice(r,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const a=this._listeners[t.type];if(a!==void 0){t.target=this;for(let r=0,o=a.length;r<o;r++)a[r].call(this,t)}return this}}let pi=class ur{constructor(t,n,a,r){t===void 0&&(t=0),n===void 0&&(n=0),a===void 0&&(a=0),r===void 0&&(r=1),this.x=t,this.y=n,this.z=a,this.w=r}set(t,n,a,r){return this.x=t,this.y=n,this.z=a,this.w=r,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,n){const a=Math.sin(n*.5);return this.x=t.x*a,this.y=t.y*a,this.z=t.z*a,this.w=Math.cos(n*.5),this}toAxisAngle(t){t===void 0&&(t=new R),this.normalize();const n=2*Math.acos(this.w),a=Math.sqrt(1-this.w*this.w);return a<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/a,t.y=this.y/a,t.z=this.z/a),[t,n]}setFromVectors(t,n){if(t.isAntiparallelTo(n)){const a=TM,r=AM;t.tangents(a,r),this.setFromAxisAngle(a,Math.PI)}else{const a=t.cross(n);this.x=a.x,this.y=a.y,this.z=a.z,this.w=Math.sqrt(t.length()**2*n.length()**2)+t.dot(n),this.normalize()}return this}mult(t,n){n===void 0&&(n=new ur);const a=this.x,r=this.y,o=this.z,u=this.w,f=t.x,p=t.y,h=t.z,g=t.w;return n.x=a*g+u*f+r*h-o*p,n.y=r*g+u*p+o*f-a*h,n.z=o*g+u*h+a*p-r*f,n.w=u*g-a*f-r*p-o*h,n}inverse(t){t===void 0&&(t=new ur);const n=this.x,a=this.y,r=this.z,o=this.w;this.conjugate(t);const u=1/(n*n+a*a+r*r+o*o);return t.x*=u,t.y*=u,t.z*=u,t.w*=u,t}conjugate(t){return t===void 0&&(t=new ur),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,n){n===void 0&&(n=new R);const a=t.x,r=t.y,o=t.z,u=this.x,f=this.y,p=this.z,h=this.w,g=h*a+f*o-p*r,_=h*r+p*a-u*o,v=h*o+u*r-f*a,y=-u*a-f*r-p*o;return n.x=g*h+y*-u+_*-p-v*-f,n.y=_*h+y*-f+v*-u-g*-p,n.z=v*h+y*-p+g*-f-_*-u,n}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,n){n===void 0&&(n="YZX");let a,r,o;const u=this.x,f=this.y,p=this.z,h=this.w;switch(n){case"YZX":const g=u*f+p*h;if(g>.499&&(a=2*Math.atan2(u,h),r=Math.PI/2,o=0),g<-.499&&(a=-2*Math.atan2(u,h),r=-Math.PI/2,o=0),a===void 0){const _=u*u,v=f*f,y=p*p;a=Math.atan2(2*f*h-2*u*p,1-2*v-2*y),r=Math.asin(2*g),o=Math.atan2(2*u*h-2*f*p,1-2*_-2*y)}break;default:throw new Error(`Euler order ${n} not supported yet.`)}t.y=a,t.z=r,t.x=o}setFromEuler(t,n,a,r){r===void 0&&(r="XYZ");const o=Math.cos(t/2),u=Math.cos(n/2),f=Math.cos(a/2),p=Math.sin(t/2),h=Math.sin(n/2),g=Math.sin(a/2);return r==="XYZ"?(this.x=p*u*f+o*h*g,this.y=o*h*f-p*u*g,this.z=o*u*g+p*h*f,this.w=o*u*f-p*h*g):r==="YXZ"?(this.x=p*u*f+o*h*g,this.y=o*h*f-p*u*g,this.z=o*u*g-p*h*f,this.w=o*u*f+p*h*g):r==="ZXY"?(this.x=p*u*f-o*h*g,this.y=o*h*f+p*u*g,this.z=o*u*g+p*h*f,this.w=o*u*f-p*h*g):r==="ZYX"?(this.x=p*u*f-o*h*g,this.y=o*h*f+p*u*g,this.z=o*u*g-p*h*f,this.w=o*u*f+p*h*g):r==="YZX"?(this.x=p*u*f+o*h*g,this.y=o*h*f+p*u*g,this.z=o*u*g-p*h*f,this.w=o*u*f-p*h*g):r==="XZY"&&(this.x=p*u*f-o*h*g,this.y=o*h*f-p*u*g,this.z=o*u*g+p*h*f,this.w=o*u*f+p*h*g),this}clone(){return new ur(this.x,this.y,this.z,this.w)}slerp(t,n,a){a===void 0&&(a=new ur);const r=this.x,o=this.y,u=this.z,f=this.w;let p=t.x,h=t.y,g=t.z,_=t.w,v,y,M,b,S;return y=r*p+o*h+u*g+f*_,y<0&&(y=-y,p=-p,h=-h,g=-g,_=-_),1-y>1e-6?(v=Math.acos(y),M=Math.sin(v),b=Math.sin((1-n)*v)/M,S=Math.sin(n*v)/M):(b=1-n,S=n),a.x=b*r+S*p,a.y=b*o+S*h,a.z=b*u+S*g,a.w=b*f+S*_,a}integrate(t,n,a,r){r===void 0&&(r=new ur);const o=t.x*a.x,u=t.y*a.y,f=t.z*a.z,p=this.x,h=this.y,g=this.z,_=this.w,v=n*.5;return r.x+=v*(o*_+u*g-f*h),r.y+=v*(u*_+f*p-o*g),r.z+=v*(f*_+o*h-u*p),r.w+=v*(-o*p-u*h-f*g),r}};const TM=new R,AM=new R,wM={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class $t{constructor(t){t===void 0&&(t={}),this.id=$t.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,n){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,n,a,r){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}$t.idCounter=0;$t.types=wM;class Ze{constructor(t){t===void 0&&(t={}),this.position=new R,this.quaternion=new pi,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,n){return Ze.pointToLocalFrame(this.position,this.quaternion,t,n)}pointToWorld(t,n){return Ze.pointToWorldFrame(this.position,this.quaternion,t,n)}vectorToWorldFrame(t,n){return n===void 0&&(n=new R),this.quaternion.vmult(t,n),n}static pointToLocalFrame(t,n,a,r){return r===void 0&&(r=new R),a.vsub(t,r),n.conjugate(qv),qv.vmult(r,r),r}static pointToWorldFrame(t,n,a,r){return r===void 0&&(r=new R),n.vmult(a,r),r.vadd(t,r),r}static vectorToWorldFrame(t,n,a){return a===void 0&&(a=new R),t.vmult(n,a),a}static vectorToLocalFrame(t,n,a,r){return r===void 0&&(r=new R),n.w*=-1,n.vmult(a,r),n.w*=-1,r}}const qv=new pi;class Ll extends $t{constructor(t){t===void 0&&(t={});const{vertices:n=[],faces:a=[],normals:r=[],axes:o,boundingSphereRadius:u}=t;super({type:$t.types.CONVEXPOLYHEDRON}),this.vertices=n,this.faces=a,this.faceNormals=r,this.faceNormals.length===0&&this.computeNormals(),u?this.boundingSphereRadius=u:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=o?o.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,n=this.vertices,a=this.uniqueEdges;a.length=0;const r=new R;for(let o=0;o!==t.length;o++){const u=t[o],f=u.length;for(let p=0;p!==f;p++){const h=(p+1)%f;n[u[p]].vsub(n[u[h]],r),r.normalize();let g=!1;for(let _=0;_!==a.length;_++)if(a[_].almostEquals(r)||a[_].almostEquals(r)){g=!0;break}g||a.push(r.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let r=0;r<this.faces[t].length;r++)if(!this.vertices[this.faces[t][r]])throw new Error(`Vertex ${this.faces[t][r]} not found!`);const n=this.faceNormals[t]||new R;this.getFaceNormal(t,n),n.negate(n),this.faceNormals[t]=n;const a=this.vertices[this.faces[t][0]];if(n.dot(a)<0){console.error(`.faceNormals[${t}] = Vec3(${n.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let r=0;r<this.faces[t].length;r++)console.warn(`.vertices[${this.faces[t][r]}] = Vec3(${this.vertices[this.faces[t][r]].toString()})`)}}}getFaceNormal(t,n){const a=this.faces[t],r=this.vertices[a[0]],o=this.vertices[a[1]],u=this.vertices[a[2]];Ll.computeNormal(r,o,u,n)}static computeNormal(t,n,a,r){const o=new R,u=new R;n.vsub(t,u),a.vsub(n,o),o.cross(u,r),r.isZero()||r.normalize()}clipAgainstHull(t,n,a,r,o,u,f,p,h){const g=new R;let _=-1,v=-Number.MAX_VALUE;for(let M=0;M<a.faces.length;M++){g.copy(a.faceNormals[M]),o.vmult(g,g);const b=g.dot(u);b>v&&(v=b,_=M)}const y=[];for(let M=0;M<a.faces[_].length;M++){const b=a.vertices[a.faces[_][M]],S=new R;S.copy(b),o.vmult(S,S),r.vadd(S,S),y.push(S)}_>=0&&this.clipFaceAgainstHull(u,t,n,y,f,p,h)}findSeparatingAxis(t,n,a,r,o,u,f,p){const h=new R,g=new R,_=new R,v=new R,y=new R,M=new R;let b=Number.MAX_VALUE;const S=this;if(S.uniqueAxes)for(let x=0;x!==S.uniqueAxes.length;x++){a.vmult(S.uniqueAxes[x],h);const T=S.testSepAxis(h,t,n,a,r,o);if(T===!1)return!1;T<b&&(b=T,u.copy(h))}else{const x=f?f.length:S.faces.length;for(let T=0;T<x;T++){const C=f?f[T]:T;h.copy(S.faceNormals[C]),a.vmult(h,h);const N=S.testSepAxis(h,t,n,a,r,o);if(N===!1)return!1;N<b&&(b=N,u.copy(h))}}if(t.uniqueAxes)for(let x=0;x!==t.uniqueAxes.length;x++){o.vmult(t.uniqueAxes[x],g);const T=S.testSepAxis(g,t,n,a,r,o);if(T===!1)return!1;T<b&&(b=T,u.copy(g))}else{const x=p?p.length:t.faces.length;for(let T=0;T<x;T++){const C=p?p[T]:T;g.copy(t.faceNormals[C]),o.vmult(g,g);const N=S.testSepAxis(g,t,n,a,r,o);if(N===!1)return!1;N<b&&(b=N,u.copy(g))}}for(let x=0;x!==S.uniqueEdges.length;x++){a.vmult(S.uniqueEdges[x],v);for(let T=0;T!==t.uniqueEdges.length;T++)if(o.vmult(t.uniqueEdges[T],y),v.cross(y,M),!M.almostZero()){M.normalize();const C=S.testSepAxis(M,t,n,a,r,o);if(C===!1)return!1;C<b&&(b=C,u.copy(M))}}return r.vsub(n,_),_.dot(u)>0&&u.negate(u),!0}testSepAxis(t,n,a,r,o,u){const f=this;Ll.project(f,t,a,r,jh),Ll.project(n,t,o,u,Zh);const p=jh[0],h=jh[1],g=Zh[0],_=Zh[1];if(p<_||g<h)return!1;const v=p-_,y=g-h;return v<y?v:y}calculateLocalInertia(t,n){const a=new R,r=new R;this.computeLocalAABB(r,a);const o=a.x-r.x,u=a.y-r.y,f=a.z-r.z;n.x=1/12*t*(2*u*2*u+2*f*2*f),n.y=1/12*t*(2*o*2*o+2*f*2*f),n.z=1/12*t*(2*u*2*u+2*o*2*o)}getPlaneConstantOfFace(t){const n=this.faces[t],a=this.faceNormals[t],r=this.vertices[n[0]];return-a.dot(r)}clipFaceAgainstHull(t,n,a,r,o,u,f){const p=new R,h=new R,g=new R,_=new R,v=new R,y=new R,M=new R,b=new R,S=this,x=[],T=r,C=x;let N=-1,U=Number.MAX_VALUE;for(let O=0;O<S.faces.length;O++){p.copy(S.faceNormals[O]),a.vmult(p,p);const H=p.dot(t);H<U&&(U=H,N=O)}if(N<0)return;const P=S.faces[N];P.connectedFaces=[];for(let O=0;O<S.faces.length;O++)for(let H=0;H<S.faces[O].length;H++)P.indexOf(S.faces[O][H])!==-1&&O!==N&&P.connectedFaces.indexOf(O)===-1&&P.connectedFaces.push(O);const B=P.length;for(let O=0;O<B;O++){const H=S.vertices[P[O]],$=S.vertices[P[(O+1)%B]];H.vsub($,h),g.copy(h),a.vmult(g,g),n.vadd(g,g),_.copy(this.faceNormals[N]),a.vmult(_,_),n.vadd(_,_),g.cross(_,v),v.negate(v),y.copy(H),a.vmult(y,y),n.vadd(y,y);const V=P.connectedFaces[O];M.copy(this.faceNormals[V]);const K=this.getPlaneConstantOfFace(V);b.copy(M),a.vmult(b,b);const W=K-b.dot(n);for(this.clipFaceAgainstPlane(T,C,b,W);T.length;)T.shift();for(;C.length;)T.push(C.shift())}M.copy(this.faceNormals[N]);const X=this.getPlaneConstantOfFace(N);b.copy(M),a.vmult(b,b);const w=X-b.dot(n);for(let O=0;O<T.length;O++){let H=b.dot(T[O])+w;if(H<=o&&(console.log(`clamped: depth=${H} to minDist=${o}`),H=o),H<=u){const $=T[O];if(H<=1e-6){const V={point:$,normal:b,depth:H};f.push(V)}}}}clipFaceAgainstPlane(t,n,a,r){let o,u;const f=t.length;if(f<2)return n;let p=t[t.length-1],h=t[0];o=a.dot(p)+r;for(let g=0;g<f;g++){if(h=t[g],u=a.dot(h)+r,o<0)if(u<0){const _=new R;_.copy(h),n.push(_)}else{const _=new R;p.lerp(h,o/(o-u),_),n.push(_)}else if(u<0){const _=new R;p.lerp(h,o/(o-u),_),n.push(_),n.push(h)}p=h,o=u}return n}computeWorldVertices(t,n){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new R);const a=this.vertices,r=this.worldVertices;for(let o=0;o!==this.vertices.length;o++)n.vmult(a[o],r[o]),t.vadd(r[o],r[o]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,n){const a=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),n.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let r=0;r<this.vertices.length;r++){const o=a[r];o.x<t.x?t.x=o.x:o.x>n.x&&(n.x=o.x),o.y<t.y?t.y=o.y:o.y>n.y&&(n.y=o.y),o.z<t.z?t.z=o.z:o.z>n.z&&(n.z=o.z)}}computeWorldFaceNormals(t){const n=this.faceNormals.length;for(;this.worldFaceNormals.length<n;)this.worldFaceNormals.push(new R);const a=this.faceNormals,r=this.worldFaceNormals;for(let o=0;o!==n;o++)t.vmult(a[o],r[o]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const n=this.vertices;for(let a=0;a!==n.length;a++){const r=n[a].lengthSquared();r>t&&(t=r)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,n,a,r){const o=this.vertices;let u,f,p,h,g,_,v=new R;for(let y=0;y<o.length;y++){v.copy(o[y]),n.vmult(v,v),t.vadd(v,v);const M=v;(u===void 0||M.x<u)&&(u=M.x),(h===void 0||M.x>h)&&(h=M.x),(f===void 0||M.y<f)&&(f=M.y),(g===void 0||M.y>g)&&(g=M.y),(p===void 0||M.z<p)&&(p=M.z),(_===void 0||M.z>_)&&(_=M.z)}a.set(u,f,p),r.set(h,g,_)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new R);const n=this.vertices;for(let a=0;a<n.length;a++)t.vadd(n[a],t);return t.scale(1/n.length,t),t}transformAllPoints(t,n){const a=this.vertices.length,r=this.vertices;if(n){for(let o=0;o<a;o++){const u=r[o];n.vmult(u,u)}for(let o=0;o<this.faceNormals.length;o++){const u=this.faceNormals[o];n.vmult(u,u)}}if(t)for(let o=0;o<a;o++){const u=r[o];u.vadd(t,u)}}pointIsInside(t){const n=this.vertices,a=this.faces,r=this.faceNormals,o=new R;this.getAveragePointLocal(o);for(let u=0;u<this.faces.length;u++){let f=r[u];const p=n[a[u][0]],h=new R;t.vsub(p,h);const g=f.dot(h),_=new R;o.vsub(p,_);const v=f.dot(_);if(g<0&&v>0||g>0&&v<0)return!1}return-1}static project(t,n,a,r,o){const u=t.vertices.length,f=RM;let p=0,h=0;const g=CM,_=t.vertices;g.setZero(),Ze.vectorToLocalFrame(a,r,n,f),Ze.pointToLocalFrame(a,r,g,g);const v=g.dot(f);h=p=_[0].dot(f);for(let y=1;y<u;y++){const M=_[y].dot(f);M>p&&(p=M),M<h&&(h=M)}if(h-=v,p-=v,h>p){const y=h;h=p,p=y}o[0]=p,o[1]=h}}const jh=[],Zh=[];new R;const RM=new R,CM=new R;class gr extends $t{constructor(t){super({type:$t.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,n=this.halfExtents.y,a=this.halfExtents.z,r=R,o=[new r(-t,-n,-a),new r(t,-n,-a),new r(t,n,-a),new r(-t,n,-a),new r(-t,-n,a),new r(t,-n,a),new r(t,n,a),new r(-t,n,a)],u=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],f=[new r(0,0,1),new r(0,1,0),new r(1,0,0)],p=new Ll({vertices:o,faces:u,axes:f});this.convexPolyhedronRepresentation=p,p.material=this.material}calculateLocalInertia(t,n){return n===void 0&&(n=new R),gr.calculateInertia(this.halfExtents,t,n),n}static calculateInertia(t,n,a){const r=t;a.x=1/12*n*(2*r.y*2*r.y+2*r.z*2*r.z),a.y=1/12*n*(2*r.x*2*r.x+2*r.z*2*r.z),a.z=1/12*n*(2*r.y*2*r.y+2*r.x*2*r.x)}getSideNormals(t,n){const a=t,r=this.halfExtents;if(a[0].set(r.x,0,0),a[1].set(0,r.y,0),a[2].set(0,0,r.z),a[3].set(-r.x,0,0),a[4].set(0,-r.y,0),a[5].set(0,0,-r.z),n!==void 0)for(let o=0;o!==a.length;o++)n.vmult(a[o],a[o]);return a}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,n,a){const r=this.halfExtents,o=[[r.x,r.y,r.z],[-r.x,r.y,r.z],[-r.x,-r.y,r.z],[-r.x,-r.y,-r.z],[r.x,-r.y,-r.z],[r.x,r.y,-r.z],[-r.x,r.y,-r.z],[r.x,-r.y,r.z]];for(let u=0;u<o.length;u++)As.set(o[u][0],o[u][1],o[u][2]),n.vmult(As,As),t.vadd(As,As),a(As.x,As.y,As.z)}calculateWorldAABB(t,n,a,r){const o=this.halfExtents;ia[0].set(o.x,o.y,o.z),ia[1].set(-o.x,o.y,o.z),ia[2].set(-o.x,-o.y,o.z),ia[3].set(-o.x,-o.y,-o.z),ia[4].set(o.x,-o.y,-o.z),ia[5].set(o.x,o.y,-o.z),ia[6].set(-o.x,o.y,-o.z),ia[7].set(o.x,-o.y,o.z);const u=ia[0];n.vmult(u,u),t.vadd(u,u),r.copy(u),a.copy(u);for(let f=1;f<8;f++){const p=ia[f];n.vmult(p,p),t.vadd(p,p);const h=p.x,g=p.y,_=p.z;h>r.x&&(r.x=h),g>r.y&&(r.y=g),_>r.z&&(r.z=_),h<a.x&&(a.x=h),g<a.y&&(a.y=g),_<a.z&&(a.z=_)}}}const As=new R,ia=[new R,new R,new R,new R,new R,new R,new R,new R],Np={DYNAMIC:1,STATIC:2,KINEMATIC:4},Lp={AWAKE:0,SLEEPY:1,SLEEPING:2};class kt extends hx{constructor(t){t===void 0&&(t={}),super(),this.id=kt.idCounter++,this.index=-1,this.world=null,this.vlambda=new R,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new R,this.previousPosition=new R,this.interpolatedPosition=new R,this.initPosition=new R,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new R,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new R,this.force=new R;const n=typeof t.mass=="number"?t.mass:0;this.mass=n,this.invMass=n>0?1/n:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=n<=0?kt.STATIC:kt.DYNAMIC,typeof t.type==typeof kt.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=kt.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new R,this.quaternion=new pi,this.initQuaternion=new pi,this.previousQuaternion=new pi,this.interpolatedQuaternion=new pi,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new R,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new R,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new R,this.invInertia=new R,this.invInertiaWorld=new ji,this.invMassSolve=0,this.invInertiaSolve=new R,this.invInertiaWorldSolve=new ji,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new R(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new R(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new Ai,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new R,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=kt.AWAKE,this.wakeUpAfterNarrowphase=!1,t===kt.SLEEPING&&this.dispatchEvent(kt.wakeupEvent)}sleep(){this.sleepState=kt.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const n=this.sleepState,a=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),r=this.sleepSpeedLimit**2;n===kt.AWAKE&&a<r?(this.sleepState=kt.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(kt.sleepyEvent)):n===kt.SLEEPY&&a>r?this.wakeUp():n===kt.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(kt.sleepEvent))}}updateSolveMassProperties(){this.sleepState===kt.SLEEPING||this.type===kt.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,n){return n===void 0&&(n=new R),t.vsub(this.position,n),this.quaternion.conjugate().vmult(n,n),n}vectorToLocalFrame(t,n){return n===void 0&&(n=new R),this.quaternion.conjugate().vmult(t,n),n}pointToWorldFrame(t,n){return n===void 0&&(n=new R),this.quaternion.vmult(t,n),n.vadd(this.position,n),n}vectorToWorldFrame(t,n){return n===void 0&&(n=new R),this.quaternion.vmult(t,n),n}addShape(t,n,a){const r=new R,o=new pi;return n&&r.copy(n),a&&o.copy(a),this.shapes.push(t),this.shapeOffsets.push(r),this.shapeOrientations.push(o),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const n=this.shapes.indexOf(t);return n===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(n,1),this.shapeOffsets.splice(n,1),this.shapeOrientations.splice(n,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,n=this.shapeOffsets,a=t.length;let r=0;for(let o=0;o!==a;o++){const u=t[o];u.updateBoundingSphereRadius();const f=n[o].length(),p=u.boundingSphereRadius;f+p>r&&(r=f+p)}this.boundingRadius=r}updateAABB(){const t=this.shapes,n=this.shapeOffsets,a=this.shapeOrientations,r=t.length,o=DM,u=NM,f=this.quaternion,p=this.aabb,h=LM;for(let g=0;g!==r;g++){const _=t[g];f.vmult(n[g],o),o.vadd(this.position,o),f.mult(a[g],u),_.calculateWorldAABB(o,u,h.lowerBound,h.upperBound),g===0?p.copy(h):p.extend(h)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const n=this.invInertia;if(!(n.x===n.y&&n.y===n.z&&!t)){const a=UM,r=OM;a.setRotationFromQuaternion(this.quaternion),a.transpose(r),a.scale(n,a),a.mmult(r,this.invInertiaWorld)}}applyForce(t,n){if(n===void 0&&(n=new R),this.type!==kt.DYNAMIC)return;this.sleepState===kt.SLEEPING&&this.wakeUp();const a=zM;n.cross(t,a),this.force.vadd(t,this.force),this.torque.vadd(a,this.torque)}applyLocalForce(t,n){if(n===void 0&&(n=new R),this.type!==kt.DYNAMIC)return;const a=PM,r=BM;this.vectorToWorldFrame(t,a),this.vectorToWorldFrame(n,r),this.applyForce(a,r)}applyTorque(t){this.type===kt.DYNAMIC&&(this.sleepState===kt.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,n){if(n===void 0&&(n=new R),this.type!==kt.DYNAMIC)return;this.sleepState===kt.SLEEPING&&this.wakeUp();const a=n,r=FM;r.copy(t),r.scale(this.invMass,r),this.velocity.vadd(r,this.velocity);const o=IM;a.cross(t,o),this.invInertiaWorld.vmult(o,o),this.angularVelocity.vadd(o,this.angularVelocity)}applyLocalImpulse(t,n){if(n===void 0&&(n=new R),this.type!==kt.DYNAMIC)return;const a=HM,r=GM;this.vectorToWorldFrame(t,a),this.vectorToWorldFrame(n,r),this.applyImpulse(a,r)}updateMassProperties(){const t=VM;this.invMass=this.mass>0?1/this.mass:0;const n=this.inertia,a=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),gr.calculateInertia(t,this.mass,n),this.invInertia.set(n.x>0&&!a?1/n.x:0,n.y>0&&!a?1/n.y:0,n.z>0&&!a?1/n.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,n){const a=new R;return t.vsub(this.position,a),this.angularVelocity.cross(a,n),this.velocity.vadd(n,n),n}integrate(t,n,a){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===kt.DYNAMIC||this.type===kt.KINEMATIC)||this.sleepState===kt.SLEEPING)return;const r=this.velocity,o=this.angularVelocity,u=this.position,f=this.force,p=this.torque,h=this.quaternion,g=this.invMass,_=this.invInertiaWorld,v=this.linearFactor,y=g*t;r.x+=f.x*y*v.x,r.y+=f.y*y*v.y,r.z+=f.z*y*v.z;const M=_.elements,b=this.angularFactor,S=p.x*b.x,x=p.y*b.y,T=p.z*b.z;o.x+=t*(M[0]*S+M[1]*x+M[2]*T),o.y+=t*(M[3]*S+M[4]*x+M[5]*T),o.z+=t*(M[6]*S+M[7]*x+M[8]*T),u.x+=r.x*t,u.y+=r.y*t,u.z+=r.z*t,h.integrate(this.angularVelocity,t,this.angularFactor,h),n&&(a?h.normalizeFast():h.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}kt.idCounter=0;kt.COLLIDE_EVENT_NAME="collide";kt.DYNAMIC=Np.DYNAMIC;kt.STATIC=Np.STATIC;kt.KINEMATIC=Np.KINEMATIC;kt.AWAKE=Lp.AWAKE;kt.SLEEPY=Lp.SLEEPY;kt.SLEEPING=Lp.SLEEPING;kt.wakeupEvent={type:"wakeup"};kt.sleepyEvent={type:"sleepy"};kt.sleepEvent={type:"sleep"};const DM=new R,NM=new pi,LM=new Ai,UM=new ji,OM=new ji;new ji;const zM=new R,PM=new R,BM=new R,FM=new R,IM=new R,HM=new R,GM=new R,VM=new R;class dx{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,n,a){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,n){return!((t.collisionFilterGroup&n.collisionFilterMask)===0||(n.collisionFilterGroup&t.collisionFilterMask)===0||((t.type&kt.STATIC)!==0||t.sleepState===kt.SLEEPING)&&((n.type&kt.STATIC)!==0||n.sleepState===kt.SLEEPING))}intersectionTest(t,n,a,r){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,n,a,r):this.doBoundingSphereBroadphase(t,n,a,r)}doBoundingSphereBroadphase(t,n,a,r){const o=kM;n.position.vsub(t.position,o);const u=(t.boundingRadius+n.boundingRadius)**2;o.lengthSquared()<u&&(a.push(t),r.push(n))}doBoundingBoxBroadphase(t,n,a,r){t.aabbNeedsUpdate&&t.updateAABB(),n.aabbNeedsUpdate&&n.updateAABB(),t.aabb.overlaps(n.aabb)&&(a.push(t),r.push(n))}makePairsUnique(t,n){const a=qM,r=XM,o=WM,u=t.length;for(let f=0;f!==u;f++)r[f]=t[f],o[f]=n[f];t.length=0,n.length=0;for(let f=0;f!==u;f++){const p=r[f].id,h=o[f].id,g=p<h?`${p},${h}`:`${h},${p}`;a[g]=f,a.keys.push(g)}for(let f=0;f!==a.keys.length;f++){const p=a.keys.pop(),h=a[p];t.push(r[h]),n.push(o[h]),delete a[p]}}setWorld(t){}static boundingSphereCheck(t,n){const a=new R;t.position.vsub(n.position,a);const r=t.shapes[0],o=n.shapes[0];return Math.pow(r.boundingSphereRadius+o.boundingSphereRadius,2)>a.lengthSquared()}aabbQuery(t,n,a){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const kM=new R;new R;new pi;new R;const qM={keys:[]},XM=[],WM=[];new R;new R;new R;class YM extends dx{constructor(){super()}collisionPairs(t,n,a){const r=t.bodies,o=r.length;let u,f;for(let p=0;p!==o;p++)for(let h=0;h!==p;h++)u=r[p],f=r[h],this.needBroadphaseCollision(u,f)&&this.intersectionTest(u,f,n,a)}aabbQuery(t,n,a){a===void 0&&(a=[]);for(let r=0;r<t.bodies.length;r++){const o=t.bodies[r];o.aabbNeedsUpdate&&o.updateAABB(),o.aabb.overlaps(n)&&a.push(o)}return a}}class Cu{constructor(){this.rayFromWorld=new R,this.rayToWorld=new R,this.hitNormalWorld=new R,this.hitPointWorld=new R,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,n,a,r,o,u,f){this.rayFromWorld.copy(t),this.rayToWorld.copy(n),this.hitNormalWorld.copy(a),this.hitPointWorld.copy(r),this.shape=o,this.body=u,this.distance=f}}let px,mx,gx,vx,_x,xx,yx;const Up={CLOSEST:1,ANY:2,ALL:4};px=$t.types.SPHERE;mx=$t.types.PLANE;gx=$t.types.BOX;vx=$t.types.CYLINDER;_x=$t.types.CONVEXPOLYHEDRON;xx=$t.types.HEIGHTFIELD;yx=$t.types.TRIMESH;let fa=class oa{get[px](){return this._intersectSphere}get[mx](){return this._intersectPlane}get[gx](){return this._intersectBox}get[vx](){return this._intersectConvex}get[_x](){return this._intersectConvex}get[xx](){return this._intersectHeightfield}get[yx](){return this._intersectTrimesh}constructor(t,n){t===void 0&&(t=new R),n===void 0&&(n=new R),this.from=t.clone(),this.to=n.clone(),this.direction=new R,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=oa.ANY,this.result=new Cu,this.hasHit=!1,this.callback=a=>{}}intersectWorld(t,n){return this.mode=n.mode||oa.ANY,this.result=n.result||new Cu,this.skipBackfaces=!!n.skipBackfaces,this.collisionFilterMask=typeof n.collisionFilterMask<"u"?n.collisionFilterMask:-1,this.collisionFilterGroup=typeof n.collisionFilterGroup<"u"?n.collisionFilterGroup:-1,this.checkCollisionResponse=typeof n.checkCollisionResponse<"u"?n.checkCollisionResponse:!0,n.from&&this.from.copy(n.from),n.to&&this.to.copy(n.to),this.callback=n.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Xv),Kh.length=0,t.broadphase.aabbQuery(t,Xv,Kh),this.intersectBodies(Kh),this.hasHit}intersectBody(t,n){n&&(this.result=n,this.updateDirection());const a=this.checkCollisionResponse;if(a&&!t.collisionResponse||(this.collisionFilterGroup&t.collisionFilterMask)===0||(t.collisionFilterGroup&this.collisionFilterMask)===0)return;const r=jM,o=ZM;for(let u=0,f=t.shapes.length;u<f;u++){const p=t.shapes[u];if(!(a&&!p.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[u],o),t.quaternion.vmult(t.shapeOffsets[u],r),r.vadd(t.position,r),this.intersectShape(p,o,r,t),this.result.shouldStop))break}}intersectBodies(t,n){n&&(this.result=n,this.updateDirection());for(let a=0,r=t.length;!this.result.shouldStop&&a<r;a++)this.intersectBody(t[a])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,n,a,r){const o=this.from;if(cE(o,this.direction,a)>t.boundingSphereRadius)return;const f=this[t.type];f&&f.call(this,t,n,a,r,t)}_intersectBox(t,n,a,r,o){return this._intersectConvex(t.convexPolyhedronRepresentation,n,a,r,o)}_intersectPlane(t,n,a,r,o){const u=this.from,f=this.to,p=this.direction,h=new R(0,0,1);n.vmult(h,h);const g=new R;u.vsub(a,g);const _=g.dot(h);f.vsub(a,g);const v=g.dot(h);if(_*v>0||u.distanceTo(f)<_)return;const y=h.dot(p);if(Math.abs(y)<this.precision)return;const M=new R,b=new R,S=new R;u.vsub(a,M);const x=-h.dot(M)/y;p.scale(x,b),u.vadd(b,S),this.reportIntersection(h,S,o,r,-1)}getAABB(t){const{lowerBound:n,upperBound:a}=t,r=this.to,o=this.from;n.x=Math.min(r.x,o.x),n.y=Math.min(r.y,o.y),n.z=Math.min(r.z,o.z),a.x=Math.max(r.x,o.x),a.y=Math.max(r.y,o.y),a.z=Math.max(r.z,o.z)}_intersectHeightfield(t,n,a,r,o){t.data,t.elementSize;const u=KM;u.from.copy(this.from),u.to.copy(this.to),Ze.pointToLocalFrame(a,n,u.from,u.from),Ze.pointToLocalFrame(a,n,u.to,u.to),u.updateDirection();const f=QM;let p,h,g,_;p=h=0,g=_=t.data.length-1;const v=new Ai;u.getAABB(v),t.getIndexOfPosition(v.lowerBound.x,v.lowerBound.y,f,!0),p=Math.max(p,f[0]),h=Math.max(h,f[1]),t.getIndexOfPosition(v.upperBound.x,v.upperBound.y,f,!0),g=Math.min(g,f[0]+1),_=Math.min(_,f[1]+1);for(let y=p;y<g;y++)for(let M=h;M<_;M++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(y,M,v),!!v.overlapsRay(u)){if(t.getConvexTrianglePillar(y,M,!1),Ze.pointToWorldFrame(a,n,t.pillarOffset,Qc),this._intersectConvex(t.pillarConvex,n,Qc,r,o,Wv),this.result.shouldStop)return;t.getConvexTrianglePillar(y,M,!0),Ze.pointToWorldFrame(a,n,t.pillarOffset,Qc),this._intersectConvex(t.pillarConvex,n,Qc,r,o,Wv)}}}_intersectSphere(t,n,a,r,o){const u=this.from,f=this.to,p=t.radius,h=(f.x-u.x)**2+(f.y-u.y)**2+(f.z-u.z)**2,g=2*((f.x-u.x)*(u.x-a.x)+(f.y-u.y)*(u.y-a.y)+(f.z-u.z)*(u.z-a.z)),_=(u.x-a.x)**2+(u.y-a.y)**2+(u.z-a.z)**2-p**2,v=g**2-4*h*_,y=JM,M=$M;if(!(v<0))if(v===0)u.lerp(f,v,y),y.vsub(a,M),M.normalize(),this.reportIntersection(M,y,o,r,-1);else{const b=(-g-Math.sqrt(v))/(2*h),S=(-g+Math.sqrt(v))/(2*h);if(b>=0&&b<=1&&(u.lerp(f,b,y),y.vsub(a,M),M.normalize(),this.reportIntersection(M,y,o,r,-1)),this.result.shouldStop)return;S>=0&&S<=1&&(u.lerp(f,S,y),y.vsub(a,M),M.normalize(),this.reportIntersection(M,y,o,r,-1))}}_intersectConvex(t,n,a,r,o,u){const f=tE,p=Yv,h=u&&u.faceList||null,g=t.faces,_=t.vertices,v=t.faceNormals,y=this.direction,M=this.from,b=this.to,S=M.distanceTo(b),x=h?h.length:g.length,T=this.result;for(let C=0;!T.shouldStop&&C<x;C++){const N=h?h[C]:C,U=g[N],P=v[N],B=n,X=a;p.copy(_[U[0]]),B.vmult(p,p),p.vadd(X,p),p.vsub(M,p),B.vmult(P,f);const w=y.dot(f);if(Math.abs(w)<this.precision)continue;const O=f.dot(p)/w;if(!(O<0)){y.scale(O,hi),hi.vadd(M,hi),Vi.copy(_[U[0]]),B.vmult(Vi,Vi),X.vadd(Vi,Vi);for(let H=1;!T.shouldStop&&H<U.length-1;H++){aa.copy(_[U[H]]),sa.copy(_[U[H+1]]),B.vmult(aa,aa),B.vmult(sa,sa),X.vadd(aa,aa),X.vadd(sa,sa);const $=hi.distanceTo(M);!(oa.pointInTriangle(hi,Vi,aa,sa)||oa.pointInTriangle(hi,aa,Vi,sa))||$>S||this.reportIntersection(f,hi,o,r,N)}}}}_intersectTrimesh(t,n,a,r,o,u){const f=eE,p=oE,h=lE,g=Yv,_=nE,v=iE,y=aE,M=rE,b=sE,S=t.indices;t.vertices;const x=this.from,T=this.to,C=this.direction;h.position.copy(a),h.quaternion.copy(n),Ze.vectorToLocalFrame(a,n,C,_),Ze.pointToLocalFrame(a,n,x,v),Ze.pointToLocalFrame(a,n,T,y),y.x*=t.scale.x,y.y*=t.scale.y,y.z*=t.scale.z,v.x*=t.scale.x,v.y*=t.scale.y,v.z*=t.scale.z,y.vsub(v,_),_.normalize();const N=v.distanceSquared(y);t.tree.rayQuery(this,h,p);for(let U=0,P=p.length;!this.result.shouldStop&&U!==P;U++){const B=p[U];t.getNormal(B,f),t.getVertex(S[B*3],Vi),Vi.vsub(v,g);const X=_.dot(f),w=f.dot(g)/X;if(w<0)continue;_.scale(w,hi),hi.vadd(v,hi),t.getVertex(S[B*3+1],aa),t.getVertex(S[B*3+2],sa);const O=hi.distanceSquared(v);!(oa.pointInTriangle(hi,aa,Vi,sa)||oa.pointInTriangle(hi,Vi,aa,sa))||O>N||(Ze.vectorToWorldFrame(n,f,b),Ze.pointToWorldFrame(a,n,hi,M),this.reportIntersection(b,M,o,r,B))}p.length=0}reportIntersection(t,n,a,r,o){const u=this.from,f=this.to,p=u.distanceTo(n),h=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(h.hitFaceIndex=typeof o<"u"?o:-1,this.mode){case oa.ALL:this.hasHit=!0,h.set(u,f,t,n,a,r,p),h.hasHit=!0,this.callback(h);break;case oa.CLOSEST:(p<h.distance||!h.hasHit)&&(this.hasHit=!0,h.hasHit=!0,h.set(u,f,t,n,a,r,p));break;case oa.ANY:this.hasHit=!0,h.hasHit=!0,h.set(u,f,t,n,a,r,p),h.shouldStop=!0;break}}static pointInTriangle(t,n,a,r){r.vsub(n,dr),a.vsub(n,_l),t.vsub(n,Qh);const o=dr.dot(dr),u=dr.dot(_l),f=dr.dot(Qh),p=_l.dot(_l),h=_l.dot(Qh);let g,_;return(g=p*f-u*h)>=0&&(_=o*h-u*f)>=0&&g+_<o*p-u*u}};fa.CLOSEST=Up.CLOSEST;fa.ANY=Up.ANY;fa.ALL=Up.ALL;const Xv=new Ai,Kh=[],_l=new R,Qh=new R,jM=new R,ZM=new pi,hi=new R,Vi=new R,aa=new R,sa=new R;new R;new Cu;const Wv={faceList:[0]},Qc=new R,KM=new fa,QM=[],JM=new R,$M=new R,tE=new R;new R;new R;const Yv=new R,eE=new R,nE=new R,iE=new R,aE=new R,sE=new R,rE=new R;new Ai;const oE=[],lE=new Ze,dr=new R,Jc=new R;function cE(c,t,n){n.vsub(c,dr);const a=dr.dot(t);return t.scale(a,Jc),Jc.vadd(c,Jc),n.distanceTo(Jc)}class vo extends dx{static checkBounds(t,n,a){let r,o;a===0?(r=t.position.x,o=n.position.x):a===1?(r=t.position.y,o=n.position.y):a===2&&(r=t.position.z,o=n.position.z);const u=t.boundingRadius,f=n.boundingRadius,p=r+u;return o-f<p}static insertionSortX(t){for(let n=1,a=t.length;n<a;n++){const r=t[n];let o;for(o=n-1;o>=0&&!(t[o].aabb.lowerBound.x<=r.aabb.lowerBound.x);o--)t[o+1]=t[o];t[o+1]=r}return t}static insertionSortY(t){for(let n=1,a=t.length;n<a;n++){const r=t[n];let o;for(o=n-1;o>=0&&!(t[o].aabb.lowerBound.y<=r.aabb.lowerBound.y);o--)t[o+1]=t[o];t[o+1]=r}return t}static insertionSortZ(t){for(let n=1,a=t.length;n<a;n++){const r=t[n];let o;for(o=n-1;o>=0&&!(t[o].aabb.lowerBound.z<=r.aabb.lowerBound.z);o--)t[o+1]=t[o];t[o+1]=r}return t}constructor(t){super(),this.axisList=[],this.world=null,this.axisIndex=0;const n=this.axisList;this._addBodyHandler=a=>{n.push(a.body)},this._removeBodyHandler=a=>{const r=n.indexOf(a.body);r!==-1&&n.splice(r,1)},t&&this.setWorld(t)}setWorld(t){this.axisList.length=0;for(let n=0;n<t.bodies.length;n++)this.axisList.push(t.bodies[n]);t.removeEventListener("addBody",this._addBodyHandler),t.removeEventListener("removeBody",this._removeBodyHandler),t.addEventListener("addBody",this._addBodyHandler),t.addEventListener("removeBody",this._removeBodyHandler),this.world=t,this.dirty=!0}collisionPairs(t,n,a){const r=this.axisList,o=r.length,u=this.axisIndex;let f,p;for(this.dirty&&(this.sortList(),this.dirty=!1),f=0;f!==o;f++){const h=r[f];for(p=f+1;p<o;p++){const g=r[p];if(this.needBroadphaseCollision(h,g)){if(!vo.checkBounds(h,g,u))break;this.intersectionTest(h,g,n,a)}}}}sortList(){const t=this.axisList,n=this.axisIndex,a=t.length;for(let r=0;r!==a;r++){const o=t[r];o.aabbNeedsUpdate&&o.updateAABB()}n===0?vo.insertionSortX(t):n===1?vo.insertionSortY(t):n===2&&vo.insertionSortZ(t)}autoDetectAxis(){let t=0,n=0,a=0,r=0,o=0,u=0;const f=this.axisList,p=f.length,h=1/p;for(let y=0;y!==p;y++){const M=f[y],b=M.position.x;t+=b,n+=b*b;const S=M.position.y;a+=S,r+=S*S;const x=M.position.z;o+=x,u+=x*x}const g=n-t*t*h,_=r-a*a*h,v=u-o*o*h;g>_?g>v?this.axisIndex=0:this.axisIndex=2:_>v?this.axisIndex=1:this.axisIndex=2}aabbQuery(t,n,a){a===void 0&&(a=[]),this.dirty&&(this.sortList(),this.dirty=!1);const r=this.axisIndex;let o="x";r===1&&(o="y"),r===2&&(o="z");const u=this.axisList;n.lowerBound[o],n.upperBound[o];for(let f=0;f<u.length;f++){const p=u[f];p.aabbNeedsUpdate&&p.updateAABB(),p.aabb.overlaps(n)&&a.push(p)}return a}}class uE{static defaults(t,n){t===void 0&&(t={});for(let a in n)a in t||(t[a]=n[a]);return t}}class jv{constructor(){this.spatial=new R,this.rotational=new R}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,n){return t.dot(this.spatial)+n.dot(this.rotational)}}class Bl{constructor(t,n,a,r){a===void 0&&(a=-1e6),r===void 0&&(r=1e6),this.id=Bl.idCounter++,this.minForce=a,this.maxForce=r,this.bi=t,this.bj=n,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new jv,this.jacobianElementB=new jv,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,n,a){const r=n,o=t,u=a;this.a=4/(u*(1+4*r)),this.b=4*r/(1+4*r),this.eps=4/(u*u*o*(1+4*r))}computeB(t,n,a){const r=this.computeGW(),o=this.computeGq(),u=this.computeGiMf();return-o*t-r*n-u*a}computeGq(){const t=this.jacobianElementA,n=this.jacobianElementB,a=this.bi,r=this.bj,o=a.position,u=r.position;return t.spatial.dot(o)+n.spatial.dot(u)}computeGW(){const t=this.jacobianElementA,n=this.jacobianElementB,a=this.bi,r=this.bj,o=a.velocity,u=r.velocity,f=a.angularVelocity,p=r.angularVelocity;return t.multiplyVectors(o,f)+n.multiplyVectors(u,p)}computeGWlambda(){const t=this.jacobianElementA,n=this.jacobianElementB,a=this.bi,r=this.bj,o=a.vlambda,u=r.vlambda,f=a.wlambda,p=r.wlambda;return t.multiplyVectors(o,f)+n.multiplyVectors(u,p)}computeGiMf(){const t=this.jacobianElementA,n=this.jacobianElementB,a=this.bi,r=this.bj,o=a.force,u=a.torque,f=r.force,p=r.torque,h=a.invMassSolve,g=r.invMassSolve;return o.scale(h,Zv),f.scale(g,Kv),a.invInertiaWorldSolve.vmult(u,Qv),r.invInertiaWorldSolve.vmult(p,Jv),t.multiplyVectors(Zv,Qv)+n.multiplyVectors(Kv,Jv)}computeGiMGt(){const t=this.jacobianElementA,n=this.jacobianElementB,a=this.bi,r=this.bj,o=a.invMassSolve,u=r.invMassSolve,f=a.invInertiaWorldSolve,p=r.invInertiaWorldSolve;let h=o+u;return f.vmult(t.rotational,$c),h+=$c.dot(t.rotational),p.vmult(n.rotational,$c),h+=$c.dot(n.rotational),h}addToWlambda(t){const n=this.jacobianElementA,a=this.jacobianElementB,r=this.bi,o=this.bj,u=fE;r.vlambda.addScaledVector(r.invMassSolve*t,n.spatial,r.vlambda),o.vlambda.addScaledVector(o.invMassSolve*t,a.spatial,o.vlambda),r.invInertiaWorldSolve.vmult(n.rotational,u),r.wlambda.addScaledVector(t,u,r.wlambda),o.invInertiaWorldSolve.vmult(a.rotational,u),o.wlambda.addScaledVector(t,u,o.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}Bl.idCounter=0;const Zv=new R,Kv=new R,Qv=new R,Jv=new R,$c=new R,fE=new R;class hE extends Bl{constructor(t,n,a){a===void 0&&(a=1e6),super(t,n,0,a),this.restitution=0,this.ri=new R,this.rj=new R,this.ni=new R}computeB(t){const n=this.a,a=this.b,r=this.bi,o=this.bj,u=this.ri,f=this.rj,p=dE,h=pE,g=r.velocity,_=r.angularVelocity;r.force,r.torque;const v=o.velocity,y=o.angularVelocity;o.force,o.torque;const M=mE,b=this.jacobianElementA,S=this.jacobianElementB,x=this.ni;u.cross(x,p),f.cross(x,h),x.negate(b.spatial),p.negate(b.rotational),S.spatial.copy(x),S.rotational.copy(h),M.copy(o.position),M.vadd(f,M),M.vsub(r.position,M),M.vsub(u,M);const T=x.dot(M),C=this.restitution+1,N=C*v.dot(x)-C*g.dot(x)+y.dot(h)-_.dot(p),U=this.computeGiMf();return-T*n-N*a-t*U}getImpactVelocityAlongNormal(){const t=gE,n=vE,a=_E,r=xE,o=yE;return this.bi.position.vadd(this.ri,a),this.bj.position.vadd(this.rj,r),this.bi.getVelocityAtWorldPoint(a,t),this.bj.getVelocityAtWorldPoint(r,n),t.vsub(n,o),this.ni.dot(o)}}const dE=new R,pE=new R,mE=new R,gE=new R,vE=new R,_E=new R,xE=new R,yE=new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;class $v extends Bl{constructor(t,n,a){super(t,n,-a,a),this.ri=new R,this.rj=new R,this.t=new R}computeB(t){this.a;const n=this.b;this.bi,this.bj;const a=this.ri,r=this.rj,o=SE,u=ME,f=this.t;a.cross(f,o),r.cross(f,u);const p=this.jacobianElementA,h=this.jacobianElementB;f.negate(p.spatial),o.negate(p.rotational),h.spatial.copy(f),h.rotational.copy(u);const g=this.computeGW(),_=this.computeGiMf();return-g*n-t*_}}const SE=new R,ME=new R;class yo{constructor(t,n,a){a=uE.defaults(a,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=yo.idCounter++,this.materials=[t,n],this.friction=a.friction,this.restitution=a.restitution,this.contactEquationStiffness=a.contactEquationStiffness,this.contactEquationRelaxation=a.contactEquationRelaxation,this.frictionEquationStiffness=a.frictionEquationStiffness,this.frictionEquationRelaxation=a.frictionEquationRelaxation}}yo.idCounter=0;let Du=class Sx{constructor(t){t===void 0&&(t={});let n="";typeof t=="string"&&(n=t,t={}),this.name=n,this.id=Sx.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}};Du.idCounter=0;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new fa;new R;new R;new R;new R(1,0,0),new R(0,1,0),new R(0,0,1);new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;let EE=class extends $t{constructor(){super({type:$t.types.PLANE}),this.worldNormal=new R,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(t){const n=this.worldNormal;n.set(0,0,1),t.vmult(n,n),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(t,n){return n===void 0&&(n=new R),n}volume(){return Number.MAX_VALUE}calculateWorldAABB(t,n,a,r){Pa.set(0,0,1),n.vmult(Pa,Pa);const o=Number.MAX_VALUE;a.set(-o,-o,-o),r.set(o,o,o),Pa.x===1?r.x=t.x:Pa.x===-1&&(a.x=t.x),Pa.y===1?r.y=t.y:Pa.y===-1&&(a.y=t.y),Pa.z===1?r.z=t.z:Pa.z===-1&&(a.z=t.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}};const Pa=new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new Ai;new R;new Ai;new R;new R;new R;new R;new R;new R;new R;new Ai;new R;new Ze;new Ai;class bE{constructor(){this.equations=[]}solve(t,n){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const n=this.equations,a=n.indexOf(t);a!==-1&&n.splice(a,1)}removeAllEquations(){this.equations.length=0}}class TE extends bE{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,n){let a=0;const r=this.iterations,o=this.tolerance*this.tolerance,u=this.equations,f=u.length,p=n.bodies,h=p.length,g=t;let _,v,y,M,b,S;if(f!==0)for(let N=0;N!==h;N++)p[N].updateSolveMassProperties();const x=wE,T=RE,C=AE;x.length=f,T.length=f,C.length=f;for(let N=0;N!==f;N++){const U=u[N];C[N]=0,T[N]=U.computeB(g),x[N]=1/U.computeC()}if(f!==0){for(let P=0;P!==h;P++){const B=p[P],X=B.vlambda,w=B.wlambda;X.set(0,0,0),w.set(0,0,0)}for(a=0;a!==r;a++){M=0;for(let P=0;P!==f;P++){const B=u[P];_=T[P],v=x[P],S=C[P],b=B.computeGWlambda(),y=v*(_-b-B.eps*S),S+y<B.minForce?y=B.minForce-S:S+y>B.maxForce&&(y=B.maxForce-S),C[P]+=y,M+=y>0?y:-y,B.addToWlambda(y)}if(M*M<o)break}for(let P=0;P!==h;P++){const B=p[P],X=B.velocity,w=B.angularVelocity;B.vlambda.vmul(B.linearFactor,B.vlambda),X.vadd(B.vlambda,X),B.wlambda.vmul(B.angularFactor,B.wlambda),w.vadd(B.wlambda,w)}let N=u.length;const U=1/g;for(;N--;)u[N].multiplier=C[N]*U}return a}}const AE=[],wE=[],RE=[];class CE{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let n=0;n!==t;n++)this.objects.push(n<0||arguments.length<=n?void 0:arguments[n]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const n=this.objects;for(;n.length>t;)n.pop();for(;n.length<t;)n.push(this.constructObject());return this}}class DE extends CE{constructor(){super(...arguments),this.type=R}constructObject(){return new R}}const fn={sphereSphere:$t.types.SPHERE,spherePlane:$t.types.SPHERE|$t.types.PLANE,boxBox:$t.types.BOX|$t.types.BOX,sphereBox:$t.types.SPHERE|$t.types.BOX,planeBox:$t.types.PLANE|$t.types.BOX,convexConvex:$t.types.CONVEXPOLYHEDRON,sphereConvex:$t.types.SPHERE|$t.types.CONVEXPOLYHEDRON,planeConvex:$t.types.PLANE|$t.types.CONVEXPOLYHEDRON,boxConvex:$t.types.BOX|$t.types.CONVEXPOLYHEDRON,sphereHeightfield:$t.types.SPHERE|$t.types.HEIGHTFIELD,boxHeightfield:$t.types.BOX|$t.types.HEIGHTFIELD,convexHeightfield:$t.types.CONVEXPOLYHEDRON|$t.types.HEIGHTFIELD,sphereParticle:$t.types.PARTICLE|$t.types.SPHERE,planeParticle:$t.types.PLANE|$t.types.PARTICLE,boxParticle:$t.types.BOX|$t.types.PARTICLE,convexParticle:$t.types.PARTICLE|$t.types.CONVEXPOLYHEDRON,cylinderCylinder:$t.types.CYLINDER,sphereCylinder:$t.types.SPHERE|$t.types.CYLINDER,planeCylinder:$t.types.PLANE|$t.types.CYLINDER,boxCylinder:$t.types.BOX|$t.types.CYLINDER,convexCylinder:$t.types.CONVEXPOLYHEDRON|$t.types.CYLINDER,heightfieldCylinder:$t.types.HEIGHTFIELD|$t.types.CYLINDER,particleCylinder:$t.types.PARTICLE|$t.types.CYLINDER,sphereTrimesh:$t.types.SPHERE|$t.types.TRIMESH,planeTrimesh:$t.types.PLANE|$t.types.TRIMESH};class NE{get[fn.sphereSphere](){return this.sphereSphere}get[fn.spherePlane](){return this.spherePlane}get[fn.boxBox](){return this.boxBox}get[fn.sphereBox](){return this.sphereBox}get[fn.planeBox](){return this.planeBox}get[fn.convexConvex](){return this.convexConvex}get[fn.sphereConvex](){return this.sphereConvex}get[fn.planeConvex](){return this.planeConvex}get[fn.boxConvex](){return this.boxConvex}get[fn.sphereHeightfield](){return this.sphereHeightfield}get[fn.boxHeightfield](){return this.boxHeightfield}get[fn.convexHeightfield](){return this.convexHeightfield}get[fn.sphereParticle](){return this.sphereParticle}get[fn.planeParticle](){return this.planeParticle}get[fn.boxParticle](){return this.boxParticle}get[fn.convexParticle](){return this.convexParticle}get[fn.cylinderCylinder](){return this.convexConvex}get[fn.sphereCylinder](){return this.sphereConvex}get[fn.planeCylinder](){return this.planeConvex}get[fn.boxCylinder](){return this.boxConvex}get[fn.convexCylinder](){return this.convexConvex}get[fn.heightfieldCylinder](){return this.heightfieldCylinder}get[fn.particleCylinder](){return this.particleCylinder}get[fn.sphereTrimesh](){return this.sphereTrimesh}get[fn.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new DE,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,n,a,r,o,u){let f;this.contactPointPool.length?(f=this.contactPointPool.pop(),f.bi=t,f.bj=n):f=new hE(t,n),f.enabled=t.collisionResponse&&n.collisionResponse&&a.collisionResponse&&r.collisionResponse;const p=this.currentContactMaterial;f.restitution=p.restitution,f.setSpookParams(p.contactEquationStiffness,p.contactEquationRelaxation,this.world.dt);const h=a.material||t.material,g=r.material||n.material;return h&&g&&h.restitution>=0&&g.restitution>=0&&(f.restitution=h.restitution*g.restitution),f.si=o||a,f.sj=u||r,f}createFrictionEquationsFromContact(t,n){const a=t.bi,r=t.bj,o=t.si,u=t.sj,f=this.world,p=this.currentContactMaterial;let h=p.friction;const g=o.material||a.material,_=u.material||r.material;if(g&&_&&g.friction>=0&&_.friction>=0&&(h=g.friction*_.friction),h>0){const v=h*(f.frictionGravity||f.gravity).length();let y=a.invMass+r.invMass;y>0&&(y=1/y);const M=this.frictionEquationPool,b=M.length?M.pop():new $v(a,r,v*y),S=M.length?M.pop():new $v(a,r,v*y);return b.bi=S.bi=a,b.bj=S.bj=r,b.minForce=S.minForce=-v*y,b.maxForce=S.maxForce=v*y,b.ri.copy(t.ri),b.rj.copy(t.rj),S.ri.copy(t.ri),S.rj.copy(t.rj),t.ni.tangents(b.t,S.t),b.setSpookParams(p.frictionEquationStiffness,p.frictionEquationRelaxation,f.dt),S.setSpookParams(p.frictionEquationStiffness,p.frictionEquationRelaxation,f.dt),b.enabled=S.enabled=t.enabled,n.push(b,S),!0}return!1}createFrictionFromAverage(t){let n=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(n,this.frictionResult)||t===1)return;const a=this.frictionResult[this.frictionResult.length-2],r=this.frictionResult[this.frictionResult.length-1];nr.setZero(),$r.setZero(),to.setZero();const o=n.bi;n.bj;for(let f=0;f!==t;f++)n=this.result[this.result.length-1-f],n.bi!==o?(nr.vadd(n.ni,nr),$r.vadd(n.ri,$r),to.vadd(n.rj,to)):(nr.vsub(n.ni,nr),$r.vadd(n.rj,$r),to.vadd(n.ri,to));const u=1/t;$r.scale(u,a.ri),to.scale(u,a.rj),r.ri.copy(a.ri),r.rj.copy(a.rj),nr.normalize(),nr.tangents(a.t,r.t)}getContacts(t,n,a,r,o,u,f){this.contactPointPool=o,this.frictionEquationPool=f,this.result=r,this.frictionResult=u;const p=OE,h=zE,g=LE,_=UE;for(let v=0,y=t.length;v!==y;v++){const M=t[v],b=n[v];let S=null;M.material&&b.material&&(S=a.getContactMaterial(M.material,b.material)||null);const x=M.type&kt.KINEMATIC&&b.type&kt.STATIC||M.type&kt.STATIC&&b.type&kt.KINEMATIC||M.type&kt.KINEMATIC&&b.type&kt.KINEMATIC;for(let T=0;T<M.shapes.length;T++){M.quaternion.mult(M.shapeOrientations[T],p),M.quaternion.vmult(M.shapeOffsets[T],g),g.vadd(M.position,g);const C=M.shapes[T];for(let N=0;N<b.shapes.length;N++){b.quaternion.mult(b.shapeOrientations[N],h),b.quaternion.vmult(b.shapeOffsets[N],_),_.vadd(b.position,_);const U=b.shapes[N];if(!(C.collisionFilterMask&U.collisionFilterGroup&&U.collisionFilterMask&C.collisionFilterGroup)||g.distanceTo(_)>C.boundingSphereRadius+U.boundingSphereRadius)continue;let P=null;C.material&&U.material&&(P=a.getContactMaterial(C.material,U.material)||null),this.currentContactMaterial=P||S||a.defaultContactMaterial;const B=C.type|U.type,X=this[B];if(X){let w=!1;C.type<U.type?w=X.call(this,C,U,g,_,p,h,M,b,C,U,x):w=X.call(this,U,C,_,g,h,p,b,M,C,U,x),w&&x&&(a.shapeOverlapKeeper.set(C.id,U.id),a.bodyOverlapKeeper.set(M.id,b.id))}}}}}sphereSphere(t,n,a,r,o,u,f,p,h,g,_){if(_)return a.distanceSquared(r)<(t.radius+n.radius)**2;const v=this.createContactEquation(f,p,t,n,h,g);r.vsub(a,v.ni),v.ni.normalize(),v.ri.copy(v.ni),v.rj.copy(v.ni),v.ri.scale(t.radius,v.ri),v.rj.scale(-n.radius,v.rj),v.ri.vadd(a,v.ri),v.ri.vsub(f.position,v.ri),v.rj.vadd(r,v.rj),v.rj.vsub(p.position,v.rj),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}spherePlane(t,n,a,r,o,u,f,p,h,g,_){const v=this.createContactEquation(f,p,t,n,h,g);if(v.ni.set(0,0,1),u.vmult(v.ni,v.ni),v.ni.negate(v.ni),v.ni.normalize(),v.ni.scale(t.radius,v.ri),a.vsub(r,tu),v.ni.scale(v.ni.dot(tu),t_),tu.vsub(t_,v.rj),-tu.dot(v.ni)<=t.radius){if(_)return!0;const y=v.ri,M=v.rj;y.vadd(a,y),y.vsub(f.position,y),M.vadd(r,M),M.vsub(p.position,M),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}boxBox(t,n,a,r,o,u,f,p,h,g,_){return t.convexPolyhedronRepresentation.material=t.material,n.convexPolyhedronRepresentation.material=n.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,n.convexPolyhedronRepresentation.collisionResponse=n.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,n.convexPolyhedronRepresentation,a,r,o,u,f,p,t,n,_)}sphereBox(t,n,a,r,o,u,f,p,h,g,_){const v=this.v3pool,y=ob;a.vsub(r,eu),n.getSideNormals(y,u);const M=t.radius;let b=!1;const S=cb,x=ub,T=fb;let C=null,N=0,U=0,P=0,B=null;for(let z=0,G=y.length;z!==G&&b===!1;z++){const J=ab;J.copy(y[z]);const ft=J.length();J.normalize();const vt=eu.dot(J);if(vt<ft+M&&vt>0){const I=sb,j=rb;I.copy(y[(z+1)%3]),j.copy(y[(z+2)%3]);const _t=I.length(),At=j.length();I.normalize(),j.normalize();const Ot=eu.dot(I),at=eu.dot(j);if(Ot<_t&&Ot>-_t&&at<At&&at>-At){const dt=Math.abs(vt-ft-M);if((B===null||dt<B)&&(B=dt,U=Ot,P=at,C=ft,S.copy(J),x.copy(I),T.copy(j),N++,_))return!0}}}if(N){b=!0;const z=this.createContactEquation(f,p,t,n,h,g);S.scale(-M,z.ri),z.ni.copy(S),z.ni.negate(z.ni),S.scale(C,S),x.scale(U,x),S.vadd(x,S),T.scale(P,T),S.vadd(T,z.rj),z.ri.vadd(a,z.ri),z.ri.vsub(f.position,z.ri),z.rj.vadd(r,z.rj),z.rj.vsub(p.position,z.rj),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult)}let X=v.get();const w=lb;for(let z=0;z!==2&&!b;z++)for(let G=0;G!==2&&!b;G++)for(let J=0;J!==2&&!b;J++)if(X.set(0,0,0),z?X.vadd(y[0],X):X.vsub(y[0],X),G?X.vadd(y[1],X):X.vsub(y[1],X),J?X.vadd(y[2],X):X.vsub(y[2],X),r.vadd(X,w),w.vsub(a,w),w.lengthSquared()<M*M){if(_)return!0;b=!0;const ft=this.createContactEquation(f,p,t,n,h,g);ft.ri.copy(w),ft.ri.normalize(),ft.ni.copy(ft.ri),ft.ri.scale(M,ft.ri),ft.rj.copy(X),ft.ri.vadd(a,ft.ri),ft.ri.vsub(f.position,ft.ri),ft.rj.vadd(r,ft.rj),ft.rj.vsub(p.position,ft.rj),this.result.push(ft),this.createFrictionEquationsFromContact(ft,this.frictionResult)}v.release(X),X=null;const O=v.get(),H=v.get(),$=v.get(),V=v.get(),K=v.get(),W=y.length;for(let z=0;z!==W&&!b;z++)for(let G=0;G!==W&&!b;G++)if(z%3!==G%3){y[G].cross(y[z],O),O.normalize(),y[z].vadd(y[G],H),$.copy(a),$.vsub(H,$),$.vsub(r,$);const J=$.dot(O);O.scale(J,V);let ft=0;for(;ft===z%3||ft===G%3;)ft++;K.copy(a),K.vsub(V,K),K.vsub(H,K),K.vsub(r,K);const vt=Math.abs(J),I=K.length();if(vt<y[ft].length()&&I<M){if(_)return!0;b=!0;const j=this.createContactEquation(f,p,t,n,h,g);H.vadd(V,j.rj),j.rj.copy(j.rj),K.negate(j.ni),j.ni.normalize(),j.ri.copy(j.rj),j.ri.vadd(r,j.ri),j.ri.vsub(a,j.ri),j.ri.normalize(),j.ri.scale(M,j.ri),j.ri.vadd(a,j.ri),j.ri.vsub(f.position,j.ri),j.rj.vadd(r,j.rj),j.rj.vsub(p.position,j.rj),this.result.push(j),this.createFrictionEquationsFromContact(j,this.frictionResult)}}v.release(O,H,$,V,K)}planeBox(t,n,a,r,o,u,f,p,h,g,_){return n.convexPolyhedronRepresentation.material=n.material,n.convexPolyhedronRepresentation.collisionResponse=n.collisionResponse,n.convexPolyhedronRepresentation.id=n.id,this.planeConvex(t,n.convexPolyhedronRepresentation,a,r,o,u,f,p,t,n,_)}convexConvex(t,n,a,r,o,u,f,p,h,g,_,v,y){const M=Ab;if(!(a.distanceTo(r)>t.boundingSphereRadius+n.boundingSphereRadius)&&t.findSeparatingAxis(n,a,o,r,u,M,v,y)){const b=[],S=wb;t.clipAgainstHull(a,o,n,r,u,M,-100,100,b);let x=0;for(let T=0;T!==b.length;T++){if(_)return!0;const C=this.createContactEquation(f,p,t,n,h,g),N=C.ri,U=C.rj;M.negate(C.ni),b[T].normal.negate(S),S.scale(b[T].depth,S),b[T].point.vadd(S,N),U.copy(b[T].point),N.vsub(a,N),U.vsub(r,U),N.vadd(a,N),N.vsub(f.position,N),U.vadd(r,U),U.vsub(p.position,U),this.result.push(C),x++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(C,this.frictionResult)}this.enableFrictionReduction&&x&&this.createFrictionFromAverage(x)}}sphereConvex(t,n,a,r,o,u,f,p,h,g,_){const v=this.v3pool;a.vsub(r,hb);const y=n.faceNormals,M=n.faces,b=n.vertices,S=t.radius;let x=!1;for(let T=0;T!==b.length;T++){const C=b[T],N=gb;u.vmult(C,N),r.vadd(N,N);const U=mb;if(N.vsub(a,U),U.lengthSquared()<S*S){if(_)return!0;x=!0;const P=this.createContactEquation(f,p,t,n,h,g);P.ri.copy(U),P.ri.normalize(),P.ni.copy(P.ri),P.ri.scale(S,P.ri),N.vsub(r,P.rj),P.ri.vadd(a,P.ri),P.ri.vsub(f.position,P.ri),P.rj.vadd(r,P.rj),P.rj.vsub(p.position,P.rj),this.result.push(P),this.createFrictionEquationsFromContact(P,this.frictionResult);return}}for(let T=0,C=M.length;T!==C&&x===!1;T++){const N=y[T],U=M[T],P=vb;u.vmult(N,P);const B=_b;u.vmult(b[U[0]],B),B.vadd(r,B);const X=xb;P.scale(-S,X),a.vadd(X,X);const w=yb;X.vsub(B,w);const O=w.dot(P),H=Sb;if(a.vsub(B,H),O<0&&H.dot(P)>0){const $=[];for(let V=0,K=U.length;V!==K;V++){const W=v.get();u.vmult(b[U[V]],W),r.vadd(W,W),$.push(W)}if(ib($,P,a)){if(_)return!0;x=!0;const V=this.createContactEquation(f,p,t,n,h,g);P.scale(-S,V.ri),P.negate(V.ni);const K=v.get();P.scale(-O,K);const W=v.get();P.scale(-S,W),a.vsub(r,V.rj),V.rj.vadd(W,V.rj),V.rj.vadd(K,V.rj),V.rj.vadd(r,V.rj),V.rj.vsub(p.position,V.rj),V.ri.vadd(a,V.ri),V.ri.vsub(f.position,V.ri),v.release(K),v.release(W),this.result.push(V),this.createFrictionEquationsFromContact(V,this.frictionResult);for(let z=0,G=$.length;z!==G;z++)v.release($[z]);return}else for(let V=0;V!==U.length;V++){const K=v.get(),W=v.get();u.vmult(b[U[(V+1)%U.length]],K),u.vmult(b[U[(V+2)%U.length]],W),r.vadd(K,K),r.vadd(W,W);const z=db;W.vsub(K,z);const G=pb;z.unit(G);const J=v.get(),ft=v.get();a.vsub(K,ft);const vt=ft.dot(G);G.scale(vt,J),J.vadd(K,J);const I=v.get();if(J.vsub(a,I),vt>0&&vt*vt<z.lengthSquared()&&I.lengthSquared()<S*S){if(_)return!0;const j=this.createContactEquation(f,p,t,n,h,g);J.vsub(r,j.rj),J.vsub(a,j.ni),j.ni.normalize(),j.ni.scale(S,j.ri),j.rj.vadd(r,j.rj),j.rj.vsub(p.position,j.rj),j.ri.vadd(a,j.ri),j.ri.vsub(f.position,j.ri),this.result.push(j),this.createFrictionEquationsFromContact(j,this.frictionResult);for(let _t=0,At=$.length;_t!==At;_t++)v.release($[_t]);v.release(K),v.release(W),v.release(J),v.release(I),v.release(ft);return}v.release(K),v.release(W),v.release(J),v.release(I),v.release(ft)}for(let V=0,K=$.length;V!==K;V++)v.release($[V])}}}planeConvex(t,n,a,r,o,u,f,p,h,g,_){const v=Mb,y=Eb;y.set(0,0,1),o.vmult(y,y);let M=0;const b=bb;for(let S=0;S!==n.vertices.length;S++)if(v.copy(n.vertices[S]),u.vmult(v,v),r.vadd(v,v),v.vsub(a,b),y.dot(b)<=0){if(_)return!0;const T=this.createContactEquation(f,p,t,n,h,g),C=Tb;y.scale(y.dot(b),C),v.vsub(C,C),C.vsub(a,T.ri),T.ni.copy(y),v.vsub(r,T.rj),T.ri.vadd(a,T.ri),T.ri.vsub(f.position,T.ri),T.rj.vadd(r,T.rj),T.rj.vsub(p.position,T.rj),this.result.push(T),M++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(T,this.frictionResult)}this.enableFrictionReduction&&M&&this.createFrictionFromAverage(M)}boxConvex(t,n,a,r,o,u,f,p,h,g,_){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,n,a,r,o,u,f,p,t,n,_)}sphereHeightfield(t,n,a,r,o,u,f,p,h,g,_){const v=n.data,y=t.radius,M=n.elementSize,b=Ib,S=Fb;Ze.pointToLocalFrame(r,u,a,S);let x=Math.floor((S.x-y)/M)-1,T=Math.ceil((S.x+y)/M)+1,C=Math.floor((S.y-y)/M)-1,N=Math.ceil((S.y+y)/M)+1;if(T<0||N<0||x>v.length||C>v[0].length)return;x<0&&(x=0),T<0&&(T=0),C<0&&(C=0),N<0&&(N=0),x>=v.length&&(x=v.length-1),T>=v.length&&(T=v.length-1),N>=v[0].length&&(N=v[0].length-1),C>=v[0].length&&(C=v[0].length-1);const U=[];n.getRectMinMax(x,C,T,N,U);const P=U[0],B=U[1];if(S.z-y>B||S.z+y<P)return;const X=this.result;for(let w=x;w<T;w++)for(let O=C;O<N;O++){const H=X.length;let $=!1;if(n.getConvexTrianglePillar(w,O,!1),Ze.pointToWorldFrame(r,u,n.pillarOffset,b),a.distanceTo(b)<n.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&($=this.sphereConvex(t,n.pillarConvex,a,b,o,u,f,p,t,n,_)),_&&$||(n.getConvexTrianglePillar(w,O,!0),Ze.pointToWorldFrame(r,u,n.pillarOffset,b),a.distanceTo(b)<n.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&($=this.sphereConvex(t,n.pillarConvex,a,b,o,u,f,p,t,n,_)),_&&$))return!0;if(X.length-H>2)return}}boxHeightfield(t,n,a,r,o,u,f,p,h,g,_){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,n,a,r,o,u,f,p,t,n,_)}convexHeightfield(t,n,a,r,o,u,f,p,h,g,_){const v=n.data,y=n.elementSize,M=t.boundingSphereRadius,b=Pb,S=Bb,x=zb;Ze.pointToLocalFrame(r,u,a,x);let T=Math.floor((x.x-M)/y)-1,C=Math.ceil((x.x+M)/y)+1,N=Math.floor((x.y-M)/y)-1,U=Math.ceil((x.y+M)/y)+1;if(C<0||U<0||T>v.length||N>v[0].length)return;T<0&&(T=0),C<0&&(C=0),N<0&&(N=0),U<0&&(U=0),T>=v.length&&(T=v.length-1),C>=v.length&&(C=v.length-1),U>=v[0].length&&(U=v[0].length-1),N>=v[0].length&&(N=v[0].length-1);const P=[];n.getRectMinMax(T,N,C,U,P);const B=P[0],X=P[1];if(!(x.z-M>X||x.z+M<B))for(let w=T;w<C;w++)for(let O=N;O<U;O++){let H=!1;if(n.getConvexTrianglePillar(w,O,!1),Ze.pointToWorldFrame(r,u,n.pillarOffset,b),a.distanceTo(b)<n.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(H=this.convexConvex(t,n.pillarConvex,a,b,o,u,f,p,null,null,_,S,null)),_&&H||(n.getConvexTrianglePillar(w,O,!0),Ze.pointToWorldFrame(r,u,n.pillarOffset,b),a.distanceTo(b)<n.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(H=this.convexConvex(t,n.pillarConvex,a,b,o,u,f,p,null,null,_,S,null)),_&&H))return!0}}sphereParticle(t,n,a,r,o,u,f,p,h,g,_){const v=Nb;if(v.set(0,0,1),r.vsub(a,v),v.lengthSquared()<=t.radius*t.radius){if(_)return!0;const M=this.createContactEquation(p,f,n,t,h,g);v.normalize(),M.rj.copy(v),M.rj.scale(t.radius,M.rj),M.ni.copy(v),M.ni.negate(M.ni),M.ri.set(0,0,0),this.result.push(M),this.createFrictionEquationsFromContact(M,this.frictionResult)}}planeParticle(t,n,a,r,o,u,f,p,h,g,_){const v=Rb;v.set(0,0,1),f.quaternion.vmult(v,v);const y=Cb;if(r.vsub(f.position,y),v.dot(y)<=0){if(_)return!0;const b=this.createContactEquation(p,f,n,t,h,g);b.ni.copy(v),b.ni.negate(b.ni),b.ri.set(0,0,0);const S=Db;v.scale(v.dot(r),S),r.vsub(S,S),b.rj.copy(S),this.result.push(b),this.createFrictionEquationsFromContact(b,this.frictionResult)}}boxParticle(t,n,a,r,o,u,f,p,h,g,_){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,n,a,r,o,u,f,p,t,n,_)}convexParticle(t,n,a,r,o,u,f,p,h,g,_){let v=-1;const y=Ub,M=Ob;let b=null;const S=Lb;if(S.copy(r),S.vsub(a,S),o.conjugate(e_),e_.vmult(S,S),t.pointIsInside(S)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(a,o),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(o);for(let x=0,T=t.faces.length;x!==T;x++){const C=[t.worldVertices[t.faces[x][0]]],N=t.worldFaceNormals[x];r.vsub(C[0],n_);const U=-N.dot(n_);if(b===null||Math.abs(U)<Math.abs(b)){if(_)return!0;b=U,v=x,y.copy(N)}}if(v!==-1){const x=this.createContactEquation(p,f,n,t,h,g);y.scale(b,M),M.vadd(r,M),M.vsub(a,M),x.rj.copy(M),y.negate(x.ni),x.ri.set(0,0,0);const T=x.ri,C=x.rj;T.vadd(r,T),T.vsub(p.position,T),C.vadd(a,C),C.vsub(f.position,C),this.result.push(x),this.createFrictionEquationsFromContact(x,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,n,a,r,o,u,f,p,h,g,_){return this.convexHeightfield(n,t,r,a,u,o,p,f,h,g,_)}particleCylinder(t,n,a,r,o,u,f,p,h,g,_){return this.convexParticle(n,t,r,a,u,o,p,f,h,g,_)}sphereTrimesh(t,n,a,r,o,u,f,p,h,g,_){const v=kE,y=qE,M=XE,b=WE,S=YE,x=jE,T=JE,C=VE,N=HE,U=$E;Ze.pointToLocalFrame(r,u,a,S);const P=t.radius;T.lowerBound.set(S.x-P,S.y-P,S.z-P),T.upperBound.set(S.x+P,S.y+P,S.z+P),n.getTrianglesInAABB(T,U);const B=GE,X=t.radius*t.radius;for(let V=0;V<U.length;V++)for(let K=0;K<3;K++)if(n.getVertex(n.indices[U[V]*3+K],B),B.vsub(S,N),N.lengthSquared()<=X){if(C.copy(B),Ze.pointToWorldFrame(r,u,C,B),B.vsub(a,N),_)return!0;let W=this.createContactEquation(f,p,t,n,h,g);W.ni.copy(N),W.ni.normalize(),W.ri.copy(W.ni),W.ri.scale(t.radius,W.ri),W.ri.vadd(a,W.ri),W.ri.vsub(f.position,W.ri),W.rj.copy(B),W.rj.vsub(p.position,W.rj),this.result.push(W),this.createFrictionEquationsFromContact(W,this.frictionResult)}for(let V=0;V<U.length;V++)for(let K=0;K<3;K++){n.getVertex(n.indices[U[V]*3+K],v),n.getVertex(n.indices[U[V]*3+(K+1)%3],y),y.vsub(v,M),S.vsub(y,x);const W=x.dot(M);S.vsub(v,x);let z=x.dot(M);if(z>0&&W<0&&(S.vsub(v,x),b.copy(M),b.normalize(),z=x.dot(b),b.scale(z,x),x.vadd(v,x),x.distanceTo(S)<t.radius)){if(_)return!0;const J=this.createContactEquation(f,p,t,n,h,g);x.vsub(S,J.ni),J.ni.normalize(),J.ni.scale(t.radius,J.ri),J.ri.vadd(a,J.ri),J.ri.vsub(f.position,J.ri),Ze.pointToWorldFrame(r,u,x,x),x.vsub(p.position,J.rj),Ze.vectorToWorldFrame(u,J.ni,J.ni),Ze.vectorToWorldFrame(u,J.ri,J.ri),this.result.push(J),this.createFrictionEquationsFromContact(J,this.frictionResult)}}const w=ZE,O=KE,H=QE,$=IE;for(let V=0,K=U.length;V!==K;V++){n.getTriangleVertices(U[V],w,O,H),n.getNormal(U[V],$),S.vsub(w,x);let W=x.dot($);if($.scale(W,x),S.vsub(x,x),W=x.distanceTo(S),fa.pointInTriangle(x,w,O,H)&&W<t.radius){if(_)return!0;let z=this.createContactEquation(f,p,t,n,h,g);x.vsub(S,z.ni),z.ni.normalize(),z.ni.scale(t.radius,z.ri),z.ri.vadd(a,z.ri),z.ri.vsub(f.position,z.ri),Ze.pointToWorldFrame(r,u,x,x),x.vsub(p.position,z.rj),Ze.vectorToWorldFrame(u,z.ni,z.ni),Ze.vectorToWorldFrame(u,z.ri,z.ri),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult)}}U.length=0}planeTrimesh(t,n,a,r,o,u,f,p,h,g,_){const v=new R,y=PE;y.set(0,0,1),o.vmult(y,y);for(let M=0;M<n.vertices.length/3;M++){n.getVertex(M,v);const b=new R;b.copy(v),Ze.pointToWorldFrame(r,u,b,v);const S=BE;if(v.vsub(a,S),y.dot(S)<=0){if(_)return!0;const T=this.createContactEquation(f,p,t,n,h,g);T.ni.copy(y);const C=FE;y.scale(S.dot(y),C),v.vsub(C,C),T.ri.copy(C),T.ri.vsub(f.position,T.ri),T.rj.copy(v),T.rj.vsub(p.position,T.rj),this.result.push(T),this.createFrictionEquationsFromContact(T,this.frictionResult)}}}}const nr=new R,$r=new R,to=new R,LE=new R,UE=new R,OE=new pi,zE=new pi,PE=new R,BE=new R,FE=new R,IE=new R,HE=new R;new R;const GE=new R,VE=new R,kE=new R,qE=new R,XE=new R,WE=new R,YE=new R,jE=new R,ZE=new R,KE=new R,QE=new R,JE=new Ai,$E=[],tu=new R,t_=new R,tb=new R,eb=new R,nb=new R;function ib(c,t,n){let a=null;const r=c.length;for(let o=0;o!==r;o++){const u=c[o],f=tb;c[(o+1)%r].vsub(u,f);const p=eb;f.cross(t,p);const h=nb;n.vsub(u,h);const g=p.dot(h);if(a===null||g>0&&a===!0||g<=0&&a===!1){a===null&&(a=g>0);continue}else return!1}return!0}const eu=new R,ab=new R,sb=new R,rb=new R,ob=[new R,new R,new R,new R,new R,new R],lb=new R,cb=new R,ub=new R,fb=new R,hb=new R,db=new R,pb=new R,mb=new R,gb=new R,vb=new R,_b=new R,xb=new R,yb=new R,Sb=new R;new R;new R;const Mb=new R,Eb=new R,bb=new R,Tb=new R,Ab=new R,wb=new R,Rb=new R,Cb=new R,Db=new R,Nb=new R,e_=new pi,Lb=new R;new R;const Ub=new R,n_=new R,Ob=new R,zb=new R,Pb=new R,Bb=[0],Fb=new R,Ib=new R;class i_{constructor(){this.current=[],this.previous=[]}getKey(t,n){if(n<t){const a=n;n=t,t=a}return t<<16|n}set(t,n){const a=this.getKey(t,n),r=this.current;let o=0;for(;a>r[o];)o++;if(a!==r[o]){for(let u=r.length-1;u>=o;u--)r[u+1]=r[u];r[o]=a}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,n){const a=this.current,r=this.previous,o=a.length,u=r.length;let f=0;for(let p=0;p<o;p++){let h=!1;const g=a[p];for(;g>r[f];)f++;h=g===r[f],h||a_(t,g)}f=0;for(let p=0;p<u;p++){let h=!1;const g=r[p];for(;g>a[f];)f++;h=a[f]===g,h||a_(n,g)}}}function a_(c,t){c.push((t&4294901760)>>16,t&65535)}const Jh=(c,t)=>c<t?`${c}-${t}`:`${t}-${c}`;class Hb{constructor(){this.data={keys:[]}}get(t,n){const a=Jh(t,n);return this.data[a]}set(t,n,a){const r=Jh(t,n);this.get(t,n)||this.data.keys.push(r),this.data[r]=a}delete(t,n){const a=Jh(t,n),r=this.data.keys.indexOf(a);r!==-1&&this.data.keys.splice(r,1),delete this.data[a]}reset(){const t=this.data,n=t.keys;for(;n.length>0;){const a=n.pop();delete t[a]}}}class Gb extends hx{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new R,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new R,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new YM,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new TE,this.constraints=[],this.narrowphase=new NE(this),this.collisionMatrix=new kv,this.collisionMatrixPrevious=new kv,this.bodyOverlapKeeper=new i_,this.shapeOverlapKeeper=new i_,this.contactmaterials=[],this.contactMaterialTable=new Hb,this.defaultMaterial=new Du("default"),this.defaultContactMaterial=new yo(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,n){return this.contactMaterialTable.get(t.id,n.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const n=this.constraints.indexOf(t);n!==-1&&this.constraints.splice(n,1)}rayTest(t,n,a){a instanceof Cu?this.raycastClosest(t,n,{skipBackfaces:!0},a):this.raycastAll(t,n,{skipBackfaces:!0},a)}raycastAll(t,n,a,r){return a===void 0&&(a={}),a.mode=fa.ALL,a.from=t,a.to=n,a.callback=r,$h.intersectWorld(this,a)}raycastAny(t,n,a,r){return a===void 0&&(a={}),a.mode=fa.ANY,a.from=t,a.to=n,a.result=r,$h.intersectWorld(this,a)}raycastClosest(t,n,a,r){return a===void 0&&(a={}),a.mode=fa.CLOSEST,a.from=t,a.to=n,a.result=r,$h.intersectWorld(this,a)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof kt&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const n=this.bodies.length-1,a=this.bodies,r=a.indexOf(t);if(r!==-1){a.splice(r,1);for(let o=0;o!==a.length;o++)a[o].index=o;this.collisionMatrix.setNumObjects(n),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const n=this.bodies;for(let a=0;a<n.length;a++){const r=n[a].shapes;for(let o=0;o<r.length;o++){const u=r[o];if(u.id===t)return u}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const n=this.contactmaterials.indexOf(t);n!==-1&&(this.contactmaterials.splice(n,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,n){t===void 0&&(t=1/60),n===void 0&&(n=10);const a=Ln.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,n);else{const r=a-this.lastCallTime;this.step(t,r,n)}this.lastCallTime=a}step(t,n,a){if(a===void 0&&(a=10),n===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=n;const r=Ln.now();let o=0;for(;this.accumulator>=t&&o<a&&(this.internalStep(t),this.accumulator-=t,o++,!(Ln.now()-r>t*1e3)););this.accumulator=this.accumulator%t;const u=this.accumulator/t;for(let f=0;f!==this.bodies.length;f++){const p=this.bodies[f];p.previousPosition.lerp(p.position,u,p.interpolatedPosition),p.previousQuaternion.slerp(p.quaternion,u,p.interpolatedQuaternion),p.previousQuaternion.normalize()}this.time+=n}}internalStep(t){this.dt=t;const n=this.contacts,a=Wb,r=Yb,o=this.bodies.length,u=this.bodies,f=this.solver,p=this.gravity,h=this.doProfiling,g=this.profile,_=kt.DYNAMIC;let v=-1/0;const y=this.constraints,M=Xb;p.length();const b=p.x,S=p.y,x=p.z;let T=0;for(h&&(v=Ln.now()),T=0;T!==o;T++){const V=u[T];if(V.type===_){const K=V.force,W=V.mass;K.x+=W*b,K.y+=W*S,K.z+=W*x}}for(let V=0,K=this.subsystems.length;V!==K;V++)this.subsystems[V].update();h&&(v=Ln.now()),a.length=0,r.length=0,this.broadphase.collisionPairs(this,a,r),h&&(g.broadphase=Ln.now()-v);let C=y.length;for(T=0;T!==C;T++){const V=y[T];if(!V.collideConnected)for(let K=a.length-1;K>=0;K-=1)(V.bodyA===a[K]&&V.bodyB===r[K]||V.bodyB===a[K]&&V.bodyA===r[K])&&(a.splice(K,1),r.splice(K,1))}this.collisionMatrixTick(),h&&(v=Ln.now());const N=qb,U=n.length;for(T=0;T!==U;T++)N.push(n[T]);n.length=0;const P=this.frictionEquations.length;for(T=0;T!==P;T++)M.push(this.frictionEquations[T]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(a,r,this,n,N,this.frictionEquations,M),h&&(g.narrowphase=Ln.now()-v),h&&(v=Ln.now()),T=0;T<this.frictionEquations.length;T++)f.addEquation(this.frictionEquations[T]);const B=n.length;for(let V=0;V!==B;V++){const K=n[V],W=K.bi,z=K.bj,G=K.si,J=K.sj;let ft;if(W.material&&z.material?ft=this.getContactMaterial(W.material,z.material)||this.defaultContactMaterial:ft=this.defaultContactMaterial,ft.friction,W.material&&z.material&&(W.material.friction>=0&&z.material.friction>=0&&W.material.friction*z.material.friction,W.material.restitution>=0&&z.material.restitution>=0&&(K.restitution=W.material.restitution*z.material.restitution)),f.addEquation(K),W.allowSleep&&W.type===kt.DYNAMIC&&W.sleepState===kt.SLEEPING&&z.sleepState===kt.AWAKE&&z.type!==kt.STATIC){const vt=z.velocity.lengthSquared()+z.angularVelocity.lengthSquared(),I=z.sleepSpeedLimit**2;vt>=I*2&&(W.wakeUpAfterNarrowphase=!0)}if(z.allowSleep&&z.type===kt.DYNAMIC&&z.sleepState===kt.SLEEPING&&W.sleepState===kt.AWAKE&&W.type!==kt.STATIC){const vt=W.velocity.lengthSquared()+W.angularVelocity.lengthSquared(),I=W.sleepSpeedLimit**2;vt>=I*2&&(z.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(W,z,!0),this.collisionMatrixPrevious.get(W,z)||(xl.body=z,xl.contact=K,W.dispatchEvent(xl),xl.body=W,z.dispatchEvent(xl)),this.bodyOverlapKeeper.set(W.id,z.id),this.shapeOverlapKeeper.set(G.id,J.id)}for(this.emitContactEvents(),h&&(g.makeContactConstraints=Ln.now()-v,v=Ln.now()),T=0;T!==o;T++){const V=u[T];V.wakeUpAfterNarrowphase&&(V.wakeUp(),V.wakeUpAfterNarrowphase=!1)}for(C=y.length,T=0;T!==C;T++){const V=y[T];V.update();for(let K=0,W=V.equations.length;K!==W;K++){const z=V.equations[K];f.addEquation(z)}}f.solve(t,this),h&&(g.solve=Ln.now()-v),f.removeAllEquations();const X=Math.pow;for(T=0;T!==o;T++){const V=u[T];if(V.type&_){const K=X(1-V.linearDamping,t),W=V.velocity;W.scale(K,W);const z=V.angularVelocity;if(z){const G=X(1-V.angularDamping,t);z.scale(G,z)}}}this.dispatchEvent(kb),h&&(v=Ln.now());const O=this.stepnumber%(this.quatNormalizeSkip+1)===0,H=this.quatNormalizeFast;for(T=0;T!==o;T++)u[T].integrate(t,O,H);this.clearForces(),this.broadphase.dirty=!0,h&&(g.integrate=Ln.now()-v),this.stepnumber+=1,this.dispatchEvent(Vb);let $=!0;if(this.allowSleep)for($=!1,T=0;T!==o;T++){const V=u[T];V.sleepTick(this.time),V.sleepState!==kt.SLEEPING&&($=!0)}this.hasActiveBodies=$}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),n=this.hasAnyEventListener("endContact");if((t||n)&&this.bodyOverlapKeeper.getDiff(Ba,Fa),t){for(let o=0,u=Ba.length;o<u;o+=2)yl.bodyA=this.getBodyById(Ba[o]),yl.bodyB=this.getBodyById(Ba[o+1]),this.dispatchEvent(yl);yl.bodyA=yl.bodyB=null}if(n){for(let o=0,u=Fa.length;o<u;o+=2)Sl.bodyA=this.getBodyById(Fa[o]),Sl.bodyB=this.getBodyById(Fa[o+1]),this.dispatchEvent(Sl);Sl.bodyA=Sl.bodyB=null}Ba.length=Fa.length=0;const a=this.hasAnyEventListener("beginShapeContact"),r=this.hasAnyEventListener("endShapeContact");if((a||r)&&this.shapeOverlapKeeper.getDiff(Ba,Fa),a){for(let o=0,u=Ba.length;o<u;o+=2){const f=this.getShapeById(Ba[o]),p=this.getShapeById(Ba[o+1]);Ia.shapeA=f,Ia.shapeB=p,f&&(Ia.bodyA=f.body),p&&(Ia.bodyB=p.body),this.dispatchEvent(Ia)}Ia.bodyA=Ia.bodyB=Ia.shapeA=Ia.shapeB=null}if(r){for(let o=0,u=Fa.length;o<u;o+=2){const f=this.getShapeById(Fa[o]),p=this.getShapeById(Fa[o+1]);Ha.shapeA=f,Ha.shapeB=p,f&&(Ha.bodyA=f.body),p&&(Ha.bodyB=p.body),this.dispatchEvent(Ha)}Ha.bodyA=Ha.bodyB=Ha.shapeA=Ha.shapeB=null}}clearForces(){const t=this.bodies,n=t.length;for(let a=0;a!==n;a++){const r=t[a];r.force,r.torque,r.force.set(0,0,0),r.torque.set(0,0,0)}}}new Ai;const $h=new fa,Ln=globalThis.performance||{};if(!Ln.now){let c=Date.now();Ln.timing&&Ln.timing.navigationStart&&(c=Ln.timing.navigationStart),Ln.now=()=>Date.now()-c}new R;const Vb={type:"postStep"},kb={type:"preStep"},xl={type:kt.COLLIDE_EVENT_NAME,body:null,contact:null},qb=[],Xb=[],Wb=[],Yb=[],Ba=[],Fa=[],yl={type:"beginContact",bodyA:null,bodyB:null},Sl={type:"endContact",bodyA:null,bodyB:null},Ia={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Ha={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};const Op="182",jb=0,s_=1,Zb=2,Eu=1,Mx=2,Dl=3,Bs=0,mi=1,Ya=2,Za=0,_o=1,r_=2,o_=3,l_=4,Kb=5,pr=100,Qb=101,Jb=102,$b=103,tT=104,eT=200,nT=201,iT=202,aT=203,zd=204,Pd=205,sT=206,rT=207,oT=208,lT=209,cT=210,uT=211,fT=212,hT=213,dT=214,Bd=0,Fd=1,Id=2,So=3,Hd=4,Gd=5,Vd=6,kd=7,Ex=0,pT=1,mT=2,Ki=0,bx=1,Tx=2,Ax=3,wx=4,Rx=5,Cx=6,Dx=7,Nx=300,_r=301,Mo=302,qd=303,Xd=304,Ou=306,Wd=1e3,ja=1001,Yd=1002,jn=1003,gT=1004,nu=1005,Zn=1006,td=1007,zs=1008,Ti=1009,Lx=1010,Ux=1011,Ul=1012,zp=1013,pa=1014,ca=1015,Ja=1016,Pp=1017,Bp=1018,Ol=1020,Ox=35902,zx=35899,Px=1021,Bx=1022,Zi=1023,$a=1026,vr=1027,Fx=1028,Fp=1029,Eo=1030,Ip=1031,Hp=1033,bu=33776,Tu=33777,Au=33778,wu=33779,jd=35840,Zd=35841,Kd=35842,Qd=35843,Jd=36196,$d=37492,tp=37496,ep=37488,np=37489,ip=37490,ap=37491,sp=37808,rp=37809,op=37810,lp=37811,cp=37812,up=37813,fp=37814,hp=37815,dp=37816,pp=37817,mp=37818,gp=37819,vp=37820,_p=37821,xp=36492,yp=36494,Sp=36495,Mp=36283,Ep=36284,bp=36285,Tp=36286,vT=3200,Ix=0,_T=1,Os="",si="srgb",bo="srgb-linear",Nu="linear",tn="srgb",eo=7680,c_=519,xT=512,yT=513,ST=514,Gp=515,MT=516,ET=517,Vp=518,bT=519,u_=35044,f_="300 es",ua=2e3,Lu=2001;function Hx(c){for(let t=c.length-1;t>=0;--t)if(c[t]>=65535)return!0;return!1}function Uu(c){return document.createElementNS("http://www.w3.org/1999/xhtml",c)}function TT(){const c=Uu("canvas");return c.style.display="block",c}const h_={};function d_(...c){const t="THREE."+c.shift();console.log(t,...c)}function pe(...c){const t="THREE."+c.shift();console.warn(t,...c)}function Fe(...c){const t="THREE."+c.shift();console.error(t,...c)}function zl(...c){const t=c.join(" ");t in h_||(h_[t]=!0,pe(...c))}function AT(c,t,n){return new Promise(function(a,r){function o(){switch(c.clientWaitSync(t,c.SYNC_FLUSH_COMMANDS_BIT,0)){case c.WAIT_FAILED:r();break;case c.TIMEOUT_EXPIRED:setTimeout(o,n);break;default:a()}}setTimeout(o,n)})}class Ao{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){const a=this._listeners;if(a===void 0)return;const r=a[t];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const a=n[t.type];if(a!==void 0){t.target=this;const r=a.slice(0);for(let o=0,u=r.length;o<u;o++)r[o].call(this,t);t.target=null}}}const Qn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ed=Math.PI/180,Ap=180/Math.PI;function Fl(){const c=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Qn[c&255]+Qn[c>>8&255]+Qn[c>>16&255]+Qn[c>>24&255]+"-"+Qn[t&255]+Qn[t>>8&255]+"-"+Qn[t>>16&15|64]+Qn[t>>24&255]+"-"+Qn[n&63|128]+Qn[n>>8&255]+"-"+Qn[n>>16&255]+Qn[n>>24&255]+Qn[a&255]+Qn[a>>8&255]+Qn[a>>16&255]+Qn[a>>24&255]).toLowerCase()}function Oe(c,t,n){return Math.max(t,Math.min(n,c))}function wT(c,t){return(c%t+t)%t}function nd(c,t,n){return(1-n)*c+n*t}function Ml(c,t){switch(t.constructor){case Float32Array:return c;case Uint32Array:return c/4294967295;case Uint16Array:return c/65535;case Uint8Array:return c/255;case Int32Array:return Math.max(c/2147483647,-1);case Int16Array:return Math.max(c/32767,-1);case Int8Array:return Math.max(c/127,-1);default:throw new Error("Invalid component type.")}}function di(c,t){switch(t.constructor){case Float32Array:return c;case Uint32Array:return Math.round(c*4294967295);case Uint16Array:return Math.round(c*65535);case Uint8Array:return Math.round(c*255);case Int32Array:return Math.round(c*2147483647);case Int16Array:return Math.round(c*32767);case Int8Array:return Math.round(c*127);default:throw new Error("Invalid component type.")}}class qe{constructor(t=0,n=0){qe.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,r=t.elements;return this.x=r[0]*n+r[3]*a+r[6],this.y=r[1]*n+r[4]*a+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Oe(this.x,t.x,n.x),this.y=Oe(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Oe(this.x,t,n),this.y=Oe(this.y,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Oe(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(Oe(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),r=Math.sin(n),o=this.x-t.x,u=this.y-t.y;return this.x=o*a-u*r+t.x,this.y=o*r+u*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class xr{constructor(t=0,n=0,a=0,r=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=r}static slerpFlat(t,n,a,r,o,u,f){let p=a[r+0],h=a[r+1],g=a[r+2],_=a[r+3],v=o[u+0],y=o[u+1],M=o[u+2],b=o[u+3];if(f<=0){t[n+0]=p,t[n+1]=h,t[n+2]=g,t[n+3]=_;return}if(f>=1){t[n+0]=v,t[n+1]=y,t[n+2]=M,t[n+3]=b;return}if(_!==b||p!==v||h!==y||g!==M){let S=p*v+h*y+g*M+_*b;S<0&&(v=-v,y=-y,M=-M,b=-b,S=-S);let x=1-f;if(S<.9995){const T=Math.acos(S),C=Math.sin(T);x=Math.sin(x*T)/C,f=Math.sin(f*T)/C,p=p*x+v*f,h=h*x+y*f,g=g*x+M*f,_=_*x+b*f}else{p=p*x+v*f,h=h*x+y*f,g=g*x+M*f,_=_*x+b*f;const T=1/Math.sqrt(p*p+h*h+g*g+_*_);p*=T,h*=T,g*=T,_*=T}}t[n]=p,t[n+1]=h,t[n+2]=g,t[n+3]=_}static multiplyQuaternionsFlat(t,n,a,r,o,u){const f=a[r],p=a[r+1],h=a[r+2],g=a[r+3],_=o[u],v=o[u+1],y=o[u+2],M=o[u+3];return t[n]=f*M+g*_+p*y-h*v,t[n+1]=p*M+g*v+h*_-f*y,t[n+2]=h*M+g*y+f*v-p*_,t[n+3]=g*M-f*_-p*v-h*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,r){return this._x=t,this._y=n,this._z=a,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const a=t._x,r=t._y,o=t._z,u=t._order,f=Math.cos,p=Math.sin,h=f(a/2),g=f(r/2),_=f(o/2),v=p(a/2),y=p(r/2),M=p(o/2);switch(u){case"XYZ":this._x=v*g*_+h*y*M,this._y=h*y*_-v*g*M,this._z=h*g*M+v*y*_,this._w=h*g*_-v*y*M;break;case"YXZ":this._x=v*g*_+h*y*M,this._y=h*y*_-v*g*M,this._z=h*g*M-v*y*_,this._w=h*g*_+v*y*M;break;case"ZXY":this._x=v*g*_-h*y*M,this._y=h*y*_+v*g*M,this._z=h*g*M+v*y*_,this._w=h*g*_-v*y*M;break;case"ZYX":this._x=v*g*_-h*y*M,this._y=h*y*_+v*g*M,this._z=h*g*M-v*y*_,this._w=h*g*_+v*y*M;break;case"YZX":this._x=v*g*_+h*y*M,this._y=h*y*_+v*g*M,this._z=h*g*M-v*y*_,this._w=h*g*_-v*y*M;break;case"XZY":this._x=v*g*_-h*y*M,this._y=h*y*_-v*g*M,this._z=h*g*M+v*y*_,this._w=h*g*_+v*y*M;break;default:pe("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,r=Math.sin(a);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],r=n[4],o=n[8],u=n[1],f=n[5],p=n[9],h=n[2],g=n[6],_=n[10],v=a+f+_;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(g-p)*y,this._y=(o-h)*y,this._z=(u-r)*y}else if(a>f&&a>_){const y=2*Math.sqrt(1+a-f-_);this._w=(g-p)/y,this._x=.25*y,this._y=(r+u)/y,this._z=(o+h)/y}else if(f>_){const y=2*Math.sqrt(1+f-a-_);this._w=(o-h)/y,this._x=(r+u)/y,this._y=.25*y,this._z=(p+g)/y}else{const y=2*Math.sqrt(1+_-a-f);this._w=(u-r)/y,this._x=(o+h)/y,this._y=(p+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<1e-8?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Oe(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const r=Math.min(1,n/a);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,r=t._y,o=t._z,u=t._w,f=n._x,p=n._y,h=n._z,g=n._w;return this._x=a*g+u*f+r*h-o*p,this._y=r*g+u*p+o*f-a*h,this._z=o*g+u*h+a*p-r*f,this._w=u*g-a*f-r*p-o*h,this._onChangeCallback(),this}slerp(t,n){if(n<=0)return this;if(n>=1)return this.copy(t);let a=t._x,r=t._y,o=t._z,u=t._w,f=this.dot(t);f<0&&(a=-a,r=-r,o=-o,u=-u,f=-f);let p=1-n;if(f<.9995){const h=Math.acos(f),g=Math.sin(h);p=Math.sin(p*h)/g,n=Math.sin(n*h)/g,this._x=this._x*p+a*n,this._y=this._y*p+r*n,this._z=this._z*p+o*n,this._w=this._w*p+u*n,this._onChangeCallback()}else this._x=this._x*p+a*n,this._y=this._y*p+r*n,this._z=this._z*p+o*n,this._w=this._w*p+u*n,this.normalize();return this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),r=Math.sqrt(1-a),o=Math.sqrt(a);return this.set(r*Math.sin(t),r*Math.cos(t),o*Math.sin(n),o*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class lt{constructor(t=0,n=0,a=0){lt.prototype.isVector3=!0,this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(p_.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(p_.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,r=this.z,o=t.elements;return this.x=o[0]*n+o[3]*a+o[6]*r,this.y=o[1]*n+o[4]*a+o[7]*r,this.z=o[2]*n+o[5]*a+o[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,r=this.z,o=t.elements,u=1/(o[3]*n+o[7]*a+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*a+o[8]*r+o[12])*u,this.y=(o[1]*n+o[5]*a+o[9]*r+o[13])*u,this.z=(o[2]*n+o[6]*a+o[10]*r+o[14])*u,this}applyQuaternion(t){const n=this.x,a=this.y,r=this.z,o=t.x,u=t.y,f=t.z,p=t.w,h=2*(u*r-f*a),g=2*(f*n-o*r),_=2*(o*a-u*n);return this.x=n+p*h+u*_-f*g,this.y=a+p*g+f*h-o*_,this.z=r+p*_+o*g-u*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,r=this.z,o=t.elements;return this.x=o[0]*n+o[4]*a+o[8]*r,this.y=o[1]*n+o[5]*a+o[9]*r,this.z=o[2]*n+o[6]*a+o[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Oe(this.x,t.x,n.x),this.y=Oe(this.y,t.y,n.y),this.z=Oe(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Oe(this.x,t,n),this.y=Oe(this.y,t,n),this.z=Oe(this.z,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Oe(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,r=t.y,o=t.z,u=n.x,f=n.y,p=n.z;return this.x=r*p-o*f,this.y=o*u-a*p,this.z=a*f-r*u,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return id.copy(this).projectOnVector(t),this.sub(id)}reflect(t){return this.sub(id.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(Oe(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,r=this.z-t.z;return n*n+a*a+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const r=Math.sin(n)*t;return this.x=r*Math.sin(a),this.y=Math.cos(n)*t,this.z=r*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=r,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(t),this.y=n,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const id=new lt,p_=new xr;class ve{constructor(t,n,a,r,o,u,f,p,h){ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,r,o,u,f,p,h)}set(t,n,a,r,o,u,f,p,h){const g=this.elements;return g[0]=t,g[1]=r,g[2]=f,g[3]=n,g[4]=o,g[5]=p,g[6]=a,g[7]=u,g[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,r=n.elements,o=this.elements,u=a[0],f=a[3],p=a[6],h=a[1],g=a[4],_=a[7],v=a[2],y=a[5],M=a[8],b=r[0],S=r[3],x=r[6],T=r[1],C=r[4],N=r[7],U=r[2],P=r[5],B=r[8];return o[0]=u*b+f*T+p*U,o[3]=u*S+f*C+p*P,o[6]=u*x+f*N+p*B,o[1]=h*b+g*T+_*U,o[4]=h*S+g*C+_*P,o[7]=h*x+g*N+_*B,o[2]=v*b+y*T+M*U,o[5]=v*S+y*C+M*P,o[8]=v*x+y*N+M*B,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],r=t[2],o=t[3],u=t[4],f=t[5],p=t[6],h=t[7],g=t[8];return n*u*g-n*f*h-a*o*g+a*f*p+r*o*h-r*u*p}invert(){const t=this.elements,n=t[0],a=t[1],r=t[2],o=t[3],u=t[4],f=t[5],p=t[6],h=t[7],g=t[8],_=g*u-f*h,v=f*p-g*o,y=h*o-u*p,M=n*_+a*v+r*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/M;return t[0]=_*b,t[1]=(r*h-g*a)*b,t[2]=(f*a-r*u)*b,t[3]=v*b,t[4]=(g*n-r*p)*b,t[5]=(r*o-f*n)*b,t[6]=y*b,t[7]=(a*p-h*n)*b,t[8]=(u*n-a*o)*b,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,r,o,u,f){const p=Math.cos(o),h=Math.sin(o);return this.set(a*p,a*h,-a*(p*u+h*f)+u+t,-r*h,r*p,-r*(-h*u+p*f)+f+n,0,0,1),this}scale(t,n){return this.premultiply(ad.makeScale(t,n)),this}rotate(t){return this.premultiply(ad.makeRotation(-t)),this}translate(t,n){return this.premultiply(ad.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let r=0;r<9;r++)if(n[r]!==a[r])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ad=new ve,m_=new ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),g_=new ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function RT(){const c={enabled:!0,workingColorSpace:bo,spaces:{},convert:function(r,o,u){return this.enabled===!1||o===u||!o||!u||(this.spaces[o].transfer===tn&&(r.r=Ka(r.r),r.g=Ka(r.g),r.b=Ka(r.b)),this.spaces[o].primaries!==this.spaces[u].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===tn&&(r.r=xo(r.r),r.g=xo(r.g),r.b=xo(r.b))),r},workingToColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},colorSpaceToWorking:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Os?Nu:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,u){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,o){return zl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),c.workingToColorSpace(r,o)},toWorkingColorSpace:function(r,o){return zl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),c.colorSpaceToWorking(r,o)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return c.define({[bo]:{primaries:t,whitePoint:a,transfer:Nu,toXYZ:m_,fromXYZ:g_,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:si},outputColorSpaceConfig:{drawingBufferColorSpace:si}},[si]:{primaries:t,whitePoint:a,transfer:tn,toXYZ:m_,fromXYZ:g_,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:si}}}),c}const Ie=RT();function Ka(c){return c<.04045?c*.0773993808:Math.pow(c*.9478672986+.0521327014,2.4)}function xo(c){return c<.0031308?c*12.92:1.055*Math.pow(c,.41666)-.055}let no;class CT{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{no===void 0&&(no=Uu("canvas")),no.width=t.width,no.height=t.height;const r=no.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),a=no}return a.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Uu("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const r=a.getImageData(0,0,t.width,t.height),o=r.data;for(let u=0;u<o.length;u++)o[u]=Ka(o[u]/255)*255;return a.putImageData(r,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(Ka(n[a]/255)*255):n[a]=Ka(n[a]);return{data:n,width:t.width,height:t.height}}else return pe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let DT=0;class kp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:DT++}),this.uuid=Fl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let u=0,f=r.length;u<f;u++)r[u].isDataTexture?o.push(sd(r[u].image)):o.push(sd(r[u]))}else o=sd(r);a.url=o}return n||(t.images[this.uuid]=a),a}}function sd(c){return typeof HTMLImageElement<"u"&&c instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&c instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&c instanceof ImageBitmap?CT.getDataURL(c):c.data?{data:Array.from(c.data),width:c.width,height:c.height,type:c.data.constructor.name}:(pe("Texture: Unable to serialize Texture."),{})}let NT=0;const rd=new lt;class $n extends Ao{constructor(t=$n.DEFAULT_IMAGE,n=$n.DEFAULT_MAPPING,a=ja,r=ja,o=Zn,u=zs,f=Zi,p=Ti,h=$n.DEFAULT_ANISOTROPY,g=Os){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:NT++}),this.uuid=Fl(),this.name="",this.source=new kp(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=r,this.magFilter=o,this.minFilter=u,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=p,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(rd).x}get height(){return this.source.getSize(rd).y}get depth(){return this.source.getSize(rd).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const a=t[n];if(a===void 0){pe(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){pe(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&a&&r.isVector2&&a.isVector2||r&&a&&r.isVector3&&a.isVector3||r&&a&&r.isMatrix3&&a.isMatrix3?r.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Nx)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Wd:t.x=t.x-Math.floor(t.x);break;case ja:t.x=t.x<0?0:1;break;case Yd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Wd:t.y=t.y-Math.floor(t.y);break;case ja:t.y=t.y<0?0:1;break;case Yd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}$n.DEFAULT_IMAGE=null;$n.DEFAULT_MAPPING=Nx;$n.DEFAULT_ANISOTROPY=1;class Sn{constructor(t=0,n=0,a=0,r=1){Sn.prototype.isVector4=!0,this.x=t,this.y=n,this.z=a,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,a,r){return this.x=t,this.y=n,this.z=a,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,a=this.y,r=this.z,o=this.w,u=t.elements;return this.x=u[0]*n+u[4]*a+u[8]*r+u[12]*o,this.y=u[1]*n+u[5]*a+u[9]*r+u[13]*o,this.z=u[2]*n+u[6]*a+u[10]*r+u[14]*o,this.w=u[3]*n+u[7]*a+u[11]*r+u[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,a,r,o;const p=t.elements,h=p[0],g=p[4],_=p[8],v=p[1],y=p[5],M=p[9],b=p[2],S=p[6],x=p[10];if(Math.abs(g-v)<.01&&Math.abs(_-b)<.01&&Math.abs(M-S)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+b)<.1&&Math.abs(M+S)<.1&&Math.abs(h+y+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const C=(h+1)/2,N=(y+1)/2,U=(x+1)/2,P=(g+v)/4,B=(_+b)/4,X=(M+S)/4;return C>N&&C>U?C<.01?(a=0,r=.707106781,o=.707106781):(a=Math.sqrt(C),r=P/a,o=B/a):N>U?N<.01?(a=.707106781,r=0,o=.707106781):(r=Math.sqrt(N),a=P/r,o=X/r):U<.01?(a=.707106781,r=.707106781,o=0):(o=Math.sqrt(U),a=B/o,r=X/o),this.set(a,r,o,n),this}let T=Math.sqrt((S-M)*(S-M)+(_-b)*(_-b)+(v-g)*(v-g));return Math.abs(T)<.001&&(T=1),this.x=(S-M)/T,this.y=(_-b)/T,this.z=(v-g)/T,this.w=Math.acos((h+y+x-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Oe(this.x,t.x,n.x),this.y=Oe(this.y,t.y,n.y),this.z=Oe(this.z,t.z,n.z),this.w=Oe(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Oe(this.x,t,n),this.y=Oe(this.y,t,n),this.z=Oe(this.z,t,n),this.w=Oe(this.w,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Oe(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this.w=t.w+(n.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class LT extends Ao{constructor(t=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=a.depth,this.scissor=new Sn(0,0,t,n),this.scissorTest=!1,this.viewport=new Sn(0,0,t,n);const r={width:t,height:n,depth:a.depth},o=new $n(r);this.textures=[];const u=a.count;for(let f=0;f<u;f++)this.textures[f]=o.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(t={}){const n={minFilter:Zn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,a=1){if(this.width!==t||this.height!==n||this.depth!==a){this.width=t,this.height=n,this.depth=a;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=t,this.textures[r].image.height=n,this.textures[r].image.depth=a,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,a=t.textures.length;n<a;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},t.textures[n].image);this.textures[n].source=new kp(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ha extends LT{constructor(t=1,n=1,a={}){super(t,n,a),this.isWebGLRenderTarget=!0}}class Gx extends $n{constructor(t=null,n=1,a=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:a,depth:r},this.magFilter=jn,this.minFilter=jn,this.wrapR=ja,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class UT extends $n{constructor(t=null,n=1,a=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:a,depth:r},this.magFilter=jn,this.minFilter=jn,this.wrapR=ja,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Il{constructor(t=new lt(1/0,1/0,1/0),n=new lt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n+=3)this.expandByPoint(ki.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,a=t.count;n<a;n++)this.expandByPoint(ki.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=ki.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const o=a.getAttribute("position");if(n===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let u=0,f=o.count;u<f;u++)t.isMesh===!0?t.getVertexPosition(u,ki):ki.fromBufferAttribute(o,u),ki.applyMatrix4(t.matrixWorld),this.expandByPoint(ki);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),iu.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),iu.copy(a.boundingBox)),iu.applyMatrix4(t.matrixWorld),this.union(iu)}const r=t.children;for(let o=0,u=r.length;o<u;o++)this.expandByObject(r[o],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ki),ki.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,a;return t.normal.x>0?(n=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),n<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(El),au.subVectors(this.max,El),io.subVectors(t.a,El),ao.subVectors(t.b,El),so.subVectors(t.c,El),ws.subVectors(ao,io),Rs.subVectors(so,ao),ir.subVectors(io,so);let n=[0,-ws.z,ws.y,0,-Rs.z,Rs.y,0,-ir.z,ir.y,ws.z,0,-ws.x,Rs.z,0,-Rs.x,ir.z,0,-ir.x,-ws.y,ws.x,0,-Rs.y,Rs.x,0,-ir.y,ir.x,0];return!od(n,io,ao,so,au)||(n=[1,0,0,0,1,0,0,0,1],!od(n,io,ao,so,au))?!1:(su.crossVectors(ws,Rs),n=[su.x,su.y,su.z],od(n,io,ao,so,au))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ki).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ki).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ga[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ga[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ga[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ga[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ga[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ga[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ga[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ga[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ga),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ga=[new lt,new lt,new lt,new lt,new lt,new lt,new lt,new lt],ki=new lt,iu=new Il,io=new lt,ao=new lt,so=new lt,ws=new lt,Rs=new lt,ir=new lt,El=new lt,au=new lt,su=new lt,ar=new lt;function od(c,t,n,a,r){for(let o=0,u=c.length-3;o<=u;o+=3){ar.fromArray(c,o);const f=r.x*Math.abs(ar.x)+r.y*Math.abs(ar.y)+r.z*Math.abs(ar.z),p=t.dot(ar),h=n.dot(ar),g=a.dot(ar);if(Math.max(-Math.max(p,h,g),Math.min(p,h,g))>f)return!1}return!0}const OT=new Il,bl=new lt,ld=new lt;class qp{constructor(t=new lt,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const a=this.center;n!==void 0?a.copy(n):OT.setFromPoints(t).getCenter(a);let r=0;for(let o=0,u=t.length;o<u;o++)r=Math.max(r,a.distanceToSquared(t[o]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const a=this.center.distanceToSquared(t);return n.copy(t),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;bl.subVectors(t,this.center);const n=bl.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),r=(a-this.radius)*.5;this.center.addScaledVector(bl,r/a),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ld.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(bl.copy(t.center).add(ld)),this.expandByPoint(bl.copy(t.center).sub(ld))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Va=new lt,cd=new lt,ru=new lt,Cs=new lt,ud=new lt,ou=new lt,fd=new lt;class Vx{constructor(t=new lt,n=new lt(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Va)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Va.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Va.copy(this.origin).addScaledVector(this.direction,n),Va.distanceToSquared(t))}distanceSqToSegment(t,n,a,r){cd.copy(t).add(n).multiplyScalar(.5),ru.copy(n).sub(t).normalize(),Cs.copy(this.origin).sub(cd);const o=t.distanceTo(n)*.5,u=-this.direction.dot(ru),f=Cs.dot(this.direction),p=-Cs.dot(ru),h=Cs.lengthSq(),g=Math.abs(1-u*u);let _,v,y,M;if(g>0)if(_=u*p-f,v=u*f-p,M=o*g,_>=0)if(v>=-M)if(v<=M){const b=1/g;_*=b,v*=b,y=_*(_+u*v+2*f)+v*(u*_+v+2*p)+h}else v=o,_=Math.max(0,-(u*v+f)),y=-_*_+v*(v+2*p)+h;else v=-o,_=Math.max(0,-(u*v+f)),y=-_*_+v*(v+2*p)+h;else v<=-M?(_=Math.max(0,-(-u*o+f)),v=_>0?-o:Math.min(Math.max(-o,-p),o),y=-_*_+v*(v+2*p)+h):v<=M?(_=0,v=Math.min(Math.max(-o,-p),o),y=v*(v+2*p)+h):(_=Math.max(0,-(u*o+f)),v=_>0?o:Math.min(Math.max(-o,-p),o),y=-_*_+v*(v+2*p)+h);else v=u>0?-o:o,_=Math.max(0,-(u*v+f)),y=-_*_+v*(v+2*p)+h;return a&&a.copy(this.origin).addScaledVector(this.direction,_),r&&r.copy(cd).addScaledVector(ru,v),y}intersectSphere(t,n){Va.subVectors(t.center,this.origin);const a=Va.dot(this.direction),r=Va.dot(Va)-a*a,o=t.radius*t.radius;if(r>o)return null;const u=Math.sqrt(o-r),f=a-u,p=a+u;return p<0?null:f<0?this.at(p,n):this.at(f,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/n;return a>=0?a:null}intersectPlane(t,n){const a=this.distanceToPlane(t);return a===null?null:this.at(a,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let a,r,o,u,f,p;const h=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return h>=0?(a=(t.min.x-v.x)*h,r=(t.max.x-v.x)*h):(a=(t.max.x-v.x)*h,r=(t.min.x-v.x)*h),g>=0?(o=(t.min.y-v.y)*g,u=(t.max.y-v.y)*g):(o=(t.max.y-v.y)*g,u=(t.min.y-v.y)*g),a>u||o>r||((o>a||isNaN(a))&&(a=o),(u<r||isNaN(r))&&(r=u),_>=0?(f=(t.min.z-v.z)*_,p=(t.max.z-v.z)*_):(f=(t.max.z-v.z)*_,p=(t.min.z-v.z)*_),a>p||f>r)||((f>a||a!==a)&&(a=f),(p<r||r!==r)&&(r=p),r<0)?null:this.at(a>=0?a:r,n)}intersectsBox(t){return this.intersectBox(t,Va)!==null}intersectTriangle(t,n,a,r,o){ud.subVectors(n,t),ou.subVectors(a,t),fd.crossVectors(ud,ou);let u=this.direction.dot(fd),f;if(u>0){if(r)return null;f=1}else if(u<0)f=-1,u=-u;else return null;Cs.subVectors(this.origin,t);const p=f*this.direction.dot(ou.crossVectors(Cs,ou));if(p<0)return null;const h=f*this.direction.dot(ud.cross(Cs));if(h<0||p+h>u)return null;const g=-f*Cs.dot(fd);return g<0?null:this.at(g/u,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pn{constructor(t,n,a,r,o,u,f,p,h,g,_,v,y,M,b,S){pn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,r,o,u,f,p,h,g,_,v,y,M,b,S)}set(t,n,a,r,o,u,f,p,h,g,_,v,y,M,b,S){const x=this.elements;return x[0]=t,x[4]=n,x[8]=a,x[12]=r,x[1]=o,x[5]=u,x[9]=f,x[13]=p,x[2]=h,x[6]=g,x[10]=_,x[14]=v,x[3]=y,x[7]=M,x[11]=b,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pn().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return this.determinant()===0?(t.set(1,0,0),n.set(0,1,0),a.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const n=this.elements,a=t.elements,r=1/ro.setFromMatrixColumn(t,0).length(),o=1/ro.setFromMatrixColumn(t,1).length(),u=1/ro.setFromMatrixColumn(t,2).length();return n[0]=a[0]*r,n[1]=a[1]*r,n[2]=a[2]*r,n[3]=0,n[4]=a[4]*o,n[5]=a[5]*o,n[6]=a[6]*o,n[7]=0,n[8]=a[8]*u,n[9]=a[9]*u,n[10]=a[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,r=t.y,o=t.z,u=Math.cos(a),f=Math.sin(a),p=Math.cos(r),h=Math.sin(r),g=Math.cos(o),_=Math.sin(o);if(t.order==="XYZ"){const v=u*g,y=u*_,M=f*g,b=f*_;n[0]=p*g,n[4]=-p*_,n[8]=h,n[1]=y+M*h,n[5]=v-b*h,n[9]=-f*p,n[2]=b-v*h,n[6]=M+y*h,n[10]=u*p}else if(t.order==="YXZ"){const v=p*g,y=p*_,M=h*g,b=h*_;n[0]=v+b*f,n[4]=M*f-y,n[8]=u*h,n[1]=u*_,n[5]=u*g,n[9]=-f,n[2]=y*f-M,n[6]=b+v*f,n[10]=u*p}else if(t.order==="ZXY"){const v=p*g,y=p*_,M=h*g,b=h*_;n[0]=v-b*f,n[4]=-u*_,n[8]=M+y*f,n[1]=y+M*f,n[5]=u*g,n[9]=b-v*f,n[2]=-u*h,n[6]=f,n[10]=u*p}else if(t.order==="ZYX"){const v=u*g,y=u*_,M=f*g,b=f*_;n[0]=p*g,n[4]=M*h-y,n[8]=v*h+b,n[1]=p*_,n[5]=b*h+v,n[9]=y*h-M,n[2]=-h,n[6]=f*p,n[10]=u*p}else if(t.order==="YZX"){const v=u*p,y=u*h,M=f*p,b=f*h;n[0]=p*g,n[4]=b-v*_,n[8]=M*_+y,n[1]=_,n[5]=u*g,n[9]=-f*g,n[2]=-h*g,n[6]=y*_+M,n[10]=v-b*_}else if(t.order==="XZY"){const v=u*p,y=u*h,M=f*p,b=f*h;n[0]=p*g,n[4]=-_,n[8]=h*g,n[1]=v*_+b,n[5]=u*g,n[9]=y*_-M,n[2]=M*_-y,n[6]=f*g,n[10]=b*_+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(zT,t,PT)}lookAt(t,n,a){const r=this.elements;return Ei.subVectors(t,n),Ei.lengthSq()===0&&(Ei.z=1),Ei.normalize(),Ds.crossVectors(a,Ei),Ds.lengthSq()===0&&(Math.abs(a.z)===1?Ei.x+=1e-4:Ei.z+=1e-4,Ei.normalize(),Ds.crossVectors(a,Ei)),Ds.normalize(),lu.crossVectors(Ei,Ds),r[0]=Ds.x,r[4]=lu.x,r[8]=Ei.x,r[1]=Ds.y,r[5]=lu.y,r[9]=Ei.y,r[2]=Ds.z,r[6]=lu.z,r[10]=Ei.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,r=n.elements,o=this.elements,u=a[0],f=a[4],p=a[8],h=a[12],g=a[1],_=a[5],v=a[9],y=a[13],M=a[2],b=a[6],S=a[10],x=a[14],T=a[3],C=a[7],N=a[11],U=a[15],P=r[0],B=r[4],X=r[8],w=r[12],O=r[1],H=r[5],$=r[9],V=r[13],K=r[2],W=r[6],z=r[10],G=r[14],J=r[3],ft=r[7],vt=r[11],I=r[15];return o[0]=u*P+f*O+p*K+h*J,o[4]=u*B+f*H+p*W+h*ft,o[8]=u*X+f*$+p*z+h*vt,o[12]=u*w+f*V+p*G+h*I,o[1]=g*P+_*O+v*K+y*J,o[5]=g*B+_*H+v*W+y*ft,o[9]=g*X+_*$+v*z+y*vt,o[13]=g*w+_*V+v*G+y*I,o[2]=M*P+b*O+S*K+x*J,o[6]=M*B+b*H+S*W+x*ft,o[10]=M*X+b*$+S*z+x*vt,o[14]=M*w+b*V+S*G+x*I,o[3]=T*P+C*O+N*K+U*J,o[7]=T*B+C*H+N*W+U*ft,o[11]=T*X+C*$+N*z+U*vt,o[15]=T*w+C*V+N*G+U*I,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],r=t[8],o=t[12],u=t[1],f=t[5],p=t[9],h=t[13],g=t[2],_=t[6],v=t[10],y=t[14],M=t[3],b=t[7],S=t[11],x=t[15],T=p*y-h*v,C=f*y-h*_,N=f*v-p*_,U=u*y-h*g,P=u*v-p*g,B=u*_-f*g;return n*(b*T-S*C+x*N)-a*(M*T-S*U+x*P)+r*(M*C-b*U+x*B)-o*(M*N-b*P+S*B)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=n,r[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],r=t[2],o=t[3],u=t[4],f=t[5],p=t[6],h=t[7],g=t[8],_=t[9],v=t[10],y=t[11],M=t[12],b=t[13],S=t[14],x=t[15],T=_*S*h-b*v*h+b*p*y-f*S*y-_*p*x+f*v*x,C=M*v*h-g*S*h-M*p*y+u*S*y+g*p*x-u*v*x,N=g*b*h-M*_*h+M*f*y-u*b*y-g*f*x+u*_*x,U=M*_*p-g*b*p-M*f*v+u*b*v+g*f*S-u*_*S,P=n*T+a*C+r*N+o*U;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/P;return t[0]=T*B,t[1]=(b*v*o-_*S*o-b*r*y+a*S*y+_*r*x-a*v*x)*B,t[2]=(f*S*o-b*p*o+b*r*h-a*S*h-f*r*x+a*p*x)*B,t[3]=(_*p*o-f*v*o-_*r*h+a*v*h+f*r*y-a*p*y)*B,t[4]=C*B,t[5]=(g*S*o-M*v*o+M*r*y-n*S*y-g*r*x+n*v*x)*B,t[6]=(M*p*o-u*S*o-M*r*h+n*S*h+u*r*x-n*p*x)*B,t[7]=(u*v*o-g*p*o+g*r*h-n*v*h-u*r*y+n*p*y)*B,t[8]=N*B,t[9]=(M*_*o-g*b*o-M*a*y+n*b*y+g*a*x-n*_*x)*B,t[10]=(u*b*o-M*f*o+M*a*h-n*b*h-u*a*x+n*f*x)*B,t[11]=(g*f*o-u*_*o-g*a*h+n*_*h+u*a*y-n*f*y)*B,t[12]=U*B,t[13]=(g*b*r-M*_*r+M*a*v-n*b*v-g*a*S+n*_*S)*B,t[14]=(M*f*r-u*b*r-M*a*p+n*b*p+u*a*S-n*f*S)*B,t[15]=(u*_*r-g*f*r+g*a*p-n*_*p-u*a*v+n*f*v)*B,this}scale(t){const n=this.elements,a=t.x,r=t.y,o=t.z;return n[0]*=a,n[4]*=r,n[8]*=o,n[1]*=a,n[5]*=r,n[9]*=o,n[2]*=a,n[6]*=r,n[10]*=o,n[3]*=a,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,r))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),r=Math.sin(n),o=1-a,u=t.x,f=t.y,p=t.z,h=o*u,g=o*f;return this.set(h*u+a,h*f-r*p,h*p+r*f,0,h*f+r*p,g*f+a,g*p-r*u,0,h*p-r*f,g*p+r*u,o*p*p+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,r,o,u){return this.set(1,a,o,0,t,1,u,0,n,r,1,0,0,0,0,1),this}compose(t,n,a){const r=this.elements,o=n._x,u=n._y,f=n._z,p=n._w,h=o+o,g=u+u,_=f+f,v=o*h,y=o*g,M=o*_,b=u*g,S=u*_,x=f*_,T=p*h,C=p*g,N=p*_,U=a.x,P=a.y,B=a.z;return r[0]=(1-(b+x))*U,r[1]=(y+N)*U,r[2]=(M-C)*U,r[3]=0,r[4]=(y-N)*P,r[5]=(1-(v+x))*P,r[6]=(S+T)*P,r[7]=0,r[8]=(M+C)*B,r[9]=(S-T)*B,r[10]=(1-(v+b))*B,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,n,a){const r=this.elements;if(t.x=r[12],t.y=r[13],t.z=r[14],this.determinant()===0)return a.set(1,1,1),n.identity(),this;let o=ro.set(r[0],r[1],r[2]).length();const u=ro.set(r[4],r[5],r[6]).length(),f=ro.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),qi.copy(this);const h=1/o,g=1/u,_=1/f;return qi.elements[0]*=h,qi.elements[1]*=h,qi.elements[2]*=h,qi.elements[4]*=g,qi.elements[5]*=g,qi.elements[6]*=g,qi.elements[8]*=_,qi.elements[9]*=_,qi.elements[10]*=_,n.setFromRotationMatrix(qi),a.x=o,a.y=u,a.z=f,this}makePerspective(t,n,a,r,o,u,f=ua,p=!1){const h=this.elements,g=2*o/(n-t),_=2*o/(a-r),v=(n+t)/(n-t),y=(a+r)/(a-r);let M,b;if(p)M=o/(u-o),b=u*o/(u-o);else if(f===ua)M=-(u+o)/(u-o),b=-2*u*o/(u-o);else if(f===Lu)M=-u/(u-o),b=-u*o/(u-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=g,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=_,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=b,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,n,a,r,o,u,f=ua,p=!1){const h=this.elements,g=2/(n-t),_=2/(a-r),v=-(n+t)/(n-t),y=-(a+r)/(a-r);let M,b;if(p)M=1/(u-o),b=u/(u-o);else if(f===ua)M=-2/(u-o),b=-(u+o)/(u-o);else if(f===Lu)M=-1/(u-o),b=-o/(u-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=g,h[4]=0,h[8]=0,h[12]=v,h[1]=0,h[5]=_,h[9]=0,h[13]=y,h[2]=0,h[6]=0,h[10]=M,h[14]=b,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let r=0;r<16;r++)if(n[r]!==a[r])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}}const ro=new lt,qi=new pn,zT=new lt(0,0,0),PT=new lt(1,1,1),Ds=new lt,lu=new lt,Ei=new lt,v_=new pn,__=new xr;class ma{constructor(t=0,n=0,a=0,r=ma.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,r=this._order){return this._x=t,this._y=n,this._z=a,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const r=t.elements,o=r[0],u=r[4],f=r[8],p=r[1],h=r[5],g=r[9],_=r[2],v=r[6],y=r[10];switch(n){case"XYZ":this._y=Math.asin(Oe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-u,o)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(p,h)):(this._y=Math.atan2(-_,o),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(p,o));break;case"ZYX":this._y=Math.asin(-Oe(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(p,o)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(Oe(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,h),this._y=Math.atan2(-_,o)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-Oe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(f,o)):(this._x=Math.atan2(-g,y),this._y=0);break;default:pe("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return v_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(v_,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return __.setFromEuler(this),this.setFromQuaternion(__,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ma.DEFAULT_ORDER="XYZ";class Xp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let BT=0;const x_=new lt,oo=new xr,ka=new pn,cu=new lt,Tl=new lt,FT=new lt,IT=new xr,y_=new lt(1,0,0),S_=new lt(0,1,0),M_=new lt(0,0,1),E_={type:"added"},HT={type:"removed"},lo={type:"childadded",child:null},hd={type:"childremoved",child:null};class ti extends Ao{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:BT++}),this.uuid=Fl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ti.DEFAULT_UP.clone();const t=new lt,n=new ma,a=new xr,r=new lt(1,1,1);function o(){a.setFromEuler(n,!1)}function u(){n.setFromQuaternion(a,void 0,!1)}n._onChange(o),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pn},normalMatrix:{value:new ve}}),this.matrix=new pn,this.matrixWorld=new pn,this.matrixAutoUpdate=ti.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ti.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return oo.setFromAxisAngle(t,n),this.quaternion.multiply(oo),this}rotateOnWorldAxis(t,n){return oo.setFromAxisAngle(t,n),this.quaternion.premultiply(oo),this}rotateX(t){return this.rotateOnAxis(y_,t)}rotateY(t){return this.rotateOnAxis(S_,t)}rotateZ(t){return this.rotateOnAxis(M_,t)}translateOnAxis(t,n){return x_.copy(t).applyQuaternion(this.quaternion),this.position.add(x_.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(y_,t)}translateY(t){return this.translateOnAxis(S_,t)}translateZ(t){return this.translateOnAxis(M_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ka.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?cu.copy(t):cu.set(t,n,a);const r=this.parent;this.updateWorldMatrix(!0,!1),Tl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ka.lookAt(Tl,cu,this.up):ka.lookAt(cu,Tl,this.up),this.quaternion.setFromRotationMatrix(ka),r&&(ka.extractRotation(r.matrixWorld),oo.setFromRotationMatrix(ka),this.quaternion.premultiply(oo.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Fe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(E_),lo.child=t,this.dispatchEvent(lo),lo.child=null):Fe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(HT),hd.child=t,this.dispatchEvent(hd),hd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ka.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ka.multiply(t.parent.matrixWorld)),t.applyMatrix4(ka),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(E_),lo.child=t,this.dispatchEvent(lo),lo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,r=this.children.length;a<r;a++){const u=this.children[a].getObjectByProperty(t,n);if(u!==void 0)return u}}getObjectsByProperty(t,n,a=[]){this[t]===n&&a.push(this);const r=this.children;for(let o=0,u=r.length;o<u;o++)r[o].getObjectsByProperty(t,n,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tl,t,FT),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tl,IT,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].updateMatrixWorld(t)}updateWorldMatrix(t,n){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let o=0,u=r.length;o<u;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(f=>({...f})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function o(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(t.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let h=0,g=p.length;h<g;h++){const _=p[h];o(t.shapes,_)}else o(t.shapes,p)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,h=this.material.length;p<h;p++)f.push(o(t.materials,this.material[p]));r.material=f}else r.material=o(t.materials,this.material);if(this.children.length>0){r.children=[];for(let f=0;f<this.children.length;f++)r.children.push(this.children[f].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];r.animations.push(o(t.animations,p))}}if(n){const f=u(t.geometries),p=u(t.materials),h=u(t.textures),g=u(t.images),_=u(t.shapes),v=u(t.skeletons),y=u(t.animations),M=u(t.nodes);f.length>0&&(a.geometries=f),p.length>0&&(a.materials=p),h.length>0&&(a.textures=h),g.length>0&&(a.images=g),_.length>0&&(a.shapes=_),v.length>0&&(a.skeletons=v),y.length>0&&(a.animations=y),M.length>0&&(a.nodes=M)}return a.object=r,a;function u(f){const p=[];for(const h in f){const g=f[h];delete g.metadata,p.push(g)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const r=t.children[a];this.add(r.clone())}return this}}ti.DEFAULT_UP=new lt(0,1,0);ti.DEFAULT_MATRIX_AUTO_UPDATE=!0;ti.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xi=new lt,qa=new lt,dd=new lt,Xa=new lt,co=new lt,uo=new lt,b_=new lt,pd=new lt,md=new lt,gd=new lt,vd=new Sn,_d=new Sn,xd=new Sn;class Yi{constructor(t=new lt,n=new lt,a=new lt){this.a=t,this.b=n,this.c=a}static getNormal(t,n,a,r){r.subVectors(a,n),Xi.subVectors(t,n),r.cross(Xi);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(t,n,a,r,o){Xi.subVectors(r,n),qa.subVectors(a,n),dd.subVectors(t,n);const u=Xi.dot(Xi),f=Xi.dot(qa),p=Xi.dot(dd),h=qa.dot(qa),g=qa.dot(dd),_=u*h-f*f;if(_===0)return o.set(0,0,0),null;const v=1/_,y=(h*p-f*g)*v,M=(u*g-f*p)*v;return o.set(1-y-M,M,y)}static containsPoint(t,n,a,r){return this.getBarycoord(t,n,a,r,Xa)===null?!1:Xa.x>=0&&Xa.y>=0&&Xa.x+Xa.y<=1}static getInterpolation(t,n,a,r,o,u,f,p){return this.getBarycoord(t,n,a,r,Xa)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(o,Xa.x),p.addScaledVector(u,Xa.y),p.addScaledVector(f,Xa.z),p)}static getInterpolatedAttribute(t,n,a,r,o,u){return vd.setScalar(0),_d.setScalar(0),xd.setScalar(0),vd.fromBufferAttribute(t,n),_d.fromBufferAttribute(t,a),xd.fromBufferAttribute(t,r),u.setScalar(0),u.addScaledVector(vd,o.x),u.addScaledVector(_d,o.y),u.addScaledVector(xd,o.z),u}static isFrontFacing(t,n,a,r){return Xi.subVectors(a,n),qa.subVectors(t,n),Xi.cross(qa).dot(r)<0}set(t,n,a){return this.a.copy(t),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(t,n,a,r){return this.a.copy(t[n]),this.b.copy(t[a]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,n,a,r){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Xi.subVectors(this.c,this.b),qa.subVectors(this.a,this.b),Xi.cross(qa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Yi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Yi.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,a,r,o){return Yi.getInterpolation(t,this.a,this.b,this.c,n,a,r,o)}containsPoint(t){return Yi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Yi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const a=this.a,r=this.b,o=this.c;let u,f;co.subVectors(r,a),uo.subVectors(o,a),pd.subVectors(t,a);const p=co.dot(pd),h=uo.dot(pd);if(p<=0&&h<=0)return n.copy(a);md.subVectors(t,r);const g=co.dot(md),_=uo.dot(md);if(g>=0&&_<=g)return n.copy(r);const v=p*_-g*h;if(v<=0&&p>=0&&g<=0)return u=p/(p-g),n.copy(a).addScaledVector(co,u);gd.subVectors(t,o);const y=co.dot(gd),M=uo.dot(gd);if(M>=0&&y<=M)return n.copy(o);const b=y*h-p*M;if(b<=0&&h>=0&&M<=0)return f=h/(h-M),n.copy(a).addScaledVector(uo,f);const S=g*M-y*_;if(S<=0&&_-g>=0&&y-M>=0)return b_.subVectors(o,r),f=(_-g)/(_-g+(y-M)),n.copy(r).addScaledVector(b_,f);const x=1/(S+b+v);return u=b*x,f=v*x,n.copy(a).addScaledVector(co,u).addScaledVector(uo,f)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const kx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ns={h:0,s:0,l:0},uu={h:0,s:0,l:0};function yd(c,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?c+(t-c)*6*n:n<1/2?t:n<2/3?c+(t-c)*6*(2/3-n):c}class ke{constructor(t,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,a)}set(t,n,a){if(n===void 0&&a===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,n,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=si){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ie.colorSpaceToWorking(this,n),this}setRGB(t,n,a,r=Ie.workingColorSpace){return this.r=t,this.g=n,this.b=a,Ie.colorSpaceToWorking(this,r),this}setHSL(t,n,a,r=Ie.workingColorSpace){if(t=wT(t,1),n=Oe(n,0,1),a=Oe(a,0,1),n===0)this.r=this.g=this.b=a;else{const o=a<=.5?a*(1+n):a+n-a*n,u=2*a-o;this.r=yd(u,o,t+1/3),this.g=yd(u,o,t),this.b=yd(u,o,t-1/3)}return Ie.colorSpaceToWorking(this,r),this}setStyle(t,n=si){function a(o){o!==void 0&&parseFloat(o)<1&&pe("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const u=r[1],f=r[2];switch(u){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:pe("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=r[1],u=o.length;if(u===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(o,16),n);pe("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=si){const a=kx[t.toLowerCase()];return a!==void 0?this.setHex(a,n):pe("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ka(t.r),this.g=Ka(t.g),this.b=Ka(t.b),this}copyLinearToSRGB(t){return this.r=xo(t.r),this.g=xo(t.g),this.b=xo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=si){return Ie.workingToColorSpace(Jn.copy(this),t),Math.round(Oe(Jn.r*255,0,255))*65536+Math.round(Oe(Jn.g*255,0,255))*256+Math.round(Oe(Jn.b*255,0,255))}getHexString(t=si){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Ie.workingColorSpace){Ie.workingToColorSpace(Jn.copy(this),n);const a=Jn.r,r=Jn.g,o=Jn.b,u=Math.max(a,r,o),f=Math.min(a,r,o);let p,h;const g=(f+u)/2;if(f===u)p=0,h=0;else{const _=u-f;switch(h=g<=.5?_/(u+f):_/(2-u-f),u){case a:p=(r-o)/_+(r<o?6:0);break;case r:p=(o-a)/_+2;break;case o:p=(a-r)/_+4;break}p/=6}return t.h=p,t.s=h,t.l=g,t}getRGB(t,n=Ie.workingColorSpace){return Ie.workingToColorSpace(Jn.copy(this),n),t.r=Jn.r,t.g=Jn.g,t.b=Jn.b,t}getStyle(t=si){Ie.workingToColorSpace(Jn.copy(this),t);const n=Jn.r,a=Jn.g,r=Jn.b;return t!==si?`color(${t} ${n.toFixed(3)} ${a.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(r*255)})`}offsetHSL(t,n,a){return this.getHSL(Ns),this.setHSL(Ns.h+t,Ns.s+n,Ns.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,a){return this.r=t.r+(n.r-t.r)*a,this.g=t.g+(n.g-t.g)*a,this.b=t.b+(n.b-t.b)*a,this}lerpHSL(t,n){this.getHSL(Ns),t.getHSL(uu);const a=nd(Ns.h,uu.h,n),r=nd(Ns.s,uu.s,n),o=nd(Ns.l,uu.l,n);return this.setHSL(a,r,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,a=this.g,r=this.b,o=t.elements;return this.r=o[0]*n+o[3]*a+o[6]*r,this.g=o[1]*n+o[4]*a+o[7]*r,this.b=o[2]*n+o[5]*a+o[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jn=new ke;ke.NAMES=kx;let GT=0;class Hl extends Ao{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:GT++}),this.uuid=Fl(),this.name="",this.type="Material",this.blending=_o,this.side=Bs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zd,this.blendDst=Pd,this.blendEquation=pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=So,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=c_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=eo,this.stencilZFail=eo,this.stencilZPass=eo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const a=t[n];if(a===void 0){pe(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){pe(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(a):r&&r.isVector3&&a&&a.isVector3?r.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==_o&&(a.blending=this.blending),this.side!==Bs&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==zd&&(a.blendSrc=this.blendSrc),this.blendDst!==Pd&&(a.blendDst=this.blendDst),this.blendEquation!==pr&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==So&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==c_&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==eo&&(a.stencilFail=this.stencilFail),this.stencilZFail!==eo&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==eo&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.allowOverride===!1&&(a.allowOverride=!1),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function r(o){const u=[];for(const f in o){const p=o[f];delete p.metadata,u.push(p)}return u}if(n){const o=r(t.textures),u=r(t.images);o.length>0&&(a.textures=o),u.length>0&&(a.images=u)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let a=null;if(n!==null){const r=n.length;a=new Array(r);for(let o=0;o!==r;++o)a[o]=n[o].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class qx extends Hl{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ma,this.combine=Ex,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Rn=new lt,fu=new qe;let VT=0;class da{constructor(t,n,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:VT++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=a,this.usage=u_,this.updateRanges=[],this.gpuType=ca,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,a){t*=this.itemSize,a*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[t+r]=n.array[a+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)fu.fromBufferAttribute(this,n),fu.applyMatrix3(t),this.setXY(n,fu.x,fu.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)Rn.fromBufferAttribute(this,n),Rn.applyMatrix3(t),this.setXYZ(n,Rn.x,Rn.y,Rn.z);return this}applyMatrix4(t){for(let n=0,a=this.count;n<a;n++)Rn.fromBufferAttribute(this,n),Rn.applyMatrix4(t),this.setXYZ(n,Rn.x,Rn.y,Rn.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)Rn.fromBufferAttribute(this,n),Rn.applyNormalMatrix(t),this.setXYZ(n,Rn.x,Rn.y,Rn.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)Rn.fromBufferAttribute(this,n),Rn.transformDirection(t),this.setXYZ(n,Rn.x,Rn.y,Rn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let a=this.array[t*this.itemSize+n];return this.normalized&&(a=Ml(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=di(a,this.array)),this.array[t*this.itemSize+n]=a,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Ml(n,this.array)),n}setX(t,n){return this.normalized&&(n=di(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Ml(n,this.array)),n}setY(t,n){return this.normalized&&(n=di(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Ml(n,this.array)),n}setZ(t,n){return this.normalized&&(n=di(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Ml(n,this.array)),n}setW(t,n){return this.normalized&&(n=di(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,a){return t*=this.itemSize,this.normalized&&(n=di(n,this.array),a=di(a,this.array)),this.array[t+0]=n,this.array[t+1]=a,this}setXYZ(t,n,a,r){return t*=this.itemSize,this.normalized&&(n=di(n,this.array),a=di(a,this.array),r=di(r,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=r,this}setXYZW(t,n,a,r,o){return t*=this.itemSize,this.normalized&&(n=di(n,this.array),a=di(a,this.array),r=di(r,this.array),o=di(o,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=r,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==u_&&(t.usage=this.usage),t}}class Xx extends da{constructor(t,n,a){super(new Uint16Array(t),n,a)}}class Wx extends da{constructor(t,n,a){super(new Uint32Array(t),n,a)}}class Qa extends da{constructor(t,n,a){super(new Float32Array(t),n,a)}}let kT=0;const Pi=new pn,Sd=new ti,fo=new lt,bi=new Il,Al=new Il,Pn=new lt;class ts extends Ao{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kT++}),this.uuid=Fl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Hx(t)?Wx:Xx)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,a=0){this.groups.push({start:t,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const o=new ve().getNormalMatrix(t);a.applyNormalMatrix(o),a.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Pi.makeRotationFromQuaternion(t),this.applyMatrix4(Pi),this}rotateX(t){return Pi.makeRotationX(t),this.applyMatrix4(Pi),this}rotateY(t){return Pi.makeRotationY(t),this.applyMatrix4(Pi),this}rotateZ(t){return Pi.makeRotationZ(t),this.applyMatrix4(Pi),this}translate(t,n,a){return Pi.makeTranslation(t,n,a),this.applyMatrix4(Pi),this}scale(t,n,a){return Pi.makeScale(t,n,a),this.applyMatrix4(Pi),this}lookAt(t){return Sd.lookAt(t),Sd.updateMatrix(),this.applyMatrix4(Sd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fo).negate(),this.translate(fo.x,fo.y,fo.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let r=0,o=t.length;r<o;r++){const u=t[r];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Qa(a,3))}else{const a=Math.min(t.length,n.count);for(let r=0;r<a;r++){const o=t[r];n.setXYZ(r,o.x,o.y,o.z||0)}t.length>n.count&&pe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Il);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Fe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new lt(-1/0,-1/0,-1/0),new lt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let a=0,r=n.length;a<r;a++){const o=n[a];bi.setFromBufferAttribute(o),this.morphTargetsRelative?(Pn.addVectors(this.boundingBox.min,bi.min),this.boundingBox.expandByPoint(Pn),Pn.addVectors(this.boundingBox.max,bi.max),this.boundingBox.expandByPoint(Pn)):(this.boundingBox.expandByPoint(bi.min),this.boundingBox.expandByPoint(bi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Fe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qp);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Fe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new lt,1/0);return}if(t){const a=this.boundingSphere.center;if(bi.setFromBufferAttribute(t),n)for(let o=0,u=n.length;o<u;o++){const f=n[o];Al.setFromBufferAttribute(f),this.morphTargetsRelative?(Pn.addVectors(bi.min,Al.min),bi.expandByPoint(Pn),Pn.addVectors(bi.max,Al.max),bi.expandByPoint(Pn)):(bi.expandByPoint(Al.min),bi.expandByPoint(Al.max))}bi.getCenter(a);let r=0;for(let o=0,u=t.count;o<u;o++)Pn.fromBufferAttribute(t,o),r=Math.max(r,a.distanceToSquared(Pn));if(n)for(let o=0,u=n.length;o<u;o++){const f=n[o],p=this.morphTargetsRelative;for(let h=0,g=f.count;h<g;h++)Pn.fromBufferAttribute(f,h),p&&(fo.fromBufferAttribute(t,h),Pn.add(fo)),r=Math.max(r,a.distanceToSquared(Pn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Fe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Fe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,r=n.normal,o=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new da(new Float32Array(4*a.count),4));const u=this.getAttribute("tangent"),f=[],p=[];for(let X=0;X<a.count;X++)f[X]=new lt,p[X]=new lt;const h=new lt,g=new lt,_=new lt,v=new qe,y=new qe,M=new qe,b=new lt,S=new lt;function x(X,w,O){h.fromBufferAttribute(a,X),g.fromBufferAttribute(a,w),_.fromBufferAttribute(a,O),v.fromBufferAttribute(o,X),y.fromBufferAttribute(o,w),M.fromBufferAttribute(o,O),g.sub(h),_.sub(h),y.sub(v),M.sub(v);const H=1/(y.x*M.y-M.x*y.y);isFinite(H)&&(b.copy(g).multiplyScalar(M.y).addScaledVector(_,-y.y).multiplyScalar(H),S.copy(_).multiplyScalar(y.x).addScaledVector(g,-M.x).multiplyScalar(H),f[X].add(b),f[w].add(b),f[O].add(b),p[X].add(S),p[w].add(S),p[O].add(S))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let X=0,w=T.length;X<w;++X){const O=T[X],H=O.start,$=O.count;for(let V=H,K=H+$;V<K;V+=3)x(t.getX(V+0),t.getX(V+1),t.getX(V+2))}const C=new lt,N=new lt,U=new lt,P=new lt;function B(X){U.fromBufferAttribute(r,X),P.copy(U);const w=f[X];C.copy(w),C.sub(U.multiplyScalar(U.dot(w))).normalize(),N.crossVectors(P,w);const H=N.dot(p[X])<0?-1:1;u.setXYZW(X,C.x,C.y,C.z,H)}for(let X=0,w=T.length;X<w;++X){const O=T[X],H=O.start,$=O.count;for(let V=H,K=H+$;V<K;V+=3)B(t.getX(V+0)),B(t.getX(V+1)),B(t.getX(V+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new da(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let v=0,y=a.count;v<y;v++)a.setXYZ(v,0,0,0);const r=new lt,o=new lt,u=new lt,f=new lt,p=new lt,h=new lt,g=new lt,_=new lt;if(t)for(let v=0,y=t.count;v<y;v+=3){const M=t.getX(v+0),b=t.getX(v+1),S=t.getX(v+2);r.fromBufferAttribute(n,M),o.fromBufferAttribute(n,b),u.fromBufferAttribute(n,S),g.subVectors(u,o),_.subVectors(r,o),g.cross(_),f.fromBufferAttribute(a,M),p.fromBufferAttribute(a,b),h.fromBufferAttribute(a,S),f.add(g),p.add(g),h.add(g),a.setXYZ(M,f.x,f.y,f.z),a.setXYZ(b,p.x,p.y,p.z),a.setXYZ(S,h.x,h.y,h.z)}else for(let v=0,y=n.count;v<y;v+=3)r.fromBufferAttribute(n,v+0),o.fromBufferAttribute(n,v+1),u.fromBufferAttribute(n,v+2),g.subVectors(u,o),_.subVectors(r,o),g.cross(_),a.setXYZ(v+0,g.x,g.y,g.z),a.setXYZ(v+1,g.x,g.y,g.z),a.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,a=t.count;n<a;n++)Pn.fromBufferAttribute(t,n),Pn.normalize(),t.setXYZ(n,Pn.x,Pn.y,Pn.z)}toNonIndexed(){function t(f,p){const h=f.array,g=f.itemSize,_=f.normalized,v=new h.constructor(p.length*g);let y=0,M=0;for(let b=0,S=p.length;b<S;b++){f.isInterleavedBufferAttribute?y=p[b]*f.data.stride+f.offset:y=p[b]*g;for(let x=0;x<g;x++)v[M++]=h[y++]}return new da(v,g,_)}if(this.index===null)return pe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ts,a=this.index.array,r=this.attributes;for(const f in r){const p=r[f],h=t(p,a);n.setAttribute(f,h)}const o=this.morphAttributes;for(const f in o){const p=[],h=o[f];for(let g=0,_=h.length;g<_;g++){const v=h[g],y=t(v,a);p.push(y)}n.morphAttributes[f]=p}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,p=u.length;f<p;f++){const h=u[f];n.addGroup(h.start,h.count,h.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const h in p)p[h]!==void 0&&(t[h]=p[h]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const p in a){const h=a[p];t.data.attributes[p]=h.toJSON(t.data)}const r={};let o=!1;for(const p in this.morphAttributes){const h=this.morphAttributes[p],g=[];for(let _=0,v=h.length;_<v;_++){const y=h[_];g.push(y.toJSON(t.data))}g.length>0&&(r[p]=g,o=!0)}o&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(t.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(t.data.boundingSphere=f.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const r=t.attributes;for(const h in r){const g=r[h];this.setAttribute(h,g.clone(n))}const o=t.morphAttributes;for(const h in o){const g=[],_=o[h];for(let v=0,y=_.length;v<y;v++)g.push(_[v].clone(n));this.morphAttributes[h]=g}this.morphTargetsRelative=t.morphTargetsRelative;const u=t.groups;for(let h=0,g=u.length;h<g;h++){const _=u[h];this.addGroup(_.start,_.count,_.materialIndex)}const f=t.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const T_=new pn,sr=new Vx,hu=new qp,A_=new lt,du=new lt,pu=new lt,mu=new lt,Md=new lt,gu=new lt,w_=new lt,vu=new lt;class Qi extends ti{constructor(t=new ts,n=new qx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const r=n[a[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=r.length;o<u;o++){const f=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=o}}}}getVertexPosition(t,n){const a=this.geometry,r=a.attributes.position,o=a.morphAttributes.position,u=a.morphTargetsRelative;n.fromBufferAttribute(r,t);const f=this.morphTargetInfluences;if(o&&f){gu.set(0,0,0);for(let p=0,h=o.length;p<h;p++){const g=f[p],_=o[p];g!==0&&(Md.fromBufferAttribute(_,t),u?gu.addScaledVector(Md,g):gu.addScaledVector(Md.sub(n),g))}n.add(gu)}return n}raycast(t,n){const a=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),hu.copy(a.boundingSphere),hu.applyMatrix4(o),sr.copy(t.ray).recast(t.near),!(hu.containsPoint(sr.origin)===!1&&(sr.intersectSphere(hu,A_)===null||sr.origin.distanceToSquared(A_)>(t.far-t.near)**2))&&(T_.copy(o).invert(),sr.copy(t.ray).applyMatrix4(T_),!(a.boundingBox!==null&&sr.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,n,sr)))}_computeIntersections(t,n,a){let r;const o=this.geometry,u=this.material,f=o.index,p=o.attributes.position,h=o.attributes.uv,g=o.attributes.uv1,_=o.attributes.normal,v=o.groups,y=o.drawRange;if(f!==null)if(Array.isArray(u))for(let M=0,b=v.length;M<b;M++){const S=v[M],x=u[S.materialIndex],T=Math.max(S.start,y.start),C=Math.min(f.count,Math.min(S.start+S.count,y.start+y.count));for(let N=T,U=C;N<U;N+=3){const P=f.getX(N),B=f.getX(N+1),X=f.getX(N+2);r=_u(this,x,t,a,h,g,_,P,B,X),r&&(r.faceIndex=Math.floor(N/3),r.face.materialIndex=S.materialIndex,n.push(r))}}else{const M=Math.max(0,y.start),b=Math.min(f.count,y.start+y.count);for(let S=M,x=b;S<x;S+=3){const T=f.getX(S),C=f.getX(S+1),N=f.getX(S+2);r=_u(this,u,t,a,h,g,_,T,C,N),r&&(r.faceIndex=Math.floor(S/3),n.push(r))}}else if(p!==void 0)if(Array.isArray(u))for(let M=0,b=v.length;M<b;M++){const S=v[M],x=u[S.materialIndex],T=Math.max(S.start,y.start),C=Math.min(p.count,Math.min(S.start+S.count,y.start+y.count));for(let N=T,U=C;N<U;N+=3){const P=N,B=N+1,X=N+2;r=_u(this,x,t,a,h,g,_,P,B,X),r&&(r.faceIndex=Math.floor(N/3),r.face.materialIndex=S.materialIndex,n.push(r))}}else{const M=Math.max(0,y.start),b=Math.min(p.count,y.start+y.count);for(let S=M,x=b;S<x;S+=3){const T=S,C=S+1,N=S+2;r=_u(this,u,t,a,h,g,_,T,C,N),r&&(r.faceIndex=Math.floor(S/3),n.push(r))}}}}function qT(c,t,n,a,r,o,u,f){let p;if(t.side===mi?p=a.intersectTriangle(u,o,r,!0,f):p=a.intersectTriangle(r,o,u,t.side===Bs,f),p===null)return null;vu.copy(f),vu.applyMatrix4(c.matrixWorld);const h=n.ray.origin.distanceTo(vu);return h<n.near||h>n.far?null:{distance:h,point:vu.clone(),object:c}}function _u(c,t,n,a,r,o,u,f,p,h){c.getVertexPosition(f,du),c.getVertexPosition(p,pu),c.getVertexPosition(h,mu);const g=qT(c,t,n,a,du,pu,mu,w_);if(g){const _=new lt;Yi.getBarycoord(w_,du,pu,mu,_),r&&(g.uv=Yi.getInterpolatedAttribute(r,f,p,h,_,new qe)),o&&(g.uv1=Yi.getInterpolatedAttribute(o,f,p,h,_,new qe)),u&&(g.normal=Yi.getInterpolatedAttribute(u,f,p,h,_,new lt),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const v={a:f,b:p,c:h,normal:new lt,materialIndex:0};Yi.getNormal(du,pu,mu,v.normal),g.face=v,g.barycoord=_}return g}class wo extends ts{constructor(t=1,n=1,a=1,r=1,o=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:a,widthSegments:r,heightSegments:o,depthSegments:u};const f=this;r=Math.floor(r),o=Math.floor(o),u=Math.floor(u);const p=[],h=[],g=[],_=[];let v=0,y=0;M("z","y","x",-1,-1,a,n,t,u,o,0),M("z","y","x",1,-1,a,n,-t,u,o,1),M("x","z","y",1,1,t,a,n,r,u,2),M("x","z","y",1,-1,t,a,-n,r,u,3),M("x","y","z",1,-1,t,n,a,r,o,4),M("x","y","z",-1,-1,t,n,-a,r,o,5),this.setIndex(p),this.setAttribute("position",new Qa(h,3)),this.setAttribute("normal",new Qa(g,3)),this.setAttribute("uv",new Qa(_,2));function M(b,S,x,T,C,N,U,P,B,X,w){const O=N/B,H=U/X,$=N/2,V=U/2,K=P/2,W=B+1,z=X+1;let G=0,J=0;const ft=new lt;for(let vt=0;vt<z;vt++){const I=vt*H-V;for(let j=0;j<W;j++){const _t=j*O-$;ft[b]=_t*T,ft[S]=I*C,ft[x]=K,h.push(ft.x,ft.y,ft.z),ft[b]=0,ft[S]=0,ft[x]=P>0?1:-1,g.push(ft.x,ft.y,ft.z),_.push(j/B),_.push(1-vt/X),G+=1}}for(let vt=0;vt<X;vt++)for(let I=0;I<B;I++){const j=v+I+W*vt,_t=v+I+W*(vt+1),At=v+(I+1)+W*(vt+1),Ot=v+(I+1)+W*vt;p.push(j,_t,Ot),p.push(_t,At,Ot),J+=6}f.addGroup(y,J,w),y+=J,v+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function To(c){const t={};for(const n in c){t[n]={};for(const a in c[n]){const r=c[n][a];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(pe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][a]=null):t[n][a]=r.clone():Array.isArray(r)?t[n][a]=r.slice():t[n][a]=r}}return t}function ai(c){const t={};for(let n=0;n<c.length;n++){const a=To(c[n]);for(const r in a)t[r]=a[r]}return t}function XT(c){const t=[];for(let n=0;n<c.length;n++)t.push(c[n].clone());return t}function Yx(c){const t=c.getRenderTarget();return t===null?c.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ie.workingColorSpace}const WT={clone:To,merge:ai};var YT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ga extends Hl{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=YT,this.fragmentShader=jT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=To(t.uniforms),this.uniformsGroups=XT(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const u=this.uniforms[r].value;u&&u.isTexture?n.uniforms[r]={type:"t",value:u.toJSON(t).uuid}:u&&u.isColor?n.uniforms[r]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[r]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[r]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[r]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[r]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[r]={type:"m4",value:u.toArray()}:n.uniforms[r]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const r in this.extensions)this.extensions[r]===!0&&(a[r]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class jx extends ti{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pn,this.projectionMatrix=new pn,this.projectionMatrixInverse=new pn,this.coordinateSystem=ua,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ls=new lt,R_=new qe,C_=new qe;class Wi extends jx{constructor(t=50,n=1,a=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Ap*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ed*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ap*2*Math.atan(Math.tan(ed*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,a){Ls.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ls.x,Ls.y).multiplyScalar(-t/Ls.z),Ls.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Ls.x,Ls.y).multiplyScalar(-t/Ls.z)}getViewSize(t,n){return this.getViewBounds(t,R_,C_),n.subVectors(C_,R_)}setViewOffset(t,n,a,r,o,u){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=r,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(ed*.5*this.fov)/this.zoom,a=2*n,r=this.aspect*a,o=-.5*r;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,h=u.fullHeight;o+=u.offsetX*r/p,n-=u.offsetY*a/h,r*=u.width/p,a*=u.height/h}const f=this.filmOffset;f!==0&&(o+=t*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-a,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ho=-90,po=1;class ZT extends ti{constructor(t,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Wi(ho,po,t,n);r.layers=this.layers,this.add(r);const o=new Wi(ho,po,t,n);o.layers=this.layers,this.add(o);const u=new Wi(ho,po,t,n);u.layers=this.layers,this.add(u);const f=new Wi(ho,po,t,n);f.layers=this.layers,this.add(f);const p=new Wi(ho,po,t,n);p.layers=this.layers,this.add(p);const h=new Wi(ho,po,t,n);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[a,r,o,u,f,p]=n;for(const h of n)this.remove(h);if(t===ua)a.up.set(0,1,0),a.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===Lu)a.up.set(0,-1,0),a.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of n)this.add(h),h.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,u,f,p,h,g]=this.children,_=t.getRenderTarget(),v=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;const b=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0,r),t.render(n,o),t.setRenderTarget(a,1,r),t.render(n,u),t.setRenderTarget(a,2,r),t.render(n,f),t.setRenderTarget(a,3,r),t.render(n,p),t.setRenderTarget(a,4,r),t.render(n,h),a.texture.generateMipmaps=b,t.setRenderTarget(a,5,r),t.render(n,g),t.setRenderTarget(_,v,y),t.xr.enabled=M,a.texture.needsPMREMUpdate=!0}}class Zx extends $n{constructor(t=[],n=_r,a,r,o,u,f,p,h,g){super(t,n,a,r,o,u,f,p,h,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Kx extends ha{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},r=[a,a,a,a,a,a];this.texture=new Zx(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new wo(5,5,5),o=new ga({name:"CubemapFromEquirect",uniforms:To(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:mi,blending:Za});o.uniforms.tEquirect.value=n;const u=new Qi(r,o),f=n.minFilter;return n.minFilter===zs&&(n.minFilter=Zn),new ZT(1,10,this).update(t,u),n.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(t,n=!0,a=!0,r=!0){const o=t.getRenderTarget();for(let u=0;u<6;u++)t.setRenderTarget(this,u),t.clear(n,a,r);t.setRenderTarget(o)}}class xu extends ti{constructor(){super(),this.isGroup=!0,this.type="Group"}}const KT={type:"move"};class Ed{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new lt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new lt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new lt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new lt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const a of t.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,a){let r=null,o=null,u=null;const f=this._targetRay,p=this._grip,h=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(h&&t.hand){u=!0;for(const b of t.hand.values()){const S=n.getJointPose(b,a),x=this._getHandJoint(h,b);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const g=h.joints["index-finger-tip"],_=h.joints["thumb-tip"],v=g.position.distanceTo(_.position),y=.02,M=.005;h.inputState.pinching&&v>y+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&v<=y-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(o=n.getPose(t.gripSpace,a),o!==null&&(p.matrix.fromArray(o.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,o.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(o.linearVelocity)):p.hasLinearVelocity=!1,o.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(o.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(r=n.getPose(t.targetRaySpace,a),r===null&&o!==null&&(r=o),r!==null&&(f.matrix.fromArray(r.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,r.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(r.linearVelocity)):f.hasLinearVelocity=!1,r.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(r.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(KT)))}return f!==null&&(f.visible=r!==null),p!==null&&(p.visible=o!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const a=new xu;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[n.jointName]=a,t.add(a)}return t.joints[n.jointName]}}class QT extends ti{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ma,this.environmentIntensity=1,this.environmentRotation=new ma,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class JT extends $n{constructor(t=null,n=1,a=1,r,o,u,f,p,h=jn,g=jn,_,v){super(null,u,f,p,h,g,r,o,_,v),this.isDataTexture=!0,this.image={data:t,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const bd=new lt,$T=new lt,t1=new ve;class fr{constructor(t=new lt(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,a,r){return this.normal.set(t,n,a),this.constant=r,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,a){const r=bd.subVectors(a,n).cross($T.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const a=t.delta(bd),r=this.normal.dot(a);if(r===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(t.start).addScaledVector(a,o)}intersectsLine(t){const n=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return n<0&&a>0||a<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const a=n||t1.getNormalMatrix(t),r=this.coplanarPoint(bd).applyMatrix4(t),o=this.normal.applyMatrix3(a).normalize();return this.constant=-r.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rr=new qp,e1=new qe(.5,.5),yu=new lt;class Wp{constructor(t=new fr,n=new fr,a=new fr,r=new fr,o=new fr,u=new fr){this.planes=[t,n,a,r,o,u]}set(t,n,a,r,o,u){const f=this.planes;return f[0].copy(t),f[1].copy(n),f[2].copy(a),f[3].copy(r),f[4].copy(o),f[5].copy(u),this}copy(t){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,n=ua,a=!1){const r=this.planes,o=t.elements,u=o[0],f=o[1],p=o[2],h=o[3],g=o[4],_=o[5],v=o[6],y=o[7],M=o[8],b=o[9],S=o[10],x=o[11],T=o[12],C=o[13],N=o[14],U=o[15];if(r[0].setComponents(h-u,y-g,x-M,U-T).normalize(),r[1].setComponents(h+u,y+g,x+M,U+T).normalize(),r[2].setComponents(h+f,y+_,x+b,U+C).normalize(),r[3].setComponents(h-f,y-_,x-b,U-C).normalize(),a)r[4].setComponents(p,v,S,N).normalize(),r[5].setComponents(h-p,y-v,x-S,U-N).normalize();else if(r[4].setComponents(h-p,y-v,x-S,U-N).normalize(),n===ua)r[5].setComponents(h+p,y+v,x+S,U+N).normalize();else if(n===Lu)r[5].setComponents(p,v,S,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),rr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),rr.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(rr)}intersectsSprite(t){rr.center.set(0,0,0);const n=e1.distanceTo(t.center);return rr.radius=.7071067811865476+n,rr.applyMatrix4(t.matrixWorld),this.intersectsSphere(rr)}intersectsSphere(t){const n=this.planes,a=t.center,r=-t.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(a)<r)return!1;return!0}intersectsBox(t){const n=this.planes;for(let a=0;a<6;a++){const r=n[a];if(yu.x=r.normal.x>0?t.max.x:t.min.x,yu.y=r.normal.y>0?t.max.y:t.min.y,yu.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(yu)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class D_ extends $n{constructor(t,n,a,r,o,u,f,p,h){super(t,n,a,r,o,u,f,p,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Pl extends $n{constructor(t,n,a=pa,r,o,u,f=jn,p=jn,h,g=$a,_=1){if(g!==$a&&g!==vr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:n,depth:_};super(v,r,o,u,f,p,g,a,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new kp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class n1 extends Pl{constructor(t,n=pa,a=_r,r,o,u=jn,f=jn,p,h=$a){const g={width:t,height:t,depth:1},_=[g,g,g,g,g,g];super(t,t,n,a,r,o,u,f,p,h),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Qx extends $n{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Gl extends ts{constructor(t=1,n=1,a=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:a,heightSegments:r};const o=t/2,u=n/2,f=Math.floor(a),p=Math.floor(r),h=f+1,g=p+1,_=t/f,v=n/p,y=[],M=[],b=[],S=[];for(let x=0;x<g;x++){const T=x*v-u;for(let C=0;C<h;C++){const N=C*_-o;M.push(N,-T,0),b.push(0,0,1),S.push(C/f),S.push(1-x/p)}}for(let x=0;x<p;x++)for(let T=0;T<f;T++){const C=T+h*x,N=T+h*(x+1),U=T+1+h*(x+1),P=T+1+h*x;y.push(C,N,P),y.push(N,U,P)}this.setIndex(y),this.setAttribute("position",new Qa(M,3)),this.setAttribute("normal",new Qa(b,3)),this.setAttribute("uv",new Qa(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gl(t.width,t.height,t.widthSegments,t.heightSegments)}}class i1 extends ga{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class N_ extends Hl{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ix,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ma,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class a1 extends Hl{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class s1 extends Hl{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Jx extends ti{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(t),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const Td=new pn,L_=new lt,U_=new lt;class r1{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qe(512,512),this.mapType=Ti,this.map=null,this.mapPass=null,this.matrix=new pn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wp,this._frameExtents=new qe(1,1),this._viewportCount=1,this._viewports=[new Sn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,a=this.matrix;L_.setFromMatrixPosition(t.matrixWorld),n.position.copy(L_),U_.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(U_),n.updateMatrixWorld(),Td.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Td,n.coordinateSystem,n.reversedDepth),n.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(Td)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class zu extends jx{constructor(t=-1,n=1,a=1,r=-1,o=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=a,this.bottom=r,this.near=o,this.far=u,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,a,r,o,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=r,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=a-t,u=a+t,f=r+n,p=r-n;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=h*this.view.offsetX,u=o+h*this.view.width,f-=g*this.view.offsetY,p=f-g*this.view.height}this.projectionMatrix.makeOrthographic(o,u,f,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class o1 extends r1{constructor(){super(new zu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class l1 extends Jx{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ti.DEFAULT_UP),this.updateMatrix(),this.target=new ti,this.shadow=new o1}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class c1 extends Jx{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class u1 extends Wi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class f1{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}}const O_=new pn;class h1{constructor(t,n,a=0,r=1/0){this.ray=new Vx(t,n),this.near=a,this.far=r,this.camera=null,this.layers=new Xp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):Fe("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return O_.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(O_),this}intersectObject(t,n=!0,a=[]){return wp(t,this,a,n),a.sort(z_),a}intersectObjects(t,n=!0,a=[]){for(let r=0,o=t.length;r<o;r++)wp(t[r],this,a,n);return a.sort(z_),a}}function z_(c,t){return c.distance-t.distance}function wp(c,t,n,a){let r=!0;if(c.layers.test(t.layers)&&c.raycast(t,n)===!1&&(r=!1),r===!0&&a===!0){const o=c.children;for(let u=0,f=o.length;u<f;u++)wp(o[u],t,n,!0)}}function P_(c,t,n,a){const r=d1(a);switch(n){case Px:return c*t;case Fx:return c*t/r.components*r.byteLength;case Fp:return c*t/r.components*r.byteLength;case Eo:return c*t*2/r.components*r.byteLength;case Ip:return c*t*2/r.components*r.byteLength;case Bx:return c*t*3/r.components*r.byteLength;case Zi:return c*t*4/r.components*r.byteLength;case Hp:return c*t*4/r.components*r.byteLength;case bu:case Tu:return Math.floor((c+3)/4)*Math.floor((t+3)/4)*8;case Au:case wu:return Math.floor((c+3)/4)*Math.floor((t+3)/4)*16;case Zd:case Qd:return Math.max(c,16)*Math.max(t,8)/4;case jd:case Kd:return Math.max(c,8)*Math.max(t,8)/2;case Jd:case $d:case ep:case np:return Math.floor((c+3)/4)*Math.floor((t+3)/4)*8;case tp:case ip:case ap:return Math.floor((c+3)/4)*Math.floor((t+3)/4)*16;case sp:return Math.floor((c+3)/4)*Math.floor((t+3)/4)*16;case rp:return Math.floor((c+4)/5)*Math.floor((t+3)/4)*16;case op:return Math.floor((c+4)/5)*Math.floor((t+4)/5)*16;case lp:return Math.floor((c+5)/6)*Math.floor((t+4)/5)*16;case cp:return Math.floor((c+5)/6)*Math.floor((t+5)/6)*16;case up:return Math.floor((c+7)/8)*Math.floor((t+4)/5)*16;case fp:return Math.floor((c+7)/8)*Math.floor((t+5)/6)*16;case hp:return Math.floor((c+7)/8)*Math.floor((t+7)/8)*16;case dp:return Math.floor((c+9)/10)*Math.floor((t+4)/5)*16;case pp:return Math.floor((c+9)/10)*Math.floor((t+5)/6)*16;case mp:return Math.floor((c+9)/10)*Math.floor((t+7)/8)*16;case gp:return Math.floor((c+9)/10)*Math.floor((t+9)/10)*16;case vp:return Math.floor((c+11)/12)*Math.floor((t+9)/10)*16;case _p:return Math.floor((c+11)/12)*Math.floor((t+11)/12)*16;case xp:case yp:case Sp:return Math.ceil(c/4)*Math.ceil(t/4)*16;case Mp:case Ep:return Math.ceil(c/4)*Math.ceil(t/4)*8;case bp:case Tp:return Math.ceil(c/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function d1(c){switch(c){case Ti:case Lx:return{byteLength:1,components:1};case Ul:case Ux:case Ja:return{byteLength:2,components:1};case Pp:case Bp:return{byteLength:2,components:4};case pa:case zp:case ca:return{byteLength:4,components:1};case Ox:case zx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${c}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Op}}));typeof window<"u"&&(window.__THREE__?pe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Op);function $x(){let c=null,t=!1,n=null,a=null;function r(o,u){n(o,u),a=c.requestAnimationFrame(r)}return{start:function(){t!==!0&&n!==null&&(a=c.requestAnimationFrame(r),t=!0)},stop:function(){c.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(o){n=o},setContext:function(o){c=o}}}function p1(c){const t=new WeakMap;function n(f,p){const h=f.array,g=f.usage,_=h.byteLength,v=c.createBuffer();c.bindBuffer(p,v),c.bufferData(p,h,g),f.onUploadCallback();let y;if(h instanceof Float32Array)y=c.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)y=c.HALF_FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?y=c.HALF_FLOAT:y=c.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=c.SHORT;else if(h instanceof Uint32Array)y=c.UNSIGNED_INT;else if(h instanceof Int32Array)y=c.INT;else if(h instanceof Int8Array)y=c.BYTE;else if(h instanceof Uint8Array)y=c.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=c.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:_}}function a(f,p,h){const g=p.array,_=p.updateRanges;if(c.bindBuffer(h,f),_.length===0)c.bufferSubData(h,0,g);else{_.sort((y,M)=>y.start-M.start);let v=0;for(let y=1;y<_.length;y++){const M=_[v],b=_[y];b.start<=M.start+M.count+1?M.count=Math.max(M.count,b.start+b.count-M.start):(++v,_[v]=b)}_.length=v+1;for(let y=0,M=_.length;y<M;y++){const b=_[y];c.bufferSubData(h,b.start*g.BYTES_PER_ELEMENT,g,b.start,b.count)}p.clearUpdateRanges()}p.onUploadCallback()}function r(f){return f.isInterleavedBufferAttribute&&(f=f.data),t.get(f)}function o(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=t.get(f);p&&(c.deleteBuffer(p.buffer),t.delete(f))}function u(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=t.get(f);(!g||g.version<f.version)&&t.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const h=t.get(f);if(h===void 0)t.set(f,n(f,p));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(h.buffer,f,p),h.version=f.version}}return{get:r,remove:o,update:u}}var m1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,g1=`#ifdef USE_ALPHAHASH
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
#endif`,v1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,x1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,y1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,S1=`#ifdef USE_AOMAP
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
#endif`,M1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,E1=`#ifdef USE_BATCHING
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
#endif`,b1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,T1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,A1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,w1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,R1=`#ifdef USE_IRIDESCENCE
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
#endif`,C1=`#ifdef USE_BUMPMAP
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
#endif`,D1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,N1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,L1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,U1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,O1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,z1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,P1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,B1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,F1=`#define PI 3.141592653589793
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
} // validated`,I1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,H1=`vec3 transformedNormal = objectNormal;
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
#endif`,G1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,V1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,k1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,q1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,X1="gl_FragColor = linearToOutputTexel( gl_FragColor );",W1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Y1=`#ifdef USE_ENVMAP
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
#endif`,j1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Z1=`#ifdef USE_ENVMAP
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
#endif`,K1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Q1=`#ifdef USE_ENVMAP
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
#endif`,J1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,eA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nA=`#ifdef USE_GRADIENTMAP
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
}`,iA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,aA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rA=`uniform bool receiveShadow;
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
#endif`,oA=`#ifdef USE_ENVMAP
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
#endif`,lA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,uA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hA=`PhysicalMaterial material;
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
#endif`,dA=`uniform sampler2D dfgLUT;
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
}`,pA=`
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
#endif`,mA=`#if defined( RE_IndirectDiffuse )
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
#endif`,gA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_A=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,SA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,MA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,EA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bA=`#if defined( USE_POINTS_UV )
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
#endif`,TA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,AA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,RA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,CA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,DA=`#ifdef USE_MORPHTARGETS
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
#endif`,NA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,LA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,UA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,OA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,PA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,BA=`#ifdef USE_NORMALMAP
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
#endif`,FA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,IA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,HA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,GA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,VA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,XA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,WA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,YA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ZA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,KA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,QA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,JA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$A=`float getShadowMask() {
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
}`,tw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ew=`#ifdef USE_SKINNING
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
#endif`,nw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,iw=`#ifdef USE_SKINNING
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
#endif`,aw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ow=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lw=`#ifdef USE_TRANSMISSION
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
#endif`,cw=`#ifdef USE_TRANSMISSION
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
#endif`,uw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mw=`uniform sampler2D t2D;
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
}`,gw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_w=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yw=`#include <common>
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
}`,Sw=`#if DEPTH_PACKING == 3200
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
}`,Mw=`#define DISTANCE
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
}`,Ew=`#define DISTANCE
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
}`,bw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Aw=`uniform float scale;
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
}`,ww=`uniform vec3 diffuse;
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
}`,Rw=`#include <common>
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
}`,Cw=`uniform vec3 diffuse;
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
}`,Dw=`#define LAMBERT
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
}`,Nw=`#define LAMBERT
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
}`,Lw=`#define MATCAP
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
}`,Uw=`#define MATCAP
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
}`,Ow=`#define NORMAL
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
}`,zw=`#define NORMAL
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
}`,Pw=`#define PHONG
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
}`,Bw=`#define PHONG
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
}`,Fw=`#define STANDARD
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
}`,Iw=`#define STANDARD
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
}`,Hw=`#define TOON
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
}`,Gw=`#define TOON
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
}`,Vw=`uniform float size;
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
}`,kw=`uniform vec3 diffuse;
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
}`,qw=`#include <common>
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
}`,Xw=`uniform vec3 color;
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
}`,Ww=`uniform float rotation;
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
}`,Yw=`uniform vec3 diffuse;
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
}`,Me={alphahash_fragment:m1,alphahash_pars_fragment:g1,alphamap_fragment:v1,alphamap_pars_fragment:_1,alphatest_fragment:x1,alphatest_pars_fragment:y1,aomap_fragment:S1,aomap_pars_fragment:M1,batching_pars_vertex:E1,batching_vertex:b1,begin_vertex:T1,beginnormal_vertex:A1,bsdfs:w1,iridescence_fragment:R1,bumpmap_pars_fragment:C1,clipping_planes_fragment:D1,clipping_planes_pars_fragment:N1,clipping_planes_pars_vertex:L1,clipping_planes_vertex:U1,color_fragment:O1,color_pars_fragment:z1,color_pars_vertex:P1,color_vertex:B1,common:F1,cube_uv_reflection_fragment:I1,defaultnormal_vertex:H1,displacementmap_pars_vertex:G1,displacementmap_vertex:V1,emissivemap_fragment:k1,emissivemap_pars_fragment:q1,colorspace_fragment:X1,colorspace_pars_fragment:W1,envmap_fragment:Y1,envmap_common_pars_fragment:j1,envmap_pars_fragment:Z1,envmap_pars_vertex:K1,envmap_physical_pars_fragment:oA,envmap_vertex:Q1,fog_vertex:J1,fog_pars_vertex:$1,fog_fragment:tA,fog_pars_fragment:eA,gradientmap_pars_fragment:nA,lightmap_pars_fragment:iA,lights_lambert_fragment:aA,lights_lambert_pars_fragment:sA,lights_pars_begin:rA,lights_toon_fragment:lA,lights_toon_pars_fragment:cA,lights_phong_fragment:uA,lights_phong_pars_fragment:fA,lights_physical_fragment:hA,lights_physical_pars_fragment:dA,lights_fragment_begin:pA,lights_fragment_maps:mA,lights_fragment_end:gA,logdepthbuf_fragment:vA,logdepthbuf_pars_fragment:_A,logdepthbuf_pars_vertex:xA,logdepthbuf_vertex:yA,map_fragment:SA,map_pars_fragment:MA,map_particle_fragment:EA,map_particle_pars_fragment:bA,metalnessmap_fragment:TA,metalnessmap_pars_fragment:AA,morphinstance_vertex:wA,morphcolor_vertex:RA,morphnormal_vertex:CA,morphtarget_pars_vertex:DA,morphtarget_vertex:NA,normal_fragment_begin:LA,normal_fragment_maps:UA,normal_pars_fragment:OA,normal_pars_vertex:zA,normal_vertex:PA,normalmap_pars_fragment:BA,clearcoat_normal_fragment_begin:FA,clearcoat_normal_fragment_maps:IA,clearcoat_pars_fragment:HA,iridescence_pars_fragment:GA,opaque_fragment:VA,packing:kA,premultiplied_alpha_fragment:qA,project_vertex:XA,dithering_fragment:WA,dithering_pars_fragment:YA,roughnessmap_fragment:jA,roughnessmap_pars_fragment:ZA,shadowmap_pars_fragment:KA,shadowmap_pars_vertex:QA,shadowmap_vertex:JA,shadowmask_pars_fragment:$A,skinbase_vertex:tw,skinning_pars_vertex:ew,skinning_vertex:nw,skinnormal_vertex:iw,specularmap_fragment:aw,specularmap_pars_fragment:sw,tonemapping_fragment:rw,tonemapping_pars_fragment:ow,transmission_fragment:lw,transmission_pars_fragment:cw,uv_pars_fragment:uw,uv_pars_vertex:fw,uv_vertex:hw,worldpos_vertex:dw,background_vert:pw,background_frag:mw,backgroundCube_vert:gw,backgroundCube_frag:vw,cube_vert:_w,cube_frag:xw,depth_vert:yw,depth_frag:Sw,distance_vert:Mw,distance_frag:Ew,equirect_vert:bw,equirect_frag:Tw,linedashed_vert:Aw,linedashed_frag:ww,meshbasic_vert:Rw,meshbasic_frag:Cw,meshlambert_vert:Dw,meshlambert_frag:Nw,meshmatcap_vert:Lw,meshmatcap_frag:Uw,meshnormal_vert:Ow,meshnormal_frag:zw,meshphong_vert:Pw,meshphong_frag:Bw,meshphysical_vert:Fw,meshphysical_frag:Iw,meshtoon_vert:Hw,meshtoon_frag:Gw,points_vert:Vw,points_frag:kw,shadow_vert:qw,shadow_frag:Xw,sprite_vert:Ww,sprite_frag:Yw},Vt={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ve},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ve}},envmap:{envMap:{value:null},envMapRotation:{value:new ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ve},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0},uvTransform:{value:new ve}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ve},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0}}},la={basic:{uniforms:ai([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.fog]),vertexShader:Me.meshbasic_vert,fragmentShader:Me.meshbasic_frag},lambert:{uniforms:ai([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,Vt.lights,{emissive:{value:new ke(0)}}]),vertexShader:Me.meshlambert_vert,fragmentShader:Me.meshlambert_frag},phong:{uniforms:ai([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,Vt.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:Me.meshphong_vert,fragmentShader:Me.meshphong_frag},standard:{uniforms:ai([Vt.common,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.roughnessmap,Vt.metalnessmap,Vt.fog,Vt.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Me.meshphysical_vert,fragmentShader:Me.meshphysical_frag},toon:{uniforms:ai([Vt.common,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.gradientmap,Vt.fog,Vt.lights,{emissive:{value:new ke(0)}}]),vertexShader:Me.meshtoon_vert,fragmentShader:Me.meshtoon_frag},matcap:{uniforms:ai([Vt.common,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,{matcap:{value:null}}]),vertexShader:Me.meshmatcap_vert,fragmentShader:Me.meshmatcap_frag},points:{uniforms:ai([Vt.points,Vt.fog]),vertexShader:Me.points_vert,fragmentShader:Me.points_frag},dashed:{uniforms:ai([Vt.common,Vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Me.linedashed_vert,fragmentShader:Me.linedashed_frag},depth:{uniforms:ai([Vt.common,Vt.displacementmap]),vertexShader:Me.depth_vert,fragmentShader:Me.depth_frag},normal:{uniforms:ai([Vt.common,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,{opacity:{value:1}}]),vertexShader:Me.meshnormal_vert,fragmentShader:Me.meshnormal_frag},sprite:{uniforms:ai([Vt.sprite,Vt.fog]),vertexShader:Me.sprite_vert,fragmentShader:Me.sprite_frag},background:{uniforms:{uvTransform:{value:new ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Me.background_vert,fragmentShader:Me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ve}},vertexShader:Me.backgroundCube_vert,fragmentShader:Me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Me.cube_vert,fragmentShader:Me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Me.equirect_vert,fragmentShader:Me.equirect_frag},distance:{uniforms:ai([Vt.common,Vt.displacementmap,{referencePosition:{value:new lt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Me.distance_vert,fragmentShader:Me.distance_frag},shadow:{uniforms:ai([Vt.lights,Vt.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:Me.shadow_vert,fragmentShader:Me.shadow_frag}};la.physical={uniforms:ai([la.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ve},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ve},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ve},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ve},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ve},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ve}}]),vertexShader:Me.meshphysical_vert,fragmentShader:Me.meshphysical_frag};const Su={r:0,b:0,g:0},or=new ma,jw=new pn;function Zw(c,t,n,a,r,o,u){const f=new ke(0);let p=o===!0?0:1,h,g,_=null,v=0,y=null;function M(C){let N=C.isScene===!0?C.background:null;return N&&N.isTexture&&(N=(C.backgroundBlurriness>0?n:t).get(N)),N}function b(C){let N=!1;const U=M(C);U===null?x(f,p):U&&U.isColor&&(x(U,1),N=!0);const P=c.xr.getEnvironmentBlendMode();P==="additive"?a.buffers.color.setClear(0,0,0,1,u):P==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,u),(c.autoClear||N)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),c.clear(c.autoClearColor,c.autoClearDepth,c.autoClearStencil))}function S(C,N){const U=M(N);U&&(U.isCubeTexture||U.mapping===Ou)?(g===void 0&&(g=new Qi(new wo(1,1,1),new ga({name:"BackgroundCubeMaterial",uniforms:To(la.backgroundCube.uniforms),vertexShader:la.backgroundCube.vertexShader,fragmentShader:la.backgroundCube.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(P,B,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(g)),or.copy(N.backgroundRotation),or.x*=-1,or.y*=-1,or.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(or.y*=-1,or.z*=-1),g.material.uniforms.envMap.value=U,g.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(jw.makeRotationFromEuler(or)),g.material.toneMapped=Ie.getTransfer(U.colorSpace)!==tn,(_!==U||v!==U.version||y!==c.toneMapping)&&(g.material.needsUpdate=!0,_=U,v=U.version,y=c.toneMapping),g.layers.enableAll(),C.unshift(g,g.geometry,g.material,0,0,null)):U&&U.isTexture&&(h===void 0&&(h=new Qi(new Gl(2,2),new ga({name:"BackgroundMaterial",uniforms:To(la.background.uniforms),vertexShader:la.background.vertexShader,fragmentShader:la.background.fragmentShader,side:Bs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=U,h.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,h.material.toneMapped=Ie.getTransfer(U.colorSpace)!==tn,U.matrixAutoUpdate===!0&&U.updateMatrix(),h.material.uniforms.uvTransform.value.copy(U.matrix),(_!==U||v!==U.version||y!==c.toneMapping)&&(h.material.needsUpdate=!0,_=U,v=U.version,y=c.toneMapping),h.layers.enableAll(),C.unshift(h,h.geometry,h.material,0,0,null))}function x(C,N){C.getRGB(Su,Yx(c)),a.buffers.color.setClear(Su.r,Su.g,Su.b,N,u)}function T(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return f},setClearColor:function(C,N=1){f.set(C),p=N,x(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(C){p=C,x(f,p)},render:b,addToRenderList:S,dispose:T}}function Kw(c,t){const n=c.getParameter(c.MAX_VERTEX_ATTRIBS),a={},r=v(null);let o=r,u=!1;function f(O,H,$,V,K){let W=!1;const z=_(V,$,H);o!==z&&(o=z,h(o.object)),W=y(O,V,$,K),W&&M(O,V,$,K),K!==null&&t.update(K,c.ELEMENT_ARRAY_BUFFER),(W||u)&&(u=!1,N(O,H,$,V),K!==null&&c.bindBuffer(c.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function p(){return c.createVertexArray()}function h(O){return c.bindVertexArray(O)}function g(O){return c.deleteVertexArray(O)}function _(O,H,$){const V=$.wireframe===!0;let K=a[O.id];K===void 0&&(K={},a[O.id]=K);let W=K[H.id];W===void 0&&(W={},K[H.id]=W);let z=W[V];return z===void 0&&(z=v(p()),W[V]=z),z}function v(O){const H=[],$=[],V=[];for(let K=0;K<n;K++)H[K]=0,$[K]=0,V[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:$,attributeDivisors:V,object:O,attributes:{},index:null}}function y(O,H,$,V){const K=o.attributes,W=H.attributes;let z=0;const G=$.getAttributes();for(const J in G)if(G[J].location>=0){const vt=K[J];let I=W[J];if(I===void 0&&(J==="instanceMatrix"&&O.instanceMatrix&&(I=O.instanceMatrix),J==="instanceColor"&&O.instanceColor&&(I=O.instanceColor)),vt===void 0||vt.attribute!==I||I&&vt.data!==I.data)return!0;z++}return o.attributesNum!==z||o.index!==V}function M(O,H,$,V){const K={},W=H.attributes;let z=0;const G=$.getAttributes();for(const J in G)if(G[J].location>=0){let vt=W[J];vt===void 0&&(J==="instanceMatrix"&&O.instanceMatrix&&(vt=O.instanceMatrix),J==="instanceColor"&&O.instanceColor&&(vt=O.instanceColor));const I={};I.attribute=vt,vt&&vt.data&&(I.data=vt.data),K[J]=I,z++}o.attributes=K,o.attributesNum=z,o.index=V}function b(){const O=o.newAttributes;for(let H=0,$=O.length;H<$;H++)O[H]=0}function S(O){x(O,0)}function x(O,H){const $=o.newAttributes,V=o.enabledAttributes,K=o.attributeDivisors;$[O]=1,V[O]===0&&(c.enableVertexAttribArray(O),V[O]=1),K[O]!==H&&(c.vertexAttribDivisor(O,H),K[O]=H)}function T(){const O=o.newAttributes,H=o.enabledAttributes;for(let $=0,V=H.length;$<V;$++)H[$]!==O[$]&&(c.disableVertexAttribArray($),H[$]=0)}function C(O,H,$,V,K,W,z){z===!0?c.vertexAttribIPointer(O,H,$,K,W):c.vertexAttribPointer(O,H,$,V,K,W)}function N(O,H,$,V){b();const K=V.attributes,W=$.getAttributes(),z=H.defaultAttributeValues;for(const G in W){const J=W[G];if(J.location>=0){let ft=K[G];if(ft===void 0&&(G==="instanceMatrix"&&O.instanceMatrix&&(ft=O.instanceMatrix),G==="instanceColor"&&O.instanceColor&&(ft=O.instanceColor)),ft!==void 0){const vt=ft.normalized,I=ft.itemSize,j=t.get(ft);if(j===void 0)continue;const _t=j.buffer,At=j.type,Ot=j.bytesPerElement,at=At===c.INT||At===c.UNSIGNED_INT||ft.gpuType===zp;if(ft.isInterleavedBufferAttribute){const dt=ft.data,Ut=dt.stride,Yt=ft.offset;if(dt.isInstancedInterleavedBuffer){for(let Xt=0;Xt<J.locationSize;Xt++)x(J.location+Xt,dt.meshPerAttribute);O.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let Xt=0;Xt<J.locationSize;Xt++)S(J.location+Xt);c.bindBuffer(c.ARRAY_BUFFER,_t);for(let Xt=0;Xt<J.locationSize;Xt++)C(J.location+Xt,I/J.locationSize,At,vt,Ut*Ot,(Yt+I/J.locationSize*Xt)*Ot,at)}else{if(ft.isInstancedBufferAttribute){for(let dt=0;dt<J.locationSize;dt++)x(J.location+dt,ft.meshPerAttribute);O.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let dt=0;dt<J.locationSize;dt++)S(J.location+dt);c.bindBuffer(c.ARRAY_BUFFER,_t);for(let dt=0;dt<J.locationSize;dt++)C(J.location+dt,I/J.locationSize,At,vt,I*Ot,I/J.locationSize*dt*Ot,at)}}else if(z!==void 0){const vt=z[G];if(vt!==void 0)switch(vt.length){case 2:c.vertexAttrib2fv(J.location,vt);break;case 3:c.vertexAttrib3fv(J.location,vt);break;case 4:c.vertexAttrib4fv(J.location,vt);break;default:c.vertexAttrib1fv(J.location,vt)}}}}T()}function U(){X();for(const O in a){const H=a[O];for(const $ in H){const V=H[$];for(const K in V)g(V[K].object),delete V[K];delete H[$]}delete a[O]}}function P(O){if(a[O.id]===void 0)return;const H=a[O.id];for(const $ in H){const V=H[$];for(const K in V)g(V[K].object),delete V[K];delete H[$]}delete a[O.id]}function B(O){for(const H in a){const $=a[H];if($[O.id]===void 0)continue;const V=$[O.id];for(const K in V)g(V[K].object),delete V[K];delete $[O.id]}}function X(){w(),u=!0,o!==r&&(o=r,h(o.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:f,reset:X,resetDefaultState:w,dispose:U,releaseStatesOfGeometry:P,releaseStatesOfProgram:B,initAttributes:b,enableAttribute:S,disableUnusedAttributes:T}}function Qw(c,t,n){let a;function r(h){a=h}function o(h,g){c.drawArrays(a,h,g),n.update(g,a,1)}function u(h,g,_){_!==0&&(c.drawArraysInstanced(a,h,g,_),n.update(g,a,_))}function f(h,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,h,0,g,0,_);let y=0;for(let M=0;M<_;M++)y+=g[M];n.update(y,a,1)}function p(h,g,_,v){if(_===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let M=0;M<h.length;M++)u(h[M],g[M],v[M]);else{y.multiDrawArraysInstancedWEBGL(a,h,0,g,0,v,0,_);let M=0;for(let b=0;b<_;b++)M+=g[b]*v[b];n.update(M,a,1)}}this.setMode=r,this.render=o,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function Jw(c,t,n,a){let r;function o(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");r=c.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function u(B){return!(B!==Zi&&a.convert(B)!==c.getParameter(c.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(B){const X=B===Ja&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==Ti&&a.convert(B)!==c.getParameter(c.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==ca&&!X)}function p(B){if(B==="highp"){if(c.getShaderPrecisionFormat(c.VERTEX_SHADER,c.HIGH_FLOAT).precision>0&&c.getShaderPrecisionFormat(c.FRAGMENT_SHADER,c.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&c.getShaderPrecisionFormat(c.VERTEX_SHADER,c.MEDIUM_FLOAT).precision>0&&c.getShaderPrecisionFormat(c.FRAGMENT_SHADER,c.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=n.precision!==void 0?n.precision:"highp";const g=p(h);g!==h&&(pe("WebGLRenderer:",h,"not supported, using",g,"instead."),h=g);const _=n.logarithmicDepthBuffer===!0,v=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=c.getParameter(c.MAX_TEXTURE_IMAGE_UNITS),M=c.getParameter(c.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=c.getParameter(c.MAX_TEXTURE_SIZE),S=c.getParameter(c.MAX_CUBE_MAP_TEXTURE_SIZE),x=c.getParameter(c.MAX_VERTEX_ATTRIBS),T=c.getParameter(c.MAX_VERTEX_UNIFORM_VECTORS),C=c.getParameter(c.MAX_VARYING_VECTORS),N=c.getParameter(c.MAX_FRAGMENT_UNIFORM_VECTORS),U=c.getParameter(c.MAX_SAMPLES),P=c.getParameter(c.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:y,maxVertexTextures:M,maxTextureSize:b,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:T,maxVaryings:C,maxFragmentUniforms:N,maxSamples:U,samples:P}}function $w(c){const t=this;let n=null,a=0,r=!1,o=!1;const u=new fr,f=new ve,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const y=_.length!==0||v||a!==0||r;return r=v,a=_.length,y},this.beginShadows=function(){o=!0,g(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(_,v){n=g(_,v,0)},this.setState=function(_,v,y){const M=_.clippingPlanes,b=_.clipIntersection,S=_.clipShadows,x=c.get(_);if(!r||M===null||M.length===0||o&&!S)o?g(null):h();else{const T=o?0:a,C=T*4;let N=x.clippingState||null;p.value=N,N=g(M,v,C,y);for(let U=0;U!==C;++U)N[U]=n[U];x.clippingState=N,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=T}};function h(){p.value!==n&&(p.value=n,p.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function g(_,v,y,M){const b=_!==null?_.length:0;let S=null;if(b!==0){if(S=p.value,M!==!0||S===null){const x=y+b*4,T=v.matrixWorldInverse;f.getNormalMatrix(T),(S===null||S.length<x)&&(S=new Float32Array(x));for(let C=0,N=y;C!==b;++C,N+=4)u.copy(_[C]).applyMatrix4(T,f),u.normal.toArray(S,N),S[N+3]=u.constant}p.value=S,p.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,S}}function tR(c){let t=new WeakMap;function n(u,f){return f===qd?u.mapping=_r:f===Xd&&(u.mapping=Mo),u}function a(u){if(u&&u.isTexture){const f=u.mapping;if(f===qd||f===Xd)if(t.has(u)){const p=t.get(u).texture;return n(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const h=new Kx(p.height);return h.fromEquirectangularTexture(c,u),t.set(u,h),u.addEventListener("dispose",r),n(h.texture,u.mapping)}else return null}}return u}function r(u){const f=u.target;f.removeEventListener("dispose",r);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function o(){t=new WeakMap}return{get:a,dispose:o}}const Ps=4,B_=[.125,.215,.35,.446,.526,.582],mr=20,eR=256,wl=new zu,F_=new ke;let Ad=null,wd=0,Rd=0,Cd=!1;const nR=new lt;class I_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,a=.1,r=100,o={}){const{size:u=256,position:f=nR}=o;Ad=this._renderer.getRenderTarget(),wd=this._renderer.getActiveCubeFace(),Rd=this._renderer.getActiveMipmapLevel(),Cd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,a,r,p,f),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=V_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=G_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ad,wd,Rd),this._renderer.xr.enabled=Cd,t.scissorTest=!1,mo(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===_r||t.mapping===Mo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ad=this._renderer.getRenderTarget(),wd=this._renderer.getActiveCubeFace(),Rd=this._renderer.getActiveMipmapLevel(),Cd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:Zn,minFilter:Zn,generateMipmaps:!1,type:Ja,format:Zi,colorSpace:bo,depthBuffer:!1},r=H_(t,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=H_(t,n,a);const{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=iR(o)),this._blurMaterial=sR(o,t,n),this._ggxMaterial=aR(o,t,n)}return r}_compileMaterial(t){const n=new Qi(new ts,t);this._renderer.compile(n,wl)}_sceneToCubeUV(t,n,a,r,o){const p=new Wi(90,1,n,a),h=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,y=_.toneMapping;_.getClearColor(F_),_.toneMapping=Ki,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(r),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Qi(new wo,new qx({name:"PMREM.Background",side:mi,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,S=b.material;let x=!1;const T=t.background;T?T.isColor&&(S.color.copy(T),t.background=null,x=!0):(S.color.copy(F_),x=!0);for(let C=0;C<6;C++){const N=C%3;N===0?(p.up.set(0,h[C],0),p.position.set(o.x,o.y,o.z),p.lookAt(o.x+g[C],o.y,o.z)):N===1?(p.up.set(0,0,h[C]),p.position.set(o.x,o.y,o.z),p.lookAt(o.x,o.y+g[C],o.z)):(p.up.set(0,h[C],0),p.position.set(o.x,o.y,o.z),p.lookAt(o.x,o.y,o.z+g[C]));const U=this._cubeSize;mo(r,N*U,C>2?U:0,U,U),_.setRenderTarget(r),x&&_.render(b,p),_.render(t,p)}_.toneMapping=y,_.autoClear=v,t.background=T}_textureToCubeUV(t,n){const a=this._renderer,r=t.mapping===_r||t.mapping===Mo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=V_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=G_());const o=r?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=o;const f=o.uniforms;f.envMap.value=t;const p=this._cubeSize;mo(n,0,0,3*p,2*p),a.setRenderTarget(n),a.render(u,wl)}_applyPMREM(t){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let o=1;o<r;o++)this._applyGGXFilter(t,o-1,o);n.autoClear=a}_applyGGXFilter(t,n,a){const r=this._renderer,o=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[a];f.material=u;const p=u.uniforms,h=a/(this._lodMeshes.length-1),g=n/(this._lodMeshes.length-1),_=Math.sqrt(h*h-g*g),v=0+h*1.25,y=_*v,{_lodMax:M}=this,b=this._sizeLods[a],S=3*b*(a>M-Ps?a-M+Ps:0),x=4*(this._cubeSize-b);p.envMap.value=t.texture,p.roughness.value=y,p.mipInt.value=M-n,mo(o,S,x,3*b,2*b),r.setRenderTarget(o),r.render(f,wl),p.envMap.value=o.texture,p.roughness.value=0,p.mipInt.value=M-a,mo(t,S,x,3*b,2*b),r.setRenderTarget(t),r.render(f,wl)}_blur(t,n,a,r,o){const u=this._pingPongRenderTarget;this._halfBlur(t,u,n,a,r,"latitudinal",o),this._halfBlur(u,t,a,a,r,"longitudinal",o)}_halfBlur(t,n,a,r,o,u,f){const p=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Fe("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[r];_.material=h;const v=h.uniforms,y=this._sizeLods[a]-1,M=isFinite(o)?Math.PI/(2*y):2*Math.PI/(2*mr-1),b=o/M,S=isFinite(o)?1+Math.floor(g*b):mr;S>mr&&pe(`sigmaRadians, ${o}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${mr}`);const x=[];let T=0;for(let B=0;B<mr;++B){const X=B/b,w=Math.exp(-X*X/2);x.push(w),B===0?T+=w:B<S&&(T+=2*w)}for(let B=0;B<x.length;B++)x[B]=x[B]/T;v.envMap.value=t.texture,v.samples.value=S,v.weights.value=x,v.latitudinal.value=u==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:C}=this;v.dTheta.value=M,v.mipInt.value=C-a;const N=this._sizeLods[r],U=3*N*(r>C-Ps?r-C+Ps:0),P=4*(this._cubeSize-N);mo(n,U,P,3*N,2*N),p.setRenderTarget(n),p.render(_,wl)}}function iR(c){const t=[],n=[],a=[];let r=c;const o=c-Ps+1+B_.length;for(let u=0;u<o;u++){const f=Math.pow(2,r);t.push(f);let p=1/f;u>c-Ps?p=B_[u-c+Ps-1]:u===0&&(p=0),n.push(p);const h=1/(f-2),g=-h,_=1+h,v=[g,g,_,g,_,_,g,g,_,_,g,_],y=6,M=6,b=3,S=2,x=1,T=new Float32Array(b*M*y),C=new Float32Array(S*M*y),N=new Float32Array(x*M*y);for(let P=0;P<y;P++){const B=P%3*2/3-1,X=P>2?0:-1,w=[B,X,0,B+2/3,X,0,B+2/3,X+1,0,B,X,0,B+2/3,X+1,0,B,X+1,0];T.set(w,b*M*P),C.set(v,S*M*P);const O=[P,P,P,P,P,P];N.set(O,x*M*P)}const U=new ts;U.setAttribute("position",new da(T,b)),U.setAttribute("uv",new da(C,S)),U.setAttribute("faceIndex",new da(N,x)),a.push(new Qi(U,null)),r>Ps&&r--}return{lodMeshes:a,sizeLods:t,sigmas:n}}function H_(c,t,n){const a=new ha(c,t,n);return a.texture.mapping=Ou,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function mo(c,t,n,a,r){c.viewport.set(t,n,a,r),c.scissor.set(t,n,a,r)}function aR(c,t,n){return new ga({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:eR,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${c}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Pu(),fragmentShader:`

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
		`,blending:Za,depthTest:!1,depthWrite:!1})}function sR(c,t,n){const a=new Float32Array(mr),r=new lt(0,1,0);return new ga({name:"SphericalGaussianBlur",defines:{n:mr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${c}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Pu(),fragmentShader:`

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
		`,blending:Za,depthTest:!1,depthWrite:!1})}function G_(){return new ga({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pu(),fragmentShader:`

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
		`,blending:Za,depthTest:!1,depthWrite:!1})}function V_(){return new ga({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Za,depthTest:!1,depthWrite:!1})}function Pu(){return`

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
	`}function rR(c){let t=new WeakMap,n=null;function a(f){if(f&&f.isTexture){const p=f.mapping,h=p===qd||p===Xd,g=p===_r||p===Mo;if(h||g){let _=t.get(f);const v=_!==void 0?_.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==v)return n===null&&(n=new I_(c)),_=h?n.fromEquirectangular(f,_):n.fromCubemap(f,_),_.texture.pmremVersion=f.pmremVersion,t.set(f,_),_.texture;if(_!==void 0)return _.texture;{const y=f.image;return h&&y&&y.height>0||g&&y&&r(y)?(n===null&&(n=new I_(c)),_=h?n.fromEquirectangular(f):n.fromCubemap(f),_.texture.pmremVersion=f.pmremVersion,t.set(f,_),f.addEventListener("dispose",o),_.texture):null}}}return f}function r(f){let p=0;const h=6;for(let g=0;g<h;g++)f[g]!==void 0&&p++;return p===h}function o(f){const p=f.target;p.removeEventListener("dispose",o);const h=t.get(p);h!==void 0&&(t.delete(p),h.dispose())}function u(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:u}}function oR(c){const t={};function n(a){if(t[a]!==void 0)return t[a];const r=c.getExtension(a);return t[a]=r,r}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const r=n(a);return r===null&&zl("WebGLRenderer: "+a+" extension not supported."),r}}}function lR(c,t,n,a){const r={},o=new WeakMap;function u(_){const v=_.target;v.index!==null&&t.remove(v.index);for(const M in v.attributes)t.remove(v.attributes[M]);v.removeEventListener("dispose",u),delete r[v.id];const y=o.get(v);y&&(t.remove(y),o.delete(v)),a.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function f(_,v){return r[v.id]===!0||(v.addEventListener("dispose",u),r[v.id]=!0,n.memory.geometries++),v}function p(_){const v=_.attributes;for(const y in v)t.update(v[y],c.ARRAY_BUFFER)}function h(_){const v=[],y=_.index,M=_.attributes.position;let b=0;if(y!==null){const T=y.array;b=y.version;for(let C=0,N=T.length;C<N;C+=3){const U=T[C+0],P=T[C+1],B=T[C+2];v.push(U,P,P,B,B,U)}}else if(M!==void 0){const T=M.array;b=M.version;for(let C=0,N=T.length/3-1;C<N;C+=3){const U=C+0,P=C+1,B=C+2;v.push(U,P,P,B,B,U)}}else return;const S=new(Hx(v)?Wx:Xx)(v,1);S.version=b;const x=o.get(_);x&&t.remove(x),o.set(_,S)}function g(_){const v=o.get(_);if(v){const y=_.index;y!==null&&v.version<y.version&&h(_)}else h(_);return o.get(_)}return{get:f,update:p,getWireframeAttribute:g}}function cR(c,t,n){let a;function r(v){a=v}let o,u;function f(v){o=v.type,u=v.bytesPerElement}function p(v,y){c.drawElements(a,y,o,v*u),n.update(y,a,1)}function h(v,y,M){M!==0&&(c.drawElementsInstanced(a,y,o,v*u,M),n.update(y,a,M))}function g(v,y,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,y,0,o,v,0,M);let S=0;for(let x=0;x<M;x++)S+=y[x];n.update(S,a,1)}function _(v,y,M,b){if(M===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<v.length;x++)h(v[x]/u,y[x],b[x]);else{S.multiDrawElementsInstancedWEBGL(a,y,0,o,v,0,b,0,M);let x=0;for(let T=0;T<M;T++)x+=y[T]*b[T];n.update(x,a,1)}}this.setMode=r,this.setIndex=f,this.render=p,this.renderInstances=h,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function uR(c){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(o,u,f){switch(n.calls++,u){case c.TRIANGLES:n.triangles+=f*(o/3);break;case c.LINES:n.lines+=f*(o/2);break;case c.LINE_STRIP:n.lines+=f*(o-1);break;case c.LINE_LOOP:n.lines+=f*o;break;case c.POINTS:n.points+=f*o;break;default:Fe("WebGLInfo: Unknown draw mode:",u);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:r,update:a}}function fR(c,t,n){const a=new WeakMap,r=new Sn;function o(u,f,p){const h=u.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=g!==void 0?g.length:0;let v=a.get(f);if(v===void 0||v.count!==_){let O=function(){X.dispose(),a.delete(f),f.removeEventListener("dispose",O)};var y=O;v!==void 0&&v.texture.dispose();const M=f.morphAttributes.position!==void 0,b=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,x=f.morphAttributes.position||[],T=f.morphAttributes.normal||[],C=f.morphAttributes.color||[];let N=0;M===!0&&(N=1),b===!0&&(N=2),S===!0&&(N=3);let U=f.attributes.position.count*N,P=1;U>t.maxTextureSize&&(P=Math.ceil(U/t.maxTextureSize),U=t.maxTextureSize);const B=new Float32Array(U*P*4*_),X=new Gx(B,U,P,_);X.type=ca,X.needsUpdate=!0;const w=N*4;for(let H=0;H<_;H++){const $=x[H],V=T[H],K=C[H],W=U*P*4*H;for(let z=0;z<$.count;z++){const G=z*w;M===!0&&(r.fromBufferAttribute($,z),B[W+G+0]=r.x,B[W+G+1]=r.y,B[W+G+2]=r.z,B[W+G+3]=0),b===!0&&(r.fromBufferAttribute(V,z),B[W+G+4]=r.x,B[W+G+5]=r.y,B[W+G+6]=r.z,B[W+G+7]=0),S===!0&&(r.fromBufferAttribute(K,z),B[W+G+8]=r.x,B[W+G+9]=r.y,B[W+G+10]=r.z,B[W+G+11]=K.itemSize===4?r.w:1)}}v={count:_,texture:X,size:new qe(U,P)},a.set(f,v),f.addEventListener("dispose",O)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(c,"morphTexture",u.morphTexture,n);else{let M=0;for(let S=0;S<h.length;S++)M+=h[S];const b=f.morphTargetsRelative?1:1-M;p.getUniforms().setValue(c,"morphTargetBaseInfluence",b),p.getUniforms().setValue(c,"morphTargetInfluences",h)}p.getUniforms().setValue(c,"morphTargetsTexture",v.texture,n),p.getUniforms().setValue(c,"morphTargetsTextureSize",v.size)}return{update:o}}function hR(c,t,n,a){let r=new WeakMap;function o(p){const h=a.render.frame,g=p.geometry,_=t.get(p,g);if(r.get(_)!==h&&(t.update(_),r.set(_,h)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),r.get(p)!==h&&(n.update(p.instanceMatrix,c.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,c.ARRAY_BUFFER),r.set(p,h))),p.isSkinnedMesh){const v=p.skeleton;r.get(v)!==h&&(v.update(),r.set(v,h))}return _}function u(){r=new WeakMap}function f(p){const h=p.target;h.removeEventListener("dispose",f),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:o,dispose:u}}const dR={[bx]:"LINEAR_TONE_MAPPING",[Tx]:"REINHARD_TONE_MAPPING",[Ax]:"CINEON_TONE_MAPPING",[wx]:"ACES_FILMIC_TONE_MAPPING",[Cx]:"AGX_TONE_MAPPING",[Dx]:"NEUTRAL_TONE_MAPPING",[Rx]:"CUSTOM_TONE_MAPPING"};function pR(c,t,n,a,r){const o=new ha(t,n,{type:c,depthBuffer:a,stencilBuffer:r}),u=new ha(t,n,{type:Ja,depthBuffer:!1,stencilBuffer:!1}),f=new ts;f.setAttribute("position",new Qa([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new Qa([0,2,0,0,2,0],2));const p=new i1({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Qi(f,p),g=new zu(-1,1,1,-1,0,1);let _=null,v=null,y=!1,M,b=null,S=[],x=!1;this.setSize=function(T,C){o.setSize(T,C),u.setSize(T,C);for(let N=0;N<S.length;N++){const U=S[N];U.setSize&&U.setSize(T,C)}},this.setEffects=function(T){S=T,x=S.length>0&&S[0].isRenderPass===!0;const C=o.width,N=o.height;for(let U=0;U<S.length;U++){const P=S[U];P.setSize&&P.setSize(C,N)}},this.begin=function(T,C){if(y||T.toneMapping===Ki&&S.length===0)return!1;if(b=C,C!==null){const N=C.width,U=C.height;(o.width!==N||o.height!==U)&&this.setSize(N,U)}return x===!1&&T.setRenderTarget(o),M=T.toneMapping,T.toneMapping=Ki,!0},this.hasRenderPass=function(){return x},this.end=function(T,C){T.toneMapping=M,y=!0;let N=o,U=u;for(let P=0;P<S.length;P++){const B=S[P];if(B.enabled!==!1&&(B.render(T,U,N,C),B.needsSwap!==!1)){const X=N;N=U,U=X}}if(_!==T.outputColorSpace||v!==T.toneMapping){_=T.outputColorSpace,v=T.toneMapping,p.defines={},Ie.getTransfer(_)===tn&&(p.defines.SRGB_TRANSFER="");const P=dR[v];P&&(p.defines[P]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=N.texture,T.setRenderTarget(b),T.render(h,g),b=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){o.dispose(),u.dispose(),f.dispose(),p.dispose()}}const ty=new $n,Rp=new Pl(1,1),ey=new Gx,ny=new UT,iy=new Zx,k_=[],q_=[],X_=new Float32Array(16),W_=new Float32Array(9),Y_=new Float32Array(4);function Ro(c,t,n){const a=c[0];if(a<=0||a>0)return c;const r=t*n;let o=k_[r];if(o===void 0&&(o=new Float32Array(r),k_[r]=o),t!==0){a.toArray(o,0);for(let u=1,f=0;u!==t;++u)f+=n,c[u].toArray(o,f)}return o}function Un(c,t){if(c.length!==t.length)return!1;for(let n=0,a=c.length;n<a;n++)if(c[n]!==t[n])return!1;return!0}function On(c,t){for(let n=0,a=t.length;n<a;n++)c[n]=t[n]}function Bu(c,t){let n=q_[t];n===void 0&&(n=new Int32Array(t),q_[t]=n);for(let a=0;a!==t;++a)n[a]=c.allocateTextureUnit();return n}function mR(c,t){const n=this.cache;n[0]!==t&&(c.uniform1f(this.addr,t),n[0]=t)}function gR(c,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(c.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Un(n,t))return;c.uniform2fv(this.addr,t),On(n,t)}}function vR(c,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(c.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(c.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Un(n,t))return;c.uniform3fv(this.addr,t),On(n,t)}}function _R(c,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(c.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Un(n,t))return;c.uniform4fv(this.addr,t),On(n,t)}}function xR(c,t){const n=this.cache,a=t.elements;if(a===void 0){if(Un(n,t))return;c.uniformMatrix2fv(this.addr,!1,t),On(n,t)}else{if(Un(n,a))return;Y_.set(a),c.uniformMatrix2fv(this.addr,!1,Y_),On(n,a)}}function yR(c,t){const n=this.cache,a=t.elements;if(a===void 0){if(Un(n,t))return;c.uniformMatrix3fv(this.addr,!1,t),On(n,t)}else{if(Un(n,a))return;W_.set(a),c.uniformMatrix3fv(this.addr,!1,W_),On(n,a)}}function SR(c,t){const n=this.cache,a=t.elements;if(a===void 0){if(Un(n,t))return;c.uniformMatrix4fv(this.addr,!1,t),On(n,t)}else{if(Un(n,a))return;X_.set(a),c.uniformMatrix4fv(this.addr,!1,X_),On(n,a)}}function MR(c,t){const n=this.cache;n[0]!==t&&(c.uniform1i(this.addr,t),n[0]=t)}function ER(c,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(c.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Un(n,t))return;c.uniform2iv(this.addr,t),On(n,t)}}function bR(c,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(c.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Un(n,t))return;c.uniform3iv(this.addr,t),On(n,t)}}function TR(c,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(c.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Un(n,t))return;c.uniform4iv(this.addr,t),On(n,t)}}function AR(c,t){const n=this.cache;n[0]!==t&&(c.uniform1ui(this.addr,t),n[0]=t)}function wR(c,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(c.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Un(n,t))return;c.uniform2uiv(this.addr,t),On(n,t)}}function RR(c,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(c.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Un(n,t))return;c.uniform3uiv(this.addr,t),On(n,t)}}function CR(c,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(c.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Un(n,t))return;c.uniform4uiv(this.addr,t),On(n,t)}}function DR(c,t,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(c.uniform1i(this.addr,r),a[0]=r);let o;this.type===c.SAMPLER_2D_SHADOW?(Rp.compareFunction=n.isReversedDepthBuffer()?Vp:Gp,o=Rp):o=ty,n.setTexture2D(t||o,r)}function NR(c,t,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(c.uniform1i(this.addr,r),a[0]=r),n.setTexture3D(t||ny,r)}function LR(c,t,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(c.uniform1i(this.addr,r),a[0]=r),n.setTextureCube(t||iy,r)}function UR(c,t,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(c.uniform1i(this.addr,r),a[0]=r),n.setTexture2DArray(t||ey,r)}function OR(c){switch(c){case 5126:return mR;case 35664:return gR;case 35665:return vR;case 35666:return _R;case 35674:return xR;case 35675:return yR;case 35676:return SR;case 5124:case 35670:return MR;case 35667:case 35671:return ER;case 35668:case 35672:return bR;case 35669:case 35673:return TR;case 5125:return AR;case 36294:return wR;case 36295:return RR;case 36296:return CR;case 35678:case 36198:case 36298:case 36306:case 35682:return DR;case 35679:case 36299:case 36307:return NR;case 35680:case 36300:case 36308:case 36293:return LR;case 36289:case 36303:case 36311:case 36292:return UR}}function zR(c,t){c.uniform1fv(this.addr,t)}function PR(c,t){const n=Ro(t,this.size,2);c.uniform2fv(this.addr,n)}function BR(c,t){const n=Ro(t,this.size,3);c.uniform3fv(this.addr,n)}function FR(c,t){const n=Ro(t,this.size,4);c.uniform4fv(this.addr,n)}function IR(c,t){const n=Ro(t,this.size,4);c.uniformMatrix2fv(this.addr,!1,n)}function HR(c,t){const n=Ro(t,this.size,9);c.uniformMatrix3fv(this.addr,!1,n)}function GR(c,t){const n=Ro(t,this.size,16);c.uniformMatrix4fv(this.addr,!1,n)}function VR(c,t){c.uniform1iv(this.addr,t)}function kR(c,t){c.uniform2iv(this.addr,t)}function qR(c,t){c.uniform3iv(this.addr,t)}function XR(c,t){c.uniform4iv(this.addr,t)}function WR(c,t){c.uniform1uiv(this.addr,t)}function YR(c,t){c.uniform2uiv(this.addr,t)}function jR(c,t){c.uniform3uiv(this.addr,t)}function ZR(c,t){c.uniform4uiv(this.addr,t)}function KR(c,t,n){const a=this.cache,r=t.length,o=Bu(n,r);Un(a,o)||(c.uniform1iv(this.addr,o),On(a,o));let u;this.type===c.SAMPLER_2D_SHADOW?u=Rp:u=ty;for(let f=0;f!==r;++f)n.setTexture2D(t[f]||u,o[f])}function QR(c,t,n){const a=this.cache,r=t.length,o=Bu(n,r);Un(a,o)||(c.uniform1iv(this.addr,o),On(a,o));for(let u=0;u!==r;++u)n.setTexture3D(t[u]||ny,o[u])}function JR(c,t,n){const a=this.cache,r=t.length,o=Bu(n,r);Un(a,o)||(c.uniform1iv(this.addr,o),On(a,o));for(let u=0;u!==r;++u)n.setTextureCube(t[u]||iy,o[u])}function $R(c,t,n){const a=this.cache,r=t.length,o=Bu(n,r);Un(a,o)||(c.uniform1iv(this.addr,o),On(a,o));for(let u=0;u!==r;++u)n.setTexture2DArray(t[u]||ey,o[u])}function tC(c){switch(c){case 5126:return zR;case 35664:return PR;case 35665:return BR;case 35666:return FR;case 35674:return IR;case 35675:return HR;case 35676:return GR;case 5124:case 35670:return VR;case 35667:case 35671:return kR;case 35668:case 35672:return qR;case 35669:case 35673:return XR;case 5125:return WR;case 36294:return YR;case 36295:return jR;case 36296:return ZR;case 35678:case 36198:case 36298:case 36306:case 35682:return KR;case 35679:case 36299:case 36307:return QR;case 35680:case 36300:case 36308:case 36293:return JR;case 36289:case 36303:case 36311:case 36292:return $R}}class eC{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.setValue=OR(n.type)}}class nC{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=tC(n.type)}}class iC{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,a){const r=this.seq;for(let o=0,u=r.length;o!==u;++o){const f=r[o];f.setValue(t,n[f.id],a)}}}const Dd=/(\w+)(\])?(\[|\.)?/g;function j_(c,t){c.seq.push(t),c.map[t.id]=t}function aC(c,t,n){const a=c.name,r=a.length;for(Dd.lastIndex=0;;){const o=Dd.exec(a),u=Dd.lastIndex;let f=o[1];const p=o[2]==="]",h=o[3];if(p&&(f=f|0),h===void 0||h==="["&&u+2===r){j_(n,h===void 0?new eC(f,c,t):new nC(f,c,t));break}else{let _=n.map[f];_===void 0&&(_=new iC(f),j_(n,_)),n=_}}}class Ru{constructor(t,n){this.seq=[],this.map={};const a=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let u=0;u<a;++u){const f=t.getActiveUniform(n,u),p=t.getUniformLocation(n,f.name);aC(f,p,this)}const r=[],o=[];for(const u of this.seq)u.type===t.SAMPLER_2D_SHADOW||u.type===t.SAMPLER_CUBE_SHADOW||u.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(u):o.push(u);r.length>0&&(this.seq=r.concat(o))}setValue(t,n,a,r){const o=this.map[n];o!==void 0&&o.setValue(t,a,r)}setOptional(t,n,a){const r=n[a];r!==void 0&&this.setValue(t,a,r)}static upload(t,n,a,r){for(let o=0,u=n.length;o!==u;++o){const f=n[o],p=a[f.id];p.needsUpdate!==!1&&f.setValue(t,p.value,r)}}static seqWithValue(t,n){const a=[];for(let r=0,o=t.length;r!==o;++r){const u=t[r];u.id in n&&a.push(u)}return a}}function Z_(c,t,n){const a=c.createShader(t);return c.shaderSource(a,n),c.compileShader(a),a}const sC=37297;let rC=0;function oC(c,t){const n=c.split(`
`),a=[],r=Math.max(t-6,0),o=Math.min(t+6,n.length);for(let u=r;u<o;u++){const f=u+1;a.push(`${f===t?">":" "} ${f}: ${n[u]}`)}return a.join(`
`)}const K_=new ve;function lC(c){Ie._getMatrix(K_,Ie.workingColorSpace,c);const t=`mat3( ${K_.elements.map(n=>n.toFixed(4))} )`;switch(Ie.getTransfer(c)){case Nu:return[t,"LinearTransferOETF"];case tn:return[t,"sRGBTransferOETF"];default:return pe("WebGLProgram: Unsupported color space: ",c),[t,"LinearTransferOETF"]}}function Q_(c,t,n){const a=c.getShaderParameter(t,c.COMPILE_STATUS),o=(c.getShaderInfoLog(t)||"").trim();if(a&&o==="")return"";const u=/ERROR: 0:(\d+)/.exec(o);if(u){const f=parseInt(u[1]);return n.toUpperCase()+`

`+o+`

`+oC(c.getShaderSource(t),f)}else return o}function cC(c,t){const n=lC(t);return[`vec4 ${c}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const uC={[bx]:"Linear",[Tx]:"Reinhard",[Ax]:"Cineon",[wx]:"ACESFilmic",[Cx]:"AgX",[Dx]:"Neutral",[Rx]:"Custom"};function fC(c,t){const n=uC[t];return n===void 0?(pe("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+c+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+c+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Mu=new lt;function hC(){Ie.getLuminanceCoefficients(Mu);const c=Mu.x.toFixed(4),t=Mu.y.toFixed(4),n=Mu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${c}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dC(c){return[c.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",c.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Nl).join(`
`)}function pC(c){const t=[];for(const n in c){const a=c[n];a!==!1&&t.push("#define "+n+" "+a)}return t.join(`
`)}function mC(c,t){const n={},a=c.getProgramParameter(t,c.ACTIVE_ATTRIBUTES);for(let r=0;r<a;r++){const o=c.getActiveAttrib(t,r),u=o.name;let f=1;o.type===c.FLOAT_MAT2&&(f=2),o.type===c.FLOAT_MAT3&&(f=3),o.type===c.FLOAT_MAT4&&(f=4),n[u]={type:o.type,location:c.getAttribLocation(t,u),locationSize:f}}return n}function Nl(c){return c!==""}function J_(c,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return c.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $_(c,t){return c.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const gC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cp(c){return c.replace(gC,_C)}const vC=new Map;function _C(c,t){let n=Me[t];if(n===void 0){const a=vC.get(t);if(a!==void 0)n=Me[a],pe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return Cp(n)}const xC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tx(c){return c.replace(xC,yC)}function yC(c,t,n,a){let r="";for(let o=parseInt(t);o<parseInt(n);o++)r+=a.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function ex(c){let t=`precision ${c.precision} float;
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
#define LOW_PRECISION`),t}const SC={[Eu]:"SHADOWMAP_TYPE_PCF",[Dl]:"SHADOWMAP_TYPE_VSM"};function MC(c){return SC[c.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const EC={[_r]:"ENVMAP_TYPE_CUBE",[Mo]:"ENVMAP_TYPE_CUBE",[Ou]:"ENVMAP_TYPE_CUBE_UV"};function bC(c){return c.envMap===!1?"ENVMAP_TYPE_CUBE":EC[c.envMapMode]||"ENVMAP_TYPE_CUBE"}const TC={[Mo]:"ENVMAP_MODE_REFRACTION"};function AC(c){return c.envMap===!1?"ENVMAP_MODE_REFLECTION":TC[c.envMapMode]||"ENVMAP_MODE_REFLECTION"}const wC={[Ex]:"ENVMAP_BLENDING_MULTIPLY",[pT]:"ENVMAP_BLENDING_MIX",[mT]:"ENVMAP_BLENDING_ADD"};function RC(c){return c.envMap===!1?"ENVMAP_BLENDING_NONE":wC[c.combine]||"ENVMAP_BLENDING_NONE"}function CC(c){const t=c.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function DC(c,t,n,a){const r=c.getContext(),o=n.defines;let u=n.vertexShader,f=n.fragmentShader;const p=MC(n),h=bC(n),g=AC(n),_=RC(n),v=CC(n),y=dC(n),M=pC(o),b=r.createProgram();let S,x,T=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(Nl).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(Nl).join(`
`),x.length>0&&(x+=`
`)):(S=[ex(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Nl).join(`
`),x=[ex(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ki?"#define TONE_MAPPING":"",n.toneMapping!==Ki?Me.tonemapping_pars_fragment:"",n.toneMapping!==Ki?fC("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Me.colorspace_pars_fragment,cC("linearToOutputTexel",n.outputColorSpace),hC(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Nl).join(`
`)),u=Cp(u),u=J_(u,n),u=$_(u,n),f=Cp(f),f=J_(f,n),f=$_(f,n),u=tx(u),f=tx(f),n.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",n.glslVersion===f_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===f_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const C=T+S+u,N=T+x+f,U=Z_(r,r.VERTEX_SHADER,C),P=Z_(r,r.FRAGMENT_SHADER,N);r.attachShader(b,U),r.attachShader(b,P),n.index0AttributeName!==void 0?r.bindAttribLocation(b,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function B(H){if(c.debug.checkShaderErrors){const $=r.getProgramInfoLog(b)||"",V=r.getShaderInfoLog(U)||"",K=r.getShaderInfoLog(P)||"",W=$.trim(),z=V.trim(),G=K.trim();let J=!0,ft=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(J=!1,typeof c.debug.onShaderError=="function")c.debug.onShaderError(r,b,U,P);else{const vt=Q_(r,U,"vertex"),I=Q_(r,P,"fragment");Fe("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+W+`
`+vt+`
`+I)}else W!==""?pe("WebGLProgram: Program Info Log:",W):(z===""||G==="")&&(ft=!1);ft&&(H.diagnostics={runnable:J,programLog:W,vertexShader:{log:z,prefix:S},fragmentShader:{log:G,prefix:x}})}r.deleteShader(U),r.deleteShader(P),X=new Ru(r,b),w=mC(r,b)}let X;this.getUniforms=function(){return X===void 0&&B(this),X};let w;this.getAttributes=function(){return w===void 0&&B(this),w};let O=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=r.getProgramParameter(b,sC)),O},this.destroy=function(){a.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=rC++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=U,this.fragmentShader=P,this}let NC=0;class LC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,a=t.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(a),u=this._getShaderCacheForMaterial(t);return u.has(r)===!1&&(u.add(r),r.usedTimes++),u.has(o)===!1&&(u.add(o),o.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let a=n.get(t);return a===void 0&&(a=new Set,n.set(t,a)),a}_getShaderStage(t){const n=this.shaderCache;let a=n.get(t);return a===void 0&&(a=new UC(t),n.set(t,a)),a}}class UC{constructor(t){this.id=NC++,this.code=t,this.usedTimes=0}}function OC(c,t,n,a,r,o,u){const f=new Xp,p=new LC,h=new Set,g=[],_=new Map,v=r.logarithmicDepthBuffer;let y=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(w){return h.add(w),w===0?"uv":`uv${w}`}function S(w,O,H,$,V){const K=$.fog,W=V.geometry,z=w.isMeshStandardMaterial?$.environment:null,G=(w.isMeshStandardMaterial?n:t).get(w.envMap||z),J=G&&G.mapping===Ou?G.image.height:null,ft=M[w.type];w.precision!==null&&(y=r.getMaxPrecision(w.precision),y!==w.precision&&pe("WebGLProgram.getParameters:",w.precision,"not supported, using",y,"instead."));const vt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,I=vt!==void 0?vt.length:0;let j=0;W.morphAttributes.position!==void 0&&(j=1),W.morphAttributes.normal!==void 0&&(j=2),W.morphAttributes.color!==void 0&&(j=3);let _t,At,Ot,at;if(ft){const Te=la[ft];_t=Te.vertexShader,At=Te.fragmentShader}else _t=w.vertexShader,At=w.fragmentShader,p.update(w),Ot=p.getVertexShaderID(w),at=p.getFragmentShaderID(w);const dt=c.getRenderTarget(),Ut=c.state.buffers.depth.getReversed(),Yt=V.isInstancedMesh===!0,Xt=V.isBatchedMesh===!0,Ee=!!w.map,Ke=!!w.matcap,_e=!!G,be=!!w.aoMap,Pe=!!w.lightMap,Bt=!!w.bumpMap,xe=!!w.normalMap,k=!!w.displacementMap,Ne=!!w.emissiveMap,ye=!!w.metalnessMap,ue=!!w.roughnessMap,Ht=w.anisotropy>0,F=w.clearcoat>0,A=w.dispersion>0,Q=w.iridescence>0,pt=w.sheen>0,gt=w.transmission>0,ht=Ht&&!!w.anisotropyMap,Zt=F&&!!w.clearcoatMap,Nt=F&&!!w.clearcoatNormalMap,Kt=F&&!!w.clearcoatRoughnessMap,se=Q&&!!w.iridescenceMap,bt=Q&&!!w.iridescenceThicknessMap,Mt=pt&&!!w.sheenColorMap,It=pt&&!!w.sheenRoughnessMap,Gt=!!w.specularMap,Dt=!!w.specularColorMap,fe=!!w.specularIntensityMap,Z=gt&&!!w.transmissionMap,zt=gt&&!!w.thicknessMap,Tt=!!w.gradientMap,Ft=!!w.alphaMap,Et=w.alphaTest>0,yt=!!w.alphaHash,Ct=!!w.extensions;let re=Ki;w.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(re=c.toneMapping);const ze={shaderID:ft,shaderType:w.type,shaderName:w.name,vertexShader:_t,fragmentShader:At,defines:w.defines,customVertexShaderID:Ot,customFragmentShaderID:at,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:y,batching:Xt,batchingColor:Xt&&V._colorsTexture!==null,instancing:Yt,instancingColor:Yt&&V.instanceColor!==null,instancingMorph:Yt&&V.morphTexture!==null,outputColorSpace:dt===null?c.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:bo,alphaToCoverage:!!w.alphaToCoverage,map:Ee,matcap:Ke,envMap:_e,envMapMode:_e&&G.mapping,envMapCubeUVHeight:J,aoMap:be,lightMap:Pe,bumpMap:Bt,normalMap:xe,displacementMap:k,emissiveMap:Ne,normalMapObjectSpace:xe&&w.normalMapType===_T,normalMapTangentSpace:xe&&w.normalMapType===Ix,metalnessMap:ye,roughnessMap:ue,anisotropy:Ht,anisotropyMap:ht,clearcoat:F,clearcoatMap:Zt,clearcoatNormalMap:Nt,clearcoatRoughnessMap:Kt,dispersion:A,iridescence:Q,iridescenceMap:se,iridescenceThicknessMap:bt,sheen:pt,sheenColorMap:Mt,sheenRoughnessMap:It,specularMap:Gt,specularColorMap:Dt,specularIntensityMap:fe,transmission:gt,transmissionMap:Z,thicknessMap:zt,gradientMap:Tt,opaque:w.transparent===!1&&w.blending===_o&&w.alphaToCoverage===!1,alphaMap:Ft,alphaTest:Et,alphaHash:yt,combine:w.combine,mapUv:Ee&&b(w.map.channel),aoMapUv:be&&b(w.aoMap.channel),lightMapUv:Pe&&b(w.lightMap.channel),bumpMapUv:Bt&&b(w.bumpMap.channel),normalMapUv:xe&&b(w.normalMap.channel),displacementMapUv:k&&b(w.displacementMap.channel),emissiveMapUv:Ne&&b(w.emissiveMap.channel),metalnessMapUv:ye&&b(w.metalnessMap.channel),roughnessMapUv:ue&&b(w.roughnessMap.channel),anisotropyMapUv:ht&&b(w.anisotropyMap.channel),clearcoatMapUv:Zt&&b(w.clearcoatMap.channel),clearcoatNormalMapUv:Nt&&b(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Kt&&b(w.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&b(w.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&b(w.iridescenceThicknessMap.channel),sheenColorMapUv:Mt&&b(w.sheenColorMap.channel),sheenRoughnessMapUv:It&&b(w.sheenRoughnessMap.channel),specularMapUv:Gt&&b(w.specularMap.channel),specularColorMapUv:Dt&&b(w.specularColorMap.channel),specularIntensityMapUv:fe&&b(w.specularIntensityMap.channel),transmissionMapUv:Z&&b(w.transmissionMap.channel),thicknessMapUv:zt&&b(w.thicknessMap.channel),alphaMapUv:Ft&&b(w.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(xe||Ht),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!W.attributes.uv&&(Ee||Ft),fog:!!K,useFog:w.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ut,skinning:V.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:j,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:w.dithering,shadowMapEnabled:c.shadowMap.enabled&&H.length>0,shadowMapType:c.shadowMap.type,toneMapping:re,decodeVideoTexture:Ee&&w.map.isVideoTexture===!0&&Ie.getTransfer(w.map.colorSpace)===tn,decodeVideoTextureEmissive:Ne&&w.emissiveMap.isVideoTexture===!0&&Ie.getTransfer(w.emissiveMap.colorSpace)===tn,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ya,flipSided:w.side===mi,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ct&&w.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ct&&w.extensions.multiDraw===!0||Xt)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return ze.vertexUv1s=h.has(1),ze.vertexUv2s=h.has(2),ze.vertexUv3s=h.has(3),h.clear(),ze}function x(w){const O=[];if(w.shaderID?O.push(w.shaderID):(O.push(w.customVertexShaderID),O.push(w.customFragmentShaderID)),w.defines!==void 0)for(const H in w.defines)O.push(H),O.push(w.defines[H]);return w.isRawShaderMaterial===!1&&(T(O,w),C(O,w),O.push(c.outputColorSpace)),O.push(w.customProgramCacheKey),O.join()}function T(w,O){w.push(O.precision),w.push(O.outputColorSpace),w.push(O.envMapMode),w.push(O.envMapCubeUVHeight),w.push(O.mapUv),w.push(O.alphaMapUv),w.push(O.lightMapUv),w.push(O.aoMapUv),w.push(O.bumpMapUv),w.push(O.normalMapUv),w.push(O.displacementMapUv),w.push(O.emissiveMapUv),w.push(O.metalnessMapUv),w.push(O.roughnessMapUv),w.push(O.anisotropyMapUv),w.push(O.clearcoatMapUv),w.push(O.clearcoatNormalMapUv),w.push(O.clearcoatRoughnessMapUv),w.push(O.iridescenceMapUv),w.push(O.iridescenceThicknessMapUv),w.push(O.sheenColorMapUv),w.push(O.sheenRoughnessMapUv),w.push(O.specularMapUv),w.push(O.specularColorMapUv),w.push(O.specularIntensityMapUv),w.push(O.transmissionMapUv),w.push(O.thicknessMapUv),w.push(O.combine),w.push(O.fogExp2),w.push(O.sizeAttenuation),w.push(O.morphTargetsCount),w.push(O.morphAttributeCount),w.push(O.numDirLights),w.push(O.numPointLights),w.push(O.numSpotLights),w.push(O.numSpotLightMaps),w.push(O.numHemiLights),w.push(O.numRectAreaLights),w.push(O.numDirLightShadows),w.push(O.numPointLightShadows),w.push(O.numSpotLightShadows),w.push(O.numSpotLightShadowsWithMaps),w.push(O.numLightProbes),w.push(O.shadowMapType),w.push(O.toneMapping),w.push(O.numClippingPlanes),w.push(O.numClipIntersection),w.push(O.depthPacking)}function C(w,O){f.disableAll(),O.instancing&&f.enable(0),O.instancingColor&&f.enable(1),O.instancingMorph&&f.enable(2),O.matcap&&f.enable(3),O.envMap&&f.enable(4),O.normalMapObjectSpace&&f.enable(5),O.normalMapTangentSpace&&f.enable(6),O.clearcoat&&f.enable(7),O.iridescence&&f.enable(8),O.alphaTest&&f.enable(9),O.vertexColors&&f.enable(10),O.vertexAlphas&&f.enable(11),O.vertexUv1s&&f.enable(12),O.vertexUv2s&&f.enable(13),O.vertexUv3s&&f.enable(14),O.vertexTangents&&f.enable(15),O.anisotropy&&f.enable(16),O.alphaHash&&f.enable(17),O.batching&&f.enable(18),O.dispersion&&f.enable(19),O.batchingColor&&f.enable(20),O.gradientMap&&f.enable(21),w.push(f.mask),f.disableAll(),O.fog&&f.enable(0),O.useFog&&f.enable(1),O.flatShading&&f.enable(2),O.logarithmicDepthBuffer&&f.enable(3),O.reversedDepthBuffer&&f.enable(4),O.skinning&&f.enable(5),O.morphTargets&&f.enable(6),O.morphNormals&&f.enable(7),O.morphColors&&f.enable(8),O.premultipliedAlpha&&f.enable(9),O.shadowMapEnabled&&f.enable(10),O.doubleSided&&f.enable(11),O.flipSided&&f.enable(12),O.useDepthPacking&&f.enable(13),O.dithering&&f.enable(14),O.transmission&&f.enable(15),O.sheen&&f.enable(16),O.opaque&&f.enable(17),O.pointsUvs&&f.enable(18),O.decodeVideoTexture&&f.enable(19),O.decodeVideoTextureEmissive&&f.enable(20),O.alphaToCoverage&&f.enable(21),w.push(f.mask)}function N(w){const O=M[w.type];let H;if(O){const $=la[O];H=WT.clone($.uniforms)}else H=w.uniforms;return H}function U(w,O){let H=_.get(O);return H!==void 0?++H.usedTimes:(H=new DC(c,O,w,o),g.push(H),_.set(O,H)),H}function P(w){if(--w.usedTimes===0){const O=g.indexOf(w);g[O]=g[g.length-1],g.pop(),_.delete(w.cacheKey),w.destroy()}}function B(w){p.remove(w)}function X(){p.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:N,acquireProgram:U,releaseProgram:P,releaseShaderCache:B,programs:g,dispose:X}}function zC(){let c=new WeakMap;function t(u){return c.has(u)}function n(u){let f=c.get(u);return f===void 0&&(f={},c.set(u,f)),f}function a(u){c.delete(u)}function r(u,f,p){c.get(u)[f]=p}function o(){c=new WeakMap}return{has:t,get:n,remove:a,update:r,dispose:o}}function PC(c,t){return c.groupOrder!==t.groupOrder?c.groupOrder-t.groupOrder:c.renderOrder!==t.renderOrder?c.renderOrder-t.renderOrder:c.material.id!==t.material.id?c.material.id-t.material.id:c.z!==t.z?c.z-t.z:c.id-t.id}function nx(c,t){return c.groupOrder!==t.groupOrder?c.groupOrder-t.groupOrder:c.renderOrder!==t.renderOrder?c.renderOrder-t.renderOrder:c.z!==t.z?t.z-c.z:c.id-t.id}function ix(){const c=[];let t=0;const n=[],a=[],r=[];function o(){t=0,n.length=0,a.length=0,r.length=0}function u(_,v,y,M,b,S){let x=c[t];return x===void 0?(x={id:_.id,object:_,geometry:v,material:y,groupOrder:M,renderOrder:_.renderOrder,z:b,group:S},c[t]=x):(x.id=_.id,x.object=_,x.geometry=v,x.material=y,x.groupOrder=M,x.renderOrder=_.renderOrder,x.z=b,x.group=S),t++,x}function f(_,v,y,M,b,S){const x=u(_,v,y,M,b,S);y.transmission>0?a.push(x):y.transparent===!0?r.push(x):n.push(x)}function p(_,v,y,M,b,S){const x=u(_,v,y,M,b,S);y.transmission>0?a.unshift(x):y.transparent===!0?r.unshift(x):n.unshift(x)}function h(_,v){n.length>1&&n.sort(_||PC),a.length>1&&a.sort(v||nx),r.length>1&&r.sort(v||nx)}function g(){for(let _=t,v=c.length;_<v;_++){const y=c[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:a,transparent:r,init:o,push:f,unshift:p,finish:g,sort:h}}function BC(){let c=new WeakMap;function t(a,r){const o=c.get(a);let u;return o===void 0?(u=new ix,c.set(a,[u])):r>=o.length?(u=new ix,o.push(u)):u=o[r],u}function n(){c=new WeakMap}return{get:t,dispose:n}}function FC(){const c={};return{get:function(t){if(c[t.id]!==void 0)return c[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new lt,color:new ke};break;case"SpotLight":n={position:new lt,direction:new lt,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new lt,color:new ke,distance:0,decay:0};break;case"HemisphereLight":n={direction:new lt,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":n={color:new ke,position:new lt,halfWidth:new lt,halfHeight:new lt};break}return c[t.id]=n,n}}}function IC(){const c={};return{get:function(t){if(c[t.id]!==void 0)return c[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return c[t.id]=n,n}}}let HC=0;function GC(c,t){return(t.castShadow?2:0)-(c.castShadow?2:0)+(t.map?1:0)-(c.map?1:0)}function VC(c){const t=new FC,n=IC(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)a.probe.push(new lt);const r=new lt,o=new pn,u=new pn;function f(h){let g=0,_=0,v=0;for(let w=0;w<9;w++)a.probe[w].set(0,0,0);let y=0,M=0,b=0,S=0,x=0,T=0,C=0,N=0,U=0,P=0,B=0;h.sort(GC);for(let w=0,O=h.length;w<O;w++){const H=h[w],$=H.color,V=H.intensity,K=H.distance;let W=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===Eo?W=H.shadow.map.texture:W=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)g+=$.r*V,_+=$.g*V,v+=$.b*V;else if(H.isLightProbe){for(let z=0;z<9;z++)a.probe[z].addScaledVector(H.sh.coefficients[z],V);B++}else if(H.isDirectionalLight){const z=t.get(H);if(z.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const G=H.shadow,J=n.get(H);J.shadowIntensity=G.intensity,J.shadowBias=G.bias,J.shadowNormalBias=G.normalBias,J.shadowRadius=G.radius,J.shadowMapSize=G.mapSize,a.directionalShadow[y]=J,a.directionalShadowMap[y]=W,a.directionalShadowMatrix[y]=H.shadow.matrix,T++}a.directional[y]=z,y++}else if(H.isSpotLight){const z=t.get(H);z.position.setFromMatrixPosition(H.matrixWorld),z.color.copy($).multiplyScalar(V),z.distance=K,z.coneCos=Math.cos(H.angle),z.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),z.decay=H.decay,a.spot[b]=z;const G=H.shadow;if(H.map&&(a.spotLightMap[U]=H.map,U++,G.updateMatrices(H),H.castShadow&&P++),a.spotLightMatrix[b]=G.matrix,H.castShadow){const J=n.get(H);J.shadowIntensity=G.intensity,J.shadowBias=G.bias,J.shadowNormalBias=G.normalBias,J.shadowRadius=G.radius,J.shadowMapSize=G.mapSize,a.spotShadow[b]=J,a.spotShadowMap[b]=W,N++}b++}else if(H.isRectAreaLight){const z=t.get(H);z.color.copy($).multiplyScalar(V),z.halfWidth.set(H.width*.5,0,0),z.halfHeight.set(0,H.height*.5,0),a.rectArea[S]=z,S++}else if(H.isPointLight){const z=t.get(H);if(z.color.copy(H.color).multiplyScalar(H.intensity),z.distance=H.distance,z.decay=H.decay,H.castShadow){const G=H.shadow,J=n.get(H);J.shadowIntensity=G.intensity,J.shadowBias=G.bias,J.shadowNormalBias=G.normalBias,J.shadowRadius=G.radius,J.shadowMapSize=G.mapSize,J.shadowCameraNear=G.camera.near,J.shadowCameraFar=G.camera.far,a.pointShadow[M]=J,a.pointShadowMap[M]=W,a.pointShadowMatrix[M]=H.shadow.matrix,C++}a.point[M]=z,M++}else if(H.isHemisphereLight){const z=t.get(H);z.skyColor.copy(H.color).multiplyScalar(V),z.groundColor.copy(H.groundColor).multiplyScalar(V),a.hemi[x]=z,x++}}S>0&&(c.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Vt.LTC_FLOAT_1,a.rectAreaLTC2=Vt.LTC_FLOAT_2):(a.rectAreaLTC1=Vt.LTC_HALF_1,a.rectAreaLTC2=Vt.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=_,a.ambient[2]=v;const X=a.hash;(X.directionalLength!==y||X.pointLength!==M||X.spotLength!==b||X.rectAreaLength!==S||X.hemiLength!==x||X.numDirectionalShadows!==T||X.numPointShadows!==C||X.numSpotShadows!==N||X.numSpotMaps!==U||X.numLightProbes!==B)&&(a.directional.length=y,a.spot.length=b,a.rectArea.length=S,a.point.length=M,a.hemi.length=x,a.directionalShadow.length=T,a.directionalShadowMap.length=T,a.pointShadow.length=C,a.pointShadowMap.length=C,a.spotShadow.length=N,a.spotShadowMap.length=N,a.directionalShadowMatrix.length=T,a.pointShadowMatrix.length=C,a.spotLightMatrix.length=N+U-P,a.spotLightMap.length=U,a.numSpotLightShadowsWithMaps=P,a.numLightProbes=B,X.directionalLength=y,X.pointLength=M,X.spotLength=b,X.rectAreaLength=S,X.hemiLength=x,X.numDirectionalShadows=T,X.numPointShadows=C,X.numSpotShadows=N,X.numSpotMaps=U,X.numLightProbes=B,a.version=HC++)}function p(h,g){let _=0,v=0,y=0,M=0,b=0;const S=g.matrixWorldInverse;for(let x=0,T=h.length;x<T;x++){const C=h[x];if(C.isDirectionalLight){const N=a.directional[_];N.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),N.direction.sub(r),N.direction.transformDirection(S),_++}else if(C.isSpotLight){const N=a.spot[y];N.position.setFromMatrixPosition(C.matrixWorld),N.position.applyMatrix4(S),N.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),N.direction.sub(r),N.direction.transformDirection(S),y++}else if(C.isRectAreaLight){const N=a.rectArea[M];N.position.setFromMatrixPosition(C.matrixWorld),N.position.applyMatrix4(S),u.identity(),o.copy(C.matrixWorld),o.premultiply(S),u.extractRotation(o),N.halfWidth.set(C.width*.5,0,0),N.halfHeight.set(0,C.height*.5,0),N.halfWidth.applyMatrix4(u),N.halfHeight.applyMatrix4(u),M++}else if(C.isPointLight){const N=a.point[v];N.position.setFromMatrixPosition(C.matrixWorld),N.position.applyMatrix4(S),v++}else if(C.isHemisphereLight){const N=a.hemi[b];N.direction.setFromMatrixPosition(C.matrixWorld),N.direction.transformDirection(S),b++}}}return{setup:f,setupView:p,state:a}}function ax(c){const t=new VC(c),n=[],a=[];function r(g){h.camera=g,n.length=0,a.length=0}function o(g){n.push(g)}function u(g){a.push(g)}function f(){t.setup(n)}function p(g){t.setupView(n,g)}const h={lightsArray:n,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:h,setupLights:f,setupLightsView:p,pushLight:o,pushShadow:u}}function kC(c){let t=new WeakMap;function n(r,o=0){const u=t.get(r);let f;return u===void 0?(f=new ax(c),t.set(r,[f])):o>=u.length?(f=new ax(c),u.push(f)):f=u[o],f}function a(){t=new WeakMap}return{get:n,dispose:a}}const qC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,XC=`uniform sampler2D shadow_pass;
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
}`,WC=[new lt(1,0,0),new lt(-1,0,0),new lt(0,1,0),new lt(0,-1,0),new lt(0,0,1),new lt(0,0,-1)],YC=[new lt(0,-1,0),new lt(0,-1,0),new lt(0,0,1),new lt(0,0,-1),new lt(0,-1,0),new lt(0,-1,0)],sx=new pn,Rl=new lt,Nd=new lt;function jC(c,t,n){let a=new Wp;const r=new qe,o=new qe,u=new Sn,f=new a1,p=new s1,h={},g=n.maxTextureSize,_={[Bs]:mi,[mi]:Bs,[Ya]:Ya},v=new ga({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:qC,fragmentShader:XC}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const M=new ts;M.setAttribute("position",new da(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Qi(M,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Eu;let x=this.type;this.render=function(P,B,X){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||P.length===0)return;P.type===Mx&&(pe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),P.type=Eu);const w=c.getRenderTarget(),O=c.getActiveCubeFace(),H=c.getActiveMipmapLevel(),$=c.state;$.setBlending(Za),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const V=x!==this.type;V&&B.traverse(function(K){K.material&&(Array.isArray(K.material)?K.material.forEach(W=>W.needsUpdate=!0):K.material.needsUpdate=!0)});for(let K=0,W=P.length;K<W;K++){const z=P[K],G=z.shadow;if(G===void 0){pe("WebGLShadowMap:",z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const J=G.getFrameExtents();if(r.multiply(J),o.copy(G.mapSize),(r.x>g||r.y>g)&&(r.x>g&&(o.x=Math.floor(g/J.x),r.x=o.x*J.x,G.mapSize.x=o.x),r.y>g&&(o.y=Math.floor(g/J.y),r.y=o.y*J.y,G.mapSize.y=o.y)),G.map===null||V===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Dl){if(z.isPointLight){pe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new ha(r.x,r.y,{format:Eo,type:Ja,minFilter:Zn,magFilter:Zn,generateMipmaps:!1}),G.map.texture.name=z.name+".shadowMap",G.map.depthTexture=new Pl(r.x,r.y,ca),G.map.depthTexture.name=z.name+".shadowMapDepth",G.map.depthTexture.format=$a,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=jn,G.map.depthTexture.magFilter=jn}else{z.isPointLight?(G.map=new Kx(r.x),G.map.depthTexture=new n1(r.x,pa)):(G.map=new ha(r.x,r.y),G.map.depthTexture=new Pl(r.x,r.y,pa)),G.map.depthTexture.name=z.name+".shadowMap",G.map.depthTexture.format=$a;const vt=c.state.buffers.depth.getReversed();this.type===Eu?(G.map.depthTexture.compareFunction=vt?Vp:Gp,G.map.depthTexture.minFilter=Zn,G.map.depthTexture.magFilter=Zn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=jn,G.map.depthTexture.magFilter=jn)}G.camera.updateProjectionMatrix()}const ft=G.map.isWebGLCubeRenderTarget?6:1;for(let vt=0;vt<ft;vt++){if(G.map.isWebGLCubeRenderTarget)c.setRenderTarget(G.map,vt),c.clear();else{vt===0&&(c.setRenderTarget(G.map),c.clear());const I=G.getViewport(vt);u.set(o.x*I.x,o.y*I.y,o.x*I.z,o.y*I.w),$.viewport(u)}if(z.isPointLight){const I=G.camera,j=G.matrix,_t=z.distance||I.far;_t!==I.far&&(I.far=_t,I.updateProjectionMatrix()),Rl.setFromMatrixPosition(z.matrixWorld),I.position.copy(Rl),Nd.copy(I.position),Nd.add(WC[vt]),I.up.copy(YC[vt]),I.lookAt(Nd),I.updateMatrixWorld(),j.makeTranslation(-Rl.x,-Rl.y,-Rl.z),sx.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),G._frustum.setFromProjectionMatrix(sx,I.coordinateSystem,I.reversedDepth)}else G.updateMatrices(z);a=G.getFrustum(),N(B,X,G.camera,z,this.type)}G.isPointLightShadow!==!0&&this.type===Dl&&T(G,X),G.needsUpdate=!1}x=this.type,S.needsUpdate=!1,c.setRenderTarget(w,O,H)};function T(P,B){const X=t.update(b);v.defines.VSM_SAMPLES!==P.blurSamples&&(v.defines.VSM_SAMPLES=P.blurSamples,y.defines.VSM_SAMPLES=P.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new ha(r.x,r.y,{format:Eo,type:Ja})),v.uniforms.shadow_pass.value=P.map.depthTexture,v.uniforms.resolution.value=P.mapSize,v.uniforms.radius.value=P.radius,c.setRenderTarget(P.mapPass),c.clear(),c.renderBufferDirect(B,null,X,v,b,null),y.uniforms.shadow_pass.value=P.mapPass.texture,y.uniforms.resolution.value=P.mapSize,y.uniforms.radius.value=P.radius,c.setRenderTarget(P.map),c.clear(),c.renderBufferDirect(B,null,X,y,b,null)}function C(P,B,X,w){let O=null;const H=X.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(H!==void 0)O=H;else if(O=X.isPointLight===!0?p:f,c.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const $=O.uuid,V=B.uuid;let K=h[$];K===void 0&&(K={},h[$]=K);let W=K[V];W===void 0&&(W=O.clone(),K[V]=W,B.addEventListener("dispose",U)),O=W}if(O.visible=B.visible,O.wireframe=B.wireframe,w===Dl?O.side=B.shadowSide!==null?B.shadowSide:B.side:O.side=B.shadowSide!==null?B.shadowSide:_[B.side],O.alphaMap=B.alphaMap,O.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,O.map=B.map,O.clipShadows=B.clipShadows,O.clippingPlanes=B.clippingPlanes,O.clipIntersection=B.clipIntersection,O.displacementMap=B.displacementMap,O.displacementScale=B.displacementScale,O.displacementBias=B.displacementBias,O.wireframeLinewidth=B.wireframeLinewidth,O.linewidth=B.linewidth,X.isPointLight===!0&&O.isMeshDistanceMaterial===!0){const $=c.properties.get(O);$.light=X}return O}function N(P,B,X,w,O){if(P.visible===!1)return;if(P.layers.test(B.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&O===Dl)&&(!P.frustumCulled||a.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,P.matrixWorld);const V=t.update(P),K=P.material;if(Array.isArray(K)){const W=V.groups;for(let z=0,G=W.length;z<G;z++){const J=W[z],ft=K[J.materialIndex];if(ft&&ft.visible){const vt=C(P,ft,w,O);P.onBeforeShadow(c,P,B,X,V,vt,J),c.renderBufferDirect(X,null,V,vt,P,J),P.onAfterShadow(c,P,B,X,V,vt,J)}}}else if(K.visible){const W=C(P,K,w,O);P.onBeforeShadow(c,P,B,X,V,W,null),c.renderBufferDirect(X,null,V,W,P,null),P.onAfterShadow(c,P,B,X,V,W,null)}}const $=P.children;for(let V=0,K=$.length;V<K;V++)N($[V],B,X,w,O)}function U(P){P.target.removeEventListener("dispose",U);for(const X in h){const w=h[X],O=P.target.uuid;O in w&&(w[O].dispose(),delete w[O])}}}const ZC={[Bd]:Fd,[Id]:Vd,[Hd]:kd,[So]:Gd,[Fd]:Bd,[Vd]:Id,[kd]:Hd,[Gd]:So};function KC(c,t){function n(){let Z=!1;const zt=new Sn;let Tt=null;const Ft=new Sn(0,0,0,0);return{setMask:function(Et){Tt!==Et&&!Z&&(c.colorMask(Et,Et,Et,Et),Tt=Et)},setLocked:function(Et){Z=Et},setClear:function(Et,yt,Ct,re,ze){ze===!0&&(Et*=re,yt*=re,Ct*=re),zt.set(Et,yt,Ct,re),Ft.equals(zt)===!1&&(c.clearColor(Et,yt,Ct,re),Ft.copy(zt))},reset:function(){Z=!1,Tt=null,Ft.set(-1,0,0,0)}}}function a(){let Z=!1,zt=!1,Tt=null,Ft=null,Et=null;return{setReversed:function(yt){if(zt!==yt){const Ct=t.get("EXT_clip_control");yt?Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.ZERO_TO_ONE_EXT):Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.NEGATIVE_ONE_TO_ONE_EXT),zt=yt;const re=Et;Et=null,this.setClear(re)}},getReversed:function(){return zt},setTest:function(yt){yt?dt(c.DEPTH_TEST):Ut(c.DEPTH_TEST)},setMask:function(yt){Tt!==yt&&!Z&&(c.depthMask(yt),Tt=yt)},setFunc:function(yt){if(zt&&(yt=ZC[yt]),Ft!==yt){switch(yt){case Bd:c.depthFunc(c.NEVER);break;case Fd:c.depthFunc(c.ALWAYS);break;case Id:c.depthFunc(c.LESS);break;case So:c.depthFunc(c.LEQUAL);break;case Hd:c.depthFunc(c.EQUAL);break;case Gd:c.depthFunc(c.GEQUAL);break;case Vd:c.depthFunc(c.GREATER);break;case kd:c.depthFunc(c.NOTEQUAL);break;default:c.depthFunc(c.LEQUAL)}Ft=yt}},setLocked:function(yt){Z=yt},setClear:function(yt){Et!==yt&&(zt&&(yt=1-yt),c.clearDepth(yt),Et=yt)},reset:function(){Z=!1,Tt=null,Ft=null,Et=null,zt=!1}}}function r(){let Z=!1,zt=null,Tt=null,Ft=null,Et=null,yt=null,Ct=null,re=null,ze=null;return{setTest:function(Te){Z||(Te?dt(c.STENCIL_TEST):Ut(c.STENCIL_TEST))},setMask:function(Te){zt!==Te&&!Z&&(c.stencilMask(Te),zt=Te)},setFunc:function(Te,mn,Bn){(Tt!==Te||Ft!==mn||Et!==Bn)&&(c.stencilFunc(Te,mn,Bn),Tt=Te,Ft=mn,Et=Bn)},setOp:function(Te,mn,Bn){(yt!==Te||Ct!==mn||re!==Bn)&&(c.stencilOp(Te,mn,Bn),yt=Te,Ct=mn,re=Bn)},setLocked:function(Te){Z=Te},setClear:function(Te){ze!==Te&&(c.clearStencil(Te),ze=Te)},reset:function(){Z=!1,zt=null,Tt=null,Ft=null,Et=null,yt=null,Ct=null,re=null,ze=null}}}const o=new n,u=new a,f=new r,p=new WeakMap,h=new WeakMap;let g={},_={},v=new WeakMap,y=[],M=null,b=!1,S=null,x=null,T=null,C=null,N=null,U=null,P=null,B=new ke(0,0,0),X=0,w=!1,O=null,H=null,$=null,V=null,K=null;const W=c.getParameter(c.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,G=0;const J=c.getParameter(c.VERSION);J.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(J)[1]),z=G>=1):J.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),z=G>=2);let ft=null,vt={};const I=c.getParameter(c.SCISSOR_BOX),j=c.getParameter(c.VIEWPORT),_t=new Sn().fromArray(I),At=new Sn().fromArray(j);function Ot(Z,zt,Tt,Ft){const Et=new Uint8Array(4),yt=c.createTexture();c.bindTexture(Z,yt),c.texParameteri(Z,c.TEXTURE_MIN_FILTER,c.NEAREST),c.texParameteri(Z,c.TEXTURE_MAG_FILTER,c.NEAREST);for(let Ct=0;Ct<Tt;Ct++)Z===c.TEXTURE_3D||Z===c.TEXTURE_2D_ARRAY?c.texImage3D(zt,0,c.RGBA,1,1,Ft,0,c.RGBA,c.UNSIGNED_BYTE,Et):c.texImage2D(zt+Ct,0,c.RGBA,1,1,0,c.RGBA,c.UNSIGNED_BYTE,Et);return yt}const at={};at[c.TEXTURE_2D]=Ot(c.TEXTURE_2D,c.TEXTURE_2D,1),at[c.TEXTURE_CUBE_MAP]=Ot(c.TEXTURE_CUBE_MAP,c.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[c.TEXTURE_2D_ARRAY]=Ot(c.TEXTURE_2D_ARRAY,c.TEXTURE_2D_ARRAY,1,1),at[c.TEXTURE_3D]=Ot(c.TEXTURE_3D,c.TEXTURE_3D,1,1),o.setClear(0,0,0,1),u.setClear(1),f.setClear(0),dt(c.DEPTH_TEST),u.setFunc(So),Bt(!1),xe(s_),dt(c.CULL_FACE),be(Za);function dt(Z){g[Z]!==!0&&(c.enable(Z),g[Z]=!0)}function Ut(Z){g[Z]!==!1&&(c.disable(Z),g[Z]=!1)}function Yt(Z,zt){return _[Z]!==zt?(c.bindFramebuffer(Z,zt),_[Z]=zt,Z===c.DRAW_FRAMEBUFFER&&(_[c.FRAMEBUFFER]=zt),Z===c.FRAMEBUFFER&&(_[c.DRAW_FRAMEBUFFER]=zt),!0):!1}function Xt(Z,zt){let Tt=y,Ft=!1;if(Z){Tt=v.get(zt),Tt===void 0&&(Tt=[],v.set(zt,Tt));const Et=Z.textures;if(Tt.length!==Et.length||Tt[0]!==c.COLOR_ATTACHMENT0){for(let yt=0,Ct=Et.length;yt<Ct;yt++)Tt[yt]=c.COLOR_ATTACHMENT0+yt;Tt.length=Et.length,Ft=!0}}else Tt[0]!==c.BACK&&(Tt[0]=c.BACK,Ft=!0);Ft&&c.drawBuffers(Tt)}function Ee(Z){return M!==Z?(c.useProgram(Z),M=Z,!0):!1}const Ke={[pr]:c.FUNC_ADD,[Qb]:c.FUNC_SUBTRACT,[Jb]:c.FUNC_REVERSE_SUBTRACT};Ke[$b]=c.MIN,Ke[tT]=c.MAX;const _e={[eT]:c.ZERO,[nT]:c.ONE,[iT]:c.SRC_COLOR,[zd]:c.SRC_ALPHA,[cT]:c.SRC_ALPHA_SATURATE,[oT]:c.DST_COLOR,[sT]:c.DST_ALPHA,[aT]:c.ONE_MINUS_SRC_COLOR,[Pd]:c.ONE_MINUS_SRC_ALPHA,[lT]:c.ONE_MINUS_DST_COLOR,[rT]:c.ONE_MINUS_DST_ALPHA,[uT]:c.CONSTANT_COLOR,[fT]:c.ONE_MINUS_CONSTANT_COLOR,[hT]:c.CONSTANT_ALPHA,[dT]:c.ONE_MINUS_CONSTANT_ALPHA};function be(Z,zt,Tt,Ft,Et,yt,Ct,re,ze,Te){if(Z===Za){b===!0&&(Ut(c.BLEND),b=!1);return}if(b===!1&&(dt(c.BLEND),b=!0),Z!==Kb){if(Z!==S||Te!==w){if((x!==pr||N!==pr)&&(c.blendEquation(c.FUNC_ADD),x=pr,N=pr),Te)switch(Z){case _o:c.blendFuncSeparate(c.ONE,c.ONE_MINUS_SRC_ALPHA,c.ONE,c.ONE_MINUS_SRC_ALPHA);break;case r_:c.blendFunc(c.ONE,c.ONE);break;case o_:c.blendFuncSeparate(c.ZERO,c.ONE_MINUS_SRC_COLOR,c.ZERO,c.ONE);break;case l_:c.blendFuncSeparate(c.DST_COLOR,c.ONE_MINUS_SRC_ALPHA,c.ZERO,c.ONE);break;default:Fe("WebGLState: Invalid blending: ",Z);break}else switch(Z){case _o:c.blendFuncSeparate(c.SRC_ALPHA,c.ONE_MINUS_SRC_ALPHA,c.ONE,c.ONE_MINUS_SRC_ALPHA);break;case r_:c.blendFuncSeparate(c.SRC_ALPHA,c.ONE,c.ONE,c.ONE);break;case o_:Fe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case l_:Fe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Fe("WebGLState: Invalid blending: ",Z);break}T=null,C=null,U=null,P=null,B.set(0,0,0),X=0,S=Z,w=Te}return}Et=Et||zt,yt=yt||Tt,Ct=Ct||Ft,(zt!==x||Et!==N)&&(c.blendEquationSeparate(Ke[zt],Ke[Et]),x=zt,N=Et),(Tt!==T||Ft!==C||yt!==U||Ct!==P)&&(c.blendFuncSeparate(_e[Tt],_e[Ft],_e[yt],_e[Ct]),T=Tt,C=Ft,U=yt,P=Ct),(re.equals(B)===!1||ze!==X)&&(c.blendColor(re.r,re.g,re.b,ze),B.copy(re),X=ze),S=Z,w=!1}function Pe(Z,zt){Z.side===Ya?Ut(c.CULL_FACE):dt(c.CULL_FACE);let Tt=Z.side===mi;zt&&(Tt=!Tt),Bt(Tt),Z.blending===_o&&Z.transparent===!1?be(Za):be(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.blendColor,Z.blendAlpha,Z.premultipliedAlpha),u.setFunc(Z.depthFunc),u.setTest(Z.depthTest),u.setMask(Z.depthWrite),o.setMask(Z.colorWrite);const Ft=Z.stencilWrite;f.setTest(Ft),Ft&&(f.setMask(Z.stencilWriteMask),f.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),f.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),Ne(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?dt(c.SAMPLE_ALPHA_TO_COVERAGE):Ut(c.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(Z){O!==Z&&(Z?c.frontFace(c.CW):c.frontFace(c.CCW),O=Z)}function xe(Z){Z!==jb?(dt(c.CULL_FACE),Z!==H&&(Z===s_?c.cullFace(c.BACK):Z===Zb?c.cullFace(c.FRONT):c.cullFace(c.FRONT_AND_BACK))):Ut(c.CULL_FACE),H=Z}function k(Z){Z!==$&&(z&&c.lineWidth(Z),$=Z)}function Ne(Z,zt,Tt){Z?(dt(c.POLYGON_OFFSET_FILL),(V!==zt||K!==Tt)&&(c.polygonOffset(zt,Tt),V=zt,K=Tt)):Ut(c.POLYGON_OFFSET_FILL)}function ye(Z){Z?dt(c.SCISSOR_TEST):Ut(c.SCISSOR_TEST)}function ue(Z){Z===void 0&&(Z=c.TEXTURE0+W-1),ft!==Z&&(c.activeTexture(Z),ft=Z)}function Ht(Z,zt,Tt){Tt===void 0&&(ft===null?Tt=c.TEXTURE0+W-1:Tt=ft);let Ft=vt[Tt];Ft===void 0&&(Ft={type:void 0,texture:void 0},vt[Tt]=Ft),(Ft.type!==Z||Ft.texture!==zt)&&(ft!==Tt&&(c.activeTexture(Tt),ft=Tt),c.bindTexture(Z,zt||at[Z]),Ft.type=Z,Ft.texture=zt)}function F(){const Z=vt[ft];Z!==void 0&&Z.type!==void 0&&(c.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function A(){try{c.compressedTexImage2D(...arguments)}catch(Z){Fe("WebGLState:",Z)}}function Q(){try{c.compressedTexImage3D(...arguments)}catch(Z){Fe("WebGLState:",Z)}}function pt(){try{c.texSubImage2D(...arguments)}catch(Z){Fe("WebGLState:",Z)}}function gt(){try{c.texSubImage3D(...arguments)}catch(Z){Fe("WebGLState:",Z)}}function ht(){try{c.compressedTexSubImage2D(...arguments)}catch(Z){Fe("WebGLState:",Z)}}function Zt(){try{c.compressedTexSubImage3D(...arguments)}catch(Z){Fe("WebGLState:",Z)}}function Nt(){try{c.texStorage2D(...arguments)}catch(Z){Fe("WebGLState:",Z)}}function Kt(){try{c.texStorage3D(...arguments)}catch(Z){Fe("WebGLState:",Z)}}function se(){try{c.texImage2D(...arguments)}catch(Z){Fe("WebGLState:",Z)}}function bt(){try{c.texImage3D(...arguments)}catch(Z){Fe("WebGLState:",Z)}}function Mt(Z){_t.equals(Z)===!1&&(c.scissor(Z.x,Z.y,Z.z,Z.w),_t.copy(Z))}function It(Z){At.equals(Z)===!1&&(c.viewport(Z.x,Z.y,Z.z,Z.w),At.copy(Z))}function Gt(Z,zt){let Tt=h.get(zt);Tt===void 0&&(Tt=new WeakMap,h.set(zt,Tt));let Ft=Tt.get(Z);Ft===void 0&&(Ft=c.getUniformBlockIndex(zt,Z.name),Tt.set(Z,Ft))}function Dt(Z,zt){const Ft=h.get(zt).get(Z);p.get(zt)!==Ft&&(c.uniformBlockBinding(zt,Ft,Z.__bindingPointIndex),p.set(zt,Ft))}function fe(){c.disable(c.BLEND),c.disable(c.CULL_FACE),c.disable(c.DEPTH_TEST),c.disable(c.POLYGON_OFFSET_FILL),c.disable(c.SCISSOR_TEST),c.disable(c.STENCIL_TEST),c.disable(c.SAMPLE_ALPHA_TO_COVERAGE),c.blendEquation(c.FUNC_ADD),c.blendFunc(c.ONE,c.ZERO),c.blendFuncSeparate(c.ONE,c.ZERO,c.ONE,c.ZERO),c.blendColor(0,0,0,0),c.colorMask(!0,!0,!0,!0),c.clearColor(0,0,0,0),c.depthMask(!0),c.depthFunc(c.LESS),u.setReversed(!1),c.clearDepth(1),c.stencilMask(4294967295),c.stencilFunc(c.ALWAYS,0,4294967295),c.stencilOp(c.KEEP,c.KEEP,c.KEEP),c.clearStencil(0),c.cullFace(c.BACK),c.frontFace(c.CCW),c.polygonOffset(0,0),c.activeTexture(c.TEXTURE0),c.bindFramebuffer(c.FRAMEBUFFER,null),c.bindFramebuffer(c.DRAW_FRAMEBUFFER,null),c.bindFramebuffer(c.READ_FRAMEBUFFER,null),c.useProgram(null),c.lineWidth(1),c.scissor(0,0,c.canvas.width,c.canvas.height),c.viewport(0,0,c.canvas.width,c.canvas.height),g={},ft=null,vt={},_={},v=new WeakMap,y=[],M=null,b=!1,S=null,x=null,T=null,C=null,N=null,U=null,P=null,B=new ke(0,0,0),X=0,w=!1,O=null,H=null,$=null,V=null,K=null,_t.set(0,0,c.canvas.width,c.canvas.height),At.set(0,0,c.canvas.width,c.canvas.height),o.reset(),u.reset(),f.reset()}return{buffers:{color:o,depth:u,stencil:f},enable:dt,disable:Ut,bindFramebuffer:Yt,drawBuffers:Xt,useProgram:Ee,setBlending:be,setMaterial:Pe,setFlipSided:Bt,setCullFace:xe,setLineWidth:k,setPolygonOffset:Ne,setScissorTest:ye,activeTexture:ue,bindTexture:Ht,unbindTexture:F,compressedTexImage2D:A,compressedTexImage3D:Q,texImage2D:se,texImage3D:bt,updateUBOMapping:Gt,uniformBlockBinding:Dt,texStorage2D:Nt,texStorage3D:Kt,texSubImage2D:pt,texSubImage3D:gt,compressedTexSubImage2D:ht,compressedTexSubImage3D:Zt,scissor:Mt,viewport:It,reset:fe}}function QC(c,t,n,a,r,o,u){const f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new qe,g=new WeakMap;let _;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(F,A){return y?new OffscreenCanvas(F,A):Uu("canvas")}function b(F,A,Q){let pt=1;const gt=Ht(F);if((gt.width>Q||gt.height>Q)&&(pt=Q/Math.max(gt.width,gt.height)),pt<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const ht=Math.floor(pt*gt.width),Zt=Math.floor(pt*gt.height);_===void 0&&(_=M(ht,Zt));const Nt=A?M(ht,Zt):_;return Nt.width=ht,Nt.height=Zt,Nt.getContext("2d").drawImage(F,0,0,ht,Zt),pe("WebGLRenderer: Texture has been resized from ("+gt.width+"x"+gt.height+") to ("+ht+"x"+Zt+")."),Nt}else return"data"in F&&pe("WebGLRenderer: Image in DataTexture is too big ("+gt.width+"x"+gt.height+")."),F;return F}function S(F){return F.generateMipmaps}function x(F){c.generateMipmap(F)}function T(F){return F.isWebGLCubeRenderTarget?c.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?c.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?c.TEXTURE_2D_ARRAY:c.TEXTURE_2D}function C(F,A,Q,pt,gt=!1){if(F!==null){if(c[F]!==void 0)return c[F];pe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let ht=A;if(A===c.RED&&(Q===c.FLOAT&&(ht=c.R32F),Q===c.HALF_FLOAT&&(ht=c.R16F),Q===c.UNSIGNED_BYTE&&(ht=c.R8)),A===c.RED_INTEGER&&(Q===c.UNSIGNED_BYTE&&(ht=c.R8UI),Q===c.UNSIGNED_SHORT&&(ht=c.R16UI),Q===c.UNSIGNED_INT&&(ht=c.R32UI),Q===c.BYTE&&(ht=c.R8I),Q===c.SHORT&&(ht=c.R16I),Q===c.INT&&(ht=c.R32I)),A===c.RG&&(Q===c.FLOAT&&(ht=c.RG32F),Q===c.HALF_FLOAT&&(ht=c.RG16F),Q===c.UNSIGNED_BYTE&&(ht=c.RG8)),A===c.RG_INTEGER&&(Q===c.UNSIGNED_BYTE&&(ht=c.RG8UI),Q===c.UNSIGNED_SHORT&&(ht=c.RG16UI),Q===c.UNSIGNED_INT&&(ht=c.RG32UI),Q===c.BYTE&&(ht=c.RG8I),Q===c.SHORT&&(ht=c.RG16I),Q===c.INT&&(ht=c.RG32I)),A===c.RGB_INTEGER&&(Q===c.UNSIGNED_BYTE&&(ht=c.RGB8UI),Q===c.UNSIGNED_SHORT&&(ht=c.RGB16UI),Q===c.UNSIGNED_INT&&(ht=c.RGB32UI),Q===c.BYTE&&(ht=c.RGB8I),Q===c.SHORT&&(ht=c.RGB16I),Q===c.INT&&(ht=c.RGB32I)),A===c.RGBA_INTEGER&&(Q===c.UNSIGNED_BYTE&&(ht=c.RGBA8UI),Q===c.UNSIGNED_SHORT&&(ht=c.RGBA16UI),Q===c.UNSIGNED_INT&&(ht=c.RGBA32UI),Q===c.BYTE&&(ht=c.RGBA8I),Q===c.SHORT&&(ht=c.RGBA16I),Q===c.INT&&(ht=c.RGBA32I)),A===c.RGB&&(Q===c.UNSIGNED_INT_5_9_9_9_REV&&(ht=c.RGB9_E5),Q===c.UNSIGNED_INT_10F_11F_11F_REV&&(ht=c.R11F_G11F_B10F)),A===c.RGBA){const Zt=gt?Nu:Ie.getTransfer(pt);Q===c.FLOAT&&(ht=c.RGBA32F),Q===c.HALF_FLOAT&&(ht=c.RGBA16F),Q===c.UNSIGNED_BYTE&&(ht=Zt===tn?c.SRGB8_ALPHA8:c.RGBA8),Q===c.UNSIGNED_SHORT_4_4_4_4&&(ht=c.RGBA4),Q===c.UNSIGNED_SHORT_5_5_5_1&&(ht=c.RGB5_A1)}return(ht===c.R16F||ht===c.R32F||ht===c.RG16F||ht===c.RG32F||ht===c.RGBA16F||ht===c.RGBA32F)&&t.get("EXT_color_buffer_float"),ht}function N(F,A){let Q;return F?A===null||A===pa||A===Ol?Q=c.DEPTH24_STENCIL8:A===ca?Q=c.DEPTH32F_STENCIL8:A===Ul&&(Q=c.DEPTH24_STENCIL8,pe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===pa||A===Ol?Q=c.DEPTH_COMPONENT24:A===ca?Q=c.DEPTH_COMPONENT32F:A===Ul&&(Q=c.DEPTH_COMPONENT16),Q}function U(F,A){return S(F)===!0||F.isFramebufferTexture&&F.minFilter!==jn&&F.minFilter!==Zn?Math.log2(Math.max(A.width,A.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?A.mipmaps.length:1}function P(F){const A=F.target;A.removeEventListener("dispose",P),X(A),A.isVideoTexture&&g.delete(A)}function B(F){const A=F.target;A.removeEventListener("dispose",B),O(A)}function X(F){const A=a.get(F);if(A.__webglInit===void 0)return;const Q=F.source,pt=v.get(Q);if(pt){const gt=pt[A.__cacheKey];gt.usedTimes--,gt.usedTimes===0&&w(F),Object.keys(pt).length===0&&v.delete(Q)}a.remove(F)}function w(F){const A=a.get(F);c.deleteTexture(A.__webglTexture);const Q=F.source,pt=v.get(Q);delete pt[A.__cacheKey],u.memory.textures--}function O(F){const A=a.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),a.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(A.__webglFramebuffer[pt]))for(let gt=0;gt<A.__webglFramebuffer[pt].length;gt++)c.deleteFramebuffer(A.__webglFramebuffer[pt][gt]);else c.deleteFramebuffer(A.__webglFramebuffer[pt]);A.__webglDepthbuffer&&c.deleteRenderbuffer(A.__webglDepthbuffer[pt])}else{if(Array.isArray(A.__webglFramebuffer))for(let pt=0;pt<A.__webglFramebuffer.length;pt++)c.deleteFramebuffer(A.__webglFramebuffer[pt]);else c.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&c.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&c.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let pt=0;pt<A.__webglColorRenderbuffer.length;pt++)A.__webglColorRenderbuffer[pt]&&c.deleteRenderbuffer(A.__webglColorRenderbuffer[pt]);A.__webglDepthRenderbuffer&&c.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const Q=F.textures;for(let pt=0,gt=Q.length;pt<gt;pt++){const ht=a.get(Q[pt]);ht.__webglTexture&&(c.deleteTexture(ht.__webglTexture),u.memory.textures--),a.remove(Q[pt])}a.remove(F)}let H=0;function $(){H=0}function V(){const F=H;return F>=r.maxTextures&&pe("WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+r.maxTextures),H+=1,F}function K(F){const A=[];return A.push(F.wrapS),A.push(F.wrapT),A.push(F.wrapR||0),A.push(F.magFilter),A.push(F.minFilter),A.push(F.anisotropy),A.push(F.internalFormat),A.push(F.format),A.push(F.type),A.push(F.generateMipmaps),A.push(F.premultiplyAlpha),A.push(F.flipY),A.push(F.unpackAlignment),A.push(F.colorSpace),A.join()}function W(F,A){const Q=a.get(F);if(F.isVideoTexture&&ye(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&Q.__version!==F.version){const pt=F.image;if(pt===null)pe("WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)pe("WebGLRenderer: Texture marked for update but image is incomplete");else{at(Q,F,A);return}}else F.isExternalTexture&&(Q.__webglTexture=F.sourceTexture?F.sourceTexture:null);n.bindTexture(c.TEXTURE_2D,Q.__webglTexture,c.TEXTURE0+A)}function z(F,A){const Q=a.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&Q.__version!==F.version){at(Q,F,A);return}else F.isExternalTexture&&(Q.__webglTexture=F.sourceTexture?F.sourceTexture:null);n.bindTexture(c.TEXTURE_2D_ARRAY,Q.__webglTexture,c.TEXTURE0+A)}function G(F,A){const Q=a.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&Q.__version!==F.version){at(Q,F,A);return}n.bindTexture(c.TEXTURE_3D,Q.__webglTexture,c.TEXTURE0+A)}function J(F,A){const Q=a.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&Q.__version!==F.version){dt(Q,F,A);return}n.bindTexture(c.TEXTURE_CUBE_MAP,Q.__webglTexture,c.TEXTURE0+A)}const ft={[Wd]:c.REPEAT,[ja]:c.CLAMP_TO_EDGE,[Yd]:c.MIRRORED_REPEAT},vt={[jn]:c.NEAREST,[gT]:c.NEAREST_MIPMAP_NEAREST,[nu]:c.NEAREST_MIPMAP_LINEAR,[Zn]:c.LINEAR,[td]:c.LINEAR_MIPMAP_NEAREST,[zs]:c.LINEAR_MIPMAP_LINEAR},I={[xT]:c.NEVER,[bT]:c.ALWAYS,[yT]:c.LESS,[Gp]:c.LEQUAL,[ST]:c.EQUAL,[Vp]:c.GEQUAL,[MT]:c.GREATER,[ET]:c.NOTEQUAL};function j(F,A){if(A.type===ca&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===Zn||A.magFilter===td||A.magFilter===nu||A.magFilter===zs||A.minFilter===Zn||A.minFilter===td||A.minFilter===nu||A.minFilter===zs)&&pe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),c.texParameteri(F,c.TEXTURE_WRAP_S,ft[A.wrapS]),c.texParameteri(F,c.TEXTURE_WRAP_T,ft[A.wrapT]),(F===c.TEXTURE_3D||F===c.TEXTURE_2D_ARRAY)&&c.texParameteri(F,c.TEXTURE_WRAP_R,ft[A.wrapR]),c.texParameteri(F,c.TEXTURE_MAG_FILTER,vt[A.magFilter]),c.texParameteri(F,c.TEXTURE_MIN_FILTER,vt[A.minFilter]),A.compareFunction&&(c.texParameteri(F,c.TEXTURE_COMPARE_MODE,c.COMPARE_REF_TO_TEXTURE),c.texParameteri(F,c.TEXTURE_COMPARE_FUNC,I[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===jn||A.minFilter!==nu&&A.minFilter!==zs||A.type===ca&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||a.get(A).__currentAnisotropy){const Q=t.get("EXT_texture_filter_anisotropic");c.texParameterf(F,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),a.get(A).__currentAnisotropy=A.anisotropy}}}function _t(F,A){let Q=!1;F.__webglInit===void 0&&(F.__webglInit=!0,A.addEventListener("dispose",P));const pt=A.source;let gt=v.get(pt);gt===void 0&&(gt={},v.set(pt,gt));const ht=K(A);if(ht!==F.__cacheKey){gt[ht]===void 0&&(gt[ht]={texture:c.createTexture(),usedTimes:0},u.memory.textures++,Q=!0),gt[ht].usedTimes++;const Zt=gt[F.__cacheKey];Zt!==void 0&&(gt[F.__cacheKey].usedTimes--,Zt.usedTimes===0&&w(A)),F.__cacheKey=ht,F.__webglTexture=gt[ht].texture}return Q}function At(F,A,Q){return Math.floor(Math.floor(F/Q)/A)}function Ot(F,A,Q,pt){const ht=F.updateRanges;if(ht.length===0)n.texSubImage2D(c.TEXTURE_2D,0,0,0,A.width,A.height,Q,pt,A.data);else{ht.sort((bt,Mt)=>bt.start-Mt.start);let Zt=0;for(let bt=1;bt<ht.length;bt++){const Mt=ht[Zt],It=ht[bt],Gt=Mt.start+Mt.count,Dt=At(It.start,A.width,4),fe=At(Mt.start,A.width,4);It.start<=Gt+1&&Dt===fe&&At(It.start+It.count-1,A.width,4)===Dt?Mt.count=Math.max(Mt.count,It.start+It.count-Mt.start):(++Zt,ht[Zt]=It)}ht.length=Zt+1;const Nt=c.getParameter(c.UNPACK_ROW_LENGTH),Kt=c.getParameter(c.UNPACK_SKIP_PIXELS),se=c.getParameter(c.UNPACK_SKIP_ROWS);c.pixelStorei(c.UNPACK_ROW_LENGTH,A.width);for(let bt=0,Mt=ht.length;bt<Mt;bt++){const It=ht[bt],Gt=Math.floor(It.start/4),Dt=Math.ceil(It.count/4),fe=Gt%A.width,Z=Math.floor(Gt/A.width),zt=Dt,Tt=1;c.pixelStorei(c.UNPACK_SKIP_PIXELS,fe),c.pixelStorei(c.UNPACK_SKIP_ROWS,Z),n.texSubImage2D(c.TEXTURE_2D,0,fe,Z,zt,Tt,Q,pt,A.data)}F.clearUpdateRanges(),c.pixelStorei(c.UNPACK_ROW_LENGTH,Nt),c.pixelStorei(c.UNPACK_SKIP_PIXELS,Kt),c.pixelStorei(c.UNPACK_SKIP_ROWS,se)}}function at(F,A,Q){let pt=c.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(pt=c.TEXTURE_2D_ARRAY),A.isData3DTexture&&(pt=c.TEXTURE_3D);const gt=_t(F,A),ht=A.source;n.bindTexture(pt,F.__webglTexture,c.TEXTURE0+Q);const Zt=a.get(ht);if(ht.version!==Zt.__version||gt===!0){n.activeTexture(c.TEXTURE0+Q);const Nt=Ie.getPrimaries(Ie.workingColorSpace),Kt=A.colorSpace===Os?null:Ie.getPrimaries(A.colorSpace),se=A.colorSpace===Os||Nt===Kt?c.NONE:c.BROWSER_DEFAULT_WEBGL;c.pixelStorei(c.UNPACK_FLIP_Y_WEBGL,A.flipY),c.pixelStorei(c.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),c.pixelStorei(c.UNPACK_ALIGNMENT,A.unpackAlignment),c.pixelStorei(c.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let bt=b(A.image,!1,r.maxTextureSize);bt=ue(A,bt);const Mt=o.convert(A.format,A.colorSpace),It=o.convert(A.type);let Gt=C(A.internalFormat,Mt,It,A.colorSpace,A.isVideoTexture);j(pt,A);let Dt;const fe=A.mipmaps,Z=A.isVideoTexture!==!0,zt=Zt.__version===void 0||gt===!0,Tt=ht.dataReady,Ft=U(A,bt);if(A.isDepthTexture)Gt=N(A.format===vr,A.type),zt&&(Z?n.texStorage2D(c.TEXTURE_2D,1,Gt,bt.width,bt.height):n.texImage2D(c.TEXTURE_2D,0,Gt,bt.width,bt.height,0,Mt,It,null));else if(A.isDataTexture)if(fe.length>0){Z&&zt&&n.texStorage2D(c.TEXTURE_2D,Ft,Gt,fe[0].width,fe[0].height);for(let Et=0,yt=fe.length;Et<yt;Et++)Dt=fe[Et],Z?Tt&&n.texSubImage2D(c.TEXTURE_2D,Et,0,0,Dt.width,Dt.height,Mt,It,Dt.data):n.texImage2D(c.TEXTURE_2D,Et,Gt,Dt.width,Dt.height,0,Mt,It,Dt.data);A.generateMipmaps=!1}else Z?(zt&&n.texStorage2D(c.TEXTURE_2D,Ft,Gt,bt.width,bt.height),Tt&&Ot(A,bt,Mt,It)):n.texImage2D(c.TEXTURE_2D,0,Gt,bt.width,bt.height,0,Mt,It,bt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Z&&zt&&n.texStorage3D(c.TEXTURE_2D_ARRAY,Ft,Gt,fe[0].width,fe[0].height,bt.depth);for(let Et=0,yt=fe.length;Et<yt;Et++)if(Dt=fe[Et],A.format!==Zi)if(Mt!==null)if(Z){if(Tt)if(A.layerUpdates.size>0){const Ct=P_(Dt.width,Dt.height,A.format,A.type);for(const re of A.layerUpdates){const ze=Dt.data.subarray(re*Ct/Dt.data.BYTES_PER_ELEMENT,(re+1)*Ct/Dt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(c.TEXTURE_2D_ARRAY,Et,0,0,re,Dt.width,Dt.height,1,Mt,ze)}A.clearLayerUpdates()}else n.compressedTexSubImage3D(c.TEXTURE_2D_ARRAY,Et,0,0,0,Dt.width,Dt.height,bt.depth,Mt,Dt.data)}else n.compressedTexImage3D(c.TEXTURE_2D_ARRAY,Et,Gt,Dt.width,Dt.height,bt.depth,0,Dt.data,0,0);else pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Z?Tt&&n.texSubImage3D(c.TEXTURE_2D_ARRAY,Et,0,0,0,Dt.width,Dt.height,bt.depth,Mt,It,Dt.data):n.texImage3D(c.TEXTURE_2D_ARRAY,Et,Gt,Dt.width,Dt.height,bt.depth,0,Mt,It,Dt.data)}else{Z&&zt&&n.texStorage2D(c.TEXTURE_2D,Ft,Gt,fe[0].width,fe[0].height);for(let Et=0,yt=fe.length;Et<yt;Et++)Dt=fe[Et],A.format!==Zi?Mt!==null?Z?Tt&&n.compressedTexSubImage2D(c.TEXTURE_2D,Et,0,0,Dt.width,Dt.height,Mt,Dt.data):n.compressedTexImage2D(c.TEXTURE_2D,Et,Gt,Dt.width,Dt.height,0,Dt.data):pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Z?Tt&&n.texSubImage2D(c.TEXTURE_2D,Et,0,0,Dt.width,Dt.height,Mt,It,Dt.data):n.texImage2D(c.TEXTURE_2D,Et,Gt,Dt.width,Dt.height,0,Mt,It,Dt.data)}else if(A.isDataArrayTexture)if(Z){if(zt&&n.texStorage3D(c.TEXTURE_2D_ARRAY,Ft,Gt,bt.width,bt.height,bt.depth),Tt)if(A.layerUpdates.size>0){const Et=P_(bt.width,bt.height,A.format,A.type);for(const yt of A.layerUpdates){const Ct=bt.data.subarray(yt*Et/bt.data.BYTES_PER_ELEMENT,(yt+1)*Et/bt.data.BYTES_PER_ELEMENT);n.texSubImage3D(c.TEXTURE_2D_ARRAY,0,0,0,yt,bt.width,bt.height,1,Mt,It,Ct)}A.clearLayerUpdates()}else n.texSubImage3D(c.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Mt,It,bt.data)}else n.texImage3D(c.TEXTURE_2D_ARRAY,0,Gt,bt.width,bt.height,bt.depth,0,Mt,It,bt.data);else if(A.isData3DTexture)Z?(zt&&n.texStorage3D(c.TEXTURE_3D,Ft,Gt,bt.width,bt.height,bt.depth),Tt&&n.texSubImage3D(c.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Mt,It,bt.data)):n.texImage3D(c.TEXTURE_3D,0,Gt,bt.width,bt.height,bt.depth,0,Mt,It,bt.data);else if(A.isFramebufferTexture){if(zt)if(Z)n.texStorage2D(c.TEXTURE_2D,Ft,Gt,bt.width,bt.height);else{let Et=bt.width,yt=bt.height;for(let Ct=0;Ct<Ft;Ct++)n.texImage2D(c.TEXTURE_2D,Ct,Gt,Et,yt,0,Mt,It,null),Et>>=1,yt>>=1}}else if(fe.length>0){if(Z&&zt){const Et=Ht(fe[0]);n.texStorage2D(c.TEXTURE_2D,Ft,Gt,Et.width,Et.height)}for(let Et=0,yt=fe.length;Et<yt;Et++)Dt=fe[Et],Z?Tt&&n.texSubImage2D(c.TEXTURE_2D,Et,0,0,Mt,It,Dt):n.texImage2D(c.TEXTURE_2D,Et,Gt,Mt,It,Dt);A.generateMipmaps=!1}else if(Z){if(zt){const Et=Ht(bt);n.texStorage2D(c.TEXTURE_2D,Ft,Gt,Et.width,Et.height)}Tt&&n.texSubImage2D(c.TEXTURE_2D,0,0,0,Mt,It,bt)}else n.texImage2D(c.TEXTURE_2D,0,Gt,Mt,It,bt);S(A)&&x(pt),Zt.__version=ht.version,A.onUpdate&&A.onUpdate(A)}F.__version=A.version}function dt(F,A,Q){if(A.image.length!==6)return;const pt=_t(F,A),gt=A.source;n.bindTexture(c.TEXTURE_CUBE_MAP,F.__webglTexture,c.TEXTURE0+Q);const ht=a.get(gt);if(gt.version!==ht.__version||pt===!0){n.activeTexture(c.TEXTURE0+Q);const Zt=Ie.getPrimaries(Ie.workingColorSpace),Nt=A.colorSpace===Os?null:Ie.getPrimaries(A.colorSpace),Kt=A.colorSpace===Os||Zt===Nt?c.NONE:c.BROWSER_DEFAULT_WEBGL;c.pixelStorei(c.UNPACK_FLIP_Y_WEBGL,A.flipY),c.pixelStorei(c.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),c.pixelStorei(c.UNPACK_ALIGNMENT,A.unpackAlignment),c.pixelStorei(c.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);const se=A.isCompressedTexture||A.image[0].isCompressedTexture,bt=A.image[0]&&A.image[0].isDataTexture,Mt=[];for(let yt=0;yt<6;yt++)!se&&!bt?Mt[yt]=b(A.image[yt],!0,r.maxCubemapSize):Mt[yt]=bt?A.image[yt].image:A.image[yt],Mt[yt]=ue(A,Mt[yt]);const It=Mt[0],Gt=o.convert(A.format,A.colorSpace),Dt=o.convert(A.type),fe=C(A.internalFormat,Gt,Dt,A.colorSpace),Z=A.isVideoTexture!==!0,zt=ht.__version===void 0||pt===!0,Tt=gt.dataReady;let Ft=U(A,It);j(c.TEXTURE_CUBE_MAP,A);let Et;if(se){Z&&zt&&n.texStorage2D(c.TEXTURE_CUBE_MAP,Ft,fe,It.width,It.height);for(let yt=0;yt<6;yt++){Et=Mt[yt].mipmaps;for(let Ct=0;Ct<Et.length;Ct++){const re=Et[Ct];A.format!==Zi?Gt!==null?Z?Tt&&n.compressedTexSubImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Ct,0,0,re.width,re.height,Gt,re.data):n.compressedTexImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Ct,fe,re.width,re.height,0,re.data):pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Z?Tt&&n.texSubImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Ct,0,0,re.width,re.height,Gt,Dt,re.data):n.texImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Ct,fe,re.width,re.height,0,Gt,Dt,re.data)}}}else{if(Et=A.mipmaps,Z&&zt){Et.length>0&&Ft++;const yt=Ht(Mt[0]);n.texStorage2D(c.TEXTURE_CUBE_MAP,Ft,fe,yt.width,yt.height)}for(let yt=0;yt<6;yt++)if(bt){Z?Tt&&n.texSubImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,Mt[yt].width,Mt[yt].height,Gt,Dt,Mt[yt].data):n.texImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,fe,Mt[yt].width,Mt[yt].height,0,Gt,Dt,Mt[yt].data);for(let Ct=0;Ct<Et.length;Ct++){const ze=Et[Ct].image[yt].image;Z?Tt&&n.texSubImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Ct+1,0,0,ze.width,ze.height,Gt,Dt,ze.data):n.texImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Ct+1,fe,ze.width,ze.height,0,Gt,Dt,ze.data)}}else{Z?Tt&&n.texSubImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,Gt,Dt,Mt[yt]):n.texImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,fe,Gt,Dt,Mt[yt]);for(let Ct=0;Ct<Et.length;Ct++){const re=Et[Ct];Z?Tt&&n.texSubImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Ct+1,0,0,Gt,Dt,re.image[yt]):n.texImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Ct+1,fe,Gt,Dt,re.image[yt])}}}S(A)&&x(c.TEXTURE_CUBE_MAP),ht.__version=gt.version,A.onUpdate&&A.onUpdate(A)}F.__version=A.version}function Ut(F,A,Q,pt,gt,ht){const Zt=o.convert(Q.format,Q.colorSpace),Nt=o.convert(Q.type),Kt=C(Q.internalFormat,Zt,Nt,Q.colorSpace),se=a.get(A),bt=a.get(Q);if(bt.__renderTarget=A,!se.__hasExternalTextures){const Mt=Math.max(1,A.width>>ht),It=Math.max(1,A.height>>ht);gt===c.TEXTURE_3D||gt===c.TEXTURE_2D_ARRAY?n.texImage3D(gt,ht,Kt,Mt,It,A.depth,0,Zt,Nt,null):n.texImage2D(gt,ht,Kt,Mt,It,0,Zt,Nt,null)}n.bindFramebuffer(c.FRAMEBUFFER,F),Ne(A)?f.framebufferTexture2DMultisampleEXT(c.FRAMEBUFFER,pt,gt,bt.__webglTexture,0,k(A)):(gt===c.TEXTURE_2D||gt>=c.TEXTURE_CUBE_MAP_POSITIVE_X&&gt<=c.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&c.framebufferTexture2D(c.FRAMEBUFFER,pt,gt,bt.__webglTexture,ht),n.bindFramebuffer(c.FRAMEBUFFER,null)}function Yt(F,A,Q){if(c.bindRenderbuffer(c.RENDERBUFFER,F),A.depthBuffer){const pt=A.depthTexture,gt=pt&&pt.isDepthTexture?pt.type:null,ht=N(A.stencilBuffer,gt),Zt=A.stencilBuffer?c.DEPTH_STENCIL_ATTACHMENT:c.DEPTH_ATTACHMENT;Ne(A)?f.renderbufferStorageMultisampleEXT(c.RENDERBUFFER,k(A),ht,A.width,A.height):Q?c.renderbufferStorageMultisample(c.RENDERBUFFER,k(A),ht,A.width,A.height):c.renderbufferStorage(c.RENDERBUFFER,ht,A.width,A.height),c.framebufferRenderbuffer(c.FRAMEBUFFER,Zt,c.RENDERBUFFER,F)}else{const pt=A.textures;for(let gt=0;gt<pt.length;gt++){const ht=pt[gt],Zt=o.convert(ht.format,ht.colorSpace),Nt=o.convert(ht.type),Kt=C(ht.internalFormat,Zt,Nt,ht.colorSpace);Ne(A)?f.renderbufferStorageMultisampleEXT(c.RENDERBUFFER,k(A),Kt,A.width,A.height):Q?c.renderbufferStorageMultisample(c.RENDERBUFFER,k(A),Kt,A.width,A.height):c.renderbufferStorage(c.RENDERBUFFER,Kt,A.width,A.height)}}c.bindRenderbuffer(c.RENDERBUFFER,null)}function Xt(F,A,Q){const pt=A.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(c.FRAMEBUFFER,F),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const gt=a.get(A.depthTexture);if(gt.__renderTarget=A,(!gt.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),pt){if(gt.__webglInit===void 0&&(gt.__webglInit=!0,A.depthTexture.addEventListener("dispose",P)),gt.__webglTexture===void 0){gt.__webglTexture=c.createTexture(),n.bindTexture(c.TEXTURE_CUBE_MAP,gt.__webglTexture),j(c.TEXTURE_CUBE_MAP,A.depthTexture);const se=o.convert(A.depthTexture.format),bt=o.convert(A.depthTexture.type);let Mt;A.depthTexture.format===$a?Mt=c.DEPTH_COMPONENT24:A.depthTexture.format===vr&&(Mt=c.DEPTH24_STENCIL8);for(let It=0;It<6;It++)c.texImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,Mt,A.width,A.height,0,se,bt,null)}}else W(A.depthTexture,0);const ht=gt.__webglTexture,Zt=k(A),Nt=pt?c.TEXTURE_CUBE_MAP_POSITIVE_X+Q:c.TEXTURE_2D,Kt=A.depthTexture.format===vr?c.DEPTH_STENCIL_ATTACHMENT:c.DEPTH_ATTACHMENT;if(A.depthTexture.format===$a)Ne(A)?f.framebufferTexture2DMultisampleEXT(c.FRAMEBUFFER,Kt,Nt,ht,0,Zt):c.framebufferTexture2D(c.FRAMEBUFFER,Kt,Nt,ht,0);else if(A.depthTexture.format===vr)Ne(A)?f.framebufferTexture2DMultisampleEXT(c.FRAMEBUFFER,Kt,Nt,ht,0,Zt):c.framebufferTexture2D(c.FRAMEBUFFER,Kt,Nt,ht,0);else throw new Error("Unknown depthTexture format")}function Ee(F){const A=a.get(F),Q=F.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==F.depthTexture){const pt=F.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),pt){const gt=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,pt.removeEventListener("dispose",gt)};pt.addEventListener("dispose",gt),A.__depthDisposeCallback=gt}A.__boundDepthTexture=pt}if(F.depthTexture&&!A.__autoAllocateDepthBuffer)if(Q)for(let pt=0;pt<6;pt++)Xt(A.__webglFramebuffer[pt],F,pt);else{const pt=F.texture.mipmaps;pt&&pt.length>0?Xt(A.__webglFramebuffer[0],F,0):Xt(A.__webglFramebuffer,F,0)}else if(Q){A.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(n.bindFramebuffer(c.FRAMEBUFFER,A.__webglFramebuffer[pt]),A.__webglDepthbuffer[pt]===void 0)A.__webglDepthbuffer[pt]=c.createRenderbuffer(),Yt(A.__webglDepthbuffer[pt],F,!1);else{const gt=F.stencilBuffer?c.DEPTH_STENCIL_ATTACHMENT:c.DEPTH_ATTACHMENT,ht=A.__webglDepthbuffer[pt];c.bindRenderbuffer(c.RENDERBUFFER,ht),c.framebufferRenderbuffer(c.FRAMEBUFFER,gt,c.RENDERBUFFER,ht)}}else{const pt=F.texture.mipmaps;if(pt&&pt.length>0?n.bindFramebuffer(c.FRAMEBUFFER,A.__webglFramebuffer[0]):n.bindFramebuffer(c.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=c.createRenderbuffer(),Yt(A.__webglDepthbuffer,F,!1);else{const gt=F.stencilBuffer?c.DEPTH_STENCIL_ATTACHMENT:c.DEPTH_ATTACHMENT,ht=A.__webglDepthbuffer;c.bindRenderbuffer(c.RENDERBUFFER,ht),c.framebufferRenderbuffer(c.FRAMEBUFFER,gt,c.RENDERBUFFER,ht)}}n.bindFramebuffer(c.FRAMEBUFFER,null)}function Ke(F,A,Q){const pt=a.get(F);A!==void 0&&Ut(pt.__webglFramebuffer,F,F.texture,c.COLOR_ATTACHMENT0,c.TEXTURE_2D,0),Q!==void 0&&Ee(F)}function _e(F){const A=F.texture,Q=a.get(F),pt=a.get(A);F.addEventListener("dispose",B);const gt=F.textures,ht=F.isWebGLCubeRenderTarget===!0,Zt=gt.length>1;if(Zt||(pt.__webglTexture===void 0&&(pt.__webglTexture=c.createTexture()),pt.__version=A.version,u.memory.textures++),ht){Q.__webglFramebuffer=[];for(let Nt=0;Nt<6;Nt++)if(A.mipmaps&&A.mipmaps.length>0){Q.__webglFramebuffer[Nt]=[];for(let Kt=0;Kt<A.mipmaps.length;Kt++)Q.__webglFramebuffer[Nt][Kt]=c.createFramebuffer()}else Q.__webglFramebuffer[Nt]=c.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Nt=0;Nt<A.mipmaps.length;Nt++)Q.__webglFramebuffer[Nt]=c.createFramebuffer()}else Q.__webglFramebuffer=c.createFramebuffer();if(Zt)for(let Nt=0,Kt=gt.length;Nt<Kt;Nt++){const se=a.get(gt[Nt]);se.__webglTexture===void 0&&(se.__webglTexture=c.createTexture(),u.memory.textures++)}if(F.samples>0&&Ne(F)===!1){Q.__webglMultisampledFramebuffer=c.createFramebuffer(),Q.__webglColorRenderbuffer=[],n.bindFramebuffer(c.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Nt=0;Nt<gt.length;Nt++){const Kt=gt[Nt];Q.__webglColorRenderbuffer[Nt]=c.createRenderbuffer(),c.bindRenderbuffer(c.RENDERBUFFER,Q.__webglColorRenderbuffer[Nt]);const se=o.convert(Kt.format,Kt.colorSpace),bt=o.convert(Kt.type),Mt=C(Kt.internalFormat,se,bt,Kt.colorSpace,F.isXRRenderTarget===!0),It=k(F);c.renderbufferStorageMultisample(c.RENDERBUFFER,It,Mt,F.width,F.height),c.framebufferRenderbuffer(c.FRAMEBUFFER,c.COLOR_ATTACHMENT0+Nt,c.RENDERBUFFER,Q.__webglColorRenderbuffer[Nt])}c.bindRenderbuffer(c.RENDERBUFFER,null),F.depthBuffer&&(Q.__webglDepthRenderbuffer=c.createRenderbuffer(),Yt(Q.__webglDepthRenderbuffer,F,!0)),n.bindFramebuffer(c.FRAMEBUFFER,null)}}if(ht){n.bindTexture(c.TEXTURE_CUBE_MAP,pt.__webglTexture),j(c.TEXTURE_CUBE_MAP,A);for(let Nt=0;Nt<6;Nt++)if(A.mipmaps&&A.mipmaps.length>0)for(let Kt=0;Kt<A.mipmaps.length;Kt++)Ut(Q.__webglFramebuffer[Nt][Kt],F,A,c.COLOR_ATTACHMENT0,c.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,Kt);else Ut(Q.__webglFramebuffer[Nt],F,A,c.COLOR_ATTACHMENT0,c.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,0);S(A)&&x(c.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Zt){for(let Nt=0,Kt=gt.length;Nt<Kt;Nt++){const se=gt[Nt],bt=a.get(se);let Mt=c.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Mt=F.isWebGL3DRenderTarget?c.TEXTURE_3D:c.TEXTURE_2D_ARRAY),n.bindTexture(Mt,bt.__webglTexture),j(Mt,se),Ut(Q.__webglFramebuffer,F,se,c.COLOR_ATTACHMENT0+Nt,Mt,0),S(se)&&x(Mt)}n.unbindTexture()}else{let Nt=c.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Nt=F.isWebGL3DRenderTarget?c.TEXTURE_3D:c.TEXTURE_2D_ARRAY),n.bindTexture(Nt,pt.__webglTexture),j(Nt,A),A.mipmaps&&A.mipmaps.length>0)for(let Kt=0;Kt<A.mipmaps.length;Kt++)Ut(Q.__webglFramebuffer[Kt],F,A,c.COLOR_ATTACHMENT0,Nt,Kt);else Ut(Q.__webglFramebuffer,F,A,c.COLOR_ATTACHMENT0,Nt,0);S(A)&&x(Nt),n.unbindTexture()}F.depthBuffer&&Ee(F)}function be(F){const A=F.textures;for(let Q=0,pt=A.length;Q<pt;Q++){const gt=A[Q];if(S(gt)){const ht=T(F),Zt=a.get(gt).__webglTexture;n.bindTexture(ht,Zt),x(ht),n.unbindTexture()}}}const Pe=[],Bt=[];function xe(F){if(F.samples>0){if(Ne(F)===!1){const A=F.textures,Q=F.width,pt=F.height;let gt=c.COLOR_BUFFER_BIT;const ht=F.stencilBuffer?c.DEPTH_STENCIL_ATTACHMENT:c.DEPTH_ATTACHMENT,Zt=a.get(F),Nt=A.length>1;if(Nt)for(let se=0;se<A.length;se++)n.bindFramebuffer(c.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),c.framebufferRenderbuffer(c.FRAMEBUFFER,c.COLOR_ATTACHMENT0+se,c.RENDERBUFFER,null),n.bindFramebuffer(c.FRAMEBUFFER,Zt.__webglFramebuffer),c.framebufferTexture2D(c.DRAW_FRAMEBUFFER,c.COLOR_ATTACHMENT0+se,c.TEXTURE_2D,null,0);n.bindFramebuffer(c.READ_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer);const Kt=F.texture.mipmaps;Kt&&Kt.length>0?n.bindFramebuffer(c.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer[0]):n.bindFramebuffer(c.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer);for(let se=0;se<A.length;se++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(gt|=c.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(gt|=c.STENCIL_BUFFER_BIT)),Nt){c.framebufferRenderbuffer(c.READ_FRAMEBUFFER,c.COLOR_ATTACHMENT0,c.RENDERBUFFER,Zt.__webglColorRenderbuffer[se]);const bt=a.get(A[se]).__webglTexture;c.framebufferTexture2D(c.DRAW_FRAMEBUFFER,c.COLOR_ATTACHMENT0,c.TEXTURE_2D,bt,0)}c.blitFramebuffer(0,0,Q,pt,0,0,Q,pt,gt,c.NEAREST),p===!0&&(Pe.length=0,Bt.length=0,Pe.push(c.COLOR_ATTACHMENT0+se),F.depthBuffer&&F.resolveDepthBuffer===!1&&(Pe.push(ht),Bt.push(ht),c.invalidateFramebuffer(c.DRAW_FRAMEBUFFER,Bt)),c.invalidateFramebuffer(c.READ_FRAMEBUFFER,Pe))}if(n.bindFramebuffer(c.READ_FRAMEBUFFER,null),n.bindFramebuffer(c.DRAW_FRAMEBUFFER,null),Nt)for(let se=0;se<A.length;se++){n.bindFramebuffer(c.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),c.framebufferRenderbuffer(c.FRAMEBUFFER,c.COLOR_ATTACHMENT0+se,c.RENDERBUFFER,Zt.__webglColorRenderbuffer[se]);const bt=a.get(A[se]).__webglTexture;n.bindFramebuffer(c.FRAMEBUFFER,Zt.__webglFramebuffer),c.framebufferTexture2D(c.DRAW_FRAMEBUFFER,c.COLOR_ATTACHMENT0+se,c.TEXTURE_2D,bt,0)}n.bindFramebuffer(c.DRAW_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&p){const A=F.stencilBuffer?c.DEPTH_STENCIL_ATTACHMENT:c.DEPTH_ATTACHMENT;c.invalidateFramebuffer(c.DRAW_FRAMEBUFFER,[A])}}}function k(F){return Math.min(r.maxSamples,F.samples)}function Ne(F){const A=a.get(F);return F.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function ye(F){const A=u.render.frame;g.get(F)!==A&&(g.set(F,A),F.update())}function ue(F,A){const Q=F.colorSpace,pt=F.format,gt=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||Q!==bo&&Q!==Os&&(Ie.getTransfer(Q)===tn?(pt!==Zi||gt!==Ti)&&pe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Fe("WebGLTextures: Unsupported texture color space:",Q)),A}function Ht(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(h.width=F.naturalWidth||F.width,h.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(h.width=F.displayWidth,h.height=F.displayHeight):(h.width=F.width,h.height=F.height),h}this.allocateTextureUnit=V,this.resetTextureUnits=$,this.setTexture2D=W,this.setTexture2DArray=z,this.setTexture3D=G,this.setTextureCube=J,this.rebindTextures=Ke,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=be,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=Ut,this.useMultisampledRTT=Ne,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function JC(c,t){function n(a,r=Os){let o;const u=Ie.getTransfer(r);if(a===Ti)return c.UNSIGNED_BYTE;if(a===Pp)return c.UNSIGNED_SHORT_4_4_4_4;if(a===Bp)return c.UNSIGNED_SHORT_5_5_5_1;if(a===Ox)return c.UNSIGNED_INT_5_9_9_9_REV;if(a===zx)return c.UNSIGNED_INT_10F_11F_11F_REV;if(a===Lx)return c.BYTE;if(a===Ux)return c.SHORT;if(a===Ul)return c.UNSIGNED_SHORT;if(a===zp)return c.INT;if(a===pa)return c.UNSIGNED_INT;if(a===ca)return c.FLOAT;if(a===Ja)return c.HALF_FLOAT;if(a===Px)return c.ALPHA;if(a===Bx)return c.RGB;if(a===Zi)return c.RGBA;if(a===$a)return c.DEPTH_COMPONENT;if(a===vr)return c.DEPTH_STENCIL;if(a===Fx)return c.RED;if(a===Fp)return c.RED_INTEGER;if(a===Eo)return c.RG;if(a===Ip)return c.RG_INTEGER;if(a===Hp)return c.RGBA_INTEGER;if(a===bu||a===Tu||a===Au||a===wu)if(u===tn)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(a===bu)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Tu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Au)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===wu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(a===bu)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Tu)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Au)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===wu)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===jd||a===Zd||a===Kd||a===Qd)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(a===jd)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Zd)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Kd)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Qd)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Jd||a===$d||a===tp||a===ep||a===np||a===ip||a===ap)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(a===Jd||a===$d)return u===tn?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(a===tp)return u===tn?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(a===ep)return o.COMPRESSED_R11_EAC;if(a===np)return o.COMPRESSED_SIGNED_R11_EAC;if(a===ip)return o.COMPRESSED_RG11_EAC;if(a===ap)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===sp||a===rp||a===op||a===lp||a===cp||a===up||a===fp||a===hp||a===dp||a===pp||a===mp||a===gp||a===vp||a===_p)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(a===sp)return u===tn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===rp)return u===tn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===op)return u===tn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===lp)return u===tn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===cp)return u===tn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===up)return u===tn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===fp)return u===tn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===hp)return u===tn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===dp)return u===tn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===pp)return u===tn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===mp)return u===tn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===gp)return u===tn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===vp)return u===tn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===_p)return u===tn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===xp||a===yp||a===Sp)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(a===xp)return u===tn?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===yp)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Sp)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Mp||a===Ep||a===bp||a===Tp)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(a===Mp)return o.COMPRESSED_RED_RGTC1_EXT;if(a===Ep)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===bp)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Tp)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Ol?c.UNSIGNED_INT_24_8:c[a]!==void 0?c[a]:null}return{convert:n}}const $C=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,t2=`
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

}`;class e2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const a=new Qx(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,a=new ga({vertexShader:$C,fragmentShader:t2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Qi(new Gl(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class n2 extends Ao{constructor(t,n){super();const a=this;let r=null,o=1,u=null,f="local-floor",p=1,h=null,g=null,_=null,v=null,y=null,M=null;const b=typeof XRWebGLBinding<"u",S=new e2,x={},T=n.getContextAttributes();let C=null,N=null;const U=[],P=[],B=new qe;let X=null;const w=new Wi;w.viewport=new Sn;const O=new Wi;O.viewport=new Sn;const H=[w,O],$=new u1;let V=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(at){let dt=U[at];return dt===void 0&&(dt=new Ed,U[at]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(at){let dt=U[at];return dt===void 0&&(dt=new Ed,U[at]=dt),dt.getGripSpace()},this.getHand=function(at){let dt=U[at];return dt===void 0&&(dt=new Ed,U[at]=dt),dt.getHandSpace()};function W(at){const dt=P.indexOf(at.inputSource);if(dt===-1)return;const Ut=U[dt];Ut!==void 0&&(Ut.update(at.inputSource,at.frame,h||u),Ut.dispatchEvent({type:at.type,data:at.inputSource}))}function z(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",G);for(let at=0;at<U.length;at++){const dt=P[at];dt!==null&&(P[at]=null,U[at].disconnect(dt))}V=null,K=null,S.reset();for(const at in x)delete x[at];t.setRenderTarget(C),y=null,v=null,_=null,r=null,N=null,Ot.stop(),a.isPresenting=!1,t.setPixelRatio(X),t.setSize(B.width,B.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(at){o=at,a.isPresenting===!0&&pe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(at){f=at,a.isPresenting===!0&&pe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(at){h=at},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return _===null&&b&&(_=new XRWebGLBinding(r,n)),_},this.getFrame=function(){return M},this.getSession=function(){return r},this.setSession=async function(at){if(r=at,r!==null){if(C=t.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",z),r.addEventListener("inputsourceschange",G),T.xrCompatible!==!0&&await n.makeXRCompatible(),X=t.getPixelRatio(),t.getSize(B),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ut=null,Yt=null,Xt=null;T.depth&&(Xt=T.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Ut=T.stencil?vr:$a,Yt=T.stencil?Ol:pa);const Ee={colorFormat:n.RGBA8,depthFormat:Xt,scaleFactor:o};_=this.getBinding(),v=_.createProjectionLayer(Ee),r.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),N=new ha(v.textureWidth,v.textureHeight,{format:Zi,type:Ti,depthTexture:new Pl(v.textureWidth,v.textureHeight,Yt,void 0,void 0,void 0,void 0,void 0,void 0,Ut),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Ut={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:o};y=new XRWebGLLayer(r,n,Ut),r.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),N=new ha(y.framebufferWidth,y.framebufferHeight,{format:Zi,type:Ti,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(p),h=null,u=await r.requestReferenceSpace(f),Ot.setContext(r),Ot.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function G(at){for(let dt=0;dt<at.removed.length;dt++){const Ut=at.removed[dt],Yt=P.indexOf(Ut);Yt>=0&&(P[Yt]=null,U[Yt].disconnect(Ut))}for(let dt=0;dt<at.added.length;dt++){const Ut=at.added[dt];let Yt=P.indexOf(Ut);if(Yt===-1){for(let Ee=0;Ee<U.length;Ee++)if(Ee>=P.length){P.push(Ut),Yt=Ee;break}else if(P[Ee]===null){P[Ee]=Ut,Yt=Ee;break}if(Yt===-1)break}const Xt=U[Yt];Xt&&Xt.connect(Ut)}}const J=new lt,ft=new lt;function vt(at,dt,Ut){J.setFromMatrixPosition(dt.matrixWorld),ft.setFromMatrixPosition(Ut.matrixWorld);const Yt=J.distanceTo(ft),Xt=dt.projectionMatrix.elements,Ee=Ut.projectionMatrix.elements,Ke=Xt[14]/(Xt[10]-1),_e=Xt[14]/(Xt[10]+1),be=(Xt[9]+1)/Xt[5],Pe=(Xt[9]-1)/Xt[5],Bt=(Xt[8]-1)/Xt[0],xe=(Ee[8]+1)/Ee[0],k=Ke*Bt,Ne=Ke*xe,ye=Yt/(-Bt+xe),ue=ye*-Bt;if(dt.matrixWorld.decompose(at.position,at.quaternion,at.scale),at.translateX(ue),at.translateZ(ye),at.matrixWorld.compose(at.position,at.quaternion,at.scale),at.matrixWorldInverse.copy(at.matrixWorld).invert(),Xt[10]===-1)at.projectionMatrix.copy(dt.projectionMatrix),at.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const Ht=Ke+ye,F=_e+ye,A=k-ue,Q=Ne+(Yt-ue),pt=be*_e/F*Ht,gt=Pe*_e/F*Ht;at.projectionMatrix.makePerspective(A,Q,pt,gt,Ht,F),at.projectionMatrixInverse.copy(at.projectionMatrix).invert()}}function I(at,dt){dt===null?at.matrixWorld.copy(at.matrix):at.matrixWorld.multiplyMatrices(dt.matrixWorld,at.matrix),at.matrixWorldInverse.copy(at.matrixWorld).invert()}this.updateCamera=function(at){if(r===null)return;let dt=at.near,Ut=at.far;S.texture!==null&&(S.depthNear>0&&(dt=S.depthNear),S.depthFar>0&&(Ut=S.depthFar)),$.near=O.near=w.near=dt,$.far=O.far=w.far=Ut,(V!==$.near||K!==$.far)&&(r.updateRenderState({depthNear:$.near,depthFar:$.far}),V=$.near,K=$.far),$.layers.mask=at.layers.mask|6,w.layers.mask=$.layers.mask&3,O.layers.mask=$.layers.mask&5;const Yt=at.parent,Xt=$.cameras;I($,Yt);for(let Ee=0;Ee<Xt.length;Ee++)I(Xt[Ee],Yt);Xt.length===2?vt($,w,O):$.projectionMatrix.copy(w.projectionMatrix),j(at,$,Yt)};function j(at,dt,Ut){Ut===null?at.matrix.copy(dt.matrixWorld):(at.matrix.copy(Ut.matrixWorld),at.matrix.invert(),at.matrix.multiply(dt.matrixWorld)),at.matrix.decompose(at.position,at.quaternion,at.scale),at.updateMatrixWorld(!0),at.projectionMatrix.copy(dt.projectionMatrix),at.projectionMatrixInverse.copy(dt.projectionMatrixInverse),at.isPerspectiveCamera&&(at.fov=Ap*2*Math.atan(1/at.projectionMatrix.elements[5]),at.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(v===null&&y===null))return p},this.setFoveation=function(at){p=at,v!==null&&(v.fixedFoveation=at),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=at)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh($)},this.getCameraTexture=function(at){return x[at]};let _t=null;function At(at,dt){if(g=dt.getViewerPose(h||u),M=dt,g!==null){const Ut=g.views;y!==null&&(t.setRenderTargetFramebuffer(N,y.framebuffer),t.setRenderTarget(N));let Yt=!1;Ut.length!==$.cameras.length&&($.cameras.length=0,Yt=!0);for(let _e=0;_e<Ut.length;_e++){const be=Ut[_e];let Pe=null;if(y!==null)Pe=y.getViewport(be);else{const xe=_.getViewSubImage(v,be);Pe=xe.viewport,_e===0&&(t.setRenderTargetTextures(N,xe.colorTexture,xe.depthStencilTexture),t.setRenderTarget(N))}let Bt=H[_e];Bt===void 0&&(Bt=new Wi,Bt.layers.enable(_e),Bt.viewport=new Sn,H[_e]=Bt),Bt.matrix.fromArray(be.transform.matrix),Bt.matrix.decompose(Bt.position,Bt.quaternion,Bt.scale),Bt.projectionMatrix.fromArray(be.projectionMatrix),Bt.projectionMatrixInverse.copy(Bt.projectionMatrix).invert(),Bt.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),_e===0&&($.matrix.copy(Bt.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),Yt===!0&&$.cameras.push(Bt)}const Xt=r.enabledFeatures;if(Xt&&Xt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&b){_=a.getBinding();const _e=_.getDepthInformation(Ut[0]);_e&&_e.isValid&&_e.texture&&S.init(_e,r.renderState)}if(Xt&&Xt.includes("camera-access")&&b){t.state.unbindTexture(),_=a.getBinding();for(let _e=0;_e<Ut.length;_e++){const be=Ut[_e].camera;if(be){let Pe=x[be];Pe||(Pe=new Qx,x[be]=Pe);const Bt=_.getCameraImage(be);Pe.sourceTexture=Bt}}}}for(let Ut=0;Ut<U.length;Ut++){const Yt=P[Ut],Xt=U[Ut];Yt!==null&&Xt!==void 0&&Xt.update(Yt,dt,h||u)}_t&&_t(at,dt),dt.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:dt}),M=null}const Ot=new $x;Ot.setAnimationLoop(At),this.setAnimationLoop=function(at){_t=at},this.dispose=function(){}}}const lr=new ma,i2=new pn;function a2(c,t){function n(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function a(S,x){x.color.getRGB(S.fogColor.value,Yx(c)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function r(S,x,T,C,N){x.isMeshBasicMaterial||x.isMeshLambertMaterial?o(S,x):x.isMeshToonMaterial?(o(S,x),_(S,x)):x.isMeshPhongMaterial?(o(S,x),g(S,x)):x.isMeshStandardMaterial?(o(S,x),v(S,x),x.isMeshPhysicalMaterial&&y(S,x,N)):x.isMeshMatcapMaterial?(o(S,x),M(S,x)):x.isMeshDepthMaterial?o(S,x):x.isMeshDistanceMaterial?(o(S,x),b(S,x)):x.isMeshNormalMaterial?o(S,x):x.isLineBasicMaterial?(u(S,x),x.isLineDashedMaterial&&f(S,x)):x.isPointsMaterial?p(S,x,T,C):x.isSpriteMaterial?h(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function o(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,n(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,n(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===mi&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,n(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===mi&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,n(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,n(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const T=t.get(x),C=T.envMap,N=T.envMapRotation;C&&(S.envMap.value=C,lr.copy(N),lr.x*=-1,lr.y*=-1,lr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(lr.y*=-1,lr.z*=-1),S.envMapRotation.value.setFromMatrix4(i2.makeRotationFromEuler(lr)),S.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,S.aoMapTransform))}function u(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,n(x.map,S.mapTransform))}function f(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function p(S,x,T,C){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*T,S.scale.value=C*.5,x.map&&(S.map.value=x.map,n(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function h(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,n(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function g(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function _(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function v(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function y(S,x,T){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===mi&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=T.texture,S.transmissionSamplerSize.value.set(T.width,T.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,x){x.matcap&&(S.matcap.value=x.matcap)}function b(S,x){const T=t.get(x).light;S.referencePosition.value.setFromMatrixPosition(T.matrixWorld),S.nearDistance.value=T.shadow.camera.near,S.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:r}}function s2(c,t,n,a){let r={},o={},u=[];const f=c.getParameter(c.MAX_UNIFORM_BUFFER_BINDINGS);function p(T,C){const N=C.program;a.uniformBlockBinding(T,N)}function h(T,C){let N=r[T.id];N===void 0&&(M(T),N=g(T),r[T.id]=N,T.addEventListener("dispose",S));const U=C.program;a.updateUBOMapping(T,U);const P=t.render.frame;o[T.id]!==P&&(v(T),o[T.id]=P)}function g(T){const C=_();T.__bindingPointIndex=C;const N=c.createBuffer(),U=T.__size,P=T.usage;return c.bindBuffer(c.UNIFORM_BUFFER,N),c.bufferData(c.UNIFORM_BUFFER,U,P),c.bindBuffer(c.UNIFORM_BUFFER,null),c.bindBufferBase(c.UNIFORM_BUFFER,C,N),N}function _(){for(let T=0;T<f;T++)if(u.indexOf(T)===-1)return u.push(T),T;return Fe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(T){const C=r[T.id],N=T.uniforms,U=T.__cache;c.bindBuffer(c.UNIFORM_BUFFER,C);for(let P=0,B=N.length;P<B;P++){const X=Array.isArray(N[P])?N[P]:[N[P]];for(let w=0,O=X.length;w<O;w++){const H=X[w];if(y(H,P,w,U)===!0){const $=H.__offset,V=Array.isArray(H.value)?H.value:[H.value];let K=0;for(let W=0;W<V.length;W++){const z=V[W],G=b(z);typeof z=="number"||typeof z=="boolean"?(H.__data[0]=z,c.bufferSubData(c.UNIFORM_BUFFER,$+K,H.__data)):z.isMatrix3?(H.__data[0]=z.elements[0],H.__data[1]=z.elements[1],H.__data[2]=z.elements[2],H.__data[3]=0,H.__data[4]=z.elements[3],H.__data[5]=z.elements[4],H.__data[6]=z.elements[5],H.__data[7]=0,H.__data[8]=z.elements[6],H.__data[9]=z.elements[7],H.__data[10]=z.elements[8],H.__data[11]=0):(z.toArray(H.__data,K),K+=G.storage/Float32Array.BYTES_PER_ELEMENT)}c.bufferSubData(c.UNIFORM_BUFFER,$,H.__data)}}}c.bindBuffer(c.UNIFORM_BUFFER,null)}function y(T,C,N,U){const P=T.value,B=C+"_"+N;if(U[B]===void 0)return typeof P=="number"||typeof P=="boolean"?U[B]=P:U[B]=P.clone(),!0;{const X=U[B];if(typeof P=="number"||typeof P=="boolean"){if(X!==P)return U[B]=P,!0}else if(X.equals(P)===!1)return X.copy(P),!0}return!1}function M(T){const C=T.uniforms;let N=0;const U=16;for(let B=0,X=C.length;B<X;B++){const w=Array.isArray(C[B])?C[B]:[C[B]];for(let O=0,H=w.length;O<H;O++){const $=w[O],V=Array.isArray($.value)?$.value:[$.value];for(let K=0,W=V.length;K<W;K++){const z=V[K],G=b(z),J=N%U,ft=J%G.boundary,vt=J+ft;N+=ft,vt!==0&&U-vt<G.storage&&(N+=U-vt),$.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=N,N+=G.storage}}}const P=N%U;return P>0&&(N+=U-P),T.__size=N,T.__cache={},this}function b(T){const C={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(C.boundary=4,C.storage=4):T.isVector2?(C.boundary=8,C.storage=8):T.isVector3||T.isColor?(C.boundary=16,C.storage=12):T.isVector4?(C.boundary=16,C.storage=16):T.isMatrix3?(C.boundary=48,C.storage=48):T.isMatrix4?(C.boundary=64,C.storage=64):T.isTexture?pe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):pe("WebGLRenderer: Unsupported uniform value type.",T),C}function S(T){const C=T.target;C.removeEventListener("dispose",S);const N=u.indexOf(C.__bindingPointIndex);u.splice(N,1),c.deleteBuffer(r[C.id]),delete r[C.id],delete o[C.id]}function x(){for(const T in r)c.deleteBuffer(r[T]);u=[],r={},o={}}return{bind:p,update:h,dispose:x}}const r2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ra=null;function o2(){return ra===null&&(ra=new JT(r2,16,16,Eo,Ja),ra.name="DFG_LUT",ra.minFilter=Zn,ra.magFilter=Zn,ra.wrapS=ja,ra.wrapT=ja,ra.generateMipmaps=!1,ra.needsUpdate=!0),ra}class l2{constructor(t={}){const{canvas:n=TT(),context:a=null,depth:r=!0,stencil:o=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:h=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:y=Ti}=t;this.isWebGLRenderer=!0;let M;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=a.getContextAttributes().alpha}else M=u;const b=y,S=new Set([Hp,Ip,Fp]),x=new Set([Ti,pa,Ul,Ol,Pp,Bp]),T=new Uint32Array(4),C=new Int32Array(4);let N=null,U=null;const P=[],B=[];let X=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let O=!1;this._outputColorSpace=si;let H=0,$=0,V=null,K=-1,W=null;const z=new Sn,G=new Sn;let J=null;const ft=new ke(0);let vt=0,I=n.width,j=n.height,_t=1,At=null,Ot=null;const at=new Sn(0,0,I,j),dt=new Sn(0,0,I,j);let Ut=!1;const Yt=new Wp;let Xt=!1,Ee=!1;const Ke=new pn,_e=new lt,be=new Sn,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Bt=!1;function xe(){return V===null?_t:1}let k=a;function Ne(D,tt){return n.getContext(D,tt)}try{const D={alpha:!0,depth:r,stencil:o,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:h,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Op}`),n.addEventListener("webglcontextlost",re,!1),n.addEventListener("webglcontextrestored",ze,!1),n.addEventListener("webglcontextcreationerror",Te,!1),k===null){const tt="webgl2";if(k=Ne(tt,D),k===null)throw Ne(tt)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw Fe("WebGLRenderer: "+D.message),D}let ye,ue,Ht,F,A,Q,pt,gt,ht,Zt,Nt,Kt,se,bt,Mt,It,Gt,Dt,fe,Z,zt,Tt,Ft,Et;function yt(){ye=new oR(k),ye.init(),Tt=new JC(k,ye),ue=new Jw(k,ye,t,Tt),Ht=new KC(k,ye),ue.reversedDepthBuffer&&v&&Ht.buffers.depth.setReversed(!0),F=new uR(k),A=new zC,Q=new QC(k,ye,Ht,A,ue,Tt,F),pt=new tR(w),gt=new rR(w),ht=new p1(k),Ft=new Kw(k,ht),Zt=new lR(k,ht,F,Ft),Nt=new hR(k,Zt,ht,F),fe=new fR(k,ue,Q),It=new $w(A),Kt=new OC(w,pt,gt,ye,ue,Ft,It),se=new a2(w,A),bt=new BC,Mt=new kC(ye),Dt=new Zw(w,pt,gt,Ht,Nt,M,p),Gt=new jC(w,Nt,ue),Et=new s2(k,F,ue,Ht),Z=new Qw(k,ye,F),zt=new cR(k,ye,F),F.programs=Kt.programs,w.capabilities=ue,w.extensions=ye,w.properties=A,w.renderLists=bt,w.shadowMap=Gt,w.state=Ht,w.info=F}yt(),b!==Ti&&(X=new pR(b,n.width,n.height,r,o));const Ct=new n2(w,k);this.xr=Ct,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const D=ye.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=ye.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(D){D!==void 0&&(_t=D,this.setSize(I,j,!1))},this.getSize=function(D){return D.set(I,j)},this.setSize=function(D,tt,ct=!0){if(Ct.isPresenting){pe("WebGLRenderer: Can't change size while VR device is presenting.");return}I=D,j=tt,n.width=Math.floor(D*_t),n.height=Math.floor(tt*_t),ct===!0&&(n.style.width=D+"px",n.style.height=tt+"px"),X!==null&&X.setSize(n.width,n.height),this.setViewport(0,0,D,tt)},this.getDrawingBufferSize=function(D){return D.set(I*_t,j*_t).floor()},this.setDrawingBufferSize=function(D,tt,ct){I=D,j=tt,_t=ct,n.width=Math.floor(D*ct),n.height=Math.floor(tt*ct),this.setViewport(0,0,D,tt)},this.setEffects=function(D){if(b===Ti){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(D){for(let tt=0;tt<D.length;tt++)if(D[tt].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}X.setEffects(D||[])},this.getCurrentViewport=function(D){return D.copy(z)},this.getViewport=function(D){return D.copy(at)},this.setViewport=function(D,tt,ct,rt){D.isVector4?at.set(D.x,D.y,D.z,D.w):at.set(D,tt,ct,rt),Ht.viewport(z.copy(at).multiplyScalar(_t).round())},this.getScissor=function(D){return D.copy(dt)},this.setScissor=function(D,tt,ct,rt){D.isVector4?dt.set(D.x,D.y,D.z,D.w):dt.set(D,tt,ct,rt),Ht.scissor(G.copy(dt).multiplyScalar(_t).round())},this.getScissorTest=function(){return Ut},this.setScissorTest=function(D){Ht.setScissorTest(Ut=D)},this.setOpaqueSort=function(D){At=D},this.setTransparentSort=function(D){Ot=D},this.getClearColor=function(D){return D.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor(...arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha(...arguments)},this.clear=function(D=!0,tt=!0,ct=!0){let rt=0;if(D){let nt=!1;if(V!==null){const Pt=V.texture.format;nt=S.has(Pt)}if(nt){const Pt=V.texture.type,qt=x.has(Pt),Lt=Dt.getClearColor(),Wt=Dt.getClearAlpha(),jt=Lt.r,ie=Lt.g,Qt=Lt.b;qt?(T[0]=jt,T[1]=ie,T[2]=Qt,T[3]=Wt,k.clearBufferuiv(k.COLOR,0,T)):(C[0]=jt,C[1]=ie,C[2]=Qt,C[3]=Wt,k.clearBufferiv(k.COLOR,0,C))}else rt|=k.COLOR_BUFFER_BIT}tt&&(rt|=k.DEPTH_BUFFER_BIT),ct&&(rt|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",re,!1),n.removeEventListener("webglcontextrestored",ze,!1),n.removeEventListener("webglcontextcreationerror",Te,!1),Dt.dispose(),bt.dispose(),Mt.dispose(),A.dispose(),pt.dispose(),gt.dispose(),Nt.dispose(),Ft.dispose(),Et.dispose(),Kt.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",ns),Ct.removeEventListener("sessionend",Ji),ei.stop()};function re(D){D.preventDefault(),d_("WebGLRenderer: Context Lost."),O=!0}function ze(){d_("WebGLRenderer: Context Restored."),O=!1;const D=F.autoReset,tt=Gt.enabled,ct=Gt.autoUpdate,rt=Gt.needsUpdate,nt=Gt.type;yt(),F.autoReset=D,Gt.enabled=tt,Gt.autoUpdate=ct,Gt.needsUpdate=rt,Gt.type=nt}function Te(D){Fe("WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function mn(D){const tt=D.target;tt.removeEventListener("dispose",mn),Bn(tt)}function Bn(D){Fs(D),A.remove(D)}function Fs(D){const tt=A.get(D).programs;tt!==void 0&&(tt.forEach(function(ct){Kt.releaseProgram(ct)}),D.isShaderMaterial&&Kt.releaseShaderCache(D))}this.renderBufferDirect=function(D,tt,ct,rt,nt,Pt){tt===null&&(tt=Pe);const qt=nt.isMesh&&nt.matrixWorld.determinant()<0,Lt=We(D,tt,ct,rt,nt);Ht.setMaterial(rt,qt);let Wt=ct.index,jt=1;if(rt.wireframe===!0){if(Wt=Zt.getWireframeAttribute(ct),Wt===void 0)return;jt=2}const ie=ct.drawRange,Qt=ct.attributes.position;let oe=ie.start*jt,Be=(ie.start+ie.count)*jt;Pt!==null&&(oe=Math.max(oe,Pt.start*jt),Be=Math.min(Be,(Pt.start+Pt.count)*jt)),Wt!==null?(oe=Math.max(oe,0),Be=Math.min(Be,Wt.count)):Qt!=null&&(oe=Math.max(oe,0),Be=Math.min(Be,Qt.count));const rn=Be-oe;if(rn<0||rn===1/0)return;Ft.setup(nt,rt,Lt,ct,Wt);let en,He=Z;if(Wt!==null&&(en=ht.get(Wt),He=zt,He.setIndex(en)),nt.isMesh)rt.wireframe===!0?(Ht.setLineWidth(rt.wireframeLinewidth*xe()),He.setMode(k.LINES)):He.setMode(k.TRIANGLES);else if(nt.isLine){let ee=rt.linewidth;ee===void 0&&(ee=1),Ht.setLineWidth(ee*xe()),nt.isLineSegments?He.setMode(k.LINES):nt.isLineLoop?He.setMode(k.LINE_LOOP):He.setMode(k.LINE_STRIP)}else nt.isPoints?He.setMode(k.POINTS):nt.isSprite&&He.setMode(k.TRIANGLES);if(nt.isBatchedMesh)if(nt._multiDrawInstances!==null)zl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),He.renderMultiDrawInstances(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount,nt._multiDrawInstances);else if(ye.get("WEBGL_multi_draw"))He.renderMultiDraw(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount);else{const ee=nt._multiDrawStarts,Ye=nt._multiDrawCounts,ce=nt._multiDrawCount,In=Wt?ht.get(Wt).bytesPerElement:1,_a=A.get(rt).currentProgram.getUniforms();for(let Hn=0;Hn<ce;Hn++)_a.setValue(k,"_gl_DrawID",Hn),He.render(ee[Hn]/In,Ye[Hn])}else if(nt.isInstancedMesh)He.renderInstances(oe,rn,nt.count);else if(ct.isInstancedBufferGeometry){const ee=ct._maxInstanceCount!==void 0?ct._maxInstanceCount:1/0,Ye=Math.min(ct.instanceCount,ee);He.renderInstances(oe,rn,Ye)}else He.render(oe,rn)};function es(D,tt,ct){D.transparent===!0&&D.side===Ya&&D.forceSinglePass===!1?(D.side=mi,D.needsUpdate=!0,Xe(D,tt,ct),D.side=Bs,D.needsUpdate=!0,Xe(D,tt,ct),D.side=Ya):Xe(D,tt,ct)}this.compile=function(D,tt,ct=null){ct===null&&(ct=D),U=Mt.get(ct),U.init(tt),B.push(U),ct.traverseVisible(function(nt){nt.isLight&&nt.layers.test(tt.layers)&&(U.pushLight(nt),nt.castShadow&&U.pushShadow(nt))}),D!==ct&&D.traverseVisible(function(nt){nt.isLight&&nt.layers.test(tt.layers)&&(U.pushLight(nt),nt.castShadow&&U.pushShadow(nt))}),U.setupLights();const rt=new Set;return D.traverse(function(nt){if(!(nt.isMesh||nt.isPoints||nt.isLine||nt.isSprite))return;const Pt=nt.material;if(Pt)if(Array.isArray(Pt))for(let qt=0;qt<Pt.length;qt++){const Lt=Pt[qt];es(Lt,ct,nt),rt.add(Lt)}else es(Pt,ct,nt),rt.add(Pt)}),U=B.pop(),rt},this.compileAsync=function(D,tt,ct=null){const rt=this.compile(D,tt,ct);return new Promise(nt=>{function Pt(){if(rt.forEach(function(qt){A.get(qt).currentProgram.isReady()&&rt.delete(qt)}),rt.size===0){nt(D);return}setTimeout(Pt,10)}ye.get("KHR_parallel_shader_compile")!==null?Pt():setTimeout(Pt,10)})};let va=null;function Is(D){va&&va(D)}function ns(){ei.stop()}function Ji(){ei.start()}const ei=new $x;ei.setAnimationLoop(Is),typeof self<"u"&&ei.setContext(self),this.setAnimationLoop=function(D){va=D,Ct.setAnimationLoop(D),D===null?ei.stop():ei.start()},Ct.addEventListener("sessionstart",ns),Ct.addEventListener("sessionend",Ji),this.render=function(D,tt){if(tt!==void 0&&tt.isCamera!==!0){Fe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;const ct=Ct.enabled===!0&&Ct.isPresenting===!0,rt=X!==null&&(V===null||ct)&&X.begin(w,V);if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),tt.parent===null&&tt.matrixWorldAutoUpdate===!0&&tt.updateMatrixWorld(),Ct.enabled===!0&&Ct.isPresenting===!0&&(X===null||X.isCompositing()===!1)&&(Ct.cameraAutoUpdate===!0&&Ct.updateCamera(tt),tt=Ct.getCamera()),D.isScene===!0&&D.onBeforeRender(w,D,tt,V),U=Mt.get(D,B.length),U.init(tt),B.push(U),Ke.multiplyMatrices(tt.projectionMatrix,tt.matrixWorldInverse),Yt.setFromProjectionMatrix(Ke,ua,tt.reversedDepth),Ee=this.localClippingEnabled,Xt=It.init(this.clippingPlanes,Ee),N=bt.get(D,P.length),N.init(),P.push(N),Ct.enabled===!0&&Ct.isPresenting===!0){const qt=w.xr.getDepthSensingMesh();qt!==null&&ne(qt,tt,-1/0,w.sortObjects)}ne(D,tt,0,w.sortObjects),N.finish(),w.sortObjects===!0&&N.sort(At,Ot),Bt=Ct.enabled===!1||Ct.isPresenting===!1||Ct.hasDepthSensing()===!1,Bt&&Dt.addToRenderList(N,D),this.info.render.frame++,Xt===!0&&It.beginShadows();const nt=U.state.shadowsArray;if(Gt.render(nt,D,tt),Xt===!0&&It.endShadows(),this.info.autoReset===!0&&this.info.reset(),(rt&&X.hasRenderPass())===!1){const qt=N.opaque,Lt=N.transmissive;if(U.setupLights(),tt.isArrayCamera){const Wt=tt.cameras;if(Lt.length>0)for(let jt=0,ie=Wt.length;jt<ie;jt++){const Qt=Wt[jt];Se(qt,Lt,D,Qt)}Bt&&Dt.render(D);for(let jt=0,ie=Wt.length;jt<ie;jt++){const Qt=Wt[jt];wt(N,D,Qt,Qt.viewport)}}else Lt.length>0&&Se(qt,Lt,D,tt),Bt&&Dt.render(D),wt(N,D,tt)}V!==null&&$===0&&(Q.updateMultisampleRenderTarget(V),Q.updateRenderTargetMipmap(V)),rt&&X.end(w),D.isScene===!0&&D.onAfterRender(w,D,tt),Ft.resetDefaultState(),K=-1,W=null,B.pop(),B.length>0?(U=B[B.length-1],Xt===!0&&It.setGlobalState(w.clippingPlanes,U.state.camera)):U=null,P.pop(),P.length>0?N=P[P.length-1]:N=null};function ne(D,tt,ct,rt){if(D.visible===!1)return;if(D.layers.test(tt.layers)){if(D.isGroup)ct=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(tt);else if(D.isLight)U.pushLight(D),D.castShadow&&U.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||Yt.intersectsSprite(D)){rt&&be.setFromMatrixPosition(D.matrixWorld).applyMatrix4(Ke);const qt=Nt.update(D),Lt=D.material;Lt.visible&&N.push(D,qt,Lt,ct,be.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||Yt.intersectsObject(D))){const qt=Nt.update(D),Lt=D.material;if(rt&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),be.copy(D.boundingSphere.center)):(qt.boundingSphere===null&&qt.computeBoundingSphere(),be.copy(qt.boundingSphere.center)),be.applyMatrix4(D.matrixWorld).applyMatrix4(Ke)),Array.isArray(Lt)){const Wt=qt.groups;for(let jt=0,ie=Wt.length;jt<ie;jt++){const Qt=Wt[jt],oe=Lt[Qt.materialIndex];oe&&oe.visible&&N.push(D,qt,oe,ct,be.z,Qt)}}else Lt.visible&&N.push(D,qt,Lt,ct,be.z,null)}}const Pt=D.children;for(let qt=0,Lt=Pt.length;qt<Lt;qt++)ne(Pt[qt],tt,ct,rt)}function wt(D,tt,ct,rt){const{opaque:nt,transmissive:Pt,transparent:qt}=D;U.setupLightsView(ct),Xt===!0&&It.setGlobalState(w.clippingPlanes,ct),rt&&Ht.viewport(z.copy(rt)),nt.length>0&&Re(nt,tt,ct),Pt.length>0&&Re(Pt,tt,ct),qt.length>0&&Re(qt,tt,ct),Ht.buffers.depth.setTest(!0),Ht.buffers.depth.setMask(!0),Ht.buffers.color.setMask(!0),Ht.setPolygonOffset(!1)}function Se(D,tt,ct,rt){if((ct.isScene===!0?ct.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[rt.id]===void 0){const oe=ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[rt.id]=new ha(1,1,{generateMipmaps:!0,type:oe?Ja:Ti,minFilter:zs,samples:ue.samples,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ie.workingColorSpace})}const Pt=U.state.transmissionRenderTarget[rt.id],qt=rt.viewport||z;Pt.setSize(qt.z*w.transmissionResolutionScale,qt.w*w.transmissionResolutionScale);const Lt=w.getRenderTarget(),Wt=w.getActiveCubeFace(),jt=w.getActiveMipmapLevel();w.setRenderTarget(Pt),w.getClearColor(ft),vt=w.getClearAlpha(),vt<1&&w.setClearColor(16777215,.5),w.clear(),Bt&&Dt.render(ct);const ie=w.toneMapping;w.toneMapping=Ki;const Qt=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),U.setupLightsView(rt),Xt===!0&&It.setGlobalState(w.clippingPlanes,rt),Re(D,ct,rt),Q.updateMultisampleRenderTarget(Pt),Q.updateRenderTargetMipmap(Pt),ye.has("WEBGL_multisampled_render_to_texture")===!1){let oe=!1;for(let Be=0,rn=tt.length;Be<rn;Be++){const en=tt[Be],{object:He,geometry:ee,material:Ye,group:ce}=en;if(Ye.side===Ya&&He.layers.test(rt.layers)){const In=Ye.side;Ye.side=mi,Ye.needsUpdate=!0,gn(He,ct,rt,ee,Ye,ce),Ye.side=In,Ye.needsUpdate=!0,oe=!0}}oe===!0&&(Q.updateMultisampleRenderTarget(Pt),Q.updateRenderTargetMipmap(Pt))}w.setRenderTarget(Lt,Wt,jt),w.setClearColor(ft,vt),Qt!==void 0&&(rt.viewport=Qt),w.toneMapping=ie}function Re(D,tt,ct){const rt=tt.isScene===!0?tt.overrideMaterial:null;for(let nt=0,Pt=D.length;nt<Pt;nt++){const qt=D[nt],{object:Lt,geometry:Wt,group:jt}=qt;let ie=qt.material;ie.allowOverride===!0&&rt!==null&&(ie=rt),Lt.layers.test(ct.layers)&&gn(Lt,tt,ct,Wt,ie,jt)}}function gn(D,tt,ct,rt,nt,Pt){D.onBeforeRender(w,tt,ct,rt,nt,Pt),D.modelViewMatrix.multiplyMatrices(ct.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),nt.onBeforeRender(w,tt,ct,rt,D,Pt),nt.transparent===!0&&nt.side===Ya&&nt.forceSinglePass===!1?(nt.side=mi,nt.needsUpdate=!0,w.renderBufferDirect(ct,tt,rt,nt,D,Pt),nt.side=Bs,nt.needsUpdate=!0,w.renderBufferDirect(ct,tt,rt,nt,D,Pt),nt.side=Ya):w.renderBufferDirect(ct,tt,rt,nt,D,Pt),D.onAfterRender(w,tt,ct,rt,nt,Pt)}function Xe(D,tt,ct){tt.isScene!==!0&&(tt=Pe);const rt=A.get(D),nt=U.state.lights,Pt=U.state.shadowsArray,qt=nt.state.version,Lt=Kt.getParameters(D,nt.state,Pt,tt,ct),Wt=Kt.getProgramCacheKey(Lt);let jt=rt.programs;rt.environment=D.isMeshStandardMaterial?tt.environment:null,rt.fog=tt.fog,rt.envMap=(D.isMeshStandardMaterial?gt:pt).get(D.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&D.envMap===null?tt.environmentRotation:D.envMapRotation,jt===void 0&&(D.addEventListener("dispose",mn),jt=new Map,rt.programs=jt);let ie=jt.get(Wt);if(ie!==void 0){if(rt.currentProgram===ie&&rt.lightsStateVersion===qt)return Cn(D,Lt),ie}else Lt.uniforms=Kt.getUniforms(D),D.onBeforeCompile(Lt,w),ie=Kt.acquireProgram(Lt,Wt),jt.set(Wt,ie),rt.uniforms=Lt.uniforms;const Qt=rt.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Qt.clippingPlanes=It.uniform),Cn(D,Lt),rt.needsLights=hn(D),rt.lightsStateVersion=qt,rt.needsLights&&(Qt.ambientLightColor.value=nt.state.ambient,Qt.lightProbe.value=nt.state.probe,Qt.directionalLights.value=nt.state.directional,Qt.directionalLightShadows.value=nt.state.directionalShadow,Qt.spotLights.value=nt.state.spot,Qt.spotLightShadows.value=nt.state.spotShadow,Qt.rectAreaLights.value=nt.state.rectArea,Qt.ltc_1.value=nt.state.rectAreaLTC1,Qt.ltc_2.value=nt.state.rectAreaLTC2,Qt.pointLights.value=nt.state.point,Qt.pointLightShadows.value=nt.state.pointShadow,Qt.hemisphereLights.value=nt.state.hemi,Qt.directionalShadowMap.value=nt.state.directionalShadowMap,Qt.directionalShadowMatrix.value=nt.state.directionalShadowMatrix,Qt.spotShadowMap.value=nt.state.spotShadowMap,Qt.spotLightMatrix.value=nt.state.spotLightMatrix,Qt.spotLightMap.value=nt.state.spotLightMap,Qt.pointShadowMap.value=nt.state.pointShadowMap,Qt.pointShadowMatrix.value=nt.state.pointShadowMatrix),rt.currentProgram=ie,rt.uniformsList=null,ie}function vn(D){if(D.uniformsList===null){const tt=D.currentProgram.getUniforms();D.uniformsList=Ru.seqWithValue(tt.seq,D.uniforms)}return D.uniformsList}function Cn(D,tt){const ct=A.get(D);ct.outputColorSpace=tt.outputColorSpace,ct.batching=tt.batching,ct.batchingColor=tt.batchingColor,ct.instancing=tt.instancing,ct.instancingColor=tt.instancingColor,ct.instancingMorph=tt.instancingMorph,ct.skinning=tt.skinning,ct.morphTargets=tt.morphTargets,ct.morphNormals=tt.morphNormals,ct.morphColors=tt.morphColors,ct.morphTargetsCount=tt.morphTargetsCount,ct.numClippingPlanes=tt.numClippingPlanes,ct.numIntersection=tt.numClipIntersection,ct.vertexAlphas=tt.vertexAlphas,ct.vertexTangents=tt.vertexTangents,ct.toneMapping=tt.toneMapping}function We(D,tt,ct,rt,nt){tt.isScene!==!0&&(tt=Pe),Q.resetTextureUnits();const Pt=tt.fog,qt=rt.isMeshStandardMaterial?tt.environment:null,Lt=V===null?w.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:bo,Wt=(rt.isMeshStandardMaterial?gt:pt).get(rt.envMap||qt),jt=rt.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,ie=!!ct.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),Qt=!!ct.morphAttributes.position,oe=!!ct.morphAttributes.normal,Be=!!ct.morphAttributes.color;let rn=Ki;rt.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(rn=w.toneMapping);const en=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,He=en!==void 0?en.length:0,ee=A.get(rt),Ye=U.state.lights;if(Xt===!0&&(Ee===!0||D!==W)){const Vn=D===W&&rt.id===K;It.setState(rt,D,Vn)}let ce=!1;rt.version===ee.__version?(ee.needsLights&&ee.lightsStateVersion!==Ye.state.version||ee.outputColorSpace!==Lt||nt.isBatchedMesh&&ee.batching===!1||!nt.isBatchedMesh&&ee.batching===!0||nt.isBatchedMesh&&ee.batchingColor===!0&&nt.colorTexture===null||nt.isBatchedMesh&&ee.batchingColor===!1&&nt.colorTexture!==null||nt.isInstancedMesh&&ee.instancing===!1||!nt.isInstancedMesh&&ee.instancing===!0||nt.isSkinnedMesh&&ee.skinning===!1||!nt.isSkinnedMesh&&ee.skinning===!0||nt.isInstancedMesh&&ee.instancingColor===!0&&nt.instanceColor===null||nt.isInstancedMesh&&ee.instancingColor===!1&&nt.instanceColor!==null||nt.isInstancedMesh&&ee.instancingMorph===!0&&nt.morphTexture===null||nt.isInstancedMesh&&ee.instancingMorph===!1&&nt.morphTexture!==null||ee.envMap!==Wt||rt.fog===!0&&ee.fog!==Pt||ee.numClippingPlanes!==void 0&&(ee.numClippingPlanes!==It.numPlanes||ee.numIntersection!==It.numIntersection)||ee.vertexAlphas!==jt||ee.vertexTangents!==ie||ee.morphTargets!==Qt||ee.morphNormals!==oe||ee.morphColors!==Be||ee.toneMapping!==rn||ee.morphTargetsCount!==He)&&(ce=!0):(ce=!0,ee.__version=rt.version);let In=ee.currentProgram;ce===!0&&(In=Xe(rt,tt,nt));let _a=!1,Hn=!1,wi=!1;const Qe=In.getUniforms(),Gn=ee.uniforms;if(Ht.useProgram(In.program)&&(_a=!0,Hn=!0,wi=!0),rt.id!==K&&(K=rt.id,Hn=!0),_a||W!==D){Ht.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),Qe.setValue(k,"projectionMatrix",D.projectionMatrix),Qe.setValue(k,"viewMatrix",D.matrixWorldInverse);const kn=Qe.map.cameraPosition;kn!==void 0&&kn.setValue(k,_e.setFromMatrixPosition(D.matrixWorld)),ue.logarithmicDepthBuffer&&Qe.setValue(k,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&Qe.setValue(k,"isOrthographic",D.isOrthographicCamera===!0),W!==D&&(W=D,Hn=!0,wi=!0)}if(ee.needsLights&&(Ye.state.directionalShadowMap.length>0&&Qe.setValue(k,"directionalShadowMap",Ye.state.directionalShadowMap,Q),Ye.state.spotShadowMap.length>0&&Qe.setValue(k,"spotShadowMap",Ye.state.spotShadowMap,Q),Ye.state.pointShadowMap.length>0&&Qe.setValue(k,"pointShadowMap",Ye.state.pointShadowMap,Q)),nt.isSkinnedMesh){Qe.setOptional(k,nt,"bindMatrix"),Qe.setOptional(k,nt,"bindMatrixInverse");const Vn=nt.skeleton;Vn&&(Vn.boneTexture===null&&Vn.computeBoneTexture(),Qe.setValue(k,"boneTexture",Vn.boneTexture,Q))}nt.isBatchedMesh&&(Qe.setOptional(k,nt,"batchingTexture"),Qe.setValue(k,"batchingTexture",nt._matricesTexture,Q),Qe.setOptional(k,nt,"batchingIdTexture"),Qe.setValue(k,"batchingIdTexture",nt._indirectTexture,Q),Qe.setOptional(k,nt,"batchingColorTexture"),nt._colorsTexture!==null&&Qe.setValue(k,"batchingColorTexture",nt._colorsTexture,Q));const Dn=ct.morphAttributes;if((Dn.position!==void 0||Dn.normal!==void 0||Dn.color!==void 0)&&fe.update(nt,ct,In),(Hn||ee.receiveShadow!==nt.receiveShadow)&&(ee.receiveShadow=nt.receiveShadow,Qe.setValue(k,"receiveShadow",nt.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(Gn.envMap.value=Wt,Gn.flipEnvMap.value=Wt.isCubeTexture&&Wt.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&tt.environment!==null&&(Gn.envMapIntensity.value=tt.environmentIntensity),Gn.dfgLUT!==void 0&&(Gn.dfgLUT.value=o2()),Hn&&(Qe.setValue(k,"toneMappingExposure",w.toneMappingExposure),ee.needsLights&&ln(Gn,wi),Pt&&rt.fog===!0&&se.refreshFogUniforms(Gn,Pt),se.refreshMaterialUniforms(Gn,rt,_t,j,U.state.transmissionRenderTarget[D.id]),Ru.upload(k,vn(ee),Gn,Q)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(Ru.upload(k,vn(ee),Gn,Q),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&Qe.setValue(k,"center",nt.center),Qe.setValue(k,"modelViewMatrix",nt.modelViewMatrix),Qe.setValue(k,"normalMatrix",nt.normalMatrix),Qe.setValue(k,"modelMatrix",nt.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const Vn=rt.uniformsGroups;for(let kn=0,yr=Vn.length;kn<yr;kn++){const Fi=Vn[kn];Et.update(Fi,In),Et.bind(Fi,In)}}return In}function ln(D,tt){D.ambientLightColor.needsUpdate=tt,D.lightProbe.needsUpdate=tt,D.directionalLights.needsUpdate=tt,D.directionalLightShadows.needsUpdate=tt,D.pointLights.needsUpdate=tt,D.pointLightShadows.needsUpdate=tt,D.spotLights.needsUpdate=tt,D.spotLightShadows.needsUpdate=tt,D.rectAreaLights.needsUpdate=tt,D.hemisphereLights.needsUpdate=tt}function hn(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(D,tt,ct){const rt=A.get(D);rt.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,rt.__autoAllocateDepthBuffer===!1&&(rt.__useRenderToTexture=!1),A.get(D.texture).__webglTexture=tt,A.get(D.depthTexture).__webglTexture=rt.__autoAllocateDepthBuffer?void 0:ct,rt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,tt){const ct=A.get(D);ct.__webglFramebuffer=tt,ct.__useDefaultFramebuffer=tt===void 0};const Le=k.createFramebuffer();this.setRenderTarget=function(D,tt=0,ct=0){V=D,H=tt,$=ct;let rt=null,nt=!1,Pt=!1;if(D){const Lt=A.get(D);if(Lt.__useDefaultFramebuffer!==void 0){Ht.bindFramebuffer(k.FRAMEBUFFER,Lt.__webglFramebuffer),z.copy(D.viewport),G.copy(D.scissor),J=D.scissorTest,Ht.viewport(z),Ht.scissor(G),Ht.setScissorTest(J),K=-1;return}else if(Lt.__webglFramebuffer===void 0)Q.setupRenderTarget(D);else if(Lt.__hasExternalTextures)Q.rebindTextures(D,A.get(D.texture).__webglTexture,A.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const ie=D.depthTexture;if(Lt.__boundDepthTexture!==ie){if(ie!==null&&A.has(ie)&&(D.width!==ie.image.width||D.height!==ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(D)}}const Wt=D.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(Pt=!0);const jt=A.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(jt[tt])?rt=jt[tt][ct]:rt=jt[tt],nt=!0):D.samples>0&&Q.useMultisampledRTT(D)===!1?rt=A.get(D).__webglMultisampledFramebuffer:Array.isArray(jt)?rt=jt[ct]:rt=jt,z.copy(D.viewport),G.copy(D.scissor),J=D.scissorTest}else z.copy(at).multiplyScalar(_t).floor(),G.copy(dt).multiplyScalar(_t).floor(),J=Ut;if(ct!==0&&(rt=Le),Ht.bindFramebuffer(k.FRAMEBUFFER,rt)&&Ht.drawBuffers(D,rt),Ht.viewport(z),Ht.scissor(G),Ht.setScissorTest(J),nt){const Lt=A.get(D.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Lt.__webglTexture,ct)}else if(Pt){const Lt=tt;for(let Wt=0;Wt<D.textures.length;Wt++){const jt=A.get(D.textures[Wt]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Wt,jt.__webglTexture,ct,Lt)}}else if(D!==null&&ct!==0){const Lt=A.get(D.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Lt.__webglTexture,ct)}K=-1},this.readRenderTargetPixels=function(D,tt,ct,rt,nt,Pt,qt,Lt=0){if(!(D&&D.isWebGLRenderTarget)){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Wt=A.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&qt!==void 0&&(Wt=Wt[qt]),Wt){Ht.bindFramebuffer(k.FRAMEBUFFER,Wt);try{const jt=D.textures[Lt],ie=jt.format,Qt=jt.type;if(!ue.textureFormatReadable(ie)){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ue.textureTypeReadable(Qt)){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}tt>=0&&tt<=D.width-rt&&ct>=0&&ct<=D.height-nt&&(D.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Lt),k.readPixels(tt,ct,rt,nt,Tt.convert(ie),Tt.convert(Qt),Pt))}finally{const jt=V!==null?A.get(V).__webglFramebuffer:null;Ht.bindFramebuffer(k.FRAMEBUFFER,jt)}}},this.readRenderTargetPixelsAsync=async function(D,tt,ct,rt,nt,Pt,qt,Lt=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Wt=A.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&qt!==void 0&&(Wt=Wt[qt]),Wt)if(tt>=0&&tt<=D.width-rt&&ct>=0&&ct<=D.height-nt){Ht.bindFramebuffer(k.FRAMEBUFFER,Wt);const jt=D.textures[Lt],ie=jt.format,Qt=jt.type;if(!ue.textureFormatReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ue.textureTypeReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const oe=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,oe),k.bufferData(k.PIXEL_PACK_BUFFER,Pt.byteLength,k.STREAM_READ),D.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Lt),k.readPixels(tt,ct,rt,nt,Tt.convert(ie),Tt.convert(Qt),0);const Be=V!==null?A.get(V).__webglFramebuffer:null;Ht.bindFramebuffer(k.FRAMEBUFFER,Be);const rn=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await AT(k,rn,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,oe),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Pt),k.deleteBuffer(oe),k.deleteSync(rn),Pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,tt=null,ct=0){const rt=Math.pow(2,-ct),nt=Math.floor(D.image.width*rt),Pt=Math.floor(D.image.height*rt),qt=tt!==null?tt.x:0,Lt=tt!==null?tt.y:0;Q.setTexture2D(D,0),k.copyTexSubImage2D(k.TEXTURE_2D,ct,0,0,qt,Lt,nt,Pt),Ht.unbindTexture()};const Fn=k.createFramebuffer(),ni=k.createFramebuffer();this.copyTextureToTexture=function(D,tt,ct=null,rt=null,nt=0,Pt=null){Pt===null&&(nt!==0?(zl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Pt=nt,nt=0):Pt=0);let qt,Lt,Wt,jt,ie,Qt,oe,Be,rn;const en=D.isCompressedTexture?D.mipmaps[Pt]:D.image;if(ct!==null)qt=ct.max.x-ct.min.x,Lt=ct.max.y-ct.min.y,Wt=ct.isBox3?ct.max.z-ct.min.z:1,jt=ct.min.x,ie=ct.min.y,Qt=ct.isBox3?ct.min.z:0;else{const Dn=Math.pow(2,-nt);qt=Math.floor(en.width*Dn),Lt=Math.floor(en.height*Dn),D.isDataArrayTexture?Wt=en.depth:D.isData3DTexture?Wt=Math.floor(en.depth*Dn):Wt=1,jt=0,ie=0,Qt=0}rt!==null?(oe=rt.x,Be=rt.y,rn=rt.z):(oe=0,Be=0,rn=0);const He=Tt.convert(tt.format),ee=Tt.convert(tt.type);let Ye;tt.isData3DTexture?(Q.setTexture3D(tt,0),Ye=k.TEXTURE_3D):tt.isDataArrayTexture||tt.isCompressedArrayTexture?(Q.setTexture2DArray(tt,0),Ye=k.TEXTURE_2D_ARRAY):(Q.setTexture2D(tt,0),Ye=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,tt.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,tt.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,tt.unpackAlignment);const ce=k.getParameter(k.UNPACK_ROW_LENGTH),In=k.getParameter(k.UNPACK_IMAGE_HEIGHT),_a=k.getParameter(k.UNPACK_SKIP_PIXELS),Hn=k.getParameter(k.UNPACK_SKIP_ROWS),wi=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,en.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,en.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,jt),k.pixelStorei(k.UNPACK_SKIP_ROWS,ie),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Qt);const Qe=D.isDataArrayTexture||D.isData3DTexture,Gn=tt.isDataArrayTexture||tt.isData3DTexture;if(D.isDepthTexture){const Dn=A.get(D),Vn=A.get(tt),kn=A.get(Dn.__renderTarget),yr=A.get(Vn.__renderTarget);Ht.bindFramebuffer(k.READ_FRAMEBUFFER,kn.__webglFramebuffer),Ht.bindFramebuffer(k.DRAW_FRAMEBUFFER,yr.__webglFramebuffer);for(let Fi=0;Fi<Wt;Fi++)Qe&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,A.get(D).__webglTexture,nt,Qt+Fi),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,A.get(tt).__webglTexture,Pt,rn+Fi)),k.blitFramebuffer(jt,ie,qt,Lt,oe,Be,qt,Lt,k.DEPTH_BUFFER_BIT,k.NEAREST);Ht.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ht.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(nt!==0||D.isRenderTargetTexture||A.has(D)){const Dn=A.get(D),Vn=A.get(tt);Ht.bindFramebuffer(k.READ_FRAMEBUFFER,Fn),Ht.bindFramebuffer(k.DRAW_FRAMEBUFFER,ni);for(let kn=0;kn<Wt;kn++)Qe?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Dn.__webglTexture,nt,Qt+kn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Dn.__webglTexture,nt),Gn?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Vn.__webglTexture,Pt,rn+kn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Vn.__webglTexture,Pt),nt!==0?k.blitFramebuffer(jt,ie,qt,Lt,oe,Be,qt,Lt,k.COLOR_BUFFER_BIT,k.NEAREST):Gn?k.copyTexSubImage3D(Ye,Pt,oe,Be,rn+kn,jt,ie,qt,Lt):k.copyTexSubImage2D(Ye,Pt,oe,Be,jt,ie,qt,Lt);Ht.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ht.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Gn?D.isDataTexture||D.isData3DTexture?k.texSubImage3D(Ye,Pt,oe,Be,rn,qt,Lt,Wt,He,ee,en.data):tt.isCompressedArrayTexture?k.compressedTexSubImage3D(Ye,Pt,oe,Be,rn,qt,Lt,Wt,He,en.data):k.texSubImage3D(Ye,Pt,oe,Be,rn,qt,Lt,Wt,He,ee,en):D.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Pt,oe,Be,qt,Lt,He,ee,en.data):D.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Pt,oe,Be,en.width,en.height,He,en.data):k.texSubImage2D(k.TEXTURE_2D,Pt,oe,Be,qt,Lt,He,ee,en);k.pixelStorei(k.UNPACK_ROW_LENGTH,ce),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,In),k.pixelStorei(k.UNPACK_SKIP_PIXELS,_a),k.pixelStorei(k.UNPACK_SKIP_ROWS,Hn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,wi),Pt===0&&tt.generateMipmaps&&k.generateMipmap(Ye),Ht.unbindTexture()},this.initRenderTarget=function(D){A.get(D).__webglFramebuffer===void 0&&Q.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?Q.setTextureCube(D,0):D.isData3DTexture?Q.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?Q.setTexture2DArray(D,0):Q.setTexture2D(D,0),Ht.unbindTexture()},this.resetState=function(){H=0,$=0,V=null,Ht.reset(),Ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ua}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Ie._getDrawingBufferColorSpace(t),n.unpackColorSpace=Ie._getUnpackColorSpace()}}const Cl=new lt;function Bi(c,t,n,a,r,o){const u=2*Math.PI*r/4,f=Math.max(o-2*r,0),p=Math.PI/4;Cl.copy(t),Cl[a]=0,Cl.normalize();const h=.5*u/(u+f),g=1-Cl.angleTo(c)/p;return Math.sign(Cl[n])===1?g*h:f/(u+f)+h+h*(1-g)}class Yp extends wo{constructor(t=1,n=1,a=1,r=2,o=.1){const u=r*2+1;if(o=Math.min(t/2,n/2,a/2,o),super(1,1,1,u,u,u),this.type="RoundedBoxGeometry",this.parameters={width:t,height:n,depth:a,segments:r,radius:o},u===1)return;const f=this.toNonIndexed();this.index=null,this.attributes.position=f.attributes.position,this.attributes.normal=f.attributes.normal,this.attributes.uv=f.attributes.uv;const p=new lt,h=new lt,g=new lt(t,n,a).divideScalar(2).subScalar(o),_=this.attributes.position.array,v=this.attributes.normal.array,y=this.attributes.uv.array,M=_.length/6,b=new lt,S=.5/u;for(let x=0,T=0;x<_.length;x+=3,T+=2)switch(p.fromArray(_,x),h.copy(p),h.x-=Math.sign(h.x)*S,h.y-=Math.sign(h.y)*S,h.z-=Math.sign(h.z)*S,h.normalize(),_[x+0]=g.x*Math.sign(p.x)+h.x*o,_[x+1]=g.y*Math.sign(p.y)+h.y*o,_[x+2]=g.z*Math.sign(p.z)+h.z*o,v[x+0]=h.x,v[x+1]=h.y,v[x+2]=h.z,Math.floor(x/M)){case 0:b.set(1,0,0),y[T+0]=Bi(b,h,"z","y",o,a),y[T+1]=1-Bi(b,h,"y","z",o,n);break;case 1:b.set(-1,0,0),y[T+0]=1-Bi(b,h,"z","y",o,a),y[T+1]=1-Bi(b,h,"y","z",o,n);break;case 2:b.set(0,1,0),y[T+0]=1-Bi(b,h,"x","z",o,t),y[T+1]=Bi(b,h,"z","x",o,a);break;case 3:b.set(0,-1,0),y[T+0]=1-Bi(b,h,"x","z",o,t),y[T+1]=1-Bi(b,h,"z","x",o,a);break;case 4:b.set(0,0,1),y[T+0]=1-Bi(b,h,"x","y",o,t),y[T+1]=1-Bi(b,h,"y","x",o,n);break;case 5:b.set(0,0,-1),y[T+0]=Bi(b,h,"x","y",o,t),y[T+1]=1-Bi(b,h,"y","x",o,n);break}}static fromJSON(t){return new Yp(t.width,t.height,t.depth,t.segments,t.radius)}}const c2=18,Ld=1.2,u2=28;class f2{ctx=null;masterGain=null;lastPlayTime=0;primed=!1;unlock(){const t=this.ensureContext();if(t.state==="suspended"&&t.resume(),!this.primed){this.primed=!0;try{const n=t.createBufferSource();n.buffer=t.createBuffer(1,1,t.sampleRate),n.connect(t.destination),n.start(0)}catch{}}}ensureContext(){return this.ctx||(this.ctx=new AudioContext,this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=.55,this.masterGain.connect(this.ctx.destination)),this.ctx}playImpact(t,n){if(n<Ld)return;const a=performance.now();if(a-this.lastPlayTime<u2)return;this.lastPlayTime=a;const r=this.ensureContext();if(r.state!=="running"&&(this.unlock(),this.ctx?.state!=="running"))return;const o=this.masterGain,u=Math.min((n-Ld)/(c2-Ld),1);t==="table"?this.playTableHit(r,o,u):this.playDiceHit(r,o,u)}playTableHit(t,n,a){const r=t.currentTime,o=.18+a*.42,u=.04+a*.06,f=.02+a*.03,p=this.createNoiseBuffer(t,f),h=t.createBufferSource();h.buffer=p;const g=t.createBiquadFilter();g.type="lowpass",g.frequency.setValueAtTime(800+a*1200,r),g.Q.value=.7;const _=t.createGain();_.gain.setValueAtTime(o*.7,r),_.gain.exponentialRampToValueAtTime(.001,r+u),h.connect(g).connect(_).connect(n),h.start(r),h.stop(r+u+.01);const v=t.createOscillator();v.type="sine",v.frequency.setValueAtTime(90+a*50,r),v.frequency.exponentialRampToValueAtTime(40,r+u);const y=t.createGain();y.gain.setValueAtTime(o*.5,r),y.gain.exponentialRampToValueAtTime(.001,r+u),v.connect(y).connect(n),v.start(r),v.stop(r+u+.01)}playDiceHit(t,n,a){const r=t.currentTime,o=.12+a*.3,u=.018+a*.032,f=.005+a*.008,p=this.createNoiseBuffer(t,f),h=t.createBufferSource();h.buffer=p;const g=t.createBiquadFilter();g.type="highpass",g.frequency.setValueAtTime(1200,r),g.Q.value=.5;const _=t.createBiquadFilter();_.type="lowpass",_.frequency.setValueAtTime(6e3+a*2e3,r),_.Q.value=.6;const v=t.createGain();v.gain.setValueAtTime(o*.9,r),v.gain.exponentialRampToValueAtTime(.001,r+u*.6),h.connect(g).connect(_).connect(v).connect(n),h.start(r),h.stop(r+u+.01);const y=420+a*180,M=y*1.47;for(const b of[y,M]){const S=t.createOscillator();S.type="sine",S.frequency.setValueAtTime(b,r),S.frequency.exponentialRampToValueAtTime(b*.7,r+u);const x=t.createGain();x.gain.setValueAtTime(o*.18,r),x.gain.exponentialRampToValueAtTime(.001,r+u*.8),S.connect(x).connect(n),S.start(r),S.stop(r+u+.01)}}createNoiseBuffer(t,n){const a=Math.ceil(t.sampleRate*n),r=t.createBuffer(1,a,t.sampleRate),o=r.getChannelData(0);for(let u=0;u<a;u++)o[u]=Math.random()*2-1;return r}dispose(){this.ctx&&(this.ctx.close(),this.ctx=null,this.masterGain=null)}}const h2=200,d2=1.36,p2=2,m2=6.8,g2=6,cr=.9,Us=8,rx=1735242,jp=[3,4,1,6,2,5],ox=56,v2=50,_2={1:[[0,0]],2:[[-.52,-.52],[.52,.52]],3:[[-.52,-.52],[0,0],[.52,.52]],4:[[-.52,-.52],[.52,-.52],[-.52,.52],[.52,.52]],5:[[-.52,-.52],[.52,-.52],[0,0],[-.52,.52],[.52,.52]],6:[[-.52,-.52],[.52,-.52],[-.52,0],[.52,0],[-.52,.52],[.52,.52]]},Ud=16777215,lx=15895426,ay=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)];function Wa(c){return c==="fast"?{settleHoldSeconds:.03,linearStillThreshold:.14,angularStillThreshold:.18,maxRollSeconds:.7,timeoutGraceSeconds:.45,timeoutFaceHoldSeconds:.1,timeoutLinearStillThreshold:.22,timeoutAngularStillThreshold:.26,gravityY:-130,faceUpDrop:!0,spawnYBase:9.5,spawnYStep:.34,solverIterations:6,tableRestitution:.14,diceRestitution:.16,sleepSpeedLimit:.36,sleepTimeLimit:.05,linearDamping:.4,angularDamping:.46,impulseXMin:8.5,impulseXMax:10.6,impulseYMin:3.2,impulseYMax:4.3}:{settleHoldSeconds:.26,linearStillThreshold:.02,angularStillThreshold:.03,maxRollSeconds:null,timeoutGraceSeconds:0,timeoutFaceHoldSeconds:0,timeoutLinearStillThreshold:0,timeoutAngularStillThreshold:0,gravityY:-40,faceUpDrop:!1,spawnYBase:4,spawnYStep:.22,solverIterations:14,tableRestitution:.36,diceRestitution:.4,sleepSpeedLimit:.14,sleepTimeLimit:.18,linearDamping:.17,angularDamping:.19,impulseXMin:12.2,impulseXMax:15.8,impulseYMin:5.4,impulseYMax:7.2}}function x2({diceCount:c=5,maxAttempts:t=3,onDiceResult:n,onRollStart:a,forceSingleAttempt:r=!1,hasPendingPlacement:o=!1,onCommitPlacement:u,rollSpeedMode:f="normal"}){const p=de.useRef(null),h=de.useRef(()=>{}),g=de.useRef(()=>{}),_=de.useRef(!1),[v,y]=de.useState(!1),[M,b]=de.useState([]),S=de.useRef(M);S.current=M;const[x,T]=de.useState(0),[C,N]=de.useState(()=>Array(c).fill(!1)),[U,P]=de.useState(!1),[B,X]=de.useState(!1),w=de.useRef(null),O=de.useRef(!1),H=de.useRef(C);H.current=C;const $=de.useRef(x);$.current=x;const V=de.useRef([]),K=r?1:t,W=de.useRef(K);W.current=K;const z=de.useRef(n);z.current=n;const G=de.useRef(a);G.current=a;const J=de.useRef(f);J.current=f;const ft=de.useRef(Wa(f)),vt=de.useCallback(Bt=>{$.current<1||$.current>=W.current||N(xe=>{const k=[...xe];k[Bt]=!k[Bt];const Ne=V.current[Bt];if(Ne){const ye=Ne.mesh.material,ue=k[Bt]?lx:Ud;ye.forEach(Ht=>Ht.color.set(ue))}return k})},[]),I=de.useRef(u);I.current=u;const j=de.useCallback(Bt=>{I.current?.(),T(0),$.current=0,b([]);const xe=Array(c).fill(!1);N(xe),H.current=xe,V.current.forEach(k=>{k.mesh.material.forEach(ye=>ye.color.set(Ud))}),h.current(Bt)},[c]);de.useEffect(()=>{const Bt=p.current;if(!Bt)return;const xe=typeof window<"u"&&window.matchMedia("(min-width: 1024px)").matches,k=xe?d2:p2,Ne=k/2,ye=xe?m2:g2,ue=new QT;ue.background=new ke(rx);const Ht=new zu(-1,1,1,-1,.1,80);Ht.position.set(0,14,0),Ht.up.set(0,0,-1),Ht.lookAt(0,0,0);const F=new l2({antialias:!0,alpha:!0});F.setPixelRatio(Math.min(window.devicePixelRatio,2)),F.outputColorSpace=si,F.toneMapping=Ki,F.shadowMap.enabled=!0,F.shadowMap.type=Mx,F.domElement.style.width="100%",F.domElement.style.height="100%",F.domElement.style.display="block",F.domElement.style.touchAction="manipulation",F.domElement.style.userSelect="none",Bt.appendChild(F.domElement);const A=new c1(16777215,.85);ue.add(A);const Q=new l1(16777215,1.1);Q.position.set(3,18,-2),Q.castShadow=!0,Q.shadow.mapSize.width=2048,Q.shadow.mapSize.height=2048,Q.shadow.camera.near=1,Q.shadow.camera.far=40,Q.shadow.camera.left=-30,Q.shadow.camera.right=30,Q.shadow.camera.top=20,Q.shadow.camera.bottom=-20,ue.add(Q);const pt=new Qi(new Gl(1,1),new N_({color:rx,roughness:.96,metalness:0}));pt.rotation.x=-Math.PI/2,pt.position.y=0,pt.receiveShadow=!0,ue.add(pt);const gt=new Gb({gravity:new R(0,-40,0),allowSleep:!0});gt.broadphase=new vo(gt),gt.solver.iterations=Wa("normal").solverIterations;const ht=new Du("table"),Zt=new Du("die"),Nt=new yo(Zt,ht,{friction:.24,restitution:Wa("normal").tableRestitution}),Kt=new yo(Zt,Zt,{friction:.3,restitution:Wa("normal").diceRestitution});gt.addContactMaterial(Nt),gt.addContactMaterial(Kt);const se=new kt({type:kt.STATIC,shape:new EE,material:ht});se.quaternion.setFromEuler(-Math.PI/2,0,0),gt.addBody(se);const bt=new Yp(k,k,k,6,.16),Mt=[];for(let ne=0;ne<c;ne+=1){const wt=jp.map(gn=>new N_({map:y2(gn),color:Ud,roughness:.38,metalness:.02})),Se=new Qi(bt,wt);Se.castShadow=!0,Se.receiveShadow=!0,Se.userData.dieIndex=ne,ue.add(Se);const Re=new kt({mass:1,shape:new gr(new R(Ne,Ne,Ne)),material:Zt,sleepSpeedLimit:Wa("normal").sleepSpeedLimit,sleepTimeLimit:Wa("normal").sleepTimeLimit});Re.linearDamping=Wa("normal").linearDamping,Re.angularDamping=Wa("normal").angularDamping,Re.allowSleep=!0,gt.addBody(Re),Mt.push({mesh:Se,body:Re,locked:!1})}V.current=Mt;const It=new f2,Gt=new Set(Mt.map(ne=>ne.body)),Dt=()=>It.unlock();window.addEventListener("pointerdown",Dt,{passive:!0}),window.addEventListener("touchstart",Dt,{passive:!0}),window.addEventListener("click",Dt,{passive:!0}),Mt.forEach(ne=>{ne.body.addEventListener("collide",wt=>{const{body:Se,contact:Re}=wt,gn=Math.abs(Re.getImpactVelocityAlongNormal());Gt.has(Se)?It.playImpact("dice",gn):It.playImpact("table",gn)})});const fe=new h1,Z=new qe,zt=ne=>{It.unlock();const wt=F.domElement.getBoundingClientRect();Z.x=(ne.clientX-wt.left)/wt.width*2-1,Z.y=-((ne.clientY-wt.top)/wt.height)*2+1,fe.setFromCamera(Z,Ht);const Se=Mt.map(gn=>gn.mesh),Re=fe.intersectObjects(Se,!1);if(Re.length>0){const Xe=Re[0].object.userData.dieIndex;Xe!==void 0&&vt(Xe)}};F.domElement.addEventListener("pointerdown",zt);let Tt={minX:-6,maxX:6,minZ:-3,maxZ:3,depth:6},Ft=[];const Et=(ne,wt)=>{Ft.forEach(hn=>gt.removeBody(hn)),Ft=[];const Se=new gr(new R(cr/2,Us/2,wt/2)),Re=new gr(new R(ne/2,Us/2,cr/2));[{shape:Se,position:new R(-ne/2-cr/2,Us/2,0)},{shape:Se,position:new R(ne/2+cr/2,Us/2,0)},{shape:Re,position:new R(0,Us/2,-wt/2-cr/2)},{shape:Re,position:new R(0,Us/2,wt/2+cr/2)}].forEach(({shape:hn,position:Le})=>{const Fn=new kt({type:kt.STATIC,shape:hn,material:ht});Fn.position.copy(Le),gt.addBody(Fn),Ft.push(Fn)});const Xe=k*1.8,vn=new gr(new R(Xe/2,Us/2,cr/2)),Cn=ne/2,We=wt/2;[{x:-Cn,z:-We,angle:Math.PI/4},{x:Cn,z:-We,angle:-Math.PI/4},{x:-Cn,z:We,angle:-Math.PI/4},{x:Cn,z:We,angle:Math.PI/4}].forEach(({x:hn,z:Le,angle:Fn})=>{const ni=new kt({type:kt.STATIC,shape:vn,material:ht});ni.position.set(hn,Us/2,Le),ni.quaternion.setFromEuler(0,Fn,0),gt.addBody(ni),Ft.push(ni)})},yt=()=>{const ne=Bt.clientWidth,wt=Bt.clientHeight;if(!ne||!wt)return;const Se=ne/wt,Re=ye,gn=Re*Se;Ht.left=-gn,Ht.right=gn,Ht.top=Re,Ht.bottom=-Re,Ht.updateProjectionMatrix();const Xe=gn*2,vn=Re*2;pt.scale.set(Xe,vn,1),Tt={minX:-Xe/2,maxX:Xe/2,minZ:-vn/2,maxZ:vn/2,width:Xe,depth:vn},Et(Xe,vn),F.setSize(ne,wt,!0),F.render(ue,Ht)},Ct=new ResizeObserver(yt);Ct.observe(Bt),yt();let re=0,ze=0,Te=!1,mn=0,Bn=null;const Fs=()=>{Mt.forEach(ne=>{ne.body.type=kt.STATIC,ne.body.velocity.setZero(),ne.body.angularVelocity.setZero(),ne.body.position.set(0,-10,0),ne.mesh.position.set(0,-10,0)})},es=ne=>{if(_.current||$.current>=W.current)return;const wt=Wa(ne??J.current);ft.current=wt,gt.solver.iterations=wt.solverIterations,gt.gravity.set(0,wt.gravityY,0),Nt.restitution=wt.tableRestitution,Kt.restitution=wt.diceRestitution,It.unlock(),_.current=!0,y(!0),G.current?.(),re=0,ze=0,Te=!1,mn=0,Bn=null;const Se=H.current,Re=$.current===0,gn=Tt.minX+k*.8,Xe=Tt.minX+k,vn=Tt.maxX-k,Cn=Tt.minZ+k,We=Tt.maxZ-k,ln=[];let hn=0;Mt.forEach((Le,Fn)=>{if(Le.body.sleepSpeedLimit=wt.sleepSpeedLimit,Le.body.sleepTimeLimit=wt.sleepTimeLimit,Le.body.linearDamping=wt.linearDamping,Le.body.angularDamping=wt.angularDamping,!Re&&Se[Fn]){Le.body.type=kt.STATIC,Le.body.velocity.setZero(),Le.body.angularVelocity.setZero();return}Le.body.type=kt.DYNAMIC,Le.body.mass=1,Le.body.updateMassProperties(),Le.body.wakeUp(),Le.body.velocity.setZero(),Le.body.angularVelocity.setZero(),Le.body.force.setZero(),Le.body.torque.setZero();const ni=.56,D=wt.faceUpDrop?M2({minX:Xe,maxX:vn,minZ:Cn,maxZ:We,existing:ln,minDistance:k*.95}):null,tt=wt.faceUpDrop?D.x:gn+hn*ni+yn(-.1,.1),ct=wt.spawnYBase+hn*wt.spawnYStep,rt=wt.faceUpDrop?ct+yn(-.6,.8):ct,nt=wt.faceUpDrop?D.z:yn(-Tt.depth*.25,Tt.depth*.25);if(wt.faceUpDrop&&D&&ln.push(D),Le.body.position.set(tt,rt,nt),wt.faceUpDrop)E2(Le.body,S2());else{const Lt=new pi;Lt.setFromEuler(yn(0,Math.PI),yn(0,Math.PI),yn(0,Math.PI),"XYZ"),Le.body.quaternion.copy(Lt)}const Pt=wt.faceUpDrop?(()=>{const Lt=-tt,Wt=-nt,jt=Math.hypot(Lt,Wt)||1,ie=yn(.9,2.4),Qt=Math.random()<.5?-1:1,oe=Qt*(-Wt/jt),Be=Qt*(Lt/jt),rn=yn(.15,1.1),en=yn(-.45,.45),He=yn(-.45,.45);return new R(Lt/jt*ie+oe*rn+en,yn(wt.impulseYMin,wt.impulseYMax),Wt/jt*ie+Be*rn+He)})():new R(yn(wt.impulseXMin,wt.impulseXMax),yn(wt.impulseYMin,wt.impulseYMax),yn(-1.2,1.2)),qt=new R(yn(-.2,.2),yn(-.08,.08),yn(-.2,.2));Le.body.applyImpulse(Pt,qt),hn++})};h.current=es,g.current=Fs,Fs();const va=ne=>{if(ne.code!=="Space")return;const wt=ne.target;wt?.tagName==="INPUT"||wt?.tagName==="TEXTAREA"||wt?.isContentEditable||(ne.preventDefault(),es())};window.addEventListener("keydown",va);const Is=new f1,ns=1/60;let Ji=0;const ei=()=>{const ne=Math.min(Is.getDelta(),.04);if(gt.step(ns,ne,4),Mt.forEach(wt=>{b2(wt.body,Tt,Ne),wt.mesh.position.set(wt.body.position.x,wt.body.position.y,wt.body.position.z),wt.mesh.quaternion.set(wt.body.quaternion.x,wt.body.quaternion.y,wt.body.quaternion.z,wt.body.quaternion.w)}),_.current){const wt=ft.current;ze+=ne;const Se=H.current,Re=Xe=>{_.current=!1,y(!1);const vn=Xe??Mt.map(ln=>cx(ln.body));b(vn);const Cn=$.current+1;if(Cn>=W.current){const ln=Array(c).fill(!0);N(ln),H.current=ln,Mt.forEach(hn=>{hn.mesh.material.forEach(Fn=>Fn.color.set(lx))})}T(ln=>ln+1);const We=vn.reduce((ln,hn)=>ln+hn,0);z.current?.({total:We,values:vn,attempt:Cn})};if(wt.maxRollSeconds!=null&&(!Te&&ze>=wt.maxRollSeconds&&(Te=!0,mn=0,Bn=null),Te)){const Xe=Mt.map(We=>cx(We.body)),vn=Bn!=null&&Xe.every((We,ln)=>Se[ln]||We===Bn[ln]);Bn=Xe;const Cn=Mt.every((We,ln)=>{if(Se[ln]||We.body.sleepState===kt.SLEEPING)return!0;const hn=We.body.velocity.lengthSquared()<wt.timeoutLinearStillThreshold,Le=We.body.angularVelocity.lengthSquared()<wt.timeoutAngularStillThreshold;return hn&&Le&&We.body.position.y<=Ne+.14});if(vn&&Cn){if(mn+=ne,mn>=wt.timeoutFaceHoldSeconds){Re(Xe),re=0,F.render(ue,Ht),Ji=window.requestAnimationFrame(ei);return}}else mn=0;if(ze>=wt.maxRollSeconds+wt.timeoutGraceSeconds){Mt.forEach((We,ln)=>{Se[ln]||(We.body.velocity.set(0,0,0),We.body.angularVelocity.set(0,0,0),We.body.sleep())}),Re(Xe),re=0,F.render(ue,Ht),Ji=window.requestAnimationFrame(ei);return}}Mt.every((Xe,vn)=>{if(Se[vn]||Xe.body.sleepState===kt.SLEEPING)return!0;const Cn=Xe.body.velocity.lengthSquared()<wt.linearStillThreshold,We=Xe.body.angularVelocity.lengthSquared()<wt.angularStillThreshold;return Cn&&We&&Xe.body.position.y<=Ne+.08})?(re+=ne,re>wt.settleHoldSeconds&&Re()):re=0}F.render(ue,Ht),Ji=window.requestAnimationFrame(ei)};return ei(),()=>{window.cancelAnimationFrame(Ji),Ct.disconnect(),window.removeEventListener("keydown",va),window.removeEventListener("pointerdown",Dt),window.removeEventListener("touchstart",Dt),window.removeEventListener("click",Dt),F.domElement.removeEventListener("pointerdown",zt),It.dispose(),Bt.removeChild(F.domElement),Ft.forEach(ne=>gt.removeBody(ne)),gt.removeBody(se),Mt.forEach(ne=>{gt.removeBody(ne.body),ue.remove(ne.mesh)}),pt.geometry.dispose(),pt.material.dispose(),ue.remove(pt),bt.dispose(),Mt.forEach(ne=>{ne.mesh.material.forEach(wt=>{wt.map?.dispose(),wt.dispose()})}),F.dispose()}},[c,vt]);const _t=M.reduce((Bt,xe)=>Bt+xe,0),At=x>=K&&!v,Ot=!v&&(x<K||o),at=x>=1&&x<K,dt=U&&Ot,Ut=(ox+v2)/ox,Yt=dt?B?Ut+.08:Ut:1,Xt=dt?1:0,Ee=M.map((Bt,xe)=>({value:Bt,index:xe,isLocked:C[xe]})).sort((Bt,xe)=>Bt.value-xe.value||Bt.index-xe.index),Ke=de.useCallback(()=>{w.current!=null&&(window.clearTimeout(w.current),w.current=null)},[]),_e=de.useCallback(()=>{Ke(),O.current=!1,X(!1),P(!1)},[Ke]),be=de.useCallback(Bt=>{!Ot||Bt.button!==0||(Bt.preventDefault(),P(!0),X(!1),O.current=!1,Ke(),w.current=window.setTimeout(()=>{O.current=!0,X(!0)},h2),Bt.currentTarget.setPointerCapture(Bt.pointerId))},[Ot,Ke]),Pe=de.useCallback(()=>{if(!U)return;const Bt=O.current;if(_e(),!!Ot){if(o){j(Bt?"normal":void 0);return}h.current(Bt?"normal":void 0)}},[Ot,j,o,U,_e]);return de.useEffect(()=>()=>{Ke()},[Ke]),Rt.jsxs("div",{className:"flex h-full w-full flex-col",children:[Rt.jsx("div",{className:"relative min-h-0 flex-1 overflow-hidden rounded-none bg-[#1a7a4a]",children:Rt.jsx("div",{ref:p,className:"h-full w-full"})}),Rt.jsxs("div",{className:"relative flex items-center justify-between px-2 py-0",style:{fontFamily:"'Inter', sans-serif"},children:[Rt.jsx("div",{className:"relative flex h-8 items-center gap-2 pr-20",children:M.length>0?Rt.jsxs(Rt.Fragment,{children:[Rt.jsx("div",{className:"flex items-center gap-1",children:Ee.map(Bt=>Rt.jsx("button",{type:"button",onClick:()=>at&&vt(Bt.index),className:`grid h-7 w-7 select-none place-items-center rounded-lg border text-base font-bold leading-none transition-colors ${Bt.isLocked?"border-red-400 bg-red-100 text-red-800":"border-slate-300 bg-white text-slate-800"} ${at?"cursor-pointer touch-manipulation hover:border-slate-400 active:scale-95":""}`,"aria-label":`Die ${Bt.index+1}`,children:Bt.value},Bt.index))}),Rt.jsx("div",{className:"pointer-events-none inline-flex w-[42px] items-center justify-start gap-1",children:v?Rt.jsxs("span",{className:"inline-flex items-center gap-1 text-slate-500","aria-label":"Rolling",children:[Rt.jsx("span",{className:"h-1.5 w-1.5 animate-pulse rounded-full bg-current",style:{animationDelay:"0ms",animationDuration:"900ms"}}),Rt.jsx("span",{className:"h-1.5 w-1.5 animate-pulse rounded-full bg-current",style:{animationDelay:"150ms",animationDuration:"900ms"}}),Rt.jsx("span",{className:"h-1.5 w-1.5 animate-pulse rounded-full bg-current",style:{animationDelay:"300ms",animationDuration:"900ms"}})]}):Rt.jsxs(Rt.Fragment,{children:[Rt.jsx("span",{className:"text-sm font-medium text-slate-400",children:"="}),Rt.jsx("span",{className:"text-lg font-bold leading-none text-slate-800",children:_t})]})}),Rt.jsx("span",{className:`ml-1 inline-flex h-6 w-[74px] -translate-x-2 items-center justify-center rounded-full bg-slate-200 px-2 text-xs font-bold tabular-nums text-slate-600 ${x>0?"":"opacity-0"}`,children:x>0?At&&!o?"PLACE":`${x} of ${K}`:"0 of 0"})]}):Rt.jsxs(Rt.Fragment,{children:[Rt.jsx("div",{className:"flex items-center gap-1",children:Array.from({length:5}).map((Bt,xe)=>Rt.jsx("span",{className:"grid h-7 w-7 place-items-center rounded-lg border border-transparent text-base leading-none"},xe))}),Rt.jsx("div",{className:"pointer-events-none inline-flex w-[42px] items-center justify-start gap-1",children:v?Rt.jsxs("span",{className:"inline-flex items-center gap-1 text-slate-500","aria-label":"Rolling",children:[Rt.jsx("span",{className:"h-1.5 w-1.5 animate-pulse rounded-full bg-current",style:{animationDelay:"0ms",animationDuration:"900ms"}}),Rt.jsx("span",{className:"h-1.5 w-1.5 animate-pulse rounded-full bg-current",style:{animationDelay:"150ms",animationDuration:"900ms"}}),Rt.jsx("span",{className:"h-1.5 w-1.5 animate-pulse rounded-full bg-current",style:{animationDelay:"300ms",animationDuration:"900ms"}})]}):Rt.jsxs(Rt.Fragment,{children:[Rt.jsx("span",{className:"text-sm font-medium text-transparent",children:"="}),Rt.jsx("span",{className:"text-lg font-bold leading-none text-transparent",children:"00"})]})}),Rt.jsx("span",{className:"ml-1 inline-flex h-6 w-[74px] -translate-x-2 items-center justify-center rounded-full bg-slate-200 px-2 text-xs font-bold tabular-nums text-slate-600 opacity-0",children:"0 of 0"})]})}),(!At||o)&&Rt.jsxs("div",{className:"absolute right-2 top-0 z-20 h-14 w-14 translate-y-[12%]",children:[B&&Rt.jsxs(Rt.Fragment,{children:[Rt.jsx("span",{className:"pointer-events-none absolute inset-0 z-0 rounded-full animate-pulse",style:{animationDuration:"1800ms",transform:`translateY(${Xt}px) scale(${Yt})`,boxShadow:"0 0 0 16px rgba(252, 211, 77, 0.9)"}}),Rt.jsx("span",{className:"pointer-events-none absolute inset-0 z-0 rounded-full animate-pulse",style:{animationDuration:"1800ms",transform:`translateY(${Xt}px) scale(${Yt})`,boxShadow:"0 0 28px 20px rgba(252, 211, 77, 0.26)"}})]}),Rt.jsx("button",{"aria-disabled":!Ot,onPointerDown:be,onPointerUp:Pe,onPointerCancel:_e,className:`relative z-10 h-14 w-14 touch-manipulation select-none appearance-none rounded-full border-2 text-center text-[10px] font-bold uppercase tracking-widest shadow-md transition-[transform,colors,box-shadow,filter] duration-100 ${Ot?"cursor-pointer border-red-600 bg-red-500 text-white hover:bg-red-500":"cursor-not-allowed border-red-300 bg-red-300 text-white"}`,style:{WebkitTapHighlightColor:"transparent",WebkitUserSelect:"none",userSelect:"none",WebkitTouchCallout:"none",transform:`translateY(${Xt}px) scale(${Yt})`,filter:dt?"brightness(1.03)":"none",boxShadow:B?"0 0 0 2px rgba(0,0,0,0.16), 0 12px 24px rgba(0,0,0,0.34)":"0 0 0 2px rgba(0,0,0,0.16), 0 8px 16px rgba(0,0,0,0.28)"},title:B?"SLOW active":"Hold for SLOW",children:Rt.jsx("span",{className:"text-[11px] font-extrabold",style:{textShadow:"0 1px 1px rgba(0,0,0,0.28)"},children:"PLAY"})})]})]})]})}function y2(c){const t=document.createElement("canvas");t.width=256,t.height=256;const n=t.getContext("2d");if(!n){const u=new D_(t);return u.colorSpace=si,u}n.fillStyle="#ffffff",n.fillRect(0,0,t.width,t.height),n.lineWidth=3,n.strokeStyle="#e2e8f0",n.strokeRect(4,4,t.width-8,t.height-8);const a=26,r=_2[c];n.fillStyle="#000000",r.forEach(([u,f])=>{const p=t.width/2+u*112,h=t.height/2+f*112;n.beginPath(),n.arc(p,h,a,0,Math.PI*2),n.fill()});const o=new D_(t);return o.colorSpace=si,o.anisotropy=4,o.minFilter=zs,o.magFilter=Zn,o.needsUpdate=!0,o}function yn(c,t){return c+Math.random()*(t-c)}function S2(){return 1+Math.floor(Math.random()*6)}function M2({minX:c,maxX:t,minZ:n,maxZ:a,existing:r,minDistance:o}){for(let f=0;f<18;f+=1){const p={x:yn(c,t),z:yn(n,a)};if(!r.some(g=>Math.hypot(g.x-p.x,g.z-p.z)<o))return p}return{x:yn(c,t),z:yn(n,a)}}function E2(c,t){const n=jp.indexOf(t),a=ay[n>=0?n:0],r=new lt(a.x,a.y,a.z),o=new lt(0,1,0),u=new xr().setFromUnitVectors(r,o),p=new xr().setFromAxisAngle(o,yn(0,Math.PI*2)).multiply(u);c.quaternion.set(p.x,p.y,p.z,p.w)}function cx(c){const t=jp;let n=-1/0,a=1;const r=new R;for(let o=0;o<6;o++)c.quaternion.vmult(ay[o],r),r.y>n&&(n=r.y,a=t[o]);return a}function b2(c,t,n){const a=t.minX+n,r=t.maxX-n,o=t.minZ+n,u=t.maxZ-n;c.position.x<a?(c.position.x=a,c.velocity.x=Math.abs(c.velocity.x)*.55):c.position.x>r&&(c.position.x=r,c.velocity.x=-Math.abs(c.velocity.x)*.55),c.position.z<o?(c.position.z=o,c.velocity.z=Math.abs(c.velocity.z)*.55):c.position.z>u&&(c.position.z=u,c.velocity.z=-Math.abs(c.velocity.z)*.55)}const Od=["down","up","desordem","seco"],T2=[...hr],A2=[...hr].reverse(),w2={down:{},up:{},desordem:{},seco:{}};function R2(){const[c,t]=de.useState(w2),[n,a]=de.useState(null),[r,o]=de.useState(!1),[u,f]=de.useState(null),p=n?.attempt??0,h=de.useMemo(()=>{const C=["down","up","desordem"].every(U=>hr.every(P=>c[U][P]!=null)),N=hr.some(U=>c.seco[U]==null);return C&&N},[c]),g=de.useMemo(()=>{const T=new Set;for(const C of Od){const N=c[C];if(C==="down"){const U=T2.find(P=>N[P]==null);U&&T.add(`${C}:${U}`);continue}if(C==="up"){const U=A2.find(P=>N[P]==null);U&&T.add(`${C}:${U}`);continue}if(C==="desordem"){hr.forEach(U=>{N[U]==null&&T.add(`${C}:${U}`)});continue}C==="seco"&&p===1&&hr.forEach(U=>{N[U]==null&&T.add(`${C}:${U}`)})}return T},[c,p]),_=de.useMemo(()=>Od.every(T=>hr.every(C=>c[T][C]!=null)),[c]),v=de.useMemo(()=>Od.reduce((T,C)=>T+fx(c[C]).combined,0),[c]),y=de.useCallback(T=>{a(T),o(!0),f(null)},[]),M=de.useCallback(()=>{o(!1),f(null)},[]),b=de.useCallback((T,C)=>{if(!r||!n)return;const N=`${T}:${C}`;if(!g.has(N)||c[T][C]!=null)return;if(u?.columnId===T&&u.rowId===C){f(null);return}const U=C2(C,n.values,c[T]);f({columnId:T,rowId:C,value:U})},[r,g,u,n,c]),S=de.useCallback(()=>{if(!u)return;const{columnId:T,rowId:C,value:N}=u;t(U=>({...U,[T]:{...U[T],[C]:N}})),f(null),o(!1),a(null)},[u]),x=de.useCallback(()=>{t({down:{},up:{},desordem:{},seco:{}}),a(null),o(!1),f(null)},[]);return Rt.jsx("main",{className:"min-h-screen touch-manipulation bg-white px-0 py-0",children:Rt.jsxs("section",{className:"mx-auto flex w-full max-w-[1400px] flex-col gap-0 lg:flex-row lg:items-start lg:gap-8",children:[Rt.jsx("div",{className:"order-2 mt-2 flex flex-col items-start gap-0 lg:order-1 lg:mt-3 lg:shrink-0 lg:items-start lg:gap-5",children:Rt.jsx(yM,{sheet:c,openCells:g,clickable:r,pendingPlacement:u,onCellClick:b})}),Rt.jsx("div",{className:"order-1 min-w-0 flex-1 lg:order-2 lg:sticky lg:top-0",children:_?Rt.jsxs("div",{className:"flex min-h-[320px] flex-col items-center justify-center gap-6 rounded-3xl border border-[#ccc8c0] bg-[#f7f4ef] px-8 py-10 lg:h-[60vh]",style:{fontFamily:"'Inter', sans-serif"},children:[Rt.jsx("p",{className:"text-[11px] font-bold uppercase tracking-[0.22em] text-[#8a8070]",children:"Game Over"}),Rt.jsx("p",{className:"text-7xl font-bold leading-none text-[#2d2820]",style:{fontFamily:"'Kalam', cursive"},children:v}),Rt.jsx("p",{className:"text-sm text-[#8a8070]",children:"final score"}),Rt.jsx("button",{onClick:x,className:"mt-2 rounded-full border border-[#ccc8c0] bg-white px-8 py-2.5 text-xs font-bold uppercase tracking-widest text-[#5a5448] shadow-sm transition hover:bg-[#f0ece4]",children:"New Game"})]}):Rt.jsx("div",{className:"h-[24vh] min-h-[150px] min-w-0 sm:h-[34vh] lg:h-[469px]",children:Rt.jsx(x2,{diceCount:5,maxAttempts:3,onDiceResult:y,onRollStart:M,forceSingleAttempt:h,hasPendingPlacement:u!=null,onCommitPlacement:S,rollSpeedMode:"fast"})})})]})})}function C2(c,t,n){const a=D2(t),r=t.reduce((o,u)=>o+u,0);switch(c){case"ones":return go(a,1);case"twos":return go(a,2);case"threes":return go(a,3);case"fours":return go(a,4);case"fives":return go(a,5);case"sixes":return go(a,6);case"quadra":{const o=a.findIndex((u,f)=>f>0&&u>=4);return o>0?20+4*o:0}case"full":return L2(a)?30+r:0;case"seqLow":return ux(t,[1,2,3,4,5])?35+r:0;case"seqHigh":return ux(t,[2,3,4,5,6])?40+r:0;case"min":{const o=n?.max;return o==null||r<o?r:0}case"max":{const o=n?.min;return o==null||r>o?r:0}case"yam":return N2(a,5)?50+r:0}}function D2(c){const t=Array(7).fill(0);return c.forEach(n=>{n>=1&&n<=6&&(t[n]+=1)}),t}function go(c,t){return c[t]*t}function N2(c,t){return c.some(n=>n===t)}function L2(c){const t=c.filter(n=>n>0);return t.length===2&&t.includes(3)&&t.includes(2)}function ux(c,t){const n=[...new Set(c)].sort((a,r)=>a-r);return n.length!==t.length?!1:t.every((a,r)=>n[r]===a)}_M.createRoot(document.getElementById("root")).render(Rt.jsx(de.StrictMode,{children:Rt.jsx(R2,{})}));
