<template>
  <header> 
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link :to="{name:'about', params: { receivedData: 'helo' }}">About</router-link> |
      <router-link :to="{name :'createProject'}">Create</router-link>    
    </nav>
  </header>
 
  <router-view/>

  <footer>
      <h6>Develop By Htet Khine</h6>
  </footer>
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

nav,
footer {
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
  h6{
    color: #fff;
  }
  .van-search{
    display: inline-block;
    background: transparent;
  }
}
footer{
  position:fixed;
  bottom:0;
  width:100%;
}
</style>
