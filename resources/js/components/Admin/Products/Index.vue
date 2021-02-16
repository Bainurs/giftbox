<template>
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
                        Тип
                    </vs-th>
                    <vs-th>
                        Цена
                    </vs-th>
                    <vs-th>
                        Колличество
                    </vs-th>
                    <vs-th>
                        Параметры
                    </vs-th>
                </vs-tr>
            </template>
            <template #tbody>
                <vs-tr
                    :key="i"
                    v-for="(tr, i) in $vs.getPage(products, page, max)"
                    :data="tr"
                >
                    <vs-td>
                        {{ tr.name }}
                    </vs-td>
                    <vs-td>
                        {{ tr.type.name }}
                    </vs-td>
                    <vs-td>
                        {{ tr.price }}
                    </vs-td>
                    <vs-td>
                        {{ tr.count }}
                    </vs-td>
                    <vs-td>
                        <button class="btn btn-danger" @click.self.prevent="deleteType(tr.id)">Удалить</button>
                        <router-link :to="{name: 'productsEdit', params: {id: tr.id}}"><span class="badge badge-green">Изменить</span></router-link>
                        <router-link :to="{name: 'productsShow', params: {id: tr.id}}"><span class="btn btn-primary">Вид</span></router-link>
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
                <vs-pagination v-model="page" :length="$vs.getLength(types, max)" />
            </template>
        </vs-table>
    </div>
</template>

<script>
    export default {
        name: "Index",
        data() {
            return{
                page: 1,
                max: 10,
                types: [
                    {
                        id: 1,
                        name: 'Подарок мужчинам',
                    },
                    {
                        id: 2,
                        name: 'Подарок девушкам',
                    },
                    {
                        id: 3,
                        name: 'Новогоднии подарок',
                    },
                    {
                        id: 4,
                        name: '14 февраля',
                    },
                    {
                        id: 5,
                        name: '23 февраля',
                    },
                    {
                        id: 6,
                        name: '8 марта',
                    },
                    {
                        id: 7,
                        name: 'день рождения',
                    },
                ],
                products: [
                    {id: 1, name: '', type: {id: 1, name: 'Подарок мужчинам'}, type_id: 1, price: 650, count: 15, desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, illo? dolor sit amet, consectetur adipisicing elit. Atque, illo? dolor sit amet, consectetur adipisicing elit. Atque, illo? dolor sit amet, consectetur adipisicing elit. Atque, illo?'},
                    {id: 2, name: '', type: {id: 2, name: 'Подарок девушкам'}, type_id: 2, price: 750, count: 19, desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, illo? dolor sit amet, consectetur adipisicing elit. Atque, illo? dolor sit amet, consectetur adipisicing elit. Atque, illo? dolor sit amet, consectetur adipisicing elit. Atque, illo?'},
                    {id: 3, name: '', type: {id: 3, name: 'Новогоднии подарок'}, type_id: 3, price: 650, count: 20, desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, illo? dolor sit amet, consectetur adipisicing elit. Atque, illo? dolor sit amet, consectetur adipisicing elit. Atque, illo? dolor sit amet, consectetur adipisicing elit. Atque, illo?'},
                    {id: 4, name: '', type: {id: 5, name: '23 февраля'}, type_id: 5, price: 650, count: 16, desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, illo? dolor sit amet, consectetur adipisicing elit. Atque, illo? dolor sit amet, consectetur adipisicing elit. Atque, illo? dolor sit amet, consectetur adipisicing elit. Atque, illo?'},
                    {id: 5, name: '', type: {id: 4, name: '14 февраля'}, type_id: 4, price: 650, count: 23, desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, illo? dolor sit amet, consectetur adipisicing elit. Atque, illo? dolor sit amet, consectetur adipisicing elit. Atque, illo? dolor sit amet, consectetur adipisicing elit. Atque, illo?'},
                    {id: 6, name: '', type: {id: 1, name: 'Подарок мужчинам'}, type_id: 1, price: 650, count: 16, desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, illo? dolor sit amet, consectetur adipisicing elit. Atque, illo? dolor sit amet, consectetur adipisicing elit. Atque, illo? dolor sit amet, consectetur adipisicing elit. Atque, illo?'},
                    {id: 7, name: '', type: {id: 6, name: '8 марта'}, type_id: 6, price: 650, count: 16, desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, illo? dolor sit amet, consectetur adipisicing elit. Atque, illo? dolor sit amet, consectetur adipisicing elit. Atque, illo? dolor sit amet, consectetur adipisicing elit. Atque, illo?'},
                    {id: 8, name: '', type: {id: 7, name: 'день рождения'}, type_id: 7, price: 650, count: 16, desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, illo? dolor sit amet, consectetur adipisicing elit. Atque, illo? dolor sit amet, consectetur adipisicing elit. Atque, illo? dolor sit amet, consectetur adipisicing elit. Atque, illo?'},
                    {id: 9, name: '', type: {id: 7, name: 'день рождения'}, type_id: 7, price: 650, count: 16, desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, illo? dolor sit amet, consectetur adipisicing elit. Atque, illo? dolor sit amet, consectetur adipisicing elit. Atque, illo? dolor sit amet, consectetur adipisicing elit. Atque, illo?'},
                ]
            }

        }
    }
</script>

<style scoped>

</style>
