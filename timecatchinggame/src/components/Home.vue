<template>
    <div>        
        <div v-if="isPlaying">
            <div class="box">
                {{ timeRanges }}       
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    name: 'Home',
    props:['timeRanges'],
    data() {
        return {
            isPlaying: false
        }
    },
    mounted() {
        setTimeout(() => {
            this.isPlaying = true;
        }, this.timeRanges);        
    },
    created(){
        console.log('it is created');
    },
    beforeCreate(){
        console.log('it is beforecreated');
    },
    updated(){
        console.log('it is updated');
    },
    beforeUpdate(){
        console.log('it is beforeupdate');
    }
}
</script>
<style scoped>
    .box{
        width: 300px;
        height: 300px;
        background-color: yellow;
        display: block;
        margin: 0 auto;
    }
</style>