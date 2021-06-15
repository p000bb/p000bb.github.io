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
    "revision": "8f1a7f9b570bc331975bc88dd606a209"
  },
  {
    "url": "assets/css/0.styles.df50a832.css",
    "revision": "e9a22d739ac976c194c493e69af7b828"
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
    "url": "assets/js/1.a7b588d0.js",
    "revision": "d70caab2492313632a9daee7049bd190"
  },
  {
    "url": "assets/js/10.33e5e10f.js",
    "revision": "da58faa44cea69955f42e551fd7b348a"
  },
  {
    "url": "assets/js/11.5f5ef548.js",
    "revision": "22d88b463a3a12003b8aefbd26198a9c"
  },
  {
    "url": "assets/js/12.31cff94d.js",
    "revision": "b2ff78307dfc497e8081e55815028eca"
  },
  {
    "url": "assets/js/13.f68c8765.js",
    "revision": "969027bd65d8727b94e021ae0d35fd0d"
  },
  {
    "url": "assets/js/14.b68606d7.js",
    "revision": "7b4e1ae06b5d6eaa1ab7f6c5abc51b15"
  },
  {
    "url": "assets/js/15.e1c4a388.js",
    "revision": "79da68932d103bc1db7fb2ff9dbc07b0"
  },
  {
    "url": "assets/js/16.a7f1a8b9.js",
    "revision": "58f6bbc384e665b1252e632e8f5eddbb"
  },
  {
    "url": "assets/js/17.4c36b16d.js",
    "revision": "b3d2c9d84cacf52eccf4caac700bfa8f"
  },
  {
    "url": "assets/js/18.73c06508.js",
    "revision": "d5cac62000626f66b6e2fdaf70a534ce"
  },
  {
    "url": "assets/js/19.d47a03b1.js",
    "revision": "a6406bffbe27f15150414378618f3e4c"
  },
  {
    "url": "assets/js/20.3b878c70.js",
    "revision": "cd4c2e637c9b57cc0569d733fcbed90c"
  },
  {
    "url": "assets/js/21.a789a496.js",
    "revision": "a407fa280d52d92e09af1ddbe6a8abf9"
  },
  {
    "url": "assets/js/22.6281eb9e.js",
    "revision": "a42c348a72e5e704fcc6f4077c35c31b"
  },
  {
    "url": "assets/js/23.844699ca.js",
    "revision": "e52d067ba37d16619b7140ba1f4c7deb"
  },
  {
    "url": "assets/js/24.7728abbc.js",
    "revision": "2342a832310c1d8e3ceda39b232addc6"
  },
  {
    "url": "assets/js/25.71a107fd.js",
    "revision": "31e307aed9930f342714e8c3e47f47bd"
  },
  {
    "url": "assets/js/26.e94574eb.js",
    "revision": "b0c490e0b5e6baa1e8c3f235007e8a82"
  },
  {
    "url": "assets/js/27.208c1941.js",
    "revision": "49b3d48a34bfa789350958b219ee3fea"
  },
  {
    "url": "assets/js/28.8ea35999.js",
    "revision": "8f91bbeeb58bebfa74d5d70641bd8fe2"
  },
  {
    "url": "assets/js/29.93bc4130.js",
    "revision": "e514138e9c11a9df1037a7dbbaefce3a"
  },
  {
    "url": "assets/js/3.f1be9219.js",
    "revision": "a99b51aed8d9f2b69a27d5498def50ee"
  },
  {
    "url": "assets/js/30.7bfa7c82.js",
    "revision": "13666d326cd6bc25db0a8649f878ef5a"
  },
  {
    "url": "assets/js/31.7cb60635.js",
    "revision": "10e45ec49b32638558a77c27a7433d99"
  },
  {
    "url": "assets/js/32.fbdb0a0a.js",
    "revision": "dd47cc4c62ad816c2ede8a571e27f547"
  },
  {
    "url": "assets/js/33.194b5b54.js",
    "revision": "83614619d77ffb74e34ebb7d06c1906e"
  },
  {
    "url": "assets/js/34.aad4d7a9.js",
    "revision": "819de926017cb8b8891d8d4d88cf1b55"
  },
  {
    "url": "assets/js/35.9682c0e3.js",
    "revision": "d382323a02afffaec253610d22dbbdfb"
  },
  {
    "url": "assets/js/36.f879c768.js",
    "revision": "633f9640e0dba66174bea771e05e8623"
  },
  {
    "url": "assets/js/37.6c328041.js",
    "revision": "ad5daf4aa117abc89ff1146096a71d8c"
  },
  {
    "url": "assets/js/38.e06abb29.js",
    "revision": "a26ac1456c90447b98e0e60d4f5a0959"
  },
  {
    "url": "assets/js/39.b2ef0fca.js",
    "revision": "97877c14eff91d2cba63e2210a41398f"
  },
  {
    "url": "assets/js/4.2a701b27.js",
    "revision": "bcff384b8e1d1505c499ffeb5fbf48af"
  },
  {
    "url": "assets/js/5.f5b2d459.js",
    "revision": "f40d658346d50e0ec58c5fc0478ed233"
  },
  {
    "url": "assets/js/6.e63a2ff6.js",
    "revision": "d7475a42d8da28dcfad69e543bf636f9"
  },
  {
    "url": "assets/js/7.97fd9f7c.js",
    "revision": "b2f01e18faafa57f63cd66752692e6a5"
  },
  {
    "url": "assets/js/8.0465a934.js",
    "revision": "0041d958117d639231b922d829f295bf"
  },
  {
    "url": "assets/js/9.4370e906.js",
    "revision": "7140dd8e3c8983902ec3ee206c8c8de4"
  },
  {
    "url": "assets/js/app.08b7d403.js",
    "revision": "34577dd8a092778d8c8ea77fb4c1ffd4"
  },
  {
    "url": "blog/markdown语法/markdwn语法.html",
    "revision": "f408fc6bd8261a5f6512fc571208821b"
  },
  {
    "url": "blog/前端/flex布局换行左对齐解决方法.html",
    "revision": "7b3ce9603090cc52f360c9d07db0bc31"
  },
  {
    "url": "blog/前端/react使用antd的tabs导致组件重复渲染.html",
    "revision": "b8eb2dc843c4efba49c56a465dddda14"
  },
  {
    "url": "blog/前端/react全局引入组件.html",
    "revision": "8bd4b80c1eba2ddc20116dd5ada8eea4"
  },
  {
    "url": "blog/前端/vue ssr 报错 window is not defined.html",
    "revision": "5b97d9adec06532e3b3af2251e497c52"
  },
  {
    "url": "blog/前端/使用flv.js+obs+node-media-server实时直播.html",
    "revision": "24918766ace528483851a5c2f86f391d"
  },
  {
    "url": "blog/前端/图片文件或者图片链接转换成base64.html",
    "revision": "69a0d3a7ebba9cd484b30f2a42797932"
  },
  {
    "url": "blog/前端/如何解决图片加载失败的问题.html",
    "revision": "bab3a1f61f8944268efa56b81b9f19d8"
  },
  {
    "url": "blog/小游戏/兰顿蚂蚁.html",
    "revision": "4293534130946a184ddeb98a551c2766"
  },
  {
    "url": "blog/小游戏/康威-生命游戏.html",
    "revision": "9df7adf61ebfa8442ebc364cba56daa2"
  },
  {
    "url": "blog/转载/js实现无限层级树形数据结构.html",
    "revision": "f9e77d2a5a5ba50a8e7371e7910683dc"
  },
  {
    "url": "blog/转载/Vue组件.html",
    "revision": "b0ef7130ef177f4ea0e7fe0c74371458"
  },
  {
    "url": "blog/项目搭建/vuepress中使用elementUI.html",
    "revision": "9e8ef82c9179cbfd70e2a9f46db7247a"
  },
  {
    "url": "blog/项目搭建/本站搭建.html",
    "revision": "b3cc2ba7fea14276acf5ae1a165f1b36"
  },
  {
    "url": "categories/canvas/index.html",
    "revision": "f434269110f1c109d5bb1d773d7ed087"
  },
  {
    "url": "categories/elementUI/index.html",
    "revision": "19abf1ba77551d71fa55bcb49381e254"
  },
  {
    "url": "categories/index.html",
    "revision": "747da77db0c5dd7e16a8c5c59ee8f304"
  },
  {
    "url": "categories/js/index.html",
    "revision": "4f20f692fe1298802d729c3c1b063207"
  },
  {
    "url": "categories/Markdown语法/index.html",
    "revision": "1f6b1fb2f787c3c256ae986a875dac59"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "f1adb9ab90fe1a7030b827470494fb1e"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "1c9d4d8780d6d1162660b6aaba953e94"
  },
  {
    "url": "categories/实时直播/index.html",
    "revision": "50ae1e0352051eb57daf838b9d1e7e48"
  },
  {
    "url": "categories/生命游戏/index.html",
    "revision": "de337338f17f92cc0b7c911420375b82"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "fe13c8f85e34012d134386d8d3079409"
  },
  {
    "url": "categories/自动化部署/index.html",
    "revision": "b4672148c097166f8d9f1438dc43679d"
  },
  {
    "url": "categories/转载/index.html",
    "revision": "eeb90c935188e2c209519f3f8bd347fd"
  },
  {
    "url": "home.jpg",
    "revision": "85fff36cb2c02b45a8d26f4369dd36f5"
  },
  {
    "url": "Img/index.html",
    "revision": "60a1e9478fef72a47b69994a5c7fa11b"
  },
  {
    "url": "index.html",
    "revision": "848955a027f0a47c5dd4bf5b21e49cb3"
  },
  {
    "url": "message/index.html",
    "revision": "fd15ff0ac9412a6320e88b750f2b2a0d"
  },
  {
    "url": "tag/css/index.html",
    "revision": "c938a890894bb04d1468947b72f5858e"
  },
  {
    "url": "tag/flex布局/index.html",
    "revision": "4809d64f7f0e5315e39432b7f1e8635c"
  },
  {
    "url": "tag/flv.js/index.html",
    "revision": "14a33d7d910b44ff43806df60ebda293"
  },
  {
    "url": "tag/index.html",
    "revision": "1de61f56dd294fca578f1fb578616fb3"
  },
  {
    "url": "tag/js/index.html",
    "revision": "49891056b18040bfda5b1ed8e1cb3fd1"
  },
  {
    "url": "tag/node-media-server/index.html",
    "revision": "1e519987027a6dab802bc386a0de5dbd"
  },
  {
    "url": "tag/obs/index.html",
    "revision": "700182a43dd5f6114215d2ad0b3960ff"
  },
  {
    "url": "tag/react/index.html",
    "revision": "a495b362b5c2365e39daf06135111f46"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "1260fc351e714943ea72b529f875ee82"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "e739e90493915b643dc6ecc562170957"
  },
  {
    "url": "tag/兰顿蚂蚁/index.html",
    "revision": "cc99f855cadd4b38803500102732cb32"
  },
  {
    "url": "tag/原创/index.html",
    "revision": "1950d6b5fc5f47bb5becc4c6952cefc6"
  },
  {
    "url": "tag/小知识/index.html",
    "revision": "84c5d5ca1d874db79ce9d30043e70838"
  },
  {
    "url": "tag/文件处理/index.html",
    "revision": "63b872c37fed897499e76ec3ad8b88b4"
  },
  {
    "url": "tag/本站搭建/index.html",
    "revision": "c0d28f65a5f41cbc8191ae89a17e5fff"
  },
  {
    "url": "tag/语法/index.html",
    "revision": "57cac5459ba6c5eeb5d10825e10e9215"
  },
  {
    "url": "tag/转载/index.html",
    "revision": "99c4d767fe5b2677eca5c4bdc50231bf"
  },
  {
    "url": "timeline/index.html",
    "revision": "30e4e43a7c1b5f8af3250936f434a1c3"
  },
  {
    "url": "web/index.html",
    "revision": "14ee77e64d2ad4268aaa8ad125407d82"
  },
  {
    "url": "个人生活/关于我.html",
    "revision": "a1b5e09e5ff2b14dd716ecf8ae480384"
  },
  {
    "url": "个人生活/游戏时间.html",
    "revision": "a2df0c7086c4b58c161a109f0f8edaba"
  },
  {
    "url": "个人生活/电影时间.html",
    "revision": "b0d29992bc79af3c40365ca79649a8e3"
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
