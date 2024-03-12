const { offlineFallback, warmStrategyCache } = require('workbox-recipes');
const { CacheFirst, StaleWhileRevalidate } = require('workbox-strategies');
const { registerRoute } = require('workbox-routing');
const { CacheableResponsePlugin } = require('workbox-cacheable-response');
const { ExpirationPlugin } = require('workbox-expiration');
const { precacheAndRoute } = require('workbox-precaching/precacheAndRoute');

precacheAndRoute(self.__WB_MANIFEST);

const pageCache = new CacheFirst({
  cacheName: 'page-cache',
  plugins: [
    new CacheableResponsePlugin({
      statuses: [0, 200],
    }),
    new ExpirationPlugin({
      maxAgeSeconds: 30 * 24 * 60 * 60,
    }),
  ],
});

warmStrategyCache({
  urls: ['/index.html', '/'],
  strategy: pageCache,
});

registerRoute(({ request }) => request.mode === 'navigate', pageCache);

// // TODO: Implement asset caching
// registerRoute();

// Set up asset cache
registerRoute(
  // Here we define the callback function that will filter the requests we want to cache (in this case, JS and CSS files)
  ({ request }) => ['style', 'script', 'worker'].includes(request.destination),
  new StaleWhileRevalidate({
    // Name of the cache storage.
    cacheName: 'asset-cache',
    plugins: [
      // This plugin will cache responses with these headers to a maximum-age of 30 days
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);




// // Register a route for caching assets (scripts, stylesheets, and images)
// registerRoute(
//   // Match requests for scripts, stylesheets, and images
//   ({ request }) => request.destination === 'script' ||
//                    request.destination === 'style' ||
//                    request.destination === 'image',
  
//   // Use the CacheFirst strategy for caching assets
//   new CacheFirst({
//     // Specify the name of the cache where assets will be stored
//     cacheName: 'assets-cache',
    
//     // Configure plugins for the CacheFirst strategy
//     plugins: [
//       // Ensure only responses with status codes 0 and 200 are cached
//       new CacheableResponsePlugin({
//         statuses: [0, 200],
//       }),
      
//       // Set limits on the number of entries and maximum age for cached assets
//       new ExpirationPlugin({
//         maxEntries: 50,
//         maxAgeSeconds: 7 * 24 * 60 * 60, // 7 days
//       }),
//     ],
//   })
// );