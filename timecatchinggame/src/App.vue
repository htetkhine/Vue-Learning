<template>   
  <h1>Time Catching Game</h1>
  <button @click="clickWorking" :disabled="isPlaying" class="my-3">Click Me</button>
  <div v-if="isPlaying">
    <Home :timeRanges="timeRanges"></Home>
  </div>  
</template>

<script>
import Home from './components/Home.vue'
export default {
  name: 'App',
  components: {  
    Home
  },
  data() {
    return {
      isPlaying: false,
      timeRanges: null
    }
  },
  methods: {
    clickWorking(){
        this.isPlaying = true;
        this.timeRanges = 2000+Math.random()*5000;
    }
  },  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
