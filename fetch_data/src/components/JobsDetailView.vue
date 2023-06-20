<template>
    <div class="container" v-if="job">
        <div class="row gg">
            <div class="col-12">
                <img :src="job.image" :alt="job.title">
                <h1>{{ job.title }}</h1>
            </div>
        </div>       

    </div>
</template>

<script>
    export default {
        props:['id'],
        data() {
            return {
                job:null,               
            }
        },
        mounted() {
            fetch('https://fakestoreapi.com/products/'+this.id)
            .then((response)=>{
                return response.json();
            })
            .then(data=>{
                this.job = data                
            })
            .catch(error=>{
                console.log(error)
            })
        },
    }
</script>

<style lang="scss" scoped>
    .gg{
        img{
            width:200px;
            height: 200px;
        }
    }
</style>