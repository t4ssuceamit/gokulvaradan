let cacheData = "gokulv1"

this.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                '/static/js/main.chunk.js',
                '/static/js/0.chunk.js',
                '/static/js/bundle.js',
                '/gokulvaradan',
                '/index.html',
                '/'
            ])
        })
    )
})

this.addEventListener('fetch', (e) => {
        e.respondWith(
            caches.match(e.request).then((resp) =>  {
                    return resp
            })
        )
})