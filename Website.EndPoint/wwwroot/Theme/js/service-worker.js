// service-worker.js

self.addEventListener('fetch', function (event) {
    const url = new URL(event.request.url);

    if (url.protocol === 'http:') {
        const httpsUrl = new URL(url.href);
        httpsUrl.protocol = 'https:';

        event.respondWith(
            fetch(httpsUrl, { mode: 'cors' })
        );
    }
});
