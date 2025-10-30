// ✅ TrustDollar SmartFundad PWA Service Worker
const CACHE_NAME = "TrustDollar-v2"; // version badha dena jab site update kare
const urlsToCache = [
  "/",
  "/index.html",
  "/mining.html",
  "/Dashboard.html",
  "/account.html",
  "/manifest.json",
  "/myphoto/trustlogo.png"
];

// 🧱 INSTALL: Cache essential files
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

// ⚙️ ACTIVATE: Clear old caches automatically
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((key) => key !== CACHE_NAME && caches.delete(key)))
    )
  );
  self.clients.claim();
});

// 🌐 FETCH: Try network first, fallback to cache, then homepage
self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const resClone = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, resClone));
        return response;
      })
      .catch(() =>
        caches.match(event.request).then((res) => res || caches.match("/index.html"))
      )
  );
});
