<template>
   
    <div class="container" v-if="jobs">
        <div class="row">            
            <div class="col-md-4 col-sm-6 col-12" v-for="job in jobs" :key="job.id">                                                               
                <div class="card" style="width: 18rem;">
                    <img :src="job.image" :alt="job.title" class="img-fluid">
                    <div class="card-body">
                        <router-link :to="{name:'jobsdetail' , params:{id:job.id}}"><h5 class="card-title">{{ job.title }}</h5></router-link>
                        <p class="card-text">{{ job.description }}</p>
                        <a :href="/jobs/+job.id" class="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>                            
        </div>       

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