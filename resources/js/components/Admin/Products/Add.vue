<template>
    <div class="container">
        <div class="row">
            <div class="col-6 content-inputs">
                <vs-input v-model="product.name" placeholder="Product name" class="w-100"></vs-input>
            </div>
            <div class="col-6 content-inputs">
                <textarea v-model="product.desc" cols="30" rows="10" placeholder="Product description"></textarea>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Add",
        data() {
            return {
                product: {},
            }
        },
        methods: {
            createProduct() {
                axios.post('http://giftbox/api/create-product')
            }
        }
    }
</script>

<style scoped>

</style>
