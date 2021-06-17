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
    "revision": "4b17472a786655240986a70e1bf4506d"
  },
  {
    "url": "assets/css/0.styles.43ad98f4.css",
    "revision": "015373e6c4f5db338d3da17c999cd5f4"
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
    "url": "assets/js/12.3966666b.js",
    "revision": "7b3171e7b4d45b2be6a5a7624d8c1f41"
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
    "url": "assets/js/app.194214dc.js",
    "revision": "fb40755583577b004f2bea94c503a4b6"
  },
  {
    "url": "blog/markdown语法/markdwn语法.html",
    "revision": "bbcb6ea48e4fd8ad90d037fc7ede6f6e"
  },
  {
    "url": "blog/前端/flex布局换行左对齐解决方法.html",
    "revision": "4a7f198f1f279c2f66ac90e36d18fd35"
  },
  {
    "url": "blog/前端/react使用antd的tabs导致组件重复渲染.html",
    "revision": "23d53a95860776267703998dd0c07853"
  },
  {
    "url": "blog/前端/react全局引入组件.html",
    "revision": "c0da996488f4b585cea161ef1d755deb"
  },
  {
    "url": "blog/前端/vue ssr 报错 window is not defined.html",
    "revision": "0a69d52cf5f8072eb9e3a350e561251d"
  },
  {
    "url": "blog/前端/使用flv.js+obs+node-media-server实时直播.html",
    "revision": "b74b25e7fb0592534196f0d1f3f55102"
  },
  {
    "url": "blog/前端/图片文件或者图片链接转换成base64.html",
    "revision": "545ca2919ba8e60bdd9767abb45cb190"
  },
  {
    "url": "blog/前端/如何解决图片加载失败的问题.html",
    "revision": "1fca4a8beb36f85647ac76c993244bf1"
  },
  {
    "url": "blog/小游戏/兰顿蚂蚁.html",
    "revision": "6df96a8ec5707e1a07eea52c82f49c25"
  },
  {
    "url": "blog/小游戏/康威-生命游戏.html",
    "revision": "d963fe752f6dac7f6d3db1f3e1d7e27a"
  },
  {
    "url": "blog/转载/js实现无限层级树形数据结构.html",
    "revision": "d46714d7340dffe541963ac5161f3a07"
  },
  {
    "url": "blog/转载/Vue组件.html",
    "revision": "0910e980927ca2eb85f57780f74dfbfa"
  },
  {
    "url": "blog/项目搭建/vuepress中使用elementUI.html",
    "revision": "79be681d0ea6bc291595cfc895e83620"
  },
  {
    "url": "blog/项目搭建/本站搭建.html",
    "revision": "5c9265a46f8748b1da77ac80000c3f35"
  },
  {
    "url": "categories/canvas/index.html",
    "revision": "7f5777fec5c460cc7491c5f235806a7e"
  },
  {
    "url": "categories/elementUI/index.html",
    "revision": "e10dfb8d9f912a2dcb3f2affdd5529b7"
  },
  {
    "url": "categories/index.html",
    "revision": "e1fafea54e2d8980bb037620d7918835"
  },
  {
    "url": "categories/js/index.html",
    "revision": "23ba45ba36501f5c1aea9248858d29e3"
  },
  {
    "url": "categories/Markdown语法/index.html",
    "revision": "1bb5188c66c9fd2dab3d310a9e350957"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "51f04f30e9d6db1568f550e591523b51"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "ff72fad13c5b52026a698f41d52395bb"
  },
  {
    "url": "categories/实时直播/index.html",
    "revision": "2912a6c74b935b02be9398e8a8845cd7"
  },
  {
    "url": "categories/生命游戏/index.html",
    "revision": "6e7f7b3edc5748b28d947ae1c98ac25b"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "39acb7a0c13603c2e4243b18e4b78d13"
  },
  {
    "url": "categories/自动化部署/index.html",
    "revision": "7490dc006f00e6ef29c4aec52f2734e7"
  },
  {
    "url": "categories/转载/index.html",
    "revision": "0547defa1ca62a11ae1eb3c3f1fdf780"
  },
  {
    "url": "home.jpg",
    "revision": "85fff36cb2c02b45a8d26f4369dd36f5"
  },
  {
    "url": "Img/index.html",
    "revision": "03ac49e2c782e958076184a117b6e113"
  },
  {
    "url": "index.html",
    "revision": "6d1b7dd8d34240beb42275545339e74b"
  },
  {
    "url": "message/index.html",
    "revision": "1bff5752a083a18b29838274101f8034"
  },
  {
    "url": "tag/css/index.html",
    "revision": "c851fcde6702cded505272e2b8f3aae1"
  },
  {
    "url": "tag/flex布局/index.html",
    "revision": "9a3c59a8cbe07b5adce96749706a8dfa"
  },
  {
    "url": "tag/flv.js/index.html",
    "revision": "7f1953c2282c2a99bce0d33c434e8dd5"
  },
  {
    "url": "tag/index.html",
    "revision": "1ea08f5e3cd4a3ca1fee8e2fc14d5c67"
  },
  {
    "url": "tag/js/index.html",
    "revision": "8ad63ef4d48b677b8859c89e9ba35d2a"
  },
  {
    "url": "tag/node-media-server/index.html",
    "revision": "45fea9273a5b01a296fc74753c41ef01"
  },
  {
    "url": "tag/obs/index.html",
    "revision": "4d46d988007613c7bf6004ea21d7f38e"
  },
  {
    "url": "tag/react/index.html",
    "revision": "4ef0a0be364ad98c5fd727a291503af2"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "01e01ba7fd56f19ae6bf6c70e6eaa2ed"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "f549e1682aa25606751a12b4a3edb543"
  },
  {
    "url": "tag/兰顿蚂蚁/index.html",
    "revision": "f95029519669bdc1e138769ead5ff052"
  },
  {
    "url": "tag/原创/index.html",
    "revision": "b452dc95d95ba358c294e460382bf704"
  },
  {
    "url": "tag/小知识/index.html",
    "revision": "119fa9799ca37338095f3359ef84763b"
  },
  {
    "url": "tag/文件处理/index.html",
    "revision": "c847937a437dd3d9f55aaeb5049e985e"
  },
  {
    "url": "tag/本站搭建/index.html",
    "revision": "74f0cc963caa2a617af1233498f2791f"
  },
  {
    "url": "tag/语法/index.html",
    "revision": "e67ecf946c654f5569265838778a27ae"
  },
  {
    "url": "tag/转载/index.html",
    "revision": "1e704309f867a247eaf1d6537f6fecff"
  },
  {
    "url": "timeline/index.html",
    "revision": "96084a2693d72e09dbcea8fd8641425b"
  },
  {
    "url": "web/index.html",
    "revision": "bee2e52d04b792008aa19bce16cdaaf6"
  },
  {
    "url": "个人生活/关于我.html",
    "revision": "656293149a6ff688944f2ddf514f1c83"
  },
  {
    "url": "个人生活/电影时间.html",
    "revision": "e860c009b5d699ab64ca17109348c8f7"
  },
  {
    "url": "个人生活/锻炼时间.html",
    "revision": "1360d307a32e83c0bff3258b317c4594"
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
