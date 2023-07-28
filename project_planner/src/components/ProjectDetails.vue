<template>
    <div class="list-view">           
        <li :class="{success:project.complete===true, ongoing:project.complete===false}">{{ project.title }} 
            <div class="icon">                
                <svg @click="deleteItem(project.id)" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"/></svg>                
                <svg @click="editItem(project.id)" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"/></svg>                
                <svg @click="completeItem(project.id)" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>                
            </div>
        </li>
    </div>
</template>

<script setup>        
    import { showLoadingToast,closeToast } from 'vant';      
     
    import { ref } from "vue";
    import axios from "axios";

    const props = defineProps(['project','searchResult']);
    const emits = defineEmits(['delete','updateState']);

    let api = ref("http://localhost:3000/projects/");     

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
    function completeItem(projectID){        
        loading();
        let updateRoute = api.value + projectID               
        axios.patch(updateRoute,
        {            
            complete: ! props.project.complete          
        }) 
        .then((response)=>{
            emits('updateState', projectID)
        })                          
    }
    
    function editItem(projectID){
        let editRoute = api.value + projectID 
        axios.patch(editRoute)
        .then((response)=>{
            emits('editState',projectID)
        })
    }

    //loading function
    function loading(){
        const toast = showLoadingToast({
        duration: 0,
        forbidClick: true,
        loadingType: 'spinner',
        message: '3 seconds',
        });

        let second = 3;
        const timer = setInterval(() => {
        second--;
        if (second) {
            toast.message = `${second} seconds`;
        } else {
            clearInterval(timer);
            closeToast();
        }
        }, 1000);
    }
</script>

<style lang="scss" scoped>
    .list-view{                            
            li{ 
                display: flex;          
                justify-content: space-between;
                align-items: center;     
                padding: 0 10px;
                margin: 10px auto;
                background: chocolate;
                width: 500px;
                height: 100px;                
                &.success{
                    border-left: 5px solid green;                
                }
                &.ongoing{
                    border-left: 5px solid red;
                }                
                .icon{
                    svg{
                        cursor: pointer;
                        padding: 0 4px;
                    }                    
                }
            }        
    }
</style>