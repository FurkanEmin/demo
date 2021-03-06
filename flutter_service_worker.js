'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "f7d7527ff754e4bbc4f9cdf6dbbe60b6",
"index.html": "518a56632e84d3ff5052ba9cb39e5d37",
"/": "518a56632e84d3ff5052ba9cb39e5d37",
"main.dart.js": "583be975ec3158c7ac1a523b50f0530b",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"logo.png": "b41cdd0c142dbea6eb5108eabbb5c1d1",
"icons/android-chrome-192x192.png": "f6e3d690dc1fa2b4e2de54c4b3162e01",
"icons/apple-touch-icon.png": "31cfe26cacfd44ea95fd2967ac136e1e",
"icons/android-chrome-512x512.png": "d066eabbc9eab8f09fa734a6a3322d77",
"manifest.json": "642dd021972d4ff590364eaa9fcdb30e",
".git/config": "275b38c9592aa6895f9575b56fc2ea42",
".git/objects/61/ef5be6449570f39a23e8968743abf5cdf4196d": "b4b5a63840e4ee5b44d20ce45017b86b",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0c/b2863525f65595307231151c04b0511da18370": "0f2b4afb14af04b198139c687e498c9b",
".git/objects/66/50731ffabeed871b2c9cd07fabef57e45227b8": "d6dcefba4ff007b7ed20b1bd8d35fb7e",
".git/objects/57/44c7163e8b34a519f1ddd8ca4e58f3f96a5d0c": "f2d4de0057137d7bf3b6ef887e0adf76",
".git/objects/6f/1b2acd33ef6bf6b87b076f38d8fb4bbf6124e8": "2f59afca5bd8004442bf3731114511a5",
".git/objects/9b/3bb1a13a2d9eff2e17c6ba32eef1fd6d533ed9": "6fc8c46b56c0db917fe48b0ed9a1f061",
".git/objects/9b/ef63e85290aa7fb26781ae84bc6bb78bd3c524": "0b0e9eb5f9cb7c7ad24aaa837f46c0ff",
".git/objects/9e/472f8e363a761a4a831ddf005b0fd3b380eee6": "93b62607040a55697737a8382f0c2962",
".git/objects/35/d5c96d0fd73112368c983317c03bcc998a2fa3": "cba60bda6e38a43875ee48d7472aaa50",
".git/objects/35/3f11d7fd07dba5189b5990db73ba3725322020": "3765b7b7c1510ee200fcb354b807b361",
".git/objects/69/1ee8b9b97038f6f468acbf8cd1a17df2b951c4": "e79c163a5757a9a37d31da2c246cea24",
".git/objects/67/587f485c4e29272e2270dd4a18fe8e07351168": "b389d5da396e1e3480cb8da50a424f36",
".git/objects/67/9ceb99607c3b52201aaeb92ba951a231ab7b7f": "f358dd813c39f83c9e6150e7ab153192",
".git/objects/93/8d62a3ead253732ce56e4dc7d9a5c3da2d95c9": "531a8c105590204e718de3fa6321bf1e",
".git/objects/9d/01bcd818992f187963df4e83d0463d185c7363": "df009836f89e66abae79e533b2a85140",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/b2/4de3d8c4d8ec37c736463055c36f53c02b326b": "df2b69f318dd1e4372916980c3ff30f2",
".git/objects/b2/290ee15b8f956b1d856e8e32917e25dabef1ea": "0d298f7f05c0673dd6062eef7fe3bc61",
".git/objects/ad/af4f7628aee962ec598266035ea297273d5564": "e559b24b8e3563af14e8d42a41e98e08",
".git/objects/bb/2f0958bc48bac4438a96cfae0a21939f186c1d": "0cb3cfe7275437ac38e9b294a393485d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/79998f3f9444f294b8059dc7b65cedc97aa6aa": "bc11b742cf4f13d998b1ff6627d52c47",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/62413d99c013025f29d25d9e92b68ac2c80d99": "bc85ec3c45702a365230bdf07dacdc38",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f4/946d77029bdab4e8305d65f418d81408bf1a7d": "37994e5145efc469d1afbb56dcafaebc",
".git/objects/f3/9f9539460bf6bedc540d0269af40477c068bb4": "3be04e805ae641bf6df753de423a764e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/6c285690b2beb8a87f75b2bc25fd1e5c4b4106": "7215d193f2e361ca1df2d7f1745fed49",
".git/objects/ee/36458bbadcb5499e6cc05a3480ca40b8af17d8": "02b6cd1479a2c05d04713a78da11aba0",
".git/objects/ee/069ddce272dabd9d67f1f95c58e827e59ff594": "758dc54958a799ce8fff701a34b770b4",
".git/objects/fc/ef8c823d824c3a372207b6847a7386fcc9903c": "2bb4106be290b70515c3736b486c67c9",
".git/objects/c6/7e8d75e64758e8ba19fe67be5c05f57c81f431": "97d80fac6a66c151540c6b7c37242c8f",
".git/objects/ec/cc7a3ad417d1c9e4b1db6a1608814944e72308": "f759fdc1b3a97f3f67266781c3261fe8",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/20/a25af292f97748acbee5d8cea89b6d61362a9d": "52c609e3daf8f0aae0d11a7a62660f5a",
".git/objects/11/b6cc418b041b78984ce3d958781d812b6ac9fd": "025efe8c9bda4b691a15da8008545512",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/7c/852ebce4fc554fb305ae05400ee278ecbcf98e": "2b70142429192f85bcb848d05c4f198a",
".git/objects/73/50ad43f5afc6f063ffc8e8d6b55e0d2bb5ccbb": "3c7ad2302bbb1ddab436fa3e2924588a",
".git/objects/73/e4228a81c63484ccb3ba575e5f5c1d390e6d59": "381acc4bd31a5603060288bc34ef8ab3",
".git/objects/80/9893e80311c68702eba52eb7062415fac148ec": "b81c4438ffff4235389e9f29de269762",
".git/objects/74/3b72543de65108ce316cd4043fa64db22e271b": "c21a7fafdaa31e9029f49e6468c88a24",
".git/objects/74/52ddca1f78321c0913e20e32b1e6197b5c8996": "ad190ca64858a2546339c081bd61edb9",
".git/objects/74/f9b9a410f6956e28655846450682a29fb81a54": "faeece7b2b94f38b99fb75b85ce76d98",
".git/objects/28/e07af149ad932c10895a0b735a8a157fa6c824": "d6099dbc62769155fe95d71ee8aa0dc2",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/ac1fbeaf3cea1ef95d1b449578e0390c276a5f": "9cbb741f3e337ef3c4e30881d5a5a63d",
".git/objects/10/4620b6f08d50a24b334205334c1fefad94245d": "d42ce0b433909febc211e39d81e0c39f",
".git/objects/43/d54b9d1dd8c6858b2193987fcc04dc9959ae94": "e13cf383a88be75d8e68e07ca7b00e61",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/5c/cc80fcedc7525b4a324fad5eb480e356885e7d": "39b04adbf11619f3d19b4d0e7ae831d3",
".git/objects/31/ed103f9916d91443d7de9af5619cb71f70278f": "feece6f0cc772f551618e23ec2eb4658",
".git/objects/31/b340540c5acf46483c1abffa35ba7525a9cfae": "551c81b8c09433b392417878a1567dd7",
".git/objects/31/6170c62cc3b4cf5165bd49c0487ddbef525876": "000acdc76742b0c0d9d5325d3026b04c",
".git/objects/62/7a6858933a027873158f5ab26421af1ea37e53": "d13b06230d1d6a5f7378b5cfe2050a3a",
".git/objects/30/4fa18a60d5d8780846411ce9d4754d0b5331cb": "8fbec80d9ac45efe5786a1c34cd0f372",
".git/objects/5b/5aa35072509b5e25052d432ee872e537a86979": "677dddfb4291ed187520c0989c4d9367",
".git/objects/08/146fc493aec7906ea2918d66b45b181914ecc7": "c40cffb729d6932e9fcb14396704c25c",
".git/objects/08/fafb82f78fda553108a71ab9a82028b37b3780": "d839241cee899ef4e83e51150f2a481b",
".git/objects/06/8202be8804cdd9e32696e82c7006e0e2a187d9": "e8137ea7fc40f6553e161cef9fdb843a",
".git/objects/39/c074fc7a805065eb53936969e322ac8317505b": "8037e5795293ad9b936edd1ab0f0a687",
".git/objects/99/88baf14402296726aea7200544591938b5f5f2": "940b03b91dbfeb1a42acdb6d13864857",
".git/objects/52/b359cc77a661733d9e6ecc850b8dc30db8e392": "6f94593f15dc69e0f67b3517143580c1",
".git/objects/52/bb62fa311a2e5dc1849508a8960d8ff99ac87a": "c2c816c1b6cb250a89551d87f62bd00b",
".git/objects/63/8c4b4a0bcf204d11b6cffa57064108fcbd67da": "40169265dfd2a91bd4b82908ce0d4616",
".git/objects/0f/b6a6669b8bd372dfa6d3f10a83009df83d8d92": "07d7ac4a37a855c0bf883c38c818c8cb",
".git/objects/bf/b88716bd0ecdca3f05d078b71bd9e3fa34614b": "11942bed9d9ac539210347d432d5f2aa",
".git/objects/ba/74ffa6513629b15776917c472f307814305941": "87d32f9091ed3d05c3b83b664459821a",
".git/objects/a7/634fc5f16aace031a2123561a187b26644e1eb": "59f496f1bcf6b29b13bf462c41df9915",
".git/objects/dd/087f974046bc63a6da7c0c618c12965d008a58": "461d526ef1dd02404ea0ee4fe6d0a8bc",
".git/objects/dd/eb34020111557cb82e9bbe366dbc90bae38ff8": "2d92f0a958659036968b21a9ff658140",
".git/objects/b6/b24417624c8be6601e0b55fe286e8250a97cf5": "aa893034c321ea70cdbd00208e78c5e7",
".git/objects/a9/c7cf77e607aee17574dc65512742d16a97115a": "e56e693f4fce8767e8ea384b779bc6ba",
".git/objects/d5/82de3d5955fa27fcb5a5283b4e044bab37cf70": "40f08c97c0de00ac4328c91c289d0047",
".git/objects/d2/0cabdea3e5ff30c89e5675057676010332a4a0": "a7e42ac915429ceb62622e85e1a48d58",
".git/objects/af/20a6f5a6515b73180fa46941bb8191e5412051": "1608b8f7b36dcafff76997b9a6858db8",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/a0fd0e2d73f918fa5800c23aff636ca92ed578": "d7316ede44520c675b6ade60e7958357",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b0/9f08767be56e32fdb8ea0b7b3d18e545178a75": "4a78c6e7e785b3a38b17dd4361e291cc",
".git/objects/a6/265d10563f4ae7247350a31208bd1c70d7cf56": "46dbd05bc64454d425227940ec888285",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/da61dbcf69c357f47d8302b5f72896c6bafa14": "26fe9935946ad2e12fc3e8e29ece7685",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/f7/aa210761e9bfda81fab18e457331cc948110ac": "ba6d465c20157d44d5079da5dcee7e87",
".git/objects/e8/7be17939ee36f0708fe36c4e4916a7cc642e0d": "f36ce7fd7fa0112f099220d412c37837",
".git/objects/c5/90b393c3ab1a5ee67d0c06d8709ad1fc571454": "d25925ef89d202ddcdedae40e89cb070",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/ce/d8bebd5044414d38513c9c6b7bc8ba9d7265c5": "0ebd62241f09cf223965f9718f0b83f8",
".git/objects/46/307f8fc00e8a3d72b34bf3bcc125c3b358acd7": "58824041c87104d3a7ae8bbbdab081ad",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/e3a160aaaa38466ecdf073f1d1d4e04f4961c9": "5e4a342cff39a95d6de2b6cc0a44c3e9",
".git/objects/2c/5760870a2493053136a4046fd9a53576fb6d61": "6e9959a2ba3f04dd80ee613438732994",
".git/objects/79/f737cb36685e482577fc5ca78e92bf65d42448": "1be09171dd0f89f630d52e13fa073447",
".git/objects/79/6c6e2ccd8f25d13fe50c32f9ef1028bf04b462": "3c8d7bae87bd15848e96e3c7dd0a9961",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/83/93c929b7b2a958b667bddb3e757de31d78ff69": "280db06e2eab2a1298499139fa8cb640",
".git/objects/1e/eff3f77139c51cefeec92bc872681a791e951c": "1fc4cd3c91418d8d0a0ec0c151892d11",
".git/objects/24/d5108cfc25d122b2de832555c7db6c5692d00d": "44650acef3d0fa48c3a375cbaf32b182",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/15/53c485fe70f3df217cd0251995de07391f6951": "044bc8e94637ea4c1aa420ec3eca422a",
".git/objects/85/3381b6b03978c5c23a2bd9d3794d5050697d4f": "b250e2cd5fea87384980fabc646f318b",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/82/c1baa46e62e22be56ac6df06ca1f08e6dc2e37": "9e63b2f44fc974a5bcfca447ba59a08f",
".git/objects/82/72aba1aa1c5a2b45a2bda485cd93a0d563d8aa": "1c09c71d1198f65dcc615d3b44e57492",
".git/objects/8b/6b52900f5a554eedf29834c1e8f0727fc506e1": "3796d8dc379f6d58991ffc13847feecd",
".git/objects/13/c67030d400ea7cdc60bba05526f8e4167a974b": "53831a7ed2746f7ac95c48fe2f0aeb1c",
".git/objects/13/6be7e016adb3147fa6af505ea7e792c1591119": "8c1d506dd8591db9639f2fb196ecc828",
".git/objects/8e/cc21c40909528910f16a6dadc8391ae12baad0": "c97c192d1332ecd1179abc8a41e0f2be",
".git/objects/8e/2e3bf1ba5413929fdec002ffbc7d861c2d1f30": "20da4794d71e9df49fecd7624ebf0583",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "395bde3a8009067ae4083495d7f1a03e",
".git/logs/refs/heads/main": "dc2b6a14b31cb44d2e81fdf99255c828",
".git/logs/refs/remotes/origin/main": "67c18bdee7150500576358d33d8ff648",
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
".git/refs/heads/main": "6cb597678589eae6aec3560794bc81cd",
".git/refs/remotes/origin/main": "6cb597678589eae6aec3560794bc81cd",
".git/index": "35bf82a29c66a33136e0e625aefdf98c",
".git/COMMIT_EDITMSG": "01d8dbbeb2e678cdbca8ff34dec3601f",
"assets/images/lightLogo.png": "5bd815f0be3f2927eb2b11e3bb61166d",
"assets/images/LogoText.png": "27d8d119b2d8508abf2b60c1a9561c03",
"assets/images/splashAnimationLogo.gif": "b90040db6835fcef77ad2a1d3fd101c7",
"assets/images/LogoAnimatonWithText.jpg": "45b85bb6d50b1974f0f272d975b2a042",
"assets/images/Untitled-logo-1.jpg": "ed1d2dd744e0b2c6d18a4f6d8774f459",
"assets/images/imageEmpty.png": "05d5f74f083bf4c5e4a898edcbbaee62",
"assets/images/splashLogoAnimatonWithText.gif": "dd75d92615c1d01839479cf351dafb39",
"assets/AssetManifest.json": "ed5d76137621efa8488db651ec773620",
"assets/NOTICES": "8a8e0de860fa32dedbc02091325b62db",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "8c71f7c719881172d5b0ff7d66cf1b6d",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
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
