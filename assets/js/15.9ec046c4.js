(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{676:function(e,t,a){},732:function(e,t,a){"use strict";a(676)},753:function(e,t,a){"use strict";a.r(t);var n={data:function(){return{list:[],currentPage:1,total:1,pageSize:10,loading:!1}},created:function(){this.getData()},methods:{getData:function(){var e=this;this.loading=!0,this.axios.get("/?s=App.Table.FreeQuery",{model_name:"pyq",where:'[["id", ">=", "0"]]',page:this.currentPage,perpage:10}).then((function(t){e.loading=!1,e.list=t.list,e.total=t.total}))},handleCurrentChange:function(e){this.currentPage=e,this.getData()}}},i=(a(732),a(7)),r=Object(i.a)(n,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[a("el-timeline",e._l(e.list,(function(t){return a("el-timeline-item",{key:t.id,attrs:{timestamp:t.add_time,placement:"top"}},[a("el-card",{staticClass:"my-card",domProps:{innerHTML:e._s(t.html)}})],1)})),1),e._v(" "),a("el-pagination",{attrs:{background:"","current-page":e.currentPage,layout:"prev, pager, next",total:e.total,"page-size":e.pageSize},on:{"current-change":e.handleCurrentChange}})],1)}),[],!1,null,"88070f42",null);t.default=r.exports}}]);