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
    "revision": "fe6c570abc6aa94273366691ea64ba2b"
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
    "url": "assets/js/36.bb694d62.js",
    "revision": "549ebb145fba63d9e9ea4ebc5b9dac03"
  },
  {
    "url": "assets/js/37.ac053edb.js",
    "revision": "12d7789079d0423b6527a28de26265a8"
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
    "url": "assets/js/app.f2612ada.js",
    "revision": "a646395a2b49fbe7fb7e383d3c99cdf5"
  },
  {
    "url": "blog/markdown语法/markdwn语法.html",
    "revision": "51f9247dad4bab22ac7a50634828ee9a"
  },
  {
    "url": "blog/前端/flex布局换行左对齐解决方法.html",
    "revision": "1019e237ec6b26fe65cee11f186c3428"
  },
  {
    "url": "blog/前端/react使用antd的tabs导致组件重复渲染.html",
    "revision": "50f9781a86a6dfa95df269c0b73fe716"
  },
  {
    "url": "blog/前端/react全局引入组件.html",
    "revision": "f394613041de189ff015cf0a51ae058b"
  },
  {
    "url": "blog/前端/vue ssr 报错 window is not defined.html",
    "revision": "8a529278ebb68bd3e920a2e2c429c9fb"
  },
  {
    "url": "blog/前端/使用flv.js+obs+node-media-server实时直播.html",
    "revision": "0571203b6eb938c685262a118ad04a59"
  },
  {
    "url": "blog/前端/图片文件或者图片链接转换成base64.html",
    "revision": "9ca87ffb98b8b88184d5cf6441de4d0d"
  },
  {
    "url": "blog/前端/如何解决图片加载失败的问题.html",
    "revision": "93d68a8c24a1bdcb7eefadbf8836a9c0"
  },
  {
    "url": "blog/小游戏/兰顿蚂蚁.html",
    "revision": "26a7da1e6849b2ae0f26b7207da12140"
  },
  {
    "url": "blog/小游戏/康威-生命游戏.html",
    "revision": "df41d83cdfddc815ddd498a7f166f387"
  },
  {
    "url": "blog/转载/js实现无限层级树形数据结构.html",
    "revision": "6e92ac23b13cc9c91e36b7970686b396"
  },
  {
    "url": "blog/转载/Vue组件.html",
    "revision": "dfb574308bf87c5b06705b65dc4e3ef1"
  },
  {
    "url": "blog/项目搭建/vuepress中使用elementUI.html",
    "revision": "fa9c5eb28a420b449c8739fe208feb72"
  },
  {
    "url": "blog/项目搭建/本站搭建.html",
    "revision": "d03e7bb56dcd0560601da808ee4bc4f2"
  },
  {
    "url": "categories/canvas/index.html",
    "revision": "c523f4e0c9024fc4ea0116541699a12f"
  },
  {
    "url": "categories/elementUI/index.html",
    "revision": "e0095172932429d874c59637b4ceca22"
  },
  {
    "url": "categories/index.html",
    "revision": "d6cdf71c9a27f18579e00007bec3214b"
  },
  {
    "url": "categories/js/index.html",
    "revision": "2e87f83bca31169a972efd8a2a6dfc1e"
  },
  {
    "url": "categories/Markdown语法/index.html",
    "revision": "33a6f936e792c871c014b916fdee1361"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "a0cbda06b6bda33590cc7c09a98ab916"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "8b792f85578d87784dc3a107fb830b43"
  },
  {
    "url": "categories/实时直播/index.html",
    "revision": "6d599d1425f9100c8eb857fb9b47d12f"
  },
  {
    "url": "categories/生命游戏/index.html",
    "revision": "96fdb45a3e3062fe4124d793d826b0a5"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "44fca0ece074fdacf90fa2e794f777f4"
  },
  {
    "url": "categories/自动化部署/index.html",
    "revision": "738d1907a059580840c8d67161f31f27"
  },
  {
    "url": "categories/转载/index.html",
    "revision": "7f19728e754684ee92dc3c15a662b649"
  },
  {
    "url": "home.jpg",
    "revision": "85fff36cb2c02b45a8d26f4369dd36f5"
  },
  {
    "url": "Img/index.html",
    "revision": "f25bd078fb62d73100a988cabb05901d"
  },
  {
    "url": "index.html",
    "revision": "505178b5f342952b73c0cf5ae85070c6"
  },
  {
    "url": "message/index.html",
    "revision": "71a7a98c29937dfa993588268353ed9b"
  },
  {
    "url": "tag/css/index.html",
    "revision": "91bf0222f7d3510d85b5884a1afe8ee5"
  },
  {
    "url": "tag/flex布局/index.html",
    "revision": "7633accef0a3eb3a2d55b019dfd8840c"
  },
  {
    "url": "tag/flv.js/index.html",
    "revision": "2f2f84ead35bb23b3454e6847252741d"
  },
  {
    "url": "tag/index.html",
    "revision": "e46676f2cebe045f7ded73c21fbbe42c"
  },
  {
    "url": "tag/js/index.html",
    "revision": "481b214d9e188c661ece5346ee75921c"
  },
  {
    "url": "tag/node-media-server/index.html",
    "revision": "e64105f904fc5f7e6bf2f516c345213d"
  },
  {
    "url": "tag/obs/index.html",
    "revision": "5766d55f47d665d9fef57e945cbae7ac"
  },
  {
    "url": "tag/react/index.html",
    "revision": "703c3af534fdd45ad6983a0b68f81dbb"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "d43aa172472949362295dc830c86d0b9"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "dddddc90d40c61c349ba3195476b2012"
  },
  {
    "url": "tag/兰顿蚂蚁/index.html",
    "revision": "92a1e8cb6487886814466b7d6b701f9b"
  },
  {
    "url": "tag/原创/index.html",
    "revision": "e56521f145033fe7ad607a311ee44a0a"
  },
  {
    "url": "tag/小知识/index.html",
    "revision": "fa787080cdf58f4c1e88d07b99596aba"
  },
  {
    "url": "tag/文件处理/index.html",
    "revision": "e63e9b4f00076c2a43cc21a04c64955a"
  },
  {
    "url": "tag/本站搭建/index.html",
    "revision": "456c45f3aa8db0d0137bc4a893c465ab"
  },
  {
    "url": "tag/语法/index.html",
    "revision": "6e8800160e0b574742006f7d55d1ded8"
  },
  {
    "url": "tag/转载/index.html",
    "revision": "1c12bba1498620e6e1842cf1aa099d3f"
  },
  {
    "url": "timeline/index.html",
    "revision": "739061b0e4371ac6598779d6ac601537"
  },
  {
    "url": "web/index.html",
    "revision": "73292a31b6ab9f2df9a57c23cfd7a577"
  },
  {
    "url": "个人生活/关于我.html",
    "revision": "483ce9f80a0462e268f089ba7154e30a"
  },
  {
    "url": "个人生活/游戏时间.html",
    "revision": "0153b6afcb639219c9edd595614b7f07"
  },
  {
    "url": "个人生活/电影时间.html",
    "revision": "e5f3b09e7107a36cc8532ad572af2933"
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
