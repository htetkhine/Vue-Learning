<template>
    <div>        
        <div v-if="isPlaying">
            <div class="box" @click="startGame">
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
            isPlaying: false,
            score:0
        }
    },
    mounted() {
        setTimeout(() => {
            this.isPlaying = true;
            this.startGame();
        }, this.timeRanges);        
    },
    methods: {
        startGame(){
            setInterval(()=>{   
                this.score+=50;                             
            },50)
        }
    },
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