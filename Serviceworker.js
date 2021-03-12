
let cachesFile = "version-1";
let caa = ["/static/js/main.chunk.js", "/static/js/0.chunk.js", "/static/js/bundle.js"];

this.addEventListener("install", (e)=>{
  e.waitUntil(()=>{
    caches.open(cachesFile).then((cache)=>{
      console.log("successs");
      return cache.addALL(caa);
    })
  })
})