require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
/**
 * @license
 * Lodash (Custom Build) lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 * Build: `lodash include="intersection,difference,uniq,toArray" -p -o ./lite/lodash.custom.min.js`
 */
;(function(){function t(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}function e(t,e){var r;if(r=!(null==t||!t.length)){if(e===e)t:{r=-1;for(var u=t.length;++r<u;)if(t[r]===e)break t;r=-1}else t:{r=n;for(var u=t.length,o=-1;++o<u;)if(r(t[o],o,t)){r=o;break t}r=-1}r=-1<r}return r}function r(t,e){for(var r=-1,n=null==t?0:t.length,u=Array(n);++r<n;)u[r]=e(t[r],r,t);return u}function n(t){
return t!==t}function u(t){return function(e){return t(e)}}function o(t,e){return r(e,function(e){return t[e]})}function f(t,e){return t.has(e)}function i(t){var e=-1,r=Array(t.size);return t.forEach(function(t,n){r[++e]=[n,t]}),r}function a(t){var e=-1,r=Array(t.size);return t.forEach(function(t){r[++e]=t}),r}function c(){}function s(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function l(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];
this.set(n[0],n[1])}}function h(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function p(t){var e=-1,r=null==t?0:t.length;for(this.__data__=new h;++e<r;)this.add(t[e])}function d(t,e){for(var r=t.length;r--;)if(k(t[r][0],e))return r;return-1}function b(t,e,r,n,u){var o=-1,f=t.length;for(r||(r=w),u||(u=[]);++o<f;){var i=t[o];if(0<e&&r(i))if(1<e)b(i,e-1,r,n,u);else for(var a=u,c=-1,s=i.length,l=a.length;++c<s;)a[l+c]=i[c];else n||(u[u.length]=i)}return u}
function _(t){if(null==t)t=t===U?"[object Undefined]":"[object Null]";else if(gt&&gt in Object(t)){var e=at.call(t,gt),r=t[gt];try{t[gt]=U;var n=true}catch(t){}var u=st.call(t);n&&(e?t[gt]=r:delete t[gt]),t=u}else t=st.call(t);return t}function y(t){return P(t)&&"[object Arguments]"==_(t)}function g(t){return P(t)&&E(t.length)&&!!J[_(t)]}function j(t){return Lt(O(t,R),t+"")}function v(t){return z(t)?t:[]}function A(t,e){var r=t.__data__,n=typeof e;return("string"==n||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==e:null===e)?r[typeof e=="string"?"string":"hash"]:r.map;
}function m(t,e){var r=null==t?U:t[e];return(!F(r)||ct&&ct in r?0:(M(r)?lt:W).test(S(r)))?r:U}function w(t){return Ct(t)||Wt(t)||!!(_t&&t&&t[_t])}function O(e,r){var n=void 0,n=mt(n===U?e.length-1:n,0);return function(){for(var u=arguments,o=-1,f=mt(u.length-n,0),i=Array(f);++o<f;)i[o]=u[n+o];for(o=-1,f=Array(n+1);++o<n;)f[o]=u[o];return f[n]=r(i),t(e,this,f)}}function S(t){if(null!=t){try{return it.call(t)}catch(t){}return t+""}return""}function k(t,e){return t===e||t!==t&&e!==e}function x(t){return null!=t&&E(t.length)&&!M(t);
}function z(t){return P(t)&&x(t)}function M(t){return!!F(t)&&(t=_(t),"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t)}function E(t){return typeof t=="number"&&-1<t&&0==t%1&&9007199254740991>=t}function F(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function P(t){return null!=t&&typeof t=="object"}function $(t){return typeof t=="string"||!Ct(t)&&P(t)&&"[object String]"==_(t)}function B(t){if(x(t)){var e=Ct(t),r=!e&&Wt(t),n=!e&&!r&&Nt(t),u=!e&&!r&&!n&&qt(t);
if(e=e||r||n||u){for(var r=t.length,o=String,f=-1,i=Array(r);++f<r;)i[f]=o(f);r=i}else r=[];var a,o=r.length;for(a in t)(f=!at.call(t,a))||!(f=e)||(f="length"==a||n&&("offset"==a||"parent"==a)||u&&("buffer"==a||"byteLength"==a||"byteOffset"==a))||(f=a,i=o,i=null==i?9007199254740991:i,f=!!i&&(typeof f=="number"||C.test(f))&&-1<f&&0==f%1&&f<i),f||r.push(a);t=r}else if(a=t&&t.constructor,t===(typeof a=="function"&&a.prototype||ot)){a=[];for(n in Object(t))at.call(t,n)&&"constructor"!=n&&a.push(n);t=a;
}else t=At(t);return t}function D(t){return null==t?[]:o(t,B(t))}function I(t){return function(){return t}}function R(t){return t}function T(){}function L(){return false}var U,V=1/0,W=/^\[object .+?Constructor\]$/,C=/^(?:0|[1-9]\d*)$/,N="[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?(?:\\u200d(?:[^\\ud800-\\udfff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?)*",q="(?:[^\\ud800-\\udfff][\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]?|[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\ud800-\\udfff])",G=RegExp("\\ud83c[\\udffb-\\udfff](?=\\ud83c[\\udffb-\\udfff])|"+q+N,"g"),H=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"),J={};
J["[object Float32Array]"]=J["[object Float64Array]"]=J["[object Int8Array]"]=J["[object Int16Array]"]=J["[object Int32Array]"]=J["[object Uint8Array]"]=J["[object Uint8ClampedArray]"]=J["[object Uint16Array]"]=J["[object Uint32Array]"]=true,J["[object Arguments]"]=J["[object Array]"]=J["[object ArrayBuffer]"]=J["[object Boolean]"]=J["[object DataView]"]=J["[object Date]"]=J["[object Error]"]=J["[object Function]"]=J["[object Map]"]=J["[object Number]"]=J["[object Object]"]=J["[object RegExp]"]=J["[object Set]"]=J["[object String]"]=J["[object WeakMap]"]=false;
var K,Q=typeof global=="object"&&global&&global.Object===Object&&global,X=typeof self=="object"&&self&&self.Object===Object&&self,Y=Q||X||Function("return this")(),Z=typeof exports=="object"&&exports&&!exports.nodeType&&exports,tt=Z&&typeof module=="object"&&module&&!module.nodeType&&module,et=tt&&tt.exports===Z,rt=et&&Q.process;t:{try{K=rt&&rt.binding&&rt.binding("util");break t}catch(t){}K=void 0}var nt=K&&K.isTypedArray,ut=Array.prototype,ot=Object.prototype,ft=Y["__core-js_shared__"],it=Function.prototype.toString,at=ot.hasOwnProperty,ct=function(){
var t=/[^.]+$/.exec(ft&&ft.keys&&ft.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),st=ot.toString,lt=RegExp("^"+it.call(at).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ht=et?Y.Buffer:U,pt=Y.Symbol,dt=ot.propertyIsEnumerable,bt=ut.splice,_t=pt?pt.isConcatSpreadable:U,yt=pt?pt.iterator:U,gt=pt?pt.toStringTag:U,jt=function(){try{var t=m(Object,"defineProperty");return t({},"",{}),t}catch(t){}}(),vt=ht?ht.isBuffer:U,At=function(t,e){
return function(r){return t(e(r))}}(Object.keys,Object),mt=Math.max,wt=Math.min,Ot=Date.now,St=m(Y,"DataView"),kt=m(Y,"Map"),xt=m(Y,"Promise"),zt=m(Y,"Set"),Mt=m(Y,"WeakMap"),Et=m(Object,"create"),Ft=S(St),Pt=S(kt),$t=S(xt),Bt=S(zt),Dt=S(Mt);s.prototype.clear=function(){this.__data__=Et?Et(null):{},this.size=0},s.prototype.delete=function(t){return t=this.has(t)&&delete this.__data__[t],this.size-=t?1:0,t},s.prototype.get=function(t){var e=this.__data__;return Et?(t=e[t],"__lodash_hash_undefined__"===t?U:t):at.call(e,t)?e[t]:U;
},s.prototype.has=function(t){var e=this.__data__;return Et?e[t]!==U:at.call(e,t)},s.prototype.set=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=Et&&e===U?"__lodash_hash_undefined__":e,this},l.prototype.clear=function(){this.__data__=[],this.size=0},l.prototype.delete=function(t){var e=this.__data__;return t=d(e,t),!(0>t)&&(t==e.length-1?e.pop():bt.call(e,t,1),--this.size,true)},l.prototype.get=function(t){var e=this.__data__;return t=d(e,t),0>t?U:e[t][1]},l.prototype.has=function(t){
return-1<d(this.__data__,t)},l.prototype.set=function(t,e){var r=this.__data__,n=d(r,t);return 0>n?(++this.size,r.push([t,e])):r[n][1]=e,this},h.prototype.clear=function(){this.size=0,this.__data__={hash:new s,map:new(kt||l),string:new s}},h.prototype.delete=function(t){return t=A(this,t).delete(t),this.size-=t?1:0,t},h.prototype.get=function(t){return A(this,t).get(t)},h.prototype.has=function(t){return A(this,t).has(t)},h.prototype.set=function(t,e){var r=A(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,
this},p.prototype.add=p.prototype.push=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},p.prototype.has=function(t){return this.__data__.has(t)};var It=jt?function(t,e){return jt(t,"toString",{configurable:true,enumerable:false,value:I(e),writable:true})}:R,Rt=zt&&1/a(new zt([,-0]))[1]==V?function(t){return new zt(t)}:T,Tt=_;(St&&"[object DataView]"!=Tt(new St(new ArrayBuffer(1)))||kt&&"[object Map]"!=Tt(new kt)||xt&&"[object Promise]"!=Tt(xt.resolve())||zt&&"[object Set]"!=Tt(new zt)||Mt&&"[object WeakMap]"!=Tt(new Mt))&&(Tt=function(t){
var e=_(t);if(t=(t="[object Object]"==e?t.constructor:U)?S(t):"")switch(t){case Ft:return"[object DataView]";case Pt:return"[object Map]";case $t:return"[object Promise]";case Bt:return"[object Set]";case Dt:return"[object WeakMap]"}return e});var Lt=function(t){var e=0,r=0;return function(){var n=Ot(),u=16-(n-r);if(r=n,0<u){if(800<=++e)return arguments[0]}else e=0;return t.apply(U,arguments)}}(It),Ut=j(function(t,r){var n;if(z(t)){n=b(r,1,z,true);var u=-1,o=e,i=true,a=t.length,c=[],s=n.length;if(a)t:for(200<=n.length&&(o=f,
i=false,n=new p(n));++u<a;){var l=t[u],h=l,l=0!==l?l:0;if(i&&h===h){for(var d=s;d--;)if(n[d]===h)continue t;c.push(l)}else o(n,h,void 0)||c.push(l)}n=c}else n=[];return n}),Vt=j(function(t){var n=r(t,v);if(n.length&&n[0]===t[0]){t=n[0].length;for(var u=n.length,o=u,i=Array(u),a=1/0,c=[];o--;){var s=n[o],a=wt(s.length,a);i[o]=120<=t&&120<=s.length?new p(o&&s):U}var s=n[0],l=-1,h=i[0];t:for(;++l<t&&c.length<a;){var d=s[l],b=d,d=0!==d?d:0;if(h?!f(h,b):!e(c,b)){for(o=u;--o;){var _=i[o];if(_?!f(_,b):!e(n[o],b))continue t;
}h&&h.push(b),c.push(d)}}n=c}else n=[];return n}),Wt=y(function(){return arguments}())?y:function(t){return P(t)&&at.call(t,"callee")&&!dt.call(t,"callee")},Ct=Array.isArray,Nt=vt||L,qt=nt?u(nt):g;c.constant=I,c.difference=Ut,c.intersection=Vt,c.keys=B,c.toArray=function(t){if(!t)return[];if(x(t)){if($(t))t=H.test(t)?t.match(G)||[]:t.split("");else{var e,r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];t=e}return t}if(yt&&t[yt]){for(t=t[yt](),r=[];!(e=t.next()).done;)r.push(e.value);return r}
return e=Tt(t),("[object Map]"==e?i:"[object Set]"==e?a:D)(t)},c.uniq=function(t){if(t&&t.length)t:{var r=-1,n=e,u=t.length,o=true,i=[],c=i;if(200<=u){if(n=Rt(t)){t=a(n);break t}o=false,n=f,c=new p}else c=i;e:for(;++r<u;){var s=t[r],l=s,s=0!==s?s:0;if(o&&l===l){for(var h=c.length;h--;)if(c[h]===l)continue e;i.push(s)}else n(c,l,void 0)||(c!==i&&c.push(l),i.push(s))}t=i}else t=[];return t},c.values=D,c.eq=k,c.identity=R,c.isArguments=Wt,c.isArray=Ct,c.isArrayLike=x,c.isArrayLikeObject=z,c.isBuffer=Nt,c.isFunction=M,
c.isLength=E,c.isObject=F,c.isObjectLike=P,c.isString=$,c.isTypedArray=qt,c.stubFalse=L,c.noop=T,c.VERSION="4.17.3",typeof define=="function"&&typeof define.amd=="object"&&define.amd?(Y._=c, define(function(){return c})):tt?((tt.exports=c)._=c,Z._=c):Y._=c}).call(this);
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(require,module,exports){
module.exports = require('./lib/heap');

},{"./lib/heap":3}],3:[function(require,module,exports){
// Generated by CoffeeScript 1.8.0
(function() {
  var Heap, defaultCmp, floor, heapify, heappop, heappush, heappushpop, heapreplace, insort, min, nlargest, nsmallest, updateItem, _siftdown, _siftup;

  floor = Math.floor, min = Math.min;


  /*
  Default comparison function to be used
   */

  defaultCmp = function(x, y) {
    if (x < y) {
      return -1;
    }
    if (x > y) {
      return 1;
    }
    return 0;
  };


  /*
  Insert item x in list a, and keep it sorted assuming a is sorted.
  
  If x is already in a, insert it to the right of the rightmost x.
  
  Optional args lo (default 0) and hi (default a.length) bound the slice
  of a to be searched.
   */

  insort = function(a, x, lo, hi, cmp) {
    var mid;
    if (lo == null) {
      lo = 0;
    }
    if (cmp == null) {
      cmp = defaultCmp;
    }
    if (lo < 0) {
      throw new Error('lo must be non-negative');
    }
    if (hi == null) {
      hi = a.length;
    }
    while (lo < hi) {
      mid = floor((lo + hi) / 2);
      if (cmp(x, a[mid]) < 0) {
        hi = mid;
      } else {
        lo = mid + 1;
      }
    }
    return ([].splice.apply(a, [lo, lo - lo].concat(x)), x);
  };


  /*
  Push item onto heap, maintaining the heap invariant.
   */

  heappush = function(array, item, cmp) {
    if (cmp == null) {
      cmp = defaultCmp;
    }
    array.push(item);
    return _siftdown(array, 0, array.length - 1, cmp);
  };


  /*
  Pop the smallest item off the heap, maintaining the heap invariant.
   */

  heappop = function(array, cmp) {
    var lastelt, returnitem;
    if (cmp == null) {
      cmp = defaultCmp;
    }
    lastelt = array.pop();
    if (array.length) {
      returnitem = array[0];
      array[0] = lastelt;
      _siftup(array, 0, cmp);
    } else {
      returnitem = lastelt;
    }
    return returnitem;
  };


  /*
  Pop and return the current smallest value, and add the new item.
  
  This is more efficient than heappop() followed by heappush(), and can be
  more appropriate when using a fixed size heap. Note that the value
  returned may be larger than item! That constrains reasonable use of
  this routine unless written as part of a conditional replacement:
      if item > array[0]
        item = heapreplace(array, item)
   */

  heapreplace = function(array, item, cmp) {
    var returnitem;
    if (cmp == null) {
      cmp = defaultCmp;
    }
    returnitem = array[0];
    array[0] = item;
    _siftup(array, 0, cmp);
    return returnitem;
  };


  /*
  Fast version of a heappush followed by a heappop.
   */

  heappushpop = function(array, item, cmp) {
    var _ref;
    if (cmp == null) {
      cmp = defaultCmp;
    }
    if (array.length && cmp(array[0], item) < 0) {
      _ref = [array[0], item], item = _ref[0], array[0] = _ref[1];
      _siftup(array, 0, cmp);
    }
    return item;
  };


  /*
  Transform list into a heap, in-place, in O(array.length) time.
   */

  heapify = function(array, cmp) {
    var i, _i, _j, _len, _ref, _ref1, _results, _results1;
    if (cmp == null) {
      cmp = defaultCmp;
    }
    _ref1 = (function() {
      _results1 = [];
      for (var _j = 0, _ref = floor(array.length / 2); 0 <= _ref ? _j < _ref : _j > _ref; 0 <= _ref ? _j++ : _j--){ _results1.push(_j); }
      return _results1;
    }).apply(this).reverse();
    _results = [];
    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
      i = _ref1[_i];
      _results.push(_siftup(array, i, cmp));
    }
    return _results;
  };


  /*
  Update the position of the given item in the heap.
  This function should be called every time the item is being modified.
   */

  updateItem = function(array, item, cmp) {
    var pos;
    if (cmp == null) {
      cmp = defaultCmp;
    }
    pos = array.indexOf(item);
    if (pos === -1) {
      return;
    }
    _siftdown(array, 0, pos, cmp);
    return _siftup(array, pos, cmp);
  };


  /*
  Find the n largest elements in a dataset.
   */

  nlargest = function(array, n, cmp) {
    var elem, result, _i, _len, _ref;
    if (cmp == null) {
      cmp = defaultCmp;
    }
    result = array.slice(0, n);
    if (!result.length) {
      return result;
    }
    heapify(result, cmp);
    _ref = array.slice(n);
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      elem = _ref[_i];
      heappushpop(result, elem, cmp);
    }
    return result.sort(cmp).reverse();
  };


  /*
  Find the n smallest elements in a dataset.
   */

  nsmallest = function(array, n, cmp) {
    var elem, i, los, result, _i, _j, _len, _ref, _ref1, _results;
    if (cmp == null) {
      cmp = defaultCmp;
    }
    if (n * 10 <= array.length) {
      result = array.slice(0, n).sort(cmp);
      if (!result.length) {
        return result;
      }
      los = result[result.length - 1];
      _ref = array.slice(n);
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        elem = _ref[_i];
        if (cmp(elem, los) < 0) {
          insort(result, elem, 0, null, cmp);
          result.pop();
          los = result[result.length - 1];
        }
      }
      return result;
    }
    heapify(array, cmp);
    _results = [];
    for (i = _j = 0, _ref1 = min(n, array.length); 0 <= _ref1 ? _j < _ref1 : _j > _ref1; i = 0 <= _ref1 ? ++_j : --_j) {
      _results.push(heappop(array, cmp));
    }
    return _results;
  };

  _siftdown = function(array, startpos, pos, cmp) {
    var newitem, parent, parentpos;
    if (cmp == null) {
      cmp = defaultCmp;
    }
    newitem = array[pos];
    while (pos > startpos) {
      parentpos = (pos - 1) >> 1;
      parent = array[parentpos];
      if (cmp(newitem, parent) < 0) {
        array[pos] = parent;
        pos = parentpos;
        continue;
      }
      break;
    }
    return array[pos] = newitem;
  };

  _siftup = function(array, pos, cmp) {
    var childpos, endpos, newitem, rightpos, startpos;
    if (cmp == null) {
      cmp = defaultCmp;
    }
    endpos = array.length;
    startpos = pos;
    newitem = array[pos];
    childpos = 2 * pos + 1;
    while (childpos < endpos) {
      rightpos = childpos + 1;
      if (rightpos < endpos && !(cmp(array[childpos], array[rightpos]) < 0)) {
        childpos = rightpos;
      }
      array[pos] = array[childpos];
      pos = childpos;
      childpos = 2 * pos + 1;
    }
    array[pos] = newitem;
    return _siftdown(array, startpos, pos, cmp);
  };

  Heap = (function() {
    Heap.push = heappush;

    Heap.pop = heappop;

    Heap.replace = heapreplace;

    Heap.pushpop = heappushpop;

    Heap.heapify = heapify;

    Heap.updateItem = updateItem;

    Heap.nlargest = nlargest;

    Heap.nsmallest = nsmallest;

    function Heap(cmp) {
      this.cmp = cmp != null ? cmp : defaultCmp;
      this.nodes = [];
    }

    Heap.prototype.push = function(x) {
      return heappush(this.nodes, x, this.cmp);
    };

    Heap.prototype.pop = function() {
      return heappop(this.nodes, this.cmp);
    };

    Heap.prototype.peek = function() {
      return this.nodes[0];
    };

    Heap.prototype.contains = function(x) {
      return this.nodes.indexOf(x) !== -1;
    };

    Heap.prototype.replace = function(x) {
      return heapreplace(this.nodes, x, this.cmp);
    };

    Heap.prototype.pushpop = function(x) {
      return heappushpop(this.nodes, x, this.cmp);
    };

    Heap.prototype.heapify = function() {
      return heapify(this.nodes, this.cmp);
    };

    Heap.prototype.updateItem = function(x) {
      return updateItem(this.nodes, x, this.cmp);
    };

    Heap.prototype.clear = function() {
      return this.nodes = [];
    };

    Heap.prototype.empty = function() {
      return this.nodes.length === 0;
    };

    Heap.prototype.size = function() {
      return this.nodes.length;
    };

    Heap.prototype.clone = function() {
      var heap;
      heap = new Heap();
      heap.nodes = this.nodes.slice(0);
      return heap;
    };

    Heap.prototype.toArray = function() {
      return this.nodes.slice(0);
    };

    Heap.prototype.insert = Heap.prototype.push;

    Heap.prototype.top = Heap.prototype.peek;

    Heap.prototype.front = Heap.prototype.peek;

    Heap.prototype.has = Heap.prototype.contains;

    Heap.prototype.copy = Heap.prototype.clone;

    return Heap;

  })();

  (function(root, factory) {
    if (typeof define === 'function' && define.amd) {
      return define([], factory);
    } else if (typeof exports === 'object') {
      return module.exports = factory();
    } else {
      return root.Heap = factory();
    }
  })(this, function() {
    return Heap;
  });

}).call(this);

},{}],4:[function(require,module,exports){
/*! http://mths.be/fromcodepoint v0.2.1 by @mathias */
if (!String.fromCodePoint) {
	(function() {
		var defineProperty = (function() {
			// IE 8 only supports `Object.defineProperty` on DOM elements
			try {
				var object = {};
				var $defineProperty = Object.defineProperty;
				var result = $defineProperty(object, object, object) && $defineProperty;
			} catch(error) {}
			return result;
		}());
		var stringFromCharCode = String.fromCharCode;
		var floor = Math.floor;
		var fromCodePoint = function(_) {
			var MAX_SIZE = 0x4000;
			var codeUnits = [];
			var highSurrogate;
			var lowSurrogate;
			var index = -1;
			var length = arguments.length;
			if (!length) {
				return '';
			}
			var result = '';
			while (++index < length) {
				var codePoint = Number(arguments[index]);
				if (
					!isFinite(codePoint) || // `NaN`, `+Infinity`, or `-Infinity`
					codePoint < 0 || // not a valid Unicode code point
					codePoint > 0x10FFFF || // not a valid Unicode code point
					floor(codePoint) != codePoint // not an integer
				) {
					throw RangeError('Invalid code point: ' + codePoint);
				}
				if (codePoint <= 0xFFFF) { // BMP code point
					codeUnits.push(codePoint);
				} else { // Astral code point; split in surrogate halves
					// http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
					codePoint -= 0x10000;
					highSurrogate = (codePoint >> 10) + 0xD800;
					lowSurrogate = (codePoint % 0x400) + 0xDC00;
					codeUnits.push(highSurrogate, lowSurrogate);
				}
				if (index + 1 == length || codeUnits.length > MAX_SIZE) {
					result += stringFromCharCode.apply(null, codeUnits);
					codeUnits.length = 0;
				}
			}
			return result;
		};
		if (defineProperty) {
			defineProperty(String, 'fromCodePoint', {
				'value': fromCodePoint,
				'configurable': true,
				'writable': true
			});
		} else {
			String.fromCodePoint = fromCodePoint;
		}
	}());
}

},{}],5:[function(require,module,exports){
/*! http://mths.be/codepointat v0.2.0 by @mathias */
if (!String.prototype.codePointAt) {
	(function() {
		'use strict'; // needed to support `apply`/`call` with `undefined`/`null`
		var defineProperty = (function() {
			// IE 8 only supports `Object.defineProperty` on DOM elements
			try {
				var object = {};
				var $defineProperty = Object.defineProperty;
				var result = $defineProperty(object, object, object) && $defineProperty;
			} catch(error) {}
			return result;
		}());
		var codePointAt = function(position) {
			if (this == null) {
				throw TypeError();
			}
			var string = String(this);
			var size = string.length;
			// `ToInteger`
			var index = position ? Number(position) : 0;
			if (index != index) { // better `isNaN`
				index = 0;
			}
			// Account for out-of-bounds indices:
			if (index < 0 || index >= size) {
				return undefined;
			}
			// Get the first code unit
			var first = string.charCodeAt(index);
			var second;
			if ( // check if it’s the start of a surrogate pair
				first >= 0xD800 && first <= 0xDBFF && // high surrogate
				size > index + 1 // there is a next code unit
			) {
				second = string.charCodeAt(index + 1);
				if (second >= 0xDC00 && second <= 0xDFFF) { // low surrogate
					// http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
					return (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
				}
			}
			return first;
		};
		if (defineProperty) {
			defineProperty(String.prototype, 'codePointAt', {
				'value': codePointAt,
				'configurable': true,
				'writable': true
			});
		} else {
			String.prototype.codePointAt = codePointAt;
		}
	}());
}

},{}],"fuzzball":[function(require,module,exports){
(function () {
    'use strict';
    var Heap = require('heap');
    var _intersect = require('./lodash.custom.min.js').intersection;
    var _difference = require('./lodash.custom.min.js').difference;
    var _uniq = require('./lodash.custom.min.js').uniq;
    var _toArray = require('./lodash.custom.min.js').toArray;
    require('string.prototype.codepointat');
    require('string.fromcodepoint');
/** Mostly follows after python fuzzywuzzy, https://github.com/seatgeek/fuzzywuzzy */


/** Public functions */

    function distance(str1, str2, options_p) {
        /**
         * Calculate levenshtein distance of the two strings.
         *
         * @param {string} str1 - the first string.
         * @param {string} str2 - the second string.
         * @param {Object} [options_p] - Additional options.
         * @param {boolean} [options_p.useCollator] - Use `Intl.Collator` for locale-sensitive string comparison.
         * @param {boolean} [options_p.full_process] - Apply basic cleanup, non-alphanumeric to whitespace etc. if true. default true
         * @param {boolean} [options_p.force_ascii] - Strip non-ascii in full_process if true (non-ascii will not become whtespace), only applied if full_process is true as well, default true TODO: Unicode stuff
         * @param {number} [options_p.subcost] - Substitution cost, default 1 for distance, 2 for all ratios
         * @returns {number} - the levenshtein distance (0 and above).
         */
        var options = _clone_and_set_option_defaults(options_p);
        str1 = options.full_process ? full_process(str1, options.force_ascii) : str1;
        str2 = options.full_process ? full_process(str2, options.force_ascii) : str2;
        if (typeof options.subcost === "undefined") options.subcost = 1;
        if (options.astral) return _iLeven(str1, str2, options);
        else return _leven(str1, str2, options);
    }

    function QRatio(str1, str2, options_p) {
        /**
         * Calculate levenshtein ratio of the two strings.
         *
         * @param {string} str1 - the first string.
         * @param {string} str2 - the second string.
         * @param {Object} [options_p] - Additional options.
         * @param {boolean} [options_p.useCollator] - Use `Intl.Collator` for locale-sensitive string comparison.
         * @param {boolean} [options_p.full_process] - Apply basic cleanup, non-alphanumeric to whitespace etc. if true. default true
         * @param {boolean} [options_p.force_ascii] - Strip non-ascii in full_process if true (non-ascii will not become whtespace), only applied if full_process is true as well, default true TODO: Unicode stuff
         * @param {number} [options_p.subcost] - Substitution cost, default 1 for distance, 2 for all ratios
         * @returns {number} - the levenshtein ratio (0-100).
         */
        var options = _clone_and_set_option_defaults(options_p);
        str1 = options.full_process ? full_process(str1, options.force_ascii) : str1;
        str2 = options.full_process ? full_process(str2, options.force_ascii) : str2;
        if (!_validate(str1)) return 0;
        if (!_validate(str2)) return 0;
        return _ratio(str1, str2, options);
    }

    function token_set_ratio(str1, str2, options_p) {
        /**
         * Calculate token set ratio of the two strings.
         *
         * @param {string} str1 - the first string.
         * @param {string} str2 - the second string.
         * @param {Object} [options_p] - Additional options.
         * @param {boolean} [options_p.useCollator] - Use `Intl.Collator` for locale-sensitive string comparison.
         * @param {boolean} [options_p.full_process] - Apply basic cleanup, non-alphanumeric to whitespace etc. if true. default true
         * @param {boolean} [options_p.force_ascii] - Strip non-ascii in full_process if true (non-ascii will not become whtespace), only applied if full_process is true as well, default true TODO: Unicode stuff
         * @param {number} [options_p.subcost] - Substitution cost, default 1 for distance, 2 for all ratios
         * @returns {number} - the levenshtein ratio (0-100).
         */
        var options = _clone_and_set_option_defaults(options_p);
        str1 = options.full_process ? full_process(str1, options.force_ascii) : str1;
        str2 = options.full_process ? full_process(str2, options.force_ascii) : str2;
        if (!_validate(str1)) return 0;
        if (!_validate(str2)) return 0;
        return _token_set(str1, str2, options);
    }

    function token_sort_ratio(str1, str2, options_p) {
        /**
         * Calculate token sort ratio of the two strings.
         *
         * @param {string} str1 - the first string.
         * @param {string} str2 - the second string.
         * @param {Object} [options_p] - Additional options.
         * @param {boolean} [options_p.useCollator] - Use `Intl.Collator` for locale-sensitive string comparison.
         * @param {boolean} [options_p.full_process] - Apply basic cleanup, non-alphanumeric to whitespace etc. if true. default true
         * @param {boolean} [options_p.force_ascii] - Strip non-ascii in full_process if true (non-ascii will not become whtespace), only applied if full_process is true as well, default true TODO: Unicode stuff
         * @param {number} [options_p.subcost] - Substitution cost, default 1 for distance, 2 for all ratios
         * @returns {number} - the levenshtein ratio (0-100).
         */
        var options = _clone_and_set_option_defaults(options_p);
        str1 = options.full_process ? full_process(str1, options.force_ascii) : str1;
        str2 = options.full_process ? full_process(str2, options.force_ascii) : str2;
        if (!_validate(str1)) return 0;
        if (!_validate(str2)) return 0;
        if (!options.proc_sorted) {
            str1 = process_and_sort(str1);
            str2 = process_and_sort(str2);
        }
        return _ratio(str1, str2, options);
    }

    function extract(query, choices, options_p) {
        /**
         * Return the top scoring items from an array (or assoc array) of choices
         *
         * @param {string} query - the search term.
         * @param {String[]|Object[]|Object} choices - array of strings, or array of choice objects if processor is supplied, or object of form {key: choice}
         * @param {Object} [options_p] - Additional options.
         * @param {function} [options_p.scorer] - takes two strings, or string and object, and returns a score
         * @param {function} [options_p.processor] - takes each choice and outputs a string to be used for Scoring
         * @param {number} [options_p.limit] - optional max number of results to return, returns all if not supplied
         * @param {number} [options_p.cutoff] - minimum score that will get returned 0-100
         * @param {boolean} [options_p.useCollator] - Use `Intl.Collator` for locale-sensitive string comparison.
         * @param {boolean} [options_p.full_process] - Apply basic cleanup, non-alphanumeric to whitespace etc. if true. default true
         * @param {boolean} [options_p.force_ascii] - Strip non-ascii in full_process if true (non-ascii will not become whtespace), only applied if full_process is true as well, default true TODO: Unicode stuff
         * @param {number} [options_p.subcost] - Substitution cost, default 1 for distance, 2 for all ratios
         * @returns {Object[]} - array of choice results with their computed ratios (0-100).
         */
        var options = _clone_and_set_option_defaults(options_p);
        var isArray = false;
        var numchoices;
        if (choices && choices.length && Array.isArray(choices)) {
            numchoices = choices.length;
            isArray = true; //if array don't check hasOwnProperty every time below
        }
        else numchoices = Object.keys(choices).length;
        if (!choices || numchoices === 0) console.log("No choices");
        if (options.processor && typeof options.processor !== "function") console.log("Invalid Processor");
        if (!options.processor) options.processor = function(x) {return x;}
        if (!options.scorer || typeof options.scorer !== "function") {
            options.scorer = QRatio;
            console.log("Using default scorer 'ratio'");
        }
        var isCustom = _isCustomFunc(options.scorer); // check if func name is one of fuzzball's, so don't use same names..
        if (!options.cutoff || typeof options.cutoff !== "number") { options.cutoff = -1;}
        var pre_processor = function(choice, force_ascii) {return choice;}
        if (options.full_process) pre_processor = full_process;
        if (!isCustom) { // if custom scorer func let scorer handle it
            query = pre_processor(query, options.force_ascii);
            options.full_process = false;
            if (query.length === 0) console.log("Processed query is empty string");
        }
        var results = [];
        var anyblank = false;
        var tsort = false;
        var tset = false;
        if (options.scorer.name === "token_sort_ratio" || options.scorer.name === "partial_token_sort_ratio") {
            var proc_sorted_query = process_and_sort(query);
            tsort = true;
        }
        else if (options.scorer.name === "token_set_ratio" || options.scorer.name === "partial_token_set_ratio") {
            var query_tokens = tokenize(query);
            tset = true;
        }
        var idx, mychoice, result;
        for (var c in choices) {
            if (isArray || choices.hasOwnProperty(c)) {
                options.tokens = undefined;
                options.proc_sorted = false;
                if (tsort) {
                    options.proc_sorted = true;
                    if (choices[c].proc_sorted) mychoice = choices[c].proc_sorted;
                    else {
                        mychoice = pre_processor(options.processor(choices[c]), options.force_ascii);
                        mychoice = process_and_sort(mychoice);
                    }
                    result = options.scorer(proc_sorted_query, mychoice, options);
                }
                else if (tset) {
                    mychoice = "x"; //dummy string so it validates
                    if (choices[c].tokens) options.tokens = [query_tokens, choices[c].tokens];
                    else {
                        mychoice = pre_processor(options.processor(choices[c]), options.force_ascii);
                        options.tokens = [query_tokens, tokenize(mychoice)]
                    }
                    //query and mychoice only used for validation here
                    result = options.scorer(query, mychoice, options);
                }
                else if (isCustom) {
                    // options.full_process should be unmodified, don't pre-process here since mychoice maybe not string
                    mychoice = options.processor(choices[c]);
                    result = options.scorer(query, mychoice, options);
                }
                else {
                    mychoice = pre_processor(options.processor(choices[c]), options.force_ascii);
                    if (typeof mychoice !== "string" || mychoice.length === 0) anyblank = true;
                    result = options.scorer(query, mychoice, options);
                }
                if (isArray) idx = parseInt(c);
                else idx = c;
                if (result > options.cutoff) results.push([choices[c], result, idx]);
            }
        }
        if(anyblank) console.log("One or more choices were empty. (post-processing if applied)")
        if (options.limit && typeof options.limit === "number" && options.limit > 0 && options.limit < numchoices && !options.unsorted) {
            var cmp = function(a, b) { return a[1] - b[1]; }
            results = Heap.nlargest(results, options.limit, cmp);
        }
        else if (!options.unsorted) {
            results = results.sort(function(a,b){return b[1]-a[1];});
        }
        return results;
    }

/** Main Scoring Code */

    function _token_set(str1, str2, options) {

        if (!options.tokens) {
            var tokens1 = tokenize(str1);
            var tokens2 = tokenize(str2);
        }
        else {
            var tokens1 = options.tokens[0];
            var tokens2 = options.tokens[1];
        }

        var intersection = _intersect(tokens1, tokens2);
        var diff1to2 = _difference(tokens1, tokens2);
        var diff2to1 = _difference(tokens2, tokens1);

        var sorted_sect = intersection.sort().join(" ");
        var sorted_1to2 = diff1to2.sort().join(" ");
        var sorted_2to1 = diff2to1.sort().join(" ");
        var combined_1to2 = sorted_sect + " " + sorted_1to2;
        var combined_2to1 = sorted_sect + " " + sorted_2to1;
        
        sorted_sect = sorted_sect.trim();
        combined_1to2 = combined_1to2.trim();
        combined_2to1 = combined_2to1.trim();
        var ratio_func = _ratio;
        //if (options.partial) ratio_func = _partial_ratio;

        var pairwise = [
            ratio_func(sorted_sect, combined_1to2, options),
            ratio_func(sorted_sect, combined_2to1, options),
            ratio_func(combined_1to2, combined_2to1, options)
        ]
        return Math.max.apply(null, pairwise);
    }

    function _ratio(str1, str2, options) {
        if (!_validate(str1)) return 0;
        if (!_validate(str2)) return 0;
        //to match behavior of python-Levenshtein/fuzzywuzzy, substitution cost is 2 if not specified, or would default to 1
        if (typeof options.subcost === "undefined") options.subcost = 2;
        var levdistance, lensum;
        if (options.astral) {
            levdistance = _iLeven(str1, str2, options);
            lensum = _toArray(str1).length + _toArray(str2).length
        }
        else {
            levdistance = _leven(str1, str2, options);
            lensum = str1.length + str2.length;
        }
        return Math.round(100 * ((lensum - levdistance) / lensum));
    }

    function process_and_sort(str) {
        return str.match(/\S+/g).sort().join(" ").trim();
    }

     function tokenize(str) {
        return _uniq(str.match(/\S+/g));
    }

    /** from https://github.com/hiddentao/fast-levenshtein slightly modified to double weight replacements as done by python-Levenshtein/fuzzywuzzy */

    // arrays to re-use

    var collator;
    try {
        collator = (typeof Intl !== "undefined" && typeof Intl.Collator !== "undefined") ? Intl.Collator("generic", { sensitivity: "base" }) : null;
    } catch (err) {
        console.log("Collator could not be initialized and wouldn't be used");
    }

    // testing if faster than fast-levenshtein..
    /** from https://github.com/sindresorhus/leven slightly modified to double weight replacements as done by python-Levenshtein/fuzzywuzzy */
    var arr = [];
    var charCodeCache = [];

    var _leven = function (a, b, options) {
        var useCollator = (options && collator && options.useCollator);
        var subcost = 1;
        //to match behavior of python-Levenshtein and fuzzywuzzy
        if (options && options.subcost && typeof options.subcost === "number") subcost = options.subcost;

        if (a === b) {
            return 0;
        }

        var aLen = a.length;
        var bLen = b.length;

        if (aLen === 0) {
            return bLen;
        }

        if (bLen === 0) {
            return aLen;
        }

        var bCharCode;
        var ret;
        var tmp;
        var tmp2;
        var i = 0;
        var j = 0;

        while (i < aLen) {
            charCodeCache[i] = a.charCodeAt(i);
            arr[i] = ++i;
        }
        if (!useCollator) {  //checking for collator inside while 2x slower
            while (j < bLen) {
                bCharCode = b.charCodeAt(j);
                tmp = j++;
                ret = j;
                for (i = 0; i < aLen; i++) {
                    tmp2 = bCharCode === charCodeCache[i] ? tmp : tmp + subcost;
                    tmp = arr[i];
                    ret = arr[i] = tmp > ret ? tmp2 > ret ? ret + 1 : tmp2 : tmp2 > tmp ? tmp + 1 : tmp2;
                }
            }
        }
        else {
            while (j < bLen) {
                bCharCode = b.charCodeAt(j);
                tmp = j++;
                ret = j;

                for (i = 0; i < aLen; i++) {
                    tmp2 = 0 === collator.compare(String.fromCharCode(bCharCode), String.fromCharCode(charCodeCache[i])) ? tmp : tmp + subcost;
                    //tmp2 = bCharCode === charCodeCache[i] ? tmp : tmp + subcost;
                    tmp = arr[i];
                    ret = arr[i] = tmp > ret ? tmp2 > ret ? ret + 1 : tmp2 : tmp2 > tmp ? tmp + 1 : tmp2;
                }
            }
        }
        return ret;
    };

    var _iLeven = function (a, b, options) {
        var useCollator = (options && collator && options.useCollator);
        var subcost = 1;
        //to match behavior of python-Levenshtein and fuzzywuzzy
        if (options && options.subcost && typeof options.subcost === "number") subcost = options.subcost;

        if (a === b) {
            return 0;
        }
        var achars = _toArray(a);
        var bchars = _toArray(b);
        var aLen = achars.length;
        var bLen = bchars.length;

        if (aLen === 0) {
            return bLen;
        }

        if (bLen === 0) {
            return aLen;
        }

        var bCharCode;
        var ret;
        var tmp;
        var tmp2;
        var i = 0;
        var j = 0;

        while (i < aLen) {
            charCodeCache[i] = achars[i].codePointAt(0);
            arr[i] = ++i;
        }
        if (!useCollator) {  //checking for collator inside while 2x slower
            while (j < bLen) {
                bCharCode = bchars[j].codePointAt(0);
                tmp = j++;
                ret = j;
                for (i = 0; i < aLen; i++) {
                    tmp2 = bCharCode === charCodeCache[i] ? tmp : tmp + subcost;
                    tmp = arr[i];
                    ret = arr[i] = tmp > ret ? tmp2 > ret ? ret + 1 : tmp2 : tmp2 > tmp ? tmp + 1 : tmp2;
                }
            }
        }
        else {
            while (j < bLen) {
                bCharCode = bchars[j].codePointAt(0);
                tmp = j++;
                ret = j;

                for (i = 0; i < aLen; i++) {
                    tmp2 = 0 === collator.compare(String.fromCodePoint(bCharCode), String.fromCodePoint(charCodeCache[i])) ? tmp : tmp + subcost;
                    tmp = arr[i];
                    ret = arr[i] = tmp > ret ? tmp2 > ret ? ret + 1 : tmp2 : tmp2 > tmp ? tmp + 1 : tmp2;
                }
            }
        }
        return ret;
    };


/**    Utils   */

    function _validate(str) {
        if ((typeof str === "string" || str instanceof String) && str.length > 0) return true;
        else return false;
    }

    function full_process(str, force_ascii) {
        if (!(str instanceof String) && typeof str !== "string") return "";
        // Non-ascii won't turn into whitespace if force_ascii
        if (force_ascii !== false) str = str.replace(/[^\x00-\x7F]/g, "");
        // Non-alphanumeric (roman alphabet) to whitespace
        return str.replace(/\W|_/g,' ').toLowerCase().trim();
    }

    // clone/shallow copy whatev
    function _clone_and_set_option_defaults(options) {
        // don't run more than once if usign extract functions
        if(options && options.isAClone) return options;
        var optclone = {isAClone: true};
        if (options) {
            var i, keys = Object.keys(options);
            for (i = 0; i < keys.length; i++) {
                optclone[keys[i]] = options[keys[i]];
            }
        }
        if (!(typeof optclone.full_process !== 'undefined' && optclone.full_process === false)) optclone.full_process = true;
        if (!(typeof optclone.force_ascii !== 'undefined' && optclone.force_ascii === false)) optclone.force_ascii = true ;
        return optclone;
    }

    function _isCustomFunc(func) {
        if (typeof func === "function" && (
            func.name === "token_set_ratio" ||
            func.name === "partial_token_set_ratio" ||
            func.name === "token_sort_ratio" ||
            func.name === "partial_token_sort_ratio" ||
            func.name === "QRatio" ||
            func.name === "WRatio" ||
            func.name === "distance" ||
            func.name === "partial_ratio"
        )) {
            return false;
        }
        else {
            return true;
        }
    }

    //polyfill for Object.keys
    // From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
    if (!Object.keys) {
        Object.keys = (function () {
            'use strict';
            var hasOwnProperty = Object.prototype.hasOwnProperty,
                hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'),
                dontEnums = [
                    'toString',
                    'toLocaleString',
                    'valueOf',
                    'hasOwnProperty',
                    'isPrototypeOf',
                    'propertyIsEnumerable',
                    'constructor'
                ],
                dontEnumsLength = dontEnums.length;

            return function (obj) {
                if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
                    throw new TypeError('Object.keys called on non-object');
                }

                var result = [], prop, i;

                for (prop in obj) {
                    if (hasOwnProperty.call(obj, prop)) {
                        result.push(prop);
                    }
                }

                if (hasDontEnumBug) {
                    for (i = 0; i < dontEnumsLength; i++) {
                        if (hasOwnProperty.call(obj, dontEnums[i])) {
                            result.push(dontEnums[i]);
                        }
                    }
                }
                return result;
            };
        } ());
    }
    // isArray polyfill
    if (typeof Array.isArray === 'undefined') {
        Array.isArray = function (obj) {
            return Object.prototype.toString.call(obj) === '[object Array]';
        }
    };

    var fuzzball = {
        distance: distance,
        ratio: QRatio,
        token_set_ratio: token_set_ratio,
        token_sort_ratio: token_sort_ratio,
        full_process: full_process,
        extract: extract,
        process_and_sort: process_and_sort,
        unique_tokens: tokenize
    };

     module.exports = fuzzball;
} ());

},{"./lodash.custom.min.js":1,"heap":2,"string.fromcodepoint":4,"string.prototype.codepointat":5}]},{},[]);
