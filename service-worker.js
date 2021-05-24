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
    "revision": "dbea663fb431ef1e251bfe6ac99e3917"
  },
  {
    "url": "assets/css/0.styles.065d267d.css",
    "revision": "296893d5f2a7d25fe2900c86b5bc0201"
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
    "url": "assets/js/37.b878d6d6.js",
    "revision": "b5b3ad659d90b7e751df52d78c5e8a3d"
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
    "url": "assets/js/9.36f481e9.js",
    "revision": "c1a7300ece5e475c70e37cd368a4233f"
  },
  {
    "url": "assets/js/app.115d24aa.js",
    "revision": "515a11ea55f8fb71bc38c7955d6b6eba"
  },
  {
    "url": "blog/markdown语法/markdwn语法.html",
    "revision": "682284830a58b6bbc0b71bf8cbaaf745"
  },
  {
    "url": "blog/前端/react使用antd的tabs导致组件重复渲染.html",
    "revision": "0ef903fc3b7a03ad28aeb628cee0c122"
  },
  {
    "url": "blog/前端/react全局引入组件.html",
    "revision": "6546a4e3b5a66e3c9069b75e72bbdc3c"
  },
  {
    "url": "blog/前端/vue ssr 报错 window is not defined.html",
    "revision": "15558cc1a8b1e9a9307a3112eaf55a0f"
  },
  {
    "url": "blog/前端/使用flv.js+obs+node-media-server实时直播.html",
    "revision": "e6e0611082719f988baa6d8c1414603b"
  },
  {
    "url": "blog/前端/图片文件或者图片链接转换成base64.html",
    "revision": "dce6f25b3d5cbb884e0274bd8d401e9c"
  },
  {
    "url": "blog/前端/如何解决图片加载失败的问题.html",
    "revision": "48e3a7feb198de64733724ccb8eedf70"
  },
  {
    "url": "blog/小游戏/兰顿蚂蚁.html",
    "revision": "9223088db41906f277a6a7f3c16ce1a9"
  },
  {
    "url": "blog/小游戏/康威-生命游戏.html",
    "revision": "c65c1d439772ae35743345edd7323ed2"
  },
  {
    "url": "blog/转载/js实现无限层级树形数据结构.html",
    "revision": "b56d8b0b0a4398c42d5a3a8878bd73a3"
  },
  {
    "url": "blog/转载/Vue组件.html",
    "revision": "e54117a23b1b8aff43a1d1fbe6acd262"
  },
  {
    "url": "blog/项目搭建/vuepress中使用elementUI.html",
    "revision": "34c9b7eef8bc19ea5c0104d368e06926"
  },
  {
    "url": "blog/项目搭建/本站搭建.html",
    "revision": "d45cdf0ebb91d072e4ca634f009f825e"
  },
  {
    "url": "categories/canvas/index.html",
    "revision": "cc56156ab6a403c09986ed6198fac5da"
  },
  {
    "url": "categories/elementUI/index.html",
    "revision": "d89752a807696cc5993aab7c35636eb2"
  },
  {
    "url": "categories/index.html",
    "revision": "b2adb641930275dab994968492df8525"
  },
  {
    "url": "categories/js/index.html",
    "revision": "cf6d2b0289fa41c7e9725f47dce9c840"
  },
  {
    "url": "categories/Markdown语法/index.html",
    "revision": "bf2a1e5098884e81ba1a6515d9113008"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "e1af8d826806290c40c3d55a0689f931"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "1e1b2f22fa2c41948dba9cce33ddb831"
  },
  {
    "url": "categories/实时直播/index.html",
    "revision": "6a6ca5bbf15ad887dfa75dbf8e63c4f5"
  },
  {
    "url": "categories/生命游戏/index.html",
    "revision": "2827d7a8e14a8e98dd4a69fef198ab2c"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "fc68721a511a11b32c431535d6b34050"
  },
  {
    "url": "categories/自动化部署/index.html",
    "revision": "3fbb4da4de6eb270fab1ed2bfc178c3b"
  },
  {
    "url": "categories/转载/index.html",
    "revision": "20e520bc64eedc30ea0c5ccb19225f66"
  },
  {
    "url": "home.jpg",
    "revision": "85fff36cb2c02b45a8d26f4369dd36f5"
  },
  {
    "url": "Img/index.html",
    "revision": "bed668a3f9c8cd8b2cc26a2451f2b6b4"
  },
  {
    "url": "index.html",
    "revision": "b822eca9e173dc897ff20e9c5d7a689a"
  },
  {
    "url": "message/index.html",
    "revision": "26b489634693fdb93453e86002a551fb"
  },
  {
    "url": "tag/flv.js/index.html",
    "revision": "0f02d7c89cb48de5a00d36740e7a13ed"
  },
  {
    "url": "tag/index.html",
    "revision": "670a8f3d2e9f37c94b7160355bb8c2fd"
  },
  {
    "url": "tag/js/index.html",
    "revision": "e8bfe1a1fa8e0aeb01ac8a7072a3f781"
  },
  {
    "url": "tag/node-media-server/index.html",
    "revision": "93207615ec40715ed8439e25187daa54"
  },
  {
    "url": "tag/obs/index.html",
    "revision": "9744d7ca1eca4b98a4b5120f7cb92e05"
  },
  {
    "url": "tag/react/index.html",
    "revision": "ad8444fe765381857ac0f6a880c79535"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "41e073382777d50038f5826278aa48e5"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "c436a67cab2f90abfdfdb73f44e0a339"
  },
  {
    "url": "tag/兰顿蚂蚁/index.html",
    "revision": "d819b7c5406bfcdea1cb3718874fc79f"
  },
  {
    "url": "tag/原创/index.html",
    "revision": "4ebd5d5a3456ac470ae6ad03e7096dc3"
  },
  {
    "url": "tag/小知识/index.html",
    "revision": "b3ce09a1542d65f42358e61212a06a01"
  },
  {
    "url": "tag/文件处理/index.html",
    "revision": "ca30ce41a23df717936d0c694b4c3c55"
  },
  {
    "url": "tag/本站搭建/index.html",
    "revision": "25195ab3aad4df4d5191b722a2ce904f"
  },
  {
    "url": "tag/语法/index.html",
    "revision": "ca4c92184d2474f250198912cc4fed91"
  },
  {
    "url": "tag/转载/index.html",
    "revision": "92859644b8a72224312e64d1a346232f"
  },
  {
    "url": "timeline/index.html",
    "revision": "79d6ae3cf5bee36224259548be3e6bd1"
  },
  {
    "url": "web/index.html",
    "revision": "816daa6a26253a28620093b1ce64d45b"
  },
  {
    "url": "个人生活/关于我.html",
    "revision": "646cab876c9a7a8b691329b8c7dcbd3f"
  },
  {
    "url": "个人生活/游戏时间.html",
    "revision": "3f477dcc460fbc160f77f29f194f3183"
  },
  {
    "url": "个人生活/电影时间.html",
    "revision": "8fa8ea0b40aa451ded1de1d6a8dcc9ba"
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
