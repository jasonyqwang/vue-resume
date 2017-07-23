webpackJsonp([1],{34:function(n,e,t){function r(n){t(78)}var o=t(7)(t(36),t(89),r,"data-v-1af97729",null);n.exports=o.exports},36:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(21),o=t.n(r),i=t(43),s=t.n(i),a=t(42),u=t.n(a),c=t(88),l=t.n(c),d=t(87),m=t.n(d),f=t(85),p=t.n(f),h=t(86),v=t.n(h),g=t(77);t.n(g);e.default={name:"app",components:{StyleEditor:l.a,ResumeEditor:m.a,EditorStyleContent:p.a,ResumeContent:v.a},data:function(){return{interval:20,currentStyle:"",enableHtml:!1,currentResumeMarkdown:"",resumeContent:""}},created:function(){this.makeResume()},methods:{makeResume:function(){function n(){return e.apply(this,arguments)}var e=u()(s.a.mark(function n(){var e,t,r;return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e=p.a.data().first,t=p.a.data().second,r=p.a.data().third,n.next=5,this.progressivelyShowStyle(e);case 5:return n.next=7,this.progressivelyShowResume();case 7:return n.next=9,this.progressivelyShowStyle(t);case 9:return n.next=11,this.showHtml();case 11:return n.next=13,this.progressivelyShowStyle(r);case 13:case"end":return n.stop()}},n,this)}));return n}(),showHtml:function(){var n=this;return new o.a(function(e,t){n.enableHtml=!0,e()})},progressivelyShowStyle:function(n){var e=this;return new o.a(function(t,r){var o=e.interval,i=0,a=u()(s.a.mark(function e(){var r,u,c=this;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return");case 2:r=n.length,i<=r?(u=n.substring(i,i+1)||" ",i++,this.currentStyle+=u,"\n"===n.substring(i-1,i)&&this.$refs.styleEditor&&this.$nextTick(function(){c.$refs.styleEditor.scrollTop()}),setTimeout(a,o)):t();case 4:case"end":return e.stop()}},e,this)})).bind(e);a()})},progressivelyShowResume:function(){var n=this,e=v.a.data().content;return new o.a(function(t,r){var o=e.length,i=n.interval;!function r(){if(n.currentResumeMarkdown.length<o){n.currentResumeMarkdown=e.substring(0,n.currentResumeMarkdown.length+1);var s=n.currentResumeMarkdown[n.currentResumeMarkdown.length-1];console.log("lastChar:",s),"\n"===s&&n.$refs.resumeEditor&&n.$nextTick(function(){return n.$refs.resumeEditor.scrollTop()}),setTimeout(r,i)}else t()}()})}}}},37:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"EditorStyleContent",template:"",data:function(){return{first:"\n/*\n* Hi 我是Jason，是苏州的一家互联网公司的Web工程师\n* 下面，我来来写一份个人简历！\n*/\n\n/* 首先给所有元素加上过渡效果,让所有的变化都以动画的效果来显示 */\n{\n  -webkit-transition: all .3s;\n  transition: all .3s;\n}\n/**\n* 看起来似乎没什么变化，不要着急\n* 先来改变下背景\n*/\nhtml {\n  color: rgb(222,222,222);\n  background: rgb(60, 80, 90);\n}\n/* 文字离边框太近了 */\n.styleEditor {\n  background: rgb(48, 48, 48);\n  padding: 1em;\n  border: 1px solid;\n  margin: .5em;\n  overflow: auto;\n  width: 45vw;\n  height: 95vh;\n}\n/* 代码高亮 */\n.token.comment {color: #857F6B;font-style: italic;}\n.token.selector{ color: rgb(133,153,0); }\n.token.property{ color: rgb(187,137,0); }\n.token.punctuation{ color: yellow; }\n.token.function{ color: rgb(42,161,152); }\n\n/* 加点 3D 效果 */\nhtml{\n  -webkit-perspective: 1000px;\n  perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; left: 0; top: 0;\n  -webkit-transition: none;\n  transition: none;\n  -webkit-transform: rotateY(10deg) translateZ(-100px) ;\n  transform: rotateY(10deg) translateZ(-100px) ;\n}\n/* 接下来我给自己准备一个编辑器 */\n.resumeEditor{\n  position: fixed; right: 0; top: 0;\n  padding: .5em;  margin: .5em;\n  width: 50vw; height: 95vh;\n  border: 1px solid;\n  background: white; color: #222;\n  overflow: auto;\n}\n/* 下面开始写简历正文 */\n        ",second:"\n/* 这个简历好像差点什么\n * 对了，这是 Markdown 格式的，需要变成对 HR 更友好的格式\n */\n        ",third:'\n/* 再对 HTML 加点样式 */\n.resumeEditor{\n  padding: 1em 1em 3em 1em;\n}\n.resumeEditor h1{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n  font-size: 1.5em;\n}\n.resumeEditor h2{\n  font-size: 1.2em;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: \'•\';\n  margin-right: .5em;\n}\n\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;\n  content: counters(section, ".") " ";\n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: #ddd;\n}\n        '}}}},38:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{content:"\n# 自我介绍\n\n> 我叫Jason，是一名Web开发工程师\n\n> 参与过多个项目开发，有比较丰富的项目经验（包括手机WEB、后台管理、API接口、服务器运维）\n\n> 作为核心的程序员，在项目中进行 需求分析、数据库设计、接口设计、后台管理升级、业务代码开发 等工作\n\n> 涉及技术点比较丰富，使用缓存、RPC服务、消息队列服务等技术，不仅提高了程序的性能而且使得复杂的业务间解耦\n\n> 喜欢新技术的尝试和挑战，并且有较强的专业技术，能够与同事和谐相处\n\n---\n\n# 联系方式\n\n- 手机：151504206**\n- Email：jasonwang1211@gmail.com\n- QQ/微信号：10456434**\n\n---\n\n#个人信息\n\n - 男/1989\n - 本科/数学与应用数学专业\n - 工作年限：2012-09 开启工作之旅\n - 技术博客：http://***\n - Github：http://github.com/***\n\n - 期望职位：高级WEB开发工程师、高级PHP开发工程师、前端开发工程师\n - 期望薪资：面谈\n - 期望城市：苏州 > 上海、杭州\n\n---\n\n# 工作经历\n## XXX公司 （ 2014年2月 ~ 今 ）\n\n> 暂时保密...\n\n## XXX公司（ 2012年9月 ~ 2014年2月 ）\n\n> 暂时保密...\n\n---\n\n# 技能清单\n\n以下均为我熟练使用的技能\n\n- Web开发：PHP/Javascript/Node\n- Web框架：Yii/Laravel/ThinkPHP5\n- 前端框架：Bootstrap/HTML5/Vue\n- 前端工具：Webpack/SaSS\n- 数据库相关：MySQL/Redis/MongoDB/Memcache\n- 版本管理、文档和自动化部署工具：Svn/Git/Composer/Docker/Jenkins\n- 云平台：Aliyun/AWS\n\n---\n\n# 致谢\n感谢您花时间阅读我的简历，期待能有机会和您共事。\n\n        "}}}},39:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(81),o=t.n(r);e.default={props:["currentResumeContent","enableHtml"],name:"ResumeEditor",computed:{result:function(){return this.enableHtml?o()(this.currentResumeContent):this.currentResumeContent}},methods:{scrollTop:function(){var n=this.$refs.container.scrollHeight;this.$refs.container.scrollTop=n+100}}}},40:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(82),o=t.n(r);e.default={name:"Editor",props:["codeContent"],computed:{highlightedCode:function(){return o.a.highlight(this.codeContent,o.a.languages.css)},codeInStyleTag:function(){return"<style>"+this.codeContent+"</style>"}},methods:{scrollTop:function(){var n=this.$refs.container.scrollHeight;this.$refs.container.scrollTop=n+10}}}},41:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(35),o=t(34),i=t.n(o);new r.a({el:"#app",render:function(n){return n(i.a)}})},77:function(n,e){},78:function(n,e){},79:function(n,e){},80:function(n,e){},85:function(n,e,t){var r=t(7)(t(37),t(92),null,null,null);n.exports=r.exports},86:function(n,e,t){var r=t(7)(t(38),t(90),null,null,null);n.exports=r.exports},87:function(n,e,t){function r(n){t(79)}var o=t(7)(t(39),t(91),r,"data-v-75f33a9b",null);n.exports=o.exports},88:function(n,e,t){function r(n){t(80)}var o=t(7)(t(40),t(93),r,"data-v-7a98e826",null);n.exports=o.exports},89:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("EditorStyleContent"),n._v(" "),t("StyleEditor",{ref:"styleEditor",attrs:{codeContent:n.currentStyle}}),n._v(" "),t("ResumeEditor",{ref:"resumeEditor",attrs:{currentResumeContent:n.currentResumeMarkdown,enableHtml:n.enableHtml}})],1)},staticRenderFns:[]}},90:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement;return(n._self._c||e)("div")},staticRenderFns:[]}},91:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{ref:"container",staticClass:"resumeEditor",class:{htmlModel:n.enableHtml}},[n.enableHtml?t("div",{domProps:{innerHTML:n._s(n.result)}}):t("pre",[n._v(n._s(n.result))])])},staticRenderFns:[]}},92:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement;return(n._self._c||e)("div")},staticRenderFns:[]}},93:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{ref:"container",staticClass:"styleEditor"},[t("div",{staticClass:"code",domProps:{innerHTML:n._s(n.codeInStyleTag)}}),n._v(" "),t("pre",{domProps:{innerHTML:n._s(n.highlightedCode)}})])},staticRenderFns:[]}}},[41]);
//# sourceMappingURL=app.dcf5df8c3c62fdd382c2.js.map