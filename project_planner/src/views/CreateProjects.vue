<template>
    <div>
        <van-form @submit="onSubmit">
            <van-cell-group inset>                
                <van-field type="text" placeholder="Position" label="Title" />                                
                <van-field                    
                    rows="2"
                    autosize
                    label="Message"
                    type="textarea"
                    maxlength="50"
                    placeholder="Message"
                    show-word-limit
                />            
            </van-cell-group>
            <div style="margin: 16px;">
                <van-button round block type="primary" native-type="submit">
                Submit
                </van-button>
            </div>
        </van-form>
    </div>    


</template>

<script setup>    
    import { ref } from 'vue'; 
    const emits = defineEmits(['create']);  
    function onSubmit(){
        emits('create',[{
            id:number,
            title:text,
            description:message
        }])
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