(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-039535e2"],{"1b7c":function(t,e,a){},"2f15":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper UserDetailView"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.isUser,expression:"isUser"}],staticClass:"left"},[a("TitleHeader",{attrs:{title:"用户信息"}}),a("div",{staticClass:"header-box"},[a("img",{staticClass:"avatar",attrs:{src:t.avatar,alt:""}}),a("p",{staticClass:"username"},[t._v("雪之樱")]),a("p",{staticClass:"introduce"},[t._v("一位来自广东工业大学的学生")])]),t._m(0)],1),a("div",{directives:[{name:"show",rawName:"v-show",value:t.isUser,expression:"isUser"}],staticClass:"right"},[t._m(1),t._l(t.fitterActivityData,(function(t,e){return a("ActivityItem",{attrs:{title:"珂学交流",time:"2020年03月05日",address:"address"}})}))],2),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.isUser,expression:"!isUser"}],staticClass:"container"},[a("TitleHeader",{attrs:{title:"商家信息"}}),t._m(2),t._m(3),a("div",{staticClass:"activity-box"},[a("p",{staticClass:"title"},[t._v("发布的活动")]),t._l(t.fitterActivityData,(function(t,e){return a("ActivityItem",{attrs:{"show-btn":!0,title:"珂学交流",time:"2020年03月05日",address:"address"}})}))],2)],1)])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"box"},[a("div",{staticClass:"item"},[a("p",{staticClass:"name"},[t._v("微信账号")]),a("p",{staticClass:"value"},[t._v("SakuraSnow")])]),a("div",{staticClass:"item"},[a("p",{staticClass:"name"},[t._v("手机号")]),a("p",{staticClass:"value"},[t._v("13189457961")])]),a("div",{staticClass:"item"},[a("p",{staticClass:"name"},[t._v("上次登陆时间")]),a("p",{staticClass:"value"},[t._v("2020-12-12 23:22:12")])]),a("div",{staticClass:"item"},[a("p",{staticClass:"name"},[t._v("注册时间")]),a("p",{staticClass:"value"},[t._v("2020-12-12 23:22:12")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("p",{staticClass:"title"},[t._v("用户参加的活动")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bus-message-box"},[a("div",{staticClass:"left"},[a("img",{staticClass:"avatar",attrs:{src:"https://pic.fxxz.com/up/2017-7/2017729951503579.jpg!400_720",alt:""}})]),a("div",{staticClass:"right"},[a("div",{staticClass:"item"},[a("p",{staticClass:"p"},[a("span",{staticStyle:{"margin-right":"16px"}},[t._v("商家名称")]),t._v(" 对A")]),a("p",{staticClass:"p"},[a("span",{staticStyle:{"margin-right":"16px"}},[t._v("联系电话")]),t._v(" 1312456799")])]),a("div",{staticClass:"item"},[a("p",{staticClass:"p"},[t._v("粉丝数")]),a("p",{staticClass:"p",staticStyle:{"text-align":"center"}},[t._v("999")])]),a("div",{staticClass:"item"},[a("p",{staticClass:"p"},[a("span",{staticStyle:{"margin-right":"56px"}},[t._v("注册时间")]),t._v("2020-12-12 23:22:12")]),a("p",{staticClass:"p"},[a("span",{staticStyle:{"margin-right":"20px"}},[t._v("上次活跃时间")]),t._v("2020-12-12 23:22:12")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bus-introduce-box"},[a("p",{staticClass:"title"},[t._v("商家简介")]),a("p",{staticClass:"detail"},[t._v("专注于狼人杀社交的组织")])])}],c=a("d4ec"),n=a("bee2"),r=a("99de"),l=a("7e84"),o=a("262e"),v=a("9ab4"),u=a("60a3"),d=a("fd1e"),p=a("4d49"),b=function(t){function e(){var t;return Object(c["a"])(this,e),t=Object(r["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.id=0,t.fitterActivityData=[1,2,3],t.avatar="https://pbs.twimg.com/profile_images/908050966678614016/nBZYdIQi_400x400.jpg",t.isUser=!1,t}return Object(o["a"])(e,t),Object(n["a"])(e,[{key:"beforeCreate",value:function(){}},{key:"created",value:function(){}},{key:"beforeMount",value:function(){}},{key:"mounted",value:function(){this.id=this.$route.params.id,console.log(this.id)}}]),e}(u["d"]);b=Object(v["a"])([Object(u["a"])({components:{ActivityItem:p["a"],TitleHeader:d["a"]}})],b);var f=b,m=f,_=(a("49a0"),a("4023")),C=Object(_["a"])(m,s,i,!1,null,"38a31960",null);e["default"]=C.exports},4494:function(t,e,a){},"49a0":function(t,e,a){"use strict";var s=a("e2b5"),i=a.n(s);i.a},"4d49":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper ActivityItemView"},[a("img",{staticClass:"preview",attrs:{src:t.imgSrc,alt:""}}),a("div",{staticClass:"right-box"},[a("p",{staticClass:"title"},[t._v(t._s(t.title))]),a("p",{staticClass:"time"},[t._v(t._s(t.time))]),a("p",{staticClass:"address"},[t._v(t._s(t.address))])]),t.showBtn?a("button",{staticClass:"btn",on:{click:t.handleClick}},[t._v("查看")]):t._e()])},i=[],c=a("d4ec"),n=a("bee2"),r=a("99de"),l=a("7e84"),o=a("262e"),v=a("9ab4"),u=a("60a3"),d=function(t){function e(){return Object(c["a"])(this,e),Object(r["a"])(this,Object(l["a"])(e).apply(this,arguments))}return Object(o["a"])(e,t),Object(n["a"])(e,[{key:"handleClick",value:function(){this.$emit("clickButton","rua")}}]),e}(u["d"]);Object(v["a"])([Object(u["c"])({default:"https://p3.pstatp.com/large/2a4400018ea1b5a0d0d6"})],d.prototype,"imgSrc",void 0),Object(v["a"])([Object(u["c"])({default:"默认时间"})],d.prototype,"time",void 0),Object(v["a"])([Object(u["c"])({default:"默认地址"})],d.prototype,"address",void 0),Object(v["a"])([Object(u["c"])({default:"默认标题"})],d.prototype,"title",void 0),Object(v["a"])([Object(u["c"])()],d.prototype,"showBtn",void 0),d=Object(v["a"])([Object(u["a"])({components:{}})],d);var p=d,b=p,f=(a("6b66"),a("4023")),m=Object(f["a"])(b,s,i,!1,null,"375b7154",null);e["a"]=m.exports},"6b66":function(t,e,a){"use strict";var s=a("1b7c"),i=a.n(s);i.a},e2b5:function(t,e,a){},f960:function(t,e,a){"use strict";var s=a("4494"),i=a.n(s);i.a},fd1e:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper TitleHeader"},[a("div",{staticClass:"title-box"},[t._m(0),a("p",{staticClass:"title"},[t._v(t._s(t.title))])]),a("div",{staticClass:"right-slot-box",staticStyle:{"padding-right":"20px"}},[t.useSlot?t._t("default"):t._e()],2)])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("i",{staticClass:"icon-outer"},[a("i",{staticClass:"icon-inner"})])}],c=a("d4ec"),n=a("bee2"),r=a("99de"),l=a("7e84"),o=a("262e"),v=a("9ab4"),u=a("60a3"),d=function(t){function e(){return Object(c["a"])(this,e),Object(r["a"])(this,Object(l["a"])(e).apply(this,arguments))}return Object(o["a"])(e,t),Object(n["a"])(e,[{key:"beforeCreate",value:function(){}},{key:"created",value:function(){}},{key:"beforeMount",value:function(){}},{key:"mounted",value:function(){}},{key:"beforeUpdate",value:function(){}},{key:"updated",value:function(){}},{key:"beforeDestroy",value:function(){}},{key:"destroyed",value:function(){}},{key:"activated",value:function(){}},{key:"deactivated",value:function(){}}]),e}(u["d"]);Object(v["a"])([Object(u["c"])()],d.prototype,"title",void 0),Object(v["a"])([Object(u["c"])({default:!0})],d.prototype,"useSlot",void 0),d=Object(v["a"])([Object(u["a"])({components:{}})],d);var p=d,b=p,f=(a("f960"),a("4023")),m=Object(f["a"])(b,s,i,!1,null,"2eecaf62",null);e["a"]=m.exports}}]);
//# sourceMappingURL=chunk-039535e2.54595477.js.map