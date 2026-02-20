(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();var Vh={exports:{}},gl={};var wv;function oM(){if(wv)return gl;wv=1;var c=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,r,o){var u=null;if(o!==void 0&&(u=""+o),r.key!==void 0&&(u=""+r.key),"key"in r){o={};for(var f in r)f!=="key"&&(o[f]=r[f])}else o=r;return r=o.ref,{$$typeof:c,type:a,key:u,ref:r!==void 0?r:null,props:o}}return gl.Fragment=t,gl.jsx=n,gl.jsxs=n,gl}var Rv;function lM(){return Rv||(Rv=1,Vh.exports=oM()),Vh.exports}var zt=lM(),kh={exports:{}},de={};var Cv;function cM(){if(Cv)return de;Cv=1;var c=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),o=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.iterator;function y(F){return F===null||typeof F!="object"?null:(F=v&&F[v]||F["@@iterator"],typeof F=="function"?F:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,S={};function x(F,j,ct){this.props=F,this.context=j,this.refs=S,this.updater=ct||M}x.prototype.isReactComponent={},x.prototype.setState=function(F,j){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,j,"setState")},x.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function T(){}T.prototype=x.prototype;function U(F,j,ct){this.props=F,this.context=j,this.refs=S,this.updater=ct||M}var C=U.prototype=new T;C.constructor=U,b(C,x.prototype),C.isPureReactComponent=!0;var L=Array.isArray;function B(){}var P={H:null,A:null,T:null,S:null},q=Object.prototype.hasOwnProperty;function w(F,j,ct){var Tt=ct.ref;return{$$typeof:c,type:F,key:j,ref:Tt!==void 0?Tt:null,props:ct}}function O(F,j){return w(F.type,j,F.props)}function H(F){return typeof F=="object"&&F!==null&&F.$$typeof===c}function $(F){var j={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(ct){return j[ct]})}var V=/\/+/g;function K(F,j){return typeof F=="object"&&F!==null&&F.key!=null?$(""+F.key):j.toString(36)}function W(F){switch(F.status){case"fulfilled":return F.value;case"rejected":throw F.reason;default:switch(typeof F.status=="string"?F.then(B,B):(F.status="pending",F.then(function(j){F.status==="pending"&&(F.status="fulfilled",F.value=j)},function(j){F.status==="pending"&&(F.status="rejected",F.reason=j)})),F.status){case"fulfilled":return F.value;case"rejected":throw F.reason}}throw F}function z(F,j,ct,Tt,Dt){var it=typeof F;(it==="undefined"||it==="boolean")&&(F=null);var gt=!1;if(F===null)gt=!0;else switch(it){case"bigint":case"string":case"number":gt=!0;break;case"object":switch(F.$$typeof){case c:case t:gt=!0;break;case g:return gt=F._init,z(gt(F._payload),j,ct,Tt,Dt)}}if(gt)return Dt=Dt(F),gt=Tt===""?"."+K(F,0):Tt,L(Dt)?(ct="",gt!=null&&(ct=gt.replace(V,"$&/")+"/"),z(Dt,j,ct,"",function(Nt){return Nt})):Dt!=null&&(H(Dt)&&(Dt=O(Dt,ct+(Dt.key==null||F&&F.key===Dt.key?"":(""+Dt.key).replace(V,"$&/")+"/")+gt)),j.push(Dt)),1;gt=0;var Ct=Tt===""?".":Tt+":";if(L(F))for(var Pt=0;Pt<F.length;Pt++)Tt=F[Pt],it=Ct+K(Tt,Pt),gt+=z(Tt,j,ct,it,Dt);else if(Pt=y(F),typeof Pt=="function")for(F=Pt.call(F),Pt=0;!(Tt=F.next()).done;)Tt=Tt.value,it=Ct+K(Tt,Pt++),gt+=z(Tt,j,ct,it,Dt);else if(it==="object"){if(typeof F.then=="function")return z(W(F),j,ct,Tt,Dt);throw j=String(F),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return gt}function G(F,j,ct){if(F==null)return F;var Tt=[],Dt=0;return z(F,Tt,"","",function(it){return j.call(ct,it,Dt++)}),Tt}function Q(F){if(F._status===-1){var j=F._result;j=j(),j.then(function(ct){(F._status===0||F._status===-1)&&(F._status=1,F._result=ct)},function(ct){(F._status===0||F._status===-1)&&(F._status=2,F._result=ct)}),F._status===-1&&(F._status=0,F._result=j)}if(F._status===1)return F._result.default;throw F._result}var mt=typeof reportError=="function"?reportError:function(F){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof F=="object"&&F!==null&&typeof F.message=="string"?String(F.message):String(F),error:F});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",F);return}console.error(F)},yt={map:G,forEach:function(F,j,ct){G(F,function(){j.apply(this,arguments)},ct)},count:function(F){var j=0;return G(F,function(){j++}),j},toArray:function(F){return G(F,function(j){return j})||[]},only:function(F){if(!H(F))throw Error("React.Children.only expected to receive a single React element child.");return F}};return de.Activity=_,de.Children=yt,de.Component=x,de.Fragment=n,de.Profiler=r,de.PureComponent=U,de.StrictMode=a,de.Suspense=p,de.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,de.__COMPILER_RUNTIME={__proto__:null,c:function(F){return P.H.useMemoCache(F)}},de.cache=function(F){return function(){return F.apply(null,arguments)}},de.cacheSignal=function(){return null},de.cloneElement=function(F,j,ct){if(F==null)throw Error("The argument must be a React element, but you passed "+F+".");var Tt=b({},F.props),Dt=F.key;if(j!=null)for(it in j.key!==void 0&&(Dt=""+j.key),j)!q.call(j,it)||it==="key"||it==="__self"||it==="__source"||it==="ref"&&j.ref===void 0||(Tt[it]=j[it]);var it=arguments.length-2;if(it===1)Tt.children=ct;else if(1<it){for(var gt=Array(it),Ct=0;Ct<it;Ct++)gt[Ct]=arguments[Ct+2];Tt.children=gt}return w(F.type,Dt,Tt)},de.createContext=function(F){return F={$$typeof:u,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null},F.Provider=F,F.Consumer={$$typeof:o,_context:F},F},de.createElement=function(F,j,ct){var Tt,Dt={},it=null;if(j!=null)for(Tt in j.key!==void 0&&(it=""+j.key),j)q.call(j,Tt)&&Tt!=="key"&&Tt!=="__self"&&Tt!=="__source"&&(Dt[Tt]=j[Tt]);var gt=arguments.length-2;if(gt===1)Dt.children=ct;else if(1<gt){for(var Ct=Array(gt),Pt=0;Pt<gt;Pt++)Ct[Pt]=arguments[Pt+2];Dt.children=Ct}if(F&&F.defaultProps)for(Tt in gt=F.defaultProps,gt)Dt[Tt]===void 0&&(Dt[Tt]=gt[Tt]);return w(F,it,Dt)},de.createRef=function(){return{current:null}},de.forwardRef=function(F){return{$$typeof:f,render:F}},de.isValidElement=H,de.lazy=function(F){return{$$typeof:g,_payload:{_status:-1,_result:F},_init:Q}},de.memo=function(F,j){return{$$typeof:h,type:F,compare:j===void 0?null:j}},de.startTransition=function(F){var j=P.T,ct={};P.T=ct;try{var Tt=F(),Dt=P.S;Dt!==null&&Dt(ct,Tt),typeof Tt=="object"&&Tt!==null&&typeof Tt.then=="function"&&Tt.then(B,mt)}catch(it){mt(it)}finally{j!==null&&ct.types!==null&&(j.types=ct.types),P.T=j}},de.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},de.use=function(F){return P.H.use(F)},de.useActionState=function(F,j,ct){return P.H.useActionState(F,j,ct)},de.useCallback=function(F,j){return P.H.useCallback(F,j)},de.useContext=function(F){return P.H.useContext(F)},de.useDebugValue=function(){},de.useDeferredValue=function(F,j){return P.H.useDeferredValue(F,j)},de.useEffect=function(F,j){return P.H.useEffect(F,j)},de.useEffectEvent=function(F){return P.H.useEffectEvent(F)},de.useId=function(){return P.H.useId()},de.useImperativeHandle=function(F,j,ct){return P.H.useImperativeHandle(F,j,ct)},de.useInsertionEffect=function(F,j){return P.H.useInsertionEffect(F,j)},de.useLayoutEffect=function(F,j){return P.H.useLayoutEffect(F,j)},de.useMemo=function(F,j){return P.H.useMemo(F,j)},de.useOptimistic=function(F,j){return P.H.useOptimistic(F,j)},de.useReducer=function(F,j,ct){return P.H.useReducer(F,j,ct)},de.useRef=function(F){return P.H.useRef(F)},de.useState=function(F){return P.H.useState(F)},de.useSyncExternalStore=function(F,j,ct){return P.H.useSyncExternalStore(F,j,ct)},de.useTransition=function(){return P.H.useTransition()},de.version="19.2.4",de}var Dv;function Dp(){return Dv||(Dv=1,kh.exports=cM()),kh.exports}var we=Dp(),qh={exports:{}},vl={},Xh={exports:{}},Wh={};var Nv;function uM(){return Nv||(Nv=1,(function(c){function t(z,G){var Q=z.length;z.push(G);t:for(;0<Q;){var mt=Q-1>>>1,yt=z[mt];if(0<r(yt,G))z[mt]=G,z[Q]=yt,Q=mt;else break t}}function n(z){return z.length===0?null:z[0]}function a(z){if(z.length===0)return null;var G=z[0],Q=z.pop();if(Q!==G){z[0]=Q;t:for(var mt=0,yt=z.length,F=yt>>>1;mt<F;){var j=2*(mt+1)-1,ct=z[j],Tt=j+1,Dt=z[Tt];if(0>r(ct,Q))Tt<yt&&0>r(Dt,ct)?(z[mt]=Dt,z[Tt]=Q,mt=Tt):(z[mt]=ct,z[j]=Q,mt=j);else if(Tt<yt&&0>r(Dt,Q))z[mt]=Dt,z[Tt]=Q,mt=Tt;else break t}}return G}function r(z,G){var Q=z.sortIndex-G.sortIndex;return Q!==0?Q:z.id-G.id}if(c.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var o=performance;c.unstable_now=function(){return o.now()}}else{var u=Date,f=u.now();c.unstable_now=function(){return u.now()-f}}var p=[],h=[],g=1,_=null,v=3,y=!1,M=!1,b=!1,S=!1,x=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function C(z){for(var G=n(h);G!==null;){if(G.callback===null)a(h);else if(G.startTime<=z)a(h),G.sortIndex=G.expirationTime,t(p,G);else break;G=n(h)}}function L(z){if(b=!1,C(z),!M)if(n(p)!==null)M=!0,B||(B=!0,$());else{var G=n(h);G!==null&&W(L,G.startTime-z)}}var B=!1,P=-1,q=5,w=-1;function O(){return S?!0:!(c.unstable_now()-w<q)}function H(){if(S=!1,B){var z=c.unstable_now();w=z;var G=!0;try{t:{M=!1,b&&(b=!1,T(P),P=-1),y=!0;var Q=v;try{e:{for(C(z),_=n(p);_!==null&&!(_.expirationTime>z&&O());){var mt=_.callback;if(typeof mt=="function"){_.callback=null,v=_.priorityLevel;var yt=mt(_.expirationTime<=z);if(z=c.unstable_now(),typeof yt=="function"){_.callback=yt,C(z),G=!0;break e}_===n(p)&&a(p),C(z)}else a(p);_=n(p)}if(_!==null)G=!0;else{var F=n(h);F!==null&&W(L,F.startTime-z),G=!1}}break t}finally{_=null,v=Q,y=!1}G=void 0}}finally{G?$():B=!1}}}var $;if(typeof U=="function")$=function(){U(H)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,K=V.port2;V.port1.onmessage=H,$=function(){K.postMessage(null)}}else $=function(){x(H,0)};function W(z,G){P=x(function(){z(c.unstable_now())},G)}c.unstable_IdlePriority=5,c.unstable_ImmediatePriority=1,c.unstable_LowPriority=4,c.unstable_NormalPriority=3,c.unstable_Profiling=null,c.unstable_UserBlockingPriority=2,c.unstable_cancelCallback=function(z){z.callback=null},c.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<z?Math.floor(1e3/z):5},c.unstable_getCurrentPriorityLevel=function(){return v},c.unstable_next=function(z){switch(v){case 1:case 2:case 3:var G=3;break;default:G=v}var Q=v;v=G;try{return z()}finally{v=Q}},c.unstable_requestPaint=function(){S=!0},c.unstable_runWithPriority=function(z,G){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Q=v;v=z;try{return G()}finally{v=Q}},c.unstable_scheduleCallback=function(z,G,Q){var mt=c.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?mt+Q:mt):Q=mt,z){case 1:var yt=-1;break;case 2:yt=250;break;case 5:yt=1073741823;break;case 4:yt=1e4;break;default:yt=5e3}return yt=Q+yt,z={id:g++,callback:G,priorityLevel:z,startTime:Q,expirationTime:yt,sortIndex:-1},Q>mt?(z.sortIndex=Q,t(h,z),n(p)===null&&z===n(h)&&(b?(T(P),P=-1):b=!0,W(L,Q-mt))):(z.sortIndex=yt,t(p,z),M||y||(M=!0,B||(B=!0,$()))),z},c.unstable_shouldYield=O,c.unstable_wrapCallback=function(z){var G=v;return function(){var Q=v;v=G;try{return z.apply(this,arguments)}finally{v=Q}}}})(Wh)),Wh}var Uv;function fM(){return Uv||(Uv=1,Xh.exports=uM()),Xh.exports}var Yh={exports:{}},Gn={};var Lv;function hM(){if(Lv)return Gn;Lv=1;var c=Dp();function t(p){var h="https://react.dev/errors/"+p;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)h+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},r=Symbol.for("react.portal");function o(p,h,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:r,key:_==null?null:""+_,children:p,containerInfo:h,implementation:g}}var u=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(p,h){if(p==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Gn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Gn.createPortal=function(p,h){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(t(299));return o(p,h,null,g)},Gn.flushSync=function(p){var h=u.T,g=a.p;try{if(u.T=null,a.p=2,p)return p()}finally{u.T=h,a.p=g,a.d.f()}},Gn.preconnect=function(p,h){typeof p=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,a.d.C(p,h))},Gn.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},Gn.preinit=function(p,h){if(typeof p=="string"&&h&&typeof h.as=="string"){var g=h.as,_=f(g,h.crossOrigin),v=typeof h.integrity=="string"?h.integrity:void 0,y=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;g==="style"?a.d.S(p,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:y}):g==="script"&&a.d.X(p,{crossOrigin:_,integrity:v,fetchPriority:y,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Gn.preinitModule=function(p,h){if(typeof p=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var g=f(h.as,h.crossOrigin);a.d.M(p,{crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&a.d.M(p)},Gn.preload=function(p,h){if(typeof p=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var g=h.as,_=f(g,h.crossOrigin);a.d.L(p,g,{crossOrigin:_,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Gn.preloadModule=function(p,h){if(typeof p=="string")if(h){var g=f(h.as,h.crossOrigin);a.d.m(p,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else a.d.m(p)},Gn.requestFormReset=function(p){a.d.r(p)},Gn.unstable_batchedUpdates=function(p,h){return p(h)},Gn.useFormState=function(p,h,g){return u.H.useFormState(p,h,g)},Gn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Gn.version="19.2.4",Gn}var Ov;function dM(){if(Ov)return Yh.exports;Ov=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(t){console.error(t)}}return c(),Yh.exports=hM(),Yh.exports}var zv;function pM(){if(zv)return vl;zv=1;var c=fM(),t=Dp(),n=dM();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var i=e,s=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(s=i.return),e=i.return;while(e)}return i.tag===3?s:null}function u(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function f(e){if(e.tag===31){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function p(e){if(o(e)!==e)throw Error(a(188))}function h(e){var i=e.alternate;if(!i){if(i=o(e),i===null)throw Error(a(188));return i!==e?null:e}for(var s=e,l=i;;){var d=s.return;if(d===null)break;var m=d.alternate;if(m===null){if(l=d.return,l!==null){s=l;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===s)return p(d),e;if(m===l)return p(d),i;m=m.sibling}throw Error(a(188))}if(s.return!==l.return)s=d,l=m;else{for(var E=!1,D=d.child;D;){if(D===s){E=!0,s=d,l=m;break}if(D===l){E=!0,l=d,s=m;break}D=D.sibling}if(!E){for(D=m.child;D;){if(D===s){E=!0,s=m,l=d;break}if(D===l){E=!0,l=m,s=d;break}D=D.sibling}if(!E)throw Error(a(189))}}if(s.alternate!==l)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?e:i}function g(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=g(e),i!==null)return i;e=e.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),T=Symbol.for("react.consumer"),U=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),O=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function $(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var V=Symbol.for("react.client.reference");function K(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===V?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case b:return"Fragment";case x:return"Profiler";case S:return"StrictMode";case L:return"Suspense";case B:return"SuspenseList";case w:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case M:return"Portal";case U:return e.displayName||"Context";case T:return(e._context.displayName||"Context")+".Consumer";case C:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return i=e.displayName||null,i!==null?i:K(e.type)||"Memo";case q:i=e._payload,e=e._init;try{return K(e(i))}catch{}}return null}var W=Array.isArray,z=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q={pending:!1,data:null,method:null,action:null},mt=[],yt=-1;function F(e){return{current:e}}function j(e){0>yt||(e.current=mt[yt],mt[yt]=null,yt--)}function ct(e,i){yt++,mt[yt]=e.current,e.current=i}var Tt=F(null),Dt=F(null),it=F(null),gt=F(null);function Ct(e,i){switch(ct(it,i),ct(Dt,e),ct(Tt,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?Kg(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=Kg(i),e=Qg(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}j(Tt),ct(Tt,e)}function Pt(){j(Tt),j(Dt),j(it)}function Nt(e){e.memoizedState!==null&&ct(gt,e);var i=Tt.current,s=Qg(i,e.type);i!==s&&(ct(Dt,e),ct(Tt,s))}function ye(e){Dt.current===e&&(j(Tt),j(Dt)),gt.current===e&&(j(gt),hl._currentValue=Q)}var De,ue;function ne(e){if(De===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);De=i&&i[1]||"",ue=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+De+e+ue}var be=!1;function le(e,i){if(!e||be)return"";be=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var Mt=function(){throw Error()};if(Object.defineProperty(Mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Mt,[])}catch(dt){var ot=dt}Reflect.construct(e,[],Mt)}else{try{Mt.call()}catch(dt){ot=dt}e.call(Mt.prototype)}}else{try{throw Error()}catch(dt){ot=dt}(Mt=e())&&typeof Mt.catch=="function"&&Mt.catch(function(){})}}catch(dt){if(dt&&ot&&typeof dt.stack=="string")return[dt.stack,ot.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),E=m[0],D=m[1];if(E&&D){var k=E.split(`
`),st=D.split(`
`);for(d=l=0;l<k.length&&!k[l].includes("DetermineComponentFrameRoot");)l++;for(;d<st.length&&!st[d].includes("DetermineComponentFrameRoot");)d++;if(l===k.length||d===st.length)for(l=k.length-1,d=st.length-1;1<=l&&0<=d&&k[l]!==st[d];)d--;for(;1<=l&&0<=d;l--,d--)if(k[l]!==st[d]){if(l!==1||d!==1)do if(l--,d--,0>d||k[l]!==st[d]){var xt=`
`+k[l].replace(" at new "," at ");return e.displayName&&xt.includes("<anonymous>")&&(xt=xt.replace("<anonymous>",e.displayName)),xt}while(1<=l&&0<=d);break}}}finally{be=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?ne(s):""}function en(e,i){switch(e.tag){case 26:case 27:case 5:return ne(e.type);case 16:return ne("Lazy");case 13:return e.child!==i&&i!==null?ne("Suspense Fallback"):ne("Suspense");case 19:return ne("SuspenseList");case 0:case 15:return le(e.type,!1);case 11:return le(e.type.render,!1);case 1:return le(e.type,!0);case 31:return ne("Activity");default:return""}}function X(e){try{var i="",s=null;do i+=en(e,s),s=e,e=e.return;while(e);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var je=Object.prototype.hasOwnProperty,Se=c.unstable_scheduleCallback,he=c.unstable_cancelCallback,qt=c.unstable_shouldYield,I=c.unstable_requestPaint,A=c.unstable_now,J=c.unstable_getCurrentPriorityLevel,_t=c.unstable_ImmediatePriority,Et=c.unstable_UserBlockingPriority,ht=c.unstable_NormalPriority,Xt=c.unstable_LowPriority,Ut=c.unstable_IdlePriority,Wt=c.log,ae=c.unstable_setDisableYieldValue,At=null,wt=null;function Gt(e){if(typeof Wt=="function"&&ae(e),wt&&typeof wt.setStrictMode=="function")try{wt.setStrictMode(At,e)}catch{}}var Ft=Math.clz32?Math.clz32:Z,Lt=Math.log,me=Math.LN2;function Z(e){return e>>>=0,e===0?32:31-(Lt(e)/me|0)|0}var Ot=256,Rt=262144,pt=4194304;function ut(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function vt(e,i,s){var l=e.pendingLanes;if(l===0)return 0;var d=0,m=e.suspendedLanes,E=e.pingedLanes;e=e.warmLanes;var D=l&134217727;return D!==0?(l=D&~m,l!==0?d=ut(l):(E&=D,E!==0?d=ut(E):s||(s=D&~e,s!==0&&(d=ut(s))))):(D=l&~m,D!==0?d=ut(D):E!==0?d=ut(E):s||(s=l&~e,s!==0&&(d=ut(s)))),d===0?0:i!==0&&i!==d&&(i&m)===0&&(m=d&-d,s=i&-i,m>=s||m===32&&(s&4194048)!==0)?i:d}function bt(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function Kt(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function se(){var e=pt;return pt<<=1,(pt&62914560)===0&&(pt=4194304),e}function ce(e){for(var i=[],s=0;31>s;s++)i.push(e);return i}function Je(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ve(e,i,s,l,d,m){var E=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var D=e.entanglements,k=e.expirationTimes,st=e.hiddenUpdates;for(s=E&~s;0<s;){var xt=31-Ft(s),Mt=1<<xt;D[xt]=0,k[xt]=-1;var ot=st[xt];if(ot!==null)for(st[xt]=null,xt=0;xt<ot.length;xt++){var dt=ot[xt];dt!==null&&(dt.lane&=-536870913)}s&=~Mt}l!==0&&oi(e,l,0),m!==0&&d===0&&e.tag!==0&&(e.suspendedLanes|=m&~(E&~i))}function oi(e,i,s){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-Ft(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|s&261930}function Le(e,i){var s=e.entangledLanes|=i;for(e=e.entanglements;s;){var l=31-Ft(s),d=1<<l;d&i|e[l]&i&&(e[l]|=i),s&=~d}}function Zn(e,i){var s=i&-i;return s=(s&42)!==0?1:li(s),(s&(e.suspendedLanes|i))!==0?0:s}function li(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Hn(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ns(){var e=G.p;return e!==0?e:(e=window.event,e===void 0?32:yv(e.type))}function ci(e,i){var s=G.p;try{return G.p=e,i()}finally{G.p=s}}var Kn=Math.random().toString(36).slice(2),ln="__reactFiber$"+Kn,Sn="__reactProps$"+Kn,ui="__reactContainer$"+Kn,fi="__reactEvents$"+Kn,Zi="__reactListeners$"+Kn,va="__reactHandles$"+Kn,is="__reactResources$"+Kn,Ki="__reactMarker$"+Kn;function Is(e){delete e[ln],delete e[Sn],delete e[fi],delete e[Zi],delete e[va]}function Qi(e){var i=e[ln];if(i)return i;for(var s=e.parentNode;s;){if(i=s[ui]||s[ln]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(e=av(e);e!==null;){if(s=e[ln])return s;e=av(e)}return i}e=s,s=e.parentNode}return null}function Oi(e){if(e=e[ln]||e[ui]){var i=e.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return e}return null}function _a(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function Ji(e){var i=e[is];return i||(i=e[is]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function N(e){e[Ki]=!0}var tt=new Set,ft={};function rt(e,i){nt(e,i),nt(e+"Capture",i)}function nt(e,i){for(ft[e]=i,e=0;e<i.length;e++)tt.add(i[e])}var Bt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),kt={},It={};function Yt(e){return je.call(It,e)?!0:je.call(kt,e)?!1:Bt.test(e)?It[e]=!0:(kt[e]=!0,!1)}function Qt(e,i,s){if(Yt(i))if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+s)}}function ie(e,i,s){if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+s)}}function Jt(e,i,s,l){if(l===null)e.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(i,s,""+l)}}function re(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Fe(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function rn(e,i,s){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);if(!e.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var d=l.get,m=l.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return d.call(this)},set:function(E){s=""+E,m.call(this,E)}}),Object.defineProperty(e,i,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(E){s=""+E},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function tn(e){if(!e._valueTracker){var i=Fe(e)?"checked":"value";e._valueTracker=rn(e,i,""+e[i])}}function ke(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return e&&(l=Fe(e)?e.checked?"true":"false":e.value),e=l,e!==s?(i.setValue(e),!0):!1}function te(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ie=/[\n"\\]/g;function fe(e){return e.replace(Ie,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Cn(e,i,s,l,d,m,E,D){e.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.type=E:e.removeAttribute("type"),i!=null?E==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+re(i)):e.value!==""+re(i)&&(e.value=""+re(i)):E!=="submit"&&E!=="reset"||e.removeAttribute("value"),i!=null?Dn(e,E,re(i)):s!=null?Dn(e,E,re(s)):l!=null&&e.removeAttribute("value"),d==null&&m!=null&&(e.defaultChecked=!!m),d!=null&&(e.checked=d&&typeof d!="function"&&typeof d!="symbol"),D!=null&&typeof D!="function"&&typeof D!="symbol"&&typeof D!="boolean"?e.name=""+re(D):e.removeAttribute("name")}function xa(e,i,s,l,d,m,E,D){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),i!=null||s!=null){if(!(m!=="submit"&&m!=="reset"||i!=null)){tn(e);return}s=s!=null?""+re(s):"",i=i!=null?""+re(i):s,D||i===e.value||(e.value=i),e.defaultValue=i}l=l??d,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=D?e.checked:!!l,e.defaultChecked=!!l,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(e.name=E),tn(e)}function Dn(e,i,s){i==="number"&&te(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function Ei(e,i,s,l){if(e=e.options,i){i={};for(var d=0;d<s.length;d++)i["$"+s[d]]=!0;for(s=0;s<e.length;s++)d=i.hasOwnProperty("$"+e[s].value),e[s].selected!==d&&(e[s].selected=d),d&&l&&(e[s].defaultSelected=!0)}else{for(s=""+re(s),i=null,d=0;d<e.length;d++){if(e[d].value===s){e[d].selected=!0,l&&(e[d].defaultSelected=!0);return}i!==null||e[d].disabled||(i=e[d])}i!==null&&(i.selected=!0)}}function qe(e,i,s){if(i!=null&&(i=""+re(i),i!==e.value&&(e.value=i),s==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=s!=null?""+re(s):""}function Nn(e,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(a(92));if(W(l)){if(1<l.length)throw Error(a(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=re(i),e.defaultValue=s,l=e.textContent,l===s&&l!==""&&l!==null&&(e.value=l),tn(e)}function Mn(e,i){if(i){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=i;return}}e.textContent=i}var Un=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ln(e,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,s):typeof s!="number"||s===0||Un.has(i)?i==="float"?e.cssFloat=s:e[i]=(""+s).trim():e[i]=s+"px"}function yr(e,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var d in i)l=i[d],i.hasOwnProperty(d)&&s[d]!==l&&Ln(e,d,l)}else for(var m in i)i.hasOwnProperty(m)&&Ln(e,m,i[m])}function zi(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var iy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ay=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Vl(e){return ay.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ya(){}var Fu=null;function Iu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Sr=null,Mr=null;function Zp(e){var i=Oi(e);if(i&&(e=i.stateNode)){var s=e[Sn]||null;t:switch(e=i.stateNode,i.type){case"input":if(Cn(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+fe(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==e&&l.form===e.form){var d=l[Sn]||null;if(!d)throw Error(a(90));Cn(l,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===e.form&&ke(l)}break t;case"textarea":qe(e,s.value,s.defaultValue);break t;case"select":i=s.value,i!=null&&Ei(e,!!s.multiple,i,!1)}}}var Hu=!1;function Kp(e,i,s){if(Hu)return e(i,s);Hu=!0;try{var l=e(i);return l}finally{if(Hu=!1,(Sr!==null||Mr!==null)&&(Cc(),Sr&&(i=Sr,e=Mr,Mr=Sr=null,Zp(i),e)))for(i=0;i<e.length;i++)Zp(e[i])}}function Co(e,i){var s=e.stateNode;if(s===null)return null;var l=s[Sn]||null;if(l===null)return null;s=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var Sa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gu=!1;if(Sa)try{var Do={};Object.defineProperty(Do,"passive",{get:function(){Gu=!0}}),window.addEventListener("test",Do,Do),window.removeEventListener("test",Do,Do)}catch{Gu=!1}var as=null,Vu=null,kl=null;function Qp(){if(kl)return kl;var e,i=Vu,s=i.length,l,d="value"in as?as.value:as.textContent,m=d.length;for(e=0;e<s&&i[e]===d[e];e++);var E=s-e;for(l=1;l<=E&&i[s-l]===d[m-l];l++);return kl=d.slice(e,1<l?1-l:void 0)}function ql(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function Xl(){return!0}function Jp(){return!1}function Qn(e){function i(s,l,d,m,E){this._reactName=s,this._targetInst=d,this.type=l,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var D in e)e.hasOwnProperty(D)&&(s=e[D],this[D]=s?s(m):m[D]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Xl:Jp,this.isPropagationStopped=Jp,this}return _(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Xl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Xl)},persist:function(){},isPersistent:Xl}),i}var Hs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wl=Qn(Hs),No=_({},Hs,{view:0,detail:0}),sy=Qn(No),ku,qu,Uo,Yl=_({},No,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Uo&&(Uo&&e.type==="mousemove"?(ku=e.screenX-Uo.screenX,qu=e.screenY-Uo.screenY):qu=ku=0,Uo=e),ku)},movementY:function(e){return"movementY"in e?e.movementY:qu}}),$p=Qn(Yl),ry=_({},Yl,{dataTransfer:0}),oy=Qn(ry),ly=_({},No,{relatedTarget:0}),Xu=Qn(ly),cy=_({},Hs,{animationName:0,elapsedTime:0,pseudoElement:0}),uy=Qn(cy),fy=_({},Hs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),hy=Qn(fy),dy=_({},Hs,{data:0}),tm=Qn(dy),py={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},my={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vy(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=gy[e])?!!i[e]:!1}function Wu(){return vy}var _y=_({},No,{key:function(e){if(e.key){var i=py[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=ql(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?my[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wu,charCode:function(e){return e.type==="keypress"?ql(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ql(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xy=Qn(_y),yy=_({},Yl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),em=Qn(yy),Sy=_({},No,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wu}),My=Qn(Sy),Ey=_({},Hs,{propertyName:0,elapsedTime:0,pseudoElement:0}),by=Qn(Ey),Ty=_({},Yl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ay=Qn(Ty),wy=_({},Hs,{newState:0,oldState:0}),Ry=Qn(wy),Cy=[9,13,27,32],Yu=Sa&&"CompositionEvent"in window,Lo=null;Sa&&"documentMode"in document&&(Lo=document.documentMode);var Dy=Sa&&"TextEvent"in window&&!Lo,nm=Sa&&(!Yu||Lo&&8<Lo&&11>=Lo),im=" ",am=!1;function sm(e,i){switch(e){case"keyup":return Cy.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Er=!1;function Ny(e,i){switch(e){case"compositionend":return rm(i);case"keypress":return i.which!==32?null:(am=!0,im);case"textInput":return e=i.data,e===im&&am?null:e;default:return null}}function Uy(e,i){if(Er)return e==="compositionend"||!Yu&&sm(e,i)?(e=Qp(),kl=Vu=as=null,Er=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return nm&&i.locale!=="ko"?null:i.data;default:return null}}var Ly={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function om(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!Ly[e.type]:i==="textarea"}function lm(e,i,s,l){Sr?Mr?Mr.push(l):Mr=[l]:Sr=l,i=Pc(i,"onChange"),0<i.length&&(s=new Wl("onChange","change",null,s,l),e.push({event:s,listeners:i}))}var Oo=null,zo=null;function Oy(e){qg(e,0)}function jl(e){var i=_a(e);if(ke(i))return e}function cm(e,i){if(e==="change")return i}var um=!1;if(Sa){var ju;if(Sa){var Zu="oninput"in document;if(!Zu){var fm=document.createElement("div");fm.setAttribute("oninput","return;"),Zu=typeof fm.oninput=="function"}ju=Zu}else ju=!1;um=ju&&(!document.documentMode||9<document.documentMode)}function hm(){Oo&&(Oo.detachEvent("onpropertychange",dm),zo=Oo=null)}function dm(e){if(e.propertyName==="value"&&jl(zo)){var i=[];lm(i,zo,e,Iu(e)),Kp(Oy,i)}}function zy(e,i,s){e==="focusin"?(hm(),Oo=i,zo=s,Oo.attachEvent("onpropertychange",dm)):e==="focusout"&&hm()}function Py(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return jl(zo)}function By(e,i){if(e==="click")return jl(i)}function Fy(e,i){if(e==="input"||e==="change")return jl(i)}function Iy(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var hi=typeof Object.is=="function"?Object.is:Iy;function Po(e,i){if(hi(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var s=Object.keys(e),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var d=s[l];if(!je.call(i,d)||!hi(e[d],i[d]))return!1}return!0}function pm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function mm(e,i){var s=pm(e);e=0;for(var l;s;){if(s.nodeType===3){if(l=e+s.textContent.length,e<=i&&l>=i)return{node:s,offset:i-e};e=l}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=pm(s)}}function gm(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?gm(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function vm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=te(e.document);i instanceof e.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)e=i.contentWindow;else break;i=te(e.document)}return i}function Ku(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var Hy=Sa&&"documentMode"in document&&11>=document.documentMode,br=null,Qu=null,Bo=null,Ju=!1;function _m(e,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Ju||br==null||br!==te(l)||(l=br,"selectionStart"in l&&Ku(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Bo&&Po(Bo,l)||(Bo=l,l=Pc(Qu,"onSelect"),0<l.length&&(i=new Wl("onSelect","select",null,i,s),e.push({event:i,listeners:l}),i.target=br)))}function Gs(e,i){var s={};return s[e.toLowerCase()]=i.toLowerCase(),s["Webkit"+e]="webkit"+i,s["Moz"+e]="moz"+i,s}var Tr={animationend:Gs("Animation","AnimationEnd"),animationiteration:Gs("Animation","AnimationIteration"),animationstart:Gs("Animation","AnimationStart"),transitionrun:Gs("Transition","TransitionRun"),transitionstart:Gs("Transition","TransitionStart"),transitioncancel:Gs("Transition","TransitionCancel"),transitionend:Gs("Transition","TransitionEnd")},$u={},xm={};Sa&&(xm=document.createElement("div").style,"AnimationEvent"in window||(delete Tr.animationend.animation,delete Tr.animationiteration.animation,delete Tr.animationstart.animation),"TransitionEvent"in window||delete Tr.transitionend.transition);function Vs(e){if($u[e])return $u[e];if(!Tr[e])return e;var i=Tr[e],s;for(s in i)if(i.hasOwnProperty(s)&&s in xm)return $u[e]=i[s];return e}var ym=Vs("animationend"),Sm=Vs("animationiteration"),Mm=Vs("animationstart"),Gy=Vs("transitionrun"),Vy=Vs("transitionstart"),ky=Vs("transitioncancel"),Em=Vs("transitionend"),bm=new Map,tf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");tf.push("scrollEnd");function Pi(e,i){bm.set(e,i),rt(i,[e])}var Zl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},bi=[],Ar=0,ef=0;function Kl(){for(var e=Ar,i=ef=Ar=0;i<e;){var s=bi[i];bi[i++]=null;var l=bi[i];bi[i++]=null;var d=bi[i];bi[i++]=null;var m=bi[i];if(bi[i++]=null,l!==null&&d!==null){var E=l.pending;E===null?d.next=d:(d.next=E.next,E.next=d),l.pending=d}m!==0&&Tm(s,d,m)}}function Ql(e,i,s,l){bi[Ar++]=e,bi[Ar++]=i,bi[Ar++]=s,bi[Ar++]=l,ef|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function nf(e,i,s,l){return Ql(e,i,s,l),Jl(e)}function ks(e,i){return Ql(e,null,null,i),Jl(e)}function Tm(e,i,s){e.lanes|=s;var l=e.alternate;l!==null&&(l.lanes|=s);for(var d=!1,m=e.return;m!==null;)m.childLanes|=s,l=m.alternate,l!==null&&(l.childLanes|=s),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(d=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,d&&i!==null&&(d=31-Ft(s),e=m.hiddenUpdates,l=e[d],l===null?e[d]=[i]:l.push(i),i.lane=s|536870912),m):null}function Jl(e){if(50<sl)throw sl=0,hh=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var wr={};function qy(e,i,s,l){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function di(e,i,s,l){return new qy(e,i,s,l)}function af(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ma(e,i){var s=e.alternate;return s===null?(s=di(e.tag,i,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=i,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,i=e.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function Am(e,i){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,i=s.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function $l(e,i,s,l,d,m){var E=0;if(l=e,typeof e=="function")af(e)&&(E=1);else if(typeof e=="string")E=ZS(e,s,Tt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case w:return e=di(31,s,i,d),e.elementType=w,e.lanes=m,e;case b:return qs(s.children,d,m,i);case S:E=8,d|=24;break;case x:return e=di(12,s,i,d|2),e.elementType=x,e.lanes=m,e;case L:return e=di(13,s,i,d),e.elementType=L,e.lanes=m,e;case B:return e=di(19,s,i,d),e.elementType=B,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:E=10;break t;case T:E=9;break t;case C:E=11;break t;case P:E=14;break t;case q:E=16,l=null;break t}E=29,s=Error(a(130,e===null?"null":typeof e,"")),l=null}return i=di(E,s,i,d),i.elementType=e,i.type=l,i.lanes=m,i}function qs(e,i,s,l){return e=di(7,e,l,i),e.lanes=s,e}function sf(e,i,s){return e=di(6,e,null,i),e.lanes=s,e}function wm(e){var i=di(18,null,null,0);return i.stateNode=e,i}function rf(e,i,s){return i=di(4,e.children!==null?e.children:[],e.key,i),i.lanes=s,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var Rm=new WeakMap;function Ti(e,i){if(typeof e=="object"&&e!==null){var s=Rm.get(e);return s!==void 0?s:(i={value:e,source:i,stack:X(i)},Rm.set(e,i),i)}return{value:e,source:i,stack:X(i)}}var Rr=[],Cr=0,tc=null,Fo=0,Ai=[],wi=0,ss=null,$i=1,ta="";function Ea(e,i){Rr[Cr++]=Fo,Rr[Cr++]=tc,tc=e,Fo=i}function Cm(e,i,s){Ai[wi++]=$i,Ai[wi++]=ta,Ai[wi++]=ss,ss=e;var l=$i;e=ta;var d=32-Ft(l)-1;l&=~(1<<d),s+=1;var m=32-Ft(i)+d;if(30<m){var E=d-d%5;m=(l&(1<<E)-1).toString(32),l>>=E,d-=E,$i=1<<32-Ft(i)+d|s<<d|l,ta=m+e}else $i=1<<m|s<<d|l,ta=e}function of(e){e.return!==null&&(Ea(e,1),Cm(e,1,0))}function lf(e){for(;e===tc;)tc=Rr[--Cr],Rr[Cr]=null,Fo=Rr[--Cr],Rr[Cr]=null;for(;e===ss;)ss=Ai[--wi],Ai[wi]=null,ta=Ai[--wi],Ai[wi]=null,$i=Ai[--wi],Ai[wi]=null}function Dm(e,i){Ai[wi++]=$i,Ai[wi++]=ta,Ai[wi++]=ss,$i=i.id,ta=i.overflow,ss=e}var On=null,nn=null,Re=!1,rs=null,Ri=!1,cf=Error(a(519));function os(e){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Io(Ti(i,e)),cf}function Nm(e){var i=e.stateNode,s=e.type,l=e.memoizedProps;switch(i[ln]=e,i[Sn]=l,s){case"dialog":Ee("cancel",i),Ee("close",i);break;case"iframe":case"object":case"embed":Ee("load",i);break;case"video":case"audio":for(s=0;s<ol.length;s++)Ee(ol[s],i);break;case"source":Ee("error",i);break;case"img":case"image":case"link":Ee("error",i),Ee("load",i);break;case"details":Ee("toggle",i);break;case"input":Ee("invalid",i),xa(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Ee("invalid",i);break;case"textarea":Ee("invalid",i),Nn(i,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||jg(i.textContent,s)?(l.popover!=null&&(Ee("beforetoggle",i),Ee("toggle",i)),l.onScroll!=null&&Ee("scroll",i),l.onScrollEnd!=null&&Ee("scrollend",i),l.onClick!=null&&(i.onclick=ya),i=!0):i=!1,i||os(e,!0)}function Um(e){for(On=e.return;On;)switch(On.tag){case 5:case 31:case 13:Ri=!1;return;case 27:case 3:Ri=!0;return;default:On=On.return}}function Dr(e){if(e!==On)return!1;if(!Re)return Um(e),Re=!0,!1;var i=e.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||wh(e.type,e.memoizedProps)),s=!s),s&&nn&&os(e),Um(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));nn=iv(e)}else if(i===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));nn=iv(e)}else i===27?(i=nn,Ss(e.type)?(e=Uh,Uh=null,nn=e):nn=i):nn=On?Di(e.stateNode.nextSibling):null;return!0}function Xs(){nn=On=null,Re=!1}function uf(){var e=rs;return e!==null&&(ei===null?ei=e:ei.push.apply(ei,e),rs=null),e}function Io(e){rs===null?rs=[e]:rs.push(e)}var ff=F(null),Ws=null,ba=null;function ls(e,i,s){ct(ff,i._currentValue),i._currentValue=s}function Ta(e){e._currentValue=ff.current,j(ff)}function hf(e,i,s){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===s)break;e=e.return}}function df(e,i,s,l){var d=e.child;for(d!==null&&(d.return=e);d!==null;){var m=d.dependencies;if(m!==null){var E=d.child;m=m.firstContext;t:for(;m!==null;){var D=m;m=d;for(var k=0;k<i.length;k++)if(D.context===i[k]){m.lanes|=s,D=m.alternate,D!==null&&(D.lanes|=s),hf(m.return,s,e),l||(E=null);break t}m=D.next}}else if(d.tag===18){if(E=d.return,E===null)throw Error(a(341));E.lanes|=s,m=E.alternate,m!==null&&(m.lanes|=s),hf(E,s,e),E=null}else E=d.child;if(E!==null)E.return=d;else for(E=d;E!==null;){if(E===e){E=null;break}if(d=E.sibling,d!==null){d.return=E.return,E=d;break}E=E.return}d=E}}function Nr(e,i,s,l){e=null;for(var d=i,m=!1;d!==null;){if(!m){if((d.flags&524288)!==0)m=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var E=d.alternate;if(E===null)throw Error(a(387));if(E=E.memoizedProps,E!==null){var D=d.type;hi(d.pendingProps.value,E.value)||(e!==null?e.push(D):e=[D])}}else if(d===gt.current){if(E=d.alternate,E===null)throw Error(a(387));E.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(e!==null?e.push(hl):e=[hl])}d=d.return}e!==null&&df(i,e,s,l),i.flags|=262144}function ec(e){for(e=e.firstContext;e!==null;){if(!hi(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ys(e){Ws=e,ba=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function zn(e){return Lm(Ws,e)}function nc(e,i){return Ws===null&&Ys(e),Lm(e,i)}function Lm(e,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},ba===null){if(e===null)throw Error(a(308));ba=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else ba=ba.next=i;return s}var Xy=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(s,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(s){return s()})}},Wy=c.unstable_scheduleCallback,Yy=c.unstable_NormalPriority,gn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function pf(){return{controller:new Xy,data:new Map,refCount:0}}function Ho(e){e.refCount--,e.refCount===0&&Wy(Yy,function(){e.controller.abort()})}var Go=null,mf=0,Ur=0,Lr=null;function jy(e,i){if(Go===null){var s=Go=[];mf=0,Ur=_h(),Lr={status:"pending",value:void 0,then:function(l){s.push(l)}}}return mf++,i.then(Om,Om),i}function Om(){if(--mf===0&&Go!==null){Lr!==null&&(Lr.status="fulfilled");var e=Go;Go=null,Ur=0,Lr=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function Zy(e,i){var s=[],l={status:"pending",value:null,reason:null,then:function(d){s.push(d)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var d=0;d<s.length;d++)(0,s[d])(i)},function(d){for(l.status="rejected",l.reason=d,d=0;d<s.length;d++)(0,s[d])(void 0)}),l}var zm=z.S;z.S=function(e,i){_g=A(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&jy(e,i),zm!==null&&zm(e,i)};var js=F(null);function gf(){var e=js.current;return e!==null?e:$e.pooledCache}function ic(e,i){i===null?ct(js,js.current):ct(js,i.pool)}function Pm(){var e=gf();return e===null?null:{parent:gn._currentValue,pool:e}}var Or=Error(a(460)),vf=Error(a(474)),ac=Error(a(542)),sc={then:function(){}};function Bm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Fm(e,i,s){switch(s=e[s],s===void 0?e.push(i):s!==i&&(i.then(ya,ya),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Hm(e),e;default:if(typeof i.status=="string")i.then(ya,ya);else{if(e=$e,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var d=i;d.status="fulfilled",d.value=l}},function(l){if(i.status==="pending"){var d=i;d.status="rejected",d.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Hm(e),e}throw Ks=i,Or}}function Zs(e){try{var i=e._init;return i(e._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(Ks=s,Or):s}}var Ks=null;function Im(){if(Ks===null)throw Error(a(459));var e=Ks;return Ks=null,e}function Hm(e){if(e===Or||e===ac)throw Error(a(483))}var zr=null,Vo=0;function rc(e){var i=Vo;return Vo+=1,zr===null&&(zr=[]),Fm(zr,e,i)}function ko(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function oc(e,i){throw i.$$typeof===v?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function Gm(e){function i(et,Y){if(e){var at=et.deletions;at===null?(et.deletions=[Y],et.flags|=16):at.push(Y)}}function s(et,Y){if(!e)return null;for(;Y!==null;)i(et,Y),Y=Y.sibling;return null}function l(et){for(var Y=new Map;et!==null;)et.key!==null?Y.set(et.key,et):Y.set(et.index,et),et=et.sibling;return Y}function d(et,Y){return et=Ma(et,Y),et.index=0,et.sibling=null,et}function m(et,Y,at){return et.index=at,e?(at=et.alternate,at!==null?(at=at.index,at<Y?(et.flags|=67108866,Y):at):(et.flags|=67108866,Y)):(et.flags|=1048576,Y)}function E(et){return e&&et.alternate===null&&(et.flags|=67108866),et}function D(et,Y,at,St){return Y===null||Y.tag!==6?(Y=sf(at,et.mode,St),Y.return=et,Y):(Y=d(Y,at),Y.return=et,Y)}function k(et,Y,at,St){var ee=at.type;return ee===b?xt(et,Y,at.props.children,St,at.key):Y!==null&&(Y.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===q&&Zs(ee)===Y.type)?(Y=d(Y,at.props),ko(Y,at),Y.return=et,Y):(Y=$l(at.type,at.key,at.props,null,et.mode,St),ko(Y,at),Y.return=et,Y)}function st(et,Y,at,St){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==at.containerInfo||Y.stateNode.implementation!==at.implementation?(Y=rf(at,et.mode,St),Y.return=et,Y):(Y=d(Y,at.children||[]),Y.return=et,Y)}function xt(et,Y,at,St,ee){return Y===null||Y.tag!==7?(Y=qs(at,et.mode,St,ee),Y.return=et,Y):(Y=d(Y,at),Y.return=et,Y)}function Mt(et,Y,at){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return Y=sf(""+Y,et.mode,at),Y.return=et,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case y:return at=$l(Y.type,Y.key,Y.props,null,et.mode,at),ko(at,Y),at.return=et,at;case M:return Y=rf(Y,et.mode,at),Y.return=et,Y;case q:return Y=Zs(Y),Mt(et,Y,at)}if(W(Y)||$(Y))return Y=qs(Y,et.mode,at,null),Y.return=et,Y;if(typeof Y.then=="function")return Mt(et,rc(Y),at);if(Y.$$typeof===U)return Mt(et,nc(et,Y),at);oc(et,Y)}return null}function ot(et,Y,at,St){var ee=Y!==null?Y.key:null;if(typeof at=="string"&&at!==""||typeof at=="number"||typeof at=="bigint")return ee!==null?null:D(et,Y,""+at,St);if(typeof at=="object"&&at!==null){switch(at.$$typeof){case y:return at.key===ee?k(et,Y,at,St):null;case M:return at.key===ee?st(et,Y,at,St):null;case q:return at=Zs(at),ot(et,Y,at,St)}if(W(at)||$(at))return ee!==null?null:xt(et,Y,at,St,null);if(typeof at.then=="function")return ot(et,Y,rc(at),St);if(at.$$typeof===U)return ot(et,Y,nc(et,at),St);oc(et,at)}return null}function dt(et,Y,at,St,ee){if(typeof St=="string"&&St!==""||typeof St=="number"||typeof St=="bigint")return et=et.get(at)||null,D(Y,et,""+St,ee);if(typeof St=="object"&&St!==null){switch(St.$$typeof){case y:return et=et.get(St.key===null?at:St.key)||null,k(Y,et,St,ee);case M:return et=et.get(St.key===null?at:St.key)||null,st(Y,et,St,ee);case q:return St=Zs(St),dt(et,Y,at,St,ee)}if(W(St)||$(St))return et=et.get(at)||null,xt(Y,et,St,ee,null);if(typeof St.then=="function")return dt(et,Y,at,rc(St),ee);if(St.$$typeof===U)return dt(et,Y,at,nc(Y,St),ee);oc(Y,St)}return null}function jt(et,Y,at,St){for(var ee=null,Oe=null,$t=Y,ve=Y=0,Ae=null;$t!==null&&ve<at.length;ve++){$t.index>ve?(Ae=$t,$t=null):Ae=$t.sibling;var ze=ot(et,$t,at[ve],St);if(ze===null){$t===null&&($t=Ae);break}e&&$t&&ze.alternate===null&&i(et,$t),Y=m(ze,Y,ve),Oe===null?ee=ze:Oe.sibling=ze,Oe=ze,$t=Ae}if(ve===at.length)return s(et,$t),Re&&Ea(et,ve),ee;if($t===null){for(;ve<at.length;ve++)$t=Mt(et,at[ve],St),$t!==null&&(Y=m($t,Y,ve),Oe===null?ee=$t:Oe.sibling=$t,Oe=$t);return Re&&Ea(et,ve),ee}for($t=l($t);ve<at.length;ve++)Ae=dt($t,et,ve,at[ve],St),Ae!==null&&(e&&Ae.alternate!==null&&$t.delete(Ae.key===null?ve:Ae.key),Y=m(Ae,Y,ve),Oe===null?ee=Ae:Oe.sibling=Ae,Oe=Ae);return e&&$t.forEach(function(As){return i(et,As)}),Re&&Ea(et,ve),ee}function oe(et,Y,at,St){if(at==null)throw Error(a(151));for(var ee=null,Oe=null,$t=Y,ve=Y=0,Ae=null,ze=at.next();$t!==null&&!ze.done;ve++,ze=at.next()){$t.index>ve?(Ae=$t,$t=null):Ae=$t.sibling;var As=ot(et,$t,ze.value,St);if(As===null){$t===null&&($t=Ae);break}e&&$t&&As.alternate===null&&i(et,$t),Y=m(As,Y,ve),Oe===null?ee=As:Oe.sibling=As,Oe=As,$t=Ae}if(ze.done)return s(et,$t),Re&&Ea(et,ve),ee;if($t===null){for(;!ze.done;ve++,ze=at.next())ze=Mt(et,ze.value,St),ze!==null&&(Y=m(ze,Y,ve),Oe===null?ee=ze:Oe.sibling=ze,Oe=ze);return Re&&Ea(et,ve),ee}for($t=l($t);!ze.done;ve++,ze=at.next())ze=dt($t,et,ve,ze.value,St),ze!==null&&(e&&ze.alternate!==null&&$t.delete(ze.key===null?ve:ze.key),Y=m(ze,Y,ve),Oe===null?ee=ze:Oe.sibling=ze,Oe=ze);return e&&$t.forEach(function(rM){return i(et,rM)}),Re&&Ea(et,ve),ee}function Qe(et,Y,at,St){if(typeof at=="object"&&at!==null&&at.type===b&&at.key===null&&(at=at.props.children),typeof at=="object"&&at!==null){switch(at.$$typeof){case y:t:{for(var ee=at.key;Y!==null;){if(Y.key===ee){if(ee=at.type,ee===b){if(Y.tag===7){s(et,Y.sibling),St=d(Y,at.props.children),St.return=et,et=St;break t}}else if(Y.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===q&&Zs(ee)===Y.type){s(et,Y.sibling),St=d(Y,at.props),ko(St,at),St.return=et,et=St;break t}s(et,Y);break}else i(et,Y);Y=Y.sibling}at.type===b?(St=qs(at.props.children,et.mode,St,at.key),St.return=et,et=St):(St=$l(at.type,at.key,at.props,null,et.mode,St),ko(St,at),St.return=et,et=St)}return E(et);case M:t:{for(ee=at.key;Y!==null;){if(Y.key===ee)if(Y.tag===4&&Y.stateNode.containerInfo===at.containerInfo&&Y.stateNode.implementation===at.implementation){s(et,Y.sibling),St=d(Y,at.children||[]),St.return=et,et=St;break t}else{s(et,Y);break}else i(et,Y);Y=Y.sibling}St=rf(at,et.mode,St),St.return=et,et=St}return E(et);case q:return at=Zs(at),Qe(et,Y,at,St)}if(W(at))return jt(et,Y,at,St);if($(at)){if(ee=$(at),typeof ee!="function")throw Error(a(150));return at=ee.call(at),oe(et,Y,at,St)}if(typeof at.then=="function")return Qe(et,Y,rc(at),St);if(at.$$typeof===U)return Qe(et,Y,nc(et,at),St);oc(et,at)}return typeof at=="string"&&at!==""||typeof at=="number"||typeof at=="bigint"?(at=""+at,Y!==null&&Y.tag===6?(s(et,Y.sibling),St=d(Y,at),St.return=et,et=St):(s(et,Y),St=sf(at,et.mode,St),St.return=et,et=St),E(et)):s(et,Y)}return function(et,Y,at,St){try{Vo=0;var ee=Qe(et,Y,at,St);return zr=null,ee}catch($t){if($t===Or||$t===ac)throw $t;var Oe=di(29,$t,null,et.mode);return Oe.lanes=St,Oe.return=et,Oe}}}var Qs=Gm(!0),Vm=Gm(!1),cs=!1;function _f(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function xf(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function us(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function fs(e,i,s){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(He&2)!==0){var d=l.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),l.pending=i,i=Jl(e),Tm(e,null,s),i}return Ql(e,l,i,s),Jl(e)}function qo(e,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=e.pendingLanes,s|=l,i.lanes=s,Le(e,s)}}function yf(e,i){var s=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var d=null,m=null;if(s=s.firstBaseUpdate,s!==null){do{var E={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};m===null?d=m=E:m=m.next=E,s=s.next}while(s!==null);m===null?d=m=i:m=m.next=i}else d=m=i;s={baseState:l.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=i:e.next=i,s.lastBaseUpdate=i}var Sf=!1;function Xo(){if(Sf){var e=Lr;if(e!==null)throw e}}function Wo(e,i,s,l){Sf=!1;var d=e.updateQueue;cs=!1;var m=d.firstBaseUpdate,E=d.lastBaseUpdate,D=d.shared.pending;if(D!==null){d.shared.pending=null;var k=D,st=k.next;k.next=null,E===null?m=st:E.next=st,E=k;var xt=e.alternate;xt!==null&&(xt=xt.updateQueue,D=xt.lastBaseUpdate,D!==E&&(D===null?xt.firstBaseUpdate=st:D.next=st,xt.lastBaseUpdate=k))}if(m!==null){var Mt=d.baseState;E=0,xt=st=k=null,D=m;do{var ot=D.lane&-536870913,dt=ot!==D.lane;if(dt?(Te&ot)===ot:(l&ot)===ot){ot!==0&&ot===Ur&&(Sf=!0),xt!==null&&(xt=xt.next={lane:0,tag:D.tag,payload:D.payload,callback:null,next:null});t:{var jt=e,oe=D;ot=i;var Qe=s;switch(oe.tag){case 1:if(jt=oe.payload,typeof jt=="function"){Mt=jt.call(Qe,Mt,ot);break t}Mt=jt;break t;case 3:jt.flags=jt.flags&-65537|128;case 0:if(jt=oe.payload,ot=typeof jt=="function"?jt.call(Qe,Mt,ot):jt,ot==null)break t;Mt=_({},Mt,ot);break t;case 2:cs=!0}}ot=D.callback,ot!==null&&(e.flags|=64,dt&&(e.flags|=8192),dt=d.callbacks,dt===null?d.callbacks=[ot]:dt.push(ot))}else dt={lane:ot,tag:D.tag,payload:D.payload,callback:D.callback,next:null},xt===null?(st=xt=dt,k=Mt):xt=xt.next=dt,E|=ot;if(D=D.next,D===null){if(D=d.shared.pending,D===null)break;dt=D,D=dt.next,dt.next=null,d.lastBaseUpdate=dt,d.shared.pending=null}}while(!0);xt===null&&(k=Mt),d.baseState=k,d.firstBaseUpdate=st,d.lastBaseUpdate=xt,m===null&&(d.shared.lanes=0),gs|=E,e.lanes=E,e.memoizedState=Mt}}function km(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function qm(e,i){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)km(s[e],i)}var Pr=F(null),lc=F(0);function Xm(e,i){e=Oa,ct(lc,e),ct(Pr,i),Oa=e|i.baseLanes}function Mf(){ct(lc,Oa),ct(Pr,Pr.current)}function Ef(){Oa=lc.current,j(Pr),j(lc)}var pi=F(null),Ci=null;function hs(e){var i=e.alternate;ct(pn,pn.current&1),ct(pi,e),Ci===null&&(i===null||Pr.current!==null||i.memoizedState!==null)&&(Ci=e)}function bf(e){ct(pn,pn.current),ct(pi,e),Ci===null&&(Ci=e)}function Wm(e){e.tag===22?(ct(pn,pn.current),ct(pi,e),Ci===null&&(Ci=e)):ds()}function ds(){ct(pn,pn.current),ct(pi,pi.current)}function mi(e){j(pi),Ci===e&&(Ci=null),j(pn)}var pn=F(0);function cc(e){for(var i=e;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||Dh(s)||Nh(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Aa=0,ge=null,Ze=null,vn=null,uc=!1,Br=!1,Js=!1,fc=0,Yo=0,Fr=null,Ky=0;function un(){throw Error(a(321))}function Tf(e,i){if(i===null)return!1;for(var s=0;s<i.length&&s<e.length;s++)if(!hi(e[s],i[s]))return!1;return!0}function Af(e,i,s,l,d,m){return Aa=m,ge=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,z.H=e===null||e.memoizedState===null?C0:Gf,Js=!1,m=s(l,d),Js=!1,Br&&(m=jm(i,s,l,d)),Ym(e),m}function Ym(e){z.H=Ko;var i=Ze!==null&&Ze.next!==null;if(Aa=0,vn=Ze=ge=null,uc=!1,Yo=0,Fr=null,i)throw Error(a(300));e===null||_n||(e=e.dependencies,e!==null&&ec(e)&&(_n=!0))}function jm(e,i,s,l){ge=e;var d=0;do{if(Br&&(Fr=null),Yo=0,Br=!1,25<=d)throw Error(a(301));if(d+=1,vn=Ze=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}z.H=D0,m=i(s,l)}while(Br);return m}function Qy(){var e=z.H,i=e.useState()[0];return i=typeof i.then=="function"?jo(i):i,e=e.useState()[0],(Ze!==null?Ze.memoizedState:null)!==e&&(ge.flags|=1024),i}function wf(){var e=fc!==0;return fc=0,e}function Rf(e,i,s){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~s}function Cf(e){if(uc){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}uc=!1}Aa=0,vn=Ze=ge=null,Br=!1,Yo=fc=0,Fr=null}function Wn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vn===null?ge.memoizedState=vn=e:vn=vn.next=e,vn}function mn(){if(Ze===null){var e=ge.alternate;e=e!==null?e.memoizedState:null}else e=Ze.next;var i=vn===null?ge.memoizedState:vn.next;if(i!==null)vn=i,Ze=e;else{if(e===null)throw ge.alternate===null?Error(a(467)):Error(a(310));Ze=e,e={memoizedState:Ze.memoizedState,baseState:Ze.baseState,baseQueue:Ze.baseQueue,queue:Ze.queue,next:null},vn===null?ge.memoizedState=vn=e:vn=vn.next=e}return vn}function hc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function jo(e){var i=Yo;return Yo+=1,Fr===null&&(Fr=[]),e=Fm(Fr,e,i),i=ge,(vn===null?i.memoizedState:vn.next)===null&&(i=i.alternate,z.H=i===null||i.memoizedState===null?C0:Gf),e}function dc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return jo(e);if(e.$$typeof===U)return zn(e)}throw Error(a(438,String(e)))}function Df(e){var i=null,s=ge.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=ge.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(d){return d.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=hc(),ge.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(e),l=0;l<e;l++)s[l]=O;return i.index++,s}function wa(e,i){return typeof i=="function"?i(e):i}function pc(e){var i=mn();return Nf(i,Ze,e)}function Nf(e,i,s){var l=e.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=s;var d=e.baseQueue,m=l.pending;if(m!==null){if(d!==null){var E=d.next;d.next=m.next,m.next=E}i.baseQueue=d=m,l.pending=null}if(m=e.baseState,d===null)e.memoizedState=m;else{i=d.next;var D=E=null,k=null,st=i,xt=!1;do{var Mt=st.lane&-536870913;if(Mt!==st.lane?(Te&Mt)===Mt:(Aa&Mt)===Mt){var ot=st.revertLane;if(ot===0)k!==null&&(k=k.next={lane:0,revertLane:0,gesture:null,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null}),Mt===Ur&&(xt=!0);else if((Aa&ot)===ot){st=st.next,ot===Ur&&(xt=!0);continue}else Mt={lane:0,revertLane:st.revertLane,gesture:null,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null},k===null?(D=k=Mt,E=m):k=k.next=Mt,ge.lanes|=ot,gs|=ot;Mt=st.action,Js&&s(m,Mt),m=st.hasEagerState?st.eagerState:s(m,Mt)}else ot={lane:Mt,revertLane:st.revertLane,gesture:st.gesture,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null},k===null?(D=k=ot,E=m):k=k.next=ot,ge.lanes|=Mt,gs|=Mt;st=st.next}while(st!==null&&st!==i);if(k===null?E=m:k.next=D,!hi(m,e.memoizedState)&&(_n=!0,xt&&(s=Lr,s!==null)))throw s;e.memoizedState=m,e.baseState=E,e.baseQueue=k,l.lastRenderedState=m}return d===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Uf(e){var i=mn(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=e;var l=s.dispatch,d=s.pending,m=i.memoizedState;if(d!==null){s.pending=null;var E=d=d.next;do m=e(m,E.action),E=E.next;while(E!==d);hi(m,i.memoizedState)||(_n=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),s.lastRenderedState=m}return[m,l]}function Zm(e,i,s){var l=ge,d=mn(),m=Re;if(m){if(s===void 0)throw Error(a(407));s=s()}else s=i();var E=!hi((Ze||d).memoizedState,s);if(E&&(d.memoizedState=s,_n=!0),d=d.queue,zf(Jm.bind(null,l,d,e),[e]),d.getSnapshot!==i||E||vn!==null&&vn.memoizedState.tag&1){if(l.flags|=2048,Ir(9,{destroy:void 0},Qm.bind(null,l,d,s,i),null),$e===null)throw Error(a(349));m||(Aa&127)!==0||Km(l,i,s)}return s}function Km(e,i,s){e.flags|=16384,e={getSnapshot:i,value:s},i=ge.updateQueue,i===null?(i=hc(),ge.updateQueue=i,i.stores=[e]):(s=i.stores,s===null?i.stores=[e]:s.push(e))}function Qm(e,i,s,l){i.value=s,i.getSnapshot=l,$m(i)&&t0(e)}function Jm(e,i,s){return s(function(){$m(i)&&t0(e)})}function $m(e){var i=e.getSnapshot;e=e.value;try{var s=i();return!hi(e,s)}catch{return!0}}function t0(e){var i=ks(e,2);i!==null&&ni(i,e,2)}function Lf(e){var i=Wn();if(typeof e=="function"){var s=e;if(e=s(),Js){Gt(!0);try{s()}finally{Gt(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:e},i}function e0(e,i,s,l){return e.baseState=s,Nf(e,Ze,typeof l=="function"?l:wa)}function Jy(e,i,s,l,d){if(vc(e))throw Error(a(485));if(e=i.action,e!==null){var m={payload:d,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){m.listeners.push(E)}};z.T!==null?s(!0):m.isTransition=!1,l(m),s=i.pending,s===null?(m.next=i.pending=m,n0(i,m)):(m.next=s.next,i.pending=s.next=m)}}function n0(e,i){var s=i.action,l=i.payload,d=e.state;if(i.isTransition){var m=z.T,E={};z.T=E;try{var D=s(d,l),k=z.S;k!==null&&k(E,D),i0(e,i,D)}catch(st){Of(e,i,st)}finally{m!==null&&E.types!==null&&(m.types=E.types),z.T=m}}else try{m=s(d,l),i0(e,i,m)}catch(st){Of(e,i,st)}}function i0(e,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){a0(e,i,l)},function(l){return Of(e,i,l)}):a0(e,i,s)}function a0(e,i,s){i.status="fulfilled",i.value=s,s0(i),e.state=s,i=e.pending,i!==null&&(s=i.next,s===i?e.pending=null:(s=s.next,i.next=s,n0(e,s)))}function Of(e,i,s){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,s0(i),i=i.next;while(i!==l)}e.action=null}function s0(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function r0(e,i){return i}function o0(e,i){if(Re){var s=$e.formState;if(s!==null){t:{var l=ge;if(Re){if(nn){e:{for(var d=nn,m=Ri;d.nodeType!==8;){if(!m){d=null;break e}if(d=Di(d.nextSibling),d===null){d=null;break e}}m=d.data,d=m==="F!"||m==="F"?d:null}if(d){nn=Di(d.nextSibling),l=d.data==="F!";break t}}os(l)}l=!1}l&&(i=s[0])}}return s=Wn(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:r0,lastRenderedState:i},s.queue=l,s=A0.bind(null,ge,l),l.dispatch=s,l=Lf(!1),m=Hf.bind(null,ge,!1,l.queue),l=Wn(),d={state:i,dispatch:null,action:e,pending:null},l.queue=d,s=Jy.bind(null,ge,d,m,s),d.dispatch=s,l.memoizedState=e,[i,s,!1]}function l0(e){var i=mn();return c0(i,Ze,e)}function c0(e,i,s){if(i=Nf(e,i,r0)[0],e=pc(wa)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=jo(i)}catch(E){throw E===Or?ac:E}else l=i;i=mn();var d=i.queue,m=d.dispatch;return s!==i.memoizedState&&(ge.flags|=2048,Ir(9,{destroy:void 0},$y.bind(null,d,s),null)),[l,m,e]}function $y(e,i){e.action=i}function u0(e){var i=mn(),s=Ze;if(s!==null)return c0(i,s,e);mn(),i=i.memoizedState,s=mn();var l=s.queue.dispatch;return s.memoizedState=e,[i,l,!1]}function Ir(e,i,s,l){return e={tag:e,create:s,deps:l,inst:i,next:null},i=ge.updateQueue,i===null&&(i=hc(),ge.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=e.next=e:(l=s.next,s.next=e,e.next=l,i.lastEffect=e),e}function f0(){return mn().memoizedState}function mc(e,i,s,l){var d=Wn();ge.flags|=e,d.memoizedState=Ir(1|i,{destroy:void 0},s,l===void 0?null:l)}function gc(e,i,s,l){var d=mn();l=l===void 0?null:l;var m=d.memoizedState.inst;Ze!==null&&l!==null&&Tf(l,Ze.memoizedState.deps)?d.memoizedState=Ir(i,m,s,l):(ge.flags|=e,d.memoizedState=Ir(1|i,m,s,l))}function h0(e,i){mc(8390656,8,e,i)}function zf(e,i){gc(2048,8,e,i)}function tS(e){ge.flags|=4;var i=ge.updateQueue;if(i===null)i=hc(),ge.updateQueue=i,i.events=[e];else{var s=i.events;s===null?i.events=[e]:s.push(e)}}function d0(e){var i=mn().memoizedState;return tS({ref:i,nextImpl:e}),function(){if((He&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function p0(e,i){return gc(4,2,e,i)}function m0(e,i){return gc(4,4,e,i)}function g0(e,i){if(typeof i=="function"){e=e();var s=i(e);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function v0(e,i,s){s=s!=null?s.concat([e]):null,gc(4,4,g0.bind(null,i,e),s)}function Pf(){}function _0(e,i){var s=mn();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&Tf(i,l[1])?l[0]:(s.memoizedState=[e,i],e)}function x0(e,i){var s=mn();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&Tf(i,l[1]))return l[0];if(l=e(),Js){Gt(!0);try{e()}finally{Gt(!1)}}return s.memoizedState=[l,i],l}function Bf(e,i,s){return s===void 0||(Aa&1073741824)!==0&&(Te&261930)===0?e.memoizedState=i:(e.memoizedState=s,e=yg(),ge.lanes|=e,gs|=e,s)}function y0(e,i,s,l){return hi(s,i)?s:Pr.current!==null?(e=Bf(e,s,l),hi(e,i)||(_n=!0),e):(Aa&42)===0||(Aa&1073741824)!==0&&(Te&261930)===0?(_n=!0,e.memoizedState=s):(e=yg(),ge.lanes|=e,gs|=e,i)}function S0(e,i,s,l,d){var m=G.p;G.p=m!==0&&8>m?m:8;var E=z.T,D={};z.T=D,Hf(e,!1,i,s);try{var k=d(),st=z.S;if(st!==null&&st(D,k),k!==null&&typeof k=="object"&&typeof k.then=="function"){var xt=Zy(k,l);Zo(e,i,xt,_i(e))}else Zo(e,i,l,_i(e))}catch(Mt){Zo(e,i,{then:function(){},status:"rejected",reason:Mt},_i())}finally{G.p=m,E!==null&&D.types!==null&&(E.types=D.types),z.T=E}}function eS(){}function Ff(e,i,s,l){if(e.tag!==5)throw Error(a(476));var d=M0(e).queue;S0(e,d,i,Q,s===null?eS:function(){return E0(e),s(l)})}function M0(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:Q,baseState:Q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:Q},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:s},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function E0(e){var i=M0(e);i.next===null&&(i=e.alternate.memoizedState),Zo(e,i.next.queue,{},_i())}function If(){return zn(hl)}function b0(){return mn().memoizedState}function T0(){return mn().memoizedState}function nS(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var s=_i();e=us(s);var l=fs(i,e,s);l!==null&&(ni(l,i,s),qo(l,i,s)),i={cache:pf()},e.payload=i;return}i=i.return}}function iS(e,i,s){var l=_i();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},vc(e)?w0(i,s):(s=nf(e,i,s,l),s!==null&&(ni(s,e,l),R0(s,i,l)))}function A0(e,i,s){var l=_i();Zo(e,i,s,l)}function Zo(e,i,s,l){var d={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(vc(e))w0(i,d);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var E=i.lastRenderedState,D=m(E,s);if(d.hasEagerState=!0,d.eagerState=D,hi(D,E))return Ql(e,i,d,0),$e===null&&Kl(),!1}catch{}if(s=nf(e,i,d,l),s!==null)return ni(s,e,l),R0(s,i,l),!0}return!1}function Hf(e,i,s,l){if(l={lane:2,revertLane:_h(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},vc(e)){if(i)throw Error(a(479))}else i=nf(e,s,l,2),i!==null&&ni(i,e,2)}function vc(e){var i=e.alternate;return e===ge||i!==null&&i===ge}function w0(e,i){Br=uc=!0;var s=e.pending;s===null?i.next=i:(i.next=s.next,s.next=i),e.pending=i}function R0(e,i,s){if((s&4194048)!==0){var l=i.lanes;l&=e.pendingLanes,s|=l,i.lanes=s,Le(e,s)}}var Ko={readContext:zn,use:dc,useCallback:un,useContext:un,useEffect:un,useImperativeHandle:un,useLayoutEffect:un,useInsertionEffect:un,useMemo:un,useReducer:un,useRef:un,useState:un,useDebugValue:un,useDeferredValue:un,useTransition:un,useSyncExternalStore:un,useId:un,useHostTransitionStatus:un,useFormState:un,useActionState:un,useOptimistic:un,useMemoCache:un,useCacheRefresh:un};Ko.useEffectEvent=un;var C0={readContext:zn,use:dc,useCallback:function(e,i){return Wn().memoizedState=[e,i===void 0?null:i],e},useContext:zn,useEffect:h0,useImperativeHandle:function(e,i,s){s=s!=null?s.concat([e]):null,mc(4194308,4,g0.bind(null,i,e),s)},useLayoutEffect:function(e,i){return mc(4194308,4,e,i)},useInsertionEffect:function(e,i){mc(4,2,e,i)},useMemo:function(e,i){var s=Wn();i=i===void 0?null:i;var l=e();if(Js){Gt(!0);try{e()}finally{Gt(!1)}}return s.memoizedState=[l,i],l},useReducer:function(e,i,s){var l=Wn();if(s!==void 0){var d=s(i);if(Js){Gt(!0);try{s(i)}finally{Gt(!1)}}}else d=i;return l.memoizedState=l.baseState=d,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:d},l.queue=e,e=e.dispatch=iS.bind(null,ge,e),[l.memoizedState,e]},useRef:function(e){var i=Wn();return e={current:e},i.memoizedState=e},useState:function(e){e=Lf(e);var i=e.queue,s=A0.bind(null,ge,i);return i.dispatch=s,[e.memoizedState,s]},useDebugValue:Pf,useDeferredValue:function(e,i){var s=Wn();return Bf(s,e,i)},useTransition:function(){var e=Lf(!1);return e=S0.bind(null,ge,e.queue,!0,!1),Wn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,s){var l=ge,d=Wn();if(Re){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),$e===null)throw Error(a(349));(Te&127)!==0||Km(l,i,s)}d.memoizedState=s;var m={value:s,getSnapshot:i};return d.queue=m,h0(Jm.bind(null,l,m,e),[e]),l.flags|=2048,Ir(9,{destroy:void 0},Qm.bind(null,l,m,s,i),null),s},useId:function(){var e=Wn(),i=$e.identifierPrefix;if(Re){var s=ta,l=$i;s=(l&~(1<<32-Ft(l)-1)).toString(32)+s,i="_"+i+"R_"+s,s=fc++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=Ky++,i="_"+i+"r_"+s.toString(32)+"_";return e.memoizedState=i},useHostTransitionStatus:If,useFormState:o0,useActionState:o0,useOptimistic:function(e){var i=Wn();i.memoizedState=i.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=Hf.bind(null,ge,!0,s),s.dispatch=i,[e,i]},useMemoCache:Df,useCacheRefresh:function(){return Wn().memoizedState=nS.bind(null,ge)},useEffectEvent:function(e){var i=Wn(),s={impl:e};return i.memoizedState=s,function(){if((He&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}},Gf={readContext:zn,use:dc,useCallback:_0,useContext:zn,useEffect:zf,useImperativeHandle:v0,useInsertionEffect:p0,useLayoutEffect:m0,useMemo:x0,useReducer:pc,useRef:f0,useState:function(){return pc(wa)},useDebugValue:Pf,useDeferredValue:function(e,i){var s=mn();return y0(s,Ze.memoizedState,e,i)},useTransition:function(){var e=pc(wa)[0],i=mn().memoizedState;return[typeof e=="boolean"?e:jo(e),i]},useSyncExternalStore:Zm,useId:b0,useHostTransitionStatus:If,useFormState:l0,useActionState:l0,useOptimistic:function(e,i){var s=mn();return e0(s,Ze,e,i)},useMemoCache:Df,useCacheRefresh:T0};Gf.useEffectEvent=d0;var D0={readContext:zn,use:dc,useCallback:_0,useContext:zn,useEffect:zf,useImperativeHandle:v0,useInsertionEffect:p0,useLayoutEffect:m0,useMemo:x0,useReducer:Uf,useRef:f0,useState:function(){return Uf(wa)},useDebugValue:Pf,useDeferredValue:function(e,i){var s=mn();return Ze===null?Bf(s,e,i):y0(s,Ze.memoizedState,e,i)},useTransition:function(){var e=Uf(wa)[0],i=mn().memoizedState;return[typeof e=="boolean"?e:jo(e),i]},useSyncExternalStore:Zm,useId:b0,useHostTransitionStatus:If,useFormState:u0,useActionState:u0,useOptimistic:function(e,i){var s=mn();return Ze!==null?e0(s,Ze,e,i):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:Df,useCacheRefresh:T0};D0.useEffectEvent=d0;function Vf(e,i,s,l){i=e.memoizedState,s=s(l,i),s=s==null?i:_({},i,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var kf={enqueueSetState:function(e,i,s){e=e._reactInternals;var l=_i(),d=us(l);d.payload=i,s!=null&&(d.callback=s),i=fs(e,d,l),i!==null&&(ni(i,e,l),qo(i,e,l))},enqueueReplaceState:function(e,i,s){e=e._reactInternals;var l=_i(),d=us(l);d.tag=1,d.payload=i,s!=null&&(d.callback=s),i=fs(e,d,l),i!==null&&(ni(i,e,l),qo(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var s=_i(),l=us(s);l.tag=2,i!=null&&(l.callback=i),i=fs(e,l,s),i!==null&&(ni(i,e,s),qo(i,e,s))}};function N0(e,i,s,l,d,m,E){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,m,E):i.prototype&&i.prototype.isPureReactComponent?!Po(s,l)||!Po(d,m):!0}function U0(e,i,s,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==e&&kf.enqueueReplaceState(i,i.state,null)}function $s(e,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(e=e.defaultProps){s===i&&(s=_({},s));for(var d in e)s[d]===void 0&&(s[d]=e[d])}return s}function L0(e){Zl(e)}function O0(e){console.error(e)}function z0(e){Zl(e)}function _c(e,i){try{var s=e.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function P0(e,i,s){try{var l=e.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function qf(e,i,s){return s=us(s),s.tag=3,s.payload={element:null},s.callback=function(){_c(e,i)},s}function B0(e){return e=us(e),e.tag=3,e}function F0(e,i,s,l){var d=s.type.getDerivedStateFromError;if(typeof d=="function"){var m=l.value;e.payload=function(){return d(m)},e.callback=function(){P0(i,s,l)}}var E=s.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(e.callback=function(){P0(i,s,l),typeof d!="function"&&(vs===null?vs=new Set([this]):vs.add(this));var D=l.stack;this.componentDidCatch(l.value,{componentStack:D!==null?D:""})})}function aS(e,i,s,l,d){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&Nr(i,s,d,!0),s=pi.current,s!==null){switch(s.tag){case 31:case 13:return Ci===null?Dc():s.alternate===null&&fn===0&&(fn=3),s.flags&=-257,s.flags|=65536,s.lanes=d,l===sc?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),mh(e,l,d)),!1;case 22:return s.flags|=65536,l===sc?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),mh(e,l,d)),!1}throw Error(a(435,s.tag))}return mh(e,l,d),Dc(),!1}if(Re)return i=pi.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=d,l!==cf&&(e=Error(a(422),{cause:l}),Io(Ti(e,s)))):(l!==cf&&(i=Error(a(423),{cause:l}),Io(Ti(i,s))),e=e.current.alternate,e.flags|=65536,d&=-d,e.lanes|=d,l=Ti(l,s),d=qf(e.stateNode,l,d),yf(e,d),fn!==4&&(fn=2)),!1;var m=Error(a(520),{cause:l});if(m=Ti(m,s),al===null?al=[m]:al.push(m),fn!==4&&(fn=2),i===null)return!0;l=Ti(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,e=d&-d,s.lanes|=e,e=qf(s.stateNode,l,e),yf(s,e),!1;case 1:if(i=s.type,m=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(vs===null||!vs.has(m))))return s.flags|=65536,d&=-d,s.lanes|=d,d=B0(d),F0(d,e,s,l),yf(s,d),!1}s=s.return}while(s!==null);return!1}var Xf=Error(a(461)),_n=!1;function Pn(e,i,s,l){i.child=e===null?Vm(i,null,s,l):Qs(i,e.child,s,l)}function I0(e,i,s,l,d){s=s.render;var m=i.ref;if("ref"in l){var E={};for(var D in l)D!=="ref"&&(E[D]=l[D])}else E=l;return Ys(i),l=Af(e,i,s,E,m,d),D=wf(),e!==null&&!_n?(Rf(e,i,d),Ra(e,i,d)):(Re&&D&&of(i),i.flags|=1,Pn(e,i,l,d),i.child)}function H0(e,i,s,l,d){if(e===null){var m=s.type;return typeof m=="function"&&!af(m)&&m.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=m,G0(e,i,m,l,d)):(e=$l(s.type,null,l,i,i.mode,d),e.ref=i.ref,e.return=i,i.child=e)}if(m=e.child,!$f(e,d)){var E=m.memoizedProps;if(s=s.compare,s=s!==null?s:Po,s(E,l)&&e.ref===i.ref)return Ra(e,i,d)}return i.flags|=1,e=Ma(m,l),e.ref=i.ref,e.return=i,i.child=e}function G0(e,i,s,l,d){if(e!==null){var m=e.memoizedProps;if(Po(m,l)&&e.ref===i.ref)if(_n=!1,i.pendingProps=l=m,$f(e,d))(e.flags&131072)!==0&&(_n=!0);else return i.lanes=e.lanes,Ra(e,i,d)}return Wf(e,i,s,l,d)}function V0(e,i,s,l){var d=l.children,m=e!==null?e.memoizedState:null;if(e===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(m=m!==null?m.baseLanes|s:s,e!==null){for(l=i.child=e.child,d=0;l!==null;)d=d|l.lanes|l.childLanes,l=l.sibling;l=d&~m}else l=0,i.child=null;return k0(e,i,m,s,l)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&ic(i,m!==null?m.cachePool:null),m!==null?Xm(i,m):Mf(),Wm(i);else return l=i.lanes=536870912,k0(e,i,m!==null?m.baseLanes|s:s,s,l)}else m!==null?(ic(i,m.cachePool),Xm(i,m),ds(),i.memoizedState=null):(e!==null&&ic(i,null),Mf(),ds());return Pn(e,i,d,s),i.child}function Qo(e,i){return e!==null&&e.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function k0(e,i,s,l,d){var m=gf();return m=m===null?null:{parent:gn._currentValue,pool:m},i.memoizedState={baseLanes:s,cachePool:m},e!==null&&ic(i,null),Mf(),Wm(i),e!==null&&Nr(e,i,l,!0),i.childLanes=d,null}function xc(e,i){return i=Sc({mode:i.mode,children:i.children},e.mode),i.ref=e.ref,e.child=i,i.return=e,i}function q0(e,i,s){return Qs(i,e.child,null,s),e=xc(i,i.pendingProps),e.flags|=2,mi(i),i.memoizedState=null,e}function sS(e,i,s){var l=i.pendingProps,d=(i.flags&128)!==0;if(i.flags&=-129,e===null){if(Re){if(l.mode==="hidden")return e=xc(i,l),i.lanes=536870912,Qo(null,e);if(bf(i),(e=nn)?(e=nv(e,Ri),e=e!==null&&e.data==="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:ss!==null?{id:$i,overflow:ta}:null,retryLane:536870912,hydrationErrors:null},s=wm(e),s.return=i,i.child=s,On=i,nn=null)):e=null,e===null)throw os(i);return i.lanes=536870912,null}return xc(i,l)}var m=e.memoizedState;if(m!==null){var E=m.dehydrated;if(bf(i),d)if(i.flags&256)i.flags&=-257,i=q0(e,i,s);else if(i.memoizedState!==null)i.child=e.child,i.flags|=128,i=null;else throw Error(a(558));else if(_n||Nr(e,i,s,!1),d=(s&e.childLanes)!==0,_n||d){if(l=$e,l!==null&&(E=Zn(l,s),E!==0&&E!==m.retryLane))throw m.retryLane=E,ks(e,E),ni(l,e,E),Xf;Dc(),i=q0(e,i,s)}else e=m.treeContext,nn=Di(E.nextSibling),On=i,Re=!0,rs=null,Ri=!1,e!==null&&Dm(i,e),i=xc(i,l),i.flags|=4096;return i}return e=Ma(e.child,{mode:l.mode,children:l.children}),e.ref=i.ref,i.child=e,e.return=i,e}function yc(e,i){var s=i.ref;if(s===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(e===null||e.ref!==s)&&(i.flags|=4194816)}}function Wf(e,i,s,l,d){return Ys(i),s=Af(e,i,s,l,void 0,d),l=wf(),e!==null&&!_n?(Rf(e,i,d),Ra(e,i,d)):(Re&&l&&of(i),i.flags|=1,Pn(e,i,s,d),i.child)}function X0(e,i,s,l,d,m){return Ys(i),i.updateQueue=null,s=jm(i,l,s,d),Ym(e),l=wf(),e!==null&&!_n?(Rf(e,i,m),Ra(e,i,m)):(Re&&l&&of(i),i.flags|=1,Pn(e,i,s,m),i.child)}function W0(e,i,s,l,d){if(Ys(i),i.stateNode===null){var m=wr,E=s.contextType;typeof E=="object"&&E!==null&&(m=zn(E)),m=new s(l,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=kf,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=l,m.state=i.memoizedState,m.refs={},_f(i),E=s.contextType,m.context=typeof E=="object"&&E!==null?zn(E):wr,m.state=i.memoizedState,E=s.getDerivedStateFromProps,typeof E=="function"&&(Vf(i,s,E,l),m.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(E=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),E!==m.state&&kf.enqueueReplaceState(m,m.state,null),Wo(i,l,m,d),Xo(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){m=i.stateNode;var D=i.memoizedProps,k=$s(s,D);m.props=k;var st=m.context,xt=s.contextType;E=wr,typeof xt=="object"&&xt!==null&&(E=zn(xt));var Mt=s.getDerivedStateFromProps;xt=typeof Mt=="function"||typeof m.getSnapshotBeforeUpdate=="function",D=i.pendingProps!==D,xt||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(D||st!==E)&&U0(i,m,l,E),cs=!1;var ot=i.memoizedState;m.state=ot,Wo(i,l,m,d),Xo(),st=i.memoizedState,D||ot!==st||cs?(typeof Mt=="function"&&(Vf(i,s,Mt,l),st=i.memoizedState),(k=cs||N0(i,s,k,l,ot,st,E))?(xt||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=st),m.props=l,m.state=st,m.context=E,l=k):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{m=i.stateNode,xf(e,i),E=i.memoizedProps,xt=$s(s,E),m.props=xt,Mt=i.pendingProps,ot=m.context,st=s.contextType,k=wr,typeof st=="object"&&st!==null&&(k=zn(st)),D=s.getDerivedStateFromProps,(st=typeof D=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(E!==Mt||ot!==k)&&U0(i,m,l,k),cs=!1,ot=i.memoizedState,m.state=ot,Wo(i,l,m,d),Xo();var dt=i.memoizedState;E!==Mt||ot!==dt||cs||e!==null&&e.dependencies!==null&&ec(e.dependencies)?(typeof D=="function"&&(Vf(i,s,D,l),dt=i.memoizedState),(xt=cs||N0(i,s,xt,l,ot,dt,k)||e!==null&&e.dependencies!==null&&ec(e.dependencies))?(st||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,dt,k),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,dt,k)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||E===e.memoizedProps&&ot===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&ot===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=dt),m.props=l,m.state=dt,m.context=k,l=xt):(typeof m.componentDidUpdate!="function"||E===e.memoizedProps&&ot===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&ot===e.memoizedState||(i.flags|=1024),l=!1)}return m=l,yc(e,i),l=(i.flags&128)!==0,m||l?(m=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,e!==null&&l?(i.child=Qs(i,e.child,null,d),i.child=Qs(i,null,s,d)):Pn(e,i,s,d),i.memoizedState=m.state,e=i.child):e=Ra(e,i,d),e}function Y0(e,i,s,l){return Xs(),i.flags|=256,Pn(e,i,s,l),i.child}var Yf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function jf(e){return{baseLanes:e,cachePool:Pm()}}function Zf(e,i,s){return e=e!==null?e.childLanes&~s:0,i&&(e|=vi),e}function j0(e,i,s){var l=i.pendingProps,d=!1,m=(i.flags&128)!==0,E;if((E=m)||(E=e!==null&&e.memoizedState===null?!1:(pn.current&2)!==0),E&&(d=!0,i.flags&=-129),E=(i.flags&32)!==0,i.flags&=-33,e===null){if(Re){if(d?hs(i):ds(),(e=nn)?(e=nv(e,Ri),e=e!==null&&e.data!=="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:ss!==null?{id:$i,overflow:ta}:null,retryLane:536870912,hydrationErrors:null},s=wm(e),s.return=i,i.child=s,On=i,nn=null)):e=null,e===null)throw os(i);return Nh(e)?i.lanes=32:i.lanes=536870912,null}var D=l.children;return l=l.fallback,d?(ds(),d=i.mode,D=Sc({mode:"hidden",children:D},d),l=qs(l,d,s,null),D.return=i,l.return=i,D.sibling=l,i.child=D,l=i.child,l.memoizedState=jf(s),l.childLanes=Zf(e,E,s),i.memoizedState=Yf,Qo(null,l)):(hs(i),Kf(i,D))}var k=e.memoizedState;if(k!==null&&(D=k.dehydrated,D!==null)){if(m)i.flags&256?(hs(i),i.flags&=-257,i=Qf(e,i,s)):i.memoizedState!==null?(ds(),i.child=e.child,i.flags|=128,i=null):(ds(),D=l.fallback,d=i.mode,l=Sc({mode:"visible",children:l.children},d),D=qs(D,d,s,null),D.flags|=2,l.return=i,D.return=i,l.sibling=D,i.child=l,Qs(i,e.child,null,s),l=i.child,l.memoizedState=jf(s),l.childLanes=Zf(e,E,s),i.memoizedState=Yf,i=Qo(null,l));else if(hs(i),Nh(D)){if(E=D.nextSibling&&D.nextSibling.dataset,E)var st=E.dgst;E=st,l=Error(a(419)),l.stack="",l.digest=E,Io({value:l,source:null,stack:null}),i=Qf(e,i,s)}else if(_n||Nr(e,i,s,!1),E=(s&e.childLanes)!==0,_n||E){if(E=$e,E!==null&&(l=Zn(E,s),l!==0&&l!==k.retryLane))throw k.retryLane=l,ks(e,l),ni(E,e,l),Xf;Dh(D)||Dc(),i=Qf(e,i,s)}else Dh(D)?(i.flags|=192,i.child=e.child,i=null):(e=k.treeContext,nn=Di(D.nextSibling),On=i,Re=!0,rs=null,Ri=!1,e!==null&&Dm(i,e),i=Kf(i,l.children),i.flags|=4096);return i}return d?(ds(),D=l.fallback,d=i.mode,k=e.child,st=k.sibling,l=Ma(k,{mode:"hidden",children:l.children}),l.subtreeFlags=k.subtreeFlags&65011712,st!==null?D=Ma(st,D):(D=qs(D,d,s,null),D.flags|=2),D.return=i,l.return=i,l.sibling=D,i.child=l,Qo(null,l),l=i.child,D=e.child.memoizedState,D===null?D=jf(s):(d=D.cachePool,d!==null?(k=gn._currentValue,d=d.parent!==k?{parent:k,pool:k}:d):d=Pm(),D={baseLanes:D.baseLanes|s,cachePool:d}),l.memoizedState=D,l.childLanes=Zf(e,E,s),i.memoizedState=Yf,Qo(e.child,l)):(hs(i),s=e.child,e=s.sibling,s=Ma(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,e!==null&&(E=i.deletions,E===null?(i.deletions=[e],i.flags|=16):E.push(e)),i.child=s,i.memoizedState=null,s)}function Kf(e,i){return i=Sc({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function Sc(e,i){return e=di(22,e,null,i),e.lanes=0,e}function Qf(e,i,s){return Qs(i,e.child,null,s),e=Kf(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function Z0(e,i,s){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),hf(e.return,i,s)}function Jf(e,i,s,l,d,m){var E=e.memoizedState;E===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:d,treeForkCount:m}:(E.isBackwards=i,E.rendering=null,E.renderingStartTime=0,E.last=l,E.tail=s,E.tailMode=d,E.treeForkCount=m)}function K0(e,i,s){var l=i.pendingProps,d=l.revealOrder,m=l.tail;l=l.children;var E=pn.current,D=(E&2)!==0;if(D?(E=E&1|2,i.flags|=128):E&=1,ct(pn,E),Pn(e,i,l,s),l=Re?Fo:0,!D&&e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Z0(e,s,i);else if(e.tag===19)Z0(e,s,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(d){case"forwards":for(s=i.child,d=null;s!==null;)e=s.alternate,e!==null&&cc(e)===null&&(d=s),s=s.sibling;s=d,s===null?(d=i.child,i.child=null):(d=s.sibling,s.sibling=null),Jf(i,!1,d,s,m,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,d=i.child,i.child=null;d!==null;){if(e=d.alternate,e!==null&&cc(e)===null){i.child=d;break}e=d.sibling,d.sibling=s,s=d,d=e}Jf(i,!0,s,null,m,l);break;case"together":Jf(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function Ra(e,i,s){if(e!==null&&(i.dependencies=e.dependencies),gs|=i.lanes,(s&i.childLanes)===0)if(e!==null){if(Nr(e,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,s=Ma(e,e.pendingProps),i.child=s,s.return=i;e.sibling!==null;)e=e.sibling,s=s.sibling=Ma(e,e.pendingProps),s.return=i;s.sibling=null}return i.child}function $f(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&ec(e)))}function rS(e,i,s){switch(i.tag){case 3:Ct(i,i.stateNode.containerInfo),ls(i,gn,e.memoizedState.cache),Xs();break;case 27:case 5:Nt(i);break;case 4:Ct(i,i.stateNode.containerInfo);break;case 10:ls(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,bf(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(hs(i),i.flags|=128,null):(s&i.child.childLanes)!==0?j0(e,i,s):(hs(i),e=Ra(e,i,s),e!==null?e.sibling:null);hs(i);break;case 19:var d=(e.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(Nr(e,i,s,!1),l=(s&i.childLanes)!==0),d){if(l)return K0(e,i,s);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),ct(pn,pn.current),l)break;return null;case 22:return i.lanes=0,V0(e,i,s,i.pendingProps);case 24:ls(i,gn,e.memoizedState.cache)}return Ra(e,i,s)}function Q0(e,i,s){if(e!==null)if(e.memoizedProps!==i.pendingProps)_n=!0;else{if(!$f(e,s)&&(i.flags&128)===0)return _n=!1,rS(e,i,s);_n=(e.flags&131072)!==0}else _n=!1,Re&&(i.flags&1048576)!==0&&Cm(i,Fo,i.index);switch(i.lanes=0,i.tag){case 16:t:{var l=i.pendingProps;if(e=Zs(i.elementType),i.type=e,typeof e=="function")af(e)?(l=$s(e,l),i.tag=1,i=W0(null,i,e,l,s)):(i.tag=0,i=Wf(null,i,e,l,s));else{if(e!=null){var d=e.$$typeof;if(d===C){i.tag=11,i=I0(null,i,e,l,s);break t}else if(d===P){i.tag=14,i=H0(null,i,e,l,s);break t}}throw i=K(e)||e,Error(a(306,i,""))}}return i;case 0:return Wf(e,i,i.type,i.pendingProps,s);case 1:return l=i.type,d=$s(l,i.pendingProps),W0(e,i,l,d,s);case 3:t:{if(Ct(i,i.stateNode.containerInfo),e===null)throw Error(a(387));l=i.pendingProps;var m=i.memoizedState;d=m.element,xf(e,i),Wo(i,l,null,s);var E=i.memoizedState;if(l=E.cache,ls(i,gn,l),l!==m.cache&&df(i,[gn],s,!0),Xo(),l=E.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:E.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=Y0(e,i,l,s);break t}else if(l!==d){d=Ti(Error(a(424)),i),Io(d),i=Y0(e,i,l,s);break t}else for(e=i.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,nn=Di(e.firstChild),On=i,Re=!0,rs=null,Ri=!0,s=Vm(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(Xs(),l===d){i=Ra(e,i,s);break t}Pn(e,i,l,s)}i=i.child}return i;case 26:return yc(e,i),e===null?(s=lv(i.type,null,i.pendingProps,null))?i.memoizedState=s:Re||(s=i.type,e=i.pendingProps,l=Bc(it.current).createElement(s),l[ln]=i,l[Sn]=e,Bn(l,s,e),N(l),i.stateNode=l):i.memoizedState=lv(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return Nt(i),e===null&&Re&&(l=i.stateNode=sv(i.type,i.pendingProps,it.current),On=i,Ri=!0,d=nn,Ss(i.type)?(Uh=d,nn=Di(l.firstChild)):nn=d),Pn(e,i,i.pendingProps.children,s),yc(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Re&&((d=l=nn)&&(l=PS(l,i.type,i.pendingProps,Ri),l!==null?(i.stateNode=l,On=i,nn=Di(l.firstChild),Ri=!1,d=!0):d=!1),d||os(i)),Nt(i),d=i.type,m=i.pendingProps,E=e!==null?e.memoizedProps:null,l=m.children,wh(d,m)?l=null:E!==null&&wh(d,E)&&(i.flags|=32),i.memoizedState!==null&&(d=Af(e,i,Qy,null,null,s),hl._currentValue=d),yc(e,i),Pn(e,i,l,s),i.child;case 6:return e===null&&Re&&((e=s=nn)&&(s=BS(s,i.pendingProps,Ri),s!==null?(i.stateNode=s,On=i,nn=null,e=!0):e=!1),e||os(i)),null;case 13:return j0(e,i,s);case 4:return Ct(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=Qs(i,null,l,s):Pn(e,i,l,s),i.child;case 11:return I0(e,i,i.type,i.pendingProps,s);case 7:return Pn(e,i,i.pendingProps,s),i.child;case 8:return Pn(e,i,i.pendingProps.children,s),i.child;case 12:return Pn(e,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,ls(i,i.type,l.value),Pn(e,i,l.children,s),i.child;case 9:return d=i.type._context,l=i.pendingProps.children,Ys(i),d=zn(d),l=l(d),i.flags|=1,Pn(e,i,l,s),i.child;case 14:return H0(e,i,i.type,i.pendingProps,s);case 15:return G0(e,i,i.type,i.pendingProps,s);case 19:return K0(e,i,s);case 31:return sS(e,i,s);case 22:return V0(e,i,s,i.pendingProps);case 24:return Ys(i),l=zn(gn),e===null?(d=gf(),d===null&&(d=$e,m=pf(),d.pooledCache=m,m.refCount++,m!==null&&(d.pooledCacheLanes|=s),d=m),i.memoizedState={parent:l,cache:d},_f(i),ls(i,gn,d)):((e.lanes&s)!==0&&(xf(e,i),Wo(i,null,null,s),Xo()),d=e.memoizedState,m=i.memoizedState,d.parent!==l?(d={parent:l,cache:l},i.memoizedState=d,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=d),ls(i,gn,l)):(l=m.cache,ls(i,gn,l),l!==d.cache&&df(i,[gn],s,!0))),Pn(e,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function Ca(e){e.flags|=4}function th(e,i,s,l,d){if((i=(e.mode&32)!==0)&&(i=!1),i){if(e.flags|=16777216,(d&335544128)===d)if(e.stateNode.complete)e.flags|=8192;else if(bg())e.flags|=8192;else throw Ks=sc,vf}else e.flags&=-16777217}function J0(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!dv(i))if(bg())e.flags|=8192;else throw Ks=sc,vf}function Mc(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?se():536870912,e.lanes|=i,kr|=i)}function Jo(e,i){if(!Re)switch(e.tailMode){case"hidden":i=e.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function an(e){var i=e.alternate!==null&&e.alternate.child===e.child,s=0,l=0;if(i)for(var d=e.child;d!==null;)s|=d.lanes|d.childLanes,l|=d.subtreeFlags&65011712,l|=d.flags&65011712,d.return=e,d=d.sibling;else for(d=e.child;d!==null;)s|=d.lanes|d.childLanes,l|=d.subtreeFlags,l|=d.flags,d.return=e,d=d.sibling;return e.subtreeFlags|=l,e.childLanes=s,i}function oS(e,i,s){var l=i.pendingProps;switch(lf(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return an(i),null;case 1:return an(i),null;case 3:return s=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Ta(gn),Pt(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(Dr(i)?Ca(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,uf())),an(i),null;case 26:var d=i.type,m=i.memoizedState;return e===null?(Ca(i),m!==null?(an(i),J0(i,m)):(an(i),th(i,d,null,l,s))):m?m!==e.memoizedState?(Ca(i),an(i),J0(i,m)):(an(i),i.flags&=-16777217):(e=e.memoizedProps,e!==l&&Ca(i),an(i),th(i,d,e,l,s)),null;case 27:if(ye(i),s=it.current,d=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Ca(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return an(i),null}e=Tt.current,Dr(i)?Nm(i):(e=sv(d,l,s),i.stateNode=e,Ca(i))}return an(i),null;case 5:if(ye(i),d=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Ca(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return an(i),null}if(m=Tt.current,Dr(i))Nm(i);else{var E=Bc(it.current);switch(m){case 1:m=E.createElementNS("http://www.w3.org/2000/svg",d);break;case 2:m=E.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;default:switch(d){case"svg":m=E.createElementNS("http://www.w3.org/2000/svg",d);break;case"math":m=E.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;case"script":m=E.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof l.is=="string"?E.createElement("select",{is:l.is}):E.createElement("select"),l.multiple?m.multiple=!0:l.size&&(m.size=l.size);break;default:m=typeof l.is=="string"?E.createElement(d,{is:l.is}):E.createElement(d)}}m[ln]=i,m[Sn]=l;t:for(E=i.child;E!==null;){if(E.tag===5||E.tag===6)m.appendChild(E.stateNode);else if(E.tag!==4&&E.tag!==27&&E.child!==null){E.child.return=E,E=E.child;continue}if(E===i)break t;for(;E.sibling===null;){if(E.return===null||E.return===i)break t;E=E.return}E.sibling.return=E.return,E=E.sibling}i.stateNode=m;t:switch(Bn(m,d,l),d){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&Ca(i)}}return an(i),th(i,i.type,e===null?null:e.memoizedProps,i.pendingProps,s),null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&Ca(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(e=it.current,Dr(i)){if(e=i.stateNode,s=i.memoizedProps,l=null,d=On,d!==null)switch(d.tag){case 27:case 5:l=d.memoizedProps}e[ln]=i,e=!!(e.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||jg(e.nodeValue,s)),e||os(i,!0)}else e=Bc(e).createTextNode(l),e[ln]=i,i.stateNode=e}return an(i),null;case 31:if(s=i.memoizedState,e===null||e.memoizedState!==null){if(l=Dr(i),s!==null){if(e===null){if(!l)throw Error(a(318));if(e=i.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[ln]=i}else Xs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;an(i),e=!1}else s=uf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),e=!0;if(!e)return i.flags&256?(mi(i),i):(mi(i),null);if((i.flags&128)!==0)throw Error(a(558))}return an(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(d=Dr(i),l!==null&&l.dehydrated!==null){if(e===null){if(!d)throw Error(a(318));if(d=i.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(a(317));d[ln]=i}else Xs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;an(i),d=!1}else d=uf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=d),d=!0;if(!d)return i.flags&256?(mi(i),i):(mi(i),null)}return mi(i),(i.flags&128)!==0?(i.lanes=s,i):(s=l!==null,e=e!==null&&e.memoizedState!==null,s&&(l=i.child,d=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(d=l.alternate.memoizedState.cachePool.pool),m=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==d&&(l.flags|=2048)),s!==e&&s&&(i.child.flags|=8192),Mc(i,i.updateQueue),an(i),null);case 4:return Pt(),e===null&&Mh(i.stateNode.containerInfo),an(i),null;case 10:return Ta(i.type),an(i),null;case 19:if(j(pn),l=i.memoizedState,l===null)return an(i),null;if(d=(i.flags&128)!==0,m=l.rendering,m===null)if(d)Jo(l,!1);else{if(fn!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(m=cc(e),m!==null){for(i.flags|=128,Jo(l,!1),e=m.updateQueue,i.updateQueue=e,Mc(i,e),i.subtreeFlags=0,e=s,s=i.child;s!==null;)Am(s,e),s=s.sibling;return ct(pn,pn.current&1|2),Re&&Ea(i,l.treeForkCount),i.child}e=e.sibling}l.tail!==null&&A()>wc&&(i.flags|=128,d=!0,Jo(l,!1),i.lanes=4194304)}else{if(!d)if(e=cc(m),e!==null){if(i.flags|=128,d=!0,e=e.updateQueue,i.updateQueue=e,Mc(i,e),Jo(l,!0),l.tail===null&&l.tailMode==="hidden"&&!m.alternate&&!Re)return an(i),null}else 2*A()-l.renderingStartTime>wc&&s!==536870912&&(i.flags|=128,d=!0,Jo(l,!1),i.lanes=4194304);l.isBackwards?(m.sibling=i.child,i.child=m):(e=l.last,e!==null?e.sibling=m:i.child=m,l.last=m)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=A(),e.sibling=null,s=pn.current,ct(pn,d?s&1|2:s&1),Re&&Ea(i,l.treeForkCount),e):(an(i),null);case 22:case 23:return mi(i),Ef(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(an(i),i.subtreeFlags&6&&(i.flags|=8192)):an(i),s=i.updateQueue,s!==null&&Mc(i,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),e!==null&&j(js),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),Ta(gn),an(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function lS(e,i){switch(lf(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return Ta(gn),Pt(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return ye(i),null;case 31:if(i.memoizedState!==null){if(mi(i),i.alternate===null)throw Error(a(340));Xs()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 13:if(mi(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));Xs()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return j(pn),null;case 4:return Pt(),null;case 10:return Ta(i.type),null;case 22:case 23:return mi(i),Ef(),e!==null&&j(js),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return Ta(gn),null;case 25:return null;default:return null}}function $0(e,i){switch(lf(i),i.tag){case 3:Ta(gn),Pt();break;case 26:case 27:case 5:ye(i);break;case 4:Pt();break;case 31:i.memoizedState!==null&&mi(i);break;case 13:mi(i);break;case 19:j(pn);break;case 10:Ta(i.type);break;case 22:case 23:mi(i),Ef(),e!==null&&j(js);break;case 24:Ta(gn)}}function $o(e,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var d=l.next;s=d;do{if((s.tag&e)===e){l=void 0;var m=s.create,E=s.inst;l=m(),E.destroy=l}s=s.next}while(s!==d)}}catch(D){We(i,i.return,D)}}function ps(e,i,s){try{var l=i.updateQueue,d=l!==null?l.lastEffect:null;if(d!==null){var m=d.next;l=m;do{if((l.tag&e)===e){var E=l.inst,D=E.destroy;if(D!==void 0){E.destroy=void 0,d=i;var k=s,st=D;try{st()}catch(xt){We(d,k,xt)}}}l=l.next}while(l!==m)}}catch(xt){We(i,i.return,xt)}}function tg(e){var i=e.updateQueue;if(i!==null){var s=e.stateNode;try{qm(i,s)}catch(l){We(e,e.return,l)}}}function eg(e,i,s){s.props=$s(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(l){We(e,i,l)}}function tl(e,i){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof s=="function"?e.refCleanup=s(l):s.current=l}}catch(d){We(e,i,d)}}function ea(e,i){var s=e.ref,l=e.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(d){We(e,i,d)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(d){We(e,i,d)}else s.current=null}function ng(e){var i=e.type,s=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break t;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(d){We(e,e.return,d)}}function eh(e,i,s){try{var l=e.stateNode;DS(l,e.type,s,i),l[Sn]=i}catch(d){We(e,e.return,d)}}function ig(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ss(e.type)||e.tag===4}function nh(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||ig(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ss(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ih(e,i,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(e),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=ya));else if(l!==4&&(l===27&&Ss(e.type)&&(s=e.stateNode,i=null),e=e.child,e!==null))for(ih(e,i,s),e=e.sibling;e!==null;)ih(e,i,s),e=e.sibling}function Ec(e,i,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?s.insertBefore(e,i):s.appendChild(e);else if(l!==4&&(l===27&&Ss(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(Ec(e,i,s),e=e.sibling;e!==null;)Ec(e,i,s),e=e.sibling}function ag(e){var i=e.stateNode,s=e.memoizedProps;try{for(var l=e.type,d=i.attributes;d.length;)i.removeAttributeNode(d[0]);Bn(i,l,s),i[ln]=e,i[Sn]=s}catch(m){We(e,e.return,m)}}var Da=!1,xn=!1,ah=!1,sg=typeof WeakSet=="function"?WeakSet:Set,wn=null;function cS(e,i){if(e=e.containerInfo,Th=qc,e=vm(e),Ku(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var d=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break t}var E=0,D=-1,k=-1,st=0,xt=0,Mt=e,ot=null;e:for(;;){for(var dt;Mt!==s||d!==0&&Mt.nodeType!==3||(D=E+d),Mt!==m||l!==0&&Mt.nodeType!==3||(k=E+l),Mt.nodeType===3&&(E+=Mt.nodeValue.length),(dt=Mt.firstChild)!==null;)ot=Mt,Mt=dt;for(;;){if(Mt===e)break e;if(ot===s&&++st===d&&(D=E),ot===m&&++xt===l&&(k=E),(dt=Mt.nextSibling)!==null)break;Mt=ot,ot=Mt.parentNode}Mt=dt}s=D===-1||k===-1?null:{start:D,end:k}}else s=null}s=s||{start:0,end:0}}else s=null;for(Ah={focusedElem:e,selectionRange:s},qc=!1,wn=i;wn!==null;)if(i=wn,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,wn=e;else for(;wn!==null;){switch(i=wn,m=i.alternate,e=i.flags,i.tag){case 0:if((e&4)!==0&&(e=i.updateQueue,e=e!==null?e.events:null,e!==null))for(s=0;s<e.length;s++)d=e[s],d.ref.impl=d.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,s=i,d=m.memoizedProps,m=m.memoizedState,l=s.stateNode;try{var jt=$s(s.type,d);e=l.getSnapshotBeforeUpdate(jt,m),l.__reactInternalSnapshotBeforeUpdate=e}catch(oe){We(s,s.return,oe)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,s=e.nodeType,s===9)Ch(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ch(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,wn=e;break}wn=i.return}}function rg(e,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Ua(e,s),l&4&&$o(5,s);break;case 1:if(Ua(e,s),l&4)if(e=s.stateNode,i===null)try{e.componentDidMount()}catch(E){We(s,s.return,E)}else{var d=$s(s.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(d,i,e.__reactInternalSnapshotBeforeUpdate)}catch(E){We(s,s.return,E)}}l&64&&tg(s),l&512&&tl(s,s.return);break;case 3:if(Ua(e,s),l&64&&(e=s.updateQueue,e!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{qm(e,i)}catch(E){We(s,s.return,E)}}break;case 27:i===null&&l&4&&ag(s);case 26:case 5:Ua(e,s),i===null&&l&4&&ng(s),l&512&&tl(s,s.return);break;case 12:Ua(e,s);break;case 31:Ua(e,s),l&4&&cg(e,s);break;case 13:Ua(e,s),l&4&&ug(e,s),l&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=_S.bind(null,s),FS(e,s))));break;case 22:if(l=s.memoizedState!==null||Da,!l){i=i!==null&&i.memoizedState!==null||xn,d=Da;var m=xn;Da=l,(xn=i)&&!m?La(e,s,(s.subtreeFlags&8772)!==0):Ua(e,s),Da=d,xn=m}break;case 30:break;default:Ua(e,s)}}function og(e){var i=e.alternate;i!==null&&(e.alternate=null,og(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&Is(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var on=null,Jn=!1;function Na(e,i,s){for(s=s.child;s!==null;)lg(e,i,s),s=s.sibling}function lg(e,i,s){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(At,s)}catch{}switch(s.tag){case 26:xn||ea(s,i),Na(e,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:xn||ea(s,i);var l=on,d=Jn;Ss(s.type)&&(on=s.stateNode,Jn=!1),Na(e,i,s),cl(s.stateNode),on=l,Jn=d;break;case 5:xn||ea(s,i);case 6:if(l=on,d=Jn,on=null,Na(e,i,s),on=l,Jn=d,on!==null)if(Jn)try{(on.nodeType===9?on.body:on.nodeName==="HTML"?on.ownerDocument.body:on).removeChild(s.stateNode)}catch(m){We(s,i,m)}else try{on.removeChild(s.stateNode)}catch(m){We(s,i,m)}break;case 18:on!==null&&(Jn?(e=on,tv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),Qr(e)):tv(on,s.stateNode));break;case 4:l=on,d=Jn,on=s.stateNode.containerInfo,Jn=!0,Na(e,i,s),on=l,Jn=d;break;case 0:case 11:case 14:case 15:ps(2,s,i),xn||ps(4,s,i),Na(e,i,s);break;case 1:xn||(ea(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&eg(s,i,l)),Na(e,i,s);break;case 21:Na(e,i,s);break;case 22:xn=(l=xn)||s.memoizedState!==null,Na(e,i,s),xn=l;break;default:Na(e,i,s)}}function cg(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Qr(e)}catch(s){We(i,i.return,s)}}}function ug(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Qr(e)}catch(s){We(i,i.return,s)}}function uS(e){switch(e.tag){case 31:case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new sg),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new sg),i;default:throw Error(a(435,e.tag))}}function bc(e,i){var s=uS(e);i.forEach(function(l){if(!s.has(l)){s.add(l);var d=xS.bind(null,e,l);l.then(d,d)}})}function $n(e,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var d=s[l],m=e,E=i,D=E;t:for(;D!==null;){switch(D.tag){case 27:if(Ss(D.type)){on=D.stateNode,Jn=!1;break t}break;case 5:on=D.stateNode,Jn=!1;break t;case 3:case 4:on=D.stateNode.containerInfo,Jn=!0;break t}D=D.return}if(on===null)throw Error(a(160));lg(m,E,d),on=null,Jn=!1,m=d.alternate,m!==null&&(m.return=null),d.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)fg(i,e),i=i.sibling}var Bi=null;function fg(e,i){var s=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:$n(i,e),ti(e),l&4&&(ps(3,e,e.return),$o(3,e),ps(5,e,e.return));break;case 1:$n(i,e),ti(e),l&512&&(xn||s===null||ea(s,s.return)),l&64&&Da&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var d=Bi;if($n(i,e),ti(e),l&512&&(xn||s===null||ea(s,s.return)),l&4){var m=s!==null?s.memoizedState:null;if(l=e.memoizedState,s===null)if(l===null)if(e.stateNode===null){t:{l=e.type,s=e.memoizedProps,d=d.ownerDocument||d;e:switch(l){case"title":m=d.getElementsByTagName("title")[0],(!m||m[Ki]||m[ln]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=d.createElement(l),d.head.insertBefore(m,d.querySelector("head > title"))),Bn(m,l,s),m[ln]=e,N(m),l=m;break t;case"link":var E=fv("link","href",d).get(l+(s.href||""));if(E){for(var D=0;D<E.length;D++)if(m=E[D],m.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&m.getAttribute("rel")===(s.rel==null?null:s.rel)&&m.getAttribute("title")===(s.title==null?null:s.title)&&m.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){E.splice(D,1);break e}}m=d.createElement(l),Bn(m,l,s),d.head.appendChild(m);break;case"meta":if(E=fv("meta","content",d).get(l+(s.content||""))){for(D=0;D<E.length;D++)if(m=E[D],m.getAttribute("content")===(s.content==null?null:""+s.content)&&m.getAttribute("name")===(s.name==null?null:s.name)&&m.getAttribute("property")===(s.property==null?null:s.property)&&m.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&m.getAttribute("charset")===(s.charSet==null?null:s.charSet)){E.splice(D,1);break e}}m=d.createElement(l),Bn(m,l,s),d.head.appendChild(m);break;default:throw Error(a(468,l))}m[ln]=e,N(m),l=m}e.stateNode=l}else hv(d,e.type,e.stateNode);else e.stateNode=uv(d,l,e.memoizedProps);else m!==l?(m===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):m.count--,l===null?hv(d,e.type,e.stateNode):uv(d,l,e.memoizedProps)):l===null&&e.stateNode!==null&&eh(e,e.memoizedProps,s.memoizedProps)}break;case 27:$n(i,e),ti(e),l&512&&(xn||s===null||ea(s,s.return)),s!==null&&l&4&&eh(e,e.memoizedProps,s.memoizedProps);break;case 5:if($n(i,e),ti(e),l&512&&(xn||s===null||ea(s,s.return)),e.flags&32){d=e.stateNode;try{Mn(d,"")}catch(jt){We(e,e.return,jt)}}l&4&&e.stateNode!=null&&(d=e.memoizedProps,eh(e,d,s!==null?s.memoizedProps:d)),l&1024&&(ah=!0);break;case 6:if($n(i,e),ti(e),l&4){if(e.stateNode===null)throw Error(a(162));l=e.memoizedProps,s=e.stateNode;try{s.nodeValue=l}catch(jt){We(e,e.return,jt)}}break;case 3:if(Hc=null,d=Bi,Bi=Fc(i.containerInfo),$n(i,e),Bi=d,ti(e),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Qr(i.containerInfo)}catch(jt){We(e,e.return,jt)}ah&&(ah=!1,hg(e));break;case 4:l=Bi,Bi=Fc(e.stateNode.containerInfo),$n(i,e),ti(e),Bi=l;break;case 12:$n(i,e),ti(e);break;case 31:$n(i,e),ti(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,bc(e,l)));break;case 13:$n(i,e),ti(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Ac=A()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,bc(e,l)));break;case 22:d=e.memoizedState!==null;var k=s!==null&&s.memoizedState!==null,st=Da,xt=xn;if(Da=st||d,xn=xt||k,$n(i,e),xn=xt,Da=st,ti(e),l&8192)t:for(i=e.stateNode,i._visibility=d?i._visibility&-2:i._visibility|1,d&&(s===null||k||Da||xn||tr(e)),s=null,i=e;;){if(i.tag===5||i.tag===26){if(s===null){k=s=i;try{if(m=k.stateNode,d)E=m.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{D=k.stateNode;var Mt=k.memoizedProps.style,ot=Mt!=null&&Mt.hasOwnProperty("display")?Mt.display:null;D.style.display=ot==null||typeof ot=="boolean"?"":(""+ot).trim()}}catch(jt){We(k,k.return,jt)}}}else if(i.tag===6){if(s===null){k=i;try{k.stateNode.nodeValue=d?"":k.memoizedProps}catch(jt){We(k,k.return,jt)}}}else if(i.tag===18){if(s===null){k=i;try{var dt=k.stateNode;d?ev(dt,!0):ev(k.stateNode,!1)}catch(jt){We(k,k.return,jt)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,bc(e,s))));break;case 19:$n(i,e),ti(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,bc(e,l)));break;case 30:break;case 21:break;default:$n(i,e),ti(e)}}function ti(e){var i=e.flags;if(i&2){try{for(var s,l=e.return;l!==null;){if(ig(l)){s=l;break}l=l.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var d=s.stateNode,m=nh(e);Ec(e,m,d);break;case 5:var E=s.stateNode;s.flags&32&&(Mn(E,""),s.flags&=-33);var D=nh(e);Ec(e,D,E);break;case 3:case 4:var k=s.stateNode.containerInfo,st=nh(e);ih(e,st,k);break;default:throw Error(a(161))}}catch(xt){We(e,e.return,xt)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function hg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;hg(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function Ua(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)rg(e,i.alternate,i),i=i.sibling}function tr(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:ps(4,i,i.return),tr(i);break;case 1:ea(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&eg(i,i.return,s),tr(i);break;case 27:cl(i.stateNode);case 26:case 5:ea(i,i.return),tr(i);break;case 22:i.memoizedState===null&&tr(i);break;case 30:tr(i);break;default:tr(i)}e=e.sibling}}function La(e,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,d=e,m=i,E=m.flags;switch(m.tag){case 0:case 11:case 15:La(d,m,s),$o(4,m);break;case 1:if(La(d,m,s),l=m,d=l.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(st){We(l,l.return,st)}if(l=m,d=l.updateQueue,d!==null){var D=l.stateNode;try{var k=d.shared.hiddenCallbacks;if(k!==null)for(d.shared.hiddenCallbacks=null,d=0;d<k.length;d++)km(k[d],D)}catch(st){We(l,l.return,st)}}s&&E&64&&tg(m),tl(m,m.return);break;case 27:ag(m);case 26:case 5:La(d,m,s),s&&l===null&&E&4&&ng(m),tl(m,m.return);break;case 12:La(d,m,s);break;case 31:La(d,m,s),s&&E&4&&cg(d,m);break;case 13:La(d,m,s),s&&E&4&&ug(d,m);break;case 22:m.memoizedState===null&&La(d,m,s),tl(m,m.return);break;case 30:break;default:La(d,m,s)}i=i.sibling}}function sh(e,i){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&Ho(s))}function rh(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Ho(e))}function Fi(e,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)dg(e,i,s,l),i=i.sibling}function dg(e,i,s,l){var d=i.flags;switch(i.tag){case 0:case 11:case 15:Fi(e,i,s,l),d&2048&&$o(9,i);break;case 1:Fi(e,i,s,l);break;case 3:Fi(e,i,s,l),d&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Ho(e)));break;case 12:if(d&2048){Fi(e,i,s,l),e=i.stateNode;try{var m=i.memoizedProps,E=m.id,D=m.onPostCommit;typeof D=="function"&&D(E,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(k){We(i,i.return,k)}}else Fi(e,i,s,l);break;case 31:Fi(e,i,s,l);break;case 13:Fi(e,i,s,l);break;case 23:break;case 22:m=i.stateNode,E=i.alternate,i.memoizedState!==null?m._visibility&2?Fi(e,i,s,l):el(e,i):m._visibility&2?Fi(e,i,s,l):(m._visibility|=2,Hr(e,i,s,l,(i.subtreeFlags&10256)!==0||!1)),d&2048&&sh(E,i);break;case 24:Fi(e,i,s,l),d&2048&&rh(i.alternate,i);break;default:Fi(e,i,s,l)}}function Hr(e,i,s,l,d){for(d=d&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var m=e,E=i,D=s,k=l,st=E.flags;switch(E.tag){case 0:case 11:case 15:Hr(m,E,D,k,d),$o(8,E);break;case 23:break;case 22:var xt=E.stateNode;E.memoizedState!==null?xt._visibility&2?Hr(m,E,D,k,d):el(m,E):(xt._visibility|=2,Hr(m,E,D,k,d)),d&&st&2048&&sh(E.alternate,E);break;case 24:Hr(m,E,D,k,d),d&&st&2048&&rh(E.alternate,E);break;default:Hr(m,E,D,k,d)}i=i.sibling}}function el(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=e,l=i,d=l.flags;switch(l.tag){case 22:el(s,l),d&2048&&sh(l.alternate,l);break;case 24:el(s,l),d&2048&&rh(l.alternate,l);break;default:el(s,l)}i=i.sibling}}var nl=8192;function Gr(e,i,s){if(e.subtreeFlags&nl)for(e=e.child;e!==null;)pg(e,i,s),e=e.sibling}function pg(e,i,s){switch(e.tag){case 26:Gr(e,i,s),e.flags&nl&&e.memoizedState!==null&&KS(s,Bi,e.memoizedState,e.memoizedProps);break;case 5:Gr(e,i,s);break;case 3:case 4:var l=Bi;Bi=Fc(e.stateNode.containerInfo),Gr(e,i,s),Bi=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=nl,nl=16777216,Gr(e,i,s),nl=l):Gr(e,i,s));break;default:Gr(e,i,s)}}function mg(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function il(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];wn=l,vg(l,e)}mg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)gg(e),e=e.sibling}function gg(e){switch(e.tag){case 0:case 11:case 15:il(e),e.flags&2048&&ps(9,e,e.return);break;case 3:il(e);break;case 12:il(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,Tc(e)):il(e);break;default:il(e)}}function Tc(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];wn=l,vg(l,e)}mg(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:ps(8,i,i.return),Tc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,Tc(i));break;default:Tc(i)}e=e.sibling}}function vg(e,i){for(;wn!==null;){var s=wn;switch(s.tag){case 0:case 11:case 15:ps(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Ho(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,wn=l;else t:for(s=e;wn!==null;){l=wn;var d=l.sibling,m=l.return;if(og(l),l===s){wn=null;break t}if(d!==null){d.return=m,wn=d;break t}wn=m}}}var fS={getCacheForType:function(e){var i=zn(gn),s=i.data.get(e);return s===void 0&&(s=e(),i.data.set(e,s)),s},cacheSignal:function(){return zn(gn).controller.signal}},hS=typeof WeakMap=="function"?WeakMap:Map,He=0,$e=null,Me=null,Te=0,Xe=0,gi=null,ms=!1,Vr=!1,oh=!1,Oa=0,fn=0,gs=0,er=0,lh=0,vi=0,kr=0,al=null,ei=null,ch=!1,Ac=0,_g=0,wc=1/0,Rc=null,vs=null,En=0,_s=null,qr=null,za=0,uh=0,fh=null,xg=null,sl=0,hh=null;function _i(){return(He&2)!==0&&Te!==0?Te&-Te:z.T!==null?_h():ns()}function yg(){if(vi===0)if((Te&536870912)===0||Re){var e=Rt;Rt<<=1,(Rt&3932160)===0&&(Rt=262144),vi=e}else vi=536870912;return e=pi.current,e!==null&&(e.flags|=32),vi}function ni(e,i,s){(e===$e&&(Xe===2||Xe===9)||e.cancelPendingCommit!==null)&&(Xr(e,0),xs(e,Te,vi,!1)),Je(e,s),((He&2)===0||e!==$e)&&(e===$e&&((He&2)===0&&(er|=s),fn===4&&xs(e,Te,vi,!1)),na(e))}function Sg(e,i,s){if((He&6)!==0)throw Error(a(327));var l=!s&&(i&127)===0&&(i&e.expiredLanes)===0||bt(e,i),d=l?mS(e,i):ph(e,i,!0),m=l;do{if(d===0){Vr&&!l&&xs(e,i,0,!1);break}else{if(s=e.current.alternate,m&&!dS(s)){d=ph(e,i,!1),m=!1;continue}if(d===2){if(m=i,e.errorRecoveryDisabledLanes&m)var E=0;else E=e.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){i=E;t:{var D=e;d=al;var k=D.current.memoizedState.isDehydrated;if(k&&(Xr(D,E).flags|=256),E=ph(D,E,!1),E!==2){if(oh&&!k){D.errorRecoveryDisabledLanes|=m,er|=m,d=4;break t}m=ei,ei=d,m!==null&&(ei===null?ei=m:ei.push.apply(ei,m))}d=E}if(m=!1,d!==2)continue}}if(d===1){Xr(e,0),xs(e,i,0,!0);break}t:{switch(l=e,m=d,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:xs(l,i,vi,!ms);break t;case 2:ei=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(d=Ac+300-A(),10<d)){if(xs(l,i,vi,!ms),vt(l,0,!0)!==0)break t;za=i,l.timeoutHandle=Jg(Mg.bind(null,l,s,ei,Rc,ch,i,vi,er,kr,ms,m,"Throttled",-0,0),d);break t}Mg(l,s,ei,Rc,ch,i,vi,er,kr,ms,m,null,-0,0)}}break}while(!0);na(e)}function Mg(e,i,s,l,d,m,E,D,k,st,xt,Mt,ot,dt){if(e.timeoutHandle=-1,Mt=i.subtreeFlags,Mt&8192||(Mt&16785408)===16785408){Mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ya},pg(i,m,Mt);var jt=(m&62914560)===m?Ac-A():(m&4194048)===m?_g-A():0;if(jt=QS(Mt,jt),jt!==null){za=m,e.cancelPendingCommit=jt(Dg.bind(null,e,i,m,s,l,d,E,D,k,xt,Mt,null,ot,dt)),xs(e,m,E,!st);return}}Dg(e,i,m,s,l,d,E,D,k)}function dS(e){for(var i=e;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var d=s[l],m=d.getSnapshot;d=d.value;try{if(!hi(m(),d))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function xs(e,i,s,l){i&=~lh,i&=~er,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var d=i;0<d;){var m=31-Ft(d),E=1<<m;l[m]=-1,d&=~E}s!==0&&oi(e,s,i)}function Cc(){return(He&6)===0?(rl(0),!1):!0}function dh(){if(Me!==null){if(Xe===0)var e=Me.return;else e=Me,ba=Ws=null,Cf(e),zr=null,Vo=0,e=Me;for(;e!==null;)$0(e.alternate,e),e=e.return;Me=null}}function Xr(e,i){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,LS(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),za=0,dh(),$e=e,Me=s=Ma(e.current,null),Te=i,Xe=0,gi=null,ms=!1,Vr=bt(e,i),oh=!1,kr=vi=lh=er=gs=fn=0,ei=al=null,ch=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var d=31-Ft(l),m=1<<d;i|=e[d],l&=~m}return Oa=i,Kl(),s}function Eg(e,i){ge=null,z.H=Ko,i===Or||i===ac?(i=Im(),Xe=3):i===vf?(i=Im(),Xe=4):Xe=i===Xf?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,gi=i,Me===null&&(fn=1,_c(e,Ti(i,e.current)))}function bg(){var e=pi.current;return e===null?!0:(Te&4194048)===Te?Ci===null:(Te&62914560)===Te||(Te&536870912)!==0?e===Ci:!1}function Tg(){var e=z.H;return z.H=Ko,e===null?Ko:e}function Ag(){var e=z.A;return z.A=fS,e}function Dc(){fn=4,ms||(Te&4194048)!==Te&&pi.current!==null||(Vr=!0),(gs&134217727)===0&&(er&134217727)===0||$e===null||xs($e,Te,vi,!1)}function ph(e,i,s){var l=He;He|=2;var d=Tg(),m=Ag();($e!==e||Te!==i)&&(Rc=null,Xr(e,i)),i=!1;var E=fn;t:do try{if(Xe!==0&&Me!==null){var D=Me,k=gi;switch(Xe){case 8:dh(),E=6;break t;case 3:case 2:case 9:case 6:pi.current===null&&(i=!0);var st=Xe;if(Xe=0,gi=null,Wr(e,D,k,st),s&&Vr){E=0;break t}break;default:st=Xe,Xe=0,gi=null,Wr(e,D,k,st)}}pS(),E=fn;break}catch(xt){Eg(e,xt)}while(!0);return i&&e.shellSuspendCounter++,ba=Ws=null,He=l,z.H=d,z.A=m,Me===null&&($e=null,Te=0,Kl()),E}function pS(){for(;Me!==null;)wg(Me)}function mS(e,i){var s=He;He|=2;var l=Tg(),d=Ag();$e!==e||Te!==i?(Rc=null,wc=A()+500,Xr(e,i)):Vr=bt(e,i);t:do try{if(Xe!==0&&Me!==null){i=Me;var m=gi;e:switch(Xe){case 1:Xe=0,gi=null,Wr(e,i,m,1);break;case 2:case 9:if(Bm(m)){Xe=0,gi=null,Rg(i);break}i=function(){Xe!==2&&Xe!==9||$e!==e||(Xe=7),na(e)},m.then(i,i);break t;case 3:Xe=7;break t;case 4:Xe=5;break t;case 7:Bm(m)?(Xe=0,gi=null,Rg(i)):(Xe=0,gi=null,Wr(e,i,m,7));break;case 5:var E=null;switch(Me.tag){case 26:E=Me.memoizedState;case 5:case 27:var D=Me;if(E?dv(E):D.stateNode.complete){Xe=0,gi=null;var k=D.sibling;if(k!==null)Me=k;else{var st=D.return;st!==null?(Me=st,Nc(st)):Me=null}break e}}Xe=0,gi=null,Wr(e,i,m,5);break;case 6:Xe=0,gi=null,Wr(e,i,m,6);break;case 8:dh(),fn=6;break t;default:throw Error(a(462))}}gS();break}catch(xt){Eg(e,xt)}while(!0);return ba=Ws=null,z.H=l,z.A=d,He=s,Me!==null?0:($e=null,Te=0,Kl(),fn)}function gS(){for(;Me!==null&&!qt();)wg(Me)}function wg(e){var i=Q0(e.alternate,e,Oa);e.memoizedProps=e.pendingProps,i===null?Nc(e):Me=i}function Rg(e){var i=e,s=i.alternate;switch(i.tag){case 15:case 0:i=X0(s,i,i.pendingProps,i.type,void 0,Te);break;case 11:i=X0(s,i,i.pendingProps,i.type.render,i.ref,Te);break;case 5:Cf(i);default:$0(s,i),i=Me=Am(i,Oa),i=Q0(s,i,Oa)}e.memoizedProps=e.pendingProps,i===null?Nc(e):Me=i}function Wr(e,i,s,l){ba=Ws=null,Cf(i),zr=null,Vo=0;var d=i.return;try{if(aS(e,d,i,s,Te)){fn=1,_c(e,Ti(s,e.current)),Me=null;return}}catch(m){if(d!==null)throw Me=d,m;fn=1,_c(e,Ti(s,e.current)),Me=null;return}i.flags&32768?(Re||l===1?e=!0:Vr||(Te&536870912)!==0?e=!1:(ms=e=!0,(l===2||l===9||l===3||l===6)&&(l=pi.current,l!==null&&l.tag===13&&(l.flags|=16384))),Cg(i,e)):Nc(i)}function Nc(e){var i=e;do{if((i.flags&32768)!==0){Cg(i,ms);return}e=i.return;var s=oS(i.alternate,i,Oa);if(s!==null){Me=s;return}if(i=i.sibling,i!==null){Me=i;return}Me=i=e}while(i!==null);fn===0&&(fn=5)}function Cg(e,i){do{var s=lS(e.alternate,e);if(s!==null){s.flags&=32767,Me=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(e=e.sibling,e!==null)){Me=e;return}Me=e=s}while(e!==null);fn=6,Me=null}function Dg(e,i,s,l,d,m,E,D,k){e.cancelPendingCommit=null;do Uc();while(En!==0);if((He&6)!==0)throw Error(a(327));if(i!==null){if(i===e.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=ef,Ve(e,s,m,E,D,k),e===$e&&(Me=$e=null,Te=0),qr=i,_s=e,za=s,uh=m,fh=d,xg=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,yS(ht,function(){return zg(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=z.T,z.T=null,d=G.p,G.p=2,E=He,He|=4;try{cS(e,i,s)}finally{He=E,G.p=d,z.T=l}}En=1,Ng(),Ug(),Lg()}}function Ng(){if(En===1){En=0;var e=_s,i=qr,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=z.T,z.T=null;var l=G.p;G.p=2;var d=He;He|=4;try{fg(i,e);var m=Ah,E=vm(e.containerInfo),D=m.focusedElem,k=m.selectionRange;if(E!==D&&D&&D.ownerDocument&&gm(D.ownerDocument.documentElement,D)){if(k!==null&&Ku(D)){var st=k.start,xt=k.end;if(xt===void 0&&(xt=st),"selectionStart"in D)D.selectionStart=st,D.selectionEnd=Math.min(xt,D.value.length);else{var Mt=D.ownerDocument||document,ot=Mt&&Mt.defaultView||window;if(ot.getSelection){var dt=ot.getSelection(),jt=D.textContent.length,oe=Math.min(k.start,jt),Qe=k.end===void 0?oe:Math.min(k.end,jt);!dt.extend&&oe>Qe&&(E=Qe,Qe=oe,oe=E);var et=mm(D,oe),Y=mm(D,Qe);if(et&&Y&&(dt.rangeCount!==1||dt.anchorNode!==et.node||dt.anchorOffset!==et.offset||dt.focusNode!==Y.node||dt.focusOffset!==Y.offset)){var at=Mt.createRange();at.setStart(et.node,et.offset),dt.removeAllRanges(),oe>Qe?(dt.addRange(at),dt.extend(Y.node,Y.offset)):(at.setEnd(Y.node,Y.offset),dt.addRange(at))}}}}for(Mt=[],dt=D;dt=dt.parentNode;)dt.nodeType===1&&Mt.push({element:dt,left:dt.scrollLeft,top:dt.scrollTop});for(typeof D.focus=="function"&&D.focus(),D=0;D<Mt.length;D++){var St=Mt[D];St.element.scrollLeft=St.left,St.element.scrollTop=St.top}}qc=!!Th,Ah=Th=null}finally{He=d,G.p=l,z.T=s}}e.current=i,En=2}}function Ug(){if(En===2){En=0;var e=_s,i=qr,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=z.T,z.T=null;var l=G.p;G.p=2;var d=He;He|=4;try{rg(e,i.alternate,i)}finally{He=d,G.p=l,z.T=s}}En=3}}function Lg(){if(En===4||En===3){En=0,I();var e=_s,i=qr,s=za,l=xg;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?En=5:(En=0,qr=_s=null,Og(e,e.pendingLanes));var d=e.pendingLanes;if(d===0&&(vs=null),Hn(s),i=i.stateNode,wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(At,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=z.T,d=G.p,G.p=2,z.T=null;try{for(var m=e.onRecoverableError,E=0;E<l.length;E++){var D=l[E];m(D.value,{componentStack:D.stack})}}finally{z.T=i,G.p=d}}(za&3)!==0&&Uc(),na(e),d=e.pendingLanes,(s&261930)!==0&&(d&42)!==0?e===hh?sl++:(sl=0,hh=e):sl=0,rl(0)}}function Og(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,Ho(i)))}function Uc(){return Ng(),Ug(),Lg(),zg()}function zg(){if(En!==5)return!1;var e=_s,i=uh;uh=0;var s=Hn(za),l=z.T,d=G.p;try{G.p=32>s?32:s,z.T=null,s=fh,fh=null;var m=_s,E=za;if(En=0,qr=_s=null,za=0,(He&6)!==0)throw Error(a(331));var D=He;if(He|=4,gg(m.current),dg(m,m.current,E,s),He=D,rl(0,!1),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(At,m)}catch{}return!0}finally{G.p=d,z.T=l,Og(e,i)}}function Pg(e,i,s){i=Ti(s,i),i=qf(e.stateNode,i,2),e=fs(e,i,2),e!==null&&(Je(e,2),na(e))}function We(e,i,s){if(e.tag===3)Pg(e,e,s);else for(;i!==null;){if(i.tag===3){Pg(i,e,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(vs===null||!vs.has(l))){e=Ti(s,e),s=B0(2),l=fs(i,s,2),l!==null&&(F0(s,l,i,e),Je(l,2),na(l));break}}i=i.return}}function mh(e,i,s){var l=e.pingCache;if(l===null){l=e.pingCache=new hS;var d=new Set;l.set(i,d)}else d=l.get(i),d===void 0&&(d=new Set,l.set(i,d));d.has(s)||(oh=!0,d.add(s),e=vS.bind(null,e,i,s),i.then(e,e))}function vS(e,i,s){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,$e===e&&(Te&s)===s&&(fn===4||fn===3&&(Te&62914560)===Te&&300>A()-Ac?(He&2)===0&&Xr(e,0):lh|=s,kr===Te&&(kr=0)),na(e)}function Bg(e,i){i===0&&(i=se()),e=ks(e,i),e!==null&&(Je(e,i),na(e))}function _S(e){var i=e.memoizedState,s=0;i!==null&&(s=i.retryLane),Bg(e,s)}function xS(e,i){var s=0;switch(e.tag){case 31:case 13:var l=e.stateNode,d=e.memoizedState;d!==null&&(s=d.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),Bg(e,s)}function yS(e,i){return Se(e,i)}var Lc=null,Yr=null,gh=!1,Oc=!1,vh=!1,ys=0;function na(e){e!==Yr&&e.next===null&&(Yr===null?Lc=Yr=e:Yr=Yr.next=e),Oc=!0,gh||(gh=!0,MS())}function rl(e,i){if(!vh&&Oc){vh=!0;do for(var s=!1,l=Lc;l!==null;){if(e!==0){var d=l.pendingLanes;if(d===0)var m=0;else{var E=l.suspendedLanes,D=l.pingedLanes;m=(1<<31-Ft(42|e)+1)-1,m&=d&~(E&~D),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(s=!0,Gg(l,m))}else m=Te,m=vt(l,l===$e?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||bt(l,m)||(s=!0,Gg(l,m));l=l.next}while(s);vh=!1}}function SS(){Fg()}function Fg(){Oc=gh=!1;var e=0;ys!==0&&US()&&(e=ys);for(var i=A(),s=null,l=Lc;l!==null;){var d=l.next,m=Ig(l,i);m===0?(l.next=null,s===null?Lc=d:s.next=d,d===null&&(Yr=s)):(s=l,(e!==0||(m&3)!==0)&&(Oc=!0)),l=d}En!==0&&En!==5||rl(e),ys!==0&&(ys=0)}function Ig(e,i){for(var s=e.suspendedLanes,l=e.pingedLanes,d=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var E=31-Ft(m),D=1<<E,k=d[E];k===-1?((D&s)===0||(D&l)!==0)&&(d[E]=Kt(D,i)):k<=i&&(e.expiredLanes|=D),m&=~D}if(i=$e,s=Te,s=vt(e,e===i?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,s===0||e===i&&(Xe===2||Xe===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&he(l),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||bt(e,s)){if(i=s&-s,i===e.callbackPriority)return i;switch(l!==null&&he(l),Hn(s)){case 2:case 8:s=Et;break;case 32:s=ht;break;case 268435456:s=Ut;break;default:s=ht}return l=Hg.bind(null,e),s=Se(s,l),e.callbackPriority=i,e.callbackNode=s,i}return l!==null&&l!==null&&he(l),e.callbackPriority=2,e.callbackNode=null,2}function Hg(e,i){if(En!==0&&En!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(Uc()&&e.callbackNode!==s)return null;var l=Te;return l=vt(e,e===$e?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Sg(e,l,i),Ig(e,A()),e.callbackNode!=null&&e.callbackNode===s?Hg.bind(null,e):null)}function Gg(e,i){if(Uc())return null;Sg(e,i,!0)}function MS(){OS(function(){(He&6)!==0?Se(_t,SS):Fg()})}function _h(){if(ys===0){var e=Ur;e===0&&(e=Ot,Ot<<=1,(Ot&261888)===0&&(Ot=256)),ys=e}return ys}function Vg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Vl(""+e)}function kg(e,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,e.id&&s.setAttribute("form",e.id),i.parentNode.insertBefore(s,i),e=new FormData(e),s.parentNode.removeChild(s),e}function ES(e,i,s,l,d){if(i==="submit"&&s&&s.stateNode===d){var m=Vg((d[Sn]||null).action),E=l.submitter;E&&(i=(i=E[Sn]||null)?Vg(i.formAction):E.getAttribute("formAction"),i!==null&&(m=i,E=null));var D=new Wl("action","action",null,l,d);e.push({event:D,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ys!==0){var k=E?kg(d,E):new FormData(d);Ff(s,{pending:!0,data:k,method:d.method,action:m},null,k)}}else typeof m=="function"&&(D.preventDefault(),k=E?kg(d,E):new FormData(d),Ff(s,{pending:!0,data:k,method:d.method,action:m},m,k))},currentTarget:d}]})}}for(var xh=0;xh<tf.length;xh++){var yh=tf[xh],bS=yh.toLowerCase(),TS=yh[0].toUpperCase()+yh.slice(1);Pi(bS,"on"+TS)}Pi(ym,"onAnimationEnd"),Pi(Sm,"onAnimationIteration"),Pi(Mm,"onAnimationStart"),Pi("dblclick","onDoubleClick"),Pi("focusin","onFocus"),Pi("focusout","onBlur"),Pi(Gy,"onTransitionRun"),Pi(Vy,"onTransitionStart"),Pi(ky,"onTransitionCancel"),Pi(Em,"onTransitionEnd"),nt("onMouseEnter",["mouseout","mouseover"]),nt("onMouseLeave",["mouseout","mouseover"]),nt("onPointerEnter",["pointerout","pointerover"]),nt("onPointerLeave",["pointerout","pointerover"]),rt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),rt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),rt("onBeforeInput",["compositionend","keypress","textInput","paste"]),rt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),rt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),rt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ol="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),AS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ol));function qg(e,i){i=(i&4)!==0;for(var s=0;s<e.length;s++){var l=e[s],d=l.event;l=l.listeners;t:{var m=void 0;if(i)for(var E=l.length-1;0<=E;E--){var D=l[E],k=D.instance,st=D.currentTarget;if(D=D.listener,k!==m&&d.isPropagationStopped())break t;m=D,d.currentTarget=st;try{m(d)}catch(xt){Zl(xt)}d.currentTarget=null,m=k}else for(E=0;E<l.length;E++){if(D=l[E],k=D.instance,st=D.currentTarget,D=D.listener,k!==m&&d.isPropagationStopped())break t;m=D,d.currentTarget=st;try{m(d)}catch(xt){Zl(xt)}d.currentTarget=null,m=k}}}}function Ee(e,i){var s=i[fi];s===void 0&&(s=i[fi]=new Set);var l=e+"__bubble";s.has(l)||(Xg(i,e,2,!1),s.add(l))}function Sh(e,i,s){var l=0;i&&(l|=4),Xg(s,e,l,i)}var zc="_reactListening"+Math.random().toString(36).slice(2);function Mh(e){if(!e[zc]){e[zc]=!0,tt.forEach(function(s){s!=="selectionchange"&&(AS.has(s)||Sh(s,!1,e),Sh(s,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[zc]||(i[zc]=!0,Sh("selectionchange",!1,i))}}function Xg(e,i,s,l){switch(yv(i)){case 2:var d=tM;break;case 8:d=eM;break;default:d=Bh}s=d.bind(null,i,s,e),d=void 0,!Gu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),l?d!==void 0?e.addEventListener(i,s,{capture:!0,passive:d}):e.addEventListener(i,s,!0):d!==void 0?e.addEventListener(i,s,{passive:d}):e.addEventListener(i,s,!1)}function Eh(e,i,s,l,d){var m=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var D=l.stateNode.containerInfo;if(D===d)break;if(E===4)for(E=l.return;E!==null;){var k=E.tag;if((k===3||k===4)&&E.stateNode.containerInfo===d)return;E=E.return}for(;D!==null;){if(E=Qi(D),E===null)return;if(k=E.tag,k===5||k===6||k===26||k===27){l=m=E;continue t}D=D.parentNode}}l=l.return}Kp(function(){var st=m,xt=Iu(s),Mt=[];t:{var ot=bm.get(e);if(ot!==void 0){var dt=Wl,jt=e;switch(e){case"keypress":if(ql(s)===0)break t;case"keydown":case"keyup":dt=xy;break;case"focusin":jt="focus",dt=Xu;break;case"focusout":jt="blur",dt=Xu;break;case"beforeblur":case"afterblur":dt=Xu;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":dt=$p;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":dt=oy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":dt=My;break;case ym:case Sm:case Mm:dt=uy;break;case Em:dt=by;break;case"scroll":case"scrollend":dt=sy;break;case"wheel":dt=Ay;break;case"copy":case"cut":case"paste":dt=hy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":dt=em;break;case"toggle":case"beforetoggle":dt=Ry}var oe=(i&4)!==0,Qe=!oe&&(e==="scroll"||e==="scrollend"),et=oe?ot!==null?ot+"Capture":null:ot;oe=[];for(var Y=st,at;Y!==null;){var St=Y;if(at=St.stateNode,St=St.tag,St!==5&&St!==26&&St!==27||at===null||et===null||(St=Co(Y,et),St!=null&&oe.push(ll(Y,St,at))),Qe)break;Y=Y.return}0<oe.length&&(ot=new dt(ot,jt,null,s,xt),Mt.push({event:ot,listeners:oe}))}}if((i&7)===0){t:{if(ot=e==="mouseover"||e==="pointerover",dt=e==="mouseout"||e==="pointerout",ot&&s!==Fu&&(jt=s.relatedTarget||s.fromElement)&&(Qi(jt)||jt[ui]))break t;if((dt||ot)&&(ot=xt.window===xt?xt:(ot=xt.ownerDocument)?ot.defaultView||ot.parentWindow:window,dt?(jt=s.relatedTarget||s.toElement,dt=st,jt=jt?Qi(jt):null,jt!==null&&(Qe=o(jt),oe=jt.tag,jt!==Qe||oe!==5&&oe!==27&&oe!==6)&&(jt=null)):(dt=null,jt=st),dt!==jt)){if(oe=$p,St="onMouseLeave",et="onMouseEnter",Y="mouse",(e==="pointerout"||e==="pointerover")&&(oe=em,St="onPointerLeave",et="onPointerEnter",Y="pointer"),Qe=dt==null?ot:_a(dt),at=jt==null?ot:_a(jt),ot=new oe(St,Y+"leave",dt,s,xt),ot.target=Qe,ot.relatedTarget=at,St=null,Qi(xt)===st&&(oe=new oe(et,Y+"enter",jt,s,xt),oe.target=at,oe.relatedTarget=Qe,St=oe),Qe=St,dt&&jt)e:{for(oe=wS,et=dt,Y=jt,at=0,St=et;St;St=oe(St))at++;St=0;for(var ee=Y;ee;ee=oe(ee))St++;for(;0<at-St;)et=oe(et),at--;for(;0<St-at;)Y=oe(Y),St--;for(;at--;){if(et===Y||Y!==null&&et===Y.alternate){oe=et;break e}et=oe(et),Y=oe(Y)}oe=null}else oe=null;dt!==null&&Wg(Mt,ot,dt,oe,!1),jt!==null&&Qe!==null&&Wg(Mt,Qe,jt,oe,!0)}}t:{if(ot=st?_a(st):window,dt=ot.nodeName&&ot.nodeName.toLowerCase(),dt==="select"||dt==="input"&&ot.type==="file")var Oe=cm;else if(om(ot))if(um)Oe=Fy;else{Oe=Py;var $t=zy}else dt=ot.nodeName,!dt||dt.toLowerCase()!=="input"||ot.type!=="checkbox"&&ot.type!=="radio"?st&&zi(st.elementType)&&(Oe=cm):Oe=By;if(Oe&&(Oe=Oe(e,st))){lm(Mt,Oe,s,xt);break t}$t&&$t(e,ot,st),e==="focusout"&&st&&ot.type==="number"&&st.memoizedProps.value!=null&&Dn(ot,"number",ot.value)}switch($t=st?_a(st):window,e){case"focusin":(om($t)||$t.contentEditable==="true")&&(br=$t,Qu=st,Bo=null);break;case"focusout":Bo=Qu=br=null;break;case"mousedown":Ju=!0;break;case"contextmenu":case"mouseup":case"dragend":Ju=!1,_m(Mt,s,xt);break;case"selectionchange":if(Hy)break;case"keydown":case"keyup":_m(Mt,s,xt)}var ve;if(Yu)t:{switch(e){case"compositionstart":var Ae="onCompositionStart";break t;case"compositionend":Ae="onCompositionEnd";break t;case"compositionupdate":Ae="onCompositionUpdate";break t}Ae=void 0}else Er?sm(e,s)&&(Ae="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(Ae="onCompositionStart");Ae&&(nm&&s.locale!=="ko"&&(Er||Ae!=="onCompositionStart"?Ae==="onCompositionEnd"&&Er&&(ve=Qp()):(as=xt,Vu="value"in as?as.value:as.textContent,Er=!0)),$t=Pc(st,Ae),0<$t.length&&(Ae=new tm(Ae,e,null,s,xt),Mt.push({event:Ae,listeners:$t}),ve?Ae.data=ve:(ve=rm(s),ve!==null&&(Ae.data=ve)))),(ve=Dy?Ny(e,s):Uy(e,s))&&(Ae=Pc(st,"onBeforeInput"),0<Ae.length&&($t=new tm("onBeforeInput","beforeinput",null,s,xt),Mt.push({event:$t,listeners:Ae}),$t.data=ve)),ES(Mt,e,st,s,xt)}qg(Mt,i)})}function ll(e,i,s){return{instance:e,listener:i,currentTarget:s}}function Pc(e,i){for(var s=i+"Capture",l=[];e!==null;){var d=e,m=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||m===null||(d=Co(e,s),d!=null&&l.unshift(ll(e,d,m)),d=Co(e,i),d!=null&&l.push(ll(e,d,m))),e.tag===3)return l;e=e.return}return[]}function wS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Wg(e,i,s,l,d){for(var m=i._reactName,E=[];s!==null&&s!==l;){var D=s,k=D.alternate,st=D.stateNode;if(D=D.tag,k!==null&&k===l)break;D!==5&&D!==26&&D!==27||st===null||(k=st,d?(st=Co(s,m),st!=null&&E.unshift(ll(s,st,k))):d||(st=Co(s,m),st!=null&&E.push(ll(s,st,k)))),s=s.return}E.length!==0&&e.push({event:i,listeners:E})}var RS=/\r\n?/g,CS=/\u0000|\uFFFD/g;function Yg(e){return(typeof e=="string"?e:""+e).replace(RS,`
`).replace(CS,"")}function jg(e,i){return i=Yg(i),Yg(e)===i}function Ke(e,i,s,l,d,m){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Mn(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Mn(e,""+l);break;case"className":ie(e,"class",l);break;case"tabIndex":ie(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ie(e,s,l);break;case"style":yr(e,l,m);break;case"data":if(i!=="object"){ie(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){e.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=Vl(""+l),e.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(s==="formAction"?(i!=="input"&&Ke(e,i,"name",d.name,d,null),Ke(e,i,"formEncType",d.formEncType,d,null),Ke(e,i,"formMethod",d.formMethod,d,null),Ke(e,i,"formTarget",d.formTarget,d,null)):(Ke(e,i,"encType",d.encType,d,null),Ke(e,i,"method",d.method,d,null),Ke(e,i,"target",d.target,d,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=Vl(""+l),e.setAttribute(s,l);break;case"onClick":l!=null&&(e.onclick=ya);break;case"onScroll":l!=null&&Ee("scroll",e);break;case"onScrollEnd":l!=null&&Ee("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(d.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}s=Vl(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""+l):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":l===!0?e.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,l):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(s,l):e.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(s):e.setAttribute(s,l);break;case"popover":Ee("beforetoggle",e),Ee("toggle",e),Qt(e,"popover",l);break;case"xlinkActuate":Jt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Jt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Jt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Jt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Jt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Jt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Jt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Jt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Jt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Qt(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=iy.get(s)||s,Qt(e,s,l))}}function bh(e,i,s,l,d,m){switch(s){case"style":yr(e,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(d.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"children":typeof l=="string"?Mn(e,l):(typeof l=="number"||typeof l=="bigint")&&Mn(e,""+l);break;case"onScroll":l!=null&&Ee("scroll",e);break;case"onScrollEnd":l!=null&&Ee("scrollend",e);break;case"onClick":l!=null&&(e.onclick=ya);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ft.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(d=s.endsWith("Capture"),i=s.slice(2,d?s.length-7:void 0),m=e[Sn]||null,m=m!=null?m[s]:null,typeof m=="function"&&e.removeEventListener(i,m,d),typeof l=="function")){typeof m!="function"&&m!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(i,l,d);break t}s in e?e[s]=l:l===!0?e.setAttribute(s,""):Qt(e,s,l)}}}function Bn(e,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ee("error",e),Ee("load",e);var l=!1,d=!1,m;for(m in s)if(s.hasOwnProperty(m)){var E=s[m];if(E!=null)switch(m){case"src":l=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Ke(e,i,m,E,s,null)}}d&&Ke(e,i,"srcSet",s.srcSet,s,null),l&&Ke(e,i,"src",s.src,s,null);return;case"input":Ee("invalid",e);var D=m=E=d=null,k=null,st=null;for(l in s)if(s.hasOwnProperty(l)){var xt=s[l];if(xt!=null)switch(l){case"name":d=xt;break;case"type":E=xt;break;case"checked":k=xt;break;case"defaultChecked":st=xt;break;case"value":m=xt;break;case"defaultValue":D=xt;break;case"children":case"dangerouslySetInnerHTML":if(xt!=null)throw Error(a(137,i));break;default:Ke(e,i,l,xt,s,null)}}xa(e,m,D,k,st,E,d,!1);return;case"select":Ee("invalid",e),l=E=m=null;for(d in s)if(s.hasOwnProperty(d)&&(D=s[d],D!=null))switch(d){case"value":m=D;break;case"defaultValue":E=D;break;case"multiple":l=D;default:Ke(e,i,d,D,s,null)}i=m,s=E,e.multiple=!!l,i!=null?Ei(e,!!l,i,!1):s!=null&&Ei(e,!!l,s,!0);return;case"textarea":Ee("invalid",e),m=d=l=null;for(E in s)if(s.hasOwnProperty(E)&&(D=s[E],D!=null))switch(E){case"value":l=D;break;case"defaultValue":d=D;break;case"children":m=D;break;case"dangerouslySetInnerHTML":if(D!=null)throw Error(a(91));break;default:Ke(e,i,E,D,s,null)}Nn(e,l,d,m);return;case"option":for(k in s)s.hasOwnProperty(k)&&(l=s[k],l!=null)&&(k==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":Ke(e,i,k,l,s,null));return;case"dialog":Ee("beforetoggle",e),Ee("toggle",e),Ee("cancel",e),Ee("close",e);break;case"iframe":case"object":Ee("load",e);break;case"video":case"audio":for(l=0;l<ol.length;l++)Ee(ol[l],e);break;case"image":Ee("error",e),Ee("load",e);break;case"details":Ee("toggle",e);break;case"embed":case"source":case"link":Ee("error",e),Ee("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(st in s)if(s.hasOwnProperty(st)&&(l=s[st],l!=null))switch(st){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Ke(e,i,st,l,s,null)}return;default:if(zi(i)){for(xt in s)s.hasOwnProperty(xt)&&(l=s[xt],l!==void 0&&bh(e,i,xt,l,s,void 0));return}}for(D in s)s.hasOwnProperty(D)&&(l=s[D],l!=null&&Ke(e,i,D,l,s,null))}function DS(e,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,m=null,E=null,D=null,k=null,st=null,xt=null;for(dt in s){var Mt=s[dt];if(s.hasOwnProperty(dt)&&Mt!=null)switch(dt){case"checked":break;case"value":break;case"defaultValue":k=Mt;default:l.hasOwnProperty(dt)||Ke(e,i,dt,null,l,Mt)}}for(var ot in l){var dt=l[ot];if(Mt=s[ot],l.hasOwnProperty(ot)&&(dt!=null||Mt!=null))switch(ot){case"type":m=dt;break;case"name":d=dt;break;case"checked":st=dt;break;case"defaultChecked":xt=dt;break;case"value":E=dt;break;case"defaultValue":D=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(a(137,i));break;default:dt!==Mt&&Ke(e,i,ot,dt,l,Mt)}}Cn(e,E,D,k,st,xt,m,d);return;case"select":dt=E=D=ot=null;for(m in s)if(k=s[m],s.hasOwnProperty(m)&&k!=null)switch(m){case"value":break;case"multiple":dt=k;default:l.hasOwnProperty(m)||Ke(e,i,m,null,l,k)}for(d in l)if(m=l[d],k=s[d],l.hasOwnProperty(d)&&(m!=null||k!=null))switch(d){case"value":ot=m;break;case"defaultValue":D=m;break;case"multiple":E=m;default:m!==k&&Ke(e,i,d,m,l,k)}i=D,s=E,l=dt,ot!=null?Ei(e,!!s,ot,!1):!!l!=!!s&&(i!=null?Ei(e,!!s,i,!0):Ei(e,!!s,s?[]:"",!1));return;case"textarea":dt=ot=null;for(D in s)if(d=s[D],s.hasOwnProperty(D)&&d!=null&&!l.hasOwnProperty(D))switch(D){case"value":break;case"children":break;default:Ke(e,i,D,null,l,d)}for(E in l)if(d=l[E],m=s[E],l.hasOwnProperty(E)&&(d!=null||m!=null))switch(E){case"value":ot=d;break;case"defaultValue":dt=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(a(91));break;default:d!==m&&Ke(e,i,E,d,l,m)}qe(e,ot,dt);return;case"option":for(var jt in s)ot=s[jt],s.hasOwnProperty(jt)&&ot!=null&&!l.hasOwnProperty(jt)&&(jt==="selected"?e.selected=!1:Ke(e,i,jt,null,l,ot));for(k in l)ot=l[k],dt=s[k],l.hasOwnProperty(k)&&ot!==dt&&(ot!=null||dt!=null)&&(k==="selected"?e.selected=ot&&typeof ot!="function"&&typeof ot!="symbol":Ke(e,i,k,ot,l,dt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var oe in s)ot=s[oe],s.hasOwnProperty(oe)&&ot!=null&&!l.hasOwnProperty(oe)&&Ke(e,i,oe,null,l,ot);for(st in l)if(ot=l[st],dt=s[st],l.hasOwnProperty(st)&&ot!==dt&&(ot!=null||dt!=null))switch(st){case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(a(137,i));break;default:Ke(e,i,st,ot,l,dt)}return;default:if(zi(i)){for(var Qe in s)ot=s[Qe],s.hasOwnProperty(Qe)&&ot!==void 0&&!l.hasOwnProperty(Qe)&&bh(e,i,Qe,void 0,l,ot);for(xt in l)ot=l[xt],dt=s[xt],!l.hasOwnProperty(xt)||ot===dt||ot===void 0&&dt===void 0||bh(e,i,xt,ot,l,dt);return}}for(var et in s)ot=s[et],s.hasOwnProperty(et)&&ot!=null&&!l.hasOwnProperty(et)&&Ke(e,i,et,null,l,ot);for(Mt in l)ot=l[Mt],dt=s[Mt],!l.hasOwnProperty(Mt)||ot===dt||ot==null&&dt==null||Ke(e,i,Mt,ot,l,dt)}function Zg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function NS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,i=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var d=s[l],m=d.transferSize,E=d.initiatorType,D=d.duration;if(m&&D&&Zg(E)){for(E=0,D=d.responseEnd,l+=1;l<s.length;l++){var k=s[l],st=k.startTime;if(st>D)break;var xt=k.transferSize,Mt=k.initiatorType;xt&&Zg(Mt)&&(k=k.responseEnd,E+=xt*(k<D?1:(D-st)/(k-st)))}if(--l,i+=8*(m+E)/(d.duration/1e3),e++,10<e)break}}if(0<e)return i/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Th=null,Ah=null;function Bc(e){return e.nodeType===9?e:e.ownerDocument}function Kg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Qg(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function wh(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Rh=null;function US(){var e=window.event;return e&&e.type==="popstate"?e===Rh?!1:(Rh=e,!0):(Rh=null,!1)}var Jg=typeof setTimeout=="function"?setTimeout:void 0,LS=typeof clearTimeout=="function"?clearTimeout:void 0,$g=typeof Promise=="function"?Promise:void 0,OS=typeof queueMicrotask=="function"?queueMicrotask:typeof $g<"u"?function(e){return $g.resolve(null).then(e).catch(zS)}:Jg;function zS(e){setTimeout(function(){throw e})}function Ss(e){return e==="head"}function tv(e,i){var s=i,l=0;do{var d=s.nextSibling;if(e.removeChild(s),d&&d.nodeType===8)if(s=d.data,s==="/$"||s==="/&"){if(l===0){e.removeChild(d),Qr(i);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")cl(e.ownerDocument.documentElement);else if(s==="head"){s=e.ownerDocument.head,cl(s);for(var m=s.firstChild;m;){var E=m.nextSibling,D=m.nodeName;m[Ki]||D==="SCRIPT"||D==="STYLE"||D==="LINK"&&m.rel.toLowerCase()==="stylesheet"||s.removeChild(m),m=E}}else s==="body"&&cl(e.ownerDocument.body);s=d}while(s);Qr(i)}function ev(e,i){var s=e;e=0;do{var l=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(e===0)break;e--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||e++;s=l}while(s)}function Ch(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Ch(s),Is(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function PS(e,i,s,l){for(;e.nodeType===1;){var d=s;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Ki])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==d.rel||e.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||e.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||e.getAttribute("title")!==(d.title==null?null:d.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(d.src==null?null:d.src)||e.getAttribute("type")!==(d.type==null?null:d.type)||e.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var m=d.name==null?null:""+d.name;if(d.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=Di(e.nextSibling),e===null)break}return null}function BS(e,i,s){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=Di(e.nextSibling),e===null))return null;return e}function nv(e,i){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=Di(e.nextSibling),e===null))return null;return e}function Dh(e){return e.data==="$?"||e.data==="$~"}function Nh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function FS(e,i){var s=e.ownerDocument;if(e.data==="$~")e._reactRetry=i;else if(e.data!=="$?"||s.readyState!=="loading")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Di(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return e}var Uh=null;function iv(e){e=e.nextSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="/$"||s==="/&"){if(i===0)return Di(e.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}e=e.nextSibling}return null}function av(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return e;i--}else s!=="/$"&&s!=="/&"||i++}e=e.previousSibling}return null}function sv(e,i,s){switch(i=Bc(s),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function cl(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);Is(e)}var Ni=new Map,rv=new Set;function Fc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Pa=G.d;G.d={f:IS,r:HS,D:GS,C:VS,L:kS,m:qS,X:WS,S:XS,M:YS};function IS(){var e=Pa.f(),i=Cc();return e||i}function HS(e){var i=Oi(e);i!==null&&i.tag===5&&i.type==="form"?E0(i):Pa.r(e)}var jr=typeof document>"u"?null:document;function ov(e,i,s){var l=jr;if(l&&typeof i=="string"&&i){var d=fe(i);d='link[rel="'+e+'"][href="'+d+'"]',typeof s=="string"&&(d+='[crossorigin="'+s+'"]'),rv.has(d)||(rv.add(d),e={rel:e,crossOrigin:s,href:i},l.querySelector(d)===null&&(i=l.createElement("link"),Bn(i,"link",e),N(i),l.head.appendChild(i)))}}function GS(e){Pa.D(e),ov("dns-prefetch",e,null)}function VS(e,i){Pa.C(e,i),ov("preconnect",e,i)}function kS(e,i,s){Pa.L(e,i,s);var l=jr;if(l&&e&&i){var d='link[rel="preload"][as="'+fe(i)+'"]';i==="image"&&s&&s.imageSrcSet?(d+='[imagesrcset="'+fe(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(d+='[imagesizes="'+fe(s.imageSizes)+'"]')):d+='[href="'+fe(e)+'"]';var m=d;switch(i){case"style":m=Zr(e);break;case"script":m=Kr(e)}Ni.has(m)||(e=_({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:e,as:i},s),Ni.set(m,e),l.querySelector(d)!==null||i==="style"&&l.querySelector(ul(m))||i==="script"&&l.querySelector(fl(m))||(i=l.createElement("link"),Bn(i,"link",e),N(i),l.head.appendChild(i)))}}function qS(e,i){Pa.m(e,i);var s=jr;if(s&&e){var l=i&&typeof i.as=="string"?i.as:"script",d='link[rel="modulepreload"][as="'+fe(l)+'"][href="'+fe(e)+'"]',m=d;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Kr(e)}if(!Ni.has(m)&&(e=_({rel:"modulepreload",href:e},i),Ni.set(m,e),s.querySelector(d)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(fl(m)))return}l=s.createElement("link"),Bn(l,"link",e),N(l),s.head.appendChild(l)}}}function XS(e,i,s){Pa.S(e,i,s);var l=jr;if(l&&e){var d=Ji(l).hoistableStyles,m=Zr(e);i=i||"default";var E=d.get(m);if(!E){var D={loading:0,preload:null};if(E=l.querySelector(ul(m)))D.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":i},s),(s=Ni.get(m))&&Lh(e,s);var k=E=l.createElement("link");N(k),Bn(k,"link",e),k._p=new Promise(function(st,xt){k.onload=st,k.onerror=xt}),k.addEventListener("load",function(){D.loading|=1}),k.addEventListener("error",function(){D.loading|=2}),D.loading|=4,Ic(E,i,l)}E={type:"stylesheet",instance:E,count:1,state:D},d.set(m,E)}}}function WS(e,i){Pa.X(e,i);var s=jr;if(s&&e){var l=Ji(s).hoistableScripts,d=Kr(e),m=l.get(d);m||(m=s.querySelector(fl(d)),m||(e=_({src:e,async:!0},i),(i=Ni.get(d))&&Oh(e,i),m=s.createElement("script"),N(m),Bn(m,"link",e),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(d,m))}}function YS(e,i){Pa.M(e,i);var s=jr;if(s&&e){var l=Ji(s).hoistableScripts,d=Kr(e),m=l.get(d);m||(m=s.querySelector(fl(d)),m||(e=_({src:e,async:!0,type:"module"},i),(i=Ni.get(d))&&Oh(e,i),m=s.createElement("script"),N(m),Bn(m,"link",e),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(d,m))}}function lv(e,i,s,l){var d=(d=it.current)?Fc(d):null;if(!d)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=Zr(s.href),s=Ji(d).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=Zr(s.href);var m=Ji(d).hoistableStyles,E=m.get(e);if(E||(d=d.ownerDocument||d,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,E),(m=d.querySelector(ul(e)))&&!m._p&&(E.instance=m,E.state.loading=5),Ni.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Ni.set(e,s),m||jS(d,e,s,E.state))),i&&l===null)throw Error(a(528,""));return E}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Kr(s),s=Ji(d).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Zr(e){return'href="'+fe(e)+'"'}function ul(e){return'link[rel="stylesheet"]['+e+"]"}function cv(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function jS(e,i,s,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Bn(i,"link",s),N(i),e.head.appendChild(i))}function Kr(e){return'[src="'+fe(e)+'"]'}function fl(e){return"script[async]"+e}function uv(e,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+fe(s.href)+'"]');if(l)return i.instance=l,N(l),l;var d=_({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),N(l),Bn(l,"style",d),Ic(l,s.precedence,e),i.instance=l;case"stylesheet":d=Zr(s.href);var m=e.querySelector(ul(d));if(m)return i.state.loading|=4,i.instance=m,N(m),m;l=cv(s),(d=Ni.get(d))&&Lh(l,d),m=(e.ownerDocument||e).createElement("link"),N(m);var E=m;return E._p=new Promise(function(D,k){E.onload=D,E.onerror=k}),Bn(m,"link",l),i.state.loading|=4,Ic(m,s.precedence,e),i.instance=m;case"script":return m=Kr(s.src),(d=e.querySelector(fl(m)))?(i.instance=d,N(d),d):(l=s,(d=Ni.get(m))&&(l=_({},s),Oh(l,d)),e=e.ownerDocument||e,d=e.createElement("script"),N(d),Bn(d,"link",l),e.head.appendChild(d),i.instance=d);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Ic(l,s.precedence,e));return i.instance}function Ic(e,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=l.length?l[l.length-1]:null,m=d,E=0;E<l.length;E++){var D=l[E];if(D.dataset.precedence===i)m=D;else if(m!==d)break}m?m.parentNode.insertBefore(e,m.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(e,i.firstChild))}function Lh(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function Oh(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var Hc=null;function fv(e,i,s){if(Hc===null){var l=new Map,d=Hc=new Map;d.set(s,l)}else d=Hc,l=d.get(s),l||(l=new Map,d.set(s,l));if(l.has(e))return l;for(l.set(e,null),s=s.getElementsByTagName(e),d=0;d<s.length;d++){var m=s[d];if(!(m[Ki]||m[ln]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var E=m.getAttribute(i)||"";E=e+E;var D=l.get(E);D?D.push(m):l.set(E,[m])}}return l}function hv(e,i,s){e=e.ownerDocument||e,e.head.insertBefore(s,i==="title"?e.querySelector("head > title"):null)}function ZS(e,i,s){if(s===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;return i.rel==="stylesheet"?(e=i.disabled,typeof i.precedence=="string"&&e==null):!0;case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function dv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function KS(e,i,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var d=Zr(l.href),m=i.querySelector(ul(d));if(m){i=m._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(e.count++,e=Gc.bind(e),i.then(e,e)),s.state.loading|=4,s.instance=m,N(m);return}m=i.ownerDocument||i,l=cv(l),(d=Ni.get(d))&&Lh(l,d),m=m.createElement("link"),N(m);var E=m;E._p=new Promise(function(D,k){E.onload=D,E.onerror=k}),Bn(m,"link",l),s.instance=m}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(e.count++,s=Gc.bind(e),i.addEventListener("load",s),i.addEventListener("error",s))}}var zh=0;function QS(e,i){return e.stylesheets&&e.count===0&&kc(e,e.stylesheets),0<e.count||0<e.imgCount?function(s){var l=setTimeout(function(){if(e.stylesheets&&kc(e,e.stylesheets),e.unsuspend){var m=e.unsuspend;e.unsuspend=null,m()}},6e4+i);0<e.imgBytes&&zh===0&&(zh=62500*NS());var d=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&kc(e,e.stylesheets),e.unsuspend)){var m=e.unsuspend;e.unsuspend=null,m()}},(e.imgBytes>zh?50:800)+i);return e.unsuspend=s,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(d)}}:null}function Gc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)kc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Vc=null;function kc(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Vc=new Map,i.forEach(JS,e),Vc=null,Gc.call(e))}function JS(e,i){if(!(i.state.loading&4)){var s=Vc.get(e);if(s)var l=s.get(null);else{s=new Map,Vc.set(e,s);for(var d=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<d.length;m++){var E=d[m];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(s.set(E.dataset.precedence,E),l=E)}l&&s.set(null,l)}d=i.instance,E=d.getAttribute("data-precedence"),m=s.get(E)||l,m===l&&s.set(null,d),s.set(E,d),this.count++,l=Gc.bind(this),d.addEventListener("load",l),d.addEventListener("error",l),m?m.parentNode.insertBefore(d,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(d,e.firstChild)),i.state.loading|=4}}var hl={$$typeof:U,Provider:null,Consumer:null,_currentValue:Q,_currentValue2:Q,_threadCount:0};function $S(e,i,s,l,d,m,E,D,k){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ce(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ce(0),this.hiddenUpdates=ce(null),this.identifierPrefix=l,this.onUncaughtError=d,this.onCaughtError=m,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=k,this.incompleteTransitions=new Map}function pv(e,i,s,l,d,m,E,D,k,st,xt,Mt){return e=new $S(e,i,s,E,k,st,xt,Mt,D),i=1,m===!0&&(i|=24),m=di(3,null,null,i),e.current=m,m.stateNode=e,i=pf(),i.refCount++,e.pooledCache=i,i.refCount++,m.memoizedState={element:l,isDehydrated:s,cache:i},_f(m),e}function mv(e){return e?(e=wr,e):wr}function gv(e,i,s,l,d,m){d=mv(d),l.context===null?l.context=d:l.pendingContext=d,l=us(i),l.payload={element:s},m=m===void 0?null:m,m!==null&&(l.callback=m),s=fs(e,l,i),s!==null&&(ni(s,e,i),qo(s,e,i))}function vv(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<i?s:i}}function Ph(e,i){vv(e,i),(e=e.alternate)&&vv(e,i)}function _v(e){if(e.tag===13||e.tag===31){var i=ks(e,67108864);i!==null&&ni(i,e,67108864),Ph(e,67108864)}}function xv(e){if(e.tag===13||e.tag===31){var i=_i();i=li(i);var s=ks(e,i);s!==null&&ni(s,e,i),Ph(e,i)}}var qc=!0;function tM(e,i,s,l){var d=z.T;z.T=null;var m=G.p;try{G.p=2,Bh(e,i,s,l)}finally{G.p=m,z.T=d}}function eM(e,i,s,l){var d=z.T;z.T=null;var m=G.p;try{G.p=8,Bh(e,i,s,l)}finally{G.p=m,z.T=d}}function Bh(e,i,s,l){if(qc){var d=Fh(l);if(d===null)Eh(e,i,l,Xc,s),Sv(e,l);else if(iM(d,e,i,s,l))l.stopPropagation();else if(Sv(e,l),i&4&&-1<nM.indexOf(e)){for(;d!==null;){var m=Oi(d);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var E=ut(m.pendingLanes);if(E!==0){var D=m;for(D.pendingLanes|=2,D.entangledLanes|=2;E;){var k=1<<31-Ft(E);D.entanglements[1]|=k,E&=~k}na(m),(He&6)===0&&(wc=A()+500,rl(0))}}break;case 31:case 13:D=ks(m,2),D!==null&&ni(D,m,2),Cc(),Ph(m,2)}if(m=Fh(l),m===null&&Eh(e,i,l,Xc,s),m===d)break;d=m}d!==null&&l.stopPropagation()}else Eh(e,i,l,null,s)}}function Fh(e){return e=Iu(e),Ih(e)}var Xc=null;function Ih(e){if(Xc=null,e=Qi(e),e!==null){var i=o(e);if(i===null)e=null;else{var s=i.tag;if(s===13){if(e=u(i),e!==null)return e;e=null}else if(s===31){if(e=f(i),e!==null)return e;e=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return Xc=e,null}function yv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(J()){case _t:return 2;case Et:return 8;case ht:case Xt:return 32;case Ut:return 268435456;default:return 32}default:return 32}}var Hh=!1,Ms=null,Es=null,bs=null,dl=new Map,pl=new Map,Ts=[],nM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Sv(e,i){switch(e){case"focusin":case"focusout":Ms=null;break;case"dragenter":case"dragleave":Es=null;break;case"mouseover":case"mouseout":bs=null;break;case"pointerover":case"pointerout":dl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":pl.delete(i.pointerId)}}function ml(e,i,s,l,d,m){return e===null||e.nativeEvent!==m?(e={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:m,targetContainers:[d]},i!==null&&(i=Oi(i),i!==null&&_v(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),e)}function iM(e,i,s,l,d){switch(i){case"focusin":return Ms=ml(Ms,e,i,s,l,d),!0;case"dragenter":return Es=ml(Es,e,i,s,l,d),!0;case"mouseover":return bs=ml(bs,e,i,s,l,d),!0;case"pointerover":var m=d.pointerId;return dl.set(m,ml(dl.get(m)||null,e,i,s,l,d)),!0;case"gotpointercapture":return m=d.pointerId,pl.set(m,ml(pl.get(m)||null,e,i,s,l,d)),!0}return!1}function Mv(e){var i=Qi(e.target);if(i!==null){var s=o(i);if(s!==null){if(i=s.tag,i===13){if(i=u(s),i!==null){e.blockedOn=i,ci(e.priority,function(){xv(s)});return}}else if(i===31){if(i=f(s),i!==null){e.blockedOn=i,ci(e.priority,function(){xv(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Wc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var s=Fh(e.nativeEvent);if(s===null){s=e.nativeEvent;var l=new s.constructor(s.type,s);Fu=l,s.target.dispatchEvent(l),Fu=null}else return i=Oi(s),i!==null&&_v(i),e.blockedOn=s,!1;i.shift()}return!0}function Ev(e,i,s){Wc(e)&&s.delete(i)}function aM(){Hh=!1,Ms!==null&&Wc(Ms)&&(Ms=null),Es!==null&&Wc(Es)&&(Es=null),bs!==null&&Wc(bs)&&(bs=null),dl.forEach(Ev),pl.forEach(Ev)}function Yc(e,i){e.blockedOn===i&&(e.blockedOn=null,Hh||(Hh=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,aM)))}var jc=null;function bv(e){jc!==e&&(jc=e,c.unstable_scheduleCallback(c.unstable_NormalPriority,function(){jc===e&&(jc=null);for(var i=0;i<e.length;i+=3){var s=e[i],l=e[i+1],d=e[i+2];if(typeof l!="function"){if(Ih(l||s)===null)continue;break}var m=Oi(s);m!==null&&(e.splice(i,3),i-=3,Ff(m,{pending:!0,data:d,method:s.method,action:l},l,d))}}))}function Qr(e){function i(k){return Yc(k,e)}Ms!==null&&Yc(Ms,e),Es!==null&&Yc(Es,e),bs!==null&&Yc(bs,e),dl.forEach(i),pl.forEach(i);for(var s=0;s<Ts.length;s++){var l=Ts[s];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ts.length&&(s=Ts[0],s.blockedOn===null);)Mv(s),s.blockedOn===null&&Ts.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var d=s[l],m=s[l+1],E=d[Sn]||null;if(typeof m=="function")E||bv(s);else if(E){var D=null;if(m&&m.hasAttribute("formAction")){if(d=m,E=m[Sn]||null)D=E.formAction;else if(Ih(d)!==null)continue}else D=E.action;typeof D=="function"?s[l+1]=D:(s.splice(l,3),l-=3),bv(s)}}}function Tv(){function e(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(E){return d=E})},focusReset:"manual",scroll:"manual"})}function i(){d!==null&&(d(),d=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,d=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),d!==null&&(d(),d=null)}}}function Gh(e){this._internalRoot=e}Zc.prototype.render=Gh.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,l=_i();gv(s,l,e,i,null,null)},Zc.prototype.unmount=Gh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;gv(e.current,2,null,e,null,null),Cc(),i[ui]=null}};function Zc(e){this._internalRoot=e}Zc.prototype.unstable_scheduleHydration=function(e){if(e){var i=ns();e={blockedOn:null,target:e,priority:i};for(var s=0;s<Ts.length&&i!==0&&i<Ts[s].priority;s++);Ts.splice(s,0,e),s===0&&Mv(e)}};var Av=t.version;if(Av!=="19.2.4")throw Error(a(527,Av,"19.2.4"));G.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=h(i),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var sM={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Kc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Kc.isDisabled&&Kc.supportsFiber)try{At=Kc.inject(sM),wt=Kc}catch{}}return vl.createRoot=function(e,i){if(!r(e))throw Error(a(299));var s=!1,l="",d=L0,m=O0,E=z0;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(d=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(E=i.onRecoverableError)),i=pv(e,1,!1,null,null,s,l,null,d,m,E,Tv),e[ui]=i.current,Mh(e),new Gh(i)},vl.hydrateRoot=function(e,i,s){if(!r(e))throw Error(a(299));var l=!1,d="",m=L0,E=O0,D=z0,k=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(d=s.identifierPrefix),s.onUncaughtError!==void 0&&(m=s.onUncaughtError),s.onCaughtError!==void 0&&(E=s.onCaughtError),s.onRecoverableError!==void 0&&(D=s.onRecoverableError),s.formState!==void 0&&(k=s.formState)),i=pv(e,1,!0,i,s??null,l,d,k,m,E,D,Tv),i.context=mv(null),s=i.current,l=_i(),l=li(l),d=us(l),d.callback=null,fs(s,d,l),s=l,i.current.lanes=s,Je(i,s),na(i),e[ui]=i.current,Mh(e),new Zc(i)},vl.version="19.2.4",vl}var Pv;function mM(){if(Pv)return qh.exports;Pv=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(t){console.error(t)}}return c(),qh.exports=pM(),qh.exports}var gM=mM();const hr=["ones","twos","threes","fours","fives","sixes","quadra","full","seqLow","seqHigh","min","max","yam"],Bv=["ones","twos","threes","fours","fives","sixes"],vM=["quadra","full","seqLow","seqHigh","min","max","yam"],Jr=[{id:"down",title:"▼"},{id:"up",title:"▲"},{id:"desordem",title:"D"},{id:"seco",title:"S"}],Fv=[{id:"ones",left:"2",label:"1"},{id:"twos",left:"4",label:"2"},{id:"threes",left:"9",label:"3"},{id:"fours",left:"12",label:"4"},{id:"fives",left:"15",label:"5"},{id:"sixes",left:"18",label:"6"},{id:"quadra",left:"20",label:"Q"},{id:"full",left:"30",label:"F"},{id:"seqLow",left:"35",label:"S-"},{id:"seqHigh",left:"40",label:"S+"},{id:"min",left:"X",label:"MIN"},{id:"max",left:"X",label:"MAX"},{id:"yam",left:"50",label:"YAM"}];function _M({sheet:c,openCells:t,clickable:n,pendingPlacement:a,onCellClick:r}){const o=Object.fromEntries(Jr.map(f=>{const p=a?.columnId===f.id?{...c[f.id],[a.rowId]:a.value}:c[f.id];return[f.id,cx(p)]})),u=Jr.reduce((f,p)=>f+o[p.id].combined,0);return zt.jsx("div",{className:"w-[340px] max-w-full shrink-0 sm:w-[360px] lg:w-[376px]",children:zt.jsxs("table",{className:"w-full table-fixed border-separate border-spacing-[2px] bg-white text-center",style:{fontFamily:"'Inter', sans-serif"},children:[zt.jsxs("colgroup",{children:[zt.jsx("col",{className:"w-[38px]"}),zt.jsx("col",{className:"w-[38px]"}),zt.jsx("col",{className:"w-[58px]"}),zt.jsx("col",{className:"w-[58px]"}),zt.jsx("col",{className:"w-[58px]"}),zt.jsx("col",{className:"w-[58px]"})]}),zt.jsx("thead",{children:zt.jsxs("tr",{children:[zt.jsx("th",{className:"h-7 px-2",colSpan:2}),Jr.map(f=>zt.jsx("th",{className:"h-7 px-2 text-base leading-none font-bold text-slate-800",children:f.id==="down"?zt.jsx("svg",{viewBox:"0 0 24 24",width:"19",height:"19",fill:"none",stroke:"currentColor",strokeWidth:"2.8",strokeLinecap:"round",strokeLinejoin:"round",className:"mx-auto",children:zt.jsx("polyline",{points:"6,9 12,15 18,9"})}):f.id==="up"?zt.jsx("svg",{viewBox:"0 0 24 24",width:"19",height:"19",fill:"none",stroke:"currentColor",strokeWidth:"2.8",strokeLinecap:"round",strokeLinejoin:"round",className:"mx-auto",children:zt.jsx("polyline",{points:"6,15 12,9 18,15"})}):zt.jsx("span",{className:"text-[0.9rem] font-semibold tracking-[0.08em]",children:f.title})},f.id))]})}),zt.jsxs("tbody",{children:[Fv.slice(0,6).map(f=>zt.jsxs("tr",{children:[zt.jsx("td",{className:"h-7 bg-transparent px-1"}),zt.jsx("td",{className:"h-7 border border-slate-700 bg-white px-1 text-sm leading-none font-semibold text-slate-900",children:f.label}),Jr.map(p=>Iv({columnId:p.id,rowId:f.id,sheet:c,openCells:t,clickable:n,pendingPlacement:a,onCellClick:r}))]},f.id)),zt.jsxs("tr",{children:[zt.jsx("td",{className:"h-4 bg-transparent px-1"}),zt.jsx("td",{className:"h-4 bg-transparent px-1 text-[8px] leading-none font-bold tracking-[0.1em] text-slate-500",children:"BONUS"}),Jr.map(f=>{const p=o[f.id];return zt.jsx("td",{className:"h-4 bg-transparent px-1 align-middle text-[9px] font-bold text-slate-500",style:p.bonus>0?{fontFamily:"'Kalam', cursive",fontWeight:700,fontSize:"0.78rem"}:void 0,children:p.bonus>0?"30":""},f.id)})]}),Fv.slice(6).map(f=>{const p=f.left!=="X";return zt.jsxs("tr",{children:[zt.jsx("td",{className:p?"h-7 bg-transparent px-1 text-[11px] leading-none font-semibold tracking-[0.12em] text-slate-500":"h-7 bg-transparent px-1",style:p?{fontFamily:"'Kalam', cursive"}:void 0,children:p?`+${f.left}`:""}),zt.jsx("td",{className:"h-7 border border-slate-700 bg-white px-1 text-[10px] leading-none font-semibold text-slate-900",children:f.label}),Jr.map(h=>Iv({columnId:h.id,rowId:f.id,sheet:c,openCells:t,clickable:n,pendingPlacement:a,onCellClick:r}))]},f.id)}),zt.jsxs("tr",{children:[zt.jsx("td",{className:"h-7 bg-transparent px-1",colSpan:1}),zt.jsx("td",{className:"h-7 bg-transparent px-1 align-middle text-left text-xs font-bold tracking-[0.1em] text-slate-700",colSpan:3,children:"TOTAL"}),zt.jsx("td",{className:"h-7 rounded-md bg-transparent px-3 align-middle text-right text-xl font-semibold text-slate-500",style:{fontFamily:"'Kalam', cursive",lineHeight:1},colSpan:2,children:xM(u)})]})]})]})})}function Iv({columnId:c,rowId:t,sheet:n,openCells:a,clickable:r,pendingPlacement:o,onCellClick:u}){const f=`${c}:${t}`,p=n[c][t]!=null,h=a.has(f),g=o?.columnId===c&&o.rowId===t;let _=null;g?_=o.value:n[c][t]!=null&&(_=n[c][t]);const v=_===0,y=g?"#065f46":"#1e293b";return zt.jsx("td",{onClick:()=>{!r||!h||p||u(c,t)},style:(g||p)&&!v?{fontFamily:"'Kalam', cursive",fontWeight:700,fontSize:"0.95rem",verticalAlign:"middle",paddingTop:"1px"}:void 0,className:`h-7 touch-manipulation select-none border border-slate-700 px-1 text-xs leading-none font-bold ${g?"bg-white text-emerald-900":p?"bg-white text-slate-900":h&&r?"cursor-pointer bg-white text-slate-900 hover:bg-slate-50 active:bg-slate-100":"bg-[#f3f4f6] text-slate-400"}`,children:v?zt.jsxs("svg",{viewBox:"0 0 50 30",className:"h-full w-full",style:{display:"block",padding:"2px 3px"},children:[zt.jsx("path",{d:"M 4,3 C 16,10 30,18 46,27",stroke:y,strokeWidth:"2.8",strokeLinecap:"round",fill:"none"}),zt.jsx("path",{d:"M 46,3 C 33,11 19,18 4,27",stroke:y,strokeWidth:"2.8",strokeLinecap:"round",fill:"none"})]}):_!==null?String(_):""},c)}function cx(c){const t=Bv.reduce((f,p)=>f+(c[p]??0),0),n=Bv.every(f=>c[f]!=null),a=t>=60?30:0,r=t+a,o=vM.reduce((f,p)=>f+(c[p]??0),0),u=r+o;return{upperTotal:t,upperComplete:n,bonus:a,secondTotal:r,thirdTotal:o,combined:u}}function xM(c){return c>0?String(c):""}class Xi{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const n=this.elements;n[0]=t.x,n[4]=t.y,n[8]=t.z}getTrace(t){t===void 0&&(t=new R);const n=this.elements;return t.x=n[0],t.y=n[4],t.z=n[8],t}vmult(t,n){n===void 0&&(n=new R);const a=this.elements,r=t.x,o=t.y,u=t.z;return n.x=a[0]*r+a[1]*o+a[2]*u,n.y=a[3]*r+a[4]*o+a[5]*u,n.z=a[6]*r+a[7]*o+a[8]*u,n}smult(t){for(let n=0;n<this.elements.length;n++)this.elements[n]*=t}mmult(t,n){n===void 0&&(n=new Xi);const a=this.elements,r=t.elements,o=n.elements,u=a[0],f=a[1],p=a[2],h=a[3],g=a[4],_=a[5],v=a[6],y=a[7],M=a[8],b=r[0],S=r[1],x=r[2],T=r[3],U=r[4],C=r[5],L=r[6],B=r[7],P=r[8];return o[0]=u*b+f*T+p*L,o[1]=u*S+f*U+p*B,o[2]=u*x+f*C+p*P,o[3]=h*b+g*T+_*L,o[4]=h*S+g*U+_*B,o[5]=h*x+g*C+_*P,o[6]=v*b+y*T+M*L,o[7]=v*S+y*U+M*B,o[8]=v*x+y*C+M*P,n}scale(t,n){n===void 0&&(n=new Xi);const a=this.elements,r=n.elements;for(let o=0;o!==3;o++)r[3*o+0]=t.x*a[3*o+0],r[3*o+1]=t.y*a[3*o+1],r[3*o+2]=t.z*a[3*o+2];return n}solve(t,n){n===void 0&&(n=new R);const a=3,r=4,o=[];let u,f;for(u=0;u<a*r;u++)o.push(0);for(u=0;u<3;u++)for(f=0;f<3;f++)o[u+r*f]=this.elements[u+3*f];o[3]=t.x,o[7]=t.y,o[11]=t.z;let p=3;const h=p;let g;const _=4;let v;do{if(u=h-p,o[u+r*u]===0){for(f=u+1;f<h;f++)if(o[u+r*f]!==0){g=_;do v=_-g,o[v+r*u]+=o[v+r*f];while(--g);break}}if(o[u+r*u]!==0)for(f=u+1;f<h;f++){const y=o[u+r*f]/o[u+r*u];g=_;do v=_-g,o[v+r*f]=v<=u?0:o[v+r*f]-o[v+r*u]*y;while(--g)}}while(--p);if(n.z=o[2*r+3]/o[2*r+2],n.y=(o[1*r+3]-o[1*r+2]*n.z)/o[1*r+1],n.x=(o[0*r+3]-o[0*r+2]*n.z-o[0*r+1]*n.y)/o[0*r+0],isNaN(n.x)||isNaN(n.y)||isNaN(n.z)||n.x===1/0||n.y===1/0||n.z===1/0)throw`Could not solve equation! Got x=[${n.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return n}e(t,n,a){if(a===void 0)return this.elements[n+3*t];this.elements[n+3*t]=a}copy(t){for(let n=0;n<t.elements.length;n++)this.elements[n]=t.elements[n];return this}toString(){let t="";for(let a=0;a<9;a++)t+=this.elements[a]+",";return t}reverse(t){t===void 0&&(t=new Xi);const n=3,a=6,r=yM;let o,u;for(o=0;o<3;o++)for(u=0;u<3;u++)r[o+a*u]=this.elements[o+3*u];r[3]=1,r[9]=0,r[15]=0,r[4]=0,r[10]=1,r[16]=0,r[5]=0,r[11]=0,r[17]=1;let f=3;const p=f;let h;const g=a;let _;do{if(o=p-f,r[o+a*o]===0){for(u=o+1;u<p;u++)if(r[o+a*u]!==0){h=g;do _=g-h,r[_+a*o]+=r[_+a*u];while(--h);break}}if(r[o+a*o]!==0)for(u=o+1;u<p;u++){const v=r[o+a*u]/r[o+a*o];h=g;do _=g-h,r[_+a*u]=_<=o?0:r[_+a*u]-r[_+a*o]*v;while(--h)}}while(--f);o=2;do{u=o-1;do{const v=r[o+a*u]/r[o+a*o];h=a;do _=a-h,r[_+a*u]=r[_+a*u]-r[_+a*o]*v;while(--h)}while(u--)}while(--o);o=2;do{const v=1/r[o+a*o];h=a;do _=a-h,r[_+a*o]=r[_+a*o]*v;while(--h)}while(o--);o=2;do{u=2;do{if(_=r[n+u+a*o],isNaN(_)||_===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(o,u,_)}while(u--)}while(o--);return t}setRotationFromQuaternion(t){const n=t.x,a=t.y,r=t.z,o=t.w,u=n+n,f=a+a,p=r+r,h=n*u,g=n*f,_=n*p,v=a*f,y=a*p,M=r*p,b=o*u,S=o*f,x=o*p,T=this.elements;return T[0]=1-(v+M),T[1]=g-x,T[2]=_+S,T[3]=g+x,T[4]=1-(h+M),T[5]=y-b,T[6]=_-S,T[7]=y+b,T[8]=1-(h+v),this}transpose(t){t===void 0&&(t=new Xi);const n=this.elements,a=t.elements;let r;return a[0]=n[0],a[4]=n[4],a[8]=n[8],r=n[1],a[1]=n[3],a[3]=r,r=n[2],a[2]=n[6],a[6]=r,r=n[5],a[5]=n[7],a[7]=r,t}}const yM=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class R{constructor(t,n,a){t===void 0&&(t=0),n===void 0&&(n=0),a===void 0&&(a=0),this.x=t,this.y=n,this.z=a}cross(t,n){n===void 0&&(n=new R);const a=t.x,r=t.y,o=t.z,u=this.x,f=this.y,p=this.z;return n.x=f*o-p*r,n.y=p*a-u*o,n.z=u*r-f*a,n}set(t,n,a){return this.x=t,this.y=n,this.z=a,this}setZero(){this.x=this.y=this.z=0}vadd(t,n){if(n)n.x=t.x+this.x,n.y=t.y+this.y,n.z=t.z+this.z;else return new R(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,n){if(n)n.x=this.x-t.x,n.y=this.y-t.y,n.z=this.z-t.z;else return new R(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new Xi([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,n=this.y,a=this.z,r=Math.sqrt(t*t+n*n+a*a);if(r>0){const o=1/r;this.x*=o,this.y*=o,this.z*=o}else this.x=0,this.y=0,this.z=0;return r}unit(t){t===void 0&&(t=new R);const n=this.x,a=this.y,r=this.z;let o=Math.sqrt(n*n+a*a+r*r);return o>0?(o=1/o,t.x=n*o,t.y=a*o,t.z=r*o):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,n=this.y,a=this.z;return Math.sqrt(t*t+n*n+a*a)}lengthSquared(){return this.dot(this)}distanceTo(t){const n=this.x,a=this.y,r=this.z,o=t.x,u=t.y,f=t.z;return Math.sqrt((o-n)*(o-n)+(u-a)*(u-a)+(f-r)*(f-r))}distanceSquared(t){const n=this.x,a=this.y,r=this.z,o=t.x,u=t.y,f=t.z;return(o-n)*(o-n)+(u-a)*(u-a)+(f-r)*(f-r)}scale(t,n){n===void 0&&(n=new R);const a=this.x,r=this.y,o=this.z;return n.x=t*a,n.y=t*r,n.z=t*o,n}vmul(t,n){return n===void 0&&(n=new R),n.x=t.x*this.x,n.y=t.y*this.y,n.z=t.z*this.z,n}addScaledVector(t,n,a){return a===void 0&&(a=new R),a.x=this.x+t*n.x,a.y=this.y+t*n.y,a.z=this.z+t*n.z,a}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new R),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,n){const a=this.length();if(a>0){const r=SM,o=1/a;r.set(this.x*o,this.y*o,this.z*o);const u=MM;Math.abs(r.x)<.9?(u.set(1,0,0),r.cross(u,t)):(u.set(0,1,0),r.cross(u,t)),r.cross(t,n)}else t.set(1,0,0),n.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,n,a){const r=this.x,o=this.y,u=this.z;a.x=r+(t.x-r)*n,a.y=o+(t.y-o)*n,a.z=u+(t.z-u)*n}almostEquals(t,n){return n===void 0&&(n=1e-6),!(Math.abs(this.x-t.x)>n||Math.abs(this.y-t.y)>n||Math.abs(this.z-t.z)>n)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,n){return this.negate(Hv),Hv.almostEquals(t,n)}clone(){return new R(this.x,this.y,this.z)}}R.ZERO=new R(0,0,0);R.UNIT_X=new R(1,0,0);R.UNIT_Y=new R(0,1,0);R.UNIT_Z=new R(0,0,1);const SM=new R,MM=new R,Hv=new R;class Mi{constructor(t){t===void 0&&(t={}),this.lowerBound=new R,this.upperBound=new R,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,n,a,r){const o=this.lowerBound,u=this.upperBound,f=a;o.copy(t[0]),f&&f.vmult(o,o),u.copy(o);for(let p=1;p<t.length;p++){let h=t[p];f&&(f.vmult(h,Gv),h=Gv),h.x>u.x&&(u.x=h.x),h.x<o.x&&(o.x=h.x),h.y>u.y&&(u.y=h.y),h.y<o.y&&(o.y=h.y),h.z>u.z&&(u.z=h.z),h.z<o.z&&(o.z=h.z)}return n&&(n.vadd(o,o),n.vadd(u,u)),r&&(o.x-=r,o.y-=r,o.z-=r,u.x+=r,u.y+=r,u.z+=r),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new Mi().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const n=this.lowerBound,a=this.upperBound,r=t.lowerBound,o=t.upperBound,u=r.x<=a.x&&a.x<=o.x||n.x<=o.x&&o.x<=a.x,f=r.y<=a.y&&a.y<=o.y||n.y<=o.y&&o.y<=a.y,p=r.z<=a.z&&a.z<=o.z||n.z<=o.z&&o.z<=a.z;return u&&f&&p}volume(){const t=this.lowerBound,n=this.upperBound;return(n.x-t.x)*(n.y-t.y)*(n.z-t.z)}contains(t){const n=this.lowerBound,a=this.upperBound,r=t.lowerBound,o=t.upperBound;return n.x<=r.x&&a.x>=o.x&&n.y<=r.y&&a.y>=o.y&&n.z<=r.z&&a.z>=o.z}getCorners(t,n,a,r,o,u,f,p){const h=this.lowerBound,g=this.upperBound;t.copy(h),n.set(g.x,h.y,h.z),a.set(g.x,g.y,h.z),r.set(h.x,g.y,g.z),o.set(g.x,h.y,g.z),u.set(h.x,g.y,h.z),f.set(h.x,h.y,g.z),p.copy(g)}toLocalFrame(t,n){const a=Vv,r=a[0],o=a[1],u=a[2],f=a[3],p=a[4],h=a[5],g=a[6],_=a[7];this.getCorners(r,o,u,f,p,h,g,_);for(let v=0;v!==8;v++){const y=a[v];t.pointToLocal(y,y)}return n.setFromPoints(a)}toWorldFrame(t,n){const a=Vv,r=a[0],o=a[1],u=a[2],f=a[3],p=a[4],h=a[5],g=a[6],_=a[7];this.getCorners(r,o,u,f,p,h,g,_);for(let v=0;v!==8;v++){const y=a[v];t.pointToWorld(y,y)}return n.setFromPoints(a)}overlapsRay(t){const{direction:n,from:a}=t,r=1/n.x,o=1/n.y,u=1/n.z,f=(this.lowerBound.x-a.x)*r,p=(this.upperBound.x-a.x)*r,h=(this.lowerBound.y-a.y)*o,g=(this.upperBound.y-a.y)*o,_=(this.lowerBound.z-a.z)*u,v=(this.upperBound.z-a.z)*u,y=Math.max(Math.max(Math.min(f,p),Math.min(h,g)),Math.min(_,v)),M=Math.min(Math.min(Math.max(f,p),Math.max(h,g)),Math.max(_,v));return!(M<0||y>M)}}const Gv=new R,Vv=[new R,new R,new R,new R,new R,new R,new R,new R];class kv{constructor(){this.matrix=[]}get(t,n){let{index:a}=t,{index:r}=n;if(r>a){const o=r;r=a,a=o}return this.matrix[(a*(a+1)>>1)+r-1]}set(t,n,a){let{index:r}=t,{index:o}=n;if(o>r){const u=o;o=r,r=u}this.matrix[(r*(r+1)>>1)+o-1]=a?1:0}reset(){for(let t=0,n=this.matrix.length;t!==n;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class ux{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;return a[t]===void 0&&(a[t]=[]),a[t].includes(n)||a[t].push(n),this}hasEventListener(t,n){if(this._listeners===void 0)return!1;const a=this._listeners;return!!(a[t]!==void 0&&a[t].includes(n))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,n){if(this._listeners===void 0)return this;const a=this._listeners;if(a[t]===void 0)return this;const r=a[t].indexOf(n);return r!==-1&&a[t].splice(r,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const a=this._listeners[t.type];if(a!==void 0){t.target=this;for(let r=0,o=a.length;r<o;r++)a[r].call(this,t)}return this}}let si=class ur{constructor(t,n,a,r){t===void 0&&(t=0),n===void 0&&(n=0),a===void 0&&(a=0),r===void 0&&(r=1),this.x=t,this.y=n,this.z=a,this.w=r}set(t,n,a,r){return this.x=t,this.y=n,this.z=a,this.w=r,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,n){const a=Math.sin(n*.5);return this.x=t.x*a,this.y=t.y*a,this.z=t.z*a,this.w=Math.cos(n*.5),this}toAxisAngle(t){t===void 0&&(t=new R),this.normalize();const n=2*Math.acos(this.w),a=Math.sqrt(1-this.w*this.w);return a<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/a,t.y=this.y/a,t.z=this.z/a),[t,n]}setFromVectors(t,n){if(t.isAntiparallelTo(n)){const a=EM,r=bM;t.tangents(a,r),this.setFromAxisAngle(a,Math.PI)}else{const a=t.cross(n);this.x=a.x,this.y=a.y,this.z=a.z,this.w=Math.sqrt(t.length()**2*n.length()**2)+t.dot(n),this.normalize()}return this}mult(t,n){n===void 0&&(n=new ur);const a=this.x,r=this.y,o=this.z,u=this.w,f=t.x,p=t.y,h=t.z,g=t.w;return n.x=a*g+u*f+r*h-o*p,n.y=r*g+u*p+o*f-a*h,n.z=o*g+u*h+a*p-r*f,n.w=u*g-a*f-r*p-o*h,n}inverse(t){t===void 0&&(t=new ur);const n=this.x,a=this.y,r=this.z,o=this.w;this.conjugate(t);const u=1/(n*n+a*a+r*r+o*o);return t.x*=u,t.y*=u,t.z*=u,t.w*=u,t}conjugate(t){return t===void 0&&(t=new ur),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,n){n===void 0&&(n=new R);const a=t.x,r=t.y,o=t.z,u=this.x,f=this.y,p=this.z,h=this.w,g=h*a+f*o-p*r,_=h*r+p*a-u*o,v=h*o+u*r-f*a,y=-u*a-f*r-p*o;return n.x=g*h+y*-u+_*-p-v*-f,n.y=_*h+y*-f+v*-u-g*-p,n.z=v*h+y*-p+g*-f-_*-u,n}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,n){n===void 0&&(n="YZX");let a,r,o;const u=this.x,f=this.y,p=this.z,h=this.w;switch(n){case"YZX":const g=u*f+p*h;if(g>.499&&(a=2*Math.atan2(u,h),r=Math.PI/2,o=0),g<-.499&&(a=-2*Math.atan2(u,h),r=-Math.PI/2,o=0),a===void 0){const _=u*u,v=f*f,y=p*p;a=Math.atan2(2*f*h-2*u*p,1-2*v-2*y),r=Math.asin(2*g),o=Math.atan2(2*u*h-2*f*p,1-2*_-2*y)}break;default:throw new Error(`Euler order ${n} not supported yet.`)}t.y=a,t.z=r,t.x=o}setFromEuler(t,n,a,r){r===void 0&&(r="XYZ");const o=Math.cos(t/2),u=Math.cos(n/2),f=Math.cos(a/2),p=Math.sin(t/2),h=Math.sin(n/2),g=Math.sin(a/2);return r==="XYZ"?(this.x=p*u*f+o*h*g,this.y=o*h*f-p*u*g,this.z=o*u*g+p*h*f,this.w=o*u*f-p*h*g):r==="YXZ"?(this.x=p*u*f+o*h*g,this.y=o*h*f-p*u*g,this.z=o*u*g-p*h*f,this.w=o*u*f+p*h*g):r==="ZXY"?(this.x=p*u*f-o*h*g,this.y=o*h*f+p*u*g,this.z=o*u*g+p*h*f,this.w=o*u*f-p*h*g):r==="ZYX"?(this.x=p*u*f-o*h*g,this.y=o*h*f+p*u*g,this.z=o*u*g-p*h*f,this.w=o*u*f+p*h*g):r==="YZX"?(this.x=p*u*f+o*h*g,this.y=o*h*f+p*u*g,this.z=o*u*g-p*h*f,this.w=o*u*f-p*h*g):r==="XZY"&&(this.x=p*u*f-o*h*g,this.y=o*h*f-p*u*g,this.z=o*u*g+p*h*f,this.w=o*u*f+p*h*g),this}clone(){return new ur(this.x,this.y,this.z,this.w)}slerp(t,n,a){a===void 0&&(a=new ur);const r=this.x,o=this.y,u=this.z,f=this.w;let p=t.x,h=t.y,g=t.z,_=t.w,v,y,M,b,S;return y=r*p+o*h+u*g+f*_,y<0&&(y=-y,p=-p,h=-h,g=-g,_=-_),1-y>1e-6?(v=Math.acos(y),M=Math.sin(v),b=Math.sin((1-n)*v)/M,S=Math.sin(n*v)/M):(b=1-n,S=n),a.x=b*r+S*p,a.y=b*o+S*h,a.z=b*u+S*g,a.w=b*f+S*_,a}integrate(t,n,a,r){r===void 0&&(r=new ur);const o=t.x*a.x,u=t.y*a.y,f=t.z*a.z,p=this.x,h=this.y,g=this.z,_=this.w,v=n*.5;return r.x+=v*(o*_+u*g-f*h),r.y+=v*(u*_+f*p-o*g),r.z+=v*(f*_+o*h-u*p),r.w+=v*(-o*p-u*h-f*g),r}};const EM=new R,bM=new R,TM={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class Zt{constructor(t){t===void 0&&(t={}),this.id=Zt.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,n){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,n,a,r){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}Zt.idCounter=0;Zt.types=TM;class Ge{constructor(t){t===void 0&&(t={}),this.position=new R,this.quaternion=new si,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,n){return Ge.pointToLocalFrame(this.position,this.quaternion,t,n)}pointToWorld(t,n){return Ge.pointToWorldFrame(this.position,this.quaternion,t,n)}vectorToWorldFrame(t,n){return n===void 0&&(n=new R),this.quaternion.vmult(t,n),n}static pointToLocalFrame(t,n,a,r){return r===void 0&&(r=new R),a.vsub(t,r),n.conjugate(qv),qv.vmult(r,r),r}static pointToWorldFrame(t,n,a,r){return r===void 0&&(r=new R),n.vmult(a,r),r.vadd(t,r),r}static vectorToWorldFrame(t,n,a){return a===void 0&&(a=new R),t.vmult(n,a),a}static vectorToLocalFrame(t,n,a,r){return r===void 0&&(r=new R),n.w*=-1,n.vmult(a,r),n.w*=-1,r}}const qv=new si;class Ul extends Zt{constructor(t){t===void 0&&(t={});const{vertices:n=[],faces:a=[],normals:r=[],axes:o,boundingSphereRadius:u}=t;super({type:Zt.types.CONVEXPOLYHEDRON}),this.vertices=n,this.faces=a,this.faceNormals=r,this.faceNormals.length===0&&this.computeNormals(),u?this.boundingSphereRadius=u:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=o?o.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,n=this.vertices,a=this.uniqueEdges;a.length=0;const r=new R;for(let o=0;o!==t.length;o++){const u=t[o],f=u.length;for(let p=0;p!==f;p++){const h=(p+1)%f;n[u[p]].vsub(n[u[h]],r),r.normalize();let g=!1;for(let _=0;_!==a.length;_++)if(a[_].almostEquals(r)||a[_].almostEquals(r)){g=!0;break}g||a.push(r.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let r=0;r<this.faces[t].length;r++)if(!this.vertices[this.faces[t][r]])throw new Error(`Vertex ${this.faces[t][r]} not found!`);const n=this.faceNormals[t]||new R;this.getFaceNormal(t,n),n.negate(n),this.faceNormals[t]=n;const a=this.vertices[this.faces[t][0]];if(n.dot(a)<0){console.error(`.faceNormals[${t}] = Vec3(${n.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let r=0;r<this.faces[t].length;r++)console.warn(`.vertices[${this.faces[t][r]}] = Vec3(${this.vertices[this.faces[t][r]].toString()})`)}}}getFaceNormal(t,n){const a=this.faces[t],r=this.vertices[a[0]],o=this.vertices[a[1]],u=this.vertices[a[2]];Ul.computeNormal(r,o,u,n)}static computeNormal(t,n,a,r){const o=new R,u=new R;n.vsub(t,u),a.vsub(n,o),o.cross(u,r),r.isZero()||r.normalize()}clipAgainstHull(t,n,a,r,o,u,f,p,h){const g=new R;let _=-1,v=-Number.MAX_VALUE;for(let M=0;M<a.faces.length;M++){g.copy(a.faceNormals[M]),o.vmult(g,g);const b=g.dot(u);b>v&&(v=b,_=M)}const y=[];for(let M=0;M<a.faces[_].length;M++){const b=a.vertices[a.faces[_][M]],S=new R;S.copy(b),o.vmult(S,S),r.vadd(S,S),y.push(S)}_>=0&&this.clipFaceAgainstHull(u,t,n,y,f,p,h)}findSeparatingAxis(t,n,a,r,o,u,f,p){const h=new R,g=new R,_=new R,v=new R,y=new R,M=new R;let b=Number.MAX_VALUE;const S=this;if(S.uniqueAxes)for(let x=0;x!==S.uniqueAxes.length;x++){a.vmult(S.uniqueAxes[x],h);const T=S.testSepAxis(h,t,n,a,r,o);if(T===!1)return!1;T<b&&(b=T,u.copy(h))}else{const x=f?f.length:S.faces.length;for(let T=0;T<x;T++){const U=f?f[T]:T;h.copy(S.faceNormals[U]),a.vmult(h,h);const C=S.testSepAxis(h,t,n,a,r,o);if(C===!1)return!1;C<b&&(b=C,u.copy(h))}}if(t.uniqueAxes)for(let x=0;x!==t.uniqueAxes.length;x++){o.vmult(t.uniqueAxes[x],g);const T=S.testSepAxis(g,t,n,a,r,o);if(T===!1)return!1;T<b&&(b=T,u.copy(g))}else{const x=p?p.length:t.faces.length;for(let T=0;T<x;T++){const U=p?p[T]:T;g.copy(t.faceNormals[U]),o.vmult(g,g);const C=S.testSepAxis(g,t,n,a,r,o);if(C===!1)return!1;C<b&&(b=C,u.copy(g))}}for(let x=0;x!==S.uniqueEdges.length;x++){a.vmult(S.uniqueEdges[x],v);for(let T=0;T!==t.uniqueEdges.length;T++)if(o.vmult(t.uniqueEdges[T],y),v.cross(y,M),!M.almostZero()){M.normalize();const U=S.testSepAxis(M,t,n,a,r,o);if(U===!1)return!1;U<b&&(b=U,u.copy(M))}}return r.vsub(n,_),_.dot(u)>0&&u.negate(u),!0}testSepAxis(t,n,a,r,o,u){const f=this;Ul.project(f,t,a,r,jh),Ul.project(n,t,o,u,Zh);const p=jh[0],h=jh[1],g=Zh[0],_=Zh[1];if(p<_||g<h)return!1;const v=p-_,y=g-h;return v<y?v:y}calculateLocalInertia(t,n){const a=new R,r=new R;this.computeLocalAABB(r,a);const o=a.x-r.x,u=a.y-r.y,f=a.z-r.z;n.x=1/12*t*(2*u*2*u+2*f*2*f),n.y=1/12*t*(2*o*2*o+2*f*2*f),n.z=1/12*t*(2*u*2*u+2*o*2*o)}getPlaneConstantOfFace(t){const n=this.faces[t],a=this.faceNormals[t],r=this.vertices[n[0]];return-a.dot(r)}clipFaceAgainstHull(t,n,a,r,o,u,f){const p=new R,h=new R,g=new R,_=new R,v=new R,y=new R,M=new R,b=new R,S=this,x=[],T=r,U=x;let C=-1,L=Number.MAX_VALUE;for(let O=0;O<S.faces.length;O++){p.copy(S.faceNormals[O]),a.vmult(p,p);const H=p.dot(t);H<L&&(L=H,C=O)}if(C<0)return;const B=S.faces[C];B.connectedFaces=[];for(let O=0;O<S.faces.length;O++)for(let H=0;H<S.faces[O].length;H++)B.indexOf(S.faces[O][H])!==-1&&O!==C&&B.connectedFaces.indexOf(O)===-1&&B.connectedFaces.push(O);const P=B.length;for(let O=0;O<P;O++){const H=S.vertices[B[O]],$=S.vertices[B[(O+1)%P]];H.vsub($,h),g.copy(h),a.vmult(g,g),n.vadd(g,g),_.copy(this.faceNormals[C]),a.vmult(_,_),n.vadd(_,_),g.cross(_,v),v.negate(v),y.copy(H),a.vmult(y,y),n.vadd(y,y);const V=B.connectedFaces[O];M.copy(this.faceNormals[V]);const K=this.getPlaneConstantOfFace(V);b.copy(M),a.vmult(b,b);const W=K-b.dot(n);for(this.clipFaceAgainstPlane(T,U,b,W);T.length;)T.shift();for(;U.length;)T.push(U.shift())}M.copy(this.faceNormals[C]);const q=this.getPlaneConstantOfFace(C);b.copy(M),a.vmult(b,b);const w=q-b.dot(n);for(let O=0;O<T.length;O++){let H=b.dot(T[O])+w;if(H<=o&&(console.log(`clamped: depth=${H} to minDist=${o}`),H=o),H<=u){const $=T[O];if(H<=1e-6){const V={point:$,normal:b,depth:H};f.push(V)}}}}clipFaceAgainstPlane(t,n,a,r){let o,u;const f=t.length;if(f<2)return n;let p=t[t.length-1],h=t[0];o=a.dot(p)+r;for(let g=0;g<f;g++){if(h=t[g],u=a.dot(h)+r,o<0)if(u<0){const _=new R;_.copy(h),n.push(_)}else{const _=new R;p.lerp(h,o/(o-u),_),n.push(_)}else if(u<0){const _=new R;p.lerp(h,o/(o-u),_),n.push(_),n.push(h)}p=h,o=u}return n}computeWorldVertices(t,n){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new R);const a=this.vertices,r=this.worldVertices;for(let o=0;o!==this.vertices.length;o++)n.vmult(a[o],r[o]),t.vadd(r[o],r[o]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,n){const a=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),n.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let r=0;r<this.vertices.length;r++){const o=a[r];o.x<t.x?t.x=o.x:o.x>n.x&&(n.x=o.x),o.y<t.y?t.y=o.y:o.y>n.y&&(n.y=o.y),o.z<t.z?t.z=o.z:o.z>n.z&&(n.z=o.z)}}computeWorldFaceNormals(t){const n=this.faceNormals.length;for(;this.worldFaceNormals.length<n;)this.worldFaceNormals.push(new R);const a=this.faceNormals,r=this.worldFaceNormals;for(let o=0;o!==n;o++)t.vmult(a[o],r[o]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const n=this.vertices;for(let a=0;a!==n.length;a++){const r=n[a].lengthSquared();r>t&&(t=r)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,n,a,r){const o=this.vertices;let u,f,p,h,g,_,v=new R;for(let y=0;y<o.length;y++){v.copy(o[y]),n.vmult(v,v),t.vadd(v,v);const M=v;(u===void 0||M.x<u)&&(u=M.x),(h===void 0||M.x>h)&&(h=M.x),(f===void 0||M.y<f)&&(f=M.y),(g===void 0||M.y>g)&&(g=M.y),(p===void 0||M.z<p)&&(p=M.z),(_===void 0||M.z>_)&&(_=M.z)}a.set(u,f,p),r.set(h,g,_)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new R);const n=this.vertices;for(let a=0;a<n.length;a++)t.vadd(n[a],t);return t.scale(1/n.length,t),t}transformAllPoints(t,n){const a=this.vertices.length,r=this.vertices;if(n){for(let o=0;o<a;o++){const u=r[o];n.vmult(u,u)}for(let o=0;o<this.faceNormals.length;o++){const u=this.faceNormals[o];n.vmult(u,u)}}if(t)for(let o=0;o<a;o++){const u=r[o];u.vadd(t,u)}}pointIsInside(t){const n=this.vertices,a=this.faces,r=this.faceNormals,o=new R;this.getAveragePointLocal(o);for(let u=0;u<this.faces.length;u++){let f=r[u];const p=n[a[u][0]],h=new R;t.vsub(p,h);const g=f.dot(h),_=new R;o.vsub(p,_);const v=f.dot(_);if(g<0&&v>0||g>0&&v<0)return!1}return-1}static project(t,n,a,r,o){const u=t.vertices.length,f=AM;let p=0,h=0;const g=wM,_=t.vertices;g.setZero(),Ge.vectorToLocalFrame(a,r,n,f),Ge.pointToLocalFrame(a,r,g,g);const v=g.dot(f);h=p=_[0].dot(f);for(let y=1;y<u;y++){const M=_[y].dot(f);M>p&&(p=M),M<h&&(h=M)}if(h-=v,p-=v,h>p){const y=h;h=p,p=y}o[0]=p,o[1]=h}}const jh=[],Zh=[];new R;const AM=new R,wM=new R;class gr extends Zt{constructor(t){super({type:Zt.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,n=this.halfExtents.y,a=this.halfExtents.z,r=R,o=[new r(-t,-n,-a),new r(t,-n,-a),new r(t,n,-a),new r(-t,n,-a),new r(-t,-n,a),new r(t,-n,a),new r(t,n,a),new r(-t,n,a)],u=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],f=[new r(0,0,1),new r(0,1,0),new r(1,0,0)],p=new Ul({vertices:o,faces:u,axes:f});this.convexPolyhedronRepresentation=p,p.material=this.material}calculateLocalInertia(t,n){return n===void 0&&(n=new R),gr.calculateInertia(this.halfExtents,t,n),n}static calculateInertia(t,n,a){const r=t;a.x=1/12*n*(2*r.y*2*r.y+2*r.z*2*r.z),a.y=1/12*n*(2*r.x*2*r.x+2*r.z*2*r.z),a.z=1/12*n*(2*r.y*2*r.y+2*r.x*2*r.x)}getSideNormals(t,n){const a=t,r=this.halfExtents;if(a[0].set(r.x,0,0),a[1].set(0,r.y,0),a[2].set(0,0,r.z),a[3].set(-r.x,0,0),a[4].set(0,-r.y,0),a[5].set(0,0,-r.z),n!==void 0)for(let o=0;o!==a.length;o++)n.vmult(a[o],a[o]);return a}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,n,a){const r=this.halfExtents,o=[[r.x,r.y,r.z],[-r.x,r.y,r.z],[-r.x,-r.y,r.z],[-r.x,-r.y,-r.z],[r.x,-r.y,-r.z],[r.x,r.y,-r.z],[-r.x,r.y,-r.z],[r.x,-r.y,r.z]];for(let u=0;u<o.length;u++)ws.set(o[u][0],o[u][1],o[u][2]),n.vmult(ws,ws),t.vadd(ws,ws),a(ws.x,ws.y,ws.z)}calculateWorldAABB(t,n,a,r){const o=this.halfExtents;ia[0].set(o.x,o.y,o.z),ia[1].set(-o.x,o.y,o.z),ia[2].set(-o.x,-o.y,o.z),ia[3].set(-o.x,-o.y,-o.z),ia[4].set(o.x,-o.y,-o.z),ia[5].set(o.x,o.y,-o.z),ia[6].set(-o.x,o.y,-o.z),ia[7].set(o.x,-o.y,o.z);const u=ia[0];n.vmult(u,u),t.vadd(u,u),r.copy(u),a.copy(u);for(let f=1;f<8;f++){const p=ia[f];n.vmult(p,p),t.vadd(p,p);const h=p.x,g=p.y,_=p.z;h>r.x&&(r.x=h),g>r.y&&(r.y=g),_>r.z&&(r.z=_),h<a.x&&(a.x=h),g<a.y&&(a.y=g),_<a.z&&(a.z=_)}}}const ws=new R,ia=[new R,new R,new R,new R,new R,new R,new R,new R],Np={DYNAMIC:1,STATIC:2,KINEMATIC:4},Up={AWAKE:0,SLEEPY:1,SLEEPING:2};class Vt extends ux{constructor(t){t===void 0&&(t={}),super(),this.id=Vt.idCounter++,this.index=-1,this.world=null,this.vlambda=new R,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new R,this.previousPosition=new R,this.interpolatedPosition=new R,this.initPosition=new R,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new R,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new R,this.force=new R;const n=typeof t.mass=="number"?t.mass:0;this.mass=n,this.invMass=n>0?1/n:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=n<=0?Vt.STATIC:Vt.DYNAMIC,typeof t.type==typeof Vt.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=Vt.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new R,this.quaternion=new si,this.initQuaternion=new si,this.previousQuaternion=new si,this.interpolatedQuaternion=new si,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new R,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new R,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new R,this.invInertia=new R,this.invInertiaWorld=new Xi,this.invMassSolve=0,this.invInertiaSolve=new R,this.invInertiaWorldSolve=new Xi,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new R(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new R(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new Mi,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new R,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=Vt.AWAKE,this.wakeUpAfterNarrowphase=!1,t===Vt.SLEEPING&&this.dispatchEvent(Vt.wakeupEvent)}sleep(){this.sleepState=Vt.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const n=this.sleepState,a=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),r=this.sleepSpeedLimit**2;n===Vt.AWAKE&&a<r?(this.sleepState=Vt.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(Vt.sleepyEvent)):n===Vt.SLEEPY&&a>r?this.wakeUp():n===Vt.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(Vt.sleepEvent))}}updateSolveMassProperties(){this.sleepState===Vt.SLEEPING||this.type===Vt.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,n){return n===void 0&&(n=new R),t.vsub(this.position,n),this.quaternion.conjugate().vmult(n,n),n}vectorToLocalFrame(t,n){return n===void 0&&(n=new R),this.quaternion.conjugate().vmult(t,n),n}pointToWorldFrame(t,n){return n===void 0&&(n=new R),this.quaternion.vmult(t,n),n.vadd(this.position,n),n}vectorToWorldFrame(t,n){return n===void 0&&(n=new R),this.quaternion.vmult(t,n),n}addShape(t,n,a){const r=new R,o=new si;return n&&r.copy(n),a&&o.copy(a),this.shapes.push(t),this.shapeOffsets.push(r),this.shapeOrientations.push(o),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const n=this.shapes.indexOf(t);return n===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(n,1),this.shapeOffsets.splice(n,1),this.shapeOrientations.splice(n,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,n=this.shapeOffsets,a=t.length;let r=0;for(let o=0;o!==a;o++){const u=t[o];u.updateBoundingSphereRadius();const f=n[o].length(),p=u.boundingSphereRadius;f+p>r&&(r=f+p)}this.boundingRadius=r}updateAABB(){const t=this.shapes,n=this.shapeOffsets,a=this.shapeOrientations,r=t.length,o=RM,u=CM,f=this.quaternion,p=this.aabb,h=DM;for(let g=0;g!==r;g++){const _=t[g];f.vmult(n[g],o),o.vadd(this.position,o),f.mult(a[g],u),_.calculateWorldAABB(o,u,h.lowerBound,h.upperBound),g===0?p.copy(h):p.extend(h)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const n=this.invInertia;if(!(n.x===n.y&&n.y===n.z&&!t)){const a=NM,r=UM;a.setRotationFromQuaternion(this.quaternion),a.transpose(r),a.scale(n,a),a.mmult(r,this.invInertiaWorld)}}applyForce(t,n){if(n===void 0&&(n=new R),this.type!==Vt.DYNAMIC)return;this.sleepState===Vt.SLEEPING&&this.wakeUp();const a=LM;n.cross(t,a),this.force.vadd(t,this.force),this.torque.vadd(a,this.torque)}applyLocalForce(t,n){if(n===void 0&&(n=new R),this.type!==Vt.DYNAMIC)return;const a=OM,r=zM;this.vectorToWorldFrame(t,a),this.vectorToWorldFrame(n,r),this.applyForce(a,r)}applyTorque(t){this.type===Vt.DYNAMIC&&(this.sleepState===Vt.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,n){if(n===void 0&&(n=new R),this.type!==Vt.DYNAMIC)return;this.sleepState===Vt.SLEEPING&&this.wakeUp();const a=n,r=PM;r.copy(t),r.scale(this.invMass,r),this.velocity.vadd(r,this.velocity);const o=BM;a.cross(t,o),this.invInertiaWorld.vmult(o,o),this.angularVelocity.vadd(o,this.angularVelocity)}applyLocalImpulse(t,n){if(n===void 0&&(n=new R),this.type!==Vt.DYNAMIC)return;const a=FM,r=IM;this.vectorToWorldFrame(t,a),this.vectorToWorldFrame(n,r),this.applyImpulse(a,r)}updateMassProperties(){const t=HM;this.invMass=this.mass>0?1/this.mass:0;const n=this.inertia,a=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),gr.calculateInertia(t,this.mass,n),this.invInertia.set(n.x>0&&!a?1/n.x:0,n.y>0&&!a?1/n.y:0,n.z>0&&!a?1/n.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,n){const a=new R;return t.vsub(this.position,a),this.angularVelocity.cross(a,n),this.velocity.vadd(n,n),n}integrate(t,n,a){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===Vt.DYNAMIC||this.type===Vt.KINEMATIC)||this.sleepState===Vt.SLEEPING)return;const r=this.velocity,o=this.angularVelocity,u=this.position,f=this.force,p=this.torque,h=this.quaternion,g=this.invMass,_=this.invInertiaWorld,v=this.linearFactor,y=g*t;r.x+=f.x*y*v.x,r.y+=f.y*y*v.y,r.z+=f.z*y*v.z;const M=_.elements,b=this.angularFactor,S=p.x*b.x,x=p.y*b.y,T=p.z*b.z;o.x+=t*(M[0]*S+M[1]*x+M[2]*T),o.y+=t*(M[3]*S+M[4]*x+M[5]*T),o.z+=t*(M[6]*S+M[7]*x+M[8]*T),u.x+=r.x*t,u.y+=r.y*t,u.z+=r.z*t,h.integrate(this.angularVelocity,t,this.angularFactor,h),n&&(a?h.normalizeFast():h.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}Vt.idCounter=0;Vt.COLLIDE_EVENT_NAME="collide";Vt.DYNAMIC=Np.DYNAMIC;Vt.STATIC=Np.STATIC;Vt.KINEMATIC=Np.KINEMATIC;Vt.AWAKE=Up.AWAKE;Vt.SLEEPY=Up.SLEEPY;Vt.SLEEPING=Up.SLEEPING;Vt.wakeupEvent={type:"wakeup"};Vt.sleepyEvent={type:"sleepy"};Vt.sleepEvent={type:"sleep"};const RM=new R,CM=new si,DM=new Mi,NM=new Xi,UM=new Xi;new Xi;const LM=new R,OM=new R,zM=new R,PM=new R,BM=new R,FM=new R,IM=new R,HM=new R;class fx{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,n,a){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,n){return!((t.collisionFilterGroup&n.collisionFilterMask)===0||(n.collisionFilterGroup&t.collisionFilterMask)===0||((t.type&Vt.STATIC)!==0||t.sleepState===Vt.SLEEPING)&&((n.type&Vt.STATIC)!==0||n.sleepState===Vt.SLEEPING))}intersectionTest(t,n,a,r){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,n,a,r):this.doBoundingSphereBroadphase(t,n,a,r)}doBoundingSphereBroadphase(t,n,a,r){const o=GM;n.position.vsub(t.position,o);const u=(t.boundingRadius+n.boundingRadius)**2;o.lengthSquared()<u&&(a.push(t),r.push(n))}doBoundingBoxBroadphase(t,n,a,r){t.aabbNeedsUpdate&&t.updateAABB(),n.aabbNeedsUpdate&&n.updateAABB(),t.aabb.overlaps(n.aabb)&&(a.push(t),r.push(n))}makePairsUnique(t,n){const a=VM,r=kM,o=qM,u=t.length;for(let f=0;f!==u;f++)r[f]=t[f],o[f]=n[f];t.length=0,n.length=0;for(let f=0;f!==u;f++){const p=r[f].id,h=o[f].id,g=p<h?`${p},${h}`:`${h},${p}`;a[g]=f,a.keys.push(g)}for(let f=0;f!==a.keys.length;f++){const p=a.keys.pop(),h=a[p];t.push(r[h]),n.push(o[h]),delete a[p]}}setWorld(t){}static boundingSphereCheck(t,n){const a=new R;t.position.vsub(n.position,a);const r=t.shapes[0],o=n.shapes[0];return Math.pow(r.boundingSphereRadius+o.boundingSphereRadius,2)>a.lengthSquared()}aabbQuery(t,n,a){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const GM=new R;new R;new si;new R;const VM={keys:[]},kM=[],qM=[];new R;new R;new R;class XM extends fx{constructor(){super()}collisionPairs(t,n,a){const r=t.bodies,o=r.length;let u,f;for(let p=0;p!==o;p++)for(let h=0;h!==p;h++)u=r[p],f=r[h],this.needBroadphaseCollision(u,f)&&this.intersectionTest(u,f,n,a)}aabbQuery(t,n,a){a===void 0&&(a=[]);for(let r=0;r<t.bodies.length;r++){const o=t.bodies[r];o.aabbNeedsUpdate&&o.updateAABB(),o.aabb.overlaps(n)&&a.push(o)}return a}}class Cu{constructor(){this.rayFromWorld=new R,this.rayToWorld=new R,this.hitNormalWorld=new R,this.hitPointWorld=new R,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,n,a,r,o,u,f){this.rayFromWorld.copy(t),this.rayToWorld.copy(n),this.hitNormalWorld.copy(a),this.hitPointWorld.copy(r),this.shape=o,this.body=u,this.distance=f}}let hx,dx,px,mx,gx,vx,_x;const Lp={CLOSEST:1,ANY:2,ALL:4};hx=Zt.types.SPHERE;dx=Zt.types.PLANE;px=Zt.types.BOX;mx=Zt.types.CYLINDER;gx=Zt.types.CONVEXPOLYHEDRON;vx=Zt.types.HEIGHTFIELD;_x=Zt.types.TRIMESH;let fa=class oa{get[hx](){return this._intersectSphere}get[dx](){return this._intersectPlane}get[px](){return this._intersectBox}get[mx](){return this._intersectConvex}get[gx](){return this._intersectConvex}get[vx](){return this._intersectHeightfield}get[_x](){return this._intersectTrimesh}constructor(t,n){t===void 0&&(t=new R),n===void 0&&(n=new R),this.from=t.clone(),this.to=n.clone(),this.direction=new R,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=oa.ANY,this.result=new Cu,this.hasHit=!1,this.callback=a=>{}}intersectWorld(t,n){return this.mode=n.mode||oa.ANY,this.result=n.result||new Cu,this.skipBackfaces=!!n.skipBackfaces,this.collisionFilterMask=typeof n.collisionFilterMask<"u"?n.collisionFilterMask:-1,this.collisionFilterGroup=typeof n.collisionFilterGroup<"u"?n.collisionFilterGroup:-1,this.checkCollisionResponse=typeof n.checkCollisionResponse<"u"?n.checkCollisionResponse:!0,n.from&&this.from.copy(n.from),n.to&&this.to.copy(n.to),this.callback=n.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Xv),Kh.length=0,t.broadphase.aabbQuery(t,Xv,Kh),this.intersectBodies(Kh),this.hasHit}intersectBody(t,n){n&&(this.result=n,this.updateDirection());const a=this.checkCollisionResponse;if(a&&!t.collisionResponse||(this.collisionFilterGroup&t.collisionFilterMask)===0||(t.collisionFilterGroup&this.collisionFilterMask)===0)return;const r=WM,o=YM;for(let u=0,f=t.shapes.length;u<f;u++){const p=t.shapes[u];if(!(a&&!p.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[u],o),t.quaternion.vmult(t.shapeOffsets[u],r),r.vadd(t.position,r),this.intersectShape(p,o,r,t),this.result.shouldStop))break}}intersectBodies(t,n){n&&(this.result=n,this.updateDirection());for(let a=0,r=t.length;!this.result.shouldStop&&a<r;a++)this.intersectBody(t[a])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,n,a,r){const o=this.from;if(oE(o,this.direction,a)>t.boundingSphereRadius)return;const f=this[t.type];f&&f.call(this,t,n,a,r,t)}_intersectBox(t,n,a,r,o){return this._intersectConvex(t.convexPolyhedronRepresentation,n,a,r,o)}_intersectPlane(t,n,a,r,o){const u=this.from,f=this.to,p=this.direction,h=new R(0,0,1);n.vmult(h,h);const g=new R;u.vsub(a,g);const _=g.dot(h);f.vsub(a,g);const v=g.dot(h);if(_*v>0||u.distanceTo(f)<_)return;const y=h.dot(p);if(Math.abs(y)<this.precision)return;const M=new R,b=new R,S=new R;u.vsub(a,M);const x=-h.dot(M)/y;p.scale(x,b),u.vadd(b,S),this.reportIntersection(h,S,o,r,-1)}getAABB(t){const{lowerBound:n,upperBound:a}=t,r=this.to,o=this.from;n.x=Math.min(r.x,o.x),n.y=Math.min(r.y,o.y),n.z=Math.min(r.z,o.z),a.x=Math.max(r.x,o.x),a.y=Math.max(r.y,o.y),a.z=Math.max(r.z,o.z)}_intersectHeightfield(t,n,a,r,o){t.data,t.elementSize;const u=jM;u.from.copy(this.from),u.to.copy(this.to),Ge.pointToLocalFrame(a,n,u.from,u.from),Ge.pointToLocalFrame(a,n,u.to,u.to),u.updateDirection();const f=ZM;let p,h,g,_;p=h=0,g=_=t.data.length-1;const v=new Mi;u.getAABB(v),t.getIndexOfPosition(v.lowerBound.x,v.lowerBound.y,f,!0),p=Math.max(p,f[0]),h=Math.max(h,f[1]),t.getIndexOfPosition(v.upperBound.x,v.upperBound.y,f,!0),g=Math.min(g,f[0]+1),_=Math.min(_,f[1]+1);for(let y=p;y<g;y++)for(let M=h;M<_;M++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(y,M,v),!!v.overlapsRay(u)){if(t.getConvexTrianglePillar(y,M,!1),Ge.pointToWorldFrame(a,n,t.pillarOffset,Qc),this._intersectConvex(t.pillarConvex,n,Qc,r,o,Wv),this.result.shouldStop)return;t.getConvexTrianglePillar(y,M,!0),Ge.pointToWorldFrame(a,n,t.pillarOffset,Qc),this._intersectConvex(t.pillarConvex,n,Qc,r,o,Wv)}}}_intersectSphere(t,n,a,r,o){const u=this.from,f=this.to,p=t.radius,h=(f.x-u.x)**2+(f.y-u.y)**2+(f.z-u.z)**2,g=2*((f.x-u.x)*(u.x-a.x)+(f.y-u.y)*(u.y-a.y)+(f.z-u.z)*(u.z-a.z)),_=(u.x-a.x)**2+(u.y-a.y)**2+(u.z-a.z)**2-p**2,v=g**2-4*h*_,y=KM,M=QM;if(!(v<0))if(v===0)u.lerp(f,v,y),y.vsub(a,M),M.normalize(),this.reportIntersection(M,y,o,r,-1);else{const b=(-g-Math.sqrt(v))/(2*h),S=(-g+Math.sqrt(v))/(2*h);if(b>=0&&b<=1&&(u.lerp(f,b,y),y.vsub(a,M),M.normalize(),this.reportIntersection(M,y,o,r,-1)),this.result.shouldStop)return;S>=0&&S<=1&&(u.lerp(f,S,y),y.vsub(a,M),M.normalize(),this.reportIntersection(M,y,o,r,-1))}}_intersectConvex(t,n,a,r,o,u){const f=JM,p=Yv,h=u&&u.faceList||null,g=t.faces,_=t.vertices,v=t.faceNormals,y=this.direction,M=this.from,b=this.to,S=M.distanceTo(b),x=h?h.length:g.length,T=this.result;for(let U=0;!T.shouldStop&&U<x;U++){const C=h?h[U]:U,L=g[C],B=v[C],P=n,q=a;p.copy(_[L[0]]),P.vmult(p,p),p.vadd(q,p),p.vsub(M,p),P.vmult(B,f);const w=y.dot(f);if(Math.abs(w)<this.precision)continue;const O=f.dot(p)/w;if(!(O<0)){y.scale(O,ii),ii.vadd(M,ii),Ii.copy(_[L[0]]),P.vmult(Ii,Ii),q.vadd(Ii,Ii);for(let H=1;!T.shouldStop&&H<L.length-1;H++){aa.copy(_[L[H]]),sa.copy(_[L[H+1]]),P.vmult(aa,aa),P.vmult(sa,sa),q.vadd(aa,aa),q.vadd(sa,sa);const $=ii.distanceTo(M);!(oa.pointInTriangle(ii,Ii,aa,sa)||oa.pointInTriangle(ii,aa,Ii,sa))||$>S||this.reportIntersection(f,ii,o,r,C)}}}}_intersectTrimesh(t,n,a,r,o,u){const f=$M,p=sE,h=rE,g=Yv,_=tE,v=eE,y=nE,M=aE,b=iE,S=t.indices;t.vertices;const x=this.from,T=this.to,U=this.direction;h.position.copy(a),h.quaternion.copy(n),Ge.vectorToLocalFrame(a,n,U,_),Ge.pointToLocalFrame(a,n,x,v),Ge.pointToLocalFrame(a,n,T,y),y.x*=t.scale.x,y.y*=t.scale.y,y.z*=t.scale.z,v.x*=t.scale.x,v.y*=t.scale.y,v.z*=t.scale.z,y.vsub(v,_),_.normalize();const C=v.distanceSquared(y);t.tree.rayQuery(this,h,p);for(let L=0,B=p.length;!this.result.shouldStop&&L!==B;L++){const P=p[L];t.getNormal(P,f),t.getVertex(S[P*3],Ii),Ii.vsub(v,g);const q=_.dot(f),w=f.dot(g)/q;if(w<0)continue;_.scale(w,ii),ii.vadd(v,ii),t.getVertex(S[P*3+1],aa),t.getVertex(S[P*3+2],sa);const O=ii.distanceSquared(v);!(oa.pointInTriangle(ii,aa,Ii,sa)||oa.pointInTriangle(ii,Ii,aa,sa))||O>C||(Ge.vectorToWorldFrame(n,f,b),Ge.pointToWorldFrame(a,n,ii,M),this.reportIntersection(b,M,o,r,P))}p.length=0}reportIntersection(t,n,a,r,o){const u=this.from,f=this.to,p=u.distanceTo(n),h=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(h.hitFaceIndex=typeof o<"u"?o:-1,this.mode){case oa.ALL:this.hasHit=!0,h.set(u,f,t,n,a,r,p),h.hasHit=!0,this.callback(h);break;case oa.CLOSEST:(p<h.distance||!h.hasHit)&&(this.hasHit=!0,h.hasHit=!0,h.set(u,f,t,n,a,r,p));break;case oa.ANY:this.hasHit=!0,h.hasHit=!0,h.set(u,f,t,n,a,r,p),h.shouldStop=!0;break}}static pointInTriangle(t,n,a,r){r.vsub(n,dr),a.vsub(n,_l),t.vsub(n,Qh);const o=dr.dot(dr),u=dr.dot(_l),f=dr.dot(Qh),p=_l.dot(_l),h=_l.dot(Qh);let g,_;return(g=p*f-u*h)>=0&&(_=o*h-u*f)>=0&&g+_<o*p-u*u}};fa.CLOSEST=Lp.CLOSEST;fa.ANY=Lp.ANY;fa.ALL=Lp.ALL;const Xv=new Mi,Kh=[],_l=new R,Qh=new R,WM=new R,YM=new si,ii=new R,Ii=new R,aa=new R,sa=new R;new R;new Cu;const Wv={faceList:[0]},Qc=new R,jM=new fa,ZM=[],KM=new R,QM=new R,JM=new R;new R;new R;const Yv=new R,$M=new R,tE=new R,eE=new R,nE=new R,iE=new R,aE=new R;new Mi;const sE=[],rE=new Ge,dr=new R,Jc=new R;function oE(c,t,n){n.vsub(c,dr);const a=dr.dot(t);return t.scale(a,Jc),Jc.vadd(c,Jc),n.distanceTo(Jc)}class vo extends fx{static checkBounds(t,n,a){let r,o;a===0?(r=t.position.x,o=n.position.x):a===1?(r=t.position.y,o=n.position.y):a===2&&(r=t.position.z,o=n.position.z);const u=t.boundingRadius,f=n.boundingRadius,p=r+u;return o-f<p}static insertionSortX(t){for(let n=1,a=t.length;n<a;n++){const r=t[n];let o;for(o=n-1;o>=0&&!(t[o].aabb.lowerBound.x<=r.aabb.lowerBound.x);o--)t[o+1]=t[o];t[o+1]=r}return t}static insertionSortY(t){for(let n=1,a=t.length;n<a;n++){const r=t[n];let o;for(o=n-1;o>=0&&!(t[o].aabb.lowerBound.y<=r.aabb.lowerBound.y);o--)t[o+1]=t[o];t[o+1]=r}return t}static insertionSortZ(t){for(let n=1,a=t.length;n<a;n++){const r=t[n];let o;for(o=n-1;o>=0&&!(t[o].aabb.lowerBound.z<=r.aabb.lowerBound.z);o--)t[o+1]=t[o];t[o+1]=r}return t}constructor(t){super(),this.axisList=[],this.world=null,this.axisIndex=0;const n=this.axisList;this._addBodyHandler=a=>{n.push(a.body)},this._removeBodyHandler=a=>{const r=n.indexOf(a.body);r!==-1&&n.splice(r,1)},t&&this.setWorld(t)}setWorld(t){this.axisList.length=0;for(let n=0;n<t.bodies.length;n++)this.axisList.push(t.bodies[n]);t.removeEventListener("addBody",this._addBodyHandler),t.removeEventListener("removeBody",this._removeBodyHandler),t.addEventListener("addBody",this._addBodyHandler),t.addEventListener("removeBody",this._removeBodyHandler),this.world=t,this.dirty=!0}collisionPairs(t,n,a){const r=this.axisList,o=r.length,u=this.axisIndex;let f,p;for(this.dirty&&(this.sortList(),this.dirty=!1),f=0;f!==o;f++){const h=r[f];for(p=f+1;p<o;p++){const g=r[p];if(this.needBroadphaseCollision(h,g)){if(!vo.checkBounds(h,g,u))break;this.intersectionTest(h,g,n,a)}}}}sortList(){const t=this.axisList,n=this.axisIndex,a=t.length;for(let r=0;r!==a;r++){const o=t[r];o.aabbNeedsUpdate&&o.updateAABB()}n===0?vo.insertionSortX(t):n===1?vo.insertionSortY(t):n===2&&vo.insertionSortZ(t)}autoDetectAxis(){let t=0,n=0,a=0,r=0,o=0,u=0;const f=this.axisList,p=f.length,h=1/p;for(let y=0;y!==p;y++){const M=f[y],b=M.position.x;t+=b,n+=b*b;const S=M.position.y;a+=S,r+=S*S;const x=M.position.z;o+=x,u+=x*x}const g=n-t*t*h,_=r-a*a*h,v=u-o*o*h;g>_?g>v?this.axisIndex=0:this.axisIndex=2:_>v?this.axisIndex=1:this.axisIndex=2}aabbQuery(t,n,a){a===void 0&&(a=[]),this.dirty&&(this.sortList(),this.dirty=!1);const r=this.axisIndex;let o="x";r===1&&(o="y"),r===2&&(o="z");const u=this.axisList;n.lowerBound[o],n.upperBound[o];for(let f=0;f<u.length;f++){const p=u[f];p.aabbNeedsUpdate&&p.updateAABB(),p.aabb.overlaps(n)&&a.push(p)}return a}}class lE{static defaults(t,n){t===void 0&&(t={});for(let a in n)a in t||(t[a]=n[a]);return t}}class jv{constructor(){this.spatial=new R,this.rotational=new R}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,n){return t.dot(this.spatial)+n.dot(this.rotational)}}class Bl{constructor(t,n,a,r){a===void 0&&(a=-1e6),r===void 0&&(r=1e6),this.id=Bl.idCounter++,this.minForce=a,this.maxForce=r,this.bi=t,this.bj=n,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new jv,this.jacobianElementB=new jv,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,n,a){const r=n,o=t,u=a;this.a=4/(u*(1+4*r)),this.b=4*r/(1+4*r),this.eps=4/(u*u*o*(1+4*r))}computeB(t,n,a){const r=this.computeGW(),o=this.computeGq(),u=this.computeGiMf();return-o*t-r*n-u*a}computeGq(){const t=this.jacobianElementA,n=this.jacobianElementB,a=this.bi,r=this.bj,o=a.position,u=r.position;return t.spatial.dot(o)+n.spatial.dot(u)}computeGW(){const t=this.jacobianElementA,n=this.jacobianElementB,a=this.bi,r=this.bj,o=a.velocity,u=r.velocity,f=a.angularVelocity,p=r.angularVelocity;return t.multiplyVectors(o,f)+n.multiplyVectors(u,p)}computeGWlambda(){const t=this.jacobianElementA,n=this.jacobianElementB,a=this.bi,r=this.bj,o=a.vlambda,u=r.vlambda,f=a.wlambda,p=r.wlambda;return t.multiplyVectors(o,f)+n.multiplyVectors(u,p)}computeGiMf(){const t=this.jacobianElementA,n=this.jacobianElementB,a=this.bi,r=this.bj,o=a.force,u=a.torque,f=r.force,p=r.torque,h=a.invMassSolve,g=r.invMassSolve;return o.scale(h,Zv),f.scale(g,Kv),a.invInertiaWorldSolve.vmult(u,Qv),r.invInertiaWorldSolve.vmult(p,Jv),t.multiplyVectors(Zv,Qv)+n.multiplyVectors(Kv,Jv)}computeGiMGt(){const t=this.jacobianElementA,n=this.jacobianElementB,a=this.bi,r=this.bj,o=a.invMassSolve,u=r.invMassSolve,f=a.invInertiaWorldSolve,p=r.invInertiaWorldSolve;let h=o+u;return f.vmult(t.rotational,$c),h+=$c.dot(t.rotational),p.vmult(n.rotational,$c),h+=$c.dot(n.rotational),h}addToWlambda(t){const n=this.jacobianElementA,a=this.jacobianElementB,r=this.bi,o=this.bj,u=cE;r.vlambda.addScaledVector(r.invMassSolve*t,n.spatial,r.vlambda),o.vlambda.addScaledVector(o.invMassSolve*t,a.spatial,o.vlambda),r.invInertiaWorldSolve.vmult(n.rotational,u),r.wlambda.addScaledVector(t,u,r.wlambda),o.invInertiaWorldSolve.vmult(a.rotational,u),o.wlambda.addScaledVector(t,u,o.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}Bl.idCounter=0;const Zv=new R,Kv=new R,Qv=new R,Jv=new R,$c=new R,cE=new R;class uE extends Bl{constructor(t,n,a){a===void 0&&(a=1e6),super(t,n,0,a),this.restitution=0,this.ri=new R,this.rj=new R,this.ni=new R}computeB(t){const n=this.a,a=this.b,r=this.bi,o=this.bj,u=this.ri,f=this.rj,p=fE,h=hE,g=r.velocity,_=r.angularVelocity;r.force,r.torque;const v=o.velocity,y=o.angularVelocity;o.force,o.torque;const M=dE,b=this.jacobianElementA,S=this.jacobianElementB,x=this.ni;u.cross(x,p),f.cross(x,h),x.negate(b.spatial),p.negate(b.rotational),S.spatial.copy(x),S.rotational.copy(h),M.copy(o.position),M.vadd(f,M),M.vsub(r.position,M),M.vsub(u,M);const T=x.dot(M),U=this.restitution+1,C=U*v.dot(x)-U*g.dot(x)+y.dot(h)-_.dot(p),L=this.computeGiMf();return-T*n-C*a-t*L}getImpactVelocityAlongNormal(){const t=pE,n=mE,a=gE,r=vE,o=_E;return this.bi.position.vadd(this.ri,a),this.bj.position.vadd(this.rj,r),this.bi.getVelocityAtWorldPoint(a,t),this.bj.getVelocityAtWorldPoint(r,n),t.vsub(n,o),this.ni.dot(o)}}const fE=new R,hE=new R,dE=new R,pE=new R,mE=new R,gE=new R,vE=new R,_E=new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;class $v extends Bl{constructor(t,n,a){super(t,n,-a,a),this.ri=new R,this.rj=new R,this.t=new R}computeB(t){this.a;const n=this.b;this.bi,this.bj;const a=this.ri,r=this.rj,o=xE,u=yE,f=this.t;a.cross(f,o),r.cross(f,u);const p=this.jacobianElementA,h=this.jacobianElementB;f.negate(p.spatial),o.negate(p.rotational),h.spatial.copy(f),h.rotational.copy(u);const g=this.computeGW(),_=this.computeGiMf();return-g*n-t*_}}const xE=new R,yE=new R;class yo{constructor(t,n,a){a=lE.defaults(a,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=yo.idCounter++,this.materials=[t,n],this.friction=a.friction,this.restitution=a.restitution,this.contactEquationStiffness=a.contactEquationStiffness,this.contactEquationRelaxation=a.contactEquationRelaxation,this.frictionEquationStiffness=a.frictionEquationStiffness,this.frictionEquationRelaxation=a.frictionEquationRelaxation}}yo.idCounter=0;let Du=class xx{constructor(t){t===void 0&&(t={});let n="";typeof t=="string"&&(n=t,t={}),this.name=n,this.id=xx.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}};Du.idCounter=0;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new fa;new R;new R;new R;new R(1,0,0),new R(0,1,0),new R(0,0,1);new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;let SE=class extends Zt{constructor(){super({type:Zt.types.PLANE}),this.worldNormal=new R,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(t){const n=this.worldNormal;n.set(0,0,1),t.vmult(n,n),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(t,n){return n===void 0&&(n=new R),n}volume(){return Number.MAX_VALUE}calculateWorldAABB(t,n,a,r){Ba.set(0,0,1),n.vmult(Ba,Ba);const o=Number.MAX_VALUE;a.set(-o,-o,-o),r.set(o,o,o),Ba.x===1?r.x=t.x:Ba.x===-1&&(a.x=t.x),Ba.y===1?r.y=t.y:Ba.y===-1&&(a.y=t.y),Ba.z===1?r.z=t.z:Ba.z===-1&&(a.z=t.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}};const Ba=new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new Mi;new R;new Mi;new R;new R;new R;new R;new R;new R;new R;new Mi;new R;new Ge;new Mi;class ME{constructor(){this.equations=[]}solve(t,n){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const n=this.equations,a=n.indexOf(t);a!==-1&&n.splice(a,1)}removeAllEquations(){this.equations.length=0}}class EE extends ME{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,n){let a=0;const r=this.iterations,o=this.tolerance*this.tolerance,u=this.equations,f=u.length,p=n.bodies,h=p.length,g=t;let _,v,y,M,b,S;if(f!==0)for(let C=0;C!==h;C++)p[C].updateSolveMassProperties();const x=TE,T=AE,U=bE;x.length=f,T.length=f,U.length=f;for(let C=0;C!==f;C++){const L=u[C];U[C]=0,T[C]=L.computeB(g),x[C]=1/L.computeC()}if(f!==0){for(let B=0;B!==h;B++){const P=p[B],q=P.vlambda,w=P.wlambda;q.set(0,0,0),w.set(0,0,0)}for(a=0;a!==r;a++){M=0;for(let B=0;B!==f;B++){const P=u[B];_=T[B],v=x[B],S=U[B],b=P.computeGWlambda(),y=v*(_-b-P.eps*S),S+y<P.minForce?y=P.minForce-S:S+y>P.maxForce&&(y=P.maxForce-S),U[B]+=y,M+=y>0?y:-y,P.addToWlambda(y)}if(M*M<o)break}for(let B=0;B!==h;B++){const P=p[B],q=P.velocity,w=P.angularVelocity;P.vlambda.vmul(P.linearFactor,P.vlambda),q.vadd(P.vlambda,q),P.wlambda.vmul(P.angularFactor,P.wlambda),w.vadd(P.wlambda,w)}let C=u.length;const L=1/g;for(;C--;)u[C].multiplier=U[C]*L}return a}}const bE=[],TE=[],AE=[];class wE{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let n=0;n!==t;n++)this.objects.push(n<0||arguments.length<=n?void 0:arguments[n]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const n=this.objects;for(;n.length>t;)n.pop();for(;n.length<t;)n.push(this.constructObject());return this}}class RE extends wE{constructor(){super(...arguments),this.type=R}constructObject(){return new R}}const sn={sphereSphere:Zt.types.SPHERE,spherePlane:Zt.types.SPHERE|Zt.types.PLANE,boxBox:Zt.types.BOX|Zt.types.BOX,sphereBox:Zt.types.SPHERE|Zt.types.BOX,planeBox:Zt.types.PLANE|Zt.types.BOX,convexConvex:Zt.types.CONVEXPOLYHEDRON,sphereConvex:Zt.types.SPHERE|Zt.types.CONVEXPOLYHEDRON,planeConvex:Zt.types.PLANE|Zt.types.CONVEXPOLYHEDRON,boxConvex:Zt.types.BOX|Zt.types.CONVEXPOLYHEDRON,sphereHeightfield:Zt.types.SPHERE|Zt.types.HEIGHTFIELD,boxHeightfield:Zt.types.BOX|Zt.types.HEIGHTFIELD,convexHeightfield:Zt.types.CONVEXPOLYHEDRON|Zt.types.HEIGHTFIELD,sphereParticle:Zt.types.PARTICLE|Zt.types.SPHERE,planeParticle:Zt.types.PLANE|Zt.types.PARTICLE,boxParticle:Zt.types.BOX|Zt.types.PARTICLE,convexParticle:Zt.types.PARTICLE|Zt.types.CONVEXPOLYHEDRON,cylinderCylinder:Zt.types.CYLINDER,sphereCylinder:Zt.types.SPHERE|Zt.types.CYLINDER,planeCylinder:Zt.types.PLANE|Zt.types.CYLINDER,boxCylinder:Zt.types.BOX|Zt.types.CYLINDER,convexCylinder:Zt.types.CONVEXPOLYHEDRON|Zt.types.CYLINDER,heightfieldCylinder:Zt.types.HEIGHTFIELD|Zt.types.CYLINDER,particleCylinder:Zt.types.PARTICLE|Zt.types.CYLINDER,sphereTrimesh:Zt.types.SPHERE|Zt.types.TRIMESH,planeTrimesh:Zt.types.PLANE|Zt.types.TRIMESH};class CE{get[sn.sphereSphere](){return this.sphereSphere}get[sn.spherePlane](){return this.spherePlane}get[sn.boxBox](){return this.boxBox}get[sn.sphereBox](){return this.sphereBox}get[sn.planeBox](){return this.planeBox}get[sn.convexConvex](){return this.convexConvex}get[sn.sphereConvex](){return this.sphereConvex}get[sn.planeConvex](){return this.planeConvex}get[sn.boxConvex](){return this.boxConvex}get[sn.sphereHeightfield](){return this.sphereHeightfield}get[sn.boxHeightfield](){return this.boxHeightfield}get[sn.convexHeightfield](){return this.convexHeightfield}get[sn.sphereParticle](){return this.sphereParticle}get[sn.planeParticle](){return this.planeParticle}get[sn.boxParticle](){return this.boxParticle}get[sn.convexParticle](){return this.convexParticle}get[sn.cylinderCylinder](){return this.convexConvex}get[sn.sphereCylinder](){return this.sphereConvex}get[sn.planeCylinder](){return this.planeConvex}get[sn.boxCylinder](){return this.boxConvex}get[sn.convexCylinder](){return this.convexConvex}get[sn.heightfieldCylinder](){return this.heightfieldCylinder}get[sn.particleCylinder](){return this.particleCylinder}get[sn.sphereTrimesh](){return this.sphereTrimesh}get[sn.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new RE,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,n,a,r,o,u){let f;this.contactPointPool.length?(f=this.contactPointPool.pop(),f.bi=t,f.bj=n):f=new uE(t,n),f.enabled=t.collisionResponse&&n.collisionResponse&&a.collisionResponse&&r.collisionResponse;const p=this.currentContactMaterial;f.restitution=p.restitution,f.setSpookParams(p.contactEquationStiffness,p.contactEquationRelaxation,this.world.dt);const h=a.material||t.material,g=r.material||n.material;return h&&g&&h.restitution>=0&&g.restitution>=0&&(f.restitution=h.restitution*g.restitution),f.si=o||a,f.sj=u||r,f}createFrictionEquationsFromContact(t,n){const a=t.bi,r=t.bj,o=t.si,u=t.sj,f=this.world,p=this.currentContactMaterial;let h=p.friction;const g=o.material||a.material,_=u.material||r.material;if(g&&_&&g.friction>=0&&_.friction>=0&&(h=g.friction*_.friction),h>0){const v=h*(f.frictionGravity||f.gravity).length();let y=a.invMass+r.invMass;y>0&&(y=1/y);const M=this.frictionEquationPool,b=M.length?M.pop():new $v(a,r,v*y),S=M.length?M.pop():new $v(a,r,v*y);return b.bi=S.bi=a,b.bj=S.bj=r,b.minForce=S.minForce=-v*y,b.maxForce=S.maxForce=v*y,b.ri.copy(t.ri),b.rj.copy(t.rj),S.ri.copy(t.ri),S.rj.copy(t.rj),t.ni.tangents(b.t,S.t),b.setSpookParams(p.frictionEquationStiffness,p.frictionEquationRelaxation,f.dt),S.setSpookParams(p.frictionEquationStiffness,p.frictionEquationRelaxation,f.dt),b.enabled=S.enabled=t.enabled,n.push(b,S),!0}return!1}createFrictionFromAverage(t){let n=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(n,this.frictionResult)||t===1)return;const a=this.frictionResult[this.frictionResult.length-2],r=this.frictionResult[this.frictionResult.length-1];nr.setZero(),$r.setZero(),to.setZero();const o=n.bi;n.bj;for(let f=0;f!==t;f++)n=this.result[this.result.length-1-f],n.bi!==o?(nr.vadd(n.ni,nr),$r.vadd(n.ri,$r),to.vadd(n.rj,to)):(nr.vsub(n.ni,nr),$r.vadd(n.rj,$r),to.vadd(n.ri,to));const u=1/t;$r.scale(u,a.ri),to.scale(u,a.rj),r.ri.copy(a.ri),r.rj.copy(a.rj),nr.normalize(),nr.tangents(a.t,r.t)}getContacts(t,n,a,r,o,u,f){this.contactPointPool=o,this.frictionEquationPool=f,this.result=r,this.frictionResult=u;const p=UE,h=LE,g=DE,_=NE;for(let v=0,y=t.length;v!==y;v++){const M=t[v],b=n[v];let S=null;M.material&&b.material&&(S=a.getContactMaterial(M.material,b.material)||null);const x=M.type&Vt.KINEMATIC&&b.type&Vt.STATIC||M.type&Vt.STATIC&&b.type&Vt.KINEMATIC||M.type&Vt.KINEMATIC&&b.type&Vt.KINEMATIC;for(let T=0;T<M.shapes.length;T++){M.quaternion.mult(M.shapeOrientations[T],p),M.quaternion.vmult(M.shapeOffsets[T],g),g.vadd(M.position,g);const U=M.shapes[T];for(let C=0;C<b.shapes.length;C++){b.quaternion.mult(b.shapeOrientations[C],h),b.quaternion.vmult(b.shapeOffsets[C],_),_.vadd(b.position,_);const L=b.shapes[C];if(!(U.collisionFilterMask&L.collisionFilterGroup&&L.collisionFilterMask&U.collisionFilterGroup)||g.distanceTo(_)>U.boundingSphereRadius+L.boundingSphereRadius)continue;let B=null;U.material&&L.material&&(B=a.getContactMaterial(U.material,L.material)||null),this.currentContactMaterial=B||S||a.defaultContactMaterial;const P=U.type|L.type,q=this[P];if(q){let w=!1;U.type<L.type?w=q.call(this,U,L,g,_,p,h,M,b,U,L,x):w=q.call(this,L,U,_,g,h,p,b,M,U,L,x),w&&x&&(a.shapeOverlapKeeper.set(U.id,L.id),a.bodyOverlapKeeper.set(M.id,b.id))}}}}}sphereSphere(t,n,a,r,o,u,f,p,h,g,_){if(_)return a.distanceSquared(r)<(t.radius+n.radius)**2;const v=this.createContactEquation(f,p,t,n,h,g);r.vsub(a,v.ni),v.ni.normalize(),v.ri.copy(v.ni),v.rj.copy(v.ni),v.ri.scale(t.radius,v.ri),v.rj.scale(-n.radius,v.rj),v.ri.vadd(a,v.ri),v.ri.vsub(f.position,v.ri),v.rj.vadd(r,v.rj),v.rj.vsub(p.position,v.rj),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}spherePlane(t,n,a,r,o,u,f,p,h,g,_){const v=this.createContactEquation(f,p,t,n,h,g);if(v.ni.set(0,0,1),u.vmult(v.ni,v.ni),v.ni.negate(v.ni),v.ni.normalize(),v.ni.scale(t.radius,v.ri),a.vsub(r,tu),v.ni.scale(v.ni.dot(tu),t_),tu.vsub(t_,v.rj),-tu.dot(v.ni)<=t.radius){if(_)return!0;const y=v.ri,M=v.rj;y.vadd(a,y),y.vsub(f.position,y),M.vadd(r,M),M.vsub(p.position,M),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}boxBox(t,n,a,r,o,u,f,p,h,g,_){return t.convexPolyhedronRepresentation.material=t.material,n.convexPolyhedronRepresentation.material=n.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,n.convexPolyhedronRepresentation.collisionResponse=n.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,n.convexPolyhedronRepresentation,a,r,o,u,f,p,t,n,_)}sphereBox(t,n,a,r,o,u,f,p,h,g,_){const v=this.v3pool,y=sb;a.vsub(r,eu),n.getSideNormals(y,u);const M=t.radius;let b=!1;const S=ob,x=lb,T=cb;let U=null,C=0,L=0,B=0,P=null;for(let z=0,G=y.length;z!==G&&b===!1;z++){const Q=nb;Q.copy(y[z]);const mt=Q.length();Q.normalize();const yt=eu.dot(Q);if(yt<mt+M&&yt>0){const F=ib,j=ab;F.copy(y[(z+1)%3]),j.copy(y[(z+2)%3]);const ct=F.length(),Tt=j.length();F.normalize(),j.normalize();const Dt=eu.dot(F),it=eu.dot(j);if(Dt<ct&&Dt>-ct&&it<Tt&&it>-Tt){const gt=Math.abs(yt-mt-M);if((P===null||gt<P)&&(P=gt,L=Dt,B=it,U=mt,S.copy(Q),x.copy(F),T.copy(j),C++,_))return!0}}}if(C){b=!0;const z=this.createContactEquation(f,p,t,n,h,g);S.scale(-M,z.ri),z.ni.copy(S),z.ni.negate(z.ni),S.scale(U,S),x.scale(L,x),S.vadd(x,S),T.scale(B,T),S.vadd(T,z.rj),z.ri.vadd(a,z.ri),z.ri.vsub(f.position,z.ri),z.rj.vadd(r,z.rj),z.rj.vsub(p.position,z.rj),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult)}let q=v.get();const w=rb;for(let z=0;z!==2&&!b;z++)for(let G=0;G!==2&&!b;G++)for(let Q=0;Q!==2&&!b;Q++)if(q.set(0,0,0),z?q.vadd(y[0],q):q.vsub(y[0],q),G?q.vadd(y[1],q):q.vsub(y[1],q),Q?q.vadd(y[2],q):q.vsub(y[2],q),r.vadd(q,w),w.vsub(a,w),w.lengthSquared()<M*M){if(_)return!0;b=!0;const mt=this.createContactEquation(f,p,t,n,h,g);mt.ri.copy(w),mt.ri.normalize(),mt.ni.copy(mt.ri),mt.ri.scale(M,mt.ri),mt.rj.copy(q),mt.ri.vadd(a,mt.ri),mt.ri.vsub(f.position,mt.ri),mt.rj.vadd(r,mt.rj),mt.rj.vsub(p.position,mt.rj),this.result.push(mt),this.createFrictionEquationsFromContact(mt,this.frictionResult)}v.release(q),q=null;const O=v.get(),H=v.get(),$=v.get(),V=v.get(),K=v.get(),W=y.length;for(let z=0;z!==W&&!b;z++)for(let G=0;G!==W&&!b;G++)if(z%3!==G%3){y[G].cross(y[z],O),O.normalize(),y[z].vadd(y[G],H),$.copy(a),$.vsub(H,$),$.vsub(r,$);const Q=$.dot(O);O.scale(Q,V);let mt=0;for(;mt===z%3||mt===G%3;)mt++;K.copy(a),K.vsub(V,K),K.vsub(H,K),K.vsub(r,K);const yt=Math.abs(Q),F=K.length();if(yt<y[mt].length()&&F<M){if(_)return!0;b=!0;const j=this.createContactEquation(f,p,t,n,h,g);H.vadd(V,j.rj),j.rj.copy(j.rj),K.negate(j.ni),j.ni.normalize(),j.ri.copy(j.rj),j.ri.vadd(r,j.ri),j.ri.vsub(a,j.ri),j.ri.normalize(),j.ri.scale(M,j.ri),j.ri.vadd(a,j.ri),j.ri.vsub(f.position,j.ri),j.rj.vadd(r,j.rj),j.rj.vsub(p.position,j.rj),this.result.push(j),this.createFrictionEquationsFromContact(j,this.frictionResult)}}v.release(O,H,$,V,K)}planeBox(t,n,a,r,o,u,f,p,h,g,_){return n.convexPolyhedronRepresentation.material=n.material,n.convexPolyhedronRepresentation.collisionResponse=n.collisionResponse,n.convexPolyhedronRepresentation.id=n.id,this.planeConvex(t,n.convexPolyhedronRepresentation,a,r,o,u,f,p,t,n,_)}convexConvex(t,n,a,r,o,u,f,p,h,g,_,v,y){const M=bb;if(!(a.distanceTo(r)>t.boundingSphereRadius+n.boundingSphereRadius)&&t.findSeparatingAxis(n,a,o,r,u,M,v,y)){const b=[],S=Tb;t.clipAgainstHull(a,o,n,r,u,M,-100,100,b);let x=0;for(let T=0;T!==b.length;T++){if(_)return!0;const U=this.createContactEquation(f,p,t,n,h,g),C=U.ri,L=U.rj;M.negate(U.ni),b[T].normal.negate(S),S.scale(b[T].depth,S),b[T].point.vadd(S,C),L.copy(b[T].point),C.vsub(a,C),L.vsub(r,L),C.vadd(a,C),C.vsub(f.position,C),L.vadd(r,L),L.vsub(p.position,L),this.result.push(U),x++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(U,this.frictionResult)}this.enableFrictionReduction&&x&&this.createFrictionFromAverage(x)}}sphereConvex(t,n,a,r,o,u,f,p,h,g,_){const v=this.v3pool;a.vsub(r,ub);const y=n.faceNormals,M=n.faces,b=n.vertices,S=t.radius;let x=!1;for(let T=0;T!==b.length;T++){const U=b[T],C=pb;u.vmult(U,C),r.vadd(C,C);const L=db;if(C.vsub(a,L),L.lengthSquared()<S*S){if(_)return!0;x=!0;const B=this.createContactEquation(f,p,t,n,h,g);B.ri.copy(L),B.ri.normalize(),B.ni.copy(B.ri),B.ri.scale(S,B.ri),C.vsub(r,B.rj),B.ri.vadd(a,B.ri),B.ri.vsub(f.position,B.ri),B.rj.vadd(r,B.rj),B.rj.vsub(p.position,B.rj),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult);return}}for(let T=0,U=M.length;T!==U&&x===!1;T++){const C=y[T],L=M[T],B=mb;u.vmult(C,B);const P=gb;u.vmult(b[L[0]],P),P.vadd(r,P);const q=vb;B.scale(-S,q),a.vadd(q,q);const w=_b;q.vsub(P,w);const O=w.dot(B),H=xb;if(a.vsub(P,H),O<0&&H.dot(B)>0){const $=[];for(let V=0,K=L.length;V!==K;V++){const W=v.get();u.vmult(b[L[V]],W),r.vadd(W,W),$.push(W)}if(eb($,B,a)){if(_)return!0;x=!0;const V=this.createContactEquation(f,p,t,n,h,g);B.scale(-S,V.ri),B.negate(V.ni);const K=v.get();B.scale(-O,K);const W=v.get();B.scale(-S,W),a.vsub(r,V.rj),V.rj.vadd(W,V.rj),V.rj.vadd(K,V.rj),V.rj.vadd(r,V.rj),V.rj.vsub(p.position,V.rj),V.ri.vadd(a,V.ri),V.ri.vsub(f.position,V.ri),v.release(K),v.release(W),this.result.push(V),this.createFrictionEquationsFromContact(V,this.frictionResult);for(let z=0,G=$.length;z!==G;z++)v.release($[z]);return}else for(let V=0;V!==L.length;V++){const K=v.get(),W=v.get();u.vmult(b[L[(V+1)%L.length]],K),u.vmult(b[L[(V+2)%L.length]],W),r.vadd(K,K),r.vadd(W,W);const z=fb;W.vsub(K,z);const G=hb;z.unit(G);const Q=v.get(),mt=v.get();a.vsub(K,mt);const yt=mt.dot(G);G.scale(yt,Q),Q.vadd(K,Q);const F=v.get();if(Q.vsub(a,F),yt>0&&yt*yt<z.lengthSquared()&&F.lengthSquared()<S*S){if(_)return!0;const j=this.createContactEquation(f,p,t,n,h,g);Q.vsub(r,j.rj),Q.vsub(a,j.ni),j.ni.normalize(),j.ni.scale(S,j.ri),j.rj.vadd(r,j.rj),j.rj.vsub(p.position,j.rj),j.ri.vadd(a,j.ri),j.ri.vsub(f.position,j.ri),this.result.push(j),this.createFrictionEquationsFromContact(j,this.frictionResult);for(let ct=0,Tt=$.length;ct!==Tt;ct++)v.release($[ct]);v.release(K),v.release(W),v.release(Q),v.release(F),v.release(mt);return}v.release(K),v.release(W),v.release(Q),v.release(F),v.release(mt)}for(let V=0,K=$.length;V!==K;V++)v.release($[V])}}}planeConvex(t,n,a,r,o,u,f,p,h,g,_){const v=yb,y=Sb;y.set(0,0,1),o.vmult(y,y);let M=0;const b=Mb;for(let S=0;S!==n.vertices.length;S++)if(v.copy(n.vertices[S]),u.vmult(v,v),r.vadd(v,v),v.vsub(a,b),y.dot(b)<=0){if(_)return!0;const T=this.createContactEquation(f,p,t,n,h,g),U=Eb;y.scale(y.dot(b),U),v.vsub(U,U),U.vsub(a,T.ri),T.ni.copy(y),v.vsub(r,T.rj),T.ri.vadd(a,T.ri),T.ri.vsub(f.position,T.ri),T.rj.vadd(r,T.rj),T.rj.vsub(p.position,T.rj),this.result.push(T),M++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(T,this.frictionResult)}this.enableFrictionReduction&&M&&this.createFrictionFromAverage(M)}boxConvex(t,n,a,r,o,u,f,p,h,g,_){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,n,a,r,o,u,f,p,t,n,_)}sphereHeightfield(t,n,a,r,o,u,f,p,h,g,_){const v=n.data,y=t.radius,M=n.elementSize,b=Bb,S=Pb;Ge.pointToLocalFrame(r,u,a,S);let x=Math.floor((S.x-y)/M)-1,T=Math.ceil((S.x+y)/M)+1,U=Math.floor((S.y-y)/M)-1,C=Math.ceil((S.y+y)/M)+1;if(T<0||C<0||x>v.length||U>v[0].length)return;x<0&&(x=0),T<0&&(T=0),U<0&&(U=0),C<0&&(C=0),x>=v.length&&(x=v.length-1),T>=v.length&&(T=v.length-1),C>=v[0].length&&(C=v[0].length-1),U>=v[0].length&&(U=v[0].length-1);const L=[];n.getRectMinMax(x,U,T,C,L);const B=L[0],P=L[1];if(S.z-y>P||S.z+y<B)return;const q=this.result;for(let w=x;w<T;w++)for(let O=U;O<C;O++){const H=q.length;let $=!1;if(n.getConvexTrianglePillar(w,O,!1),Ge.pointToWorldFrame(r,u,n.pillarOffset,b),a.distanceTo(b)<n.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&($=this.sphereConvex(t,n.pillarConvex,a,b,o,u,f,p,t,n,_)),_&&$||(n.getConvexTrianglePillar(w,O,!0),Ge.pointToWorldFrame(r,u,n.pillarOffset,b),a.distanceTo(b)<n.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&($=this.sphereConvex(t,n.pillarConvex,a,b,o,u,f,p,t,n,_)),_&&$))return!0;if(q.length-H>2)return}}boxHeightfield(t,n,a,r,o,u,f,p,h,g,_){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,n,a,r,o,u,f,p,t,n,_)}convexHeightfield(t,n,a,r,o,u,f,p,h,g,_){const v=n.data,y=n.elementSize,M=t.boundingSphereRadius,b=Ob,S=zb,x=Lb;Ge.pointToLocalFrame(r,u,a,x);let T=Math.floor((x.x-M)/y)-1,U=Math.ceil((x.x+M)/y)+1,C=Math.floor((x.y-M)/y)-1,L=Math.ceil((x.y+M)/y)+1;if(U<0||L<0||T>v.length||C>v[0].length)return;T<0&&(T=0),U<0&&(U=0),C<0&&(C=0),L<0&&(L=0),T>=v.length&&(T=v.length-1),U>=v.length&&(U=v.length-1),L>=v[0].length&&(L=v[0].length-1),C>=v[0].length&&(C=v[0].length-1);const B=[];n.getRectMinMax(T,C,U,L,B);const P=B[0],q=B[1];if(!(x.z-M>q||x.z+M<P))for(let w=T;w<U;w++)for(let O=C;O<L;O++){let H=!1;if(n.getConvexTrianglePillar(w,O,!1),Ge.pointToWorldFrame(r,u,n.pillarOffset,b),a.distanceTo(b)<n.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(H=this.convexConvex(t,n.pillarConvex,a,b,o,u,f,p,null,null,_,S,null)),_&&H||(n.getConvexTrianglePillar(w,O,!0),Ge.pointToWorldFrame(r,u,n.pillarOffset,b),a.distanceTo(b)<n.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(H=this.convexConvex(t,n.pillarConvex,a,b,o,u,f,p,null,null,_,S,null)),_&&H))return!0}}sphereParticle(t,n,a,r,o,u,f,p,h,g,_){const v=Cb;if(v.set(0,0,1),r.vsub(a,v),v.lengthSquared()<=t.radius*t.radius){if(_)return!0;const M=this.createContactEquation(p,f,n,t,h,g);v.normalize(),M.rj.copy(v),M.rj.scale(t.radius,M.rj),M.ni.copy(v),M.ni.negate(M.ni),M.ri.set(0,0,0),this.result.push(M),this.createFrictionEquationsFromContact(M,this.frictionResult)}}planeParticle(t,n,a,r,o,u,f,p,h,g,_){const v=Ab;v.set(0,0,1),f.quaternion.vmult(v,v);const y=wb;if(r.vsub(f.position,y),v.dot(y)<=0){if(_)return!0;const b=this.createContactEquation(p,f,n,t,h,g);b.ni.copy(v),b.ni.negate(b.ni),b.ri.set(0,0,0);const S=Rb;v.scale(v.dot(r),S),r.vsub(S,S),b.rj.copy(S),this.result.push(b),this.createFrictionEquationsFromContact(b,this.frictionResult)}}boxParticle(t,n,a,r,o,u,f,p,h,g,_){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,n,a,r,o,u,f,p,t,n,_)}convexParticle(t,n,a,r,o,u,f,p,h,g,_){let v=-1;const y=Nb,M=Ub;let b=null;const S=Db;if(S.copy(r),S.vsub(a,S),o.conjugate(e_),e_.vmult(S,S),t.pointIsInside(S)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(a,o),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(o);for(let x=0,T=t.faces.length;x!==T;x++){const U=[t.worldVertices[t.faces[x][0]]],C=t.worldFaceNormals[x];r.vsub(U[0],n_);const L=-C.dot(n_);if(b===null||Math.abs(L)<Math.abs(b)){if(_)return!0;b=L,v=x,y.copy(C)}}if(v!==-1){const x=this.createContactEquation(p,f,n,t,h,g);y.scale(b,M),M.vadd(r,M),M.vsub(a,M),x.rj.copy(M),y.negate(x.ni),x.ri.set(0,0,0);const T=x.ri,U=x.rj;T.vadd(r,T),T.vsub(p.position,T),U.vadd(a,U),U.vsub(f.position,U),this.result.push(x),this.createFrictionEquationsFromContact(x,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,n,a,r,o,u,f,p,h,g,_){return this.convexHeightfield(n,t,r,a,u,o,p,f,h,g,_)}particleCylinder(t,n,a,r,o,u,f,p,h,g,_){return this.convexParticle(n,t,r,a,u,o,p,f,h,g,_)}sphereTrimesh(t,n,a,r,o,u,f,p,h,g,_){const v=GE,y=VE,M=kE,b=qE,S=XE,x=WE,T=KE,U=HE,C=FE,L=QE;Ge.pointToLocalFrame(r,u,a,S);const B=t.radius;T.lowerBound.set(S.x-B,S.y-B,S.z-B),T.upperBound.set(S.x+B,S.y+B,S.z+B),n.getTrianglesInAABB(T,L);const P=IE,q=t.radius*t.radius;for(let V=0;V<L.length;V++)for(let K=0;K<3;K++)if(n.getVertex(n.indices[L[V]*3+K],P),P.vsub(S,C),C.lengthSquared()<=q){if(U.copy(P),Ge.pointToWorldFrame(r,u,U,P),P.vsub(a,C),_)return!0;let W=this.createContactEquation(f,p,t,n,h,g);W.ni.copy(C),W.ni.normalize(),W.ri.copy(W.ni),W.ri.scale(t.radius,W.ri),W.ri.vadd(a,W.ri),W.ri.vsub(f.position,W.ri),W.rj.copy(P),W.rj.vsub(p.position,W.rj),this.result.push(W),this.createFrictionEquationsFromContact(W,this.frictionResult)}for(let V=0;V<L.length;V++)for(let K=0;K<3;K++){n.getVertex(n.indices[L[V]*3+K],v),n.getVertex(n.indices[L[V]*3+(K+1)%3],y),y.vsub(v,M),S.vsub(y,x);const W=x.dot(M);S.vsub(v,x);let z=x.dot(M);if(z>0&&W<0&&(S.vsub(v,x),b.copy(M),b.normalize(),z=x.dot(b),b.scale(z,x),x.vadd(v,x),x.distanceTo(S)<t.radius)){if(_)return!0;const Q=this.createContactEquation(f,p,t,n,h,g);x.vsub(S,Q.ni),Q.ni.normalize(),Q.ni.scale(t.radius,Q.ri),Q.ri.vadd(a,Q.ri),Q.ri.vsub(f.position,Q.ri),Ge.pointToWorldFrame(r,u,x,x),x.vsub(p.position,Q.rj),Ge.vectorToWorldFrame(u,Q.ni,Q.ni),Ge.vectorToWorldFrame(u,Q.ri,Q.ri),this.result.push(Q),this.createFrictionEquationsFromContact(Q,this.frictionResult)}}const w=YE,O=jE,H=ZE,$=BE;for(let V=0,K=L.length;V!==K;V++){n.getTriangleVertices(L[V],w,O,H),n.getNormal(L[V],$),S.vsub(w,x);let W=x.dot($);if($.scale(W,x),S.vsub(x,x),W=x.distanceTo(S),fa.pointInTriangle(x,w,O,H)&&W<t.radius){if(_)return!0;let z=this.createContactEquation(f,p,t,n,h,g);x.vsub(S,z.ni),z.ni.normalize(),z.ni.scale(t.radius,z.ri),z.ri.vadd(a,z.ri),z.ri.vsub(f.position,z.ri),Ge.pointToWorldFrame(r,u,x,x),x.vsub(p.position,z.rj),Ge.vectorToWorldFrame(u,z.ni,z.ni),Ge.vectorToWorldFrame(u,z.ri,z.ri),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult)}}L.length=0}planeTrimesh(t,n,a,r,o,u,f,p,h,g,_){const v=new R,y=OE;y.set(0,0,1),o.vmult(y,y);for(let M=0;M<n.vertices.length/3;M++){n.getVertex(M,v);const b=new R;b.copy(v),Ge.pointToWorldFrame(r,u,b,v);const S=zE;if(v.vsub(a,S),y.dot(S)<=0){if(_)return!0;const T=this.createContactEquation(f,p,t,n,h,g);T.ni.copy(y);const U=PE;y.scale(S.dot(y),U),v.vsub(U,U),T.ri.copy(U),T.ri.vsub(f.position,T.ri),T.rj.copy(v),T.rj.vsub(p.position,T.rj),this.result.push(T),this.createFrictionEquationsFromContact(T,this.frictionResult)}}}}const nr=new R,$r=new R,to=new R,DE=new R,NE=new R,UE=new si,LE=new si,OE=new R,zE=new R,PE=new R,BE=new R,FE=new R;new R;const IE=new R,HE=new R,GE=new R,VE=new R,kE=new R,qE=new R,XE=new R,WE=new R,YE=new R,jE=new R,ZE=new R,KE=new Mi,QE=[],tu=new R,t_=new R,JE=new R,$E=new R,tb=new R;function eb(c,t,n){let a=null;const r=c.length;for(let o=0;o!==r;o++){const u=c[o],f=JE;c[(o+1)%r].vsub(u,f);const p=$E;f.cross(t,p);const h=tb;n.vsub(u,h);const g=p.dot(h);if(a===null||g>0&&a===!0||g<=0&&a===!1){a===null&&(a=g>0);continue}else return!1}return!0}const eu=new R,nb=new R,ib=new R,ab=new R,sb=[new R,new R,new R,new R,new R,new R],rb=new R,ob=new R,lb=new R,cb=new R,ub=new R,fb=new R,hb=new R,db=new R,pb=new R,mb=new R,gb=new R,vb=new R,_b=new R,xb=new R;new R;new R;const yb=new R,Sb=new R,Mb=new R,Eb=new R,bb=new R,Tb=new R,Ab=new R,wb=new R,Rb=new R,Cb=new R,e_=new si,Db=new R;new R;const Nb=new R,n_=new R,Ub=new R,Lb=new R,Ob=new R,zb=[0],Pb=new R,Bb=new R;class i_{constructor(){this.current=[],this.previous=[]}getKey(t,n){if(n<t){const a=n;n=t,t=a}return t<<16|n}set(t,n){const a=this.getKey(t,n),r=this.current;let o=0;for(;a>r[o];)o++;if(a!==r[o]){for(let u=r.length-1;u>=o;u--)r[u+1]=r[u];r[o]=a}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,n){const a=this.current,r=this.previous,o=a.length,u=r.length;let f=0;for(let p=0;p<o;p++){let h=!1;const g=a[p];for(;g>r[f];)f++;h=g===r[f],h||a_(t,g)}f=0;for(let p=0;p<u;p++){let h=!1;const g=r[p];for(;g>a[f];)f++;h=a[f]===g,h||a_(n,g)}}}function a_(c,t){c.push((t&4294901760)>>16,t&65535)}const Jh=(c,t)=>c<t?`${c}-${t}`:`${t}-${c}`;class Fb{constructor(){this.data={keys:[]}}get(t,n){const a=Jh(t,n);return this.data[a]}set(t,n,a){const r=Jh(t,n);this.get(t,n)||this.data.keys.push(r),this.data[r]=a}delete(t,n){const a=Jh(t,n),r=this.data.keys.indexOf(a);r!==-1&&this.data.keys.splice(r,1),delete this.data[a]}reset(){const t=this.data,n=t.keys;for(;n.length>0;){const a=n.pop();delete t[a]}}}class Ib extends ux{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new R,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new R,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new XM,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new EE,this.constraints=[],this.narrowphase=new CE(this),this.collisionMatrix=new kv,this.collisionMatrixPrevious=new kv,this.bodyOverlapKeeper=new i_,this.shapeOverlapKeeper=new i_,this.contactmaterials=[],this.contactMaterialTable=new Fb,this.defaultMaterial=new Du("default"),this.defaultContactMaterial=new yo(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,n){return this.contactMaterialTable.get(t.id,n.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const n=this.constraints.indexOf(t);n!==-1&&this.constraints.splice(n,1)}rayTest(t,n,a){a instanceof Cu?this.raycastClosest(t,n,{skipBackfaces:!0},a):this.raycastAll(t,n,{skipBackfaces:!0},a)}raycastAll(t,n,a,r){return a===void 0&&(a={}),a.mode=fa.ALL,a.from=t,a.to=n,a.callback=r,$h.intersectWorld(this,a)}raycastAny(t,n,a,r){return a===void 0&&(a={}),a.mode=fa.ANY,a.from=t,a.to=n,a.result=r,$h.intersectWorld(this,a)}raycastClosest(t,n,a,r){return a===void 0&&(a={}),a.mode=fa.CLOSEST,a.from=t,a.to=n,a.result=r,$h.intersectWorld(this,a)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof Vt&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const n=this.bodies.length-1,a=this.bodies,r=a.indexOf(t);if(r!==-1){a.splice(r,1);for(let o=0;o!==a.length;o++)a[o].index=o;this.collisionMatrix.setNumObjects(n),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const n=this.bodies;for(let a=0;a<n.length;a++){const r=n[a].shapes;for(let o=0;o<r.length;o++){const u=r[o];if(u.id===t)return u}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const n=this.contactmaterials.indexOf(t);n!==-1&&(this.contactmaterials.splice(n,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,n){t===void 0&&(t=1/60),n===void 0&&(n=10);const a=bn.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,n);else{const r=a-this.lastCallTime;this.step(t,r,n)}this.lastCallTime=a}step(t,n,a){if(a===void 0&&(a=10),n===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=n;const r=bn.now();let o=0;for(;this.accumulator>=t&&o<a&&(this.internalStep(t),this.accumulator-=t,o++,!(bn.now()-r>t*1e3)););this.accumulator=this.accumulator%t;const u=this.accumulator/t;for(let f=0;f!==this.bodies.length;f++){const p=this.bodies[f];p.previousPosition.lerp(p.position,u,p.interpolatedPosition),p.previousQuaternion.slerp(p.quaternion,u,p.interpolatedQuaternion),p.previousQuaternion.normalize()}this.time+=n}}internalStep(t){this.dt=t;const n=this.contacts,a=qb,r=Xb,o=this.bodies.length,u=this.bodies,f=this.solver,p=this.gravity,h=this.doProfiling,g=this.profile,_=Vt.DYNAMIC;let v=-1/0;const y=this.constraints,M=kb;p.length();const b=p.x,S=p.y,x=p.z;let T=0;for(h&&(v=bn.now()),T=0;T!==o;T++){const V=u[T];if(V.type===_){const K=V.force,W=V.mass;K.x+=W*b,K.y+=W*S,K.z+=W*x}}for(let V=0,K=this.subsystems.length;V!==K;V++)this.subsystems[V].update();h&&(v=bn.now()),a.length=0,r.length=0,this.broadphase.collisionPairs(this,a,r),h&&(g.broadphase=bn.now()-v);let U=y.length;for(T=0;T!==U;T++){const V=y[T];if(!V.collideConnected)for(let K=a.length-1;K>=0;K-=1)(V.bodyA===a[K]&&V.bodyB===r[K]||V.bodyB===a[K]&&V.bodyA===r[K])&&(a.splice(K,1),r.splice(K,1))}this.collisionMatrixTick(),h&&(v=bn.now());const C=Vb,L=n.length;for(T=0;T!==L;T++)C.push(n[T]);n.length=0;const B=this.frictionEquations.length;for(T=0;T!==B;T++)M.push(this.frictionEquations[T]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(a,r,this,n,C,this.frictionEquations,M),h&&(g.narrowphase=bn.now()-v),h&&(v=bn.now()),T=0;T<this.frictionEquations.length;T++)f.addEquation(this.frictionEquations[T]);const P=n.length;for(let V=0;V!==P;V++){const K=n[V],W=K.bi,z=K.bj,G=K.si,Q=K.sj;let mt;if(W.material&&z.material?mt=this.getContactMaterial(W.material,z.material)||this.defaultContactMaterial:mt=this.defaultContactMaterial,mt.friction,W.material&&z.material&&(W.material.friction>=0&&z.material.friction>=0&&W.material.friction*z.material.friction,W.material.restitution>=0&&z.material.restitution>=0&&(K.restitution=W.material.restitution*z.material.restitution)),f.addEquation(K),W.allowSleep&&W.type===Vt.DYNAMIC&&W.sleepState===Vt.SLEEPING&&z.sleepState===Vt.AWAKE&&z.type!==Vt.STATIC){const yt=z.velocity.lengthSquared()+z.angularVelocity.lengthSquared(),F=z.sleepSpeedLimit**2;yt>=F*2&&(W.wakeUpAfterNarrowphase=!0)}if(z.allowSleep&&z.type===Vt.DYNAMIC&&z.sleepState===Vt.SLEEPING&&W.sleepState===Vt.AWAKE&&W.type!==Vt.STATIC){const yt=W.velocity.lengthSquared()+W.angularVelocity.lengthSquared(),F=W.sleepSpeedLimit**2;yt>=F*2&&(z.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(W,z,!0),this.collisionMatrixPrevious.get(W,z)||(xl.body=z,xl.contact=K,W.dispatchEvent(xl),xl.body=W,z.dispatchEvent(xl)),this.bodyOverlapKeeper.set(W.id,z.id),this.shapeOverlapKeeper.set(G.id,Q.id)}for(this.emitContactEvents(),h&&(g.makeContactConstraints=bn.now()-v,v=bn.now()),T=0;T!==o;T++){const V=u[T];V.wakeUpAfterNarrowphase&&(V.wakeUp(),V.wakeUpAfterNarrowphase=!1)}for(U=y.length,T=0;T!==U;T++){const V=y[T];V.update();for(let K=0,W=V.equations.length;K!==W;K++){const z=V.equations[K];f.addEquation(z)}}f.solve(t,this),h&&(g.solve=bn.now()-v),f.removeAllEquations();const q=Math.pow;for(T=0;T!==o;T++){const V=u[T];if(V.type&_){const K=q(1-V.linearDamping,t),W=V.velocity;W.scale(K,W);const z=V.angularVelocity;if(z){const G=q(1-V.angularDamping,t);z.scale(G,z)}}}this.dispatchEvent(Gb),h&&(v=bn.now());const O=this.stepnumber%(this.quatNormalizeSkip+1)===0,H=this.quatNormalizeFast;for(T=0;T!==o;T++)u[T].integrate(t,O,H);this.clearForces(),this.broadphase.dirty=!0,h&&(g.integrate=bn.now()-v),this.stepnumber+=1,this.dispatchEvent(Hb);let $=!0;if(this.allowSleep)for($=!1,T=0;T!==o;T++){const V=u[T];V.sleepTick(this.time),V.sleepState!==Vt.SLEEPING&&($=!0)}this.hasActiveBodies=$}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),n=this.hasAnyEventListener("endContact");if((t||n)&&this.bodyOverlapKeeper.getDiff(Fa,Ia),t){for(let o=0,u=Fa.length;o<u;o+=2)yl.bodyA=this.getBodyById(Fa[o]),yl.bodyB=this.getBodyById(Fa[o+1]),this.dispatchEvent(yl);yl.bodyA=yl.bodyB=null}if(n){for(let o=0,u=Ia.length;o<u;o+=2)Sl.bodyA=this.getBodyById(Ia[o]),Sl.bodyB=this.getBodyById(Ia[o+1]),this.dispatchEvent(Sl);Sl.bodyA=Sl.bodyB=null}Fa.length=Ia.length=0;const a=this.hasAnyEventListener("beginShapeContact"),r=this.hasAnyEventListener("endShapeContact");if((a||r)&&this.shapeOverlapKeeper.getDiff(Fa,Ia),a){for(let o=0,u=Fa.length;o<u;o+=2){const f=this.getShapeById(Fa[o]),p=this.getShapeById(Fa[o+1]);Ha.shapeA=f,Ha.shapeB=p,f&&(Ha.bodyA=f.body),p&&(Ha.bodyB=p.body),this.dispatchEvent(Ha)}Ha.bodyA=Ha.bodyB=Ha.shapeA=Ha.shapeB=null}if(r){for(let o=0,u=Ia.length;o<u;o+=2){const f=this.getShapeById(Ia[o]),p=this.getShapeById(Ia[o+1]);Ga.shapeA=f,Ga.shapeB=p,f&&(Ga.bodyA=f.body),p&&(Ga.bodyB=p.body),this.dispatchEvent(Ga)}Ga.bodyA=Ga.bodyB=Ga.shapeA=Ga.shapeB=null}}clearForces(){const t=this.bodies,n=t.length;for(let a=0;a!==n;a++){const r=t[a];r.force,r.torque,r.force.set(0,0,0),r.torque.set(0,0,0)}}}new Mi;const $h=new fa,bn=globalThis.performance||{};if(!bn.now){let c=Date.now();bn.timing&&bn.timing.navigationStart&&(c=bn.timing.navigationStart),bn.now=()=>Date.now()-c}new R;const Hb={type:"postStep"},Gb={type:"preStep"},xl={type:Vt.COLLIDE_EVENT_NAME,body:null,contact:null},Vb=[],kb=[],qb=[],Xb=[],Fa=[],Ia=[],yl={type:"beginContact",bodyA:null,bodyB:null},Sl={type:"endContact",bodyA:null,bodyB:null},Ha={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Ga={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};const Op="182",Wb=0,s_=1,Yb=2,Eu=1,yx=2,Dl=3,Fs=0,ri=1,ja=2,Ka=0,_o=1,r_=2,o_=3,l_=4,jb=5,pr=100,Zb=101,Kb=102,Qb=103,Jb=104,$b=200,t1=201,e1=202,n1=203,zd=204,Pd=205,i1=206,a1=207,s1=208,r1=209,o1=210,l1=211,c1=212,u1=213,f1=214,Bd=0,Fd=1,Id=2,So=3,Hd=4,Gd=5,Vd=6,kd=7,Sx=0,h1=1,d1=2,Yi=0,Mx=1,Ex=2,bx=3,Tx=4,Ax=5,wx=6,Rx=7,Cx=300,_r=301,Mo=302,qd=303,Xd=304,Ou=306,Wd=1e3,Za=1001,Yd=1002,Fn=1003,p1=1004,nu=1005,In=1006,td=1007,Ps=1008,Si=1009,Dx=1010,Nx=1011,Ll=1012,zp=1013,pa=1014,ca=1015,$a=1016,Pp=1017,Bp=1018,Ol=1020,Ux=35902,Lx=35899,Ox=1021,zx=1022,Wi=1023,ts=1026,vr=1027,Px=1028,Fp=1029,Eo=1030,Ip=1031,Hp=1033,bu=33776,Tu=33777,Au=33778,wu=33779,jd=35840,Zd=35841,Kd=35842,Qd=35843,Jd=36196,$d=37492,tp=37496,ep=37488,np=37489,ip=37490,ap=37491,sp=37808,rp=37809,op=37810,lp=37811,cp=37812,up=37813,fp=37814,hp=37815,dp=37816,pp=37817,mp=37818,gp=37819,vp=37820,_p=37821,xp=36492,yp=36494,Sp=36495,Mp=36283,Ep=36284,bp=36285,Tp=36286,m1=3200,Bx=0,g1=1,zs="",jn="srgb",bo="srgb-linear",Nu="linear",Ye="srgb",eo=7680,c_=519,v1=512,_1=513,x1=514,Gp=515,y1=516,S1=517,Vp=518,M1=519,u_=35044,f_="300 es",ua=2e3,Uu=2001;function Fx(c){for(let t=c.length-1;t>=0;--t)if(c[t]>=65535)return!0;return!1}function Lu(c){return document.createElementNS("http://www.w3.org/1999/xhtml",c)}function E1(){const c=Lu("canvas");return c.style.display="block",c}const h_={};function d_(...c){const t="THREE."+c.shift();console.log(t,...c)}function pe(...c){const t="THREE."+c.shift();console.warn(t,...c)}function Ne(...c){const t="THREE."+c.shift();console.error(t,...c)}function zl(...c){const t=c.join(" ");t in h_||(h_[t]=!0,pe(...c))}function b1(c,t,n){return new Promise(function(a,r){function o(){switch(c.clientWaitSync(t,c.SYNC_FLUSH_COMMANDS_BIT,0)){case c.WAIT_FAILED:r();break;case c.TIMEOUT_EXPIRED:setTimeout(o,n);break;default:a()}}setTimeout(o,n)})}class Ao{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){const a=this._listeners;if(a===void 0)return;const r=a[t];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const a=n[t.type];if(a!==void 0){t.target=this;const r=a.slice(0);for(let o=0,u=r.length;o<u;o++)r[o].call(this,t);t.target=null}}}const Vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ed=Math.PI/180,Ap=180/Math.PI;function Fl(){const c=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Vn[c&255]+Vn[c>>8&255]+Vn[c>>16&255]+Vn[c>>24&255]+"-"+Vn[t&255]+Vn[t>>8&255]+"-"+Vn[t>>16&15|64]+Vn[t>>24&255]+"-"+Vn[n&63|128]+Vn[n>>8&255]+"-"+Vn[n>>16&255]+Vn[n>>24&255]+Vn[a&255]+Vn[a>>8&255]+Vn[a>>16&255]+Vn[a>>24&255]).toLowerCase()}function Ce(c,t,n){return Math.max(t,Math.min(n,c))}function T1(c,t){return(c%t+t)%t}function nd(c,t,n){return(1-n)*c+n*t}function Ml(c,t){switch(t.constructor){case Float32Array:return c;case Uint32Array:return c/4294967295;case Uint16Array:return c/65535;case Uint8Array:return c/255;case Int32Array:return Math.max(c/2147483647,-1);case Int16Array:return Math.max(c/32767,-1);case Int8Array:return Math.max(c/127,-1);default:throw new Error("Invalid component type.")}}function ai(c,t){switch(t.constructor){case Float32Array:return c;case Uint32Array:return Math.round(c*4294967295);case Uint16Array:return Math.round(c*65535);case Uint8Array:return Math.round(c*255);case Int32Array:return Math.round(c*2147483647);case Int16Array:return Math.round(c*32767);case Int8Array:return Math.round(c*127);default:throw new Error("Invalid component type.")}}class Be{constructor(t=0,n=0){Be.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,r=t.elements;return this.x=r[0]*n+r[3]*a+r[6],this.y=r[1]*n+r[4]*a+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Ce(this.x,t.x,n.x),this.y=Ce(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Ce(this.x,t,n),this.y=Ce(this.y,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Ce(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(Ce(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),r=Math.sin(n),o=this.x-t.x,u=this.y-t.y;return this.x=o*a-u*r+t.x,this.y=o*r+u*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class xr{constructor(t=0,n=0,a=0,r=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=r}static slerpFlat(t,n,a,r,o,u,f){let p=a[r+0],h=a[r+1],g=a[r+2],_=a[r+3],v=o[u+0],y=o[u+1],M=o[u+2],b=o[u+3];if(f<=0){t[n+0]=p,t[n+1]=h,t[n+2]=g,t[n+3]=_;return}if(f>=1){t[n+0]=v,t[n+1]=y,t[n+2]=M,t[n+3]=b;return}if(_!==b||p!==v||h!==y||g!==M){let S=p*v+h*y+g*M+_*b;S<0&&(v=-v,y=-y,M=-M,b=-b,S=-S);let x=1-f;if(S<.9995){const T=Math.acos(S),U=Math.sin(T);x=Math.sin(x*T)/U,f=Math.sin(f*T)/U,p=p*x+v*f,h=h*x+y*f,g=g*x+M*f,_=_*x+b*f}else{p=p*x+v*f,h=h*x+y*f,g=g*x+M*f,_=_*x+b*f;const T=1/Math.sqrt(p*p+h*h+g*g+_*_);p*=T,h*=T,g*=T,_*=T}}t[n]=p,t[n+1]=h,t[n+2]=g,t[n+3]=_}static multiplyQuaternionsFlat(t,n,a,r,o,u){const f=a[r],p=a[r+1],h=a[r+2],g=a[r+3],_=o[u],v=o[u+1],y=o[u+2],M=o[u+3];return t[n]=f*M+g*_+p*y-h*v,t[n+1]=p*M+g*v+h*_-f*y,t[n+2]=h*M+g*y+f*v-p*_,t[n+3]=g*M-f*_-p*v-h*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,r){return this._x=t,this._y=n,this._z=a,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const a=t._x,r=t._y,o=t._z,u=t._order,f=Math.cos,p=Math.sin,h=f(a/2),g=f(r/2),_=f(o/2),v=p(a/2),y=p(r/2),M=p(o/2);switch(u){case"XYZ":this._x=v*g*_+h*y*M,this._y=h*y*_-v*g*M,this._z=h*g*M+v*y*_,this._w=h*g*_-v*y*M;break;case"YXZ":this._x=v*g*_+h*y*M,this._y=h*y*_-v*g*M,this._z=h*g*M-v*y*_,this._w=h*g*_+v*y*M;break;case"ZXY":this._x=v*g*_-h*y*M,this._y=h*y*_+v*g*M,this._z=h*g*M+v*y*_,this._w=h*g*_-v*y*M;break;case"ZYX":this._x=v*g*_-h*y*M,this._y=h*y*_+v*g*M,this._z=h*g*M-v*y*_,this._w=h*g*_+v*y*M;break;case"YZX":this._x=v*g*_+h*y*M,this._y=h*y*_+v*g*M,this._z=h*g*M-v*y*_,this._w=h*g*_-v*y*M;break;case"XZY":this._x=v*g*_-h*y*M,this._y=h*y*_-v*g*M,this._z=h*g*M+v*y*_,this._w=h*g*_+v*y*M;break;default:pe("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,r=Math.sin(a);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],r=n[4],o=n[8],u=n[1],f=n[5],p=n[9],h=n[2],g=n[6],_=n[10],v=a+f+_;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(g-p)*y,this._y=(o-h)*y,this._z=(u-r)*y}else if(a>f&&a>_){const y=2*Math.sqrt(1+a-f-_);this._w=(g-p)/y,this._x=.25*y,this._y=(r+u)/y,this._z=(o+h)/y}else if(f>_){const y=2*Math.sqrt(1+f-a-_);this._w=(o-h)/y,this._x=(r+u)/y,this._y=.25*y,this._z=(p+g)/y}else{const y=2*Math.sqrt(1+_-a-f);this._w=(u-r)/y,this._x=(o+h)/y,this._y=(p+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<1e-8?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ce(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const r=Math.min(1,n/a);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,r=t._y,o=t._z,u=t._w,f=n._x,p=n._y,h=n._z,g=n._w;return this._x=a*g+u*f+r*h-o*p,this._y=r*g+u*p+o*f-a*h,this._z=o*g+u*h+a*p-r*f,this._w=u*g-a*f-r*p-o*h,this._onChangeCallback(),this}slerp(t,n){if(n<=0)return this;if(n>=1)return this.copy(t);let a=t._x,r=t._y,o=t._z,u=t._w,f=this.dot(t);f<0&&(a=-a,r=-r,o=-o,u=-u,f=-f);let p=1-n;if(f<.9995){const h=Math.acos(f),g=Math.sin(h);p=Math.sin(p*h)/g,n=Math.sin(n*h)/g,this._x=this._x*p+a*n,this._y=this._y*p+r*n,this._z=this._z*p+o*n,this._w=this._w*p+u*n,this._onChangeCallback()}else this._x=this._x*p+a*n,this._y=this._y*p+r*n,this._z=this._z*p+o*n,this._w=this._w*p+u*n,this.normalize();return this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),r=Math.sqrt(1-a),o=Math.sqrt(a);return this.set(r*Math.sin(t),r*Math.cos(t),o*Math.sin(n),o*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class lt{constructor(t=0,n=0,a=0){lt.prototype.isVector3=!0,this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(p_.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(p_.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,r=this.z,o=t.elements;return this.x=o[0]*n+o[3]*a+o[6]*r,this.y=o[1]*n+o[4]*a+o[7]*r,this.z=o[2]*n+o[5]*a+o[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,r=this.z,o=t.elements,u=1/(o[3]*n+o[7]*a+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*a+o[8]*r+o[12])*u,this.y=(o[1]*n+o[5]*a+o[9]*r+o[13])*u,this.z=(o[2]*n+o[6]*a+o[10]*r+o[14])*u,this}applyQuaternion(t){const n=this.x,a=this.y,r=this.z,o=t.x,u=t.y,f=t.z,p=t.w,h=2*(u*r-f*a),g=2*(f*n-o*r),_=2*(o*a-u*n);return this.x=n+p*h+u*_-f*g,this.y=a+p*g+f*h-o*_,this.z=r+p*_+o*g-u*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,r=this.z,o=t.elements;return this.x=o[0]*n+o[4]*a+o[8]*r,this.y=o[1]*n+o[5]*a+o[9]*r,this.z=o[2]*n+o[6]*a+o[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Ce(this.x,t.x,n.x),this.y=Ce(this.y,t.y,n.y),this.z=Ce(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Ce(this.x,t,n),this.y=Ce(this.y,t,n),this.z=Ce(this.z,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Ce(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,r=t.y,o=t.z,u=n.x,f=n.y,p=n.z;return this.x=r*p-o*f,this.y=o*u-a*p,this.z=a*f-r*u,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return id.copy(this).projectOnVector(t),this.sub(id)}reflect(t){return this.sub(id.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(Ce(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,r=this.z-t.z;return n*n+a*a+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const r=Math.sin(n)*t;return this.x=r*Math.sin(a),this.y=Math.cos(n)*t,this.z=r*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=r,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(t),this.y=n,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const id=new lt,p_=new xr;class _e{constructor(t,n,a,r,o,u,f,p,h){_e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,r,o,u,f,p,h)}set(t,n,a,r,o,u,f,p,h){const g=this.elements;return g[0]=t,g[1]=r,g[2]=f,g[3]=n,g[4]=o,g[5]=p,g[6]=a,g[7]=u,g[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,r=n.elements,o=this.elements,u=a[0],f=a[3],p=a[6],h=a[1],g=a[4],_=a[7],v=a[2],y=a[5],M=a[8],b=r[0],S=r[3],x=r[6],T=r[1],U=r[4],C=r[7],L=r[2],B=r[5],P=r[8];return o[0]=u*b+f*T+p*L,o[3]=u*S+f*U+p*B,o[6]=u*x+f*C+p*P,o[1]=h*b+g*T+_*L,o[4]=h*S+g*U+_*B,o[7]=h*x+g*C+_*P,o[2]=v*b+y*T+M*L,o[5]=v*S+y*U+M*B,o[8]=v*x+y*C+M*P,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],r=t[2],o=t[3],u=t[4],f=t[5],p=t[6],h=t[7],g=t[8];return n*u*g-n*f*h-a*o*g+a*f*p+r*o*h-r*u*p}invert(){const t=this.elements,n=t[0],a=t[1],r=t[2],o=t[3],u=t[4],f=t[5],p=t[6],h=t[7],g=t[8],_=g*u-f*h,v=f*p-g*o,y=h*o-u*p,M=n*_+a*v+r*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/M;return t[0]=_*b,t[1]=(r*h-g*a)*b,t[2]=(f*a-r*u)*b,t[3]=v*b,t[4]=(g*n-r*p)*b,t[5]=(r*o-f*n)*b,t[6]=y*b,t[7]=(a*p-h*n)*b,t[8]=(u*n-a*o)*b,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,r,o,u,f){const p=Math.cos(o),h=Math.sin(o);return this.set(a*p,a*h,-a*(p*u+h*f)+u+t,-r*h,r*p,-r*(-h*u+p*f)+f+n,0,0,1),this}scale(t,n){return this.premultiply(ad.makeScale(t,n)),this}rotate(t){return this.premultiply(ad.makeRotation(-t)),this}translate(t,n){return this.premultiply(ad.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let r=0;r<9;r++)if(n[r]!==a[r])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ad=new _e,m_=new _e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),g_=new _e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function A1(){const c={enabled:!0,workingColorSpace:bo,spaces:{},convert:function(r,o,u){return this.enabled===!1||o===u||!o||!u||(this.spaces[o].transfer===Ye&&(r.r=Qa(r.r),r.g=Qa(r.g),r.b=Qa(r.b)),this.spaces[o].primaries!==this.spaces[u].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Ye&&(r.r=xo(r.r),r.g=xo(r.g),r.b=xo(r.b))),r},workingToColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},colorSpaceToWorking:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===zs?Nu:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,u){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,o){return zl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),c.workingToColorSpace(r,o)},toWorkingColorSpace:function(r,o){return zl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),c.colorSpaceToWorking(r,o)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return c.define({[bo]:{primaries:t,whitePoint:a,transfer:Nu,toXYZ:m_,fromXYZ:g_,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:jn},outputColorSpaceConfig:{drawingBufferColorSpace:jn}},[jn]:{primaries:t,whitePoint:a,transfer:Ye,toXYZ:m_,fromXYZ:g_,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:jn}}}),c}const Ue=A1();function Qa(c){return c<.04045?c*.0773993808:Math.pow(c*.9478672986+.0521327014,2.4)}function xo(c){return c<.0031308?c*12.92:1.055*Math.pow(c,.41666)-.055}let no;class w1{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{no===void 0&&(no=Lu("canvas")),no.width=t.width,no.height=t.height;const r=no.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),a=no}return a.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Lu("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const r=a.getImageData(0,0,t.width,t.height),o=r.data;for(let u=0;u<o.length;u++)o[u]=Qa(o[u]/255)*255;return a.putImageData(r,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(Qa(n[a]/255)*255):n[a]=Qa(n[a]);return{data:n,width:t.width,height:t.height}}else return pe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let R1=0;class kp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:R1++}),this.uuid=Fl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let u=0,f=r.length;u<f;u++)r[u].isDataTexture?o.push(sd(r[u].image)):o.push(sd(r[u]))}else o=sd(r);a.url=o}return n||(t.images[this.uuid]=a),a}}function sd(c){return typeof HTMLImageElement<"u"&&c instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&c instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&c instanceof ImageBitmap?w1.getDataURL(c):c.data?{data:Array.from(c.data),width:c.width,height:c.height,type:c.data.constructor.name}:(pe("Texture: Unable to serialize Texture."),{})}let C1=0;const rd=new lt;class qn extends Ao{constructor(t=qn.DEFAULT_IMAGE,n=qn.DEFAULT_MAPPING,a=Za,r=Za,o=In,u=Ps,f=Wi,p=Si,h=qn.DEFAULT_ANISOTROPY,g=zs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:C1++}),this.uuid=Fl(),this.name="",this.source=new kp(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=r,this.magFilter=o,this.minFilter=u,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=p,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(rd).x}get height(){return this.source.getSize(rd).y}get depth(){return this.source.getSize(rd).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const a=t[n];if(a===void 0){pe(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){pe(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&a&&r.isVector2&&a.isVector2||r&&a&&r.isVector3&&a.isVector3||r&&a&&r.isMatrix3&&a.isMatrix3?r.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Cx)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Wd:t.x=t.x-Math.floor(t.x);break;case Za:t.x=t.x<0?0:1;break;case Yd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Wd:t.y=t.y-Math.floor(t.y);break;case Za:t.y=t.y<0?0:1;break;case Yd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}qn.DEFAULT_IMAGE=null;qn.DEFAULT_MAPPING=Cx;qn.DEFAULT_ANISOTROPY=1;class dn{constructor(t=0,n=0,a=0,r=1){dn.prototype.isVector4=!0,this.x=t,this.y=n,this.z=a,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,a,r){return this.x=t,this.y=n,this.z=a,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,a=this.y,r=this.z,o=this.w,u=t.elements;return this.x=u[0]*n+u[4]*a+u[8]*r+u[12]*o,this.y=u[1]*n+u[5]*a+u[9]*r+u[13]*o,this.z=u[2]*n+u[6]*a+u[10]*r+u[14]*o,this.w=u[3]*n+u[7]*a+u[11]*r+u[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,a,r,o;const p=t.elements,h=p[0],g=p[4],_=p[8],v=p[1],y=p[5],M=p[9],b=p[2],S=p[6],x=p[10];if(Math.abs(g-v)<.01&&Math.abs(_-b)<.01&&Math.abs(M-S)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+b)<.1&&Math.abs(M+S)<.1&&Math.abs(h+y+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const U=(h+1)/2,C=(y+1)/2,L=(x+1)/2,B=(g+v)/4,P=(_+b)/4,q=(M+S)/4;return U>C&&U>L?U<.01?(a=0,r=.707106781,o=.707106781):(a=Math.sqrt(U),r=B/a,o=P/a):C>L?C<.01?(a=.707106781,r=0,o=.707106781):(r=Math.sqrt(C),a=B/r,o=q/r):L<.01?(a=.707106781,r=.707106781,o=0):(o=Math.sqrt(L),a=P/o,r=q/o),this.set(a,r,o,n),this}let T=Math.sqrt((S-M)*(S-M)+(_-b)*(_-b)+(v-g)*(v-g));return Math.abs(T)<.001&&(T=1),this.x=(S-M)/T,this.y=(_-b)/T,this.z=(v-g)/T,this.w=Math.acos((h+y+x-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Ce(this.x,t.x,n.x),this.y=Ce(this.y,t.y,n.y),this.z=Ce(this.z,t.z,n.z),this.w=Ce(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Ce(this.x,t,n),this.y=Ce(this.y,t,n),this.z=Ce(this.z,t,n),this.w=Ce(this.w,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Ce(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this.w=t.w+(n.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class D1 extends Ao{constructor(t=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=a.depth,this.scissor=new dn(0,0,t,n),this.scissorTest=!1,this.viewport=new dn(0,0,t,n);const r={width:t,height:n,depth:a.depth},o=new qn(r);this.textures=[];const u=a.count;for(let f=0;f<u;f++)this.textures[f]=o.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(t={}){const n={minFilter:In,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,a=1){if(this.width!==t||this.height!==n||this.depth!==a){this.width=t,this.height=n,this.depth=a;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=t,this.textures[r].image.height=n,this.textures[r].image.depth=a,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,a=t.textures.length;n<a;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},t.textures[n].image);this.textures[n].source=new kp(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ha extends D1{constructor(t=1,n=1,a={}){super(t,n,a),this.isWebGLRenderTarget=!0}}class Ix extends qn{constructor(t=null,n=1,a=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:a,depth:r},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Za,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class N1 extends qn{constructor(t=null,n=1,a=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:a,depth:r},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Za,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Il{constructor(t=new lt(1/0,1/0,1/0),n=new lt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n+=3)this.expandByPoint(Hi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,a=t.count;n<a;n++)this.expandByPoint(Hi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=Hi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const o=a.getAttribute("position");if(n===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let u=0,f=o.count;u<f;u++)t.isMesh===!0?t.getVertexPosition(u,Hi):Hi.fromBufferAttribute(o,u),Hi.applyMatrix4(t.matrixWorld),this.expandByPoint(Hi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),iu.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),iu.copy(a.boundingBox)),iu.applyMatrix4(t.matrixWorld),this.union(iu)}const r=t.children;for(let o=0,u=r.length;o<u;o++)this.expandByObject(r[o],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Hi),Hi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,a;return t.normal.x>0?(n=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),n<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(El),au.subVectors(this.max,El),io.subVectors(t.a,El),ao.subVectors(t.b,El),so.subVectors(t.c,El),Rs.subVectors(ao,io),Cs.subVectors(so,ao),ir.subVectors(io,so);let n=[0,-Rs.z,Rs.y,0,-Cs.z,Cs.y,0,-ir.z,ir.y,Rs.z,0,-Rs.x,Cs.z,0,-Cs.x,ir.z,0,-ir.x,-Rs.y,Rs.x,0,-Cs.y,Cs.x,0,-ir.y,ir.x,0];return!od(n,io,ao,so,au)||(n=[1,0,0,0,1,0,0,0,1],!od(n,io,ao,so,au))?!1:(su.crossVectors(Rs,Cs),n=[su.x,su.y,su.z],od(n,io,ao,so,au))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Hi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Hi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Va[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Va[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Va[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Va[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Va[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Va[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Va[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Va[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Va),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Va=[new lt,new lt,new lt,new lt,new lt,new lt,new lt,new lt],Hi=new lt,iu=new Il,io=new lt,ao=new lt,so=new lt,Rs=new lt,Cs=new lt,ir=new lt,El=new lt,au=new lt,su=new lt,ar=new lt;function od(c,t,n,a,r){for(let o=0,u=c.length-3;o<=u;o+=3){ar.fromArray(c,o);const f=r.x*Math.abs(ar.x)+r.y*Math.abs(ar.y)+r.z*Math.abs(ar.z),p=t.dot(ar),h=n.dot(ar),g=a.dot(ar);if(Math.max(-Math.max(p,h,g),Math.min(p,h,g))>f)return!1}return!0}const U1=new Il,bl=new lt,ld=new lt;class qp{constructor(t=new lt,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const a=this.center;n!==void 0?a.copy(n):U1.setFromPoints(t).getCenter(a);let r=0;for(let o=0,u=t.length;o<u;o++)r=Math.max(r,a.distanceToSquared(t[o]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const a=this.center.distanceToSquared(t);return n.copy(t),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;bl.subVectors(t,this.center);const n=bl.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),r=(a-this.radius)*.5;this.center.addScaledVector(bl,r/a),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ld.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(bl.copy(t.center).add(ld)),this.expandByPoint(bl.copy(t.center).sub(ld))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ka=new lt,cd=new lt,ru=new lt,Ds=new lt,ud=new lt,ou=new lt,fd=new lt;class Hx{constructor(t=new lt,n=new lt(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ka)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=ka.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(ka.copy(this.origin).addScaledVector(this.direction,n),ka.distanceToSquared(t))}distanceSqToSegment(t,n,a,r){cd.copy(t).add(n).multiplyScalar(.5),ru.copy(n).sub(t).normalize(),Ds.copy(this.origin).sub(cd);const o=t.distanceTo(n)*.5,u=-this.direction.dot(ru),f=Ds.dot(this.direction),p=-Ds.dot(ru),h=Ds.lengthSq(),g=Math.abs(1-u*u);let _,v,y,M;if(g>0)if(_=u*p-f,v=u*f-p,M=o*g,_>=0)if(v>=-M)if(v<=M){const b=1/g;_*=b,v*=b,y=_*(_+u*v+2*f)+v*(u*_+v+2*p)+h}else v=o,_=Math.max(0,-(u*v+f)),y=-_*_+v*(v+2*p)+h;else v=-o,_=Math.max(0,-(u*v+f)),y=-_*_+v*(v+2*p)+h;else v<=-M?(_=Math.max(0,-(-u*o+f)),v=_>0?-o:Math.min(Math.max(-o,-p),o),y=-_*_+v*(v+2*p)+h):v<=M?(_=0,v=Math.min(Math.max(-o,-p),o),y=v*(v+2*p)+h):(_=Math.max(0,-(u*o+f)),v=_>0?o:Math.min(Math.max(-o,-p),o),y=-_*_+v*(v+2*p)+h);else v=u>0?-o:o,_=Math.max(0,-(u*v+f)),y=-_*_+v*(v+2*p)+h;return a&&a.copy(this.origin).addScaledVector(this.direction,_),r&&r.copy(cd).addScaledVector(ru,v),y}intersectSphere(t,n){ka.subVectors(t.center,this.origin);const a=ka.dot(this.direction),r=ka.dot(ka)-a*a,o=t.radius*t.radius;if(r>o)return null;const u=Math.sqrt(o-r),f=a-u,p=a+u;return p<0?null:f<0?this.at(p,n):this.at(f,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/n;return a>=0?a:null}intersectPlane(t,n){const a=this.distanceToPlane(t);return a===null?null:this.at(a,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let a,r,o,u,f,p;const h=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return h>=0?(a=(t.min.x-v.x)*h,r=(t.max.x-v.x)*h):(a=(t.max.x-v.x)*h,r=(t.min.x-v.x)*h),g>=0?(o=(t.min.y-v.y)*g,u=(t.max.y-v.y)*g):(o=(t.max.y-v.y)*g,u=(t.min.y-v.y)*g),a>u||o>r||((o>a||isNaN(a))&&(a=o),(u<r||isNaN(r))&&(r=u),_>=0?(f=(t.min.z-v.z)*_,p=(t.max.z-v.z)*_):(f=(t.max.z-v.z)*_,p=(t.min.z-v.z)*_),a>p||f>r)||((f>a||a!==a)&&(a=f),(p<r||r!==r)&&(r=p),r<0)?null:this.at(a>=0?a:r,n)}intersectsBox(t){return this.intersectBox(t,ka)!==null}intersectTriangle(t,n,a,r,o){ud.subVectors(n,t),ou.subVectors(a,t),fd.crossVectors(ud,ou);let u=this.direction.dot(fd),f;if(u>0){if(r)return null;f=1}else if(u<0)f=-1,u=-u;else return null;Ds.subVectors(this.origin,t);const p=f*this.direction.dot(ou.crossVectors(Ds,ou));if(p<0)return null;const h=f*this.direction.dot(ud.cross(Ds));if(h<0||p+h>u)return null;const g=-f*Ds.dot(fd);return g<0?null:this.at(g/u,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class cn{constructor(t,n,a,r,o,u,f,p,h,g,_,v,y,M,b,S){cn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,r,o,u,f,p,h,g,_,v,y,M,b,S)}set(t,n,a,r,o,u,f,p,h,g,_,v,y,M,b,S){const x=this.elements;return x[0]=t,x[4]=n,x[8]=a,x[12]=r,x[1]=o,x[5]=u,x[9]=f,x[13]=p,x[2]=h,x[6]=g,x[10]=_,x[14]=v,x[3]=y,x[7]=M,x[11]=b,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new cn().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return this.determinant()===0?(t.set(1,0,0),n.set(0,1,0),a.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const n=this.elements,a=t.elements,r=1/ro.setFromMatrixColumn(t,0).length(),o=1/ro.setFromMatrixColumn(t,1).length(),u=1/ro.setFromMatrixColumn(t,2).length();return n[0]=a[0]*r,n[1]=a[1]*r,n[2]=a[2]*r,n[3]=0,n[4]=a[4]*o,n[5]=a[5]*o,n[6]=a[6]*o,n[7]=0,n[8]=a[8]*u,n[9]=a[9]*u,n[10]=a[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,r=t.y,o=t.z,u=Math.cos(a),f=Math.sin(a),p=Math.cos(r),h=Math.sin(r),g=Math.cos(o),_=Math.sin(o);if(t.order==="XYZ"){const v=u*g,y=u*_,M=f*g,b=f*_;n[0]=p*g,n[4]=-p*_,n[8]=h,n[1]=y+M*h,n[5]=v-b*h,n[9]=-f*p,n[2]=b-v*h,n[6]=M+y*h,n[10]=u*p}else if(t.order==="YXZ"){const v=p*g,y=p*_,M=h*g,b=h*_;n[0]=v+b*f,n[4]=M*f-y,n[8]=u*h,n[1]=u*_,n[5]=u*g,n[9]=-f,n[2]=y*f-M,n[6]=b+v*f,n[10]=u*p}else if(t.order==="ZXY"){const v=p*g,y=p*_,M=h*g,b=h*_;n[0]=v-b*f,n[4]=-u*_,n[8]=M+y*f,n[1]=y+M*f,n[5]=u*g,n[9]=b-v*f,n[2]=-u*h,n[6]=f,n[10]=u*p}else if(t.order==="ZYX"){const v=u*g,y=u*_,M=f*g,b=f*_;n[0]=p*g,n[4]=M*h-y,n[8]=v*h+b,n[1]=p*_,n[5]=b*h+v,n[9]=y*h-M,n[2]=-h,n[6]=f*p,n[10]=u*p}else if(t.order==="YZX"){const v=u*p,y=u*h,M=f*p,b=f*h;n[0]=p*g,n[4]=b-v*_,n[8]=M*_+y,n[1]=_,n[5]=u*g,n[9]=-f*g,n[2]=-h*g,n[6]=y*_+M,n[10]=v-b*_}else if(t.order==="XZY"){const v=u*p,y=u*h,M=f*p,b=f*h;n[0]=p*g,n[4]=-_,n[8]=h*g,n[1]=v*_+b,n[5]=u*g,n[9]=y*_-M,n[2]=M*_-y,n[6]=f*g,n[10]=b*_+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(L1,t,O1)}lookAt(t,n,a){const r=this.elements;return xi.subVectors(t,n),xi.lengthSq()===0&&(xi.z=1),xi.normalize(),Ns.crossVectors(a,xi),Ns.lengthSq()===0&&(Math.abs(a.z)===1?xi.x+=1e-4:xi.z+=1e-4,xi.normalize(),Ns.crossVectors(a,xi)),Ns.normalize(),lu.crossVectors(xi,Ns),r[0]=Ns.x,r[4]=lu.x,r[8]=xi.x,r[1]=Ns.y,r[5]=lu.y,r[9]=xi.y,r[2]=Ns.z,r[6]=lu.z,r[10]=xi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,r=n.elements,o=this.elements,u=a[0],f=a[4],p=a[8],h=a[12],g=a[1],_=a[5],v=a[9],y=a[13],M=a[2],b=a[6],S=a[10],x=a[14],T=a[3],U=a[7],C=a[11],L=a[15],B=r[0],P=r[4],q=r[8],w=r[12],O=r[1],H=r[5],$=r[9],V=r[13],K=r[2],W=r[6],z=r[10],G=r[14],Q=r[3],mt=r[7],yt=r[11],F=r[15];return o[0]=u*B+f*O+p*K+h*Q,o[4]=u*P+f*H+p*W+h*mt,o[8]=u*q+f*$+p*z+h*yt,o[12]=u*w+f*V+p*G+h*F,o[1]=g*B+_*O+v*K+y*Q,o[5]=g*P+_*H+v*W+y*mt,o[9]=g*q+_*$+v*z+y*yt,o[13]=g*w+_*V+v*G+y*F,o[2]=M*B+b*O+S*K+x*Q,o[6]=M*P+b*H+S*W+x*mt,o[10]=M*q+b*$+S*z+x*yt,o[14]=M*w+b*V+S*G+x*F,o[3]=T*B+U*O+C*K+L*Q,o[7]=T*P+U*H+C*W+L*mt,o[11]=T*q+U*$+C*z+L*yt,o[15]=T*w+U*V+C*G+L*F,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],r=t[8],o=t[12],u=t[1],f=t[5],p=t[9],h=t[13],g=t[2],_=t[6],v=t[10],y=t[14],M=t[3],b=t[7],S=t[11],x=t[15],T=p*y-h*v,U=f*y-h*_,C=f*v-p*_,L=u*y-h*g,B=u*v-p*g,P=u*_-f*g;return n*(b*T-S*U+x*C)-a*(M*T-S*L+x*B)+r*(M*U-b*L+x*P)-o*(M*C-b*B+S*P)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=n,r[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],r=t[2],o=t[3],u=t[4],f=t[5],p=t[6],h=t[7],g=t[8],_=t[9],v=t[10],y=t[11],M=t[12],b=t[13],S=t[14],x=t[15],T=_*S*h-b*v*h+b*p*y-f*S*y-_*p*x+f*v*x,U=M*v*h-g*S*h-M*p*y+u*S*y+g*p*x-u*v*x,C=g*b*h-M*_*h+M*f*y-u*b*y-g*f*x+u*_*x,L=M*_*p-g*b*p-M*f*v+u*b*v+g*f*S-u*_*S,B=n*T+a*U+r*C+o*L;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/B;return t[0]=T*P,t[1]=(b*v*o-_*S*o-b*r*y+a*S*y+_*r*x-a*v*x)*P,t[2]=(f*S*o-b*p*o+b*r*h-a*S*h-f*r*x+a*p*x)*P,t[3]=(_*p*o-f*v*o-_*r*h+a*v*h+f*r*y-a*p*y)*P,t[4]=U*P,t[5]=(g*S*o-M*v*o+M*r*y-n*S*y-g*r*x+n*v*x)*P,t[6]=(M*p*o-u*S*o-M*r*h+n*S*h+u*r*x-n*p*x)*P,t[7]=(u*v*o-g*p*o+g*r*h-n*v*h-u*r*y+n*p*y)*P,t[8]=C*P,t[9]=(M*_*o-g*b*o-M*a*y+n*b*y+g*a*x-n*_*x)*P,t[10]=(u*b*o-M*f*o+M*a*h-n*b*h-u*a*x+n*f*x)*P,t[11]=(g*f*o-u*_*o-g*a*h+n*_*h+u*a*y-n*f*y)*P,t[12]=L*P,t[13]=(g*b*r-M*_*r+M*a*v-n*b*v-g*a*S+n*_*S)*P,t[14]=(M*f*r-u*b*r-M*a*p+n*b*p+u*a*S-n*f*S)*P,t[15]=(u*_*r-g*f*r+g*a*p-n*_*p-u*a*v+n*f*v)*P,this}scale(t){const n=this.elements,a=t.x,r=t.y,o=t.z;return n[0]*=a,n[4]*=r,n[8]*=o,n[1]*=a,n[5]*=r,n[9]*=o,n[2]*=a,n[6]*=r,n[10]*=o,n[3]*=a,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,r))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),r=Math.sin(n),o=1-a,u=t.x,f=t.y,p=t.z,h=o*u,g=o*f;return this.set(h*u+a,h*f-r*p,h*p+r*f,0,h*f+r*p,g*f+a,g*p-r*u,0,h*p-r*f,g*p+r*u,o*p*p+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,r,o,u){return this.set(1,a,o,0,t,1,u,0,n,r,1,0,0,0,0,1),this}compose(t,n,a){const r=this.elements,o=n._x,u=n._y,f=n._z,p=n._w,h=o+o,g=u+u,_=f+f,v=o*h,y=o*g,M=o*_,b=u*g,S=u*_,x=f*_,T=p*h,U=p*g,C=p*_,L=a.x,B=a.y,P=a.z;return r[0]=(1-(b+x))*L,r[1]=(y+C)*L,r[2]=(M-U)*L,r[3]=0,r[4]=(y-C)*B,r[5]=(1-(v+x))*B,r[6]=(S+T)*B,r[7]=0,r[8]=(M+U)*P,r[9]=(S-T)*P,r[10]=(1-(v+b))*P,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,n,a){const r=this.elements;if(t.x=r[12],t.y=r[13],t.z=r[14],this.determinant()===0)return a.set(1,1,1),n.identity(),this;let o=ro.set(r[0],r[1],r[2]).length();const u=ro.set(r[4],r[5],r[6]).length(),f=ro.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),Gi.copy(this);const h=1/o,g=1/u,_=1/f;return Gi.elements[0]*=h,Gi.elements[1]*=h,Gi.elements[2]*=h,Gi.elements[4]*=g,Gi.elements[5]*=g,Gi.elements[6]*=g,Gi.elements[8]*=_,Gi.elements[9]*=_,Gi.elements[10]*=_,n.setFromRotationMatrix(Gi),a.x=o,a.y=u,a.z=f,this}makePerspective(t,n,a,r,o,u,f=ua,p=!1){const h=this.elements,g=2*o/(n-t),_=2*o/(a-r),v=(n+t)/(n-t),y=(a+r)/(a-r);let M,b;if(p)M=o/(u-o),b=u*o/(u-o);else if(f===ua)M=-(u+o)/(u-o),b=-2*u*o/(u-o);else if(f===Uu)M=-u/(u-o),b=-u*o/(u-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=g,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=_,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=b,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,n,a,r,o,u,f=ua,p=!1){const h=this.elements,g=2/(n-t),_=2/(a-r),v=-(n+t)/(n-t),y=-(a+r)/(a-r);let M,b;if(p)M=1/(u-o),b=u/(u-o);else if(f===ua)M=-2/(u-o),b=-(u+o)/(u-o);else if(f===Uu)M=-1/(u-o),b=-o/(u-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=g,h[4]=0,h[8]=0,h[12]=v,h[1]=0,h[5]=_,h[9]=0,h[13]=y,h[2]=0,h[6]=0,h[10]=M,h[14]=b,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let r=0;r<16;r++)if(n[r]!==a[r])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}}const ro=new lt,Gi=new cn,L1=new lt(0,0,0),O1=new lt(1,1,1),Ns=new lt,lu=new lt,xi=new lt,v_=new cn,__=new xr;class ma{constructor(t=0,n=0,a=0,r=ma.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,r=this._order){return this._x=t,this._y=n,this._z=a,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const r=t.elements,o=r[0],u=r[4],f=r[8],p=r[1],h=r[5],g=r[9],_=r[2],v=r[6],y=r[10];switch(n){case"XYZ":this._y=Math.asin(Ce(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-u,o)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ce(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(p,h)):(this._y=Math.atan2(-_,o),this._z=0);break;case"ZXY":this._x=Math.asin(Ce(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(p,o));break;case"ZYX":this._y=Math.asin(-Ce(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(p,o)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(Ce(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,h),this._y=Math.atan2(-_,o)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-Ce(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(f,o)):(this._x=Math.atan2(-g,y),this._y=0);break;default:pe("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return v_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(v_,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return __.setFromEuler(this),this.setFromQuaternion(__,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ma.DEFAULT_ORDER="XYZ";class Xp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let z1=0;const x_=new lt,oo=new xr,qa=new cn,cu=new lt,Tl=new lt,P1=new lt,B1=new xr,y_=new lt(1,0,0),S_=new lt(0,1,0),M_=new lt(0,0,1),E_={type:"added"},F1={type:"removed"},lo={type:"childadded",child:null},hd={type:"childremoved",child:null};class Xn extends Ao{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:z1++}),this.uuid=Fl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xn.DEFAULT_UP.clone();const t=new lt,n=new ma,a=new xr,r=new lt(1,1,1);function o(){a.setFromEuler(n,!1)}function u(){n.setFromQuaternion(a,void 0,!1)}n._onChange(o),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new cn},normalMatrix:{value:new _e}}),this.matrix=new cn,this.matrixWorld=new cn,this.matrixAutoUpdate=Xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return oo.setFromAxisAngle(t,n),this.quaternion.multiply(oo),this}rotateOnWorldAxis(t,n){return oo.setFromAxisAngle(t,n),this.quaternion.premultiply(oo),this}rotateX(t){return this.rotateOnAxis(y_,t)}rotateY(t){return this.rotateOnAxis(S_,t)}rotateZ(t){return this.rotateOnAxis(M_,t)}translateOnAxis(t,n){return x_.copy(t).applyQuaternion(this.quaternion),this.position.add(x_.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(y_,t)}translateY(t){return this.translateOnAxis(S_,t)}translateZ(t){return this.translateOnAxis(M_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(qa.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?cu.copy(t):cu.set(t,n,a);const r=this.parent;this.updateWorldMatrix(!0,!1),Tl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qa.lookAt(Tl,cu,this.up):qa.lookAt(cu,Tl,this.up),this.quaternion.setFromRotationMatrix(qa),r&&(qa.extractRotation(r.matrixWorld),oo.setFromRotationMatrix(qa),this.quaternion.premultiply(oo.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Ne("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(E_),lo.child=t,this.dispatchEvent(lo),lo.child=null):Ne("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(F1),hd.child=t,this.dispatchEvent(hd),hd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),qa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),qa.multiply(t.parent.matrixWorld)),t.applyMatrix4(qa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(E_),lo.child=t,this.dispatchEvent(lo),lo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,r=this.children.length;a<r;a++){const u=this.children[a].getObjectByProperty(t,n);if(u!==void 0)return u}}getObjectsByProperty(t,n,a=[]){this[t]===n&&a.push(this);const r=this.children;for(let o=0,u=r.length;o<u;o++)r[o].getObjectsByProperty(t,n,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tl,t,P1),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tl,B1,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].updateMatrixWorld(t)}updateWorldMatrix(t,n){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let o=0,u=r.length;o<u;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(f=>({...f})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function o(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(t.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let h=0,g=p.length;h<g;h++){const _=p[h];o(t.shapes,_)}else o(t.shapes,p)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,h=this.material.length;p<h;p++)f.push(o(t.materials,this.material[p]));r.material=f}else r.material=o(t.materials,this.material);if(this.children.length>0){r.children=[];for(let f=0;f<this.children.length;f++)r.children.push(this.children[f].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];r.animations.push(o(t.animations,p))}}if(n){const f=u(t.geometries),p=u(t.materials),h=u(t.textures),g=u(t.images),_=u(t.shapes),v=u(t.skeletons),y=u(t.animations),M=u(t.nodes);f.length>0&&(a.geometries=f),p.length>0&&(a.materials=p),h.length>0&&(a.textures=h),g.length>0&&(a.images=g),_.length>0&&(a.shapes=_),v.length>0&&(a.skeletons=v),y.length>0&&(a.animations=y),M.length>0&&(a.nodes=M)}return a.object=r,a;function u(f){const p=[];for(const h in f){const g=f[h];delete g.metadata,p.push(g)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const r=t.children[a];this.add(r.clone())}return this}}Xn.DEFAULT_UP=new lt(0,1,0);Xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vi=new lt,Xa=new lt,dd=new lt,Wa=new lt,co=new lt,uo=new lt,b_=new lt,pd=new lt,md=new lt,gd=new lt,vd=new dn,_d=new dn,xd=new dn;class qi{constructor(t=new lt,n=new lt,a=new lt){this.a=t,this.b=n,this.c=a}static getNormal(t,n,a,r){r.subVectors(a,n),Vi.subVectors(t,n),r.cross(Vi);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(t,n,a,r,o){Vi.subVectors(r,n),Xa.subVectors(a,n),dd.subVectors(t,n);const u=Vi.dot(Vi),f=Vi.dot(Xa),p=Vi.dot(dd),h=Xa.dot(Xa),g=Xa.dot(dd),_=u*h-f*f;if(_===0)return o.set(0,0,0),null;const v=1/_,y=(h*p-f*g)*v,M=(u*g-f*p)*v;return o.set(1-y-M,M,y)}static containsPoint(t,n,a,r){return this.getBarycoord(t,n,a,r,Wa)===null?!1:Wa.x>=0&&Wa.y>=0&&Wa.x+Wa.y<=1}static getInterpolation(t,n,a,r,o,u,f,p){return this.getBarycoord(t,n,a,r,Wa)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(o,Wa.x),p.addScaledVector(u,Wa.y),p.addScaledVector(f,Wa.z),p)}static getInterpolatedAttribute(t,n,a,r,o,u){return vd.setScalar(0),_d.setScalar(0),xd.setScalar(0),vd.fromBufferAttribute(t,n),_d.fromBufferAttribute(t,a),xd.fromBufferAttribute(t,r),u.setScalar(0),u.addScaledVector(vd,o.x),u.addScaledVector(_d,o.y),u.addScaledVector(xd,o.z),u}static isFrontFacing(t,n,a,r){return Vi.subVectors(a,n),Xa.subVectors(t,n),Vi.cross(Xa).dot(r)<0}set(t,n,a){return this.a.copy(t),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(t,n,a,r){return this.a.copy(t[n]),this.b.copy(t[a]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,n,a,r){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Vi.subVectors(this.c,this.b),Xa.subVectors(this.a,this.b),Vi.cross(Xa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return qi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return qi.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,a,r,o){return qi.getInterpolation(t,this.a,this.b,this.c,n,a,r,o)}containsPoint(t){return qi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return qi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const a=this.a,r=this.b,o=this.c;let u,f;co.subVectors(r,a),uo.subVectors(o,a),pd.subVectors(t,a);const p=co.dot(pd),h=uo.dot(pd);if(p<=0&&h<=0)return n.copy(a);md.subVectors(t,r);const g=co.dot(md),_=uo.dot(md);if(g>=0&&_<=g)return n.copy(r);const v=p*_-g*h;if(v<=0&&p>=0&&g<=0)return u=p/(p-g),n.copy(a).addScaledVector(co,u);gd.subVectors(t,o);const y=co.dot(gd),M=uo.dot(gd);if(M>=0&&y<=M)return n.copy(o);const b=y*h-p*M;if(b<=0&&h>=0&&M<=0)return f=h/(h-M),n.copy(a).addScaledVector(uo,f);const S=g*M-y*_;if(S<=0&&_-g>=0&&y-M>=0)return b_.subVectors(o,r),f=(_-g)/(_-g+(y-M)),n.copy(r).addScaledVector(b_,f);const x=1/(S+b+v);return u=b*x,f=v*x,n.copy(a).addScaledVector(co,u).addScaledVector(uo,f)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Gx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Us={h:0,s:0,l:0},uu={h:0,s:0,l:0};function yd(c,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?c+(t-c)*6*n:n<1/2?t:n<2/3?c+(t-c)*6*(2/3-n):c}class Pe{constructor(t,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,a)}set(t,n,a){if(n===void 0&&a===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,n,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=jn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ue.colorSpaceToWorking(this,n),this}setRGB(t,n,a,r=Ue.workingColorSpace){return this.r=t,this.g=n,this.b=a,Ue.colorSpaceToWorking(this,r),this}setHSL(t,n,a,r=Ue.workingColorSpace){if(t=T1(t,1),n=Ce(n,0,1),a=Ce(a,0,1),n===0)this.r=this.g=this.b=a;else{const o=a<=.5?a*(1+n):a+n-a*n,u=2*a-o;this.r=yd(u,o,t+1/3),this.g=yd(u,o,t),this.b=yd(u,o,t-1/3)}return Ue.colorSpaceToWorking(this,r),this}setStyle(t,n=jn){function a(o){o!==void 0&&parseFloat(o)<1&&pe("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const u=r[1],f=r[2];switch(u){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:pe("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=r[1],u=o.length;if(u===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(o,16),n);pe("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=jn){const a=Gx[t.toLowerCase()];return a!==void 0?this.setHex(a,n):pe("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Qa(t.r),this.g=Qa(t.g),this.b=Qa(t.b),this}copyLinearToSRGB(t){return this.r=xo(t.r),this.g=xo(t.g),this.b=xo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=jn){return Ue.workingToColorSpace(kn.copy(this),t),Math.round(Ce(kn.r*255,0,255))*65536+Math.round(Ce(kn.g*255,0,255))*256+Math.round(Ce(kn.b*255,0,255))}getHexString(t=jn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Ue.workingColorSpace){Ue.workingToColorSpace(kn.copy(this),n);const a=kn.r,r=kn.g,o=kn.b,u=Math.max(a,r,o),f=Math.min(a,r,o);let p,h;const g=(f+u)/2;if(f===u)p=0,h=0;else{const _=u-f;switch(h=g<=.5?_/(u+f):_/(2-u-f),u){case a:p=(r-o)/_+(r<o?6:0);break;case r:p=(o-a)/_+2;break;case o:p=(a-r)/_+4;break}p/=6}return t.h=p,t.s=h,t.l=g,t}getRGB(t,n=Ue.workingColorSpace){return Ue.workingToColorSpace(kn.copy(this),n),t.r=kn.r,t.g=kn.g,t.b=kn.b,t}getStyle(t=jn){Ue.workingToColorSpace(kn.copy(this),t);const n=kn.r,a=kn.g,r=kn.b;return t!==jn?`color(${t} ${n.toFixed(3)} ${a.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(r*255)})`}offsetHSL(t,n,a){return this.getHSL(Us),this.setHSL(Us.h+t,Us.s+n,Us.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,a){return this.r=t.r+(n.r-t.r)*a,this.g=t.g+(n.g-t.g)*a,this.b=t.b+(n.b-t.b)*a,this}lerpHSL(t,n){this.getHSL(Us),t.getHSL(uu);const a=nd(Us.h,uu.h,n),r=nd(Us.s,uu.s,n),o=nd(Us.l,uu.l,n);return this.setHSL(a,r,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,a=this.g,r=this.b,o=t.elements;return this.r=o[0]*n+o[3]*a+o[6]*r,this.g=o[1]*n+o[4]*a+o[7]*r,this.b=o[2]*n+o[5]*a+o[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kn=new Pe;Pe.NAMES=Gx;let I1=0;class Hl extends Ao{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:I1++}),this.uuid=Fl(),this.name="",this.type="Material",this.blending=_o,this.side=Fs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zd,this.blendDst=Pd,this.blendEquation=pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=So,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=c_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=eo,this.stencilZFail=eo,this.stencilZPass=eo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const a=t[n];if(a===void 0){pe(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){pe(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(a):r&&r.isVector3&&a&&a.isVector3?r.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==_o&&(a.blending=this.blending),this.side!==Fs&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==zd&&(a.blendSrc=this.blendSrc),this.blendDst!==Pd&&(a.blendDst=this.blendDst),this.blendEquation!==pr&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==So&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==c_&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==eo&&(a.stencilFail=this.stencilFail),this.stencilZFail!==eo&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==eo&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.allowOverride===!1&&(a.allowOverride=!1),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function r(o){const u=[];for(const f in o){const p=o[f];delete p.metadata,u.push(p)}return u}if(n){const o=r(t.textures),u=r(t.images);o.length>0&&(a.textures=o),u.length>0&&(a.images=u)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let a=null;if(n!==null){const r=n.length;a=new Array(r);for(let o=0;o!==r;++o)a[o]=n[o].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Vx extends Hl{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ma,this.combine=Sx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const yn=new lt,fu=new Be;let H1=0;class da{constructor(t,n,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:H1++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=a,this.usage=u_,this.updateRanges=[],this.gpuType=ca,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,a){t*=this.itemSize,a*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[t+r]=n.array[a+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)fu.fromBufferAttribute(this,n),fu.applyMatrix3(t),this.setXY(n,fu.x,fu.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)yn.fromBufferAttribute(this,n),yn.applyMatrix3(t),this.setXYZ(n,yn.x,yn.y,yn.z);return this}applyMatrix4(t){for(let n=0,a=this.count;n<a;n++)yn.fromBufferAttribute(this,n),yn.applyMatrix4(t),this.setXYZ(n,yn.x,yn.y,yn.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)yn.fromBufferAttribute(this,n),yn.applyNormalMatrix(t),this.setXYZ(n,yn.x,yn.y,yn.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)yn.fromBufferAttribute(this,n),yn.transformDirection(t),this.setXYZ(n,yn.x,yn.y,yn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let a=this.array[t*this.itemSize+n];return this.normalized&&(a=Ml(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=ai(a,this.array)),this.array[t*this.itemSize+n]=a,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Ml(n,this.array)),n}setX(t,n){return this.normalized&&(n=ai(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Ml(n,this.array)),n}setY(t,n){return this.normalized&&(n=ai(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Ml(n,this.array)),n}setZ(t,n){return this.normalized&&(n=ai(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Ml(n,this.array)),n}setW(t,n){return this.normalized&&(n=ai(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,a){return t*=this.itemSize,this.normalized&&(n=ai(n,this.array),a=ai(a,this.array)),this.array[t+0]=n,this.array[t+1]=a,this}setXYZ(t,n,a,r){return t*=this.itemSize,this.normalized&&(n=ai(n,this.array),a=ai(a,this.array),r=ai(r,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=r,this}setXYZW(t,n,a,r,o){return t*=this.itemSize,this.normalized&&(n=ai(n,this.array),a=ai(a,this.array),r=ai(r,this.array),o=ai(o,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=r,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==u_&&(t.usage=this.usage),t}}class kx extends da{constructor(t,n,a){super(new Uint16Array(t),n,a)}}class qx extends da{constructor(t,n,a){super(new Uint32Array(t),n,a)}}class Ja extends da{constructor(t,n,a){super(new Float32Array(t),n,a)}}let G1=0;const Ui=new cn,Sd=new Xn,fo=new lt,yi=new Il,Al=new Il,Rn=new lt;class es extends Ao{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:G1++}),this.uuid=Fl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Fx(t)?qx:kx)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,a=0){this.groups.push({start:t,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const o=new _e().getNormalMatrix(t);a.applyNormalMatrix(o),a.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ui.makeRotationFromQuaternion(t),this.applyMatrix4(Ui),this}rotateX(t){return Ui.makeRotationX(t),this.applyMatrix4(Ui),this}rotateY(t){return Ui.makeRotationY(t),this.applyMatrix4(Ui),this}rotateZ(t){return Ui.makeRotationZ(t),this.applyMatrix4(Ui),this}translate(t,n,a){return Ui.makeTranslation(t,n,a),this.applyMatrix4(Ui),this}scale(t,n,a){return Ui.makeScale(t,n,a),this.applyMatrix4(Ui),this}lookAt(t){return Sd.lookAt(t),Sd.updateMatrix(),this.applyMatrix4(Sd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fo).negate(),this.translate(fo.x,fo.y,fo.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let r=0,o=t.length;r<o;r++){const u=t[r];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Ja(a,3))}else{const a=Math.min(t.length,n.count);for(let r=0;r<a;r++){const o=t[r];n.setXYZ(r,o.x,o.y,o.z||0)}t.length>n.count&&pe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Il);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ne("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new lt(-1/0,-1/0,-1/0),new lt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let a=0,r=n.length;a<r;a++){const o=n[a];yi.setFromBufferAttribute(o),this.morphTargetsRelative?(Rn.addVectors(this.boundingBox.min,yi.min),this.boundingBox.expandByPoint(Rn),Rn.addVectors(this.boundingBox.max,yi.max),this.boundingBox.expandByPoint(Rn)):(this.boundingBox.expandByPoint(yi.min),this.boundingBox.expandByPoint(yi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ne('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qp);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ne("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new lt,1/0);return}if(t){const a=this.boundingSphere.center;if(yi.setFromBufferAttribute(t),n)for(let o=0,u=n.length;o<u;o++){const f=n[o];Al.setFromBufferAttribute(f),this.morphTargetsRelative?(Rn.addVectors(yi.min,Al.min),yi.expandByPoint(Rn),Rn.addVectors(yi.max,Al.max),yi.expandByPoint(Rn)):(yi.expandByPoint(Al.min),yi.expandByPoint(Al.max))}yi.getCenter(a);let r=0;for(let o=0,u=t.count;o<u;o++)Rn.fromBufferAttribute(t,o),r=Math.max(r,a.distanceToSquared(Rn));if(n)for(let o=0,u=n.length;o<u;o++){const f=n[o],p=this.morphTargetsRelative;for(let h=0,g=f.count;h<g;h++)Rn.fromBufferAttribute(f,h),p&&(fo.fromBufferAttribute(t,h),Rn.add(fo)),r=Math.max(r,a.distanceToSquared(Rn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ne('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ne("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,r=n.normal,o=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new da(new Float32Array(4*a.count),4));const u=this.getAttribute("tangent"),f=[],p=[];for(let q=0;q<a.count;q++)f[q]=new lt,p[q]=new lt;const h=new lt,g=new lt,_=new lt,v=new Be,y=new Be,M=new Be,b=new lt,S=new lt;function x(q,w,O){h.fromBufferAttribute(a,q),g.fromBufferAttribute(a,w),_.fromBufferAttribute(a,O),v.fromBufferAttribute(o,q),y.fromBufferAttribute(o,w),M.fromBufferAttribute(o,O),g.sub(h),_.sub(h),y.sub(v),M.sub(v);const H=1/(y.x*M.y-M.x*y.y);isFinite(H)&&(b.copy(g).multiplyScalar(M.y).addScaledVector(_,-y.y).multiplyScalar(H),S.copy(_).multiplyScalar(y.x).addScaledVector(g,-M.x).multiplyScalar(H),f[q].add(b),f[w].add(b),f[O].add(b),p[q].add(S),p[w].add(S),p[O].add(S))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let q=0,w=T.length;q<w;++q){const O=T[q],H=O.start,$=O.count;for(let V=H,K=H+$;V<K;V+=3)x(t.getX(V+0),t.getX(V+1),t.getX(V+2))}const U=new lt,C=new lt,L=new lt,B=new lt;function P(q){L.fromBufferAttribute(r,q),B.copy(L);const w=f[q];U.copy(w),U.sub(L.multiplyScalar(L.dot(w))).normalize(),C.crossVectors(B,w);const H=C.dot(p[q])<0?-1:1;u.setXYZW(q,U.x,U.y,U.z,H)}for(let q=0,w=T.length;q<w;++q){const O=T[q],H=O.start,$=O.count;for(let V=H,K=H+$;V<K;V+=3)P(t.getX(V+0)),P(t.getX(V+1)),P(t.getX(V+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new da(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let v=0,y=a.count;v<y;v++)a.setXYZ(v,0,0,0);const r=new lt,o=new lt,u=new lt,f=new lt,p=new lt,h=new lt,g=new lt,_=new lt;if(t)for(let v=0,y=t.count;v<y;v+=3){const M=t.getX(v+0),b=t.getX(v+1),S=t.getX(v+2);r.fromBufferAttribute(n,M),o.fromBufferAttribute(n,b),u.fromBufferAttribute(n,S),g.subVectors(u,o),_.subVectors(r,o),g.cross(_),f.fromBufferAttribute(a,M),p.fromBufferAttribute(a,b),h.fromBufferAttribute(a,S),f.add(g),p.add(g),h.add(g),a.setXYZ(M,f.x,f.y,f.z),a.setXYZ(b,p.x,p.y,p.z),a.setXYZ(S,h.x,h.y,h.z)}else for(let v=0,y=n.count;v<y;v+=3)r.fromBufferAttribute(n,v+0),o.fromBufferAttribute(n,v+1),u.fromBufferAttribute(n,v+2),g.subVectors(u,o),_.subVectors(r,o),g.cross(_),a.setXYZ(v+0,g.x,g.y,g.z),a.setXYZ(v+1,g.x,g.y,g.z),a.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,a=t.count;n<a;n++)Rn.fromBufferAttribute(t,n),Rn.normalize(),t.setXYZ(n,Rn.x,Rn.y,Rn.z)}toNonIndexed(){function t(f,p){const h=f.array,g=f.itemSize,_=f.normalized,v=new h.constructor(p.length*g);let y=0,M=0;for(let b=0,S=p.length;b<S;b++){f.isInterleavedBufferAttribute?y=p[b]*f.data.stride+f.offset:y=p[b]*g;for(let x=0;x<g;x++)v[M++]=h[y++]}return new da(v,g,_)}if(this.index===null)return pe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new es,a=this.index.array,r=this.attributes;for(const f in r){const p=r[f],h=t(p,a);n.setAttribute(f,h)}const o=this.morphAttributes;for(const f in o){const p=[],h=o[f];for(let g=0,_=h.length;g<_;g++){const v=h[g],y=t(v,a);p.push(y)}n.morphAttributes[f]=p}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,p=u.length;f<p;f++){const h=u[f];n.addGroup(h.start,h.count,h.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const h in p)p[h]!==void 0&&(t[h]=p[h]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const p in a){const h=a[p];t.data.attributes[p]=h.toJSON(t.data)}const r={};let o=!1;for(const p in this.morphAttributes){const h=this.morphAttributes[p],g=[];for(let _=0,v=h.length;_<v;_++){const y=h[_];g.push(y.toJSON(t.data))}g.length>0&&(r[p]=g,o=!0)}o&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(t.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(t.data.boundingSphere=f.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const r=t.attributes;for(const h in r){const g=r[h];this.setAttribute(h,g.clone(n))}const o=t.morphAttributes;for(const h in o){const g=[],_=o[h];for(let v=0,y=_.length;v<y;v++)g.push(_[v].clone(n));this.morphAttributes[h]=g}this.morphTargetsRelative=t.morphTargetsRelative;const u=t.groups;for(let h=0,g=u.length;h<g;h++){const _=u[h];this.addGroup(_.start,_.count,_.materialIndex)}const f=t.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const T_=new cn,sr=new Hx,hu=new qp,A_=new lt,du=new lt,pu=new lt,mu=new lt,Md=new lt,gu=new lt,w_=new lt,vu=new lt;class ji extends Xn{constructor(t=new es,n=new Vx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const r=n[a[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=r.length;o<u;o++){const f=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=o}}}}getVertexPosition(t,n){const a=this.geometry,r=a.attributes.position,o=a.morphAttributes.position,u=a.morphTargetsRelative;n.fromBufferAttribute(r,t);const f=this.morphTargetInfluences;if(o&&f){gu.set(0,0,0);for(let p=0,h=o.length;p<h;p++){const g=f[p],_=o[p];g!==0&&(Md.fromBufferAttribute(_,t),u?gu.addScaledVector(Md,g):gu.addScaledVector(Md.sub(n),g))}n.add(gu)}return n}raycast(t,n){const a=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),hu.copy(a.boundingSphere),hu.applyMatrix4(o),sr.copy(t.ray).recast(t.near),!(hu.containsPoint(sr.origin)===!1&&(sr.intersectSphere(hu,A_)===null||sr.origin.distanceToSquared(A_)>(t.far-t.near)**2))&&(T_.copy(o).invert(),sr.copy(t.ray).applyMatrix4(T_),!(a.boundingBox!==null&&sr.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,n,sr)))}_computeIntersections(t,n,a){let r;const o=this.geometry,u=this.material,f=o.index,p=o.attributes.position,h=o.attributes.uv,g=o.attributes.uv1,_=o.attributes.normal,v=o.groups,y=o.drawRange;if(f!==null)if(Array.isArray(u))for(let M=0,b=v.length;M<b;M++){const S=v[M],x=u[S.materialIndex],T=Math.max(S.start,y.start),U=Math.min(f.count,Math.min(S.start+S.count,y.start+y.count));for(let C=T,L=U;C<L;C+=3){const B=f.getX(C),P=f.getX(C+1),q=f.getX(C+2);r=_u(this,x,t,a,h,g,_,B,P,q),r&&(r.faceIndex=Math.floor(C/3),r.face.materialIndex=S.materialIndex,n.push(r))}}else{const M=Math.max(0,y.start),b=Math.min(f.count,y.start+y.count);for(let S=M,x=b;S<x;S+=3){const T=f.getX(S),U=f.getX(S+1),C=f.getX(S+2);r=_u(this,u,t,a,h,g,_,T,U,C),r&&(r.faceIndex=Math.floor(S/3),n.push(r))}}else if(p!==void 0)if(Array.isArray(u))for(let M=0,b=v.length;M<b;M++){const S=v[M],x=u[S.materialIndex],T=Math.max(S.start,y.start),U=Math.min(p.count,Math.min(S.start+S.count,y.start+y.count));for(let C=T,L=U;C<L;C+=3){const B=C,P=C+1,q=C+2;r=_u(this,x,t,a,h,g,_,B,P,q),r&&(r.faceIndex=Math.floor(C/3),r.face.materialIndex=S.materialIndex,n.push(r))}}else{const M=Math.max(0,y.start),b=Math.min(p.count,y.start+y.count);for(let S=M,x=b;S<x;S+=3){const T=S,U=S+1,C=S+2;r=_u(this,u,t,a,h,g,_,T,U,C),r&&(r.faceIndex=Math.floor(S/3),n.push(r))}}}}function V1(c,t,n,a,r,o,u,f){let p;if(t.side===ri?p=a.intersectTriangle(u,o,r,!0,f):p=a.intersectTriangle(r,o,u,t.side===Fs,f),p===null)return null;vu.copy(f),vu.applyMatrix4(c.matrixWorld);const h=n.ray.origin.distanceTo(vu);return h<n.near||h>n.far?null:{distance:h,point:vu.clone(),object:c}}function _u(c,t,n,a,r,o,u,f,p,h){c.getVertexPosition(f,du),c.getVertexPosition(p,pu),c.getVertexPosition(h,mu);const g=V1(c,t,n,a,du,pu,mu,w_);if(g){const _=new lt;qi.getBarycoord(w_,du,pu,mu,_),r&&(g.uv=qi.getInterpolatedAttribute(r,f,p,h,_,new Be)),o&&(g.uv1=qi.getInterpolatedAttribute(o,f,p,h,_,new Be)),u&&(g.normal=qi.getInterpolatedAttribute(u,f,p,h,_,new lt),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const v={a:f,b:p,c:h,normal:new lt,materialIndex:0};qi.getNormal(du,pu,mu,v.normal),g.face=v,g.barycoord=_}return g}class wo extends es{constructor(t=1,n=1,a=1,r=1,o=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:a,widthSegments:r,heightSegments:o,depthSegments:u};const f=this;r=Math.floor(r),o=Math.floor(o),u=Math.floor(u);const p=[],h=[],g=[],_=[];let v=0,y=0;M("z","y","x",-1,-1,a,n,t,u,o,0),M("z","y","x",1,-1,a,n,-t,u,o,1),M("x","z","y",1,1,t,a,n,r,u,2),M("x","z","y",1,-1,t,a,-n,r,u,3),M("x","y","z",1,-1,t,n,a,r,o,4),M("x","y","z",-1,-1,t,n,-a,r,o,5),this.setIndex(p),this.setAttribute("position",new Ja(h,3)),this.setAttribute("normal",new Ja(g,3)),this.setAttribute("uv",new Ja(_,2));function M(b,S,x,T,U,C,L,B,P,q,w){const O=C/P,H=L/q,$=C/2,V=L/2,K=B/2,W=P+1,z=q+1;let G=0,Q=0;const mt=new lt;for(let yt=0;yt<z;yt++){const F=yt*H-V;for(let j=0;j<W;j++){const ct=j*O-$;mt[b]=ct*T,mt[S]=F*U,mt[x]=K,h.push(mt.x,mt.y,mt.z),mt[b]=0,mt[S]=0,mt[x]=B>0?1:-1,g.push(mt.x,mt.y,mt.z),_.push(j/P),_.push(1-yt/q),G+=1}}for(let yt=0;yt<q;yt++)for(let F=0;F<P;F++){const j=v+F+W*yt,ct=v+F+W*(yt+1),Tt=v+(F+1)+W*(yt+1),Dt=v+(F+1)+W*yt;p.push(j,ct,Dt),p.push(ct,Tt,Dt),Q+=6}f.addGroup(y,Q,w),y+=Q,v+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function To(c){const t={};for(const n in c){t[n]={};for(const a in c[n]){const r=c[n][a];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(pe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][a]=null):t[n][a]=r.clone():Array.isArray(r)?t[n][a]=r.slice():t[n][a]=r}}return t}function Yn(c){const t={};for(let n=0;n<c.length;n++){const a=To(c[n]);for(const r in a)t[r]=a[r]}return t}function k1(c){const t=[];for(let n=0;n<c.length;n++)t.push(c[n].clone());return t}function Xx(c){const t=c.getRenderTarget();return t===null?c.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ue.workingColorSpace}const q1={clone:To,merge:Yn};var X1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,W1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ga extends Hl{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=X1,this.fragmentShader=W1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=To(t.uniforms),this.uniformsGroups=k1(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const u=this.uniforms[r].value;u&&u.isTexture?n.uniforms[r]={type:"t",value:u.toJSON(t).uuid}:u&&u.isColor?n.uniforms[r]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[r]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[r]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[r]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[r]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[r]={type:"m4",value:u.toArray()}:n.uniforms[r]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const r in this.extensions)this.extensions[r]===!0&&(a[r]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class Wx extends Xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new cn,this.projectionMatrix=new cn,this.projectionMatrixInverse=new cn,this.coordinateSystem=ua,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ls=new lt,R_=new Be,C_=new Be;class ki extends Wx{constructor(t=50,n=1,a=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Ap*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ed*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ap*2*Math.atan(Math.tan(ed*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,a){Ls.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ls.x,Ls.y).multiplyScalar(-t/Ls.z),Ls.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Ls.x,Ls.y).multiplyScalar(-t/Ls.z)}getViewSize(t,n){return this.getViewBounds(t,R_,C_),n.subVectors(C_,R_)}setViewOffset(t,n,a,r,o,u){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=r,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(ed*.5*this.fov)/this.zoom,a=2*n,r=this.aspect*a,o=-.5*r;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,h=u.fullHeight;o+=u.offsetX*r/p,n-=u.offsetY*a/h,r*=u.width/p,a*=u.height/h}const f=this.filmOffset;f!==0&&(o+=t*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-a,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ho=-90,po=1;class Y1 extends Xn{constructor(t,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ki(ho,po,t,n);r.layers=this.layers,this.add(r);const o=new ki(ho,po,t,n);o.layers=this.layers,this.add(o);const u=new ki(ho,po,t,n);u.layers=this.layers,this.add(u);const f=new ki(ho,po,t,n);f.layers=this.layers,this.add(f);const p=new ki(ho,po,t,n);p.layers=this.layers,this.add(p);const h=new ki(ho,po,t,n);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[a,r,o,u,f,p]=n;for(const h of n)this.remove(h);if(t===ua)a.up.set(0,1,0),a.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===Uu)a.up.set(0,-1,0),a.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of n)this.add(h),h.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,u,f,p,h,g]=this.children,_=t.getRenderTarget(),v=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;const b=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0,r),t.render(n,o),t.setRenderTarget(a,1,r),t.render(n,u),t.setRenderTarget(a,2,r),t.render(n,f),t.setRenderTarget(a,3,r),t.render(n,p),t.setRenderTarget(a,4,r),t.render(n,h),a.texture.generateMipmaps=b,t.setRenderTarget(a,5,r),t.render(n,g),t.setRenderTarget(_,v,y),t.xr.enabled=M,a.texture.needsPMREMUpdate=!0}}class Yx extends qn{constructor(t=[],n=_r,a,r,o,u,f,p,h,g){super(t,n,a,r,o,u,f,p,h,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class jx extends ha{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},r=[a,a,a,a,a,a];this.texture=new Yx(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new wo(5,5,5),o=new ga({name:"CubemapFromEquirect",uniforms:To(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:ri,blending:Ka});o.uniforms.tEquirect.value=n;const u=new ji(r,o),f=n.minFilter;return n.minFilter===Ps&&(n.minFilter=In),new Y1(1,10,this).update(t,u),n.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(t,n=!0,a=!0,r=!0){const o=t.getRenderTarget();for(let u=0;u<6;u++)t.setRenderTarget(this,u),t.clear(n,a,r);t.setRenderTarget(o)}}class xu extends Xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const j1={type:"move"};class Ed{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new lt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new lt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new lt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new lt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const a of t.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,a){let r=null,o=null,u=null;const f=this._targetRay,p=this._grip,h=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(h&&t.hand){u=!0;for(const b of t.hand.values()){const S=n.getJointPose(b,a),x=this._getHandJoint(h,b);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const g=h.joints["index-finger-tip"],_=h.joints["thumb-tip"],v=g.position.distanceTo(_.position),y=.02,M=.005;h.inputState.pinching&&v>y+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&v<=y-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(o=n.getPose(t.gripSpace,a),o!==null&&(p.matrix.fromArray(o.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,o.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(o.linearVelocity)):p.hasLinearVelocity=!1,o.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(o.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(r=n.getPose(t.targetRaySpace,a),r===null&&o!==null&&(r=o),r!==null&&(f.matrix.fromArray(r.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,r.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(r.linearVelocity)):f.hasLinearVelocity=!1,r.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(r.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(j1)))}return f!==null&&(f.visible=r!==null),p!==null&&(p.visible=o!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const a=new xu;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[n.jointName]=a,t.add(a)}return t.joints[n.jointName]}}class Z1 extends Xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ma,this.environmentIntensity=1,this.environmentRotation=new ma,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class K1 extends qn{constructor(t=null,n=1,a=1,r,o,u,f,p,h=Fn,g=Fn,_,v){super(null,u,f,p,h,g,r,o,_,v),this.isDataTexture=!0,this.image={data:t,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const bd=new lt,Q1=new lt,J1=new _e;class fr{constructor(t=new lt(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,a,r){return this.normal.set(t,n,a),this.constant=r,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,a){const r=bd.subVectors(a,n).cross(Q1.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const a=t.delta(bd),r=this.normal.dot(a);if(r===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(t.start).addScaledVector(a,o)}intersectsLine(t){const n=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return n<0&&a>0||a<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const a=n||J1.getNormalMatrix(t),r=this.coplanarPoint(bd).applyMatrix4(t),o=this.normal.applyMatrix3(a).normalize();return this.constant=-r.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rr=new qp,$1=new Be(.5,.5),yu=new lt;class Wp{constructor(t=new fr,n=new fr,a=new fr,r=new fr,o=new fr,u=new fr){this.planes=[t,n,a,r,o,u]}set(t,n,a,r,o,u){const f=this.planes;return f[0].copy(t),f[1].copy(n),f[2].copy(a),f[3].copy(r),f[4].copy(o),f[5].copy(u),this}copy(t){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,n=ua,a=!1){const r=this.planes,o=t.elements,u=o[0],f=o[1],p=o[2],h=o[3],g=o[4],_=o[5],v=o[6],y=o[7],M=o[8],b=o[9],S=o[10],x=o[11],T=o[12],U=o[13],C=o[14],L=o[15];if(r[0].setComponents(h-u,y-g,x-M,L-T).normalize(),r[1].setComponents(h+u,y+g,x+M,L+T).normalize(),r[2].setComponents(h+f,y+_,x+b,L+U).normalize(),r[3].setComponents(h-f,y-_,x-b,L-U).normalize(),a)r[4].setComponents(p,v,S,C).normalize(),r[5].setComponents(h-p,y-v,x-S,L-C).normalize();else if(r[4].setComponents(h-p,y-v,x-S,L-C).normalize(),n===ua)r[5].setComponents(h+p,y+v,x+S,L+C).normalize();else if(n===Uu)r[5].setComponents(p,v,S,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),rr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),rr.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(rr)}intersectsSprite(t){rr.center.set(0,0,0);const n=$1.distanceTo(t.center);return rr.radius=.7071067811865476+n,rr.applyMatrix4(t.matrixWorld),this.intersectsSphere(rr)}intersectsSphere(t){const n=this.planes,a=t.center,r=-t.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(a)<r)return!1;return!0}intersectsBox(t){const n=this.planes;for(let a=0;a<6;a++){const r=n[a];if(yu.x=r.normal.x>0?t.max.x:t.min.x,yu.y=r.normal.y>0?t.max.y:t.min.y,yu.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(yu)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class D_ extends qn{constructor(t,n,a,r,o,u,f,p,h){super(t,n,a,r,o,u,f,p,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Pl extends qn{constructor(t,n,a=pa,r,o,u,f=Fn,p=Fn,h,g=ts,_=1){if(g!==ts&&g!==vr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:n,depth:_};super(v,r,o,u,f,p,g,a,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new kp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class tT extends Pl{constructor(t,n=pa,a=_r,r,o,u=Fn,f=Fn,p,h=ts){const g={width:t,height:t,depth:1},_=[g,g,g,g,g,g];super(t,t,n,a,r,o,u,f,p,h),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Zx extends qn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Gl extends es{constructor(t=1,n=1,a=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:a,heightSegments:r};const o=t/2,u=n/2,f=Math.floor(a),p=Math.floor(r),h=f+1,g=p+1,_=t/f,v=n/p,y=[],M=[],b=[],S=[];for(let x=0;x<g;x++){const T=x*v-u;for(let U=0;U<h;U++){const C=U*_-o;M.push(C,-T,0),b.push(0,0,1),S.push(U/f),S.push(1-x/p)}}for(let x=0;x<p;x++)for(let T=0;T<f;T++){const U=T+h*x,C=T+h*(x+1),L=T+1+h*(x+1),B=T+1+h*x;y.push(U,C,B),y.push(C,L,B)}this.setIndex(y),this.setAttribute("position",new Ja(M,3)),this.setAttribute("normal",new Ja(b,3)),this.setAttribute("uv",new Ja(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gl(t.width,t.height,t.widthSegments,t.heightSegments)}}class eT extends ga{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class N_ extends Hl{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bx,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ma,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class nT extends Hl{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=m1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class iT extends Hl{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Kx extends Xn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(t),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const Td=new cn,U_=new lt,L_=new lt;class aT{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.mapType=Si,this.map=null,this.mapPass=null,this.matrix=new cn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wp,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new dn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,a=this.matrix;U_.setFromMatrixPosition(t.matrixWorld),n.position.copy(U_),L_.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(L_),n.updateMatrixWorld(),Td.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Td,n.coordinateSystem,n.reversedDepth),n.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(Td)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class zu extends Wx{constructor(t=-1,n=1,a=1,r=-1,o=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=a,this.bottom=r,this.near=o,this.far=u,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,a,r,o,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=r,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=a-t,u=a+t,f=r+n,p=r-n;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=h*this.view.offsetX,u=o+h*this.view.width,f-=g*this.view.offsetY,p=f-g*this.view.height}this.projectionMatrix.makeOrthographic(o,u,f,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class sT extends aT{constructor(){super(new zu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class rT extends Kx{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xn.DEFAULT_UP),this.updateMatrix(),this.target=new Xn,this.shadow=new sT}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class oT extends Kx{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class lT extends ki{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class cT{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}}const O_=new cn;class uT{constructor(t,n,a=0,r=1/0){this.ray=new Hx(t,n),this.near=a,this.far=r,this.camera=null,this.layers=new Xp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):Ne("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return O_.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(O_),this}intersectObject(t,n=!0,a=[]){return wp(t,this,a,n),a.sort(z_),a}intersectObjects(t,n=!0,a=[]){for(let r=0,o=t.length;r<o;r++)wp(t[r],this,a,n);return a.sort(z_),a}}function z_(c,t){return c.distance-t.distance}function wp(c,t,n,a){let r=!0;if(c.layers.test(t.layers)&&c.raycast(t,n)===!1&&(r=!1),r===!0&&a===!0){const o=c.children;for(let u=0,f=o.length;u<f;u++)wp(o[u],t,n,!0)}}function P_(c,t,n,a){const r=fT(a);switch(n){case Ox:return c*t;case Px:return c*t/r.components*r.byteLength;case Fp:return c*t/r.components*r.byteLength;case Eo:return c*t*2/r.components*r.byteLength;case Ip:return c*t*2/r.components*r.byteLength;case zx:return c*t*3/r.components*r.byteLength;case Wi:return c*t*4/r.components*r.byteLength;case Hp:return c*t*4/r.components*r.byteLength;case bu:case Tu:return Math.floor((c+3)/4)*Math.floor((t+3)/4)*8;case Au:case wu:return Math.floor((c+3)/4)*Math.floor((t+3)/4)*16;case Zd:case Qd:return Math.max(c,16)*Math.max(t,8)/4;case jd:case Kd:return Math.max(c,8)*Math.max(t,8)/2;case Jd:case $d:case ep:case np:return Math.floor((c+3)/4)*Math.floor((t+3)/4)*8;case tp:case ip:case ap:return Math.floor((c+3)/4)*Math.floor((t+3)/4)*16;case sp:return Math.floor((c+3)/4)*Math.floor((t+3)/4)*16;case rp:return Math.floor((c+4)/5)*Math.floor((t+3)/4)*16;case op:return Math.floor((c+4)/5)*Math.floor((t+4)/5)*16;case lp:return Math.floor((c+5)/6)*Math.floor((t+4)/5)*16;case cp:return Math.floor((c+5)/6)*Math.floor((t+5)/6)*16;case up:return Math.floor((c+7)/8)*Math.floor((t+4)/5)*16;case fp:return Math.floor((c+7)/8)*Math.floor((t+5)/6)*16;case hp:return Math.floor((c+7)/8)*Math.floor((t+7)/8)*16;case dp:return Math.floor((c+9)/10)*Math.floor((t+4)/5)*16;case pp:return Math.floor((c+9)/10)*Math.floor((t+5)/6)*16;case mp:return Math.floor((c+9)/10)*Math.floor((t+7)/8)*16;case gp:return Math.floor((c+9)/10)*Math.floor((t+9)/10)*16;case vp:return Math.floor((c+11)/12)*Math.floor((t+9)/10)*16;case _p:return Math.floor((c+11)/12)*Math.floor((t+11)/12)*16;case xp:case yp:case Sp:return Math.ceil(c/4)*Math.ceil(t/4)*16;case Mp:case Ep:return Math.ceil(c/4)*Math.ceil(t/4)*8;case bp:case Tp:return Math.ceil(c/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function fT(c){switch(c){case Si:case Dx:return{byteLength:1,components:1};case Ll:case Nx:case $a:return{byteLength:2,components:1};case Pp:case Bp:return{byteLength:2,components:4};case pa:case zp:case ca:return{byteLength:4,components:1};case Ux:case Lx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${c}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Op}}));typeof window<"u"&&(window.__THREE__?pe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Op);function Qx(){let c=null,t=!1,n=null,a=null;function r(o,u){n(o,u),a=c.requestAnimationFrame(r)}return{start:function(){t!==!0&&n!==null&&(a=c.requestAnimationFrame(r),t=!0)},stop:function(){c.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(o){n=o},setContext:function(o){c=o}}}function hT(c){const t=new WeakMap;function n(f,p){const h=f.array,g=f.usage,_=h.byteLength,v=c.createBuffer();c.bindBuffer(p,v),c.bufferData(p,h,g),f.onUploadCallback();let y;if(h instanceof Float32Array)y=c.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)y=c.HALF_FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?y=c.HALF_FLOAT:y=c.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=c.SHORT;else if(h instanceof Uint32Array)y=c.UNSIGNED_INT;else if(h instanceof Int32Array)y=c.INT;else if(h instanceof Int8Array)y=c.BYTE;else if(h instanceof Uint8Array)y=c.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=c.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:_}}function a(f,p,h){const g=p.array,_=p.updateRanges;if(c.bindBuffer(h,f),_.length===0)c.bufferSubData(h,0,g);else{_.sort((y,M)=>y.start-M.start);let v=0;for(let y=1;y<_.length;y++){const M=_[v],b=_[y];b.start<=M.start+M.count+1?M.count=Math.max(M.count,b.start+b.count-M.start):(++v,_[v]=b)}_.length=v+1;for(let y=0,M=_.length;y<M;y++){const b=_[y];c.bufferSubData(h,b.start*g.BYTES_PER_ELEMENT,g,b.start,b.count)}p.clearUpdateRanges()}p.onUploadCallback()}function r(f){return f.isInterleavedBufferAttribute&&(f=f.data),t.get(f)}function o(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=t.get(f);p&&(c.deleteBuffer(p.buffer),t.delete(f))}function u(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=t.get(f);(!g||g.version<f.version)&&t.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const h=t.get(f);if(h===void 0)t.set(f,n(f,p));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(h.buffer,f,p),h.version=f.version}}return{get:r,remove:o,update:u}}var dT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pT=`#ifdef USE_ALPHAHASH
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
#endif`,mT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_T=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xT=`#ifdef USE_AOMAP
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
#endif`,yT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ST=`#ifdef USE_BATCHING
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
#endif`,MT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ET=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,TT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,AT=`#ifdef USE_IRIDESCENCE
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
#endif`,wT=`#ifdef USE_BUMPMAP
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
#endif`,RT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,CT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,DT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,NT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,UT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,LT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,OT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zT=`#if defined( USE_COLOR_ALPHA )
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
#endif`,PT=`#define PI 3.141592653589793
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
} // validated`,BT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,FT=`vec3 transformedNormal = objectNormal;
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
#endif`,IT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,HT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,GT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,VT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kT="gl_FragColor = linearToOutputTexel( gl_FragColor );",qT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,XT=`#ifdef USE_ENVMAP
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
#endif`,WT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,YT=`#ifdef USE_ENVMAP
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
#endif`,jT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ZT=`#ifdef USE_ENVMAP
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
#endif`,KT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,QT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,JT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$T=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tA=`#ifdef USE_GRADIENTMAP
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
}`,eA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,aA=`uniform bool receiveShadow;
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
#endif`,sA=`#ifdef USE_ENVMAP
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
#endif`,rA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,oA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uA=`PhysicalMaterial material;
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
#endif`,fA=`uniform sampler2D dfgLUT;
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
}`,hA=`
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
#endif`,dA=`#if defined( RE_IndirectDiffuse )
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
#endif`,pA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_A=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,SA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,MA=`#if defined( USE_POINTS_UV )
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
#endif`,EA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,TA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,AA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,RA=`#ifdef USE_MORPHTARGETS
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
#endif`,CA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,DA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,NA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,UA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zA=`#ifdef USE_NORMALMAP
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
#endif`,PA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,BA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,FA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,IA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,HA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,GA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,VA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,XA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,WA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,YA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ZA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,KA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,QA=`float getShadowMask() {
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
}`,JA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$A=`#ifdef USE_SKINNING
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
#endif`,tw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ew=`#ifdef USE_SKINNING
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
#endif`,nw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,aw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rw=`#ifdef USE_TRANSMISSION
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
#endif`,ow=`#ifdef USE_TRANSMISSION
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
#endif`,lw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dw=`uniform sampler2D t2D;
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
}`,pw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_w=`#include <common>
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
}`,xw=`#if DEPTH_PACKING == 3200
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
}`,yw=`#define DISTANCE
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
}`,Sw=`#define DISTANCE
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
}`,Mw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ew=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bw=`uniform float scale;
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
}`,Tw=`uniform vec3 diffuse;
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
}`,Aw=`#include <common>
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
}`,ww=`uniform vec3 diffuse;
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
}`,Rw=`#define LAMBERT
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
}`,Cw=`#define LAMBERT
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
}`,Dw=`#define MATCAP
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
}`,Nw=`#define MATCAP
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
}`,Uw=`#define NORMAL
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
}`,Lw=`#define NORMAL
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
}`,Ow=`#define PHONG
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
}`,zw=`#define PHONG
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
}`,Pw=`#define STANDARD
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
}`,Bw=`#define STANDARD
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
}`,Fw=`#define TOON
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
}`,Iw=`#define TOON
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
}`,Hw=`uniform float size;
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
}`,Gw=`uniform vec3 diffuse;
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
}`,Vw=`#include <common>
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
}`,kw=`uniform vec3 color;
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
}`,qw=`uniform float rotation;
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
}`,Xw=`uniform vec3 diffuse;
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
}`,xe={alphahash_fragment:dT,alphahash_pars_fragment:pT,alphamap_fragment:mT,alphamap_pars_fragment:gT,alphatest_fragment:vT,alphatest_pars_fragment:_T,aomap_fragment:xT,aomap_pars_fragment:yT,batching_pars_vertex:ST,batching_vertex:MT,begin_vertex:ET,beginnormal_vertex:bT,bsdfs:TT,iridescence_fragment:AT,bumpmap_pars_fragment:wT,clipping_planes_fragment:RT,clipping_planes_pars_fragment:CT,clipping_planes_pars_vertex:DT,clipping_planes_vertex:NT,color_fragment:UT,color_pars_fragment:LT,color_pars_vertex:OT,color_vertex:zT,common:PT,cube_uv_reflection_fragment:BT,defaultnormal_vertex:FT,displacementmap_pars_vertex:IT,displacementmap_vertex:HT,emissivemap_fragment:GT,emissivemap_pars_fragment:VT,colorspace_fragment:kT,colorspace_pars_fragment:qT,envmap_fragment:XT,envmap_common_pars_fragment:WT,envmap_pars_fragment:YT,envmap_pars_vertex:jT,envmap_physical_pars_fragment:sA,envmap_vertex:ZT,fog_vertex:KT,fog_pars_vertex:QT,fog_fragment:JT,fog_pars_fragment:$T,gradientmap_pars_fragment:tA,lightmap_pars_fragment:eA,lights_lambert_fragment:nA,lights_lambert_pars_fragment:iA,lights_pars_begin:aA,lights_toon_fragment:rA,lights_toon_pars_fragment:oA,lights_phong_fragment:lA,lights_phong_pars_fragment:cA,lights_physical_fragment:uA,lights_physical_pars_fragment:fA,lights_fragment_begin:hA,lights_fragment_maps:dA,lights_fragment_end:pA,logdepthbuf_fragment:mA,logdepthbuf_pars_fragment:gA,logdepthbuf_pars_vertex:vA,logdepthbuf_vertex:_A,map_fragment:xA,map_pars_fragment:yA,map_particle_fragment:SA,map_particle_pars_fragment:MA,metalnessmap_fragment:EA,metalnessmap_pars_fragment:bA,morphinstance_vertex:TA,morphcolor_vertex:AA,morphnormal_vertex:wA,morphtarget_pars_vertex:RA,morphtarget_vertex:CA,normal_fragment_begin:DA,normal_fragment_maps:NA,normal_pars_fragment:UA,normal_pars_vertex:LA,normal_vertex:OA,normalmap_pars_fragment:zA,clearcoat_normal_fragment_begin:PA,clearcoat_normal_fragment_maps:BA,clearcoat_pars_fragment:FA,iridescence_pars_fragment:IA,opaque_fragment:HA,packing:GA,premultiplied_alpha_fragment:VA,project_vertex:kA,dithering_fragment:qA,dithering_pars_fragment:XA,roughnessmap_fragment:WA,roughnessmap_pars_fragment:YA,shadowmap_pars_fragment:jA,shadowmap_pars_vertex:ZA,shadowmap_vertex:KA,shadowmask_pars_fragment:QA,skinbase_vertex:JA,skinning_pars_vertex:$A,skinning_vertex:tw,skinnormal_vertex:ew,specularmap_fragment:nw,specularmap_pars_fragment:iw,tonemapping_fragment:aw,tonemapping_pars_fragment:sw,transmission_fragment:rw,transmission_pars_fragment:ow,uv_pars_fragment:lw,uv_pars_vertex:cw,uv_vertex:uw,worldpos_vertex:fw,background_vert:hw,background_frag:dw,backgroundCube_vert:pw,backgroundCube_frag:mw,cube_vert:gw,cube_frag:vw,depth_vert:_w,depth_frag:xw,distance_vert:yw,distance_frag:Sw,equirect_vert:Mw,equirect_frag:Ew,linedashed_vert:bw,linedashed_frag:Tw,meshbasic_vert:Aw,meshbasic_frag:ww,meshlambert_vert:Rw,meshlambert_frag:Cw,meshmatcap_vert:Dw,meshmatcap_frag:Nw,meshnormal_vert:Uw,meshnormal_frag:Lw,meshphong_vert:Ow,meshphong_frag:zw,meshphysical_vert:Pw,meshphysical_frag:Bw,meshtoon_vert:Fw,meshtoon_frag:Iw,points_vert:Hw,points_frag:Gw,shadow_vert:Vw,shadow_frag:kw,sprite_vert:qw,sprite_frag:Xw},Ht={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _e},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _e}},envmap:{envMap:{value:null},envMapRotation:{value:new _e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _e},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0},uvTransform:{value:new _e}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _e},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0}}},la={basic:{uniforms:Yn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.fog]),vertexShader:xe.meshbasic_vert,fragmentShader:xe.meshbasic_frag},lambert:{uniforms:Yn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new Pe(0)}}]),vertexShader:xe.meshlambert_vert,fragmentShader:xe.meshlambert_frag},phong:{uniforms:Yn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:xe.meshphong_vert,fragmentShader:xe.meshphong_frag},standard:{uniforms:Yn([Ht.common,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.roughnessmap,Ht.metalnessmap,Ht.fog,Ht.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag},toon:{uniforms:Yn([Ht.common,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.gradientmap,Ht.fog,Ht.lights,{emissive:{value:new Pe(0)}}]),vertexShader:xe.meshtoon_vert,fragmentShader:xe.meshtoon_frag},matcap:{uniforms:Yn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,{matcap:{value:null}}]),vertexShader:xe.meshmatcap_vert,fragmentShader:xe.meshmatcap_frag},points:{uniforms:Yn([Ht.points,Ht.fog]),vertexShader:xe.points_vert,fragmentShader:xe.points_frag},dashed:{uniforms:Yn([Ht.common,Ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xe.linedashed_vert,fragmentShader:xe.linedashed_frag},depth:{uniforms:Yn([Ht.common,Ht.displacementmap]),vertexShader:xe.depth_vert,fragmentShader:xe.depth_frag},normal:{uniforms:Yn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,{opacity:{value:1}}]),vertexShader:xe.meshnormal_vert,fragmentShader:xe.meshnormal_frag},sprite:{uniforms:Yn([Ht.sprite,Ht.fog]),vertexShader:xe.sprite_vert,fragmentShader:xe.sprite_frag},background:{uniforms:{uvTransform:{value:new _e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xe.background_vert,fragmentShader:xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _e}},vertexShader:xe.backgroundCube_vert,fragmentShader:xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xe.cube_vert,fragmentShader:xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xe.equirect_vert,fragmentShader:xe.equirect_frag},distance:{uniforms:Yn([Ht.common,Ht.displacementmap,{referencePosition:{value:new lt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xe.distance_vert,fragmentShader:xe.distance_frag},shadow:{uniforms:Yn([Ht.lights,Ht.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:xe.shadow_vert,fragmentShader:xe.shadow_frag}};la.physical={uniforms:Yn([la.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _e},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _e},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _e},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _e},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _e},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _e}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag};const Su={r:0,b:0,g:0},or=new ma,Ww=new cn;function Yw(c,t,n,a,r,o,u){const f=new Pe(0);let p=o===!0?0:1,h,g,_=null,v=0,y=null;function M(U){let C=U.isScene===!0?U.background:null;return C&&C.isTexture&&(C=(U.backgroundBlurriness>0?n:t).get(C)),C}function b(U){let C=!1;const L=M(U);L===null?x(f,p):L&&L.isColor&&(x(L,1),C=!0);const B=c.xr.getEnvironmentBlendMode();B==="additive"?a.buffers.color.setClear(0,0,0,1,u):B==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,u),(c.autoClear||C)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),c.clear(c.autoClearColor,c.autoClearDepth,c.autoClearStencil))}function S(U,C){const L=M(C);L&&(L.isCubeTexture||L.mapping===Ou)?(g===void 0&&(g=new ji(new wo(1,1,1),new ga({name:"BackgroundCubeMaterial",uniforms:To(la.backgroundCube.uniforms),vertexShader:la.backgroundCube.vertexShader,fragmentShader:la.backgroundCube.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(B,P,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(g)),or.copy(C.backgroundRotation),or.x*=-1,or.y*=-1,or.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(or.y*=-1,or.z*=-1),g.material.uniforms.envMap.value=L,g.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(Ww.makeRotationFromEuler(or)),g.material.toneMapped=Ue.getTransfer(L.colorSpace)!==Ye,(_!==L||v!==L.version||y!==c.toneMapping)&&(g.material.needsUpdate=!0,_=L,v=L.version,y=c.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null)):L&&L.isTexture&&(h===void 0&&(h=new ji(new Gl(2,2),new ga({name:"BackgroundMaterial",uniforms:To(la.background.uniforms),vertexShader:la.background.vertexShader,fragmentShader:la.background.fragmentShader,side:Fs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=L,h.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,h.material.toneMapped=Ue.getTransfer(L.colorSpace)!==Ye,L.matrixAutoUpdate===!0&&L.updateMatrix(),h.material.uniforms.uvTransform.value.copy(L.matrix),(_!==L||v!==L.version||y!==c.toneMapping)&&(h.material.needsUpdate=!0,_=L,v=L.version,y=c.toneMapping),h.layers.enableAll(),U.unshift(h,h.geometry,h.material,0,0,null))}function x(U,C){U.getRGB(Su,Xx(c)),a.buffers.color.setClear(Su.r,Su.g,Su.b,C,u)}function T(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return f},setClearColor:function(U,C=1){f.set(U),p=C,x(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(U){p=U,x(f,p)},render:b,addToRenderList:S,dispose:T}}function jw(c,t){const n=c.getParameter(c.MAX_VERTEX_ATTRIBS),a={},r=v(null);let o=r,u=!1;function f(O,H,$,V,K){let W=!1;const z=_(V,$,H);o!==z&&(o=z,h(o.object)),W=y(O,V,$,K),W&&M(O,V,$,K),K!==null&&t.update(K,c.ELEMENT_ARRAY_BUFFER),(W||u)&&(u=!1,C(O,H,$,V),K!==null&&c.bindBuffer(c.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function p(){return c.createVertexArray()}function h(O){return c.bindVertexArray(O)}function g(O){return c.deleteVertexArray(O)}function _(O,H,$){const V=$.wireframe===!0;let K=a[O.id];K===void 0&&(K={},a[O.id]=K);let W=K[H.id];W===void 0&&(W={},K[H.id]=W);let z=W[V];return z===void 0&&(z=v(p()),W[V]=z),z}function v(O){const H=[],$=[],V=[];for(let K=0;K<n;K++)H[K]=0,$[K]=0,V[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:$,attributeDivisors:V,object:O,attributes:{},index:null}}function y(O,H,$,V){const K=o.attributes,W=H.attributes;let z=0;const G=$.getAttributes();for(const Q in G)if(G[Q].location>=0){const yt=K[Q];let F=W[Q];if(F===void 0&&(Q==="instanceMatrix"&&O.instanceMatrix&&(F=O.instanceMatrix),Q==="instanceColor"&&O.instanceColor&&(F=O.instanceColor)),yt===void 0||yt.attribute!==F||F&&yt.data!==F.data)return!0;z++}return o.attributesNum!==z||o.index!==V}function M(O,H,$,V){const K={},W=H.attributes;let z=0;const G=$.getAttributes();for(const Q in G)if(G[Q].location>=0){let yt=W[Q];yt===void 0&&(Q==="instanceMatrix"&&O.instanceMatrix&&(yt=O.instanceMatrix),Q==="instanceColor"&&O.instanceColor&&(yt=O.instanceColor));const F={};F.attribute=yt,yt&&yt.data&&(F.data=yt.data),K[Q]=F,z++}o.attributes=K,o.attributesNum=z,o.index=V}function b(){const O=o.newAttributes;for(let H=0,$=O.length;H<$;H++)O[H]=0}function S(O){x(O,0)}function x(O,H){const $=o.newAttributes,V=o.enabledAttributes,K=o.attributeDivisors;$[O]=1,V[O]===0&&(c.enableVertexAttribArray(O),V[O]=1),K[O]!==H&&(c.vertexAttribDivisor(O,H),K[O]=H)}function T(){const O=o.newAttributes,H=o.enabledAttributes;for(let $=0,V=H.length;$<V;$++)H[$]!==O[$]&&(c.disableVertexAttribArray($),H[$]=0)}function U(O,H,$,V,K,W,z){z===!0?c.vertexAttribIPointer(O,H,$,K,W):c.vertexAttribPointer(O,H,$,V,K,W)}function C(O,H,$,V){b();const K=V.attributes,W=$.getAttributes(),z=H.defaultAttributeValues;for(const G in W){const Q=W[G];if(Q.location>=0){let mt=K[G];if(mt===void 0&&(G==="instanceMatrix"&&O.instanceMatrix&&(mt=O.instanceMatrix),G==="instanceColor"&&O.instanceColor&&(mt=O.instanceColor)),mt!==void 0){const yt=mt.normalized,F=mt.itemSize,j=t.get(mt);if(j===void 0)continue;const ct=j.buffer,Tt=j.type,Dt=j.bytesPerElement,it=Tt===c.INT||Tt===c.UNSIGNED_INT||mt.gpuType===zp;if(mt.isInterleavedBufferAttribute){const gt=mt.data,Ct=gt.stride,Pt=mt.offset;if(gt.isInstancedInterleavedBuffer){for(let Nt=0;Nt<Q.locationSize;Nt++)x(Q.location+Nt,gt.meshPerAttribute);O.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let Nt=0;Nt<Q.locationSize;Nt++)S(Q.location+Nt);c.bindBuffer(c.ARRAY_BUFFER,ct);for(let Nt=0;Nt<Q.locationSize;Nt++)U(Q.location+Nt,F/Q.locationSize,Tt,yt,Ct*Dt,(Pt+F/Q.locationSize*Nt)*Dt,it)}else{if(mt.isInstancedBufferAttribute){for(let gt=0;gt<Q.locationSize;gt++)x(Q.location+gt,mt.meshPerAttribute);O.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let gt=0;gt<Q.locationSize;gt++)S(Q.location+gt);c.bindBuffer(c.ARRAY_BUFFER,ct);for(let gt=0;gt<Q.locationSize;gt++)U(Q.location+gt,F/Q.locationSize,Tt,yt,F*Dt,F/Q.locationSize*gt*Dt,it)}}else if(z!==void 0){const yt=z[G];if(yt!==void 0)switch(yt.length){case 2:c.vertexAttrib2fv(Q.location,yt);break;case 3:c.vertexAttrib3fv(Q.location,yt);break;case 4:c.vertexAttrib4fv(Q.location,yt);break;default:c.vertexAttrib1fv(Q.location,yt)}}}}T()}function L(){q();for(const O in a){const H=a[O];for(const $ in H){const V=H[$];for(const K in V)g(V[K].object),delete V[K];delete H[$]}delete a[O]}}function B(O){if(a[O.id]===void 0)return;const H=a[O.id];for(const $ in H){const V=H[$];for(const K in V)g(V[K].object),delete V[K];delete H[$]}delete a[O.id]}function P(O){for(const H in a){const $=a[H];if($[O.id]===void 0)continue;const V=$[O.id];for(const K in V)g(V[K].object),delete V[K];delete $[O.id]}}function q(){w(),u=!0,o!==r&&(o=r,h(o.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:f,reset:q,resetDefaultState:w,dispose:L,releaseStatesOfGeometry:B,releaseStatesOfProgram:P,initAttributes:b,enableAttribute:S,disableUnusedAttributes:T}}function Zw(c,t,n){let a;function r(h){a=h}function o(h,g){c.drawArrays(a,h,g),n.update(g,a,1)}function u(h,g,_){_!==0&&(c.drawArraysInstanced(a,h,g,_),n.update(g,a,_))}function f(h,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,h,0,g,0,_);let y=0;for(let M=0;M<_;M++)y+=g[M];n.update(y,a,1)}function p(h,g,_,v){if(_===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let M=0;M<h.length;M++)u(h[M],g[M],v[M]);else{y.multiDrawArraysInstancedWEBGL(a,h,0,g,0,v,0,_);let M=0;for(let b=0;b<_;b++)M+=g[b]*v[b];n.update(M,a,1)}}this.setMode=r,this.render=o,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function Kw(c,t,n,a){let r;function o(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");r=c.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function u(P){return!(P!==Wi&&a.convert(P)!==c.getParameter(c.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(P){const q=P===$a&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Si&&a.convert(P)!==c.getParameter(c.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==ca&&!q)}function p(P){if(P==="highp"){if(c.getShaderPrecisionFormat(c.VERTEX_SHADER,c.HIGH_FLOAT).precision>0&&c.getShaderPrecisionFormat(c.FRAGMENT_SHADER,c.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&c.getShaderPrecisionFormat(c.VERTEX_SHADER,c.MEDIUM_FLOAT).precision>0&&c.getShaderPrecisionFormat(c.FRAGMENT_SHADER,c.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=n.precision!==void 0?n.precision:"highp";const g=p(h);g!==h&&(pe("WebGLRenderer:",h,"not supported, using",g,"instead."),h=g);const _=n.logarithmicDepthBuffer===!0,v=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=c.getParameter(c.MAX_TEXTURE_IMAGE_UNITS),M=c.getParameter(c.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=c.getParameter(c.MAX_TEXTURE_SIZE),S=c.getParameter(c.MAX_CUBE_MAP_TEXTURE_SIZE),x=c.getParameter(c.MAX_VERTEX_ATTRIBS),T=c.getParameter(c.MAX_VERTEX_UNIFORM_VECTORS),U=c.getParameter(c.MAX_VARYING_VECTORS),C=c.getParameter(c.MAX_FRAGMENT_UNIFORM_VECTORS),L=c.getParameter(c.MAX_SAMPLES),B=c.getParameter(c.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:y,maxVertexTextures:M,maxTextureSize:b,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:T,maxVaryings:U,maxFragmentUniforms:C,maxSamples:L,samples:B}}function Qw(c){const t=this;let n=null,a=0,r=!1,o=!1;const u=new fr,f=new _e,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const y=_.length!==0||v||a!==0||r;return r=v,a=_.length,y},this.beginShadows=function(){o=!0,g(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(_,v){n=g(_,v,0)},this.setState=function(_,v,y){const M=_.clippingPlanes,b=_.clipIntersection,S=_.clipShadows,x=c.get(_);if(!r||M===null||M.length===0||o&&!S)o?g(null):h();else{const T=o?0:a,U=T*4;let C=x.clippingState||null;p.value=C,C=g(M,v,U,y);for(let L=0;L!==U;++L)C[L]=n[L];x.clippingState=C,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=T}};function h(){p.value!==n&&(p.value=n,p.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function g(_,v,y,M){const b=_!==null?_.length:0;let S=null;if(b!==0){if(S=p.value,M!==!0||S===null){const x=y+b*4,T=v.matrixWorldInverse;f.getNormalMatrix(T),(S===null||S.length<x)&&(S=new Float32Array(x));for(let U=0,C=y;U!==b;++U,C+=4)u.copy(_[U]).applyMatrix4(T,f),u.normal.toArray(S,C),S[C+3]=u.constant}p.value=S,p.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,S}}function Jw(c){let t=new WeakMap;function n(u,f){return f===qd?u.mapping=_r:f===Xd&&(u.mapping=Mo),u}function a(u){if(u&&u.isTexture){const f=u.mapping;if(f===qd||f===Xd)if(t.has(u)){const p=t.get(u).texture;return n(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const h=new jx(p.height);return h.fromEquirectangularTexture(c,u),t.set(u,h),u.addEventListener("dispose",r),n(h.texture,u.mapping)}else return null}}return u}function r(u){const f=u.target;f.removeEventListener("dispose",r);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function o(){t=new WeakMap}return{get:a,dispose:o}}const Bs=4,B_=[.125,.215,.35,.446,.526,.582],mr=20,$w=256,wl=new zu,F_=new Pe;let Ad=null,wd=0,Rd=0,Cd=!1;const tR=new lt;class I_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,a=.1,r=100,o={}){const{size:u=256,position:f=tR}=o;Ad=this._renderer.getRenderTarget(),wd=this._renderer.getActiveCubeFace(),Rd=this._renderer.getActiveMipmapLevel(),Cd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,a,r,p,f),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=V_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=G_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ad,wd,Rd),this._renderer.xr.enabled=Cd,t.scissorTest=!1,mo(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===_r||t.mapping===Mo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ad=this._renderer.getRenderTarget(),wd=this._renderer.getActiveCubeFace(),Rd=this._renderer.getActiveMipmapLevel(),Cd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:In,minFilter:In,generateMipmaps:!1,type:$a,format:Wi,colorSpace:bo,depthBuffer:!1},r=H_(t,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=H_(t,n,a);const{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=eR(o)),this._blurMaterial=iR(o,t,n),this._ggxMaterial=nR(o,t,n)}return r}_compileMaterial(t){const n=new ji(new es,t);this._renderer.compile(n,wl)}_sceneToCubeUV(t,n,a,r,o){const p=new ki(90,1,n,a),h=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,y=_.toneMapping;_.getClearColor(F_),_.toneMapping=Yi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(r),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ji(new wo,new Vx({name:"PMREM.Background",side:ri,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,S=b.material;let x=!1;const T=t.background;T?T.isColor&&(S.color.copy(T),t.background=null,x=!0):(S.color.copy(F_),x=!0);for(let U=0;U<6;U++){const C=U%3;C===0?(p.up.set(0,h[U],0),p.position.set(o.x,o.y,o.z),p.lookAt(o.x+g[U],o.y,o.z)):C===1?(p.up.set(0,0,h[U]),p.position.set(o.x,o.y,o.z),p.lookAt(o.x,o.y+g[U],o.z)):(p.up.set(0,h[U],0),p.position.set(o.x,o.y,o.z),p.lookAt(o.x,o.y,o.z+g[U]));const L=this._cubeSize;mo(r,C*L,U>2?L:0,L,L),_.setRenderTarget(r),x&&_.render(b,p),_.render(t,p)}_.toneMapping=y,_.autoClear=v,t.background=T}_textureToCubeUV(t,n){const a=this._renderer,r=t.mapping===_r||t.mapping===Mo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=V_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=G_());const o=r?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=o;const f=o.uniforms;f.envMap.value=t;const p=this._cubeSize;mo(n,0,0,3*p,2*p),a.setRenderTarget(n),a.render(u,wl)}_applyPMREM(t){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let o=1;o<r;o++)this._applyGGXFilter(t,o-1,o);n.autoClear=a}_applyGGXFilter(t,n,a){const r=this._renderer,o=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[a];f.material=u;const p=u.uniforms,h=a/(this._lodMeshes.length-1),g=n/(this._lodMeshes.length-1),_=Math.sqrt(h*h-g*g),v=0+h*1.25,y=_*v,{_lodMax:M}=this,b=this._sizeLods[a],S=3*b*(a>M-Bs?a-M+Bs:0),x=4*(this._cubeSize-b);p.envMap.value=t.texture,p.roughness.value=y,p.mipInt.value=M-n,mo(o,S,x,3*b,2*b),r.setRenderTarget(o),r.render(f,wl),p.envMap.value=o.texture,p.roughness.value=0,p.mipInt.value=M-a,mo(t,S,x,3*b,2*b),r.setRenderTarget(t),r.render(f,wl)}_blur(t,n,a,r,o){const u=this._pingPongRenderTarget;this._halfBlur(t,u,n,a,r,"latitudinal",o),this._halfBlur(u,t,a,a,r,"longitudinal",o)}_halfBlur(t,n,a,r,o,u,f){const p=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Ne("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[r];_.material=h;const v=h.uniforms,y=this._sizeLods[a]-1,M=isFinite(o)?Math.PI/(2*y):2*Math.PI/(2*mr-1),b=o/M,S=isFinite(o)?1+Math.floor(g*b):mr;S>mr&&pe(`sigmaRadians, ${o}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${mr}`);const x=[];let T=0;for(let P=0;P<mr;++P){const q=P/b,w=Math.exp(-q*q/2);x.push(w),P===0?T+=w:P<S&&(T+=2*w)}for(let P=0;P<x.length;P++)x[P]=x[P]/T;v.envMap.value=t.texture,v.samples.value=S,v.weights.value=x,v.latitudinal.value=u==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:U}=this;v.dTheta.value=M,v.mipInt.value=U-a;const C=this._sizeLods[r],L=3*C*(r>U-Bs?r-U+Bs:0),B=4*(this._cubeSize-C);mo(n,L,B,3*C,2*C),p.setRenderTarget(n),p.render(_,wl)}}function eR(c){const t=[],n=[],a=[];let r=c;const o=c-Bs+1+B_.length;for(let u=0;u<o;u++){const f=Math.pow(2,r);t.push(f);let p=1/f;u>c-Bs?p=B_[u-c+Bs-1]:u===0&&(p=0),n.push(p);const h=1/(f-2),g=-h,_=1+h,v=[g,g,_,g,_,_,g,g,_,_,g,_],y=6,M=6,b=3,S=2,x=1,T=new Float32Array(b*M*y),U=new Float32Array(S*M*y),C=new Float32Array(x*M*y);for(let B=0;B<y;B++){const P=B%3*2/3-1,q=B>2?0:-1,w=[P,q,0,P+2/3,q,0,P+2/3,q+1,0,P,q,0,P+2/3,q+1,0,P,q+1,0];T.set(w,b*M*B),U.set(v,S*M*B);const O=[B,B,B,B,B,B];C.set(O,x*M*B)}const L=new es;L.setAttribute("position",new da(T,b)),L.setAttribute("uv",new da(U,S)),L.setAttribute("faceIndex",new da(C,x)),a.push(new ji(L,null)),r>Bs&&r--}return{lodMeshes:a,sizeLods:t,sigmas:n}}function H_(c,t,n){const a=new ha(c,t,n);return a.texture.mapping=Ou,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function mo(c,t,n,a,r){c.viewport.set(t,n,a,r),c.scissor.set(t,n,a,r)}function nR(c,t,n){return new ga({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:$w,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${c}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Pu(),fragmentShader:`

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
		`,blending:Ka,depthTest:!1,depthWrite:!1})}function iR(c,t,n){const a=new Float32Array(mr),r=new lt(0,1,0);return new ga({name:"SphericalGaussianBlur",defines:{n:mr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${c}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Pu(),fragmentShader:`

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
		`,blending:Ka,depthTest:!1,depthWrite:!1})}function G_(){return new ga({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pu(),fragmentShader:`

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
		`,blending:Ka,depthTest:!1,depthWrite:!1})}function V_(){return new ga({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ka,depthTest:!1,depthWrite:!1})}function Pu(){return`

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
	`}function aR(c){let t=new WeakMap,n=null;function a(f){if(f&&f.isTexture){const p=f.mapping,h=p===qd||p===Xd,g=p===_r||p===Mo;if(h||g){let _=t.get(f);const v=_!==void 0?_.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==v)return n===null&&(n=new I_(c)),_=h?n.fromEquirectangular(f,_):n.fromCubemap(f,_),_.texture.pmremVersion=f.pmremVersion,t.set(f,_),_.texture;if(_!==void 0)return _.texture;{const y=f.image;return h&&y&&y.height>0||g&&y&&r(y)?(n===null&&(n=new I_(c)),_=h?n.fromEquirectangular(f):n.fromCubemap(f),_.texture.pmremVersion=f.pmremVersion,t.set(f,_),f.addEventListener("dispose",o),_.texture):null}}}return f}function r(f){let p=0;const h=6;for(let g=0;g<h;g++)f[g]!==void 0&&p++;return p===h}function o(f){const p=f.target;p.removeEventListener("dispose",o);const h=t.get(p);h!==void 0&&(t.delete(p),h.dispose())}function u(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:u}}function sR(c){const t={};function n(a){if(t[a]!==void 0)return t[a];const r=c.getExtension(a);return t[a]=r,r}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const r=n(a);return r===null&&zl("WebGLRenderer: "+a+" extension not supported."),r}}}function rR(c,t,n,a){const r={},o=new WeakMap;function u(_){const v=_.target;v.index!==null&&t.remove(v.index);for(const M in v.attributes)t.remove(v.attributes[M]);v.removeEventListener("dispose",u),delete r[v.id];const y=o.get(v);y&&(t.remove(y),o.delete(v)),a.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function f(_,v){return r[v.id]===!0||(v.addEventListener("dispose",u),r[v.id]=!0,n.memory.geometries++),v}function p(_){const v=_.attributes;for(const y in v)t.update(v[y],c.ARRAY_BUFFER)}function h(_){const v=[],y=_.index,M=_.attributes.position;let b=0;if(y!==null){const T=y.array;b=y.version;for(let U=0,C=T.length;U<C;U+=3){const L=T[U+0],B=T[U+1],P=T[U+2];v.push(L,B,B,P,P,L)}}else if(M!==void 0){const T=M.array;b=M.version;for(let U=0,C=T.length/3-1;U<C;U+=3){const L=U+0,B=U+1,P=U+2;v.push(L,B,B,P,P,L)}}else return;const S=new(Fx(v)?qx:kx)(v,1);S.version=b;const x=o.get(_);x&&t.remove(x),o.set(_,S)}function g(_){const v=o.get(_);if(v){const y=_.index;y!==null&&v.version<y.version&&h(_)}else h(_);return o.get(_)}return{get:f,update:p,getWireframeAttribute:g}}function oR(c,t,n){let a;function r(v){a=v}let o,u;function f(v){o=v.type,u=v.bytesPerElement}function p(v,y){c.drawElements(a,y,o,v*u),n.update(y,a,1)}function h(v,y,M){M!==0&&(c.drawElementsInstanced(a,y,o,v*u,M),n.update(y,a,M))}function g(v,y,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,y,0,o,v,0,M);let S=0;for(let x=0;x<M;x++)S+=y[x];n.update(S,a,1)}function _(v,y,M,b){if(M===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<v.length;x++)h(v[x]/u,y[x],b[x]);else{S.multiDrawElementsInstancedWEBGL(a,y,0,o,v,0,b,0,M);let x=0;for(let T=0;T<M;T++)x+=y[T]*b[T];n.update(x,a,1)}}this.setMode=r,this.setIndex=f,this.render=p,this.renderInstances=h,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function lR(c){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(o,u,f){switch(n.calls++,u){case c.TRIANGLES:n.triangles+=f*(o/3);break;case c.LINES:n.lines+=f*(o/2);break;case c.LINE_STRIP:n.lines+=f*(o-1);break;case c.LINE_LOOP:n.lines+=f*o;break;case c.POINTS:n.points+=f*o;break;default:Ne("WebGLInfo: Unknown draw mode:",u);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:r,update:a}}function cR(c,t,n){const a=new WeakMap,r=new dn;function o(u,f,p){const h=u.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=g!==void 0?g.length:0;let v=a.get(f);if(v===void 0||v.count!==_){let O=function(){q.dispose(),a.delete(f),f.removeEventListener("dispose",O)};var y=O;v!==void 0&&v.texture.dispose();const M=f.morphAttributes.position!==void 0,b=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,x=f.morphAttributes.position||[],T=f.morphAttributes.normal||[],U=f.morphAttributes.color||[];let C=0;M===!0&&(C=1),b===!0&&(C=2),S===!0&&(C=3);let L=f.attributes.position.count*C,B=1;L>t.maxTextureSize&&(B=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const P=new Float32Array(L*B*4*_),q=new Ix(P,L,B,_);q.type=ca,q.needsUpdate=!0;const w=C*4;for(let H=0;H<_;H++){const $=x[H],V=T[H],K=U[H],W=L*B*4*H;for(let z=0;z<$.count;z++){const G=z*w;M===!0&&(r.fromBufferAttribute($,z),P[W+G+0]=r.x,P[W+G+1]=r.y,P[W+G+2]=r.z,P[W+G+3]=0),b===!0&&(r.fromBufferAttribute(V,z),P[W+G+4]=r.x,P[W+G+5]=r.y,P[W+G+6]=r.z,P[W+G+7]=0),S===!0&&(r.fromBufferAttribute(K,z),P[W+G+8]=r.x,P[W+G+9]=r.y,P[W+G+10]=r.z,P[W+G+11]=K.itemSize===4?r.w:1)}}v={count:_,texture:q,size:new Be(L,B)},a.set(f,v),f.addEventListener("dispose",O)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(c,"morphTexture",u.morphTexture,n);else{let M=0;for(let S=0;S<h.length;S++)M+=h[S];const b=f.morphTargetsRelative?1:1-M;p.getUniforms().setValue(c,"morphTargetBaseInfluence",b),p.getUniforms().setValue(c,"morphTargetInfluences",h)}p.getUniforms().setValue(c,"morphTargetsTexture",v.texture,n),p.getUniforms().setValue(c,"morphTargetsTextureSize",v.size)}return{update:o}}function uR(c,t,n,a){let r=new WeakMap;function o(p){const h=a.render.frame,g=p.geometry,_=t.get(p,g);if(r.get(_)!==h&&(t.update(_),r.set(_,h)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),r.get(p)!==h&&(n.update(p.instanceMatrix,c.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,c.ARRAY_BUFFER),r.set(p,h))),p.isSkinnedMesh){const v=p.skeleton;r.get(v)!==h&&(v.update(),r.set(v,h))}return _}function u(){r=new WeakMap}function f(p){const h=p.target;h.removeEventListener("dispose",f),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:o,dispose:u}}const fR={[Mx]:"LINEAR_TONE_MAPPING",[Ex]:"REINHARD_TONE_MAPPING",[bx]:"CINEON_TONE_MAPPING",[Tx]:"ACES_FILMIC_TONE_MAPPING",[wx]:"AGX_TONE_MAPPING",[Rx]:"NEUTRAL_TONE_MAPPING",[Ax]:"CUSTOM_TONE_MAPPING"};function hR(c,t,n,a,r){const o=new ha(t,n,{type:c,depthBuffer:a,stencilBuffer:r}),u=new ha(t,n,{type:$a,depthBuffer:!1,stencilBuffer:!1}),f=new es;f.setAttribute("position",new Ja([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new Ja([0,2,0,0,2,0],2));const p=new eT({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new ji(f,p),g=new zu(-1,1,1,-1,0,1);let _=null,v=null,y=!1,M,b=null,S=[],x=!1;this.setSize=function(T,U){o.setSize(T,U),u.setSize(T,U);for(let C=0;C<S.length;C++){const L=S[C];L.setSize&&L.setSize(T,U)}},this.setEffects=function(T){S=T,x=S.length>0&&S[0].isRenderPass===!0;const U=o.width,C=o.height;for(let L=0;L<S.length;L++){const B=S[L];B.setSize&&B.setSize(U,C)}},this.begin=function(T,U){if(y||T.toneMapping===Yi&&S.length===0)return!1;if(b=U,U!==null){const C=U.width,L=U.height;(o.width!==C||o.height!==L)&&this.setSize(C,L)}return x===!1&&T.setRenderTarget(o),M=T.toneMapping,T.toneMapping=Yi,!0},this.hasRenderPass=function(){return x},this.end=function(T,U){T.toneMapping=M,y=!0;let C=o,L=u;for(let B=0;B<S.length;B++){const P=S[B];if(P.enabled!==!1&&(P.render(T,L,C,U),P.needsSwap!==!1)){const q=C;C=L,L=q}}if(_!==T.outputColorSpace||v!==T.toneMapping){_=T.outputColorSpace,v=T.toneMapping,p.defines={},Ue.getTransfer(_)===Ye&&(p.defines.SRGB_TRANSFER="");const B=fR[v];B&&(p.defines[B]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=C.texture,T.setRenderTarget(b),T.render(h,g),b=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){o.dispose(),u.dispose(),f.dispose(),p.dispose()}}const Jx=new qn,Rp=new Pl(1,1),$x=new Ix,ty=new N1,ey=new Yx,k_=[],q_=[],X_=new Float32Array(16),W_=new Float32Array(9),Y_=new Float32Array(4);function Ro(c,t,n){const a=c[0];if(a<=0||a>0)return c;const r=t*n;let o=k_[r];if(o===void 0&&(o=new Float32Array(r),k_[r]=o),t!==0){a.toArray(o,0);for(let u=1,f=0;u!==t;++u)f+=n,c[u].toArray(o,f)}return o}function Tn(c,t){if(c.length!==t.length)return!1;for(let n=0,a=c.length;n<a;n++)if(c[n]!==t[n])return!1;return!0}function An(c,t){for(let n=0,a=t.length;n<a;n++)c[n]=t[n]}function Bu(c,t){let n=q_[t];n===void 0&&(n=new Int32Array(t),q_[t]=n);for(let a=0;a!==t;++a)n[a]=c.allocateTextureUnit();return n}function dR(c,t){const n=this.cache;n[0]!==t&&(c.uniform1f(this.addr,t),n[0]=t)}function pR(c,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(c.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Tn(n,t))return;c.uniform2fv(this.addr,t),An(n,t)}}function mR(c,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(c.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(c.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Tn(n,t))return;c.uniform3fv(this.addr,t),An(n,t)}}function gR(c,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(c.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Tn(n,t))return;c.uniform4fv(this.addr,t),An(n,t)}}function vR(c,t){const n=this.cache,a=t.elements;if(a===void 0){if(Tn(n,t))return;c.uniformMatrix2fv(this.addr,!1,t),An(n,t)}else{if(Tn(n,a))return;Y_.set(a),c.uniformMatrix2fv(this.addr,!1,Y_),An(n,a)}}function _R(c,t){const n=this.cache,a=t.elements;if(a===void 0){if(Tn(n,t))return;c.uniformMatrix3fv(this.addr,!1,t),An(n,t)}else{if(Tn(n,a))return;W_.set(a),c.uniformMatrix3fv(this.addr,!1,W_),An(n,a)}}function xR(c,t){const n=this.cache,a=t.elements;if(a===void 0){if(Tn(n,t))return;c.uniformMatrix4fv(this.addr,!1,t),An(n,t)}else{if(Tn(n,a))return;X_.set(a),c.uniformMatrix4fv(this.addr,!1,X_),An(n,a)}}function yR(c,t){const n=this.cache;n[0]!==t&&(c.uniform1i(this.addr,t),n[0]=t)}function SR(c,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(c.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Tn(n,t))return;c.uniform2iv(this.addr,t),An(n,t)}}function MR(c,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(c.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Tn(n,t))return;c.uniform3iv(this.addr,t),An(n,t)}}function ER(c,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(c.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Tn(n,t))return;c.uniform4iv(this.addr,t),An(n,t)}}function bR(c,t){const n=this.cache;n[0]!==t&&(c.uniform1ui(this.addr,t),n[0]=t)}function TR(c,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(c.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Tn(n,t))return;c.uniform2uiv(this.addr,t),An(n,t)}}function AR(c,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(c.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Tn(n,t))return;c.uniform3uiv(this.addr,t),An(n,t)}}function wR(c,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(c.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Tn(n,t))return;c.uniform4uiv(this.addr,t),An(n,t)}}function RR(c,t,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(c.uniform1i(this.addr,r),a[0]=r);let o;this.type===c.SAMPLER_2D_SHADOW?(Rp.compareFunction=n.isReversedDepthBuffer()?Vp:Gp,o=Rp):o=Jx,n.setTexture2D(t||o,r)}function CR(c,t,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(c.uniform1i(this.addr,r),a[0]=r),n.setTexture3D(t||ty,r)}function DR(c,t,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(c.uniform1i(this.addr,r),a[0]=r),n.setTextureCube(t||ey,r)}function NR(c,t,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(c.uniform1i(this.addr,r),a[0]=r),n.setTexture2DArray(t||$x,r)}function UR(c){switch(c){case 5126:return dR;case 35664:return pR;case 35665:return mR;case 35666:return gR;case 35674:return vR;case 35675:return _R;case 35676:return xR;case 5124:case 35670:return yR;case 35667:case 35671:return SR;case 35668:case 35672:return MR;case 35669:case 35673:return ER;case 5125:return bR;case 36294:return TR;case 36295:return AR;case 36296:return wR;case 35678:case 36198:case 36298:case 36306:case 35682:return RR;case 35679:case 36299:case 36307:return CR;case 35680:case 36300:case 36308:case 36293:return DR;case 36289:case 36303:case 36311:case 36292:return NR}}function LR(c,t){c.uniform1fv(this.addr,t)}function OR(c,t){const n=Ro(t,this.size,2);c.uniform2fv(this.addr,n)}function zR(c,t){const n=Ro(t,this.size,3);c.uniform3fv(this.addr,n)}function PR(c,t){const n=Ro(t,this.size,4);c.uniform4fv(this.addr,n)}function BR(c,t){const n=Ro(t,this.size,4);c.uniformMatrix2fv(this.addr,!1,n)}function FR(c,t){const n=Ro(t,this.size,9);c.uniformMatrix3fv(this.addr,!1,n)}function IR(c,t){const n=Ro(t,this.size,16);c.uniformMatrix4fv(this.addr,!1,n)}function HR(c,t){c.uniform1iv(this.addr,t)}function GR(c,t){c.uniform2iv(this.addr,t)}function VR(c,t){c.uniform3iv(this.addr,t)}function kR(c,t){c.uniform4iv(this.addr,t)}function qR(c,t){c.uniform1uiv(this.addr,t)}function XR(c,t){c.uniform2uiv(this.addr,t)}function WR(c,t){c.uniform3uiv(this.addr,t)}function YR(c,t){c.uniform4uiv(this.addr,t)}function jR(c,t,n){const a=this.cache,r=t.length,o=Bu(n,r);Tn(a,o)||(c.uniform1iv(this.addr,o),An(a,o));let u;this.type===c.SAMPLER_2D_SHADOW?u=Rp:u=Jx;for(let f=0;f!==r;++f)n.setTexture2D(t[f]||u,o[f])}function ZR(c,t,n){const a=this.cache,r=t.length,o=Bu(n,r);Tn(a,o)||(c.uniform1iv(this.addr,o),An(a,o));for(let u=0;u!==r;++u)n.setTexture3D(t[u]||ty,o[u])}function KR(c,t,n){const a=this.cache,r=t.length,o=Bu(n,r);Tn(a,o)||(c.uniform1iv(this.addr,o),An(a,o));for(let u=0;u!==r;++u)n.setTextureCube(t[u]||ey,o[u])}function QR(c,t,n){const a=this.cache,r=t.length,o=Bu(n,r);Tn(a,o)||(c.uniform1iv(this.addr,o),An(a,o));for(let u=0;u!==r;++u)n.setTexture2DArray(t[u]||$x,o[u])}function JR(c){switch(c){case 5126:return LR;case 35664:return OR;case 35665:return zR;case 35666:return PR;case 35674:return BR;case 35675:return FR;case 35676:return IR;case 5124:case 35670:return HR;case 35667:case 35671:return GR;case 35668:case 35672:return VR;case 35669:case 35673:return kR;case 5125:return qR;case 36294:return XR;case 36295:return WR;case 36296:return YR;case 35678:case 36198:case 36298:case 36306:case 35682:return jR;case 35679:case 36299:case 36307:return ZR;case 35680:case 36300:case 36308:case 36293:return KR;case 36289:case 36303:case 36311:case 36292:return QR}}class $R{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.setValue=UR(n.type)}}class tC{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=JR(n.type)}}class eC{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,a){const r=this.seq;for(let o=0,u=r.length;o!==u;++o){const f=r[o];f.setValue(t,n[f.id],a)}}}const Dd=/(\w+)(\])?(\[|\.)?/g;function j_(c,t){c.seq.push(t),c.map[t.id]=t}function nC(c,t,n){const a=c.name,r=a.length;for(Dd.lastIndex=0;;){const o=Dd.exec(a),u=Dd.lastIndex;let f=o[1];const p=o[2]==="]",h=o[3];if(p&&(f=f|0),h===void 0||h==="["&&u+2===r){j_(n,h===void 0?new $R(f,c,t):new tC(f,c,t));break}else{let _=n.map[f];_===void 0&&(_=new eC(f),j_(n,_)),n=_}}}class Ru{constructor(t,n){this.seq=[],this.map={};const a=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let u=0;u<a;++u){const f=t.getActiveUniform(n,u),p=t.getUniformLocation(n,f.name);nC(f,p,this)}const r=[],o=[];for(const u of this.seq)u.type===t.SAMPLER_2D_SHADOW||u.type===t.SAMPLER_CUBE_SHADOW||u.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(u):o.push(u);r.length>0&&(this.seq=r.concat(o))}setValue(t,n,a,r){const o=this.map[n];o!==void 0&&o.setValue(t,a,r)}setOptional(t,n,a){const r=n[a];r!==void 0&&this.setValue(t,a,r)}static upload(t,n,a,r){for(let o=0,u=n.length;o!==u;++o){const f=n[o],p=a[f.id];p.needsUpdate!==!1&&f.setValue(t,p.value,r)}}static seqWithValue(t,n){const a=[];for(let r=0,o=t.length;r!==o;++r){const u=t[r];u.id in n&&a.push(u)}return a}}function Z_(c,t,n){const a=c.createShader(t);return c.shaderSource(a,n),c.compileShader(a),a}const iC=37297;let aC=0;function sC(c,t){const n=c.split(`
`),a=[],r=Math.max(t-6,0),o=Math.min(t+6,n.length);for(let u=r;u<o;u++){const f=u+1;a.push(`${f===t?">":" "} ${f}: ${n[u]}`)}return a.join(`
`)}const K_=new _e;function rC(c){Ue._getMatrix(K_,Ue.workingColorSpace,c);const t=`mat3( ${K_.elements.map(n=>n.toFixed(4))} )`;switch(Ue.getTransfer(c)){case Nu:return[t,"LinearTransferOETF"];case Ye:return[t,"sRGBTransferOETF"];default:return pe("WebGLProgram: Unsupported color space: ",c),[t,"LinearTransferOETF"]}}function Q_(c,t,n){const a=c.getShaderParameter(t,c.COMPILE_STATUS),o=(c.getShaderInfoLog(t)||"").trim();if(a&&o==="")return"";const u=/ERROR: 0:(\d+)/.exec(o);if(u){const f=parseInt(u[1]);return n.toUpperCase()+`

`+o+`

`+sC(c.getShaderSource(t),f)}else return o}function oC(c,t){const n=rC(t);return[`vec4 ${c}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const lC={[Mx]:"Linear",[Ex]:"Reinhard",[bx]:"Cineon",[Tx]:"ACESFilmic",[wx]:"AgX",[Rx]:"Neutral",[Ax]:"Custom"};function cC(c,t){const n=lC[t];return n===void 0?(pe("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+c+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+c+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Mu=new lt;function uC(){Ue.getLuminanceCoefficients(Mu);const c=Mu.x.toFixed(4),t=Mu.y.toFixed(4),n=Mu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${c}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fC(c){return[c.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",c.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Nl).join(`
`)}function hC(c){const t=[];for(const n in c){const a=c[n];a!==!1&&t.push("#define "+n+" "+a)}return t.join(`
`)}function dC(c,t){const n={},a=c.getProgramParameter(t,c.ACTIVE_ATTRIBUTES);for(let r=0;r<a;r++){const o=c.getActiveAttrib(t,r),u=o.name;let f=1;o.type===c.FLOAT_MAT2&&(f=2),o.type===c.FLOAT_MAT3&&(f=3),o.type===c.FLOAT_MAT4&&(f=4),n[u]={type:o.type,location:c.getAttribLocation(t,u),locationSize:f}}return n}function Nl(c){return c!==""}function J_(c,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return c.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $_(c,t){return c.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const pC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cp(c){return c.replace(pC,gC)}const mC=new Map;function gC(c,t){let n=xe[t];if(n===void 0){const a=mC.get(t);if(a!==void 0)n=xe[a],pe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return Cp(n)}const vC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tx(c){return c.replace(vC,_C)}function _C(c,t,n,a){let r="";for(let o=parseInt(t);o<parseInt(n);o++)r+=a.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function ex(c){let t=`precision ${c.precision} float;
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
#define LOW_PRECISION`),t}const xC={[Eu]:"SHADOWMAP_TYPE_PCF",[Dl]:"SHADOWMAP_TYPE_VSM"};function yC(c){return xC[c.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const SC={[_r]:"ENVMAP_TYPE_CUBE",[Mo]:"ENVMAP_TYPE_CUBE",[Ou]:"ENVMAP_TYPE_CUBE_UV"};function MC(c){return c.envMap===!1?"ENVMAP_TYPE_CUBE":SC[c.envMapMode]||"ENVMAP_TYPE_CUBE"}const EC={[Mo]:"ENVMAP_MODE_REFRACTION"};function bC(c){return c.envMap===!1?"ENVMAP_MODE_REFLECTION":EC[c.envMapMode]||"ENVMAP_MODE_REFLECTION"}const TC={[Sx]:"ENVMAP_BLENDING_MULTIPLY",[h1]:"ENVMAP_BLENDING_MIX",[d1]:"ENVMAP_BLENDING_ADD"};function AC(c){return c.envMap===!1?"ENVMAP_BLENDING_NONE":TC[c.combine]||"ENVMAP_BLENDING_NONE"}function wC(c){const t=c.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function RC(c,t,n,a){const r=c.getContext(),o=n.defines;let u=n.vertexShader,f=n.fragmentShader;const p=yC(n),h=MC(n),g=bC(n),_=AC(n),v=wC(n),y=fC(n),M=hC(o),b=r.createProgram();let S,x,T=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(Nl).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(Nl).join(`
`),x.length>0&&(x+=`
`)):(S=[ex(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Nl).join(`
`),x=[ex(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Yi?"#define TONE_MAPPING":"",n.toneMapping!==Yi?xe.tonemapping_pars_fragment:"",n.toneMapping!==Yi?cC("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",xe.colorspace_pars_fragment,oC("linearToOutputTexel",n.outputColorSpace),uC(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Nl).join(`
`)),u=Cp(u),u=J_(u,n),u=$_(u,n),f=Cp(f),f=J_(f,n),f=$_(f,n),u=tx(u),f=tx(f),n.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",n.glslVersion===f_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===f_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const U=T+S+u,C=T+x+f,L=Z_(r,r.VERTEX_SHADER,U),B=Z_(r,r.FRAGMENT_SHADER,C);r.attachShader(b,L),r.attachShader(b,B),n.index0AttributeName!==void 0?r.bindAttribLocation(b,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function P(H){if(c.debug.checkShaderErrors){const $=r.getProgramInfoLog(b)||"",V=r.getShaderInfoLog(L)||"",K=r.getShaderInfoLog(B)||"",W=$.trim(),z=V.trim(),G=K.trim();let Q=!0,mt=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(Q=!1,typeof c.debug.onShaderError=="function")c.debug.onShaderError(r,b,L,B);else{const yt=Q_(r,L,"vertex"),F=Q_(r,B,"fragment");Ne("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+W+`
`+yt+`
`+F)}else W!==""?pe("WebGLProgram: Program Info Log:",W):(z===""||G==="")&&(mt=!1);mt&&(H.diagnostics={runnable:Q,programLog:W,vertexShader:{log:z,prefix:S},fragmentShader:{log:G,prefix:x}})}r.deleteShader(L),r.deleteShader(B),q=new Ru(r,b),w=dC(r,b)}let q;this.getUniforms=function(){return q===void 0&&P(this),q};let w;this.getAttributes=function(){return w===void 0&&P(this),w};let O=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=r.getProgramParameter(b,iC)),O},this.destroy=function(){a.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=aC++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=L,this.fragmentShader=B,this}let CC=0;class DC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,a=t.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(a),u=this._getShaderCacheForMaterial(t);return u.has(r)===!1&&(u.add(r),r.usedTimes++),u.has(o)===!1&&(u.add(o),o.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let a=n.get(t);return a===void 0&&(a=new Set,n.set(t,a)),a}_getShaderStage(t){const n=this.shaderCache;let a=n.get(t);return a===void 0&&(a=new NC(t),n.set(t,a)),a}}class NC{constructor(t){this.id=CC++,this.code=t,this.usedTimes=0}}function UC(c,t,n,a,r,o,u){const f=new Xp,p=new DC,h=new Set,g=[],_=new Map,v=r.logarithmicDepthBuffer;let y=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(w){return h.add(w),w===0?"uv":`uv${w}`}function S(w,O,H,$,V){const K=$.fog,W=V.geometry,z=w.isMeshStandardMaterial?$.environment:null,G=(w.isMeshStandardMaterial?n:t).get(w.envMap||z),Q=G&&G.mapping===Ou?G.image.height:null,mt=M[w.type];w.precision!==null&&(y=r.getMaxPrecision(w.precision),y!==w.precision&&pe("WebGLProgram.getParameters:",w.precision,"not supported, using",y,"instead."));const yt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,F=yt!==void 0?yt.length:0;let j=0;W.morphAttributes.position!==void 0&&(j=1),W.morphAttributes.normal!==void 0&&(j=2),W.morphAttributes.color!==void 0&&(j=3);let ct,Tt,Dt,it;if(mt){const ce=la[mt];ct=ce.vertexShader,Tt=ce.fragmentShader}else ct=w.vertexShader,Tt=w.fragmentShader,p.update(w),Dt=p.getVertexShaderID(w),it=p.getFragmentShaderID(w);const gt=c.getRenderTarget(),Ct=c.state.buffers.depth.getReversed(),Pt=V.isInstancedMesh===!0,Nt=V.isBatchedMesh===!0,ye=!!w.map,De=!!w.matcap,ue=!!G,ne=!!w.aoMap,be=!!w.lightMap,le=!!w.bumpMap,en=!!w.normalMap,X=!!w.displacementMap,je=!!w.emissiveMap,Se=!!w.metalnessMap,he=!!w.roughnessMap,qt=w.anisotropy>0,I=w.clearcoat>0,A=w.dispersion>0,J=w.iridescence>0,_t=w.sheen>0,Et=w.transmission>0,ht=qt&&!!w.anisotropyMap,Xt=I&&!!w.clearcoatMap,Ut=I&&!!w.clearcoatNormalMap,Wt=I&&!!w.clearcoatRoughnessMap,ae=J&&!!w.iridescenceMap,At=J&&!!w.iridescenceThicknessMap,wt=_t&&!!w.sheenColorMap,Gt=_t&&!!w.sheenRoughnessMap,Ft=!!w.specularMap,Lt=!!w.specularColorMap,me=!!w.specularIntensityMap,Z=Et&&!!w.transmissionMap,Ot=Et&&!!w.thicknessMap,Rt=!!w.gradientMap,pt=!!w.alphaMap,ut=w.alphaTest>0,vt=!!w.alphaHash,bt=!!w.extensions;let Kt=Yi;w.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(Kt=c.toneMapping);const se={shaderID:mt,shaderType:w.type,shaderName:w.name,vertexShader:ct,fragmentShader:Tt,defines:w.defines,customVertexShaderID:Dt,customFragmentShaderID:it,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:y,batching:Nt,batchingColor:Nt&&V._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&V.instanceColor!==null,instancingMorph:Pt&&V.morphTexture!==null,outputColorSpace:gt===null?c.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:bo,alphaToCoverage:!!w.alphaToCoverage,map:ye,matcap:De,envMap:ue,envMapMode:ue&&G.mapping,envMapCubeUVHeight:Q,aoMap:ne,lightMap:be,bumpMap:le,normalMap:en,displacementMap:X,emissiveMap:je,normalMapObjectSpace:en&&w.normalMapType===g1,normalMapTangentSpace:en&&w.normalMapType===Bx,metalnessMap:Se,roughnessMap:he,anisotropy:qt,anisotropyMap:ht,clearcoat:I,clearcoatMap:Xt,clearcoatNormalMap:Ut,clearcoatRoughnessMap:Wt,dispersion:A,iridescence:J,iridescenceMap:ae,iridescenceThicknessMap:At,sheen:_t,sheenColorMap:wt,sheenRoughnessMap:Gt,specularMap:Ft,specularColorMap:Lt,specularIntensityMap:me,transmission:Et,transmissionMap:Z,thicknessMap:Ot,gradientMap:Rt,opaque:w.transparent===!1&&w.blending===_o&&w.alphaToCoverage===!1,alphaMap:pt,alphaTest:ut,alphaHash:vt,combine:w.combine,mapUv:ye&&b(w.map.channel),aoMapUv:ne&&b(w.aoMap.channel),lightMapUv:be&&b(w.lightMap.channel),bumpMapUv:le&&b(w.bumpMap.channel),normalMapUv:en&&b(w.normalMap.channel),displacementMapUv:X&&b(w.displacementMap.channel),emissiveMapUv:je&&b(w.emissiveMap.channel),metalnessMapUv:Se&&b(w.metalnessMap.channel),roughnessMapUv:he&&b(w.roughnessMap.channel),anisotropyMapUv:ht&&b(w.anisotropyMap.channel),clearcoatMapUv:Xt&&b(w.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&b(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Wt&&b(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ae&&b(w.iridescenceMap.channel),iridescenceThicknessMapUv:At&&b(w.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&b(w.sheenColorMap.channel),sheenRoughnessMapUv:Gt&&b(w.sheenRoughnessMap.channel),specularMapUv:Ft&&b(w.specularMap.channel),specularColorMapUv:Lt&&b(w.specularColorMap.channel),specularIntensityMapUv:me&&b(w.specularIntensityMap.channel),transmissionMapUv:Z&&b(w.transmissionMap.channel),thicknessMapUv:Ot&&b(w.thicknessMap.channel),alphaMapUv:pt&&b(w.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(en||qt),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!W.attributes.uv&&(ye||pt),fog:!!K,useFog:w.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ct,skinning:V.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:j,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:w.dithering,shadowMapEnabled:c.shadowMap.enabled&&H.length>0,shadowMapType:c.shadowMap.type,toneMapping:Kt,decodeVideoTexture:ye&&w.map.isVideoTexture===!0&&Ue.getTransfer(w.map.colorSpace)===Ye,decodeVideoTextureEmissive:je&&w.emissiveMap.isVideoTexture===!0&&Ue.getTransfer(w.emissiveMap.colorSpace)===Ye,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ja,flipSided:w.side===ri,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:bt&&w.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(bt&&w.extensions.multiDraw===!0||Nt)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return se.vertexUv1s=h.has(1),se.vertexUv2s=h.has(2),se.vertexUv3s=h.has(3),h.clear(),se}function x(w){const O=[];if(w.shaderID?O.push(w.shaderID):(O.push(w.customVertexShaderID),O.push(w.customFragmentShaderID)),w.defines!==void 0)for(const H in w.defines)O.push(H),O.push(w.defines[H]);return w.isRawShaderMaterial===!1&&(T(O,w),U(O,w),O.push(c.outputColorSpace)),O.push(w.customProgramCacheKey),O.join()}function T(w,O){w.push(O.precision),w.push(O.outputColorSpace),w.push(O.envMapMode),w.push(O.envMapCubeUVHeight),w.push(O.mapUv),w.push(O.alphaMapUv),w.push(O.lightMapUv),w.push(O.aoMapUv),w.push(O.bumpMapUv),w.push(O.normalMapUv),w.push(O.displacementMapUv),w.push(O.emissiveMapUv),w.push(O.metalnessMapUv),w.push(O.roughnessMapUv),w.push(O.anisotropyMapUv),w.push(O.clearcoatMapUv),w.push(O.clearcoatNormalMapUv),w.push(O.clearcoatRoughnessMapUv),w.push(O.iridescenceMapUv),w.push(O.iridescenceThicknessMapUv),w.push(O.sheenColorMapUv),w.push(O.sheenRoughnessMapUv),w.push(O.specularMapUv),w.push(O.specularColorMapUv),w.push(O.specularIntensityMapUv),w.push(O.transmissionMapUv),w.push(O.thicknessMapUv),w.push(O.combine),w.push(O.fogExp2),w.push(O.sizeAttenuation),w.push(O.morphTargetsCount),w.push(O.morphAttributeCount),w.push(O.numDirLights),w.push(O.numPointLights),w.push(O.numSpotLights),w.push(O.numSpotLightMaps),w.push(O.numHemiLights),w.push(O.numRectAreaLights),w.push(O.numDirLightShadows),w.push(O.numPointLightShadows),w.push(O.numSpotLightShadows),w.push(O.numSpotLightShadowsWithMaps),w.push(O.numLightProbes),w.push(O.shadowMapType),w.push(O.toneMapping),w.push(O.numClippingPlanes),w.push(O.numClipIntersection),w.push(O.depthPacking)}function U(w,O){f.disableAll(),O.instancing&&f.enable(0),O.instancingColor&&f.enable(1),O.instancingMorph&&f.enable(2),O.matcap&&f.enable(3),O.envMap&&f.enable(4),O.normalMapObjectSpace&&f.enable(5),O.normalMapTangentSpace&&f.enable(6),O.clearcoat&&f.enable(7),O.iridescence&&f.enable(8),O.alphaTest&&f.enable(9),O.vertexColors&&f.enable(10),O.vertexAlphas&&f.enable(11),O.vertexUv1s&&f.enable(12),O.vertexUv2s&&f.enable(13),O.vertexUv3s&&f.enable(14),O.vertexTangents&&f.enable(15),O.anisotropy&&f.enable(16),O.alphaHash&&f.enable(17),O.batching&&f.enable(18),O.dispersion&&f.enable(19),O.batchingColor&&f.enable(20),O.gradientMap&&f.enable(21),w.push(f.mask),f.disableAll(),O.fog&&f.enable(0),O.useFog&&f.enable(1),O.flatShading&&f.enable(2),O.logarithmicDepthBuffer&&f.enable(3),O.reversedDepthBuffer&&f.enable(4),O.skinning&&f.enable(5),O.morphTargets&&f.enable(6),O.morphNormals&&f.enable(7),O.morphColors&&f.enable(8),O.premultipliedAlpha&&f.enable(9),O.shadowMapEnabled&&f.enable(10),O.doubleSided&&f.enable(11),O.flipSided&&f.enable(12),O.useDepthPacking&&f.enable(13),O.dithering&&f.enable(14),O.transmission&&f.enable(15),O.sheen&&f.enable(16),O.opaque&&f.enable(17),O.pointsUvs&&f.enable(18),O.decodeVideoTexture&&f.enable(19),O.decodeVideoTextureEmissive&&f.enable(20),O.alphaToCoverage&&f.enable(21),w.push(f.mask)}function C(w){const O=M[w.type];let H;if(O){const $=la[O];H=q1.clone($.uniforms)}else H=w.uniforms;return H}function L(w,O){let H=_.get(O);return H!==void 0?++H.usedTimes:(H=new RC(c,O,w,o),g.push(H),_.set(O,H)),H}function B(w){if(--w.usedTimes===0){const O=g.indexOf(w);g[O]=g[g.length-1],g.pop(),_.delete(w.cacheKey),w.destroy()}}function P(w){p.remove(w)}function q(){p.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:C,acquireProgram:L,releaseProgram:B,releaseShaderCache:P,programs:g,dispose:q}}function LC(){let c=new WeakMap;function t(u){return c.has(u)}function n(u){let f=c.get(u);return f===void 0&&(f={},c.set(u,f)),f}function a(u){c.delete(u)}function r(u,f,p){c.get(u)[f]=p}function o(){c=new WeakMap}return{has:t,get:n,remove:a,update:r,dispose:o}}function OC(c,t){return c.groupOrder!==t.groupOrder?c.groupOrder-t.groupOrder:c.renderOrder!==t.renderOrder?c.renderOrder-t.renderOrder:c.material.id!==t.material.id?c.material.id-t.material.id:c.z!==t.z?c.z-t.z:c.id-t.id}function nx(c,t){return c.groupOrder!==t.groupOrder?c.groupOrder-t.groupOrder:c.renderOrder!==t.renderOrder?c.renderOrder-t.renderOrder:c.z!==t.z?t.z-c.z:c.id-t.id}function ix(){const c=[];let t=0;const n=[],a=[],r=[];function o(){t=0,n.length=0,a.length=0,r.length=0}function u(_,v,y,M,b,S){let x=c[t];return x===void 0?(x={id:_.id,object:_,geometry:v,material:y,groupOrder:M,renderOrder:_.renderOrder,z:b,group:S},c[t]=x):(x.id=_.id,x.object=_,x.geometry=v,x.material=y,x.groupOrder=M,x.renderOrder=_.renderOrder,x.z=b,x.group=S),t++,x}function f(_,v,y,M,b,S){const x=u(_,v,y,M,b,S);y.transmission>0?a.push(x):y.transparent===!0?r.push(x):n.push(x)}function p(_,v,y,M,b,S){const x=u(_,v,y,M,b,S);y.transmission>0?a.unshift(x):y.transparent===!0?r.unshift(x):n.unshift(x)}function h(_,v){n.length>1&&n.sort(_||OC),a.length>1&&a.sort(v||nx),r.length>1&&r.sort(v||nx)}function g(){for(let _=t,v=c.length;_<v;_++){const y=c[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:a,transparent:r,init:o,push:f,unshift:p,finish:g,sort:h}}function zC(){let c=new WeakMap;function t(a,r){const o=c.get(a);let u;return o===void 0?(u=new ix,c.set(a,[u])):r>=o.length?(u=new ix,o.push(u)):u=o[r],u}function n(){c=new WeakMap}return{get:t,dispose:n}}function PC(){const c={};return{get:function(t){if(c[t.id]!==void 0)return c[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new lt,color:new Pe};break;case"SpotLight":n={position:new lt,direction:new lt,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new lt,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new lt,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":n={color:new Pe,position:new lt,halfWidth:new lt,halfHeight:new lt};break}return c[t.id]=n,n}}}function BC(){const c={};return{get:function(t){if(c[t.id]!==void 0)return c[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return c[t.id]=n,n}}}let FC=0;function IC(c,t){return(t.castShadow?2:0)-(c.castShadow?2:0)+(t.map?1:0)-(c.map?1:0)}function HC(c){const t=new PC,n=BC(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)a.probe.push(new lt);const r=new lt,o=new cn,u=new cn;function f(h){let g=0,_=0,v=0;for(let w=0;w<9;w++)a.probe[w].set(0,0,0);let y=0,M=0,b=0,S=0,x=0,T=0,U=0,C=0,L=0,B=0,P=0;h.sort(IC);for(let w=0,O=h.length;w<O;w++){const H=h[w],$=H.color,V=H.intensity,K=H.distance;let W=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===Eo?W=H.shadow.map.texture:W=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)g+=$.r*V,_+=$.g*V,v+=$.b*V;else if(H.isLightProbe){for(let z=0;z<9;z++)a.probe[z].addScaledVector(H.sh.coefficients[z],V);P++}else if(H.isDirectionalLight){const z=t.get(H);if(z.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const G=H.shadow,Q=n.get(H);Q.shadowIntensity=G.intensity,Q.shadowBias=G.bias,Q.shadowNormalBias=G.normalBias,Q.shadowRadius=G.radius,Q.shadowMapSize=G.mapSize,a.directionalShadow[y]=Q,a.directionalShadowMap[y]=W,a.directionalShadowMatrix[y]=H.shadow.matrix,T++}a.directional[y]=z,y++}else if(H.isSpotLight){const z=t.get(H);z.position.setFromMatrixPosition(H.matrixWorld),z.color.copy($).multiplyScalar(V),z.distance=K,z.coneCos=Math.cos(H.angle),z.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),z.decay=H.decay,a.spot[b]=z;const G=H.shadow;if(H.map&&(a.spotLightMap[L]=H.map,L++,G.updateMatrices(H),H.castShadow&&B++),a.spotLightMatrix[b]=G.matrix,H.castShadow){const Q=n.get(H);Q.shadowIntensity=G.intensity,Q.shadowBias=G.bias,Q.shadowNormalBias=G.normalBias,Q.shadowRadius=G.radius,Q.shadowMapSize=G.mapSize,a.spotShadow[b]=Q,a.spotShadowMap[b]=W,C++}b++}else if(H.isRectAreaLight){const z=t.get(H);z.color.copy($).multiplyScalar(V),z.halfWidth.set(H.width*.5,0,0),z.halfHeight.set(0,H.height*.5,0),a.rectArea[S]=z,S++}else if(H.isPointLight){const z=t.get(H);if(z.color.copy(H.color).multiplyScalar(H.intensity),z.distance=H.distance,z.decay=H.decay,H.castShadow){const G=H.shadow,Q=n.get(H);Q.shadowIntensity=G.intensity,Q.shadowBias=G.bias,Q.shadowNormalBias=G.normalBias,Q.shadowRadius=G.radius,Q.shadowMapSize=G.mapSize,Q.shadowCameraNear=G.camera.near,Q.shadowCameraFar=G.camera.far,a.pointShadow[M]=Q,a.pointShadowMap[M]=W,a.pointShadowMatrix[M]=H.shadow.matrix,U++}a.point[M]=z,M++}else if(H.isHemisphereLight){const z=t.get(H);z.skyColor.copy(H.color).multiplyScalar(V),z.groundColor.copy(H.groundColor).multiplyScalar(V),a.hemi[x]=z,x++}}S>0&&(c.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Ht.LTC_FLOAT_1,a.rectAreaLTC2=Ht.LTC_FLOAT_2):(a.rectAreaLTC1=Ht.LTC_HALF_1,a.rectAreaLTC2=Ht.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=_,a.ambient[2]=v;const q=a.hash;(q.directionalLength!==y||q.pointLength!==M||q.spotLength!==b||q.rectAreaLength!==S||q.hemiLength!==x||q.numDirectionalShadows!==T||q.numPointShadows!==U||q.numSpotShadows!==C||q.numSpotMaps!==L||q.numLightProbes!==P)&&(a.directional.length=y,a.spot.length=b,a.rectArea.length=S,a.point.length=M,a.hemi.length=x,a.directionalShadow.length=T,a.directionalShadowMap.length=T,a.pointShadow.length=U,a.pointShadowMap.length=U,a.spotShadow.length=C,a.spotShadowMap.length=C,a.directionalShadowMatrix.length=T,a.pointShadowMatrix.length=U,a.spotLightMatrix.length=C+L-B,a.spotLightMap.length=L,a.numSpotLightShadowsWithMaps=B,a.numLightProbes=P,q.directionalLength=y,q.pointLength=M,q.spotLength=b,q.rectAreaLength=S,q.hemiLength=x,q.numDirectionalShadows=T,q.numPointShadows=U,q.numSpotShadows=C,q.numSpotMaps=L,q.numLightProbes=P,a.version=FC++)}function p(h,g){let _=0,v=0,y=0,M=0,b=0;const S=g.matrixWorldInverse;for(let x=0,T=h.length;x<T;x++){const U=h[x];if(U.isDirectionalLight){const C=a.directional[_];C.direction.setFromMatrixPosition(U.matrixWorld),r.setFromMatrixPosition(U.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(S),_++}else if(U.isSpotLight){const C=a.spot[y];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(S),C.direction.setFromMatrixPosition(U.matrixWorld),r.setFromMatrixPosition(U.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(S),y++}else if(U.isRectAreaLight){const C=a.rectArea[M];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(S),u.identity(),o.copy(U.matrixWorld),o.premultiply(S),u.extractRotation(o),C.halfWidth.set(U.width*.5,0,0),C.halfHeight.set(0,U.height*.5,0),C.halfWidth.applyMatrix4(u),C.halfHeight.applyMatrix4(u),M++}else if(U.isPointLight){const C=a.point[v];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(S),v++}else if(U.isHemisphereLight){const C=a.hemi[b];C.direction.setFromMatrixPosition(U.matrixWorld),C.direction.transformDirection(S),b++}}}return{setup:f,setupView:p,state:a}}function ax(c){const t=new HC(c),n=[],a=[];function r(g){h.camera=g,n.length=0,a.length=0}function o(g){n.push(g)}function u(g){a.push(g)}function f(){t.setup(n)}function p(g){t.setupView(n,g)}const h={lightsArray:n,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:h,setupLights:f,setupLightsView:p,pushLight:o,pushShadow:u}}function GC(c){let t=new WeakMap;function n(r,o=0){const u=t.get(r);let f;return u===void 0?(f=new ax(c),t.set(r,[f])):o>=u.length?(f=new ax(c),u.push(f)):f=u[o],f}function a(){t=new WeakMap}return{get:n,dispose:a}}const VC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kC=`uniform sampler2D shadow_pass;
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
}`,qC=[new lt(1,0,0),new lt(-1,0,0),new lt(0,1,0),new lt(0,-1,0),new lt(0,0,1),new lt(0,0,-1)],XC=[new lt(0,-1,0),new lt(0,-1,0),new lt(0,0,1),new lt(0,0,-1),new lt(0,-1,0),new lt(0,-1,0)],sx=new cn,Rl=new lt,Nd=new lt;function WC(c,t,n){let a=new Wp;const r=new Be,o=new Be,u=new dn,f=new nT,p=new iT,h={},g=n.maxTextureSize,_={[Fs]:ri,[ri]:Fs,[ja]:ja},v=new ga({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:VC,fragmentShader:kC}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const M=new es;M.setAttribute("position",new da(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new ji(M,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Eu;let x=this.type;this.render=function(B,P,q){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||B.length===0)return;B.type===yx&&(pe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),B.type=Eu);const w=c.getRenderTarget(),O=c.getActiveCubeFace(),H=c.getActiveMipmapLevel(),$=c.state;$.setBlending(Ka),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const V=x!==this.type;V&&P.traverse(function(K){K.material&&(Array.isArray(K.material)?K.material.forEach(W=>W.needsUpdate=!0):K.material.needsUpdate=!0)});for(let K=0,W=B.length;K<W;K++){const z=B[K],G=z.shadow;if(G===void 0){pe("WebGLShadowMap:",z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const Q=G.getFrameExtents();if(r.multiply(Q),o.copy(G.mapSize),(r.x>g||r.y>g)&&(r.x>g&&(o.x=Math.floor(g/Q.x),r.x=o.x*Q.x,G.mapSize.x=o.x),r.y>g&&(o.y=Math.floor(g/Q.y),r.y=o.y*Q.y,G.mapSize.y=o.y)),G.map===null||V===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Dl){if(z.isPointLight){pe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new ha(r.x,r.y,{format:Eo,type:$a,minFilter:In,magFilter:In,generateMipmaps:!1}),G.map.texture.name=z.name+".shadowMap",G.map.depthTexture=new Pl(r.x,r.y,ca),G.map.depthTexture.name=z.name+".shadowMapDepth",G.map.depthTexture.format=ts,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Fn,G.map.depthTexture.magFilter=Fn}else{z.isPointLight?(G.map=new jx(r.x),G.map.depthTexture=new tT(r.x,pa)):(G.map=new ha(r.x,r.y),G.map.depthTexture=new Pl(r.x,r.y,pa)),G.map.depthTexture.name=z.name+".shadowMap",G.map.depthTexture.format=ts;const yt=c.state.buffers.depth.getReversed();this.type===Eu?(G.map.depthTexture.compareFunction=yt?Vp:Gp,G.map.depthTexture.minFilter=In,G.map.depthTexture.magFilter=In):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Fn,G.map.depthTexture.magFilter=Fn)}G.camera.updateProjectionMatrix()}const mt=G.map.isWebGLCubeRenderTarget?6:1;for(let yt=0;yt<mt;yt++){if(G.map.isWebGLCubeRenderTarget)c.setRenderTarget(G.map,yt),c.clear();else{yt===0&&(c.setRenderTarget(G.map),c.clear());const F=G.getViewport(yt);u.set(o.x*F.x,o.y*F.y,o.x*F.z,o.y*F.w),$.viewport(u)}if(z.isPointLight){const F=G.camera,j=G.matrix,ct=z.distance||F.far;ct!==F.far&&(F.far=ct,F.updateProjectionMatrix()),Rl.setFromMatrixPosition(z.matrixWorld),F.position.copy(Rl),Nd.copy(F.position),Nd.add(qC[yt]),F.up.copy(XC[yt]),F.lookAt(Nd),F.updateMatrixWorld(),j.makeTranslation(-Rl.x,-Rl.y,-Rl.z),sx.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),G._frustum.setFromProjectionMatrix(sx,F.coordinateSystem,F.reversedDepth)}else G.updateMatrices(z);a=G.getFrustum(),C(P,q,G.camera,z,this.type)}G.isPointLightShadow!==!0&&this.type===Dl&&T(G,q),G.needsUpdate=!1}x=this.type,S.needsUpdate=!1,c.setRenderTarget(w,O,H)};function T(B,P){const q=t.update(b);v.defines.VSM_SAMPLES!==B.blurSamples&&(v.defines.VSM_SAMPLES=B.blurSamples,y.defines.VSM_SAMPLES=B.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new ha(r.x,r.y,{format:Eo,type:$a})),v.uniforms.shadow_pass.value=B.map.depthTexture,v.uniforms.resolution.value=B.mapSize,v.uniforms.radius.value=B.radius,c.setRenderTarget(B.mapPass),c.clear(),c.renderBufferDirect(P,null,q,v,b,null),y.uniforms.shadow_pass.value=B.mapPass.texture,y.uniforms.resolution.value=B.mapSize,y.uniforms.radius.value=B.radius,c.setRenderTarget(B.map),c.clear(),c.renderBufferDirect(P,null,q,y,b,null)}function U(B,P,q,w){let O=null;const H=q.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(H!==void 0)O=H;else if(O=q.isPointLight===!0?p:f,c.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const $=O.uuid,V=P.uuid;let K=h[$];K===void 0&&(K={},h[$]=K);let W=K[V];W===void 0&&(W=O.clone(),K[V]=W,P.addEventListener("dispose",L)),O=W}if(O.visible=P.visible,O.wireframe=P.wireframe,w===Dl?O.side=P.shadowSide!==null?P.shadowSide:P.side:O.side=P.shadowSide!==null?P.shadowSide:_[P.side],O.alphaMap=P.alphaMap,O.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,O.map=P.map,O.clipShadows=P.clipShadows,O.clippingPlanes=P.clippingPlanes,O.clipIntersection=P.clipIntersection,O.displacementMap=P.displacementMap,O.displacementScale=P.displacementScale,O.displacementBias=P.displacementBias,O.wireframeLinewidth=P.wireframeLinewidth,O.linewidth=P.linewidth,q.isPointLight===!0&&O.isMeshDistanceMaterial===!0){const $=c.properties.get(O);$.light=q}return O}function C(B,P,q,w,O){if(B.visible===!1)return;if(B.layers.test(P.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&O===Dl)&&(!B.frustumCulled||a.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,B.matrixWorld);const V=t.update(B),K=B.material;if(Array.isArray(K)){const W=V.groups;for(let z=0,G=W.length;z<G;z++){const Q=W[z],mt=K[Q.materialIndex];if(mt&&mt.visible){const yt=U(B,mt,w,O);B.onBeforeShadow(c,B,P,q,V,yt,Q),c.renderBufferDirect(q,null,V,yt,B,Q),B.onAfterShadow(c,B,P,q,V,yt,Q)}}}else if(K.visible){const W=U(B,K,w,O);B.onBeforeShadow(c,B,P,q,V,W,null),c.renderBufferDirect(q,null,V,W,B,null),B.onAfterShadow(c,B,P,q,V,W,null)}}const $=B.children;for(let V=0,K=$.length;V<K;V++)C($[V],P,q,w,O)}function L(B){B.target.removeEventListener("dispose",L);for(const q in h){const w=h[q],O=B.target.uuid;O in w&&(w[O].dispose(),delete w[O])}}}const YC={[Bd]:Fd,[Id]:Vd,[Hd]:kd,[So]:Gd,[Fd]:Bd,[Vd]:Id,[kd]:Hd,[Gd]:So};function jC(c,t){function n(){let Z=!1;const Ot=new dn;let Rt=null;const pt=new dn(0,0,0,0);return{setMask:function(ut){Rt!==ut&&!Z&&(c.colorMask(ut,ut,ut,ut),Rt=ut)},setLocked:function(ut){Z=ut},setClear:function(ut,vt,bt,Kt,se){se===!0&&(ut*=Kt,vt*=Kt,bt*=Kt),Ot.set(ut,vt,bt,Kt),pt.equals(Ot)===!1&&(c.clearColor(ut,vt,bt,Kt),pt.copy(Ot))},reset:function(){Z=!1,Rt=null,pt.set(-1,0,0,0)}}}function a(){let Z=!1,Ot=!1,Rt=null,pt=null,ut=null;return{setReversed:function(vt){if(Ot!==vt){const bt=t.get("EXT_clip_control");vt?bt.clipControlEXT(bt.LOWER_LEFT_EXT,bt.ZERO_TO_ONE_EXT):bt.clipControlEXT(bt.LOWER_LEFT_EXT,bt.NEGATIVE_ONE_TO_ONE_EXT),Ot=vt;const Kt=ut;ut=null,this.setClear(Kt)}},getReversed:function(){return Ot},setTest:function(vt){vt?gt(c.DEPTH_TEST):Ct(c.DEPTH_TEST)},setMask:function(vt){Rt!==vt&&!Z&&(c.depthMask(vt),Rt=vt)},setFunc:function(vt){if(Ot&&(vt=YC[vt]),pt!==vt){switch(vt){case Bd:c.depthFunc(c.NEVER);break;case Fd:c.depthFunc(c.ALWAYS);break;case Id:c.depthFunc(c.LESS);break;case So:c.depthFunc(c.LEQUAL);break;case Hd:c.depthFunc(c.EQUAL);break;case Gd:c.depthFunc(c.GEQUAL);break;case Vd:c.depthFunc(c.GREATER);break;case kd:c.depthFunc(c.NOTEQUAL);break;default:c.depthFunc(c.LEQUAL)}pt=vt}},setLocked:function(vt){Z=vt},setClear:function(vt){ut!==vt&&(Ot&&(vt=1-vt),c.clearDepth(vt),ut=vt)},reset:function(){Z=!1,Rt=null,pt=null,ut=null,Ot=!1}}}function r(){let Z=!1,Ot=null,Rt=null,pt=null,ut=null,vt=null,bt=null,Kt=null,se=null;return{setTest:function(ce){Z||(ce?gt(c.STENCIL_TEST):Ct(c.STENCIL_TEST))},setMask:function(ce){Ot!==ce&&!Z&&(c.stencilMask(ce),Ot=ce)},setFunc:function(ce,Je,Ve){(Rt!==ce||pt!==Je||ut!==Ve)&&(c.stencilFunc(ce,Je,Ve),Rt=ce,pt=Je,ut=Ve)},setOp:function(ce,Je,Ve){(vt!==ce||bt!==Je||Kt!==Ve)&&(c.stencilOp(ce,Je,Ve),vt=ce,bt=Je,Kt=Ve)},setLocked:function(ce){Z=ce},setClear:function(ce){se!==ce&&(c.clearStencil(ce),se=ce)},reset:function(){Z=!1,Ot=null,Rt=null,pt=null,ut=null,vt=null,bt=null,Kt=null,se=null}}}const o=new n,u=new a,f=new r,p=new WeakMap,h=new WeakMap;let g={},_={},v=new WeakMap,y=[],M=null,b=!1,S=null,x=null,T=null,U=null,C=null,L=null,B=null,P=new Pe(0,0,0),q=0,w=!1,O=null,H=null,$=null,V=null,K=null;const W=c.getParameter(c.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,G=0;const Q=c.getParameter(c.VERSION);Q.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(Q)[1]),z=G>=1):Q.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),z=G>=2);let mt=null,yt={};const F=c.getParameter(c.SCISSOR_BOX),j=c.getParameter(c.VIEWPORT),ct=new dn().fromArray(F),Tt=new dn().fromArray(j);function Dt(Z,Ot,Rt,pt){const ut=new Uint8Array(4),vt=c.createTexture();c.bindTexture(Z,vt),c.texParameteri(Z,c.TEXTURE_MIN_FILTER,c.NEAREST),c.texParameteri(Z,c.TEXTURE_MAG_FILTER,c.NEAREST);for(let bt=0;bt<Rt;bt++)Z===c.TEXTURE_3D||Z===c.TEXTURE_2D_ARRAY?c.texImage3D(Ot,0,c.RGBA,1,1,pt,0,c.RGBA,c.UNSIGNED_BYTE,ut):c.texImage2D(Ot+bt,0,c.RGBA,1,1,0,c.RGBA,c.UNSIGNED_BYTE,ut);return vt}const it={};it[c.TEXTURE_2D]=Dt(c.TEXTURE_2D,c.TEXTURE_2D,1),it[c.TEXTURE_CUBE_MAP]=Dt(c.TEXTURE_CUBE_MAP,c.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[c.TEXTURE_2D_ARRAY]=Dt(c.TEXTURE_2D_ARRAY,c.TEXTURE_2D_ARRAY,1,1),it[c.TEXTURE_3D]=Dt(c.TEXTURE_3D,c.TEXTURE_3D,1,1),o.setClear(0,0,0,1),u.setClear(1),f.setClear(0),gt(c.DEPTH_TEST),u.setFunc(So),le(!1),en(s_),gt(c.CULL_FACE),ne(Ka);function gt(Z){g[Z]!==!0&&(c.enable(Z),g[Z]=!0)}function Ct(Z){g[Z]!==!1&&(c.disable(Z),g[Z]=!1)}function Pt(Z,Ot){return _[Z]!==Ot?(c.bindFramebuffer(Z,Ot),_[Z]=Ot,Z===c.DRAW_FRAMEBUFFER&&(_[c.FRAMEBUFFER]=Ot),Z===c.FRAMEBUFFER&&(_[c.DRAW_FRAMEBUFFER]=Ot),!0):!1}function Nt(Z,Ot){let Rt=y,pt=!1;if(Z){Rt=v.get(Ot),Rt===void 0&&(Rt=[],v.set(Ot,Rt));const ut=Z.textures;if(Rt.length!==ut.length||Rt[0]!==c.COLOR_ATTACHMENT0){for(let vt=0,bt=ut.length;vt<bt;vt++)Rt[vt]=c.COLOR_ATTACHMENT0+vt;Rt.length=ut.length,pt=!0}}else Rt[0]!==c.BACK&&(Rt[0]=c.BACK,pt=!0);pt&&c.drawBuffers(Rt)}function ye(Z){return M!==Z?(c.useProgram(Z),M=Z,!0):!1}const De={[pr]:c.FUNC_ADD,[Zb]:c.FUNC_SUBTRACT,[Kb]:c.FUNC_REVERSE_SUBTRACT};De[Qb]=c.MIN,De[Jb]=c.MAX;const ue={[$b]:c.ZERO,[t1]:c.ONE,[e1]:c.SRC_COLOR,[zd]:c.SRC_ALPHA,[o1]:c.SRC_ALPHA_SATURATE,[s1]:c.DST_COLOR,[i1]:c.DST_ALPHA,[n1]:c.ONE_MINUS_SRC_COLOR,[Pd]:c.ONE_MINUS_SRC_ALPHA,[r1]:c.ONE_MINUS_DST_COLOR,[a1]:c.ONE_MINUS_DST_ALPHA,[l1]:c.CONSTANT_COLOR,[c1]:c.ONE_MINUS_CONSTANT_COLOR,[u1]:c.CONSTANT_ALPHA,[f1]:c.ONE_MINUS_CONSTANT_ALPHA};function ne(Z,Ot,Rt,pt,ut,vt,bt,Kt,se,ce){if(Z===Ka){b===!0&&(Ct(c.BLEND),b=!1);return}if(b===!1&&(gt(c.BLEND),b=!0),Z!==jb){if(Z!==S||ce!==w){if((x!==pr||C!==pr)&&(c.blendEquation(c.FUNC_ADD),x=pr,C=pr),ce)switch(Z){case _o:c.blendFuncSeparate(c.ONE,c.ONE_MINUS_SRC_ALPHA,c.ONE,c.ONE_MINUS_SRC_ALPHA);break;case r_:c.blendFunc(c.ONE,c.ONE);break;case o_:c.blendFuncSeparate(c.ZERO,c.ONE_MINUS_SRC_COLOR,c.ZERO,c.ONE);break;case l_:c.blendFuncSeparate(c.DST_COLOR,c.ONE_MINUS_SRC_ALPHA,c.ZERO,c.ONE);break;default:Ne("WebGLState: Invalid blending: ",Z);break}else switch(Z){case _o:c.blendFuncSeparate(c.SRC_ALPHA,c.ONE_MINUS_SRC_ALPHA,c.ONE,c.ONE_MINUS_SRC_ALPHA);break;case r_:c.blendFuncSeparate(c.SRC_ALPHA,c.ONE,c.ONE,c.ONE);break;case o_:Ne("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case l_:Ne("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ne("WebGLState: Invalid blending: ",Z);break}T=null,U=null,L=null,B=null,P.set(0,0,0),q=0,S=Z,w=ce}return}ut=ut||Ot,vt=vt||Rt,bt=bt||pt,(Ot!==x||ut!==C)&&(c.blendEquationSeparate(De[Ot],De[ut]),x=Ot,C=ut),(Rt!==T||pt!==U||vt!==L||bt!==B)&&(c.blendFuncSeparate(ue[Rt],ue[pt],ue[vt],ue[bt]),T=Rt,U=pt,L=vt,B=bt),(Kt.equals(P)===!1||se!==q)&&(c.blendColor(Kt.r,Kt.g,Kt.b,se),P.copy(Kt),q=se),S=Z,w=!1}function be(Z,Ot){Z.side===ja?Ct(c.CULL_FACE):gt(c.CULL_FACE);let Rt=Z.side===ri;Ot&&(Rt=!Rt),le(Rt),Z.blending===_o&&Z.transparent===!1?ne(Ka):ne(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.blendColor,Z.blendAlpha,Z.premultipliedAlpha),u.setFunc(Z.depthFunc),u.setTest(Z.depthTest),u.setMask(Z.depthWrite),o.setMask(Z.colorWrite);const pt=Z.stencilWrite;f.setTest(pt),pt&&(f.setMask(Z.stencilWriteMask),f.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),f.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),je(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?gt(c.SAMPLE_ALPHA_TO_COVERAGE):Ct(c.SAMPLE_ALPHA_TO_COVERAGE)}function le(Z){O!==Z&&(Z?c.frontFace(c.CW):c.frontFace(c.CCW),O=Z)}function en(Z){Z!==Wb?(gt(c.CULL_FACE),Z!==H&&(Z===s_?c.cullFace(c.BACK):Z===Yb?c.cullFace(c.FRONT):c.cullFace(c.FRONT_AND_BACK))):Ct(c.CULL_FACE),H=Z}function X(Z){Z!==$&&(z&&c.lineWidth(Z),$=Z)}function je(Z,Ot,Rt){Z?(gt(c.POLYGON_OFFSET_FILL),(V!==Ot||K!==Rt)&&(c.polygonOffset(Ot,Rt),V=Ot,K=Rt)):Ct(c.POLYGON_OFFSET_FILL)}function Se(Z){Z?gt(c.SCISSOR_TEST):Ct(c.SCISSOR_TEST)}function he(Z){Z===void 0&&(Z=c.TEXTURE0+W-1),mt!==Z&&(c.activeTexture(Z),mt=Z)}function qt(Z,Ot,Rt){Rt===void 0&&(mt===null?Rt=c.TEXTURE0+W-1:Rt=mt);let pt=yt[Rt];pt===void 0&&(pt={type:void 0,texture:void 0},yt[Rt]=pt),(pt.type!==Z||pt.texture!==Ot)&&(mt!==Rt&&(c.activeTexture(Rt),mt=Rt),c.bindTexture(Z,Ot||it[Z]),pt.type=Z,pt.texture=Ot)}function I(){const Z=yt[mt];Z!==void 0&&Z.type!==void 0&&(c.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function A(){try{c.compressedTexImage2D(...arguments)}catch(Z){Ne("WebGLState:",Z)}}function J(){try{c.compressedTexImage3D(...arguments)}catch(Z){Ne("WebGLState:",Z)}}function _t(){try{c.texSubImage2D(...arguments)}catch(Z){Ne("WebGLState:",Z)}}function Et(){try{c.texSubImage3D(...arguments)}catch(Z){Ne("WebGLState:",Z)}}function ht(){try{c.compressedTexSubImage2D(...arguments)}catch(Z){Ne("WebGLState:",Z)}}function Xt(){try{c.compressedTexSubImage3D(...arguments)}catch(Z){Ne("WebGLState:",Z)}}function Ut(){try{c.texStorage2D(...arguments)}catch(Z){Ne("WebGLState:",Z)}}function Wt(){try{c.texStorage3D(...arguments)}catch(Z){Ne("WebGLState:",Z)}}function ae(){try{c.texImage2D(...arguments)}catch(Z){Ne("WebGLState:",Z)}}function At(){try{c.texImage3D(...arguments)}catch(Z){Ne("WebGLState:",Z)}}function wt(Z){ct.equals(Z)===!1&&(c.scissor(Z.x,Z.y,Z.z,Z.w),ct.copy(Z))}function Gt(Z){Tt.equals(Z)===!1&&(c.viewport(Z.x,Z.y,Z.z,Z.w),Tt.copy(Z))}function Ft(Z,Ot){let Rt=h.get(Ot);Rt===void 0&&(Rt=new WeakMap,h.set(Ot,Rt));let pt=Rt.get(Z);pt===void 0&&(pt=c.getUniformBlockIndex(Ot,Z.name),Rt.set(Z,pt))}function Lt(Z,Ot){const pt=h.get(Ot).get(Z);p.get(Ot)!==pt&&(c.uniformBlockBinding(Ot,pt,Z.__bindingPointIndex),p.set(Ot,pt))}function me(){c.disable(c.BLEND),c.disable(c.CULL_FACE),c.disable(c.DEPTH_TEST),c.disable(c.POLYGON_OFFSET_FILL),c.disable(c.SCISSOR_TEST),c.disable(c.STENCIL_TEST),c.disable(c.SAMPLE_ALPHA_TO_COVERAGE),c.blendEquation(c.FUNC_ADD),c.blendFunc(c.ONE,c.ZERO),c.blendFuncSeparate(c.ONE,c.ZERO,c.ONE,c.ZERO),c.blendColor(0,0,0,0),c.colorMask(!0,!0,!0,!0),c.clearColor(0,0,0,0),c.depthMask(!0),c.depthFunc(c.LESS),u.setReversed(!1),c.clearDepth(1),c.stencilMask(4294967295),c.stencilFunc(c.ALWAYS,0,4294967295),c.stencilOp(c.KEEP,c.KEEP,c.KEEP),c.clearStencil(0),c.cullFace(c.BACK),c.frontFace(c.CCW),c.polygonOffset(0,0),c.activeTexture(c.TEXTURE0),c.bindFramebuffer(c.FRAMEBUFFER,null),c.bindFramebuffer(c.DRAW_FRAMEBUFFER,null),c.bindFramebuffer(c.READ_FRAMEBUFFER,null),c.useProgram(null),c.lineWidth(1),c.scissor(0,0,c.canvas.width,c.canvas.height),c.viewport(0,0,c.canvas.width,c.canvas.height),g={},mt=null,yt={},_={},v=new WeakMap,y=[],M=null,b=!1,S=null,x=null,T=null,U=null,C=null,L=null,B=null,P=new Pe(0,0,0),q=0,w=!1,O=null,H=null,$=null,V=null,K=null,ct.set(0,0,c.canvas.width,c.canvas.height),Tt.set(0,0,c.canvas.width,c.canvas.height),o.reset(),u.reset(),f.reset()}return{buffers:{color:o,depth:u,stencil:f},enable:gt,disable:Ct,bindFramebuffer:Pt,drawBuffers:Nt,useProgram:ye,setBlending:ne,setMaterial:be,setFlipSided:le,setCullFace:en,setLineWidth:X,setPolygonOffset:je,setScissorTest:Se,activeTexture:he,bindTexture:qt,unbindTexture:I,compressedTexImage2D:A,compressedTexImage3D:J,texImage2D:ae,texImage3D:At,updateUBOMapping:Ft,uniformBlockBinding:Lt,texStorage2D:Ut,texStorage3D:Wt,texSubImage2D:_t,texSubImage3D:Et,compressedTexSubImage2D:ht,compressedTexSubImage3D:Xt,scissor:wt,viewport:Gt,reset:me}}function ZC(c,t,n,a,r,o,u){const f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Be,g=new WeakMap;let _;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(I,A){return y?new OffscreenCanvas(I,A):Lu("canvas")}function b(I,A,J){let _t=1;const Et=qt(I);if((Et.width>J||Et.height>J)&&(_t=J/Math.max(Et.width,Et.height)),_t<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const ht=Math.floor(_t*Et.width),Xt=Math.floor(_t*Et.height);_===void 0&&(_=M(ht,Xt));const Ut=A?M(ht,Xt):_;return Ut.width=ht,Ut.height=Xt,Ut.getContext("2d").drawImage(I,0,0,ht,Xt),pe("WebGLRenderer: Texture has been resized from ("+Et.width+"x"+Et.height+") to ("+ht+"x"+Xt+")."),Ut}else return"data"in I&&pe("WebGLRenderer: Image in DataTexture is too big ("+Et.width+"x"+Et.height+")."),I;return I}function S(I){return I.generateMipmaps}function x(I){c.generateMipmap(I)}function T(I){return I.isWebGLCubeRenderTarget?c.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?c.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?c.TEXTURE_2D_ARRAY:c.TEXTURE_2D}function U(I,A,J,_t,Et=!1){if(I!==null){if(c[I]!==void 0)return c[I];pe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ht=A;if(A===c.RED&&(J===c.FLOAT&&(ht=c.R32F),J===c.HALF_FLOAT&&(ht=c.R16F),J===c.UNSIGNED_BYTE&&(ht=c.R8)),A===c.RED_INTEGER&&(J===c.UNSIGNED_BYTE&&(ht=c.R8UI),J===c.UNSIGNED_SHORT&&(ht=c.R16UI),J===c.UNSIGNED_INT&&(ht=c.R32UI),J===c.BYTE&&(ht=c.R8I),J===c.SHORT&&(ht=c.R16I),J===c.INT&&(ht=c.R32I)),A===c.RG&&(J===c.FLOAT&&(ht=c.RG32F),J===c.HALF_FLOAT&&(ht=c.RG16F),J===c.UNSIGNED_BYTE&&(ht=c.RG8)),A===c.RG_INTEGER&&(J===c.UNSIGNED_BYTE&&(ht=c.RG8UI),J===c.UNSIGNED_SHORT&&(ht=c.RG16UI),J===c.UNSIGNED_INT&&(ht=c.RG32UI),J===c.BYTE&&(ht=c.RG8I),J===c.SHORT&&(ht=c.RG16I),J===c.INT&&(ht=c.RG32I)),A===c.RGB_INTEGER&&(J===c.UNSIGNED_BYTE&&(ht=c.RGB8UI),J===c.UNSIGNED_SHORT&&(ht=c.RGB16UI),J===c.UNSIGNED_INT&&(ht=c.RGB32UI),J===c.BYTE&&(ht=c.RGB8I),J===c.SHORT&&(ht=c.RGB16I),J===c.INT&&(ht=c.RGB32I)),A===c.RGBA_INTEGER&&(J===c.UNSIGNED_BYTE&&(ht=c.RGBA8UI),J===c.UNSIGNED_SHORT&&(ht=c.RGBA16UI),J===c.UNSIGNED_INT&&(ht=c.RGBA32UI),J===c.BYTE&&(ht=c.RGBA8I),J===c.SHORT&&(ht=c.RGBA16I),J===c.INT&&(ht=c.RGBA32I)),A===c.RGB&&(J===c.UNSIGNED_INT_5_9_9_9_REV&&(ht=c.RGB9_E5),J===c.UNSIGNED_INT_10F_11F_11F_REV&&(ht=c.R11F_G11F_B10F)),A===c.RGBA){const Xt=Et?Nu:Ue.getTransfer(_t);J===c.FLOAT&&(ht=c.RGBA32F),J===c.HALF_FLOAT&&(ht=c.RGBA16F),J===c.UNSIGNED_BYTE&&(ht=Xt===Ye?c.SRGB8_ALPHA8:c.RGBA8),J===c.UNSIGNED_SHORT_4_4_4_4&&(ht=c.RGBA4),J===c.UNSIGNED_SHORT_5_5_5_1&&(ht=c.RGB5_A1)}return(ht===c.R16F||ht===c.R32F||ht===c.RG16F||ht===c.RG32F||ht===c.RGBA16F||ht===c.RGBA32F)&&t.get("EXT_color_buffer_float"),ht}function C(I,A){let J;return I?A===null||A===pa||A===Ol?J=c.DEPTH24_STENCIL8:A===ca?J=c.DEPTH32F_STENCIL8:A===Ll&&(J=c.DEPTH24_STENCIL8,pe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===pa||A===Ol?J=c.DEPTH_COMPONENT24:A===ca?J=c.DEPTH_COMPONENT32F:A===Ll&&(J=c.DEPTH_COMPONENT16),J}function L(I,A){return S(I)===!0||I.isFramebufferTexture&&I.minFilter!==Fn&&I.minFilter!==In?Math.log2(Math.max(A.width,A.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?A.mipmaps.length:1}function B(I){const A=I.target;A.removeEventListener("dispose",B),q(A),A.isVideoTexture&&g.delete(A)}function P(I){const A=I.target;A.removeEventListener("dispose",P),O(A)}function q(I){const A=a.get(I);if(A.__webglInit===void 0)return;const J=I.source,_t=v.get(J);if(_t){const Et=_t[A.__cacheKey];Et.usedTimes--,Et.usedTimes===0&&w(I),Object.keys(_t).length===0&&v.delete(J)}a.remove(I)}function w(I){const A=a.get(I);c.deleteTexture(A.__webglTexture);const J=I.source,_t=v.get(J);delete _t[A.__cacheKey],u.memory.textures--}function O(I){const A=a.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),a.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let _t=0;_t<6;_t++){if(Array.isArray(A.__webglFramebuffer[_t]))for(let Et=0;Et<A.__webglFramebuffer[_t].length;Et++)c.deleteFramebuffer(A.__webglFramebuffer[_t][Et]);else c.deleteFramebuffer(A.__webglFramebuffer[_t]);A.__webglDepthbuffer&&c.deleteRenderbuffer(A.__webglDepthbuffer[_t])}else{if(Array.isArray(A.__webglFramebuffer))for(let _t=0;_t<A.__webglFramebuffer.length;_t++)c.deleteFramebuffer(A.__webglFramebuffer[_t]);else c.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&c.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&c.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let _t=0;_t<A.__webglColorRenderbuffer.length;_t++)A.__webglColorRenderbuffer[_t]&&c.deleteRenderbuffer(A.__webglColorRenderbuffer[_t]);A.__webglDepthRenderbuffer&&c.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const J=I.textures;for(let _t=0,Et=J.length;_t<Et;_t++){const ht=a.get(J[_t]);ht.__webglTexture&&(c.deleteTexture(ht.__webglTexture),u.memory.textures--),a.remove(J[_t])}a.remove(I)}let H=0;function $(){H=0}function V(){const I=H;return I>=r.maxTextures&&pe("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+r.maxTextures),H+=1,I}function K(I){const A=[];return A.push(I.wrapS),A.push(I.wrapT),A.push(I.wrapR||0),A.push(I.magFilter),A.push(I.minFilter),A.push(I.anisotropy),A.push(I.internalFormat),A.push(I.format),A.push(I.type),A.push(I.generateMipmaps),A.push(I.premultiplyAlpha),A.push(I.flipY),A.push(I.unpackAlignment),A.push(I.colorSpace),A.join()}function W(I,A){const J=a.get(I);if(I.isVideoTexture&&Se(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&J.__version!==I.version){const _t=I.image;if(_t===null)pe("WebGLRenderer: Texture marked for update but no image data found.");else if(_t.complete===!1)pe("WebGLRenderer: Texture marked for update but image is incomplete");else{it(J,I,A);return}}else I.isExternalTexture&&(J.__webglTexture=I.sourceTexture?I.sourceTexture:null);n.bindTexture(c.TEXTURE_2D,J.__webglTexture,c.TEXTURE0+A)}function z(I,A){const J=a.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&J.__version!==I.version){it(J,I,A);return}else I.isExternalTexture&&(J.__webglTexture=I.sourceTexture?I.sourceTexture:null);n.bindTexture(c.TEXTURE_2D_ARRAY,J.__webglTexture,c.TEXTURE0+A)}function G(I,A){const J=a.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&J.__version!==I.version){it(J,I,A);return}n.bindTexture(c.TEXTURE_3D,J.__webglTexture,c.TEXTURE0+A)}function Q(I,A){const J=a.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&J.__version!==I.version){gt(J,I,A);return}n.bindTexture(c.TEXTURE_CUBE_MAP,J.__webglTexture,c.TEXTURE0+A)}const mt={[Wd]:c.REPEAT,[Za]:c.CLAMP_TO_EDGE,[Yd]:c.MIRRORED_REPEAT},yt={[Fn]:c.NEAREST,[p1]:c.NEAREST_MIPMAP_NEAREST,[nu]:c.NEAREST_MIPMAP_LINEAR,[In]:c.LINEAR,[td]:c.LINEAR_MIPMAP_NEAREST,[Ps]:c.LINEAR_MIPMAP_LINEAR},F={[v1]:c.NEVER,[M1]:c.ALWAYS,[_1]:c.LESS,[Gp]:c.LEQUAL,[x1]:c.EQUAL,[Vp]:c.GEQUAL,[y1]:c.GREATER,[S1]:c.NOTEQUAL};function j(I,A){if(A.type===ca&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===In||A.magFilter===td||A.magFilter===nu||A.magFilter===Ps||A.minFilter===In||A.minFilter===td||A.minFilter===nu||A.minFilter===Ps)&&pe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),c.texParameteri(I,c.TEXTURE_WRAP_S,mt[A.wrapS]),c.texParameteri(I,c.TEXTURE_WRAP_T,mt[A.wrapT]),(I===c.TEXTURE_3D||I===c.TEXTURE_2D_ARRAY)&&c.texParameteri(I,c.TEXTURE_WRAP_R,mt[A.wrapR]),c.texParameteri(I,c.TEXTURE_MAG_FILTER,yt[A.magFilter]),c.texParameteri(I,c.TEXTURE_MIN_FILTER,yt[A.minFilter]),A.compareFunction&&(c.texParameteri(I,c.TEXTURE_COMPARE_MODE,c.COMPARE_REF_TO_TEXTURE),c.texParameteri(I,c.TEXTURE_COMPARE_FUNC,F[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Fn||A.minFilter!==nu&&A.minFilter!==Ps||A.type===ca&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||a.get(A).__currentAnisotropy){const J=t.get("EXT_texture_filter_anisotropic");c.texParameterf(I,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),a.get(A).__currentAnisotropy=A.anisotropy}}}function ct(I,A){let J=!1;I.__webglInit===void 0&&(I.__webglInit=!0,A.addEventListener("dispose",B));const _t=A.source;let Et=v.get(_t);Et===void 0&&(Et={},v.set(_t,Et));const ht=K(A);if(ht!==I.__cacheKey){Et[ht]===void 0&&(Et[ht]={texture:c.createTexture(),usedTimes:0},u.memory.textures++,J=!0),Et[ht].usedTimes++;const Xt=Et[I.__cacheKey];Xt!==void 0&&(Et[I.__cacheKey].usedTimes--,Xt.usedTimes===0&&w(A)),I.__cacheKey=ht,I.__webglTexture=Et[ht].texture}return J}function Tt(I,A,J){return Math.floor(Math.floor(I/J)/A)}function Dt(I,A,J,_t){const ht=I.updateRanges;if(ht.length===0)n.texSubImage2D(c.TEXTURE_2D,0,0,0,A.width,A.height,J,_t,A.data);else{ht.sort((At,wt)=>At.start-wt.start);let Xt=0;for(let At=1;At<ht.length;At++){const wt=ht[Xt],Gt=ht[At],Ft=wt.start+wt.count,Lt=Tt(Gt.start,A.width,4),me=Tt(wt.start,A.width,4);Gt.start<=Ft+1&&Lt===me&&Tt(Gt.start+Gt.count-1,A.width,4)===Lt?wt.count=Math.max(wt.count,Gt.start+Gt.count-wt.start):(++Xt,ht[Xt]=Gt)}ht.length=Xt+1;const Ut=c.getParameter(c.UNPACK_ROW_LENGTH),Wt=c.getParameter(c.UNPACK_SKIP_PIXELS),ae=c.getParameter(c.UNPACK_SKIP_ROWS);c.pixelStorei(c.UNPACK_ROW_LENGTH,A.width);for(let At=0,wt=ht.length;At<wt;At++){const Gt=ht[At],Ft=Math.floor(Gt.start/4),Lt=Math.ceil(Gt.count/4),me=Ft%A.width,Z=Math.floor(Ft/A.width),Ot=Lt,Rt=1;c.pixelStorei(c.UNPACK_SKIP_PIXELS,me),c.pixelStorei(c.UNPACK_SKIP_ROWS,Z),n.texSubImage2D(c.TEXTURE_2D,0,me,Z,Ot,Rt,J,_t,A.data)}I.clearUpdateRanges(),c.pixelStorei(c.UNPACK_ROW_LENGTH,Ut),c.pixelStorei(c.UNPACK_SKIP_PIXELS,Wt),c.pixelStorei(c.UNPACK_SKIP_ROWS,ae)}}function it(I,A,J){let _t=c.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(_t=c.TEXTURE_2D_ARRAY),A.isData3DTexture&&(_t=c.TEXTURE_3D);const Et=ct(I,A),ht=A.source;n.bindTexture(_t,I.__webglTexture,c.TEXTURE0+J);const Xt=a.get(ht);if(ht.version!==Xt.__version||Et===!0){n.activeTexture(c.TEXTURE0+J);const Ut=Ue.getPrimaries(Ue.workingColorSpace),Wt=A.colorSpace===zs?null:Ue.getPrimaries(A.colorSpace),ae=A.colorSpace===zs||Ut===Wt?c.NONE:c.BROWSER_DEFAULT_WEBGL;c.pixelStorei(c.UNPACK_FLIP_Y_WEBGL,A.flipY),c.pixelStorei(c.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),c.pixelStorei(c.UNPACK_ALIGNMENT,A.unpackAlignment),c.pixelStorei(c.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);let At=b(A.image,!1,r.maxTextureSize);At=he(A,At);const wt=o.convert(A.format,A.colorSpace),Gt=o.convert(A.type);let Ft=U(A.internalFormat,wt,Gt,A.colorSpace,A.isVideoTexture);j(_t,A);let Lt;const me=A.mipmaps,Z=A.isVideoTexture!==!0,Ot=Xt.__version===void 0||Et===!0,Rt=ht.dataReady,pt=L(A,At);if(A.isDepthTexture)Ft=C(A.format===vr,A.type),Ot&&(Z?n.texStorage2D(c.TEXTURE_2D,1,Ft,At.width,At.height):n.texImage2D(c.TEXTURE_2D,0,Ft,At.width,At.height,0,wt,Gt,null));else if(A.isDataTexture)if(me.length>0){Z&&Ot&&n.texStorage2D(c.TEXTURE_2D,pt,Ft,me[0].width,me[0].height);for(let ut=0,vt=me.length;ut<vt;ut++)Lt=me[ut],Z?Rt&&n.texSubImage2D(c.TEXTURE_2D,ut,0,0,Lt.width,Lt.height,wt,Gt,Lt.data):n.texImage2D(c.TEXTURE_2D,ut,Ft,Lt.width,Lt.height,0,wt,Gt,Lt.data);A.generateMipmaps=!1}else Z?(Ot&&n.texStorage2D(c.TEXTURE_2D,pt,Ft,At.width,At.height),Rt&&Dt(A,At,wt,Gt)):n.texImage2D(c.TEXTURE_2D,0,Ft,At.width,At.height,0,wt,Gt,At.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Z&&Ot&&n.texStorage3D(c.TEXTURE_2D_ARRAY,pt,Ft,me[0].width,me[0].height,At.depth);for(let ut=0,vt=me.length;ut<vt;ut++)if(Lt=me[ut],A.format!==Wi)if(wt!==null)if(Z){if(Rt)if(A.layerUpdates.size>0){const bt=P_(Lt.width,Lt.height,A.format,A.type);for(const Kt of A.layerUpdates){const se=Lt.data.subarray(Kt*bt/Lt.data.BYTES_PER_ELEMENT,(Kt+1)*bt/Lt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(c.TEXTURE_2D_ARRAY,ut,0,0,Kt,Lt.width,Lt.height,1,wt,se)}A.clearLayerUpdates()}else n.compressedTexSubImage3D(c.TEXTURE_2D_ARRAY,ut,0,0,0,Lt.width,Lt.height,At.depth,wt,Lt.data)}else n.compressedTexImage3D(c.TEXTURE_2D_ARRAY,ut,Ft,Lt.width,Lt.height,At.depth,0,Lt.data,0,0);else pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Z?Rt&&n.texSubImage3D(c.TEXTURE_2D_ARRAY,ut,0,0,0,Lt.width,Lt.height,At.depth,wt,Gt,Lt.data):n.texImage3D(c.TEXTURE_2D_ARRAY,ut,Ft,Lt.width,Lt.height,At.depth,0,wt,Gt,Lt.data)}else{Z&&Ot&&n.texStorage2D(c.TEXTURE_2D,pt,Ft,me[0].width,me[0].height);for(let ut=0,vt=me.length;ut<vt;ut++)Lt=me[ut],A.format!==Wi?wt!==null?Z?Rt&&n.compressedTexSubImage2D(c.TEXTURE_2D,ut,0,0,Lt.width,Lt.height,wt,Lt.data):n.compressedTexImage2D(c.TEXTURE_2D,ut,Ft,Lt.width,Lt.height,0,Lt.data):pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Z?Rt&&n.texSubImage2D(c.TEXTURE_2D,ut,0,0,Lt.width,Lt.height,wt,Gt,Lt.data):n.texImage2D(c.TEXTURE_2D,ut,Ft,Lt.width,Lt.height,0,wt,Gt,Lt.data)}else if(A.isDataArrayTexture)if(Z){if(Ot&&n.texStorage3D(c.TEXTURE_2D_ARRAY,pt,Ft,At.width,At.height,At.depth),Rt)if(A.layerUpdates.size>0){const ut=P_(At.width,At.height,A.format,A.type);for(const vt of A.layerUpdates){const bt=At.data.subarray(vt*ut/At.data.BYTES_PER_ELEMENT,(vt+1)*ut/At.data.BYTES_PER_ELEMENT);n.texSubImage3D(c.TEXTURE_2D_ARRAY,0,0,0,vt,At.width,At.height,1,wt,Gt,bt)}A.clearLayerUpdates()}else n.texSubImage3D(c.TEXTURE_2D_ARRAY,0,0,0,0,At.width,At.height,At.depth,wt,Gt,At.data)}else n.texImage3D(c.TEXTURE_2D_ARRAY,0,Ft,At.width,At.height,At.depth,0,wt,Gt,At.data);else if(A.isData3DTexture)Z?(Ot&&n.texStorage3D(c.TEXTURE_3D,pt,Ft,At.width,At.height,At.depth),Rt&&n.texSubImage3D(c.TEXTURE_3D,0,0,0,0,At.width,At.height,At.depth,wt,Gt,At.data)):n.texImage3D(c.TEXTURE_3D,0,Ft,At.width,At.height,At.depth,0,wt,Gt,At.data);else if(A.isFramebufferTexture){if(Ot)if(Z)n.texStorage2D(c.TEXTURE_2D,pt,Ft,At.width,At.height);else{let ut=At.width,vt=At.height;for(let bt=0;bt<pt;bt++)n.texImage2D(c.TEXTURE_2D,bt,Ft,ut,vt,0,wt,Gt,null),ut>>=1,vt>>=1}}else if(me.length>0){if(Z&&Ot){const ut=qt(me[0]);n.texStorage2D(c.TEXTURE_2D,pt,Ft,ut.width,ut.height)}for(let ut=0,vt=me.length;ut<vt;ut++)Lt=me[ut],Z?Rt&&n.texSubImage2D(c.TEXTURE_2D,ut,0,0,wt,Gt,Lt):n.texImage2D(c.TEXTURE_2D,ut,Ft,wt,Gt,Lt);A.generateMipmaps=!1}else if(Z){if(Ot){const ut=qt(At);n.texStorage2D(c.TEXTURE_2D,pt,Ft,ut.width,ut.height)}Rt&&n.texSubImage2D(c.TEXTURE_2D,0,0,0,wt,Gt,At)}else n.texImage2D(c.TEXTURE_2D,0,Ft,wt,Gt,At);S(A)&&x(_t),Xt.__version=ht.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function gt(I,A,J){if(A.image.length!==6)return;const _t=ct(I,A),Et=A.source;n.bindTexture(c.TEXTURE_CUBE_MAP,I.__webglTexture,c.TEXTURE0+J);const ht=a.get(Et);if(Et.version!==ht.__version||_t===!0){n.activeTexture(c.TEXTURE0+J);const Xt=Ue.getPrimaries(Ue.workingColorSpace),Ut=A.colorSpace===zs?null:Ue.getPrimaries(A.colorSpace),Wt=A.colorSpace===zs||Xt===Ut?c.NONE:c.BROWSER_DEFAULT_WEBGL;c.pixelStorei(c.UNPACK_FLIP_Y_WEBGL,A.flipY),c.pixelStorei(c.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),c.pixelStorei(c.UNPACK_ALIGNMENT,A.unpackAlignment),c.pixelStorei(c.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);const ae=A.isCompressedTexture||A.image[0].isCompressedTexture,At=A.image[0]&&A.image[0].isDataTexture,wt=[];for(let vt=0;vt<6;vt++)!ae&&!At?wt[vt]=b(A.image[vt],!0,r.maxCubemapSize):wt[vt]=At?A.image[vt].image:A.image[vt],wt[vt]=he(A,wt[vt]);const Gt=wt[0],Ft=o.convert(A.format,A.colorSpace),Lt=o.convert(A.type),me=U(A.internalFormat,Ft,Lt,A.colorSpace),Z=A.isVideoTexture!==!0,Ot=ht.__version===void 0||_t===!0,Rt=Et.dataReady;let pt=L(A,Gt);j(c.TEXTURE_CUBE_MAP,A);let ut;if(ae){Z&&Ot&&n.texStorage2D(c.TEXTURE_CUBE_MAP,pt,me,Gt.width,Gt.height);for(let vt=0;vt<6;vt++){ut=wt[vt].mipmaps;for(let bt=0;bt<ut.length;bt++){const Kt=ut[bt];A.format!==Wi?Ft!==null?Z?Rt&&n.compressedTexSubImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+vt,bt,0,0,Kt.width,Kt.height,Ft,Kt.data):n.compressedTexImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+vt,bt,me,Kt.width,Kt.height,0,Kt.data):pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Z?Rt&&n.texSubImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+vt,bt,0,0,Kt.width,Kt.height,Ft,Lt,Kt.data):n.texImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+vt,bt,me,Kt.width,Kt.height,0,Ft,Lt,Kt.data)}}}else{if(ut=A.mipmaps,Z&&Ot){ut.length>0&&pt++;const vt=qt(wt[0]);n.texStorage2D(c.TEXTURE_CUBE_MAP,pt,me,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(At){Z?Rt&&n.texSubImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,wt[vt].width,wt[vt].height,Ft,Lt,wt[vt].data):n.texImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,me,wt[vt].width,wt[vt].height,0,Ft,Lt,wt[vt].data);for(let bt=0;bt<ut.length;bt++){const se=ut[bt].image[vt].image;Z?Rt&&n.texSubImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+vt,bt+1,0,0,se.width,se.height,Ft,Lt,se.data):n.texImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+vt,bt+1,me,se.width,se.height,0,Ft,Lt,se.data)}}else{Z?Rt&&n.texSubImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Ft,Lt,wt[vt]):n.texImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,me,Ft,Lt,wt[vt]);for(let bt=0;bt<ut.length;bt++){const Kt=ut[bt];Z?Rt&&n.texSubImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+vt,bt+1,0,0,Ft,Lt,Kt.image[vt]):n.texImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+vt,bt+1,me,Ft,Lt,Kt.image[vt])}}}S(A)&&x(c.TEXTURE_CUBE_MAP),ht.__version=Et.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function Ct(I,A,J,_t,Et,ht){const Xt=o.convert(J.format,J.colorSpace),Ut=o.convert(J.type),Wt=U(J.internalFormat,Xt,Ut,J.colorSpace),ae=a.get(A),At=a.get(J);if(At.__renderTarget=A,!ae.__hasExternalTextures){const wt=Math.max(1,A.width>>ht),Gt=Math.max(1,A.height>>ht);Et===c.TEXTURE_3D||Et===c.TEXTURE_2D_ARRAY?n.texImage3D(Et,ht,Wt,wt,Gt,A.depth,0,Xt,Ut,null):n.texImage2D(Et,ht,Wt,wt,Gt,0,Xt,Ut,null)}n.bindFramebuffer(c.FRAMEBUFFER,I),je(A)?f.framebufferTexture2DMultisampleEXT(c.FRAMEBUFFER,_t,Et,At.__webglTexture,0,X(A)):(Et===c.TEXTURE_2D||Et>=c.TEXTURE_CUBE_MAP_POSITIVE_X&&Et<=c.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&c.framebufferTexture2D(c.FRAMEBUFFER,_t,Et,At.__webglTexture,ht),n.bindFramebuffer(c.FRAMEBUFFER,null)}function Pt(I,A,J){if(c.bindRenderbuffer(c.RENDERBUFFER,I),A.depthBuffer){const _t=A.depthTexture,Et=_t&&_t.isDepthTexture?_t.type:null,ht=C(A.stencilBuffer,Et),Xt=A.stencilBuffer?c.DEPTH_STENCIL_ATTACHMENT:c.DEPTH_ATTACHMENT;je(A)?f.renderbufferStorageMultisampleEXT(c.RENDERBUFFER,X(A),ht,A.width,A.height):J?c.renderbufferStorageMultisample(c.RENDERBUFFER,X(A),ht,A.width,A.height):c.renderbufferStorage(c.RENDERBUFFER,ht,A.width,A.height),c.framebufferRenderbuffer(c.FRAMEBUFFER,Xt,c.RENDERBUFFER,I)}else{const _t=A.textures;for(let Et=0;Et<_t.length;Et++){const ht=_t[Et],Xt=o.convert(ht.format,ht.colorSpace),Ut=o.convert(ht.type),Wt=U(ht.internalFormat,Xt,Ut,ht.colorSpace);je(A)?f.renderbufferStorageMultisampleEXT(c.RENDERBUFFER,X(A),Wt,A.width,A.height):J?c.renderbufferStorageMultisample(c.RENDERBUFFER,X(A),Wt,A.width,A.height):c.renderbufferStorage(c.RENDERBUFFER,Wt,A.width,A.height)}}c.bindRenderbuffer(c.RENDERBUFFER,null)}function Nt(I,A,J){const _t=A.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(c.FRAMEBUFFER,I),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Et=a.get(A.depthTexture);if(Et.__renderTarget=A,(!Et.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),_t){if(Et.__webglInit===void 0&&(Et.__webglInit=!0,A.depthTexture.addEventListener("dispose",B)),Et.__webglTexture===void 0){Et.__webglTexture=c.createTexture(),n.bindTexture(c.TEXTURE_CUBE_MAP,Et.__webglTexture),j(c.TEXTURE_CUBE_MAP,A.depthTexture);const ae=o.convert(A.depthTexture.format),At=o.convert(A.depthTexture.type);let wt;A.depthTexture.format===ts?wt=c.DEPTH_COMPONENT24:A.depthTexture.format===vr&&(wt=c.DEPTH24_STENCIL8);for(let Gt=0;Gt<6;Gt++)c.texImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+Gt,0,wt,A.width,A.height,0,ae,At,null)}}else W(A.depthTexture,0);const ht=Et.__webglTexture,Xt=X(A),Ut=_t?c.TEXTURE_CUBE_MAP_POSITIVE_X+J:c.TEXTURE_2D,Wt=A.depthTexture.format===vr?c.DEPTH_STENCIL_ATTACHMENT:c.DEPTH_ATTACHMENT;if(A.depthTexture.format===ts)je(A)?f.framebufferTexture2DMultisampleEXT(c.FRAMEBUFFER,Wt,Ut,ht,0,Xt):c.framebufferTexture2D(c.FRAMEBUFFER,Wt,Ut,ht,0);else if(A.depthTexture.format===vr)je(A)?f.framebufferTexture2DMultisampleEXT(c.FRAMEBUFFER,Wt,Ut,ht,0,Xt):c.framebufferTexture2D(c.FRAMEBUFFER,Wt,Ut,ht,0);else throw new Error("Unknown depthTexture format")}function ye(I){const A=a.get(I),J=I.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==I.depthTexture){const _t=I.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),_t){const Et=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,_t.removeEventListener("dispose",Et)};_t.addEventListener("dispose",Et),A.__depthDisposeCallback=Et}A.__boundDepthTexture=_t}if(I.depthTexture&&!A.__autoAllocateDepthBuffer)if(J)for(let _t=0;_t<6;_t++)Nt(A.__webglFramebuffer[_t],I,_t);else{const _t=I.texture.mipmaps;_t&&_t.length>0?Nt(A.__webglFramebuffer[0],I,0):Nt(A.__webglFramebuffer,I,0)}else if(J){A.__webglDepthbuffer=[];for(let _t=0;_t<6;_t++)if(n.bindFramebuffer(c.FRAMEBUFFER,A.__webglFramebuffer[_t]),A.__webglDepthbuffer[_t]===void 0)A.__webglDepthbuffer[_t]=c.createRenderbuffer(),Pt(A.__webglDepthbuffer[_t],I,!1);else{const Et=I.stencilBuffer?c.DEPTH_STENCIL_ATTACHMENT:c.DEPTH_ATTACHMENT,ht=A.__webglDepthbuffer[_t];c.bindRenderbuffer(c.RENDERBUFFER,ht),c.framebufferRenderbuffer(c.FRAMEBUFFER,Et,c.RENDERBUFFER,ht)}}else{const _t=I.texture.mipmaps;if(_t&&_t.length>0?n.bindFramebuffer(c.FRAMEBUFFER,A.__webglFramebuffer[0]):n.bindFramebuffer(c.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=c.createRenderbuffer(),Pt(A.__webglDepthbuffer,I,!1);else{const Et=I.stencilBuffer?c.DEPTH_STENCIL_ATTACHMENT:c.DEPTH_ATTACHMENT,ht=A.__webglDepthbuffer;c.bindRenderbuffer(c.RENDERBUFFER,ht),c.framebufferRenderbuffer(c.FRAMEBUFFER,Et,c.RENDERBUFFER,ht)}}n.bindFramebuffer(c.FRAMEBUFFER,null)}function De(I,A,J){const _t=a.get(I);A!==void 0&&Ct(_t.__webglFramebuffer,I,I.texture,c.COLOR_ATTACHMENT0,c.TEXTURE_2D,0),J!==void 0&&ye(I)}function ue(I){const A=I.texture,J=a.get(I),_t=a.get(A);I.addEventListener("dispose",P);const Et=I.textures,ht=I.isWebGLCubeRenderTarget===!0,Xt=Et.length>1;if(Xt||(_t.__webglTexture===void 0&&(_t.__webglTexture=c.createTexture()),_t.__version=A.version,u.memory.textures++),ht){J.__webglFramebuffer=[];for(let Ut=0;Ut<6;Ut++)if(A.mipmaps&&A.mipmaps.length>0){J.__webglFramebuffer[Ut]=[];for(let Wt=0;Wt<A.mipmaps.length;Wt++)J.__webglFramebuffer[Ut][Wt]=c.createFramebuffer()}else J.__webglFramebuffer[Ut]=c.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){J.__webglFramebuffer=[];for(let Ut=0;Ut<A.mipmaps.length;Ut++)J.__webglFramebuffer[Ut]=c.createFramebuffer()}else J.__webglFramebuffer=c.createFramebuffer();if(Xt)for(let Ut=0,Wt=Et.length;Ut<Wt;Ut++){const ae=a.get(Et[Ut]);ae.__webglTexture===void 0&&(ae.__webglTexture=c.createTexture(),u.memory.textures++)}if(I.samples>0&&je(I)===!1){J.__webglMultisampledFramebuffer=c.createFramebuffer(),J.__webglColorRenderbuffer=[],n.bindFramebuffer(c.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Ut=0;Ut<Et.length;Ut++){const Wt=Et[Ut];J.__webglColorRenderbuffer[Ut]=c.createRenderbuffer(),c.bindRenderbuffer(c.RENDERBUFFER,J.__webglColorRenderbuffer[Ut]);const ae=o.convert(Wt.format,Wt.colorSpace),At=o.convert(Wt.type),wt=U(Wt.internalFormat,ae,At,Wt.colorSpace,I.isXRRenderTarget===!0),Gt=X(I);c.renderbufferStorageMultisample(c.RENDERBUFFER,Gt,wt,I.width,I.height),c.framebufferRenderbuffer(c.FRAMEBUFFER,c.COLOR_ATTACHMENT0+Ut,c.RENDERBUFFER,J.__webglColorRenderbuffer[Ut])}c.bindRenderbuffer(c.RENDERBUFFER,null),I.depthBuffer&&(J.__webglDepthRenderbuffer=c.createRenderbuffer(),Pt(J.__webglDepthRenderbuffer,I,!0)),n.bindFramebuffer(c.FRAMEBUFFER,null)}}if(ht){n.bindTexture(c.TEXTURE_CUBE_MAP,_t.__webglTexture),j(c.TEXTURE_CUBE_MAP,A);for(let Ut=0;Ut<6;Ut++)if(A.mipmaps&&A.mipmaps.length>0)for(let Wt=0;Wt<A.mipmaps.length;Wt++)Ct(J.__webglFramebuffer[Ut][Wt],I,A,c.COLOR_ATTACHMENT0,c.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,Wt);else Ct(J.__webglFramebuffer[Ut],I,A,c.COLOR_ATTACHMENT0,c.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0);S(A)&&x(c.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Xt){for(let Ut=0,Wt=Et.length;Ut<Wt;Ut++){const ae=Et[Ut],At=a.get(ae);let wt=c.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(wt=I.isWebGL3DRenderTarget?c.TEXTURE_3D:c.TEXTURE_2D_ARRAY),n.bindTexture(wt,At.__webglTexture),j(wt,ae),Ct(J.__webglFramebuffer,I,ae,c.COLOR_ATTACHMENT0+Ut,wt,0),S(ae)&&x(wt)}n.unbindTexture()}else{let Ut=c.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ut=I.isWebGL3DRenderTarget?c.TEXTURE_3D:c.TEXTURE_2D_ARRAY),n.bindTexture(Ut,_t.__webglTexture),j(Ut,A),A.mipmaps&&A.mipmaps.length>0)for(let Wt=0;Wt<A.mipmaps.length;Wt++)Ct(J.__webglFramebuffer[Wt],I,A,c.COLOR_ATTACHMENT0,Ut,Wt);else Ct(J.__webglFramebuffer,I,A,c.COLOR_ATTACHMENT0,Ut,0);S(A)&&x(Ut),n.unbindTexture()}I.depthBuffer&&ye(I)}function ne(I){const A=I.textures;for(let J=0,_t=A.length;J<_t;J++){const Et=A[J];if(S(Et)){const ht=T(I),Xt=a.get(Et).__webglTexture;n.bindTexture(ht,Xt),x(ht),n.unbindTexture()}}}const be=[],le=[];function en(I){if(I.samples>0){if(je(I)===!1){const A=I.textures,J=I.width,_t=I.height;let Et=c.COLOR_BUFFER_BIT;const ht=I.stencilBuffer?c.DEPTH_STENCIL_ATTACHMENT:c.DEPTH_ATTACHMENT,Xt=a.get(I),Ut=A.length>1;if(Ut)for(let ae=0;ae<A.length;ae++)n.bindFramebuffer(c.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),c.framebufferRenderbuffer(c.FRAMEBUFFER,c.COLOR_ATTACHMENT0+ae,c.RENDERBUFFER,null),n.bindFramebuffer(c.FRAMEBUFFER,Xt.__webglFramebuffer),c.framebufferTexture2D(c.DRAW_FRAMEBUFFER,c.COLOR_ATTACHMENT0+ae,c.TEXTURE_2D,null,0);n.bindFramebuffer(c.READ_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer);const Wt=I.texture.mipmaps;Wt&&Wt.length>0?n.bindFramebuffer(c.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer[0]):n.bindFramebuffer(c.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer);for(let ae=0;ae<A.length;ae++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(Et|=c.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(Et|=c.STENCIL_BUFFER_BIT)),Ut){c.framebufferRenderbuffer(c.READ_FRAMEBUFFER,c.COLOR_ATTACHMENT0,c.RENDERBUFFER,Xt.__webglColorRenderbuffer[ae]);const At=a.get(A[ae]).__webglTexture;c.framebufferTexture2D(c.DRAW_FRAMEBUFFER,c.COLOR_ATTACHMENT0,c.TEXTURE_2D,At,0)}c.blitFramebuffer(0,0,J,_t,0,0,J,_t,Et,c.NEAREST),p===!0&&(be.length=0,le.length=0,be.push(c.COLOR_ATTACHMENT0+ae),I.depthBuffer&&I.resolveDepthBuffer===!1&&(be.push(ht),le.push(ht),c.invalidateFramebuffer(c.DRAW_FRAMEBUFFER,le)),c.invalidateFramebuffer(c.READ_FRAMEBUFFER,be))}if(n.bindFramebuffer(c.READ_FRAMEBUFFER,null),n.bindFramebuffer(c.DRAW_FRAMEBUFFER,null),Ut)for(let ae=0;ae<A.length;ae++){n.bindFramebuffer(c.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),c.framebufferRenderbuffer(c.FRAMEBUFFER,c.COLOR_ATTACHMENT0+ae,c.RENDERBUFFER,Xt.__webglColorRenderbuffer[ae]);const At=a.get(A[ae]).__webglTexture;n.bindFramebuffer(c.FRAMEBUFFER,Xt.__webglFramebuffer),c.framebufferTexture2D(c.DRAW_FRAMEBUFFER,c.COLOR_ATTACHMENT0+ae,c.TEXTURE_2D,At,0)}n.bindFramebuffer(c.DRAW_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&p){const A=I.stencilBuffer?c.DEPTH_STENCIL_ATTACHMENT:c.DEPTH_ATTACHMENT;c.invalidateFramebuffer(c.DRAW_FRAMEBUFFER,[A])}}}function X(I){return Math.min(r.maxSamples,I.samples)}function je(I){const A=a.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Se(I){const A=u.render.frame;g.get(I)!==A&&(g.set(I,A),I.update())}function he(I,A){const J=I.colorSpace,_t=I.format,Et=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||J!==bo&&J!==zs&&(Ue.getTransfer(J)===Ye?(_t!==Wi||Et!==Si)&&pe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ne("WebGLTextures: Unsupported texture color space:",J)),A}function qt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(h.width=I.naturalWidth||I.width,h.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(h.width=I.displayWidth,h.height=I.displayHeight):(h.width=I.width,h.height=I.height),h}this.allocateTextureUnit=V,this.resetTextureUnits=$,this.setTexture2D=W,this.setTexture2DArray=z,this.setTexture3D=G,this.setTextureCube=Q,this.rebindTextures=De,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=en,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=je,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function KC(c,t){function n(a,r=zs){let o;const u=Ue.getTransfer(r);if(a===Si)return c.UNSIGNED_BYTE;if(a===Pp)return c.UNSIGNED_SHORT_4_4_4_4;if(a===Bp)return c.UNSIGNED_SHORT_5_5_5_1;if(a===Ux)return c.UNSIGNED_INT_5_9_9_9_REV;if(a===Lx)return c.UNSIGNED_INT_10F_11F_11F_REV;if(a===Dx)return c.BYTE;if(a===Nx)return c.SHORT;if(a===Ll)return c.UNSIGNED_SHORT;if(a===zp)return c.INT;if(a===pa)return c.UNSIGNED_INT;if(a===ca)return c.FLOAT;if(a===$a)return c.HALF_FLOAT;if(a===Ox)return c.ALPHA;if(a===zx)return c.RGB;if(a===Wi)return c.RGBA;if(a===ts)return c.DEPTH_COMPONENT;if(a===vr)return c.DEPTH_STENCIL;if(a===Px)return c.RED;if(a===Fp)return c.RED_INTEGER;if(a===Eo)return c.RG;if(a===Ip)return c.RG_INTEGER;if(a===Hp)return c.RGBA_INTEGER;if(a===bu||a===Tu||a===Au||a===wu)if(u===Ye)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(a===bu)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Tu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Au)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===wu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(a===bu)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Tu)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Au)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===wu)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===jd||a===Zd||a===Kd||a===Qd)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(a===jd)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Zd)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Kd)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Qd)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Jd||a===$d||a===tp||a===ep||a===np||a===ip||a===ap)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(a===Jd||a===$d)return u===Ye?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(a===tp)return u===Ye?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(a===ep)return o.COMPRESSED_R11_EAC;if(a===np)return o.COMPRESSED_SIGNED_R11_EAC;if(a===ip)return o.COMPRESSED_RG11_EAC;if(a===ap)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===sp||a===rp||a===op||a===lp||a===cp||a===up||a===fp||a===hp||a===dp||a===pp||a===mp||a===gp||a===vp||a===_p)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(a===sp)return u===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===rp)return u===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===op)return u===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===lp)return u===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===cp)return u===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===up)return u===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===fp)return u===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===hp)return u===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===dp)return u===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===pp)return u===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===mp)return u===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===gp)return u===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===vp)return u===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===_p)return u===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===xp||a===yp||a===Sp)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(a===xp)return u===Ye?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===yp)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Sp)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Mp||a===Ep||a===bp||a===Tp)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(a===Mp)return o.COMPRESSED_RED_RGTC1_EXT;if(a===Ep)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===bp)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Tp)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Ol?c.UNSIGNED_INT_24_8:c[a]!==void 0?c[a]:null}return{convert:n}}const QC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,JC=`
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

}`;class $C{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const a=new Zx(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,a=new ga({vertexShader:QC,fragmentShader:JC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ji(new Gl(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class t2 extends Ao{constructor(t,n){super();const a=this;let r=null,o=1,u=null,f="local-floor",p=1,h=null,g=null,_=null,v=null,y=null,M=null;const b=typeof XRWebGLBinding<"u",S=new $C,x={},T=n.getContextAttributes();let U=null,C=null;const L=[],B=[],P=new Be;let q=null;const w=new ki;w.viewport=new dn;const O=new ki;O.viewport=new dn;const H=[w,O],$=new lT;let V=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let gt=L[it];return gt===void 0&&(gt=new Ed,L[it]=gt),gt.getTargetRaySpace()},this.getControllerGrip=function(it){let gt=L[it];return gt===void 0&&(gt=new Ed,L[it]=gt),gt.getGripSpace()},this.getHand=function(it){let gt=L[it];return gt===void 0&&(gt=new Ed,L[it]=gt),gt.getHandSpace()};function W(it){const gt=B.indexOf(it.inputSource);if(gt===-1)return;const Ct=L[gt];Ct!==void 0&&(Ct.update(it.inputSource,it.frame,h||u),Ct.dispatchEvent({type:it.type,data:it.inputSource}))}function z(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",G);for(let it=0;it<L.length;it++){const gt=B[it];gt!==null&&(B[it]=null,L[it].disconnect(gt))}V=null,K=null,S.reset();for(const it in x)delete x[it];t.setRenderTarget(U),y=null,v=null,_=null,r=null,C=null,Dt.stop(),a.isPresenting=!1,t.setPixelRatio(q),t.setSize(P.width,P.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){o=it,a.isPresenting===!0&&pe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){f=it,a.isPresenting===!0&&pe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(it){h=it},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return _===null&&b&&(_=new XRWebGLBinding(r,n)),_},this.getFrame=function(){return M},this.getSession=function(){return r},this.setSession=async function(it){if(r=it,r!==null){if(U=t.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",z),r.addEventListener("inputsourceschange",G),T.xrCompatible!==!0&&await n.makeXRCompatible(),q=t.getPixelRatio(),t.getSize(P),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ct=null,Pt=null,Nt=null;T.depth&&(Nt=T.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Ct=T.stencil?vr:ts,Pt=T.stencil?Ol:pa);const ye={colorFormat:n.RGBA8,depthFormat:Nt,scaleFactor:o};_=this.getBinding(),v=_.createProjectionLayer(ye),r.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),C=new ha(v.textureWidth,v.textureHeight,{format:Wi,type:Si,depthTexture:new Pl(v.textureWidth,v.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,Ct),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Ct={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:o};y=new XRWebGLLayer(r,n,Ct),r.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),C=new ha(y.framebufferWidth,y.framebufferHeight,{format:Wi,type:Si,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(p),h=null,u=await r.requestReferenceSpace(f),Dt.setContext(r),Dt.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function G(it){for(let gt=0;gt<it.removed.length;gt++){const Ct=it.removed[gt],Pt=B.indexOf(Ct);Pt>=0&&(B[Pt]=null,L[Pt].disconnect(Ct))}for(let gt=0;gt<it.added.length;gt++){const Ct=it.added[gt];let Pt=B.indexOf(Ct);if(Pt===-1){for(let ye=0;ye<L.length;ye++)if(ye>=B.length){B.push(Ct),Pt=ye;break}else if(B[ye]===null){B[ye]=Ct,Pt=ye;break}if(Pt===-1)break}const Nt=L[Pt];Nt&&Nt.connect(Ct)}}const Q=new lt,mt=new lt;function yt(it,gt,Ct){Q.setFromMatrixPosition(gt.matrixWorld),mt.setFromMatrixPosition(Ct.matrixWorld);const Pt=Q.distanceTo(mt),Nt=gt.projectionMatrix.elements,ye=Ct.projectionMatrix.elements,De=Nt[14]/(Nt[10]-1),ue=Nt[14]/(Nt[10]+1),ne=(Nt[9]+1)/Nt[5],be=(Nt[9]-1)/Nt[5],le=(Nt[8]-1)/Nt[0],en=(ye[8]+1)/ye[0],X=De*le,je=De*en,Se=Pt/(-le+en),he=Se*-le;if(gt.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(he),it.translateZ(Se),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),Nt[10]===-1)it.projectionMatrix.copy(gt.projectionMatrix),it.projectionMatrixInverse.copy(gt.projectionMatrixInverse);else{const qt=De+Se,I=ue+Se,A=X-he,J=je+(Pt-he),_t=ne*ue/I*qt,Et=be*ue/I*qt;it.projectionMatrix.makePerspective(A,J,_t,Et,qt,I),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function F(it,gt){gt===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(gt.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(r===null)return;let gt=it.near,Ct=it.far;S.texture!==null&&(S.depthNear>0&&(gt=S.depthNear),S.depthFar>0&&(Ct=S.depthFar)),$.near=O.near=w.near=gt,$.far=O.far=w.far=Ct,(V!==$.near||K!==$.far)&&(r.updateRenderState({depthNear:$.near,depthFar:$.far}),V=$.near,K=$.far),$.layers.mask=it.layers.mask|6,w.layers.mask=$.layers.mask&3,O.layers.mask=$.layers.mask&5;const Pt=it.parent,Nt=$.cameras;F($,Pt);for(let ye=0;ye<Nt.length;ye++)F(Nt[ye],Pt);Nt.length===2?yt($,w,O):$.projectionMatrix.copy(w.projectionMatrix),j(it,$,Pt)};function j(it,gt,Ct){Ct===null?it.matrix.copy(gt.matrixWorld):(it.matrix.copy(Ct.matrixWorld),it.matrix.invert(),it.matrix.multiply(gt.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(gt.projectionMatrix),it.projectionMatrixInverse.copy(gt.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=Ap*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(v===null&&y===null))return p},this.setFoveation=function(it){p=it,v!==null&&(v.fixedFoveation=it),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=it)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh($)},this.getCameraTexture=function(it){return x[it]};let ct=null;function Tt(it,gt){if(g=gt.getViewerPose(h||u),M=gt,g!==null){const Ct=g.views;y!==null&&(t.setRenderTargetFramebuffer(C,y.framebuffer),t.setRenderTarget(C));let Pt=!1;Ct.length!==$.cameras.length&&($.cameras.length=0,Pt=!0);for(let ue=0;ue<Ct.length;ue++){const ne=Ct[ue];let be=null;if(y!==null)be=y.getViewport(ne);else{const en=_.getViewSubImage(v,ne);be=en.viewport,ue===0&&(t.setRenderTargetTextures(C,en.colorTexture,en.depthStencilTexture),t.setRenderTarget(C))}let le=H[ue];le===void 0&&(le=new ki,le.layers.enable(ue),le.viewport=new dn,H[ue]=le),le.matrix.fromArray(ne.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(ne.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(be.x,be.y,be.width,be.height),ue===0&&($.matrix.copy(le.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),Pt===!0&&$.cameras.push(le)}const Nt=r.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&b){_=a.getBinding();const ue=_.getDepthInformation(Ct[0]);ue&&ue.isValid&&ue.texture&&S.init(ue,r.renderState)}if(Nt&&Nt.includes("camera-access")&&b){t.state.unbindTexture(),_=a.getBinding();for(let ue=0;ue<Ct.length;ue++){const ne=Ct[ue].camera;if(ne){let be=x[ne];be||(be=new Zx,x[ne]=be);const le=_.getCameraImage(ne);be.sourceTexture=le}}}}for(let Ct=0;Ct<L.length;Ct++){const Pt=B[Ct],Nt=L[Ct];Pt!==null&&Nt!==void 0&&Nt.update(Pt,gt,h||u)}ct&&ct(it,gt),gt.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:gt}),M=null}const Dt=new Qx;Dt.setAnimationLoop(Tt),this.setAnimationLoop=function(it){ct=it},this.dispose=function(){}}}const lr=new ma,e2=new cn;function n2(c,t){function n(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function a(S,x){x.color.getRGB(S.fogColor.value,Xx(c)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function r(S,x,T,U,C){x.isMeshBasicMaterial||x.isMeshLambertMaterial?o(S,x):x.isMeshToonMaterial?(o(S,x),_(S,x)):x.isMeshPhongMaterial?(o(S,x),g(S,x)):x.isMeshStandardMaterial?(o(S,x),v(S,x),x.isMeshPhysicalMaterial&&y(S,x,C)):x.isMeshMatcapMaterial?(o(S,x),M(S,x)):x.isMeshDepthMaterial?o(S,x):x.isMeshDistanceMaterial?(o(S,x),b(S,x)):x.isMeshNormalMaterial?o(S,x):x.isLineBasicMaterial?(u(S,x),x.isLineDashedMaterial&&f(S,x)):x.isPointsMaterial?p(S,x,T,U):x.isSpriteMaterial?h(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function o(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,n(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,n(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===ri&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,n(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===ri&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,n(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,n(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const T=t.get(x),U=T.envMap,C=T.envMapRotation;U&&(S.envMap.value=U,lr.copy(C),lr.x*=-1,lr.y*=-1,lr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(lr.y*=-1,lr.z*=-1),S.envMapRotation.value.setFromMatrix4(e2.makeRotationFromEuler(lr)),S.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,S.aoMapTransform))}function u(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,n(x.map,S.mapTransform))}function f(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function p(S,x,T,U){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*T,S.scale.value=U*.5,x.map&&(S.map.value=x.map,n(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function h(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,n(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function g(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function _(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function v(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function y(S,x,T){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===ri&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=T.texture,S.transmissionSamplerSize.value.set(T.width,T.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,x){x.matcap&&(S.matcap.value=x.matcap)}function b(S,x){const T=t.get(x).light;S.referencePosition.value.setFromMatrixPosition(T.matrixWorld),S.nearDistance.value=T.shadow.camera.near,S.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:r}}function i2(c,t,n,a){let r={},o={},u=[];const f=c.getParameter(c.MAX_UNIFORM_BUFFER_BINDINGS);function p(T,U){const C=U.program;a.uniformBlockBinding(T,C)}function h(T,U){let C=r[T.id];C===void 0&&(M(T),C=g(T),r[T.id]=C,T.addEventListener("dispose",S));const L=U.program;a.updateUBOMapping(T,L);const B=t.render.frame;o[T.id]!==B&&(v(T),o[T.id]=B)}function g(T){const U=_();T.__bindingPointIndex=U;const C=c.createBuffer(),L=T.__size,B=T.usage;return c.bindBuffer(c.UNIFORM_BUFFER,C),c.bufferData(c.UNIFORM_BUFFER,L,B),c.bindBuffer(c.UNIFORM_BUFFER,null),c.bindBufferBase(c.UNIFORM_BUFFER,U,C),C}function _(){for(let T=0;T<f;T++)if(u.indexOf(T)===-1)return u.push(T),T;return Ne("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(T){const U=r[T.id],C=T.uniforms,L=T.__cache;c.bindBuffer(c.UNIFORM_BUFFER,U);for(let B=0,P=C.length;B<P;B++){const q=Array.isArray(C[B])?C[B]:[C[B]];for(let w=0,O=q.length;w<O;w++){const H=q[w];if(y(H,B,w,L)===!0){const $=H.__offset,V=Array.isArray(H.value)?H.value:[H.value];let K=0;for(let W=0;W<V.length;W++){const z=V[W],G=b(z);typeof z=="number"||typeof z=="boolean"?(H.__data[0]=z,c.bufferSubData(c.UNIFORM_BUFFER,$+K,H.__data)):z.isMatrix3?(H.__data[0]=z.elements[0],H.__data[1]=z.elements[1],H.__data[2]=z.elements[2],H.__data[3]=0,H.__data[4]=z.elements[3],H.__data[5]=z.elements[4],H.__data[6]=z.elements[5],H.__data[7]=0,H.__data[8]=z.elements[6],H.__data[9]=z.elements[7],H.__data[10]=z.elements[8],H.__data[11]=0):(z.toArray(H.__data,K),K+=G.storage/Float32Array.BYTES_PER_ELEMENT)}c.bufferSubData(c.UNIFORM_BUFFER,$,H.__data)}}}c.bindBuffer(c.UNIFORM_BUFFER,null)}function y(T,U,C,L){const B=T.value,P=U+"_"+C;if(L[P]===void 0)return typeof B=="number"||typeof B=="boolean"?L[P]=B:L[P]=B.clone(),!0;{const q=L[P];if(typeof B=="number"||typeof B=="boolean"){if(q!==B)return L[P]=B,!0}else if(q.equals(B)===!1)return q.copy(B),!0}return!1}function M(T){const U=T.uniforms;let C=0;const L=16;for(let P=0,q=U.length;P<q;P++){const w=Array.isArray(U[P])?U[P]:[U[P]];for(let O=0,H=w.length;O<H;O++){const $=w[O],V=Array.isArray($.value)?$.value:[$.value];for(let K=0,W=V.length;K<W;K++){const z=V[K],G=b(z),Q=C%L,mt=Q%G.boundary,yt=Q+mt;C+=mt,yt!==0&&L-yt<G.storage&&(C+=L-yt),$.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=C,C+=G.storage}}}const B=C%L;return B>0&&(C+=L-B),T.__size=C,T.__cache={},this}function b(T){const U={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(U.boundary=4,U.storage=4):T.isVector2?(U.boundary=8,U.storage=8):T.isVector3||T.isColor?(U.boundary=16,U.storage=12):T.isVector4?(U.boundary=16,U.storage=16):T.isMatrix3?(U.boundary=48,U.storage=48):T.isMatrix4?(U.boundary=64,U.storage=64):T.isTexture?pe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):pe("WebGLRenderer: Unsupported uniform value type.",T),U}function S(T){const U=T.target;U.removeEventListener("dispose",S);const C=u.indexOf(U.__bindingPointIndex);u.splice(C,1),c.deleteBuffer(r[U.id]),delete r[U.id],delete o[U.id]}function x(){for(const T in r)c.deleteBuffer(r[T]);u=[],r={},o={}}return{bind:p,update:h,dispose:x}}const a2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ra=null;function s2(){return ra===null&&(ra=new K1(a2,16,16,Eo,$a),ra.name="DFG_LUT",ra.minFilter=In,ra.magFilter=In,ra.wrapS=Za,ra.wrapT=Za,ra.generateMipmaps=!1,ra.needsUpdate=!0),ra}class r2{constructor(t={}){const{canvas:n=E1(),context:a=null,depth:r=!0,stencil:o=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:h=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:y=Si}=t;this.isWebGLRenderer=!0;let M;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=a.getContextAttributes().alpha}else M=u;const b=y,S=new Set([Hp,Ip,Fp]),x=new Set([Si,pa,Ll,Ol,Pp,Bp]),T=new Uint32Array(4),U=new Int32Array(4);let C=null,L=null;const B=[],P=[];let q=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let O=!1;this._outputColorSpace=jn;let H=0,$=0,V=null,K=-1,W=null;const z=new dn,G=new dn;let Q=null;const mt=new Pe(0);let yt=0,F=n.width,j=n.height,ct=1,Tt=null,Dt=null;const it=new dn(0,0,F,j),gt=new dn(0,0,F,j);let Ct=!1;const Pt=new Wp;let Nt=!1,ye=!1;const De=new cn,ue=new lt,ne=new dn,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let le=!1;function en(){return V===null?ct:1}let X=a;function je(N,tt){return n.getContext(N,tt)}try{const N={alpha:!0,depth:r,stencil:o,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:h,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Op}`),n.addEventListener("webglcontextlost",Kt,!1),n.addEventListener("webglcontextrestored",se,!1),n.addEventListener("webglcontextcreationerror",ce,!1),X===null){const tt="webgl2";if(X=je(tt,N),X===null)throw je(tt)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw Ne("WebGLRenderer: "+N.message),N}let Se,he,qt,I,A,J,_t,Et,ht,Xt,Ut,Wt,ae,At,wt,Gt,Ft,Lt,me,Z,Ot,Rt,pt,ut;function vt(){Se=new sR(X),Se.init(),Rt=new KC(X,Se),he=new Kw(X,Se,t,Rt),qt=new jC(X,Se),he.reversedDepthBuffer&&v&&qt.buffers.depth.setReversed(!0),I=new lR(X),A=new LC,J=new ZC(X,Se,qt,A,he,Rt,I),_t=new Jw(w),Et=new aR(w),ht=new hT(X),pt=new jw(X,ht),Xt=new rR(X,ht,I,pt),Ut=new uR(X,Xt,ht,I),me=new cR(X,he,J),Gt=new Qw(A),Wt=new UC(w,_t,Et,Se,he,pt,Gt),ae=new n2(w,A),At=new zC,wt=new GC(Se),Lt=new Yw(w,_t,Et,qt,Ut,M,p),Ft=new WC(w,Ut,he),ut=new i2(X,I,he,qt),Z=new Zw(X,Se,I),Ot=new oR(X,Se,I),I.programs=Wt.programs,w.capabilities=he,w.extensions=Se,w.properties=A,w.renderLists=At,w.shadowMap=Ft,w.state=qt,w.info=I}vt(),b!==Si&&(q=new hR(b,n.width,n.height,r,o));const bt=new t2(w,X);this.xr=bt,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const N=Se.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=Se.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return ct},this.setPixelRatio=function(N){N!==void 0&&(ct=N,this.setSize(F,j,!1))},this.getSize=function(N){return N.set(F,j)},this.setSize=function(N,tt,ft=!0){if(bt.isPresenting){pe("WebGLRenderer: Can't change size while VR device is presenting.");return}F=N,j=tt,n.width=Math.floor(N*ct),n.height=Math.floor(tt*ct),ft===!0&&(n.style.width=N+"px",n.style.height=tt+"px"),q!==null&&q.setSize(n.width,n.height),this.setViewport(0,0,N,tt)},this.getDrawingBufferSize=function(N){return N.set(F*ct,j*ct).floor()},this.setDrawingBufferSize=function(N,tt,ft){F=N,j=tt,ct=ft,n.width=Math.floor(N*ft),n.height=Math.floor(tt*ft),this.setViewport(0,0,N,tt)},this.setEffects=function(N){if(b===Si){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(N){for(let tt=0;tt<N.length;tt++)if(N[tt].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}q.setEffects(N||[])},this.getCurrentViewport=function(N){return N.copy(z)},this.getViewport=function(N){return N.copy(it)},this.setViewport=function(N,tt,ft,rt){N.isVector4?it.set(N.x,N.y,N.z,N.w):it.set(N,tt,ft,rt),qt.viewport(z.copy(it).multiplyScalar(ct).round())},this.getScissor=function(N){return N.copy(gt)},this.setScissor=function(N,tt,ft,rt){N.isVector4?gt.set(N.x,N.y,N.z,N.w):gt.set(N,tt,ft,rt),qt.scissor(G.copy(gt).multiplyScalar(ct).round())},this.getScissorTest=function(){return Ct},this.setScissorTest=function(N){qt.setScissorTest(Ct=N)},this.setOpaqueSort=function(N){Tt=N},this.setTransparentSort=function(N){Dt=N},this.getClearColor=function(N){return N.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor(...arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha(...arguments)},this.clear=function(N=!0,tt=!0,ft=!0){let rt=0;if(N){let nt=!1;if(V!==null){const Bt=V.texture.format;nt=S.has(Bt)}if(nt){const Bt=V.texture.type,kt=x.has(Bt),It=Lt.getClearColor(),Yt=Lt.getClearAlpha(),Qt=It.r,ie=It.g,Jt=It.b;kt?(T[0]=Qt,T[1]=ie,T[2]=Jt,T[3]=Yt,X.clearBufferuiv(X.COLOR,0,T)):(U[0]=Qt,U[1]=ie,U[2]=Jt,U[3]=Yt,X.clearBufferiv(X.COLOR,0,U))}else rt|=X.COLOR_BUFFER_BIT}tt&&(rt|=X.DEPTH_BUFFER_BIT),ft&&(rt|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Kt,!1),n.removeEventListener("webglcontextrestored",se,!1),n.removeEventListener("webglcontextcreationerror",ce,!1),Lt.dispose(),At.dispose(),wt.dispose(),A.dispose(),_t.dispose(),Et.dispose(),Ut.dispose(),pt.dispose(),ut.dispose(),Wt.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",Hn),bt.removeEventListener("sessionend",ns),ci.stop()};function Kt(N){N.preventDefault(),d_("WebGLRenderer: Context Lost."),O=!0}function se(){d_("WebGLRenderer: Context Restored."),O=!1;const N=I.autoReset,tt=Ft.enabled,ft=Ft.autoUpdate,rt=Ft.needsUpdate,nt=Ft.type;vt(),I.autoReset=N,Ft.enabled=tt,Ft.autoUpdate=ft,Ft.needsUpdate=rt,Ft.type=nt}function ce(N){Ne("WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function Je(N){const tt=N.target;tt.removeEventListener("dispose",Je),Ve(tt)}function Ve(N){oi(N),A.remove(N)}function oi(N){const tt=A.get(N).programs;tt!==void 0&&(tt.forEach(function(ft){Wt.releaseProgram(ft)}),N.isShaderMaterial&&Wt.releaseShaderCache(N))}this.renderBufferDirect=function(N,tt,ft,rt,nt,Bt){tt===null&&(tt=be);const kt=nt.isMesh&&nt.matrixWorld.determinant()<0,It=Ki(N,tt,ft,rt,nt);qt.setMaterial(rt,kt);let Yt=ft.index,Qt=1;if(rt.wireframe===!0){if(Yt=Xt.getWireframeAttribute(ft),Yt===void 0)return;Qt=2}const ie=ft.drawRange,Jt=ft.attributes.position;let re=ie.start*Qt,Fe=(ie.start+ie.count)*Qt;Bt!==null&&(re=Math.max(re,Bt.start*Qt),Fe=Math.min(Fe,(Bt.start+Bt.count)*Qt)),Yt!==null?(re=Math.max(re,0),Fe=Math.min(Fe,Yt.count)):Jt!=null&&(re=Math.max(re,0),Fe=Math.min(Fe,Jt.count));const rn=Fe-re;if(rn<0||rn===1/0)return;pt.setup(nt,rt,It,ft,Yt);let tn,ke=Z;if(Yt!==null&&(tn=ht.get(Yt),ke=Ot,ke.setIndex(tn)),nt.isMesh)rt.wireframe===!0?(qt.setLineWidth(rt.wireframeLinewidth*en()),ke.setMode(X.LINES)):ke.setMode(X.TRIANGLES);else if(nt.isLine){let te=rt.linewidth;te===void 0&&(te=1),qt.setLineWidth(te*en()),nt.isLineSegments?ke.setMode(X.LINES):nt.isLineLoop?ke.setMode(X.LINE_LOOP):ke.setMode(X.LINE_STRIP)}else nt.isPoints?ke.setMode(X.POINTS):nt.isSprite&&ke.setMode(X.TRIANGLES);if(nt.isBatchedMesh)if(nt._multiDrawInstances!==null)zl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ke.renderMultiDrawInstances(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount,nt._multiDrawInstances);else if(Se.get("WEBGL_multi_draw"))ke.renderMultiDraw(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount);else{const te=nt._multiDrawStarts,Ie=nt._multiDrawCounts,fe=nt._multiDrawCount,Cn=Yt?ht.get(Yt).bytesPerElement:1,xa=A.get(rt).currentProgram.getUniforms();for(let Dn=0;Dn<fe;Dn++)xa.setValue(X,"_gl_DrawID",Dn),ke.render(te[Dn]/Cn,Ie[Dn])}else if(nt.isInstancedMesh)ke.renderInstances(re,rn,nt.count);else if(ft.isInstancedBufferGeometry){const te=ft._maxInstanceCount!==void 0?ft._maxInstanceCount:1/0,Ie=Math.min(ft.instanceCount,te);ke.renderInstances(re,rn,Ie)}else ke.render(re,rn)};function Le(N,tt,ft){N.transparent===!0&&N.side===ja&&N.forceSinglePass===!1?(N.side=ri,N.needsUpdate=!0,Zi(N,tt,ft),N.side=Fs,N.needsUpdate=!0,Zi(N,tt,ft),N.side=ja):Zi(N,tt,ft)}this.compile=function(N,tt,ft=null){ft===null&&(ft=N),L=wt.get(ft),L.init(tt),P.push(L),ft.traverseVisible(function(nt){nt.isLight&&nt.layers.test(tt.layers)&&(L.pushLight(nt),nt.castShadow&&L.pushShadow(nt))}),N!==ft&&N.traverseVisible(function(nt){nt.isLight&&nt.layers.test(tt.layers)&&(L.pushLight(nt),nt.castShadow&&L.pushShadow(nt))}),L.setupLights();const rt=new Set;return N.traverse(function(nt){if(!(nt.isMesh||nt.isPoints||nt.isLine||nt.isSprite))return;const Bt=nt.material;if(Bt)if(Array.isArray(Bt))for(let kt=0;kt<Bt.length;kt++){const It=Bt[kt];Le(It,ft,nt),rt.add(It)}else Le(Bt,ft,nt),rt.add(Bt)}),L=P.pop(),rt},this.compileAsync=function(N,tt,ft=null){const rt=this.compile(N,tt,ft);return new Promise(nt=>{function Bt(){if(rt.forEach(function(kt){A.get(kt).currentProgram.isReady()&&rt.delete(kt)}),rt.size===0){nt(N);return}setTimeout(Bt,10)}Se.get("KHR_parallel_shader_compile")!==null?Bt():setTimeout(Bt,10)})};let Zn=null;function li(N){Zn&&Zn(N)}function Hn(){ci.stop()}function ns(){ci.start()}const ci=new Qx;ci.setAnimationLoop(li),typeof self<"u"&&ci.setContext(self),this.setAnimationLoop=function(N){Zn=N,bt.setAnimationLoop(N),N===null?ci.stop():ci.start()},bt.addEventListener("sessionstart",Hn),bt.addEventListener("sessionend",ns),this.render=function(N,tt){if(tt!==void 0&&tt.isCamera!==!0){Ne("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;const ft=bt.enabled===!0&&bt.isPresenting===!0,rt=q!==null&&(V===null||ft)&&q.begin(w,V);if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),tt.parent===null&&tt.matrixWorldAutoUpdate===!0&&tt.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(q===null||q.isCompositing()===!1)&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(tt),tt=bt.getCamera()),N.isScene===!0&&N.onBeforeRender(w,N,tt,V),L=wt.get(N,P.length),L.init(tt),P.push(L),De.multiplyMatrices(tt.projectionMatrix,tt.matrixWorldInverse),Pt.setFromProjectionMatrix(De,ua,tt.reversedDepth),ye=this.localClippingEnabled,Nt=Gt.init(this.clippingPlanes,ye),C=At.get(N,B.length),C.init(),B.push(C),bt.enabled===!0&&bt.isPresenting===!0){const kt=w.xr.getDepthSensingMesh();kt!==null&&Kn(kt,tt,-1/0,w.sortObjects)}Kn(N,tt,0,w.sortObjects),C.finish(),w.sortObjects===!0&&C.sort(Tt,Dt),le=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,le&&Lt.addToRenderList(C,N),this.info.render.frame++,Nt===!0&&Gt.beginShadows();const nt=L.state.shadowsArray;if(Ft.render(nt,N,tt),Nt===!0&&Gt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(rt&&q.hasRenderPass())===!1){const kt=C.opaque,It=C.transmissive;if(L.setupLights(),tt.isArrayCamera){const Yt=tt.cameras;if(It.length>0)for(let Qt=0,ie=Yt.length;Qt<ie;Qt++){const Jt=Yt[Qt];Sn(kt,It,N,Jt)}le&&Lt.render(N);for(let Qt=0,ie=Yt.length;Qt<ie;Qt++){const Jt=Yt[Qt];ln(C,N,Jt,Jt.viewport)}}else It.length>0&&Sn(kt,It,N,tt),le&&Lt.render(N),ln(C,N,tt)}V!==null&&$===0&&(J.updateMultisampleRenderTarget(V),J.updateRenderTargetMipmap(V)),rt&&q.end(w),N.isScene===!0&&N.onAfterRender(w,N,tt),pt.resetDefaultState(),K=-1,W=null,P.pop(),P.length>0?(L=P[P.length-1],Nt===!0&&Gt.setGlobalState(w.clippingPlanes,L.state.camera)):L=null,B.pop(),B.length>0?C=B[B.length-1]:C=null};function Kn(N,tt,ft,rt){if(N.visible===!1)return;if(N.layers.test(tt.layers)){if(N.isGroup)ft=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(tt);else if(N.isLight)L.pushLight(N),N.castShadow&&L.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||Pt.intersectsSprite(N)){rt&&ne.setFromMatrixPosition(N.matrixWorld).applyMatrix4(De);const kt=Ut.update(N),It=N.material;It.visible&&C.push(N,kt,It,ft,ne.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||Pt.intersectsObject(N))){const kt=Ut.update(N),It=N.material;if(rt&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),ne.copy(N.boundingSphere.center)):(kt.boundingSphere===null&&kt.computeBoundingSphere(),ne.copy(kt.boundingSphere.center)),ne.applyMatrix4(N.matrixWorld).applyMatrix4(De)),Array.isArray(It)){const Yt=kt.groups;for(let Qt=0,ie=Yt.length;Qt<ie;Qt++){const Jt=Yt[Qt],re=It[Jt.materialIndex];re&&re.visible&&C.push(N,kt,re,ft,ne.z,Jt)}}else It.visible&&C.push(N,kt,It,ft,ne.z,null)}}const Bt=N.children;for(let kt=0,It=Bt.length;kt<It;kt++)Kn(Bt[kt],tt,ft,rt)}function ln(N,tt,ft,rt){const{opaque:nt,transmissive:Bt,transparent:kt}=N;L.setupLightsView(ft),Nt===!0&&Gt.setGlobalState(w.clippingPlanes,ft),rt&&qt.viewport(z.copy(rt)),nt.length>0&&ui(nt,tt,ft),Bt.length>0&&ui(Bt,tt,ft),kt.length>0&&ui(kt,tt,ft),qt.buffers.depth.setTest(!0),qt.buffers.depth.setMask(!0),qt.buffers.color.setMask(!0),qt.setPolygonOffset(!1)}function Sn(N,tt,ft,rt){if((ft.isScene===!0?ft.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[rt.id]===void 0){const re=Se.has("EXT_color_buffer_half_float")||Se.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[rt.id]=new ha(1,1,{generateMipmaps:!0,type:re?$a:Si,minFilter:Ps,samples:he.samples,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ue.workingColorSpace})}const Bt=L.state.transmissionRenderTarget[rt.id],kt=rt.viewport||z;Bt.setSize(kt.z*w.transmissionResolutionScale,kt.w*w.transmissionResolutionScale);const It=w.getRenderTarget(),Yt=w.getActiveCubeFace(),Qt=w.getActiveMipmapLevel();w.setRenderTarget(Bt),w.getClearColor(mt),yt=w.getClearAlpha(),yt<1&&w.setClearColor(16777215,.5),w.clear(),le&&Lt.render(ft);const ie=w.toneMapping;w.toneMapping=Yi;const Jt=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),L.setupLightsView(rt),Nt===!0&&Gt.setGlobalState(w.clippingPlanes,rt),ui(N,ft,rt),J.updateMultisampleRenderTarget(Bt),J.updateRenderTargetMipmap(Bt),Se.has("WEBGL_multisampled_render_to_texture")===!1){let re=!1;for(let Fe=0,rn=tt.length;Fe<rn;Fe++){const tn=tt[Fe],{object:ke,geometry:te,material:Ie,group:fe}=tn;if(Ie.side===ja&&ke.layers.test(rt.layers)){const Cn=Ie.side;Ie.side=ri,Ie.needsUpdate=!0,fi(ke,ft,rt,te,Ie,fe),Ie.side=Cn,Ie.needsUpdate=!0,re=!0}}re===!0&&(J.updateMultisampleRenderTarget(Bt),J.updateRenderTargetMipmap(Bt))}w.setRenderTarget(It,Yt,Qt),w.setClearColor(mt,yt),Jt!==void 0&&(rt.viewport=Jt),w.toneMapping=ie}function ui(N,tt,ft){const rt=tt.isScene===!0?tt.overrideMaterial:null;for(let nt=0,Bt=N.length;nt<Bt;nt++){const kt=N[nt],{object:It,geometry:Yt,group:Qt}=kt;let ie=kt.material;ie.allowOverride===!0&&rt!==null&&(ie=rt),It.layers.test(ft.layers)&&fi(It,tt,ft,Yt,ie,Qt)}}function fi(N,tt,ft,rt,nt,Bt){N.onBeforeRender(w,tt,ft,rt,nt,Bt),N.modelViewMatrix.multiplyMatrices(ft.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),nt.onBeforeRender(w,tt,ft,rt,N,Bt),nt.transparent===!0&&nt.side===ja&&nt.forceSinglePass===!1?(nt.side=ri,nt.needsUpdate=!0,w.renderBufferDirect(ft,tt,rt,nt,N,Bt),nt.side=Fs,nt.needsUpdate=!0,w.renderBufferDirect(ft,tt,rt,nt,N,Bt),nt.side=ja):w.renderBufferDirect(ft,tt,rt,nt,N,Bt),N.onAfterRender(w,tt,ft,rt,nt,Bt)}function Zi(N,tt,ft){tt.isScene!==!0&&(tt=be);const rt=A.get(N),nt=L.state.lights,Bt=L.state.shadowsArray,kt=nt.state.version,It=Wt.getParameters(N,nt.state,Bt,tt,ft),Yt=Wt.getProgramCacheKey(It);let Qt=rt.programs;rt.environment=N.isMeshStandardMaterial?tt.environment:null,rt.fog=tt.fog,rt.envMap=(N.isMeshStandardMaterial?Et:_t).get(N.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&N.envMap===null?tt.environmentRotation:N.envMapRotation,Qt===void 0&&(N.addEventListener("dispose",Je),Qt=new Map,rt.programs=Qt);let ie=Qt.get(Yt);if(ie!==void 0){if(rt.currentProgram===ie&&rt.lightsStateVersion===kt)return is(N,It),ie}else It.uniforms=Wt.getUniforms(N),N.onBeforeCompile(It,w),ie=Wt.acquireProgram(It,Yt),Qt.set(Yt,ie),rt.uniforms=It.uniforms;const Jt=rt.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(Jt.clippingPlanes=Gt.uniform),is(N,It),rt.needsLights=Qi(N),rt.lightsStateVersion=kt,rt.needsLights&&(Jt.ambientLightColor.value=nt.state.ambient,Jt.lightProbe.value=nt.state.probe,Jt.directionalLights.value=nt.state.directional,Jt.directionalLightShadows.value=nt.state.directionalShadow,Jt.spotLights.value=nt.state.spot,Jt.spotLightShadows.value=nt.state.spotShadow,Jt.rectAreaLights.value=nt.state.rectArea,Jt.ltc_1.value=nt.state.rectAreaLTC1,Jt.ltc_2.value=nt.state.rectAreaLTC2,Jt.pointLights.value=nt.state.point,Jt.pointLightShadows.value=nt.state.pointShadow,Jt.hemisphereLights.value=nt.state.hemi,Jt.directionalShadowMap.value=nt.state.directionalShadowMap,Jt.directionalShadowMatrix.value=nt.state.directionalShadowMatrix,Jt.spotShadowMap.value=nt.state.spotShadowMap,Jt.spotLightMatrix.value=nt.state.spotLightMatrix,Jt.spotLightMap.value=nt.state.spotLightMap,Jt.pointShadowMap.value=nt.state.pointShadowMap,Jt.pointShadowMatrix.value=nt.state.pointShadowMatrix),rt.currentProgram=ie,rt.uniformsList=null,ie}function va(N){if(N.uniformsList===null){const tt=N.currentProgram.getUniforms();N.uniformsList=Ru.seqWithValue(tt.seq,N.uniforms)}return N.uniformsList}function is(N,tt){const ft=A.get(N);ft.outputColorSpace=tt.outputColorSpace,ft.batching=tt.batching,ft.batchingColor=tt.batchingColor,ft.instancing=tt.instancing,ft.instancingColor=tt.instancingColor,ft.instancingMorph=tt.instancingMorph,ft.skinning=tt.skinning,ft.morphTargets=tt.morphTargets,ft.morphNormals=tt.morphNormals,ft.morphColors=tt.morphColors,ft.morphTargetsCount=tt.morphTargetsCount,ft.numClippingPlanes=tt.numClippingPlanes,ft.numIntersection=tt.numClipIntersection,ft.vertexAlphas=tt.vertexAlphas,ft.vertexTangents=tt.vertexTangents,ft.toneMapping=tt.toneMapping}function Ki(N,tt,ft,rt,nt){tt.isScene!==!0&&(tt=be),J.resetTextureUnits();const Bt=tt.fog,kt=rt.isMeshStandardMaterial?tt.environment:null,It=V===null?w.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:bo,Yt=(rt.isMeshStandardMaterial?Et:_t).get(rt.envMap||kt),Qt=rt.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,ie=!!ft.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),Jt=!!ft.morphAttributes.position,re=!!ft.morphAttributes.normal,Fe=!!ft.morphAttributes.color;let rn=Yi;rt.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(rn=w.toneMapping);const tn=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,ke=tn!==void 0?tn.length:0,te=A.get(rt),Ie=L.state.lights;if(Nt===!0&&(ye===!0||N!==W)){const Un=N===W&&rt.id===K;Gt.setState(rt,N,Un)}let fe=!1;rt.version===te.__version?(te.needsLights&&te.lightsStateVersion!==Ie.state.version||te.outputColorSpace!==It||nt.isBatchedMesh&&te.batching===!1||!nt.isBatchedMesh&&te.batching===!0||nt.isBatchedMesh&&te.batchingColor===!0&&nt.colorTexture===null||nt.isBatchedMesh&&te.batchingColor===!1&&nt.colorTexture!==null||nt.isInstancedMesh&&te.instancing===!1||!nt.isInstancedMesh&&te.instancing===!0||nt.isSkinnedMesh&&te.skinning===!1||!nt.isSkinnedMesh&&te.skinning===!0||nt.isInstancedMesh&&te.instancingColor===!0&&nt.instanceColor===null||nt.isInstancedMesh&&te.instancingColor===!1&&nt.instanceColor!==null||nt.isInstancedMesh&&te.instancingMorph===!0&&nt.morphTexture===null||nt.isInstancedMesh&&te.instancingMorph===!1&&nt.morphTexture!==null||te.envMap!==Yt||rt.fog===!0&&te.fog!==Bt||te.numClippingPlanes!==void 0&&(te.numClippingPlanes!==Gt.numPlanes||te.numIntersection!==Gt.numIntersection)||te.vertexAlphas!==Qt||te.vertexTangents!==ie||te.morphTargets!==Jt||te.morphNormals!==re||te.morphColors!==Fe||te.toneMapping!==rn||te.morphTargetsCount!==ke)&&(fe=!0):(fe=!0,te.__version=rt.version);let Cn=te.currentProgram;fe===!0&&(Cn=Zi(rt,tt,nt));let xa=!1,Dn=!1,Ei=!1;const qe=Cn.getUniforms(),Nn=te.uniforms;if(qt.useProgram(Cn.program)&&(xa=!0,Dn=!0,Ei=!0),rt.id!==K&&(K=rt.id,Dn=!0),xa||W!==N){qt.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),qe.setValue(X,"projectionMatrix",N.projectionMatrix),qe.setValue(X,"viewMatrix",N.matrixWorldInverse);const Ln=qe.map.cameraPosition;Ln!==void 0&&Ln.setValue(X,ue.setFromMatrixPosition(N.matrixWorld)),he.logarithmicDepthBuffer&&qe.setValue(X,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&qe.setValue(X,"isOrthographic",N.isOrthographicCamera===!0),W!==N&&(W=N,Dn=!0,Ei=!0)}if(te.needsLights&&(Ie.state.directionalShadowMap.length>0&&qe.setValue(X,"directionalShadowMap",Ie.state.directionalShadowMap,J),Ie.state.spotShadowMap.length>0&&qe.setValue(X,"spotShadowMap",Ie.state.spotShadowMap,J),Ie.state.pointShadowMap.length>0&&qe.setValue(X,"pointShadowMap",Ie.state.pointShadowMap,J)),nt.isSkinnedMesh){qe.setOptional(X,nt,"bindMatrix"),qe.setOptional(X,nt,"bindMatrixInverse");const Un=nt.skeleton;Un&&(Un.boneTexture===null&&Un.computeBoneTexture(),qe.setValue(X,"boneTexture",Un.boneTexture,J))}nt.isBatchedMesh&&(qe.setOptional(X,nt,"batchingTexture"),qe.setValue(X,"batchingTexture",nt._matricesTexture,J),qe.setOptional(X,nt,"batchingIdTexture"),qe.setValue(X,"batchingIdTexture",nt._indirectTexture,J),qe.setOptional(X,nt,"batchingColorTexture"),nt._colorsTexture!==null&&qe.setValue(X,"batchingColorTexture",nt._colorsTexture,J));const Mn=ft.morphAttributes;if((Mn.position!==void 0||Mn.normal!==void 0||Mn.color!==void 0)&&me.update(nt,ft,Cn),(Dn||te.receiveShadow!==nt.receiveShadow)&&(te.receiveShadow=nt.receiveShadow,qe.setValue(X,"receiveShadow",nt.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(Nn.envMap.value=Yt,Nn.flipEnvMap.value=Yt.isCubeTexture&&Yt.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&tt.environment!==null&&(Nn.envMapIntensity.value=tt.environmentIntensity),Nn.dfgLUT!==void 0&&(Nn.dfgLUT.value=s2()),Dn&&(qe.setValue(X,"toneMappingExposure",w.toneMappingExposure),te.needsLights&&Is(Nn,Ei),Bt&&rt.fog===!0&&ae.refreshFogUniforms(Nn,Bt),ae.refreshMaterialUniforms(Nn,rt,ct,j,L.state.transmissionRenderTarget[N.id]),Ru.upload(X,va(te),Nn,J)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(Ru.upload(X,va(te),Nn,J),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&qe.setValue(X,"center",nt.center),qe.setValue(X,"modelViewMatrix",nt.modelViewMatrix),qe.setValue(X,"normalMatrix",nt.normalMatrix),qe.setValue(X,"modelMatrix",nt.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const Un=rt.uniformsGroups;for(let Ln=0,yr=Un.length;Ln<yr;Ln++){const zi=Un[Ln];ut.update(zi,Cn),ut.bind(zi,Cn)}}return Cn}function Is(N,tt){N.ambientLightColor.needsUpdate=tt,N.lightProbe.needsUpdate=tt,N.directionalLights.needsUpdate=tt,N.directionalLightShadows.needsUpdate=tt,N.pointLights.needsUpdate=tt,N.pointLightShadows.needsUpdate=tt,N.spotLights.needsUpdate=tt,N.spotLightShadows.needsUpdate=tt,N.rectAreaLights.needsUpdate=tt,N.hemisphereLights.needsUpdate=tt}function Qi(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(N,tt,ft){const rt=A.get(N);rt.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,rt.__autoAllocateDepthBuffer===!1&&(rt.__useRenderToTexture=!1),A.get(N.texture).__webglTexture=tt,A.get(N.depthTexture).__webglTexture=rt.__autoAllocateDepthBuffer?void 0:ft,rt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,tt){const ft=A.get(N);ft.__webglFramebuffer=tt,ft.__useDefaultFramebuffer=tt===void 0};const Oi=X.createFramebuffer();this.setRenderTarget=function(N,tt=0,ft=0){V=N,H=tt,$=ft;let rt=null,nt=!1,Bt=!1;if(N){const It=A.get(N);if(It.__useDefaultFramebuffer!==void 0){qt.bindFramebuffer(X.FRAMEBUFFER,It.__webglFramebuffer),z.copy(N.viewport),G.copy(N.scissor),Q=N.scissorTest,qt.viewport(z),qt.scissor(G),qt.setScissorTest(Q),K=-1;return}else if(It.__webglFramebuffer===void 0)J.setupRenderTarget(N);else if(It.__hasExternalTextures)J.rebindTextures(N,A.get(N.texture).__webglTexture,A.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const ie=N.depthTexture;if(It.__boundDepthTexture!==ie){if(ie!==null&&A.has(ie)&&(N.width!==ie.image.width||N.height!==ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(N)}}const Yt=N.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(Bt=!0);const Qt=A.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(Qt[tt])?rt=Qt[tt][ft]:rt=Qt[tt],nt=!0):N.samples>0&&J.useMultisampledRTT(N)===!1?rt=A.get(N).__webglMultisampledFramebuffer:Array.isArray(Qt)?rt=Qt[ft]:rt=Qt,z.copy(N.viewport),G.copy(N.scissor),Q=N.scissorTest}else z.copy(it).multiplyScalar(ct).floor(),G.copy(gt).multiplyScalar(ct).floor(),Q=Ct;if(ft!==0&&(rt=Oi),qt.bindFramebuffer(X.FRAMEBUFFER,rt)&&qt.drawBuffers(N,rt),qt.viewport(z),qt.scissor(G),qt.setScissorTest(Q),nt){const It=A.get(N.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+tt,It.__webglTexture,ft)}else if(Bt){const It=tt;for(let Yt=0;Yt<N.textures.length;Yt++){const Qt=A.get(N.textures[Yt]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+Yt,Qt.__webglTexture,ft,It)}}else if(N!==null&&ft!==0){const It=A.get(N.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,It.__webglTexture,ft)}K=-1},this.readRenderTargetPixels=function(N,tt,ft,rt,nt,Bt,kt,It=0){if(!(N&&N.isWebGLRenderTarget)){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Yt=A.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&kt!==void 0&&(Yt=Yt[kt]),Yt){qt.bindFramebuffer(X.FRAMEBUFFER,Yt);try{const Qt=N.textures[It],ie=Qt.format,Jt=Qt.type;if(!he.textureFormatReadable(ie)){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!he.textureTypeReadable(Jt)){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}tt>=0&&tt<=N.width-rt&&ft>=0&&ft<=N.height-nt&&(N.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+It),X.readPixels(tt,ft,rt,nt,Rt.convert(ie),Rt.convert(Jt),Bt))}finally{const Qt=V!==null?A.get(V).__webglFramebuffer:null;qt.bindFramebuffer(X.FRAMEBUFFER,Qt)}}},this.readRenderTargetPixelsAsync=async function(N,tt,ft,rt,nt,Bt,kt,It=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Yt=A.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&kt!==void 0&&(Yt=Yt[kt]),Yt)if(tt>=0&&tt<=N.width-rt&&ft>=0&&ft<=N.height-nt){qt.bindFramebuffer(X.FRAMEBUFFER,Yt);const Qt=N.textures[It],ie=Qt.format,Jt=Qt.type;if(!he.textureFormatReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!he.textureTypeReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const re=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,re),X.bufferData(X.PIXEL_PACK_BUFFER,Bt.byteLength,X.STREAM_READ),N.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+It),X.readPixels(tt,ft,rt,nt,Rt.convert(ie),Rt.convert(Jt),0);const Fe=V!==null?A.get(V).__webglFramebuffer:null;qt.bindFramebuffer(X.FRAMEBUFFER,Fe);const rn=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await b1(X,rn,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,re),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Bt),X.deleteBuffer(re),X.deleteSync(rn),Bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,tt=null,ft=0){const rt=Math.pow(2,-ft),nt=Math.floor(N.image.width*rt),Bt=Math.floor(N.image.height*rt),kt=tt!==null?tt.x:0,It=tt!==null?tt.y:0;J.setTexture2D(N,0),X.copyTexSubImage2D(X.TEXTURE_2D,ft,0,0,kt,It,nt,Bt),qt.unbindTexture()};const _a=X.createFramebuffer(),Ji=X.createFramebuffer();this.copyTextureToTexture=function(N,tt,ft=null,rt=null,nt=0,Bt=null){Bt===null&&(nt!==0?(zl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Bt=nt,nt=0):Bt=0);let kt,It,Yt,Qt,ie,Jt,re,Fe,rn;const tn=N.isCompressedTexture?N.mipmaps[Bt]:N.image;if(ft!==null)kt=ft.max.x-ft.min.x,It=ft.max.y-ft.min.y,Yt=ft.isBox3?ft.max.z-ft.min.z:1,Qt=ft.min.x,ie=ft.min.y,Jt=ft.isBox3?ft.min.z:0;else{const Mn=Math.pow(2,-nt);kt=Math.floor(tn.width*Mn),It=Math.floor(tn.height*Mn),N.isDataArrayTexture?Yt=tn.depth:N.isData3DTexture?Yt=Math.floor(tn.depth*Mn):Yt=1,Qt=0,ie=0,Jt=0}rt!==null?(re=rt.x,Fe=rt.y,rn=rt.z):(re=0,Fe=0,rn=0);const ke=Rt.convert(tt.format),te=Rt.convert(tt.type);let Ie;tt.isData3DTexture?(J.setTexture3D(tt,0),Ie=X.TEXTURE_3D):tt.isDataArrayTexture||tt.isCompressedArrayTexture?(J.setTexture2DArray(tt,0),Ie=X.TEXTURE_2D_ARRAY):(J.setTexture2D(tt,0),Ie=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,tt.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,tt.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,tt.unpackAlignment);const fe=X.getParameter(X.UNPACK_ROW_LENGTH),Cn=X.getParameter(X.UNPACK_IMAGE_HEIGHT),xa=X.getParameter(X.UNPACK_SKIP_PIXELS),Dn=X.getParameter(X.UNPACK_SKIP_ROWS),Ei=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,tn.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,tn.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Qt),X.pixelStorei(X.UNPACK_SKIP_ROWS,ie),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Jt);const qe=N.isDataArrayTexture||N.isData3DTexture,Nn=tt.isDataArrayTexture||tt.isData3DTexture;if(N.isDepthTexture){const Mn=A.get(N),Un=A.get(tt),Ln=A.get(Mn.__renderTarget),yr=A.get(Un.__renderTarget);qt.bindFramebuffer(X.READ_FRAMEBUFFER,Ln.__webglFramebuffer),qt.bindFramebuffer(X.DRAW_FRAMEBUFFER,yr.__webglFramebuffer);for(let zi=0;zi<Yt;zi++)qe&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,A.get(N).__webglTexture,nt,Jt+zi),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,A.get(tt).__webglTexture,Bt,rn+zi)),X.blitFramebuffer(Qt,ie,kt,It,re,Fe,kt,It,X.DEPTH_BUFFER_BIT,X.NEAREST);qt.bindFramebuffer(X.READ_FRAMEBUFFER,null),qt.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(nt!==0||N.isRenderTargetTexture||A.has(N)){const Mn=A.get(N),Un=A.get(tt);qt.bindFramebuffer(X.READ_FRAMEBUFFER,_a),qt.bindFramebuffer(X.DRAW_FRAMEBUFFER,Ji);for(let Ln=0;Ln<Yt;Ln++)qe?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Mn.__webglTexture,nt,Jt+Ln):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Mn.__webglTexture,nt),Nn?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Un.__webglTexture,Bt,rn+Ln):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Un.__webglTexture,Bt),nt!==0?X.blitFramebuffer(Qt,ie,kt,It,re,Fe,kt,It,X.COLOR_BUFFER_BIT,X.NEAREST):Nn?X.copyTexSubImage3D(Ie,Bt,re,Fe,rn+Ln,Qt,ie,kt,It):X.copyTexSubImage2D(Ie,Bt,re,Fe,Qt,ie,kt,It);qt.bindFramebuffer(X.READ_FRAMEBUFFER,null),qt.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Nn?N.isDataTexture||N.isData3DTexture?X.texSubImage3D(Ie,Bt,re,Fe,rn,kt,It,Yt,ke,te,tn.data):tt.isCompressedArrayTexture?X.compressedTexSubImage3D(Ie,Bt,re,Fe,rn,kt,It,Yt,ke,tn.data):X.texSubImage3D(Ie,Bt,re,Fe,rn,kt,It,Yt,ke,te,tn):N.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Bt,re,Fe,kt,It,ke,te,tn.data):N.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Bt,re,Fe,tn.width,tn.height,ke,tn.data):X.texSubImage2D(X.TEXTURE_2D,Bt,re,Fe,kt,It,ke,te,tn);X.pixelStorei(X.UNPACK_ROW_LENGTH,fe),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Cn),X.pixelStorei(X.UNPACK_SKIP_PIXELS,xa),X.pixelStorei(X.UNPACK_SKIP_ROWS,Dn),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Ei),Bt===0&&tt.generateMipmaps&&X.generateMipmap(Ie),qt.unbindTexture()},this.initRenderTarget=function(N){A.get(N).__webglFramebuffer===void 0&&J.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?J.setTextureCube(N,0):N.isData3DTexture?J.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?J.setTexture2DArray(N,0):J.setTexture2D(N,0),qt.unbindTexture()},this.resetState=function(){H=0,$=0,V=null,qt.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ua}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Ue._getDrawingBufferColorSpace(t),n.unpackColorSpace=Ue._getUnpackColorSpace()}}const Cl=new lt;function Li(c,t,n,a,r,o){const u=2*Math.PI*r/4,f=Math.max(o-2*r,0),p=Math.PI/4;Cl.copy(t),Cl[a]=0,Cl.normalize();const h=.5*u/(u+f),g=1-Cl.angleTo(c)/p;return Math.sign(Cl[n])===1?g*h:f/(u+f)+h+h*(1-g)}class Yp extends wo{constructor(t=1,n=1,a=1,r=2,o=.1){const u=r*2+1;if(o=Math.min(t/2,n/2,a/2,o),super(1,1,1,u,u,u),this.type="RoundedBoxGeometry",this.parameters={width:t,height:n,depth:a,segments:r,radius:o},u===1)return;const f=this.toNonIndexed();this.index=null,this.attributes.position=f.attributes.position,this.attributes.normal=f.attributes.normal,this.attributes.uv=f.attributes.uv;const p=new lt,h=new lt,g=new lt(t,n,a).divideScalar(2).subScalar(o),_=this.attributes.position.array,v=this.attributes.normal.array,y=this.attributes.uv.array,M=_.length/6,b=new lt,S=.5/u;for(let x=0,T=0;x<_.length;x+=3,T+=2)switch(p.fromArray(_,x),h.copy(p),h.x-=Math.sign(h.x)*S,h.y-=Math.sign(h.y)*S,h.z-=Math.sign(h.z)*S,h.normalize(),_[x+0]=g.x*Math.sign(p.x)+h.x*o,_[x+1]=g.y*Math.sign(p.y)+h.y*o,_[x+2]=g.z*Math.sign(p.z)+h.z*o,v[x+0]=h.x,v[x+1]=h.y,v[x+2]=h.z,Math.floor(x/M)){case 0:b.set(1,0,0),y[T+0]=Li(b,h,"z","y",o,a),y[T+1]=1-Li(b,h,"y","z",o,n);break;case 1:b.set(-1,0,0),y[T+0]=1-Li(b,h,"z","y",o,a),y[T+1]=1-Li(b,h,"y","z",o,n);break;case 2:b.set(0,1,0),y[T+0]=1-Li(b,h,"x","z",o,t),y[T+1]=Li(b,h,"z","x",o,a);break;case 3:b.set(0,-1,0),y[T+0]=1-Li(b,h,"x","z",o,t),y[T+1]=1-Li(b,h,"z","x",o,a);break;case 4:b.set(0,0,1),y[T+0]=1-Li(b,h,"x","y",o,t),y[T+1]=1-Li(b,h,"y","x",o,n);break;case 5:b.set(0,0,-1),y[T+0]=Li(b,h,"x","y",o,t),y[T+1]=1-Li(b,h,"y","x",o,n);break}}static fromJSON(t){return new Yp(t.width,t.height,t.depth,t.segments,t.radius)}}const o2=18,Ud=1.2,l2=28;class c2{ctx=null;masterGain=null;lastPlayTime=0;primed=!1;unlock(){const t=this.ensureContext();if(t.state==="suspended"&&t.resume(),!this.primed){this.primed=!0;try{const n=t.createBufferSource();n.buffer=t.createBuffer(1,1,t.sampleRate),n.connect(t.destination),n.start(0)}catch{}}}ensureContext(){return this.ctx||(this.ctx=new AudioContext,this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=.55,this.masterGain.connect(this.ctx.destination)),this.ctx}playImpact(t,n){if(n<Ud)return;const a=performance.now();if(a-this.lastPlayTime<l2)return;this.lastPlayTime=a;const r=this.ensureContext();if(r.state!=="running"&&(this.unlock(),this.ctx?.state!=="running"))return;const o=this.masterGain,u=Math.min((n-Ud)/(o2-Ud),1);t==="table"?this.playTableHit(r,o,u):this.playDiceHit(r,o,u)}playTableHit(t,n,a){const r=t.currentTime,o=.18+a*.42,u=.04+a*.06,f=.02+a*.03,p=this.createNoiseBuffer(t,f),h=t.createBufferSource();h.buffer=p;const g=t.createBiquadFilter();g.type="lowpass",g.frequency.setValueAtTime(800+a*1200,r),g.Q.value=.7;const _=t.createGain();_.gain.setValueAtTime(o*.7,r),_.gain.exponentialRampToValueAtTime(.001,r+u),h.connect(g).connect(_).connect(n),h.start(r),h.stop(r+u+.01);const v=t.createOscillator();v.type="sine",v.frequency.setValueAtTime(90+a*50,r),v.frequency.exponentialRampToValueAtTime(40,r+u);const y=t.createGain();y.gain.setValueAtTime(o*.5,r),y.gain.exponentialRampToValueAtTime(.001,r+u),v.connect(y).connect(n),v.start(r),v.stop(r+u+.01)}playDiceHit(t,n,a){const r=t.currentTime,o=.12+a*.3,u=.018+a*.032,f=.005+a*.008,p=this.createNoiseBuffer(t,f),h=t.createBufferSource();h.buffer=p;const g=t.createBiquadFilter();g.type="highpass",g.frequency.setValueAtTime(1200,r),g.Q.value=.5;const _=t.createBiquadFilter();_.type="lowpass",_.frequency.setValueAtTime(6e3+a*2e3,r),_.Q.value=.6;const v=t.createGain();v.gain.setValueAtTime(o*.9,r),v.gain.exponentialRampToValueAtTime(.001,r+u*.6),h.connect(g).connect(_).connect(v).connect(n),h.start(r),h.stop(r+u+.01);const y=420+a*180,M=y*1.47;for(const b of[y,M]){const S=t.createOscillator();S.type="sine",S.frequency.setValueAtTime(b,r),S.frequency.exponentialRampToValueAtTime(b*.7,r+u);const x=t.createGain();x.gain.setValueAtTime(o*.18,r),x.gain.exponentialRampToValueAtTime(.001,r+u*.8),S.connect(x).connect(n),S.start(r),S.stop(r+u+.01)}}createNoiseBuffer(t,n){const a=Math.ceil(t.sampleRate*n),r=t.createBuffer(1,a,t.sampleRate),o=r.getChannelData(0);for(let u=0;u<a;u++)o[u]=Math.random()*2-1;return r}dispose(){this.ctx&&(this.ctx.close(),this.ctx=null,this.masterGain=null)}}const u2=1.36,f2=2,h2=6.8,d2=6,cr=.9,Os=8,rx=1735242,jp=[3,4,1,6,2,5],p2={1:[[0,0]],2:[[-.52,-.52],[.52,.52]],3:[[-.52,-.52],[0,0],[.52,.52]],4:[[-.52,-.52],[.52,-.52],[-.52,.52],[.52,.52]],5:[[-.52,-.52],[.52,-.52],[0,0],[-.52,.52],[.52,.52]],6:[[-.52,-.52],[.52,-.52],[-.52,0],[.52,0],[-.52,.52],[.52,.52]]},Ld=16777215,ox=15895426,ny=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)];function Ya(c){return c==="fast"?{settleHoldSeconds:.03,linearStillThreshold:.14,angularStillThreshold:.18,maxRollSeconds:.7,gravityY:-130,faceUpDrop:!0,spawnYBase:9.5,spawnYStep:.34,solverIterations:6,tableRestitution:.14,diceRestitution:.16,sleepSpeedLimit:.36,sleepTimeLimit:.05,linearDamping:.4,angularDamping:.46,impulseXMin:8.5,impulseXMax:10.6,impulseYMin:3.2,impulseYMax:4.3}:{settleHoldSeconds:.26,linearStillThreshold:.02,angularStillThreshold:.03,maxRollSeconds:null,gravityY:-40,faceUpDrop:!1,spawnYBase:4,spawnYStep:.22,solverIterations:14,tableRestitution:.36,diceRestitution:.4,sleepSpeedLimit:.14,sleepTimeLimit:.18,linearDamping:.17,angularDamping:.19,impulseXMin:12.2,impulseXMax:15.8,impulseYMin:5.4,impulseYMax:7.2}}function m2({diceCount:c=5,maxAttempts:t=3,onDiceResult:n,onRollStart:a,forceSingleAttempt:r=!1,hasPendingPlacement:o=!1,onCommitPlacement:u,rollSpeedMode:f="normal",onRollSpeedModeChange:p}){const h=we.useRef(null),g=we.useRef(()=>{}),_=we.useRef(()=>{}),v=we.useRef(!1),[y,M]=we.useState(!1),[b,S]=we.useState([]),x=we.useRef(b);x.current=b;const[T,U]=we.useState(0),[C,L]=we.useState(()=>Array(c).fill(!1)),B=we.useRef(C);B.current=C;const P=we.useRef(T);P.current=T;const q=we.useRef([]),w=r?1:t,O=we.useRef(w);O.current=w;const H=we.useRef(n);H.current=n;const $=we.useRef(a);$.current=a;const V=we.useRef(f);V.current=f;const K=we.useRef(Ya(f)),W=we.useCallback(ct=>{P.current<1||P.current>=O.current||L(Tt=>{const Dt=[...Tt];Dt[ct]=!Dt[ct];const it=q.current[ct];if(it){const gt=it.mesh.material,Ct=Dt[ct]?ox:Ld;gt.forEach(Pt=>Pt.color.set(Ct))}return Dt})},[]),z=we.useRef(u);z.current=u;const G=we.useCallback(()=>{z.current?.(),U(0),P.current=0,S([]);const ct=Array(c).fill(!1);L(ct),B.current=ct,q.current.forEach(Tt=>{Tt.mesh.material.forEach(it=>it.color.set(Ld))}),g.current()},[c]);we.useEffect(()=>{const ct=h.current;if(!ct)return;const Tt=typeof window<"u"&&window.matchMedia("(min-width: 1024px)").matches,Dt=Tt?u2:f2,it=Dt/2,gt=Tt?h2:d2,Ct=new Z1;Ct.background=new Pe(rx);const Pt=new zu(-1,1,1,-1,.1,80);Pt.position.set(0,14,0),Pt.up.set(0,0,-1),Pt.lookAt(0,0,0);const Nt=new r2({antialias:!0,alpha:!0});Nt.setPixelRatio(Math.min(window.devicePixelRatio,2)),Nt.outputColorSpace=jn,Nt.toneMapping=Yi,Nt.shadowMap.enabled=!0,Nt.shadowMap.type=yx,Nt.domElement.style.width="100%",Nt.domElement.style.height="100%",Nt.domElement.style.display="block",Nt.domElement.style.touchAction="manipulation",Nt.domElement.style.userSelect="none",ct.appendChild(Nt.domElement);const ye=new oT(16777215,.85);Ct.add(ye);const De=new rT(16777215,1.1);De.position.set(3,18,-2),De.castShadow=!0,De.shadow.mapSize.width=2048,De.shadow.mapSize.height=2048,De.shadow.camera.near=1,De.shadow.camera.far=40,De.shadow.camera.left=-30,De.shadow.camera.right=30,De.shadow.camera.top=20,De.shadow.camera.bottom=-20,Ct.add(De);const ue=new ji(new Gl(1,1),new N_({color:rx,roughness:.96,metalness:0}));ue.rotation.x=-Math.PI/2,ue.position.y=0,ue.receiveShadow=!0,Ct.add(ue);const ne=new Ib({gravity:new R(0,-40,0),allowSleep:!0});ne.broadphase=new vo(ne),ne.solver.iterations=Ya("normal").solverIterations;const be=new Du("table"),le=new Du("die"),en=new yo(le,be,{friction:.24,restitution:Ya("normal").tableRestitution}),X=new yo(le,le,{friction:.3,restitution:Ya("normal").diceRestitution});ne.addContactMaterial(en),ne.addContactMaterial(X);const je=new Vt({type:Vt.STATIC,shape:new SE,material:be});je.quaternion.setFromEuler(-Math.PI/2,0,0),ne.addBody(je);const Se=new Yp(Dt,Dt,Dt,6,.16),he=[];for(let pt=0;pt<c;pt+=1){const ut=jp.map(Kt=>new N_({map:g2(Kt),color:Ld,roughness:.38,metalness:.02})),vt=new ji(Se,ut);vt.castShadow=!0,vt.receiveShadow=!0,vt.userData.dieIndex=pt,Ct.add(vt);const bt=new Vt({mass:1,shape:new gr(new R(it,it,it)),material:le,sleepSpeedLimit:Ya("normal").sleepSpeedLimit,sleepTimeLimit:Ya("normal").sleepTimeLimit});bt.linearDamping=Ya("normal").linearDamping,bt.angularDamping=Ya("normal").angularDamping,bt.allowSleep=!0,ne.addBody(bt),he.push({mesh:vt,body:bt,locked:!1})}q.current=he;const qt=new c2,I=new Set(he.map(pt=>pt.body)),A=()=>qt.unlock();window.addEventListener("pointerdown",A,{passive:!0}),window.addEventListener("touchstart",A,{passive:!0}),window.addEventListener("click",A,{passive:!0}),he.forEach(pt=>{pt.body.addEventListener("collide",ut=>{const{body:vt,contact:bt}=ut,Kt=Math.abs(bt.getImpactVelocityAlongNormal());I.has(vt)?qt.playImpact("dice",Kt):qt.playImpact("table",Kt)})});const J=new uT,_t=new Be,Et=pt=>{qt.unlock();const ut=Nt.domElement.getBoundingClientRect();_t.x=(pt.clientX-ut.left)/ut.width*2-1,_t.y=-((pt.clientY-ut.top)/ut.height)*2+1,J.setFromCamera(_t,Pt);const vt=he.map(Kt=>Kt.mesh),bt=J.intersectObjects(vt,!1);if(bt.length>0){const se=bt[0].object.userData.dieIndex;se!==void 0&&W(se)}};Nt.domElement.addEventListener("pointerdown",Et);let ht={minX:-6,maxX:6,minZ:-3,maxZ:3,depth:6},Xt=[];const Ut=(pt,ut)=>{Xt.forEach(Le=>ne.removeBody(Le)),Xt=[];const vt=new gr(new R(cr/2,Os/2,ut/2)),bt=new gr(new R(pt/2,Os/2,cr/2));[{shape:vt,position:new R(-pt/2-cr/2,Os/2,0)},{shape:vt,position:new R(pt/2+cr/2,Os/2,0)},{shape:bt,position:new R(0,Os/2,-ut/2-cr/2)},{shape:bt,position:new R(0,Os/2,ut/2+cr/2)}].forEach(({shape:Le,position:Zn})=>{const li=new Vt({type:Vt.STATIC,shape:Le,material:be});li.position.copy(Zn),ne.addBody(li),Xt.push(li)});const se=Dt*1.8,ce=new gr(new R(se/2,Os/2,cr/2)),Je=pt/2,Ve=ut/2;[{x:-Je,z:-Ve,angle:Math.PI/4},{x:Je,z:-Ve,angle:-Math.PI/4},{x:-Je,z:Ve,angle:-Math.PI/4},{x:Je,z:Ve,angle:Math.PI/4}].forEach(({x:Le,z:Zn,angle:li})=>{const Hn=new Vt({type:Vt.STATIC,shape:ce,material:be});Hn.position.set(Le,Os/2,Zn),Hn.quaternion.setFromEuler(0,li,0),ne.addBody(Hn),Xt.push(Hn)})},Wt=()=>{const pt=ct.clientWidth,ut=ct.clientHeight;if(!pt||!ut)return;const vt=pt/ut,bt=gt,Kt=bt*vt;Pt.left=-Kt,Pt.right=Kt,Pt.top=bt,Pt.bottom=-bt,Pt.updateProjectionMatrix();const se=Kt*2,ce=bt*2;ue.scale.set(se,ce,1),ht={minX:-se/2,maxX:se/2,minZ:-ce/2,maxZ:ce/2,width:se,depth:ce},Ut(se,ce),Nt.setSize(pt,ut,!0),Nt.render(Ct,Pt)},ae=new ResizeObserver(Wt);ae.observe(ct),Wt();let At=0,wt=0;const Gt=()=>{he.forEach(pt=>{pt.body.type=Vt.STATIC,pt.body.velocity.setZero(),pt.body.angularVelocity.setZero(),pt.body.position.set(0,-10,0),pt.mesh.position.set(0,-10,0)})},Ft=()=>{if(v.current||P.current>=O.current)return;const pt=Ya(V.current);K.current=pt,ne.solver.iterations=pt.solverIterations,ne.gravity.set(0,pt.gravityY,0),en.restitution=pt.tableRestitution,X.restitution=pt.diceRestitution,qt.unlock(),v.current=!0,M(!0),$.current?.(),At=0,wt=0;const ut=B.current,vt=P.current===0,bt=ht.minX+Dt*.8,Kt=ht.minX+Dt,se=ht.maxX-Dt,ce=ht.minZ+Dt,Je=ht.maxZ-Dt,Ve=[];let oi=0;he.forEach((Le,Zn)=>{if(Le.body.sleepSpeedLimit=pt.sleepSpeedLimit,Le.body.sleepTimeLimit=pt.sleepTimeLimit,Le.body.linearDamping=pt.linearDamping,Le.body.angularDamping=pt.angularDamping,!vt&&ut[Zn]){Le.body.type=Vt.STATIC,Le.body.velocity.setZero(),Le.body.angularVelocity.setZero();return}Le.body.type=Vt.DYNAMIC,Le.body.mass=1,Le.body.updateMassProperties(),Le.body.wakeUp(),Le.body.velocity.setZero(),Le.body.angularVelocity.setZero(),Le.body.force.setZero(),Le.body.torque.setZero();const li=.56,Hn=pt.faceUpDrop?_2({minX:Kt,maxX:se,minZ:ce,maxZ:Je,existing:Ve,minDistance:Dt*.95}):null,ns=pt.faceUpDrop?Hn.x:bt+oi*li+hn(-.1,.1),ci=pt.spawnYBase+oi*pt.spawnYStep,Kn=pt.faceUpDrop?ci+hn(-.6,.8):ci,ln=pt.faceUpDrop?Hn.z:hn(-ht.depth*.25,ht.depth*.25);if(pt.faceUpDrop&&Hn&&Ve.push(Hn),Le.body.position.set(ns,Kn,ln),pt.faceUpDrop)x2(Le.body,v2());else{const fi=new si;fi.setFromEuler(hn(0,Math.PI),hn(0,Math.PI),hn(0,Math.PI),"XYZ"),Le.body.quaternion.copy(fi)}const Sn=pt.faceUpDrop?(()=>{const fi=-ns,Zi=-ln,va=Math.hypot(fi,Zi)||1,is=hn(.9,2.4),Ki=Math.random()<.5?-1:1,Is=Ki*(-Zi/va),Qi=Ki*(fi/va),Oi=hn(.15,1.1),_a=hn(-.45,.45),Ji=hn(-.45,.45);return new R(fi/va*is+Is*Oi+_a,hn(pt.impulseYMin,pt.impulseYMax),Zi/va*is+Qi*Oi+Ji)})():new R(hn(pt.impulseXMin,pt.impulseXMax),hn(pt.impulseYMin,pt.impulseYMax),hn(-1.2,1.2)),ui=new R(hn(-.2,.2),hn(-.08,.08),hn(-.2,.2));Le.body.applyImpulse(Sn,ui),oi++})};g.current=Ft,_.current=Gt,Gt();const Lt=pt=>{if(pt.code!=="Space")return;const ut=pt.target;ut?.tagName==="INPUT"||ut?.tagName==="TEXTAREA"||ut?.isContentEditable||(pt.preventDefault(),Ft())};window.addEventListener("keydown",Lt);const me=new cT,Z=1/60;let Ot=0;const Rt=()=>{const pt=Math.min(me.getDelta(),.04);if(ne.step(Z,pt,4),he.forEach(ut=>{S2(ut.body,ht,it),ut.mesh.position.set(ut.body.position.x,ut.body.position.y,ut.body.position.z),ut.mesh.quaternion.set(ut.body.quaternion.x,ut.body.quaternion.y,ut.body.quaternion.z,ut.body.quaternion.w)}),v.current){const ut=K.current;wt+=pt;const vt=B.current,bt=()=>{v.current=!1,M(!1);const se=he.map(Ve=>y2(Ve.body));S(se);const ce=P.current+1;if(ce>=O.current){const Ve=Array(c).fill(!0);L(Ve),B.current=Ve,he.forEach(oi=>{oi.mesh.material.forEach(Zn=>Zn.color.set(ox))})}U(Ve=>Ve+1);const Je=se.reduce((Ve,oi)=>Ve+oi,0);H.current?.({total:Je,values:se,attempt:ce})};if(ut.maxRollSeconds!=null&&wt>=ut.maxRollSeconds){bt(),At=0,Nt.render(Ct,Pt),Ot=window.requestAnimationFrame(Rt);return}he.every((se,ce)=>{if(vt[ce]||se.body.sleepState===Vt.SLEEPING)return!0;const Je=se.body.velocity.lengthSquared()<ut.linearStillThreshold,Ve=se.body.angularVelocity.lengthSquared()<ut.angularStillThreshold;return Je&&Ve&&se.body.position.y<=it+.08})?(At+=pt,At>ut.settleHoldSeconds&&bt()):At=0}Nt.render(Ct,Pt),Ot=window.requestAnimationFrame(Rt)};return Rt(),()=>{window.cancelAnimationFrame(Ot),ae.disconnect(),window.removeEventListener("keydown",Lt),window.removeEventListener("pointerdown",A),window.removeEventListener("touchstart",A),window.removeEventListener("click",A),Nt.domElement.removeEventListener("pointerdown",Et),qt.dispose(),ct.removeChild(Nt.domElement),Xt.forEach(pt=>ne.removeBody(pt)),ne.removeBody(je),he.forEach(pt=>{ne.removeBody(pt.body),Ct.remove(pt.mesh)}),ue.geometry.dispose(),ue.material.dispose(),Ct.remove(ue),Se.dispose(),he.forEach(pt=>{pt.mesh.material.forEach(ut=>{ut.map?.dispose(),ut.dispose()})}),Nt.dispose()}},[c,W]);const Q=b.reduce((ct,Tt)=>ct+Tt,0),mt=T>=w&&!y,yt=!y&&(T<w||o),F=T>=1&&T<w,j=b.map((ct,Tt)=>({value:ct,index:Tt,isLocked:C[Tt]})).sort((ct,Tt)=>ct.value-Tt.value||ct.index-Tt.index);return zt.jsxs("div",{className:"flex h-full w-full flex-col",children:[zt.jsx("div",{className:"relative min-h-0 flex-1 overflow-hidden rounded-none bg-[#1a7a4a]",children:zt.jsx("div",{ref:h,className:"h-full w-full"})}),zt.jsxs("div",{className:"relative flex items-center justify-between px-2 py-0",style:{fontFamily:"'Inter', sans-serif"},children:[zt.jsx("div",{className:"relative flex h-7 items-center gap-2.5",children:b.length>0?zt.jsxs(zt.Fragment,{children:[zt.jsx("div",{className:"flex items-center gap-1",children:j.map(ct=>zt.jsx("button",{type:"button",onClick:()=>F&&W(ct.index),className:`grid h-6 w-6 select-none place-items-center rounded-md border text-[11px] font-bold shadow-sm transition-colors ${ct.isLocked?"border-red-400 bg-red-100 text-red-800":"border-slate-300 bg-white text-slate-800"} ${F?"cursor-pointer touch-manipulation hover:border-slate-400 active:scale-95":""}`,"aria-label":`Die ${ct.index+1}`,children:ct.value},ct.index))}),T>0&&zt.jsx("span",{className:"ml-1 inline-flex h-5 w-[58px] items-center justify-center rounded-full bg-slate-200 px-1 text-[10px] font-bold tabular-nums text-slate-600",children:mt&&!o?"PLACE":`${T} of ${w}`}),zt.jsx("div",{className:"pointer-events-none absolute top-full left-0 mt-0.5 flex items-center gap-2",children:y?zt.jsx("span",{className:"text-[11px] font-medium text-slate-500",children:"Rolling..."}):zt.jsxs(zt.Fragment,{children:[zt.jsx("span",{className:"text-[11px] font-medium text-slate-400",children:"="}),zt.jsx("span",{className:"text-base font-bold leading-none text-slate-800",children:Q})]})})]}):zt.jsxs(zt.Fragment,{children:[zt.jsx("div",{className:"flex items-center gap-1",children:Array.from({length:5}).map((ct,Tt)=>zt.jsx("span",{className:"grid h-6 w-6 place-items-center rounded-md border border-transparent text-[11px]"},Tt))}),zt.jsx("div",{className:"pointer-events-none absolute top-full left-0 mt-0.5 flex items-center gap-2",children:y?zt.jsx("span",{className:"text-[11px] font-medium text-slate-500",children:"Rolling..."}):zt.jsxs(zt.Fragment,{children:[zt.jsx("span",{className:"text-[11px] font-medium text-transparent",children:"="}),zt.jsx("span",{className:"text-base font-bold leading-none text-transparent",children:"00"})]})})]})}),zt.jsx("button",{type:"button",onClick:()=>p?.(f==="fast"?"normal":"fast"),className:"absolute right-[4.5rem] top-1/2 inline-flex h-6 min-w-[58px] -translate-y-1/2 items-center justify-center rounded-full border border-slate-300 bg-white px-3 text-[10px] font-semibold tracking-[0.05em] text-slate-700 uppercase shadow-sm transition-colors hover:border-slate-400 hover:text-slate-900",style:{fontFamily:"'Inter', sans-serif"},"aria-label":`Switch roll speed mode to ${f==="fast"?"slow":"fast"}`,title:`Switch to ${f==="fast"?"SLOW":"FAST"}`,children:f==="fast"?"SLOW":"FAST"}),(!mt||o)&&zt.jsx("button",{"aria-disabled":!yt,onClick:()=>{yt&&(o?G():g.current())},className:`absolute right-2 -top-6 z-20 h-14 w-14 touch-manipulation appearance-none rounded-full border-2 text-center text-[10px] font-bold uppercase tracking-widest shadow-md transition-colors ${yt?"cursor-pointer border-red-600 bg-red-500 text-white hover:bg-red-500":"cursor-not-allowed border-red-300 bg-red-300 text-white"}`,style:{WebkitTapHighlightColor:"transparent",boxShadow:"0 0 0 2px rgba(0,0,0,0.16), 0 8px 16px rgba(0,0,0,0.28)"},children:zt.jsx("span",{className:"text-[11px] font-extrabold",style:{textShadow:"0 1px 1px rgba(0,0,0,0.28)"},children:"PLAY"})})]})]})}function g2(c){const t=document.createElement("canvas");t.width=256,t.height=256;const n=t.getContext("2d");if(!n){const u=new D_(t);return u.colorSpace=jn,u}n.fillStyle="#ffffff",n.fillRect(0,0,t.width,t.height),n.lineWidth=3,n.strokeStyle="#e2e8f0",n.strokeRect(4,4,t.width-8,t.height-8);const a=26,r=p2[c];n.fillStyle="#000000",r.forEach(([u,f])=>{const p=t.width/2+u*112,h=t.height/2+f*112;n.beginPath(),n.arc(p,h,a,0,Math.PI*2),n.fill()});const o=new D_(t);return o.colorSpace=jn,o.anisotropy=4,o.minFilter=Ps,o.magFilter=In,o.needsUpdate=!0,o}function hn(c,t){return c+Math.random()*(t-c)}function v2(){return 1+Math.floor(Math.random()*6)}function _2({minX:c,maxX:t,minZ:n,maxZ:a,existing:r,minDistance:o}){for(let f=0;f<18;f+=1){const p={x:hn(c,t),z:hn(n,a)};if(!r.some(g=>Math.hypot(g.x-p.x,g.z-p.z)<o))return p}return{x:hn(c,t),z:hn(n,a)}}function x2(c,t){const n=jp.indexOf(t),a=ny[n>=0?n:0],r=new lt(a.x,a.y,a.z),o=new lt(0,1,0),u=new xr().setFromUnitVectors(r,o),p=new xr().setFromAxisAngle(o,hn(0,Math.PI*2)).multiply(u);c.quaternion.set(p.x,p.y,p.z,p.w)}function y2(c){const t=jp;let n=-1/0,a=1;const r=new R;for(let o=0;o<6;o++)c.quaternion.vmult(ny[o],r),r.y>n&&(n=r.y,a=t[o]);return a}function S2(c,t,n){const a=t.minX+n,r=t.maxX-n,o=t.minZ+n,u=t.maxZ-n;c.position.x<a?(c.position.x=a,c.velocity.x=Math.abs(c.velocity.x)*.55):c.position.x>r&&(c.position.x=r,c.velocity.x=-Math.abs(c.velocity.x)*.55),c.position.z<o?(c.position.z=o,c.velocity.z=Math.abs(c.velocity.z)*.55):c.position.z>u&&(c.position.z=u,c.velocity.z=-Math.abs(c.velocity.z)*.55)}const Od=["down","up","desordem","seco"],M2=[...hr],E2=[...hr].reverse(),b2={down:{},up:{},desordem:{},seco:{}};function T2(){const[c,t]=we.useState(b2),[n,a]=we.useState(null),[r,o]=we.useState(!1),[u,f]=we.useState(null),[p,h]=we.useState("normal"),g=n?.attempt??0,_=we.useMemo(()=>{const L=["down","up","desordem"].every(P=>hr.every(q=>c[P][q]!=null)),B=hr.some(P=>c.seco[P]==null);return L&&B},[c]),v=we.useMemo(()=>{const C=new Set;for(const L of Od){const B=c[L];if(L==="down"){const P=M2.find(q=>B[q]==null);P&&C.add(`${L}:${P}`);continue}if(L==="up"){const P=E2.find(q=>B[q]==null);P&&C.add(`${L}:${P}`);continue}if(L==="desordem"){hr.forEach(P=>{B[P]==null&&C.add(`${L}:${P}`)});continue}L==="seco"&&g===1&&hr.forEach(P=>{B[P]==null&&C.add(`${L}:${P}`)})}return C},[c,g]),y=we.useMemo(()=>Od.every(C=>hr.every(L=>c[C][L]!=null)),[c]),M=we.useMemo(()=>Od.reduce((C,L)=>C+cx(c[L]).combined,0),[c]),b=we.useCallback(C=>{a(C),o(!0),f(null)},[]),S=we.useCallback(()=>{o(!1),f(null)},[]),x=we.useCallback((C,L)=>{if(!r||!n)return;const B=`${C}:${L}`;if(!v.has(B)||c[C][L]!=null)return;if(u?.columnId===C&&u.rowId===L){f(null);return}const P=A2(L,n.values,c[C]);f({columnId:C,rowId:L,value:P})},[r,v,u,n,c]),T=we.useCallback(()=>{if(!u)return;const{columnId:C,rowId:L,value:B}=u;t(P=>({...P,[C]:{...P[C],[L]:B}})),f(null),o(!1),a(null)},[u]),U=we.useCallback(()=>{t({down:{},up:{},desordem:{},seco:{}}),a(null),o(!1),f(null)},[]);return zt.jsx("main",{className:"min-h-screen touch-manipulation bg-white px-0 py-0 sm:px-8 sm:py-8",children:zt.jsxs("section",{className:"mx-auto flex w-full max-w-[1400px] flex-col gap-0 lg:flex-row lg:items-start lg:gap-8",children:[zt.jsx("div",{className:"order-2 ml-[5px] flex flex-col items-start gap-0 pl-2 lg:order-1 lg:ml-0 lg:shrink-0 lg:items-start lg:gap-5 lg:pl-0",children:zt.jsx(_M,{sheet:c,openCells:v,clickable:r,pendingPlacement:u,onCellClick:x})}),zt.jsx("div",{className:"order-1 min-w-0 flex-1 lg:order-2 lg:sticky lg:top-8 lg:pt-[30px]",children:y?zt.jsxs("div",{className:"flex min-h-[320px] flex-col items-center justify-center gap-6 rounded-3xl border border-[#ccc8c0] bg-[#f7f4ef] px-8 py-10 lg:h-[60vh]",style:{fontFamily:"'Inter', sans-serif"},children:[zt.jsx("p",{className:"text-[11px] font-bold uppercase tracking-[0.22em] text-[#8a8070]",children:"Game Over"}),zt.jsx("p",{className:"text-7xl font-bold leading-none text-[#2d2820]",style:{fontFamily:"'Kalam', cursive"},children:M}),zt.jsx("p",{className:"text-sm text-[#8a8070]",children:"final score"}),zt.jsx("button",{onClick:U,className:"mt-2 rounded-full border border-[#ccc8c0] bg-white px-8 py-2.5 text-xs font-bold uppercase tracking-widest text-[#5a5448] shadow-sm transition hover:bg-[#f0ece4]",children:"New Game"})]}):zt.jsx("div",{className:"h-[24vh] min-h-[150px] min-w-0 sm:h-[34vh] lg:h-[421px]",children:zt.jsx(m2,{diceCount:5,maxAttempts:3,onDiceResult:b,onRollStart:S,forceSingleAttempt:_,hasPendingPlacement:u!=null,onCommitPlacement:T,rollSpeedMode:p,onRollSpeedModeChange:h})})})]})})}function A2(c,t,n){const a=w2(t),r=t.reduce((o,u)=>o+u,0);switch(c){case"ones":return go(a,1);case"twos":return go(a,2);case"threes":return go(a,3);case"fours":return go(a,4);case"fives":return go(a,5);case"sixes":return go(a,6);case"quadra":{const o=a.findIndex((u,f)=>f>0&&u>=4);return o>0?20+4*o:0}case"full":return C2(a)?30+r:0;case"seqLow":return lx(t,[1,2,3,4,5])?35+r:0;case"seqHigh":return lx(t,[2,3,4,5,6])?40+r:0;case"min":{const o=n?.max;return o==null||r<o?r:0}case"max":{const o=n?.min;return o==null||r>o?r:0}case"yam":return R2(a,5)?50+r:0}}function w2(c){const t=Array(7).fill(0);return c.forEach(n=>{n>=1&&n<=6&&(t[n]+=1)}),t}function go(c,t){return c[t]*t}function R2(c,t){return c.some(n=>n===t)}function C2(c){const t=c.filter(n=>n>0);return t.length===2&&t.includes(3)&&t.includes(2)}function lx(c,t){const n=[...new Set(c)].sort((a,r)=>a-r);return n.length!==t.length?!1:t.every((a,r)=>n[r]===a)}gM.createRoot(document.getElementById("root")).render(zt.jsx(we.StrictMode,{children:zt.jsx(T2,{})}));
