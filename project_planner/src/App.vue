<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link :to="{name:'about', params: { receivedData: 'helo' }}">About</router-link> |
    <router-link :to="{name :'createProject'}">Create</router-link>
    <van-search v-model="searchResult" placeholder="Placeholder" />    
  </nav>
  <router-view/>
</template>
<script setup>
import { ref } from "vue";
import { Search } from 'vant';
import { defineProps } from "vue";

let searchResult = ref("");
let props = defineProps(['searchResult']);
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  .van-search{
    display: inline-block;
  }
}
</style>
