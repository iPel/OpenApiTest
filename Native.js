!function(e,n,r){var i=n(this[e]=this[e]||{})
"function"==typeof define&&(define.amd||define.cmd)?define(i):"object"==typeof module&&(module.exports=i)}("NativeApi",function(e,n){"use strict"
function r(e,n,r){var i
for(i in n)(n.hasOwnProperty(i)&&!(i in e)||r)&&(e[i]=n[i])
return e}function i(e,n){var r,i,t,o
for(e=(e+"").split("."),n=(n+"").split("."),r=0,o=Math.max(e.length,n.length);o>r;r++){if(i=isFinite(e[r])&&+e[r]||0,t=isFinite(n[r])&&+n[r]||0,t>i)return-1
if(i>t)return 1}return 0}function t(){return+new Date+"_"+j++}function o(n){var r=window.Nativefirebug
if(e.debuging&&r&&r.log&&"pbReport"!==n.method)try{r.log(n)}catch(i){}}function a(n){return!e.isObject(n)||!Object.keys(n).length}function l(e){var n=t()
if(!a(e)){var r={}
for(var i in e)i in k&&(r[k[i]]=e[i])
a(r)||(P[n]=r)}return n}function c(e,n){return a(e)?"":e[n]}function u(e,n){var r={}
if(!a(e))for(var i in e)i in k||(r[i]=e[i])
return r[y]=n,r}function f(r,i){if(!r||!i)return o({from:"NativeCall",callId:r,error:"Valid arguments."}),n
var t=P[r],a=h.call(arguments,2)
if(e.isObject(t)?d(t,i,a,r):e.isArray(t)?t.forEach(function(n){e.isObject(n)&&d(n,i,a,r)}):o({from:"NativeCall",callId:r,log:"Call api without callback."}),I[r]){var l=I[r]
o({from:"NativeCall",url:l.url,ret:JSON.stringify(a)}),delete I[r]}}function d(n,r,i,t){var a=n[r]
e.isFunction(a)?(setTimeout(function(){a.apply(null,i)},0),o({from:"NativeCall",callId:t,callType:E[r],log:"Call back success."})):o({from:"NativeCall",callId:t,callType:E[r],log:"Can not find the callType."})}function s(n,r,i){function t(){f(i,k.failure,{code:-1,msg:"frame error."}),o({from:"send",callId:i,error:"iframe load error."})}i&&(I[i]={url:n})
var a=document.createElement("iframe")
a.style.cssText="display:none;width:0px;height:0px;",a.onerror=function(e){e.stopPropagation()},e.iOS&&(a.onload=t,a.src=n)
var l=document.body||document.documentElement
l.appendChild&&l.appendChild(a),e.android&&(a.onload=t,a.src=n),o({from:"send",url:n}),setTimeout(function(){a&&a.parentNode&&a.parentNode.removeChild(a)},10)}function v(e,n){if(!e||window!==window.top)return null
if(e===N)return p(n)
if(e===w)return m(n)
var r=_+e,i=l(n),t=u(n,i)
r+="?p="+encodeURIComponent(JSON.stringify(t)),s(r,e,i)}function p(e){var n=c(e,"event"),r=c(e,"callback")
if(n&&r)var i="evt-"+n,t={trigger:r}(P[i]=P[i]||[]).push(t)}function m(e){var n=c(e,"event"),r=c(e,"callback")
if(n){var i,t="evt-"+n,o=P[t],a=!1
if(!o)return!1
if(!r)return delete P[t],!0
for(i=o.length-1;i>=0;i--)r===o[i]&&(o.splice(i,1),a=!0)
return a}}var g=navigator.userAgent,b=window.Nativefirebug,h=Array.prototype.slice,Q=Object.prototype.toString,y="__nativeAPICallID__",_="nativeapi://",N="addEventListener",w="removeEventListener",O=/\b(iPad|iPhone|iPod)\b.*? OS ([\d_]+)/,C=/\bAndroid([^;]+)/,V=/\bQQ\/([\d\.]+)/,A=/\bIPadQQ\/([\d\.]+).*?\bQQ\/([\d\.]+)/,S=/\bV1_AND_SQI?_([\d\.]+)(.*? QQ\/([\d\.]+))?/,I=e.__aLogs||{},P=e.__aCallbacks||{},k={permission:1,success:2,failure:3,complete:4,trigger:5},E=["unknow","permission","success","failure","complete","trigger"],j=1
return b?(e.debuging=!0,g=b.ua||g):e.debuging=!1,r(e,function(){var e={},n="Object,Array,Function,String,Number,Boolean,Date,Undefined,Null"
return n.split(",").forEach(function(n,r){e["is"+n]=function(e){return Q.call(e)==="[object "+n+"]"}}),e}()),e.iOS=O.test(g),e.android=C.test(g),e.iOS&&e.android&&(e.iOS=!1),e.version="20180208002",e.QQVersion="0",e.clientVersion="0",e.compare=function(n){return i(e.clientVersion,n)},e.platform=function(){var r,t="browser"
return e.android&&(r=g.match(S))&&r.length&&(e.QQVersion=e.clientVersion=(i(r[1],r[3])>=0?r[1]:r[3])||"0",t="AndroidQQ"),e.iOS&&(e.__RETURN_VALUE=n,(r=g.match(A))&&r.length?(e.clientVersion=r[1]||"0",e.QQVersion=r[2]||e.clientVersion,t="iPadQQ"):(r=g.match(V))&&r.length&&(e.QQVersion=e.clientVersion=r[1]||"0",t="iPhoneQQ"),window.iOSQQApi=e),t}(),j=function(){var e,n=1
for(e in P)P.hasOwnProperty(e)&&(e=+e,isNaN(e)||(n=Math.max(n,e)))
return++n}(),e.__aCallbacks=P,e.__aLogs=I,r(e,{invoke:v,execNativeAPICallback:f,addEventListener:p,removeEventListener:m},!0),e})
