// service-worker.js
const CACHE_NAME = 'cyclelove-v1';
const urlsToCache = [
  '/cyclelove-app/',
  '/cyclelove-app/index.html',
  '/cyclelove-app/manifest.json',
  '/cyclelove-app/icons/icon-192x192.png',
  '/cyclelove-app/icons/icon-512x512.png'
];

// Installation
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Cache ouvert');
        return cache.addAll(urlsToCache);
      })
  );
});

// Intercepte les requêtes
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Retourne le cache ou fetch la requête
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

// Nettoyage des anciens caches
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            console.log('Suppression ancien cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});