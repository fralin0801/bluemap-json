const CACHE='bluemap-drive-simple-v1';
const ASSETS=['./','./index.html','./manifest.webmanifest'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{
  if(e.request.url.includes('accounts.google.com') || e.request.url.includes('googleapis.com')) return;
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});
