<template>
    <div>
        <van-form @submit.prevent="submit" ref="form">
            <van-cell-group inset>                
                <van-field 
                    v-model="title" 
                    type="text" 
                    placeholder="Position" 
                    label="Title" 
                    :rules="[{ required: true, message: 'Title is required' }]"
                />                                
                <van-field 
                    v-model="description"                   
                    rows="2"
                    autosize
                    label="Message"
                    type="textarea"
                    maxlength="50"
                    placeholder="Message"
                    show-word-limit
                    :rules="[{ required: true, message: 'Description is required' }]"
                />            
            </van-cell-group>
            <div style="margin: 16px;">
                <van-button round block type="primary">
                    Submit
                </van-button>
            </div>
        </van-form>
        {{ searchResult }}
        
    </div>    
  

</template>

<script setup>    
    import { showLoadingToast,closeToast } from 'vant';  
    import { Form, Field, CellGroup } from 'vant';

    import axios from 'axios';
    import { ref , defineProps, onMounted } from 'vue';     
    
    let title=ref('');
    let description=ref('');
    let searchResult = props.searchResult;    
    let props = defineProps(['searchResult']);
    let api = ref("http://localhost:3000/projects/");  
       
    onMounted(() => {
        console.log(searchResult);
    }),
    
    function submit(){
        console.log('gg');
        loading();
        axios.post(api,{
            title: title.value,
            description: description.value,
            complete: false
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
    form{
        width: 500px;
        max-width: 300px;
        display: block;
        margin: 0 auto;
        
    }
</style>