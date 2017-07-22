<template>
</template>

<script>
  export default {
    name: 'EditorStyleContent',
    template: ``,
    data: function () {
      return {
        first: `
/*
* Hi 我是Jason，是苏州的一家互联网公司的Web工程师
* 下面，我来来写一份个人简历！
*/

/* 首先给所有元素加上过渡效果,让所有的变化都以动画的效果来显示 */
{
  -webkit-transition: all .3s;
  transition: all .3s;
}
/**
* 看起来似乎没什么变化，不要着急
* 先来改变下背景
*/
html {
  color: rgb(222,222,222);
  background: rgb(60, 80, 90);
}
/* 文字离边框太近了 */
.styleEditor {
  background: rgb(48, 48, 48);
  padding: 1em;
  border: 1px solid;
  margin: .5em;
  overflow: auto;
  width: 45vw;
  height: 90vh;
}
/* 代码高亮 */
.token.comment {color: #857F6B;font-style: italic;}
.token.selector{ color: rgb(133,153,0); }
.token.property{ color: rgb(187,137,0); }
.token.punctuation{ color: yellow; }
.token.function{ color: rgb(42,161,152); }

/* 加点 3D 效果 */
html{
  -webkit-perspective: 1000px;
  perspective: 1000px;
}
.styleEditor {
  position: fixed; left: 0; top: 0;
  -webkit-transition: none;
  transition: none;
  -webkit-transform: rotateY(10deg) translateZ(-100px) ;
  transform: rotateY(10deg) translateZ(-100px) ;
}
/* 接下来我给自己准备一个编辑器 */
.resumeEditor{
  position: fixed; right: 0; top: 0;
  padding: .5em;  margin: .5em;
  width: 48vw; height: 90vh;
  border: 1px solid;
  background: white; color: #222;
  overflow: auto;
}
/* 下面开始写简历正文 */
        `,
        second: `
/* 这个简历好像差点什么
 * 对了，这是 Markdown 格式的，需要变成对 HR 更友好的格式
 */
        `,
        third: `
/* 再对 HTML 加点样式 */
.resumeEditor{
  padding: 2em;
}
.resumeEditor h1{
  display: inline-block;
  border-bottom: 1px solid;
  margin: 1em 0 .5em;
  font-size: 1.5em;
}
.resumeEditor h2{
  font-size: 1.2em;
}
.resumeEditor ul,.resumeEditor ol{
  list-style: none;
}
.resumeEditor ul> li::before{
  content: '•';
  margin-right: .5em;
}

.resumeEditor ol {
  counter-reset: section;
}
.resumeEditor ol li::before {
  counter-increment: section;
  content: counters(section, ".") " ";
  margin-right: .5em;
}
.resumeEditor blockquote {
  margin: 1em;
  padding: .5em;
  background: #ddd;
}
        `
      }
    }
  }
</script>
