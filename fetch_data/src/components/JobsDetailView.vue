<template>
    <div>
        {{ job }}
    </div>
</template>

<script>
    export default {
        props:['id'],
        data() {
            return {
                job:null
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

</style>