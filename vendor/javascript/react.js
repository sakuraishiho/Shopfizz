// react@19.0.0 downloaded from https://ga.jspm.io/npm:react@19.0.0/index.js

import e from"process";var t={};var n=e;var r=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),s=Symbol.for("react.consumer"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),m=Symbol.iterator;function getIteratorFn(e){if(null===e||"object"!==typeof e)return null;e=m&&e[m]||e["@@iterator"];return"function"===typeof e?e:null}var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,v={};function Component$1(e,t,n){this.props=e;this.context=t;this.refs=v;this.updater=n||d}Component$1.prototype.isReactComponent={};Component$1.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Component$1.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ComponentDummy(){}ComponentDummy.prototype=Component$1.prototype;function PureComponent$1(e,t,n){this.props=e;this.context=t;this.refs=v;this.updater=n||d}var _=PureComponent$1.prototype=new ComponentDummy;_.constructor=PureComponent$1;h(_,Component$1.prototype);_.isPureReactComponent=!0;var E=Array.isArray,b={H:null,A:null,T:null,S:null},S=Object.prototype.hasOwnProperty;function ReactElement(e,t,n,o,u,a){n=a.ref;return{$$typeof:r,type:e,key:t,ref:void 0!==n?n:null,props:a}}function cloneAndReplaceKey(e,t){return ReactElement(e.type,t,void 0,void 0,void 0,e.props)}function isValidElement$1(e){return"object"===typeof e&&null!==e&&e.$$typeof===r}function escape(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}var C=/\/+/g;function getElementKey(e,t){return"object"===typeof e&&null!==e&&null!=e.key?escape(""+e.key):t.toString(36)}function noop$1(){}function resolveThenable(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch("string"===typeof e.status?e.then(noop$1,noop$1):(e.status="pending",e.then((function(t){"pending"===e.status&&(e.status="fulfilled",e.value=t)}),(function(t){"pending"===e.status&&(e.status="rejected",e.reason=t)}))),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function mapIntoArray(e,t,n,u,a){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var s=!1;if(null===e)s=!0;else switch(i){case"bigint":case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case r:case o:s=!0;break;case y:return s=e._init,mapIntoArray(s(e._payload),t,n,u,a)}}if(s)return a=a(e),s=""===u?"."+getElementKey(e,0):u,E(a)?(n="",null!=s&&(n=s.replace(C,"$&/")+"/"),mapIntoArray(a,t,n,"",(function(e){return e}))):null!=a&&(isValidElement$1(a)&&(a=cloneAndReplaceKey(a,n+(null==a.key||e&&e.key===a.key?"":(""+a.key).replace(C,"$&/")+"/")+s)),t.push(a)),1;s=0;var c=""===u?".":u+":";if(E(e))for(var l=0;l<e.length;l++)u=e[l],i=c+getElementKey(u,l),s+=mapIntoArray(u,t,n,i,a);else if(l=getIteratorFn(e),"function"===typeof l)for(e=l.call(e),l=0;!(u=e.next()).done;)u=u.value,i=c+getElementKey(u,l++),s+=mapIntoArray(u,t,n,i,a);else if("object"===i){if("function"===typeof e.then)return mapIntoArray(resolveThenable(e),t,n,u,a);t=String(e);throw Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return s}function mapChildren(e,t,n){if(null==e)return e;var r=[],o=0;mapIntoArray(e,r,"","",(function(e){return t.call(n,e,o++)}));return r}function lazyInitializer(e){if(-1===e._status){var t=e._result;t=t();t.then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)}));-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var R="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof n&&"function"===typeof n.emit){n.emit("uncaughtException",e);return}console.error(e)};function noop(){}t.Children={map:mapChildren,forEach:function(e,t,n){mapChildren(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;mapChildren(e,(function(){t++}));return t},toArray:function(e){return mapChildren(e,(function(e){return e}))||[]},only:function(e){if(!isValidElement$1(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};t.Component=Component$1;t.Fragment=u;t.Profiler=i;t.PureComponent=PureComponent$1;t.StrictMode=a;t.Suspense=f;t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=b;t.act=function(){throw Error("act(...) is not supported in production builds of React.")};t.cache=function(e){return function(){return e.apply(null,arguments)}};t.cloneElement=function(e,t,n){if(null===e||void 0===e)throw Error("The argument must be a React element, but you passed "+e+".");var r=h({},e.props),o=e.key,u=void 0;if(null!=t)for(a in void 0!==t.ref&&(u=void 0),void 0!==t.key&&(o=""+t.key),t)!S.call(t,a)||"key"===a||"__self"===a||"__source"===a||"ref"===a&&void 0===t.ref||(r[a]=t[a]);var a=arguments.length-2;if(1===a)r.children=n;else if(1<a){for(var i=Array(a),s=0;s<a;s++)i[s]=arguments[s+2];r.children=i}return ReactElement(e.type,o,void 0,void 0,u,r)};t.createContext=function(e){e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null};e.Provider=e;e.Consumer={$$typeof:s,_context:e};return e};t.createElement=function(e,t,n){var r,o={},u=null;if(null!=t)for(r in void 0!==t.key&&(u=""+t.key),t)S.call(t,r)&&"key"!==r&&"__self"!==r&&"__source"!==r&&(o[r]=t[r]);var a=arguments.length-2;if(1===a)o.children=n;else if(1<a){for(var i=Array(a),s=0;s<a;s++)i[s]=arguments[s+2];o.children=i}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)void 0===o[r]&&(o[r]=a[r]);return ReactElement(e,u,void 0,void 0,null,o)};t.createRef=function(){return{current:null}};t.forwardRef=function(e){return{$$typeof:l,render:e}};t.isValidElement=isValidElement$1;t.lazy=function(e){return{$$typeof:y,_payload:{_status:-1,_result:e},_init:lazyInitializer}};t.memo=function(e,t){return{$$typeof:p,type:e,compare:void 0===t?null:t}};t.startTransition=function(e){var t=b.T,n={};b.T=n;try{var r=e(),o=b.S;null!==o&&o(n,r);"object"===typeof r&&null!==r&&"function"===typeof r.then&&r.then(noop,R)}catch(e){R(e)}finally{b.T=t}};t.unstable_useCacheRefresh=function(){return b.H.useCacheRefresh()};t.use=function(e){return b.H.use(e)};t.useActionState=function(e,t,n){return b.H.useActionState(e,t,n)};t.useCallback=function(e,t){return b.H.useCallback(e,t)};t.useContext=function(e){return b.H.useContext(e)};t.useDebugValue=function(){};t.useDeferredValue=function(e,t){return b.H.useDeferredValue(e,t)};t.useEffect=function(e,t){return b.H.useEffect(e,t)};t.useId=function(){return b.H.useId()};t.useImperativeHandle=function(e,t,n){return b.H.useImperativeHandle(e,t,n)};t.useInsertionEffect=function(e,t){return b.H.useInsertionEffect(e,t)};t.useLayoutEffect=function(e,t){return b.H.useLayoutEffect(e,t)};t.useMemo=function(e,t){return b.H.useMemo(e,t)};t.useOptimistic=function(e,t){return b.H.useOptimistic(e,t)};t.useReducer=function(e,t,n){return b.H.useReducer(e,t,n)};t.useRef=function(e){return b.H.useRef(e)};t.useState=function(e){return b.H.useState(e)};t.useSyncExternalStore=function(e,t,n){return b.H.useSyncExternalStore(e,t,n)};t.useTransition=function(){return b.H.useTransition()};t.version="19.0.0";const $=t.Children,g=t.Component,w=t.Fragment,A=t.Profiler,I=t.PureComponent,H=t.StrictMode,j=t.Suspense,k=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,T=t.act,O=t.cache,x=t.cloneElement,P=t.createContext,N=t.createElement,V=t.createRef,D=t.forwardRef,U=t.isValidElement,z=t.lazy,L=t.memo,F=t.startTransition,K=t.unstable_useCacheRefresh,M=t.use,q=t.useActionState,G=t.useCallback,W=t.useContext,Y=t.useDebugValue,B=t.useDeferredValue,J=t.useEffect,Q=t.useId,X=t.useImperativeHandle,Z=t.useInsertionEffect,ee=t.useLayoutEffect,te=t.useMemo,ne=t.useOptimistic,re=t.useReducer,oe=t.useRef,ue=t.useState,ae=t.useSyncExternalStore,ie=t.useTransition,se=t.version;export{$ as Children,g as Component,w as Fragment,A as Profiler,I as PureComponent,H as StrictMode,j as Suspense,k as __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,T as act,O as cache,x as cloneElement,P as createContext,N as createElement,V as createRef,t as default,D as forwardRef,U as isValidElement,z as lazy,L as memo,F as startTransition,K as unstable_useCacheRefresh,M as use,q as useActionState,G as useCallback,W as useContext,Y as useDebugValue,B as useDeferredValue,J as useEffect,Q as useId,X as useImperativeHandle,Z as useInsertionEffect,ee as useLayoutEffect,te as useMemo,ne as useOptimistic,re as useReducer,oe as useRef,ue as useState,ae as useSyncExternalStore,ie as useTransition,se as version};
