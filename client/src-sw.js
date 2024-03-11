// Register a route for caching assets (scripts, stylesheets, and images)
registerRoute(
  // Match requests for scripts, stylesheets, and images
  ({ request }) => request.destination === 'script' ||
                   request.destination === 'style' ||
                   request.destination === 'image',
  
  // Use the CacheFirst strategy for caching assets
  new CacheFirst({
    // Specify the name of the cache where assets will be stored
    cacheName: 'assets-cache',
    
    // Configure plugins for the CacheFirst strategy
    plugins: [
      // Ensure only responses with status codes 0 and 200 are cached
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      
      // Set limits on the number of entries and maximum age for cached assets
      new ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 7 * 24 * 60 * 60, // 7 days
      }),
    ],
  })
);