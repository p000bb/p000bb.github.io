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
    "revision": "cc0849d0bdb96ef968696c3595f17c02"
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
    "url": "assets/js/14.9bb97fc1.js",
    "revision": "f0355e075a0d741880454d6608afe0ec"
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
    "url": "assets/js/21.8f4e307d.js",
    "revision": "dd3017f698b72f45be39d3815e555282"
  },
  {
    "url": "assets/js/22.5bee14bf.js",
    "revision": "16713e24918a17d5c4167895c7d2d274"
  },
  {
    "url": "assets/js/23.d12057a5.js",
    "revision": "4082ce0aa7ca2a990dae4ebacd406e6a"
  },
  {
    "url": "assets/js/24.512211dc.js",
    "revision": "4d133044affe0a088210d105702032cb"
  },
  {
    "url": "assets/js/25.7c74ee8e.js",
    "revision": "181d2d1d6b500bc5e22aefb582ba4e75"
  },
  {
    "url": "assets/js/26.64e92645.js",
    "revision": "61946ba86daa3e259d3655a3e626d692"
  },
  {
    "url": "assets/js/27.8cf070e0.js",
    "revision": "ea570dd8a5d94b3c52ce8b3fb8447c4d"
  },
  {
    "url": "assets/js/28.e0dd2879.js",
    "revision": "f16508443b2c801d8036b294f263de94"
  },
  {
    "url": "assets/js/29.e7490ed6.js",
    "revision": "9c56b2cf593a97376325ad497052d4e2"
  },
  {
    "url": "assets/js/3.e25b494e.js",
    "revision": "2af11e69b4d1a11de9c2fae623e03783"
  },
  {
    "url": "assets/js/30.15f4aff0.js",
    "revision": "5640680c07e485058e8abd5a8b74c9d6"
  },
  {
    "url": "assets/js/31.3b9c4951.js",
    "revision": "24314e3e264a8155caca186bce242d05"
  },
  {
    "url": "assets/js/32.f53ebbff.js",
    "revision": "9437a093363058d25925b7eb76eabadc"
  },
  {
    "url": "assets/js/33.470ae53a.js",
    "revision": "8f8afeccacc9e74fe3a52276d403bacc"
  },
  {
    "url": "assets/js/34.ef071edd.js",
    "revision": "df7d7782507a2c5b56ebfd5fa141f74f"
  },
  {
    "url": "assets/js/35.ceaf6a71.js",
    "revision": "b43ba164257dc4d4ad5b52595503e893"
  },
  {
    "url": "assets/js/36.98a91bd5.js",
    "revision": "36d299dbae220897d616d6e38898b2e0"
  },
  {
    "url": "assets/js/37.11e4b718.js",
    "revision": "dd99a38407564e578761f5af1672d8be"
  },
  {
    "url": "assets/js/38.5c04bca1.js",
    "revision": "e998e2550e25f2d57a61ccd3d496323b"
  },
  {
    "url": "assets/js/39.a68f4239.js",
    "revision": "2c23047681f45879af0ecfac5fc17774"
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
    "url": "assets/js/app.9a4c38ab.js",
    "revision": "b023aa6ce5ab882c8bf3866bd29e45ec"
  },
  {
    "url": "blog/markdown语法/markdwn语法.html",
    "revision": "7aedcbe6cac42c80f4aa99f539df14a7"
  },
  {
    "url": "blog/前端/flex布局换行左对齐解决方法.html",
    "revision": "67d5caf8d5c8291c9a63dc0fba9882e7"
  },
  {
    "url": "blog/前端/react使用antd的tabs导致组件重复渲染.html",
    "revision": "6f3791302de6b799dc3a6dabba04006e"
  },
  {
    "url": "blog/前端/react全局引入组件.html",
    "revision": "72f69814455e2b7c4c013f6de464a679"
  },
  {
    "url": "blog/前端/vue ssr 报错 window is not defined.html",
    "revision": "7c03c322e4bae0aee6dbc4f79afcb0b9"
  },
  {
    "url": "blog/前端/使用flv.js+obs+node-media-server实时直播.html",
    "revision": "fe6cd6ffb498a2ed8421d6b5c66bc725"
  },
  {
    "url": "blog/前端/图片文件或者图片链接转换成base64.html",
    "revision": "9547b5f83d9e7eb80034dcb8d386e332"
  },
  {
    "url": "blog/前端/如何解决图片加载失败的问题.html",
    "revision": "17d0765537d8c0de543a2184a678d7dd"
  },
  {
    "url": "blog/小游戏/兰顿蚂蚁.html",
    "revision": "a6685ff91761b22269301cb11a2510a8"
  },
  {
    "url": "blog/小游戏/康威-生命游戏.html",
    "revision": "e68a8f2415c3bfb5e91504a4db9eb204"
  },
  {
    "url": "blog/转载/js实现无限层级树形数据结构.html",
    "revision": "79a0055d1e0f39d5d1dc5a9bebd33d7a"
  },
  {
    "url": "blog/转载/Vue组件.html",
    "revision": "ee39afe48421d18611478bf7352fb561"
  },
  {
    "url": "blog/项目搭建/vuepress中使用elementUI.html",
    "revision": "3299f5394c68c3f85c9ce65064d206dd"
  },
  {
    "url": "blog/项目搭建/本站搭建.html",
    "revision": "b6fda63ecb6491caaba8cb7f404ae4c2"
  },
  {
    "url": "categories/canvas/index.html",
    "revision": "75247b8123a6fceebecae17609bbc34a"
  },
  {
    "url": "categories/elementUI/index.html",
    "revision": "fdca1378936f3e062b73671dc24e4623"
  },
  {
    "url": "categories/index.html",
    "revision": "b43b4cb274466802ba8879495d54660c"
  },
  {
    "url": "categories/js/index.html",
    "revision": "5d5508135516d4f4addfe0e51d5315b5"
  },
  {
    "url": "categories/Markdown语法/index.html",
    "revision": "ca3ccb40daf948c3b680f25b62938807"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "82a123b312916a8d1a1d9daa76d331af"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "812d1f75af0857b7e0e4edf09730cb1b"
  },
  {
    "url": "categories/实时直播/index.html",
    "revision": "19e8e19bb79372da495b1208af04b7e4"
  },
  {
    "url": "categories/生命游戏/index.html",
    "revision": "d1f5ccb89929f94dc99f7491720de0c5"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "5d648a0c71798be392de77ebd1c8d7ca"
  },
  {
    "url": "categories/自动化部署/index.html",
    "revision": "6aa009d6e64483c533581792e91cceac"
  },
  {
    "url": "categories/转载/index.html",
    "revision": "42e2a6f15d8506ae94c9095cbe5bbdc2"
  },
  {
    "url": "home.jpg",
    "revision": "85fff36cb2c02b45a8d26f4369dd36f5"
  },
  {
    "url": "Img/index.html",
    "revision": "b5bf8aff339a0b41e159b9f0110e4339"
  },
  {
    "url": "index.html",
    "revision": "e94c210dc6b05b8a988938236d722dff"
  },
  {
    "url": "message/index.html",
    "revision": "212e8cca72dc0d3a2f6d11df1a0b998e"
  },
  {
    "url": "tag/css/index.html",
    "revision": "01bbcce55954b5e7840baaa93ab17e14"
  },
  {
    "url": "tag/flex布局/index.html",
    "revision": "f275d3070b45c66432739e63dfeffe57"
  },
  {
    "url": "tag/flv.js/index.html",
    "revision": "6f8da8066b04aeb0f33645ad6b417e16"
  },
  {
    "url": "tag/index.html",
    "revision": "7f5801448c2f7f39e85ae79d986030ee"
  },
  {
    "url": "tag/js/index.html",
    "revision": "fd84a1da4847ed5a022ec879d5083842"
  },
  {
    "url": "tag/node-media-server/index.html",
    "revision": "14991d2781836cd1a03d7d7c817c4de0"
  },
  {
    "url": "tag/obs/index.html",
    "revision": "11519710822b0efe2334fbccc4a3504c"
  },
  {
    "url": "tag/react/index.html",
    "revision": "305ceb787a2546c2ce3d92d3e7439f08"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "8e75d4aacdbad637fc7557ffbd766a31"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "0a7c426df9cfb2e7207be75e5fb5d163"
  },
  {
    "url": "tag/兰顿蚂蚁/index.html",
    "revision": "84e8df96df91159a6bff4c79c9b4dcd4"
  },
  {
    "url": "tag/原创/index.html",
    "revision": "aca8dc9b31b31a7e689718e6f4e09969"
  },
  {
    "url": "tag/小知识/index.html",
    "revision": "f79210681d6367c7ec0272ba39ac9be2"
  },
  {
    "url": "tag/文件处理/index.html",
    "revision": "a74d10a95982407e6066ad1632f74408"
  },
  {
    "url": "tag/本站搭建/index.html",
    "revision": "aed4cc9617ffe079ea6d802cdf1ba1d3"
  },
  {
    "url": "tag/语法/index.html",
    "revision": "abd35268baab46dd93fbea2d60e3af79"
  },
  {
    "url": "tag/转载/index.html",
    "revision": "b479ccfd7277cf239c0a3806a1b8112b"
  },
  {
    "url": "timeline/index.html",
    "revision": "a7bbd6923f485077a466eb737fb67bb9"
  },
  {
    "url": "web/index.html",
    "revision": "e323fbe03d8921a4d1531464d75a215f"
  },
  {
    "url": "个人生活/关于我.html",
    "revision": "ec6c44b5d5cf85680d5040919b7fd713"
  },
  {
    "url": "个人生活/游戏时间.html",
    "revision": "f8f0a727d60682a191e1dda291dbb2d6"
  },
  {
    "url": "个人生活/电影时间.html",
    "revision": "fd6e83ed516b61a96ccc79292618d881"
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
