(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-099fdf42"],{1540:function(t,e,n){"use strict";n.d(e,"c",function(){return o}),n.d(e,"e",function(){return r}),n.d(e,"f",function(){return i}),n.d(e,"a",function(){return u}),n.d(e,"b",function(){return s}),n.d(e,"g",function(){return d}),n.d(e,"d",function(){return c});var a=n("66df"),o=function(t){return a["a"].request({url:"/api/forum/category/",headers:{Authorization:"JWT "+t},method:"get"})},r=function(t,e){return a["a"].request({url:"/api/forum/category/"+t+"/",headers:{Authorization:"JWT "+e},method:"get"})},i=function(t,e,n){return a["a"].request({url:"/api/forum/category/"+t+"/",headers:{Authorization:"JWT "+n},data:e,method:"put"})},u=function(t,e){return a["a"].request({url:"/api/forum/category/",headers:{Authorization:"JWT "+e},data:t,method:"post"})},s=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return a["a"].request({url:"/api/forum/?title="+e+"&category="+n,headers:{Authorization:"JWT "+t},method:"get"})},d=function(t,e){return a["a"].request({url:"/api/forum/"+e+"/",headers:{Authorization:"JWT "+t},method:"delete"})},c=function(t,e,n){return a["a"].request({url:"/api/forum/"+e+"/",headers:{Authorization:"JWT "+t},data:n,method:"PATCH"})}},"406a":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Card",{attrs:{bordered:!1}},[n("Row",[n("Col",{attrs:{span:"18"}},[n("p",{staticStyle:{"font-size":"14px","font-weight":"600"}},[t._v("帖子分类 ")])]),n("Col",{attrs:{span:"6"}},[n("div",{staticStyle:{"padding-bottom":"20px",width:"100%",display:"flex","justify-content":"flex-end"}},[n("Tooltip",{attrs:{content:"新增",placement:"right"}},[n("Icon",{attrs:{type:"md-add-circle",size:"28"},on:{click:t.add}})],1)],1)]),n("Divider")],1),n("Table",{attrs:{border:"",columns:t.columns,data:t.data},scopedSlots:t._u([{key:"id",fn:function(e){e.row;var a=e.index;return[n("span",[t._v(t._s(a+1))])]}},{key:"name",fn:function(e){var a=e.row;e.index;return[n("span",[t._v(t._s(a.name))])]}},{key:"action",fn:function(e){var a=e.row;e.index;return[n("Button",{attrs:{type:"primary"},on:{click:function(e){return t.update(a.id)}}},[t._v("修改")])]}}])}),n("Modal",{attrs:{title:t.title},on:{"on-ok":t.ok,"on-cancel":t.cancel},model:{value:t.modal1,callback:function(e){t.modal1=e},expression:"modal1"}},[n("Form",{attrs:{model:t.formItem,"label-width":80}},[n("FormItem",{attrs:{label:"分类名"}},[n("Input",{attrs:{placeholder:"请输分类名"},model:{value:t.formItem.name,callback:function(e){t.$set(t.formItem,"name",e)},expression:"formItem.name"}})],1)],1)],1)],1)},o=[],r=(n("7f7f"),n("1540")),i=n("c276"),u={name:"email",data:function(){return{columns:[{title:"序号",slot:"id"},{title:"分类名",slot:"name"},{title:"操作",slot:"action"}],data:[],id:"",modal1:!1,title:"",formItem:{name:""}}},methods:{getListCategorys:function(){var t=this;Object(r["c"])(Object(i["k"])("token")).then(function(e){t.data=e.data})},update:function(t){var e=this;this.title="修改",this.id=t,Object(r["e"])(t,Object(i["k"])("token")).then(function(t){e.formItem.name=t.data.name,e.modal1=!0})},add:function(){this.modal1=!0,this.title="新增"},ok:function(){var t=this;if(this.id){var e=new FormData;e.append("name",this.formItem.name),Object(r["f"])(this.id,e,Object(i["k"])("token")).then(function(e){200==e.status?(t.$Message.info("修改成功"),t.getListCategorys()):t.$Message.info("修改失败")})}else{var n=new FormData;n.append("name",this.formItem.name),n.append("author",this.$store.state.user.userId),Object(r["a"])(n,Object(i["k"])("token")).then(function(e){201==e.status?(t.$Message.info("创建成功"),t.getListCategorys()):t.$Message.info("修改失败")})}},cancel:function(){this.id="",this.$Message.info("取消")}},created:function(){this.getListCategorys()}},s=u,d=n("2877"),c=Object(d["a"])(s,a,o,!1,null,"2ee1cf20",null);e["default"]=c.exports}}]);