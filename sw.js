const CACHE_NAME      = 'jackwire-v1';
const SONG_CACHE_NAME = 'jackwire-songs';

const filesToCache =
[
    '/',
    '/index.html',
    '/style.css',
    '/script.js',
    '/playlists.js',
    '/logo.png',
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
            // serve from cache if available, otherwise fetch from network
            return cachedResponse || fetch(event.request).catch(() =>
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