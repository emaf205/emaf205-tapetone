const CACHE='emaf205-tapetone-v1.0.0';
const CORE=['./','./index.html','./styles.css','./app.js','./manifest.webmanifest','./assets/reel.svg','./assets/icon.svg','./assets/icon-192.png','./assets/icon-512.png'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET') return;
  const url=new URL(event.request.url);
  if(url.origin!==location.origin) return;
  event.respondWith(caches.match(event.request).then(hit=>hit||fetch(event.request).then(res=>{
    if(res.ok && ['document','script','style','image','manifest'].includes(event.request.destination)){
      const copy=res.clone(); caches.open(CACHE).then(c=>c.put(event.request,copy));
    }
    return res;
  }).catch(()=>caches.match('./index.html'))));
});
