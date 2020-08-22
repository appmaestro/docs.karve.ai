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
    "revision": "df482e5b932c26f2b3c8bf209dd13652"
  },
  {
    "url": "assets/js/2.d003ed3f.js",
    "revision": "46c077857e52008139f326774062c317"
  },
  {
    "url": "assets/js/3.35283484.js",
    "revision": "e94fa08f3a28023450863f131d4833a2"
  },
  {
    "url": "assets/js/4.2ab046f9.js",
    "revision": "0e6245aa6db4cd829630252bd1d5f156"
  },
  {
    "url": "assets/js/5.621cc1f5.js",
    "revision": "467e66d698913dd079d4db14b1019d15"
  },
  {
    "url": "assets/js/6.2e5d3b9d.js",
    "revision": "07894538aedbe23850c282a51575d89c"
  },
  {
    "url": "assets/js/7.62d8c7a4.js",
    "revision": "67b1aa861bef7df946dc4e6ac1b6fc5e"
  },
  {
    "url": "assets/js/8.0c325b47.js",
    "revision": "5c885c52f12859ba2ec496bd2d521e79"
  },
  {
    "url": "assets/js/9.62cb4004.js",
    "revision": "8513d172a11b60db40890d17a0fe2ba3"
  },
  {
    "url": "assets/js/app.8f0bdd3a.js",
    "revision": "4434a5eafa2a319752e21a90840ae181"
  },
  {
    "url": "docs/index.html",
    "revision": "b5cfa7c290220c2b8ae6b7ec2ddce116"
  },
  {
    "url": "examples/index.html",
    "revision": "e21e4929207e2b5c6d770ff8ad151cf7"
  },
  {
    "url": "img/beach-work.jpg",
    "revision": "92201d81697cee036eb5d5b78cf97729"
  },
  {
    "url": "img/chicago.jpg",
    "revision": "9da6997f45c2702ab612cce8af0efec8"
  },
  {
    "url": "img/colorado.jpg",
    "revision": "884a7f6cf3b58983287376276dac78d9"
  },
  {
    "url": "img/docs/approvals.png",
    "revision": "70cd79690c0bd156fd60fa6bc9fb227f"
  },
  {
    "url": "img/docs/mattermost-configuration.png",
    "revision": "ec3da758e1a390286b8c36a7d6ff32f1"
  },
  {
    "url": "img/docs/mattermost-icon-username.png",
    "revision": "85f5056f2898683a92eef57082d88aa3"
  },
  {
    "url": "img/docs/mattermost-notification.png",
    "revision": "0458f73822003cdd94b0efc0e3d525f9"
  },
  {
    "url": "img/docs/mattermost-webhooks.png",
    "revision": "6180f9b2345fe44f923e8d659c52ecdb"
  },
  {
    "url": "img/docs/notify-per-chart.png",
    "revision": "e8af30a1e09377c8ce0d17be5b57790d"
  },
  {
    "url": "img/docs/notify-per-deployment.png",
    "revision": "4fdf361f0d467c261d28787a0dd8f133"
  },
  {
    "url": "img/docs/slack-bot-name.png",
    "revision": "8bf28966565f4666dc21a5089e8da27b"
  },
  {
    "url": "img/docs/slack-bots.png",
    "revision": "55dcbba729e64ab7b74d8f8133b59bf7"
  },
  {
    "url": "img/docs/slack-notifications.png",
    "revision": "0e6fed4688df892b2d90a13545ede92d"
  },
  {
    "url": "img/example-logo.svg",
    "revision": "1a06b31a99de361c0e67bf9a7a754404"
  },
  {
    "url": "img/examples/configure-autobuild.png",
    "revision": "6d0f96928ac08b622837e60498d45f4f"
  },
  {
    "url": "img/examples/docker-build-config.png",
    "revision": "76c6a38212db92e629a9d7717dd3ab79"
  },
  {
    "url": "img/examples/dockerhub-webhook.png",
    "revision": "6e47f024b20d1980e4fa8df80881b999"
  },
  {
    "url": "img/examples/force-workflow.png",
    "revision": "1b53975fda037888af129a2ba8982221"
  },
  {
    "url": "img/examples/keel-quick-start.png",
    "revision": "aae9e2997e396e15248eaa69a23a7541"
  },
  {
    "url": "img/examples/whr-dockerhub-relayed.png",
    "revision": "98c939f78d5a3efcde27f6f62a8856fe"
  },
  {
    "url": "img/jonathan.jpg",
    "revision": "0f51cfa4bbb55ee5f6bb552cea357a98"
  },
  {
    "url": "img/keel_high_level.png",
    "revision": "d8533a1ee65feb5668ac9bdaa4864ddd"
  },
  {
    "url": "img/keel_ui.png",
    "revision": "71a9783344090102dc408a78ff55bae6"
  },
  {
    "url": "img/logo_small.png",
    "revision": "f9f595a928d090e168d35707d1a8f8fc"
  },
  {
    "url": "img/logo.png",
    "revision": "fcc544ab74c3128a2cb92582f291ea15"
  },
  {
    "url": "img/malibu.jpg",
    "revision": "376aa91cae7919755ce7cc0721cfe612"
  },
  {
    "url": "img/miami.jpg",
    "revision": "7290d3e8e93d121fec0481d8d9cb20e3"
  },
  {
    "url": "img/seattle.jpg",
    "revision": "efbb92570004cc17c1f330510268694d"
  },
  {
    "url": "img/toronto.jpg",
    "revision": "887989d0b312b08a867bea3909888f8e"
  },
  {
    "url": "index.html",
    "revision": "67673be577ff5f273e2b749afbf105c8"
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
