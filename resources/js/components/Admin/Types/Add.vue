<template>
    <div class="container mt-5 pt-3">
        <div class="row">
            <div class="col-12 px-0">
                <vs-alert solid :color="colorHeader" >
                    <p class="text-center mb-0">
                        <span class="h2">Тип Подарка</span>
                    </p>
                </vs-alert>
            </div>
            <div class="col-3 px-0" style="background: #e6e8e9;">
                <vs-alert :color="colorLabel">
                    <p class="text-center mb-0">
                        <span>Имя</span>
                    </p>
                </vs-alert>
            </div>
            <div class="col-9 pl-0" style="background: #e6e8e9;">
                <input type="text" class="input-type-name">
            </div>
            <div class="col-12">
                <button class="btn btn-success" @click="createType">Создать тип</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Add",
        data() {
            return {
                colorHeader: '#454748',
                colorLabel: '#454748',
                type: {}
            }
        },
        methods: {
            createType() {
                axios.post('http://giftbox/api/type/add', this.type)
                    .then(response => {
                        this.$router.push({ name: 'typesDashboard'});
                    })
                    .catch(error => console.log(error))
                    .finally(() => this.loading = true)
            }
        }
    }
</script>

<style scoped>
    .input-type-name {
        padding: 18px 1rem;
        width: 100%;
        border: 1px solid #e6e8e9;
        background: #e6e8e9;
        border-radius: 12px;
    }
</style>
