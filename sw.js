var cacheName = 'portfolio-pwa'; 
var filesToCache = [
'/',    
'/index.html',    
'/styles/main.css',
'/styles/page.css',  
'/js/main.js',
'/img/svg/'  ];  
self.addEventListener('install', function(e) { 
e.waitUntil(
caches.open(cacheName).then(function(cache) { 
return cache.addAll(filesToCache);   
})    
);  
}); 
/* Serve cached content when offline */ 
self.addEventListener('fetch', function(e) {  
e.respondWith(caches.match(e.request).then(function(response) {  
return response || fetch(e.request);
})   
);  
});