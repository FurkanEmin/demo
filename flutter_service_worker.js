'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "f7d7527ff754e4bbc4f9cdf6dbbe60b6",
"index.html": "958f0e05e4effd16dbded40b727e2e8a",
"/": "958f0e05e4effd16dbded40b727e2e8a",
"main.dart.js": "50c90968eacd4526633def4265a5845f",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f1004cac78cd2125eb34eac51c54a399",
".git/config": "275b38c9592aa6895f9575b56fc2ea42",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/66/50731ffabeed871b2c9cd07fabef57e45227b8": "d6dcefba4ff007b7ed20b1bd8d35fb7e",
".git/objects/9e/472f8e363a761a4a831ddf005b0fd3b380eee6": "93b62607040a55697737a8382f0c2962",
".git/objects/35/d5c96d0fd73112368c983317c03bcc998a2fa3": "cba60bda6e38a43875ee48d7472aaa50",
".git/objects/35/3f11d7fd07dba5189b5990db73ba3725322020": "3765b7b7c1510ee200fcb354b807b361",
".git/objects/69/1ee8b9b97038f6f468acbf8cd1a17df2b951c4": "e79c163a5757a9a37d31da2c246cea24",
".git/objects/67/587f485c4e29272e2270dd4a18fe8e07351168": "b389d5da396e1e3480cb8da50a424f36",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/b2/4de3d8c4d8ec37c736463055c36f53c02b326b": "df2b69f318dd1e4372916980c3ff30f2",
".git/objects/b2/290ee15b8f956b1d856e8e32917e25dabef1ea": "0d298f7f05c0673dd6062eef7fe3bc61",
".git/objects/ad/af4f7628aee962ec598266035ea297273d5564": "e559b24b8e3563af14e8d42a41e98e08",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/79998f3f9444f294b8059dc7b65cedc97aa6aa": "bc11b742cf4f13d998b1ff6627d52c47",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f4/946d77029bdab4e8305d65f418d81408bf1a7d": "37994e5145efc469d1afbb56dcafaebc",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/6c285690b2beb8a87f75b2bc25fd1e5c4b4106": "7215d193f2e361ca1df2d7f1745fed49",
".git/objects/ee/36458bbadcb5499e6cc05a3480ca40b8af17d8": "02b6cd1479a2c05d04713a78da11aba0",
".git/objects/ee/069ddce272dabd9d67f1f95c58e827e59ff594": "758dc54958a799ce8fff701a34b770b4",
".git/objects/fc/ef8c823d824c3a372207b6847a7386fcc9903c": "2bb4106be290b70515c3736b486c67c9",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/11/b6cc418b041b78984ce3d958781d812b6ac9fd": "025efe8c9bda4b691a15da8008545512",
".git/objects/7c/852ebce4fc554fb305ae05400ee278ecbcf98e": "2b70142429192f85bcb848d05c4f198a",
".git/objects/73/e4228a81c63484ccb3ba575e5f5c1d390e6d59": "381acc4bd31a5603060288bc34ef8ab3",
".git/objects/74/3b72543de65108ce316cd4043fa64db22e271b": "c21a7fafdaa31e9029f49e6468c88a24",
".git/objects/74/52ddca1f78321c0913e20e32b1e6197b5c8996": "ad190ca64858a2546339c081bd61edb9",
".git/objects/28/e07af149ad932c10895a0b735a8a157fa6c824": "d6099dbc62769155fe95d71ee8aa0dc2",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/ac1fbeaf3cea1ef95d1b449578e0390c276a5f": "9cbb741f3e337ef3c4e30881d5a5a63d",
".git/objects/43/d54b9d1dd8c6858b2193987fcc04dc9959ae94": "e13cf383a88be75d8e68e07ca7b00e61",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/31/ed103f9916d91443d7de9af5619cb71f70278f": "feece6f0cc772f551618e23ec2eb4658",
".git/objects/31/b340540c5acf46483c1abffa35ba7525a9cfae": "551c81b8c09433b392417878a1567dd7",
".git/objects/31/6170c62cc3b4cf5165bd49c0487ddbef525876": "000acdc76742b0c0d9d5325d3026b04c",
".git/objects/30/4fa18a60d5d8780846411ce9d4754d0b5331cb": "8fbec80d9ac45efe5786a1c34cd0f372",
".git/objects/06/8202be8804cdd9e32696e82c7006e0e2a187d9": "e8137ea7fc40f6553e161cef9fdb843a",
".git/objects/99/88baf14402296726aea7200544591938b5f5f2": "940b03b91dbfeb1a42acdb6d13864857",
".git/objects/0f/b6a6669b8bd372dfa6d3f10a83009df83d8d92": "07d7ac4a37a855c0bf883c38c818c8cb",
".git/objects/dd/087f974046bc63a6da7c0c618c12965d008a58": "461d526ef1dd02404ea0ee4fe6d0a8bc",
".git/objects/b6/b24417624c8be6601e0b55fe286e8250a97cf5": "aa893034c321ea70cdbd00208e78c5e7",
".git/objects/d2/0cabdea3e5ff30c89e5675057676010332a4a0": "a7e42ac915429ceb62622e85e1a48d58",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/c5/90b393c3ab1a5ee67d0c06d8709ad1fc571454": "d25925ef89d202ddcdedae40e89cb070",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/5760870a2493053136a4046fd9a53576fb6d61": "6e9959a2ba3f04dd80ee613438732994",
".git/objects/79/f737cb36685e482577fc5ca78e92bf65d42448": "1be09171dd0f89f630d52e13fa073447",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/24/d5108cfc25d122b2de832555c7db6c5692d00d": "44650acef3d0fa48c3a375cbaf32b182",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/82/72aba1aa1c5a2b45a2bda485cd93a0d563d8aa": "1c09c71d1198f65dcc615d3b44e57492",
".git/objects/8b/6b52900f5a554eedf29834c1e8f0727fc506e1": "3796d8dc379f6d58991ffc13847feecd",
".git/objects/13/6be7e016adb3147fa6af505ea7e792c1591119": "8c1d506dd8591db9639f2fb196ecc828",
".git/objects/8e/2e3bf1ba5413929fdec002ffbc7d861c2d1f30": "20da4794d71e9df49fecd7624ebf0583",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e4b899b0bffc4e36b9e1af9cc27a6452",
".git/logs/refs/heads/main": "ca6117abea0ec9afbc448df1b2ba84ad",
".git/logs/refs/remotes/origin/main": "e1383f5186e020775c411de1783ba474",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/refs/heads/main": "b08fe3c79a4be254ce283a09998aaed6",
".git/refs/remotes/origin/main": "b08fe3c79a4be254ce283a09998aaed6",
".git/index": "f95daaa62ec164b736b0c831d5fd86f4",
".git/COMMIT_EDITMSG": "9cd599a3523898e6a12e13ec787da50a",
"assets/AssetManifest.json": "df35ae7b08f7ac89737e0f1e4688f343",
"assets/NOTICES": "025131d74823280adc84bdde36cc22b3",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/lightLogo.png": "5bd815f0be3f2927eb2b11e3bb61166d",
"assets/assets/LogoText.png": "27d8d119b2d8508abf2b60c1a9561c03",
"assets/assets/splashAnimationLogo.gif": "b90040db6835fcef77ad2a1d3fd101c7",
"assets/assets/LogoAnimatonWithText.jpg": "45b85bb6d50b1974f0f272d975b2a042",
"assets/assets/Untitled-logo-1.jpg": "ed1d2dd744e0b2c6d18a4f6d8774f459",
"assets/assets/splashLogoAnimatonWithText.gif": "dd75d92615c1d01839479cf351dafb39",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
