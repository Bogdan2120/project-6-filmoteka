function t(t,e,n,r){Object.defineProperty(t,e,{get:n,set:r,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},s=n.parcelRequired7c6;null==s&&((s=function(t){if(t in r)return r[t].exports;if(t in i){var e=i[t];delete i[t];var n={id:t,exports:{}};return r[t]=n,e.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){i[t]=e},n.parcelRequired7c6=s),s.register("9QQ9J",(function(e,n){var r,i,o;t(e.exports,"SourceMapGenerator",(function(){return r}),(function(t){return r=t})),t(e.exports,"SourceMapConsumer",(function(){return i}),(function(t){return i=t})),t(e.exports,"SourceNode",(function(){return o}),(function(t){return o=t})),r=s("ic7WM").SourceMapGenerator,i=s("lbXUp").SourceMapConsumer,o=s("Tx9qF").SourceNode})),s.register("ic7WM",(function(e,n){var r;t(e.exports,"SourceMapGenerator",(function(){return r}),(function(t){return r=t}));var i=s("duvZU"),o=s("dQK2c"),a=s("lSTHk").ArraySet,c=s("2EyUB").MappingList;function u(t){t||(t={}),this._file=o.getArg(t,"file",null),this._sourceRoot=o.getArg(t,"sourceRoot",null),this._skipValidation=o.getArg(t,"skipValidation",!1),this._sources=new a,this._names=new a,this._mappings=new c,this._sourcesContents=null}u.prototype._version=3,u.fromSourceMap=function(t){var e=t.sourceRoot,n=new u({file:t.file,sourceRoot:e});return t.eachMapping((function(t){var r={generated:{line:t.generatedLine,column:t.generatedColumn}};null!=t.source&&(r.source=t.source,null!=e&&(r.source=o.relative(e,r.source)),r.original={line:t.originalLine,column:t.originalColumn},null!=t.name&&(r.name=t.name)),n.addMapping(r)})),t.sources.forEach((function(r){var i=r;null!==e&&(i=o.relative(e,r)),n._sources.has(i)||n._sources.add(i);var s=t.sourceContentFor(r);null!=s&&n.setSourceContent(r,s)})),n},u.prototype.addMapping=function(t){var e=o.getArg(t,"generated"),n=o.getArg(t,"original",null),r=o.getArg(t,"source",null),i=o.getArg(t,"name",null);this._skipValidation||this._validateMapping(e,n,r,i),null!=r&&(r=String(r),this._sources.has(r)||this._sources.add(r)),null!=i&&(i=String(i),this._names.has(i)||this._names.add(i)),this._mappings.add({generatedLine:e.line,generatedColumn:e.column,originalLine:null!=n&&n.line,originalColumn:null!=n&&n.column,source:r,name:i})},u.prototype.setSourceContent=function(t,e){var n=t;null!=this._sourceRoot&&(n=o.relative(this._sourceRoot,n)),null!=e?(this._sourcesContents||(this._sourcesContents=Object.create(null)),this._sourcesContents[o.toSetString(n)]=e):this._sourcesContents&&(delete this._sourcesContents[o.toSetString(n)],0===Object.keys(this._sourcesContents).length&&(this._sourcesContents=null))},u.prototype.applySourceMap=function(t,e,n){var r=e;if(null==e){if(null==t.file)throw new Error('SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map\'s "file" property. Both were omitted.');r=t.file}var i=this._sourceRoot;null!=i&&(r=o.relative(i,r));var s=new a,c=new a;this._mappings.unsortedForEach((function(e){if(e.source===r&&null!=e.originalLine){var a=t.originalPositionFor({line:e.originalLine,column:e.originalColumn});null!=a.source&&(e.source=a.source,null!=n&&(e.source=o.join(n,e.source)),null!=i&&(e.source=o.relative(i,e.source)),e.originalLine=a.line,e.originalColumn=a.column,null!=a.name&&(e.name=a.name))}var u=e.source;null==u||s.has(u)||s.add(u);var l=e.name;null==l||c.has(l)||c.add(l)}),this),this._sources=s,this._names=c,t.sources.forEach((function(e){var r=t.sourceContentFor(e);null!=r&&(null!=n&&(e=o.join(n,e)),null!=i&&(e=o.relative(i,e)),this.setSourceContent(e,r))}),this)},u.prototype._validateMapping=function(t,e,n,r){if(e&&"number"!=typeof e.line&&"number"!=typeof e.column)throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");if((!(t&&"line"in t&&"column"in t&&t.line>0&&t.column>=0)||e||n||r)&&!(t&&"line"in t&&"column"in t&&e&&"line"in e&&"column"in e&&t.line>0&&t.column>=0&&e.line>0&&e.column>=0&&n))throw new Error("Invalid mapping: "+JSON.stringify({generated:t,source:n,original:e,name:r}))},u.prototype._serializeMappings=function(){for(var t,e,n,r,s=0,a=1,c=0,u=0,l=0,h=0,p="",d=this._mappings.toArray(),f=0,g=d.length;f<g;f++){if(t="",(e=d[f]).generatedLine!==a)for(s=0;e.generatedLine!==a;)t+=";",a++;else if(f>0){if(!o.compareByGeneratedPositionsInflated(e,d[f-1]))continue;t+=","}t+=i.encode(e.generatedColumn-s),s=e.generatedColumn,null!=e.source&&(r=this._sources.indexOf(e.source),t+=i.encode(r-h),h=r,t+=i.encode(e.originalLine-1-u),u=e.originalLine-1,t+=i.encode(e.originalColumn-c),c=e.originalColumn,null!=e.name&&(n=this._names.indexOf(e.name),t+=i.encode(n-l),l=n)),p+=t}return p},u.prototype._generateSourcesContent=function(t,e){return t.map((function(t){if(!this._sourcesContents)return null;null!=e&&(t=o.relative(e,t));var n=o.toSetString(t);return Object.prototype.hasOwnProperty.call(this._sourcesContents,n)?this._sourcesContents[n]:null}),this)},u.prototype.toJSON=function(){var t={version:this._version,sources:this._sources.toArray(),names:this._names.toArray(),mappings:this._serializeMappings()};return null!=this._file&&(t.file=this._file),null!=this._sourceRoot&&(t.sourceRoot=this._sourceRoot),this._sourcesContents&&(t.sourcesContent=this._generateSourcesContent(t.sources,t.sourceRoot)),t},u.prototype.toString=function(){return JSON.stringify(this.toJSON())},r=u})),s.register("duvZU",(function(e,n){var r,i;t(e.exports,"encode",(function(){return r}),(function(t){return r=t})),t(e.exports,"decode",(function(){return i}),(function(t){return i=t}));var o=s("iJ1ZV");r=function(t){var e,n="",r=function(t){return t<0?1+(-t<<1):0+(t<<1)}(t);do{e=31&r,(r>>>=5)>0&&(e|=32),n+=o.encode(e)}while(r>0);return n},i=function(t,e,n){var r,i,s,a,c=t.length,u=0,l=0;do{if(e>=c)throw new Error("Expected more digits in base 64 VLQ value.");if(-1===(i=o.decode(t.charCodeAt(e++))))throw new Error("Invalid base64 digit: "+t.charAt(e-1));r=!!(32&i),u+=(i&=31)<<l,l+=5}while(r);n.value=(a=(s=u)>>1,1==(1&s)?-a:a),n.rest=e}})),s.register("iJ1ZV",(function(e,n){var r,i;t(e.exports,"encode",(function(){return r}),(function(t){return r=t})),t(e.exports,"decode",(function(){return i}),(function(t){return i=t}));var s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");r=function(t){if(0<=t&&t<s.length)return s[t];throw new TypeError("Must be between 0 and 63: "+t)},i=function(t){return 65<=t&&t<=90?t-65:97<=t&&t<=122?t-97+26:48<=t&&t<=57?t-48+52:43==t?62:47==t?63:-1}})),s.register("dQK2c",(function(e,n){var r,i,s,o,a,c,u,l,h,p,d,f,g;t(e.exports,"getArg",(function(){return r}),(function(t){return r=t})),t(e.exports,"urlParse",(function(){return i}),(function(t){return i=t})),t(e.exports,"isAbsolute",(function(){return a}),(function(t){return a=t})),t(e.exports,"normalize",(function(){return s}),(function(t){return s=t})),t(e.exports,"join",(function(){return o}),(function(t){return o=t})),t(e.exports,"relative",(function(){return c}),(function(t){return c=t})),t(e.exports,"toSetString",(function(){return u}),(function(t){return u=t})),t(e.exports,"fromSetString",(function(){return l}),(function(t){return l=t})),t(e.exports,"compareByOriginalPositions",(function(){return h}),(function(t){return h=t})),t(e.exports,"compareByGeneratedPositionsDeflated",(function(){return p}),(function(t){return p=t})),t(e.exports,"compareByGeneratedPositionsInflated",(function(){return d}),(function(t){return d=t})),t(e.exports,"parseSourceMapInput",(function(){return f}),(function(t){return f=t})),t(e.exports,"computeSourceURL",(function(){return g}),(function(t){return g=t})),r=function(t,e,n){if(e in t)return t[e];if(3===arguments.length)return n;throw new Error('"'+e+'" is a required argument.')};var m=/^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/,v=/^data:.+\,.+$/;function y(t){var e=t.match(m);return e?{scheme:e[1],auth:e[2],host:e[3],port:e[4],path:e[5]}:null}function _(t){var e="";return t.scheme&&(e+=t.scheme+":"),e+="//",t.auth&&(e+=t.auth+"@"),t.host&&(e+=t.host),t.port&&(e+=":"+t.port),t.path&&(e+=t.path),e}function b(t){var e=t,n=y(t);if(n){if(!n.path)return t;e=n.path}for(var r,i=a(e),s=e.split(/\/+/),o=0,c=s.length-1;c>=0;c--)"."===(r=s[c])?s.splice(c,1):".."===r?o++:o>0&&(""===r?(s.splice(c+1,o),o=0):(s.splice(c,2),o--));return""===(e=s.join("/"))&&(e=i?"/":"."),n?(n.path=e,_(n)):e}function w(t,e){""===t&&(t="."),""===e&&(e=".");var n=y(e),r=y(t);if(r&&(t=r.path||"/"),n&&!n.scheme)return r&&(n.scheme=r.scheme),_(n);if(n||e.match(v))return e;if(r&&!r.host&&!r.path)return r.host=e,_(r);var i="/"===e.charAt(0)?e:b(t.replace(/\/+$/,"")+"/"+e);return r?(r.path=i,_(r)):i}i=y,s=b,o=w,a=function(t){return"/"===t.charAt(0)||m.test(t)},c=function(t,e){""===t&&(t="."),t=t.replace(/\/$/,"");for(var n=0;0!==e.indexOf(t+"/");){var r=t.lastIndexOf("/");if(r<0)return e;if((t=t.slice(0,r)).match(/^([^\/]+:\/)?\/*$/))return e;++n}return Array(n+1).join("../")+e.substr(t.length+1)};var S=!("__proto__"in Object.create(null));function E(t){return t}function k(t){if(!t)return!1;var e=t.length;if(e<9)return!1;if(95!==t.charCodeAt(e-1)||95!==t.charCodeAt(e-2)||111!==t.charCodeAt(e-3)||116!==t.charCodeAt(e-4)||111!==t.charCodeAt(e-5)||114!==t.charCodeAt(e-6)||112!==t.charCodeAt(e-7)||95!==t.charCodeAt(e-8)||95!==t.charCodeAt(e-9))return!1;for(var n=e-10;n>=0;n--)if(36!==t.charCodeAt(n))return!1;return!0}function I(t,e){return t===e?0:null===t?1:null===e?-1:t>e?1:-1}u=S?E:function(t){return k(t)?"$"+t:t},l=S?E:function(t){return k(t)?t.slice(1):t},h=function(t,e,n){var r=I(t.source,e.source);return 0!==r||0!==(r=t.originalLine-e.originalLine)||0!==(r=t.originalColumn-e.originalColumn)||n||0!==(r=t.generatedColumn-e.generatedColumn)||0!==(r=t.generatedLine-e.generatedLine)?r:I(t.name,e.name)},p=function(t,e,n){var r=t.generatedLine-e.generatedLine;return 0!==r||0!==(r=t.generatedColumn-e.generatedColumn)||n||0!==(r=I(t.source,e.source))||0!==(r=t.originalLine-e.originalLine)||0!==(r=t.originalColumn-e.originalColumn)?r:I(t.name,e.name)},d=function(t,e){var n=t.generatedLine-e.generatedLine;return 0!==n||0!==(n=t.generatedColumn-e.generatedColumn)||0!==(n=I(t.source,e.source))||0!==(n=t.originalLine-e.originalLine)||0!==(n=t.originalColumn-e.originalColumn)?n:I(t.name,e.name)},f=function(t){return JSON.parse(t.replace(/^\)]}'[^\n]*\n/,""))},g=function(t,e,n){if(e=e||"",t&&("/"!==t[t.length-1]&&"/"!==e[0]&&(t+="/"),e=t+e),n){var r=y(n);if(!r)throw new Error("sourceMapURL could not be parsed");if(r.path){var i=r.path.lastIndexOf("/");i>=0&&(r.path=r.path.substring(0,i+1))}e=w(_(r),e)}return b(e)}})),s.register("lSTHk",(function(e,n){var r;t(e.exports,"ArraySet",(function(){return r}),(function(t){return r=t}));var i=s("dQK2c"),o=Object.prototype.hasOwnProperty,a="undefined"!=typeof Map;function c(){this._array=[],this._set=a?new Map:Object.create(null)}c.fromArray=function(t,e){for(var n=new c,r=0,i=t.length;r<i;r++)n.add(t[r],e);return n},c.prototype.size=function(){return a?this._set.size:Object.getOwnPropertyNames(this._set).length},c.prototype.add=function(t,e){var n=a?t:i.toSetString(t),r=a?this.has(t):o.call(this._set,n),s=this._array.length;r&&!e||this._array.push(t),r||(a?this._set.set(t,s):this._set[n]=s)},c.prototype.has=function(t){if(a)return this._set.has(t);var e=i.toSetString(t);return o.call(this._set,e)},c.prototype.indexOf=function(t){if(a){var e=this._set.get(t);if(e>=0)return e}else{var n=i.toSetString(t);if(o.call(this._set,n))return this._set[n]}throw new Error('"'+t+'" is not in the set.')},c.prototype.at=function(t){if(t>=0&&t<this._array.length)return this._array[t];throw new Error("No element indexed by "+t)},c.prototype.toArray=function(){return this._array.slice()},r=c})),s.register("2EyUB",(function(e,n){var r;t(e.exports,"MappingList",(function(){return r}),(function(t){return r=t}));var i=s("dQK2c");function o(){this._array=[],this._sorted=!0,this._last={generatedLine:-1,generatedColumn:0}}o.prototype.unsortedForEach=function(t,e){this._array.forEach(t,e)},o.prototype.add=function(t){var e,n,r,s,o,a;e=this._last,n=t,r=e.generatedLine,s=n.generatedLine,o=e.generatedColumn,a=n.generatedColumn,s>r||s==r&&a>=o||i.compareByGeneratedPositionsInflated(e,n)<=0?(this._last=t,this._array.push(t)):(this._sorted=!1,this._array.push(t))},o.prototype.toArray=function(){return this._sorted||(this._array.sort(i.compareByGeneratedPositionsInflated),this._sorted=!0),this._array},r=o})),s.register("lbXUp",(function(e,n){var r;t(e.exports,"SourceMapConsumer",(function(){return r}),(function(t){return r=t}));var i=s("dQK2c"),o=s("bTtvB"),a=s("lSTHk").ArraySet,c=s("duvZU"),u=s("76ffZ").quickSort;function l(t,e){var n=t;return"string"==typeof t&&(n=i.parseSourceMapInput(t)),null!=n.sections?new d(n,e):new h(n,e)}function h(t,e){var n=t;"string"==typeof t&&(n=i.parseSourceMapInput(t));var r=i.getArg(n,"version"),s=i.getArg(n,"sources"),o=i.getArg(n,"names",[]),c=i.getArg(n,"sourceRoot",null),u=i.getArg(n,"sourcesContent",null),l=i.getArg(n,"mappings"),h=i.getArg(n,"file",null);if(r!=this._version)throw new Error("Unsupported version: "+r);c&&(c=i.normalize(c)),s=s.map(String).map(i.normalize).map((function(t){return c&&i.isAbsolute(c)&&i.isAbsolute(t)?i.relative(c,t):t})),this._names=a.fromArray(o.map(String),!0),this._sources=a.fromArray(s,!0),this._absoluteSources=this._sources.toArray().map((function(t){return i.computeSourceURL(c,t,e)})),this.sourceRoot=c,this.sourcesContent=u,this._mappings=l,this._sourceMapURL=e,this.file=h}function p(){this.generatedLine=0,this.generatedColumn=0,this.source=null,this.originalLine=null,this.originalColumn=null,this.name=null}function d(t,e){var n=t;"string"==typeof t&&(n=i.parseSourceMapInput(t));var r=i.getArg(n,"version"),s=i.getArg(n,"sections");if(r!=this._version)throw new Error("Unsupported version: "+r);this._sources=new a,this._names=new a;var o={line:-1,column:0};this._sections=s.map((function(t){if(t.url)throw new Error("Support for url field in sections not implemented.");var n=i.getArg(t,"offset"),r=i.getArg(n,"line"),s=i.getArg(n,"column");if(r<o.line||r===o.line&&s<o.column)throw new Error("Section offsets must be ordered and non-overlapping.");return o=n,{generatedOffset:{generatedLine:r+1,generatedColumn:s+1},consumer:new l(i.getArg(t,"map"),e)}}))}l.fromSourceMap=function(t,e){return h.fromSourceMap(t,e)},l.prototype._version=3,l.prototype.__generatedMappings=null,Object.defineProperty(l.prototype,"_generatedMappings",{configurable:!0,enumerable:!0,get:function(){return this.__generatedMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__generatedMappings}}),l.prototype.__originalMappings=null,Object.defineProperty(l.prototype,"_originalMappings",{configurable:!0,enumerable:!0,get:function(){return this.__originalMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__originalMappings}}),l.prototype._charIsMappingSeparator=function(t,e){var n=t.charAt(e);return";"===n||","===n},l.prototype._parseMappings=function(t,e){throw new Error("Subclasses must implement _parseMappings")},l.GENERATED_ORDER=1,l.ORIGINAL_ORDER=2,l.GREATEST_LOWER_BOUND=1,l.LEAST_UPPER_BOUND=2,l.prototype.eachMapping=function(t,e,n){var r,s=e||null;switch(n||l.GENERATED_ORDER){case l.GENERATED_ORDER:r=this._generatedMappings;break;case l.ORIGINAL_ORDER:r=this._originalMappings;break;default:throw new Error("Unknown order of iteration.")}var o=this.sourceRoot;r.map((function(t){var e=null===t.source?null:this._sources.at(t.source);return{source:e=i.computeSourceURL(o,e,this._sourceMapURL),generatedLine:t.generatedLine,generatedColumn:t.generatedColumn,originalLine:t.originalLine,originalColumn:t.originalColumn,name:null===t.name?null:this._names.at(t.name)}}),this).forEach(t,s)},l.prototype.allGeneratedPositionsFor=function(t){var e=i.getArg(t,"line"),n={source:i.getArg(t,"source"),originalLine:e,originalColumn:i.getArg(t,"column",0)};if(n.source=this._findSourceIndex(n.source),n.source<0)return[];var r=[],s=this._findMapping(n,this._originalMappings,"originalLine","originalColumn",i.compareByOriginalPositions,o.LEAST_UPPER_BOUND);if(s>=0){var a=this._originalMappings[s];if(void 0===t.column)for(var c=a.originalLine;a&&a.originalLine===c;)r.push({line:i.getArg(a,"generatedLine",null),column:i.getArg(a,"generatedColumn",null),lastColumn:i.getArg(a,"lastGeneratedColumn",null)}),a=this._originalMappings[++s];else for(var u=a.originalColumn;a&&a.originalLine===e&&a.originalColumn==u;)r.push({line:i.getArg(a,"generatedLine",null),column:i.getArg(a,"generatedColumn",null),lastColumn:i.getArg(a,"lastGeneratedColumn",null)}),a=this._originalMappings[++s]}return r},r=l,h.prototype=Object.create(l.prototype),h.prototype.consumer=l,h.prototype._findSourceIndex=function(t){var e,n=t;if(null!=this.sourceRoot&&(n=i.relative(this.sourceRoot,n)),this._sources.has(n))return this._sources.indexOf(n);for(e=0;e<this._absoluteSources.length;++e)if(this._absoluteSources[e]==t)return e;return-1},h.fromSourceMap=function(t,e){var n=Object.create(h.prototype),r=n._names=a.fromArray(t._names.toArray(),!0),s=n._sources=a.fromArray(t._sources.toArray(),!0);n.sourceRoot=t._sourceRoot,n.sourcesContent=t._generateSourcesContent(n._sources.toArray(),n.sourceRoot),n.file=t._file,n._sourceMapURL=e,n._absoluteSources=n._sources.toArray().map((function(t){return i.computeSourceURL(n.sourceRoot,t,e)}));for(var o=t._mappings.toArray().slice(),c=n.__generatedMappings=[],l=n.__originalMappings=[],d=0,f=o.length;d<f;d++){var g=o[d],m=new p;m.generatedLine=g.generatedLine,m.generatedColumn=g.generatedColumn,g.source&&(m.source=s.indexOf(g.source),m.originalLine=g.originalLine,m.originalColumn=g.originalColumn,g.name&&(m.name=r.indexOf(g.name)),l.push(m)),c.push(m)}return u(n.__originalMappings,i.compareByOriginalPositions),n},h.prototype._version=3,Object.defineProperty(h.prototype,"sources",{get:function(){return this._absoluteSources.slice()}}),h.prototype._parseMappings=function(t,e){for(var n,r,s,o,a,l=1,h=0,d=0,f=0,g=0,m=0,v=t.length,y=0,_={},b={},w=[],S=[];y<v;)if(";"===t.charAt(y))l++,y++,h=0;else if(","===t.charAt(y))y++;else{for((n=new p).generatedLine=l,o=y;o<v&&!this._charIsMappingSeparator(t,o);o++);if(s=_[r=t.slice(y,o)])y+=r.length;else{for(s=[];y<o;)c.decode(t,y,b),a=b.value,y=b.rest,s.push(a);if(2===s.length)throw new Error("Found a source, but no line and column");if(3===s.length)throw new Error("Found a source and line, but no column");_[r]=s}n.generatedColumn=h+s[0],h=n.generatedColumn,s.length>1&&(n.source=g+s[1],g+=s[1],n.originalLine=d+s[2],d=n.originalLine,n.originalLine+=1,n.originalColumn=f+s[3],f=n.originalColumn,s.length>4&&(n.name=m+s[4],m+=s[4])),S.push(n),"number"==typeof n.originalLine&&w.push(n)}u(S,i.compareByGeneratedPositionsDeflated),this.__generatedMappings=S,u(w,i.compareByOriginalPositions),this.__originalMappings=w},h.prototype._findMapping=function(t,e,n,r,i,s){if(t[n]<=0)throw new TypeError("Line must be greater than or equal to 1, got "+t[n]);if(t[r]<0)throw new TypeError("Column must be greater than or equal to 0, got "+t[r]);return o.search(t,e,i,s)},h.prototype.computeColumnSpans=function(){for(var t=0;t<this._generatedMappings.length;++t){var e=this._generatedMappings[t];if(t+1<this._generatedMappings.length){var n=this._generatedMappings[t+1];if(e.generatedLine===n.generatedLine){e.lastGeneratedColumn=n.generatedColumn-1;continue}}e.lastGeneratedColumn=1/0}},h.prototype.originalPositionFor=function(t){var e={generatedLine:i.getArg(t,"line"),generatedColumn:i.getArg(t,"column")},n=this._findMapping(e,this._generatedMappings,"generatedLine","generatedColumn",i.compareByGeneratedPositionsDeflated,i.getArg(t,"bias",l.GREATEST_LOWER_BOUND));if(n>=0){var r=this._generatedMappings[n];if(r.generatedLine===e.generatedLine){var s=i.getArg(r,"source",null);null!==s&&(s=this._sources.at(s),s=i.computeSourceURL(this.sourceRoot,s,this._sourceMapURL));var o=i.getArg(r,"name",null);return null!==o&&(o=this._names.at(o)),{source:s,line:i.getArg(r,"originalLine",null),column:i.getArg(r,"originalColumn",null),name:o}}}return{source:null,line:null,column:null,name:null}},h.prototype.hasContentsOfAllSources=function(){return!!this.sourcesContent&&(this.sourcesContent.length>=this._sources.size()&&!this.sourcesContent.some((function(t){return null==t})))},h.prototype.sourceContentFor=function(t,e){if(!this.sourcesContent)return null;var n=this._findSourceIndex(t);if(n>=0)return this.sourcesContent[n];var r,s=t;if(null!=this.sourceRoot&&(s=i.relative(this.sourceRoot,s)),null!=this.sourceRoot&&(r=i.urlParse(this.sourceRoot))){var o=s.replace(/^file:\/\//,"");if("file"==r.scheme&&this._sources.has(o))return this.sourcesContent[this._sources.indexOf(o)];if((!r.path||"/"==r.path)&&this._sources.has("/"+s))return this.sourcesContent[this._sources.indexOf("/"+s)]}if(e)return null;throw new Error('"'+s+'" is not in the SourceMap.')},h.prototype.generatedPositionFor=function(t){var e=i.getArg(t,"source");if((e=this._findSourceIndex(e))<0)return{line:null,column:null,lastColumn:null};var n={source:e,originalLine:i.getArg(t,"line"),originalColumn:i.getArg(t,"column")},r=this._findMapping(n,this._originalMappings,"originalLine","originalColumn",i.compareByOriginalPositions,i.getArg(t,"bias",l.GREATEST_LOWER_BOUND));if(r>=0){var s=this._originalMappings[r];if(s.source===n.source)return{line:i.getArg(s,"generatedLine",null),column:i.getArg(s,"generatedColumn",null),lastColumn:i.getArg(s,"lastGeneratedColumn",null)}}return{line:null,column:null,lastColumn:null}},d.prototype=Object.create(l.prototype),d.prototype.constructor=l,d.prototype._version=3,Object.defineProperty(d.prototype,"sources",{get:function(){for(var t=[],e=0;e<this._sections.length;e++)for(var n=0;n<this._sections[e].consumer.sources.length;n++)t.push(this._sections[e].consumer.sources[n]);return t}}),d.prototype.originalPositionFor=function(t){var e={generatedLine:i.getArg(t,"line"),generatedColumn:i.getArg(t,"column")},n=o.search(e,this._sections,(function(t,e){var n=t.generatedLine-e.generatedOffset.generatedLine;return n||t.generatedColumn-e.generatedOffset.generatedColumn})),r=this._sections[n];return r?r.consumer.originalPositionFor({line:e.generatedLine-(r.generatedOffset.generatedLine-1),column:e.generatedColumn-(r.generatedOffset.generatedLine===e.generatedLine?r.generatedOffset.generatedColumn-1:0),bias:t.bias}):{source:null,line:null,column:null,name:null}},d.prototype.hasContentsOfAllSources=function(){return this._sections.every((function(t){return t.consumer.hasContentsOfAllSources()}))},d.prototype.sourceContentFor=function(t,e){for(var n=0;n<this._sections.length;n++){var r=this._sections[n].consumer.sourceContentFor(t,!0);if(r)return r}if(e)return null;throw new Error('"'+t+'" is not in the SourceMap.')},d.prototype.generatedPositionFor=function(t){for(var e=0;e<this._sections.length;e++){var n=this._sections[e];if(-1!==n.consumer._findSourceIndex(i.getArg(t,"source"))){var r=n.consumer.generatedPositionFor(t);if(r)return{line:r.line+(n.generatedOffset.generatedLine-1),column:r.column+(n.generatedOffset.generatedLine===r.line?n.generatedOffset.generatedColumn-1:0)}}}return{line:null,column:null}},d.prototype._parseMappings=function(t,e){this.__generatedMappings=[],this.__originalMappings=[];for(var n=0;n<this._sections.length;n++)for(var r=this._sections[n],s=r.consumer._generatedMappings,o=0;o<s.length;o++){var a=s[o],c=r.consumer._sources.at(a.source);c=i.computeSourceURL(r.consumer.sourceRoot,c,this._sourceMapURL),this._sources.add(c),c=this._sources.indexOf(c);var l=null;a.name&&(l=r.consumer._names.at(a.name),this._names.add(l),l=this._names.indexOf(l));var h={source:c,generatedLine:a.generatedLine+(r.generatedOffset.generatedLine-1),generatedColumn:a.generatedColumn+(r.generatedOffset.generatedLine===a.generatedLine?r.generatedOffset.generatedColumn-1:0),originalLine:a.originalLine,originalColumn:a.originalColumn,name:l};this.__generatedMappings.push(h),"number"==typeof h.originalLine&&this.__originalMappings.push(h)}u(this.__generatedMappings,i.compareByGeneratedPositionsDeflated),u(this.__originalMappings,i.compareByOriginalPositions)}})),s.register("bTtvB",(function(e,n){var r,i,s;function o(t,e,n,r,s,a){var c=Math.floor((e-t)/2)+t,u=s(n,r[c],!0);return 0===u?c:u>0?e-c>1?o(c,e,n,r,s,a):a==i?e<r.length?e:-1:c:c-t>1?o(t,c,n,r,s,a):a==i?c:t<0?-1:t}t(e.exports,"GREATEST_LOWER_BOUND",(function(){return r}),(function(t){return r=t})),t(e.exports,"LEAST_UPPER_BOUND",(function(){return i}),(function(t){return i=t})),t(e.exports,"search",(function(){return s}),(function(t){return s=t})),r=1,i=2,s=function(t,e,n,i){if(0===e.length)return-1;var s=o(-1,e.length,t,e,n,i||r);if(s<0)return-1;for(;s-1>=0&&0===n(e[s],e[s-1],!0);)--s;return s}})),s.register("76ffZ",(function(e,n){var r;function i(t,e,n){var r=t[e];t[e]=t[n],t[n]=r}function s(t,e,n,r){if(n<r){var o=n-1;i(t,(l=n,h=r,Math.round(l+Math.random()*(h-l))),r);for(var a=t[r],c=n;c<r;c++)e(t[c],a)<=0&&i(t,o+=1,c);i(t,o+1,c);var u=o+1;s(t,e,n,u-1),s(t,e,u+1,r)}var l,h}t(e.exports,"quickSort",(function(){return r}),(function(t){return r=t})),r=function(t,e){s(t,e,0,t.length-1)}})),s.register("Tx9qF",(function(e,n){var r;t(e.exports,"SourceNode",(function(){return r}),(function(t){return r=t}));var i=s("ic7WM").SourceMapGenerator,o=s("dQK2c"),a=/(\r?\n)/,c="$$$isSourceNode$$$";function u(t,e,n,r,i){this.children=[],this.sourceContents={},this.line=null==t?null:t,this.column=null==e?null:e,this.source=null==n?null:n,this.name=null==i?null:i,this[c]=!0,null!=r&&this.add(r)}u.fromStringWithSourceMap=function(t,e,n){var r=new u,i=t.split(a),s=0,c=function(){return t()+(t()||"");function t(){return s<i.length?i[s++]:void 0}},l=1,h=0,p=null;return e.eachMapping((function(t){if(null!==p){if(!(l<t.generatedLine)){var e=(n=i[s]||"").substr(0,t.generatedColumn-h);return i[s]=n.substr(t.generatedColumn-h),h=t.generatedColumn,d(p,e),void(p=t)}d(p,c()),l++,h=0}for(;l<t.generatedLine;)r.add(c()),l++;if(h<t.generatedColumn){var n=i[s]||"";r.add(n.substr(0,t.generatedColumn)),i[s]=n.substr(t.generatedColumn),h=t.generatedColumn}p=t}),this),s<i.length&&(p&&d(p,c()),r.add(i.splice(s).join(""))),e.sources.forEach((function(t){var i=e.sourceContentFor(t);null!=i&&(null!=n&&(t=o.join(n,t)),r.setSourceContent(t,i))})),r;function d(t,e){if(null===t||void 0===t.source)r.add(e);else{var i=n?o.join(n,t.source):t.source;r.add(new u(t.originalLine,t.originalColumn,i,e,t.name))}}},u.prototype.add=function(t){if(Array.isArray(t))t.forEach((function(t){this.add(t)}),this);else{if(!t[c]&&"string"!=typeof t)throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+t);t&&this.children.push(t)}return this},u.prototype.prepend=function(t){if(Array.isArray(t))for(var e=t.length-1;e>=0;e--)this.prepend(t[e]);else{if(!t[c]&&"string"!=typeof t)throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+t);this.children.unshift(t)}return this},u.prototype.walk=function(t){for(var e,n=0,r=this.children.length;n<r;n++)(e=this.children[n])[c]?e.walk(t):""!==e&&t(e,{source:this.source,line:this.line,column:this.column,name:this.name})},u.prototype.join=function(t){var e,n,r=this.children.length;if(r>0){for(e=[],n=0;n<r-1;n++)e.push(this.children[n]),e.push(t);e.push(this.children[n]),this.children=e}return this},u.prototype.replaceRight=function(t,e){var n=this.children[this.children.length-1];return n[c]?n.replaceRight(t,e):"string"==typeof n?this.children[this.children.length-1]=n.replace(t,e):this.children.push("".replace(t,e)),this},u.prototype.setSourceContent=function(t,e){this.sourceContents[o.toSetString(t)]=e},u.prototype.walkSourceContents=function(t){for(var e=0,n=this.children.length;e<n;e++)this.children[e][c]&&this.children[e].walkSourceContents(t);var r=Object.keys(this.sourceContents);for(e=0,n=r.length;e<n;e++)t(o.fromSetString(r[e]),this.sourceContents[r[e]])},u.prototype.toString=function(){var t="";return this.walk((function(e){t+=e})),t},u.prototype.toStringWithSourceMap=function(t){var e={code:"",line:1,column:0},n=new i(t),r=!1,s=null,o=null,a=null,c=null;return this.walk((function(t,i){e.code+=t,null!==i.source&&null!==i.line&&null!==i.column?(s===i.source&&o===i.line&&a===i.column&&c===i.name||n.addMapping({source:i.source,original:{line:i.line,column:i.column},generated:{line:e.line,column:e.column},name:i.name}),s=i.source,o=i.line,a=i.column,c=i.name,r=!0):r&&(n.addMapping({generated:{line:e.line,column:e.column}}),s=null,r=!1);for(var u=0,l=t.length;u<l;u++)10===t.charCodeAt(u)?(e.line++,e.column=0,u+1===l?(s=null,r=!1):r&&n.addMapping({source:i.source,original:{line:i.line,column:i.column},generated:{line:e.line,column:e.column},name:i.name})):e.column++})),this.walkSourceContents((function(t,e){n.setSourceContent(t,e)})),{code:e.code,map:n}},r=u})),s.register("5Io6y",(function(t,e){})),s("kyEFX").register(JSON.parse('{"5ZPII":"index.49b629f1.js","7uzI0":"catch-error-pagination.5e5b9d69.14fa01de.jpg","lk5QZ":"my_library.b070715d.css","bKMj3":"my_library.df6b147b.js"}')),s("1VOaQ");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var o,a,c,u=o={};function l(){throw new Error("setTimeout has not been defined")}function h(){throw new Error("clearTimeout has not been defined")}function p(t){if(a===setTimeout)return setTimeout(t,0);if((a===l||!a)&&setTimeout)return a=setTimeout,setTimeout(t,0);try{return a(t,0)}catch(e){try{return a.call(null,t,0)}catch(e){return a.call(this,t,0)}}}!function(){try{a="function"==typeof setTimeout?setTimeout:l}catch(t){a=l}try{c="function"==typeof clearTimeout?clearTimeout:h}catch(t){c=h}}();var d,f=[],g=!1,m=-1;function v(){g&&d&&(g=!1,d.length?f=d.concat(f):m=-1,f.length&&y())}function y(){if(!g){var t=p(v);g=!0;for(var e=f.length;e;){for(d=f,f=[];++m<e;)d&&d[m].run();m=-1,e=f.length}d=null,g=!1,function(t){if(c===clearTimeout)return clearTimeout(t);if((c===h||!c)&&clearTimeout)return c=clearTimeout,clearTimeout(t);try{c(t)}catch(e){try{return c.call(null,t)}catch(e){return c.call(this,t)}}}(t)}}function _(t,e){this.fun=t,this.array=e}function b(){}u.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];f.push(new _(t,e)),1!==f.length||g||p(y)},_.prototype.run=function(){this.fun.apply(null,this.array)},u.title="browser",u.browser=!0,u.env={},u.argv=[],u.version="",u.versions={},u.on=b,u.addListener=b,u.once=b,u.off=b,u.removeListener=b,u.removeAllListeners=b,u.emit=b,u.prependListener=b,u.prependOnceListener=b,u.listeners=function(t){return[]},u.binding=function(t){throw new Error("process.binding is not supported")},u.cwd=function(){return"/"},u.chdir=function(t){throw new Error("process.chdir is not supported")},u.umask=function(){return 0};const w=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296==(64512&i)&&r+1<t.length&&56320==(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},S={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let e=0;e<t.length;e+=3){const i=t[e],s=e+1<t.length,o=s?t[e+1]:0,a=e+2<t.length,c=a?t[e+2]:0,u=i>>2,l=(3&i)<<4|o>>4;let h=(15&o)<<2|c>>6,p=63&c;a||(p=64,s||(h=64)),r.push(n[u],n[l],n[h],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(w(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[r++]=String.fromCharCode(55296+(s>>10)),e[r++]=String.fromCharCode(56320+(1023&s))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let e=0;e<t.length;){const i=n[t.charAt(e++)],s=e<t.length?n[t.charAt(e)]:0;++e;const o=e<t.length?n[t.charAt(e)]:64;++e;const a=e<t.length?n[t.charAt(e)]:64;if(++e,null==i||null==s||null==o||null==a)throw Error();const c=i<<2|s>>4;if(r.push(c),64!==o){const t=s<<4&240|o>>2;if(r.push(t),64!==a){const t=o<<6&192|a;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},E=function(t){return function(t){const e=w(t);return S.encodeByteArray(e,!0)}(t).replace(/\./g,"")},k=function(t){try{return S.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function I(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function T(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}function C(){const t=I();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function P(){try{return"object"==typeof indexedDB}catch(t){return!1}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const A=()=>function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,O=()=>{try{return A()||(()=>{if(void 0===o||void 0===o.env)return})()||(()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=t&&k(t[1]);return e&&JSON.parse(e)})()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},L=t=>{var e,n;return null===(n=null===(e=O())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},R=t=>{const e=L(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),r]:[e.substring(0,n),r]},x=t=>{var e;return null===(e=O())||void 0===e?void 0:e[`_${t}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class N{wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[E(JSON.stringify({alg:"none",type:"JWT"})),E(JSON.stringify(s)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,D.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,U.prototype.create)}}class U{create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],s=i?function(t,e){return t.replace(j,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new D(r,o,n)}constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}}const j=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function H(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],s=e[i];if(F(n)&&F(s)){if(!H(n,s))return!1}else if(n!==s)return!1}for(const t of r)if(!n.includes(t))return!1;return!0}function F(t){return null!==t&&"object"==typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function V(t){const e={};return t.replace(/^\?/,"").split("&").forEach((t=>{if(t){const[n,r]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(r)}})),e}function z(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(t,e){const n=new W(t,e);return n.subscribe.bind(n)}class W{next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let r;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");r=function(t,e){if("object"!=typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"==typeof t[n])return!0;return!1}(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===r.next&&(r.next=G),void 0===r.error&&(r.error=G),void 0===r.complete&&(r.complete=G);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(t){}})),this.observers.push(r),i}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(t){"undefined"!=typeof console&&console.error&&console.error(t)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}}function G(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function K(t){return t&&t._delegate?t._delegate:t}class J{setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new N;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),r=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(r)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t))try{this.getOrInitializeService({instanceIdentifier:X})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t=X){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=X){return this.instances.has(t)}getOptions(t=X){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&t(s,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const r of n)try{r(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=t,r===X?void 0:r),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var r;return n||null}normalizeInstanceIdentifier(t=X){return this.component?this.component.multipleInstances?t:X:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class Q{addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Y(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}constructor(t){this.name=t,this.providers=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z=[];var tt,et;(et=tt||(tt={}))[et.DEBUG=0]="DEBUG",et[et.VERBOSE=1]="VERBOSE",et[et.INFO=2]="INFO",et[et.WARN=3]="WARN",et[et.ERROR=4]="ERROR",et[et.SILENT=5]="SILENT";const nt={debug:tt.DEBUG,verbose:tt.VERBOSE,info:tt.INFO,warn:tt.WARN,error:tt.ERROR,silent:tt.SILENT},rt=tt.INFO,it={[tt.DEBUG]:"log",[tt.VERBOSE]:"log",[tt.INFO]:"info",[tt.WARN]:"warn",[tt.ERROR]:"error"},st=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=it[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class ot{get logLevel(){return this._logLevel}set logLevel(t){if(!(t in tt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?nt[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,tt.DEBUG,...t),this._logHandler(this,tt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,tt.VERBOSE,...t),this._logHandler(this,tt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,tt.INFO,...t),this._logHandler(this,tt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,tt.WARN,...t),this._logHandler(this,tt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,tt.ERROR,...t),this._logHandler(this,tt.ERROR,...t)}constructor(t){this.name=t,this._logLevel=rt,this._logHandler=st,this._userLogHandler=null,Z.push(this)}}let at,ct;const ut=new WeakMap,lt=new WeakMap,ht=new WeakMap,pt=new WeakMap,dt=new WeakMap;let ft={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return lt.get(t);if("objectStoreNames"===e)return t.objectStoreNames||ht.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return vt(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function gt(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(ct||(ct=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(yt(this),e),vt(ut.get(this))}:function(...e){return vt(t.apply(yt(this),e))}:function(e,...n){const r=t.call(yt(this),e,...n);return ht.set(r,e.sort?e.sort():[e]),vt(r)}}function mt(t){return"function"==typeof t?gt(t):(t instanceof IDBTransaction&&function(t){if(lt.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",s),t.removeEventListener("abort",s)},i=()=>{e(),r()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",s),t.addEventListener("abort",s)}));lt.set(t,e)}(t),e=t,(at||(at=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>e instanceof t))?new Proxy(t,ft):t);var e}function vt(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",s)},i=()=>{e(vt(t.result)),r()},s=()=>{n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&ut.set(e,t)})).catch((()=>{})),dt.set(e,t),e}(t);if(pt.has(t))return pt.get(t);const e=mt(t);return e!==t&&(pt.set(t,e),dt.set(e,t)),e}const yt=t=>dt.get(t);function _t(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=vt(o);return r&&o.addEventListener("upgradeneeded",(t=>{r(vt(o.result),t.oldVersion,t.newVersion,vt(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((t=>{s&&t.addEventListener("close",(()=>s())),i&&t.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const bt=["get","getKey","getAll","getAllKeys","count"],wt=["put","add","delete","clear"],St=new Map;function Et(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(St.get(e))return St.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=wt.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!bt.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),i&&s.done]))[0]};return St.set(e,s),s}ft=(t=>({...t,get:(e,n,r)=>Et(e,n)||t.get(e,n,r),has:(e,n)=>!!Et(e,n)||t.has(e,n)}))(ft);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kt{getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}constructor(t){this.container=t}}const It="@firebase/app",Tt="0.9.0",Ct=new ot("@firebase/app"),Pt="[DEFAULT]",At={[It]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Ot=new Map,Lt=new Map;function Rt(t,e){try{t.container.addComponent(e)}catch(n){Ct.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function xt(t){const e=t.name;if(Lt.has(e))return Ct.debug(`There were multiple attempts to register component ${e}.`),!1;Lt.set(e,t);for(const e of Ot.values())Rt(e,t);return!0}function Nt(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Mt=new U("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dt{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Mt.create("app-deleted",{appName:this._name})}constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new J("app",(()=>this),"PUBLIC"))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut="9.15.0";function jt(t,e={}){let n=t;if("object"!=typeof e){e={name:e}}const r=Object.assign({name:Pt,automaticDataCollectionEnabled:!1},e),i=r.name;if("string"!=typeof i||!i)throw Mt.create("bad-app-name",{appName:String(i)});var s;if(n||(n=null===(s=O())||void 0===s?void 0:s.config),!n)throw Mt.create("no-options");const o=Ot.get(i);if(o){if(H(n,o.options)&&H(r,o.config))return o;throw Mt.create("duplicate-app",{appName:i})}const a=new Q(i);for(const t of Lt.values())a.addComponent(t);const c=new Dt(n,r,a);return Ot.set(i,c),c}function Bt(t=Pt){const e=Ot.get(t);if(!e&&t===Pt)return jt();if(!e)throw Mt.create("no-app",{appName:t});return e}function Ht(t,e,n){var r;let i=null!==(r=At[t])&&void 0!==r?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const t=[`Unable to register library "${i}" with version "${e}":`];return s&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void Ct.warn(t.join(" "))}xt(new J(`${i}-version`,(()=>({library:i,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ft="firebase-heartbeat-store";let $t=null;function Vt(){return $t||($t=_t("firebase-heartbeat-database",1,{upgrade:(t,e)=>{if(0===e)t.createObjectStore(Ft)}}).catch((t=>{throw Mt.create("idb-open",{originalErrorMessage:t.message})}))),$t}async function zt(t,e){try{const n=(await Vt()).transaction(Ft,"readwrite"),r=n.objectStore(Ft);return await r.put(e,qt(t)),n.done}catch(t){if(t instanceof D)Ct.warn(t.message);else{const e=Mt.create("idb-set",{originalErrorMessage:null==t?void 0:t.message});Ct.warn(e.message)}}}function qt(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=Gt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==e&&!this._heartbeatsCache.heartbeats.some((t=>t.date===e)))return this._heartbeatsCache.heartbeats.push({date:e,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=Gt(),{heartbeatsToSend:e,unsentEntries:n}=function(t,e=1024){const n=[];let r=t.slice();for(const i of t){const t=n.find((t=>t.agent===i.agent));if(t){if(t.dates.push(i.date),Jt(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Jt(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=E(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Kt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}}function Gt(){return(new Date).toISOString().substring(0,10)}class Kt{async runIndexedDBEnvironmentCheck(){return!!P()&&new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(t){try{return(await Vt()).transaction(Ft).objectStore(Ft).get(qt(t))}catch(t){if(t instanceof D)Ct.warn(t.message);else{const e=Mt.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});Ct.warn(e.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return zt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return zt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function Jt(t){return E(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xt;Xt="",xt(new J("platform-logger",(t=>new kt(t)),"PRIVATE")),xt(new J("heartbeat",(t=>new Wt(t)),"PRIVATE")),Ht(It,Tt,Xt),Ht(It,Tt,"esm2017"),Ht("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Ht("firebase","9.15.0","app");var Yt,Qt="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n?n:"undefined"!=typeof self?self:{},Zt={},te=te||{},ee=Qt||self;function ne(){}function re(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function ie(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var se="closure_uid_"+(1e9*Math.random()>>>0),oe=0;function ae(t,e,n){return t.call.apply(t.bind,arguments)}function ce(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function ue(t,e,n){return(ue=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ae:ce).apply(null,arguments)}function le(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function he(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function pe(){this.s=this.s,this.o=this.o}pe.prototype.s=!1,pe.prototype.na=function(){var t;!this.s&&(this.s=!0,this.M(),0)&&(t=this,Object.prototype.hasOwnProperty.call(t,se)&&t[se]||(t[se]=++oe))},pe.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const de=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function fe(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function ge(t,e){for(let e=1;e<arguments.length;e++){const n=arguments[e];if(re(n)){const e=t.length||0,r=n.length||0;t.length=e+r;for(let i=0;i<r;i++)t[e+i]=n[i]}else t.push(n)}}function me(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}me.prototype.h=function(){this.defaultPrevented=!0};var ve=function(){if(!ee.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ee.addEventListener("test",ne,e),ee.removeEventListener("test",ne,e)}catch(t){}return t}();function ye(t){return/^[\s\xa0]*$/.test(t)}var _e=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function be(t,e){return t<e?-1:t>e?1:0}function we(){var t=ee.navigator;return t&&(t=t.userAgent)?t:""}function Se(t){return-1!=we().indexOf(t)}function Ee(t){return Ee[" "](t),t}Ee[" "]=ne;var ke,Ie,Te=Se("Opera"),Ce=Se("Trident")||Se("MSIE"),Pe=Se("Edge"),Ae=Pe||Ce,Oe=Se("Gecko")&&!(-1!=we().toLowerCase().indexOf("webkit")&&!Se("Edge"))&&!(Se("Trident")||Se("MSIE"))&&!Se("Edge"),Le=-1!=we().toLowerCase().indexOf("webkit")&&!Se("Edge");function Re(){var t=ee.document;return t?t.documentMode:void 0}t:{var xe="",Ne=(Ie=we(),Oe?/rv:([^\);]+)(\)|;)/.exec(Ie):Pe?/Edge\/([\d\.]+)/.exec(Ie):Ce?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Ie):Le?/WebKit\/(\S+)/.exec(Ie):Te?/(?:Version)[ \/]?(\S+)/.exec(Ie):void 0);if(Ne&&(xe=Ne?Ne[1]:""),Ce){var Me=Re();if(null!=Me&&Me>parseFloat(xe)){ke=String(Me);break t}}ke=xe}var De,Ue={};function je(){return function(t){var e=Ue;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){let t=0;const e=_e(String(ke)).split("."),n=_e("9").split("."),r=Math.max(e.length,n.length);for(let o=0;0==t&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;t=be(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||be(0==i[2].length,0==s[2].length)||be(i[2],s[2]),i=i[3],s=s[3]}while(0==t)}return 0<=t}))}if(ee.document&&Ce){var Be=Re();De=Be||(parseInt(ke,10)||void 0)}else De=void 0;var He=De;function Fe(t,e){if(me.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Oe){t:{try{Ee(e.nodeName);var i=!0;break t}catch(t){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:$e[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Fe.X.h.call(this)}}he(Fe,me);var $e={2:"touch",3:"pen",4:"mouse"};Fe.prototype.h=function(){Fe.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ve="closure_listenable_"+(1e6*Math.random()|0),ze=0;function qe(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++ze,this.ba=this.ea=!1}function We(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Ge(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Ke(t){const e={};for(const n in t)e[n]=t[n];return e}const Je="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Xe(t,e){let n,r;for(let e=1;e<arguments.length;e++){for(n in r=arguments[e],r)t[n]=r[n];for(let e=0;e<Je.length;e++)n=Je[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Ye(t){this.src=t,this.g={},this.h=0}function Qe(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],s=de(i,e);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(We(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function Ze(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}Ye.prototype.add=function(t,e,n,r,i){var s=t.toString();(t=this.g[s])||(t=this.g[s]=[],this.h++);var o=Ze(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):((e=new qe(e,this.src,s,!!r,i)).ea=n,t.push(e)),e};var tn="closure_lm_"+(1e6*Math.random()|0),en={};function nn(t,e,n,r,i){if(r&&r.once)return sn(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)nn(t,e[s],n,r,i);return null}return n=pn(n),t&&t[Ve]?t.N(e,n,ie(r)?!!r.capture:!!r,i):rn(t,e,n,!1,r,i)}function rn(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=ie(i)?!!i.capture:!!i,a=ln(t);if(a||(t[tn]=a=new Ye(t)),(n=a.add(e,n,r,o,s)).proxy)return n;if(r=function(){function t(n){return e.call(t.src,t.listener,n)}const e=un;return t}(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)ve||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(cn(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function sn(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)sn(t,e[s],n,r,i);return null}return n=pn(n),t&&t[Ve]?t.O(e,n,ie(r)?!!r.capture:!!r,i):rn(t,e,n,!0,r,i)}function on(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)on(t,e[s],n,r,i);else r=ie(r)?!!r.capture:!!r,n=pn(n),t&&t[Ve]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=Ze(s=t.g[e],n,r,i))&&(We(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=ln(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ze(e,n,r,i)),(n=-1<t?e[t]:null)&&an(n))}function an(t){if("number"!=typeof t&&t&&!t.ba){var e=t.src;if(e&&e[Ve])Qe(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(cn(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=ln(e))?(Qe(n,t),0==n.h&&(n.src=null,e[tn]=null)):We(t)}}}function cn(t){return t in en?en[t]:en[t]="on"+t}function un(t,e){if(t.ba)t=!0;else{e=new Fe(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&an(t),t=n.call(r,e)}return t}function ln(t){return(t=t[tn])instanceof Ye?t:null}var hn="__closure_events_fn_"+(1e9*Math.random()>>>0);function pn(t){return"function"==typeof t?t:(t[hn]||(t[hn]=function(e){return t.handleEvent(e)}),t[hn])}function dn(){pe.call(this),this.i=new Ye(this),this.P=this,this.I=null}function fn(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,"string"==typeof e)e=new me(e,t);else if(e instanceof me)e.target=e.target||t;else{var i=e;Xe(e=new me(r,t),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=gn(o,r,!0,e)&&i}if(i=gn(o=e.g=t,r,!0,e)&&i,i=gn(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)i=gn(o=e.g=n[s],r,!1,e)&&i}function gn(t,e,n,r){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Qe(t.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}he(dn,pe),dn.prototype[Ve]=!0,dn.prototype.removeEventListener=function(t,e,n,r){on(this,t,e,n,r)},dn.prototype.M=function(){if(dn.X.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)We(n[r]);delete e.g[t],e.h--}}this.I=null},dn.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},dn.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var mn=ee.JSON.stringify;function vn(){var t=kn;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var yn,_n=new class{get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}}((()=>new bn),(t=>t.reset()));class bn{set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}constructor(){this.next=this.g=this.h=null}}function wn(t){ee.setTimeout((()=>{throw t}),0)}function Sn(t,e){yn||function(){var t=ee.Promise.resolve(void 0);yn=function(){t.then(In)}}(),En||(yn(),En=!0),kn.add(t,e)}var En=!1,kn=new class{add(t,e){const n=_n.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}constructor(){this.h=this.g=null}};function In(){for(var t;t=vn();){try{t.h.call(t.g)}catch(t){wn(t)}var e=_n;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}En=!1}function Tn(t,e){dn.call(this),this.h=t||1,this.g=e||ee,this.j=ue(this.lb,this),this.l=Date.now()}function Cn(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}function Pn(t,e,n){if("function"==typeof t)n&&(t=ue(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=ue(t.handleEvent,t)}return 2147483647<Number(e)?-1:ee.setTimeout(t,e||0)}function An(t){t.g=Pn((()=>{t.g=null,t.i&&(t.i=!1,An(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}he(Tn,dn),(Yt=Tn.prototype).ca=!1,Yt.R=null,Yt.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),fn(this,"tick"),this.ca&&(Cn(this),this.start()))}},Yt.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Yt.M=function(){Tn.X.M.call(this),Cn(this),delete this.g};class On extends pe{l(t){this.h=arguments,this.g?this.i=!0:An(this)}M(){super.M(),this.g&&(ee.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}}function Ln(t){pe.call(this),this.h=t,this.g={}}he(Ln,pe);var Rn=[];function xn(t,e,n,r){Array.isArray(n)||(n&&(Rn[0]=n.toString()),n=Rn);for(var i=0;i<n.length;i++){var s=nn(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Nn(t){Ge(t.g,(function(t,e){this.g.hasOwnProperty(e)&&an(t)}),t),t.g={}}function Mn(){this.g=!0}function Dn(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return mn(n)}catch(t){return e}}(t,n)+(r?" "+r:"")}))}Ln.prototype.M=function(){Ln.X.M.call(this),Nn(this)},Ln.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Mn.prototype.Aa=function(){this.g=!1},Mn.prototype.info=function(){};var Un={},jn=null;function Bn(){return jn=jn||new dn}function Hn(t){me.call(this,Un.Pa,t)}function Fn(t){const e=Bn();fn(e,new Hn(e))}function $n(t,e){me.call(this,Un.STAT_EVENT,t),this.stat=e}function Vn(t){const e=Bn();fn(e,new $n(e,t))}function zn(t,e){me.call(this,Un.Qa,t),this.size=e}function qn(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return ee.setTimeout((function(){t()}),e)}Un.Pa="serverreachability",he(Hn,me),Un.STAT_EVENT="statevent",he($n,me),Un.Qa="timingevent",he(zn,me);var Wn={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Gn={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Kn(){}function Jn(t){return t.h||(t.h=t.i())}function Xn(){}Kn.prototype.h=null;var Yn,Qn={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Zn(){me.call(this,"d")}function tr(){me.call(this,"c")}function er(){}function nr(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new Ln(this),this.O=ir,t=Ae?125:void 0,this.T=new Tn(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new rr}function rr(){this.i=null,this.g="",this.h=!1}he(Zn,me),he(tr,me),he(er,Kn),er.prototype.g=function(){return new XMLHttpRequest},er.prototype.i=function(){return{}},Yn=new er;var ir=45e3,sr={},or={};function ar(t,e,n){t.K=1,t.v=Tr(wr(e)),t.s=n,t.P=!0,cr(t,null)}function cr(t,e){t.F=Date.now(),pr(t),t.A=wr(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),Br(n.i,"t",r),t.C=0,n=t.l.H,t.h=new rr,t.g=ji(t.l,n?e:null,!t.s),0<t.N&&(t.L=new On(ue(t.La,t,t.g),t.N)),xn(t.S,t.g,"readystatechange",t.ib),e=t.H?Ke(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Fn(),function(t,e,n,r,i,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.U,t.s)}function ur(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Da)}function lr(t,e,n){let r,i=!0;for(;!t.I&&t.C<n.length;){if(r=hr(t,n),r==or){4==e&&(t.o=4,Vn(14),i=!1),Dn(t.j,t.m,null,"[Incomplete Response]");break}if(r==sr){t.o=4,Vn(15),Dn(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}Dn(t.j,t.m,r,null),vr(t,r)}ur(t)&&r!=or&&r!=sr&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,Vn(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.$&&(t.$=!0,(e=t.l).g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Oi(e),e.K=!0,Vn(11))):(Dn(t.j,t.m,n,"[Invalid Chunked Response]"),mr(t),gr(t))}function hr(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?or:(n=Number(e.substring(n,r)),isNaN(n)?sr:(r+=1)+n>e.length?or:(e=e.substr(r,n),t.C=r+n,e))}function pr(t){t.V=Date.now()+t.O,dr(t,t.O)}function dr(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=qn(ue(t.gb,t),e)}function fr(t){t.B&&(ee.clearTimeout(t.B),t.B=null)}function gr(t){0==t.l.G||t.I||xi(t.l,t)}function mr(t){fr(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Cn(t.T),Nn(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function vr(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||qr(n.h,t)))if(!t.J&&qr(n.h,t)&&3==n.G){try{var r=n.Fa.g.parse(e)}catch(t){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;Ri(n),Si(n)}Ai(n),Vn(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&0==n.A&&!n.v&&(n.v=qn(ue(n.cb,n),6e3));if(1>=zr(n.h)&&n.ja){try{n.ja()}catch(t){}n.ja=void 0}}else Mi(n,11)}else if((t.J||n.g==t)&&Ri(n),!ye(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.I=u[1],n.ka=u[2];const e=u[3];null!=e&&(n.ma=e,n.j.info("VER="+n.ma));const i=u[4];null!=i&&(n.Ca=i,n.j.info("SVER="+n.Ca));const l=u[5];null!=l&&"number"==typeof l&&0<l&&(r=1.5*l,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=r.h;s.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(Wr(s,s.h),s.h=null))}if(r.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.za=t,Ir(r.F,r.D,t))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms"));var o=t;if((r=n).sa=Ui(r,r.H?r.ka:null,r.V),o.J){Gr(r.h,o);var a=o,c=r.J;c&&a.setTimeout(c),a.B&&(fr(a),pr(a)),r.g=o}else Pi(r);0<n.i.length&&ki(n)}else"stop"!=u[0]&&"close"!=u[0]||Mi(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?Mi(n,7):wi(n):"noop"!=u[0]&&n.l&&n.l.wa(u),n.A=0)}Fn()}catch(t){}}function yr(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(re(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=function(t){if(t.oa&&"function"==typeof t.oa)return t.oa();if(!t.W||"function"!=typeof t.W){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(re(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}(t),r=function(t){if(t.W&&"function"==typeof t.W)return t.W();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(re(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}(Yt=nr.prototype).setTimeout=function(t){this.O=t},Yt.ib=function(t){t=t.target;const e=this.L;e&&3==gi(t)?e.l():this.La(t)},Yt.La=function(t){try{if(t==this.g)t:{const l=gi(this.g);var e=this.g.Ea();this.g.aa();if(!(3>l)&&(3!=l||Ae||this.g&&(this.h.h||this.g.fa()||mi(this.g)))){this.I||4!=l||7==e||Fn(),fr(this);var n=this.g.aa();this.Y=n;e:if(ur(this)){var r=mi(this.g);t="";var i=r.length,s=4==gi(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){mr(this),gr(this);var o="";break e}this.h.i=new ee.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,function(t,e,n,r,i,s,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o}))}(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ye(a)){var u=a;break e}}u=null}if(!(n=u)){this.i=!1,this.o=3,Vn(12),mr(this),gr(this);break t}Dn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,vr(this,n)}this.P?(lr(this,l,o),Ae&&this.i&&3==l&&(xn(this.S,this.T,"tick",this.hb),this.T.start())):(Dn(this.j,this.m,o,null),vr(this,o)),4==l&&mr(this),this.i&&!this.I&&(4==l?xi(this.l,this):(this.i=!1,pr(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Vn(12)):(this.o=0,Vn(13)),mr(this),gr(this)}}}catch(t){}},Yt.hb=function(){if(this.g){var t=gi(this.g),e=this.g.fa();this.C<e.length&&(fr(this),lr(this,t,e),this.i&&4!=t&&pr(this))}},Yt.cancel=function(){this.I=!0,mr(this)},Yt.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.K&&(Fn(),Vn(17)),mr(this),this.o=2,gr(this)):dr(this,this.V-t)};var _r=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function br(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof br){this.h=void 0!==e?e:t.h,Sr(this,t.j),this.s=t.s,this.g=t.g,Er(this,t.m),this.l=t.l,e=t.i;var n=new Mr;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),kr(this,n),this.o=t.o}else t&&(n=String(t).match(_r))?(this.h=!!e,Sr(this,n[1]||"",!0),this.s=Cr(n[2]||""),this.g=Cr(n[3]||"",!0),Er(this,n[4]),this.l=Cr(n[5]||"",!0),kr(this,n[6]||"",!0),this.o=Cr(n[7]||"")):(this.h=!!e,this.i=new Mr(null,this.h))}function wr(t){return new br(t)}function Sr(t,e,n){t.j=n?Cr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Er(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function kr(t,e,n){e instanceof Mr?(t.i=e,function(t,e){e&&!t.j&&(Dr(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(Ur(this,e),Br(this,n,t))}),t)),t.j=e}(t.i,t.h)):(n||(e=Pr(e,xr)),t.i=new Mr(e,t.h))}function Ir(t,e,n){t.i.set(e,n)}function Tr(t){return Ir(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Cr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Pr(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,Ar),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Ar(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}br.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Pr(e,Or,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Pr(e,Or,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Pr(n,"/"==n.charAt(0)?Rr:Lr,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Pr(n,Nr)),t.join("")};var Or=/[#\/\?@]/g,Lr=/[#\?:]/g,Rr=/[#\?]/g,xr=/[#\?@]/g,Nr=/#/g;function Mr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Dr(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Ur(t,e){Dr(t),e=Hr(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function jr(t,e){return Dr(t),e=Hr(t,e),t.g.has(e)}function Br(t,e,n){Ur(t,e),0<n.length&&(t.i=null,t.g.set(Hr(t,e),fe(n)),t.h+=n.length)}function Hr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(Yt=Mr.prototype).add=function(t,e){Dr(this),this.i=null,t=Hr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},Yt.forEach=function(t,e){Dr(this),this.g.forEach((function(n,r){n.forEach((function(n){t.call(e,n,r,this)}),this)}),this)},Yt.oa=function(){Dr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let t=0;t<i.length;t++)n.push(e[r])}return n},Yt.W=function(t){Dr(this);let e=[];if("string"==typeof t)jr(this,t)&&(e=e.concat(this.g.get(Hr(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},Yt.set=function(t,e){return Dr(this),this.i=null,jr(this,t=Hr(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},Yt.get=function(t,e){return t&&0<(t=this.W(t)).length?String(t[0]):e},Yt.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Fr(t){this.l=t||$r,ee.PerformanceNavigationTiming?t=0<(t=ee.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(ee.g&&ee.g.Ga&&ee.g.Ga()&&ee.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var $r=10;function Vr(t){return!!t.h||!!t.g&&t.g.size>=t.j}function zr(t){return t.h?1:t.g?t.g.size:0}function qr(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Wr(t,e){t.g?t.g.add(e):t.h=e}function Gr(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Kr(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return fe(t.i)}function Jr(){}function Xr(){this.g=new Jr}function Yr(t,e,n){const r=n||"";try{yr(t,(function(t,n){let i=t;ie(t)&&(i=mn(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(t){throw e.push(r+"type="+encodeURIComponent("_badmap")),t}}function Qr(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(t){}}function Zr(t){this.l=t.ac||null,this.j=t.jb||!1}function ti(t,e){dn.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=ei,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Fr.prototype.cancel=function(){if(this.i=Kr(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},Jr.prototype.stringify=function(t){return ee.JSON.stringify(t,void 0)},Jr.prototype.parse=function(t){return ee.JSON.parse(t,void 0)},he(Zr,Kn),Zr.prototype.g=function(){return new ti(this.l,this.j)},Zr.prototype.i=function(t){return function(){return t}}({}),he(ti,dn);var ei=0;function ni(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}function ri(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ii(t)}function ii(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(Yt=ti.prototype).open=function(t,e){if(this.readyState!=ei)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ii(this)},Yt.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||ee).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))},Yt.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,ri(this)),this.readyState=ei},Yt.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ii(this)),this.g&&(this.readyState=3,ii(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(void 0!==ee.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ni(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))},Yt.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ri(this):ii(this),3==this.readyState&&ni(this)}},Yt.Va=function(t){this.g&&(this.response=this.responseText=t,ri(this))},Yt.Ua=function(t){this.g&&(this.response=t,ri(this))},Yt.ga=function(){this.g&&ri(this)},Yt.setRequestHeader=function(t,e){this.v.append(t,e)},Yt.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},Yt.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(ti.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var si=ee.JSON.parse;function oi(t){dn.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=ai,this.K=this.L=!1}he(oi,dn);var ai="",ci=/^https?$/i,ui=["POST","PUT"];function li(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,hi(t),di(t)}function hi(t){t.D||(t.D=!0,fn(t,"complete"),fn(t,"error"))}function pi(t){if(t.h&&void 0!==te&&(!t.C[1]||4!=gi(t)||2!=t.aa()))if(t.v&&4==gi(t))Pn(t.Ha,0,t);else if(fn(t,"readystatechange"),4==gi(t)){t.h=!1;try{const a=t.aa();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===a){var i=String(t.H).match(_r)[1]||null;if(!i&&ee.self&&ee.self.location){var s=ee.self.location.protocol;i=s.substr(0,s.length-1)}r=!ci.test(i?i.toLowerCase():"")}n=r}if(n)fn(t,"complete"),fn(t,"success");else{t.m=6;try{var o=2<gi(t)?t.g.statusText:""}catch(t){o=""}t.j=o+" ["+t.aa()+"]",hi(t)}}finally{di(t)}}}function di(t,e){if(t.g){fi(t);const n=t.g,r=t.C[0]?ne:null;t.g=null,t.C=null,e||fn(t,"ready");try{n.onreadystatechange=r}catch(t){}}}function fi(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(ee.clearTimeout(t.A),t.A=null)}function gi(t){return t.g?t.g.readyState:0}function mi(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case ai:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function vi(t){let e="";return Ge(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function yi(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=vi(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):Ir(t,e,n))}function _i(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function bi(t){this.Ca=0,this.i=[],this.j=new Mn,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=_i("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=_i("baseRetryDelayMs",5e3,t),this.bb=_i("retryDelaySeedMs",1e4,t),this.$a=_i("forwardChannelMaxRetries",2,t),this.ta=_i("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Fr(t&&t.concurrentRequestLimit),this.Fa=new Xr,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function wi(t){if(Ei(t),3==t.G){var e=t.U++,n=wr(t.F);Ir(n,"SID",t.I),Ir(n,"RID",e),Ir(n,"TYPE","terminate"),Ti(t,n),(e=new nr(t,t.j,e,void 0)).K=2,e.v=Tr(wr(n)),n=!1,ee.navigator&&ee.navigator.sendBeacon&&(n=ee.navigator.sendBeacon(e.v.toString(),"")),!n&&ee.Image&&((new Image).src=e.v,n=!0),n||(e.g=ji(e.l,null),e.g.da(e.v)),e.F=Date.now(),pr(e)}Di(t)}function Si(t){t.g&&(Oi(t),t.g.cancel(),t.g=null)}function Ei(t){Si(t),t.u&&(ee.clearTimeout(t.u),t.u=null),Ri(t),t.h.cancel(),t.m&&("number"==typeof t.m&&ee.clearTimeout(t.m),t.m=null)}function ki(t){Vr(t.h)||t.m||(t.m=!0,Sn(t.Ja,t),t.C=0)}function Ii(t,e){var n;n=e?e.m:t.U++;const r=wr(t.F);Ir(r,"SID",t.I),Ir(r,"RID",n),Ir(r,"AID",t.T),Ti(t,r),t.o&&t.s&&yi(r,t.o,t.s),n=new nr(t,t.j,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Ci(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Wr(t.h,n),ar(n,r,e)}function Ti(t,e){t.ia&&Ge(t.ia,(function(t,n){Ir(e,n,t)})),t.l&&yr({},(function(t,n){Ir(e,n,t)}))}function Ci(t,e,n){n=Math.min(t.i.length,n);var r=t.l?ue(t.l.Ra,t.l,t):null;t:{var i=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=e,0>n)e=Math.max(0,i[o].h-100),s=!1;else try{Yr(a,t,"req"+n+"_")}catch(t){r&&r(a)}}if(s){r=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,r}function Pi(t){t.g||t.u||(t.Z=1,Sn(t.Ia,t),t.A=0)}function Ai(t){return!(t.g||t.u||3<=t.A)&&(t.Z++,t.u=qn(ue(t.Ia,t),Ni(t,t.A)),t.A++,!0)}function Oi(t){null!=t.B&&(ee.clearTimeout(t.B),t.B=null)}function Li(t){t.g=new nr(t,t.j,"rpc",t.Z),null===t.o&&(t.g.H=t.s),t.g.N=0;var e=wr(t.sa);Ir(e,"RID","rpc"),Ir(e,"SID",t.I),Ir(e,"CI",t.L?"0":"1"),Ir(e,"AID",t.T),Ir(e,"TYPE","xmlhttp"),Ti(t,e),t.o&&t.s&&yi(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Tr(wr(e)),n.s=null,n.P=!0,cr(n,t)}function Ri(t){null!=t.v&&(ee.clearTimeout(t.v),t.v=null)}function xi(t,e){var n=null;if(t.g==e){Ri(t),Oi(t),t.g=null;var r=2}else{if(!qr(t.h,e))return;n=e.D,Gr(t.h,e),r=1}if(0!=t.G)if(t.pa=e.Y,e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;fn(r=Bn(),new zn(r,n)),ki(t)}else Pi(t);else if(3==(i=e.o)||0==i&&0<t.pa||!(1==r&&function(t,e){return!(zr(t.h)>=t.h.j-(t.m?1:0)||(t.m?(t.i=e.D.concat(t.i),0):1==t.G||2==t.G||t.C>=(t.Za?0:t.$a)||(t.m=qn(ue(t.Ja,t,e),Ni(t,t.C)),t.C++,0)))}(t,e)||2==r&&Ai(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Mi(t,5);break;case 4:Mi(t,10);break;case 3:Mi(t,6);break;default:Mi(t,2)}}function Ni(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Mi(t,e){if(t.j.info("Error code "+e),2==e){var n=null;t.l&&(n=null);var r=ue(t.kb,t);n||(n=new br("//www.google.com/images/cleardot.gif"),ee.location&&"http"==ee.location.protocol||Sr(n,"https"),Tr(n)),function(t,e){const n=new Mn;if(ee.Image){const r=new Image;r.onload=le(Qr,n,r,"TestLoadImage: loaded",!0,e),r.onerror=le(Qr,n,r,"TestLoadImage: error",!1,e),r.onabort=le(Qr,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=le(Qr,n,r,"TestLoadImage: timeout",!1,e),ee.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}(n.toString(),r)}else Vn(2);t.G=0,t.l&&t.l.va(e),Di(t),Ei(t)}function Di(t){if(t.G=0,t.la=[],t.l){const e=Kr(t.h);0==e.length&&0==t.i.length||(ge(t.la,e),ge(t.la,t.i),t.h.i.length=0,fe(t.i),t.i.length=0),t.l.ua()}}function Ui(t,e,n){var r=n instanceof br?wr(n):new br(n,void 0);if(""!=r.g)e&&(r.g=e+"."+r.g),Er(r,r.m);else{var i=ee.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new br(null,void 0);r&&Sr(s,r),e&&(s.g=e),i&&Er(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&Ir(r,n,e),Ir(r,"VER",t.ma),Ti(t,r),r}function ji(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Da&&!t.ra?new oi(new Zr({jb:!0})):new oi(t.ra)).Ka(t.H),e}function Bi(){}function Hi(){if(Ce&&!(10<=Number(He)))throw Error("Environmental error: no available transport.")}function Fi(t,e){dn.call(this),this.g=new bi(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!ye(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ye(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new zi(this)}function $i(t){Zn.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Vi(){tr.call(this),this.status=1}function zi(t){this.g=t}(Yt=oi.prototype).Ka=function(t){this.L=t},Yt.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Yn.g(),this.C=this.u?Jn(this.u):Jn(Yn),this.g.onreadystatechange=ue(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void li(this,t)}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const t of r.keys())n.set(t,r.get(t))}r=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),i=ee.FormData&&t instanceof ee.FormData,!(0<=de(ui,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[t,e]of n)this.g.setRequestHeader(t,e);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{fi(this),0<this.B&&((this.K=function(t){return Ce&&je()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ue(this.qa,this)):this.A=Pn(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){li(this,t)}},Yt.qa=function(){void 0!==te&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,fn(this,"timeout"),this.abort(8))},Yt.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,fn(this,"complete"),fn(this,"abort"),di(this))},Yt.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),di(this,!0)),oi.X.M.call(this)},Yt.Ha=function(){this.s||(this.F||this.v||this.l?pi(this):this.fb())},Yt.fb=function(){pi(this)},Yt.aa=function(){try{return 2<gi(this)?this.g.status:-1}catch(t){return-1}},Yt.fa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},Yt.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),si(e)}},Yt.Ea=function(){return this.m},Yt.Oa=function(){return"string"==typeof this.j?this.j:String(this.j)},(Yt=bi.prototype).ma=8,Yt.G=1,Yt.Ja=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new nr(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=Ke(s),Xe(s,this.S)):s=this.S),null!==this.o||this.N||(i.H=s,s=null),this.O)t:{for(var e=0,n=0;n<this.i.length;n++){var r=this.i[n];if(void 0===(r="__data__"in r.g&&"string"==typeof(r=r.g.__data__)?r.length:void 0))break;if(4096<(e+=r)){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Ci(this,i,e),Ir(n=wr(this.F),"RID",t),Ir(n,"CVER",22),this.D&&Ir(n,"X-HTTP-Session-Id",this.D),Ti(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(vi(s)))+"&"+e:this.o&&yi(n,this.o,s)),Wr(this.h,i),this.Ya&&Ir(n,"TYPE","init"),this.O?(Ir(n,"$req",e),Ir(n,"SID","null"),i.Z=!0,ar(i,n,null)):ar(i,n,e),this.G=2}}else 3==this.G&&(t?Ii(this,t):0==this.i.length||Vr(this.h)||Ii(this))},Yt.Ia=function(){if(this.u=null,Li(this),this.$&&!(this.K||null==this.g||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=qn(ue(this.eb,this),t)}},Yt.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Vn(10),Si(this),Li(this))},Yt.cb=function(){null!=this.v&&(this.v=null,Si(this),Ai(this),Vn(19))},Yt.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Vn(2)):(this.j.info("Failed to ping google.com"),Vn(1))},(Yt=Bi.prototype).xa=function(){},Yt.wa=function(){},Yt.va=function(){},Yt.ua=function(){},Yt.Ra=function(){},Hi.prototype.g=function(t,e){return new Fi(t,e)},he(Fi,dn),Fi.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Vn(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Ui(t,null,t.V),ki(t)},Fi.prototype.close=function(){wi(this.g)},Fi.prototype.u=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.v&&((n={}).__data__=mn(t),t=n);e.i.push(new class{constructor(t,e){this.h=t,this.g=e}}(e.ab++,t)),3==e.G&&ki(e)},Fi.prototype.M=function(){this.g.l=null,delete this.j,wi(this.g),delete this.g,Fi.X.M.call(this)},he($i,Zn),he(Vi,tr),he(zi,Bi),zi.prototype.xa=function(){fn(this.g,"a")},zi.prototype.wa=function(t){fn(this.g,new $i(t))},zi.prototype.va=function(t){fn(this.g,new Vi)},zi.prototype.ua=function(){fn(this.g,"b")},Hi.prototype.createWebChannel=Hi.prototype.g,Fi.prototype.send=Fi.prototype.u,Fi.prototype.open=Fi.prototype.m,Fi.prototype.close=Fi.prototype.close,Wn.NO_ERROR=0,Wn.TIMEOUT=8,Wn.HTTP_ERROR=6,Gn.COMPLETE="complete",Xn.EventType=Qn,Qn.OPEN="a",Qn.CLOSE="b",Qn.ERROR="c",Qn.MESSAGE="d",dn.prototype.listen=dn.prototype.N,oi.prototype.listenOnce=oi.prototype.O,oi.prototype.getLastError=oi.prototype.Oa,oi.prototype.getLastErrorCode=oi.prototype.Ea,oi.prototype.getStatus=oi.prototype.aa,oi.prototype.getResponseJson=oi.prototype.Sa,oi.prototype.getResponseText=oi.prototype.fa,oi.prototype.send=oi.prototype.da,oi.prototype.setWithCredentials=oi.prototype.Ka;Zt.createWebChannelTransport=function(){return new Hi},Zt.getStatEventTarget=function(){return Bn()},Zt.ErrorCode=Wn,Zt.EventType=Gn,Zt.Event=Un,Zt.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Zt.FetchXmlHttpFactory=Zr,Zt.WebChannel=Xn,Zt.XhrIo=oi;const qi="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}constructor(t){this.uid=t}}Wi.UNAUTHENTICATED=new Wi(null),Wi.GOOGLE_CREDENTIALS=new Wi("google-credentials-uid"),Wi.FIRST_PARTY=new Wi("first-party-uid"),Wi.MOCK_USER=new Wi("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Gi="9.15.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ki=new ot("@firebase/firestore");function Ji(t,...e){if(Ki.logLevel<=tt.DEBUG){const n=e.map(Qi);Ki.debug(`Firestore (${Gi}): ${t}`,...n)}}function Xi(t,...e){if(Ki.logLevel<=tt.ERROR){const n=e.map(Qi);Ki.error(`Firestore (${Gi}): ${t}`,...n)}}function Yi(t,...e){if(Ki.logLevel<=tt.WARN){const n=e.map(Qi);Ki.warn(`Firestore (${Gi}): ${t}`,...n)}}function Qi(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(t="Unexpected state"){const e=`FIRESTORE (${Gi}) INTERNAL ASSERTION FAILED: `+t;throw Xi(e),new Error(e)}function ts(t,e){t||Zi()}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const es={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ns extends D{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class ss{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Wi.UNAUTHENTICATED)))}shutdown(){}}class os{getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}constructor(t){this.token=t,this.changeListener=null}}class as{start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new rs;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new rs,t.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},o=t=>{Ji("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Ji("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new rs)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Ji("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(ts("string"==typeof e.accessToken),new is(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return ts(null===t||"string"==typeof t),new Wi(t)}constructor(t){this.t=t,this.currentUser=Wi.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}}class cs{I(){return this.g?this.g():(ts(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}constructor(t,e,n,r){this.h=t,this.l=e,this.m=n,this.g=r,this.type="FirstParty",this.user=Wi.FIRST_PARTY,this.p=new Map}}class us{getToken(){return Promise.resolve(new cs(this.h,this.l,this.m,this.g))}start(t,e){t.enqueueRetryable((()=>e(Wi.FIRST_PARTY)))}shutdown(){}invalidateToken(){}constructor(t,e,n,r){this.h=t,this.l=e,this.m=n,this.g=r}}class ls{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class hs{start(t,e){const n=t=>{null!=t.error&&Ji("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.A;return this.A=t.token,Ji("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const r=t=>{Ji("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.T.onInit((t=>r(t))),setTimeout((()=>{if(!this.appCheck){const t=this.T.getImmediate({optional:!0});t?r(t):Ji("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(ts("string"==typeof t.token),this.A=t.token,new ls(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ps(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=ps(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function fs(t,e){return t<e?-1:t>e?1:0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gs{get length(){return this.len}isEqual(t){return 0===gs.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof gs?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}constructor(t,e,n){void 0===e?e=0:e>t.length&&Zi(),void 0===n?n=t.length-e:n>t.length-e&&Zi(),this.segments=t,this.offset=e,this.len=n}}class ms extends gs{construct(t,e,n){return new ms(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new ns(es.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new ms(e)}static emptyPath(){return new ms([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vs{static fromPath(t){return new vs(ms.fromString(t))}static fromName(t){return new vs(ms.fromString(t).popFirst(5))}static empty(){return new vs(ms.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===ms.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return ms.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new vs(new ms(t.slice()))}constructor(t){this.path=t}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}ys.UNKNOWN_ID=-1;function _s(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bs{ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ut(t),this.ct=t=>e.writeSequenceNumber(t))}}bs.at=-1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ws{constructor(t,e,n,r,i,s,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Ss{static empty(){return new Ss("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Ss&&t.projectId===this.projectId&&t.database===this.database}constructor(t,e){this.projectId=t,this.database=e||"(default)"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Es(t){return 0===t&&1/t==-1/0}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ks{static fromBase64String(t){const e=atob(t);return new ks(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new ks(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){var t;return t=this.binaryString,btoa(t)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return fs(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}constructor(t){this.binaryString=t}}ks.EMPTY_BYTE_STRING=new ks("");new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Is(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Ts(t){return"string"==typeof t?ks.fromBase64String(t):ks.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cs(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ps{insert(t,e){return new Ps(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Os.BLACK,null,null))}remove(t){return new Ps(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Os.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new As(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new As(this.root,t,this.comparator,!1)}getReverseIterator(){return new As(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new As(this.root,t,this.comparator,!0)}constructor(t,e){this.comparator=t,this.root=e||Os.EMPTY}}class As{getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}}class Os{copy(t,e,n,r,i){return new Os(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Os.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return Os.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Os.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Os.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Zi();if(this.right.isRed())throw Zi();const t=this.left.check();if(t!==this.right.check())throw Zi();return t+(this.isRed()?0:1)}constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:Os.RED,this.left=null!=r?r:Os.EMPTY,this.right=null!=i?i:Os.EMPTY,this.size=this.left.size+1+this.right.size}}Os.EMPTY=null,Os.RED=!0,Os.BLACK=!1,Os.EMPTY=new class{get key(){throw Zi()}get value(){throw Zi()}get color(){throw Zi()}get left(){throw Zi()}get right(){throw Zi()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Os(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}constructor(){this.size=0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ls{has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Rs(this.data.getIterator())}getIteratorFrom(t){return new Rs(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Ls))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Ls(this.comparator);return e.data=t,e}constructor(t){this.comparator=t,this.data=new Ps(this.comparator)}}class Rs{getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}constructor(t){this.iter=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var xs,Ns;(Ns=xs||(xs={}))[Ns.OK=0]="OK",Ns[Ns.CANCELLED=1]="CANCELLED",Ns[Ns.UNKNOWN=2]="UNKNOWN",Ns[Ns.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ns[Ns.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ns[Ns.NOT_FOUND=5]="NOT_FOUND",Ns[Ns.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ns[Ns.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ns[Ns.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ns[Ns.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ns[Ns.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ns[Ns.ABORTED=10]="ABORTED",Ns[Ns.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ns[Ns.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ns[Ns.INTERNAL=13]="INTERNAL",Ns[Ns.UNAVAILABLE=14]="UNAVAILABLE",Ns[Ns.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new Ps(vs.comparator);new Ps(vs.comparator);new Ps(vs.comparator),new Ls(vs.comparator);new Ls(fs);const Ms=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Ds=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Us=Ds;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{ue(t,e){this.ce(t,e),e.ae()}ce(t,e){if("nullValue"in t)this.he(e,5);else if("booleanValue"in t)this.he(e,10),e.le(t.booleanValue?1:0);else if("integerValue"in t)this.he(e,15),e.le(Is(t.integerValue));else if("doubleValue"in t){const n=Is(t.doubleValue);isNaN(n)?this.he(e,13):(this.he(e,15),Es(n)?e.le(0):e.le(n))}else if("timestampValue"in t){const n=t.timestampValue;this.he(e,20),"string"==typeof n?e.fe(n):(e.fe(`${n.seconds||""}`),e.le(n.nanos||0))}else if("stringValue"in t)this.de(t.stringValue,e),this._e(e);else if("bytesValue"in t)this.he(e,30),e.we(Ts(t.bytesValue)),this._e(e);else if("referenceValue"in t)this.me(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.he(e,45),e.le(n.latitude||0),e.le(n.longitude||0)}else"mapValue"in t?Cs(t)?this.he(e,Number.MAX_SAFE_INTEGER):(this.ge(t.mapValue,e),this._e(e)):"arrayValue"in t?(this.ye(t.arrayValue,e),this._e(e)):Zi()}de(t,e){this.he(e,25),this.pe(t,e)}pe(t,e){e.fe(t)}ge(t,e){const n=t.fields||{};this.he(e,55);for(const t of Object.keys(n))this.de(t,e),this.ce(n[t],e)}ye(t,e){const n=t.values||[];this.he(e,50);for(const t of n)this.ce(t,e)}me(t,e){this.he(e,37),vs.fromName(t).path.forEach((t=>{this.he(e,60),this.pe(t,e)}))}he(t,e){t.le(e)}_e(t){t.le(2)}constructor(){}}js.Ie=new js;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new Uint8Array(0);class Bs{static withCacheSize(t){return new Bs(t,Bs.DEFAULT_COLLECTION_PERCENTILE,Bs.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Bs.DEFAULT_COLLECTION_PERCENTILE=10,Bs.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Bs.DEFAULT=new Bs(41943040,Bs.DEFAULT_COLLECTION_PERCENTILE,Bs.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Bs.DISABLED=new Bs(-1,0,0);function Hs(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const e=Math.floor(this.Io+this.bo()),n=Math.max(0,Date.now()-this.Eo),r=Math.max(0,e-n);r>0&&Ji("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,(()=>(this.Eo=Date.now(),t()))),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}constructor(t,e,n=1e3,r=1.5,i=6e4){this.Hs=t,this.timerId=e,this.mo=n,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $s{static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new $s(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new ns(es.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new rs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}}function Vs(t,e){if(Xi("AsyncQueue",`${e}: ${t}`),_s(t))return new ns(es.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zs(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":Zi()}function qs(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ns(es.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=zs(t);throw new ns(es.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ws=new Map;class Gs{isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new ns(es.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new ns(es.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,r){if(!0===e&&!0===r)throw new ns(es.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{get app(){if(!this._app)throw new ns(es.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new ns(es.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Gs(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new ss;switch(t.type){case"gapi":const e=t.client;return new us(e,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new ns(es.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Ws.get(t);e&&(Ji("ComponentProvider","Removing Datastore"),Ws.delete(t),e.terminate())}(this),Promise.resolve()}constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Gs({}),this._settingsFrozen=!1}}function Js(t,e,n,r={}){var i;const s=(t=qs(t,Ks))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==e&&Yi("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=Wi.MOCK_USER;else{e=M(r.mockUserToken,null===(i=t._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new ns(es.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Wi(s)}t._authCredentials=new os(new is(e,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xs{async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ns(es.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new rs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Vs(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=Wi.UNAUTHENTICATED,this.clientId=ds.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Ji("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Ji("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}}class Ys{get isShuttingDown(){return this.qc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.zc(),this.Hc(t)}enterRestrictedMode(t){if(!this.qc){this.qc=!0,this.Qc=t||!1;const e=Hs();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Wc)}}enqueue(t){if(this.zc(),this.qc)return new Promise((()=>{}));const e=new rs;return this.Hc((()=>this.qc&&this.Qc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Lc.push(t),this.Jc())))}async Jc(){if(0!==this.Lc.length){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(t){if(!_s(t))throw t;Ji("AsyncQueue","Operation failed with retryable error: "+t)}this.Lc.length>0&&this.xo.Ro((()=>this.Jc()))}}Hc(t){const e=this.Bc.then((()=>(this.Gc=!0,t().catch((t=>{this.Kc=t,this.Gc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}(t);throw Xi("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Gc=!1,t))))));return this.Bc=e,e}enqueueAfterDelay(t,e,n){this.zc(),this.jc.indexOf(t)>-1&&(e=0);const r=$s.createAndSchedule(this,t,e,n,(t=>this.Yc(t)));return this.Uc.push(r),r}zc(){this.Kc&&Zi()}verifyOperationInProgress(){}async Xc(){let t;do{t=this.Bc,await t}while(t!==this.Bc)}Zc(t){for(const e of this.Uc)if(e.timerId===t)return!0;return!1}ta(t){return this.Xc().then((()=>{this.Uc.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.Uc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Xc()}))}ea(t){this.jc.push(t)}Yc(t){const e=this.Uc.indexOf(t);this.Uc.splice(e,1)}constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Fs(this,"async_queue_retry"),this.Wc=()=>{const t=Hs();t&&Ji("AsyncQueue","Visibility state changed to "+t.visibilityState),this.xo.Po()};const t=Hs();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Wc)}}class Qs extends Ks{_terminate(){return this._firestoreClient||Zs(this),this._firestoreClient.terminate()}constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=new Ys,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}}function Zs(t){var e;const n=t._freezeSettings(),r=function(t,e,n,r){return new ws(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Xs(t._authCredentials,t._appCheckCredentials,t._queue,r)}new RegExp("[~\\*/\\[\\]]");!function(t,e=!0){Gi=Ut,xt(new J("firestore",((t,{instanceIdentifier:n,options:r})=>{const i=t.getProvider("app").getImmediate(),s=new Qs(new as(t.getProvider("auth-internal")),new hs(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new ns(es.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ss(t.options.projectId,e)}(i,n),i);return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),Ht(qi,"3.8.0",t),Ht(qi,"3.8.0","esm2017")}();function to(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}Object.create;Object.create;function eo(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const no=eo,ro=new U("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),io=new ot("@firebase/auth");function so(t,...e){io.logLevel<=tt.ERROR&&io.error(`Auth (${Ut}): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(t,...e){throw uo(t,...e)}function ao(t,...e){return uo(t,...e)}function co(t,e,n){const r=Object.assign(Object.assign({},no()),{[e]:n});return new U("auth","Firebase",r).create(e,{appName:t.name})}function uo(t,...e){if("string"!=typeof t){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return ro.create(t,...e)}function lo(t,e,...n){if(!t)throw uo(e,...n)}function ho(t){const e="INTERNAL ASSERTION FAILED: "+t;throw so(e),new Error(e)}function po(t,e){t||ho(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fo=new Map;function go(t){po(t instanceof Function,"Expected a class definition");let e=fo.get(t);return e?(po(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,fo.set(t,e),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function mo(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function vo(){return"http:"===yo()||"https:"===yo()}function yo(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _o(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(vo()||T()||"connection"in navigator))||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bo{get(){return _o()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}constructor(t,e){this.shortDelay=t,this.longDelay=e,po(e>t,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(I())||"object"==typeof navigator&&"ReactNative"===navigator.product}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wo(t,e){po(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void ho("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void ho("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void ho("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},ko=new bo(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Io(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function To(t,e,n,r,i={}){return Co(t,i,(async()=>{let i={},s={};r&&("GET"===e?s=r:i={body:JSON.stringify(r)});const o=$(Object.assign({key:t.config.apiKey},s)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),So.fetch()(Ao(t,t.config.apiHost,n,o),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},i))}))}async function Co(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Eo),e);try{const e=new Oo(t),i=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw Lo(t,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const e=i.ok?s.errorMessage:s.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Lo(t,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw Lo(t,"email-already-in-use",s);if("USER_DISABLED"===n)throw Lo(t,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw co(t,a,o);oo(t,a)}}catch(e){if(e instanceof D)throw e;oo(t,"network-request-failed")}}async function Po(t,e,n,r,i={}){const s=await To(t,e,n,r,i);return"mfaPendingCredential"in s&&oo(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Ao(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?wo(t.config,i):`${t.config.apiScheme}://${i}`}class Oo{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(ao(this.auth,"network-request-failed"))),ko.get())}))}}function Lo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ao(t,e,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ro(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xo(t){return 1e3*Number(t)}function No(t){const[e,n,r]=t.split(".");if(void 0===e||void 0===n||void 0===r)return so("JWT malformed, contained fewer than 3 sections"),null;try{const t=k(n);return t?JSON.parse(t):(so("Failed to decode base64 JWT payload"),null)}catch(t){return so("Caught error parsing JWT payload as JSON",null==t?void 0:t.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Mo(t,e,n=!1){if(n)return e;try{return await e}catch(e){throw e instanceof D&&function({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)&&t.auth.currentUser===t&&await t.auth.signOut(),e}}class Do{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=(null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0)-Date.now()-3e5;return Math.max(0,t)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null==t?void 0:t.code)&&this.schedule(!0))}this.schedule()}constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{_initializeTime(){this.lastSignInTime=Ro(this.lastLoginAt),this.creationTime=Ro(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jo(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Mo(t,async function(t,e){return To(t,"POST","/v1/accounts:lookup",e)}(n,{idToken:r}));lo(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=(null===(e=s.providerUserInfo)||void 0===e?void 0:e.length)?s.providerUserInfo.map((t=>{var{providerId:e}=t,n=to(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=t.providerData,u=o,[...c.filter((t=>!u.some((e=>e.providerId===t.providerId)))),...u]);var c,u;const l=t.isAnonymous,h=!(t.email&&s.passwordHash||(null==a?void 0:a.length)),p=!!l&&h,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Uo(s.createdAt,s.lastLoginAt),isAnonymous:p};Object.assign(t,d)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bo{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){lo(t.idToken,"internal-error"),lo(void 0!==t.idToken,"internal-error"),lo(void 0!==t.refreshToken,"internal-error");const e="expiresIn"in t&&void 0!==t.expiresIn?Number(t.expiresIn):function(t){const e=No(t);return lo(e,"internal-error"),lo(void 0!==e.exp,"internal-error"),lo(void 0!==e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return lo(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:r,expiresIn:i}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(t,e){const n=await Co(t,{},(async()=>{const n=$({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,s=Ao(t,r,"/v1/token",`key=${i}`),o=await t._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",So.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(t,e);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:r,expirationTime:i}=e,s=new Bo;return n&&(lo("string"==typeof n,"internal-error",{appName:t}),s.refreshToken=n),r&&(lo("string"==typeof r,"internal-error",{appName:t}),s.accessToken=r),i&&(lo("number"==typeof i,"internal-error",{appName:t}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Bo,this.toJSON())}_performRefresh(){return ho("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ho(t,e){lo("string"==typeof t||void 0===t,"internal-error",{appName:e})}class Fo{async getIdToken(t){const e=await Mo(this,this.stsTokenManager.getToken(this.auth,t));return lo(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return async function(t,e=!1){const n=K(t),r=await n.getIdToken(e),i=No(r);lo(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ro(xo(i.auth_time)),issuedAtTime:Ro(xo(i.iat)),expirationTime:Ro(xo(i.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,t)}reload(){return async function(t){const e=K(t);await jo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}(this)}_assign(t){this!==t&&(lo(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new Fo(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){lo(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await jo(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Mo(this,async function(t,e){return To(t,"POST","/v1/accounts:delete",e)}(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,r,i,s,o,a,c,u;const l=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(r=e.email)&&void 0!==r?r:void 0,p=null!==(i=e.phoneNumber)&&void 0!==i?i:void 0,d=null!==(s=e.photoURL)&&void 0!==s?s:void 0,f=null!==(o=e.tenantId)&&void 0!==o?o:void 0,g=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=e.createdAt)&&void 0!==c?c:void 0,v=null!==(u=e.lastLoginAt)&&void 0!==u?u:void 0,{uid:y,emailVerified:_,isAnonymous:b,providerData:w,stsTokenManager:S}=e;lo(y&&S,t,"internal-error");const E=Bo.fromJSON(this.name,S);lo("string"==typeof y,t,"internal-error"),Ho(l,t.name),Ho(h,t.name),lo("boolean"==typeof _,t,"internal-error"),lo("boolean"==typeof b,t,"internal-error"),Ho(p,t.name),Ho(d,t.name),Ho(f,t.name),Ho(g,t.name),Ho(m,t.name),Ho(v,t.name);const k=new Fo({uid:y,auth:t,email:h,emailVerified:_,displayName:l,isAnonymous:b,photoURL:d,phoneNumber:p,tenantId:f,stsTokenManager:E,createdAt:m,lastLoginAt:v});return w&&Array.isArray(w)&&(k.providerData=w.map((t=>Object.assign({},t)))),g&&(k._redirectEventId=g),k}static async _fromIdTokenResponse(t,e,n=!1){const r=new Bo;r.updateFromServerResponse(e);const i=new Fo({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:n});return await jo(i),i}constructor(t){var{uid:e,auth:n,stsTokenManager:r}=t,i=to(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Do(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Uo(i.createdAt||void 0,i.lastLoginAt||void 0)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}constructor(){this.type="NONE",this.storage={}}}$o.type="NONE";const Vo=$o;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zo(t,e,n){return`firebase:${t}:${e}:${n}`}class qo{setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Fo._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new qo(go(Vo),t,n);const r=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let i=r[0]||go(Vo);const s=zo(n,t.config.apiKey,t.name);let o=null;for(const n of e)try{const e=await n._get(s);if(e){const r=Fo._fromJSON(t,e);n!==i&&(o=r),i=n;break}}catch(t){}const a=r.filter((t=>t._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(e.map((async t=>{if(t!==i)try{await t._remove(s)}catch(t){}}))),new qo(i,t,n)):new qo(i,t,n)}constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=zo(this.userKey,r.apiKey,i),this.fullPersistenceKey=zo("persistence",r.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wo(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Xo(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Go(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Qo(e))return"Blackberry";if(Zo(e))return"Webos";if(Ko(e))return"Safari";if((e.includes("chrome/")||Jo(e))&&!e.includes("edge/"))return"Chrome";if(Yo(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Go(t=I()){return/firefox\//i.test(t)}function Ko(t=I()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Jo(t=I()){return/crios\//i.test(t)}function Xo(t=I()){return/iemobile/i.test(t)}function Yo(t=I()){return/android/i.test(t)}function Qo(t=I()){return/blackberry/i.test(t)}function Zo(t=I()){return/webos/i.test(t)}function ta(t=I()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ea(){return C()&&10===document.documentMode}function na(t=I()){return ta(t)||Yo(t)||Zo(t)||Qo(t)||/windows phone/i.test(t)||Xo(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ra(t,e=[]){let n;switch(t){case"Browser":n=Wo(I());break;case"Worker":n=`${Wo(I())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ut}/${r}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{pushCallback(t,e){const n=e=>new Promise(((n,r)=>{try{n(t(e))}catch(t){r(t)}}));n.onAbort=e,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const n of this.queue)await n(t),n.onAbort&&e.push(n.onAbort)}catch(t){e.reverse();for(const t of e)try{t()}catch(t){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==t?void 0:t.message})}}constructor(t){this.auth=t,this.queue=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=go(e)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await qo.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(t){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUser(t){var e;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,s=null==r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(t);n&&n!==s||!(null==o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(t){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(t)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return lo(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(t){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await jo(t)}catch(t){if("auth/network-request-failed"!==(null==t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?K(t):null;return e&&lo(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&lo(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(go(t))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new U("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&go(t)||this._popupRedirectResolver;lo(e,this,"argument-error"),this.redirectPersistenceManager=await qo.create(this,[go(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,r){if(this._deleted)return()=>{};const i="function"==typeof e?e:e.next.bind(e),s=this._isInitialized?Promise.resolve():this._initializationPromise;return lo(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"==typeof e?t.addObserver(e,n,r):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return lo(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=ra(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());return n&&(e["X-Firebase-Client"]=n),e}constructor(t,e,n){this.app=t,this.heartbeatServiceProvider=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new aa(this),this.idTokenSubscription=new aa(this),this.beforeStateQueue=new ia(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ro,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=n.sdkClientVersion}}function oa(t){return K(t)}class aa{get next(){return lo(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(t){this.auth=t,this.observer=null,this.addObserver=q((t=>this.observer=t))}}function ca(t,e,n){const r=oa(t);lo(r._canInitEmulator,r,"emulator-config-failed"),lo(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(null==n?void 0:n.disableWarnings),s=ua(e),{host:o,port:a}=function(t){const e=ua(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const t=i[1];return{host:t,port:la(r.substr(t.length+1))}}{const[t,e]=r.split(":");return{host:t,port:la(e)}}}(e),c=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function t(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function ua(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function la(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}class ha{toJSON(){return ho("not implemented")}_getIdTokenResponse(t){return ho("not implemented")}_linkToIdToken(t,e){return ho("not implemented")}_getReauthenticationResolver(t){return ho("not implemented")}constructor(t,e){this.providerId=t,this.signInMethod=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pa(t,e){return To(t,"POST","/v1/accounts:update",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class da extends ha{static _fromEmailAndPassword(t,e){return new da(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new da(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t;if((null==e?void 0:e.email)&&(null==e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(t,e){return Po(t,"POST","/v1/accounts:signInWithPassword",Io(t,e))}(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(t,e){return Po(t,"POST","/v1/accounts:signInWithEmailLink",Io(t,e))}(t,{email:this._email,oobCode:this._password});default:oo(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return pa(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(t,e){return Po(t,"POST","/v1/accounts:signInWithEmailLink",Io(t,e))}(t,{idToken:e,email:this._email,oobCode:this._password});default:oo(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}constructor(t,e,n,r=null){super("password",n),this._email=t,this._password=e,this._tenantId=r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fa(t,e){return Po(t,"POST","/v1/accounts:signInWithIdp",Io(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga extends ha{static _fromParams(t){const e=new ga(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):oo("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t,{providerId:n,signInMethod:r}=e,i=to(e,["providerId","signInMethod"]);if(!n||!r)return null;const s=new ga(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(t){return fa(t,this.buildRequest())}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,fa(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,fa(t,e)}buildRequest(){const t={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=$(e)}return t}constructor(){super(...arguments),this.pendingToken=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ma={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class va extends ha{static _fromVerification(t,e){return new va({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new va({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return async function(t,e){return Po(t,"POST","/v1/accounts:signInWithPhoneNumber",Io(t,e))}(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return async function(t,e){const n=await Po(t,"POST","/v1/accounts:signInWithPhoneNumber",Io(t,e));if(n.temporaryProof)throw Lo(t,"account-exists-with-different-credential",n);return n}(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return async function(t,e){return Po(t,"POST","/v1/accounts:signInWithPhoneNumber",Io(t,Object.assign(Object.assign({},e),{operation:"REAUTH"})),ma)}(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:r}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:r}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"==typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}=t;return n||e||r||i?new va({verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}constructor(t){super("phone","phone"),this.params=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{static parseLink(t){const e=function(t){const e=V(z(t)).link,n=e?V(z(e)).deep_link_id:null,r=V(z(t)).deep_link_id;return(r?V(z(r)).link:null)||r||n||e||t}(t);try{return new ya(e)}catch(t){return null}}constructor(t){var e,n,r,i,s,o;const a=V(z(t)),c=null!==(e=a.apiKey)&&void 0!==e?e:null,u=null!==(n=a.oobCode)&&void 0!==n?n:null,l=function(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=a.mode)&&void 0!==r?r:null);lo(c&&u&&l,"argument-error"),this.apiKey=c,this.operation=l,this.code=u,this.continueUrl=null!==(i=a.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _a{static credential(t,e){return da._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=ya.parseLink(e);return lo(n,"argument-error"),da._fromEmailAndCode(t,n.code,n.tenantId)}constructor(){this.providerId=_a.PROVIDER_ID}}_a.PROVIDER_ID="password",_a.EMAIL_PASSWORD_SIGN_IN_METHOD="password",_a.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ba{setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa extends ba{addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sa extends wa{static credential(t){return ga._fromParams({providerId:Sa.PROVIDER_ID,signInMethod:Sa.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Sa.credentialFromTaggedObject(t)}static credentialFromError(t){return Sa.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Sa.credential(t.oauthAccessToken)}catch(t){return null}}constructor(){super("facebook.com")}}Sa.FACEBOOK_SIGN_IN_METHOD="facebook.com",Sa.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ea extends wa{static credential(t,e){return ga._fromParams({providerId:Ea.PROVIDER_ID,signInMethod:Ea.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Ea.credentialFromTaggedObject(t)}static credentialFromError(t){return Ea.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return Ea.credential(e,n)}catch(t){return null}}constructor(){super("google.com"),this.addScope("profile")}}Ea.GOOGLE_SIGN_IN_METHOD="google.com",Ea.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ka extends wa{static credential(t){return ga._fromParams({providerId:ka.PROVIDER_ID,signInMethod:ka.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ka.credentialFromTaggedObject(t)}static credentialFromError(t){return ka.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return ka.credential(t.oauthAccessToken)}catch(t){return null}}constructor(){super("github.com")}}ka.GITHUB_SIGN_IN_METHOD="github.com",ka.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ia extends wa{static credential(t,e){return ga._fromParams({providerId:Ia.PROVIDER_ID,signInMethod:Ia.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Ia.credentialFromTaggedObject(t)}static credentialFromError(t){return Ia.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return Ia.credential(e,n)}catch(t){return null}}constructor(){super("twitter.com")}}Ia.TWITTER_SIGN_IN_METHOD="twitter.com",Ia.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ta{static async _fromIdTokenResponse(t,e,n,r=!1){const i=await Fo._fromIdTokenResponse(t,n,r),s=Ca(n);return new Ta({user:i,providerId:s,_tokenResponse:n,operationType:e})}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const r=Ca(n);return new Ta({user:t,providerId:r,_tokenResponse:n,operationType:e})}constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}}function Ca(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pa extends D{static _fromErrorAndOperation(t,e,n,r){return new Pa(t,e,n,r)}constructor(t,e,n,r){var i;super(e.code,e.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Pa.prototype),this.customData={appName:t.name,tenantId:null!==(i=t.tenantId)&&void 0!==i?i:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}}function Aa(t,e,n,r){return("reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Pa._fromErrorAndOperation(t,n,e,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oa(t,e,n=!1){const r=await Mo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ta._forOperation(t,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function La(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Mo(t,Aa(r,i,e,t),n);lo(s.idToken,r,"internal-error");const o=No(s.idToken);lo(o,r,"internal-error");const{sub:a}=o;return lo(t.uid===a,r,"user-mismatch"),Ta._forOperation(t,i,s)}catch(t){throw"auth/user-not-found"===(null==t?void 0:t.code)&&oo(r,"user-mismatch"),t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ra(t,e,n=!1){const r="signIn",i=await Aa(t,r,e),s=await Ta._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}new WeakMap;const xa="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{_isAvailable(){try{return this.storage?(this.storage.setItem(xa,"1"),this.storage.removeItem(xa),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(t,e){this.storageRetriever=t,this.type=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma extends Na{forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),r=this.localCache[e];n!==r&&t(e,r,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(t.newValue!==r)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const r=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},i=this.storage.getItem(n);ea()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,10):r()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const t=I();return Ko(t)||ta(t)}()&&function(){try{return!(!window||window===window.top)}catch(t){return!1}}(),this.fallbackToPolling=na(),this._shouldAllowMigration=!0}}Ma.type="LOCAL";const Da=Ma;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua extends Na{_addListener(t,e){}_removeListener(t,e){}constructor(){super((()=>window.sessionStorage),"SESSION")}}Ua.type="SESSION";const ja=Ua;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ba{static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new Ba(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:r,data:i}=e.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async t=>t(e.origin,i))),a=await function(t){return Promise.all(t.map((async t=>{try{return{fulfilled:!0,value:await t}}catch(t){return{fulfilled:!1,reason:t}}})))}(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ha(t="",e=10){let n="";for(let t=0;t<e;t++)n+=Math.floor(10*Math.random());return t+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ba.receivers=[];class Fa{removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=Ha("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(e.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}constructor(t){this.target=t,this.handlers=new Set}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $a(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Va(){return void 0!==$a().WorkerGlobalScope&&"function"==typeof $a().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const za="firebaseLocalStorageDb",qa="firebaseLocalStorage",Wa="fbase_key";class Ga{toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}constructor(t){this.request=t}}function Ka(t,e){return t.transaction([qa],e?"readwrite":"readonly").objectStore(qa)}function Ja(){const t=indexedDB.open(za,1);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore(qa,{keyPath:Wa})}catch(t){n(t)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains(qa)?e(n):(n.close(),await function(){const t=indexedDB.deleteDatabase(za);return new Ga(t).toPromise()}(),e(await Ja()))}))}))}async function Xa(t,e,n){const r=Ka(t,!0).put({[Wa]:e,value:n});return new Ga(r).toPromise()}function Ya(t,e){const n=Ka(t,!0).delete(e);return new Ga(n).toPromise()}class Qa{async _openDb(){return this.db||(this.db=await Ja()),this.db}async _withRetries(t){let e=0;for(;;)try{const e=await this._openDb();return await t(e)}catch(t){if(e++>3)throw t;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Va()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ba._getInstance(Va()?self:null),this.receiver._subscribe("keyChanged",(async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)}))),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(t){return null}}(),!this.activeServiceWorker)return;this.sender=new Fa(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){var e;if(this.sender&&this.activeServiceWorker&&((null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Ja();return await Xa(t,xa,"1"),await Ya(t,xa),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>Xa(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>async function(t,e){const n=Ka(t,!1).get(e),r=await new Ga(n).toPromise();return void 0===r?null:r.value}(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>Ya(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=Ka(t,!1).getAll();return new Ga(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:r,value:i}of t)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),e.push(r));for(const t of Object.keys(this.localCache))this.localCache[t]&&!n.has(t)&&(this.notifyListeners(t,null),e.push(t));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}Qa.type="LOCAL";const Za=Qa;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tc(t){return new Promise(((e,n)=>{const r=document.createElement("script");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var i,s;r.setAttribute("src",t),r.onload=e,r.onerror=t=>{const e=ao("internal-error");e.customData=t,n(e)},r.type="text/javascript",r.charset="UTF-8",(null!==(s=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==s?s:document).appendChild(r)}))}function ec(t){return`__${t}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
ec("rcb"),new bo(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const nc="recaptcha";async function rc(t,e,n){var r;const i=await n.verify();try{let s;if(lo("string"==typeof i,t,"argument-error"),lo(n.type===nc,t,"argument-error"),s="string"==typeof e?{phoneNumber:e}:e,"session"in s){const e=s.session;if("phoneNumber"in s){lo("enroll"===e.type,t,"internal-error");const n=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(t,e){return To(t,"POST","/v2/accounts/mfaEnrollment:start",Io(t,e))}(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{lo("signin"===e.type,t,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;lo(n,t,"missing-multi-factor-info");const o=await function(t,e){return To(t,"POST","/v2/accounts/mfaSignIn:start",Io(t,e))}(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await async function(t,e){return To(t,"POST","/v1/accounts:sendVerificationCode",Io(t,e))}(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return e}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ic{verifyPhoneNumber(t,e){return rc(this.auth,t,K(e))}static credential(t,e){return va._fromVerification(t,e)}static credentialFromResult(t){const e=t;return ic.credentialFromTaggedObject(e)}static credentialFromError(t){return ic.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?va._fromTokenResponse(e,n):null}constructor(t){this.providerId=ic.PROVIDER_ID,this.auth=oa(t)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function sc(t,e){return e?go(e):(lo(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ic.PROVIDER_ID="phone",ic.PHONE_SIGN_IN_METHOD="phone";class oc extends ha{_getIdTokenResponse(t){return fa(t,this._buildIdpRequest())}_linkToIdToken(t,e){return fa(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return fa(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}constructor(t){super("custom","custom"),this.params=t}}function ac(t){return Ra(t.auth,new oc(t),t.bypassAuthState)}function cc(t){const{auth:e,user:n}=t;return lo(n,e,"internal-error"),La(n,new oc(t),t.bypassAuthState)}async function uc(t){const{auth:e,user:n}=t;return lo(n,e,"internal-error"),Oa(n,new oc(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(t){this.reject(t)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=t;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(t){this.reject(t)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return ac;case"linkViaPopup":case"linkViaRedirect":return uc;case"reauthViaPopup":case"reauthViaRedirect":return cc;default:oo(this.auth,"internal-error")}}resolve(t){po(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){po(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(t,e,n,r,i=!1){this.auth=t,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hc=new bo(2e3,1e4);class pc extends lc{async executeNotNull(){const t=await this.execute();return lo(t,this.auth,"internal-error"),t}async onExecution(){po(1===this.filter.length,"Popup operations only handle one event");const t=Ha();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(ao(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(ao(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,pc.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(ao(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(t,hc.get())};t()}constructor(t,e,n,r,i){super(t,e,r,i),this.provider=n,this.authWindow=null,this.pollId=null,pc.currentPopupAction&&pc.currentPopupAction.cancel(),pc.currentPopupAction=this}}pc.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const dc=new Map;class fc extends lc{async execute(){let t=dc.get(this.auth._key());if(!t){try{const e=await async function(t,e){const n=vc(e),r=mc(t);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(e)}catch(e){t=()=>Promise.reject(e)}dc.set(this.auth._key(),t)}return this.bypassAuthState||dc.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}}function gc(t,e){dc.set(t._key(),e)}function mc(t){return go(t._redirectPersistence)}function vc(t){return zo("pendingRedirect",t.config.apiKey,t.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yc(t,e,n=!1){const r=oa(t),i=sc(r,e),s=new fc(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}class _c{registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!function(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return wc(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!wc(t)){const r=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(ao(this.auth,r))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(bc(t))}saveEventToCache(t){this.cachedEventUids.add(bc(t)),this.lastProcessedEventTime=Date.now()}constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function bc(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function wc({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null==e?void 0:e.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Sc=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ec=/^https?/;async function kc(t){if(t.config.emulator)return;const{authorizedDomains:e}=await async function(t,e={}){return To(t,"GET","/v1/projects",e)}(t);for(const t of e)try{if(Ic(t))return}catch(t){}oo(t,"unauthorized-domain")}function Ic(t){const e=mo(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const i=new URL(t);return""===i.hostname&&""===r?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Ec.test(n))return!1;if(Sc.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tc=new bo(3e4,6e4);function Cc(){const t=$a().___jsl;if(null==t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let e=0;e<t.CP.length;e++)t.CP[e]=null}let Pc=null;function Ac(t){return Pc=Pc||function(t){return new Promise(((e,n)=>{var r,i,s;function o(){Cc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Cc(),n(ao(t,"network-request-failed"))},timeout:Tc.get()})}if(null===(i=null===(r=$a().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)e(gapi.iframes.getContext());else{if(!(null===(s=$a().gapi)||void 0===s?void 0:s.load)){const e=ec("iframefcb");return $a()[e]=()=>{gapi.load?o():n(ao(t,"network-request-failed"))},tc(`https://apis.google.com/js/api.js?onload=${e}`).catch((t=>n(t)))}o()}})).catch((t=>{throw Pc=null,t}))}(t),Pc}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc=new bo(5e3,15e3),Lc={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Rc=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function xc(t){const e=t.config;lo(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?wo(e,"emulator/auth/iframe"):`https://${t.config.authDomain}/__/auth/iframe`,r={apiKey:e.apiKey,appName:t.name,v:Ut},i=Rc.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${$(r).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Nc={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Mc{close(){if(this.window)try{this.window.close()}catch(t){}}constructor(t){this.window=t,this.associatedEvent=null}}function Dc(t,e,n,r=500,i=600){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Nc),{width:r.toString(),height:i.toString(),top:s,left:o}),u=I().toLowerCase();n&&(a=Jo(u)?"_blank":n),Go(u)&&(e=e||"http://localhost",c.scrollbars="yes");const l=Object.entries(c).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(function(t=I()){var e;return ta(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}(u)&&"_self"!==a)return function(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e||"",a),new Mc(null);const h=window.open(e||"",a,l);lo(h,t,"popup-blocked");try{h.focus()}catch(t){}return new Mc(h)}const Uc="__/auth/handler",jc="emulator/auth/handler";function Bc(t,e,n,r,i,s){lo(t.config.authDomain,t,"auth-domain-config-required"),lo(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ut,eventId:i};if(e instanceof ba){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",B(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(s||{}))o[t]=e}if(e instanceof wa){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(o.scopes=t.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const t of Object.keys(a))void 0===a[t]&&delete a[t];return`${function({config:t}){return t.emulator?wo(t,jc):`https://${t.authDomain}/${Uc}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)}?${$(a).slice(1)}`}const Hc="webStorageSupport";const Fc=class{async _openPopup(t,e,n,r){var i;po(null===(i=this.eventManagers[t._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return Dc(t,Bc(t,e,n,mo(),r),Ha())}async _openRedirect(t,e,n,r){var i;return await this._originValidation(t),i=Bc(t,e,n,mo(),r),$a().location.href=i,new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(po(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch((()=>{delete this.eventManagers[e]})),n}async initAndGetManager(t){const e=await async function(t){const e=await Ac(t),n=$a().gapi;return lo(n,t,"internal-error"),e.open({where:document.body,url:xc(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Lc,dontclear:!0},(e=>new Promise((async(n,r)=>{await e.restyle({setHideOnLeave:!1});const i=ao(t,"network-request-failed"),s=$a().setTimeout((()=>{r(i)}),Oc.get());function o(){$a().clearTimeout(s),n(e)}e.ping(o).then(o,(()=>{r(i)}))}))))}(t),n=new _c(t);return e.register("authEvent",(e=>{lo(null==e?void 0:e.authEvent,t,"invalid-auth-event");return{status:n.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(Hc,{type:Hc},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r[Hc];void 0!==i&&e(!!i),oo(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=kc(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return na()||Ko()||ta()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ja,this._completeRedirectFn=yc,this._overrideRedirectResult=gc}};var $c="@firebase/auth",Vc="0.21.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zc{getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(t)}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{t((null==e?void 0:e.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){lo(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(t){this.auth=t,this.internalListeners=new Map}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const qc=x("authIdTokenMaxAge")||300;let Wc=null;var Gc;Gc="Browser",xt(new J("auth",((t,{options:e})=>{const n=t.getProvider("app").getImmediate(),r=t.getProvider("heartbeat"),{apiKey:i,authDomain:s}=n.options;return((t,n)=>{lo(i&&!i.includes(":"),"invalid-api-key",{appName:t.name}),lo(!(null==s?void 0:s.includes(":")),"argument-error",{appName:t.name});const r={apiKey:i,authDomain:s,clientPlatform:Gc,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ra(Gc)},o=new sa(t,n,r);return function(t,e){const n=(null==e?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(go);(null==e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,null==e?void 0:e.popupRedirectResolver)}(o,e),o})(n,r)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{t.getProvider("auth-internal").initialize()}))),xt(new J("auth-internal",(t=>(t=>new zc(t))(oa(t.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),Ht($c,Vc,function(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Gc)),Ht($c,Vc,"esm2017");var Kc=s("eWCmQ");const Jc={apiKey:"AIzaSyBAxD1d6Q1iAwziX2Na8ubQZJCLhj-Pvhg",authDomain:"project-b3c7f.firebaseapp.com",databaseURL:"https://project-b3c7f-default-rtdb.europe-west1.firebasedatabase.app",projectId:"project-b3c7f",storageBucket:"project-b3c7f.appspot.com",messagingSenderId:"815844014735",appId:"1:815844014735:web:4184be206f1dcdb43b4efa"},Xc=jt(Jc),Yc=(function(t,e){const n="string"==typeof t?t:e||"(default)",r=Nt("object"==typeof t?t:Bt(),"firestore").getImmediate({identifier:n});if(!r._initialized){const t=R("firestore");t&&Js(r,...t)}}(Xc),function(t=Bt()){const e=Nt(t,"auth");if(e.isInitialized())return e.getImmediate();const n=function(t,e){const n=Nt(t,"auth");if(n.isInitialized()){const t=n.getImmediate();if(H(n.getOptions(),null!=e?e:{}))return t;oo(t,"already-initialized")}return n.initialize({options:e})}(t,{popupRedirectResolver:Fc,persistence:[Za,Da,ja]}),r=x("authTokenSyncURL");if(r){const t=(i=r,async t=>{const e=t&&await t.getIdTokenResult(),n=e&&((new Date).getTime()-Date.parse(e.issuedAtTime))/1e3;if(n&&n>qc)return;const r=null==e?void 0:e.token;Wc!==r&&(Wc=r,await fetch(i,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))});!function(t,e,n){K(t).beforeAuthStateChanged(e,n)}(n,t,(()=>t(n.currentUser))),function(t,e,n,r){K(t).onIdTokenChanged(e,n,r)}(n,(e=>t(e)))}var i;const s=L("auth");return s&&ca(n,`http://${s}`),n}(Xc));firebase.initializeApp(Jc);const Qc=document.querySelector("#header-myLibrary");Qc.addEventListener("click",(function(){null===Yc.currentUser?(Qc.removeAttribute("href"),e(Kc).Report.info("Oops","Please LOGIN In first ","Okay")):Qc.setAttribute("href","./my_library.html")})),document.getElementById("dashboard").style.display="none",document.getElementById("login").addEventListener("click",(function(){console.log("Login Btn Call"),firebase.auth().signInWithPopup(Zc).then((t=>{console.log(t.user),tu(t.user)})).catch((t=>{console.log(t)}))})),document.getElementById("logout").addEventListener("click",(function(){console.log("Logout Btn Call"),firebase.auth().signOut().then((()=>{document.getElementById("LoginScreen").style.display="block",document.getElementById("dashboard").style.display="none"})).catch((t=>{console.log(t)}))}));let Zc=new firebase.auth.GoogleAuthProvider;function tu(t){document.getElementById("userDetails").innerHTML=`\n    <img src="${t.photoURL}" class="photo_user">\n    <p class="name">${t.displayName}</p>\n  `}firebase.auth().onAuthStateChanged((t=>{t&&(document.getElementById("LoginScreen").style.display="none",document.getElementById("dashboard").style.display="flex",tu(t))}));var eu,nu=s("3ydHb"),ru=(Kc=s("eWCmQ"),{});window,
/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */
eu=function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="dist",n(n.s=10)}([function(t,e,n){t.exports=function(t,e){var n,r,i,s,o=Object.prototype.hasOwnProperty;for(i=1,s=arguments.length;i<s;i+=1)for(r in n=arguments[i])o.call(n,r)&&(t[r]=n[r]);return t}},function(t,e,n){t.exports=function(t){return void 0===t}},function(t,e,n){t.exports=function(t){return t instanceof Array}},function(t,e,n){var r=n(2),i=n(17),s=n(6);t.exports=function(t,e,n){r(t)?i(t,e,n):s(t,e,n)}},function(t,e,n){t.exports=function(t){return"string"==typeof t||t instanceof String}},function(t,e,n){t.exports=function(t){return t instanceof Function}},function(t,e,n){t.exports=function(t,e,n){var r;for(r in n=n||null,t)if(t.hasOwnProperty(r)&&!1===e.call(n,t[r],r,t))break}},function(t,e,n){var r=n(18),i=n(0);t.exports=function(t,e){var n;return e||(e=t,t=null),n=e.init||function(){},t&&r(n,t),e.hasOwnProperty("static")&&(i(n,e.static),delete e.static),i(n.prototype,e),n}},function(t,e,n){var r=n(2);t.exports=function(t,e,n){var i,s;if(n=n||0,!r(e))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(e,t,n);for(s=e.length,i=n;n>=0&&i<s;i+=1)if(e[i]===t)return i;return-1}},function(t,e,n){var r=n(29),i=n(30),s=n(5),o={capitalizeFirstLetter:function(t){return t.substring(0,1).toUpperCase()+t.substring(1,t.length)},isContained:function(t,e){return!!e&&(t===e||e.contains(t))},createElementByTemplate:function(t,e){var n=document.createElement("div"),i=s(t)?t(e):r(t,e);return n.innerHTML=i,n.firstChild},bind:function(t,e){var n,r=Array.prototype.slice;return t.bind?t.bind.apply(t,r.call(arguments,1)):(n=r.call(arguments,2),function(){return t.apply(e,n.length?n.concat(r.call(arguments)):arguments)})},sendHostName:function(){i("pagination","UA-129987462-1")}};t.exports=o},function(t,e,n){n(11),t.exports=n(12)},function(t,e,n){},function(t,e,n){var r=n(13),i=n(7),s=n(0),o=n(1),a=n(20),c=n(9),u={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},l=i({init:function(t,e){this._options=s({},u,e),this._currentPage=0,this._view=new a(t,this._options,c.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&c.sendHostName()},_setCurrentPage:function(t){this._currentPage=t||this._options.page},_getLastPage:function(){var t=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return t||1},_getPageIndex:function(t){var e;return this._options.centerAlign?(e=t-Math.floor(this._options.visiblePages/2),e=Math.max(e,1),e=Math.min(e,this._getLastPage()-this._options.visiblePages+1)):Math.ceil(t/this._options.visiblePages)},_getRelativePage:function(t){var e="prev"===t,n=this.getCurrentPage();return e?n-1:n+1},_getMorePageIndex:function(t){var e=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,r="prev"===t;return this._options.centerAlign?r?e-1:e+n:r?(e-1)*n:e*n+1},_convertToValidPage:function(t){var e=this._getLastPage();return t=Math.max(t,1),t=Math.min(t,e)},_paginate:function(t){var e=this._makeViewData(t||this._options.page);this._setCurrentPage(t),this._view.update(e)},_makeViewData:function(t){var e={},n=this._getLastPage(),r=this._getPageIndex(t),i=this._getPageIndex(n),s=this._getEdge(t);return e.leftPageNumber=s.left,e.rightPageNumber=s.right,e.prevMore=r>1,e.nextMore=r<i,e.page=t,e.currentPageIndex=t,e.lastPage=n,e.lastPageListIndex=n,e},_getEdge:function(t){var e,n,r,i=this._getLastPage(),s=this._options.visiblePages,o=this._getPageIndex(t);return this._options.centerAlign?(r=Math.floor(s/2),(n=(e=Math.max(t-r,1))+s-1)>i&&(e=Math.max(i-s+1,1),n=i)):(e=(o-1)*s+1,n=o*s,n=Math.min(n,i)),{left:e,right:n}},_onClickHandler:function(t,e){switch(t){case"first":e=1;break;case"prev":e=this._getRelativePage("prev");break;case"next":e=this._getRelativePage("next");break;case"prevMore":e=this._getMorePageIndex("prev");break;case"nextMore":e=this._getMorePageIndex("next");break;case"last":e=this._getLastPage();break;default:if(!e)return}this.movePageTo(e)},reset:function(t){o(t)&&(t=this._options.totalItems),this._options.totalItems=t,this._paginate(1)},movePageTo:function(t){t=this._convertToValidPage(t),this.invoke("beforeMove",{page:t})&&(this._paginate(t),this.fire("afterMove",{page:t}))},setTotalItems:function(t){this._options.totalItems=t},setItemsPerPage:function(t){this._options.itemsPerPage=t},getCurrentPage:function(){return this._currentPage||this._options.page}});r.mixin(l),t.exports=l},function(t,e,n){var r=n(0),i=n(14),s=n(4),o=n(16),a=n(2),c=n(5),u=n(3),l=/\s+/g;function h(){this.events=null,this.contexts=null}h.mixin=function(t){r(t.prototype,h.prototype)},h.prototype._getHandlerItem=function(t,e){var n={handler:t};return e&&(n.context=e),n},h.prototype._safeEvent=function(t){var e,n=this.events;return n||(n=this.events={}),t&&((e=n[t])||(e=[],n[t]=e),n=e),n},h.prototype._safeContext=function(){var t=this.contexts;return t||(t=this.contexts=[]),t},h.prototype._indexOfContext=function(t){for(var e=this._safeContext(),n=0;e[n];){if(t===e[n][0])return n;n+=1}return-1},h.prototype._memorizeContext=function(t){var e,n;i(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1?e[n][1]+=1:e.push([t,1]))},h.prototype._forgetContext=function(t){var e,n;i(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1&&(e[n][1]-=1,e[n][1]<=0&&e.splice(n,1)))},h.prototype._bindEvent=function(t,e,n){var r=this._safeEvent(t);this._memorizeContext(n),r.push(this._getHandlerItem(e,n))},h.prototype.on=function(t,e,n){var r=this;s(t)?(t=t.split(l),u(t,(function(t){r._bindEvent(t,e,n)}))):o(t)&&(n=e,u(t,(function(t,e){r.on(e,t,n)})))},h.prototype.once=function(t,e,n){var r=this;if(o(t))return n=e,void u(t,(function(t,e){r.once(e,t,n)}));this.on(t,(function i(){e.apply(n,arguments),r.off(t,i,n)}),n)},h.prototype._spliceMatches=function(t,e){var n,r=0;if(a(t))for(n=t.length;r<n;r+=1)!0===e(t[r])&&(t.splice(r,1),n-=1,r-=1)},h.prototype._matchHandler=function(t){var e=this;return function(n){var r=t===n.handler;return r&&e._forgetContext(n.context),r}},h.prototype._matchContext=function(t){var e=this;return function(n){var r=t===n.context;return r&&e._forgetContext(n.context),r}},h.prototype._matchHandlerAndContext=function(t,e){var n=this;return function(r){var i=t===r.handler,s=e===r.context,o=i&&s;return o&&n._forgetContext(r.context),o}},h.prototype._offByEventName=function(t,e){var n=this,r=c(e),i=n._matchHandler(e);t=t.split(l),u(t,(function(t){var e=n._safeEvent(t);r?n._spliceMatches(e,i):(u(e,(function(t){n._forgetContext(t.context)})),n.events[t]=[])}))},h.prototype._offByHandler=function(t){var e=this,n=this._matchHandler(t);u(this._safeEvent(),(function(t){e._spliceMatches(t,n)}))},h.prototype._offByObject=function(t,e){var n,r=this;this._indexOfContext(t)<0?u(t,(function(t,e){r.off(e,t)})):s(e)?(n=this._matchContext(t),r._spliceMatches(this._safeEvent(e),n)):c(e)?(n=this._matchHandlerAndContext(e,t),u(this._safeEvent(),(function(t){r._spliceMatches(t,n)}))):(n=this._matchContext(t),u(this._safeEvent(),(function(t){r._spliceMatches(t,n)})))},h.prototype.off=function(t,e){s(t)?this._offByEventName(t,e):arguments.length?c(t)?this._offByHandler(t):o(t)&&this._offByObject(t,e):(this.events={},this.contexts=[])},h.prototype.fire=function(t){this.invoke.apply(this,arguments)},h.prototype.invoke=function(t){var e,n,r,i;if(!this.hasListener(t))return!0;for(e=this._safeEvent(t),n=Array.prototype.slice.call(arguments,1),r=0;e[r];){if(!1===(i=e[r]).handler.apply(i.context,n))return!1;r+=1}return!0},h.prototype.hasListener=function(t){return this.getListenerLength(t)>0},h.prototype.getListenerLength=function(t){return this._safeEvent(t).length},t.exports=h},function(t,e,n){var r=n(1),i=n(15);t.exports=function(t){return!r(t)&&!i(t)}},function(t,e,n){t.exports=function(t){return null===t}},function(t,e,n){t.exports=function(t){return t===Object(t)}},function(t,e,n){t.exports=function(t,e,n){var r=0,i=t.length;for(n=n||null;r<i&&!1!==e.call(n,t[r],r,t);r+=1);}},function(t,e,n){var r=n(19);t.exports=function(t,e){var n=r(e.prototype);n.constructor=t,t.prototype=n}},function(t,e,n){t.exports=function(t){function e(){}return e.prototype=t,new e}},function(t,e,n){var r=n(3),i=n(7),s=n(21),o=n(22),a=n(24),c=n(25),u=n(0),l=n(4),h=n(28),p=n(9),d={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},f=["first","prev","next","last"],g=["prev","next"],m=i({init:function(t,e,n){this._containerElement=null,this._firstItemClassName=e.firstItemClassName,this._lastItemClassName=e.lastItemClassName,this._template=u({},d,e.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(t),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(n)},_setRootElement:function(t){if(l(t)?t=document.getElementById(t)||document.querySelector(t):t.jquery&&(t=t[0]),!h(t))throw new Error("The container element is invalid.");this._containerElement=t},_setMoveButtons:function(){r(f,(function(t){this._buttons[t]=p.createElementByTemplate(this._template.moveButton,{type:t})}),this)},_setDisabledMoveButtons:function(){r(f,(function(t){var e="disabled"+p.capitalizeFirstLetter(t);this._buttons[e]=p.createElementByTemplate(this._template.disabledMoveButton,{type:t})}),this)},_setMoreButtons:function(){r(g,(function(t){var e=t+"More";this._buttons[e]=p.createElementByTemplate(this._template.moreButton,{type:t})}),this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(t){var e;e=t.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(e)},_appendPrevButton:function(t){var e;e=t.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(e)},_appendNextButton:function(t){var e;e=t.currentPageIndex<t.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(e)},_appendLastButton:function(t){var e;e=t.page<t.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(e)},_appendPrevMoreButton:function(t){var e;t.prevMore&&(e=this._buttons.prevMore,c(e,this._firstItemClassName),this._getContainerElement().appendChild(e))},_appendNextMoreButton:function(t){var e;t.nextMore&&(e=this._buttons.nextMore,c(e,this._lastItemClassName),this._getContainerElement().appendChild(e))},_appendPages:function(t){var e,n,r=t.leftPageNumber,i=t.rightPageNumber;for(n=r;n<=i;n+=1)n===t.page?e=p.createElementByTemplate(this._template.currentPage,{page:n}):(e=p.createElementByTemplate(this._template.page,{page:n}),this._enabledPageElements.push(e)),n!==r||t.prevMore||c(e,this._firstItemClassName),n!==i||t.nextMore||c(e,this._lastItemClassName),this._getContainerElement().appendChild(e)},_attachClickEvent:function(t){var e=this._getContainerElement();o(e,"click",(function(e){var n,r,i=s(e);a(e),(r=this._getButtonType(i))||(n=this._getPageNumber(i)),t(r,n)}),this)},_getButtonType:function(t){var e,n=this._buttons;return r(n,(function(n,r){return!p.isContained(t,n)||(e=r,!1)}),this),e},_getPageNumber:function(t){var e,n=this._findPageElement(t);return n&&(e=parseInt(n.innerText,10)),e},_findPageElement:function(t){for(var e,n=0,r=this._enabledPageElements.length;n<r;n+=1)if(e=this._enabledPageElements[n],p.isContained(t,e))return e;return null},_empty:function(){this._enabledPageElements=[],r(this._buttons,(function(t,e){this._buttons[e]=t.cloneNode(!0)}),this),this._getContainerElement().innerHTML=""},update:function(t){this._empty(),this._appendFirstButton(t),this._appendPrevButton(t),this._appendPrevMoreButton(t),this._appendPages(t),this._appendNextMoreButton(t),this._appendNextButton(t),this._appendLastButton(t)}});t.exports=m},function(t,e,n){t.exports=function(t){return t.target||t.srcElement}},function(t,e,n){var r=n(4),i=n(3),s=n(23);function o(t,e,n,r){function o(e){n.call(r||t,e||window.event)}"addEventListener"in t?t.addEventListener(e,o):"attachEvent"in t&&t.attachEvent("on"+e,o),function(t,e,n,r){var o=s(t,e),a=!1;i(o,(function(t){return t.handler!==n||(a=!0,!1)})),a||o.push({handler:n,wrappedHandler:r})}(t,e,n,o)}t.exports=function(t,e,n,s){r(e)?i(e.split(/\s+/g),(function(e){o(t,e,n,s)})):i(e,(function(e,r){o(t,r,e,n)}))}},function(t,e,n){var r="_feEventKey";t.exports=function(t,e){var n,i=t[r];return i||(i=t[r]={}),(n=i[e])||(n=i[e]=[]),n}},function(t,e,n){t.exports=function(t){t.preventDefault?t.preventDefault():t.returnValue=!1}},function(t,e,n){var r=n(3),i=n(8),s=n(26),o=n(27);t.exports=function(t){var e,n=Array.prototype.slice.call(arguments,1),a=t.classList,c=[];a?r(n,(function(e){t.classList.add(e)})):((e=s(t))&&(n=[].concat(e.split(/\s+/),n)),r(n,(function(t){i(t,c)<0&&c.push(t)})),o(t,c))}},function(t,e,n){var r=n(1);t.exports=function(t){return t&&t.className?r(t.className.baseVal)?t.className:t.className.baseVal:""}},function(t,e,n){var r=n(2),i=n(1);t.exports=function(t,e){e=(e=r(e)?e.join(" "):e).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),i(t.className.baseVal)?t.className=e:t.className.baseVal=e}},function(t,e,n){t.exports=function(t){return"object"==typeof HTMLElement?t&&(t instanceof HTMLElement||!!t.nodeType):!(!t||!t.nodeType)}},function(t,e,n){var r=n(8),i=n(3),s=n(2),o=n(4),a=n(0),c=/{{\s?|\s?}}/g,u=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,l=/\[\s?|\s?\]/,h=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,p=/\./,d=/^["']\w+["']$/,f=/"|'/g,g=/^-?\d+\.?\d*$/,m={if:function(t,e,n){var r=function(t,e){var n=[t],r=[],s=0,o=0;return i(e,(function(t,i){0===t.indexOf("if")?s+=1:"/if"===t?s-=1:s||0!==t.indexOf("elseif")&&"else"!==t||(n.push("else"===t?["true"]:t.split(" ").slice(1)),r.push(e.slice(o,i)),o=i+1)})),r.push(e.slice(o)),{exps:n,sourcesInsideIf:r}}(t,e),s=!1,o="";return i(r.exps,(function(t,e){return(s=b(t,n))&&(o=w(r.sourcesInsideIf[e],n)),!s})),o},each:function(t,e,n){var r=b(t,n),o=s(r)?"@index":"@key",c={},u="";return i(r,(function(t,r){c[o]=r,c["@this"]=t,a(n,c),u+=w(e.slice(),n)})),u},with:function(t,e,n){var i=r("as",t),s=t[i+1],o=b(t.slice(0,i),n),c={};return c[s]=o,w(e,a(n,c))||""}},v=3==="a".split(/a/).length?function(t,e){return t.split(e)}:function(t,e){var n,r,i=[],s=0;for(e.global||(e=new RegExp(e,"g")),n=e.exec(t);null!==n;)r=n.index,i.push(t.slice(s,r)),s=r+n[0].length,n=e.exec(t);return i.push(t.slice(s)),i};function y(t,e){var n,r=e[t];return"true"===t?r=!0:"false"===t?r=!1:d.test(t)?r=t.replace(f,""):u.test(t)?r=y((n=t.split(l))[0],e)[y(n[1],e)]:h.test(t)?r=y((n=t.split(p))[0],e)[n[1]]:g.test(t)&&(r=parseFloat(t)),r}function _(t,e,n){for(var r,i,s,a,c=m[t],u=1,l=2,h=e[l];u&&o(h);)0===h.indexOf(t)?u+=1:0===h.indexOf("/"+t)&&(u-=1,r=l),h=e[l+=2];if(u)throw Error(t+" needs {{/"+t+"}} expression.");return e[0]=c(e[0].split(" ").slice(1),(i=0,s=r,(a=e.splice(i+1,s-i)).pop(),a),n),e}function b(t,e){var n=y(t[0],e);return n instanceof Function?function(t,e,n){var r=[];return i(e,(function(t){r.push(y(t,n))})),t.apply(null,r)}(n,t.slice(1),e):n}function w(t,e){for(var n,r,i,s=1,a=t[s];o(a);)r=(n=a.split(" "))[0],m[r]?(i=_(r,t.splice(s,t.length-s),e),t=t.concat(i)):t[s]=b(n,e),a=t[s+=2];return t.join("")}t.exports=function(t,e){return w(v(t,c),e)}},function(t,e,n){var r=n(1),i=n(31);t.exports=function(t,e){var n=location.hostname,s="TOAST UI "+t+" for "+n+": Statistics",o=window.localStorage.getItem(s);(r(window.tui)||!1!==window.tui.usageStatistics)&&(o&&!function(t){return(new Date).getTime()-t>6048e5}(o)||(window.localStorage.setItem(s,(new Date).getTime()),setTimeout((function(){"interactive"!==document.readyState&&"complete"!==document.readyState||i("https://www.google-analytics.com/collect",{v:1,t:"event",tid:e,cid:n,dp:n,dh:t,el:t,ec:"use"})}),1e3)))}},function(t,e,n){var r=n(6);t.exports=function(t,e){var n=document.createElement("img"),i="";return r(e,(function(t,e){i+="&"+e+"="+t})),i=i.substring(1),n.src=t+"?"+i,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n}}])},ru=eu();var iu;iu=new URL(s("kyEFX").resolve("7uzI0"),import.meta.url).toString();const su=new(0,nu.default),ou={gallery:document.querySelector(".film-cards"),searchForm:document.querySelector(".search-form"),loading:document.querySelector(".spinner-box"),pagination:document.querySelector(".tui-pagination")};let au="",cu=0;const uu=()=>{ou.gallery.innerHTML=""},lu=t=>{const e=t.map((({genre_ids:t,poster_path:e,release_date:n,title:r,vote_average:i,id:s})=>{let o=t.join(", ");return t.length>2&&(o=t[0]+", "+t[1]+", Other"),`\n      <li class="film" data-action='${s}'>\n        <div class="btn-id">\n          <button data-id='${s}' class="btn-youtube-slider">\n            <div class="overlay-btn-youtube-text" data-id='${s}'>\n              <h2 class="btn-youtube-text" data-id='${s}'>Movie Trailer</h2>\n            </div>\n          </button>\n        </div>\n        <a href="#" class="film__link">\n          <div class="film__body-img">\n            <img\n              src="${e}"\n              alt="${r}"\n              class="film__img" data-action='${s}'\n            />\n          </div>\n\n          <div class="film__informations">\n            <p class="film__name">${r}</p>\n            <p class="film__detalies">${o} | ${n}</p>\n          </div>\n        </a>\n      </li>\n      `})).join("");uu(),ou.gallery.insertAdjacentHTML("beforeend",e)};su.fetchPopularMovie(1).then((t=>{console.log(t),lu(t),cu=t[0].total_results;const n=new(e(ru))(ou.pagination,hu());lu(t),n.off("beforeMove",fu),n.on("beforeMove",fu),n.reset(),ou.pagination.classList.remove("is-hidden")})).catch((t=>console.log(t)));function hu(){return{totalItems:`${cu}`,itemsPerPage:20,visiblePages:3,page:1,centerAlign:!0,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected tui-page-btn-color">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}} custom-class-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}} custom-class-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip custom-class-{{type}}"><span class="tui-ico-ellip">...</span></a>'}}}function pu(t){const e=t.page;ou.loading.classList.remove("is-hidden"),su.fetchSearchMovie(au,e).then((t=>{lu(t)})).catch((t=>console.log(t))).finally((()=>{ou.loading.classList.add("is-hidden")}))}ou.searchForm.addEventListener("submit",(t=>{t.preventDefault();const n=t.currentTarget;ou.loading.classList.remove("is-hidden"),au=n.elements.query.value.trim(),su.fetchSearchMovie(au,1).then((t=>{if(0===t.length){return ou.pagination.classList.contains("is-hidden")||ou.pagination.classList.add("is-hidden"),e(Kc).Notify.failure("Sorry! There are no movies with this title"),n.elements.query.value="",void uu()}cu=t[0].total_results;const r=new(e(ru))(ou.pagination,hu());uu(),lu(t),r.off("beforeMove",pu),r.on("beforeMove",pu),r.reset(),ou.pagination.classList.remove("is-hidden"),n.elements.query.value=""})).catch((t=>console.log(t))).finally((()=>{ou.loading.classList.add("is-hidden")}))}));const du=`<img src="${e(iu)}"></img>`;function fu(t){const e=t.page;ou.loading.classList.remove("is-hidden"),su.fetchPopularMovie(e).then((t=>{lu(t)})).catch((t=>{uu(),ou.gallery.insertAdjacentHTML("beforeend",du)})).finally((()=>{ou.loading.classList.add("is-hidden")}))}s("3ydHb"),s("2YGUk"),s("2hTmC");var gu=s("9B8F0");const mu=document.querySelector(".spinner-box");var vu={createTrailerLink:function(t){function e(t){document.querySelector(".basicLightbox--iframe").insertAdjacentHTML("afterbegin",'<button\n        type="button"\n        class="lightbox__button"\n        data-action="close-lightbox"\n        ></button>\n    ');document.querySelector('[data-action="close-lightbox"]').addEventListener("click",(()=>t.close()))}t.forEach((t=>t.addEventListener("click",(t=>{!function(t){mu.classList.remove("is-hidden");fetch(`https://api.themoviedb.org/3/movie/${t}/videos?api_key=633bd9c8c9bc68a8c4a40449237d5fcd&language=en-US`).then((t=>t.json())).then((t=>{const n=t.results[0].key,r=gu.create(`\n  <iframe width="560" height="315" src='https://www.youtube.com/embed/${n}'frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n`);r.show(),e(r)})).catch((()=>{const t=gu.create('\n    <iframe width="560" height="315" src=\'http://www.youtube.com/embed/zwBpUdZ0lrQ\' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n      ');t.show(),e(t)})).finally((()=>{mu.classList.add("is-hidden")}))}(t.currentTarget.dataset.id)}))))}};(gu=s("9B8F0")).create('<div class="sk-chase">\n    <div class="sk-chase-dot"></div>\n    <div class="sk-chase-dot"></div>\n    <div class="sk-chase-dot"></div>\n    <div class="sk-chase-dot"></div>\n    <div class="sk-chase-dot"></div>\n    <div class="sk-chase-dot"></div>\n  </div>');
/*!
 * Glide.js v3.6.0
 * (c) 2013-2022 Jędrzej Chałubek (https://github.com/jedrzejchalubek/)
 * Released under the MIT License.
 */function yu(t){return yu="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},yu(t)}function _u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function bu(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function wu(t,e,n){return e&&bu(t.prototype,e),n&&bu(t,n),t}function Su(t){return Su=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},Su(t)}function Eu(t,e){return Eu=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},Eu(t,e)}function ku(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function Iu(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Su(t);if(e){var i=Su(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return ku(this,n)}}function Tu(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=Su(t)););return t}function Cu(){return Cu="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=Tu(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(arguments.length<3?t:n):i.value}},Cu.apply(this,arguments)}var Pu={type:"slider",startAt:0,perView:1,focusAt:0,gap:10,autoplay:!1,hoverpause:!0,keyboard:!0,bound:!1,swipeThreshold:80,dragThreshold:120,perSwipe:"",touchRatio:.5,touchAngle:45,animationDuration:400,rewind:!0,rewindDuration:800,animationTimingFunc:"cubic-bezier(.165, .840, .440, 1)",waitForTransition:!0,throttle:10,direction:"ltr",peek:0,cloningRatio:1,breakpoints:{},classes:{swipeable:"glide--swipeable",dragging:"glide--dragging",direction:{ltr:"glide--ltr",rtl:"glide--rtl"},type:{slider:"glide--slider",carousel:"glide--carousel"},slide:{clone:"glide__slide--clone",active:"glide__slide--active"},arrow:{disabled:"glide__arrow--disabled"},nav:{active:"glide__bullet--active"}}};function Au(t){console.error("[Glide warn]: ".concat(t))}function Ou(t){return parseInt(t)}function Lu(t){return"string"==typeof t}function Ru(t){var e=yu(t);return"function"===e||"object"===e&&!!t}function xu(t){return"function"==typeof t}function Nu(t){return void 0===t}function Mu(t){return t.constructor===Array}function Du(t,e,n){var r={};for(var i in e)xu(e[i])?r[i]=e[i](t,r,n):Au("Extension must be a function");for(var s in r)xu(r[s].mount)&&r[s].mount();return r}function Uu(t,e,n){Object.defineProperty(t,e,n)}function ju(t,e){var n=Object.assign({},t,e);return e.hasOwnProperty("classes")&&(n.classes=Object.assign({},t.classes,e.classes),e.classes.hasOwnProperty("direction")&&(n.classes.direction=Object.assign({},t.classes.direction,e.classes.direction)),e.classes.hasOwnProperty("type")&&(n.classes.type=Object.assign({},t.classes.type,e.classes.type)),e.classes.hasOwnProperty("slide")&&(n.classes.slide=Object.assign({},t.classes.slide,e.classes.slide)),e.classes.hasOwnProperty("arrow")&&(n.classes.arrow=Object.assign({},t.classes.arrow,e.classes.arrow)),e.classes.hasOwnProperty("nav")&&(n.classes.nav=Object.assign({},t.classes.nav,e.classes.nav))),e.hasOwnProperty("breakpoints")&&(n.breakpoints=Object.assign({},t.breakpoints,e.breakpoints)),n}var Bu=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};_u(this,t),this.events=e,this.hop=e.hasOwnProperty}return wu(t,[{key:"on",value:function(t,e){if(!Mu(t)){this.hop.call(this.events,t)||(this.events[t]=[]);var n=this.events[t].push(e)-1;return{remove:function(){delete this.events[t][n]}}}for(var r=0;r<t.length;r++)this.on(t[r],e)}},{key:"emit",value:function(t,e){if(Mu(t))for(var n=0;n<t.length;n++)this.emit(t[n],e);else this.hop.call(this.events,t)&&this.events[t].forEach((function(t){t(e||{})}))}}]),t}(),Hu=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};_u(this,t),this._c={},this._t=[],this._e=new Bu,this.disabled=!1,this.selector=e,this.settings=ju(Pu,n),this.index=this.settings.startAt}return wu(t,[{key:"mount",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._e.emit("mount.before"),Ru(t)?this._c=Du(this,t,this._e):Au("You need to provide a object on `mount()`"),this._e.emit("mount.after"),this}},{key:"mutate",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return Mu(t)?this._t=t:Au("You need to provide a array on `mutate()`"),this}},{key:"update",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.settings=ju(this.settings,t),t.hasOwnProperty("startAt")&&(this.index=t.startAt),this._e.emit("update"),this}},{key:"go",value:function(t){return this._c.Run.make(t),this}},{key:"move",value:function(t){return this._c.Transition.disable(),this._c.Move.make(t),this}},{key:"destroy",value:function(){return this._e.emit("destroy"),this}},{key:"play",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return t&&(this.settings.autoplay=t),this._e.emit("play"),this}},{key:"pause",value:function(){return this._e.emit("pause"),this}},{key:"disable",value:function(){return this.disabled=!0,this}},{key:"enable",value:function(){return this.disabled=!1,this}},{key:"on",value:function(t,e){return this._e.on(t,e),this}},{key:"isType",value:function(t){return this.settings.type===t}},{key:"settings",get:function(){return this._o},set:function(t){Ru(t)?this._o=t:Au("Options must be an `object` instance.")}},{key:"index",get:function(){return this._i},set:function(t){this._i=Ou(t)}},{key:"type",get:function(){return this.settings.type}},{key:"disabled",get:function(){return this._d},set:function(t){this._d=!!t}}]),t}();function Fu(){return(new Date).getTime()}function $u(t,e,n){var r,i,s,o,a=0;n||(n={});var c=function(){a=!1===n.leading?0:Fu(),r=null,o=t.apply(i,s),r||(i=s=null)},u=function(){var u=Fu();a||!1!==n.leading||(a=u);var l=e-(u-a);return i=this,s=arguments,l<=0||l>e?(r&&(clearTimeout(r),r=null),a=u,o=t.apply(i,s),r||(i=s=null)):r||!1===n.trailing||(r=setTimeout(c,l)),o};return u.cancel=function(){clearTimeout(r),a=0,r=i=s=null},u}var Vu={ltr:["marginLeft","marginRight"],rtl:["marginRight","marginLeft"]};function zu(t){if(t&&t.parentNode){for(var e=t.parentNode.firstChild,n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}return[]}function qu(t){return!!(t&&t instanceof window.HTMLElement)}function Wu(t){return Array.prototype.slice.call(t)}var Gu='[data-glide-el="track"]';var Ku=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};_u(this,t),this.listeners=e}return wu(t,[{key:"on",value:function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];Lu(t)&&(t=[t]);for(var i=0;i<t.length;i++)this.listeners[t[i]]=n,e.addEventListener(t[i],this.listeners[t[i]],r)}},{key:"off",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];Lu(t)&&(t=[t]);for(var r=0;r<t.length;r++)e.removeEventListener(t[r],this.listeners[t[r]],n)}},{key:"destroy",value:function(){delete this.listeners}}]),t}();var Ju=["ltr","rtl"],Xu={">":"<","<":">","=":"="};function Yu(t,e){return{modify:function(t){return e.Direction.is("rtl")?-t:t}}}function Qu(t,e){return{modify:function(t){var n=Math.floor(t/e.Sizes.slideWidth);return t+e.Gaps.value*n}}}function Zu(t,e){return{modify:function(t){return t+e.Clones.grow/2}}}function tl(t,e){return{modify:function(n){if(t.settings.focusAt>=0){var r=e.Peek.value;return Ru(r)?n-r.before:n-r}return n}}}function el(t,e){return{modify:function(n){var r=e.Gaps.value,i=e.Sizes.width,s=t.settings.focusAt,o=e.Sizes.slideWidth;return"center"===s?n-(i/2-o/2):n-o*s-r*s}}}var nl=!1;try{var rl=Object.defineProperty({},"passive",{get:function(){nl=!0}});window.addEventListener("testPassive",null,rl),window.removeEventListener("testPassive",null,rl)}catch(t){}var il=nl,sl=["touchstart","mousedown"],ol=["touchmove","mousemove"],al=["touchend","touchcancel","mouseup","mouseleave"],cl=["mousedown","mousemove","mouseup","mouseleave"];var ul='[data-glide-el^="controls"]',ll="".concat(ul,' [data-glide-dir*="<"]'),hl="".concat(ul,' [data-glide-dir*=">"]');function pl(t){return Ru(t)?(e=t,Object.keys(e).sort().reduce((function(t,n){return t[n]=e[n],t[n],t}),{})):(Au("Breakpoints option must be an object"),{});var e}var dl={Html:function(t,e,n){var r={mount:function(){this.root=t.selector,this.track=this.root.querySelector(Gu),this.collectSlides()},collectSlides:function(){this.slides=Wu(this.wrapper.children).filter((function(e){return!e.classList.contains(t.settings.classes.slide.clone)}))}};return Uu(r,"root",{get:function(){return r._r},set:function(t){Lu(t)&&(t=document.querySelector(t)),qu(t)?r._r=t:Au("Root element must be a existing Html node")}}),Uu(r,"track",{get:function(){return r._t},set:function(t){qu(t)?r._t=t:Au("Could not find track element. Please use ".concat(Gu," attribute."))}}),Uu(r,"wrapper",{get:function(){return r.track.children[0]}}),n.on("update",(function(){r.collectSlides()})),r},Translate:function(t,e,n){var r={set:function(n){var r=function(t,e,n){var r=[Qu,Zu,tl,el].concat(t._t,[Yu]);return{mutate:function(i){for(var s=0;s<r.length;s++){var o=r[s];xu(o)&&xu(o().modify)?i=o(t,e,n).modify(i):Au("Transformer should be a function that returns an object with `modify()` method")}return i}}}(t,e).mutate(n),i="translate3d(".concat(-1*r,"px, 0px, 0px)");e.Html.wrapper.style.mozTransform=i,e.Html.wrapper.style.webkitTransform=i,e.Html.wrapper.style.transform=i},remove:function(){e.Html.wrapper.style.transform=""},getStartIndex:function(){var n=e.Sizes.length,r=t.index,i=t.settings.perView;return e.Run.isOffset(">")||e.Run.isOffset("|>")?n+(r-i):(r+i)%n},getTravelDistance:function(){var n=e.Sizes.slideWidth*t.settings.perView;return e.Run.isOffset(">")||e.Run.isOffset("|>")?-1*n:n}};return n.on("move",(function(i){if(!t.isType("carousel")||!e.Run.isOffset())return r.set(i.movement);e.Transition.after((function(){n.emit("translate.jump"),r.set(e.Sizes.slideWidth*t.index)}));var s=e.Sizes.slideWidth*e.Translate.getStartIndex();return r.set(s-e.Translate.getTravelDistance())})),n.on("destroy",(function(){r.remove()})),r},Transition:function(t,e,n){var r=!1,i={compose:function(e){var n=t.settings;return r?"".concat(e," 0ms ").concat(n.animationTimingFunc):"".concat(e," ").concat(this.duration,"ms ").concat(n.animationTimingFunc)},set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"transform";e.Html.wrapper.style.transition=this.compose(t)},remove:function(){e.Html.wrapper.style.transition=""},after:function(t){setTimeout((function(){t()}),this.duration)},enable:function(){r=!1,this.set()},disable:function(){r=!0,this.set()}};return Uu(i,"duration",{get:function(){var n=t.settings;return t.isType("slider")&&e.Run.offset?n.rewindDuration:n.animationDuration}}),n.on("move",(function(){i.set()})),n.on(["build.before","resize","translate.jump"],(function(){i.disable()})),n.on("run",(function(){i.enable()})),n.on("destroy",(function(){i.remove()})),i},Direction:function(t,e,n){var r={mount:function(){this.value=t.settings.direction},resolve:function(t){var e=t.slice(0,1);return this.is("rtl")?t.split(e).join(Xu[e]):t},is:function(t){return this.value===t},addClass:function(){e.Html.root.classList.add(t.settings.classes.direction[this.value])},removeClass:function(){e.Html.root.classList.remove(t.settings.classes.direction[this.value])}};return Uu(r,"value",{get:function(){return r._v},set:function(t){Ju.indexOf(t)>-1?r._v=t:Au("Direction value must be `ltr` or `rtl`")}}),n.on(["destroy","update"],(function(){r.removeClass()})),n.on("update",(function(){r.mount()})),n.on(["build.before","update"],(function(){r.addClass()})),r},Peek:function(t,e,n){var r={mount:function(){this.value=t.settings.peek}};return Uu(r,"value",{get:function(){return r._v},set:function(t){Ru(t)?(t.before=Ou(t.before),t.after=Ou(t.after)):t=Ou(t),r._v=t}}),Uu(r,"reductor",{get:function(){var e=r.value,n=t.settings.perView;return Ru(e)?e.before/n+e.after/n:2*e/n}}),n.on(["resize","update"],(function(){r.mount()})),r},Sizes:function(t,e,n){var r={setupSlides:function(){for(var t="".concat(this.slideWidth,"px"),n=e.Html.slides,r=0;r<n.length;r++)n[r].style.width=t},setupWrapper:function(){e.Html.wrapper.style.width="".concat(this.wrapperSize,"px")},remove:function(){for(var t=e.Html.slides,n=0;n<t.length;n++)t[n].style.width="";e.Html.wrapper.style.width=""}};return Uu(r,"length",{get:function(){return e.Html.slides.length}}),Uu(r,"width",{get:function(){return e.Html.track.offsetWidth}}),Uu(r,"wrapperSize",{get:function(){return r.slideWidth*r.length+e.Gaps.grow+e.Clones.grow}}),Uu(r,"slideWidth",{get:function(){return r.width/t.settings.perView-e.Peek.reductor-e.Gaps.reductor}}),n.on(["build.before","resize","update"],(function(){r.setupSlides(),r.setupWrapper()})),n.on("destroy",(function(){r.remove()})),r},Gaps:function(t,e,n){var r={apply:function(t){for(var n=0,r=t.length;n<r;n++){var i=t[n].style,s=e.Direction.value;i[Vu[s][0]]=0!==n?"".concat(this.value/2,"px"):"",n!==t.length-1?i[Vu[s][1]]="".concat(this.value/2,"px"):i[Vu[s][1]]=""}},remove:function(t){for(var e=0,n=t.length;e<n;e++){var r=t[e].style;r.marginLeft="",r.marginRight=""}}};return Uu(r,"value",{get:function(){return Ou(t.settings.gap)}}),Uu(r,"grow",{get:function(){return r.value*e.Sizes.length}}),Uu(r,"reductor",{get:function(){var e=t.settings.perView;return r.value*(e-1)/e}}),n.on(["build.after","update"],$u((function(){r.apply(e.Html.wrapper.children)}),30)),n.on("destroy",(function(){r.remove(e.Html.wrapper.children)})),r},Move:function(t,e,n){var r={mount:function(){this._o=0},make:function(){var t=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.offset=r,n.emit("move",{movement:this.value}),e.Transition.after((function(){n.emit("move.after",{movement:t.value})}))}};return Uu(r,"offset",{get:function(){return r._o},set:function(t){r._o=Nu(t)?0:Ou(t)}}),Uu(r,"translate",{get:function(){return e.Sizes.slideWidth*t.index}}),Uu(r,"value",{get:function(){var t=this.offset,n=this.translate;return e.Direction.is("rtl")?n+t:n-t}}),n.on(["build.before","run"],(function(){r.make()})),r},Clones:function(t,e,n){var r={mount:function(){this.items=[],t.isType("carousel")&&(this.items=this.collect())},collect:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=e.Html.slides,i=t.settings,s=i.perView,o=i.classes,a=i.cloningRatio;if(0!==r.length)for(var c=+!!t.settings.peek,u=s+c+Math.round(s/2),l=r.slice(0,u).reverse(),h=r.slice(-1*u),p=0;p<Math.max(a,Math.floor(s/r.length));p++){for(var d=0;d<l.length;d++){var f=l[d].cloneNode(!0);f.classList.add(o.slide.clone),n.push(f)}for(var g=0;g<h.length;g++){var m=h[g].cloneNode(!0);m.classList.add(o.slide.clone),n.unshift(m)}}return n},append:function(){for(var t=this.items,n=e.Html,r=n.wrapper,i=n.slides,s=Math.floor(t.length/2),o=t.slice(0,s).reverse(),a=t.slice(-1*s).reverse(),c="".concat(e.Sizes.slideWidth,"px"),u=0;u<a.length;u++)r.appendChild(a[u]);for(var l=0;l<o.length;l++)r.insertBefore(o[l],i[0]);for(var h=0;h<t.length;h++)t[h].style.width=c},remove:function(){for(var t=this.items,n=0;n<t.length;n++)e.Html.wrapper.removeChild(t[n])}};return Uu(r,"grow",{get:function(){return(e.Sizes.slideWidth+e.Gaps.value)*r.items.length}}),n.on("update",(function(){r.remove(),r.mount(),r.append()})),n.on("build.before",(function(){t.isType("carousel")&&r.append()})),n.on("destroy",(function(){r.remove()})),r},Resize:function(t,e,n){var r=new Ku,i={mount:function(){this.bind()},bind:function(){r.on("resize",window,$u((function(){n.emit("resize")}),t.settings.throttle))},unbind:function(){r.off("resize",window)}};return n.on("destroy",(function(){i.unbind(),r.destroy()})),i},Build:function(t,e,n){var r={mount:function(){n.emit("build.before"),this.typeClass(),this.activeClass(),n.emit("build.after")},typeClass:function(){e.Html.root.classList.add(t.settings.classes.type[t.settings.type])},activeClass:function(){var n=t.settings.classes,r=e.Html.slides[t.index];r&&(r.classList.add(n.slide.active),zu(r).forEach((function(t){t.classList.remove(n.slide.active)})))},removeClasses:function(){var n=t.settings.classes,r=n.type,i=n.slide;e.Html.root.classList.remove(r[t.settings.type]),e.Html.slides.forEach((function(t){t.classList.remove(i.active)}))}};return n.on(["destroy","update"],(function(){r.removeClasses()})),n.on(["resize","update"],(function(){r.mount()})),n.on("move.after",(function(){r.activeClass()})),r},Run:function(t,e,n){var r={mount:function(){this._o=!1},make:function(r){var i=this;t.disabled||(!t.settings.waitForTransition||t.disable(),this.move=r,n.emit("run.before",this.move),this.calculate(),n.emit("run",this.move),e.Transition.after((function(){i.isStart()&&n.emit("run.start",i.move),i.isEnd()&&n.emit("run.end",i.move),i.isOffset()&&(i._o=!1,n.emit("run.offset",i.move)),n.emit("run.after",i.move),t.enable()})))},calculate:function(){var e=this.move,n=this.length,i=e.steps,s=e.direction,o=1;if("="===s)return t.settings.bound&&Ou(i)>n?void(t.index=n):void(t.index=i);if(">"!==s||">"!==i)if("<"!==s||"<"!==i){if("|"===s&&(o=t.settings.perView||1),">"===s||"|"===s&&">"===i){var a=function(e){var n=t.index;return t.isType("carousel")?n+e:n+(e-n%e)}(o);return a>n&&(this._o=!0),void(t.index=function(e,n){var i=r.length;if(e<=i)return e;if(t.isType("carousel"))return e-(i+1);if(t.settings.rewind)return r.isBound()&&!r.isEnd()?i:0;return r.isBound()?i:Math.floor(i/n)*n}(a,o))}if("<"===s||"|"===s&&"<"===i){var c=function(e){var n=t.index;if(t.isType("carousel"))return n-e;var r=Math.ceil(n/e);return(r-1)*e}(o);return c<0&&(this._o=!0),void(t.index=function(e,n){var i=r.length;if(e>=0)return e;if(t.isType("carousel"))return e+(i+1);if(t.settings.rewind)return r.isBound()&&r.isStart()?i:Math.floor(i/n)*n;return 0}(c,o))}Au("Invalid direction pattern [".concat(s).concat(i,"] has been used"))}else t.index=0;else t.index=n},isStart:function(){return t.index<=0},isEnd:function(){return t.index>=this.length},isOffset:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;return t?!!this._o&&("|>"===t?"|"===this.move.direction&&">"===this.move.steps:"|<"===t?"|"===this.move.direction&&"<"===this.move.steps:this.move.direction===t):this._o},isBound:function(){return t.isType("slider")&&"center"!==t.settings.focusAt&&t.settings.bound}};return Uu(r,"move",{get:function(){return this._m},set:function(t){var e=t.substr(1);this._m={direction:t.substr(0,1),steps:e?Ou(e)?Ou(e):e:0}}}),Uu(r,"length",{get:function(){var n=t.settings,r=e.Html.slides.length;return this.isBound()?r-1-(Ou(n.perView)-1)+Ou(n.focusAt):r-1}}),Uu(r,"offset",{get:function(){return this._o}}),r},Swipe:function(t,e,n){var r=new Ku,i=0,s=0,o=0,a=!1,c=!!il&&{passive:!0},u={mount:function(){this.bindSwipeStart()},start:function(e){if(!a&&!t.disabled){this.disable();var r=this.touches(e);i=null,s=Ou(r.pageX),o=Ou(r.pageY),this.bindSwipeMove(),this.bindSwipeEnd(),n.emit("swipe.start")}},move:function(r){if(!t.disabled){var a=t.settings,c=a.touchAngle,u=a.touchRatio,l=a.classes,h=this.touches(r),p=Ou(h.pageX)-s,d=Ou(h.pageY)-o,f=Math.abs(p<<2),g=Math.abs(d<<2),m=Math.sqrt(f+g),v=Math.sqrt(g);if(!(180*(i=Math.asin(v/m))/Math.PI<c))return!1;r.stopPropagation(),e.Move.make(p*parseFloat(u)),e.Html.root.classList.add(l.dragging),n.emit("swipe.move")}},end:function(r){if(!t.disabled){var o=t.settings,a=o.perSwipe,c=o.touchAngle,u=o.classes,l=this.touches(r),h=this.threshold(r),p=l.pageX-s,d=180*i/Math.PI;this.enable(),p>h&&d<c?e.Run.make(e.Direction.resolve("".concat(a,"<"))):p<-h&&d<c?e.Run.make(e.Direction.resolve("".concat(a,">"))):e.Move.make(),e.Html.root.classList.remove(u.dragging),this.unbindSwipeMove(),this.unbindSwipeEnd(),n.emit("swipe.end")}},bindSwipeStart:function(){var n=this,i=t.settings,s=i.swipeThreshold,o=i.dragThreshold;s&&r.on(sl[0],e.Html.wrapper,(function(t){n.start(t)}),c),o&&r.on(sl[1],e.Html.wrapper,(function(t){n.start(t)}),c)},unbindSwipeStart:function(){r.off(sl[0],e.Html.wrapper,c),r.off(sl[1],e.Html.wrapper,c)},bindSwipeMove:function(){var n=this;r.on(ol,e.Html.wrapper,$u((function(t){n.move(t)}),t.settings.throttle),c)},unbindSwipeMove:function(){r.off(ol,e.Html.wrapper,c)},bindSwipeEnd:function(){var t=this;r.on(al,e.Html.wrapper,(function(e){t.end(e)}))},unbindSwipeEnd:function(){r.off(al,e.Html.wrapper)},touches:function(t){return cl.indexOf(t.type)>-1?t:t.touches[0]||t.changedTouches[0]},threshold:function(e){var n=t.settings;return cl.indexOf(e.type)>-1?n.dragThreshold:n.swipeThreshold},enable:function(){return a=!1,e.Transition.enable(),this},disable:function(){return a=!0,e.Transition.disable(),this}};return n.on("build.after",(function(){e.Html.root.classList.add(t.settings.classes.swipeable)})),n.on("destroy",(function(){u.unbindSwipeStart(),u.unbindSwipeMove(),u.unbindSwipeEnd(),r.destroy()})),u},Images:function(t,e,n){var r=new Ku,i={mount:function(){this.bind()},bind:function(){r.on("dragstart",e.Html.wrapper,this.dragstart)},unbind:function(){r.off("dragstart",e.Html.wrapper)},dragstart:function(t){t.preventDefault()}};return n.on("destroy",(function(){i.unbind(),r.destroy()})),i},Anchors:function(t,e,n){var r=new Ku,i=!1,s=!1,o={mount:function(){this._a=e.Html.wrapper.querySelectorAll("a"),this.bind()},bind:function(){r.on("click",e.Html.wrapper,this.click)},unbind:function(){r.off("click",e.Html.wrapper)},click:function(t){s&&(t.stopPropagation(),t.preventDefault())},detach:function(){if(s=!0,!i){for(var t=0;t<this.items.length;t++)this.items[t].draggable=!1;i=!0}return this},attach:function(){if(s=!1,i){for(var t=0;t<this.items.length;t++)this.items[t].draggable=!0;i=!1}return this}};return Uu(o,"items",{get:function(){return o._a}}),n.on("swipe.move",(function(){o.detach()})),n.on("swipe.end",(function(){e.Transition.after((function(){o.attach()}))})),n.on("destroy",(function(){o.attach(),o.unbind(),r.destroy()})),o},Controls:function(t,e,n){var r=new Ku,i=!!il&&{passive:!0},s={mount:function(){this._n=e.Html.root.querySelectorAll('[data-glide-el="controls[nav]"]'),this._c=e.Html.root.querySelectorAll(ul),this._arrowControls={previous:e.Html.root.querySelectorAll(ll),next:e.Html.root.querySelectorAll(hl)},this.addBindings()},setActive:function(){for(var t=0;t<this._n.length;t++)this.addClass(this._n[t].children)},removeActive:function(){for(var t=0;t<this._n.length;t++)this.removeClass(this._n[t].children)},addClass:function(e){var n=t.settings,r=e[t.index];r&&r&&(r.classList.add(n.classes.nav.active),zu(r).forEach((function(t){t.classList.remove(n.classes.nav.active)})))},removeClass:function(e){var n=e[t.index];n&&n.classList.remove(t.settings.classes.nav.active)},setArrowState:function(){if(!t.settings.rewind){var n=s._arrowControls.next,r=s._arrowControls.previous;this.resetArrowState(n,r),0===t.index&&this.disableArrow(r),t.index===e.Run.length&&this.disableArrow(n)}},resetArrowState:function(){for(var e=t.settings,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];r.forEach((function(t){Wu(t).forEach((function(t){t.classList.remove(e.classes.arrow.disabled)}))}))},disableArrow:function(){for(var e=t.settings,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];r.forEach((function(t){Wu(t).forEach((function(t){t.classList.add(e.classes.arrow.disabled)}))}))},addBindings:function(){for(var t=0;t<this._c.length;t++)this.bind(this._c[t].children)},removeBindings:function(){for(var t=0;t<this._c.length;t++)this.unbind(this._c[t].children)},bind:function(t){for(var e=0;e<t.length;e++)r.on("click",t[e],this.click),r.on("touchstart",t[e],this.click,i)},unbind:function(t){for(var e=0;e<t.length;e++)r.off(["click","touchstart"],t[e])},click:function(t){il||"touchstart"!==t.type||t.preventDefault();var n=t.currentTarget.getAttribute("data-glide-dir");e.Run.make(e.Direction.resolve(n))}};return Uu(s,"items",{get:function(){return s._c}}),n.on(["mount.after","move.after"],(function(){s.setActive()})),n.on(["mount.after","run"],(function(){s.setArrowState()})),n.on("destroy",(function(){s.removeBindings(),s.removeActive(),r.destroy()})),s},Keyboard:function(t,e,n){var r=new Ku,i={mount:function(){t.settings.keyboard&&this.bind()},bind:function(){r.on("keyup",document,this.press)},unbind:function(){r.off("keyup",document)},press:function(n){var r=t.settings.perSwipe;"ArrowRight"===n.code&&e.Run.make(e.Direction.resolve("".concat(r,">"))),"ArrowLeft"===n.code&&e.Run.make(e.Direction.resolve("".concat(r,"<")))}};return n.on(["destroy","update"],(function(){i.unbind()})),n.on("update",(function(){i.mount()})),n.on("destroy",(function(){r.destroy()})),i},Autoplay:function(t,e,n){var r=new Ku,i={mount:function(){this.enable(),this.start(),t.settings.hoverpause&&this.bind()},enable:function(){this._e=!0},disable:function(){this._e=!1},start:function(){var r=this;this._e&&(this.enable(),t.settings.autoplay&&Nu(this._i)&&(this._i=setInterval((function(){r.stop(),e.Run.make(">"),r.start(),n.emit("autoplay")}),this.time)))},stop:function(){this._i=clearInterval(this._i)},bind:function(){var t=this;r.on("mouseover",e.Html.root,(function(){t._e&&t.stop()})),r.on("mouseout",e.Html.root,(function(){t._e&&t.start()}))},unbind:function(){r.off(["mouseover","mouseout"],e.Html.root)}};return Uu(i,"time",{get:function(){var n=e.Html.slides[t.index].getAttribute("data-glide-autoplay");return Ou(n||t.settings.autoplay)}}),n.on(["destroy","update"],(function(){i.unbind()})),n.on(["run.before","swipe.start","update"],(function(){i.stop()})),n.on(["pause","destroy"],(function(){i.disable(),i.stop()})),n.on(["run.after","swipe.end"],(function(){i.start()})),n.on(["play"],(function(){i.enable(),i.start()})),n.on("update",(function(){i.mount()})),n.on("destroy",(function(){r.destroy()})),i},Breakpoints:function(t,e,n){var r=new Ku,i=t.settings,s=pl(i.breakpoints),o=Object.assign({},i),a={match:function(t){if(void 0!==window.matchMedia)for(var e in t)if(t.hasOwnProperty(e)&&window.matchMedia("(max-width: ".concat(e,"px)")).matches)return t[e];return o}};return Object.assign(i,a.match(s)),r.on("resize",window,$u((function(){t.settings=ju(i,a.match(s))}),t.settings.throttle)),n.on("update",(function(){s=pl(s),o=Object.assign({},i)})),n.on("destroy",(function(){r.off("resize",window)})),a}},fl=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Eu(t,e)}(n,Hu);var e=Iu(n);function n(){return _u(this,n),e.apply(this,arguments)}return wu(n,[{key:"mount",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Cu(Su(n.prototype),"mount",this).call(this,Object.assign({},dl,t))}}]),n}(),gl={};function ml(t){return t&&t.__esModule?t:{default:t}}gl.__esModule=!0;var vl={};function yl(t){return t&&t.__esModule?t:{default:t}}function _l(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}vl.__esModule=!0;var bl,wl,Sl,El,kl,Il,Tl,Cl,Pl,Al={};function Ol(t){return t&&t.__esModule?t:{default:t}}t(Al,"__esModule",(function(){return bl}),(function(t){return bl=t})),t(Al,"HandlebarsEnvironment",(function(){return wl}),(function(t){return wl=t})),t(Al,"VERSION",(function(){return Sl}),(function(t){return Sl=t})),t(Al,"COMPILER_REVISION",(function(){return El}),(function(t){return El=t})),t(Al,"LAST_COMPATIBLE_COMPILER_REVISION",(function(){return kl}),(function(t){return kl=t})),t(Al,"REVISION_CHANGES",(function(){return Il}),(function(t){return Il=t})),t(Al,"log",(function(){return Tl}),(function(t){return Tl=t})),t(Al,"createFrame",(function(){return Cl}),(function(t){return Cl=t})),t(Al,"logger",(function(){return Pl}),(function(t){return Pl=t})),bl=!0,wl=Uh;var Ll,Rl,xl,Nl,Ml,Dl,Ul,jl,Bl,Hl,Fl,$l={};t($l,"__esModule",(function(){return Ll}),(function(t){return Ll=t})),t($l,"extend",(function(){return Rl}),(function(t){return Rl=t})),t($l,"indexOf",(function(){return xl}),(function(t){return xl=t})),t($l,"escapeExpression",(function(){return Nl}),(function(t){return Nl=t})),t($l,"isEmpty",(function(){return Ml}),(function(t){return Ml=t})),t($l,"createFrame",(function(){return Dl}),(function(t){return Dl=t})),t($l,"blockParams",(function(){return Ul}),(function(t){return Ul=t})),t($l,"appendContextPath",(function(){return jl}),(function(t){return jl=t})),t($l,"toString",(function(){return Bl}),(function(t){return Bl=t})),t($l,"isFunction",(function(){return Hl}),(function(t){return Hl=t})),t($l,"isArray",(function(){return Fl}),(function(t){return Fl=t})),Ll=!0,Rl=Gl,xl=function(t,e){for(var n=0,r=t.length;n<r;n++)if(t[n]===e)return n;return-1},Nl=function(t){if("string"!=typeof t){if(t&&t.toHTML)return t.toHTML();if(null==t)return"";if(!t)return t+"";t=""+t}return ql.test(t)?t.replace(zl,Wl):t},Ml=function(t){return!t&&0!==t||!(!Xl(t)||0!==t.length)},Dl=function(t){var e=Gl({},t);return e._parent=t,e},Ul=function(t,e){return t.path=e,t},jl=function(t,e){return(t?t+".":"")+e};var Vl={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},zl=/[&<>"'`=]/g,ql=/[&<>"'`=]/;function Wl(t){return Vl[t]}function Gl(t){for(var e=1;e<arguments.length;e++)for(var n in arguments[e])Object.prototype.hasOwnProperty.call(arguments[e],n)&&(t[n]=arguments[e][n]);return t}var Kl=Object.prototype.toString;Bl=Kl;var Jl=function(t){return"function"==typeof t};Jl(/x/)&&(Hl=Jl=function(t){return"function"==typeof t&&"[object Function]"===Kl.call(t)}),Hl=Jl;var Xl=Array.isArray||function(t){return!(!t||"object"!=typeof t)&&"[object Array]"===Kl.call(t)};Fl=Xl;var Yl={__esModule:!0},Ql=["description","fileName","lineNumber","endLineNumber","message","name","number","stack"];function Zl(t,e){var n=e&&e.loc,r=void 0,i=void 0,s=void 0,o=void 0;n&&(r=n.start.line,i=n.end.line,s=n.start.column,o=n.end.column,t+=" - "+r+":"+s);for(var a=Error.prototype.constructor.call(this,t),c=0;c<Ql.length;c++)this[Ql[c]]=a[Ql[c]];Error.captureStackTrace&&Error.captureStackTrace(this,Zl);try{n&&(this.lineNumber=r,this.endLineNumber=i,Object.defineProperty?(Object.defineProperty(this,"column",{value:s,enumerable:!0}),Object.defineProperty(this,"endColumn",{value:o,enumerable:!0})):(this.column=s,this.endColumn=o))}catch(t){}}Zl.prototype=new Error,Yl.default=Zl;var th,eh,nh=Ol(Yl=Yl.default);function rh(t){return t&&t.__esModule?t:{default:t}}th=function(t){sh.default(t),uh.default(t),ph.default(t),gh.default(t),vh.default(t),_h.default(t),Eh.default(t)},eh=function(t,e,n){t.helpers[e]&&(t.hooks[e]=t.helpers[e],n||delete t.helpers[e])};var ih={__esModule:!0,default:function(t){t.registerHelper("blockHelperMissing",(function(e,n){var r=n.inverse,i=n.fn;if(!0===e)return i(this);if(!1===e||null==e)return r(this);if(Fl(e))return e.length>0?(n.ids&&(n.ids=[n.name]),t.helpers.each(e,n)):r(this);if(n.data&&n.ids){var s=Dl(n.data);s.contextPath=jl(n.data.contextPath,n.name),n={data:s}}return i(e,n)}))}},sh=rh(ih=ih.default),oh={};oh.__esModule=!0;var ah,ch=(ah=Yl)&&ah.__esModule?ah:{default:ah};oh.default=function(t){t.registerHelper("each",(function(t,e){if(!e)throw new ch.default("Must pass iterator to #each");var r,i=e.fn,s=e.inverse,o=0,a="",c=void 0,u=void 0;function l(e,n,r){c&&(c.key=e,c.index=n,c.first=0===n,c.last=!!r,u&&(c.contextPath=u+e)),a+=i(t[e],{data:c,blockParams:Ul([t[e],e],[u+e,null])})}if(e.data&&e.ids&&(u=jl(e.data.contextPath,e.ids[0])+"."),Hl(t)&&(t=t.call(this)),e.data&&(c=Dl(e.data)),t&&"object"==typeof t)if(Fl(t))for(var h=t.length;o<h;o++)o in t&&l(o,o,o===t.length-1);else if(n.Symbol&&t[n.Symbol.iterator]){for(var p=[],d=t[n.Symbol.iterator](),f=d.next();!f.done;f=d.next())p.push(f.value);for(h=(t=p).length;o<h;o++)l(o,o,o===t.length-1)}else r=void 0,Object.keys(t).forEach((function(t){void 0!==r&&l(r,o-1),r=t,o++})),void 0!==r&&l(r,o-1,!0);return 0===o&&(a=s(this)),a}))};var uh=rh(oh=oh.default),lh={};lh.__esModule=!0;var hh=function(t){return t&&t.__esModule?t:{default:t}}(Yl);lh.default=function(t){t.registerHelper("helperMissing",(function(){if(1!==arguments.length)throw new hh.default('Missing helper: "'+arguments[arguments.length-1].name+'"')}))};var ph=rh(lh=lh.default),dh={};dh.__esModule=!0;var fh=function(t){return t&&t.__esModule?t:{default:t}}(Yl);dh.default=function(t){t.registerHelper("if",(function(t,e){if(2!=arguments.length)throw new fh.default("#if requires exactly one argument");return Hl(t)&&(t=t.call(this)),!e.hash.includeZero&&!t||Ml(t)?e.inverse(this):e.fn(this)})),t.registerHelper("unless",(function(e,n){if(2!=arguments.length)throw new fh.default("#unless requires exactly one argument");return t.helpers.if.call(this,e,{fn:n.inverse,inverse:n.fn,hash:n.hash})}))};var gh=rh(dh=dh.default),mh={__esModule:!0,default:function(t){t.registerHelper("log",(function(){for(var e=[void 0],n=arguments[arguments.length-1],r=0;r<arguments.length-1;r++)e.push(arguments[r]);var i=1;null!=n.hash.level?i=n.hash.level:n.data&&null!=n.data.level&&(i=n.data.level),e[0]=i,t.log.apply(t,e)}))}},vh=rh(mh=mh.default),yh={__esModule:!0,default:function(t){t.registerHelper("lookup",(function(t,e,n){return t?n.lookupProperty(t,e):t}))}},_h=rh(yh=yh.default),bh={};bh.__esModule=!0;var wh=function(t){return t&&t.__esModule?t:{default:t}}(Yl);bh.default=function(t){t.registerHelper("with",(function(t,e){if(2!=arguments.length)throw new wh.default("#with requires exactly one argument");Hl(t)&&(t=t.call(this));var n=e.fn;if(Ml(t))return e.inverse(this);var r=e.data;return e.data&&e.ids&&((r=Dl(e.data)).contextPath=jl(e.data.contextPath,e.ids[0])),n(t,{data:r,blockParams:Ul([t],[r&&r.contextPath])})}))};var Sh,Eh=rh(bh=bh.default);Sh=function(t){Ih.default(t)};var kh={__esModule:!0,default:function(t){t.registerDecorator("inline",(function(t,e,n,r){var i=t;return e.partials||(e.partials={},i=function(r,i){var s=n.partials;n.partials=Rl({},s,e.partials);var o=t(r,i);return n.partials=s,o}),e.partials[r.args[0]]=r.fn,i}))}},Ih=function(t){return t&&t.__esModule?t:{default:t}}(kh=kh.default);var Th={__esModule:!0},Ch={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(t){if("string"==typeof t){var e=xl(Ch.methodMap,t.toLowerCase());t=e>=0?e:parseInt(t,10)}return t},log:function(t){if(t=Ch.lookupLevel(t),"undefined"!=typeof console&&Ch.lookupLevel(Ch.level)<=t){var e=Ch.methodMap[t];console[e]||(e="log");for(var n=arguments.length,r=Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];console[e].apply(console,r)}}};Th.default=Ch;var Ph,Ah,Oh,Lh,Rh=Ol(Th=Th.default);Ph=function(t){var e=Object.create(null);e.constructor=!1,e.__defineGetter__=!1,e.__defineSetter__=!1,e.__lookupGetter__=!1;var n=Object.create(null);return n.__proto__=!1,{properties:{whitelist:Lh(n,t.allowedProtoProperties),defaultValue:t.allowProtoPropertiesByDefault},methods:{whitelist:Lh(e,t.allowedProtoMethods),defaultValue:t.allowProtoMethodsByDefault}}},Ah=function(t,e,n){return Mh("function"==typeof t?e.methods:e.properties,n)},Oh=function(){Object.keys(Nh).forEach((function(t){delete Nh[t]}))},Lh=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return Rl.apply(void 0,[Object.create(null)].concat(e))};var xh=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(Th),Nh=Object.create(null);function Mh(t,e){return void 0!==t.whitelist[e]?!0===t.whitelist[e]:void 0!==t.defaultValue?t.defaultValue:(function(t){!0!==Nh[t]&&(Nh[t]=!0,xh.log("error",'Handlebars: Access has been denied to resolve the property "'+t+'" because it is not an "own property" of its parent.\nYou can add a runtime option to disable the check or this warning:\nSee https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details'))}(e),!1)}Sl="4.7.7";El=8;kl=7;Il={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0 <4.3.0",8:">= 4.3.0"};var Dh="[object Object]";function Uh(t,e,n){this.helpers=t||{},this.partials=e||{},this.decorators=n||{},th(this),Sh(this)}Uh.prototype={constructor:Uh,logger:Rh.default,log:Rh.default.log,registerHelper:function(t,e){if(Bl.call(t)===Dh){if(e)throw new nh.default("Arg not supported with multiple helpers");Rl(this.helpers,t)}else this.helpers[t]=e},unregisterHelper:function(t){delete this.helpers[t]},registerPartial:function(t,e){if(Bl.call(t)===Dh)Rl(this.partials,t);else{if(void 0===e)throw new nh.default('Attempting to register a partial called "'+t+'" as undefined');this.partials[t]=e}},unregisterPartial:function(t){delete this.partials[t]},registerDecorator:function(t,e){if(Bl.call(t)===Dh){if(e)throw new nh.default("Arg not supported with multiple decorators");Rl(this.decorators,t)}else this.decorators[t]=e},unregisterDecorator:function(t){delete this.decorators[t]},resetLoggedPropertyAccesses:function(){Oh()}};var jh=Rh.default.log;Tl=jh,Cl=Dl,Pl=Rh.default;var Bh=_l(Al),Hh={};function Fh(t){this.string=t}Hh.__esModule=!0,Fh.prototype.toString=Fh.prototype.toHTML=function(){return""+this.string},Hh.default=Fh;var $h,Vh,zh,qh,Wh,Gh,Kh,Jh=yl(Hh=Hh.default),Xh=yl(Yl),Yh=_l($l),Qh={};t(Qh,"__esModule",(function(){return $h}),(function(t){return $h=t})),t(Qh,"checkRevision",(function(){return Vh}),(function(t){return Vh=t})),t(Qh,"template",(function(){return zh}),(function(t){return zh=t})),t(Qh,"wrapProgram",(function(){return qh}),(function(t){return qh=t})),t(Qh,"resolvePartial",(function(){return Wh}),(function(t){return Wh=t})),t(Qh,"invokePartial",(function(){return Gh}),(function(t){return Gh=t})),t(Qh,"noop",(function(){return Kh}),(function(t){return Kh=t})),$h=!0,Vh=function(t){var e=t&&t[0]||1,n=El;if(e>=kl&&e<=El)return;if(e<kl){var r=Il[n],i=Il[e];throw new ep.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+r+") or downgrade your runtime to an older version ("+i+").")}throw new ep.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+t[1]+").")},zh=function(t,e){if(!e)throw new ep.default("No environment passed to template");if(!t||!t.main)throw new ep.default("Unknown template object: "+typeof t);t.main.decorator=t.main_d,e.VM.checkRevision(t.compiler);var n=t.compiler&&7===t.compiler[0];var r={strict:function(t,e,n){if(!t||!(e in t))throw new ep.default('"'+e+'" not defined in '+t,{loc:n});return r.lookupProperty(t,e)},lookupProperty:function(t,e){var n=t[e];return null==n||Object.prototype.hasOwnProperty.call(t,e)||Ah(n,r.protoAccessControl,e)?n:void 0},lookup:function(t,e){for(var n=t.length,i=0;i<n;i++){if(null!=(t[i]&&r.lookupProperty(t[i],e)))return t[i][e]}},lambda:function(t,e){return"function"==typeof t?t.call(e):t},escapeExpression:tp.escapeExpression,invokePartial:function(n,r,i){i.hash&&(r=tp.extend({},r,i.hash),i.ids&&(i.ids[0]=!0)),n=e.VM.resolvePartial.call(this,n,r,i);var s=tp.extend({},i,{hooks:this.hooks,protoAccessControl:this.protoAccessControl}),o=e.VM.invokePartial.call(this,n,r,s);if(null==o&&e.compile&&(i.partials[i.name]=e.compile(n,t.compilerOptions,e),o=i.partials[i.name](r,s)),null!=o){if(i.indent){for(var a=o.split("\n"),c=0,u=a.length;c<u&&(a[c]||c+1!==u);c++)a[c]=i.indent+a[c];o=a.join("\n")}return o}throw new ep.default("The partial "+i.name+" could not be compiled when running in runtime-only mode")},fn:function(e){var n=t[e];return n.decorator=t[e+"_d"],n},programs:[],program:function(t,e,n,r,i){var s=this.programs[t],o=this.fn(t);return e||i||r||n?s=np(this,t,o,e,n,r,i):s||(s=this.programs[t]=np(this,t,o)),s},data:function(t,e){for(;t&&e--;)t=t._parent;return t},mergeIfNeeded:function(t,e){var n=t||e;return t&&e&&t!==e&&(n=tp.extend({},e,t)),n},nullContext:Object.seal({}),noop:e.VM.noop,compilerInfo:t.compiler};function i(e){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],s=n.data;i._setup(n),!n.partial&&t.useData&&(s=ip(e,s));var o=void 0,a=t.useBlockParams?[]:void 0;function c(e){return""+t.main(r,e,r.helpers,r.partials,s,a,o)}return t.useDepths&&(o=n.depths?e!=n.depths[0]?[e].concat(n.depths):n.depths:[e]),(c=sp(t.main,c,r,n.depths||[],s,a))(e,n)}return i.isTop=!0,i._setup=function(i){if(i.partial)r.protoAccessControl=i.protoAccessControl,r.helpers=i.helpers,r.partials=i.partials,r.decorators=i.decorators,r.hooks=i.hooks;else{var s=tp.extend({},e.helpers,i.helpers);!function(t,e){Object.keys(t).forEach((function(n){var r=t[n];t[n]=function(t,e){var n=e.lookupProperty;return Zh(t,(function(t){return tp.extend({lookupProperty:n},t)}))}(r,e)}))}(s,r),r.helpers=s,t.usePartial&&(r.partials=r.mergeIfNeeded(i.partials,e.partials)),(t.usePartial||t.useDecorators)&&(r.decorators=tp.extend({},e.decorators,i.decorators)),r.hooks={},r.protoAccessControl=Ph(i);var o=i.allowCallsToHelperMissing||n;eh(r,"helperMissing",o),eh(r,"blockHelperMissing",o)}},i._child=function(e,n,i,s){if(t.useBlockParams&&!i)throw new ep.default("must pass block params");if(t.useDepths&&!s)throw new ep.default("must pass parent depths");return np(r,e,t[e],n,0,i,s)},i},qh=np,Wh=function(t,e,n){t?t.call||n.name||(n.name=t,t=n.partials[t]):t="@partial-block"===n.name?n.data["partial-block"]:n.partials[n.name];return t},Gh=function(t,e,n){var r=n.data&&n.data["partial-block"];n.partial=!0,n.ids&&(n.data.contextPath=n.ids[0]||n.data.contextPath);var i=void 0;n.fn&&n.fn!==rp&&function(){n.data=Cl(n.data);var t=n.fn;i=n.data["partial-block"]=function(e){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return n.data=Cl(n.data),n.data["partial-block"]=r,t(e,n)},t.partials&&(n.partials=tp.extend({},n.partials,t.partials))}();void 0===t&&i&&(t=i);if(void 0===t)throw new ep.default("The partial "+n.name+" could not be found");if(t instanceof Function)return t(e,n)},Kh=rp;var Zh,tp=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}($l),ep=function(t){return t&&t.__esModule?t:{default:t}}(Yl);function np(t,e,n,r,i,s,o){function a(e){var i=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],a=o;return!o||e==o[0]||e===t.nullContext&&null===o[0]||(a=[e].concat(o)),n(t,e,t.helpers,t.partials,i.data||r,s&&[i.blockParams].concat(s),a)}return(a=sp(n,a,t,o,r,s)).program=e,a.depth=o?o.length:0,a.blockParams=i||0,a}function rp(){return""}function ip(t,e){return e&&"root"in e||((e=e?Cl(e):{}).root=t),e}function sp(t,e,n,r,i,s){if(t.decorator){var o={};e=t.decorator(e,o,n,r&&r[0],i,s,r),tp.extend(e,o)}return e}Zh=function(t,e){return"function"!=typeof t?t:function(){var n=arguments[arguments.length-1];return arguments[arguments.length-1]=e(n),t.apply(this,arguments)}};var op=_l(Qh),ap={__esModule:!0,default:function(t){var e=void 0!==n?n:window,r=e.Handlebars;t.noConflict=function(){return e.Handlebars===t&&(e.Handlebars=r),t}}},cp=yl(ap=ap.default);function up(){var t=new Bh.HandlebarsEnvironment;return Yh.extend(t,Bh),t.SafeString=Jh.default,t.Exception=Xh.default,t.Utils=Yh,t.escapeExpression=Yh.escapeExpression,t.VM=op,t.template=function(e){return op.template(e,t)},t}var lp=up();lp.create=up,cp.default(lp),lp.default=lp,vl.default=lp;var hp=ml(vl=vl.default),pp={__esModule:!0},dp={helpers:{helperExpression:function(t){return"SubExpression"===t.type||("MustacheStatement"===t.type||"BlockStatement"===t.type)&&!!(t.params&&t.params.length||t.hash)},scopedId:function(t){return/^\.|this\b/.test(t.original)},simpleId:function(t){return 1===t.parts.length&&!dp.helpers.scopedId(t)&&!t.depth}}};pp.default=dp;var fp,gp,mp,vp=ml(pp=pp.default);function yp(t){return t&&t.__esModule?t:{default:t}}fp=ed,gp=function(t,e){var n=ed(t,e);return new Wp.default(e).accept(n)};var _p={__esModule:!0},bp=function(){var t={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,program_repetition0:6,statement:7,mustache:8,block:9,rawBlock:10,partial:11,partialBlock:12,content:13,COMMENT:14,CONTENT:15,openRawBlock:16,rawBlock_repetition0:17,END_RAW_BLOCK:18,OPEN_RAW_BLOCK:19,helperName:20,openRawBlock_repetition0:21,openRawBlock_option0:22,CLOSE_RAW_BLOCK:23,openBlock:24,block_option0:25,closeBlock:26,openInverse:27,block_option1:28,OPEN_BLOCK:29,openBlock_repetition0:30,openBlock_option0:31,openBlock_option1:32,CLOSE:33,OPEN_INVERSE:34,openInverse_repetition0:35,openInverse_option0:36,openInverse_option1:37,openInverseChain:38,OPEN_INVERSE_CHAIN:39,openInverseChain_repetition0:40,openInverseChain_option0:41,openInverseChain_option1:42,inverseAndProgram:43,INVERSE:44,inverseChain:45,inverseChain_option0:46,OPEN_ENDBLOCK:47,OPEN:48,mustache_repetition0:49,mustache_option0:50,OPEN_UNESCAPED:51,mustache_repetition1:52,mustache_option1:53,CLOSE_UNESCAPED:54,OPEN_PARTIAL:55,partialName:56,partial_repetition0:57,partial_option0:58,openPartialBlock:59,OPEN_PARTIAL_BLOCK:60,openPartialBlock_repetition0:61,openPartialBlock_option0:62,param:63,sexpr:64,OPEN_SEXPR:65,sexpr_repetition0:66,sexpr_option0:67,CLOSE_SEXPR:68,hash:69,hash_repetition_plus0:70,hashSegment:71,ID:72,EQUALS:73,blockParams:74,OPEN_BLOCK_PARAMS:75,blockParams_repetition_plus0:76,CLOSE_BLOCK_PARAMS:77,path:78,dataName:79,STRING:80,NUMBER:81,BOOLEAN:82,UNDEFINED:83,NULL:84,DATA:85,pathSegments:86,SEP:87,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",14:"COMMENT",15:"CONTENT",18:"END_RAW_BLOCK",19:"OPEN_RAW_BLOCK",23:"CLOSE_RAW_BLOCK",29:"OPEN_BLOCK",33:"CLOSE",34:"OPEN_INVERSE",39:"OPEN_INVERSE_CHAIN",44:"INVERSE",47:"OPEN_ENDBLOCK",48:"OPEN",51:"OPEN_UNESCAPED",54:"CLOSE_UNESCAPED",55:"OPEN_PARTIAL",60:"OPEN_PARTIAL_BLOCK",65:"OPEN_SEXPR",68:"CLOSE_SEXPR",72:"ID",73:"EQUALS",75:"OPEN_BLOCK_PARAMS",77:"CLOSE_BLOCK_PARAMS",80:"STRING",81:"NUMBER",82:"BOOLEAN",83:"UNDEFINED",84:"NULL",85:"DATA",87:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[13,1],[10,3],[16,5],[9,4],[9,4],[24,6],[27,6],[38,6],[43,2],[45,3],[45,1],[26,3],[8,5],[8,5],[11,5],[12,3],[59,5],[63,1],[63,1],[64,5],[69,1],[71,3],[74,3],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[56,1],[56,1],[79,2],[78,1],[86,3],[86,1],[6,0],[6,2],[17,0],[17,2],[21,0],[21,2],[22,0],[22,1],[25,0],[25,1],[28,0],[28,1],[30,0],[30,2],[31,0],[31,1],[32,0],[32,1],[35,0],[35,2],[36,0],[36,1],[37,0],[37,1],[40,0],[40,2],[41,0],[41,1],[42,0],[42,1],[46,0],[46,1],[49,0],[49,2],[50,0],[50,1],[52,0],[52,2],[53,0],[53,1],[57,0],[57,2],[58,0],[58,1],[61,0],[61,2],[62,0],[62,1],[66,0],[66,2],[67,0],[67,1],[70,1],[70,2],[76,1],[76,2]],performAction:function(t,e,n,r,i,s,o){var a=s.length-1;switch(i){case 1:return s[a-1];case 2:this.$=r.prepareProgram(s[a]);break;case 3:case 4:case 5:case 6:case 7:case 8:case 20:case 27:case 28:case 33:case 34:case 40:case 41:this.$=s[a];break;case 9:this.$={type:"CommentStatement",value:r.stripComment(s[a]),strip:r.stripFlags(s[a],s[a]),loc:r.locInfo(this._$)};break;case 10:this.$={type:"ContentStatement",original:s[a],value:s[a],loc:r.locInfo(this._$)};break;case 11:this.$=r.prepareRawBlock(s[a-2],s[a-1],s[a],this._$);break;case 12:this.$={path:s[a-3],params:s[a-2],hash:s[a-1]};break;case 13:this.$=r.prepareBlock(s[a-3],s[a-2],s[a-1],s[a],!1,this._$);break;case 14:this.$=r.prepareBlock(s[a-3],s[a-2],s[a-1],s[a],!0,this._$);break;case 15:this.$={open:s[a-5],path:s[a-4],params:s[a-3],hash:s[a-2],blockParams:s[a-1],strip:r.stripFlags(s[a-5],s[a])};break;case 16:case 17:this.$={path:s[a-4],params:s[a-3],hash:s[a-2],blockParams:s[a-1],strip:r.stripFlags(s[a-5],s[a])};break;case 18:this.$={strip:r.stripFlags(s[a-1],s[a-1]),program:s[a]};break;case 19:var c=r.prepareBlock(s[a-2],s[a-1],s[a],s[a],!1,this._$),u=r.prepareProgram([c],s[a-1].loc);u.chained=!0,this.$={strip:s[a-2].strip,program:u,chain:!0};break;case 21:this.$={path:s[a-1],strip:r.stripFlags(s[a-2],s[a])};break;case 22:case 23:this.$=r.prepareMustache(s[a-3],s[a-2],s[a-1],s[a-4],r.stripFlags(s[a-4],s[a]),this._$);break;case 24:this.$={type:"PartialStatement",name:s[a-3],params:s[a-2],hash:s[a-1],indent:"",strip:r.stripFlags(s[a-4],s[a]),loc:r.locInfo(this._$)};break;case 25:this.$=r.preparePartialBlock(s[a-2],s[a-1],s[a],this._$);break;case 26:this.$={path:s[a-3],params:s[a-2],hash:s[a-1],strip:r.stripFlags(s[a-4],s[a])};break;case 29:this.$={type:"SubExpression",path:s[a-3],params:s[a-2],hash:s[a-1],loc:r.locInfo(this._$)};break;case 30:this.$={type:"Hash",pairs:s[a],loc:r.locInfo(this._$)};break;case 31:this.$={type:"HashPair",key:r.id(s[a-2]),value:s[a],loc:r.locInfo(this._$)};break;case 32:this.$=r.id(s[a-1]);break;case 35:this.$={type:"StringLiteral",value:s[a],original:s[a],loc:r.locInfo(this._$)};break;case 36:this.$={type:"NumberLiteral",value:Number(s[a]),original:Number(s[a]),loc:r.locInfo(this._$)};break;case 37:this.$={type:"BooleanLiteral",value:"true"===s[a],original:"true"===s[a],loc:r.locInfo(this._$)};break;case 38:this.$={type:"UndefinedLiteral",original:void 0,value:void 0,loc:r.locInfo(this._$)};break;case 39:this.$={type:"NullLiteral",original:null,value:null,loc:r.locInfo(this._$)};break;case 42:this.$=r.preparePath(!0,s[a],this._$);break;case 43:this.$=r.preparePath(!1,s[a],this._$);break;case 44:s[a-2].push({part:r.id(s[a]),original:s[a],separator:s[a-1]}),this.$=s[a-2];break;case 45:this.$=[{part:r.id(s[a]),original:s[a]}];break;case 46:case 48:case 50:case 58:case 64:case 70:case 78:case 82:case 86:case 90:case 94:this.$=[];break;case 47:case 49:case 51:case 59:case 65:case 71:case 79:case 83:case 87:case 91:case 95:case 99:case 101:s[a-1].push(s[a]);break;case 98:case 100:this.$=[s[a]]}},table:[{3:1,4:2,5:[2,46],6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:10,13:11,14:[1,12],15:[1,20],16:17,19:[1,23],24:15,27:16,29:[1,21],34:[1,22],39:[2,2],44:[2,2],47:[2,2],48:[1,13],51:[1,14],55:[1,18],59:19,60:[1,24]},{1:[2,1]},{5:[2,47],14:[2,47],15:[2,47],19:[2,47],29:[2,47],34:[2,47],39:[2,47],44:[2,47],47:[2,47],48:[2,47],51:[2,47],55:[2,47],60:[2,47]},{5:[2,3],14:[2,3],15:[2,3],19:[2,3],29:[2,3],34:[2,3],39:[2,3],44:[2,3],47:[2,3],48:[2,3],51:[2,3],55:[2,3],60:[2,3]},{5:[2,4],14:[2,4],15:[2,4],19:[2,4],29:[2,4],34:[2,4],39:[2,4],44:[2,4],47:[2,4],48:[2,4],51:[2,4],55:[2,4],60:[2,4]},{5:[2,5],14:[2,5],15:[2,5],19:[2,5],29:[2,5],34:[2,5],39:[2,5],44:[2,5],47:[2,5],48:[2,5],51:[2,5],55:[2,5],60:[2,5]},{5:[2,6],14:[2,6],15:[2,6],19:[2,6],29:[2,6],34:[2,6],39:[2,6],44:[2,6],47:[2,6],48:[2,6],51:[2,6],55:[2,6],60:[2,6]},{5:[2,7],14:[2,7],15:[2,7],19:[2,7],29:[2,7],34:[2,7],39:[2,7],44:[2,7],47:[2,7],48:[2,7],51:[2,7],55:[2,7],60:[2,7]},{5:[2,8],14:[2,8],15:[2,8],19:[2,8],29:[2,8],34:[2,8],39:[2,8],44:[2,8],47:[2,8],48:[2,8],51:[2,8],55:[2,8],60:[2,8]},{5:[2,9],14:[2,9],15:[2,9],19:[2,9],29:[2,9],34:[2,9],39:[2,9],44:[2,9],47:[2,9],48:[2,9],51:[2,9],55:[2,9],60:[2,9]},{20:25,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:36,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:37,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{4:38,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{15:[2,48],17:39,18:[2,48]},{20:41,56:40,64:42,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:44,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{5:[2,10],14:[2,10],15:[2,10],18:[2,10],19:[2,10],29:[2,10],34:[2,10],39:[2,10],44:[2,10],47:[2,10],48:[2,10],51:[2,10],55:[2,10],60:[2,10]},{20:45,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:46,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:47,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:41,56:48,64:42,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[2,78],49:49,65:[2,78],72:[2,78],80:[2,78],81:[2,78],82:[2,78],83:[2,78],84:[2,78],85:[2,78]},{23:[2,33],33:[2,33],54:[2,33],65:[2,33],68:[2,33],72:[2,33],75:[2,33],80:[2,33],81:[2,33],82:[2,33],83:[2,33],84:[2,33],85:[2,33]},{23:[2,34],33:[2,34],54:[2,34],65:[2,34],68:[2,34],72:[2,34],75:[2,34],80:[2,34],81:[2,34],82:[2,34],83:[2,34],84:[2,34],85:[2,34]},{23:[2,35],33:[2,35],54:[2,35],65:[2,35],68:[2,35],72:[2,35],75:[2,35],80:[2,35],81:[2,35],82:[2,35],83:[2,35],84:[2,35],85:[2,35]},{23:[2,36],33:[2,36],54:[2,36],65:[2,36],68:[2,36],72:[2,36],75:[2,36],80:[2,36],81:[2,36],82:[2,36],83:[2,36],84:[2,36],85:[2,36]},{23:[2,37],33:[2,37],54:[2,37],65:[2,37],68:[2,37],72:[2,37],75:[2,37],80:[2,37],81:[2,37],82:[2,37],83:[2,37],84:[2,37],85:[2,37]},{23:[2,38],33:[2,38],54:[2,38],65:[2,38],68:[2,38],72:[2,38],75:[2,38],80:[2,38],81:[2,38],82:[2,38],83:[2,38],84:[2,38],85:[2,38]},{23:[2,39],33:[2,39],54:[2,39],65:[2,39],68:[2,39],72:[2,39],75:[2,39],80:[2,39],81:[2,39],82:[2,39],83:[2,39],84:[2,39],85:[2,39]},{23:[2,43],33:[2,43],54:[2,43],65:[2,43],68:[2,43],72:[2,43],75:[2,43],80:[2,43],81:[2,43],82:[2,43],83:[2,43],84:[2,43],85:[2,43],87:[1,50]},{72:[1,35],86:51},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{52:52,54:[2,82],65:[2,82],72:[2,82],80:[2,82],81:[2,82],82:[2,82],83:[2,82],84:[2,82],85:[2,82]},{25:53,38:55,39:[1,57],43:56,44:[1,58],45:54,47:[2,54]},{28:59,43:60,44:[1,58],47:[2,56]},{13:62,15:[1,20],18:[1,61]},{33:[2,86],57:63,65:[2,86],72:[2,86],80:[2,86],81:[2,86],82:[2,86],83:[2,86],84:[2,86],85:[2,86]},{33:[2,40],65:[2,40],72:[2,40],80:[2,40],81:[2,40],82:[2,40],83:[2,40],84:[2,40],85:[2,40]},{33:[2,41],65:[2,41],72:[2,41],80:[2,41],81:[2,41],82:[2,41],83:[2,41],84:[2,41],85:[2,41]},{20:64,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:65,47:[1,66]},{30:67,33:[2,58],65:[2,58],72:[2,58],75:[2,58],80:[2,58],81:[2,58],82:[2,58],83:[2,58],84:[2,58],85:[2,58]},{33:[2,64],35:68,65:[2,64],72:[2,64],75:[2,64],80:[2,64],81:[2,64],82:[2,64],83:[2,64],84:[2,64],85:[2,64]},{21:69,23:[2,50],65:[2,50],72:[2,50],80:[2,50],81:[2,50],82:[2,50],83:[2,50],84:[2,50],85:[2,50]},{33:[2,90],61:70,65:[2,90],72:[2,90],80:[2,90],81:[2,90],82:[2,90],83:[2,90],84:[2,90],85:[2,90]},{20:74,33:[2,80],50:71,63:72,64:75,65:[1,43],69:73,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{72:[1,79]},{23:[2,42],33:[2,42],54:[2,42],65:[2,42],68:[2,42],72:[2,42],75:[2,42],80:[2,42],81:[2,42],82:[2,42],83:[2,42],84:[2,42],85:[2,42],87:[1,50]},{20:74,53:80,54:[2,84],63:81,64:75,65:[1,43],69:82,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:83,47:[1,66]},{47:[2,55]},{4:84,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{47:[2,20]},{20:85,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:86,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{26:87,47:[1,66]},{47:[2,57]},{5:[2,11],14:[2,11],15:[2,11],19:[2,11],29:[2,11],34:[2,11],39:[2,11],44:[2,11],47:[2,11],48:[2,11],51:[2,11],55:[2,11],60:[2,11]},{15:[2,49],18:[2,49]},{20:74,33:[2,88],58:88,63:89,64:75,65:[1,43],69:90,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{65:[2,94],66:91,68:[2,94],72:[2,94],80:[2,94],81:[2,94],82:[2,94],83:[2,94],84:[2,94],85:[2,94]},{5:[2,25],14:[2,25],15:[2,25],19:[2,25],29:[2,25],34:[2,25],39:[2,25],44:[2,25],47:[2,25],48:[2,25],51:[2,25],55:[2,25],60:[2,25]},{20:92,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,31:93,33:[2,60],63:94,64:75,65:[1,43],69:95,70:76,71:77,72:[1,78],75:[2,60],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,33:[2,66],36:96,63:97,64:75,65:[1,43],69:98,70:76,71:77,72:[1,78],75:[2,66],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,22:99,23:[2,52],63:100,64:75,65:[1,43],69:101,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,33:[2,92],62:102,63:103,64:75,65:[1,43],69:104,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,105]},{33:[2,79],65:[2,79],72:[2,79],80:[2,79],81:[2,79],82:[2,79],83:[2,79],84:[2,79],85:[2,79]},{33:[2,81]},{23:[2,27],33:[2,27],54:[2,27],65:[2,27],68:[2,27],72:[2,27],75:[2,27],80:[2,27],81:[2,27],82:[2,27],83:[2,27],84:[2,27],85:[2,27]},{23:[2,28],33:[2,28],54:[2,28],65:[2,28],68:[2,28],72:[2,28],75:[2,28],80:[2,28],81:[2,28],82:[2,28],83:[2,28],84:[2,28],85:[2,28]},{23:[2,30],33:[2,30],54:[2,30],68:[2,30],71:106,72:[1,107],75:[2,30]},{23:[2,98],33:[2,98],54:[2,98],68:[2,98],72:[2,98],75:[2,98]},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],73:[1,108],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{23:[2,44],33:[2,44],54:[2,44],65:[2,44],68:[2,44],72:[2,44],75:[2,44],80:[2,44],81:[2,44],82:[2,44],83:[2,44],84:[2,44],85:[2,44],87:[2,44]},{54:[1,109]},{54:[2,83],65:[2,83],72:[2,83],80:[2,83],81:[2,83],82:[2,83],83:[2,83],84:[2,83],85:[2,83]},{54:[2,85]},{5:[2,13],14:[2,13],15:[2,13],19:[2,13],29:[2,13],34:[2,13],39:[2,13],44:[2,13],47:[2,13],48:[2,13],51:[2,13],55:[2,13],60:[2,13]},{38:55,39:[1,57],43:56,44:[1,58],45:111,46:110,47:[2,76]},{33:[2,70],40:112,65:[2,70],72:[2,70],75:[2,70],80:[2,70],81:[2,70],82:[2,70],83:[2,70],84:[2,70],85:[2,70]},{47:[2,18]},{5:[2,14],14:[2,14],15:[2,14],19:[2,14],29:[2,14],34:[2,14],39:[2,14],44:[2,14],47:[2,14],48:[2,14],51:[2,14],55:[2,14],60:[2,14]},{33:[1,113]},{33:[2,87],65:[2,87],72:[2,87],80:[2,87],81:[2,87],82:[2,87],83:[2,87],84:[2,87],85:[2,87]},{33:[2,89]},{20:74,63:115,64:75,65:[1,43],67:114,68:[2,96],69:116,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,117]},{32:118,33:[2,62],74:119,75:[1,120]},{33:[2,59],65:[2,59],72:[2,59],75:[2,59],80:[2,59],81:[2,59],82:[2,59],83:[2,59],84:[2,59],85:[2,59]},{33:[2,61],75:[2,61]},{33:[2,68],37:121,74:122,75:[1,120]},{33:[2,65],65:[2,65],72:[2,65],75:[2,65],80:[2,65],81:[2,65],82:[2,65],83:[2,65],84:[2,65],85:[2,65]},{33:[2,67],75:[2,67]},{23:[1,123]},{23:[2,51],65:[2,51],72:[2,51],80:[2,51],81:[2,51],82:[2,51],83:[2,51],84:[2,51],85:[2,51]},{23:[2,53]},{33:[1,124]},{33:[2,91],65:[2,91],72:[2,91],80:[2,91],81:[2,91],82:[2,91],83:[2,91],84:[2,91],85:[2,91]},{33:[2,93]},{5:[2,22],14:[2,22],15:[2,22],19:[2,22],29:[2,22],34:[2,22],39:[2,22],44:[2,22],47:[2,22],48:[2,22],51:[2,22],55:[2,22],60:[2,22]},{23:[2,99],33:[2,99],54:[2,99],68:[2,99],72:[2,99],75:[2,99]},{73:[1,108]},{20:74,63:125,64:75,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,23],14:[2,23],15:[2,23],19:[2,23],29:[2,23],34:[2,23],39:[2,23],44:[2,23],47:[2,23],48:[2,23],51:[2,23],55:[2,23],60:[2,23]},{47:[2,19]},{47:[2,77]},{20:74,33:[2,72],41:126,63:127,64:75,65:[1,43],69:128,70:76,71:77,72:[1,78],75:[2,72],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,24],14:[2,24],15:[2,24],19:[2,24],29:[2,24],34:[2,24],39:[2,24],44:[2,24],47:[2,24],48:[2,24],51:[2,24],55:[2,24],60:[2,24]},{68:[1,129]},{65:[2,95],68:[2,95],72:[2,95],80:[2,95],81:[2,95],82:[2,95],83:[2,95],84:[2,95],85:[2,95]},{68:[2,97]},{5:[2,21],14:[2,21],15:[2,21],19:[2,21],29:[2,21],34:[2,21],39:[2,21],44:[2,21],47:[2,21],48:[2,21],51:[2,21],55:[2,21],60:[2,21]},{33:[1,130]},{33:[2,63]},{72:[1,132],76:131},{33:[1,133]},{33:[2,69]},{15:[2,12],18:[2,12]},{14:[2,26],15:[2,26],19:[2,26],29:[2,26],34:[2,26],47:[2,26],48:[2,26],51:[2,26],55:[2,26],60:[2,26]},{23:[2,31],33:[2,31],54:[2,31],68:[2,31],72:[2,31],75:[2,31]},{33:[2,74],42:134,74:135,75:[1,120]},{33:[2,71],65:[2,71],72:[2,71],75:[2,71],80:[2,71],81:[2,71],82:[2,71],83:[2,71],84:[2,71],85:[2,71]},{33:[2,73],75:[2,73]},{23:[2,29],33:[2,29],54:[2,29],65:[2,29],68:[2,29],72:[2,29],75:[2,29],80:[2,29],81:[2,29],82:[2,29],83:[2,29],84:[2,29],85:[2,29]},{14:[2,15],15:[2,15],19:[2,15],29:[2,15],34:[2,15],39:[2,15],44:[2,15],47:[2,15],48:[2,15],51:[2,15],55:[2,15],60:[2,15]},{72:[1,137],77:[1,136]},{72:[2,100],77:[2,100]},{14:[2,16],15:[2,16],19:[2,16],29:[2,16],34:[2,16],44:[2,16],47:[2,16],48:[2,16],51:[2,16],55:[2,16],60:[2,16]},{33:[1,138]},{33:[2,75]},{33:[2,32]},{72:[2,101],77:[2,101]},{14:[2,17],15:[2,17],19:[2,17],29:[2,17],34:[2,17],39:[2,17],44:[2,17],47:[2,17],48:[2,17],51:[2,17],55:[2,17],60:[2,17]}],defaultActions:{4:[2,1],54:[2,55],56:[2,20],60:[2,57],73:[2,81],82:[2,85],86:[2,18],90:[2,89],101:[2,53],104:[2,93],110:[2,19],111:[2,77],116:[2,97],119:[2,63],122:[2,69],135:[2,75],136:[2,32]},parseError:function(t,e){throw new Error(t)},parse:function(t){var e=this,n=[0],r=[null],i=[],s=this.table,o="",a=0,c=0,u=0;this.lexer.setInput(t),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,void 0===this.lexer.yylloc&&(this.lexer.yylloc={});var l=this.lexer.yylloc;i.push(l);var h=this.lexer.options&&this.lexer.options.ranges;"function"==typeof this.yy.parseError&&(this.parseError=this.yy.parseError);for(var p,d,f,g,m,v,y,_,b,w,S={};;){if(f=n[n.length-1],this.defaultActions[f]?g=this.defaultActions[f]:(null==p&&(w=void 0,"number"!=typeof(w=e.lexer.lex()||1)&&(w=e.symbols_[w]||w),p=w),g=s[f]&&s[f][p]),void 0===g||!g.length||!g[0]){var E="";if(!u){for(v in b=[],s[f])this.terminals_[v]&&v>2&&b.push("'"+this.terminals_[v]+"'");E=this.lexer.showPosition?"Parse error on line "+(a+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+b.join(", ")+", got '"+(this.terminals_[p]||p)+"'":"Parse error on line "+(a+1)+": Unexpected "+(1==p?"end of input":"'"+(this.terminals_[p]||p)+"'"),this.parseError(E,{text:this.lexer.match,token:this.terminals_[p]||p,line:this.lexer.yylineno,loc:l,expected:b})}}if(g[0]instanceof Array&&g.length>1)throw new Error("Parse Error: multiple actions possible at state: "+f+", token: "+p);switch(g[0]){case 1:n.push(p),r.push(this.lexer.yytext),i.push(this.lexer.yylloc),n.push(g[1]),p=null,d?(p=d,d=null):(c=this.lexer.yyleng,o=this.lexer.yytext,a=this.lexer.yylineno,l=this.lexer.yylloc,u>0&&u--);break;case 2:if(y=this.productions_[g[1]][1],S.$=r[r.length-y],S._$={first_line:i[i.length-(y||1)].first_line,last_line:i[i.length-1].last_line,first_column:i[i.length-(y||1)].first_column,last_column:i[i.length-1].last_column},h&&(S._$.range=[i[i.length-(y||1)].range[0],i[i.length-1].range[1]]),void 0!==(m=this.performAction.call(S,o,c,a,this.yy,g[1],r,i)))return m;y&&(n=n.slice(0,-1*y*2),r=r.slice(0,-1*y),i=i.slice(0,-1*y)),n.push(this.productions_[g[1]][0]),r.push(S.$),i.push(S._$),_=s[n[n.length-2]][n[n.length-1]],n.push(_);break;case 3:return!0}}return!0}},e=function(){var t={EOF:1,parseError:function(t,e){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,e)},setInput:function(t){return this._input=t,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,n=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e-1),this.offset-=e;var r=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),n.length-1&&(this.yylineno-=n.length-1);var i=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===r.length?this.yylloc.first_column:0)+r[r.length-n.length].length-n[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[i[0],i[0]+this.yyleng-e]),this},more:function(){return this._more=!0,this},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},next:function(){if(this.done)return this.EOF;var t,e,n,r,i;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var s=this._currentRules(),o=0;o<s.length&&(!(n=this._input.match(this.rules[s[o]]))||e&&!(n[0].length>e[0].length)||(e=n,r=o,this.options.flex));o++);return e?((i=e[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=i.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:i?i[i.length-1].length-i[i.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+e[0].length},this.yytext+=e[0],this.match+=e[0],this.matches=e,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._input=this._input.slice(e[0].length),this.matched+=e[0],t=this.performAction.call(this,this.yy,this,s[r],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),t||void 0):""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var t=this.next();return void 0!==t?t:this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(t){this.begin(t)},options:{},performAction:function(t,e,n,r){function i(t,n){return e.yytext=e.yytext.substring(t,e.yyleng-n+t)}switch(n){case 0:if("\\\\"===e.yytext.slice(-2)?(i(0,1),this.begin("mu")):"\\"===e.yytext.slice(-1)?(i(0,1),this.begin("emu")):this.begin("mu"),e.yytext)return 15;break;case 1:case 5:return 15;case 2:return this.popState(),15;case 3:return this.begin("raw"),15;case 4:return this.popState(),"raw"===this.conditionStack[this.conditionStack.length-1]?15:(i(5,9),"END_RAW_BLOCK");case 6:case 22:return this.popState(),14;case 7:return 65;case 8:return 68;case 9:return 19;case 10:return this.popState(),this.begin("raw"),23;case 11:return 55;case 12:return 60;case 13:return 29;case 14:return 47;case 15:case 16:return this.popState(),44;case 17:return 34;case 18:return 39;case 19:return 51;case 20:case 23:return 48;case 21:this.unput(e.yytext),this.popState(),this.begin("com");break;case 24:return 73;case 25:case 26:case 41:return 72;case 27:return 87;case 28:break;case 29:return this.popState(),54;case 30:return this.popState(),33;case 31:return e.yytext=i(1,2).replace(/\\"/g,'"'),80;case 32:return e.yytext=i(1,2).replace(/\\'/g,"'"),80;case 33:return 85;case 34:case 35:return 82;case 36:return 83;case 37:return 84;case 38:return 81;case 39:return 75;case 40:return 77;case 42:return e.yytext=e.yytext.replace(/\\([\\\]])/g,"$1"),72;case 43:return"INVALID";case 44:return 5}},rules:[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{(?=[^\/]))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]+?(?=(\{\{\{\{)))/,/^(?:[\s\S]*?--(~)?\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#>)/,/^(?:\{\{(~)?#\*?)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{(~)?!--)/,/^(?:\{\{(~)?![\s\S]*?\}\})/,/^(?:\{\{(~)?\*?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)|])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:undefined(?=([~}\s)])))/,/^(?:null(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:as\s+\|)/,/^(?:\|)/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/,/^(?:\[(\\\]|[^\]])*\])/,/^(?:.)/,/^(?:$)/],conditions:{mu:{rules:[7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],inclusive:!1},emu:{rules:[2],inclusive:!1},com:{rules:[6],inclusive:!1},raw:{rules:[3,4,5],inclusive:!1},INITIAL:{rules:[0,1,44],inclusive:!0}}};return t}();function n(){this.yy={}}return t.lexer=e,n.prototype=t,t.Parser=n,new n}();_p.default=bp;var wp=yp(_p=_p.default),Sp={};Sp.__esModule=!0;var Ep={};Ep.__esModule=!0;var kp=function(t){return t&&t.__esModule?t:{default:t}}(Yl);function Ip(){this.parents=[]}function Tp(t){this.acceptRequired(t,"path"),this.acceptArray(t.params),this.acceptKey(t,"hash")}function Cp(t){Tp.call(this,t),this.acceptKey(t,"program"),this.acceptKey(t,"inverse")}function Pp(t){this.acceptRequired(t,"name"),this.acceptArray(t.params),this.acceptKey(t,"hash")}Ip.prototype={constructor:Ip,mutating:!1,acceptKey:function(t,e){var n=this.accept(t[e]);if(this.mutating){if(n&&!Ip.prototype[n.type])throw new kp.default('Unexpected node type "'+n.type+'" found when accepting '+e+" on "+t.type);t[e]=n}},acceptRequired:function(t,e){if(this.acceptKey(t,e),!t[e])throw new kp.default(t.type+" requires "+e)},acceptArray:function(t){for(var e=0,n=t.length;e<n;e++)this.acceptKey(t,e),t[e]||(t.splice(e,1),e--,n--)},accept:function(t){if(t){if(!this[t.type])throw new kp.default("Unknown type: "+t.type,t);this.current&&this.parents.unshift(this.current),this.current=t;var e=this[t.type](t);return this.current=this.parents.shift(),!this.mutating||e?e:!1!==e?t:void 0}},Program:function(t){this.acceptArray(t.body)},MustacheStatement:Tp,Decorator:Tp,BlockStatement:Cp,DecoratorBlock:Cp,PartialStatement:Pp,PartialBlockStatement:function(t){Pp.call(this,t),this.acceptKey(t,"program")},ContentStatement:function(){},CommentStatement:function(){},SubExpression:Tp,PathExpression:function(){},StringLiteral:function(){},NumberLiteral:function(){},BooleanLiteral:function(){},UndefinedLiteral:function(){},NullLiteral:function(){},Hash:function(t){this.acceptArray(t.pairs)},HashPair:function(t){this.acceptRequired(t,"value")}},Ep.default=Ip;var Ap=function(t){return t&&t.__esModule?t:{default:t}}(Ep=Ep.default);function Op(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];this.options=t}function Lp(t,e,n){void 0===e&&(e=t.length);var r=t[e-1],i=t[e-2];return r?"ContentStatement"===r.type?(i||!n?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(r.original):void 0:n}function Rp(t,e,n){void 0===e&&(e=-1);var r=t[e+1],i=t[e+2];return r?"ContentStatement"===r.type?(i||!n?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(r.original):void 0:n}function xp(t,e,n){var r=t[null==e?0:e+1];if(r&&"ContentStatement"===r.type&&(n||!r.rightStripped)){var i=r.value;r.value=r.value.replace(n?/^\s+/:/^[ \t]*\r?\n?/,""),r.rightStripped=r.value!==i}}function Np(t,e,n){var r=t[null==e?t.length-1:e-1];if(r&&"ContentStatement"===r.type&&(n||!r.leftStripped)){var i=r.value;return r.value=r.value.replace(n?/\s+$/:/[ \t]+$/,""),r.leftStripped=r.value!==i,r.leftStripped}}Op.prototype=new Ap.default,Op.prototype.Program=function(t){var e=!this.options.ignoreStandalone,n=!this.isRootSeen;this.isRootSeen=!0;for(var r=t.body,i=0,s=r.length;i<s;i++){var o=r[i],a=this.accept(o);if(a){var c=Lp(r,i,n),u=Rp(r,i,n),l=a.openStandalone&&c,h=a.closeStandalone&&u,p=a.inlineStandalone&&c&&u;a.close&&xp(r,i,!0),a.open&&Np(r,i,!0),e&&p&&(xp(r,i),Np(r,i)&&"PartialStatement"===o.type&&(o.indent=/([ \t]+$)/.exec(r[i-1].original)[1])),e&&l&&(xp((o.program||o.inverse).body),Np(r,i)),e&&h&&(xp(r,i),Np((o.inverse||o.program).body))}}return t},Op.prototype.BlockStatement=Op.prototype.DecoratorBlock=Op.prototype.PartialBlockStatement=function(t){this.accept(t.program),this.accept(t.inverse);var e=t.program||t.inverse,n=t.program&&t.inverse,r=n,i=n;if(n&&n.chained)for(r=n.body[0].program;i.chained;)i=i.body[i.body.length-1].program;var s={open:t.openStrip.open,close:t.closeStrip.close,openStandalone:Rp(e.body),closeStandalone:Lp((r||e).body)};if(t.openStrip.close&&xp(e.body,null,!0),n){var o=t.inverseStrip;o.open&&Np(e.body,null,!0),o.close&&xp(r.body,null,!0),t.closeStrip.open&&Np(i.body,null,!0),!this.options.ignoreStandalone&&Lp(e.body)&&Rp(r.body)&&(Np(e.body),xp(r.body))}else t.closeStrip.open&&Np(e.body,null,!0);return s},Op.prototype.Decorator=Op.prototype.MustacheStatement=function(t){return t.strip},Op.prototype.PartialStatement=Op.prototype.CommentStatement=function(t){var e=t.strip||{};return{inlineStandalone:!0,open:e.open,close:e.close}},Sp.default=Op;var Mp,Dp,Up,jp,Bp,Hp,Fp,$p,Vp,zp,qp,Wp=yp(Sp=Sp.default),Gp={};t(Gp,"__esModule",(function(){return Mp}),(function(t){return Mp=t})),t(Gp,"SourceLocation",(function(){return Dp}),(function(t){return Dp=t})),t(Gp,"id",(function(){return Up}),(function(t){return Up=t})),t(Gp,"stripFlags",(function(){return jp}),(function(t){return jp=t})),t(Gp,"stripComment",(function(){return Bp}),(function(t){return Bp=t})),t(Gp,"preparePath",(function(){return Hp}),(function(t){return Hp=t})),t(Gp,"prepareMustache",(function(){return Fp}),(function(t){return Fp=t})),t(Gp,"prepareRawBlock",(function(){return $p}),(function(t){return $p=t})),t(Gp,"prepareBlock",(function(){return Vp}),(function(t){return Vp=t})),t(Gp,"prepareProgram",(function(){return zp}),(function(t){return zp=t})),t(Gp,"preparePartialBlock",(function(){return qp}),(function(t){return qp=t})),Mp=!0,Dp=function(t,e){this.source=t,this.start={line:e.first_line,column:e.first_column},this.end={line:e.last_line,column:e.last_column}},Up=function(t){return/^\[.*\]$/.test(t)?t.substring(1,t.length-1):t},jp=function(t,e){return{open:"~"===t.charAt(2),close:"~"===e.charAt(e.length-3)}},Bp=function(t){return t.replace(/^\{\{~?!-?-?/,"").replace(/-?-?~?\}\}$/,"")},Hp=function(t,e,n){n=this.locInfo(n);for(var r=t?"@":"",i=[],s=0,o=0,a=e.length;o<a;o++){var c=e[o].part,u=e[o].original!==c;if(r+=(e[o].separator||"")+c,u||".."!==c&&"."!==c&&"this"!==c)i.push(c);else{if(i.length>0)throw new Kp.default("Invalid path: "+r,{loc:n});".."===c&&s++}}return{type:"PathExpression",data:t,depth:s,parts:i,original:r,loc:n}},Fp=function(t,e,n,r,i,s){var o=r.charAt(3)||r.charAt(2),a="{"!==o&&"&"!==o;return{type:/\*/.test(r)?"Decorator":"MustacheStatement",path:t,params:e,hash:n,escaped:a,strip:i,loc:this.locInfo(s)}},$p=function(t,e,n,r){Jp(t,n),r=this.locInfo(r);var i={type:"Program",body:e,strip:{},loc:r};return{type:"BlockStatement",path:t.path,params:t.params,hash:t.hash,program:i,openStrip:{},inverseStrip:{},closeStrip:{},loc:r}},Vp=function(t,e,n,r,i,s){r&&r.path&&Jp(t,r);var o=/\*/.test(t.open);e.blockParams=t.blockParams;var a=void 0,c=void 0;if(n){if(o)throw new Kp.default("Unexpected inverse block on decorator",n);n.chain&&(n.program.body[0].closeStrip=r.strip),c=n.strip,a=n.program}i&&(i=a,a=e,e=i);return{type:o?"DecoratorBlock":"BlockStatement",path:t.path,params:t.params,hash:t.hash,program:e,inverse:a,openStrip:t.strip,inverseStrip:c,closeStrip:r&&r.strip,loc:this.locInfo(s)}},zp=function(t,e){if(!e&&t.length){var n=t[0].loc,r=t[t.length-1].loc;n&&r&&(e={source:n.source,start:{line:n.start.line,column:n.start.column},end:{line:r.end.line,column:r.end.column}})}return{type:"Program",body:t,strip:{},loc:e}},qp=function(t,e,n,r){return Jp(t,n),{type:"PartialBlockStatement",name:t.path,params:t.params,hash:t.hash,program:e,openStrip:t.strip,closeStrip:n&&n.strip,loc:this.locInfo(r)}};var Kp=function(t){return t&&t.__esModule?t:{default:t}}(Yl);function Jp(t,e){if(e=e.path?e.path.original:e,t.path.original!==e){var n={loc:t.path.loc};throw new Kp.default(t.path.original+" doesn't match "+e,n)}}var Xp=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(Gp);mp=wp.default;var Yp,Qp,Zp,td={};function ed(t,e){return"Program"===t.type?t:(wp.default.yy=td,td.locInfo=function(t){return new td.SourceLocation(e&&e.srcName,t)},wp.default.parse(t))}function nd(t){return t&&t.__esModule?t:{default:t}}Rl(td,Xp),Yp=od,Qp=function(t,e,n){if(null==t||"string"!=typeof t&&"Program"!==t.type)throw new rd.default("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+t);"data"in(e=e||{})||(e.data=!0);e.compat&&(e.useDepths=!0);var r=n.parse(t,e),i=(new n.Compiler).compile(r,e);return(new n.JavaScriptCompiler).compile(i,e)},Zp=function(t,e,n){void 0===e&&(e={});if(null==t||"string"!=typeof t&&"Program"!==t.type)throw new rd.default("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+t);"data"in(e=Rl({},e))||(e.data=!0);e.compat&&(e.useDepths=!0);var r=void 0;function i(){var r=n.parse(t,e),i=(new n.Compiler).compile(r,e),s=(new n.JavaScriptCompiler).compile(i,e,void 0,!0);return n.template(s)}function s(t,e){return r||(r=i()),r.call(this,t,e)}return s._setup=function(t){return r||(r=i()),r._setup(t)},s._child=function(t,e,n,s){return r||(r=i()),r._child(t,e,n,s)},s};var rd=nd(Yl),id=nd(pp),sd=[].slice;function od(){}function ad(t,e){if(t===e)return!0;if(Fl(t)&&Fl(e)&&t.length===e.length){for(var n=0;n<t.length;n++)if(!ad(t[n],e[n]))return!1;return!0}}function cd(t){if(!t.path.parts){var e=t.path;t.path={type:"PathExpression",data:!1,depth:0,parts:[e.original+""],original:e.original+"",loc:e.loc}}}od.prototype={compiler:od,equals:function(t){var e=this.opcodes.length;if(t.opcodes.length!==e)return!1;for(var n=0;n<e;n++){var r=this.opcodes[n],i=t.opcodes[n];if(r.opcode!==i.opcode||!ad(r.args,i.args))return!1}e=this.children.length;for(n=0;n<e;n++)if(!this.children[n].equals(t.children[n]))return!1;return!0},guid:0,compile:function(t,e){return this.sourceNode=[],this.opcodes=[],this.children=[],this.options=e,this.stringParams=e.stringParams,this.trackIds=e.trackIds,e.blockParams=e.blockParams||[],e.knownHelpers=Rl(Object.create(null),{helperMissing:!0,blockHelperMissing:!0,each:!0,if:!0,unless:!0,with:!0,log:!0,lookup:!0},e.knownHelpers),this.accept(t)},compileProgram:function(t){var e=(new this.compiler).compile(t,this.options),n=this.guid++;return this.usePartial=this.usePartial||e.usePartial,this.children[n]=e,this.useDepths=this.useDepths||e.useDepths,n},accept:function(t){if(!this[t.type])throw new rd.default("Unknown type: "+t.type,t);this.sourceNode.unshift(t);var e=this[t.type](t);return this.sourceNode.shift(),e},Program:function(t){this.options.blockParams.unshift(t.blockParams);for(var e=t.body,n=e.length,r=0;r<n;r++)this.accept(e[r]);return this.options.blockParams.shift(),this.isSimple=1===n,this.blockParams=t.blockParams?t.blockParams.length:0,this},BlockStatement:function(t){cd(t);var e=t.program,n=t.inverse;e=e&&this.compileProgram(e),n=n&&this.compileProgram(n);var r=this.classifySexpr(t);"helper"===r?this.helperSexpr(t,e,n):"simple"===r?(this.simpleSexpr(t),this.opcode("pushProgram",e),this.opcode("pushProgram",n),this.opcode("emptyHash"),this.opcode("blockValue",t.path.original)):(this.ambiguousSexpr(t,e,n),this.opcode("pushProgram",e),this.opcode("pushProgram",n),this.opcode("emptyHash"),this.opcode("ambiguousBlockValue")),this.opcode("append")},DecoratorBlock:function(t){var e=t.program&&this.compileProgram(t.program),n=this.setupFullMustacheParams(t,e,void 0),r=t.path;this.useDecorators=!0,this.opcode("registerDecorator",n.length,r.original)},PartialStatement:function(t){this.usePartial=!0;var e=t.program;e&&(e=this.compileProgram(t.program));var n=t.params;if(n.length>1)throw new rd.default("Unsupported number of partial arguments: "+n.length,t);n.length||(this.options.explicitPartialContext?this.opcode("pushLiteral","undefined"):n.push({type:"PathExpression",parts:[],depth:0}));var r=t.name.original,i="SubExpression"===t.name.type;i&&this.accept(t.name),this.setupFullMustacheParams(t,e,void 0,!0);var s=t.indent||"";this.options.preventIndent&&s&&(this.opcode("appendContent",s),s=""),this.opcode("invokePartial",i,r,s),this.opcode("append")},PartialBlockStatement:function(t){this.PartialStatement(t)},MustacheStatement:function(t){this.SubExpression(t),t.escaped&&!this.options.noEscape?this.opcode("appendEscaped"):this.opcode("append")},Decorator:function(t){this.DecoratorBlock(t)},ContentStatement:function(t){t.value&&this.opcode("appendContent",t.value)},CommentStatement:function(){},SubExpression:function(t){cd(t);var e=this.classifySexpr(t);"simple"===e?this.simpleSexpr(t):"helper"===e?this.helperSexpr(t):this.ambiguousSexpr(t)},ambiguousSexpr:function(t,e,n){var r=t.path,i=r.parts[0],s=null!=e||null!=n;this.opcode("getContext",r.depth),this.opcode("pushProgram",e),this.opcode("pushProgram",n),r.strict=!0,this.accept(r),this.opcode("invokeAmbiguous",i,s)},simpleSexpr:function(t){var e=t.path;e.strict=!0,this.accept(e),this.opcode("resolvePossibleLambda")},helperSexpr:function(t,e,n){var r=this.setupFullMustacheParams(t,e,n),i=t.path,s=i.parts[0];if(this.options.knownHelpers[s])this.opcode("invokeKnownHelper",r.length,s);else{if(this.options.knownHelpersOnly)throw new rd.default("You specified knownHelpersOnly, but used the unknown helper "+s,t);i.strict=!0,i.falsy=!0,this.accept(i),this.opcode("invokeHelper",r.length,i.original,id.default.helpers.simpleId(i))}},PathExpression:function(t){this.addDepth(t.depth),this.opcode("getContext",t.depth);var e=t.parts[0],n=id.default.helpers.scopedId(t),r=!t.depth&&!n&&this.blockParamIndex(e);r?this.opcode("lookupBlockParam",r,t.parts):e?t.data?(this.options.data=!0,this.opcode("lookupData",t.depth,t.parts,t.strict)):this.opcode("lookupOnContext",t.parts,t.falsy,t.strict,n):this.opcode("pushContext")},StringLiteral:function(t){this.opcode("pushString",t.value)},NumberLiteral:function(t){this.opcode("pushLiteral",t.value)},BooleanLiteral:function(t){this.opcode("pushLiteral",t.value)},UndefinedLiteral:function(){this.opcode("pushLiteral","undefined")},NullLiteral:function(){this.opcode("pushLiteral","null")},Hash:function(t){var e=t.pairs,n=0,r=e.length;for(this.opcode("pushHash");n<r;n++)this.pushParam(e[n].value);for(;n--;)this.opcode("assignToHash",e[n].key);this.opcode("popHash")},opcode:function(t){this.opcodes.push({opcode:t,args:sd.call(arguments,1),loc:this.sourceNode[0].loc})},addDepth:function(t){t&&(this.useDepths=!0)},classifySexpr:function(t){var e=id.default.helpers.simpleId(t.path),n=e&&!!this.blockParamIndex(t.path.parts[0]),r=!n&&id.default.helpers.helperExpression(t),i=!n&&(r||e);if(i&&!r){var s=t.path.parts[0],o=this.options;o.knownHelpers[s]?r=!0:o.knownHelpersOnly&&(i=!1)}return r?"helper":i?"ambiguous":"simple"},pushParams:function(t){for(var e=0,n=t.length;e<n;e++)this.pushParam(t[e])},pushParam:function(t){var e=null!=t.value?t.value:t.original||"";if(this.stringParams)e.replace&&(e=e.replace(/^(\.?\.\/)*/g,"").replace(/\//g,".")),t.depth&&this.addDepth(t.depth),this.opcode("getContext",t.depth||0),this.opcode("pushStringParam",e,t.type),"SubExpression"===t.type&&this.accept(t);else{if(this.trackIds){var n=void 0;if(!t.parts||id.default.helpers.scopedId(t)||t.depth||(n=this.blockParamIndex(t.parts[0])),n){var r=t.parts.slice(1).join(".");this.opcode("pushId","BlockParam",n,r)}else(e=t.original||e).replace&&(e=e.replace(/^this(?:\.|$)/,"").replace(/^\.\//,"").replace(/^\.$/,"")),this.opcode("pushId",t.type,e)}this.accept(t)}},setupFullMustacheParams:function(t,e,n,r){var i=t.params;return this.pushParams(i),this.opcode("pushProgram",e),this.opcode("pushProgram",n),t.hash?this.accept(t.hash):this.opcode("emptyHash",r),i},blockParamIndex:function(t){for(var e=0,n=this.options.blockParams.length;e<n;e++){var r=this.options.blockParams[e],i=r&&xl(r,t);if(r&&i>=0)return[e,i]}}};var ud={};function ld(t){return t&&t.__esModule?t:{default:t}}ud.__esModule=!0;var hd=ld(Yl),pd={__esModule:!0},dd=void 0;try{if("function"!=typeof define||!define.amd){var fd=s("9QQ9J");dd=fd.SourceNode}}catch(t){}function gd(t,e,n){if(Fl(t)){for(var r=[],i=0,s=t.length;i<s;i++)r.push(e.wrap(t[i],n));return r}return"boolean"==typeof t||"number"==typeof t?t+"":t}function md(t){this.srcFile=t,this.source=[]}dd||((dd=function(t,e,n,r){this.src="",r&&this.add(r)}).prototype={add:function(t){Fl(t)&&(t=t.join("")),this.src+=t},prepend:function(t){Fl(t)&&(t=t.join("")),this.src=t+this.src},toStringWithSourceMap:function(){return{code:this.toString()}},toString:function(){return this.src}}),md.prototype={isEmpty:function(){return!this.source.length},prepend:function(t,e){this.source.unshift(this.wrap(t,e))},push:function(t,e){this.source.push(this.wrap(t,e))},merge:function(){var t=this.empty();return this.each((function(e){t.add(["  ",e,"\n"])})),t},each:function(t){for(var e=0,n=this.source.length;e<n;e++)t(this.source[e])},empty:function(){var t=this.currentLocation||{start:{}};return new dd(t.start.line,t.start.column,this.srcFile)},wrap:function(t){var e=arguments.length<=1||void 0===arguments[1]?this.currentLocation||{start:{}}:arguments[1];return t instanceof dd?t:(t=gd(t,this,e),new dd(e.start.line,e.start.column,this.srcFile,t))},functionCall:function(t,e,n){return n=this.generateList(n),this.wrap([t,e?"."+e+"(":"(",n,")"])},quotedString:function(t){return'"'+(t+"").replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'},objectLiteral:function(t){var e=this,n=[];Object.keys(t).forEach((function(r){var i=gd(t[r],e);"undefined"!==i&&n.push([e.quotedString(r),":",i])}));var r=this.generateList(n);return r.prepend("{"),r.add("}"),r},generateList:function(t){for(var e=this.empty(),n=0,r=t.length;n<r;n++)n&&e.add(","),e.add(gd(t[n],this));return e},generateArray:function(t){var e=this.generateList(t);return e.prepend("["),e.add("]"),e}},pd.default=md;var vd=ld(pd=pd.default);function yd(t){this.value=t}function _d(){}_d.prototype={nameLookup:function(t,e){return this.internalNameLookup(t,e)},depthedLookup:function(t){return[this.aliasable("container.lookup"),"(depths, ",JSON.stringify(t),")"]},compilerInfo:function(){return[El,Il[El]]},appendToBuffer:function(t,e,n){return Fl(t)||(t=[t]),t=this.source.wrap(t,e),this.environment.isSimple?["return ",t,";"]:n?["buffer += ",t,";"]:(t.appendToBuffer=!0,t)},initializeBuffer:function(){return this.quotedString("")},internalNameLookup:function(t,e){return this.lookupPropertyFunctionIsUsed=!0,["lookupProperty(",t,",",JSON.stringify(e),")"]},lookupPropertyFunctionIsUsed:!1,compile:function(t,e,n,r){this.environment=t,this.options=e,this.stringParams=this.options.stringParams,this.trackIds=this.options.trackIds,this.precompile=!r,this.name=this.environment.name,this.isChild=!!n,this.context=n||{decorators:[],programs:[],environments:[]},this.preamble(),this.stackSlot=0,this.stackVars=[],this.aliases={},this.registers={list:[]},this.hashes=[],this.compileStack=[],this.inlineStack=[],this.blockParams=[],this.compileChildren(t,e),this.useDepths=this.useDepths||t.useDepths||t.useDecorators||this.options.compat,this.useBlockParams=this.useBlockParams||t.useBlockParams;var i=t.opcodes,s=void 0,o=void 0,a=void 0,c=void 0;for(a=0,c=i.length;a<c;a++)s=i[a],this.source.currentLocation=s.loc,o=o||s.loc,this[s.opcode].apply(this,s.args);if(this.source.currentLocation=o,this.pushSource(""),this.stackSlot||this.inlineStack.length||this.compileStack.length)throw new hd.default("Compile completed with content left on stack");this.decorators.isEmpty()?this.decorators=void 0:(this.useDecorators=!0,this.decorators.prepend(["var decorators = container.decorators, ",this.lookupPropertyFunctionVarDeclaration(),";\n"]),this.decorators.push("return fn;"),r?this.decorators=Function.apply(this,["fn","props","container","depth0","data","blockParams","depths",this.decorators.merge()]):(this.decorators.prepend("function(fn, props, container, depth0, data, blockParams, depths) {\n"),this.decorators.push("}\n"),this.decorators=this.decorators.merge()));var u=this.createFunctionContext(r);if(this.isChild)return u;var l={compiler:this.compilerInfo(),main:u};this.decorators&&(l.main_d=this.decorators,l.useDecorators=!0);var h=this.context,p=h.programs,d=h.decorators;for(a=0,c=p.length;a<c;a++)p[a]&&(l[a]=p[a],d[a]&&(l[a+"_d"]=d[a],l.useDecorators=!0));return this.environment.usePartial&&(l.usePartial=!0),this.options.data&&(l.useData=!0),this.useDepths&&(l.useDepths=!0),this.useBlockParams&&(l.useBlockParams=!0),this.options.compat&&(l.compat=!0),r?l.compilerOptions=this.options:(l.compiler=JSON.stringify(l.compiler),this.source.currentLocation={start:{line:1,column:0}},l=this.objectLiteral(l),e.srcName?(l=l.toStringWithSourceMap({file:e.destName})).map=l.map&&l.map.toString():l=l.toString()),l},preamble:function(){this.lastContext=0,this.source=new vd.default(this.options.srcName),this.decorators=new vd.default(this.options.srcName)},createFunctionContext:function(t){var e=this,n="",r=this.stackVars.concat(this.registers.list);r.length>0&&(n+=", "+r.join(", "));var i=0;Object.keys(this.aliases).forEach((function(t){var r=e.aliases[t];r.children&&r.referenceCount>1&&(n+=", alias"+ ++i+"="+t,r.children[0]="alias"+i)})),this.lookupPropertyFunctionIsUsed&&(n+=", "+this.lookupPropertyFunctionVarDeclaration());var s=["container","depth0","helpers","partials","data"];(this.useBlockParams||this.useDepths)&&s.push("blockParams"),this.useDepths&&s.push("depths");var o=this.mergeSource(n);return t?(s.push(o),Function.apply(this,s)):this.source.wrap(["function(",s.join(","),") {\n  ",o,"}"])},mergeSource:function(t){var e=this.environment.isSimple,n=!this.forceBuffer,r=void 0,i=void 0,s=void 0,o=void 0;return this.source.each((function(t){t.appendToBuffer?(s?t.prepend("  + "):s=t,o=t):(s&&(i?s.prepend("buffer += "):r=!0,o.add(";"),s=o=void 0),i=!0,e||(n=!1))})),n?s?(s.prepend("return "),o.add(";")):i||this.source.push('return "";'):(t+=", buffer = "+(r?"":this.initializeBuffer()),s?(s.prepend("return buffer + "),o.add(";")):this.source.push("return buffer;")),t&&this.source.prepend("var "+t.substring(2)+(r?"":";\n")),this.source.merge()},lookupPropertyFunctionVarDeclaration:function(){return"\n      lookupProperty = container.lookupProperty || function(parent, propertyName) {\n        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {\n          return parent[propertyName];\n        }\n        return undefined\n    }\n    ".trim()},blockValue:function(t){var e=this.aliasable("container.hooks.blockHelperMissing"),n=[this.contextName(0)];this.setupHelperArgs(t,0,n);var r=this.popStack();n.splice(1,0,r),this.push(this.source.functionCall(e,"call",n))},ambiguousBlockValue:function(){var t=this.aliasable("container.hooks.blockHelperMissing"),e=[this.contextName(0)];this.setupHelperArgs("",0,e,!0),this.flushInline();var n=this.topStack();e.splice(1,0,n),this.pushSource(["if (!",this.lastHelper,") { ",n," = ",this.source.functionCall(t,"call",e),"}"])},appendContent:function(t){this.pendingContent?t=this.pendingContent+t:this.pendingLocation=this.source.currentLocation,this.pendingContent=t},append:function(){if(this.isInline())this.replaceStack((function(t){return[" != null ? ",t,' : ""']})),this.pushSource(this.appendToBuffer(this.popStack()));else{var t=this.popStack();this.pushSource(["if (",t," != null) { ",this.appendToBuffer(t,void 0,!0)," }"]),this.environment.isSimple&&this.pushSource(["else { ",this.appendToBuffer("''",void 0,!0)," }"])}},appendEscaped:function(){this.pushSource(this.appendToBuffer([this.aliasable("container.escapeExpression"),"(",this.popStack(),")"]))},getContext:function(t){this.lastContext=t},pushContext:function(){this.pushStackLiteral(this.contextName(this.lastContext))},lookupOnContext:function(t,e,n,r){var i=0;r||!this.options.compat||this.lastContext?this.pushContext():this.push(this.depthedLookup(t[i++])),this.resolvePath("context",t,i,e,n)},lookupBlockParam:function(t,e){this.useBlockParams=!0,this.push(["blockParams[",t[0],"][",t[1],"]"]),this.resolvePath("context",e,1)},lookupData:function(t,e,n){t?this.pushStackLiteral("container.data(data, "+t+")"):this.pushStackLiteral("data"),this.resolvePath("data",e,0,!0,n)},resolvePath:function(t,e,n,r,i){var s=this;if(this.options.strict||this.options.assumeObjects)this.push(function(t,e,n,r){var i=e.popStack(),s=0,o=n.length;t&&o--;for(;s<o;s++)i=e.nameLookup(i,n[s],r);return t?[e.aliasable("container.strict"),"(",i,", ",e.quotedString(n[s]),", ",JSON.stringify(e.source.currentLocation)," )"]:i}(this.options.strict&&i,this,e,t));else for(var o=e.length;n<o;n++)this.replaceStack((function(i){var o=s.nameLookup(i,e[n],t);return r?[" && ",o]:[" != null ? ",o," : ",i]}))},resolvePossibleLambda:function(){this.push([this.aliasable("container.lambda"),"(",this.popStack(),", ",this.contextName(0),")"])},pushStringParam:function(t,e){this.pushContext(),this.pushString(e),"SubExpression"!==e&&("string"==typeof t?this.pushString(t):this.pushStackLiteral(t))},emptyHash:function(t){this.trackIds&&this.push("{}"),this.stringParams&&(this.push("{}"),this.push("{}")),this.pushStackLiteral(t?"undefined":"{}")},pushHash:function(){this.hash&&this.hashes.push(this.hash),this.hash={values:{},types:[],contexts:[],ids:[]}},popHash:function(){var t=this.hash;this.hash=this.hashes.pop(),this.trackIds&&this.push(this.objectLiteral(t.ids)),this.stringParams&&(this.push(this.objectLiteral(t.contexts)),this.push(this.objectLiteral(t.types))),this.push(this.objectLiteral(t.values))},pushString:function(t){this.pushStackLiteral(this.quotedString(t))},pushLiteral:function(t){this.pushStackLiteral(t)},pushProgram:function(t){null!=t?this.pushStackLiteral(this.programExpression(t)):this.pushStackLiteral(null)},registerDecorator:function(t,e){var n=this.nameLookup("decorators",e,"decorator"),r=this.setupHelperArgs(e,t);this.decorators.push(["fn = ",this.decorators.functionCall(n,"",["fn","props","container",r])," || fn;"])},invokeHelper:function(t,e,n){var r=this.popStack(),i=this.setupHelper(t,e),s=[];n&&s.push(i.name),s.push(r),this.options.strict||s.push(this.aliasable("container.hooks.helperMissing"));var o=["(",this.itemsSeparatedBy(s,"||"),")"],a=this.source.functionCall(o,"call",i.callParams);this.push(a)},itemsSeparatedBy:function(t,e){var n=[];n.push(t[0]);for(var r=1;r<t.length;r++)n.push(e,t[r]);return n},invokeKnownHelper:function(t,e){var n=this.setupHelper(t,e);this.push(this.source.functionCall(n.name,"call",n.callParams))},invokeAmbiguous:function(t,e){this.useRegister("helper");var n=this.popStack();this.emptyHash();var r=this.setupHelper(0,t,e),i=["(","(helper = ",this.lastHelper=this.nameLookup("helpers",t,"helper")," || ",n,")"];this.options.strict||(i[0]="(helper = ",i.push(" != null ? helper : ",this.aliasable("container.hooks.helperMissing"))),this.push(["(",i,r.paramsInit?["),(",r.paramsInit]:[],"),","(typeof helper === ",this.aliasable('"function"')," ? ",this.source.functionCall("helper","call",r.callParams)," : helper))"])},invokePartial:function(t,e,n){var r=[],i=this.setupParams(e,1,r);t&&(e=this.popStack(),delete i.name),n&&(i.indent=JSON.stringify(n)),i.helpers="helpers",i.partials="partials",i.decorators="container.decorators",t?r.unshift(e):r.unshift(this.nameLookup("partials",e,"partial")),this.options.compat&&(i.depths="depths"),i=this.objectLiteral(i),r.push(i),this.push(this.source.functionCall("container.invokePartial","",r))},assignToHash:function(t){var e=this.popStack(),n=void 0,r=void 0,i=void 0;this.trackIds&&(i=this.popStack()),this.stringParams&&(r=this.popStack(),n=this.popStack());var s=this.hash;n&&(s.contexts[t]=n),r&&(s.types[t]=r),i&&(s.ids[t]=i),s.values[t]=e},pushId:function(t,e,n){"BlockParam"===t?this.pushStackLiteral("blockParams["+e[0]+"].path["+e[1]+"]"+(n?" + "+JSON.stringify("."+n):"")):"PathExpression"===t?this.pushString(e):"SubExpression"===t?this.pushStackLiteral("true"):this.pushStackLiteral("null")},compiler:_d,compileChildren:function(t,e){for(var n=t.children,r=void 0,i=void 0,s=0,o=n.length;s<o;s++){r=n[s],i=new this.compiler;var a=this.matchExistingProgram(r);if(null==a){this.context.programs.push("");var c=this.context.programs.length;r.index=c,r.name="program"+c,this.context.programs[c]=i.compile(r,e,this.context,!this.precompile),this.context.decorators[c]=i.decorators,this.context.environments[c]=r,this.useDepths=this.useDepths||i.useDepths,this.useBlockParams=this.useBlockParams||i.useBlockParams,r.useDepths=this.useDepths,r.useBlockParams=this.useBlockParams}else r.index=a.index,r.name="program"+a.index,this.useDepths=this.useDepths||a.useDepths,this.useBlockParams=this.useBlockParams||a.useBlockParams}},matchExistingProgram:function(t){for(var e=0,n=this.context.environments.length;e<n;e++){var r=this.context.environments[e];if(r&&r.equals(t))return r}},programExpression:function(t){var e=this.environment.children[t],n=[e.index,"data",e.blockParams];return(this.useBlockParams||this.useDepths)&&n.push("blockParams"),this.useDepths&&n.push("depths"),"container.program("+n.join(", ")+")"},useRegister:function(t){this.registers[t]||(this.registers[t]=!0,this.registers.list.push(t))},push:function(t){return t instanceof yd||(t=this.source.wrap(t)),this.inlineStack.push(t),t},pushStackLiteral:function(t){this.push(new yd(t))},pushSource:function(t){this.pendingContent&&(this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent),this.pendingLocation)),this.pendingContent=void 0),t&&this.source.push(t)},replaceStack:function(t){var e=["("],n=void 0,r=void 0,i=void 0;if(!this.isInline())throw new hd.default("replaceStack on non-inline");var s=this.popStack(!0);if(s instanceof yd)e=["(",n=[s.value]],i=!0;else{r=!0;var o=this.incrStack();e=["((",this.push(o)," = ",s,")"],n=this.topStack()}var a=t.call(this,n);i||this.popStack(),r&&this.stackSlot--,this.push(e.concat(a,")"))},incrStack:function(){return this.stackSlot++,this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot),this.topStackName()},topStackName:function(){return"stack"+this.stackSlot},flushInline:function(){var t=this.inlineStack;this.inlineStack=[];for(var e=0,n=t.length;e<n;e++){var r=t[e];if(r instanceof yd)this.compileStack.push(r);else{var i=this.incrStack();this.pushSource([i," = ",r,";"]),this.compileStack.push(i)}}},isInline:function(){return this.inlineStack.length},popStack:function(t){var e=this.isInline(),n=(e?this.inlineStack:this.compileStack).pop();if(!t&&n instanceof yd)return n.value;if(!e){if(!this.stackSlot)throw new hd.default("Invalid stack pop");this.stackSlot--}return n},topStack:function(){var t=this.isInline()?this.inlineStack:this.compileStack,e=t[t.length-1];return e instanceof yd?e.value:e},contextName:function(t){return this.useDepths&&t?"depths["+t+"]":"depth"+t},quotedString:function(t){return this.source.quotedString(t)},objectLiteral:function(t){return this.source.objectLiteral(t)},aliasable:function(t){var e=this.aliases[t];return e?(e.referenceCount++,e):((e=this.aliases[t]=this.source.wrap(t)).aliasable=!0,e.referenceCount=1,e)},setupHelper:function(t,e,n){var r=[];return{params:r,paramsInit:this.setupHelperArgs(e,t,r,n),name:this.nameLookup("helpers",e,"helper"),callParams:[this.aliasable(this.contextName(0)+" != null ? "+this.contextName(0)+" : (container.nullContext || {})")].concat(r)}},setupParams:function(t,e,n){var r={},i=[],s=[],o=[],a=!n,c=void 0;a&&(n=[]),r.name=this.quotedString(t),r.hash=this.popStack(),this.trackIds&&(r.hashIds=this.popStack()),this.stringParams&&(r.hashTypes=this.popStack(),r.hashContexts=this.popStack());var u=this.popStack(),l=this.popStack();(l||u)&&(r.fn=l||"container.noop",r.inverse=u||"container.noop");for(var h=e;h--;)c=this.popStack(),n[h]=c,this.trackIds&&(o[h]=this.popStack()),this.stringParams&&(s[h]=this.popStack(),i[h]=this.popStack());return a&&(r.args=this.source.generateArray(n)),this.trackIds&&(r.ids=this.source.generateArray(o)),this.stringParams&&(r.types=this.source.generateArray(s),r.contexts=this.source.generateArray(i)),this.options.data&&(r.data="data"),this.useBlockParams&&(r.blockParams="blockParams"),r},setupHelperArgs:function(t,e,n,r){var i=this.setupParams(t,e,n);return i.loc=JSON.stringify(this.source.currentLocation),i=this.objectLiteral(i),r?(this.useRegister("options"),n.push("options"),["options=",i]):n?(n.push(i),""):i}},function(){for(var t="break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "),e=_d.RESERVED_WORDS={},n=0,r=t.length;n<r;n++)e[t[n]]=!0}(),_d.isValidJavaScriptVariableName=function(t){return!_d.RESERVED_WORDS[t]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(t)},ud.default=_d;var bd=ml(ud=ud.default),wd=ml(Ep),Sd=ml(ap),Ed=hp.default.create;function kd(){var t=Ed();return t.compile=function(e,n){return Zp(e,n,t)},t.precompile=function(e,n){return Qp(e,n,t)},t.AST=vp.default,t.Compiler=Yp,t.JavaScriptCompiler=bd.default,t.Parser=mp,t.parse=gp,t.parseWithoutProcessing=fp,t}var Id=kd();Id.create=kd,Sd.default(Id),Id.Visitor=wd.default,Id.default=Id,gl.default=Id;var Td,Cd,Pd=(gl=gl.default).default;Td=function(t){return(new Od).accept(t)},Cd=Od;var Ad=function(t){return t&&t.__esModule?t:{default:t}}(Ep);function Od(){this.padding=0}Od.prototype=new Ad.default,Od.prototype.pad=function(t){for(var e="",n=0,r=this.padding;n<r;n++)e+="  ";return e+=t+"\n"},Od.prototype.Program=function(t){var e="",n=t.body,r=void 0,i=void 0;if(t.blockParams){var s="BLOCK PARAMS: [";for(r=0,i=t.blockParams.length;r<i;r++)s+=" "+t.blockParams[r];s+=" ]",e+=this.pad(s)}for(r=0,i=n.length;r<i;r++)e+=this.accept(n[r]);return this.padding--,e},Od.prototype.MustacheStatement=function(t){return this.pad("{{ "+this.SubExpression(t)+" }}")},Od.prototype.Decorator=function(t){return this.pad("{{ DIRECTIVE "+this.SubExpression(t)+" }}")},Od.prototype.BlockStatement=Od.prototype.DecoratorBlock=function(t){var e="";return e+=this.pad(("DecoratorBlock"===t.type?"DIRECTIVE ":"")+"BLOCK:"),this.padding++,e+=this.pad(this.SubExpression(t)),t.program&&(e+=this.pad("PROGRAM:"),this.padding++,e+=this.accept(t.program),this.padding--),t.inverse&&(t.program&&this.padding++,e+=this.pad("{{^}}"),this.padding++,e+=this.accept(t.inverse),this.padding--,t.program&&this.padding--),this.padding--,e},Od.prototype.PartialStatement=function(t){var e="PARTIAL:"+t.name.original;return t.params[0]&&(e+=" "+this.accept(t.params[0])),t.hash&&(e+=" "+this.accept(t.hash)),this.pad("{{> "+e+" }}")},Od.prototype.PartialBlockStatement=function(t){var e="PARTIAL BLOCK:"+t.name.original;return t.params[0]&&(e+=" "+this.accept(t.params[0])),t.hash&&(e+=" "+this.accept(t.hash)),e+=" "+this.pad("PROGRAM:"),this.padding++,e+=this.accept(t.program),this.padding--,this.pad("{{> "+e+" }}")},Od.prototype.ContentStatement=function(t){return this.pad("CONTENT[ '"+t.value+"' ]")},Od.prototype.CommentStatement=function(t){return this.pad("{{! '"+t.value+"' }}")},Od.prototype.SubExpression=function(t){for(var e,n=t.params,r=[],i=0,s=n.length;i<s;i++)r.push(this.accept(n[i]));return n="["+r.join(", ")+"]",e=t.hash?" "+this.accept(t.hash):"",this.accept(t.path)+" "+n+e},Od.prototype.PathExpression=function(t){var e=t.parts.join("/");return(t.data?"@":"")+"PATH:"+e},Od.prototype.StringLiteral=function(t){return'"'+t.value+'"'},Od.prototype.NumberLiteral=function(t){return"NUMBER{"+t.value+"}"},Od.prototype.BooleanLiteral=function(t){return"BOOLEAN{"+t.value+"}"},Od.prototype.UndefinedLiteral=function(){return"UNDEFINED"},Od.prototype.NullLiteral=function(){return"NULL"},Od.prototype.Hash=function(t){for(var e=t.pairs,n=[],r=0,i=e.length;r<i;r++)n.push(this.accept(e[r]));return"HASH{"+n.join(", ")+"}"},Od.prototype.HashPair=function(t){return t.key+"="+this.accept(t.value)},Pd.PrintVisitor=Cd,Pd.print=Td;var Ld=e(Pd).template({1:function(t,e,n,r,i){var s,o=null!=e?e:t.nullContext||{},a=t.hooks.helperMissing,c="function",u=t.escapeExpression,l=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return"  <li class='slider-card' data-action='"+u(typeof(s=null!=(s=l(n,"id")||(null!=e?l(e,"id"):e))?s:a)===c?s.call(o,{name:"id",hash:{},data:i,loc:{start:{line:2,column:39},end:{line:2,column:45}}}):s)+"'>\n    <div class='btn-id'>\n      <button data-id='"+u(typeof(s=null!=(s=l(n,"id")||(null!=e?l(e,"id"):e))?s:a)===c?s.call(o,{name:"id",hash:{},data:i,loc:{start:{line:4,column:23},end:{line:4,column:29}}}):s)+"' class='btn-youtube-slider'>\n        <div class='overlay-btn-youtube-text' data-id='"+u(typeof(s=null!=(s=l(n,"id")||(null!=e?l(e,"id"):e))?s:a)===c?s.call(o,{name:"id",hash:{},data:i,loc:{start:{line:5,column:55},end:{line:5,column:61}}}):s)+"'>\n          <h2 class='btn-youtube-text-slider' data-id='"+u(typeof(s=null!=(s=l(n,"id")||(null!=e?l(e,"id"):e))?s:a)===c?s.call(o,{name:"id",hash:{},data:i,loc:{start:{line:6,column:55},end:{line:6,column:61}}}):s)+"'>Trailer</h2>\n        </div>\n      </button>\n\n    </div>\n    <div class='thumb'>\n      <img\n        class='slider-image'\n        src='https://image.tmdb.org/t/p/w500"+u(typeof(s=null!=(s=l(n,"poster_path")||(null!=e?l(e,"poster_path"):e))?s:a)===c?s.call(o,{name:"poster_path",hash:{},data:i,loc:{start:{line:14,column:44},end:{line:14,column:59}}}):s)+"'\n        alt='"+u(typeof(s=null!=(s=l(n,"title")||(null!=e?l(e,"title"):e))?s:a)===c?s.call(o,{name:"title",hash:{},data:i,loc:{start:{line:15,column:13},end:{line:15,column:22}}}):s)+" "+u(typeof(s=null!=(s=l(n,"name")||(null!=e?l(e,"name"):e))?s:a)===c?s.call(o,{name:"name",hash:{},data:i,loc:{start:{line:15,column:23},end:{line:15,column:31}}}):s)+"'\n        data-id='"+u(typeof(s=null!=(s=l(n,"id")||(null!=e?l(e,"id"):e))?s:a)===c?s.call(o,{name:"id",hash:{},data:i,loc:{start:{line:16,column:17},end:{line:16,column:23}}}):s)+"'\n        data-action='"+u(typeof(s=null!=(s=l(n,"id")||(null!=e?l(e,"id"):e))?s:a)===c?s.call(o,{name:"id",hash:{},data:i,loc:{start:{line:17,column:21},end:{line:17,column:27}}}):s)+"'\n        onerror=\"this.onerror=null;this.src='https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-';\"\n      />\n      <span class='rating-slider'>"+u(typeof(s=null!=(s=l(n,"vote_average")||(null!=e?l(e,"vote_average"):e))?s:a)===c?s.call(o,{name:"vote_average",hash:{},data:i,loc:{start:{line:20,column:34},end:{line:20,column:50}}}):s)+"</span>\n    </div>\n  </li>\n"},compiler:[8,">= 4.3.0"],main:function(t,e,n,r,i){var s;return null!=(s=(t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]})(n,"each").call(null!=e?e:t.nullContext||{},e,{name:"each",hash:{},fn:t.program(1,i,0),inverse:t.noop,data:i,loc:{start:{line:1,column:0},end:{line:23,column:9}}}))?s:""},useData:!0});const Rd=document.querySelector(".js-slider-container");fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=633bd9c8c9bc68a8c4a40449237d5fcd").then((t=>t.json())).then((({results:t})=>t)).then(xd).catch((t=>{Rd.innerHTML=`<img class="catch-error-pagination" src="${errorUrl}" />`}));function xd(t){Rd.innerHTML=Ld(t),vu.createTrailerLink(document.querySelectorAll(".btn-youtube-slider"))}new fl(".glide",{type:"slider",startAt:0,perView:8,autoplay:2e3,hoverpause:!0,bound:!0}).mount(),document.body.onload=function(){setTimeout((function(){var t=document.getElementById("preloader");t.classList.contains("done")||t.classList.add("done")}),1e3)};
//# sourceMappingURL=index.49b629f1.js.map
