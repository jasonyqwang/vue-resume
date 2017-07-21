<template>
  <div id="app">
    {{  message }}
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  components: {

  },
  data() {
    return {
        message: "this is a message"
    }
  },
  created(){
    var n =0 ;
    setInterval(()=>{
        this.message = n;
        n += 1;
    }, 1000)
  },
  computed: {

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
