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
    "revision": "297f68ba2757ac3f4657032f7439f680"
  },
  {
    "url": "assets/css/0.styles.661918b0.css",
    "revision": "b47cd0ba5966b2b187d04c775892f16c"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/iconfont.117d8006.svg",
    "revision": "117d8006a3c478fbc8c4ce04a36ddb5a"
  },
  {
    "url": "assets/img/logo.jpg",
    "revision": "2a40145fd3a14660f63eeeff7bf37d81"
  },
  {
    "url": "assets/img/vuepress中使用elementUI_files/1.jpg",
    "revision": "ba50a15a5d7306a0982ae3d1a408c191"
  },
  {
    "url": "assets/img/使用flv_files/1.jpg",
    "revision": "fb178fe3b77769a16af134e7c9b16cbe"
  },
  {
    "url": "assets/img/使用flv_files/2.jpg",
    "revision": "f3c44025168067afa9e9007db2c6ff5c"
  },
  {
    "url": "assets/img/使用flv_files/3.jpg",
    "revision": "de81c8933e4089624b4fdaadfb70e8e5"
  },
  {
    "url": "assets/img/使用flv_files/4.jpg",
    "revision": "1b6586004bcc2f060eace672caec910d"
  },
  {
    "url": "assets/js/1.e2ba1830.js",
    "revision": "1eb7f06c483a66526f24f1dd0ca4a9df"
  },
  {
    "url": "assets/js/10.98ef8927.js",
    "revision": "9a83899faa33fdffe571285c7ba9c5a5"
  },
  {
    "url": "assets/js/11.c4142340.js",
    "revision": "b21708942a4b36ab892ec9d5592b96f2"
  },
  {
    "url": "assets/js/12.1cf28acb.js",
    "revision": "f7f398e7e958016922944c0811671399"
  },
  {
    "url": "assets/js/13.aa58c82a.js",
    "revision": "760285f042a7f41c0374c55403b64f66"
  },
  {
    "url": "assets/js/14.0f1c517c.js",
    "revision": "895eb05c7152a7fe0a79c468221bcc26"
  },
  {
    "url": "assets/js/15.cae989c0.js",
    "revision": "ab23c0cc33277d78abc286967e251be4"
  },
  {
    "url": "assets/js/16.06201654.js",
    "revision": "c44032d59cd279bb97d59d7b46ece2bf"
  },
  {
    "url": "assets/js/17.f5a8ce6d.js",
    "revision": "6e4632d7e58c25f06cb458a5080f3ad6"
  },
  {
    "url": "assets/js/18.89a72476.js",
    "revision": "38200574fecefcf4d5ad982c7b01a1ab"
  },
  {
    "url": "assets/js/19.b3be8666.js",
    "revision": "4b11576a13bedc22844ae19ac17b348e"
  },
  {
    "url": "assets/js/20.9e24a52f.js",
    "revision": "3d8f15bb6d295478b02834458e84d906"
  },
  {
    "url": "assets/js/21.1038dd4d.js",
    "revision": "d5698da76aa53a15cf3dfcbcc48156ce"
  },
  {
    "url": "assets/js/22.19243c32.js",
    "revision": "43be789e51f86c38d36c35badfcb3bbf"
  },
  {
    "url": "assets/js/23.941a23b6.js",
    "revision": "bdd29b2385897118abf1dc0d3803d48f"
  },
  {
    "url": "assets/js/24.fdff718f.js",
    "revision": "bc26735809eaeec962072474560f4417"
  },
  {
    "url": "assets/js/25.9f8bafac.js",
    "revision": "d2eae6b16097a63b870e22afefe8ca5b"
  },
  {
    "url": "assets/js/26.51ccefc6.js",
    "revision": "24bc19a330e0f517592b022d2e43f997"
  },
  {
    "url": "assets/js/27.8ff356f6.js",
    "revision": "5ed2a7795af68916d8dfea7bc1443a7d"
  },
  {
    "url": "assets/js/28.7759c2fb.js",
    "revision": "ce4e913485e22d91c66744dccc2ff96b"
  },
  {
    "url": "assets/js/29.8b36642e.js",
    "revision": "bd903e0913cbb97ac5aa0e8c43ac29ae"
  },
  {
    "url": "assets/js/3.5107a7f4.js",
    "revision": "fb1d2a2e3082b247a8fe85a00b4280e0"
  },
  {
    "url": "assets/js/30.253d014c.js",
    "revision": "fcca5b08e64506f803fad49bed8a8ad4"
  },
  {
    "url": "assets/js/31.72b25fe0.js",
    "revision": "bd732d1d9a34ec9769515585abe2f3bd"
  },
  {
    "url": "assets/js/32.7bce8334.js",
    "revision": "fdc67cf9b4a7dda359a05faf4fa391fe"
  },
  {
    "url": "assets/js/33.dc4feaea.js",
    "revision": "cf4664de1d3c5f2a00f5bb3d2fc5df77"
  },
  {
    "url": "assets/js/34.8e5da320.js",
    "revision": "a62ddec00209c57a86e8f3ab872c4f4c"
  },
  {
    "url": "assets/js/35.4cfdad40.js",
    "revision": "df24551c62f865a8279a560a1c546cae"
  },
  {
    "url": "assets/js/36.3b47e249.js",
    "revision": "d269ca3dd05cdd303ebcd0c7c238c573"
  },
  {
    "url": "assets/js/37.bb91ed00.js",
    "revision": "87d6de1e0db6cb4ce17d9f8f927c210c"
  },
  {
    "url": "assets/js/38.f7667eb2.js",
    "revision": "1e491fe6b14e8f74328d9ab74e6ac171"
  },
  {
    "url": "assets/js/39.d2c4d01d.js",
    "revision": "3b596a6c76c7dcea70c131384ec1f8c9"
  },
  {
    "url": "assets/js/4.1ddc95ae.js",
    "revision": "b1942e0dba3ad0ce9efbef856c3f3c5b"
  },
  {
    "url": "assets/js/40.daa31e8f.js",
    "revision": "b4013d0a0f726852445c85b4c26ebf87"
  },
  {
    "url": "assets/js/5.ee52530d.js",
    "revision": "8a9ba42b5211a8d2d67f8e821770e315"
  },
  {
    "url": "assets/js/6.f113c20c.js",
    "revision": "df0ca5916c0e1382183378ecf32b7569"
  },
  {
    "url": "assets/js/7.74d2059d.js",
    "revision": "7477528a4236c86b8819a4e646af6e26"
  },
  {
    "url": "assets/js/8.b5e3bf4d.js",
    "revision": "8654ff9f48084ac775678dba2711a219"
  },
  {
    "url": "assets/js/9.3b589543.js",
    "revision": "1ecaee4091c42650a70549e7b33d93c9"
  },
  {
    "url": "assets/js/app.089a5264.js",
    "revision": "2ae1322392d1070237a641df21fe0da2"
  },
  {
    "url": "blog/markdown语法/markdwn语法.html",
    "revision": "4f95126f5ea43b7bae267a07c4b4cfac"
  },
  {
    "url": "blog/前端/flex布局换行左对齐解决方法.html",
    "revision": "a45d2e78f6bc7b99ac3eae1b11797a8d"
  },
  {
    "url": "blog/前端/react使用antd的tabs导致组件重复渲染.html",
    "revision": "26b7e5147d67d37a5a10b8e1548cfc9d"
  },
  {
    "url": "blog/前端/react全局引入组件.html",
    "revision": "b1fe778d9d43eeb88e05104ac9bcdba0"
  },
  {
    "url": "blog/前端/vue ssr 报错 window is not defined.html",
    "revision": "22178e462d1cdfc79221d68417b0965a"
  },
  {
    "url": "blog/前端/使用flv.js+obs+node-media-server实时直播.html",
    "revision": "47dcaf31b091b6a8ef2ed04ab168d105"
  },
  {
    "url": "blog/前端/图片文件或者图片链接转换成base64.html",
    "revision": "85169fade3a208a145183cb5809f9a1b"
  },
  {
    "url": "blog/前端/如何解决图片加载失败的问题.html",
    "revision": "b9a2a447574862b29c042058477d0586"
  },
  {
    "url": "blog/小游戏/兰顿蚂蚁.html",
    "revision": "1a42400f57c9d26dd02fa24aeac627fc"
  },
  {
    "url": "blog/小游戏/康威-生命游戏.html",
    "revision": "f59d84e68a9893bfed36f244660b7898"
  },
  {
    "url": "blog/转载/js实现无限层级树形数据结构.html",
    "revision": "9afdff686aaced4688b0090d52791f2f"
  },
  {
    "url": "blog/转载/Vue组件.html",
    "revision": "7361478731631634e4ae0ab957bb9713"
  },
  {
    "url": "blog/项目搭建/vuepress中使用elementUI.html",
    "revision": "dd799869c23dc4eb513c0052c5484d3c"
  },
  {
    "url": "blog/项目搭建/本站搭建.html",
    "revision": "f7522bcb1cab3e0e6f5daa841c0ca22d"
  },
  {
    "url": "categories/canvas/index.html",
    "revision": "7c5de13512e636ee12092d1bc8c20d6a"
  },
  {
    "url": "categories/elementUI/index.html",
    "revision": "0336c7986a74a0323668e0149063f327"
  },
  {
    "url": "categories/index.html",
    "revision": "84a0f11141795e5328d881f70898766b"
  },
  {
    "url": "categories/js/index.html",
    "revision": "ef95a418eeea016bfab4922f1ebfb068"
  },
  {
    "url": "categories/Markdown语法/index.html",
    "revision": "468944c2f6a4346cf318a382aa80c6e0"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "8324ccc7c68c3ce591745abf23d8ff47"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "d94b17e1b99f7fd7702083482f2c8703"
  },
  {
    "url": "categories/实时直播/index.html",
    "revision": "cc247f681c04f0ebba24cb3b6ac932c0"
  },
  {
    "url": "categories/生命游戏/index.html",
    "revision": "acce5a2dd56ba0de482ae5aa48ddb2ee"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "1fcd03ab9ca19837fdd90ecf9ec2511f"
  },
  {
    "url": "categories/自动化部署/index.html",
    "revision": "8f275bba213f865eec97895105fb0b2d"
  },
  {
    "url": "categories/转载/index.html",
    "revision": "7e115c110b5763c8aa8acb3c12483623"
  },
  {
    "url": "home.jpg",
    "revision": "85fff36cb2c02b45a8d26f4369dd36f5"
  },
  {
    "url": "Img/index.html",
    "revision": "bfc71ad55795ae7054f6614b9ffb8f4c"
  },
  {
    "url": "index.html",
    "revision": "ceeca44c407da605856f88f68e998640"
  },
  {
    "url": "message/index.html",
    "revision": "5a02900d10d1f3981a1cd457d49ab844"
  },
  {
    "url": "tag/css/index.html",
    "revision": "198dbe9236fd1d90e0253b75e7f8c948"
  },
  {
    "url": "tag/flex布局/index.html",
    "revision": "a5830567f6c12422b1930839cf8ac8ae"
  },
  {
    "url": "tag/flv.js/index.html",
    "revision": "810439d964004bc881a234243d32d745"
  },
  {
    "url": "tag/index.html",
    "revision": "c7e85a333403dd27cc67b1d58b8752df"
  },
  {
    "url": "tag/js/index.html",
    "revision": "11a4811942d4e8883a9ff8bf079fd784"
  },
  {
    "url": "tag/node-media-server/index.html",
    "revision": "75b0808659017786dbc94a819a2bce2f"
  },
  {
    "url": "tag/obs/index.html",
    "revision": "59574681039c6da1ca9cfd15a99f391d"
  },
  {
    "url": "tag/react/index.html",
    "revision": "1220352bd35c5a65b06218c1d130ddb8"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "c359bf966b3e64c6f6a3ce3fd0399184"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "0f9e524bfb6a8027eb0eba235db9e634"
  },
  {
    "url": "tag/兰顿蚂蚁/index.html",
    "revision": "54e45a026248b501029575736bbd3dfb"
  },
  {
    "url": "tag/原创/index.html",
    "revision": "60375c64c1c69a84398a9be7a4d6638a"
  },
  {
    "url": "tag/小知识/index.html",
    "revision": "ac9878c4a40f29be59429958fa161ee1"
  },
  {
    "url": "tag/文件处理/index.html",
    "revision": "95b57a2bc4ca09df9d48bec0e5dded06"
  },
  {
    "url": "tag/本站搭建/index.html",
    "revision": "a2aa2b129dc76ab0b1b2b9118f5cc33b"
  },
  {
    "url": "tag/语法/index.html",
    "revision": "63577df66eddf200f1dc31c2fefa8fb6"
  },
  {
    "url": "tag/转载/index.html",
    "revision": "0f8ddbe63df6f970edb2562945b5b4b2"
  },
  {
    "url": "timeline/index.html",
    "revision": "b5e033f93a5fd62e36da52e76ec53951"
  },
  {
    "url": "web/index.html",
    "revision": "e5945fa4c5136ff76374622c056f3465"
  },
  {
    "url": "个人生活/关于我.html",
    "revision": "427e38dfecf8d1cd333afe0662f28269"
  },
  {
    "url": "个人生活/电影时间.html",
    "revision": "f6a87b1d8cd64c34692a9ccfc0e9355e"
  },
  {
    "url": "个人生活/锻炼时间.html",
    "revision": "96f0c205577916737dbcaf45d5d65fa6"
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
