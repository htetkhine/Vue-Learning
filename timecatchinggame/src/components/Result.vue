<template>    
        <div v-if="result <= 250">
            <h3>Your Score is too fast (Tat Htout)</h3>
        </div>
        <div v-else-if="result <= 600">
            <h3>Your Score is nice!!</h3>
        </div>
        <div v-else>
            <h3>Your very Slow man!!</h3>
        </div>            
</template>

<script>
    export default {
        name:'Result',
        props:['result'],       
    }
</script>

<style scoped>

</style>