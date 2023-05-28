<template>
    <div class="modal" :class="{success:theme === 'success'}">
        <h2>{{ header }}</h2>
        <p>{{ content }}</p>        
    </div>
</template>

<script>
    export default {
        name:'Home',
        data(){
            return{
                title: 'why not me'
            }
        },
        props:['header','content','theme']
    }
</script>

<style scoped>
    .success{
        background-color: green;
    }
</style>