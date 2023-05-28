<template>
  <div>
    <h1>hello</h1>
    <Home :header="header" :content="content" :theme="theme"></Home>
    <Testing></Testing>    
  </div>  
   
</template>

<script>
import Testing from './components/Testing.vue';
import Home from './components/Home.vue';

export default {
  name: 'App',
  data() {
    return {
      header:'This is header',
      content: 'Welcome to my vue project',
      theme: 'success'
    }
  },
  components: {
    Testing,
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
