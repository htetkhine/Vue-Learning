<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link :to="{name:'about', params: { receivedData: 'helo' }}">About</router-link> |
    <router-link :to="{name :'createProject'}">Create</router-link>    
  </nav>
  <router-view/>
</template>
<script setup>
import { ref } from "vue";
import { defineProps } from "vue";

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
  background-color:#2c3e50;
  a {
    font-weight: bold;
    color: #fff;
    text-decoration: none;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
  .van-search{
    display: inline-block;
    background: transparent;
  }
}
</style>
