<template>
    <div v-for="job in jobs" :key="job.id">
        <li>{{ job }}</li>
    </div>
</template>

<script>
    export default {
        name:'JobsView',
        data() {
            return {
                jobs:[]
            }
        },
        mounted() {
            fetch('https://fakestoreapi.com/products/')
            .then((response)=>{
                return response.json();
            })
            .then(data=>{
                this.jobs = data
            })
            .catch(error=>{
                console.log(error)
            })
        },

    }
</script>

<style lang="scss" scoped>

</style>