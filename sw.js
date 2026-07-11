const CACHE_NAME      = 'jackwire-v1';
const SONG_CACHE_NAME = 'jackwire-songs';

const filesToCache =
[
    '/JackWire/',
    '/JackWire/index.html',
    '/JackWire/style.css',
    '/JackWire/script.js',
    '/JackWire/playlists.js',
    '/JackWire/logo.png',
];

self.addEventListener('install', event =>
{
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(filesToCache))
    );
});

self.addEventListener('fetch', event =>
{
    event.respondWith(
        caches.match(event.request).then(cachedResponse =>
        {
            // serve from cache if available
            if (cachedResponse)
            {
                return cachedResponse;
            }

            // not in cache - fetch from network
            return fetch(event.request).then(response =>
            {
                // if its an mp3, cache it as it loads
                if (event.request.url.endsWith('.mp3') && response.ok)
                {
                    const responseToCache = response.clone();
                    caches.open(SONG_CACHE_NAME).then(cache =>
                    {
                        cache.put(event.request, responseToCache);
                    });
                }

                return response;
            })
            .catch(() =>
            {
                console.log('offline - could not fetch: ' + event.request.url);
            });
        })
    );
});

self.addEventListener('activate', event =>
{
    event.waitUntil(
        caches.keys().then(keys =>
        {
            return Promise.all(
                keys
                    .filter(key => key !== CACHE_NAME && key !== SONG_CACHE_NAME)
                    .map(key => caches.delete(key))
            );
        })
    );
});