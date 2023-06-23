<template>
    <div> 
          <div v-for="project in projects" :key="project.id">
              <li @click="deleteItem(project.id)">{{ project.title }}</li>
          </div>        
          <van-button type="primary">
            <slot name="content"></slot>  
          </van-button>         
    </div>
</template>

<script setup>
    import { Button } from "vant";        
    const props = defineProps(['projects']);

    const emits = defineEmits(['delete']);

    function deleteItem(id){
        emits('delete' , id);
    }
</script>

<style lang="scss" scoped>

</style>