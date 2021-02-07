'use strict';

const version = '9::';

self.addEventListener('install', (event) => {
  console.log('WORKER: install event in progress.');
  event.waitUntil(
      caches.open(`${version}fundamentals`)
          .then(
              (cache) => cache.addAll(['/'])
          )
          .then(
              () => {
                console.log('WORKER: install completed');
              }
          )
  );
});

self.addEventListener('fetch', (event) => {
  console.log('WORKER: fetch event in progress.');
  if (event.request.method !== 'GET') {
    console.log('WORKER: fetch event ignored.', event.request.method, event.request.url);
    return;
  }

  event.respondWith(
      caches
          .match(event.request)
          .then((cached) => {
            const unableToResolve = async () => {
              console.log('WORKER FML: fetch request failed in both cache and network.');
              const localforageUrl =
              '../static/plugins/ep_offline_edit/static/js/lib/localForage.js';
              /*
              if (event.request.url.indexOf('/p/') !== -1) {

                // globals localforage
                const url = new URL(event.request.url);
                const padId = url.pathname.split('/')[url.pathname.split.length];
                console.log(padId, event.request);
                // load localstorage
                const script = document.createElement('script');
                script.src = localforageUrl;
                document.head.appendChild(script);
                setTimeout(async () => {
                  const padHTML = await localforage.get(padId);
                  console.log(padHTML);
                }, 1000);
              }
              */
              console.log('new response...');
              return new Response('<h1>Etherpad Unavailable</h1>' +
                `<script type="text/javascript" src="${localforageUrl}"></script>` +
                `<script type="text/javascript">
                localforage.getItem('ERgOOQZETqB8fkI-qwui', function(err, value){
                  console.log(value);
                });
                </script>
              `, {
                status: 503,
                statusText: 'Service Unavailable',
                headers: new Headers({
                  'Content-Type': 'text/html',
                }),
              });
            };

            const fetchedFromNetwork = (response) => {
              const cacheCopy = response.clone();
              console.log('WORKER: fetch response from network.', event.request.url);
              caches
                  .open(`${version}pages`)
                  .then((cache) => {
                    cache.put(event.request, cacheCopy);
                  })
                  .then(() => {
                    console.log('WORKER: fetch response stored in cache.', event.request.url);
                  });
              return response;
            };

            const networked = fetch(event.request)
                .then(fetchedFromNetwork, unableToResolve)
                .catch(unableToResolve);
            console.log(
                'WORKER: fetch event', cached ? '(cached)' : '(network)', event.request.url);
            return cached || networked;
          })
  );
});

self.addEventListener('activate', (event) => {
  console.log('WORKER: activate event in progress.');

  event.waitUntil(
      caches.keys()
          .then((keys) => Promise.all(
              keys
                  .filter((key) => !key.startsWith(version)
                  )
                  .map((key) => caches.delete(key)
                  )
          )
          )
          .then(() => {
            console.log('WORKER: activate completed.');
          })
  );
});
