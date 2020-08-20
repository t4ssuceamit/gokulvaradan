/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable no-restricted-globals */
/* eslint-disable func-names */
/* eslint-disable no-console */
/* eslint-disable no-var */
/* eslint-disable no-undef */
var CACHE_NAME = 'gokul_saved';
var urlsToCache = [
          '/gokulvaradan', 
          '/gokul_saved'
        ];

// Install a service worker
self.addEventListener('install', event => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    }),
  );
});

// Cache and return requests
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      // Cache hit - return response
      if (response) {
        return response;
      }
      return fetch(event.request);
    }),
  );
});

// Update a service worker
self.addEventListener('activate', event => {
  var cacheWhitelist = ['gokul_saved'];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        }),
      );
    }),
  );
});
