<template>
    <div>
        <h1>Product</h1>
        <table>
            <thead>
                <tr>
                    <th>
                        id
                    </th>
                    <th>
                        title
                    </th>
                    <th>
                        description
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in products" :key="product.id">
                    <td>
                        {{ product.id }}
                    </td>
                    <td>
                        {{ product.title }}
                    </td>
                    <td>
                        {{ product.description }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {        
        name: 'Testing',
        created() {
            this.testingData()
        },
        data() {
            return {
                name: 'Htet Khine',
                age: '20',
                products: null
            }
        },
        methods: {
            async testingData(){
               let data = await fetch('https://fakestoreapi.com/products/'); 
               this.products = await data.json();     
               console.log(this.products);           
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>