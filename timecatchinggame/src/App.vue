<template>   
  <h1>Time Catching Game</h1>
  <button @click="clickWorking" :disabled="isPlaying" @openButton="endGame" class="my-3">Click Me</button>      
  <div v-if="isPlaying">    
    <Home :timeRanges="timeRanges" @openButton="endGame"></Home>
  </div>
  <div v-if="end">
    <Result :result="score"></Result>
  </div>    
  
</template>

<script>
import Home from './components/Home.vue'
import Result from './components/Result.vue'
export default {
  name: 'App',
  components: {  
    Home,
    Result
  },
  data() {
    return {
      isPlaying: false,
      timeRanges: null,
      score:0,  
      end:false    
    }
  },
  methods: {
    clickWorking(){
        this.isPlaying = true;
        this.timeRanges = 2000+Math.random()*5000;
        this.end = false;
    },
    endGame(score){
      this.score = score;
      this.isPlaying = false;
      this.end = true;
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
