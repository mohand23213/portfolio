'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "a809c0c6d4ef34ed30e637757b9e1d9b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "4b04a475995d9c7429f44ee9c5eaa598",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "293ebc6044eb6fd647cee185da42c689",
".git/logs/refs/heads/main": "95cf70317d36678033cf0fe882d58471",
".git/logs/refs/remotes/origin/main": "5b70d4e4ee358c8696172234c8ae93cd",
".git/objects/00/fc28c9c3384b62c16ade19660d80c495e89bd4": "592320d73f095dbd2f376833a58d7404",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/09/53c4c69b093cfed8c88161e3bf18e404b5a7ec": "3a8f2a0a93cce365606489541540c886",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/0e/f19737c92baeffef97eeb404d70bb8579482ec": "4c8a48c2801d4183e3cf71c13c186347",
".git/objects/1f/209e19481ed5f74ba1457aebdda76e1da0b67e": "53282eb51b8be22af28009b6cf50d60f",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/29/e3e51f756ca183acf31fbe775f6a385ea3cd00": "a60533e2ebb76520010bbd68c703663c",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/36/edd26dd533bac76e89f15c51b14d1dcbdc3107": "0a49b3be713c2da68400506f9d257b48",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/46/bc64d040240d4d0415de2baae55b8d08c45daa": "219aa42e91a03ae742df953e7330de1d",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/51/6fc9b9163262b19dabbc48f0b3a24bcd778aa4": "70bee929b1b3f20278c251a11ff6262a",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/53/ea2cd9d4458b400abf7635fce9ed11ee209ba2": "9da27f670207423411494e97c0ad66c2",
".git/objects/62/d3895cab780bd6923c01b8deb1029da7cf99b3": "f0a54afc97a812b0afc177773c247f4f",
".git/objects/64/029baae173251de6ffb4eebb2a9a301537ae8c": "d684bc8c460a368bf3abef2b6cb3e485",
".git/objects/65/48c8808ab6780a383793a3496f3a176df4cd7c": "96cdc1352b69978ee33798804da633ec",
".git/objects/67/bcb3ce9646c3a3e631f6611b4a7bb5f0d51c24": "d674aa743dd8756c59b8de1aaf4a1d41",
".git/objects/6b/bf3c0ae50f88f7adf39c6e07b018d364f4b250": "75d3216ecc29ec3f852690b860188ad0",
".git/objects/6c/57b09a9fce57008947f568e4bc6f00a272ef38": "206fc56b57a6980abf7277d67217cb8a",
".git/objects/6d/f81319189ec75925f1952b7d542042056c05bb": "9593551b56f747487da49cf58b4a9ad1",
".git/objects/6e/0567d67fd3716444d560e0888d775ea82e3f0f": "d3890fcdae2ebe82a986e6bd24de62b2",
".git/objects/7d/aea91d80694d017bd1aa9657ebf6f439668185": "1623d77ea5a12600a3c1d8dc8a004304",
".git/objects/86/1cf90c4cf121925b12752a2ae8569c402312ce": "551a3d06ccb035d53d50b9d1c48a9766",
".git/objects/87/21f39050ea70c283d6adc4999c1ce4bb127b6e": "3d9bf75e948520707dc44c09dda6e1b7",
".git/objects/88/3c88af1fe1bf589bcf5727f2a0e39f2116a5f8": "4b8194edc1a43d940348e1e58607e92f",
".git/objects/88/a28dde4ecf4ad46b8d104c8b9e80a418d0d6bc": "9aefab1af0e046ac903fdf34f9d58be7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/f55ddf569591fff638f7277251f9d1ca6f4988": "2de310d51da2302548cc5398c26a17df",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/9d/7eae54d770db126dabece6e8948a166bfca8ee": "9eb4aaba64b680327bdfaa4af7a61cef",
".git/objects/a2/863f689de9ac16e48a23ba8ac470d8f2ef80bc": "635d794f25bd18fafdd67b163c161eb0",
".git/objects/a4/0904994a45faea60159023d5aeff97785b5ac1": "ce2fe40378d107d07b0bafbad3a3d2ef",
".git/objects/a9/420ea84f52cdb1723ba26c12abc9e38e17d3e9": "3ba298f711317be4b236e41a9e57310f",
".git/objects/aa/cdb2733ec26dbf061b13eab3a371039f5f1821": "9376a32c60cb1c5cb02a691256667614",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/81cc3f848baa67868137c1a01bf9bb0e03cf0f": "02eb17fa22ed3157b0133a57057d332f",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bc/be7af9903a49dddd7538c9dc7265f86f563692": "2edc100807711010d8e0f692aeca2530",
".git/objects/ca/2c8b27ef886280bddca5b68fb3f903a6623635": "219a3a86f995c21070fb1a67d29deb70",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e2/59b671abd5678d3cf911dda6ea940940d863f8": "ee8360fcc0f05d7a3e195716b36adaba",
".git/objects/e3/ac004a12abca0e5b6b01b6334ae84a004ed675": "028feacd42b715d7ffe7c4c699a023f8",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ff/f31d0ca39f88de4a500c7dc023c3876e2adc7b": "23ea82de448dd0aa06bbe22be3f9076b",
".git/refs/heads/main": "804b799bfd9333052be4868fd1e1b48f",
".git/refs/remotes/origin/main": "804b799bfd9333052be4868fd1e1b48f",
"assets/AssetManifest.bin": "12e40c34c8f0e2992eb975745f6c5ce2",
"assets/AssetManifest.bin.json": "35f28ae871e296d1774751449f4a2fff",
"assets/AssetManifest.json": "ec2da96c0fce60de2507859d09bd3877",
"assets/assets/fonts/BethEllen-Regular.ttf": "4e004c131d7d69149783429a387292d3",
"assets/assets/fonts/SigmarOne-Regular.ttf": "9a721a3ad1f6ddd908c1a369b75a12cd",
"assets/assets/images/beitalshahid.png": "435462f178124f89250ba2a278c1b3a5",
"assets/assets/images/facebook.png": "5b70fbf05e74b632801885f7f38ffeda",
"assets/assets/images/Firebase_icon.png": "1424e9851a260ccd8e64c247973bac04",
"assets/assets/images/flutter.jpg": "41333d055cd68e309b1e030e02f827ab",
"assets/assets/images/flutter1.webp": "dead91a2903cdee99e3639b9aadd2dd0",
"assets/assets/images/github.png": "9295157598c30867cf10c621f6292112",
"assets/assets/images/java.webp": "1b660f5bab3c0912958c2aa2830e5923",
"assets/assets/images/javamobile.png": "cdf1bc156d59eb54c30f0263191d93f8",
"assets/assets/images/leetCode.png": "d642e20266a6152d8e6ed3af09b9822f",
"assets/assets/images/linkedin.png": "fd0d5546fdbdc85c76c4372a0d51f1bc",
"assets/assets/images/myImage.jpg": "39b4717dea997536c1e11042a216a979",
"assets/assets/images/Question_answer.png": "b48c13002a6a147f53471ab04db14c89",
"assets/assets/images/sellBuy.png": "f7dde6e0fb607c589494d1adb7fc92ad",
"assets/FontManifest.json": "fcc604ac88ef9d740c2f6f35af358f22",
"assets/fonts/MaterialIcons-Regular.otf": "3842e84434faad907fb7f3ba02f181b4",
"assets/NOTICES": "ae51e94899cde488f3c0c966e097c1f6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "270c59099385b2ddff55d3e2a742919d",
"/": "270c59099385b2ddff55d3e2a742919d",
"main.dart.js": "6ace06df18896554e3001eb2a5c971c7",
"manifest.json": "6916511af698159ba170df5193b104cf",
"version.json": "8b9ce89c12986f35fde3080f6cbe9ef4"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
