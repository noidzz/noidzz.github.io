/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "2d3b4ff17da9dc4f8322cbfd0eead398"
  },
  {
    "url": "about/index.html",
    "revision": "b928deb1edbea2001058ed86c1cae0fe"
  },
  {
    "url": "activities/arsenal.html",
    "revision": "19729db320192503355b0d1763557240"
  },
  {
    "url": "archives/index.html",
    "revision": "7c0d8325c774d286e534ff6dd67715f9"
  },
  {
    "url": "assets/css/0.styles.80e9d47b.css",
    "revision": "4ba14282164b082dd5e8a300f25e542e"
  },
  {
    "url": "assets/fonts/bbr.f32a0cd1.woff2",
    "revision": "f32a0cd13ac49e36df74467ecd2dceff"
  },
  {
    "url": "assets/fonts/Icon.4187678c.woff",
    "revision": "4187678c70c491cc0fbd880bfd24782a"
  },
  {
    "url": "assets/fonts/ir.1ac22b3a.woff2",
    "revision": "1ac22b3a85c6d7164927d192654ab170"
  },
  {
    "url": "assets/fonts/jsr.8ffec542.woff2",
    "revision": "8ffec5420781e499563421c2fbb4f84a"
  },
  {
    "url": "assets/fonts/lobster.fe012fb7.woff2",
    "revision": "fe012fb7b22e5776c4a2e91889068974"
  },
  {
    "url": "assets/fonts/ml.0a7c6df0.woff2",
    "revision": "0a7c6df06e85d978d096d4d18fd8d43d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c5c78e38.js",
    "revision": "e61fd73ff3ba630c458f25ac579bd8a8"
  },
  {
    "url": "assets/js/11.e6a91e50.js",
    "revision": "43ab425eaeea090b79136f12793e766a"
  },
  {
    "url": "assets/js/12.981d0279.js",
    "revision": "29eae7d4095479c8ae808c9f3a4a7b23"
  },
  {
    "url": "assets/js/13.5ceffb30.js",
    "revision": "90c01c6b1bcddd5538f2a8b5035614a4"
  },
  {
    "url": "assets/js/14.a6e831d1.js",
    "revision": "30dd502f1b23c52c9e8733d4a6fd25a3"
  },
  {
    "url": "assets/js/15.51e5f962.js",
    "revision": "82f466470b9b899a5a070a19f382f55d"
  },
  {
    "url": "assets/js/16.52bfc4fa.js",
    "revision": "82f07102560b6fa835cabe70d67db606"
  },
  {
    "url": "assets/js/17.00dfe2eb.js",
    "revision": "2bd418f44a4ab7ed90b344e1defca375"
  },
  {
    "url": "assets/js/18.3b5e9295.js",
    "revision": "8aaa6d56eaf11e3829b6fc6c8b5ad316"
  },
  {
    "url": "assets/js/19.833450d8.js",
    "revision": "4b49b567ffad1aa5d8c8f9e50a9110ce"
  },
  {
    "url": "assets/js/20.034a6f7b.js",
    "revision": "e8bd8279f568b29f78c57be111317931"
  },
  {
    "url": "assets/js/21.5234fa85.js",
    "revision": "bca39d148a5c61741cf35f5ba1637ace"
  },
  {
    "url": "assets/js/22.28a2e4f3.js",
    "revision": "d02da6d5f7c176f61372151500b35804"
  },
  {
    "url": "assets/js/23.fcf079d0.js",
    "revision": "13e35a479deeed2aa7bfce1396a63885"
  },
  {
    "url": "assets/js/24.75b3d466.js",
    "revision": "e247a93d1e45b568b6bb327152a493d8"
  },
  {
    "url": "assets/js/4.82b16c03.js",
    "revision": "05508c39ed2208eff4e58a59908de02d"
  },
  {
    "url": "assets/js/5.e237394a.js",
    "revision": "861ee8d41edf7373a56dbf966d081207"
  },
  {
    "url": "assets/js/6.cafc1dad.js",
    "revision": "3bedec057c6432944adc78944ad95ef2"
  },
  {
    "url": "assets/js/7.50a6f476.js",
    "revision": "f418926c81fae53dc4fc9b4b2e2fb762"
  },
  {
    "url": "assets/js/8.d4c9ad81.js",
    "revision": "bb98d86e2b7310e372b03f98d4f4656d"
  },
  {
    "url": "assets/js/9.21097b28.js",
    "revision": "8c9d54686c4e714300c4b180c7c80023"
  },
  {
    "url": "assets/js/app.457de65d.js",
    "revision": "44e9fb89adf8e48163a04c6bd793a2fd"
  },
  {
    "url": "assets/js/vendors~flowchart.f1f328b9.js",
    "revision": "427f67babcd7b141043a457ebfcf1a3b"
  },
  {
    "url": "assets/js/vuejs-paginate.456622f9.js",
    "revision": "b6432af8e75ec11a2cc1d264597ec3fc"
  },
  {
    "url": "categories/index.html",
    "revision": "d3eccaf74164e4c2115d6dd98bc6ee9c"
  },
  {
    "url": "categories/trải/index.html",
    "revision": "ab58d2e924798968b59cd83732180656"
  },
  {
    "url": "config/index.html",
    "revision": "19273aa46bb8766dc5c3412ba7668b01"
  },
  {
    "url": "friends/index.html",
    "revision": "a928250f005dbb5637e7cf901798af3c"
  },
  {
    "url": "guide/index.html",
    "revision": "f2d6608359f0614119a42c74e23ad6ad"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "f698c2cd5235e6677edf7bd26b521773"
  },
  {
    "url": "images/life-saving-rules.png",
    "revision": "8d01e34a7fac15f00339c244b3bf7fd9"
  },
  {
    "url": "images/logo.png",
    "revision": "e1d4f7ddabad42dc02671ab90b1e1006"
  },
  {
    "url": "images/momo.png",
    "revision": "6685c331d5501dee1d70697e5bdfd091"
  },
  {
    "url": "index.html",
    "revision": "e6049d25caaf737d30fef3b99273c65d"
  },
  {
    "url": "post/2021/06/10/life-saving-rules.html",
    "revision": "8252313a6c8874d8de7a763c6a0d60aa"
  },
  {
    "url": "post/2021/06/11/life-saving-rule.html",
    "revision": "20cbcd42627c216a36e88f4e55f7b0e4"
  },
  {
    "url": "story/index.html",
    "revision": "3796abc65c86d5a67dec58d27b5b9be9"
  },
  {
    "url": "tags/index.html",
    "revision": "c3fcba1a70eb956c72fbf824e44ba94b"
  },
  {
    "url": "tags/trải/index.html",
    "revision": "4958ae8da78e6594fed2f1272169657f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
