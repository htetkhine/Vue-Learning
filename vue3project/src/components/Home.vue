<template>
    <div class="backdrop" @click.self="closeModal">
        <div class="modal" :class="{success:theme === 'success',delete:theme==='delete'}">
        <slot name="links" />
        </div>
    </div>
    
</template>

<script>
    export default {        
        props:['theme'],
        methods:{
            closeModal(){
                this.$emit('close');
            }
        }
    }
</script>

<style scoped>
    .backdrop{
        position: fixed;
        top: 0;
        background: rgba(0, 0, 0,.5);
        width: 100%;
        height: 100%;
    }
    .modal{
        width: 400px;
        padding: 20px;
        margin: 100px auto;
        background-color: white;
        border-radius: 10px;  
        display: block; 
        position: absolute; 
        right: 0;
        left: 0;
        height: 130px;
    }
    .success{
        background-color: green;
        color:white;
    }
    .delete{
        background-color: crimson;
        color: white;
    }
</style>