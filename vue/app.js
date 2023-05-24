const app = Vue.createApp({    
    data() {
        return{
          Books:[
            {
              Title: 'Beginner to ninja Vuejs',
              Name: 'Htet Khine',
              Age:20,
              isFav: true
            },
            {
              Title: 'How to breath in water?',
              Name: 'Mr:Htet',
              Age:20,
              isFav: false
            },
            {
              Title: 'Say! loundly Hello World',
              Name: 'Htet Khine',
              Age:20,
              isFav: true
            },
          ],
          changeState : true                   
        }
      },
    methods: {
      handle(){
        this.Age++
      },
      favHandler(Book){
        Book.isFav = !Book.isFav
      }
    },
    computed:{
      filteredBook(){
        return this.Books.filter(Book=>{
          return Book.isFav;
        })
      }
    }
})

app.mount('#app');