<template>
    <div class="py-4"> 
        <h3 class="mb-3">Create Your Project Here!</h3>       
        <button :class="{'close': openModal}" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <p class="m-0" v-if="openModal">Close</p>
            <p class="m-0" v-else>Create</p>
        </button>                   
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Create Project</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <van-form @submit="submit">
                            <van-cell-group inset>                
                                <van-field 
                                    v-model="title" 
                                    type="text" 
                                    placeholder="Position" 
                                    label="Title" 
                                    :rules="[{ required: true, message: 'Title is required' }]"
                                /> 
                                {{ title }}                               
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
                                {{ description }}            
                            </van-cell-group>
                            <div style="margin: 16px;">
                                <van-button round block type="primary" native-type="submit">
                                    Submit
                                </van-button>
                            </div>
                        </van-form>
                    </div>               
                    </div>
                </div>
            </div>                              
        
    </div>    
  

</template>

<script setup>        
    import { Form, Field, CellGroup } from 'vant';      
    // import postData from '../composations/postData';

    import { showLoadingToast,closeToast } from 'vant';      

    import axios from 'axios';
    import { ref , onMounted } from 'vue';             
    import { useRouter } from 'vue-router';
    
    let api = ref("http://localhost:3000/projects/");  
    
    let title = ref('');
    let description = ref('');
    
    const router = useRouter();
    
    let submit = ()=>{                      
        axios.post(api.value,{
            title: title.value,
            description: description.value,
            complete: false
        })
        .then(()=>{                        
            router.push('/')
            const backdropElement = document.querySelector('.modal-backdrop');
            if (backdropElement) {
                backdropElement.classList.remove('modal-backdrop');
            }
        }) 
        .catch((err)=>{
            console.log(err);
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
    button{
        background-color: aquamarine;  
        border:unset;
        border-radius: 30px; 
        padding:5px 20px; 
        font-weight: 600;    
        cursor: pointer;
    }
    button.close{
        background-color: red;
        border:unset;
        border-radius: 30px; 
        padding:5px 20px;
        font-weight: 600;    
        cursor: pointer;     
    }
</style>