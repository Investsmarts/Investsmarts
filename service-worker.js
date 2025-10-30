self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("smartfund-cache").then((cache) => {
      return cache.addAll(["/", "/mining.html", "/manifest.json"]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((r) => r || fetch(e.request))
  );
});
