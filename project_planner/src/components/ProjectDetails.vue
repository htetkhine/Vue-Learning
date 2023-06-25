<template>
    <div class="list-view">           
        <li @click="deleteItem(project.id)">{{ project.title }}</li>                                
    </div>
</template>

<script setup>    
    import { Button } from "vant";        
    import { ref } from "vue";
    import axios from "axios";
    const props = defineProps(['project']);

    const emits = defineEmits(['delete']);
    let api = ref("http://localhost:3000/projects/")    
    function deleteItem(projectID){         
        let deleteRoute = api.value + projectID                            
        // fetch(deleteRoute, { methods:"DELETE" })
        // .then(()=>{            
        //   emits('delete',projectID);    
        // })
        // .catch(error=>{
        //     console.log(error);
        // })
        axios.delete(deleteRoute)
        .then(() => {  emits('delete',projectID);  })
        .catch(err => { console.error(err) })
    }
</script>

<style lang="scss" scoped>
    .list-view{       
            li{
                display: block;
                margin: 10px auto;
                background: chocolate;
                width: 500px;
                height: 100px;
                border-left: 5px solid green;
                cursor: pointer;
            }        
    }
</style>