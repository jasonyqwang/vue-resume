<template>
  <div class="styleEditor" ref="container">
      <div class="code" v-html="codeInStyleTag"></div>
      <pre class="" v-html="highlightedCode"></pre>
  </div>
</template>
<script>
  import Prism from 'prismjs';

  export default {
    name: "Editor",
    props: ['codeContent'],
    computed: {
      highlightedCode: function(){
        return Prism.highlight(this.codeContent, Prism.languages.css)
      },
      codeInStyleTag: function () {
        return `<style>${this.codeContent}</style>`
      }
    },
    methods: {
      scrollTop() {
        let scrollHeight = this.$refs.container.scrollHeight;
        this.$refs.container.scrollTop = scrollHeight+10;
      }
    }
  }
</script>
<style scoped>

</style>
