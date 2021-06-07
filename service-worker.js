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
    "revision": "349d97b728bcc69cfbeb501777175c55"
  },
  {
    "url": "assets/css/0.styles.ed6299e9.css",
    "revision": "59c6b77e35fac53f1f07c1187e1e45d9"
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
    "url": "assets/js/1.979f1370.js",
    "revision": "ef041e7af55225d90e8e34242ff78826"
  },
  {
    "url": "assets/js/10.71214097.js",
    "revision": "92763313c43706777f44df13fd6b6f61"
  },
  {
    "url": "assets/js/11.620a668b.js",
    "revision": "1845f5b831a58bdac363f40724144fdf"
  },
  {
    "url": "assets/js/12.4835c914.js",
    "revision": "cd6a80376b6babb53ab40f6f2149a71c"
  },
  {
    "url": "assets/js/13.25d2c287.js",
    "revision": "3f7ddb42d75564af4a936c9d52ee450c"
  },
  {
    "url": "assets/js/14.0a77c1f8.js",
    "revision": "8116de547b17a74f12e5bf22ce6c74e5"
  },
  {
    "url": "assets/js/15.5ec715e4.js",
    "revision": "814f1f0489b91ec7ad80d0f01c8c8c7c"
  },
  {
    "url": "assets/js/16.6f207fc2.js",
    "revision": "a27dd35fd0373b4611feed46a42505b8"
  },
  {
    "url": "assets/js/17.af459365.js",
    "revision": "4f559a86c9518dec6bba014bc3db3f1a"
  },
  {
    "url": "assets/js/18.259d1157.js",
    "revision": "a627caef022135bc3c9c32732bbcd86e"
  },
  {
    "url": "assets/js/19.d12f3771.js",
    "revision": "d8dfb7fc71a38e99219582863e471ba8"
  },
  {
    "url": "assets/js/20.d5f4103f.js",
    "revision": "9d031eb3f7c7e90316752c240eb95d31"
  },
  {
    "url": "assets/js/21.f455e8cf.js",
    "revision": "c855de26fc3f93e85b7deab84a734e36"
  },
  {
    "url": "assets/js/22.54169647.js",
    "revision": "9e9405d96e5a28688604495967c9fd59"
  },
  {
    "url": "assets/js/23.c065f1b4.js",
    "revision": "3867a41ca5b7ae50ecd011bba510b161"
  },
  {
    "url": "assets/js/24.42d8049b.js",
    "revision": "9d4e0d4adcc4648b93b51c6f13c270e5"
  },
  {
    "url": "assets/js/25.d5d7560f.js",
    "revision": "7334aa53b75af7d6bca1e71ab66ca16c"
  },
  {
    "url": "assets/js/26.dd2a9ff2.js",
    "revision": "7fe6907474a54d9cefe12f5849272ed9"
  },
  {
    "url": "assets/js/27.e28df66a.js",
    "revision": "88346fb6d5c7fccd3d3e3b818fe4d6b5"
  },
  {
    "url": "assets/js/28.f15170ea.js",
    "revision": "3fbd00a6c3c74f763a6eaf7ae9f4efa9"
  },
  {
    "url": "assets/js/29.569d114a.js",
    "revision": "5937984cf22815d6b2b8d79e69f57fce"
  },
  {
    "url": "assets/js/3.e25b494e.js",
    "revision": "2af11e69b4d1a11de9c2fae623e03783"
  },
  {
    "url": "assets/js/30.9a581119.js",
    "revision": "703ed487a77b8713f2b14d2169089344"
  },
  {
    "url": "assets/js/31.e792297c.js",
    "revision": "468728d337abf3de8b776e095ca3e4b1"
  },
  {
    "url": "assets/js/32.47ddc7d1.js",
    "revision": "2707bd34d36f4da640ed88f44cc9ee6a"
  },
  {
    "url": "assets/js/33.82c4f8c4.js",
    "revision": "d5a00ee92455b81d2b37972902fcae11"
  },
  {
    "url": "assets/js/34.233669d2.js",
    "revision": "86d1b5d8b6ad3b52cb1ef026a2c9f406"
  },
  {
    "url": "assets/js/35.a2ad7570.js",
    "revision": "bec494e371ad2693aad0d2e244076b67"
  },
  {
    "url": "assets/js/36.b255c2c5.js",
    "revision": "6ac79ecb9d09eb839694c0e2889b30e6"
  },
  {
    "url": "assets/js/37.1cd73044.js",
    "revision": "e88adb7c1b78ee31368627c4186ac659"
  },
  {
    "url": "assets/js/38.0a316430.js",
    "revision": "42df0a5259c965933c4db23f7f00f1ee"
  },
  {
    "url": "assets/js/4.87fbf226.js",
    "revision": "64829f493456fdc7f89aa01c019ab10b"
  },
  {
    "url": "assets/js/5.6a7c2a8f.js",
    "revision": "af083637da430b503328c69b9bd0730f"
  },
  {
    "url": "assets/js/6.fd72d6df.js",
    "revision": "d4ae0a85cb3de1cb5dd81ac0fb093b7a"
  },
  {
    "url": "assets/js/7.8211d329.js",
    "revision": "e23bbbec8d4b96360c1df2fa5fbb9893"
  },
  {
    "url": "assets/js/8.7b564bdc.js",
    "revision": "3624fd8ea9ab798e1a91cc730e0fda4f"
  },
  {
    "url": "assets/js/9.1b386544.js",
    "revision": "abd005a6bb09aa7e9abcd2b35c747f8c"
  },
  {
    "url": "assets/js/app.845de31d.js",
    "revision": "e7153cecc1fdbaa547045282dafe8cee"
  },
  {
    "url": "blog/markdown语法/markdwn语法.html",
    "revision": "53e352aeff25c303703b0707ac9c6f2b"
  },
  {
    "url": "blog/前端/react使用antd的tabs导致组件重复渲染.html",
    "revision": "fedffc38ebb75a9d1f6965dc7d6d4ab6"
  },
  {
    "url": "blog/前端/react全局引入组件.html",
    "revision": "3115f7257019fdc4d4909d7f5a39fc71"
  },
  {
    "url": "blog/前端/vue ssr 报错 window is not defined.html",
    "revision": "17ecfef816b437106d33673351a6ee3d"
  },
  {
    "url": "blog/前端/使用flv.js+obs+node-media-server实时直播.html",
    "revision": "1508a4d10fcfc3dcdd1d5902b7b6939f"
  },
  {
    "url": "blog/前端/图片文件或者图片链接转换成base64.html",
    "revision": "0f1e9e8ad7d51dd108c7c4f03d1ef60b"
  },
  {
    "url": "blog/前端/如何解决图片加载失败的问题.html",
    "revision": "23d11608ed040d3621dfb78d819ed05f"
  },
  {
    "url": "blog/小游戏/兰顿蚂蚁.html",
    "revision": "9a2d5c897ad3d387ce57cd61200a2d64"
  },
  {
    "url": "blog/小游戏/康威-生命游戏.html",
    "revision": "2de1609ef4249809f2e0e4a64a2c918e"
  },
  {
    "url": "blog/转载/js实现无限层级树形数据结构.html",
    "revision": "eb23c83bc569ae8bb9b1740ceb22e3e6"
  },
  {
    "url": "blog/转载/Vue组件.html",
    "revision": "d9be16429a52cc87f97bb1f673e9f37a"
  },
  {
    "url": "blog/项目搭建/vuepress中使用elementUI.html",
    "revision": "0810d0a7abca537423c074fdd015ffe4"
  },
  {
    "url": "blog/项目搭建/本站搭建.html",
    "revision": "d01ff86f2b41f85208235820c1f64b20"
  },
  {
    "url": "categories/canvas/index.html",
    "revision": "c0f5c90459f9da3215231d68b8d56195"
  },
  {
    "url": "categories/elementUI/index.html",
    "revision": "c9d49327575de08b700a494b77a8e8ee"
  },
  {
    "url": "categories/index.html",
    "revision": "2c91b18dfde89435e95fd63360e8c8d6"
  },
  {
    "url": "categories/js/index.html",
    "revision": "2f4bbfd6a41a169412d23a49270bfac1"
  },
  {
    "url": "categories/Markdown语法/index.html",
    "revision": "fbe72d685f6aa6a997e191ddb34a979f"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "fbfd1e1be5e444222f04cd63adb5de2d"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "2217bda79c19b06e65d3e6232e98001a"
  },
  {
    "url": "categories/实时直播/index.html",
    "revision": "97f8d755cb6be2587043a4344e749f6b"
  },
  {
    "url": "categories/生命游戏/index.html",
    "revision": "ac61bacec2ed77e809f0baf07d52522b"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "172e4ef640a0c742b30d2fc1658aa08d"
  },
  {
    "url": "categories/自动化部署/index.html",
    "revision": "d7b404225765bda534f36de6392474b1"
  },
  {
    "url": "categories/转载/index.html",
    "revision": "b13cf300d341f1f0a54dc04f3c953f43"
  },
  {
    "url": "home.jpg",
    "revision": "85fff36cb2c02b45a8d26f4369dd36f5"
  },
  {
    "url": "Img/index.html",
    "revision": "74a09e8a8e5a7f8ae7dc06e565a30735"
  },
  {
    "url": "index.html",
    "revision": "ef2528e6b6986656936dafbffca00c2f"
  },
  {
    "url": "message/index.html",
    "revision": "78c0edcc986a90e6d466a2f2910ea429"
  },
  {
    "url": "tag/flv.js/index.html",
    "revision": "374682acb01ed6ffa167236158679f8b"
  },
  {
    "url": "tag/index.html",
    "revision": "ed0592b69203bb2f24ba93ef7b6cb7da"
  },
  {
    "url": "tag/js/index.html",
    "revision": "f151c14dc59362dd6e10970d24f8745d"
  },
  {
    "url": "tag/node-media-server/index.html",
    "revision": "aa663fb9c601f3db4e68953ff7912540"
  },
  {
    "url": "tag/obs/index.html",
    "revision": "46886dca4e0113217d56d59e1df83e67"
  },
  {
    "url": "tag/react/index.html",
    "revision": "d0df9f6c091f968bbb88e278ef331f24"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "fcfb79768abac47b85a62592d232949e"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "49fa1501e7965aabb1d73833647fd98f"
  },
  {
    "url": "tag/兰顿蚂蚁/index.html",
    "revision": "7dcdefe7a138272dd6467069ef5acfbe"
  },
  {
    "url": "tag/原创/index.html",
    "revision": "4b30e91e947aefe9a907da91ecd7b5ca"
  },
  {
    "url": "tag/小知识/index.html",
    "revision": "084a8af5d8cd69622c2f3d345c52124f"
  },
  {
    "url": "tag/文件处理/index.html",
    "revision": "48651993eb94124214f99bd27bb81a7b"
  },
  {
    "url": "tag/本站搭建/index.html",
    "revision": "fc9328ac823c408ae79de3be81eafb13"
  },
  {
    "url": "tag/语法/index.html",
    "revision": "fa7757cdae1325ff561f05f9bf924320"
  },
  {
    "url": "tag/转载/index.html",
    "revision": "bd99968217b58837f0cb0a0823e28c47"
  },
  {
    "url": "timeline/index.html",
    "revision": "d1ddd146b1ca37176a87f0b619723ef4"
  },
  {
    "url": "web/index.html",
    "revision": "4ee533c00d6913098a09d33a267d0ba7"
  },
  {
    "url": "个人生活/关于我.html",
    "revision": "1d01038ba45d80fdeaa644e690262b00"
  },
  {
    "url": "个人生活/游戏时间.html",
    "revision": "43608b23c050b273af89e14376ffc9ec"
  },
  {
    "url": "个人生活/电影时间.html",
    "revision": "f7a429419b0703feba82947530ce6623"
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
