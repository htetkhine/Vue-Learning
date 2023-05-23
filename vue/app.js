const app = Vue.createApp({    
    data() {
        return {
          Title: 'this is vue here',
          Name: 'Htet Khine',
          Age:20,
          changeState: true
        }
      },
    methods: {
      handle(){
        this.Age++
      }
    },
})

app.mount('#app');