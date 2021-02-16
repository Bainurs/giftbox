<template>
    <div class="container">

        <div class="center">
            <vs-table>
                <template #header>
                    <vs-input v-model="search" border placeholder="Search" />
                </template>
                <template #thead>
                    <vs-tr>
                        <vs-th>
                            Наименование
                        </vs-th>
                        <vs-th>
                            Параметры
                        </vs-th>
                    </vs-tr>
                </template>
                <template #tbody>
                    <vs-tr
                        :key="i"
                        v-for="(tr, i) in $vs.getPage(roles, page, max)"
                        :data="tr"
                    >
                        <vs-td>
                            {{ tr.name }}
                        </vs-td>
                        <vs-td>
                            <button class="btn btn-danger" @click.self.prevent="deleteType(tr.id)">Удалить</button>
                            <router-link :to="{name: 'rolesEdit', params: {id: tr.id}}"><span class="badge badge-green">Изменить</span></router-link>
                            <router-link :to="{name: 'rolesShow', params: {id: tr.id}}"><span class="btn btn-primary">Вид</span></router-link>
                        </vs-td>
                    </vs-tr>
                </template>
                <template #footer>
                    <vs-select placeholder="Select" v-model="max">
                        <vs-option label="10" value="10">
                            10
                        </vs-option>
                        <vs-option label="25" value="25">
                            25
                        </vs-option>
                        <vs-option label="50" value="50">
                            50
                        </vs-option>
                    </vs-select>
                    <vs-pagination v-model="page" :length="$vs.getLength(roles, max)" />
                </template>
            </vs-table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Index",
        data() {
            return {
                page: 1,
                max: 10,
                search: '',
                roles: [
                    {
                        'id': 1,
                        'name': 'Администратор',
                    },
                    {
                        'id': 2,
                        'name': 'Пользователь',
                    },
                    {
                        'id': 3,
                        'name': 'Модератор',
                    },
                ]
            }
        },
        methods: {
            deleteType(id) {

            }
        }

    }
</script>

<style scoped>

</style>
