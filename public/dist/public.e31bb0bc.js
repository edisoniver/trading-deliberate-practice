// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/papaparse/papaparse.min.js":[function(require,module,exports) {
var define;
/* @license
Papa Parse
v5.4.1
https://github.com/mholt/PapaParse
License: MIT
*/
!function(e,t){"function"==typeof define&&define.amd?define([],t):"object"==typeof module&&"undefined"!=typeof exports?module.exports=t():e.Papa=t()}(this,function s(){"use strict";var f="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==f?f:{};var n=!f.document&&!!f.postMessage,o=f.IS_PAPA_WORKER||!1,a={},u=0,b={parse:function(e,t){var r=(t=t||{}).dynamicTyping||!1;J(r)&&(t.dynamicTypingFunction=r,r={});if(t.dynamicTyping=r,t.transform=!!J(t.transform)&&t.transform,t.worker&&b.WORKERS_SUPPORTED){var i=function(){if(!b.WORKERS_SUPPORTED)return!1;var e=(r=f.URL||f.webkitURL||null,i=s.toString(),b.BLOB_URL||(b.BLOB_URL=r.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",i,")();"],{type:"text/javascript"})))),t=new f.Worker(e);var r,i;return t.onmessage=_,t.id=u++,a[t.id]=t}();return i.userStep=t.step,i.userChunk=t.chunk,i.userComplete=t.complete,i.userError=t.error,t.step=J(t.step),t.chunk=J(t.chunk),t.complete=J(t.complete),t.error=J(t.error),delete t.worker,void i.postMessage({input:e,config:t,workerId:i.id})}var n=null;b.NODE_STREAM_INPUT,"string"==typeof e?(e=function(e){if(65279===e.charCodeAt(0))return e.slice(1);return e}(e),n=t.download?new l(t):new p(t)):!0===e.readable&&J(e.read)&&J(e.on)?n=new g(t):(f.File&&e instanceof File||e instanceof Object)&&(n=new c(t));return n.stream(e)},unparse:function(e,t){var n=!1,_=!0,m=",",y="\r\n",s='"',a=s+s,r=!1,i=null,o=!1;!function(){if("object"!=typeof t)return;"string"!=typeof t.delimiter||b.BAD_DELIMITERS.filter(function(e){return-1!==t.delimiter.indexOf(e)}).length||(m=t.delimiter);("boolean"==typeof t.quotes||"function"==typeof t.quotes||Array.isArray(t.quotes))&&(n=t.quotes);"boolean"!=typeof t.skipEmptyLines&&"string"!=typeof t.skipEmptyLines||(r=t.skipEmptyLines);"string"==typeof t.newline&&(y=t.newline);"string"==typeof t.quoteChar&&(s=t.quoteChar);"boolean"==typeof t.header&&(_=t.header);if(Array.isArray(t.columns)){if(0===t.columns.length)throw new Error("Option columns is empty");i=t.columns}void 0!==t.escapeChar&&(a=t.escapeChar+s);("boolean"==typeof t.escapeFormulae||t.escapeFormulae instanceof RegExp)&&(o=t.escapeFormulae instanceof RegExp?t.escapeFormulae:/^[=+\-@\t\r].*$/)}();var u=new RegExp(Q(s),"g");"string"==typeof e&&(e=JSON.parse(e));if(Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return h(null,e,r);if("object"==typeof e[0])return h(i||Object.keys(e[0]),e,r)}else if("object"==typeof e)return"string"==typeof e.data&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields||i),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:"object"==typeof e.data[0]?Object.keys(e.data[0]):[]),Array.isArray(e.data[0])||"object"==typeof e.data[0]||(e.data=[e.data])),h(e.fields||[],e.data||[],r);throw new Error("Unable to serialize unrecognized input");function h(e,t,r){var i="";"string"==typeof e&&(e=JSON.parse(e)),"string"==typeof t&&(t=JSON.parse(t));var n=Array.isArray(e)&&0<e.length,s=!Array.isArray(t[0]);if(n&&_){for(var a=0;a<e.length;a++)0<a&&(i+=m),i+=v(e[a],a);0<t.length&&(i+=y)}for(var o=0;o<t.length;o++){var u=n?e.length:t[o].length,h=!1,f=n?0===Object.keys(t[o]).length:0===t[o].length;if(r&&!n&&(h="greedy"===r?""===t[o].join("").trim():1===t[o].length&&0===t[o][0].length),"greedy"===r&&n){for(var d=[],l=0;l<u;l++){var c=s?e[l]:l;d.push(t[o][c])}h=""===d.join("").trim()}if(!h){for(var p=0;p<u;p++){0<p&&!f&&(i+=m);var g=n&&s?e[p]:p;i+=v(t[o][g],p)}o<t.length-1&&(!r||0<u&&!f)&&(i+=y)}}return i}function v(e,t){if(null==e)return"";if(e.constructor===Date)return JSON.stringify(e).slice(1,25);var r=!1;o&&"string"==typeof e&&o.test(e)&&(e="'"+e,r=!0);var i=e.toString().replace(u,a);return(r=r||!0===n||"function"==typeof n&&n(e,t)||Array.isArray(n)&&n[t]||function(e,t){for(var r=0;r<t.length;r++)if(-1<e.indexOf(t[r]))return!0;return!1}(i,b.BAD_DELIMITERS)||-1<i.indexOf(m)||" "===i.charAt(0)||" "===i.charAt(i.length-1))?s+i+s:i}}};if(b.RECORD_SEP=String.fromCharCode(30),b.UNIT_SEP=String.fromCharCode(31),b.BYTE_ORDER_MARK="\ufeff",b.BAD_DELIMITERS=["\r","\n",'"',b.BYTE_ORDER_MARK],b.WORKERS_SUPPORTED=!n&&!!f.Worker,b.NODE_STREAM_INPUT=1,b.LocalChunkSize=10485760,b.RemoteChunkSize=5242880,b.DefaultDelimiter=",",b.Parser=E,b.ParserHandle=r,b.NetworkStreamer=l,b.FileStreamer=c,b.StringStreamer=p,b.ReadableStreamStreamer=g,f.jQuery){var d=f.jQuery;d.fn.parse=function(o){var r=o.config||{},u=[];return this.each(function(e){if(!("INPUT"===d(this).prop("tagName").toUpperCase()&&"file"===d(this).attr("type").toLowerCase()&&f.FileReader)||!this.files||0===this.files.length)return!0;for(var t=0;t<this.files.length;t++)u.push({file:this.files[t],inputElem:this,instanceConfig:d.extend({},r)})}),e(),this;function e(){if(0!==u.length){var e,t,r,i,n=u[0];if(J(o.before)){var s=o.before(n.file,n.inputElem);if("object"==typeof s){if("abort"===s.action)return e="AbortError",t=n.file,r=n.inputElem,i=s.reason,void(J(o.error)&&o.error({name:e},t,r,i));if("skip"===s.action)return void h();"object"==typeof s.config&&(n.instanceConfig=d.extend(n.instanceConfig,s.config))}else if("skip"===s)return void h()}var a=n.instanceConfig.complete;n.instanceConfig.complete=function(e){J(a)&&a(e,n.file,n.inputElem),h()},b.parse(n.file,n.instanceConfig)}else J(o.complete)&&o.complete()}function h(){u.splice(0,1),e()}}}function h(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var t=w(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null);this._handle=new r(t),(this._handle.streamer=this)._config=t}.call(this,e),this.parseChunk=function(e,t){if(this.isFirstChunk&&J(this._config.beforeFirstChunk)){var r=this._config.beforeFirstChunk(e);void 0!==r&&(e=r)}this.isFirstChunk=!1,this._halted=!1;var i=this._partialLine+e;this._partialLine="";var n=this._handle.parse(i,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var s=n.meta.cursor;this._finished||(this._partialLine=i.substring(s-this._baseIndex),this._baseIndex=s),n&&n.data&&(this._rowCount+=n.data.length);var a=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(o)f.postMessage({results:n,workerId:b.WORKER_ID,finished:a});else if(J(this._config.chunk)&&!t){if(this._config.chunk(n,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);n=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(n.data),this._completeResults.errors=this._completeResults.errors.concat(n.errors),this._completeResults.meta=n.meta),this._completed||!a||!J(this._config.complete)||n&&n.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),a||n&&n.meta.paused||this._nextChunk(),n}this._halted=!0},this._sendError=function(e){J(this._config.error)?this._config.error(e):o&&this._config.error&&f.postMessage({workerId:b.WORKER_ID,error:e,finished:!1})}}function l(e){var i;(e=e||{}).chunkSize||(e.chunkSize=b.RemoteChunkSize),h.call(this,e),this._nextChunk=n?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(i=new XMLHttpRequest,this._config.withCredentials&&(i.withCredentials=this._config.withCredentials),n||(i.onload=v(this._chunkLoaded,this),i.onerror=v(this._chunkError,this)),i.open(this._config.downloadRequestBody?"POST":"GET",this._input,!n),this._config.downloadRequestHeaders){var e=this._config.downloadRequestHeaders;for(var t in e)i.setRequestHeader(t,e[t])}if(this._config.chunkSize){var r=this._start+this._config.chunkSize-1;i.setRequestHeader("Range","bytes="+this._start+"-"+r)}try{i.send(this._config.downloadRequestBody)}catch(e){this._chunkError(e.message)}n&&0===i.status&&this._chunkError()}},this._chunkLoaded=function(){4===i.readyState&&(i.status<200||400<=i.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:i.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(e){var t=e.getResponseHeader("Content-Range");if(null===t)return-1;return parseInt(t.substring(t.lastIndexOf("/")+1))}(i),this.parseChunk(i.responseText)))},this._chunkError=function(e){var t=i.statusText||e;this._sendError(new Error(t))}}function c(e){var i,n;(e=e||{}).chunkSize||(e.chunkSize=b.LocalChunkSize),h.call(this,e);var s="undefined"!=typeof FileReader;this.stream=function(e){this._input=e,n=e.slice||e.webkitSlice||e.mozSlice,s?((i=new FileReader).onload=v(this._chunkLoaded,this),i.onerror=v(this._chunkError,this)):i=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input;if(this._config.chunkSize){var t=Math.min(this._start+this._config.chunkSize,this._input.size);e=n.call(e,this._start,t)}var r=i.readAsText(e,this._config.encoding);s||this._chunkLoaded({target:{result:r}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(i.error)}}function p(e){var r;h.call(this,e=e||{}),this.stream=function(e){return r=e,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var e,t=this._config.chunkSize;return t?(e=r.substring(0,t),r=r.substring(t)):(e=r,r=""),this._finished=!r,this.parseChunk(e)}}}function g(e){h.call(this,e=e||{});var t=[],r=!0,i=!1;this.pause=function(){h.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){h.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(e){this._input=e,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){i&&1===t.length&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):r=!0},this._streamData=v(function(e){try{t.push("string"==typeof e?e:e.toString(this._config.encoding)),r&&(r=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(e){this._streamError(e)}},this),this._streamError=v(function(e){this._streamCleanUp(),this._sendError(e)},this),this._streamEnd=v(function(){this._streamCleanUp(),i=!0,this._streamData("")},this),this._streamCleanUp=v(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function r(m){var a,o,u,i=Math.pow(2,53),n=-i,s=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,h=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,t=this,r=0,f=0,d=!1,e=!1,l=[],c={data:[],errors:[],meta:{}};if(J(m.step)){var p=m.step;m.step=function(e){if(c=e,_())g();else{if(g(),0===c.data.length)return;r+=e.data.length,m.preview&&r>m.preview?o.abort():(c.data=c.data[0],p(c,t))}}}function y(e){return"greedy"===m.skipEmptyLines?""===e.join("").trim():1===e.length&&0===e[0].length}function g(){return c&&u&&(k("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+b.DefaultDelimiter+"'"),u=!1),m.skipEmptyLines&&(c.data=c.data.filter(function(e){return!y(e)})),_()&&function(){if(!c)return;function e(e,t){J(m.transformHeader)&&(e=m.transformHeader(e,t)),l.push(e)}if(Array.isArray(c.data[0])){for(var t=0;_()&&t<c.data.length;t++)c.data[t].forEach(e);c.data.splice(0,1)}else c.data.forEach(e)}(),function(){if(!c||!m.header&&!m.dynamicTyping&&!m.transform)return c;function e(e,t){var r,i=m.header?{}:[];for(r=0;r<e.length;r++){var n=r,s=e[r];m.header&&(n=r>=l.length?"__parsed_extra":l[r]),m.transform&&(s=m.transform(s,n)),s=v(n,s),"__parsed_extra"===n?(i[n]=i[n]||[],i[n].push(s)):i[n]=s}return m.header&&(r>l.length?k("FieldMismatch","TooManyFields","Too many fields: expected "+l.length+" fields but parsed "+r,f+t):r<l.length&&k("FieldMismatch","TooFewFields","Too few fields: expected "+l.length+" fields but parsed "+r,f+t)),i}var t=1;!c.data.length||Array.isArray(c.data[0])?(c.data=c.data.map(e),t=c.data.length):c.data=e(c.data,0);m.header&&c.meta&&(c.meta.fields=l);return f+=t,c}()}function _(){return m.header&&0===l.length}function v(e,t){return r=e,m.dynamicTypingFunction&&void 0===m.dynamicTyping[r]&&(m.dynamicTyping[r]=m.dynamicTypingFunction(r)),!0===(m.dynamicTyping[r]||m.dynamicTyping)?"true"===t||"TRUE"===t||"false"!==t&&"FALSE"!==t&&(function(e){if(s.test(e)){var t=parseFloat(e);if(n<t&&t<i)return!0}return!1}(t)?parseFloat(t):h.test(t)?new Date(t):""===t?null:t):t;var r}function k(e,t,r,i){var n={type:e,code:t,message:r};void 0!==i&&(n.row=i),c.errors.push(n)}this.parse=function(e,t,r){var i=m.quoteChar||'"';if(m.newline||(m.newline=function(e,t){e=e.substring(0,1048576);var r=new RegExp(Q(t)+"([^]*?)"+Q(t),"gm"),i=(e=e.replace(r,"")).split("\r"),n=e.split("\n"),s=1<n.length&&n[0].length<i[0].length;if(1===i.length||s)return"\n";for(var a=0,o=0;o<i.length;o++)"\n"===i[o][0]&&a++;return a>=i.length/2?"\r\n":"\r"}(e,i)),u=!1,m.delimiter)J(m.delimiter)&&(m.delimiter=m.delimiter(e),c.meta.delimiter=m.delimiter);else{var n=function(e,t,r,i,n){var s,a,o,u;n=n||[",","\t","|",";",b.RECORD_SEP,b.UNIT_SEP];for(var h=0;h<n.length;h++){var f=n[h],d=0,l=0,c=0;o=void 0;for(var p=new E({comments:i,delimiter:f,newline:t,preview:10}).parse(e),g=0;g<p.data.length;g++)if(r&&y(p.data[g]))c++;else{var _=p.data[g].length;l+=_,void 0!==o?0<_&&(d+=Math.abs(_-o),o=_):o=_}0<p.data.length&&(l/=p.data.length-c),(void 0===a||d<=a)&&(void 0===u||u<l)&&1.99<l&&(a=d,s=f,u=l)}return{successful:!!(m.delimiter=s),bestDelimiter:s}}(e,m.newline,m.skipEmptyLines,m.comments,m.delimitersToGuess);n.successful?m.delimiter=n.bestDelimiter:(u=!0,m.delimiter=b.DefaultDelimiter),c.meta.delimiter=m.delimiter}var s=w(m);return m.preview&&m.header&&s.preview++,a=e,o=new E(s),c=o.parse(a,t,r),g(),d?{meta:{paused:!0}}:c||{meta:{paused:!1}}},this.paused=function(){return d},this.pause=function(){d=!0,o.abort(),a=J(m.chunk)?"":a.substring(o.getCharIndex())},this.resume=function(){t.streamer._halted?(d=!1,t.streamer.parseChunk(a,!0)):setTimeout(t.resume,3)},this.aborted=function(){return e},this.abort=function(){e=!0,o.abort(),c.meta.aborted=!0,J(m.complete)&&m.complete(c),a=""}}function Q(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function E(j){var z,M=(j=j||{}).delimiter,P=j.newline,U=j.comments,q=j.step,N=j.preview,B=j.fastMode,K=z=void 0===j.quoteChar||null===j.quoteChar?'"':j.quoteChar;if(void 0!==j.escapeChar&&(K=j.escapeChar),("string"!=typeof M||-1<b.BAD_DELIMITERS.indexOf(M))&&(M=","),U===M)throw new Error("Comment character same as delimiter");!0===U?U="#":("string"!=typeof U||-1<b.BAD_DELIMITERS.indexOf(U))&&(U=!1),"\n"!==P&&"\r"!==P&&"\r\n"!==P&&(P="\n");var W=0,H=!1;this.parse=function(i,t,r){if("string"!=typeof i)throw new Error("Input must be a string");var n=i.length,e=M.length,s=P.length,a=U.length,o=J(q),u=[],h=[],f=[],d=W=0;if(!i)return L();if(j.header&&!t){var l=i.split(P)[0].split(M),c=[],p={},g=!1;for(var _ in l){var m=l[_];J(j.transformHeader)&&(m=j.transformHeader(m,_));var y=m,v=p[m]||0;for(0<v&&(g=!0,y=m+"_"+v),p[m]=v+1;c.includes(y);)y=y+"_"+v;c.push(y)}if(g){var k=i.split(P);k[0]=c.join(M),i=k.join(P)}}if(B||!1!==B&&-1===i.indexOf(z)){for(var b=i.split(P),E=0;E<b.length;E++){if(f=b[E],W+=f.length,E!==b.length-1)W+=P.length;else if(r)return L();if(!U||f.substring(0,a)!==U){if(o){if(u=[],I(f.split(M)),F(),H)return L()}else I(f.split(M));if(N&&N<=E)return u=u.slice(0,N),L(!0)}}return L()}for(var w=i.indexOf(M,W),R=i.indexOf(P,W),C=new RegExp(Q(K)+Q(z),"g"),S=i.indexOf(z,W);;)if(i[W]!==z)if(U&&0===f.length&&i.substring(W,W+a)===U){if(-1===R)return L();W=R+s,R=i.indexOf(P,W),w=i.indexOf(M,W)}else if(-1!==w&&(w<R||-1===R))f.push(i.substring(W,w)),W=w+e,w=i.indexOf(M,W);else{if(-1===R)break;if(f.push(i.substring(W,R)),D(R+s),o&&(F(),H))return L();if(N&&u.length>=N)return L(!0)}else for(S=W,W++;;){if(-1===(S=i.indexOf(z,S+1)))return r||h.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:u.length,index:W}),T();if(S===n-1)return T(i.substring(W,S).replace(C,z));if(z!==K||i[S+1]!==K){if(z===K||0===S||i[S-1]!==K){-1!==w&&w<S+1&&(w=i.indexOf(M,S+1)),-1!==R&&R<S+1&&(R=i.indexOf(P,S+1));var O=A(-1===R?w:Math.min(w,R));if(i.substr(S+1+O,e)===M){f.push(i.substring(W,S).replace(C,z)),i[W=S+1+O+e]!==z&&(S=i.indexOf(z,W)),w=i.indexOf(M,W),R=i.indexOf(P,W);break}var x=A(R);if(i.substring(S+1+x,S+1+x+s)===P){if(f.push(i.substring(W,S).replace(C,z)),D(S+1+x+s),w=i.indexOf(M,W),S=i.indexOf(z,W),o&&(F(),H))return L();if(N&&u.length>=N)return L(!0);break}h.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:u.length,index:W}),S++}}else S++}return T();function I(e){u.push(e),d=W}function A(e){var t=0;if(-1!==e){var r=i.substring(S+1,e);r&&""===r.trim()&&(t=r.length)}return t}function T(e){return r||(void 0===e&&(e=i.substring(W)),f.push(e),W=n,I(f),o&&F()),L()}function D(e){W=e,I(f),f=[],R=i.indexOf(P,W)}function L(e){return{data:u,errors:h,meta:{delimiter:M,linebreak:P,aborted:H,truncated:!!e,cursor:d+(t||0)}}}function F(){q(L()),u=[],h=[]}},this.abort=function(){H=!0},this.getCharIndex=function(){return W}}function _(e){var t=e.data,r=a[t.workerId],i=!1;if(t.error)r.userError(t.error,t.file);else if(t.results&&t.results.data){var n={abort:function(){i=!0,m(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:y,resume:y};if(J(r.userStep)){for(var s=0;s<t.results.data.length&&(r.userStep({data:t.results.data[s],errors:t.results.errors,meta:t.results.meta},n),!i);s++);delete t.results}else J(r.userChunk)&&(r.userChunk(t.results,n,t.file),delete t.results)}t.finished&&!i&&m(t.workerId,t.results)}function m(e,t){var r=a[e];J(r.userComplete)&&r.userComplete(t),r.terminate(),delete a[e]}function y(){throw new Error("Not implemented.")}function w(e){if("object"!=typeof e||null===e)return e;var t=Array.isArray(e)?[]:{};for(var r in e)t[r]=w(e[r]);return t}function v(e,t){return function(){e.apply(t,arguments)}}function J(e){return"function"==typeof e}return o&&(f.onmessage=function(e){var t=e.data;void 0===b.WORKER_ID&&t&&(b.WORKER_ID=t.workerId);if("string"==typeof t.input)f.postMessage({workerId:b.WORKER_ID,results:b.parse(t.input,t.config),finished:!0});else if(f.File&&t.input instanceof File||t.input instanceof Object){var r=b.parse(t.input,t.config);r&&f.postMessage({workerId:b.WORKER_ID,results:r,finished:!0})}}),(l.prototype=Object.create(h.prototype)).constructor=l,(c.prototype=Object.create(h.prototype)).constructor=c,(p.prototype=Object.create(p.prototype)).constructor=p,(g.prototype=Object.create(h.prototype)).constructor=g,b});
},{}],"../../../../node_modules/fancy-canvas/size.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.equalSizes = equalSizes;
exports.size = size;
function size(_a) {
  var width = _a.width,
    height = _a.height;
  if (width < 0) {
    throw new Error('Negative width is not allowed for Size');
  }
  if (height < 0) {
    throw new Error('Negative height is not allowed for Size');
  }
  return {
    width: width,
    height: height
  };
}
function equalSizes(first, second) {
  return first.width === second.width && first.height === second.height;
}
},{}],"../../../../node_modules/fancy-canvas/device-pixel-ratio.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createObservable = createObservable;
var Observable = /** @class */function () {
  function Observable(win) {
    var _this = this;
    this._resolutionListener = function () {
      return _this._onResolutionChanged();
    };
    this._resolutionMediaQueryList = null;
    this._observers = [];
    this._window = win;
    this._installResolutionListener();
  }
  Observable.prototype.dispose = function () {
    this._uninstallResolutionListener();
    this._window = null;
  };
  Object.defineProperty(Observable.prototype, "value", {
    get: function () {
      return this._window.devicePixelRatio;
    },
    enumerable: false,
    configurable: true
  });
  Observable.prototype.subscribe = function (next) {
    var _this = this;
    var observer = {
      next: next
    };
    this._observers.push(observer);
    return {
      unsubscribe: function () {
        _this._observers = _this._observers.filter(function (o) {
          return o !== observer;
        });
      }
    };
  };
  Observable.prototype._installResolutionListener = function () {
    if (this._resolutionMediaQueryList !== null) {
      throw new Error('Resolution listener is already installed');
    }
    var dppx = this._window.devicePixelRatio;
    this._resolutionMediaQueryList = this._window.matchMedia("all and (resolution: ".concat(dppx, "dppx)"));
    // IE and some versions of Edge do not support addEventListener/removeEventListener, and we are going to use the deprecated addListener/removeListener
    this._resolutionMediaQueryList.addListener(this._resolutionListener);
  };
  Observable.prototype._uninstallResolutionListener = function () {
    if (this._resolutionMediaQueryList !== null) {
      // IE and some versions of Edge do not support addEventListener/removeEventListener, and we are going to use the deprecated addListener/removeListener
      this._resolutionMediaQueryList.removeListener(this._resolutionListener);
      this._resolutionMediaQueryList = null;
    }
  };
  Observable.prototype._reinstallResolutionListener = function () {
    this._uninstallResolutionListener();
    this._installResolutionListener();
  };
  Observable.prototype._onResolutionChanged = function () {
    var _this = this;
    this._observers.forEach(function (observer) {
      return observer.next(_this._window.devicePixelRatio);
    });
    this._reinstallResolutionListener();
  };
  return Observable;
}();
function createObservable(win) {
  return new Observable(win);
}
},{}],"../../../../node_modules/fancy-canvas/canvas-element-bitmap-size.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bindTo = bindTo;
var _size = require("./size.mjs");
var _devicePixelRatio = require("./device-pixel-ratio.mjs");
var DevicePixelContentBoxBinding = /** @class */function () {
  function DevicePixelContentBoxBinding(canvasElement, transformBitmapSize, options) {
    var _a;
    this._canvasElement = null;
    this._bitmapSizeChangedListeners = [];
    this._suggestedBitmapSize = null;
    this._suggestedBitmapSizeChangedListeners = [];
    // devicePixelRatio approach
    this._devicePixelRatioObservable = null;
    // ResizeObserver approach
    this._canvasElementResizeObserver = null;
    this._canvasElement = canvasElement;
    this._canvasElementClientSize = (0, _size.size)({
      width: this._canvasElement.clientWidth,
      height: this._canvasElement.clientHeight
    });
    this._transformBitmapSize = transformBitmapSize !== null && transformBitmapSize !== void 0 ? transformBitmapSize : function (size) {
      return size;
    };
    this._allowResizeObserver = (_a = options === null || options === void 0 ? void 0 : options.allowResizeObserver) !== null && _a !== void 0 ? _a : true;
    this._chooseAndInitObserver();
    // we MAY leave the constuctor without any bitmap size observation mechanics initialized
  }

  DevicePixelContentBoxBinding.prototype.dispose = function () {
    var _a, _b;
    if (this._canvasElement === null) {
      throw new Error('Object is disposed');
    }
    (_a = this._canvasElementResizeObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
    this._canvasElementResizeObserver = null;
    (_b = this._devicePixelRatioObservable) === null || _b === void 0 ? void 0 : _b.dispose();
    this._devicePixelRatioObservable = null;
    this._suggestedBitmapSizeChangedListeners.length = 0;
    this._bitmapSizeChangedListeners.length = 0;
    this._canvasElement = null;
  };
  Object.defineProperty(DevicePixelContentBoxBinding.prototype, "canvasElement", {
    get: function () {
      if (this._canvasElement === null) {
        throw new Error('Object is disposed');
      }
      return this._canvasElement;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(DevicePixelContentBoxBinding.prototype, "canvasElementClientSize", {
    get: function () {
      return this._canvasElementClientSize;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(DevicePixelContentBoxBinding.prototype, "bitmapSize", {
    get: function () {
      return (0, _size.size)({
        width: this.canvasElement.width,
        height: this.canvasElement.height
      });
    },
    enumerable: false,
    configurable: true
  });
  /**
   * Use this function to change canvas element client size until binding is disposed
   * @param clientSize New client size for bound HTMLCanvasElement
   */
  DevicePixelContentBoxBinding.prototype.resizeCanvasElement = function (clientSize) {
    this._canvasElementClientSize = (0, _size.size)(clientSize);
    this.canvasElement.style.width = "".concat(this._canvasElementClientSize.width, "px");
    this.canvasElement.style.height = "".concat(this._canvasElementClientSize.height, "px");
    this._invalidateBitmapSize();
  };
  DevicePixelContentBoxBinding.prototype.subscribeBitmapSizeChanged = function (listener) {
    this._bitmapSizeChangedListeners.push(listener);
  };
  DevicePixelContentBoxBinding.prototype.unsubscribeBitmapSizeChanged = function (listener) {
    this._bitmapSizeChangedListeners = this._bitmapSizeChangedListeners.filter(function (l) {
      return l !== listener;
    });
  };
  Object.defineProperty(DevicePixelContentBoxBinding.prototype, "suggestedBitmapSize", {
    get: function () {
      return this._suggestedBitmapSize;
    },
    enumerable: false,
    configurable: true
  });
  DevicePixelContentBoxBinding.prototype.subscribeSuggestedBitmapSizeChanged = function (listener) {
    this._suggestedBitmapSizeChangedListeners.push(listener);
  };
  DevicePixelContentBoxBinding.prototype.unsubscribeSuggestedBitmapSizeChanged = function (listener) {
    this._suggestedBitmapSizeChangedListeners = this._suggestedBitmapSizeChangedListeners.filter(function (l) {
      return l !== listener;
    });
  };
  DevicePixelContentBoxBinding.prototype.applySuggestedBitmapSize = function () {
    if (this._suggestedBitmapSize === null) {
      // nothing to apply
      return;
    }
    var oldSuggestedSize = this._suggestedBitmapSize;
    this._suggestedBitmapSize = null;
    this._resizeBitmap(oldSuggestedSize);
    this._emitSuggestedBitmapSizeChanged(oldSuggestedSize, this._suggestedBitmapSize);
  };
  DevicePixelContentBoxBinding.prototype._resizeBitmap = function (newSize) {
    var oldSize = this.bitmapSize;
    if ((0, _size.equalSizes)(oldSize, newSize)) {
      return;
    }
    this.canvasElement.width = newSize.width;
    this.canvasElement.height = newSize.height;
    this._emitBitmapSizeChanged(oldSize, newSize);
  };
  DevicePixelContentBoxBinding.prototype._emitBitmapSizeChanged = function (oldSize, newSize) {
    var _this = this;
    this._bitmapSizeChangedListeners.forEach(function (listener) {
      return listener.call(_this, oldSize, newSize);
    });
  };
  DevicePixelContentBoxBinding.prototype._suggestNewBitmapSize = function (newSize) {
    var oldSuggestedSize = this._suggestedBitmapSize;
    var finalNewSize = (0, _size.size)(this._transformBitmapSize(newSize, this._canvasElementClientSize));
    var newSuggestedSize = (0, _size.equalSizes)(this.bitmapSize, finalNewSize) ? null : finalNewSize;
    if (oldSuggestedSize === null && newSuggestedSize === null) {
      return;
    }
    if (oldSuggestedSize !== null && newSuggestedSize !== null && (0, _size.equalSizes)(oldSuggestedSize, newSuggestedSize)) {
      return;
    }
    this._suggestedBitmapSize = newSuggestedSize;
    this._emitSuggestedBitmapSizeChanged(oldSuggestedSize, newSuggestedSize);
  };
  DevicePixelContentBoxBinding.prototype._emitSuggestedBitmapSizeChanged = function (oldSize, newSize) {
    var _this = this;
    this._suggestedBitmapSizeChangedListeners.forEach(function (listener) {
      return listener.call(_this, oldSize, newSize);
    });
  };
  DevicePixelContentBoxBinding.prototype._chooseAndInitObserver = function () {
    var _this = this;
    if (!this._allowResizeObserver) {
      this._initDevicePixelRatioObservable();
      return;
    }
    isDevicePixelContentBoxSupported().then(function (isSupported) {
      return isSupported ? _this._initResizeObserver() : _this._initDevicePixelRatioObservable();
    });
  };
  // devicePixelRatio approach
  DevicePixelContentBoxBinding.prototype._initDevicePixelRatioObservable = function () {
    var _this = this;
    if (this._canvasElement === null) {
      // it looks like we are already dead
      return;
    }
    var win = canvasElementWindow(this._canvasElement);
    if (win === null) {
      throw new Error('No window is associated with the canvas');
    }
    this._devicePixelRatioObservable = (0, _devicePixelRatio.createObservable)(win);
    this._devicePixelRatioObservable.subscribe(function () {
      return _this._invalidateBitmapSize();
    });
    this._invalidateBitmapSize();
  };
  DevicePixelContentBoxBinding.prototype._invalidateBitmapSize = function () {
    var _a, _b;
    if (this._canvasElement === null) {
      // it looks like we are already dead
      return;
    }
    var win = canvasElementWindow(this._canvasElement);
    if (win === null) {
      return;
    }
    var ratio = (_b = (_a = this._devicePixelRatioObservable) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : win.devicePixelRatio;
    var canvasRects = this._canvasElement.getClientRects();
    var newSize =
    // eslint-disable-next-line no-negated-condition
    canvasRects[0] !== undefined ? predictedBitmapSize(canvasRects[0], ratio) : (0, _size.size)({
      width: this._canvasElementClientSize.width * ratio,
      height: this._canvasElementClientSize.height * ratio
    });
    this._suggestNewBitmapSize(newSize);
  };
  // ResizeObserver approach
  DevicePixelContentBoxBinding.prototype._initResizeObserver = function () {
    var _this = this;
    if (this._canvasElement === null) {
      // it looks like we are already dead
      return;
    }
    this._canvasElementResizeObserver = new ResizeObserver(function (entries) {
      var entry = entries.find(function (entry) {
        return entry.target === _this._canvasElement;
      });
      if (!entry || !entry.devicePixelContentBoxSize || !entry.devicePixelContentBoxSize[0]) {
        return;
      }
      var entrySize = entry.devicePixelContentBoxSize[0];
      var newSize = (0, _size.size)({
        width: entrySize.inlineSize,
        height: entrySize.blockSize
      });
      _this._suggestNewBitmapSize(newSize);
    });
    this._canvasElementResizeObserver.observe(this._canvasElement, {
      box: 'device-pixel-content-box'
    });
  };
  return DevicePixelContentBoxBinding;
}();
function bindTo(canvasElement, target) {
  if (target.type === 'device-pixel-content-box') {
    return new DevicePixelContentBoxBinding(canvasElement, target.transform, target.options);
  }
  throw new Error('Unsupported binding target');
}
function canvasElementWindow(canvasElement) {
  // According to DOM Level 2 Core specification, ownerDocument should never be null for HTMLCanvasElement
  // see https://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#node-ownerDoc
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return canvasElement.ownerDocument.defaultView;
}
function isDevicePixelContentBoxSupported() {
  return new Promise(function (resolve) {
    var ro = new ResizeObserver(function (entries) {
      resolve(entries.every(function (entry) {
        return 'devicePixelContentBoxSize' in entry;
      }));
      ro.disconnect();
    });
    ro.observe(document.body, {
      box: 'device-pixel-content-box'
    });
  }).catch(function () {
    return false;
  });
}
function predictedBitmapSize(canvasRect, ratio) {
  return (0, _size.size)({
    width: Math.round(canvasRect.left * ratio + canvasRect.width * ratio) - Math.round(canvasRect.left * ratio),
    height: Math.round(canvasRect.top * ratio + canvasRect.height * ratio) - Math.round(canvasRect.top * ratio)
  });
}
},{"./size.mjs":"../../../../node_modules/fancy-canvas/size.mjs","./device-pixel-ratio.mjs":"../../../../node_modules/fancy-canvas/device-pixel-ratio.mjs"}],"../../../../node_modules/fancy-canvas/canvas-rendering-target.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CanvasRenderingTarget2D = void 0;
exports.createCanvasRenderingTarget2D = createCanvasRenderingTarget2D;
exports.tryCreateCanvasRenderingTarget2D = tryCreateCanvasRenderingTarget2D;
/**
 * @experimental
 */
var CanvasRenderingTarget2D = /** @class */function () {
  function CanvasRenderingTarget2D(context, mediaSize, bitmapSize) {
    if (mediaSize.width === 0 || mediaSize.height === 0) {
      throw new TypeError('Rendering target could only be created on a media with positive width and height');
    }
    this._mediaSize = mediaSize;
    // !Number.isInteger(bitmapSize.width) || !Number.isInteger(bitmapSize.height)
    if (bitmapSize.width === 0 || bitmapSize.height === 0) {
      throw new TypeError('Rendering target could only be created using a bitmap with positive integer width and height');
    }
    this._bitmapSize = bitmapSize;
    this._context = context;
  }
  CanvasRenderingTarget2D.prototype.useMediaCoordinateSpace = function (f) {
    try {
      this._context.save();
      // do not use resetTransform to support old versions of Edge
      this._context.setTransform(1, 0, 0, 1, 0, 0);
      this._context.scale(this._horizontalPixelRatio, this._verticalPixelRatio);
      return f({
        context: this._context,
        mediaSize: this._mediaSize
      });
    } finally {
      this._context.restore();
    }
  };
  CanvasRenderingTarget2D.prototype.useBitmapCoordinateSpace = function (f) {
    try {
      this._context.save();
      // do not use resetTransform to support old versions of Edge
      this._context.setTransform(1, 0, 0, 1, 0, 0);
      return f({
        context: this._context,
        mediaSize: this._mediaSize,
        bitmapSize: this._bitmapSize,
        horizontalPixelRatio: this._horizontalPixelRatio,
        verticalPixelRatio: this._verticalPixelRatio
      });
    } finally {
      this._context.restore();
    }
  };
  Object.defineProperty(CanvasRenderingTarget2D.prototype, "_horizontalPixelRatio", {
    get: function () {
      return this._bitmapSize.width / this._mediaSize.width;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(CanvasRenderingTarget2D.prototype, "_verticalPixelRatio", {
    get: function () {
      return this._bitmapSize.height / this._mediaSize.height;
    },
    enumerable: false,
    configurable: true
  });
  return CanvasRenderingTarget2D;
}();
exports.CanvasRenderingTarget2D = CanvasRenderingTarget2D;
/**
 * @experimental
 */
function createCanvasRenderingTarget2D(binding, contextOptions) {
  var mediaSize = binding.canvasElementClientSize;
  var bitmapSize = binding.bitmapSize;
  var context = binding.canvasElement.getContext('2d', contextOptions);
  if (context === null) {
    throw new Error('Could not get 2d drawing context from bound canvas element. Has the canvas already been set to a different context mode?');
  }
  return new CanvasRenderingTarget2D(context, mediaSize, bitmapSize);
}
/**
 * @experimental
 */
function tryCreateCanvasRenderingTarget2D(binding, contextOptions) {
  var mediaSize = binding.canvasElementClientSize;
  if (mediaSize.width === 0 || mediaSize.height === 0) {
    return null;
  }
  var bitmapSize = binding.bitmapSize;
  if (bitmapSize.width === 0 || bitmapSize.height === 0) {
    return null;
  }
  var context = binding.canvasElement.getContext('2d', contextOptions);
  if (context === null) {
    return null;
  }
  return new CanvasRenderingTarget2D(context, mediaSize, bitmapSize);
}
},{}],"../../../../node_modules/fancy-canvas/index.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "CanvasRenderingTarget2D", {
  enumerable: true,
  get: function () {
    return _canvasRenderingTarget.CanvasRenderingTarget2D;
  }
});
Object.defineProperty(exports, "bindCanvasElementBitmapSizeTo", {
  enumerable: true,
  get: function () {
    return _canvasElementBitmapSize.bindTo;
  }
});
Object.defineProperty(exports, "createCanvasRenderingTarget2D", {
  enumerable: true,
  get: function () {
    return _canvasRenderingTarget.createCanvasRenderingTarget2D;
  }
});
Object.defineProperty(exports, "equalSizes", {
  enumerable: true,
  get: function () {
    return _size.equalSizes;
  }
});
Object.defineProperty(exports, "size", {
  enumerable: true,
  get: function () {
    return _size.size;
  }
});
Object.defineProperty(exports, "tryCreateCanvasRenderingTarget2D", {
  enumerable: true,
  get: function () {
    return _canvasRenderingTarget.tryCreateCanvasRenderingTarget2D;
  }
});
var _size = require("./size.mjs");
var _canvasElementBitmapSize = require("./canvas-element-bitmap-size.mjs");
var _canvasRenderingTarget = require("./canvas-rendering-target.mjs");
},{"./size.mjs":"../../../../node_modules/fancy-canvas/size.mjs","./canvas-element-bitmap-size.mjs":"../../../../node_modules/fancy-canvas/canvas-element-bitmap-size.mjs","./canvas-rendering-target.mjs":"../../../../node_modules/fancy-canvas/canvas-rendering-target.mjs"}],"../../../../node_modules/lightweight-charts/dist/lightweight-charts.production.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TrackingModeExitMode = exports.TickMarkType = exports.PriceScaleMode = exports.PriceLineSource = exports.MismatchDirection = exports.LineType = exports.LineStyle = exports.LastPriceAnimationMode = exports.CrosshairMode = exports.ColorType = void 0;
exports.createChart = Ws;
exports.isBusinessDay = bn;
exports.isUTCTimestamp = gn;
exports.version = js;
var _fancyCanvas = require("fancy-canvas");
/*!
 * @license
 * TradingView Lightweight Charts v4.0.0
 * Copyright (c) 2023 TradingView, Inc.
 * Licensed under Apache License 2.0 https://www.apache.org/licenses/LICENSE-2.0
 */
var e, r;
exports.LineStyle = r;
exports.LineType = e;
function h(t, i) {
  const n = {
    0: [],
    1: [t.lineWidth, t.lineWidth],
    2: [2 * t.lineWidth, 2 * t.lineWidth],
    3: [6 * t.lineWidth, 6 * t.lineWidth],
    4: [t.lineWidth, 4 * t.lineWidth]
  }[i];
  t.setLineDash(n);
}
function l(t, i, n, s) {
  t.beginPath();
  const e = t.lineWidth % 2 ? .5 : 0;
  t.moveTo(n, i + e), t.lineTo(s, i + e), t.stroke();
}
function a(t, i) {
  if (!t) throw new Error("Assertion failed" + (i ? ": " + i : ""));
}
function o(t) {
  if (void 0 === t) throw new Error("Value is undefined");
  return t;
}
function _(t) {
  if (null === t) throw new Error("Value is null");
  return t;
}
function u(t) {
  return _(o(t));
}
!function (t) {
  t[t.Simple = 0] = "Simple", t[t.WithSteps = 1] = "WithSteps", t[t.Curved = 2] = "Curved";
}(e || (exports.LineType = e = {})), function (t) {
  t[t.Solid = 0] = "Solid", t[t.Dotted = 1] = "Dotted", t[t.Dashed = 2] = "Dashed", t[t.LargeDashed = 3] = "LargeDashed", t[t.SparseDotted = 4] = "SparseDotted";
}(r || (exports.LineStyle = r = {}));
const c = {
  khaki: "#f0e68c",
  azure: "#f0ffff",
  aliceblue: "#f0f8ff",
  ghostwhite: "#f8f8ff",
  gold: "#ffd700",
  goldenrod: "#daa520",
  gainsboro: "#dcdcdc",
  gray: "#808080",
  green: "#008000",
  honeydew: "#f0fff0",
  floralwhite: "#fffaf0",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lemonchiffon: "#fffacd",
  hotpink: "#ff69b4",
  lightyellow: "#ffffe0",
  greenyellow: "#adff2f",
  lightgoldenrodyellow: "#fafad2",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  lightcyan: "#e0ffff",
  magenta: "#f0f",
  maroon: "#800000",
  olive: "#808000",
  orange: "#ffa500",
  oldlace: "#fdf5e6",
  mediumblue: "#0000cd",
  transparent: "#0000",
  lime: "#0f0",
  lightpink: "#ffb6c1",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  midnightblue: "#191970",
  orchid: "#da70d6",
  mediumorchid: "#ba55d3",
  mediumturquoise: "#48d1cc",
  orangered: "#ff4500",
  royalblue: "#4169e1",
  powderblue: "#b0e0e6",
  red: "#f00",
  coral: "#ff7f50",
  turquoise: "#40e0d0",
  white: "#fff",
  whitesmoke: "#f5f5f5",
  wheat: "#f5deb3",
  teal: "#008080",
  steelblue: "#4682b4",
  bisque: "#ffe4c4",
  aquamarine: "#7fffd4",
  aqua: "#0ff",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  springgreen: "#00ff7f",
  antiquewhite: "#faebd7",
  burlywood: "#deb887",
  brown: "#a52a2a",
  beige: "#f5f5dc",
  chocolate: "#d2691e",
  chartreuse: "#7fff00",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cadetblue: "#5f9ea0",
  tomato: "#ff6347",
  fuchsia: "#f0f",
  blue: "#00f",
  salmon: "#fa8072",
  blanchedalmond: "#ffebcd",
  slateblue: "#6a5acd",
  slategray: "#708090",
  thistle: "#d8bfd8",
  tan: "#d2b48c",
  cyan: "#0ff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  blueviolet: "#8a2be2",
  black: "#000",
  darkmagenta: "#8b008b",
  darkslateblue: "#483d8b",
  darkkhaki: "#bdb76b",
  darkorchid: "#9932cc",
  darkorange: "#ff8c00",
  darkgreen: "#006400",
  darkred: "#8b0000",
  dodgerblue: "#1e90ff",
  darkslategray: "#2f4f4f",
  dimgray: "#696969",
  deepskyblue: "#00bfff",
  firebrick: "#b22222",
  forestgreen: "#228b22",
  indigo: "#4b0082",
  ivory: "#fffff0",
  lavenderblush: "#fff0f5",
  feldspar: "#d19275",
  indianred: "#cd5c5c",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightskyblue: "#87cefa",
  lightslategray: "#789",
  lightslateblue: "#8470ff",
  snow: "#fffafa",
  lightseagreen: "#20b2aa",
  lightsalmon: "#ffa07a",
  darksalmon: "#e9967a",
  darkviolet: "#9400d3",
  mediumpurple: "#9370d8",
  mediumaquamarine: "#66cdaa",
  skyblue: "#87ceeb",
  lavender: "#e6e6fa",
  lightsteelblue: "#b0c4de",
  mediumvioletred: "#c71585",
  mintcream: "#f5fffa",
  navajowhite: "#ffdead",
  navy: "#000080",
  olivedrab: "#6b8e23",
  palevioletred: "#d87093",
  violetred: "#d02090",
  yellow: "#ff0",
  yellowgreen: "#9acd32",
  lawngreen: "#7cfc00",
  pink: "#ffc0cb",
  paleturquoise: "#afeeee",
  palegoldenrod: "#eee8aa",
  darkolivegreen: "#556b2f",
  darkseagreen: "#8fbc8f",
  darkturquoise: "#00ced1",
  peachpuff: "#ffdab9",
  deeppink: "#ff1493",
  violet: "#ee82ee",
  palegreen: "#98fb98",
  mediumseagreen: "#3cb371",
  peru: "#cd853f",
  saddlebrown: "#8b4513",
  sandybrown: "#f4a460",
  rosybrown: "#bc8f8f",
  purple: "#800080",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  papayawhip: "#ffefd5",
  mediumslateblue: "#7b68ee",
  plum: "#dda0dd",
  mediumspringgreen: "#00fa9a"
};
function d(t) {
  return t < 0 ? 0 : t > 255 ? 255 : Math.round(t) || 0;
}
function f(t) {
  return t <= 0 || t > 0 ? t < 0 ? 0 : t > 1 ? 1 : Math.round(1e4 * t) / 1e4 : 0;
}
const p = /^#([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])?$/i,
  v = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})?$/i,
  m = /^rgb\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*\)$/,
  b = /^rgba\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?[\d]{0,10}(?:\.\d+)?)\s*\)$/;
function g(t) {
  (t = t.toLowerCase()) in c && (t = c[t]);
  {
    const i = b.exec(t) || m.exec(t);
    if (i) return [d(parseInt(i[1], 10)), d(parseInt(i[2], 10)), d(parseInt(i[3], 10)), f(i.length < 5 ? 1 : parseFloat(i[4]))];
  }
  {
    const i = v.exec(t);
    if (i) return [d(parseInt(i[1], 16)), d(parseInt(i[2], 16)), d(parseInt(i[3], 16)), 1];
  }
  {
    const i = p.exec(t);
    if (i) return [d(17 * parseInt(i[1], 16)), d(17 * parseInt(i[2], 16)), d(17 * parseInt(i[3], 16)), 1];
  }
  throw new Error(`Cannot parse color: ${t}`);
}
function w(t) {
  const i = g(t);
  return {
    t: `rgb(${i[0]}, ${i[1]}, ${i[2]})`,
    i: (n = i, .199 * n[0] + .687 * n[1] + .114 * n[2] > 160 ? "black" : "white")
  };
  var n;
}
class M {
  constructor() {
    this.h = [];
  }
  l(t, i, n) {
    const s = {
      o: t,
      _: i,
      u: !0 === n
    };
    this.h.push(s);
  }
  p(t) {
    const i = this.h.findIndex(i => t === i.o);
    i > -1 && this.h.splice(i, 1);
  }
  v(t) {
    this.h = this.h.filter(i => i._ !== t);
  }
  m(t, i, n) {
    const s = [...this.h];
    this.h = this.h.filter(t => !t.u), s.forEach(s => s.o(t, i, n));
  }
  g() {
    return this.h.length > 0;
  }
  M() {
    this.h = [];
  }
}
function S(t, ...i) {
  for (const n of i) for (const i in n) void 0 !== n[i] && ("object" != typeof n[i] || void 0 === t[i] ? t[i] = n[i] : S(t[i], n[i]));
  return t;
}
function x(t) {
  return "number" == typeof t && isFinite(t);
}
function y(t) {
  return "number" == typeof t && t % 1 == 0;
}
function k(t) {
  return "string" == typeof t;
}
function C(t) {
  return "boolean" == typeof t;
}
function T(t) {
  const i = t;
  if (!i || "object" != typeof i) return i;
  let n, s, e;
  for (s in n = Array.isArray(i) ? [] : {}, i) i.hasOwnProperty(s) && (e = i[s], n[s] = e && "object" == typeof e ? T(e) : e);
  return n;
}
function P(t) {
  return null !== t;
}
function R(t) {
  return null === t ? void 0 : t;
}
const D = "-apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu, sans-serif";
function B(t, i, n) {
  return void 0 === i && (i = D), `${n = void 0 !== n ? `${n} ` : ""}${t}px ${i}`;
}
class O {
  constructor(t) {
    this.S = {
      k: 1,
      C: 5,
      T: NaN,
      P: "",
      R: "",
      D: "",
      B: "",
      O: 0,
      A: 0,
      L: 0,
      I: 0,
      V: 0
    }, this.N = t;
  }
  F() {
    const t = this.S,
      i = this.W(),
      n = this.j();
    return t.T === i && t.R === n || (t.T = i, t.R = n, t.P = B(i, n), t.I = 2.5 / 12 * i, t.O = t.I, t.A = i / 12 * t.C, t.L = i / 12 * t.C, t.V = 0), t.D = this.$(), t.B = this.H(), this.S;
  }
  $() {
    return this.N.F().layout.textColor;
  }
  H() {
    return this.N.U();
  }
  W() {
    return this.N.F().layout.fontSize;
  }
  j() {
    return this.N.F().layout.fontFamily;
  }
}
class A {
  constructor() {
    this.q = [];
  }
  Y(t) {
    this.q = t;
  }
  X(t, i, n) {
    this.q.forEach(s => {
      s.X(t, i, n);
    });
  }
}
class L {
  X(t, i, n) {
    t.useMediaCoordinateSpace(t => this.Z(t, i, n));
  }
  K(t, i, n) {
    t.useMediaCoordinateSpace(t => this.G(t, i, n));
  }
  G(t, i, n) {}
}
class I extends L {
  constructor() {
    super(...arguments), this.J = null;
  }
  tt(t) {
    this.J = t;
  }
  Z({
    context: t
  }) {
    if (null === this.J || null === this.J.it) return;
    const i = this.J.it,
      n = this.J,
      s = s => {
        t.beginPath();
        for (let e = i.to - 1; e >= i.from; --e) {
          const i = n.nt[e];
          t.moveTo(i.st, i.et), t.arc(i.st, i.et, s, 0, 2 * Math.PI);
        }
        t.fill();
      };
    n.rt > 0 && (t.fillStyle = n.ht, s(n.lt + n.rt)), t.fillStyle = n.ot, s(n.lt);
  }
}
function E() {
  return {
    nt: [{
      st: 0,
      et: 0,
      _t: 0,
      ut: 0
    }],
    ot: "",
    ht: "",
    lt: 0,
    rt: 0,
    it: null
  };
}
const V = {
  from: 0,
  to: 1
};
class z {
  constructor(t, i) {
    this.ct = new A(), this.dt = [], this.ft = [], this.vt = !0, this.N = t, this.bt = i, this.ct.Y(this.dt);
  }
  gt(t) {
    const i = this.N.wt();
    i.length !== this.dt.length && (this.ft = i.map(E), this.dt = this.ft.map(t => {
      const i = new I();
      return i.tt(t), i;
    }), this.ct.Y(this.dt)), this.vt = !0;
  }
  Mt() {
    return this.vt && (this.St(), this.vt = !1), this.ct;
  }
  St() {
    const t = this.N.wt(),
      i = this.bt.xt(),
      n = this.N.yt();
    t.forEach((t, s) => {
      var e;
      const r = this.ft[s],
        h = t.kt(i);
      if (null === h || !t.Ct()) return void (r.it = null);
      const l = _(t.Tt());
      r.ot = h.Pt, r.lt = h.lt, r.rt = h.Rt, r.nt[0].ut = h.ut, r.nt[0].et = t.Bt().Dt(h.ut, l.Ot), r.ht = null !== (e = h.At) && void 0 !== e ? e : this.N.Lt(r.nt[0].et / t.Bt().It()), r.nt[0]._t = i, r.nt[0].st = n.Et(i), r.it = V;
    });
  }
}
class N {
  X(t, i, n) {
    t.useBitmapCoordinateSpace(t => this.Z(t, i, n));
  }
}
class F extends N {
  constructor(t) {
    super(), this.Vt = t;
  }
  Z({
    context: t,
    bitmapSize: i,
    horizontalPixelRatio: n,
    verticalPixelRatio: s
  }) {
    if (null === this.Vt) return;
    const e = this.Vt.zt.Ct,
      r = this.Vt.Nt.Ct;
    if (!e && !r) return;
    const a = Math.round(this.Vt.st * n),
      o = Math.round(this.Vt.et * s);
    t.lineCap = "butt", e && a >= 0 && (t.lineWidth = Math.floor(this.Vt.zt.rt * n), t.strokeStyle = this.Vt.zt.D, t.fillStyle = this.Vt.zt.D, h(t, this.Vt.zt.Ft), function (t, i, n, s) {
      t.beginPath();
      const e = t.lineWidth % 2 ? .5 : 0;
      t.moveTo(i + e, n), t.lineTo(i + e, s), t.stroke();
    }(t, a, 0, i.height)), r && o >= 0 && (t.lineWidth = Math.floor(this.Vt.Nt.rt * s), t.strokeStyle = this.Vt.Nt.D, t.fillStyle = this.Vt.Nt.D, h(t, this.Vt.Nt.Ft), l(t, o, 0, i.width));
  }
}
class W {
  constructor(t) {
    this.vt = !0, this.Wt = {
      zt: {
        rt: 1,
        Ft: 0,
        D: "",
        Ct: !1
      },
      Nt: {
        rt: 1,
        Ft: 0,
        D: "",
        Ct: !1
      },
      st: 0,
      et: 0
    }, this.jt = new F(this.Wt), this.$t = t;
  }
  gt() {
    this.vt = !0;
  }
  Mt() {
    return this.vt && (this.St(), this.vt = !1), this.jt;
  }
  St() {
    const t = this.$t.Ct(),
      i = _(this.$t.Ht()),
      n = i.Ut().F().crosshair,
      s = this.Wt;
    s.Nt.Ct = t && this.$t.qt(i), s.zt.Ct = t && this.$t.Yt(), s.Nt.rt = n.horzLine.width, s.Nt.Ft = n.horzLine.style, s.Nt.D = n.horzLine.color, s.zt.rt = n.vertLine.width, s.zt.Ft = n.vertLine.style, s.zt.D = n.vertLine.color, s.st = this.$t.Xt(), s.et = this.$t.Zt();
  }
}
function j(t, i, n, s, e, r) {
  t.fillRect(i + r, n, s - 2 * r, r), t.fillRect(i + r, n + e - r, s - 2 * r, r), t.fillRect(i, n, r, e), t.fillRect(i + s - r, n, r, e);
}
function $(t, i, n, s, e, r) {
  t.save(), t.globalCompositeOperation = "copy", t.fillStyle = r, t.fillRect(i, n, s, e), t.restore();
}
function H(t, i) {
  return Array.isArray(t) ? t.map(t => 0 === t ? t : t + i) : t + i;
}
function U(t, i, n, s, e, r) {
  let h, l, a, o;
  if (Array.isArray(r)) {
    if (2 === r.length) {
      const t = Math.max(0, r[0]),
        i = Math.max(0, r[1]);
      h = t, l = t, a = i, o = i;
    } else {
      if (4 !== r.length) throw new Error("Wrong border radius - it should be like css border radius");
      h = Math.max(0, r[0]), l = Math.max(0, r[1]), a = Math.max(0, r[2]), o = Math.max(0, r[3]);
    }
  } else {
    const t = Math.max(0, r);
    h = t, l = t, a = t, o = t;
  }
  t.beginPath(), t.moveTo(i + h, n), t.lineTo(i + s - l, n), 0 !== l && t.arcTo(i + s, n, i + s, n + l, l), t.lineTo(i + s, n + e - a), 0 !== a && t.arcTo(i + s, n + e, i + s - a, n + e, a), t.lineTo(i + o, n + e), 0 !== o && t.arcTo(i, n + e, i, n + e - o, o), t.lineTo(i, n + h), 0 !== h && t.arcTo(i, n, i + h, n, h);
}
function q(t, i, n, s, e, r, h = 0, l = 0, a = "") {
  if (t.save(), !h || !a || a === r) return U(t, i, n, s, e, l), t.fillStyle = r, t.fill(), void t.restore();
  const o = h / 2;
  if ("transparent" !== r) {
    U(t, i + h, n + h, s - 2 * h, e - 2 * h, H(l, -h)), t.fillStyle = r, t.fill();
  }
  if ("transparent" !== a) {
    U(t, i + o, n + o, s - h, e - h, H(l, -o)), t.lineWidth = h, t.strokeStyle = a, t.closePath(), t.stroke();
  }
  t.restore();
}
function Y(t, i, n, s, e, r, h) {
  t.save(), t.globalCompositeOperation = "copy";
  const l = t.createLinearGradient(0, 0, 0, e);
  l.addColorStop(0, r), l.addColorStop(1, h), t.fillStyle = l, t.fillRect(i, n, s, e), t.restore();
}
class X {
  constructor(t, i) {
    this.tt(t, i);
  }
  tt(t, i) {
    this.Vt = t, this.Kt = i;
  }
  It(t, i) {
    return this.Vt.Ct ? t.T + t.I + t.O : 0;
  }
  X(t, i, n, s) {
    if (!this.Vt.Ct || 0 === this.Vt.Gt.length) return;
    const e = this.Vt.D || this.Kt.D,
      r = this.Kt.t,
      h = t.useBitmapCoordinateSpace(t => {
        const h = t.context;
        h.font = i.P;
        const l = this.Jt(t, i, n, s),
          a = l.Qt,
          o = (t, i) => {
            l.ti ? q(h, a.ii, a.ni, a.si, a.ei, t, a.ri, [a.lt, 0, 0, a.lt], i) : q(h, a.hi, a.ni, a.si, a.ei, t, a.ri, [0, a.lt, a.lt, 0], i);
          };
        return o(r, "transparent"), this.Vt.li && (h.fillStyle = e, h.fillRect(a.hi, a.ai, a.oi - a.hi, a._i)), o("transparent", r), this.Vt.ui && (h.fillStyle = i.B, h.fillRect(l.ti ? a.ci - a.ri : 0, a.ni, a.ri, a.di - a.ni)), l;
      });
    t.useMediaCoordinateSpace(({
      context: t
    }) => {
      const n = h.fi;
      t.font = i.P, t.textAlign = h.ti ? "right" : "left", t.textBaseline = "middle", t.fillStyle = e, t.fillText(this.Vt.Gt, n.pi, (n.ni + n.di) / 2 + n.vi);
    });
  }
  Jt(t, i, n, s) {
    var e;
    const {
        context: r,
        bitmapSize: h,
        mediaSize: l,
        horizontalPixelRatio: a,
        verticalPixelRatio: o
      } = t,
      _ = this.Vt.li || !this.Vt.mi ? i.C : 0,
      u = this.Vt.bi ? i.k : 0,
      c = i.I + this.Kt.gi,
      d = i.O + this.Kt.wi,
      f = i.A,
      p = i.L,
      v = this.Vt.Gt,
      m = i.T,
      b = n.Mi(r, v),
      g = Math.ceil(n.Si(r, v)),
      w = m + c + d,
      M = i.k + f + p + g + _,
      S = Math.max(1, Math.floor(o));
    let x = Math.round(w * o);
    x % 2 != S % 2 && (x += 1);
    const y = u > 0 ? Math.max(1, Math.floor(u * a)) : 0,
      k = Math.round(M * a),
      C = Math.round(_ * a),
      T = null !== (e = this.Kt.xi) && void 0 !== e ? e : this.Kt.yi,
      P = Math.round(T * o) - Math.floor(.5 * o),
      R = Math.floor(P + S / 2 - x / 2),
      D = R + x,
      B = "right" === s,
      O = B ? l.width - u : u,
      A = B ? h.width - y : y;
    let L, I, E;
    return B ? (L = A - k, I = A - C, E = O - _ - f - u) : (L = A + k, I = A + C, E = O + _ + f), {
      ti: B,
      Qt: {
        ni: R,
        ai: P,
        di: D,
        si: k,
        ei: x,
        lt: 2 * a,
        ri: y,
        ii: L,
        hi: A,
        oi: I,
        _i: S,
        ci: h.width
      },
      fi: {
        ni: R / o,
        di: D / o,
        pi: E,
        vi: b
      }
    };
  }
}
class Z {
  constructor(t) {
    this.ki = {
      yi: 0,
      D: "#FFF",
      t: "#000",
      wi: 0,
      gi: 0
    }, this.Ci = {
      Gt: "",
      Ct: !1,
      li: !0,
      mi: !1,
      At: "",
      D: "#FFF",
      ui: !1,
      bi: !1
    }, this.Ti = {
      Gt: "",
      Ct: !1,
      li: !1,
      mi: !0,
      At: "",
      D: "#FFF",
      ui: !0,
      bi: !0
    }, this.vt = !0, this.Pi = new (t || X)(this.Ci, this.ki), this.Ri = new (t || X)(this.Ti, this.ki);
  }
  Gt() {
    return this.Di(), this.Ci.Gt;
  }
  yi() {
    return this.Di(), this.ki.yi;
  }
  gt() {
    this.vt = !0;
  }
  It(t, i = !1) {
    return Math.max(this.Pi.It(t, i), this.Ri.It(t, i));
  }
  Bi() {
    return this.ki.xi || 0;
  }
  Oi(t) {
    this.ki.xi = t;
  }
  Ai() {
    return this.Di(), this.Ci.Ct || this.Ti.Ct;
  }
  Li() {
    return this.Di(), this.Ci.Ct;
  }
  Mt(t) {
    return this.Di(), this.Ci.li = this.Ci.li && t.F().ticksVisible, this.Ti.li = this.Ti.li && t.F().ticksVisible, this.Pi.tt(this.Ci, this.ki), this.Ri.tt(this.Ti, this.ki), this.Pi;
  }
  Ii() {
    return this.Di(), this.Pi.tt(this.Ci, this.ki), this.Ri.tt(this.Ti, this.ki), this.Ri;
  }
  Di() {
    this.vt && (this.Ci.li = !0, this.Ti.li = !1, this.Ei(this.Ci, this.Ti, this.ki));
  }
}
class K extends Z {
  constructor(t, i, n) {
    super(), this.$t = t, this.Vi = i, this.zi = n;
  }
  Ei(t, i, n) {
    t.Ct = !1;
    const s = this.$t.F().horzLine;
    if (!s.labelVisible) return;
    const e = this.Vi.Tt();
    if (!this.$t.Ct() || this.Vi.Ni() || null === e) return;
    const r = w(s.labelBackgroundColor);
    n.t = r.t, n.D = r.i;
    const h = 2 / 12 * this.Vi.T();
    n.gi = h, n.wi = h;
    const l = this.zi(this.Vi);
    n.yi = l.yi, t.Gt = this.Vi.Fi(l.ut, e), t.Ct = !0;
  }
}
const G = /[1-9]/g;
class J {
  constructor() {
    this.Vt = null;
  }
  tt(t) {
    this.Vt = t;
  }
  X(t, i) {
    if (null === this.Vt || !1 === this.Vt.Ct || 0 === this.Vt.Gt.length) return;
    const n = t.useMediaCoordinateSpace(({
      context: t
    }) => (t.font = i.P, Math.round(i.Wi.Si(t, _(this.Vt).Gt, G))));
    if (n <= 0) return;
    const s = i.ji,
      e = n + 2 * s,
      r = e / 2,
      h = this.Vt.$i;
    let l = this.Vt.yi,
      a = Math.floor(l - r) + .5;
    a < 0 ? (l += Math.abs(0 - a), a = Math.floor(l - r) + .5) : a + e > h && (l -= Math.abs(h - (a + e)), a = Math.floor(l - r) + .5);
    const o = a + e,
      u = Math.ceil(0 + i.k + i.C + i.I + i.T + i.O);
    t.useBitmapCoordinateSpace(({
      context: t,
      horizontalPixelRatio: n,
      verticalPixelRatio: s
    }) => {
      const e = _(this.Vt);
      t.fillStyle = e.t;
      const r = Math.round(a * n),
        h = Math.round(0 * s),
        l = Math.round(o * n),
        c = Math.round(u * s),
        d = Math.round(2 * n);
      if (t.beginPath(), t.moveTo(r, h), t.lineTo(r, c - d), t.arcTo(r, c, r + d, c, d), t.lineTo(l - d, c), t.arcTo(l, c, l, c - d, d), t.lineTo(l, h), t.fill(), e.li) {
        const r = Math.round(e.yi * n),
          l = h,
          a = Math.round((l + i.C) * s);
        t.fillStyle = e.D;
        const o = Math.max(1, Math.floor(n)),
          _ = Math.floor(.5 * n);
        t.fillRect(r - _, l, o, a - l);
      }
    }), t.useMediaCoordinateSpace(({
      context: t
    }) => {
      const n = _(this.Vt),
        e = 0 + i.k + i.C + i.I + i.T / 2;
      t.font = i.P, t.textAlign = "left", t.textBaseline = "middle", t.fillStyle = n.D;
      const r = i.Wi.Mi(t, "Apr0");
      t.translate(a + s, e + r), t.fillText(n.Gt, 0, 0);
    });
  }
}
class Q {
  constructor(t, i, n) {
    this.vt = !0, this.jt = new J(), this.Wt = {
      Ct: !1,
      t: "#4c525e",
      D: "white",
      Gt: "",
      $i: 0,
      yi: NaN,
      li: !0
    }, this.bt = t, this.Hi = i, this.zi = n;
  }
  gt() {
    this.vt = !0;
  }
  Mt() {
    return this.vt && (this.St(), this.vt = !1), this.jt.tt(this.Wt), this.jt;
  }
  St() {
    const t = this.Wt;
    t.Ct = !1;
    const i = this.bt.F().vertLine;
    if (!i.labelVisible) return;
    const n = this.Hi.yt();
    if (n.Ni()) return;
    t.$i = n.$i();
    const s = this.zi();
    if (null === s) return;
    t.yi = s.yi;
    const e = n.Ui(this.bt.xt());
    t.Gt = n.qi(_(e)), t.Ct = !0;
    const r = w(i.labelBackgroundColor);
    t.t = r.t, t.D = r.i, t.li = n.F().ticksVisible;
  }
}
class tt {
  constructor() {
    this.Yi = null, this.Xi = 0;
  }
  Zi() {
    return this.Xi;
  }
  Ki(t) {
    this.Xi = t;
  }
  Bt() {
    return this.Yi;
  }
  Gi(t) {
    this.Yi = t;
  }
  Ji(t) {
    return [];
  }
  Qi() {
    return [];
  }
  Ct() {
    return !0;
  }
}
var it;
exports.CrosshairMode = it;
!function (t) {
  t[t.Normal = 0] = "Normal", t[t.Magnet = 1] = "Magnet";
}(it || (exports.CrosshairMode = it = {}));
class nt extends tt {
  constructor(t, i) {
    super(), this.tn = null, this.nn = NaN, this.sn = 0, this.en = !0, this.rn = new Map(), this.hn = !1, this.ln = NaN, this.an = NaN, this.on = NaN, this._n = NaN, this.Hi = t, this.un = i, this.cn = new z(t, this);
    this.dn = ((t, i) => n => {
      const s = i(),
        e = t();
      if (n === _(this.tn).fn()) return {
        ut: e,
        yi: s
      };
      {
        const t = _(n.Tt());
        return {
          ut: n.pn(s, t),
          yi: s
        };
      }
    })(() => this.nn, () => this.an);
    const n = ((t, i) => () => {
      const n = this.Hi.yt().vn(t()),
        s = i();
      return n && Number.isFinite(s) ? {
        _t: n,
        yi: s
      } : null;
    })(() => this.sn, () => this.Xt());
    this.mn = new Q(this, t, n), this.bn = new W(this);
  }
  F() {
    return this.un;
  }
  gn(t, i) {
    this.on = t, this._n = i;
  }
  wn() {
    this.on = NaN, this._n = NaN;
  }
  Mn() {
    return this.on;
  }
  Sn() {
    return this._n;
  }
  xn(t, i, n) {
    this.hn || (this.hn = !0), this.en = !0, this.yn(t, i, n);
  }
  xt() {
    return this.sn;
  }
  Xt() {
    return this.ln;
  }
  Zt() {
    return this.an;
  }
  Ct() {
    return this.en;
  }
  kn() {
    this.en = !1, this.Cn(), this.nn = NaN, this.ln = NaN, this.an = NaN, this.tn = null, this.wn();
  }
  Tn(t) {
    return null !== this.tn ? [this.bn, this.cn] : [];
  }
  qt(t) {
    return t === this.tn && this.un.horzLine.visible;
  }
  Yt() {
    return this.un.vertLine.visible;
  }
  Pn(t, i) {
    this.en && this.tn === t || this.rn.clear();
    const n = [];
    return this.tn === t && n.push(this.Rn(this.rn, i, this.dn)), n;
  }
  Qi() {
    return this.en ? [this.mn] : [];
  }
  Ht() {
    return this.tn;
  }
  Dn() {
    this.bn.gt(), this.rn.forEach(t => t.gt()), this.mn.gt(), this.cn.gt();
  }
  Bn(t) {
    return t && !t.fn().Ni() ? t.fn() : null;
  }
  yn(t, i, n) {
    this.On(t, i, n) && this.Dn();
  }
  On(t, i, n) {
    const s = this.ln,
      e = this.an,
      r = this.nn,
      h = this.sn,
      l = this.tn,
      a = this.Bn(n);
    this.sn = t, this.ln = isNaN(t) ? NaN : this.Hi.yt().Et(t), this.tn = n;
    const o = null !== a ? a.Tt() : null;
    return null !== a && null !== o ? (this.nn = i, this.an = a.Dt(i, o)) : (this.nn = NaN, this.an = NaN), s !== this.ln || e !== this.an || h !== this.sn || r !== this.nn || l !== this.tn;
  }
  Cn() {
    const t = this.Hi.wt().map(t => t.Ln().An()).filter(P),
      i = 0 === t.length ? null : Math.max(...t);
    this.sn = null !== i ? i : NaN;
  }
  Rn(t, i, n) {
    let s = t.get(i);
    return void 0 === s && (s = new K(this, i, n), t.set(i, s)), s;
  }
}
function st(t) {
  return "left" === t || "right" === t;
}
class et {
  constructor(t) {
    this.In = new Map(), this.En = [], this.Vn = t;
  }
  zn(t, i) {
    const n = function (t, i) {
      return void 0 === t ? i : {
        Nn: Math.max(t.Nn, i.Nn),
        Fn: t.Fn || i.Fn
      };
    }(this.In.get(t), i);
    this.In.set(t, n);
  }
  Wn() {
    return this.Vn;
  }
  jn(t) {
    const i = this.In.get(t);
    return void 0 === i ? {
      Nn: this.Vn
    } : {
      Nn: Math.max(this.Vn, i.Nn),
      Fn: i.Fn
    };
  }
  $n() {
    this.Hn(), this.En = [{
      Un: 0
    }];
  }
  qn(t) {
    this.Hn(), this.En = [{
      Un: 1,
      Ot: t
    }];
  }
  Yn(t) {
    this.Xn(), this.En.push({
      Un: 5,
      Ot: t
    });
  }
  Hn() {
    this.Xn(), this.En.push({
      Un: 6
    });
  }
  Zn() {
    this.Hn(), this.En = [{
      Un: 4
    }];
  }
  Kn(t) {
    this.Hn(), this.En.push({
      Un: 2,
      Ot: t
    });
  }
  Gn(t) {
    this.Hn(), this.En.push({
      Un: 3,
      Ot: t
    });
  }
  Jn() {
    return this.En;
  }
  Qn(t) {
    for (const i of t.En) this.ts(i);
    this.Vn = Math.max(this.Vn, t.Vn), t.In.forEach((t, i) => {
      this.zn(i, t);
    });
  }
  static ns() {
    return new et(2);
  }
  static ss() {
    return new et(3);
  }
  ts(t) {
    switch (t.Un) {
      case 0:
        this.$n();
        break;
      case 1:
        this.qn(t.Ot);
        break;
      case 2:
        this.Kn(t.Ot);
        break;
      case 3:
        this.Gn(t.Ot);
        break;
      case 4:
        this.Zn();
        break;
      case 5:
        this.Yn(t.Ot);
        break;
      case 6:
        this.Xn();
    }
  }
  Xn() {
    const t = this.En.findIndex(t => 5 === t.Un);
    -1 !== t && this.En.splice(t, 1);
  }
}
const rt = ".";
function ht(t, i) {
  if (!x(t)) return "n/a";
  if (!y(i)) throw new TypeError("invalid length");
  if (i < 0 || i > 16) throw new TypeError("invalid length");
  if (0 === i) return t.toString();
  return ("0000000000000000" + t.toString()).slice(-i);
}
class lt {
  constructor(t, i) {
    if (i || (i = 1), x(t) && y(t) || (t = 100), t < 0) throw new TypeError("invalid base");
    this.Vi = t, this.es = i, this.rs();
  }
  format(t) {
    const i = t < 0 ? "−" : "";
    return t = Math.abs(t), i + this.hs(t);
  }
  rs() {
    if (this.ls = 0, this.Vi > 0 && this.es > 0) {
      let t = this.Vi;
      for (; t > 1;) t /= 10, this.ls++;
    }
  }
  hs(t) {
    const i = this.Vi / this.es;
    let n = Math.floor(t),
      s = "";
    const e = void 0 !== this.ls ? this.ls : NaN;
    if (i > 1) {
      let r = +(Math.round(t * i) - n * i).toFixed(this.ls);
      r >= i && (r -= i, n += 1), s = rt + ht(+r.toFixed(this.ls) * this.es, e);
    } else n = Math.round(n * i) / i, e > 0 && (s = rt + ht(0, e));
    return n.toFixed(0) + s;
  }
}
class at extends lt {
  constructor(t = 100) {
    super(t);
  }
  format(t) {
    return `${super.format(t)}%`;
  }
}
class ot {
  constructor(t) {
    this.os = t;
  }
  format(t) {
    let i = "";
    return t < 0 && (i = "-", t = -t), t < 995 ? i + this._s(t) : t < 999995 ? i + this._s(t / 1e3) + "K" : t < 999999995 ? (t = 1e3 * Math.round(t / 1e3), i + this._s(t / 1e6) + "M") : (t = 1e6 * Math.round(t / 1e6), i + this._s(t / 1e9) + "B");
  }
  _s(t) {
    let i;
    const n = Math.pow(10, this.os);
    return i = (t = Math.round(t * n) / n) >= 1e-15 && t < 1 ? t.toFixed(this.os).replace(/\.?0+$/, "") : String(t), i.replace(/(\.[1-9]*)0+$/, (t, i) => i);
  }
}
function _t(t, i, n, s, e, r, h) {
  if (0 === i.length || s.from >= i.length) return;
  const l = t.context,
    a = i[s.from];
  let o = r(t, a),
    _ = a;
  if (s.to - s.from < 2) {
    const t = e / 2;
    l.beginPath();
    const i = {
        st: a.st - t,
        et: a.et
      },
      n = {
        st: a.st + t,
        et: a.et
      };
    return l.moveTo(i.st, i.et), l.lineTo(n.st, n.et), void h(l, o, i, n);
  }
  const u = (t, i) => {
    h(l, o, _, i), l.beginPath(), o = t, _ = i;
  };
  let c = _;
  l.beginPath(), l.moveTo(a.st, a.et);
  for (let e = s.from + 1; e < s.to; ++e) {
    c = i[e];
    const s = r(t, c);
    switch (n) {
      case 0:
        l.lineTo(c.st, c.et);
        break;
      case 1:
        l.lineTo(c.st, i[e - 1].et), s !== o && (u(s, c), l.lineTo(c.st, i[e - 1].et)), l.lineTo(c.st, c.et);
        break;
      case 2:
        {
          const [t, n] = dt(i, e - 1, e);
          l.bezierCurveTo(t.st, t.et, n.st, n.et, c.st, c.et);
          break;
        }
    }
    1 !== n && s !== o && (u(s, c), l.moveTo(c.st, c.et));
  }
  (_ !== c || _ === c && 1 === n) && h(l, o, _, c);
}
function ut(t, i) {
  return {
    st: t.st - i.st,
    et: t.et - i.et
  };
}
function ct(t, i) {
  return {
    st: t.st / i,
    et: t.et / i
  };
}
function dt(t, i, n) {
  const s = Math.max(0, i - 1),
    e = Math.min(t.length - 1, n + 1);
  var r, h;
  return [(r = t[i], h = ct(ut(t[n], t[s]), 6), {
    st: r.st + h.st,
    et: r.et + h.et
  }), ut(t[n], ct(ut(t[e], t[i]), 6))];
}
function ft(t, i, n, s, e) {
  i.lineTo(e.st, t), i.lineTo(s.st, t), i.closePath(), i.fillStyle = n, i.fill();
}
class pt extends L {
  constructor() {
    super(...arguments), this.J = null;
  }
  tt(t) {
    this.J = t;
  }
  Z(t) {
    var i;
    if (null === this.J) return;
    const {
        nt: n,
        it: s,
        us: e,
        rt: r,
        Ft: l,
        cs: a
      } = this.J,
      o = null !== (i = this.J.ds) && void 0 !== i ? i : this.J.fs ? 0 : t.mediaSize.height;
    if (null === s) return;
    const _ = t.context;
    _.lineCap = "butt", _.lineJoin = "round", _.lineWidth = r, h(_, l), _.lineWidth = 1, _t(t, n, a, s, e, this.ps.bind(this), ft.bind(null, o));
  }
}
class vt extends pt {
  constructor() {
    super(...arguments), this.vs = null;
  }
  ps(t, i) {
    const {
        context: n,
        mediaSize: s
      } = t,
      {
        bs: e,
        gs: r
      } = i,
      h = s.height;
    if (null !== this.vs && this.vs.topColor === e && this.vs.bottomColor === r && this.vs.bottom === h) return this.vs.fillStyle;
    const l = n.createLinearGradient(0, 0, 0, h);
    return l.addColorStop(0, e), l.addColorStop(1, r), this.vs = {
      topColor: e,
      bottomColor: r,
      fillStyle: l,
      bottom: h
    }, l;
  }
}
function mt(t, i) {
  t.strokeStyle = i, t.stroke();
}
class bt extends L {
  constructor() {
    super(...arguments), this.J = null;
  }
  tt(t) {
    this.J = t;
  }
  Z(t) {
    if (null === this.J) return;
    const {
      nt: i,
      it: n,
      us: s,
      cs: e,
      rt: r,
      Ft: l
    } = this.J;
    if (null === n) return;
    const a = t.context;
    a.lineCap = "butt", a.lineWidth = r, h(a, l), a.lineJoin = "round", _t(t, i, e, n, s, this.ws.bind(this), mt);
  }
}
class gt extends bt {
  ws(t, i) {
    return i.ot;
  }
}
function wt(t, i, n, s = 0, e = t.length) {
  let r = e - s;
  for (; 0 < r;) {
    const e = r >> 1,
      h = s + e;
    n(t[h], i) ? (s = h + 1, r -= e + 1) : r = e;
  }
  return s;
}
function Mt(t, i, n, s = 0, e = t.length) {
  let r = e - s;
  for (; 0 < r;) {
    const e = r >> 1,
      h = s + e;
    n(i, t[h]) ? r = e : (s = h + 1, r -= e + 1);
  }
  return s;
}
function St(t, i) {
  return t._t < i;
}
function xt(t, i) {
  return t < i._t;
}
function yt(t, i, n) {
  const s = i.Ms(),
    e = i.ci(),
    r = wt(t, s, St),
    h = Mt(t, e, xt);
  if (!n) return {
    from: r,
    to: h
  };
  let l = r,
    a = h;
  return r > 0 && r < t.length && t[r]._t >= s && (l = r - 1), h > 0 && h < t.length && t[h - 1]._t <= e && (a = h + 1), {
    from: l,
    to: a
  };
}
class kt {
  constructor(t, i, n) {
    this.Ss = !0, this.xs = !0, this.ys = !0, this.ks = [], this.Cs = null, this.Ts = t, this.Ps = i, this.Rs = n;
  }
  gt(t) {
    this.Ss = !0, "data" === t && (this.xs = !0), "options" === t && (this.ys = !0);
  }
  Mt() {
    return this.Ts.Ct() ? (this.Ds(), null === this.Cs ? null : this.Bs) : null;
  }
  Os() {
    this.ks = this.ks.map(t => Object.assign(Object.assign({}, t), this.Ts.Ls().As(t._t)));
  }
  Is() {
    this.Cs = null;
  }
  Ds() {
    this.xs && (this.Es(), this.xs = !1), this.ys && (this.Os(), this.ys = !1), this.Ss && (this.Vs(), this.Ss = !1);
  }
  Vs() {
    const t = this.Ts.Bt(),
      i = this.Ps.yt();
    if (this.Is(), i.Ni() || t.Ni()) return;
    const n = i.zs();
    if (null === n) return;
    if (0 === this.Ts.Ln().Ns()) return;
    const s = this.Ts.Tt();
    null !== s && (this.Cs = yt(this.ks, n, this.Rs), this.Fs(t, i, s.Ot), this.Ws());
  }
}
class Ct extends kt {
  constructor(t, i) {
    super(t, i, !0);
  }
  Fs(t, i, n) {
    i.js(this.ks, R(this.Cs)), t.$s(this.ks, n, R(this.Cs));
  }
  Hs(t, i) {
    return {
      _t: t,
      ut: i,
      st: NaN,
      et: NaN
    };
  }
  Es() {
    const t = this.Ts.Ls();
    this.ks = this.Ts.Ln().Us().map(i => {
      const n = i.Ot[3];
      return this.qs(i.Ys, n, t);
    });
  }
}
class Tt extends Ct {
  constructor(t, i) {
    super(t, i), this.Bs = new A(), this.Xs = new vt(), this.Zs = new gt(), this.Bs.Y([this.Xs, this.Zs]);
  }
  qs(t, i, n) {
    return Object.assign(Object.assign({}, this.Hs(t, i)), n.As(t));
  }
  Ws() {
    const t = this.Ts.F();
    this.Xs.tt({
      cs: t.lineType,
      nt: this.ks,
      Ft: t.lineStyle,
      rt: t.lineWidth,
      ds: null,
      fs: t.invertFilledArea,
      it: this.Cs,
      us: this.Ps.yt().Ks()
    }), this.Zs.tt({
      cs: t.lineType,
      nt: this.ks,
      Ft: t.lineStyle,
      rt: t.lineWidth,
      it: this.Cs,
      us: this.Ps.yt().Ks()
    });
  }
}
class Pt extends N {
  constructor() {
    super(...arguments), this.Vt = null, this.Gs = 0, this.Js = 0;
  }
  tt(t) {
    this.Vt = t;
  }
  Z({
    context: t,
    horizontalPixelRatio: i,
    verticalPixelRatio: n
  }) {
    if (null === this.Vt || 0 === this.Vt.Ln.length || null === this.Vt.it) return;
    if (this.Gs = this.Qs(i), this.Gs >= 2) {
      Math.max(1, Math.floor(i)) % 2 != this.Gs % 2 && this.Gs--;
    }
    this.Js = this.Vt.te ? Math.min(this.Gs, Math.floor(i)) : this.Gs;
    let s = null;
    const e = this.Js <= this.Gs && this.Vt.Ks >= Math.floor(1.5 * i);
    for (let r = this.Vt.it.from; r < this.Vt.it.to; ++r) {
      const h = this.Vt.Ln[r];
      s !== h.ie && (t.fillStyle = h.ie, s = h.ie);
      const l = Math.floor(.5 * this.Js),
        a = Math.round(h.st * i),
        o = a - l,
        _ = this.Js,
        u = o + _ - 1,
        c = Math.min(h.ne, h.se),
        d = Math.max(h.ne, h.se),
        f = Math.round(c * n) - l,
        p = Math.round(d * n) + l,
        v = Math.max(p - f, this.Js);
      t.fillRect(o, f, _, v);
      const m = Math.ceil(1.5 * this.Gs);
      if (e) {
        if (this.Vt.ee) {
          const i = a - m;
          let s = Math.max(f, Math.round(h.re * n) - l),
            e = s + _ - 1;
          e > f + v - 1 && (e = f + v - 1, s = e - _ + 1), t.fillRect(i, s, o - i, e - s + 1);
        }
        const i = a + m;
        let s = Math.max(f, Math.round(h.he * n) - l),
          e = s + _ - 1;
        e > f + v - 1 && (e = f + v - 1, s = e - _ + 1), t.fillRect(u + 1, s, i - u, e - s + 1);
      }
    }
  }
  Qs(t) {
    const i = Math.floor(t);
    return Math.max(i, Math.floor(function (t, i) {
      return Math.floor(.3 * t * i);
    }(_(this.Vt).Ks, t)));
  }
}
class Rt extends kt {
  constructor(t, i) {
    super(t, i, !1);
  }
  Fs(t, i, n) {
    i.js(this.ks, R(this.Cs)), t.le(this.ks, n, R(this.Cs));
  }
  ae(t, i, n) {
    return {
      _t: t,
      oe: i.Ot[0],
      _e: i.Ot[1],
      ue: i.Ot[2],
      ce: i.Ot[3],
      st: NaN,
      re: NaN,
      ne: NaN,
      se: NaN,
      he: NaN
    };
  }
  Es() {
    const t = this.Ts.Ls();
    this.ks = this.Ts.Ln().Us().map(i => this.qs(i.Ys, i, t));
  }
}
class Dt extends Rt {
  constructor() {
    super(...arguments), this.Bs = new Pt();
  }
  qs(t, i, n) {
    return Object.assign(Object.assign({}, this.ae(t, i, n)), n.As(t));
  }
  Ws() {
    const t = this.Ts.F();
    this.Bs.tt({
      Ln: this.ks,
      Ks: this.Ps.yt().Ks(),
      ee: t.openVisible,
      te: t.thinBars,
      it: this.Cs
    });
  }
}
function Bt(t, i, n) {
  return Math.min(Math.max(t, i), n);
}
function Ot(t, i, n) {
  return i - t <= n;
}
function At(t) {
  return t <= 0 ? NaN : Math.log(t) / Math.log(10);
}
function Lt(t) {
  const i = Math.ceil(t);
  return i % 2 == 0 ? i - 1 : i;
}
class It extends pt {
  constructor() {
    super(...arguments), this.vs = null;
  }
  ps(t, i) {
    var n;
    const {
        context: s,
        mediaSize: e
      } = t,
      r = this.J,
      {
        de: h,
        fe: l,
        pe: a,
        ve: o
      } = i,
      _ = null !== (n = r.ds) && void 0 !== n ? n : e.height,
      u = e.height;
    if (null !== this.vs && this.vs.topFillColor1 === h && this.vs.topFillColor2 === l && this.vs.bottomFillColor1 === a && this.vs.bottomFillColor2 === o && this.vs.baseLevelCoordinate === _ && this.vs.bottom === u) return this.vs.fillStyle;
    const c = s.createLinearGradient(0, 0, 0, u),
      d = Bt(_ / u, 0, 1);
    return c.addColorStop(0, h), c.addColorStop(d, l), c.addColorStop(d, a), c.addColorStop(1, o), this.vs = {
      topFillColor1: h,
      topFillColor2: l,
      bottomFillColor1: a,
      bottomFillColor2: o,
      fillStyle: c,
      baseLevelCoordinate: _,
      bottom: u
    }, c;
  }
}
class Et extends bt {
  constructor() {
    super(...arguments), this.me = null;
  }
  ws(t, i) {
    const {
        context: n,
        mediaSize: s
      } = t,
      e = this.J,
      {
        be: r,
        ge: h
      } = i,
      {
        ds: l
      } = e,
      a = s.height;
    if (null !== this.me && this.me.topLineColor === r && this.me.bottomLineColor === h && this.me.baseLevelCoordinate === l && this.me.bottom === a) return this.me.strokeStyle;
    const o = n.createLinearGradient(0, 0, 0, a),
      _ = Bt(l / a, 0, 1);
    return o.addColorStop(0, r), o.addColorStop(_, r), o.addColorStop(_, h), o.addColorStop(1, h), this.me = {
      topLineColor: r,
      bottomLineColor: h,
      strokeStyle: o,
      baseLevelCoordinate: l,
      bottom: a
    }, o;
  }
}
class Vt extends Ct {
  constructor(t, i) {
    super(t, i), this.Bs = new A(), this.we = new It(), this.Me = new Et(), this.Bs.Y([this.we, this.Me]);
  }
  qs(t, i, n) {
    return Object.assign(Object.assign({}, this.Hs(t, i)), n.As(t));
  }
  Ws() {
    const t = this.Ts.Tt();
    if (null === t) return;
    const i = this.Ts.F(),
      n = this.Ts.Bt().Dt(i.baseValue.price, t.Ot),
      s = this.Ps.yt().Ks();
    this.we.tt({
      nt: this.ks,
      rt: i.lineWidth,
      Ft: i.lineStyle,
      cs: i.lineType,
      ds: n,
      fs: !1,
      it: this.Cs,
      us: s
    }), this.Me.tt({
      nt: this.ks,
      rt: i.lineWidth,
      Ft: i.lineStyle,
      cs: i.lineType,
      ds: n,
      it: this.Cs,
      us: s
    });
  }
}
class zt extends N {
  constructor() {
    super(...arguments), this.Vt = null, this.Gs = 0;
  }
  tt(t) {
    this.Vt = t;
  }
  Z(t) {
    if (null === this.Vt || 0 === this.Vt.Ln.length || null === this.Vt.it) return;
    const {
      horizontalPixelRatio: i
    } = t;
    if (this.Gs = function (t, i) {
      if (t >= 2.5 && t <= 4) return Math.floor(3 * i);
      const n = 1 - .2 * Math.atan(Math.max(4, t) - 4) / (.5 * Math.PI),
        s = Math.floor(t * n * i),
        e = Math.floor(t * i),
        r = Math.min(s, e);
      return Math.max(Math.floor(i), r);
    }(this.Vt.Ks, i), this.Gs >= 2) {
      Math.floor(i) % 2 != this.Gs % 2 && this.Gs--;
    }
    const n = this.Vt.Ln;
    this.Vt.Se && this.xe(t, n, this.Vt.it), this.Vt.ui && this.ye(t, n, this.Vt.it);
    const s = this.ke(i);
    (!this.Vt.ui || this.Gs > 2 * s) && this.Ce(t, n, this.Vt.it);
  }
  xe(t, i, n) {
    if (null === this.Vt) return;
    const {
      context: s,
      horizontalPixelRatio: e,
      verticalPixelRatio: r
    } = t;
    let h = "",
      l = Math.min(Math.floor(e), Math.floor(this.Vt.Ks * e));
    l = Math.max(Math.floor(e), Math.min(l, this.Gs));
    const a = Math.floor(.5 * l);
    let o = null;
    for (let t = n.from; t < n.to; t++) {
      const n = i[t];
      n.Te !== h && (s.fillStyle = n.Te, h = n.Te);
      const _ = Math.round(Math.min(n.re, n.he) * r),
        u = Math.round(Math.max(n.re, n.he) * r),
        c = Math.round(n.ne * r),
        d = Math.round(n.se * r);
      let f = Math.round(e * n.st) - a;
      const p = f + l - 1;
      null !== o && (f = Math.max(o + 1, f), f = Math.min(f, p));
      const v = p - f + 1;
      s.fillRect(f, c, v, _ - c), s.fillRect(f, u + 1, v, d - u), o = p;
    }
  }
  ke(t) {
    let i = Math.floor(1 * t);
    this.Gs <= 2 * i && (i = Math.floor(.5 * (this.Gs - 1)));
    const n = Math.max(Math.floor(t), i);
    return this.Gs <= 2 * n ? Math.max(Math.floor(t), Math.floor(1 * t)) : n;
  }
  ye(t, i, n) {
    if (null === this.Vt) return;
    const {
      context: s,
      horizontalPixelRatio: e,
      verticalPixelRatio: r
    } = t;
    let h = "";
    const l = this.ke(e);
    let a = null;
    for (let t = n.from; t < n.to; t++) {
      const n = i[t];
      n.Pe !== h && (s.fillStyle = n.Pe, h = n.Pe);
      let o = Math.round(n.st * e) - Math.floor(.5 * this.Gs);
      const _ = o + this.Gs - 1,
        u = Math.round(Math.min(n.re, n.he) * r),
        c = Math.round(Math.max(n.re, n.he) * r);
      if (null !== a && (o = Math.max(a + 1, o), o = Math.min(o, _)), this.Vt.Ks * e > 2 * l) j(s, o, u, _ - o + 1, c - u + 1, l);else {
        const t = _ - o + 1;
        s.fillRect(o, u, t, c - u + 1);
      }
      a = _;
    }
  }
  Ce(t, i, n) {
    if (null === this.Vt) return;
    const {
      context: s,
      horizontalPixelRatio: e,
      verticalPixelRatio: r
    } = t;
    let h = "";
    const l = this.ke(e);
    for (let t = n.from; t < n.to; t++) {
      const n = i[t];
      let a = Math.round(Math.min(n.re, n.he) * r),
        o = Math.round(Math.max(n.re, n.he) * r),
        _ = Math.round(n.st * e) - Math.floor(.5 * this.Gs),
        u = _ + this.Gs - 1;
      if (n.ie !== h) {
        const t = n.ie;
        s.fillStyle = t, h = t;
      }
      this.Vt.ui && (_ += l, a += l, u -= l, o -= l), a > o || s.fillRect(_, a, u - _ + 1, o - a + 1);
    }
  }
}
class Nt extends Rt {
  constructor() {
    super(...arguments), this.Bs = new zt();
  }
  qs(t, i, n) {
    return Object.assign(Object.assign({}, this.ae(t, i, n)), n.As(t));
  }
  Ws() {
    const t = this.Ts.F();
    this.Bs.tt({
      Ln: this.ks,
      Ks: this.Ps.yt().Ks(),
      Se: t.wickVisible,
      ui: t.borderVisible,
      it: this.Cs
    });
  }
}
class Ft extends N {
  constructor() {
    super(...arguments), this.Vt = null, this.Re = [];
  }
  tt(t) {
    this.Vt = t, this.Re = [];
  }
  Z({
    context: t,
    horizontalPixelRatio: i,
    verticalPixelRatio: n
  }) {
    if (null === this.Vt || 0 === this.Vt.nt.length || null === this.Vt.it) return;
    this.Re.length || this.De(i);
    const s = Math.max(1, Math.floor(n)),
      e = Math.round(this.Vt.Be * n) - Math.floor(s / 2),
      r = e + s;
    for (let i = this.Vt.it.from; i < this.Vt.it.to; i++) {
      const h = this.Vt.nt[i],
        l = this.Re[i - this.Vt.it.from],
        a = Math.round(h.et * n);
      let o, _;
      t.fillStyle = h.ie, a <= e ? (o = a, _ = r) : (o = e, _ = a - Math.floor(s / 2) + s), t.fillRect(l.Ms, o, l.ci - l.Ms + 1, _ - o);
    }
  }
  De(t) {
    if (null === this.Vt || 0 === this.Vt.nt.length || null === this.Vt.it) return void (this.Re = []);
    const i = Math.ceil(this.Vt.Ks * t) <= 1 ? 0 : Math.max(1, Math.floor(t)),
      n = Math.round(this.Vt.Ks * t) - i;
    this.Re = new Array(this.Vt.it.to - this.Vt.it.from);
    for (let i = this.Vt.it.from; i < this.Vt.it.to; i++) {
      const s = this.Vt.nt[i],
        e = Math.round(s.st * t);
      let r, h;
      if (n % 2) {
        const t = (n - 1) / 2;
        r = e - t, h = e + t;
      } else {
        const t = n / 2;
        r = e - t, h = e + t - 1;
      }
      this.Re[i - this.Vt.it.from] = {
        Ms: r,
        ci: h,
        Oe: e,
        Ae: s.st * t,
        _t: s._t
      };
    }
    for (let t = this.Vt.it.from + 1; t < this.Vt.it.to; t++) {
      const n = this.Re[t - this.Vt.it.from],
        s = this.Re[t - this.Vt.it.from - 1];
      n._t === s._t + 1 && n.Ms - s.ci !== i + 1 && (s.Oe > s.Ae ? s.ci = n.Ms - i - 1 : n.Ms = s.ci + i + 1);
    }
    let s = Math.ceil(this.Vt.Ks * t);
    for (let t = this.Vt.it.from; t < this.Vt.it.to; t++) {
      const i = this.Re[t - this.Vt.it.from];
      i.ci < i.Ms && (i.ci = i.Ms);
      const n = i.ci - i.Ms + 1;
      s = Math.min(n, s);
    }
    if (i > 0 && s < 4) for (let t = this.Vt.it.from; t < this.Vt.it.to; t++) {
      const i = this.Re[t - this.Vt.it.from];
      i.ci - i.Ms + 1 > s && (i.Oe > i.Ae ? i.ci -= 1 : i.Ms += 1);
    }
  }
}
class Wt extends Ct {
  constructor() {
    super(...arguments), this.Bs = new Ft();
  }
  qs(t, i, n) {
    return Object.assign(Object.assign({}, this.Hs(t, i)), n.As(t));
  }
  Ws() {
    const t = {
      nt: this.ks,
      Ks: this.Ps.yt().Ks(),
      it: this.Cs,
      Be: this.Ts.Bt().Dt(this.Ts.F().base, _(this.Ts.Tt()).Ot)
    };
    this.Bs.tt(t);
  }
}
class jt extends Ct {
  constructor() {
    super(...arguments), this.Bs = new gt();
  }
  qs(t, i, n) {
    return Object.assign(Object.assign({}, this.Hs(t, i)), n.As(t));
  }
  Ws() {
    const t = this.Ts.F(),
      i = {
        nt: this.ks,
        Ft: t.lineStyle,
        cs: t.lineType,
        rt: t.lineWidth,
        it: this.Cs,
        us: this.Ps.yt().Ks()
      };
    this.Bs.tt(i);
  }
}
const $t = /[2-9]/g;
class Ht {
  constructor(t = 50) {
    this.Le = 0, this.Ie = 1, this.Ee = 1, this.Ve = {}, this.ze = new Map(), this.Ne = t;
  }
  Fe() {
    this.Le = 0, this.ze.clear(), this.Ie = 1, this.Ee = 1, this.Ve = {};
  }
  Si(t, i, n) {
    return this.We(t, i, n).width;
  }
  Mi(t, i, n) {
    const s = this.We(t, i, n);
    return ((s.actualBoundingBoxAscent || 0) - (s.actualBoundingBoxDescent || 0)) / 2;
  }
  We(t, i, n) {
    const s = n || $t,
      e = String(i).replace(s, "0");
    if (this.ze.has(e)) return o(this.ze.get(e)).je;
    if (this.Le === this.Ne) {
      const t = this.Ve[this.Ee];
      delete this.Ve[this.Ee], this.ze.delete(t), this.Ee++, this.Le--;
    }
    t.save(), t.textBaseline = "middle";
    const r = t.measureText(e);
    return t.restore(), 0 === r.width && i.length || (this.ze.set(e, {
      je: r,
      $e: this.Ie
    }), this.Ve[this.Ie] = e, this.Le++, this.Ie++), r;
  }
}
class Ut {
  constructor(t) {
    this.He = null, this.S = null, this.Ue = "right", this.qe = t;
  }
  Ye(t, i, n) {
    this.He = t, this.S = i, this.Ue = n;
  }
  X(t) {
    null !== this.S && null !== this.He && this.He.X(t, this.S, this.qe, this.Ue);
  }
}
class qt {
  constructor(t, i, n) {
    this.Xe = t, this.qe = new Ht(50), this.Ze = i, this.N = n, this.W = -1, this.jt = new Ut(this.qe);
  }
  Mt() {
    const t = this.N.Ke(this.Ze);
    if (null === t) return null;
    const i = t.Ge(this.Ze) ? t.Je() : this.Ze.Bt();
    if (null === i) return null;
    const n = t.Qe(i);
    if ("overlay" === n) return null;
    const s = this.N.tr();
    return s.T !== this.W && (this.W = s.T, this.qe.Fe()), this.jt.Ye(this.Xe.Ii(), s, n), this.jt;
  }
}
class Yt extends N {
  constructor() {
    super(...arguments), this.Vt = null;
  }
  tt(t) {
    this.Vt = t;
  }
  ir(t, i) {
    var n;
    if (!(null === (n = this.Vt) || void 0 === n ? void 0 : n.Ct)) return null;
    const {
      et: s,
      rt: e,
      nr: r
    } = this.Vt;
    return i >= s - e - 7 && i <= s + e + 7 ? {
      sr: this.Vt,
      nr: r
    } : null;
  }
  Z({
    context: t,
    bitmapSize: i,
    horizontalPixelRatio: n,
    verticalPixelRatio: s
  }) {
    if (null === this.Vt) return;
    if (!1 === this.Vt.Ct) return;
    const e = Math.round(this.Vt.et * s);
    e < 0 || e > i.height || (t.lineCap = "butt", t.strokeStyle = this.Vt.D, t.lineWidth = Math.floor(this.Vt.rt * n), h(t, this.Vt.Ft), l(t, e, 0, i.width));
  }
}
class Xt {
  constructor(t) {
    this.er = {
      et: 0,
      D: "rgba(0, 0, 0, 0)",
      rt: 1,
      Ft: 0,
      Ct: !1
    }, this.rr = new Yt(), this.vt = !0, this.Ts = t, this.Ps = t.Ut(), this.rr.tt(this.er);
  }
  gt() {
    this.vt = !0;
  }
  Mt() {
    return this.Ts.Ct() ? (this.vt && (this.hr(), this.vt = !1), this.rr) : null;
  }
}
class Zt extends Xt {
  constructor(t) {
    super(t);
  }
  hr() {
    this.er.Ct = !1;
    const t = this.Ts.Bt(),
      i = t.lr().lr;
    if (2 !== i && 3 !== i) return;
    const n = this.Ts.F();
    if (!n.baseLineVisible || !this.Ts.Ct()) return;
    const s = this.Ts.Tt();
    null !== s && (this.er.Ct = !0, this.er.et = t.Dt(s.Ot, s.Ot), this.er.D = n.baseLineColor, this.er.rt = n.baseLineWidth, this.er.Ft = n.baseLineStyle);
  }
}
class Kt extends N {
  constructor() {
    super(...arguments), this.Vt = null;
  }
  tt(t) {
    this.Vt = t;
  }
  ar() {
    return this.Vt;
  }
  Z({
    context: t,
    horizontalPixelRatio: i,
    verticalPixelRatio: n
  }) {
    const s = this.Vt;
    if (null === s) return;
    const e = Math.max(1, Math.floor(i)),
      r = e % 2 / 2,
      h = Math.round(s.Ae.x * i) + r,
      l = s.Ae.y * n;
    t.fillStyle = s._r, t.beginPath();
    const a = Math.max(2, 1.5 * s.ur) * i;
    t.arc(h, l, a, 0, 2 * Math.PI, !1), t.fill(), t.fillStyle = s.cr, t.beginPath(), t.arc(h, l, s.lt * i, 0, 2 * Math.PI, !1), t.fill(), t.lineWidth = e, t.strokeStyle = s.dr, t.beginPath(), t.arc(h, l, s.lt * i + e / 2, 0, 2 * Math.PI, !1), t.stroke();
  }
}
const Gt = [{
  pr: 0,
  vr: .25,
  mr: 4,
  br: 10,
  gr: .25,
  wr: 0,
  Mr: .4,
  Sr: .8
}, {
  pr: .25,
  vr: .525,
  mr: 10,
  br: 14,
  gr: 0,
  wr: 0,
  Mr: .8,
  Sr: 0
}, {
  pr: .525,
  vr: 1,
  mr: 14,
  br: 14,
  gr: 0,
  wr: 0,
  Mr: 0,
  Sr: 0
}];
function Jt(t, i, n, s) {
  return function (t, i) {
    if ("transparent" === t) return t;
    const n = g(t),
      s = n[3];
    return `rgba(${n[0]}, ${n[1]}, ${n[2]}, ${i * s})`;
  }(t, n + (s - n) * i);
}
function Qt(t, i) {
  const n = t % 2600 / 2600;
  let s;
  for (const t of Gt) if (n >= t.pr && n <= t.vr) {
    s = t;
    break;
  }
  a(void 0 !== s, "Last price animation internal logic error");
  const e = (n - s.pr) / (s.vr - s.pr);
  return {
    cr: Jt(i, e, s.gr, s.wr),
    dr: Jt(i, e, s.Mr, s.Sr),
    lt: (r = e, h = s.mr, l = s.br, h + (l - h) * r)
  };
  var r, h, l;
}
class ti {
  constructor(t) {
    this.jt = new Kt(), this.vt = !0, this.yr = !0, this.kr = performance.now(), this.Cr = this.kr - 1, this.Tr = t;
  }
  Pr() {
    this.Cr = this.kr - 1, this.gt();
  }
  Rr() {
    if (this.gt(), 2 === this.Tr.F().lastPriceAnimation) {
      const t = performance.now(),
        i = this.Cr - t;
      if (i > 0) return void (i < 650 && (this.Cr += 2600));
      this.kr = t, this.Cr = t + 2600;
    }
  }
  gt() {
    this.vt = !0;
  }
  Dr() {
    this.yr = !0;
  }
  Ct() {
    return 0 !== this.Tr.F().lastPriceAnimation;
  }
  Br() {
    switch (this.Tr.F().lastPriceAnimation) {
      case 0:
        return !1;
      case 1:
        return !0;
      case 2:
        return performance.now() <= this.Cr;
    }
  }
  Mt() {
    return this.vt ? (this.St(), this.vt = !1, this.yr = !1) : this.yr && (this.Or(), this.yr = !1), this.jt;
  }
  St() {
    this.jt.tt(null);
    const t = this.Tr.Ut().yt(),
      i = t.zs(),
      n = this.Tr.Tt();
    if (null === i || null === n) return;
    const s = this.Tr.Ar(!0);
    if (s.Lr || !i.Ir(s.Ys)) return;
    const e = {
        x: t.Et(s.Ys),
        y: this.Tr.Bt().Dt(s.ut, n.Ot)
      },
      r = s.D,
      h = this.Tr.F().lineWidth,
      l = Qt(this.Er(), r);
    this.jt.tt({
      _r: r,
      ur: h,
      cr: l.cr,
      dr: l.dr,
      lt: l.lt,
      Ae: e
    });
  }
  Or() {
    const t = this.jt.ar();
    if (null !== t) {
      const i = Qt(this.Er(), t._r);
      t.cr = i.cr, t.dr = i.dr, t.lt = i.lt;
    }
  }
  Er() {
    return this.Br() ? performance.now() - this.kr : 2599;
  }
}
function ii(t, i) {
  return Lt(Math.min(Math.max(t, 12), 30) * i);
}
function ni(t, i) {
  switch (t) {
    case "arrowDown":
    case "arrowUp":
      return ii(i, 1);
    case "circle":
      return ii(i, .8);
    case "square":
      return ii(i, .7);
  }
}
function si(t) {
  return function (t) {
    const i = Math.ceil(t);
    return i % 2 != 0 ? i - 1 : i;
  }(ii(t, 1));
}
function ei(t) {
  return Math.max(ii(t, .1), 3);
}
function ri(t, i, n, s, e) {
  const r = ni("square", n),
    h = (r - 1) / 2,
    l = t - h,
    a = i - h;
  return s >= l && s <= l + r && e >= a && e <= a + r;
}
function hi(t, i, n, s, e) {
  const r = (ni("arrowUp", e) - 1) / 2,
    h = (Lt(e / 2) - 1) / 2;
  i.beginPath(), t ? (i.moveTo(n - r, s), i.lineTo(n, s - r), i.lineTo(n + r, s), i.lineTo(n + h, s), i.lineTo(n + h, s + r), i.lineTo(n - h, s + r), i.lineTo(n - h, s)) : (i.moveTo(n - r, s), i.lineTo(n, s + r), i.lineTo(n + r, s), i.lineTo(n + h, s), i.lineTo(n + h, s - r), i.lineTo(n - h, s - r), i.lineTo(n - h, s)), i.fill();
}
function li(t, i, n, s, e, r) {
  return ri(i, n, s, e, r);
}
class ai extends L {
  constructor() {
    super(...arguments), this.Vt = null, this.qe = new Ht(), this.W = -1, this.j = "", this.Vr = "";
  }
  tt(t) {
    this.Vt = t;
  }
  Ye(t, i) {
    this.W === t && this.j === i || (this.W = t, this.j = i, this.Vr = B(t, i), this.qe.Fe());
  }
  ir(t, i) {
    if (null === this.Vt || null === this.Vt.it) return null;
    for (let n = this.Vt.it.from; n < this.Vt.it.to; n++) {
      const s = this.Vt.nt[n];
      if (_i(s, t, i)) return {
        sr: s.zr,
        nr: s.nr
      };
    }
    return null;
  }
  Z({
    context: t
  }, i, n) {
    if (null !== this.Vt && null !== this.Vt.it) {
      t.textBaseline = "middle", t.font = this.Vr;
      for (let i = this.Vt.it.from; i < this.Vt.it.to; i++) {
        const n = this.Vt.nt[i];
        void 0 !== n.Gt && (n.Gt.$i = this.qe.Si(t, n.Gt.Nr), n.Gt.It = this.W), oi(n, t);
      }
    }
  }
}
function oi(t, i) {
  i.fillStyle = t.D, void 0 !== t.Gt && function (t, i, n, s) {
    t.fillText(i, n, s);
  }(i, t.Gt.Nr, t.st - t.Gt.$i / 2, t.Gt.et), function (t, i) {
    if (0 === t.Ns) return;
    switch (t.Fr) {
      case "arrowDown":
        return void hi(!1, i, t.st, t.et, t.Ns);
      case "arrowUp":
        return void hi(!0, i, t.st, t.et, t.Ns);
      case "circle":
        return void function (t, i, n, s) {
          const e = (ni("circle", s) - 1) / 2;
          t.beginPath(), t.arc(i, n, e, 0, 2 * Math.PI, !1), t.fill();
        }(i, t.st, t.et, t.Ns);
      case "square":
        return void function (t, i, n, s) {
          const e = ni("square", s),
            r = (e - 1) / 2,
            h = i - r,
            l = n - r;
          t.fillRect(h, l, e, e);
        }(i, t.st, t.et, t.Ns);
    }
    t.Fr;
  }(t, i);
}
function _i(t, i, n) {
  return !(void 0 === t.Gt || !function (t, i, n, s, e, r) {
    const h = s / 2;
    return e >= t && e <= t + n && r >= i - h && r <= i + h;
  }(t.st, t.Gt.et, t.Gt.$i, t.Gt.It, i, n)) || function (t, i, n) {
    if (0 === t.Ns) return !1;
    switch (t.Fr) {
      case "arrowDown":
      case "arrowUp":
        return li(0, t.st, t.et, t.Ns, i, n);
      case "circle":
        return function (t, i, n, s, e) {
          const r = 2 + ni("circle", n) / 2,
            h = t - s,
            l = i - e;
          return Math.sqrt(h * h + l * l) <= r;
        }(t.st, t.et, t.Ns, i, n);
      case "square":
        return ri(t.st, t.et, t.Ns, i, n);
    }
  }(t, i, n);
}
function ui(t, i, n, s, e, r, h, l, a) {
  const o = x(n) ? n : n.ce,
    _ = x(n) ? n : n._e,
    u = x(n) ? n : n.ue,
    c = x(i.size) ? Math.max(i.size, 0) : 1,
    d = si(l.Ks()) * c,
    f = d / 2;
  switch (t.Ns = d, i.position) {
    case "inBar":
      return t.et = h.Dt(o, a), void (void 0 !== t.Gt && (t.Gt.et = t.et + f + r + .6 * e));
    case "aboveBar":
      return t.et = h.Dt(_, a) - f - s.Wr, void 0 !== t.Gt && (t.Gt.et = t.et - f - .6 * e, s.Wr += 1.2 * e), void (s.Wr += d + r);
    case "belowBar":
      return t.et = h.Dt(u, a) + f + s.jr, void 0 !== t.Gt && (t.Gt.et = t.et + f + r + .6 * e, s.jr += 1.2 * e), void (s.jr += d + r);
  }
  i.position;
}
class ci {
  constructor(t, i) {
    this.vt = !0, this.$r = !0, this.Hr = !0, this.Ur = null, this.jt = new ai(), this.Tr = t, this.Hi = i, this.Vt = {
      nt: [],
      it: null
    };
  }
  gt(t) {
    this.vt = !0, this.Hr = !0, "data" === t && (this.$r = !0);
  }
  Mt(t) {
    if (!this.Tr.Ct()) return null;
    this.vt && this.qr();
    const i = this.Hi.F().layout;
    return this.jt.Ye(i.fontSize, i.fontFamily), this.jt.tt(this.Vt), this.jt;
  }
  Yr() {
    if (this.Hr) {
      if (this.Tr.Xr().length > 0) {
        const t = this.Hi.yt().Ks(),
          i = ei(t),
          n = 1.5 * si(t) + 2 * i;
        this.Ur = {
          above: n,
          below: n
        };
      } else this.Ur = null;
      this.Hr = !1;
    }
    return this.Ur;
  }
  qr() {
    const t = this.Tr.Bt(),
      i = this.Hi.yt(),
      n = this.Tr.Xr();
    this.$r && (this.Vt.nt = n.map(t => ({
      _t: t.time,
      st: 0,
      et: 0,
      Ns: 0,
      Fr: t.shape,
      D: t.color,
      zr: t.internalId,
      nr: t.id,
      Gt: void 0
    })), this.$r = !1);
    const s = this.Hi.F().layout;
    this.Vt.it = null;
    const e = i.zs();
    if (null === e) return;
    const r = this.Tr.Tt();
    if (null === r) return;
    if (0 === this.Vt.nt.length) return;
    let h = NaN;
    const l = ei(i.Ks()),
      a = {
        Wr: l,
        jr: l
      };
    this.Vt.it = yt(this.Vt.nt, e, !0);
    for (let e = this.Vt.it.from; e < this.Vt.it.to; e++) {
      const o = n[e];
      o.time !== h && (a.Wr = l, a.jr = l, h = o.time);
      const _ = this.Vt.nt[e];
      _.st = i.Et(o.time), void 0 !== o.text && o.text.length > 0 && (_.Gt = {
        Nr: o.text,
        et: 0,
        $i: 0,
        It: 0
      });
      const u = this.Tr.Zr(o.time);
      null !== u && ui(_, o, u, a, s.fontSize, l, t, i, r.Ot);
    }
    this.vt = !1;
  }
}
class di extends Xt {
  constructor(t) {
    super(t);
  }
  hr() {
    const t = this.er;
    t.Ct = !1;
    const i = this.Ts.F();
    if (!i.priceLineVisible || !this.Ts.Ct()) return;
    const n = this.Ts.Ar(0 === i.priceLineSource);
    n.Lr || (t.Ct = !0, t.et = n.yi, t.D = this.Ts.Kr(n.D), t.rt = i.priceLineWidth, t.Ft = i.priceLineStyle);
  }
}
class fi extends Z {
  constructor(t) {
    super(), this.$t = t;
  }
  Ei(t, i, n) {
    t.Ct = !1, i.Ct = !1;
    const s = this.$t;
    if (!s.Ct()) return;
    const e = s.F(),
      r = e.lastValueVisible,
      h = "" !== s.Gr(),
      l = 0 === e.seriesLastValueMode,
      a = s.Ar(!1);
    if (a.Lr) return;
    r && (t.Gt = this.Jr(a, r, l), t.Ct = 0 !== t.Gt.length), (h || l) && (i.Gt = this.Qr(a, r, h, l), i.Ct = i.Gt.length > 0);
    const o = s.Kr(a.D),
      _ = w(o);
    n.t = _.t, n.D = _.i, n.yi = a.yi, i.At = s.Ut().Lt(a.yi / s.Bt().It()), t.At = o, t.D = n.D, i.D = n.D;
  }
  Qr(t, i, n, s) {
    let e = "";
    const r = this.$t.Gr();
    return n && 0 !== r.length && (e += `${r} `), i && s && (e += this.$t.Bt().th() ? t.ih : t.nh), e.trim();
  }
  Jr(t, i, n) {
    return i ? n ? this.$t.Bt().th() ? t.nh : t.ih : t.Gt : "";
  }
}
class pi {
  constructor(t, i) {
    this.sh = t, this.eh = i;
  }
  rh(t) {
    return null !== t && this.sh === t.sh && this.eh === t.eh;
  }
  hh() {
    return new pi(this.sh, this.eh);
  }
  lh() {
    return this.sh;
  }
  ah() {
    return this.eh;
  }
  oh() {
    return this.eh - this.sh;
  }
  Ni() {
    return this.eh === this.sh || Number.isNaN(this.eh) || Number.isNaN(this.sh);
  }
  Qn(t) {
    return null === t ? this : new pi(Math.min(this.lh(), t.lh()), Math.max(this.ah(), t.ah()));
  }
  _h(t) {
    if (!x(t)) return;
    if (0 === this.eh - this.sh) return;
    const i = .5 * (this.eh + this.sh);
    let n = this.eh - i,
      s = this.sh - i;
    n *= t, s *= t, this.eh = i + n, this.sh = i + s;
  }
  uh(t) {
    x(t) && (this.eh += t, this.sh += t);
  }
  dh() {
    return {
      minValue: this.sh,
      maxValue: this.eh
    };
  }
  static fh(t) {
    return null === t ? null : new pi(t.minValue, t.maxValue);
  }
}
class vi {
  constructor(t, i) {
    this.ph = t, this.mh = i || null;
  }
  bh() {
    return this.ph;
  }
  gh() {
    return this.mh;
  }
  dh() {
    return null === this.ph ? null : {
      priceRange: this.ph.dh(),
      margins: this.mh || void 0
    };
  }
  static fh(t) {
    return null === t ? null : new vi(pi.fh(t.priceRange), t.margins);
  }
}
class mi extends Xt {
  constructor(t, i) {
    super(t), this.wh = i;
  }
  hr() {
    const t = this.er;
    t.Ct = !1;
    const i = this.wh.F();
    if (!this.Ts.Ct() || !i.lineVisible) return;
    const n = this.wh.Mh();
    null !== n && (t.Ct = !0, t.et = n, t.D = i.color, t.rt = i.lineWidth, t.Ft = i.lineStyle, t.nr = this.wh.F().id);
  }
}
class bi extends Z {
  constructor(t, i) {
    super(), this.Tr = t, this.wh = i;
  }
  Ei(t, i, n) {
    t.Ct = !1, i.Ct = !1;
    const s = this.wh.F(),
      e = s.axisLabelVisible,
      r = "" !== s.title,
      h = this.Tr;
    if (!e || !h.Ct()) return;
    const l = this.wh.Mh();
    if (null === l) return;
    r && (i.Gt = s.title, i.Ct = !0), i.At = h.Ut().Lt(l / h.Bt().It()), t.Gt = this.Sh(s.price), t.Ct = !0;
    const a = w(s.color);
    n.t = a.t, n.D = a.i, n.yi = l;
  }
  Sh(t) {
    const i = this.Tr.Tt();
    return null === i ? "" : this.Tr.Bt().Fi(t, i.Ot);
  }
}
class gi {
  constructor(t, i) {
    this.Tr = t, this.un = i, this.xh = new mi(t, this), this.Xe = new bi(t, this), this.yh = new qt(this.Xe, t, t.Ut());
  }
  kh(t) {
    S(this.un, t), this.gt(), this.Tr.Ut().Ch();
  }
  F() {
    return this.un;
  }
  Th() {
    return this.xh;
  }
  Ph() {
    return this.yh;
  }
  Rh() {
    return this.Xe;
  }
  gt() {
    this.xh.gt(), this.Xe.gt();
  }
  Mh() {
    const t = this.Tr,
      i = t.Bt();
    if (t.Ut().yt().Ni() || i.Ni()) return null;
    const n = t.Tt();
    return null === n ? null : i.Dt(this.un.price, n.Ot);
  }
}
class wi extends tt {
  constructor(t) {
    super(), this.Hi = t;
  }
  Ut() {
    return this.Hi;
  }
}
const Mi = {
  Bar: (t, i, n, s) => {
    var e;
    const r = i.upColor,
      h = i.downColor,
      l = _(t(n, s)),
      a = u(l.Ot[0]) <= u(l.Ot[3]);
    return {
      ie: null !== (e = l.D) && void 0 !== e ? e : a ? r : h
    };
  },
  Candlestick: (t, i, n, s) => {
    var e, r, h;
    const l = i.upColor,
      a = i.downColor,
      o = i.borderUpColor,
      c = i.borderDownColor,
      d = i.wickUpColor,
      f = i.wickDownColor,
      p = _(t(n, s)),
      v = u(p.Ot[0]) <= u(p.Ot[3]);
    return {
      ie: null !== (e = p.D) && void 0 !== e ? e : v ? l : a,
      Pe: null !== (r = p.At) && void 0 !== r ? r : v ? o : c,
      Te: null !== (h = p.Dh) && void 0 !== h ? h : v ? d : f
    };
  },
  Area: (t, i, n, s) => {
    var e, r, h, l;
    const a = _(t(n, s));
    return {
      ie: null !== (e = a.ot) && void 0 !== e ? e : i.lineColor,
      ot: null !== (r = a.ot) && void 0 !== r ? r : i.lineColor,
      bs: null !== (h = a.bs) && void 0 !== h ? h : i.topColor,
      gs: null !== (l = a.gs) && void 0 !== l ? l : i.bottomColor
    };
  },
  Baseline: (t, i, n, s) => {
    var e, r, h, l, a, o;
    const u = _(t(n, s));
    return {
      ie: u.Ot[3] >= i.baseValue.price ? i.topLineColor : i.bottomLineColor,
      be: null !== (e = u.be) && void 0 !== e ? e : i.topLineColor,
      ge: null !== (r = u.ge) && void 0 !== r ? r : i.bottomLineColor,
      de: null !== (h = u.de) && void 0 !== h ? h : i.topFillColor1,
      fe: null !== (l = u.fe) && void 0 !== l ? l : i.topFillColor2,
      pe: null !== (a = u.pe) && void 0 !== a ? a : i.bottomFillColor1,
      ve: null !== (o = u.ve) && void 0 !== o ? o : i.bottomFillColor2
    };
  },
  Line: (t, i, n, s) => {
    var e, r;
    const h = _(t(n, s));
    return {
      ie: null !== (e = h.D) && void 0 !== e ? e : i.color,
      ot: null !== (r = h.D) && void 0 !== r ? r : i.color
    };
  },
  Histogram: (t, i, n, s) => {
    var e;
    return {
      ie: null !== (e = _(t(n, s)).D) && void 0 !== e ? e : i.color
    };
  }
};
class Si {
  constructor(t) {
    this.Bh = (t, i) => void 0 !== i ? i.Ot : this.Tr.Ln().Oh(t), this.Tr = t, this.Ah = Mi[t.Lh()];
  }
  As(t, i) {
    return this.Ah(this.Bh, this.Tr.F(), t, i);
  }
}
var xi;
exports.MismatchDirection = xi;
!function (t) {
  t[t.NearestLeft = -1] = "NearestLeft", t[t.None = 0] = "None", t[t.NearestRight = 1] = "NearestRight";
}(xi || (exports.MismatchDirection = xi = {}));
const yi = 30;
class ki {
  constructor() {
    this.Ih = [], this.Eh = new Map(), this.Vh = new Map();
  }
  zh() {
    return this.Ns() > 0 ? this.Ih[this.Ih.length - 1] : null;
  }
  Nh() {
    return this.Ns() > 0 ? this.Fh(0) : null;
  }
  An() {
    return this.Ns() > 0 ? this.Fh(this.Ih.length - 1) : null;
  }
  Ns() {
    return this.Ih.length;
  }
  Ni() {
    return 0 === this.Ns();
  }
  Ir(t) {
    return null !== this.Wh(t, 0);
  }
  Oh(t) {
    return this.jh(t);
  }
  jh(t, i = 0) {
    const n = this.Wh(t, i);
    return null === n ? null : Object.assign(Object.assign({}, this.$h(n)), {
      Ys: this.Fh(n)
    });
  }
  Us() {
    return this.Ih;
  }
  Hh(t, i, n) {
    if (this.Ni()) return null;
    let s = null;
    for (const e of n) {
      s = Ci(s, this.Uh(t, i, e));
    }
    return s;
  }
  tt(t) {
    this.Vh.clear(), this.Eh.clear(), this.Ih = t;
  }
  Fh(t) {
    return this.Ih[t].Ys;
  }
  $h(t) {
    return this.Ih[t];
  }
  Wh(t, i) {
    const n = this.qh(t);
    if (null === n && 0 !== i) switch (i) {
      case -1:
        return this.Yh(t);
      case 1:
        return this.Xh(t);
      default:
        throw new TypeError("Unknown search mode");
    }
    return n;
  }
  Yh(t) {
    let i = this.Zh(t);
    return i > 0 && (i -= 1), i !== this.Ih.length && this.Fh(i) < t ? i : null;
  }
  Xh(t) {
    const i = this.Kh(t);
    return i !== this.Ih.length && t < this.Fh(i) ? i : null;
  }
  qh(t) {
    const i = this.Zh(t);
    return i === this.Ih.length || t < this.Ih[i].Ys ? null : i;
  }
  Zh(t) {
    return wt(this.Ih, t, (t, i) => t.Ys < i);
  }
  Kh(t) {
    return Mt(this.Ih, t, (t, i) => i.Ys > t);
  }
  Gh(t, i, n) {
    let s = null;
    for (let e = t; e < i; e++) {
      const t = this.Ih[e].Ot[n];
      Number.isNaN(t) || (null === s ? s = {
        Jh: t,
        Qh: t
      } : (t < s.Jh && (s.Jh = t), t > s.Qh && (s.Qh = t)));
    }
    return s;
  }
  Uh(t, i, n) {
    if (this.Ni()) return null;
    let s = null;
    const e = _(this.Nh()),
      r = _(this.An()),
      h = Math.max(t, e),
      l = Math.min(i, r),
      a = Math.ceil(h / yi) * yi,
      o = Math.max(a, Math.floor(l / yi) * yi);
    {
      const t = this.Zh(h),
        e = this.Kh(Math.min(l, a, i));
      s = Ci(s, this.Gh(t, e, n));
    }
    let u = this.Eh.get(n);
    void 0 === u && (u = new Map(), this.Eh.set(n, u));
    for (let t = Math.max(a + 1, h); t < o; t += yi) {
      const i = Math.floor(t / yi);
      let e = u.get(i);
      if (void 0 === e) {
        const t = this.Zh(i * yi),
          s = this.Kh((i + 1) * yi - 1);
        e = this.Gh(t, s, n), u.set(i, e);
      }
      s = Ci(s, e);
    }
    {
      const t = this.Zh(o),
        i = this.Kh(l);
      s = Ci(s, this.Gh(t, i, n));
    }
    return s;
  }
}
function Ci(t, i) {
  if (null === t) return i;
  if (null === i) return t;
  return {
    Jh: Math.min(t.Jh, i.Jh),
    Qh: Math.max(t.Qh, i.Qh)
  };
}
class Ti extends wi {
  constructor(t, i, n) {
    super(t), this.Vt = new ki(), this.xh = new di(this), this.tl = [], this.il = new Zt(this), this.nl = null, this.sl = null, this.el = [], this.rl = [], this.hl = null, this.un = i, this.ll = n;
    const s = new fi(this);
    this.rn = [s], this.yh = new qt(s, this, t), "Area" !== n && "Line" !== n && "Baseline" !== n || (this.nl = new ti(this)), this.al(), this.ol();
  }
  M() {
    null !== this.hl && clearTimeout(this.hl);
  }
  Kr(t) {
    return this.un.priceLineColor || t;
  }
  Ar(t) {
    const i = {
        Lr: !0
      },
      n = this.Bt();
    if (this.Ut().yt().Ni() || n.Ni() || this.Vt.Ni()) return i;
    const s = this.Ut().yt().zs(),
      e = this.Tt();
    if (null === s || null === e) return i;
    let r, h;
    if (t) {
      const t = this.Vt.zh();
      if (null === t) return i;
      r = t, h = t.Ys;
    } else {
      const t = this.Vt.jh(s.ci(), -1);
      if (null === t) return i;
      if (r = this.Vt.Oh(t.Ys), null === r) return i;
      h = t.Ys;
    }
    const l = r.Ot[3],
      a = this.Ls().As(h, {
        Ot: r
      }),
      o = n.Dt(l, e.Ot);
    return {
      Lr: !1,
      ut: l,
      Gt: n.Fi(l, e.Ot),
      ih: n._l(l),
      nh: n.ul(l, e.Ot),
      D: a.ie,
      yi: o,
      Ys: h
    };
  }
  Ls() {
    return null !== this.sl || (this.sl = new Si(this)), this.sl;
  }
  F() {
    return this.un;
  }
  kh(t) {
    const i = t.priceScaleId;
    void 0 !== i && i !== this.un.priceScaleId && this.Ut().cl(this, i), S(this.un, t), void 0 !== t.priceFormat && (this.al(), this.Ut().dl()), this.Ut().fl(this), this.Ut().pl(), this.bn.gt("options");
  }
  tt(t, i) {
    this.Vt.tt(t), this.vl(), this.bn.gt("data"), this.cn.gt("data"), null !== this.nl && (i && i.ml ? this.nl.Rr() : 0 === t.length && this.nl.Pr());
    const n = this.Ut().Ke(this);
    this.Ut().bl(n), this.Ut().fl(this), this.Ut().pl(), this.Ut().Ch();
  }
  gl(t) {
    this.el = t, this.vl();
    const i = this.Ut().Ke(this);
    this.cn.gt("data"), this.Ut().bl(i), this.Ut().fl(this), this.Ut().pl(), this.Ut().Ch();
  }
  wl() {
    return this.el;
  }
  Xr() {
    return this.rl;
  }
  Ml(t) {
    const i = new gi(this, t);
    return this.tl.push(i), this.Ut().fl(this), i;
  }
  Sl(t) {
    const i = this.tl.indexOf(t);
    -1 !== i && this.tl.splice(i, 1), this.Ut().fl(this);
  }
  Lh() {
    return this.ll;
  }
  Tt() {
    const t = this.xl();
    return null === t ? null : {
      Ot: t.Ot[3],
      yl: t._t
    };
  }
  xl() {
    const t = this.Ut().yt().zs();
    if (null === t) return null;
    const i = t.Ms();
    return this.Vt.jh(i, 1);
  }
  Ln() {
    return this.Vt;
  }
  Zr(t) {
    const i = this.Vt.Oh(t);
    return null === i ? null : "Bar" === this.ll || "Candlestick" === this.ll ? {
      oe: i.Ot[0],
      _e: i.Ot[1],
      ue: i.Ot[2],
      ce: i.Ot[3]
    } : i.Ot[3];
  }
  kl(t) {
    const i = this.nl;
    return null !== i && i.Ct() ? (null === this.hl && i.Br() && (this.hl = setTimeout(() => {
      this.hl = null, this.Ut().Cl();
    }, 0)), i.Dr(), [i]) : [];
  }
  Tn() {
    const t = [];
    this.Tl() || t.push(this.il), t.push(this.bn, this.xh, this.cn);
    const i = this.tl.map(t => t.Th());
    return t.push(...i), t;
  }
  Ji(t) {
    return [this.yh, ...this.tl.map(t => t.Ph())];
  }
  Pn(t, i) {
    if (i !== this.Yi && !this.Tl()) return [];
    const n = [...this.rn];
    for (const t of this.tl) n.push(t.Rh());
    return n;
  }
  Pl(t, i) {
    if (void 0 !== this.un.autoscaleInfoProvider) {
      const n = this.un.autoscaleInfoProvider(() => {
        const n = this.Rl(t, i);
        return null === n ? null : n.dh();
      });
      return vi.fh(n);
    }
    return this.Rl(t, i);
  }
  Dl() {
    return this.un.priceFormat.minMove;
  }
  Bl() {
    return this.Ol;
  }
  Dn() {
    var t;
    this.bn.gt(), this.cn.gt();
    for (const t of this.rn) t.gt();
    for (const t of this.tl) t.gt();
    this.xh.gt(), this.il.gt(), null === (t = this.nl) || void 0 === t || t.gt();
  }
  Bt() {
    return _(super.Bt());
  }
  kt(t) {
    if (!(("Line" === this.ll || "Area" === this.ll || "Baseline" === this.ll) && this.un.crosshairMarkerVisible)) return null;
    const i = this.Vt.Oh(t);
    if (null === i) return null;
    return {
      ut: i.Ot[3],
      lt: this.Al(),
      At: this.Ll(),
      Rt: this.Il(),
      Pt: this.El(t)
    };
  }
  Gr() {
    return this.un.title;
  }
  Ct() {
    return this.un.visible;
  }
  Tl() {
    return !st(this.Bt().Vl());
  }
  Rl(t, i) {
    if (!y(t) || !y(i) || this.Vt.Ni()) return null;
    const n = "Line" === this.ll || "Area" === this.ll || "Baseline" === this.ll || "Histogram" === this.ll ? [3] : [2, 1],
      s = this.Vt.Hh(t, i, n);
    let e = null !== s ? new pi(s.Jh, s.Qh) : null;
    if ("Histogram" === this.Lh()) {
      const t = this.un.base,
        i = new pi(t, t);
      e = null !== e ? e.Qn(i) : i;
    }
    return new vi(e, this.cn.Yr());
  }
  Al() {
    switch (this.ll) {
      case "Line":
      case "Area":
      case "Baseline":
        return this.un.crosshairMarkerRadius;
    }
    return 0;
  }
  Ll() {
    switch (this.ll) {
      case "Line":
      case "Area":
      case "Baseline":
        {
          const t = this.un.crosshairMarkerBorderColor;
          if (0 !== t.length) return t;
        }
    }
    return null;
  }
  Il() {
    switch (this.ll) {
      case "Line":
      case "Area":
      case "Baseline":
        return this.un.crosshairMarkerBorderWidth;
    }
    return 0;
  }
  El(t) {
    switch (this.ll) {
      case "Line":
      case "Area":
      case "Baseline":
        {
          const t = this.un.crosshairMarkerBackgroundColor;
          if (0 !== t.length) return t;
        }
    }
    return this.Ls().As(t).ie;
  }
  al() {
    switch (this.un.priceFormat.type) {
      case "custom":
        this.Ol = {
          format: this.un.priceFormat.formatter
        };
        break;
      case "volume":
        this.Ol = new ot(this.un.priceFormat.precision);
        break;
      case "percent":
        this.Ol = new at(this.un.priceFormat.precision);
        break;
      default:
        {
          const t = Math.pow(10, this.un.priceFormat.precision);
          this.Ol = new lt(t, this.un.priceFormat.minMove * t);
        }
    }
    null !== this.Yi && this.Yi.zl();
  }
  vl() {
    const t = this.Ut().yt();
    if (t.Ni() || 0 === this.Vt.Ns()) return void (this.rl = []);
    const i = _(this.Vt.Nh());
    this.rl = this.el.map((n, s) => {
      const e = _(t.Nl(n.time, !0)),
        r = e < i ? 1 : -1;
      return {
        time: _(this.Vt.jh(e, r)).Ys,
        position: n.position,
        shape: n.shape,
        color: n.color,
        id: n.id,
        internalId: s,
        text: n.text,
        size: n.size
      };
    });
  }
  ol() {
    switch (this.cn = new ci(this, this.Ut()), this.ll) {
      case "Bar":
        this.bn = new Dt(this, this.Ut());
        break;
      case "Candlestick":
        this.bn = new Nt(this, this.Ut());
        break;
      case "Line":
        this.bn = new jt(this, this.Ut());
        break;
      case "Area":
        this.bn = new Tt(this, this.Ut());
        break;
      case "Baseline":
        this.bn = new Vt(this, this.Ut());
        break;
      case "Histogram":
        this.bn = new Wt(this, this.Ut());
        break;
      default:
        throw Error("Unknown chart style assigned: " + this.ll);
    }
  }
}
class Pi {
  constructor(t) {
    this.un = t;
  }
  Fl(t, i, n) {
    let s = t;
    if (0 === this.un.mode) return s;
    const e = n.fn(),
      r = e.Tt();
    if (null === r) return s;
    const h = e.Dt(t, r),
      l = n.Wl().filter(t => t instanceof Ti).reduce((t, s) => {
        if (n.Ge(s) || !s.Ct()) return t;
        const e = s.Bt(),
          r = s.Ln();
        if (e.Ni() || !r.Ir(i)) return t;
        const h = r.Oh(i);
        if (null === h) return t;
        const l = u(s.Tt());
        return t.concat([e.Dt(h.Ot[3], l.Ot)]);
      }, []);
    if (0 === l.length) return s;
    l.sort((t, i) => Math.abs(t - h) - Math.abs(i - h));
    const a = l[0];
    return s = e.pn(a, r), s;
  }
}
class Ri extends N {
  constructor() {
    super(...arguments), this.Vt = null;
  }
  tt(t) {
    this.Vt = t;
  }
  Z({
    context: t,
    bitmapSize: i,
    horizontalPixelRatio: n,
    verticalPixelRatio: s
  }) {
    if (null === this.Vt) return;
    const e = Math.max(1, Math.floor(n));
    t.lineWidth = e, function (t, i) {
      t.save(), t.lineWidth % 2 && t.translate(.5, .5), i(), t.restore();
    }(t, () => {
      const r = _(this.Vt);
      if (r.jl) {
        t.strokeStyle = r.$l, h(t, r.Hl), t.beginPath();
        for (const s of r.Ul) {
          const r = Math.round(s.ql * n);
          t.moveTo(r, -e), t.lineTo(r, i.height + e);
        }
        t.stroke();
      }
      if (r.Yl) {
        t.strokeStyle = r.Xl, h(t, r.Zl), t.beginPath();
        for (const n of r.Kl) {
          const r = Math.round(n.ql * s);
          t.moveTo(-e, r), t.lineTo(i.width + e, r);
        }
        t.stroke();
      }
    });
  }
}
class Di {
  constructor(t) {
    this.jt = new Ri(), this.vt = !0, this.tn = t;
  }
  gt() {
    this.vt = !0;
  }
  Mt() {
    if (this.vt) {
      const t = this.tn.Ut().F().grid,
        i = {
          Yl: t.horzLines.visible,
          jl: t.vertLines.visible,
          Xl: t.horzLines.color,
          $l: t.vertLines.color,
          Zl: t.horzLines.style,
          Hl: t.vertLines.style,
          Kl: this.tn.fn().Gl(),
          Ul: this.tn.Ut().yt().Gl() || []
        };
      this.jt.tt(i), this.vt = !1;
    }
    return this.jt;
  }
}
class Bi {
  constructor(t) {
    this.bn = new Di(t);
  }
  Th() {
    return this.bn;
  }
}
const Oi = {
  Jl: 4,
  Ql: 1e-4
};
function Ai(t, i) {
  const n = 100 * (t - i) / i;
  return i < 0 ? -n : n;
}
function Li(t, i) {
  const n = Ai(t.lh(), i),
    s = Ai(t.ah(), i);
  return new pi(n, s);
}
function Ii(t, i) {
  const n = 100 * (t - i) / i + 100;
  return i < 0 ? -n : n;
}
function Ei(t, i) {
  const n = Ii(t.lh(), i),
    s = Ii(t.ah(), i);
  return new pi(n, s);
}
function Vi(t, i) {
  const n = Math.abs(t);
  if (n < 1e-15) return 0;
  const s = At(n + i.Ql) + i.Jl;
  return t < 0 ? -s : s;
}
function zi(t, i) {
  const n = Math.abs(t);
  if (n < 1e-15) return 0;
  const s = Math.pow(10, n - i.Jl) - i.Ql;
  return t < 0 ? -s : s;
}
function Ni(t, i) {
  if (null === t) return null;
  const n = Vi(t.lh(), i),
    s = Vi(t.ah(), i);
  return new pi(n, s);
}
function Fi(t, i) {
  if (null === t) return null;
  const n = zi(t.lh(), i),
    s = zi(t.ah(), i);
  return new pi(n, s);
}
function Wi(t) {
  if (null === t) return Oi;
  const i = Math.abs(t.ah() - t.lh());
  if (i >= 1 || i < 1e-15) return Oi;
  const n = Math.ceil(Math.abs(Math.log10(i))),
    s = Oi.Jl + n;
  return {
    Jl: s,
    Ql: 1 / Math.pow(10, s)
  };
}
class ji {
  constructor(t, i) {
    if (this.ta = t, this.ia = i, function (t) {
      if (t < 0) return !1;
      for (let i = t; i > 1; i /= 10) if (i % 10 != 0) return !1;
      return !0;
    }(this.ta)) this.na = [2, 2.5, 2];else {
      this.na = [];
      for (let t = this.ta; 1 !== t;) {
        if (t % 2 == 0) this.na.push(2), t /= 2;else {
          if (t % 5 != 0) throw new Error("unexpected base");
          this.na.push(2, 2.5), t /= 5;
        }
        if (this.na.length > 100) throw new Error("something wrong with base");
      }
    }
  }
  sa(t, i, n) {
    const s = 0 === this.ta ? 0 : 1 / this.ta;
    let e = Math.pow(10, Math.max(0, Math.ceil(At(t - i)))),
      r = 0,
      h = this.ia[0];
    for (;;) {
      const t = Ot(e, s, 1e-14) && e > s + 1e-14,
        i = Ot(e, n * h, 1e-14),
        l = Ot(e, 1, 1e-14);
      if (!(t && i && l)) break;
      e /= h, h = this.ia[++r % this.ia.length];
    }
    if (e <= s + 1e-14 && (e = s), e = Math.max(1, e), this.na.length > 0 && (l = e, a = 1, o = 1e-14, Math.abs(l - a) < o)) for (r = 0, h = this.na[0]; Ot(e, n * h, 1e-14) && e > s + 1e-14;) e /= h, h = this.na[++r % this.na.length];
    var l, a, o;
    return e;
  }
}
class $i {
  constructor(t, i, n, s) {
    this.ea = [], this.Vi = t, this.ta = i, this.ra = n, this.ha = s;
  }
  sa(t, i) {
    if (t < i) throw new Error("high < low");
    const n = this.Vi.It(),
      s = (t - i) * this.la() / n,
      e = new ji(this.ta, [2, 2.5, 2]),
      r = new ji(this.ta, [2, 2, 2.5]),
      h = new ji(this.ta, [2.5, 2, 2]),
      l = [];
    return l.push(e.sa(t, i, s), r.sa(t, i, s), h.sa(t, i, s)), function (t) {
      if (t.length < 1) throw Error("array is empty");
      let i = t[0];
      for (let n = 1; n < t.length; ++n) t[n] < i && (i = t[n]);
      return i;
    }(l);
  }
  aa() {
    const t = this.Vi,
      i = t.Tt();
    if (null === i) return void (this.ea = []);
    const n = t.It(),
      s = this.ra(n - 1, i),
      e = this.ra(0, i),
      r = this.Vi.F().entireTextOnly ? this.oa() / 2 : 0,
      h = r,
      l = n - 1 - r,
      a = Math.max(s, e),
      o = Math.min(s, e);
    if (a === o) return void (this.ea = []);
    let _ = this.sa(a, o),
      u = a % _;
    u += u < 0 ? _ : 0;
    const c = a >= o ? 1 : -1;
    let d = null,
      f = 0;
    for (let n = a - u; n > o; n -= _) {
      const s = this.ha(n, i, !0);
      null !== d && Math.abs(s - d) < this.la() || s < h || s > l || (f < this.ea.length ? (this.ea[f].ql = s, this.ea[f]._a = t.ua(n)) : this.ea.push({
        ql: s,
        _a: t.ua(n)
      }), f++, d = s, t.ca() && (_ = this.sa(n * c, o)));
    }
    this.ea.length = f;
  }
  Gl() {
    return this.ea;
  }
  oa() {
    return this.Vi.T();
  }
  la() {
    return Math.ceil(2.5 * this.oa());
  }
}
function Hi(t) {
  return t.slice().sort((t, i) => _(t.Zi()) - _(i.Zi()));
}
var Ui;
exports.PriceScaleMode = Ui;
!function (t) {
  t[t.Normal = 0] = "Normal", t[t.Logarithmic = 1] = "Logarithmic", t[t.Percentage = 2] = "Percentage", t[t.IndexedTo100 = 3] = "IndexedTo100";
}(Ui || (exports.PriceScaleMode = Ui = {}));
const qi = new at(),
  Yi = new lt(100, 1);
class Xi {
  constructor(t, i, n, s) {
    this.da = 0, this.fa = null, this.ph = null, this.pa = null, this.va = {
      ma: !1,
      ba: null
    }, this.ga = 0, this.wa = 0, this.Ma = new M(), this.Sa = new M(), this.xa = [], this.ya = null, this.ka = null, this.Ca = null, this.Ta = null, this.Ol = Yi, this.Pa = Wi(null), this.Ra = t, this.un = i, this.Da = n, this.Ba = s, this.Oa = new $i(this, 100, this.Aa.bind(this), this.La.bind(this));
  }
  Vl() {
    return this.Ra;
  }
  F() {
    return this.un;
  }
  kh(t) {
    if (S(this.un, t), this.zl(), void 0 !== t.mode && this.Ia({
      lr: t.mode
    }), void 0 !== t.scaleMargins) {
      const i = o(t.scaleMargins.top),
        n = o(t.scaleMargins.bottom);
      if (i < 0 || i > 1) throw new Error(`Invalid top margin - expect value between 0 and 1, given=${i}`);
      if (n < 0 || n > 1 || i + n > 1) throw new Error(`Invalid bottom margin - expect value between 0 and 1, given=${n}`);
      if (i + n > 1) throw new Error(`Invalid margins - sum of margins must be less than 1, given=${i + n}`);
      this.Ea(), this.ka = null;
    }
  }
  Va() {
    return this.un.autoScale;
  }
  ca() {
    return 1 === this.un.mode;
  }
  th() {
    return 2 === this.un.mode;
  }
  za() {
    return 3 === this.un.mode;
  }
  lr() {
    return {
      Fn: this.un.autoScale,
      Na: this.un.invertScale,
      lr: this.un.mode
    };
  }
  Ia(t) {
    const i = this.lr();
    let n = null;
    void 0 !== t.Fn && (this.un.autoScale = t.Fn), void 0 !== t.lr && (this.un.mode = t.lr, 2 !== t.lr && 3 !== t.lr || (this.un.autoScale = !0), this.va.ma = !1), 1 === i.lr && t.lr !== i.lr && (!function (t, i) {
      if (null === t) return !1;
      const n = zi(t.lh(), i),
        s = zi(t.ah(), i);
      return isFinite(n) && isFinite(s);
    }(this.ph, this.Pa) ? this.un.autoScale = !0 : (n = Fi(this.ph, this.Pa), null !== n && this.Fa(n))), 1 === t.lr && t.lr !== i.lr && (n = Ni(this.ph, this.Pa), null !== n && this.Fa(n));
    const s = i.lr !== this.un.mode;
    s && (2 === i.lr || this.th()) && this.zl(), s && (3 === i.lr || this.za()) && this.zl(), void 0 !== t.Na && i.Na !== t.Na && (this.un.invertScale = t.Na, this.Wa()), this.Sa.m(i, this.lr());
  }
  ja() {
    return this.Sa;
  }
  T() {
    return this.Da.fontSize;
  }
  It() {
    return this.da;
  }
  $a(t) {
    this.da !== t && (this.da = t, this.Ea(), this.ka = null);
  }
  Ha() {
    if (this.fa) return this.fa;
    const t = this.It() - this.Ua() - this.qa();
    return this.fa = t, t;
  }
  bh() {
    return this.Ya(), this.ph;
  }
  Fa(t, i) {
    const n = this.ph;
    (i || null === n && null !== t || null !== n && !n.rh(t)) && (this.ka = null, this.ph = t);
  }
  Ni() {
    return this.Ya(), 0 === this.da || !this.ph || this.ph.Ni();
  }
  Xa(t) {
    return this.Na() ? t : this.It() - 1 - t;
  }
  Dt(t, i) {
    return this.th() ? t = Ai(t, i) : this.za() && (t = Ii(t, i)), this.La(t, i);
  }
  $s(t, i, n) {
    this.Ya();
    const s = this.qa(),
      e = _(this.bh()),
      r = e.lh(),
      h = e.ah(),
      l = this.Ha() - 1,
      a = this.Na(),
      o = l / (h - r),
      u = void 0 === n ? 0 : n.from,
      c = void 0 === n ? t.length : n.to,
      d = this.Za();
    for (let n = u; n < c; n++) {
      const e = t[n],
        h = e.ut;
      if (isNaN(h)) continue;
      let l = h;
      null !== d && (l = d(e.ut, i));
      const _ = s + o * (l - r),
        u = a ? _ : this.da - 1 - _;
      e.et = u;
    }
  }
  le(t, i, n) {
    this.Ya();
    const s = this.qa(),
      e = _(this.bh()),
      r = e.lh(),
      h = e.ah(),
      l = this.Ha() - 1,
      a = this.Na(),
      o = l / (h - r),
      u = void 0 === n ? 0 : n.from,
      c = void 0 === n ? t.length : n.to,
      d = this.Za();
    for (let n = u; n < c; n++) {
      const e = t[n];
      let h = e.oe,
        l = e._e,
        _ = e.ue,
        u = e.ce;
      null !== d && (h = d(e.oe, i), l = d(e._e, i), _ = d(e.ue, i), u = d(e.ce, i));
      let c = s + o * (h - r),
        f = a ? c : this.da - 1 - c;
      e.re = f, c = s + o * (l - r), f = a ? c : this.da - 1 - c, e.ne = f, c = s + o * (_ - r), f = a ? c : this.da - 1 - c, e.se = f, c = s + o * (u - r), f = a ? c : this.da - 1 - c, e.he = f;
    }
  }
  pn(t, i) {
    const n = this.Aa(t, i);
    return this.Ka(n, i);
  }
  Ka(t, i) {
    let n = t;
    return this.th() ? n = function (t, i) {
      return i < 0 && (t = -t), t / 100 * i + i;
    }(n, i) : this.za() && (n = function (t, i) {
      return t -= 100, i < 0 && (t = -t), t / 100 * i + i;
    }(n, i)), n;
  }
  Wl() {
    return this.xa;
  }
  Ga() {
    if (this.ya) return this.ya;
    let t = [];
    for (let i = 0; i < this.xa.length; i++) {
      const n = this.xa[i];
      null === n.Zi() && n.Ki(i + 1), t.push(n);
    }
    return t = Hi(t), this.ya = t, this.ya;
  }
  Ja(t) {
    -1 === this.xa.indexOf(t) && (this.xa.push(t), this.zl(), this.Qa());
  }
  io(t) {
    const i = this.xa.indexOf(t);
    if (-1 === i) throw new Error("source is not attached to scale");
    this.xa.splice(i, 1), 0 === this.xa.length && (this.Ia({
      Fn: !0
    }), this.Fa(null)), this.zl(), this.Qa();
  }
  Tt() {
    let t = null;
    for (const i of this.xa) {
      const n = i.Tt();
      null !== n && (null === t || n.yl < t.yl) && (t = n);
    }
    return null === t ? null : t.Ot;
  }
  Na() {
    return this.un.invertScale;
  }
  Gl() {
    const t = null === this.Tt();
    if (null !== this.ka && (t || this.ka.no === t)) return this.ka.Gl;
    this.Oa.aa();
    const i = this.Oa.Gl();
    return this.ka = {
      Gl: i,
      no: t
    }, this.Ma.m(), i;
  }
  so() {
    return this.Ma;
  }
  eo(t) {
    this.th() || this.za() || null === this.Ca && null === this.pa && (this.Ni() || (this.Ca = this.da - t, this.pa = _(this.bh()).hh()));
  }
  ro(t) {
    if (this.th() || this.za()) return;
    if (null === this.Ca) return;
    this.Ia({
      Fn: !1
    }), (t = this.da - t) < 0 && (t = 0);
    let i = (this.Ca + .2 * (this.da - 1)) / (t + .2 * (this.da - 1));
    const n = _(this.pa).hh();
    i = Math.max(i, .1), n._h(i), this.Fa(n);
  }
  ho() {
    this.th() || this.za() || (this.Ca = null, this.pa = null);
  }
  lo(t) {
    this.Va() || null === this.Ta && null === this.pa && (this.Ni() || (this.Ta = t, this.pa = _(this.bh()).hh()));
  }
  ao(t) {
    if (this.Va()) return;
    if (null === this.Ta) return;
    const i = _(this.bh()).oh() / (this.Ha() - 1);
    let n = t - this.Ta;
    this.Na() && (n *= -1);
    const s = n * i,
      e = _(this.pa).hh();
    e.uh(s), this.Fa(e, !0), this.ka = null;
  }
  oo() {
    this.Va() || null !== this.Ta && (this.Ta = null, this.pa = null);
  }
  Bl() {
    return this.Ol || this.zl(), this.Ol;
  }
  Fi(t, i) {
    switch (this.un.mode) {
      case 2:
        return this.Bl().format(Ai(t, i));
      case 3:
        return this.Bl().format(Ii(t, i));
      default:
        return this.Sh(t);
    }
  }
  ua(t) {
    switch (this.un.mode) {
      case 2:
      case 3:
        return this.Bl().format(t);
      default:
        return this.Sh(t);
    }
  }
  _l(t) {
    return this.Sh(t, _(this._o()).Bl());
  }
  ul(t, i) {
    return t = Ai(t, i), qi.format(t);
  }
  uo() {
    return this.xa;
  }
  co(t) {
    this.va = {
      ba: t,
      ma: !1
    };
  }
  Dn() {
    this.xa.forEach(t => t.Dn());
  }
  zl() {
    this.ka = null;
    const t = this._o();
    let i = 100;
    null !== t && (i = Math.round(1 / t.Dl())), this.Ol = Yi, this.th() ? (this.Ol = qi, i = 100) : this.za() ? (this.Ol = new lt(100, 1), i = 100) : null !== t && (this.Ol = t.Bl()), this.Oa = new $i(this, i, this.Aa.bind(this), this.La.bind(this)), this.Oa.aa();
  }
  Qa() {
    this.ya = null;
  }
  _o() {
    return this.xa[0] || null;
  }
  Ua() {
    return this.Na() ? this.un.scaleMargins.bottom * this.It() + this.wa : this.un.scaleMargins.top * this.It() + this.ga;
  }
  qa() {
    return this.Na() ? this.un.scaleMargins.top * this.It() + this.ga : this.un.scaleMargins.bottom * this.It() + this.wa;
  }
  Ya() {
    this.va.ma || (this.va.ma = !0, this.do());
  }
  Ea() {
    this.fa = null;
  }
  La(t, i) {
    if (this.Ya(), this.Ni()) return 0;
    t = this.ca() && t ? Vi(t, this.Pa) : t;
    const n = _(this.bh()),
      s = this.qa() + (this.Ha() - 1) * (t - n.lh()) / n.oh();
    return this.Xa(s);
  }
  Aa(t, i) {
    if (this.Ya(), this.Ni()) return 0;
    const n = this.Xa(t),
      s = _(this.bh()),
      e = s.lh() + s.oh() * ((n - this.qa()) / (this.Ha() - 1));
    return this.ca() ? zi(e, this.Pa) : e;
  }
  Wa() {
    this.ka = null, this.Oa.aa();
  }
  do() {
    const t = this.va.ba;
    if (null === t) return;
    let i = null;
    const n = this.uo();
    let s = 0,
      e = 0;
    for (const r of n) {
      if (!r.Ct()) continue;
      const n = r.Tt();
      if (null === n) continue;
      const h = r.Pl(t.Ms(), t.ci());
      let l = h && h.bh();
      if (null !== l) {
        switch (this.un.mode) {
          case 1:
            l = Ni(l, this.Pa);
            break;
          case 2:
            l = Li(l, n.Ot);
            break;
          case 3:
            l = Ei(l, n.Ot);
        }
        if (i = null === i ? l : i.Qn(_(l)), null !== h) {
          const t = h.gh();
          null !== t && (s = Math.max(s, t.above), e = Math.max(s, t.below));
        }
      }
    }
    if (s === this.ga && e === this.wa || (this.ga = s, this.wa = e, this.ka = null, this.Ea()), null !== i) {
      if (i.lh() === i.ah()) {
        const t = this._o(),
          n = 5 * (null === t || this.th() || this.za() ? 1 : t.Dl());
        this.ca() && (i = Fi(i, this.Pa)), i = new pi(i.lh() - n, i.ah() + n), this.ca() && (i = Ni(i, this.Pa));
      }
      if (this.ca()) {
        const t = Fi(i, this.Pa),
          n = Wi(t);
        if (r = n, h = this.Pa, r.Jl !== h.Jl || r.Ql !== h.Ql) {
          const s = null !== this.pa ? Fi(this.pa, this.Pa) : null;
          this.Pa = n, i = Ni(t, n), null !== s && (this.pa = Ni(s, n));
        }
      }
      this.Fa(i);
    } else null === this.ph && (this.Fa(new pi(-.5, .5)), this.Pa = Wi(null));
    var r, h;
    this.va.ma = !0;
  }
  Za() {
    return this.th() ? Ai : this.za() ? Ii : this.ca() ? t => Vi(t, this.Pa) : null;
  }
  Sh(t, i) {
    return void 0 === this.Ba.priceFormatter ? (void 0 === i && (i = this.Bl()), i.format(t)) : this.Ba.priceFormatter(t);
  }
}
class Zi {
  constructor(t, i) {
    this.xa = [], this.fo = new Map(), this.da = 0, this.po = 0, this.vo = 1e3, this.ya = null, this.mo = new M(), this.bo = t, this.Hi = i, this.wo = new Bi(this);
    const n = i.F();
    this.Mo = this.So("left", n.leftPriceScale), this.xo = this.So("right", n.rightPriceScale), this.Mo.ja().l(this.yo.bind(this, this.Mo), this), this.xo.ja().l(this.yo.bind(this, this.xo), this), this.ko(n);
  }
  ko(t) {
    if (t.leftPriceScale && this.Mo.kh(t.leftPriceScale), t.rightPriceScale && this.xo.kh(t.rightPriceScale), t.localization && (this.Mo.zl(), this.xo.zl()), t.overlayPriceScales) {
      const i = Array.from(this.fo.values());
      for (const n of i) {
        const i = _(n[0].Bt());
        i.kh(t.overlayPriceScales), t.localization && i.zl();
      }
    }
  }
  Co(t) {
    switch (t) {
      case "left":
        return this.Mo;
      case "right":
        return this.xo;
    }
    return this.fo.has(t) ? o(this.fo.get(t))[0].Bt() : null;
  }
  M() {
    this.Ut().To().v(this), this.Mo.ja().v(this), this.xo.ja().v(this), this.xa.forEach(t => {
      t.M && t.M();
    }), this.mo.m();
  }
  Po() {
    return this.vo;
  }
  Ro(t) {
    this.vo = t;
  }
  Ut() {
    return this.Hi;
  }
  $i() {
    return this.po;
  }
  It() {
    return this.da;
  }
  Do(t) {
    this.po = t, this.Bo();
  }
  $a(t) {
    this.da = t, this.Mo.$a(t), this.xo.$a(t), this.xa.forEach(i => {
      if (this.Ge(i)) {
        const n = i.Bt();
        null !== n && n.$a(t);
      }
    }), this.Bo();
  }
  Wl() {
    return this.xa;
  }
  Ge(t) {
    const i = t.Bt();
    return null === i || this.Mo !== i && this.xo !== i;
  }
  Ja(t, i, n) {
    const s = void 0 !== n ? n : this.Ao().Oo + 1;
    this.Lo(t, i, s);
  }
  io(t) {
    const i = this.xa.indexOf(t);
    a(-1 !== i, "removeDataSource: invalid data source"), this.xa.splice(i, 1);
    const n = _(t.Bt()).Vl();
    if (this.fo.has(n)) {
      const i = o(this.fo.get(n)),
        s = i.indexOf(t);
      -1 !== s && (i.splice(s, 1), 0 === i.length && this.fo.delete(n));
    }
    const s = t.Bt();
    s && s.Wl().indexOf(t) >= 0 && s.io(t), null !== s && (s.Qa(), this.Io(s)), this.ya = null;
  }
  Qe(t) {
    return t === this.Mo ? "left" : t === this.xo ? "right" : "overlay";
  }
  Eo() {
    return this.Mo;
  }
  Vo() {
    return this.xo;
  }
  zo(t, i) {
    t.eo(i);
  }
  No(t, i) {
    t.ro(i), this.Bo();
  }
  Fo(t) {
    t.ho();
  }
  Wo(t, i) {
    t.lo(i);
  }
  jo(t, i) {
    t.ao(i), this.Bo();
  }
  $o(t) {
    t.oo();
  }
  Bo() {
    this.xa.forEach(t => {
      t.Dn();
    });
  }
  fn() {
    let t = null;
    return this.Hi.F().rightPriceScale.visible && 0 !== this.xo.Wl().length ? t = this.xo : this.Hi.F().leftPriceScale.visible && 0 !== this.Mo.Wl().length ? t = this.Mo : 0 !== this.xa.length && (t = this.xa[0].Bt()), null === t && (t = this.xo), t;
  }
  Je() {
    let t = null;
    return this.Hi.F().rightPriceScale.visible ? t = this.xo : this.Hi.F().leftPriceScale.visible && (t = this.Mo), t;
  }
  Io(t) {
    null !== t && t.Va() && this.Ho(t);
  }
  Uo(t) {
    const i = this.bo.zs();
    t.Ia({
      Fn: !0
    }), null !== i && t.co(i), this.Bo();
  }
  qo() {
    this.Ho(this.Mo), this.Ho(this.xo);
  }
  Yo() {
    this.Io(this.Mo), this.Io(this.xo), this.xa.forEach(t => {
      this.Ge(t) && this.Io(t.Bt());
    }), this.Bo(), this.Hi.Ch();
  }
  Ga() {
    return null === this.ya && (this.ya = Hi(this.xa)), this.ya;
  }
  Xo() {
    return this.mo;
  }
  Zo() {
    return this.wo;
  }
  Ho(t) {
    const i = t.uo();
    if (i && i.length > 0 && !this.bo.Ni()) {
      const i = this.bo.zs();
      null !== i && t.co(i);
    }
    t.Dn();
  }
  Ao() {
    const t = this.Ga();
    if (0 === t.length) return {
      Ko: 0,
      Oo: 0
    };
    let i = 0,
      n = 0;
    for (let s = 0; s < t.length; s++) {
      const e = t[s].Zi();
      null !== e && (e < i && (i = e), e > n && (n = e));
    }
    return {
      Ko: i,
      Oo: n
    };
  }
  Lo(t, i, n) {
    let s = this.Co(i);
    if (null === s && (s = this.So(i, this.Hi.F().overlayPriceScales)), this.xa.push(t), !st(i)) {
      const n = this.fo.get(i) || [];
      n.push(t), this.fo.set(i, n);
    }
    s.Ja(t), t.Gi(s), t.Ki(n), this.Io(s), this.ya = null;
  }
  yo(t, i, n) {
    i.lr !== n.lr && this.Ho(t);
  }
  So(t, i) {
    const n = Object.assign({
        visible: !0,
        autoScale: !0
      }, T(i)),
      s = new Xi(t, n, this.Hi.F().layout, this.Hi.F().localization);
    return s.$a(this.It()), s;
  }
}
const Ki = t => t.getUTCFullYear();
function Gi(t, i, n) {
  return i.replace(/yyyy/g, (t => ht(Ki(t), 4))(t)).replace(/yy/g, (t => ht(Ki(t) % 100, 2))(t)).replace(/MMMM/g, ((t, i) => new Date(t.getUTCFullYear(), t.getUTCMonth(), 1).toLocaleString(i, {
    month: "long"
  }))(t, n)).replace(/MMM/g, ((t, i) => new Date(t.getUTCFullYear(), t.getUTCMonth(), 1).toLocaleString(i, {
    month: "short"
  }))(t, n)).replace(/MM/g, (t => ht((t => t.getUTCMonth() + 1)(t), 2))(t)).replace(/dd/g, (t => ht((t => t.getUTCDate())(t), 2))(t));
}
class Ji {
  constructor(t = "yyyy-MM-dd", i = "default") {
    this.Go = t, this.Jo = i;
  }
  Qo(t) {
    return Gi(t, this.Go, this.Jo);
  }
}
class Qi {
  constructor(t) {
    this.t_ = t || "%h:%m:%s";
  }
  Qo(t) {
    return this.t_.replace("%h", ht(t.getUTCHours(), 2)).replace("%m", ht(t.getUTCMinutes(), 2)).replace("%s", ht(t.getUTCSeconds(), 2));
  }
}
const tn = {
  i_: "yyyy-MM-dd",
  n_: "%h:%m:%s",
  s_: " ",
  e_: "default"
};
class nn {
  constructor(t = {}) {
    const i = Object.assign(Object.assign({}, tn), t);
    this.r_ = new Ji(i.i_, i.e_), this.h_ = new Qi(i.n_), this.l_ = i.s_;
  }
  Qo(t) {
    return `${this.r_.Qo(t)}${this.l_}${this.h_.Qo(t)}`;
  }
}
class sn {
  constructor(t, i = 50) {
    this.Le = 0, this.Ie = 1, this.Ee = 1, this.ze = new Map(), this.Ve = new Map(), this.a_ = t, this.Ne = i;
  }
  Qo(t) {
    const i = t._t,
      n = void 0 === i.o_ ? new Date(1e3 * i.__).getTime() : new Date(Date.UTC(i.o_.year, i.o_.month - 1, i.o_.day)).getTime(),
      s = this.ze.get(n);
    if (void 0 !== s) return s.u_;
    if (this.Le === this.Ne) {
      const t = this.Ve.get(this.Ee);
      this.Ve.delete(this.Ee), this.ze.delete(o(t)), this.Ee++, this.Le--;
    }
    const e = this.a_(t);
    return this.ze.set(n, {
      u_: e,
      $e: this.Ie
    }), this.Ve.set(this.Ie, n), this.Le++, this.Ie++, e;
  }
}
class en {
  constructor(t, i) {
    a(t <= i, "right should be >= left"), this.c_ = t, this.d_ = i;
  }
  Ms() {
    return this.c_;
  }
  ci() {
    return this.d_;
  }
  f_() {
    return this.d_ - this.c_ + 1;
  }
  Ir(t) {
    return this.c_ <= t && t <= this.d_;
  }
  rh(t) {
    return this.c_ === t.Ms() && this.d_ === t.ci();
  }
}
function rn(t, i) {
  return null === t || null === i ? t === i : t.rh(i);
}
class hn {
  constructor() {
    this.p_ = new Map(), this.ze = null;
  }
  v_(t, i) {
    this.m_(i), this.ze = null;
    for (let n = i; n < t.length; ++n) {
      const i = t[n];
      let s = this.p_.get(i.b_);
      void 0 === s && (s = [], this.p_.set(i.b_, s)), s.push({
        Ys: n,
        _t: i._t,
        g_: i.b_,
        w_: i.w_
      });
    }
  }
  M_(t, i) {
    const n = Math.ceil(i / t);
    return null !== this.ze && this.ze.S_ === n || (this.ze = {
      Gl: this.x_(n),
      S_: n
    }), this.ze.Gl;
  }
  m_(t) {
    if (0 === t) return void this.p_.clear();
    const i = [];
    this.p_.forEach((n, s) => {
      t <= n[0].Ys ? i.push(s) : n.splice(wt(n, t, i => i.Ys < t), 1 / 0);
    });
    for (const t of i) this.p_.delete(t);
  }
  x_(t) {
    let i = [];
    for (const n of Array.from(this.p_.keys()).sort((t, i) => i - t)) {
      if (!this.p_.get(n)) continue;
      const s = i;
      i = [];
      const e = s.length;
      let r = 0;
      const h = o(this.p_.get(n)),
        l = h.length;
      let a = 1 / 0,
        _ = -1 / 0;
      for (let n = 0; n < l; n++) {
        const l = h[n],
          o = l.Ys;
        for (; r < e;) {
          const t = s[r],
            n = t.Ys;
          if (!(n < o)) {
            a = n;
            break;
          }
          r++, i.push(t), _ = n, a = 1 / 0;
        }
        a - o >= t && o - _ >= t && (i.push(l), _ = o);
      }
      for (; r < e; r++) i.push(s[r]);
    }
    return i;
  }
}
class ln {
  constructor(t) {
    this.y_ = t;
  }
  k_() {
    return null === this.y_ ? null : new en(Math.floor(this.y_.Ms()), Math.ceil(this.y_.ci()));
  }
  C_() {
    return this.y_;
  }
  static T_() {
    return new ln(null);
  }
}
var an, on, _n, un, cn;
exports.ColorType = cn;
exports.PriceLineSource = un;
exports.LastPriceAnimationMode = _n;
exports.TrackingModeExitMode = on;
exports.TickMarkType = an;
!function (t) {
  t[t.Year = 0] = "Year", t[t.Month = 1] = "Month", t[t.DayOfMonth = 2] = "DayOfMonth", t[t.Time = 3] = "Time", t[t.TimeWithSeconds = 4] = "TimeWithSeconds";
}(an || (exports.TickMarkType = an = {}));
class dn {
  constructor(t, i, n) {
    this.po = 0, this.P_ = null, this.R_ = [], this.Ta = null, this.Ca = null, this.D_ = new hn(), this.B_ = new Map(), this.O_ = ln.T_(), this.A_ = !0, this.L_ = new M(), this.I_ = new M(), this.E_ = new M(), this.V_ = null, this.z_ = null, this.N_ = [], this.un = i, this.Ba = n, this.F_ = i.rightOffset, this.W_ = i.barSpacing, this.Hi = t, this.j_();
  }
  F() {
    return this.un;
  }
  H_(t) {
    S(this.Ba, t), this.U_(), this.j_();
  }
  kh(t, i) {
    var n;
    S(this.un, t), this.un.fixLeftEdge && this.q_(), this.un.fixRightEdge && this.Y_(), void 0 !== t.barSpacing && this.Hi.Kn(t.barSpacing), void 0 !== t.rightOffset && this.Hi.Gn(t.rightOffset), void 0 !== t.minBarSpacing && this.Hi.Kn(null !== (n = t.barSpacing) && void 0 !== n ? n : this.W_), this.U_(), this.j_(), this.E_.m();
  }
  vn(t) {
    var i, n;
    return null !== (n = null === (i = this.R_[t]) || void 0 === i ? void 0 : i._t) && void 0 !== n ? n : null;
  }
  Ui(t) {
    var i;
    return null !== (i = this.R_[t]) && void 0 !== i ? i : null;
  }
  Nl(t, i) {
    if (this.R_.length < 1) return null;
    if (t.__ > this.R_[this.R_.length - 1]._t.__) return i ? this.R_.length - 1 : null;
    const n = wt(this.R_, t.__, (t, i) => t._t.__ < i);
    return t.__ < this.R_[n]._t.__ ? i ? n : null : n;
  }
  Ni() {
    return 0 === this.po || 0 === this.R_.length || null === this.P_;
  }
  zs() {
    return this.X_(), this.O_.k_();
  }
  Z_() {
    return this.X_(), this.O_.C_();
  }
  K_() {
    const t = this.zs();
    if (null === t) return null;
    const i = {
      from: t.Ms(),
      to: t.ci()
    };
    return this.G_(i);
  }
  G_(t) {
    const i = Math.round(t.from),
      n = Math.round(t.to),
      s = _(this.J_()),
      e = _(this.Q_());
    return {
      from: _(this.vn(Math.max(s, i))),
      to: _(this.vn(Math.min(e, n)))
    };
  }
  tu(t) {
    return {
      from: _(this.Nl(t.from, !0)),
      to: _(this.Nl(t.to, !0))
    };
  }
  $i() {
    return this.po;
  }
  Do(t) {
    if (!isFinite(t) || t <= 0) return;
    if (this.po === t) return;
    const i = this.Z_(),
      n = this.po;
    if (this.po = t, this.A_ = !0, this.un.lockVisibleTimeRangeOnResize && 0 !== n) {
      const i = this.W_ * t / n;
      this.W_ = i;
    }
    if (this.un.fixLeftEdge && null !== i && i.Ms() <= 0) {
      const i = n - t;
      this.F_ -= Math.round(i / this.W_) + 1, this.A_ = !0;
    }
    this.iu(), this.nu();
  }
  Et(t) {
    if (this.Ni() || !y(t)) return 0;
    const i = this.su() + this.F_ - t;
    return this.po - (i + .5) * this.W_ - 1;
  }
  js(t, i) {
    const n = this.su(),
      s = void 0 === i ? 0 : i.from,
      e = void 0 === i ? t.length : i.to;
    for (let i = s; i < e; i++) {
      const s = t[i]._t,
        e = n + this.F_ - s,
        r = this.po - (e + .5) * this.W_ - 1;
      t[i].st = r;
    }
  }
  eu(t) {
    return Math.ceil(this.ru(t));
  }
  Gn(t) {
    this.A_ = !0, this.F_ = t, this.nu(), this.Hi.hu(), this.Hi.Ch();
  }
  Ks() {
    return this.W_;
  }
  Kn(t) {
    this.lu(t), this.nu(), this.Hi.hu(), this.Hi.Ch();
  }
  au() {
    return this.F_;
  }
  Gl() {
    if (this.Ni()) return null;
    if (null !== this.z_) return this.z_;
    const t = this.W_,
      i = 5 * (this.Hi.F().layout.fontSize + 4),
      n = Math.round(i / t),
      s = _(this.zs()),
      e = Math.max(s.Ms(), s.Ms() - n),
      r = Math.max(s.ci(), s.ci() - n),
      h = this.D_.M_(t, i),
      l = this.J_() + n,
      a = this.Q_() - n,
      o = this.ou(),
      u = this.un.fixLeftEdge || o,
      c = this.un.fixRightEdge || o;
    let d = 0;
    for (const t of h) {
      if (!(e <= t.Ys && t.Ys <= r)) continue;
      let n;
      d < this.N_.length ? (n = this.N_[d], n.ql = this.Et(t.Ys), n._a = this._u(t), n.g_ = t.g_) : (n = {
        uu: !1,
        ql: this.Et(t.Ys),
        _a: this._u(t),
        g_: t.g_
      }, this.N_.push(n)), this.W_ > i / 2 && !o ? n.uu = !1 : n.uu = u && t.Ys <= l || c && t.Ys >= a, d++;
    }
    return this.N_.length = d, this.z_ = this.N_, this.N_;
  }
  cu() {
    this.A_ = !0, this.Kn(this.un.barSpacing), this.Gn(this.un.rightOffset);
  }
  du(t) {
    this.A_ = !0, this.P_ = t, this.nu(), this.q_();
  }
  fu(t, i) {
    const n = this.ru(t),
      s = this.Ks(),
      e = s + i * (s / 10);
    this.Kn(e), this.un.rightBarStaysOnScroll || this.Gn(this.au() + (n - this.ru(t)));
  }
  eo(t) {
    this.Ta && this.oo(), null === this.Ca && null === this.V_ && (this.Ni() || (this.Ca = t, this.pu()));
  }
  ro(t) {
    if (null === this.V_) return;
    const i = Bt(this.po - t, 0, this.po),
      n = Bt(this.po - _(this.Ca), 0, this.po);
    0 !== i && 0 !== n && this.Kn(this.V_.Ks * i / n);
  }
  ho() {
    null !== this.Ca && (this.Ca = null, this.vu());
  }
  lo(t) {
    null === this.Ta && null === this.V_ && (this.Ni() || (this.Ta = t, this.pu()));
  }
  ao(t) {
    if (null === this.Ta) return;
    const i = (this.Ta - t) / this.Ks();
    this.F_ = _(this.V_).au + i, this.A_ = !0, this.nu();
  }
  oo() {
    null !== this.Ta && (this.Ta = null, this.vu());
  }
  mu() {
    this.bu(this.un.rightOffset);
  }
  bu(t, i = 400) {
    if (!isFinite(t)) throw new RangeError("offset is required and must be finite number");
    if (!isFinite(i) || i <= 0) throw new RangeError("animationDuration (optional) must be finite positive number");
    const n = this.F_,
      s = performance.now();
    this.Hi.Yn({
      gu: t => (t - s) / i >= 1,
      wu: e => {
        const r = (e - s) / i;
        return r >= 1 ? t : n + (t - n) * r;
      }
    });
  }
  gt(t, i) {
    this.A_ = !0, this.R_ = t, this.D_.v_(t, i), this.nu();
  }
  Mu() {
    return this.L_;
  }
  Su() {
    return this.I_;
  }
  xu() {
    return this.E_;
  }
  su() {
    return this.P_ || 0;
  }
  yu(t) {
    const i = t.f_();
    this.lu(this.po / i), this.F_ = t.ci() - this.su(), this.nu(), this.A_ = !0, this.Hi.hu(), this.Hi.Ch();
  }
  ku() {
    const t = this.J_(),
      i = this.Q_();
    null !== t && null !== i && this.yu(new en(t, i + this.un.rightOffset));
  }
  Cu(t) {
    const i = new en(t.from, t.to);
    this.yu(i);
  }
  qi(t) {
    return void 0 !== this.Ba.timeFormatter ? this.Ba.timeFormatter(t.w_) : this.Tu.Qo(new Date(1e3 * t._t.__));
  }
  ou() {
    const {
      handleScroll: t,
      handleScale: i
    } = this.Hi.F();
    return !(t.horzTouchDrag || t.mouseWheel || t.pressedMouseMove || t.vertTouchDrag || i.axisDoubleClickReset.time || i.axisPressedMouseMove.time || i.mouseWheel || i.pinch);
  }
  J_() {
    return 0 === this.R_.length ? null : 0;
  }
  Q_() {
    return 0 === this.R_.length ? null : this.R_.length - 1;
  }
  Pu(t) {
    return (this.po - 1 - t) / this.W_;
  }
  ru(t) {
    const i = this.Pu(t),
      n = this.su() + this.F_ - i;
    return Math.round(1e6 * n) / 1e6;
  }
  lu(t) {
    const i = this.W_;
    this.W_ = t, this.iu(), i !== this.W_ && (this.A_ = !0, this.Ru());
  }
  X_() {
    if (!this.A_) return;
    if (this.A_ = !1, this.Ni()) return void this.Du(ln.T_());
    const t = this.su(),
      i = this.po / this.W_,
      n = this.F_ + t,
      s = new en(n - i + 1, n);
    this.Du(new ln(s));
  }
  iu() {
    const t = this.Bu();
    if (this.W_ < t && (this.W_ = t, this.A_ = !0), 0 !== this.po) {
      const t = .5 * this.po;
      this.W_ > t && (this.W_ = t, this.A_ = !0);
    }
  }
  Bu() {
    return this.un.fixLeftEdge && this.un.fixRightEdge && 0 !== this.R_.length ? this.po / this.R_.length : this.un.minBarSpacing;
  }
  nu() {
    const t = this.Ou();
    this.F_ > t && (this.F_ = t, this.A_ = !0);
    const i = this.Au();
    null !== i && this.F_ < i && (this.F_ = i, this.A_ = !0);
  }
  Au() {
    const t = this.J_(),
      i = this.P_;
    if (null === t || null === i) return null;
    return t - i - 1 + (this.un.fixLeftEdge ? this.po / this.W_ : Math.min(2, this.R_.length));
  }
  Ou() {
    return this.un.fixRightEdge ? 0 : this.po / this.W_ - Math.min(2, this.R_.length);
  }
  pu() {
    this.V_ = {
      Ks: this.Ks(),
      au: this.au()
    };
  }
  vu() {
    this.V_ = null;
  }
  _u(t) {
    let i = this.B_.get(t.g_);
    return void 0 === i && (i = new sn(t => this.Lu(t)), this.B_.set(t.g_, i)), i.Qo(t);
  }
  Lu(t) {
    const i = function (t, i, n) {
      switch (t) {
        case 0:
        case 10:
          return i ? n ? 4 : 3 : 2;
        case 20:
        case 21:
        case 22:
        case 30:
        case 31:
        case 32:
        case 33:
          return i ? 3 : 2;
        case 50:
          return 2;
        case 60:
          return 1;
        case 70:
          return 0;
      }
    }(t.g_, this.un.timeVisible, this.un.secondsVisible);
    if (void 0 !== this.un.tickMarkFormatter) {
      const n = this.un.tickMarkFormatter(t.w_, i, this.Ba.locale);
      if (null !== n) return n;
    }
    return function (t, i, n) {
      const s = {};
      switch (i) {
        case 0:
          s.year = "numeric";
          break;
        case 1:
          s.month = "short";
          break;
        case 2:
          s.day = "numeric";
          break;
        case 3:
          s.hour12 = !1, s.hour = "2-digit", s.minute = "2-digit";
          break;
        case 4:
          s.hour12 = !1, s.hour = "2-digit", s.minute = "2-digit", s.second = "2-digit";
      }
      const e = void 0 === t.o_ ? new Date(1e3 * t.__) : new Date(Date.UTC(t.o_.year, t.o_.month - 1, t.o_.day));
      return new Date(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds()).toLocaleString(n, s);
    }(t._t, i, this.Ba.locale);
  }
  Du(t) {
    const i = this.O_;
    this.O_ = t, rn(i.k_(), this.O_.k_()) || this.L_.m(), rn(i.C_(), this.O_.C_()) || this.I_.m(), this.Ru();
  }
  Ru() {
    this.z_ = null;
  }
  U_() {
    this.Ru(), this.B_.clear();
  }
  j_() {
    const t = this.Ba.dateFormat;
    this.un.timeVisible ? this.Tu = new nn({
      i_: t,
      n_: this.un.secondsVisible ? "%h:%m:%s" : "%h:%m",
      s_: "   ",
      e_: this.Ba.locale
    }) : this.Tu = new Ji(t, this.Ba.locale);
  }
  q_() {
    if (!this.un.fixLeftEdge) return;
    const t = this.J_();
    if (null === t) return;
    const i = this.zs();
    if (null === i) return;
    const n = i.Ms() - t;
    if (n < 0) {
      const t = this.F_ - n - 1;
      this.Gn(t);
    }
    this.iu();
  }
  Y_() {
    this.nu(), this.iu();
  }
}
class fn extends L {
  constructor(t) {
    super(), this.Iu = new Map(), this.Vt = t;
  }
  Z(t) {}
  G(t) {
    if (!this.Vt.Ct) return;
    const {
      context: i,
      mediaSize: n
    } = t;
    let s = 0;
    for (const t of this.Vt.Eu) {
      if (0 === t.Gt.length) continue;
      i.font = t.P;
      const e = this.Vu(i, t.Gt);
      e > n.width ? t.fu = n.width / e : t.fu = 1, s += t.zu * t.fu;
    }
    let e = 0;
    switch (this.Vt.Nu) {
      case "top":
        e = 0;
        break;
      case "center":
        e = Math.max((n.height - s) / 2, 0);
        break;
      case "bottom":
        e = Math.max(n.height - s, 0);
    }
    i.fillStyle = this.Vt.D;
    for (const t of this.Vt.Eu) {
      i.save();
      let s = 0;
      switch (this.Vt.Fu) {
        case "left":
          i.textAlign = "left", s = t.zu / 2;
          break;
        case "center":
          i.textAlign = "center", s = n.width / 2;
          break;
        case "right":
          i.textAlign = "right", s = n.width - 1 - t.zu / 2;
      }
      i.translate(s, e), i.textBaseline = "top", i.font = t.P, i.scale(t.fu, t.fu), i.fillText(t.Gt, 0, t.Wu), i.restore(), e += t.zu * t.fu;
    }
  }
  Vu(t, i) {
    const n = this.ju(t.font);
    let s = n.get(i);
    return void 0 === s && (s = t.measureText(i).width, n.set(i, s)), s;
  }
  ju(t) {
    let i = this.Iu.get(t);
    return void 0 === i && (i = new Map(), this.Iu.set(t, i)), i;
  }
}
class pn {
  constructor(t) {
    this.vt = !0, this.Wt = {
      Ct: !1,
      D: "",
      Eu: [],
      Nu: "center",
      Fu: "center"
    }, this.jt = new fn(this.Wt), this.$t = t;
  }
  gt() {
    this.vt = !0;
  }
  Mt() {
    return this.vt && (this.St(), this.vt = !1), this.jt;
  }
  St() {
    const t = this.$t.F(),
      i = this.Wt;
    i.Ct = t.visible, i.Ct && (i.D = t.color, i.Fu = t.horzAlign, i.Nu = t.vertAlign, i.Eu = [{
      Gt: t.text,
      P: B(t.fontSize, t.fontFamily, t.fontStyle),
      zu: 1.2 * t.fontSize,
      Wu: 0,
      fu: 0
    }]);
  }
}
class vn extends tt {
  constructor(t, i) {
    super(), this.un = i, this.bn = new pn(this);
  }
  Pn() {
    return [];
  }
  Tn() {
    return [this.bn];
  }
  F() {
    return this.un;
  }
  Dn() {
    this.bn.gt();
  }
}
!function (t) {
  t[t.OnTouchEnd = 0] = "OnTouchEnd", t[t.OnNextTap = 1] = "OnNextTap";
}(on || (exports.TrackingModeExitMode = on = {}));
class mn {
  constructor(t, i) {
    this.$u = [], this.Hu = [], this.po = 0, this.Uu = null, this.qu = new M(), this.Yu = new M(), this.Xu = null, this.Zu = t, this.un = i, this.Ku = new O(this), this.bo = new dn(this, i.timeScale, this.un.localization), this.bt = new nt(this, i.crosshair), this.Gu = new Pi(i.crosshair), this.Ju = new vn(this, i.watermark), this.Qu(), this.$u[0].Ro(2e3), this.tc = this.ic(0), this.nc = this.ic(1);
  }
  dl() {
    this.sc(et.ss());
  }
  Ch() {
    this.sc(et.ns());
  }
  Cl() {
    this.sc(new et(1));
  }
  fl(t) {
    const i = this.ec(t);
    this.sc(i);
  }
  rc() {
    return this.Uu;
  }
  hc(t) {
    const i = this.Uu;
    this.Uu = t, null !== i && this.fl(i.lc), null !== t && this.fl(t.lc);
  }
  F() {
    return this.un;
  }
  kh(t) {
    S(this.un, t), this.$u.forEach(i => i.ko(t)), void 0 !== t.timeScale && this.bo.kh(t.timeScale), void 0 !== t.localization && this.bo.H_(t.localization), (t.leftPriceScale || t.rightPriceScale) && this.qu.m(), this.tc = this.ic(0), this.nc = this.ic(1), this.dl();
  }
  ac(t, i) {
    if ("left" === t) return void this.kh({
      leftPriceScale: i
    });
    if ("right" === t) return void this.kh({
      rightPriceScale: i
    });
    const n = this.oc(t);
    null !== n && (n.Bt.kh(i), this.qu.m());
  }
  oc(t) {
    for (const i of this.$u) {
      const n = i.Co(t);
      if (null !== n) return {
        Ht: i,
        Bt: n
      };
    }
    return null;
  }
  yt() {
    return this.bo;
  }
  _c() {
    return this.$u;
  }
  uc() {
    return this.Ju;
  }
  cc() {
    return this.bt;
  }
  dc() {
    return this.Yu;
  }
  fc(t, i) {
    t.$a(i), this.hu();
  }
  Do(t) {
    this.po = t, this.bo.Do(this.po), this.$u.forEach(i => i.Do(t)), this.hu();
  }
  Qu(t) {
    const i = new Zi(this.bo, this);
    void 0 !== t ? this.$u.splice(t, 0, i) : this.$u.push(i);
    const n = void 0 === t ? this.$u.length - 1 : t,
      s = et.ss();
    return s.zn(n, {
      Nn: 0,
      Fn: !0
    }), this.sc(s), i;
  }
  zo(t, i, n) {
    t.zo(i, n);
  }
  No(t, i, n) {
    t.No(i, n), this.pl(), this.sc(this.vc(t, 2));
  }
  Fo(t, i) {
    t.Fo(i), this.sc(this.vc(t, 2));
  }
  Wo(t, i, n) {
    i.Va() || t.Wo(i, n);
  }
  jo(t, i, n) {
    i.Va() || (t.jo(i, n), this.pl(), this.sc(this.vc(t, 2)));
  }
  $o(t, i) {
    i.Va() || (t.$o(i), this.sc(this.vc(t, 2)));
  }
  Uo(t, i) {
    t.Uo(i), this.sc(this.vc(t, 2));
  }
  mc(t) {
    this.bo.eo(t);
  }
  bc(t, i) {
    const n = this.yt();
    if (n.Ni() || 0 === i) return;
    const s = n.$i();
    t = Math.max(1, Math.min(t, s)), n.fu(t, i), this.hu();
  }
  gc(t) {
    this.wc(0), this.Mc(t), this.Sc();
  }
  xc(t) {
    this.bo.ro(t), this.hu();
  }
  yc() {
    this.bo.ho(), this.Ch();
  }
  wc(t) {
    this.bo.lo(t);
  }
  Mc(t) {
    this.bo.ao(t), this.hu();
  }
  Sc() {
    this.bo.oo(), this.Ch();
  }
  wt() {
    return this.Hu;
  }
  kc(t, i, n, s) {
    this.bt.gn(t, i);
    let e = NaN,
      r = this.bo.eu(t);
    const h = this.bo.zs();
    null !== h && (r = Math.min(Math.max(h.Ms(), r), h.ci()));
    const l = s.fn(),
      a = l.Tt();
    null !== a && (e = l.pn(i, a)), e = this.Gu.Fl(e, r, s), this.bt.xn(r, e, s), this.Cl(), this.Yu.m(this.bt.xt(), {
      x: t,
      y: i
    }, n);
  }
  Cc() {
    this.cc().kn(), this.Cl(), this.Yu.m(null, null, null);
  }
  pl() {
    const t = this.bt.Ht();
    if (null !== t) {
      const i = this.bt.Mn(),
        n = this.bt.Sn();
      this.kc(i, n, null, t);
    }
    this.bt.Dn();
  }
  Tc(t, i, n) {
    const s = this.bo.vn(0);
    void 0 !== i && void 0 !== n && this.bo.gt(i, n);
    const e = this.bo.vn(0),
      r = this.bo.su(),
      h = this.bo.zs();
    if (null !== h && null !== s && null !== e) {
      const i = h.Ir(r),
        n = s.__ > e.__,
        l = null !== t && t > r && !n,
        a = i && this.bo.F().shiftVisibleRangeOnNewBar;
      if (l && !a) {
        const i = t - r;
        this.bo.Gn(this.bo.au() - i);
      }
    }
    this.bo.du(t);
  }
  bl(t) {
    null !== t && t.Yo();
  }
  Ke(t) {
    const i = this.$u.find(i => i.Ga().includes(t));
    return void 0 === i ? null : i;
  }
  hu() {
    this.Ju.Dn(), this.$u.forEach(t => t.Yo()), this.pl();
  }
  M() {
    this.$u.forEach(t => t.M()), this.$u.length = 0, this.un.localization.priceFormatter = void 0, this.un.localization.timeFormatter = void 0;
  }
  Pc() {
    return this.Ku;
  }
  tr() {
    return this.Ku.F();
  }
  To() {
    return this.qu;
  }
  Rc(t, i) {
    const n = this.$u[0],
      s = this.Dc(i, t, n);
    return this.Hu.push(s), 1 === this.Hu.length ? this.dl() : this.Ch(), s;
  }
  Bc(t) {
    const i = this.Ke(t),
      n = this.Hu.indexOf(t);
    a(-1 !== n, "Series not found"), this.Hu.splice(n, 1), _(i).io(t), t.M && t.M();
  }
  cl(t, i) {
    const n = _(this.Ke(t));
    n.io(t);
    const s = this.oc(i);
    if (null === s) {
      const s = t.Zi();
      n.Ja(t, i, s);
    } else {
      const e = s.Ht === n ? t.Zi() : void 0;
      s.Ht.Ja(t, i, e);
    }
  }
  ku() {
    const t = et.ns();
    t.$n(), this.sc(t);
  }
  Oc(t) {
    const i = et.ns();
    i.qn(t), this.sc(i);
  }
  Zn() {
    const t = et.ns();
    t.Zn(), this.sc(t);
  }
  Kn(t) {
    const i = et.ns();
    i.Kn(t), this.sc(i);
  }
  Gn(t) {
    const i = et.ns();
    i.Gn(t), this.sc(i);
  }
  Yn(t) {
    const i = et.ns();
    i.Yn(t), this.sc(i);
  }
  Hn() {
    const t = et.ns();
    t.Hn(), this.sc(t);
  }
  Ac() {
    return this.un.rightPriceScale.visible ? "right" : "left";
  }
  Lc() {
    return this.nc;
  }
  U() {
    return this.tc;
  }
  Lt(t) {
    const i = this.nc,
      n = this.tc;
    if (i === n) return i;
    if (t = Math.max(0, Math.min(100, Math.round(100 * t))), null === this.Xu || this.Xu.bs !== n || this.Xu.gs !== i) this.Xu = {
      bs: n,
      gs: i,
      Ic: new Map()
    };else {
      const i = this.Xu.Ic.get(t);
      if (void 0 !== i) return i;
    }
    const s = function (t, i, n) {
      const [s, e, r, h] = g(t),
        [l, a, o, _] = g(i),
        u = [d(s + n * (l - s)), d(e + n * (a - e)), d(r + n * (o - r)), f(h + n * (_ - h))];
      return `rgba(${u[0]}, ${u[1]}, ${u[2]}, ${u[3]})`;
    }(n, i, t / 100);
    return this.Xu.Ic.set(t, s), s;
  }
  vc(t, i) {
    const n = new et(i);
    if (null !== t) {
      const s = this.$u.indexOf(t);
      n.zn(s, {
        Nn: i
      });
    }
    return n;
  }
  ec(t, i) {
    return void 0 === i && (i = 2), this.vc(this.Ke(t), i);
  }
  sc(t) {
    this.Zu && this.Zu(t), this.$u.forEach(t => t.Zo().Th().gt());
  }
  Dc(t, i, n) {
    const s = new Ti(this, t, i),
      e = void 0 !== t.priceScaleId ? t.priceScaleId : this.Ac();
    return n.Ja(s, e), st(e) || s.kh(t), s;
  }
  ic(t) {
    const i = this.un.layout;
    return "gradient" === i.background.type ? 0 === t ? i.background.topColor : i.background.bottomColor : i.background.color;
  }
}
function bn(t) {
  return !x(t) && !k(t);
}
function gn(t) {
  return x(t);
}
!function (t) {
  t[t.Disabled = 0] = "Disabled", t[t.Continuous = 1] = "Continuous", t[t.OnDataUpdate = 2] = "OnDataUpdate";
}(_n || (exports.LastPriceAnimationMode = _n = {})), function (t) {
  t[t.LastBar = 0] = "LastBar", t[t.LastVisible = 1] = "LastVisible";
}(un || (exports.PriceLineSource = un = {})), function (t) {
  t.Solid = "solid", t.VerticalGradient = "gradient";
}(cn || (exports.ColorType = cn = {}));
const wn = "undefined" != typeof window;
function Mn() {
  return !!wn && window.navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
}
function Sn() {
  return !!wn && /iPhone|iPad|iPod/.test(window.navigator.platform);
}
function xn(t) {
  return t + t % 2;
}
function yn(t, i) {
  return t.Ec - i.Ec;
}
function kn(t, i, n) {
  const s = (t.Ec - i.Ec) / (t._t - i._t);
  return Math.sign(s) * Math.min(Math.abs(s), n);
}
class Cn {
  constructor(t, i, n, s) {
    this.Vc = null, this.zc = null, this.Nc = null, this.Fc = null, this.Wc = null, this.jc = 0, this.$c = 0, this.Hc = t, this.Uc = i, this.qc = n, this.es = s;
  }
  Yc(t, i) {
    if (null !== this.Vc) {
      if (this.Vc._t === i) return void (this.Vc.Ec = t);
      if (Math.abs(this.Vc.Ec - t) < this.es) return;
    }
    this.Fc = this.Nc, this.Nc = this.zc, this.zc = this.Vc, this.Vc = {
      _t: i,
      Ec: t
    };
  }
  pr(t, i) {
    if (null === this.Vc || null === this.zc) return;
    if (i - this.Vc._t > 50) return;
    let n = 0;
    const s = kn(this.Vc, this.zc, this.Uc),
      e = yn(this.Vc, this.zc),
      r = [s],
      h = [e];
    if (n += e, null !== this.Nc) {
      const t = kn(this.zc, this.Nc, this.Uc);
      if (Math.sign(t) === Math.sign(s)) {
        const i = yn(this.zc, this.Nc);
        if (r.push(t), h.push(i), n += i, null !== this.Fc) {
          const t = kn(this.Nc, this.Fc, this.Uc);
          if (Math.sign(t) === Math.sign(s)) {
            const i = yn(this.Nc, this.Fc);
            r.push(t), h.push(i), n += i;
          }
        }
      }
    }
    let l = 0;
    for (let t = 0; t < r.length; ++t) l += h[t] / n * r[t];
    Math.abs(l) < this.Hc || (this.Wc = {
      Ec: t,
      _t: i
    }, this.$c = l, this.jc = function (t, i) {
      const n = Math.log(i);
      return Math.log(1 * n / -t) / n;
    }(Math.abs(l), this.qc));
  }
  wu(t) {
    const i = _(this.Wc),
      n = t - i._t;
    return i.Ec + this.$c * (Math.pow(this.qc, n) - 1) / Math.log(this.qc);
  }
  gu(t) {
    return null === this.Wc || this.Xc(t) === this.jc;
  }
  Xc(t) {
    const i = t - _(this.Wc)._t;
    return Math.min(i, this.jc);
  }
}
function Tn(t, n) {
  const s = _(t.ownerDocument).createElement("canvas");
  t.appendChild(s);
  const e = (0, _fancyCanvas.bindCanvasElementBitmapSizeTo)(s, {
    type: "device-pixel-content-box",
    options: {
      allowResizeObserver: !1
    },
    transform: (t, i) => ({
      width: Math.max(t.width, i.width),
      height: Math.max(t.height, i.height)
    })
  });
  return e.resizeCanvasElement(n), e;
}
function Pn(t) {
  wn && void 0 !== window.chrome && t.addEventListener("mousedown", t => {
    if (1 === t.button) return t.preventDefault(), !1;
  });
}
class Rn {
  constructor(t, i, n) {
    this.Zc = 0, this.Kc = null, this.Gc = {
      st: Number.NEGATIVE_INFINITY,
      et: Number.POSITIVE_INFINITY
    }, this.Jc = 0, this.Qc = null, this.td = {
      st: Number.NEGATIVE_INFINITY,
      et: Number.POSITIVE_INFINITY
    }, this.nd = null, this.sd = !1, this.ed = null, this.rd = null, this.hd = !1, this.ld = !1, this.ad = !1, this.od = null, this._d = null, this.ud = null, this.dd = null, this.fd = null, this.pd = null, this.vd = null, this.md = 0, this.bd = !1, this.gd = !1, this.wd = !1, this.Md = 0, this.Sd = null, this.xd = !Sn(), this.yd = t => {
      this.kd(t);
    }, this.Cd = t => {
      if (this.Td(t)) {
        const i = this.Pd(t);
        if (++this.Jc, this.Qc && this.Jc > 1) {
          const {
            Rd: n
          } = this.Dd(On(t), this.td);
          n < 30 && !this.ad && this.Bd(i, this.Ad.Od), this.Ld();
        }
      } else {
        const i = this.Pd(t);
        if (++this.Zc, this.Kc && this.Zc > 1) {
          const {
            Rd: n
          } = this.Dd(On(t), this.Gc);
          n < 5 && !this.ld && this.Id(i, this.Ad.Ed), this.Vd();
        }
      }
    }, this.zd = t, this.Ad = i, this.un = n, this.Nd();
  }
  M() {
    null !== this.od && (this.od(), this.od = null), null !== this._d && (this._d(), this._d = null), null !== this.dd && (this.dd(), this.dd = null), null !== this.fd && (this.fd(), this.fd = null), null !== this.pd && (this.pd(), this.pd = null), null !== this.ud && (this.ud(), this.ud = null), this.Fd(), this.Vd();
  }
  Wd(t) {
    this.dd && this.dd();
    const i = this.jd.bind(this);
    if (this.dd = () => {
      this.zd.removeEventListener("mousemove", i);
    }, this.zd.addEventListener("mousemove", i), this.Td(t)) return;
    const n = this.Pd(t);
    this.Id(n, this.Ad.$d), this.xd = !0;
  }
  Vd() {
    null !== this.Kc && clearTimeout(this.Kc), this.Zc = 0, this.Kc = null, this.Gc = {
      st: Number.NEGATIVE_INFINITY,
      et: Number.POSITIVE_INFINITY
    };
  }
  Ld() {
    null !== this.Qc && clearTimeout(this.Qc), this.Jc = 0, this.Qc = null, this.td = {
      st: Number.NEGATIVE_INFINITY,
      et: Number.POSITIVE_INFINITY
    };
  }
  jd(t) {
    if (this.wd || null !== this.rd) return;
    if (this.Td(t)) return;
    const i = this.Pd(t);
    this.Id(i, this.Ad.Hd), this.xd = !0;
  }
  Ud(t) {
    const i = Ln(t.changedTouches, _(this.Sd));
    if (null === i) return;
    if (this.Md = An(t), null !== this.vd) return;
    if (this.gd) return;
    this.bd = !0;
    const n = this.Dd(On(i), _(this.rd)),
      {
        qd: s,
        Yd: e,
        Rd: r
      } = n;
    if (this.hd || !(r < 5)) {
      if (!this.hd) {
        const t = .5 * s,
          i = e >= t && !this.un.Xd(),
          n = t > e && !this.un.Zd();
        i || n || (this.gd = !0), this.hd = !0, this.ad = !0, this.Fd(), this.Ld();
      }
      if (!this.gd) {
        const n = this.Pd(t, i);
        this.Bd(n, this.Ad.Kd), Bn(t);
      }
    }
  }
  Gd(t) {
    if (0 !== t.button) return;
    const i = this.Dd(On(t), _(this.ed)),
      {
        Rd: n
      } = i;
    if (n >= 5 && (this.ld = !0, this.Vd()), this.ld) {
      const i = this.Pd(t);
      this.Id(i, this.Ad.Jd);
    }
  }
  Dd(t, i) {
    const n = Math.abs(i.st - t.st),
      s = Math.abs(i.et - t.et);
    return {
      qd: n,
      Yd: s,
      Rd: n + s
    };
  }
  Qd(t) {
    let i = Ln(t.changedTouches, _(this.Sd));
    if (null === i && 0 === t.touches.length && (i = t.changedTouches[0]), null === i) return;
    this.Sd = null, this.Md = An(t), this.Fd(), this.rd = null, this.pd && (this.pd(), this.pd = null);
    const n = this.Pd(t, i);
    if (this.Bd(n, this.Ad.tf), ++this.Jc, this.Qc && this.Jc > 1) {
      const {
        Rd: t
      } = this.Dd(On(i), this.td);
      t < 30 && !this.ad && this.Bd(n, this.Ad.Od), this.Ld();
    } else this.ad || (this.Bd(n, this.Ad.if), this.Ad.if && Bn(t));
    0 === this.Jc && Bn(t), 0 === t.touches.length && this.sd && (this.sd = !1, Bn(t));
  }
  kd(t) {
    if (0 !== t.button) return;
    const i = this.Pd(t);
    if (this.ed = null, this.wd = !1, this.fd && (this.fd(), this.fd = null), Mn()) {
      this.zd.ownerDocument.documentElement.removeEventListener("mouseleave", this.yd);
    }
    if (!this.Td(t)) if (this.Id(i, this.Ad.nf), ++this.Zc, this.Kc && this.Zc > 1) {
      const {
        Rd: n
      } = this.Dd(On(t), this.Gc);
      n < 5 && !this.ld && this.Id(i, this.Ad.Ed), this.Vd();
    } else this.ld || this.Id(i, this.Ad.sf);
  }
  Fd() {
    null !== this.nd && (clearTimeout(this.nd), this.nd = null);
  }
  ef(t) {
    if (null !== this.Sd) return;
    const i = t.changedTouches[0];
    this.Sd = i.identifier, this.Md = An(t);
    const n = this.zd.ownerDocument.documentElement;
    this.ad = !1, this.hd = !1, this.gd = !1, this.rd = On(i), this.pd && (this.pd(), this.pd = null);
    {
      const i = this.Ud.bind(this),
        s = this.Qd.bind(this);
      this.pd = () => {
        n.removeEventListener("touchmove", i), n.removeEventListener("touchend", s);
      }, n.addEventListener("touchmove", i, {
        passive: !1
      }), n.addEventListener("touchend", s, {
        passive: !1
      }), this.Fd(), this.nd = setTimeout(this.rf.bind(this, t), 240);
    }
    const s = this.Pd(t, i);
    this.Bd(s, this.Ad.hf), this.Qc || (this.Jc = 0, this.Qc = setTimeout(this.Ld.bind(this), 500), this.td = On(i));
  }
  lf(t) {
    if (0 !== t.button) return;
    const i = this.zd.ownerDocument.documentElement;
    Mn() && i.addEventListener("mouseleave", this.yd), this.ld = !1, this.ed = On(t), this.fd && (this.fd(), this.fd = null);
    {
      const t = this.Gd.bind(this),
        n = this.kd.bind(this);
      this.fd = () => {
        i.removeEventListener("mousemove", t), i.removeEventListener("mouseup", n);
      }, i.addEventListener("mousemove", t), i.addEventListener("mouseup", n);
    }
    if (this.wd = !0, this.Td(t)) return;
    const n = this.Pd(t);
    this.Id(n, this.Ad.af), this.Kc || (this.Zc = 0, this.Kc = setTimeout(this.Vd.bind(this), 500), this.Gc = On(t));
  }
  Nd() {
    this.zd.addEventListener("mouseenter", this.Wd.bind(this)), this.zd.addEventListener("touchcancel", this.Fd.bind(this));
    {
      const t = this.zd.ownerDocument,
        i = t => {
          this.Ad._f && (t.composed && this.zd.contains(t.composedPath()[0]) || t.target && this.zd.contains(t.target) || this.Ad._f());
        };
      this._d = () => {
        t.removeEventListener("touchstart", i);
      }, this.od = () => {
        t.removeEventListener("mousedown", i);
      }, t.addEventListener("mousedown", i), t.addEventListener("touchstart", i, {
        passive: !0
      });
    }
    Sn() && (this.ud = () => {
      this.zd.removeEventListener("dblclick", this.Cd);
    }, this.zd.addEventListener("dblclick", this.Cd)), this.zd.addEventListener("mouseleave", this.uf.bind(this)), this.zd.addEventListener("touchstart", this.ef.bind(this), {
      passive: !0
    }), Pn(this.zd), this.zd.addEventListener("mousedown", this.lf.bind(this)), this.cf(), this.zd.addEventListener("touchmove", () => {}, {
      passive: !1
    });
  }
  cf() {
    void 0 === this.Ad.df && void 0 === this.Ad.ff && void 0 === this.Ad.pf || (this.zd.addEventListener("touchstart", t => this.vf(t.touches), {
      passive: !0
    }), this.zd.addEventListener("touchmove", t => {
      if (2 === t.touches.length && null !== this.vd && void 0 !== this.Ad.ff) {
        const i = Dn(t.touches[0], t.touches[1]) / this.md;
        this.Ad.ff(this.vd, i), Bn(t);
      }
    }, {
      passive: !1
    }), this.zd.addEventListener("touchend", t => {
      this.vf(t.touches);
    }));
  }
  vf(t) {
    1 === t.length && (this.bd = !1), 2 !== t.length || this.bd || this.sd ? this.mf() : this.bf(t);
  }
  bf(t) {
    const i = this.zd.getBoundingClientRect() || {
      left: 0,
      top: 0
    };
    this.vd = {
      st: (t[0].clientX - i.left + (t[1].clientX - i.left)) / 2,
      et: (t[0].clientY - i.top + (t[1].clientY - i.top)) / 2
    }, this.md = Dn(t[0], t[1]), void 0 !== this.Ad.df && this.Ad.df(), this.Fd();
  }
  mf() {
    null !== this.vd && (this.vd = null, void 0 !== this.Ad.pf && this.Ad.pf());
  }
  uf(t) {
    if (this.dd && this.dd(), this.Td(t)) return;
    if (!this.xd) return;
    const i = this.Pd(t);
    this.Id(i, this.Ad.gf), this.xd = !Sn();
  }
  rf(t) {
    const i = Ln(t.touches, _(this.Sd));
    if (null === i) return;
    const n = this.Pd(t, i);
    this.Bd(n, this.Ad.wf), this.ad = !0, this.sd = !0;
  }
  Td(t) {
    return t.sourceCapabilities && void 0 !== t.sourceCapabilities.firesTouchEvents ? t.sourceCapabilities.firesTouchEvents : An(t) < this.Md + 500;
  }
  Bd(t, i) {
    i && i.call(this.Ad, t);
  }
  Id(t, i) {
    i && i.call(this.Ad, t);
  }
  Pd(t, i) {
    const n = i || t,
      s = this.zd.getBoundingClientRect() || {
        left: 0,
        top: 0
      };
    return {
      clientX: n.clientX,
      clientY: n.clientY,
      pageX: n.pageX,
      pageY: n.pageY,
      screenX: n.screenX,
      screenY: n.screenY,
      localX: n.clientX - s.left,
      localY: n.clientY - s.top,
      ctrlKey: t.ctrlKey,
      altKey: t.altKey,
      shiftKey: t.shiftKey,
      metaKey: t.metaKey,
      Mf: !t.type.startsWith("mouse") && "contextmenu" !== t.type && "click" !== t.type,
      Sf: t.type,
      xf: n.target,
      yf: t.view,
      kf: () => {
        "touchstart" !== t.type && Bn(t);
      }
    };
  }
}
function Dn(t, i) {
  const n = t.clientX - i.clientX,
    s = t.clientY - i.clientY;
  return Math.sqrt(n * n + s * s);
}
function Bn(t) {
  t.cancelable && t.preventDefault();
}
function On(t) {
  return {
    st: t.pageX,
    et: t.pageY
  };
}
function An(t) {
  return t.timeStamp || performance.now();
}
function Ln(t, i) {
  for (let n = 0; n < t.length; ++n) if (t[n].identifier === i) return t[n];
  return null;
}
class In {
  constructor(i, n, s, e) {
    this.Vi = null, this.Cf = null, this.Tf = !1, this.Pf = new Ht(200), this.Vr = null, this.Rf = 0, this.Df = !1, this.Bf = () => {
      this.Df || this.tn.Of().Ut().Ch();
    }, this.Af = () => {
      this.Df || this.tn.Of().Ut().Ch();
    }, this.tn = i, this.un = n, this.Da = n.layout, this.Ku = s, this.Lf = "left" === e, this.If = document.createElement("div"), this.If.style.height = "100%", this.If.style.overflow = "hidden", this.If.style.width = "25px", this.If.style.left = "0", this.If.style.position = "relative", this.Ef = Tn(this.If, (0, _fancyCanvas.size)({
      width: 16,
      height: 16
    })), this.Ef.subscribeSuggestedBitmapSizeChanged(this.Bf);
    const r = this.Ef.canvasElement;
    r.style.position = "absolute", r.style.zIndex = "1", r.style.left = "0", r.style.top = "0", this.Vf = Tn(this.If, (0, _fancyCanvas.size)({
      width: 16,
      height: 16
    })), this.Vf.subscribeSuggestedBitmapSizeChanged(this.Af);
    const h = this.Vf.canvasElement;
    h.style.position = "absolute", h.style.zIndex = "2", h.style.left = "0", h.style.top = "0";
    const l = {
      af: this.zf.bind(this),
      hf: this.zf.bind(this),
      Jd: this.Nf.bind(this),
      Kd: this.Nf.bind(this),
      _f: this.Ff.bind(this),
      nf: this.Wf.bind(this),
      tf: this.Wf.bind(this),
      Ed: this.jf.bind(this),
      Od: this.jf.bind(this),
      $d: this.$f.bind(this),
      gf: this.Hf.bind(this)
    };
    this.Uf = new Rn(this.Vf.canvasElement, l, {
      Xd: () => !1,
      Zd: () => !0
    });
  }
  M() {
    this.Uf.M(), this.Vf.unsubscribeSuggestedBitmapSizeChanged(this.Af), this.Vf.dispose(), this.Ef.unsubscribeSuggestedBitmapSizeChanged(this.Bf), this.Ef.dispose(), null !== this.Vi && this.Vi.so().v(this), this.Vi = null;
  }
  qf() {
    return this.If;
  }
  T() {
    return this.Da.fontSize;
  }
  Yf() {
    const t = this.Ku.F();
    return this.Vr !== t.P && (this.Pf.Fe(), this.Vr = t.P), t;
  }
  Xf() {
    if (null === this.Vi) return 0;
    let t = 0;
    const i = this.Yf(),
      n = _(this.Ef.canvasElement.getContext("2d"));
    n.save();
    const s = this.Vi.Gl();
    n.font = this.Zf(), s.length > 0 && (t = Math.max(this.Pf.Si(n, s[0]._a), this.Pf.Si(n, s[s.length - 1]._a)));
    const e = this.Kf();
    for (let i = e.length; i--;) {
      const s = this.Pf.Si(n, e[i].Gt());
      s > t && (t = s);
    }
    const r = this.Vi.Tt();
    if (null !== r && null !== this.Cf) {
      const i = this.Vi.pn(1, r),
        s = this.Vi.pn(this.Cf.height - 2, r);
      t = Math.max(t, this.Pf.Si(n, this.Vi.Fi(Math.floor(Math.min(i, s)) + .11111111111111, r)), this.Pf.Si(n, this.Vi.Fi(Math.ceil(Math.max(i, s)) - .11111111111111, r)));
    }
    n.restore();
    const h = t || 34;
    return xn(Math.ceil(i.k + i.C + i.A + i.L + 5 + h));
  }
  Gf(t) {
    null !== this.Cf && (0, _fancyCanvas.equalSizes)(this.Cf, t) || (this.Cf = t, this.Df = !0, this.Ef.resizeCanvasElement(t), this.Vf.resizeCanvasElement(t), this.Df = !1, this.If.style.width = `${t.width}px`, this.If.style.height = `${t.height}px`);
  }
  Jf() {
    return _(this.Cf).width;
  }
  Gi(t) {
    this.Vi !== t && (null !== this.Vi && this.Vi.so().v(this), this.Vi = t, t.so().l(this.Ma.bind(this), this));
  }
  Bt() {
    return this.Vi;
  }
  Fe() {
    const t = this.tn.Qf();
    this.tn.Of().Ut().Uo(t, _(this.Bt()));
  }
  tp(t) {
    if (null === this.Cf) return;
    if (1 !== t) {
      this.ip(), this.Ef.applySuggestedBitmapSize();
      const t = (0, _fancyCanvas.tryCreateCanvasRenderingTarget2D)(this.Ef);
      null !== t && (t.useBitmapCoordinateSpace(t => {
        this.np(t), this.ye(t);
      }), this.sp(t), this.ep(t));
    }
    this.Vf.applySuggestedBitmapSize();
    const i = (0, _fancyCanvas.tryCreateCanvasRenderingTarget2D)(this.Vf);
    null !== i && (i.useBitmapCoordinateSpace(({
      context: t,
      bitmapSize: i
    }) => {
      t.clearRect(0, 0, i.width, i.height);
    }), this.rp(i));
  }
  hp() {
    return this.Ef.bitmapSize;
  }
  lp(t, i, n) {
    const s = this.hp();
    s.width > 0 && s.height > 0 && t.drawImage(this.Ef.canvasElement, i, n);
  }
  gt() {
    var t;
    null === (t = this.Vi) || void 0 === t || t.Gl();
  }
  zf(t) {
    if (null === this.Vi || this.Vi.Ni() || !this.un.handleScale.axisPressedMouseMove.price) return;
    const i = this.tn.Of().Ut(),
      n = this.tn.Qf();
    this.Tf = !0, i.zo(n, this.Vi, t.localY);
  }
  Nf(t) {
    if (null === this.Vi || !this.un.handleScale.axisPressedMouseMove.price) return;
    const i = this.tn.Of().Ut(),
      n = this.tn.Qf(),
      s = this.Vi;
    i.No(n, s, t.localY);
  }
  Ff() {
    if (null === this.Vi || !this.un.handleScale.axisPressedMouseMove.price) return;
    const t = this.tn.Of().Ut(),
      i = this.tn.Qf(),
      n = this.Vi;
    this.Tf && (this.Tf = !1, t.Fo(i, n));
  }
  Wf(t) {
    if (null === this.Vi || !this.un.handleScale.axisPressedMouseMove.price) return;
    const i = this.tn.Of().Ut(),
      n = this.tn.Qf();
    this.Tf = !1, i.Fo(n, this.Vi);
  }
  jf(t) {
    this.un.handleScale.axisDoubleClickReset.price && this.Fe();
  }
  $f(t) {
    if (null === this.Vi) return;
    !this.tn.Of().Ut().F().handleScale.axisPressedMouseMove.price || this.Vi.th() || this.Vi.za() || this.ap(1);
  }
  Hf(t) {
    this.ap(0);
  }
  Kf() {
    const t = [],
      i = null === this.Vi ? void 0 : this.Vi;
    return (n => {
      for (let s = 0; s < n.length; ++s) {
        const e = n[s].Pn(this.tn.Qf(), i);
        for (let i = 0; i < e.length; i++) t.push(e[i]);
      }
    })(this.tn.Qf().Ga()), t;
  }
  np({
    context: t,
    bitmapSize: i
  }) {
    const {
        width: n,
        height: s
      } = i,
      e = this.tn.Qf().Ut(),
      r = e.U(),
      h = e.Lc();
    r === h ? $(t, 0, 0, n, s, r) : Y(t, 0, 0, n, s, r, h);
  }
  ye({
    context: t,
    bitmapSize: i,
    horizontalPixelRatio: n
  }) {
    if (null === this.Cf || null === this.Vi || !this.Vi.F().borderVisible) return;
    t.fillStyle = this.Vi.F().borderColor;
    const s = Math.max(1, Math.floor(this.Yf().k * n));
    let e;
    e = this.Lf ? i.width - s : 0, t.fillRect(e, 0, s, i.height);
  }
  sp(t) {
    if (null === this.Cf || null === this.Vi) return;
    const i = this.Vi.Gl(),
      n = this.Vi.F(),
      s = this.Yf(),
      e = this.Lf ? this.Cf.width - s.C : 0;
    n.borderVisible && n.ticksVisible && t.useBitmapCoordinateSpace(({
      context: t,
      horizontalPixelRatio: r,
      verticalPixelRatio: h
    }) => {
      t.fillStyle = n.borderColor;
      const l = Math.max(1, Math.floor(h)),
        a = Math.floor(.5 * h),
        o = Math.round(s.C * r);
      t.beginPath();
      for (const n of i) t.rect(Math.floor(e * r), Math.round(n.ql * h) - a, o, l);
      t.fill();
    }), t.useMediaCoordinateSpace(({
      context: t
    }) => {
      var r;
      t.font = this.Zf(), t.fillStyle = null !== (r = n.textColor) && void 0 !== r ? r : this.Da.textColor, t.textAlign = this.Lf ? "right" : "left", t.textBaseline = "middle";
      const h = this.Lf ? Math.round(e - s.A) : Math.round(e + s.C + s.A),
        l = i.map(i => this.Pf.Mi(t, i._a));
      for (let n = i.length; n--;) {
        const s = i[n];
        t.fillText(s._a, h, s.ql + l[n]);
      }
    });
  }
  ip() {
    if (null === this.Cf || null === this.Vi) return;
    let t = this.Cf.height / 2;
    const i = [],
      n = this.Vi.Ga().slice(),
      s = this.tn.Qf(),
      e = this.Yf();
    this.Vi === s.Je() && this.tn.Qf().Ga().forEach(t => {
      s.Ge(t) && n.push(t);
    });
    const r = this.Vi.Wl()[0],
      h = this.Vi;
    n.forEach(n => {
      const e = n.Pn(s, h);
      e.forEach(t => {
        t.Oi(null), t.Ai() && i.push(t);
      }), r === n && e.length > 0 && (t = e[0].yi());
    }), i.forEach(t => t.Oi(t.yi()));
    this.Vi.F().alignLabels && this.op(i, e, t);
  }
  op(t, i, n) {
    if (null === this.Cf) return;
    const s = t.filter(t => t.yi() <= n),
      e = t.filter(t => t.yi() > n);
    s.sort((t, i) => i.yi() - t.yi()), s.length && e.length && e.push(s[0]), e.sort((t, i) => t.yi() - i.yi());
    for (const n of t) {
      const t = Math.floor(n.It(i) / 2),
        s = n.yi();
      s > -t && s < t && n.Oi(t), s > this.Cf.height - t && s < this.Cf.height + t && n.Oi(this.Cf.height - t);
    }
    for (let t = 1; t < s.length; t++) {
      const n = s[t],
        e = s[t - 1],
        r = e.It(i, !1),
        h = n.yi(),
        l = e.Bi();
      h > l - r && n.Oi(l - r);
    }
    for (let t = 1; t < e.length; t++) {
      const n = e[t],
        s = e[t - 1],
        r = s.It(i, !0),
        h = n.yi(),
        l = s.Bi();
      h < l + r && n.Oi(l + r);
    }
  }
  ep(t) {
    if (null === this.Cf) return;
    const i = this.Kf(),
      n = this.Yf(),
      s = this.Lf ? "right" : "left";
    i.forEach(i => {
      if (i.Li()) {
        i.Mt(_(this.Vi)).X(t, n, this.Pf, s);
      }
    });
  }
  rp(t) {
    if (null === this.Cf || null === this.Vi) return;
    const i = this.tn.Of().Ut(),
      n = [],
      s = this.tn.Qf(),
      e = i.cc().Pn(s, this.Vi);
    e.length && n.push(e);
    const r = this.Yf(),
      h = this.Lf ? "right" : "left";
    n.forEach(i => {
      i.forEach(i => {
        i.Mt(_(this.Vi)).X(t, r, this.Pf, h);
      });
    });
  }
  ap(t) {
    this.If.style.cursor = 1 === t ? "ns-resize" : "default";
  }
  Ma() {
    const t = this.Xf();
    this.Rf < t && this.tn.Of().Ut().dl(), this.Rf = t;
  }
  Zf() {
    return B(this.Da.fontSize, this.Da.fontFamily);
  }
}
function En(t, i, n, s) {
  t.K && t.K(i, n, s);
}
function Vn(t, i, n, s) {
  t.X(i, n, s);
}
function zn(t, i) {
  return t.Tn(i);
}
function Nn(t, i) {
  return t.Ji(i);
}
function Fn(t, i) {
  return void 0 !== t.kl ? t.kl(i) : [];
}
class Wn {
  constructor(i, n) {
    this.Cf = (0, _fancyCanvas.size)({
      width: 0,
      height: 0
    }), this._p = null, this.up = null, this.cp = null, this.dp = !1, this.fp = new M(), this.pp = 0, this.vp = !1, this.mp = null, this.bp = !1, this.gp = null, this.wp = null, this.Df = !1, this.Bf = () => {
      this.Df || null === this.Mp || this.Hi().Ch();
    }, this.Af = () => {
      this.Df || null === this.Mp || this.Hi().Ch();
    }, this.Sp = i, this.Mp = n, this.Mp.Xo().l(this.xp.bind(this), this, !0), this.yp = document.createElement("td"), this.yp.style.padding = "0", this.yp.style.position = "relative";
    const s = document.createElement("div");
    s.style.width = "100%", s.style.height = "100%", s.style.position = "relative", s.style.overflow = "hidden", this.kp = document.createElement("td"), this.kp.style.padding = "0", this.Cp = document.createElement("td"), this.Cp.style.padding = "0", this.yp.appendChild(s), this.Ef = Tn(s, (0, _fancyCanvas.size)({
      width: 16,
      height: 16
    })), this.Ef.subscribeSuggestedBitmapSizeChanged(this.Bf);
    const e = this.Ef.canvasElement;
    e.style.position = "absolute", e.style.zIndex = "1", e.style.left = "0", e.style.top = "0", this.Vf = Tn(s, (0, _fancyCanvas.size)({
      width: 16,
      height: 16
    })), this.Vf.subscribeSuggestedBitmapSizeChanged(this.Af);
    const r = this.Vf.canvasElement;
    r.style.position = "absolute", r.style.zIndex = "2", r.style.left = "0", r.style.top = "0", this.Tp = document.createElement("tr"), this.Tp.appendChild(this.kp), this.Tp.appendChild(this.yp), this.Tp.appendChild(this.Cp), this.Pp(), this.Uf = new Rn(this.Vf.canvasElement, this, {
      Xd: () => null === this.mp && !this.Sp.F().handleScroll.vertTouchDrag,
      Zd: () => null === this.mp && !this.Sp.F().handleScroll.horzTouchDrag
    });
  }
  M() {
    null !== this._p && this._p.M(), null !== this.up && this.up.M(), this.Vf.unsubscribeSuggestedBitmapSizeChanged(this.Af), this.Vf.dispose(), this.Ef.unsubscribeSuggestedBitmapSizeChanged(this.Bf), this.Ef.dispose(), null !== this.Mp && this.Mp.Xo().v(this), this.Uf.M();
  }
  Qf() {
    return _(this.Mp);
  }
  Rp(t) {
    null !== this.Mp && this.Mp.Xo().v(this), this.Mp = t, null !== this.Mp && this.Mp.Xo().l(Wn.prototype.xp.bind(this), this, !0), this.Pp();
  }
  Of() {
    return this.Sp;
  }
  qf() {
    return this.Tp;
  }
  Pp() {
    if (null !== this.Mp && (this.Dp(), 0 !== this.Hi().wt().length)) {
      if (null !== this._p) {
        const t = this.Mp.Eo();
        this._p.Gi(_(t));
      }
      if (null !== this.up) {
        const t = this.Mp.Vo();
        this.up.Gi(_(t));
      }
    }
  }
  Bp() {
    null !== this._p && this._p.gt(), null !== this.up && this.up.gt();
  }
  Po() {
    return null !== this.Mp ? this.Mp.Po() : 0;
  }
  Ro(t) {
    this.Mp && this.Mp.Ro(t);
  }
  $d(t) {
    if (!this.Mp) return;
    this.Op();
    const i = t.localX,
      n = t.localY;
    this.Ap(i, n, t);
  }
  af(t) {
    this.Op(), this.Lp(), this.Ap(t.localX, t.localY, t);
  }
  Hd(t) {
    if (!this.Mp) return;
    this.Op();
    const i = t.localX,
      n = t.localY;
    this.Ap(i, n, t);
    const s = this.ir(i, n);
    this.Hi().hc(s && {
      lc: s.lc,
      Ip: s.Ip
    });
  }
  sf(t) {
    null !== this.Mp && (this.Op(), this.Ep(t));
  }
  Jd(t) {
    this.Op(), this.Vp(t), this.Ap(t.localX, t.localY, t);
  }
  nf(t) {
    null !== this.Mp && (this.Op(), this.vp = !1, this.zp(t));
  }
  if(t) {
    null !== this.Mp && this.Ep(t);
  }
  wf(t) {
    if (this.vp = !0, null === this.mp) {
      const i = {
        x: t.localX,
        y: t.localY
      };
      this.Np(i, i, t);
    }
  }
  gf(t) {
    null !== this.Mp && (this.Op(), this.Mp.Ut().hc(null), this.Fp());
  }
  Wp() {
    return this.fp;
  }
  df() {
    this.pp = 1, this.Hi().Hn();
  }
  ff(t, i) {
    if (!this.Sp.F().handleScale.pinch) return;
    const n = 5 * (i - this.pp);
    this.pp = i, this.Hi().bc(t.st, n);
  }
  hf(t) {
    if (this.vp = !1, this.bp = null !== this.mp, this.Lp(), null !== this.mp) {
      const i = this.Hi().cc();
      this.gp = {
        x: i.Xt(),
        y: i.Zt()
      }, this.mp = {
        x: t.localX,
        y: t.localY
      };
    }
  }
  Kd(t) {
    if (null === this.Mp) return;
    const i = t.localX,
      n = t.localY;
    if (null === this.mp) this.Vp(t);else {
      this.bp = !1;
      const s = _(this.gp),
        e = s.x + (i - this.mp.x),
        r = s.y + (n - this.mp.y);
      this.Ap(e, r, t);
    }
  }
  tf(t) {
    0 === this.Of().F().trackingMode.exitMode && (this.bp = !0), this.jp(), this.zp(t);
  }
  ir(t, i) {
    const n = this.Mp;
    if (null === n) return null;
    const s = n.Ga();
    for (const e of s) {
      const s = this.$p(e.Tn(n), t, i);
      if (null !== s) return {
        lc: e,
        yf: s.yf,
        Ip: s.Ip
      };
    }
    return null;
  }
  Hp(i, n) {
    _("left" === n ? this._p : this.up).Gf((0, _fancyCanvas.size)({
      width: i,
      height: this.Cf.height
    }));
  }
  Up() {
    return this.Cf;
  }
  Gf(t) {
    (0, _fancyCanvas.equalSizes)(this.Cf, t) || (this.Cf = t, this.Df = !0, this.Ef.resizeCanvasElement(t), this.Vf.resizeCanvasElement(t), this.Df = !1, this.yp.style.width = t.width + "px", this.yp.style.height = t.height + "px");
  }
  qp() {
    const t = _(this.Mp);
    t.Io(t.Eo()), t.Io(t.Vo());
    for (const i of t.Wl()) if (t.Ge(i)) {
      const n = i.Bt();
      null !== n && t.Io(n), i.Dn();
    }
  }
  hp() {
    return this.Ef.bitmapSize;
  }
  lp(t, i, n) {
    const s = this.hp();
    s.width > 0 && s.height > 0 && t.drawImage(this.Ef.canvasElement, i, n);
  }
  tp(t) {
    if (0 === t) return;
    if (null === this.Mp) return;
    if (t > 1 && this.qp(), null !== this._p && this._p.tp(t), null !== this.up && this.up.tp(t), 1 !== t) {
      this.Ef.applySuggestedBitmapSize();
      const t = (0, _fancyCanvas.tryCreateCanvasRenderingTarget2D)(this.Ef);
      null !== t && (t.useBitmapCoordinateSpace(t => {
        this.np(t);
      }), this.Mp && (this.Yp(t), this.Xp(t), this.Zp(t, zn), this.Zp(t, Nn)));
    }
    this.Vf.applySuggestedBitmapSize();
    const i = (0, _fancyCanvas.tryCreateCanvasRenderingTarget2D)(this.Vf);
    null !== i && (i.useBitmapCoordinateSpace(({
      context: t,
      bitmapSize: i
    }) => {
      t.clearRect(0, 0, i.width, i.height);
    }), this.Zp(i, Fn), this.Kp(i));
  }
  Gp() {
    return this._p;
  }
  Jp() {
    return this.up;
  }
  xp() {
    null !== this.Mp && this.Mp.Xo().v(this), this.Mp = null;
  }
  Ep(t) {
    const i = t.localX,
      n = t.localY;
    this.fp.g() && this.fp.m(this.Hi().yt().eu(i), {
      x: i,
      y: n
    }, t);
  }
  np({
    context: t,
    bitmapSize: i
  }) {
    const {
        width: n,
        height: s
      } = i,
      e = this.Hi(),
      r = e.U(),
      h = e.Lc();
    r === h ? $(t, 0, 0, n, s, h) : Y(t, 0, 0, n, s, r, h);
  }
  Yp(t) {
    const i = _(this.Mp).Zo().Th().Mt();
    null !== i && i.X(t, !1);
  }
  Xp(t) {
    const i = this.Hi().uc();
    this.Qp(t, zn, En, i), this.Qp(t, zn, Vn, i);
  }
  Kp(t) {
    this.Qp(t, zn, Vn, this.Hi().cc());
  }
  Zp(t, i) {
    const n = _(this.Mp).Ga();
    for (const s of n) this.Qp(t, i, En, s);
    for (const s of n) this.Qp(t, i, Vn, s);
  }
  Qp(t, i, n, s) {
    const e = _(this.Mp),
      r = i(s, e),
      h = e.Ut().rc(),
      l = null !== h && h.lc === s,
      a = null !== h && l && void 0 !== h.Ip ? h.Ip.sr : void 0;
    for (const i of r) {
      const s = i.Mt();
      null !== s && n(s, t, l, a);
    }
  }
  $p(t, i, n) {
    for (const s of t) {
      const t = s.Mt();
      if (null !== t && t.ir) {
        const e = t.ir(i, n);
        if (null !== e) return {
          yf: s,
          Ip: e
        };
      }
    }
    return null;
  }
  Dp() {
    if (null === this.Mp) return;
    const t = this.Sp,
      i = this.Mp.Eo().F().visible,
      n = this.Mp.Vo().F().visible;
    i || null === this._p || (this.kp.removeChild(this._p.qf()), this._p.M(), this._p = null), n || null === this.up || (this.Cp.removeChild(this.up.qf()), this.up.M(), this.up = null);
    const s = t.Ut().Pc();
    i && null === this._p && (this._p = new In(this, t.F(), s, "left"), this.kp.appendChild(this._p.qf())), n && null === this.up && (this.up = new In(this, t.F(), s, "right"), this.Cp.appendChild(this.up.qf()));
  }
  tv(t) {
    return t.Mf && this.vp || null !== this.mp;
  }
  iv(t) {
    return Math.max(0, Math.min(t, this.Cf.width - 1));
  }
  nv(t) {
    return Math.max(0, Math.min(t, this.Cf.height - 1));
  }
  Ap(t, i, n) {
    this.Hi().kc(this.iv(t), this.nv(i), n, _(this.Mp));
  }
  Fp() {
    this.Hi().Cc();
  }
  jp() {
    this.bp && (this.mp = null, this.Fp());
  }
  Np(t, i, n) {
    this.mp = t, this.bp = !1, this.Ap(i.x, i.y, n);
    const s = this.Hi().cc();
    this.gp = {
      x: s.Xt(),
      y: s.Zt()
    };
  }
  Hi() {
    return this.Sp.Ut();
  }
  zp(t) {
    if (!this.dp) return;
    const i = this.Hi(),
      n = this.Qf();
    if (i.$o(n, n.fn()), this.cp = null, this.dp = !1, i.Sc(), null !== this.wp) {
      const t = performance.now(),
        n = i.yt();
      this.wp.pr(n.au(), t), this.wp.gu(t) || i.Yn(this.wp);
    }
  }
  Op() {
    this.mp = null;
  }
  Lp() {
    if (!this.Mp) return;
    if (this.Hi().Hn(), document.activeElement !== document.body && document.activeElement !== document.documentElement) _(document.activeElement).blur();else {
      const t = document.getSelection();
      null !== t && t.removeAllRanges();
    }
    !this.Mp.fn().Ni() && this.Hi().yt().Ni();
  }
  Vp(t) {
    if (null === this.Mp) return;
    const i = this.Hi(),
      n = i.yt();
    if (n.Ni()) return;
    const s = this.Sp.F(),
      e = s.handleScroll,
      r = s.kineticScroll;
    if ((!e.pressedMouseMove || t.Mf) && (!e.horzTouchDrag && !e.vertTouchDrag || !t.Mf)) return;
    const h = this.Mp.fn(),
      l = performance.now();
    if (null !== this.cp || this.tv(t) || (this.cp = {
      x: t.clientX,
      y: t.clientY,
      __: l,
      sv: t.localX,
      ev: t.localY
    }), null !== this.cp && !this.dp && (this.cp.x !== t.clientX || this.cp.y !== t.clientY)) {
      if (t.Mf && r.touch || !t.Mf && r.mouse) {
        const t = n.Ks();
        this.wp = new Cn(.2 / t, 7 / t, .997, 15 / t), this.wp.Yc(n.au(), this.cp.__);
      } else this.wp = null;
      h.Ni() || i.Wo(this.Mp, h, t.localY), i.wc(t.localX), this.dp = !0;
    }
    this.dp && (h.Ni() || i.jo(this.Mp, h, t.localY), i.Mc(t.localX), null !== this.wp && this.wp.Yc(n.au(), l));
  }
}
class jn {
  constructor(i, n, s, e, r) {
    this.vt = !0, this.Cf = (0, _fancyCanvas.size)({
      width: 0,
      height: 0
    }), this.Bf = () => this.tp(3), this.Lf = "left" === i, this.Ku = s.Pc, this.un = n, this.rv = e, this.hv = r, this.If = document.createElement("div"), this.If.style.width = "25px", this.If.style.height = "100%", this.If.style.overflow = "hidden", this.Ef = Tn(this.If, (0, _fancyCanvas.size)({
      width: 16,
      height: 16
    })), this.Ef.subscribeSuggestedBitmapSizeChanged(this.Bf);
  }
  M() {
    this.Ef.unsubscribeSuggestedBitmapSizeChanged(this.Bf), this.Ef.dispose();
  }
  qf() {
    return this.If;
  }
  Up() {
    return this.Cf;
  }
  Gf(t) {
    (0, _fancyCanvas.equalSizes)(this.Cf, t) || (this.Cf = t, this.Ef.resizeCanvasElement(t), this.If.style.width = `${t.width}px`, this.If.style.height = `${t.height}px`, this.vt = !0);
  }
  tp(t) {
    if (t < 3 && !this.vt) return;
    if (0 === this.Cf.width || 0 === this.Cf.height) return;
    this.vt = !1, this.Ef.applySuggestedBitmapSize();
    const i = (0, _fancyCanvas.tryCreateCanvasRenderingTarget2D)(this.Ef);
    null !== i && i.useBitmapCoordinateSpace(t => {
      this.np(t), this.ye(t);
    });
  }
  hp() {
    return this.Ef.bitmapSize;
  }
  lp(t, i, n) {
    const s = this.hp();
    s.width > 0 && s.height > 0 && t.drawImage(this.Ef.canvasElement, i, n);
  }
  ye({
    context: t,
    bitmapSize: i,
    horizontalPixelRatio: n,
    verticalPixelRatio: s
  }) {
    if (!this.rv()) return;
    t.fillStyle = this.un.timeScale.borderColor;
    const e = Math.floor(this.Ku.F().k * n),
      r = Math.floor(this.Ku.F().k * s),
      h = this.Lf ? i.width - e : 0;
    t.fillRect(h, 0, e, r);
  }
  np({
    context: t,
    bitmapSize: i
  }) {
    $(t, 0, 0, i.width, i.height, this.hv());
  }
}
function $n(t, i) {
  return t.g_ > i.g_ ? t : i;
}
class Hn {
  constructor(i) {
    this.lv = null, this.av = null, this.S = null, this.ov = !1, this.Cf = (0, _fancyCanvas.size)({
      width: 0,
      height: 0
    }), this._v = new M(), this.Pf = new Ht(5), this.Df = !1, this.Bf = () => {
      this.Df || this.Sp.Ut().Ch();
    }, this.Af = () => {
      this.Df || this.Sp.Ut().Ch();
    }, this.Sp = i, this.un = i.F().layout, this.uv = document.createElement("tr"), this.cv = document.createElement("td"), this.cv.style.padding = "0", this.dv = document.createElement("td"), this.dv.style.padding = "0", this.If = document.createElement("td"), this.If.style.height = "25px", this.If.style.padding = "0", this.fv = document.createElement("div"), this.fv.style.width = "100%", this.fv.style.height = "100%", this.fv.style.position = "relative", this.fv.style.overflow = "hidden", this.If.appendChild(this.fv), this.Ef = Tn(this.fv, (0, _fancyCanvas.size)({
      width: 16,
      height: 16
    })), this.Ef.subscribeSuggestedBitmapSizeChanged(this.Bf);
    const n = this.Ef.canvasElement;
    n.style.position = "absolute", n.style.zIndex = "1", n.style.left = "0", n.style.top = "0", this.Vf = Tn(this.fv, (0, _fancyCanvas.size)({
      width: 16,
      height: 16
    })), this.Vf.subscribeSuggestedBitmapSizeChanged(this.Af);
    const s = this.Vf.canvasElement;
    s.style.position = "absolute", s.style.zIndex = "2", s.style.left = "0", s.style.top = "0", this.uv.appendChild(this.cv), this.uv.appendChild(this.If), this.uv.appendChild(this.dv), this.pv(), this.Sp.Ut().To().l(this.pv.bind(this), this), this.Uf = new Rn(this.Vf.canvasElement, this, {
      Xd: () => !0,
      Zd: () => !1
    });
  }
  M() {
    this.Uf.M(), null !== this.lv && this.lv.M(), null !== this.av && this.av.M(), this.Vf.unsubscribeSuggestedBitmapSizeChanged(this.Af), this.Vf.dispose(), this.Ef.unsubscribeSuggestedBitmapSizeChanged(this.Bf), this.Ef.dispose();
  }
  qf() {
    return this.uv;
  }
  vv() {
    return this.lv;
  }
  mv() {
    return this.av;
  }
  af(t) {
    if (this.ov) return;
    this.ov = !0;
    const i = this.Sp.Ut();
    !i.yt().Ni() && this.Sp.F().handleScale.axisPressedMouseMove.time && i.mc(t.localX);
  }
  hf(t) {
    this.af(t);
  }
  _f() {
    const t = this.Sp.Ut();
    !t.yt().Ni() && this.ov && (this.ov = !1, this.Sp.F().handleScale.axisPressedMouseMove.time && t.yc());
  }
  Jd(t) {
    const i = this.Sp.Ut();
    !i.yt().Ni() && this.Sp.F().handleScale.axisPressedMouseMove.time && i.xc(t.localX);
  }
  Kd(t) {
    this.Jd(t);
  }
  nf() {
    this.ov = !1;
    const t = this.Sp.Ut();
    t.yt().Ni() && !this.Sp.F().handleScale.axisPressedMouseMove.time || t.yc();
  }
  tf() {
    this.nf();
  }
  Ed() {
    this.Sp.F().handleScale.axisDoubleClickReset.time && this.Sp.Ut().Zn();
  }
  Od() {
    this.Ed();
  }
  $d() {
    this.Sp.Ut().F().handleScale.axisPressedMouseMove.time && this.ap(1);
  }
  gf() {
    this.ap(0);
  }
  Up() {
    return this.Cf;
  }
  bv() {
    return this._v;
  }
  gv(i, s, e) {
    (0, _fancyCanvas.equalSizes)(this.Cf, i) || (this.Cf = i, this.Df = !0, this.Ef.resizeCanvasElement(i), this.Vf.resizeCanvasElement(i), this.Df = !1, this.If.style.width = `${i.width}px`, this.If.style.height = `${i.height}px`, this._v.m(i)), null !== this.lv && this.lv.Gf((0, _fancyCanvas.size)({
      width: s,
      height: i.height
    })), null !== this.av && this.av.Gf((0, _fancyCanvas.size)({
      width: e,
      height: i.height
    }));
  }
  wv() {
    const t = this.Mv();
    return Math.ceil(t.k + t.C + t.T + t.I + t.O + t.Sv);
  }
  gt() {
    this.Sp.Ut().yt().Gl();
  }
  hp() {
    return this.Ef.bitmapSize;
  }
  lp(t, i, n) {
    const s = this.hp();
    s.width > 0 && s.height > 0 && t.drawImage(this.Ef.canvasElement, i, n);
  }
  tp(t) {
    if (0 === t) return;
    if (1 !== t) {
      this.Ef.applySuggestedBitmapSize();
      const i = (0, _fancyCanvas.tryCreateCanvasRenderingTarget2D)(this.Ef);
      null !== i && (i.useBitmapCoordinateSpace(t => {
        this.np(t), this.ye(t);
      }), this.sp(i)), null !== this.lv && this.lv.tp(t), null !== this.av && this.av.tp(t);
    }
    this.Vf.applySuggestedBitmapSize();
    const i = (0, _fancyCanvas.tryCreateCanvasRenderingTarget2D)(this.Vf);
    null !== i && (i.useBitmapCoordinateSpace(({
      context: t,
      bitmapSize: i
    }) => {
      t.clearRect(0, 0, i.width, i.height);
    }), this.xv([this.Sp.Ut().cc()], i));
  }
  np({
    context: t,
    bitmapSize: i
  }) {
    $(t, 0, 0, i.width, i.height, this.Sp.Ut().Lc());
  }
  ye({
    context: t,
    bitmapSize: i,
    verticalPixelRatio: n
  }) {
    if (this.Sp.F().timeScale.borderVisible) {
      t.fillStyle = this.yv();
      const s = Math.max(1, Math.floor(this.Mv().k * n));
      t.fillRect(0, 0, i.width, s);
    }
  }
  sp(t) {
    const i = this.Sp.Ut().yt(),
      n = i.Gl();
    if (!n || 0 === n.length) return;
    let s = n.reduce($n, n[0]).g_;
    s > 30 && s < 50 && (s = 30);
    const e = this.Mv(),
      r = i.F();
    r.borderVisible && r.ticksVisible && t.useBitmapCoordinateSpace(({
      context: t,
      horizontalPixelRatio: i,
      verticalPixelRatio: s
    }) => {
      t.strokeStyle = this.yv(), t.fillStyle = this.yv();
      const r = Math.max(1, Math.floor(i)),
        h = Math.floor(.5 * i);
      t.beginPath();
      const l = Math.round(e.C * s);
      for (let s = n.length; s--;) {
        const e = Math.round(n[s].ql * i);
        t.rect(e - h, 0, r, l);
      }
      t.fill();
    }), t.useMediaCoordinateSpace(({
      context: t
    }) => {
      const i = e.k + e.C + e.I + e.T / 2;
      t.textAlign = "center", t.textBaseline = "middle", t.fillStyle = this.$(), t.font = this.Zf();
      for (const e of n) if (e.g_ < s) {
        const n = e.uu ? this.kv(t, e.ql, e._a) : e.ql;
        t.fillText(e._a, n, i);
      }
      t.font = this.Cv();
      for (const e of n) if (e.g_ >= s) {
        const n = e.uu ? this.kv(t, e.ql, e._a) : e.ql;
        t.fillText(e._a, n, i);
      }
    });
  }
  kv(t, i, n) {
    const s = this.Pf.Si(t, n),
      e = s / 2,
      r = Math.floor(i - e) + .5;
    return r < 0 ? i += Math.abs(0 - r) : r + s > this.Cf.width && (i -= Math.abs(this.Cf.width - (r + s))), i;
  }
  xv(t, i) {
    const n = this.Mv();
    for (const s of t) for (const t of s.Qi()) t.Mt().X(i, n);
  }
  yv() {
    return this.Sp.F().timeScale.borderColor;
  }
  $() {
    return this.un.textColor;
  }
  W() {
    return this.un.fontSize;
  }
  Zf() {
    return B(this.W(), this.un.fontFamily);
  }
  Cv() {
    return B(this.W(), this.un.fontFamily, "bold");
  }
  Mv() {
    null === this.S && (this.S = {
      k: 1,
      V: NaN,
      I: NaN,
      O: NaN,
      ji: NaN,
      C: 5,
      T: NaN,
      P: "",
      Wi: new Ht(),
      Sv: 0
    });
    const t = this.S,
      i = this.Zf();
    if (t.P !== i) {
      const n = this.W();
      t.T = n, t.P = i, t.I = 3 * n / 12, t.O = 3 * n / 12, t.ji = 9 * n / 12, t.V = 0, t.Sv = 4 * n / 12, t.Wi.Fe();
    }
    return this.S;
  }
  ap(t) {
    this.If.style.cursor = 1 === t ? "ew-resize" : "default";
  }
  pv() {
    const t = this.Sp.Ut(),
      i = t.F();
    i.leftPriceScale.visible || null === this.lv || (this.cv.removeChild(this.lv.qf()), this.lv.M(), this.lv = null), i.rightPriceScale.visible || null === this.av || (this.dv.removeChild(this.av.qf()), this.av.M(), this.av = null);
    const n = {
        Pc: this.Sp.Ut().Pc()
      },
      s = () => i.leftPriceScale.borderVisible && t.yt().F().borderVisible,
      e = () => t.Lc();
    i.leftPriceScale.visible && null === this.lv && (this.lv = new jn("left", i, n, s, e), this.cv.appendChild(this.lv.qf())), i.rightPriceScale.visible && null === this.av && (this.av = new jn("right", i, n, s, e), this.dv.appendChild(this.av.qf()));
  }
}
const Un = !!wn && !!navigator.userAgentData && navigator.userAgentData.brands.some(t => t.brand.includes("Chromium")) && !!wn && ((null === (qn = null === navigator || void 0 === navigator ? void 0 : navigator.userAgentData) || void 0 === qn ? void 0 : qn.platform) ? "Windows" === navigator.userAgentData.platform : navigator.userAgent.toLowerCase().indexOf("win") >= 0);
var qn;
class Yn {
  constructor(t, i) {
    var n;
    this.Tv = [], this.Pv = 0, this.da = 0, this.po = 0, this.Rv = 0, this.Dv = 0, this.Bv = null, this.Ov = !1, this.fp = new M(), this.Yu = new M(), this.Av = null, this.Lv = t, this.un = i, this.uv = document.createElement("div"), this.uv.classList.add("tv-lightweight-charts"), this.uv.style.overflow = "hidden", this.uv.style.width = "100%", this.uv.style.height = "100%", (n = this.uv).style.userSelect = "none", n.style.webkitUserSelect = "none", n.style.msUserSelect = "none", n.style.MozUserSelect = "none", n.style.webkitTapHighlightColor = "transparent", this.Iv = document.createElement("table"), this.Iv.setAttribute("cellspacing", "0"), this.uv.appendChild(this.Iv), this.Ev = this.Vv.bind(this), Xn(this.un) && this.zv(!0), this.Hi = new mn(this.Zu.bind(this), this.un), this.Ut().dc().l(this.Nv.bind(this), this), this.Fv = new Hn(this), this.Iv.appendChild(this.Fv.qf());
    const s = i.autoSize && this.Wv();
    let e = this.un.width,
      r = this.un.height;
    if (s || 0 === e || 0 === r) {
      const i = t.getBoundingClientRect();
      e = e || i.width, r = r || i.height;
    }
    s || this.jv(e, r), this.$v(), t.appendChild(this.uv), this.Hv(), this.Hi.yt().xu().l(this.Hi.dl.bind(this.Hi), this), this.Hi.To().l(this.Hi.dl.bind(this.Hi), this);
  }
  Ut() {
    return this.Hi;
  }
  F() {
    return this.un;
  }
  Uv() {
    return this.Tv;
  }
  qv() {
    return this.Fv;
  }
  M() {
    this.zv(!1), 0 !== this.Pv && window.cancelAnimationFrame(this.Pv), this.Hi.dc().v(this), this.Hi.yt().xu().v(this), this.Hi.To().v(this), this.Hi.M();
    for (const t of this.Tv) this.Iv.removeChild(t.qf()), t.Wp().v(this), t.M();
    this.Tv = [], _(this.Fv).M(), null !== this.uv.parentElement && this.uv.parentElement.removeChild(this.uv), this.Yu.M(), this.fp.M(), this.Yv();
  }
  jv(i, n, s = !1) {
    if (this.da === n && this.po === i) return;
    const e = function (i) {
      const n = Math.floor(i.width),
        s = Math.floor(i.height);
      return (0, _fancyCanvas.size)({
        width: n - n % 2,
        height: s - s % 2
      });
    }((0, _fancyCanvas.size)({
      width: i,
      height: n
    }));
    this.da = e.height, this.po = e.width;
    const r = this.da + "px",
      h = this.po + "px";
    _(this.uv).style.height = r, _(this.uv).style.width = h, this.Iv.style.height = r, this.Iv.style.width = h, s ? this.Xv(et.ss(), performance.now()) : this.Hi.dl();
  }
  tp(t) {
    void 0 === t && (t = et.ss());
    for (let i = 0; i < this.Tv.length; i++) this.Tv[i].tp(t.jn(i).Nn);
    this.un.timeScale.visible && this.Fv.tp(t.Wn());
  }
  kh(t) {
    const i = Xn(this.un);
    this.Hi.kh(t);
    const n = Xn(this.un);
    n !== i && this.zv(n), this.Hv(), this.Zv(t);
  }
  Wp() {
    return this.fp;
  }
  dc() {
    return this.Yu;
  }
  Kv() {
    null !== this.Bv && (this.Xv(this.Bv, performance.now()), this.Bv = null);
    const t = this.Gv(null),
      i = document.createElement("canvas");
    i.width = t.width, i.height = t.height;
    const n = _(i.getContext("2d"));
    return this.Gv(n), i;
  }
  Jv(t) {
    if ("left" === t && !this.Qv()) return 0;
    if ("right" === t && !this.tm()) return 0;
    if (0 === this.Tv.length) return 0;
    return _("left" === t ? this.Tv[0].Gp() : this.Tv[0].Jp()).Jf();
  }
  Zv(t) {
    (void 0 !== t.autoSize || !this.Av || void 0 === t.width && void 0 === t.height) && (t.autoSize && !this.Av && this.Wv(), !1 === t.autoSize && null !== this.Av && this.Yv(), t.autoSize || void 0 === t.width && void 0 === t.height || this.jv(t.width || this.po, t.height || this.da));
  }
  Gv(i) {
    let n = 0,
      s = 0;
    const e = this.Tv[0],
      r = (t, n) => {
        let s = 0;
        for (let e = 0; e < this.Tv.length; e++) {
          const r = this.Tv[e],
            h = _("left" === t ? r.Gp() : r.Jp()),
            l = h.hp();
          null !== i && h.lp(i, n, s), s += l.height;
        }
      };
    if (this.Qv()) {
      r("left", 0);
      n += _(e.Gp()).hp().width;
    }
    for (let t = 0; t < this.Tv.length; t++) {
      const e = this.Tv[t],
        r = e.hp();
      null !== i && e.lp(i, n, s), s += r.height;
    }
    if (n += e.hp().width, this.tm()) {
      r("right", n);
      n += _(e.Jp()).hp().width;
    }
    const h = (t, n, s) => {
      _("left" === t ? this.Fv.vv() : this.Fv.mv()).lp(_(i), n, s);
    };
    if (this.un.timeScale.visible) {
      const t = this.Fv.hp();
      if (null !== i) {
        let n = 0;
        this.Qv() && (h("left", n, s), n = _(e.Gp()).hp().width), this.Fv.lp(i, n, s), n += t.width, this.tm() && h("right", n, s);
      }
      s += t.height;
    }
    return (0, _fancyCanvas.size)({
      width: n,
      height: s
    });
  }
  im() {
    let i = 0,
      n = 0,
      s = 0;
    for (const t of this.Tv) this.Qv() && (n = Math.max(n, _(t.Gp()).Xf())), this.tm() && (s = Math.max(s, _(t.Jp()).Xf())), i += t.Po();
    n = xn(n), s = xn(s);
    const e = this.po,
      r = this.da,
      h = Math.max(e - n - s, 0),
      l = this.un.timeScale.visible;
    let a = l ? this.Fv.wv() : 0;
    var o;
    a = (o = a) + o % 2;
    const u = 0 + a,
      c = r < u ? 0 : r - u,
      d = c / i;
    let f = 0;
    for (let i = 0; i < this.Tv.length; ++i) {
      const e = this.Tv[i];
      e.Rp(this.Hi._c()[i]);
      let r = 0,
        l = 0;
      l = i === this.Tv.length - 1 ? c - f : Math.round(e.Po() * d), r = Math.max(l, 2), f += r, e.Gf((0, _fancyCanvas.size)({
        width: h,
        height: r
      })), this.Qv() && e.Hp(n, "left"), this.tm() && e.Hp(s, "right"), e.Qf() && this.Hi.fc(e.Qf(), r);
    }
    this.Fv.gv((0, _fancyCanvas.size)({
      width: l ? h : 0,
      height: a
    }), l ? n : 0, l ? s : 0), this.Hi.Do(h), this.Rv !== n && (this.Rv = n), this.Dv !== s && (this.Dv = s);
  }
  zv(t) {
    t ? this.uv.addEventListener("wheel", this.Ev, {
      passive: !1
    }) : this.uv.removeEventListener("wheel", this.Ev);
  }
  nm(t) {
    switch (t.deltaMode) {
      case t.DOM_DELTA_PAGE:
        return 120;
      case t.DOM_DELTA_LINE:
        return 32;
    }
    return Un ? 1 / window.devicePixelRatio : 1;
  }
  Vv(t) {
    if (!(0 !== t.deltaX && this.un.handleScroll.mouseWheel || 0 !== t.deltaY && this.un.handleScale.mouseWheel)) return;
    const i = this.nm(t),
      n = i * t.deltaX / 100,
      s = -i * t.deltaY / 100;
    if (t.cancelable && t.preventDefault(), 0 !== s && this.un.handleScale.mouseWheel) {
      const i = Math.sign(s) * Math.min(1, Math.abs(s)),
        n = t.clientX - this.uv.getBoundingClientRect().left;
      this.Ut().bc(n, i);
    }
    0 !== n && this.un.handleScroll.mouseWheel && this.Ut().gc(-80 * n);
  }
  Xv(t, i) {
    var n;
    const s = t.Wn();
    3 === s && this.sm(), 3 !== s && 2 !== s || (this.rm(t), this.hm(t, i), this.Fv.gt(), this.Tv.forEach(t => {
      t.Bp();
    }), 3 === (null === (n = this.Bv) || void 0 === n ? void 0 : n.Wn()) && (this.Bv.Qn(t), this.sm(), this.rm(this.Bv), this.hm(this.Bv, i), t = this.Bv, this.Bv = null)), this.tp(t);
  }
  hm(t, i) {
    for (const n of t.Jn()) this.ts(n, i);
  }
  rm(t) {
    const i = this.Hi._c();
    for (let n = 0; n < i.length; n++) t.jn(n).Fn && i[n].qo();
  }
  ts(t, i) {
    const n = this.Hi.yt();
    switch (t.Un) {
      case 0:
        n.ku();
        break;
      case 1:
        n.Cu(t.Ot);
        break;
      case 2:
        n.Kn(t.Ot);
        break;
      case 3:
        n.Gn(t.Ot);
        break;
      case 4:
        n.cu();
        break;
      case 5:
        t.Ot.gu(i) || n.Gn(t.Ot.wu(i));
    }
  }
  Zu(t) {
    null !== this.Bv ? this.Bv.Qn(t) : this.Bv = t, this.Ov || (this.Ov = !0, this.Pv = window.requestAnimationFrame(t => {
      if (this.Ov = !1, this.Pv = 0, null !== this.Bv) {
        const i = this.Bv;
        this.Bv = null, this.Xv(i, t);
        for (const n of i.Jn()) if (5 === n.Un && !n.Ot.gu(t)) {
          this.Ut().Yn(n.Ot);
          break;
        }
      }
    }));
  }
  sm() {
    this.$v();
  }
  $v() {
    const t = this.Hi._c(),
      i = t.length,
      n = this.Tv.length;
    for (let t = i; t < n; t++) {
      const t = o(this.Tv.pop());
      this.Iv.removeChild(t.qf()), t.Wp().v(this), t.M();
    }
    for (let s = n; s < i; s++) {
      const i = new Wn(this, t[s]);
      i.Wp().l(this.lm.bind(this), this), this.Tv.push(i), this.Iv.insertBefore(i.qf(), this.Fv.qf());
    }
    for (let n = 0; n < i; n++) {
      const i = t[n],
        s = this.Tv[n];
      s.Qf() !== i ? s.Rp(i) : s.Pp();
    }
    this.Hv(), this.im();
  }
  am(t, i, n) {
    var s;
    const e = new Map();
    if (null !== t) {
      this.Hi.wt().forEach(i => {
        const n = i.Ln().jh(t);
        null !== n && e.set(i, n);
      });
    }
    let r;
    if (null !== t) {
      const i = null === (s = this.Hi.yt().Ui(t)) || void 0 === s ? void 0 : s.w_;
      void 0 !== i && (r = i);
    }
    const h = this.Ut().rc(),
      l = null !== h && h.lc instanceof Ti ? h.lc : void 0,
      a = null !== h && void 0 !== h.Ip ? h.Ip.nr : void 0;
    return {
      _t: r,
      Ys: null != t ? t : void 0,
      om: null != i ? i : void 0,
      _m: l,
      um: e,
      dm: a,
      fm: null != n ? n : void 0
    };
  }
  lm(t, i, n) {
    this.fp.m(() => this.am(t, i, n));
  }
  Nv(t, i, n) {
    this.Yu.m(() => this.am(t, i, n));
  }
  Hv() {
    const t = this.un.timeScale.visible ? "" : "none";
    this.Fv.qf().style.display = t;
  }
  Qv() {
    return this.Tv[0].Qf().Eo().F().visible;
  }
  tm() {
    return this.Tv[0].Qf().Vo().F().visible;
  }
  Wv() {
    return "ResizeObserver" in window && (this.Av = new ResizeObserver(t => {
      const i = t.find(t => t.target === this.Lv);
      i && this.jv(i.contentRect.width, i.contentRect.height);
    }), this.Av.observe(this.Lv, {
      box: "border-box"
    }), !0);
  }
  Yv() {
    null !== this.Av && this.Av.disconnect();
  }
}
function Xn(t) {
  return Boolean(t.handleScroll.mouseWheel || t.handleScale.mouseWheel);
}
function Zn(t, i, n, s) {
  const e = n.value,
    r = {
      Ys: i,
      _t: t,
      Ot: [e, e, e, e],
      w_: s
    };
  return void 0 !== n.color && (r.D = n.color), r;
}
function Kn(t) {
  return void 0 !== t.Ot;
}
function Gn(t) {
  return (i, n, s, e) => {
    return void 0 === (r = s).open && void 0 === r.value ? {
      _t: i,
      Ys: n,
      w_: e
    } : t(i, n, s, e);
    var r;
  };
}
const Jn = {
  Candlestick: Gn(function (t, i, n, s) {
    const e = {
      Ys: i,
      _t: t,
      Ot: [n.open, n.high, n.low, n.close],
      w_: s
    };
    return void 0 !== n.color && (e.D = n.color), void 0 !== n.borderColor && (e.At = n.borderColor), void 0 !== n.wickColor && (e.Dh = n.wickColor), e;
  }),
  Bar: Gn(function (t, i, n, s) {
    const e = {
      Ys: i,
      _t: t,
      Ot: [n.open, n.high, n.low, n.close],
      w_: s
    };
    return void 0 !== n.color && (e.D = n.color), e;
  }),
  Area: Gn(function (t, i, n, s) {
    const e = n.value,
      r = {
        Ys: i,
        _t: t,
        Ot: [e, e, e, e],
        w_: s
      };
    return void 0 !== n.lineColor && (r.ot = n.lineColor), void 0 !== n.topColor && (r.bs = n.topColor), void 0 !== n.bottomColor && (r.gs = n.bottomColor), r;
  }),
  Baseline: Gn(function (t, i, n, s) {
    const e = n.value,
      r = {
        Ys: i,
        _t: t,
        Ot: [e, e, e, e],
        w_: s
      };
    return void 0 !== n.topLineColor && (r.be = n.topLineColor), void 0 !== n.bottomLineColor && (r.ge = n.bottomLineColor), void 0 !== n.topFillColor1 && (r.de = n.topFillColor1), void 0 !== n.topFillColor2 && (r.fe = n.topFillColor2), void 0 !== n.bottomFillColor1 && (r.pe = n.bottomFillColor1), void 0 !== n.bottomFillColor2 && (r.ve = n.bottomFillColor2), r;
  }),
  Histogram: Gn(Zn),
  Line: Gn(Zn)
};
function Qn(t) {
  return Jn[t];
}
function ts(t) {
  return 60 * t * 60 * 1e3;
}
function is(t) {
  return 60 * t * 1e3;
}
const ns = [{
  pm: (ss = 1, 1e3 * ss),
  g_: 10
}, {
  pm: is(1),
  g_: 20
}, {
  pm: is(5),
  g_: 21
}, {
  pm: is(30),
  g_: 22
}, {
  pm: ts(1),
  g_: 30
}, {
  pm: ts(3),
  g_: 31
}, {
  pm: ts(6),
  g_: 32
}, {
  pm: ts(12),
  g_: 33
}];
var ss;
function es(t, i) {
  if (t.getUTCFullYear() !== i.getUTCFullYear()) return 70;
  if (t.getUTCMonth() !== i.getUTCMonth()) return 60;
  if (t.getUTCDate() !== i.getUTCDate()) return 50;
  for (let n = ns.length - 1; n >= 0; --n) if (Math.floor(i.getTime() / ns[n].pm) !== Math.floor(t.getTime() / ns[n].pm)) return ns[n].g_;
  return 0;
}
function rs(t, i = 0) {
  if (0 === t.length) return;
  let n = 0 === i ? null : t[i - 1]._t.__,
    s = null !== n ? new Date(1e3 * n) : null,
    e = 0;
  for (let r = i; r < t.length; ++r) {
    const i = t[r],
      h = new Date(1e3 * i._t.__);
    null !== s && (i.b_ = es(h, s)), e += i._t.__ - (n || i._t.__), n = i._t.__, s = h;
  }
  if (0 === i && t.length > 1) {
    const i = Math.ceil(e / (t.length - 1)),
      n = new Date(1e3 * (t[0]._t.__ - i));
    t[0].b_ = es(new Date(1e3 * t[0]._t.__), n);
  }
}
function hs(t) {
  if (!bn(t)) throw new Error("time must be of type BusinessDay");
  const i = new Date(Date.UTC(t.year, t.month - 1, t.day, 0, 0, 0, 0));
  return {
    __: Math.round(i.getTime() / 1e3),
    o_: t
  };
}
function ls(t) {
  if (!gn(t)) throw new Error("time must be of type isUTCTimestamp");
  return {
    __: t
  };
}
function as(t) {
  return 0 === t.length ? null : bn(t[0].time) ? hs : ls;
}
function os(t) {
  return gn(t) ? ls(t) : bn(t) ? hs(t) : hs(_s(t));
}
function _s(t) {
  const i = new Date(t);
  if (isNaN(i.getTime())) throw new Error(`Invalid date string=${t}, expected format=yyyy-mm-dd`);
  return {
    day: i.getUTCDate(),
    month: i.getUTCMonth() + 1,
    year: i.getUTCFullYear()
  };
}
function us(t) {
  k(t.time) && (t.time = _s(t.time));
}
function cs(t) {
  return {
    Ys: 0,
    vm: new Map(),
    yl: t
  };
}
function ds(t) {
  if (void 0 !== t && 0 !== t.length) return {
    bm: t[0]._t.__,
    gm: t[t.length - 1]._t.__
  };
}
function fs(t) {
  let i;
  return t.forEach(t => {
    void 0 === i && (i = t.w_);
  }), o(i);
}
function ps(t) {
  void 0 === t.w_ && (t.w_ = t.time);
}
class vs {
  constructor() {
    this.wm = new Map(), this.Mm = new Map(), this.Sm = new Map(), this.xm = [];
  }
  M() {
    this.wm.clear(), this.Mm.clear(), this.Sm.clear(), this.xm = [];
  }
  ym(t, i) {
    let n = 0 !== this.wm.size,
      s = !1;
    const e = this.Mm.get(t);
    if (void 0 !== e) if (1 === this.Mm.size) n = !1, s = !0, this.wm.clear();else for (const i of this.xm) i.pointData.vm.delete(t) && (s = !0);
    let r = [];
    if (0 !== i.length) {
      const n = i;
      n.forEach(t => ps(t)), function (t) {
        t.forEach(us);
      }(i);
      const e = _(as(i)),
        h = Qn(t.Lh());
      r = n.map(i => {
        const n = e(i.time);
        let r = this.wm.get(n.__);
        void 0 === r && (r = cs(n), this.wm.set(n.__, r), s = !0);
        const l = h(n, r.Ys, i, i.w_);
        return r.vm.set(t, l), l;
      });
    }
    n && this.km(), this.Cm(t, r);
    let h = -1;
    if (s) {
      const t = [];
      this.wm.forEach(i => {
        t.push({
          b_: 0,
          _t: i.yl,
          pointData: i,
          w_: fs(i.vm)
        });
      }), t.sort((t, i) => t._t.__ - i._t.__), h = this.Tm(t);
    }
    return this.Pm(t, h, function (t, i) {
      const n = ds(t),
        s = ds(i);
      if (void 0 !== n && void 0 !== s) return {
        ml: n.gm >= s.gm && n.bm >= s.bm
      };
    }(this.Mm.get(t), e));
  }
  Bc(t) {
    return this.ym(t, []);
  }
  Rm(t, i) {
    const n = i;
    ps(n), us(i);
    const s = _(as([i]))(i.time),
      e = this.Sm.get(t);
    if (void 0 !== e && s.__ < e.__) throw new Error(`Cannot update oldest data, last time=${e.__}, new time=${s.__}`);
    let r = this.wm.get(s.__);
    const h = void 0 === r;
    void 0 === r && (r = cs(s), this.wm.set(s.__, r));
    const l = Qn(t.Lh())(s, r.Ys, i, n.w_);
    r.vm.set(t, l), this.Dm(t, l);
    const a = {
      ml: Kn(l)
    };
    if (!h) return this.Pm(t, -1, a);
    const o = {
        b_: 0,
        _t: r.yl,
        pointData: r,
        w_: fs(r.vm)
      },
      u = wt(this.xm, o._t.__, (t, i) => t._t.__ < i);
    this.xm.splice(u, 0, o);
    for (let t = u; t < this.xm.length; ++t) ms(this.xm[t].pointData, t);
    return rs(this.xm, u), this.Pm(t, u, a);
  }
  Dm(t, i) {
    let n = this.Mm.get(t);
    void 0 === n && (n = [], this.Mm.set(t, n));
    const s = 0 !== n.length ? n[n.length - 1] : null;
    null === s || i._t.__ > s._t.__ ? Kn(i) && n.push(i) : Kn(i) ? n[n.length - 1] = i : n.splice(-1, 1), this.Sm.set(t, i._t);
  }
  Cm(t, i) {
    0 !== i.length ? (this.Mm.set(t, i.filter(Kn)), this.Sm.set(t, i[i.length - 1]._t)) : (this.Mm.delete(t), this.Sm.delete(t));
  }
  km() {
    for (const t of this.xm) 0 === t.pointData.vm.size && this.wm.delete(t._t.__);
  }
  Tm(t) {
    let i = -1;
    for (let n = 0; n < this.xm.length && n < t.length; ++n) {
      const s = this.xm[n],
        e = t[n];
      if (s._t.__ !== e._t.__) {
        i = n;
        break;
      }
      e.b_ = s.b_, ms(e.pointData, n);
    }
    if (-1 === i && this.xm.length !== t.length && (i = Math.min(this.xm.length, t.length)), -1 === i) return -1;
    for (let n = i; n < t.length; ++n) ms(t[n].pointData, n);
    return rs(t, i), this.xm = t, i;
  }
  Bm() {
    if (0 === this.Mm.size) return null;
    let t = 0;
    return this.Mm.forEach(i => {
      0 !== i.length && (t = Math.max(t, i[i.length - 1].Ys));
    }), t;
  }
  Pm(t, i, n) {
    const s = {
      Om: new Map(),
      yt: {
        su: this.Bm()
      }
    };
    if (-1 !== i) this.Mm.forEach((i, e) => {
      s.Om.set(e, {
        ar: i,
        Am: e === t ? n : void 0
      });
    }), this.Mm.has(t) || s.Om.set(t, {
      ar: [],
      Am: n
    }), s.yt.Lm = this.xm, s.yt.Im = i;else {
      const i = this.Mm.get(t);
      s.Om.set(t, {
        ar: i || [],
        Am: n
      });
    }
    return s;
  }
}
function ms(t, i) {
  t.Ys = i, t.vm.forEach(t => {
    t.Ys = i;
  });
}
function bs(t) {
  return {
    value: t.Ot[3],
    time: t.w_
  };
}
function gs(t) {
  const i = bs(t);
  return void 0 !== t.D && (i.color = t.D), i;
}
function ws(t) {
  return {
    open: t.Ot[0],
    high: t.Ot[1],
    low: t.Ot[2],
    close: t.Ot[3],
    time: t.w_
  };
}
const Ms = {
  Area: function (t) {
    const i = bs(t);
    return void 0 !== t.ot && (i.lineColor = t.ot), void 0 !== t.bs && (i.topColor = t.bs), void 0 !== t.gs && (i.bottomColor = t.gs), i;
  },
  Line: gs,
  Baseline: function (t) {
    const i = bs(t);
    return void 0 !== t.be && (i.topLineColor = t.be), void 0 !== t.ge && (i.bottomLineColor = t.ge), void 0 !== t.de && (i.topFillColor1 = t.de), void 0 !== t.fe && (i.topFillColor2 = t.fe), void 0 !== t.pe && (i.bottomFillColor1 = t.pe), void 0 !== t.ve && (i.bottomFillColor2 = t.ve), i;
  },
  Histogram: gs,
  Bar: function (t) {
    const i = ws(t);
    return void 0 !== t.D && (i.color = t.D), i;
  },
  Candlestick: function (t) {
    const i = ws(t),
      {
        D: n,
        At: s,
        Dh: e
      } = t;
    return void 0 !== n && (i.color = n), void 0 !== s && (i.borderColor = s), void 0 !== e && (i.wickColor = e), i;
  }
};
function Ss(t) {
  return Ms[t];
}
const xs = {
    autoScale: !0,
    mode: 0,
    invertScale: !1,
    alignLabels: !0,
    borderVisible: !0,
    borderColor: "#2B2B43",
    entireTextOnly: !1,
    visible: !1,
    ticksVisible: !1,
    scaleMargins: {
      bottom: .1,
      top: .2
    }
  },
  ys = {
    color: "rgba(0, 0, 0, 0)",
    visible: !1,
    fontSize: 48,
    fontFamily: D,
    fontStyle: "",
    text: "",
    horzAlign: "center",
    vertAlign: "center"
  },
  ks = {
    width: 0,
    height: 0,
    autoSize: !1,
    layout: {
      background: {
        type: "solid",
        color: "#FFFFFF"
      },
      textColor: "#191919",
      fontSize: 12,
      fontFamily: D
    },
    crosshair: {
      vertLine: {
        color: "#9598A1",
        width: 1,
        style: 3,
        visible: !0,
        labelVisible: !0,
        labelBackgroundColor: "#131722"
      },
      horzLine: {
        color: "#9598A1",
        width: 1,
        style: 3,
        visible: !0,
        labelVisible: !0,
        labelBackgroundColor: "#131722"
      },
      mode: 1
    },
    grid: {
      vertLines: {
        color: "#D6DCDE",
        style: 0,
        visible: !0
      },
      horzLines: {
        color: "#D6DCDE",
        style: 0,
        visible: !0
      }
    },
    overlayPriceScales: Object.assign({}, xs),
    leftPriceScale: Object.assign(Object.assign({}, xs), {
      visible: !1
    }),
    rightPriceScale: Object.assign(Object.assign({}, xs), {
      visible: !0
    }),
    timeScale: {
      rightOffset: 0,
      barSpacing: 6,
      minBarSpacing: .5,
      fixLeftEdge: !1,
      fixRightEdge: !1,
      lockVisibleTimeRangeOnResize: !1,
      rightBarStaysOnScroll: !1,
      borderVisible: !0,
      borderColor: "#2B2B43",
      visible: !0,
      timeVisible: !1,
      secondsVisible: !0,
      shiftVisibleRangeOnNewBar: !0,
      ticksVisible: !1
    },
    watermark: ys,
    localization: {
      locale: wn ? navigator.language : "",
      dateFormat: "dd MMM 'yy"
    },
    handleScroll: {
      mouseWheel: !0,
      pressedMouseMove: !0,
      horzTouchDrag: !0,
      vertTouchDrag: !0
    },
    handleScale: {
      axisPressedMouseMove: {
        time: !0,
        price: !0
      },
      axisDoubleClickReset: {
        time: !0,
        price: !0
      },
      mouseWheel: !0,
      pinch: !0
    },
    kineticScroll: {
      mouse: !1,
      touch: !0
    },
    trackingMode: {
      exitMode: 1
    }
  },
  Cs = {
    upColor: "#26a69a",
    downColor: "#ef5350",
    wickVisible: !0,
    borderVisible: !0,
    borderColor: "#378658",
    borderUpColor: "#26a69a",
    borderDownColor: "#ef5350",
    wickColor: "#737375",
    wickUpColor: "#26a69a",
    wickDownColor: "#ef5350"
  },
  Ts = {
    upColor: "#26a69a",
    downColor: "#ef5350",
    openVisible: !0,
    thinBars: !0
  },
  Ps = {
    color: "#2196f3",
    lineStyle: 0,
    lineWidth: 3,
    lineType: 0,
    crosshairMarkerVisible: !0,
    crosshairMarkerRadius: 4,
    crosshairMarkerBorderColor: "",
    crosshairMarkerBorderWidth: 2,
    crosshairMarkerBackgroundColor: "",
    lastPriceAnimation: 0
  },
  Rs = {
    topColor: "rgba( 46, 220, 135, 0.4)",
    bottomColor: "rgba( 40, 221, 100, 0)",
    invertFilledArea: !1,
    lineColor: "#33D778",
    lineStyle: 0,
    lineWidth: 3,
    lineType: 0,
    crosshairMarkerVisible: !0,
    crosshairMarkerRadius: 4,
    crosshairMarkerBorderColor: "",
    crosshairMarkerBorderWidth: 2,
    crosshairMarkerBackgroundColor: "",
    lastPriceAnimation: 0
  },
  Ds = {
    baseValue: {
      type: "price",
      price: 0
    },
    topFillColor1: "rgba(38, 166, 154, 0.28)",
    topFillColor2: "rgba(38, 166, 154, 0.05)",
    topLineColor: "rgba(38, 166, 154, 1)",
    bottomFillColor1: "rgba(239, 83, 80, 0.05)",
    bottomFillColor2: "rgba(239, 83, 80, 0.28)",
    bottomLineColor: "rgba(239, 83, 80, 1)",
    lineWidth: 3,
    lineStyle: 0,
    lineType: 0,
    crosshairMarkerVisible: !0,
    crosshairMarkerRadius: 4,
    crosshairMarkerBorderColor: "",
    crosshairMarkerBorderWidth: 2,
    crosshairMarkerBackgroundColor: "",
    lastPriceAnimation: 0
  },
  Bs = {
    color: "#26a69a",
    base: 0
  },
  Os = {
    title: "",
    visible: !0,
    lastValueVisible: !0,
    priceLineVisible: !0,
    priceLineSource: 0,
    priceLineWidth: 1,
    priceLineColor: "",
    priceLineStyle: 2,
    baseLineVisible: !0,
    baseLineWidth: 1,
    baseLineColor: "#B2B5BE",
    baseLineStyle: 0,
    priceFormat: {
      type: "price",
      precision: 2,
      minMove: .01
    }
  };
class As {
  constructor(t, i) {
    this.Em = t, this.Vm = i;
  }
  applyOptions(t) {
    this.Em.Ut().ac(this.Vm, t);
  }
  options() {
    return this.Vi().F();
  }
  width() {
    return st(this.Vm) ? this.Em.Jv(this.Vm) : 0;
  }
  Vi() {
    return _(this.Em.Ut().oc(this.Vm)).Bt;
  }
}
const Ls = {
  color: "#FF0000",
  price: 0,
  lineStyle: 2,
  lineWidth: 1,
  lineVisible: !0,
  axisLabelVisible: !0,
  title: ""
};
class Is {
  constructor(t) {
    this.wh = t;
  }
  applyOptions(t) {
    this.wh.kh(t);
  }
  options() {
    return this.wh.F();
  }
  zm() {
    return this.wh;
  }
}
class Es {
  constructor(t, i, n) {
    this.Ts = t, this.Nm = i, this.Fm = n;
  }
  priceFormatter() {
    return this.Ts.Bl();
  }
  priceToCoordinate(t) {
    const i = this.Ts.Tt();
    return null === i ? null : this.Ts.Bt().Dt(t, i.Ot);
  }
  coordinateToPrice(t) {
    const i = this.Ts.Tt();
    return null === i ? null : this.Ts.Bt().pn(t, i.Ot);
  }
  barsInLogicalRange(t) {
    if (null === t) return null;
    const i = new ln(new en(t.from, t.to)).k_(),
      n = this.Ts.Ln();
    if (n.Ni()) return null;
    const s = n.jh(i.Ms(), 1),
      e = n.jh(i.ci(), -1),
      r = _(n.Nh()),
      h = _(n.An());
    if (null !== s && null !== e && s.Ys > e.Ys) return {
      barsBefore: t.from - r,
      barsAfter: h - t.to
    };
    const l = {
      barsBefore: null === s || s.Ys === r ? t.from - r : s.Ys - r,
      barsAfter: null === e || e.Ys === h ? h - t.to : h - e.Ys
    };
    return null !== s && null !== e && (l.from = s._t.o_ || s._t.__, l.to = e._t.o_ || e._t.__), l;
  }
  setData(t) {
    this.Ts.Lh(), this.Nm.Wm(this.Ts, t);
  }
  update(t) {
    this.Ts.Lh(), this.Nm.jm(this.Ts, t);
  }
  dataByIndex(t, i) {
    const n = this.Ts.Ln().jh(t, i);
    return null === n ? null : Ss(this.seriesType())(n);
  }
  setMarkers(t) {
    const i = t.map(t => Object.assign(Object.assign({}, t), {
      originalTime: t.time,
      time: os(t.time)
    }));
    this.Ts.gl(i);
  }
  markers() {
    return this.Ts.wl().map(t => {
      const {
          originalTime: i,
          time: n
        } = t,
        s = function (t, i) {
          var n = {};
          for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && i.indexOf(s) < 0 && (n[s] = t[s]);
          if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
            var e = 0;
            for (s = Object.getOwnPropertySymbols(t); e < s.length; e++) i.indexOf(s[e]) < 0 && Object.prototype.propertyIsEnumerable.call(t, s[e]) && (n[s[e]] = t[s[e]]);
          }
          return n;
        }(t, ["originalTime", "time"]);
      return Object.assign({
        time: i
      }, s);
    });
  }
  applyOptions(t) {
    this.Ts.kh(t);
  }
  options() {
    return T(this.Ts.F());
  }
  priceScale() {
    return this.Fm.priceScale(this.Ts.Bt().Vl());
  }
  createPriceLine(t) {
    const i = S(T(Ls), t),
      n = this.Ts.Ml(i);
    return new Is(n);
  }
  removePriceLine(t) {
    this.Ts.Sl(t.zm());
  }
  seriesType() {
    return this.Ts.Lh();
  }
}
class Vs {
  constructor(t, i) {
    this.$m = new M(), this.I_ = new M(), this._v = new M(), this.Hi = t, this.bo = t.yt(), this.Fv = i, this.bo.Mu().l(this.Hm.bind(this)), this.bo.Su().l(this.Um.bind(this)), this.Fv.bv().l(this.qm.bind(this));
  }
  M() {
    this.bo.Mu().v(this), this.bo.Su().v(this), this.Fv.bv().v(this), this.$m.M(), this.I_.M(), this._v.M();
  }
  scrollPosition() {
    return this.bo.au();
  }
  scrollToPosition(t, i) {
    i ? this.bo.bu(t, 1e3) : this.Hi.Gn(t);
  }
  scrollToRealTime() {
    this.bo.mu();
  }
  getVisibleRange() {
    var t, i;
    const n = this.bo.K_();
    return null === n ? null : {
      from: null !== (t = n.from.o_) && void 0 !== t ? t : n.from.__,
      to: null !== (i = n.to.o_) && void 0 !== i ? i : n.to.__
    };
  }
  setVisibleRange(t) {
    const i = {
        from: os(t.from),
        to: os(t.to)
      },
      n = this.bo.tu(i);
    this.Hi.Oc(n);
  }
  getVisibleLogicalRange() {
    const t = this.bo.Z_();
    return null === t ? null : {
      from: t.Ms(),
      to: t.ci()
    };
  }
  setVisibleLogicalRange(t) {
    a(t.from <= t.to, "The from index cannot be after the to index."), this.Hi.Oc(t);
  }
  resetTimeScale() {
    this.Hi.Zn();
  }
  fitContent() {
    this.Hi.ku();
  }
  logicalToCoordinate(t) {
    const i = this.Hi.yt();
    return i.Ni() ? null : i.Et(t);
  }
  coordinateToLogical(t) {
    return this.bo.Ni() ? null : this.bo.eu(t);
  }
  timeToCoordinate(t) {
    const i = os(t),
      n = this.bo.Nl(i, !1);
    return null === n ? null : this.bo.Et(n);
  }
  coordinateToTime(t) {
    var i;
    const n = this.Hi.yt(),
      s = n.eu(t),
      e = n.vn(s);
    return null === e ? null : null !== (i = e.o_) && void 0 !== i ? i : e.__;
  }
  width() {
    return this.Fv.Up().width;
  }
  height() {
    return this.Fv.Up().height;
  }
  subscribeVisibleTimeRangeChange(t) {
    this.$m.l(t);
  }
  unsubscribeVisibleTimeRangeChange(t) {
    this.$m.p(t);
  }
  subscribeVisibleLogicalRangeChange(t) {
    this.I_.l(t);
  }
  unsubscribeVisibleLogicalRangeChange(t) {
    this.I_.p(t);
  }
  subscribeSizeChange(t) {
    this._v.l(t);
  }
  unsubscribeSizeChange(t) {
    this._v.p(t);
  }
  applyOptions(t) {
    this.bo.kh(t);
  }
  options() {
    return T(this.bo.F());
  }
  Hm() {
    this.$m.g() && this.$m.m(this.getVisibleRange());
  }
  Um() {
    this.I_.g() && this.I_.m(this.getVisibleLogicalRange());
  }
  qm(t) {
    this._v.m(t.width, t.height);
  }
}
function zs(t) {
  if (void 0 === t || "custom" === t.type) return;
  const i = t;
  void 0 !== i.minMove && void 0 === i.precision && (i.precision = function (t) {
    if (t >= 1) return 0;
    let i = 0;
    for (; i < 8; i++) {
      const n = Math.round(t);
      if (Math.abs(n - t) < 1e-8) return i;
      t *= 10;
    }
    return i;
  }(i.minMove));
}
function Ns(t) {
  return function (t) {
    if (C(t.handleScale)) {
      const i = t.handleScale;
      t.handleScale = {
        axisDoubleClickReset: {
          time: i,
          price: i
        },
        axisPressedMouseMove: {
          time: i,
          price: i
        },
        mouseWheel: i,
        pinch: i
      };
    } else if (void 0 !== t.handleScale) {
      const {
        axisPressedMouseMove: i,
        axisDoubleClickReset: n
      } = t.handleScale;
      C(i) && (t.handleScale.axisPressedMouseMove = {
        time: i,
        price: i
      }), C(n) && (t.handleScale.axisDoubleClickReset = {
        time: n,
        price: n
      });
    }
    const i = t.handleScroll;
    C(i) && (t.handleScroll = {
      horzTouchDrag: i,
      vertTouchDrag: i,
      mouseWheel: i,
      pressedMouseMove: i
    });
  }(t), t;
}
class Fs {
  constructor(t, i) {
    this.Ym = new vs(), this.Xm = new Map(), this.Zm = new Map(), this.Km = new M(), this.Gm = new M();
    const n = void 0 === i ? T(ks) : S(T(ks), Ns(i));
    this.Em = new Yn(t, n), this.Em.Wp().l(t => {
      this.Km.g() && this.Km.m(this.Jm(t()));
    }, this), this.Em.dc().l(t => {
      this.Gm.g() && this.Gm.m(this.Jm(t()));
    }, this);
    const s = this.Em.Ut();
    this.Qm = new Vs(s, this.Em.qv());
  }
  remove() {
    this.Em.Wp().v(this), this.Em.dc().v(this), this.Qm.M(), this.Em.M(), this.Xm.clear(), this.Zm.clear(), this.Km.M(), this.Gm.M(), this.Ym.M();
  }
  resize(t, i, n) {
    this.Em.jv(t, i, n);
  }
  addAreaSeries(t) {
    return this.tb("Area", Rs, t);
  }
  addBaselineSeries(t) {
    return this.tb("Baseline", Ds, t);
  }
  addBarSeries(t) {
    return this.tb("Bar", Ts, t);
  }
  addCandlestickSeries(t = {}) {
    return function (t) {
      void 0 !== t.borderColor && (t.borderUpColor = t.borderColor, t.borderDownColor = t.borderColor), void 0 !== t.wickColor && (t.wickUpColor = t.wickColor, t.wickDownColor = t.wickColor);
    }(t), this.tb("Candlestick", Cs, t);
  }
  addHistogramSeries(t) {
    return this.tb("Histogram", Bs, t);
  }
  addLineSeries(t) {
    return this.tb("Line", Ps, t);
  }
  removeSeries(t) {
    const i = o(this.Xm.get(t)),
      n = this.Ym.Bc(i);
    this.Em.Ut().Bc(i), this.ib(n), this.Xm.delete(t), this.Zm.delete(i);
  }
  Wm(t, i) {
    this.ib(this.Ym.ym(t, i));
  }
  jm(t, i) {
    this.ib(this.Ym.Rm(t, i));
  }
  subscribeClick(t) {
    this.Km.l(t);
  }
  unsubscribeClick(t) {
    this.Km.p(t);
  }
  subscribeCrosshairMove(t) {
    this.Gm.l(t);
  }
  unsubscribeCrosshairMove(t) {
    this.Gm.p(t);
  }
  priceScale(t) {
    return new As(this.Em, t);
  }
  timeScale() {
    return this.Qm;
  }
  applyOptions(t) {
    this.Em.kh(Ns(t));
  }
  options() {
    return this.Em.F();
  }
  takeScreenshot() {
    return this.Em.Kv();
  }
  tb(t, i, n = {}) {
    zs(n.priceFormat);
    const s = S(T(Os), T(i), n),
      e = this.Em.Ut().Rc(t, s),
      r = new Es(e, this, this);
    return this.Xm.set(r, e), this.Zm.set(e, r), r;
  }
  ib(t) {
    const i = this.Em.Ut();
    i.Tc(t.yt.su, t.yt.Lm, t.yt.Im), t.Om.forEach((t, i) => i.tt(t.ar, t.Am)), i.hu();
  }
  nb(t) {
    return o(this.Zm.get(t));
  }
  Jm(t) {
    const i = new Map();
    t.um.forEach((t, n) => {
      const s = Ss(n.Lh())(t);
      a(function (t) {
        return void 0 !== t.open || void 0 !== t.value;
      }(s)), i.set(this.nb(n), s);
    });
    const n = void 0 === t._m ? void 0 : this.nb(t._m);
    return {
      time: t._t,
      logical: t.Ys,
      point: t.om,
      hoveredSeries: n,
      hoveredObjectId: t.dm,
      seriesData: i,
      sourceEvent: t.fm
    };
  }
}
function Ws(t, i) {
  let n;
  if (k(t)) {
    const i = document.getElementById(t);
    a(null !== i, `Cannot find element in DOM with id=${t}`), n = i;
  } else n = t;
  return new Fs(n, i);
}
function js() {
  return "4.0.0";
}
},{"fancy-canvas":"../../../../node_modules/fancy-canvas/index.mjs"}],"index.js":[function(require,module,exports) {
"use strict";

var _papaparse = _interopRequireDefault(require("papaparse"));
var _lightweightCharts = require("lightweight-charts");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var chart;
var candleseries;
var getData = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", new Promise(function (resolve, reject) {
            var cdata = [];
            _papaparse.default.parse('/ES_full_1min_continuous_UNadjusted.csv', {
              download: true,
              step: function step(row, parser) {
                console.log('Row data:', row.data);
                if (row.errors.length === 0) {
                  var _row$data$ = _slicedToArray(row.data[0], 6),
                    dateTime = _row$data$[0],
                    open = _row$data$[1],
                    high = _row$data$[2],
                    low = _row$data$[3],
                    close = _row$data$[4],
                    volume = _row$data$[5]; // Modify this line

                  console.log('dateTime:', dateTime);
                  if (!dateTime) {
                    return;
                  }
                  var parsedTime;
                  if (dateTime.includes(' ')) {
                    // First dataset format
                    var _dateTime$split = dateTime.split(' '),
                      _dateTime$split2 = _slicedToArray(_dateTime$split, 2),
                      date = _dateTime$split2[0],
                      time = _dateTime$split2[1];
                    var isoDateTime = "".concat(date, "T").concat(time);
                    parsedTime = new Date(isoDateTime).getTime() / 1000;
                  } else {
                    // Second dataset format
                    var _dateTime$split3 = dateTime.split(', '),
                      _dateTime$split4 = _slicedToArray(_dateTime$split3, 2),
                      _date = _dateTime$split4[0],
                      _time = _dateTime$split4[1];
                    var adjustedTime = _time.includes('AM') || _time.includes('PM') ? _time : "".concat(_time, " UTC");
                    parsedTime = new Date("".concat(_date, " ").concat(adjustedTime)).getTime() / 1000;
                  }
                  var data = {
                    time: parsedTime,
                    open: parseFloat(open),
                    high: parseFloat(high),
                    low: parseFloat(low),
                    close: parseFloat(close),
                    volume: parseFloat(volume)
                  };
                  cdata.push(data);
                } else {
                  // Handle errors or stop parsing if needed
                  // parser.abort();
                }
              },
              complete: function complete() {
                resolve(cdata);
              },
              error: function error(err) {
                reject(err);
              }
            });
          }));
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getData() {
    return _ref.apply(this, arguments);
  };
}();

// getData();

var displayChart = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var domElement, chartProperties, candleseries, klinedata;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          domElement = document.getElementById('tvchart');
          chartProperties = {
            width: domElement.clientWidth,
            timeScale: {
              timeVisible: true
            }
          };
          chart = LightweightCharts.createChart(domElement, chartProperties);
          candleseries = chart.addCandlestickSeries();
          _context2.next = 6;
          return getData();
        case 6:
          klinedata = _context2.sent;
          candleseries.setData(klinedata);
          return _context2.abrupt("return", candleseries);
        case 9:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function displayChart() {
    return _ref2.apply(this, arguments);
  };
}();
window.addEventListener('resize', function () {
  var chartElement = document.getElementById('tvchart');
  chart.resize(chartElement.clientWidth, chartElement.clientHeight);
});
_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
  return _regeneratorRuntime().wrap(function _callee3$(_context3) {
    while (1) switch (_context3.prev = _context3.next) {
      case 0:
        _context3.next = 2;
        return displayChart();
      case 2:
        candleseries = _context3.sent;
      case 3:
      case "end":
        return _context3.stop();
    }
  }, _callee3);
}))();
var filterDataByDateTimeRange = function filterDataByDateTimeRange(data, date, startTime, endTime) {
  var targetStartDateTime = new Date("".concat(date, "T").concat(startTime));
  var targetEndDateTime = new Date("".concat(date, "T").concat(endTime));
  return data.filter(function (item) {
    var itemDateTime = new Date(item.time * 1000);
    return itemDateTime.getFullYear() === targetStartDateTime.getFullYear() && itemDateTime.getMonth() === targetStartDateTime.getMonth() && itemDateTime.getDate() === targetStartDateTime.getDate() && itemDateTime >= targetStartDateTime && itemDateTime <= targetEndDateTime;
  });
};
var updateChart = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    var selectedDate, selectedStartTime, selectedEndTime, klinedata, filteredData;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          selectedDate = document.getElementById('dateInput').value;
          selectedStartTime = document.getElementById('startTimeInput').value;
          selectedEndTime = document.getElementById('endTimeInput').value;
          if (!(!selectedDate || !selectedStartTime || !selectedEndTime)) {
            _context4.next = 6;
            break;
          }
          alert('Please select a date and time range');
          return _context4.abrupt("return");
        case 6:
          _context4.next = 8;
          return getData();
        case 8:
          klinedata = _context4.sent;
          filteredData = filterDataByDateTimeRange(klinedata, selectedDate, selectedStartTime, selectedEndTime);
          if (!(filteredData.length === 0)) {
            _context4.next = 13;
            break;
          }
          alert('No data found for the selected date and time range');
          return _context4.abrupt("return");
        case 13:
          if (candleseries) {
            // Remove the existing candlestick series
            chart.removeSeries(candleseries);
          }
          candleseries = chart.addCandlestickSeries(); // Add a new candlestick series
          candleseries.setData(filteredData);
        case 16:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function updateChart() {
    return _ref4.apply(this, arguments);
  };
}();
document.getElementById('updateChart').addEventListener('click', updateChart);
},{"papaparse":"../node_modules/papaparse/papaparse.min.js","lightweight-charts":"../../../../node_modules/lightweight-charts/dist/lightweight-charts.production.mjs"}],"../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58125" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/public.e31bb0bc.js.map