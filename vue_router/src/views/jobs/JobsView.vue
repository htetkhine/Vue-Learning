<template>
    <div v-for="job in jobs" :key="job.id">
        <router-link :to="{name:'jobsdetail', params:{id:job.id}}"><h1>{{ job.position }}</h1></router-link>
        <p>{{ job.location }}</p>        
    </div>
</template>

<script>
    export default {
        data() {
            return {
                jobs:[
                    {id:'1',position:"Web Developer",location:"Myanmar"},
                    {id:'2',position:"Web Engineer",location:"Singapore"},
                    {id:'3',position:"Software Engineer",location:"Thai"}
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>