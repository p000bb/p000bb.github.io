(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{551:function(t){t.exports=JSON.parse('[{"title":"我和我的家乡","img":"https://img2.doubanio.com/view/photo/l/public/p2620453443.webp","url":"https://movie.douban.com/subject/35051512/?from=showing","time":"2020-10-10 20:20","comment":"范伟老师演绎的最后一课，真的很感动。","rank":"8"},{"title":"信条","img":"https://img9.doubanio.com/view/photo/m/public/p2618403186.webp","url":"https://movie.douban.com/subject/30444960/?from=showing","time":"2019-9-03 20:35","comment":"没看懂QAQ！","rank":"7.5"},{"title":"利刃出鞘","img":"https://img1.doubanio.com/view/photo/m/public/p2574172427.webp","url":"https://movie.douban.com/subject/30318116/?from=showing","time":"2019-12-07 20:35","comment":"反转又反转，结局很意外。","rank":"8.5"},{"title":"速度与激情：特别行动","img":"https://img2.doubanio.com/view/photo/m/public/p2565522372.webp","url":"https://movie.douban.com/subject/27163278/?from=showing","time":"2019-08-23 11:40","comment":"动作场面很震撼，标准的爆米花电影，美中不足的是当时是下午看的，看得我打瞌睡。","rank":"7"},{"title":"哪吒之魔童降世","img":"https://img9.doubanio.com/view/photo/m/public/p2563780504.webp","url":"https://movie.douban.com/subject/26794435/?from=showing","time":"2019-08-23 11:40","comment":"国产动画的巅峰之作，剧情和画面都无可挑剔。","rank":"9"},{"title":"蜘蛛侠：英雄远征","img":"https://img9.doubanio.com/view/photo/m/public/p2558293106.webp","url":"https://movie.douban.com/subject/26931786/?from=showing","time":"2019-08-23 11:40","comment":"在宜春万达看的IMAX，后面神秘客翻转太精彩了，电影也有很多致敬钢铁侠的地方，很不错！","rank":"9"},{"title":"哥斯拉2：怪兽之王","img":"https://img3.doubanio.com/view/photo/m/public/p2554370800.webp","url":"https://movie.douban.com/subject/25890017/?from=showing","time":"2019-5-31 13:20","comment":"看的IMAX，音响实在是太吵了，中途睡着了。","rank":"6"},{"title":"复仇者联盟4：终局之战","img":"https://img9.doubanio.com/view/photo/m/public/p2552058346.webp","url":"https://movie.douban.com/subject/26100958/?from=showing","time":"2019-04-24 00:00","comment":"第一次看的首映，接近三个小时的电影，把漫威十年的一点一滴刻画的满满登登，电影中还有很多致敬画面和小彩蛋。电影开局20分钟灭霸就死了当时我人都傻了！","rank":"10"},{"title":"反贪风暴4","img":"https://img2.doubanio.com/view/photo/m/public/p2551353482.webp","url":"https://movie.douban.com/subject/27202819/?from=showing","time":"2019-04-04 19:00","comment":"古仔的电影无脑支持就完事了，标准的港式电影。","rank":"7"},{"title":"惊奇队长","img":"https://img2.doubanio.com/view/photo/m/public/p2546360443.webp","url":"https://movie.douban.com/subject/26213252/?from=showing","time":"2019-03-09 19:00","comment":"故事从复联3末尾彩蛋开始，讲述了妈惹法克侠和惊队指尖的故事，谁能想到局长的眼睛竟然是噬元兽给抓瞎的","rank":"7"},{"title":"飞驰人生","img":"https://img2.doubanio.com/view/photo/m/public/p2542973862.webp","url":"https://movie.douban.com/subject/30163509/?from=showing","time":"2019-03-09 19:00","comment":"起飞诶，飞！笑点挺足的。","rank":"7"},{"title":"流浪地球","img":"https://img2.doubanio.com/view/photo/m/public/p2545472803.webp","url":"https://movie.douban.com/subject/26266893/?from=showing","time":"2019-02-05 19:00","comment":"国产科幻开山之作，虽然和好莱坞还有一定的距离，但是对于我们来说确实一大步","rank":"8"},{"title":"密室逃生","img":"https://img2.doubanio.com/view/photo/m/public/p2543631842.webp","url":"https://movie.douban.com/subject/27109679/?from=showing","time":"2019-01-18 19:00","comment":"有一说一蛮好看的，剧情紧凑，没有血腥场面。每一个密室对应一个角色经历的事件","rank":"8"},{"title":"李茶的姑妈","img":"https://img3.doubanio.com/view/photo/m/public/p2533384240.webp","url":"https://movie.douban.com/subject/27092785/?from=showing","time":"2018-09-30 18:00","comment":"垃圾垃圾","rank":"4"},{"title":"无双","img":"https://img9.doubanio.com/view/photo/m/public/p2535260806.webp","url":"https://movie.douban.com/subject/26425063/?from=showing","time":"2018-10-8 18:00","comment":"非常嫌疑犯式的结局，郭富城和周润发的精彩演绎","rank":"9"}]')},584:function(t,i,o){},628:function(t,i,o){"use strict";o(584)},643:function(t,i,o){"use strict";o.r(i);o(36),o(81);var e=o(551),m={data:function(){return{movieList:[],currentPage:1,total:1,pageSize:10,loading:!1}},created:function(){this.movieList=e.slice((this.currentPage-1)*this.pageSize,this.currentPage*this.pageSize),this.total=e.length},methods:{goDouban:function(t){window.open(t)},handleCurrentChange:function(t){var i=this;this.loading=!0,setTimeout((function(){i.currentPage=t,window.scrollTo(0,0),i.movieList=e.slice((i.currentPage-1)*i.pageSize,i.currentPage*i.pageSize),i.loading=!1}),1e3)}}},n=(o(628),o(6)),s=Object(n.a)(m,(function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("div",{staticClass:"movie"},[o("Content",{attrs:{"slot-key":"tip"}}),t._v(" "),o("ul",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},t._l(t.movieList,(function(i,e){return o("li",{staticClass:"movieLi"},[o("div",{staticStyle:{display:"flex"}},[o("div",{staticStyle:{"margin-right":"1.5rem"}},[o("img",{staticClass:"movie_img",attrs:{src:i.img,alt:""}})]),t._v(" "),o("div",{staticStyle:{width:"100%"}},[o("h2",{staticClass:"title",on:{click:function(o){return t.goDouban(i.url)}}},[t._v(t._s(i.title))]),t._v(" "),o("div",{staticClass:"movieInfo",domProps:{innerHTML:t._s(i.comment)}}),t._v(" "),o("div",{staticClass:"page-info"},[o("div",{staticClass:"tags"},[o("i",{staticClass:"el-icon-timer"}),t._v(t._s(i.time))]),t._v(" "),o("div",{staticClass:"tags"},[o("span",{staticStyle:{"margin-right":"1rem"}},[t._v("个人评分:")]),t._v(" "),o("el-rate",{attrs:{value:i.rank/2,disabled:"","show-score":"","text-color":"#ff9900","score-template":i.rank}})],1)])])])])})),0),t._v(" "),o("el-pagination",{attrs:{background:"","current-page":t.currentPage,layout:"prev, pager, next",total:t.total,"page-size":t.pageSize},on:{"current-change":t.handleCurrentChange}})],1)}),[],!1,null,"1586909f",null);i.default=s.exports}}]);