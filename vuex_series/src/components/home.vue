<template>
    <div v-for="data in myTodosData" :key="data.id">
        <p>{{ data.id }}</p>
        <p>{{ data.title }}</p>
    </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import store from '../store';
// const myTodosData = computed(()=>store.getters.myTodos)
const {myTodos,products} = store.getters;
const myTodosData = computed(()=>myTodos);
const productsData = computed(()=>products);
 
  onMounted(()=>{
    
    console.log(myTodosData,productsData);
  
  })
</script>

<style lang="scss" scoped>

</style>