<template>
  <div>  
    
    <div v-if="opneLink">
      <Home :header="header" :content="content" :theme="theme" @close="opneLink=false"></Home>       
    </div>  
    <div class="text-center">
      <h1>Boom!! appear when you click me</h1>
      <button @click="opneLink = true">Click me</button>
    </div>
  </div>  
   
</template>

<script>
import Home from './components/Home.vue';

export default {
  name: 'App',
  data() {
    return {
      header:'This is header',
      content: 'Welcome to my vue project',
      theme: 'success',
      opneLink: false
    }
  },
  components: {    
    Home
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1{
  font-size: 30px;
  color: red;
}
</style>
