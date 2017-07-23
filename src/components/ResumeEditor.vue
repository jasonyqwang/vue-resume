<template>
  <div class="resumeEditor" :class="{htmlModel: enableHtml}" ref="container">
    <div v-if="enableHtml" v-html="result"></div>
    <pre v-else>{{result}}</pre>
  </div>
</template>
<script>
  import marked from 'marked'
  export default {
    props: ['currentResumeContent', 'enableHtml'],
    name: 'ResumeEditor',
    computed: {
      result: function () {
        return this.enableHtml ? marked(this.currentResumeContent) : this.currentResumeContent
      }
    },
    methods: {
      scrollTop() {
        let scrollHeight = this.$refs.container.scrollHeight;
        this.$refs.container.scrollTop = scrollHeight+100;
      }
    }
  }

</script>

<style scoped>
  .htmlMode {
    animation: flip 2s;
  }
  @keyframes flip{
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
