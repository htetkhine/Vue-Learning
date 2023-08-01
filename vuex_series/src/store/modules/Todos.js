export default{
    state:{
        myTodos:[
            {
                id:1,title:'web developer'
            },
            {
                id:2,title:'web engineer'
            },
            {
                id:3,title:'cloud engineer'
            }
        ],
        products:[
            {
                id:1,title:'Books'
            },
            {
                id:2,title:'Pencil'
            },
            {
                id:3,title:'Pen'
            }
        ]
    },
    getters:{
        myTodos(state){
            return state.myTodos
        },
        products(state){
            return state.products
        }
    },
    mutations:{},
    actions:{}
}