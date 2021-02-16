<template>
    <div class="container mt-5 pt-3">
        <div class="row">
            <div class="col-12 px-0">
                <vs-alert solid :color="colorHeader" >
                    <p class="text-center mb-0">
                        <span class="h2">Роль для юзера</span>
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
                <input type="text" class="input-type-name" v-model="role.name">
            </div>
            <div class="col-12">
                <button class="btn btn-success" @click="updateRole">Обновить</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Edit",
        data() {
            return {
                colorHeader: '#454748',
                colorLabel: '#454748',
                role: {id: 1, name: 'Администратор'}
            }
        },
        methods: {
            updateRole() {
                this.$router.push({ name: 'rolesDashboard'});
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
