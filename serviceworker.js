
let cachesFile = "version-1";
let mycache = [
      "/static/js/main.chunk.js", 
      "/static/js/0.chunk.js", 
      "/static/js/bundle.js",
      "/movie-list"
    ];

this.addEventListener("install", (e)=>{
  e.waitUntil(()=>{
    caches.open(cachesFile).then((cache)=>{
      console.log("successs");
       cache.addALL([
        "/static/js/main.chunk.js", 
        "/static/js/0.chunk.js", 
        "/static/js/bundle.js",
        "/movie-list",
        "/"
      ]);
    })
  })
});

this.addEventListener("fetch", (e)=>{
  e.respondWith(
    caches.match(e.request).then(
      (res)=>{
          if(res){
            return res
          }
      }
    )
  )
})