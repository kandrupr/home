"use strict";var precacheConfig=[["/home/index.html","af2496274855a09acb7ce5e415641856"],["/home/static/css/main.7cfe932b.css","f85016394147d1b1f2809dfbc7c4ee63"],["/home/static/js/main.7160f30d.js","60287929b385c86718ea6f07ad2d6315"],["/home/static/media/Resume.3faf07cf.pdf","3faf07cfdd0cb8a40464d30b0e851756"],["/home/static/media/c++-icon.f7782ed8.svg","f7782ed8b8666246bfcc3f8fefc3b858"],["/home/static/media/c-sharp-icon.bc9ef17d.svg","bc9ef17d3ceda09b0f7bffe07ab8d9f3"],["/home/static/media/hex.6633a16d.png","6633a16d942ac9d7e1a4ad258417fc8d"],["/home/static/media/honey-fa2.3a1dad5c.png","3a1dad5c733e059f2a90bcbfb505a708"],["/home/static/media/honey-msu.08446443.png","08446443b43894542854b84ccc038540"],["/home/static/media/java-icon.66517ded.svg","66517ded2b3a6bef72a9c7fc9a1fc931"],["/home/static/media/javascript-icon.90e997a6.svg","90e997a6f9c467a4a06ba484522eb15a"],["/home/static/media/movieP.c4cb663e.jpg","c4cb663e576baab1b4c33e098ed852e4"],["/home/static/media/movieR.268d240c.jpg","268d240c9d27614f1881e1e08774a8b2"],["/home/static/media/php-icon.c14a2693.svg","c14a26931faf067a2c69a757a7ce0e84"],["/home/static/media/pk_about.1549daac.png","1549daacded22acda36212d23c1c84c2"],["/home/static/media/pk_projects.b3a23d48.png","b3a23d4861a6dc3019a59b855cac418e"],["/home/static/media/pkkan-photo.72de162b.jpg","72de162be92c1e527841daead7bfa7ac"],["/home/static/media/python-icon.3b84eb40.svg","3b84eb4026f0c704e7e3d16972bb0e3d"],["/home/static/media/react-icon.e9f3d01c.svg","e9f3d01c242e086f895bde131803b451"],["/home/static/media/sayagata-gray.13a54b5c.png","13a54b5c86e1e1ddf7b7a69b1201d744"],["/home/static/media/seigaiha-strong-red.be52d927.png","be52d927cce96289945f42948e7c5186"],["/home/static/media/seigaiha-strong-white.dd6d2a15.png","dd6d2a15c47c88790694d56108aa964b"],["/home/static/media/slick.b7c9e1e4.woff","b7c9e1e479de3b53f1e4e30ebac2403a"],["/home/static/media/slick.ced611da.eot","ced611daf7709cc778da928fec876475"],["/home/static/media/slick.d41f55a7.ttf","d41f55a78e6f49a5512878df1737e58a"],["/home/static/media/slick.f97e3bbf.svg","f97e3bbf73254b0112091d0192f17aec"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/home/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});