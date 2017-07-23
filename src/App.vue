<template>
  <div id="app">
    <EditorStyleContent></EditorStyleContent>
    <StyleEditor ref="styleEditor" :codeContent="currentStyle"></StyleEditor>
    <ResumeEditor ref="resumeEditor" :currentResumeContent="currentResumeMarkdown" :enableHtml="enableHtml"></ResumeEditor>
  </div>
</template>

<script>
  import StyleEditor from './components/StyleEditor'
  import ResumeEditor from './components/ResumeEditor'
  import EditorStyleContent from './components/EditorStyleContent';
  import ResumeContent from './components/ResumeContent';

  import './assets/reset.css'

  export default {
    name: 'app',
    components: {
      StyleEditor,
      ResumeEditor,
      EditorStyleContent,
      ResumeContent
    },
    data() {
      return {
        interval: 20,//显示一个字符的时间
        currentStyle: '',//当前样式
        enableHtml: false,//是否显示 简历内容
        currentResumeMarkdown: '',
        resumeContent: ''
      }
    },
    created() {
      this.makeResume()
    },

    methods: {
      makeResume: async function () {
        let fitstStyle = EditorStyleContent.data()['first'];
        let secondStyle = EditorStyleContent.data()['second'];
        let thirdStyle = EditorStyleContent.data()['third'];

        await this.progressivelyShowStyle(fitstStyle)
        //显示简历
        await this.progressivelyShowResume()

        await this.progressivelyShowStyle(secondStyle)
        await this.showHtml()

        await this.progressivelyShowStyle(thirdStyle)
      },
      showHtml: function () {
        return new Promise((resolve, reject) => {
          this.enableHtml = true
        resolve()
      })
      },
      /**
       * 显示样式
       * @param content
       * @returns {Promise}
       */
      progressivelyShowStyle(content) {
        return new Promise((resolve, reject) => {
            let interval = this.interval
          　let newLength = 0;
            let showStyle = (async function () {
              if (!content) { return }
              // 当前样式的长度
              let length = content.length;
              if (newLength <= length) {
                let char = content.substring(newLength, newLength + 1) || ' '

                newLength++;

                this.currentStyle += char

                //如果遇到换行的话，就自动把滑轮向下移动
                if (content.substring(newLength - 1, newLength) === '\n' && this.$refs.styleEditor) {
                  this.$nextTick(() => {
                    this.$refs.styleEditor.scrollTop()
                })
                }
                setTimeout(showStyle, interval)
              } else {
                resolve()
              }
            }).bind(this)
        showStyle()
      })
      },
      /**
       * 显示简历
       * @returns {Promise}
       */
      progressivelyShowResume() {
        let resumeContent = ResumeContent.data()['content'];
        return new Promise((resolve, reject) => {
            let length = resumeContent.length
            let interval = this.interval
            let showResume = () => {
              if (this.currentResumeMarkdown.length < length) {
                this.currentResumeMarkdown = resumeContent.substring(0, this.currentResumeMarkdown.length + 1)
                let lastChar = this.currentResumeMarkdown[this.currentResumeMarkdown.length-1]

                console.log('lastChar:', lastChar)
                if (lastChar === '\n' && this.$refs.resumeEditor) {
                  this.$nextTick(() => this.$refs.resumeEditor.scrollTop())
                }
                setTimeout(showResume, interval)
            } else {
              resolve()
            }
          }
          showResume()
      })
      }
    }
  }

</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    min-height: 100vh;
  }

  * {
    -webkit-transition: all .3s;
    transition: all .3s;
  }
</style>
