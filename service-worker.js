"use strict";var precacheConfig=[["/kandrupr.github.io/index.html","d1f404566a8cd40d1e0e5ad8a77c00fe"],["/kandrupr.github.io/static/css/main.7f812a6b.css","58a492a5bae283e9ea722e5a1ae858ad"],["/kandrupr.github.io/static/js/main.bcdc47f1.js","1400f58d3317d3a3b0f1435f75b986d1"],["/kandrupr.github.io/static/media/hex.6633a16d.png","6633a16d942ac9d7e1a4ad258417fc8d"],["/kandrupr.github.io/static/media/honey_green.57cfa695.png","57cfa6953cda43d2690f62c14c0d6b41"],["/kandrupr.github.io/static/media/honey_grey.b1b6b6a9.png","b1b6b6a910099b11fce045baea1bcc93"],["/kandrupr.github.io/static/media/movieP.c4cb663e.jpg","c4cb663e576baab1b4c33e098ed852e4"],["/kandrupr.github.io/static/media/movieR.268d240c.jpg","268d240c9d27614f1881e1e08774a8b2"],["/kandrupr.github.io/static/media/pkkan-photo.72de162b.jpg","72de162be92c1e527841daead7bfa7ac"],["/kandrupr.github.io/static/media/sayagata-red.214b520c.png","214b520c5eaf884cede0538776d3e05a"],["/kandrupr.github.io/static/media/seigaiha-strong-blue.ea2e7962.png","ea2e79626d28763ff3b39ab9c9eed17e"],["/kandrupr.github.io/static/media/seigaiha-strong-white.dd6d2a15.png","dd6d2a15c47c88790694d56108aa964b"],["/kandrupr.github.io/static/media/slick.b7c9e1e4.woff","b7c9e1e479de3b53f1e4e30ebac2403a"],["/kandrupr.github.io/static/media/slick.ced611da.eot","ced611daf7709cc778da928fec876475"],["/kandrupr.github.io/static/media/slick.d41f55a7.ttf","d41f55a78e6f49a5512878df1737e58a"],["/kandrupr.github.io/static/media/slick.f97e3bbf.svg","f97e3bbf73254b0112091d0192f17aec"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/kandrupr.github.io/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});