<template>
    <div class="container-fluid">
       <header-vue></header-vue>
    </div>
</template>

<script>
    import header from './Navigation/Header.vue';
    export default {
        name: "Admin",
        components: {
            'header-vue': header,
        },

    }
</script>

<style scoped>

</style>
