var e=function(e){return{get:function(t){return e.get(t)},set:function(t,n){return e.set(t,n),n}}},t=/([^\s\\>"'=]+)\s*=\s*(['"]?)$/,n=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i,r=/<[a-z][^>]+$/i,o=/>[^<>]*$/,i=/<([a-z]+[a-z0-9:._-]*)([^>]*?)(\/>)/gi,a=/\s+$/,s=function e(t,n){return 0<n--&&(r.test(t[n])||!o.test(t[n])&&e(t,n))},c=function(e,t,r){return n.test(t)?e:"<".concat(t).concat(r.replace(a,""),"></").concat(t,">")},u=function(e,n,r){for(var o=[],a=e.length,u=function(r){var i=e[r-1];o.push(t.test(i)&&s(e,r)?i.replace(t,(function(e,t,o){return"".concat(n).concat(r-1,"=").concat(o||'"').concat(t).concat(o?"":'"')})):"".concat(i,"\x3c!--").concat(n).concat(r-1,"--\x3e"))},l=1;l<a;l++)u(l);o.push(e[a-1]);var f=o.join("").trim();return r?f:f.replace(i,c)},l=Array.isArray,f=[],h=f.indexOf,d=f.slice,v=function(e,t){return 111===e.nodeType?1/t<0?t?function(e){var t=e.firstChild,n=e.lastChild,r=document.createRange();return r.setStartAfter(t),r.setEndAfter(n),r.deleteContents(),t}(e):e.lastChild:t?e.valueOf():e.firstChild:e},p=function(e){var t="fragment",n="template",r="content"in i(n)?function(e){var t=i(n);return t.innerHTML=e,t.content}:function(e){var r=i(t),a=i(n),s=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(e)){var c=RegExp.$1;a.innerHTML="<table>"+e+"</table>",s=a.querySelectorAll(c)}else a.innerHTML=e,s=a.childNodes;return o(r,s),r};return function(e,t){return("svg"===t?a:r)(e)};function o(e,t){for(var n=t.length;n--;)e.appendChild(t[0])}function i(n){return n===t?e.createDocumentFragment():e.createElementNS("http://www.w3.org/1999/xhtml",n)}function a(e){var n=i(t),r=i("div");return r.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>",o(n,r.firstChild.childNodes),n}}(document),m=function(e,t){return e.childNodes[t]},g=function(e){for(var t=[],n=e.parentNode;n;)t.push(h.call(n.childNodes,e)),n=(e=n).parentNode;return t},y=document,_=y.createTreeWalker,b=y.importNode,j=1!=b.length,w=j?function(e,t,n){return b.call(document,p(e,t,n),!0)}:p,k=j?function(e){return _.call(document,e,129,null,!1)}:function(e){return _.call(document,e,129)};function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var x=function(e,t,n){return function(e,t,n,r,o){for(var i=n.length,a=t.length,s=i,c=0,u=0,l=null;c<a||u<s;)if(a===c)for(var f=s<i?u?r(n[u-1],-0).nextSibling:r(n[s-u],0):o;u<s;)e.insertBefore(r(n[u++],1),f);else if(s===u)for(;c<a;)l&&l.has(t[c])||e.removeChild(r(t[c],-1)),c++;else if(t[c]===n[u])c++,u++;else if(t[a-1]===n[s-1])a--,s--;else if(t[c]===n[s-1]&&n[u]===t[a-1]){var h=r(t[--a],-1).nextSibling;e.insertBefore(r(n[u++],1),r(t[c++],-1).nextSibling),e.insertBefore(r(n[--s],1),h),t[a]=n[s]}else{if(!l){l=new Map;for(var d=u;d<s;)l.set(n[d],d++)}if(l.has(t[c])){var v=l.get(t[c]);if(u<v&&v<s){for(var p=c,m=1;++p<a&&p<s&&l.get(t[p])===v+m;)m++;if(m>v-u)for(var g=r(t[c],0);u<v;)e.insertBefore(r(n[u++],1),g);else e.replaceChild(r(n[u++],1),r(t[c++],-1))}else c++}else e.removeChild(r(t[c++],-1))}return n}(e.parentNode,t,n,v,e)},E=function(e,t){switch(t[0]){case"?":return function(e,t,n){return function(r){n!==!!r&&((n=!!r)?e.setAttribute(t,""):e.removeAttribute(t))}}(e,t.slice(1),!1);case".":return function(e,t){return"dataset"===t?function(e){var t=e.dataset;return function(e){for(var n in e){var r=e[n];null==r?delete t[n]:t[n]=r}}}(e):function(n){e[t]=n}}(e,t.slice(1));case"o":if("n"===t[1])return function(e,t){var n,r=t.slice(2);return!(t in e)&&t.toLowerCase()in e&&(r=r.toLowerCase()),function(t){var o=l(t)?t:[t,!1];n!==o[0]&&(n&&e.removeEventListener(r,n,o[1]),(n=o[0])&&e.addEventListener(r,n,o[1]))}}(e,t)}switch(t){case"ref":return function(e){return function(t){"function"==typeof t?t(e):t.current=e}}(e);case"aria":return function(e){return function(t){for(var n in t){var r="role"===n?n:"aria-".concat(n),o=t[n];null==o?e.removeAttribute(r):e.setAttribute(r,o)}}}(e)}return function(e,t){var n,r=!0,o=document.createAttributeNS(null,t);return function(t){n!==t&&(null==(n=t)?r||(e.removeAttributeNode(o),r=!0):(o.value=t,r&&(e.setAttributeNodeNS(o),r=!1)))}}(e,t)};function R(e){var t=e.type,n=e.path.reduceRight(m,this);return"node"===t?function(e){var t,n,r=[];return function o(i){switch(S(i)){case"string":case"number":case"boolean":t!==i&&(t=i,n?n.nodeValue=i:n=document.createTextNode(i),r=x(e,r,[n]));break;case"object":case"undefined":if(null==i){t!=i&&(t=i,r=x(e,r,[]));break}if(l(i)){t=i,0===i.length?r=x(e,r,[]):"object"===S(i[0])?r=x(e,r,i):o(String(i));break}"ELEMENT_NODE"in i&&t!==i&&(t=i,r=x(e,r,11===i.nodeType?d.call(i.childNodes):[i]))}}}(n):"attr"===t?E(n,e.name):function(e){var t;return function(n){t!=n&&(t=n,e.textContent=null==n?"":n)}}(n)}var A=e(new WeakMap),C=/^(?:plaintext|script|style|textarea|title|xmp)$/i,O=function(e,t){var n=A.get(t)||A.set(t,function(e,t){for(var n=u(t,"isµ","svg"===e),r=w(n,e),o=k(r),i=[],a=t.length-1,s=0,c="".concat("isµ").concat(s);s<a;){var l=o.nextNode();if(!l)throw"bad template: ".concat(n);if(8===l.nodeType)l.nodeValue===c&&(i.push({type:"node",path:g(l)}),c="".concat("isµ").concat(++s));else{for(;l.hasAttribute(c);)i.push({type:"attr",path:g(l),name:l.getAttribute(c)}),l.removeAttribute(c),c="".concat("isµ").concat(++s);C.test(l.tagName)&&l.textContent.trim()==="\x3c!--".concat(c,"--\x3e")&&(l.textContent="",i.push({type:"text",path:g(l)}),c="".concat("isµ").concat(++s))}}return{content:r,nodes:i}}(e,t)),r=n.content,o=n.nodes,i=b.call(document,r,!0);return{content:i,updates:o.map(R,i)}},N=function(e,t){var n=t.type,r=t.template,o=t.values,i=o.length;M(e,o,i);var a=e.entry;a&&a.template===r&&a.type===n||(e.entry=a=function(e,t){var n=O(e,t);return{type:e,template:t,content:n.content,updates:n.updates,wire:null}}(n,r));for(var s=a,c=s.content,u=s.updates,l=s.wire,f=0;f<i;f++)u[f](o[f]);return l||(a.wire=function(e){var t=e.childNodes,n=t.length;if(n<2)return n?t[0]:e;var r=d.call(t,0);return{ELEMENT_NODE:1,nodeType:111,firstChild:r[0],lastChild:r[n-1],valueOf:function(){if(t.length!==n)for(var o=0;o<n;)e.appendChild(r[o++]);return e}}}(c))},M=function e(t,n,r){for(var o=t.stack,i=0;i<r;i++){var a=n[i];a instanceof T?n[i]=N(o[i]||(o[i]={stack:[],entry:null,wire:null}),a):l(a)?e(o[i]||(o[i]={stack:[],entry:null,wire:null}),a,a.length):o[i]=null}r<o.length&&o.splice(r)};function T(e,t,n){this.type=e,this.template=t,this.values=n}var z=Object.create,P=Object.defineProperties,B=function(t){var n=e(new WeakMap);return P((function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return new T(t,e,r)}),{for:{value:function(e,r){var o=n.get(e)||n.set(e,z(null));return o[r]||(o[r]=function(e){return function(n){for(var r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return N(e,{type:t,template:n,values:o})}}({stack:[],entry:null,wire:null}))}},node:{value:function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return N({stack:[],entry:null,wire:null},{type:t,template:e,values:r}).valueOf()}}})},L=e(new WeakMap),W=function(e,t){var n="function"==typeof t?t():t,r=L.get(e)||L.set(e,{stack:[],entry:null,wire:null}),o=n instanceof T?N(r,n):n;return o!==r.wire&&(r.wire=o,e.textContent="",e.appendChild(o.valueOf())),e},U=B("html"),V=B("svg");function $(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function H(e,t,n){return t&&D(e.prototype,t),n&&D(e,n),e}function q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function I(e){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var K=Object.freeze({});Object.freeze([]);var F,J=Object.assign,G=Object.prototype.hasOwnProperty,Q=function(e,t){return G.call(e,t)},X=Array.isArray,Y=function(e){return"[object Map]"===re(e)},Z=function(e){return"function"==typeof e},ee=function(e){return"symbol"===I(e)},te=function(e){return null!==e&&"object"===I(e)},ne=Object.prototype.toString,re=function(e){return ne.call(e)},oe=function(e){return re(e).slice(8,-1)},ie=function(e){return"string"==typeof e&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e},ae=function(e){var t=Object.create(null);return function(n){return t[n]||(t[n]=e(n))}}((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})),se=function(e,t){return e!==t&&(e==e||t==t)},ce=new WeakMap,ue=[],le=Symbol("iterate"),fe=Symbol("Map key iterate");function he(e){return e&&!0===e._isEffect}function de(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:K;he(e)&&(e=e.raw);var n=me(e,t);return t.lazy||n(),n}function ve(e){e.active&&(ge(e),e.options.onStop&&e.options.onStop(),e.active=!1)}var pe=0;function me(e,t){var n=function(){if(!n.active)return t.scheduler?void 0:e();if(!ue.includes(n)){ge(n);try{return je(),ue.push(n),F=n,e()}finally{ue.pop(),we(),F=ue[ue.length-1]}}};return n.id=pe++,n.allowRecurse=!!t.allowRecurse,n._isEffect=!0,n.active=!0,n.raw=e,n.deps=[],n.options=t,n}function ge(e){var t=e.deps;if(t.length){for(var n=0;n<t.length;n++)t[n].delete(e);t.length=0}}var ye=!0,_e=[];function be(){_e.push(ye),ye=!1}function je(){_e.push(ye),ye=!0}function we(){var e=_e.pop();ye=void 0===e||e}function ke(e,t,n){if(ye&&void 0!==F){var r=ce.get(e);r||ce.set(e,r=new Map);var o=r.get(n);o||r.set(n,o=new Set),o.has(F)||(o.add(F),F.deps.push(o),F.options.onTrack&&F.options.onTrack({effect:F,target:e,type:t,key:n}))}}function Se(e,t,n,r,o,i){var a=ce.get(e);if(a){var s=new Set,c=function(e){e&&e.forEach((function(e){(e!==F||e.allowRecurse)&&s.add(e)}))};if("clear"===t)a.forEach(c);else if("length"===n&&X(e))a.forEach((function(e,t){("length"===t||t>=r)&&c(e)}));else switch(void 0!==n&&c(a.get(n)),t){case"add":X(e)?ie(n)&&c(a.get("length")):(c(a.get(le)),Y(e)&&c(a.get(fe)));break;case"delete":X(e)||(c(a.get(le)),Y(e)&&c(a.get(fe)));break;case"set":Y(e)&&c(a.get(le))}s.forEach((function(a){a.options.onTrigger&&a.options.onTrigger({effect:a,target:e,key:n,type:t,newValue:r,oldValue:o,oldTarget:i}),a.options.scheduler?a.options.scheduler(a):a()}))}}var xe=new Set(Object.getOwnPropertyNames(Symbol).map((function(e){return Symbol[e]})).filter(ee)),Ee=Ne(),Re=Ne(!1,!0),Ae=Ne(!0),Ce=Ne(!0,!0),Oe={};function Ne(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(n,r,o){if("__v_isReactive"===r)return!e;if("__v_isReadonly"===r)return e;if("__v_raw"===r&&o===(e?at:it).get(n))return n;var i=X(n);if(!e&&i&&Q(Oe,r))return Reflect.get(Oe,r,o);var a=Reflect.get(n,r,o);return(ee(r)?xe.has(r):"__proto__"===r||"__v_isRef"===r)?a:(e||ke(n,"get",r),t?a:yt(a)?!i||!ie(r)?a.value:a:te(a)?e?ut(a):st(a):a)}}function Me(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return function(t,n,r,o){var i=t[n];if(!e&&(r=pt(r),!X(t)&&yt(i)&&!yt(r)))return i.value=r,!0;var a=X(t)&&ie(n)?Number(n)<t.length:Q(t,n),s=Reflect.set(t,n,r,o);return t===pt(o)&&(a?se(r,i)&&Se(t,"set",n,r,i):Se(t,"add",n,r)),s}}["includes","indexOf","lastIndexOf"].forEach((function(e){var t=Array.prototype[e];Oe[e]=function(){for(var e=pt(this),n=0,r=this.length;n<r;n++)ke(e,"get",n+"");for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];var s=t.apply(e,i);return-1===s||!1===s?t.apply(e,i.map(pt)):s}})),["push","pop","shift","unshift","splice"].forEach((function(e){var t=Array.prototype[e];Oe[e]=function(){be();for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var o=t.apply(this,n);return we(),o}}));var Te={get:Ee,set:Me(),deleteProperty:function(e,t){var n=Q(e,t),r=e[t],o=Reflect.deleteProperty(e,t);return o&&n&&Se(e,"delete",t,void 0,r),o},has:function(e,t){var n=Reflect.has(e,t);return ee(t)&&xe.has(t)||ke(e,"has",t),n},ownKeys:function(e){return ke(e,"iterate",X(e)?"length":le),Reflect.ownKeys(e)}},ze={get:Ae,set:function(e,t){return console.warn('Set operation on key "'.concat(String(t),'" failed: target is readonly.'),e),!0},deleteProperty:function(e,t){return console.warn('Delete operation on key "'.concat(String(t),'" failed: target is readonly.'),e),!0}},Pe=J({},Te,{get:Re,set:Me(!0)}),Be=J({},ze,{get:Ce}),Le=function(e){return te(e)?st(e):e},We=function(e){return te(e)?ut(e):e},Ue=function(e){return e},Ve=function(e){return Reflect.getPrototypeOf(e)};function $e(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=pt(e=e.__v_raw),i=pt(t);t!==i&&!n&&ke(o,"get",t),!n&&ke(o,"get",i);var a=Ve(o),s=a.has,c=n?We:r?Ue:Le;return s.call(o,t)?c(e.get(t)):s.call(o,i)?c(e.get(i)):void 0}function De(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.__v_raw,r=pt(n),o=pt(e);return e!==o&&!t&&ke(r,"has",e),!t&&ke(r,"has",o),e===o?n.has(e):n.has(e)||n.has(o)}function He(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e=e.__v_raw,!t&&ke(pt(e),"iterate",le),Reflect.get(e,"size",e)}function qe(e){e=pt(e);var t=pt(this),n=Ve(t).has.call(t,e);return t.add(e),n||Se(t,"add",e,e),this}function Ie(e,t){t=pt(t);var n=pt(this),r=Ve(n),o=r.has,i=r.get,a=o.call(n,e);a?ot(n,o,e):(e=pt(e),a=o.call(n,e));var s=i.call(n,e);return n.set(e,t),a?se(t,s)&&Se(n,"set",e,t,s):Se(n,"add",e,t),this}function Ke(e){var t=pt(this),n=Ve(t),r=n.has,o=n.get,i=r.call(t,e);i?ot(t,r,e):(e=pt(e),i=r.call(t,e));var a=o?o.call(t,e):void 0,s=t.delete(e);return i&&Se(t,"delete",e,void 0,a),s}function Fe(){var e=pt(this),t=0!==e.size,n=Y(e)?new Map(e):new Set(e),r=e.clear();return t&&Se(e,"clear",void 0,void 0,n),r}function Je(e,t){return function(n,r){var o=this,i=o.__v_raw,a=pt(i),s=e?We:t?Ue:Le;return!e&&ke(a,"iterate",le),i.forEach((function(e,t){return n.call(r,s(e),s(t),o)}))}}function Ge(e,t,n){return function(){var r=this.__v_raw,o=pt(r),i=Y(o),a="entries"===e||e===Symbol.iterator&&i,s="keys"===e&&i,c=r[e].apply(r,arguments),u=t?We:n?Ue:Le;return!t&&ke(o,"iterate",s?fe:le),q({next:function(){var e=c.next(),t=e.value,n=e.done;return n?{value:t,done:n}:{value:a?[u(t[0]),u(t[1])]:u(t),done:n}}},Symbol.iterator,(function(){return this}))}}function Qe(e){return function(){var t=(arguments.length<=0?void 0:arguments[0])?'on key "'.concat(arguments.length<=0?void 0:arguments[0],'" '):"";return console.warn("".concat(ae(e)," operation ").concat(t,"failed: target is readonly."),pt(this)),"delete"!==e&&this}}var Xe={get:function(e){return $e(this,e)},get size(){return He(this)},has:De,add:qe,set:Ie,delete:Ke,clear:Fe,forEach:Je(!1,!1)},Ye={get:function(e){return $e(this,e,!1,!0)},get size(){return He(this)},has:De,add:qe,set:Ie,delete:Ke,clear:Fe,forEach:Je(!1,!0)},Ze={get:function(e){return $e(this,e,!0)},get size(){return He(this,!0)},has:function(e){return De.call(this,e,!0)},add:Qe("add"),set:Qe("set"),delete:Qe("delete"),clear:Qe("clear"),forEach:Je(!0,!1)};function et(e,t){var n=t?Ye:e?Ze:Xe;return function(t,r,o){return"__v_isReactive"===r?!e:"__v_isReadonly"===r?e:"__v_raw"===r?t:Reflect.get(Q(n,r)&&r in t?n:t,r,o)}}["keys","values","entries",Symbol.iterator].forEach((function(e){Xe[e]=Ge(e,!1,!1),Ze[e]=Ge(e,!0,!1),Ye[e]=Ge(e,!1,!0)}));var tt={get:et(!1,!1)},nt={get:et(!1,!0)},rt={get:et(!0,!1)};function ot(e,t,n){var r=pt(n);if(r!==n&&t.call(e,r)){var o=oe(e);console.warn("Reactive ".concat(o," contains both the raw and reactive ")+"versions of the same object".concat("Map"===o?" as keys":"",", ")+"which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.")}}var it=new WeakMap,at=new WeakMap;function st(e){return e&&e.__v_isReadonly?e:ft(e,!1,Te,tt)}function ct(e){return ft(e,!1,Pe,nt)}function ut(e){return ft(e,!0,ze,rt)}function lt(e){return ft(e,!0,Be,rt)}function ft(e,t,n,r){if(!te(e))return console.warn("value cannot be made reactive: ".concat(String(e))),e;if(e.__v_raw&&(!t||!e.__v_isReactive))return e;var o=t?at:it,i=o.get(e);if(i)return i;var a,s=(a=e).__v_skip||!Object.isExtensible(a)?0:function(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}(oe(a));if(0===s)return e;var c=new Proxy(e,2===s?r:n);return o.set(e,c),c}function ht(e){return dt(e)?ht(e.__v_raw):!(!e||!e.__v_isReactive)}function dt(e){return!(!e||!e.__v_isReadonly)}function vt(e){return ht(e)||dt(e)}function pt(e){return e&&pt(e.__v_raw)||e}function mt(e){return function(e,t,n){Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})}(e,"__v_skip",!0),e}var gt=function(e){return te(e)?st(e):e};function yt(e){return Boolean(e&&!0===e.__v_isRef)}function _t(e){return wt(e)}function bt(e){return wt(e,!0)}var jt=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];$(this,e),this._rawValue=t,this._shallow=n,this.__v_isRef=!0,this._value=n?t:gt(t)}return H(e,[{key:"value",get:function(){return ke(pt(this),"get","value"),this._value},set:function(e){se(pt(e),this._rawValue)&&(this._rawValue=e,this._value=this._shallow?e:gt(e),Se(pt(this),"set","value",e))}}]),e}();function wt(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return yt(e)?e:new jt(e,t)}function kt(e){Se(pt(e),"set","value",e.value)}function St(e){return yt(e)?e.value:e}var xt={get:function(e,t,n){return St(Reflect.get(e,t,n))},set:function(e,t,n,r){var o=e[t];return yt(o)&&!yt(n)?(o.value=n,!0):Reflect.set(e,t,n,r)}};function Et(e){return ht(e)?e:new Proxy(e,xt)}var Rt=function(){function e(t){var n=this;$(this,e),this.__v_isRef=!0;var r=t((function(){return ke(n,"get","value")}),(function(){return Se(n,"set","value")})),o=r.get,i=r.set;this._get=o,this._set=i}return H(e,[{key:"value",get:function(){return this._get()},set:function(e){this._set(e)}}]),e}();function At(e){return new Rt(e)}function Ct(e){vt(e)||console.warn("toRefs() expects a reactive object but received a plain one.");var t=X(e)?new Array(e.length):{};for(var n in e)t[n]=Nt(e,n);return t}var Ot=function(){function e(t,n){$(this,e),this._object=t,this._key=n,this.__v_isRef=!0}return H(e,[{key:"value",get:function(){return this._object[this._key]},set:function(e){this._object[this._key]=e}}]),e}();function Nt(e,t){return yt(e[t])?e[t]:new Ot(e,t)}var Mt=function(){function e(t,n,r){var o=this;$(this,e),this._setter=n,this._dirty=!0,this.__v_isRef=!0,this.effect=de(t,{lazy:!0,scheduler:function(){o._dirty||(o._dirty=!0,Se(pt(o),"set","value"))}}),this.__v_isReadonly=r}return H(e,[{key:"value",get:function(){return this._dirty&&(this._value=this.effect(),this._dirty=!1),ke(pt(this),"get","value"),this._value},set:function(e){this._setter(e)}}]),e}();function Tt(e){var t,n;return Z(e)?(t=e,n=function(){console.warn("Write operation failed: computed value is readonly")}):(t=e.get,n=e.set),new Mt(t,n,Z(e)||!e.set)}let zt;const Pt=e=>t=>{zt&&(zt[e]||(zt[e]=[])).push(t)},Bt=e=>{e?.forEach((e=>e()))},Lt=Pt("hookBeforeCreate"),Wt=Pt("hookCreated"),Ut=Pt("hookBeforeMount"),Vt=Pt("hookMounted"),$t=Pt("hookBeforeUpdate"),Dt=Pt("hookUpdated"),Ht=Pt("hookUnmounted"),qt=e=>(t,n)=>{e.dispatchEvent(new CustomEvent(t,{detail:n}))},It=({name:e,setup:t,propDefs:n=[]})=>{customElements.define(e,class extends HTMLElement{static get observedAttributes(){return n}constructor(){super(),Bt(this.hookBeforeCreate),zt=this,Bt(this.hookCreated);const e=this.props=st({});n.forEach((e=>{Object.defineProperty(this,e,{get(){return this.props[e]},set(t){this.props[e]=t}})}));const r=this.slots=st({}),o=t.call(this,{props:e,ctx:this,emit:qt(this),refs:st({}),slots:r}),i=this.attachShadow({mode:"closed"});Bt(this.hookBeforeMount);let a=!1;de((()=>{a&&Bt(this.hookBeforeUpdate),W(i,o()),a?Bt(this.hookUpdated):a=!0})),zt=null}connectedCallback(){Bt(this.hookMounted),this.querySelectorAll("[slot]").forEach((e=>{this.slots[e.getAttribute("slot")]=e}))}disconnectedCallback(){Bt(this.hookUnmounted)}attributeChangedCallback(e,t,n){let r;try{r=JSON.parse(n)}catch(e){r=n}this[e]=r}})};export{T as Hole,le as ITERATE_KEY,Lt as beforeCreate,Ut as beforeMount,$t as beforeUpdate,Tt as computed,Wt as created,At as customRef,It as defineComponent,de as effect,je as enableTracking,U as html,vt as isProxy,ht as isReactive,dt as isReadonly,yt as isRef,mt as markRaw,Vt as mounted,be as pauseTracking,Et as proxyRefs,st as reactive,ut as readonly,_t as ref,W as render,we as resetTracking,ct as shallowReactive,lt as shallowReadonly,bt as shallowRef,ve as stop,V as svg,pt as toRaw,Nt as toRef,Ct as toRefs,ke as track,Se as trigger,kt as triggerRef,Ht as unmounted,St as unref,Dt as updated,qt as useEmit};
