<template>
    <div class="hidden">
        <vs-navbar shadow square center-collapsed class="mb-5" v-model="active">
            <template #left>
                <vs-button @click="activeSidebar = !activeSidebar" flat icon>
                    <i class='bx bx-menu'></i>
                </vs-button>
            </template>

            <template #right>
                <vs-button flat >Login</vs-button>
                <vs-button>Get Started</vs-button>
            </template>
        </vs-navbar>
        <vs-sidebar
            absolute
            v-model="active"
            :open.sync="activeSidebar"
        >
            <template #logo>
                <img src="../../../../../public/images/icons/giftbox.webp" alt="Logo Giftbox_kg">
            </template>
            <vs-sidebar-item id="home">
                <template #icon>
                    <i class='bx bx-home'></i>
                </template>
                <router-link :to="{ path: '/admin'}">
                    Home
                </router-link>
            </vs-sidebar-item>
            <vs-sidebar-item id="product">
                <template #icon>
                    <i class='bx bxl-product-hunt' ></i>
                </template>
                <router-link :to="{name: 'productsDashboard', path: 'products/dashboard'}">Product</router-link>
            </vs-sidebar-item>
            <vs-sidebar-item id="purchaseHistory">
                <template #icon>
                    <i class='bx bx-history' ></i>
                </template>
                <router-link :to="{name: 'purchaseHistoryseDashboard', path: 'purchase-historyse/dashboard'}">Purchase history</router-link>
            </vs-sidebar-item>
            <vs-sidebar-item id="roles">
                <template #icon>
                    <i class='bx bxs-user-account'></i>
                </template>
                <router-link :to="{name: 'rolesDashboard', path: 'roles/dashboard'}">Role</router-link>
            </vs-sidebar-item>
            <vs-sidebar-item id="types">
                <template #icon>
                    <i class='bx bx-category' ></i>
                </template>
                <router-link :to="{name: 'typesDashboard', path: 'types/dashboard'}">Type</router-link>
            </vs-sidebar-item>
            <vs-sidebar-item id="users">
                <template #icon>
                    <i class='bx bx-user-circle' ></i>
                </template>
                <router-link :to="{name: 'usersDashboard', path: 'users/dashboard'}">User</router-link>
            </vs-sidebar-item>

            <!--<template #footer>
                <vs-row justify="space-between">
                    <vs-avatar>
                        <img src="/avatars/avatar-5.png" alt="">
                    </vs-avatar>

                    <vs-avatar badge-color="danger" badge-position="top-right">
                        <i class='bx bx-bell' ></i>

                        <template #badge>
                            28
                        </template>
                    </vs-avatar>
                </vs-row>
            </template>-->
        </vs-sidebar>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
                active: 'admin',
                activeSidebar: false,
            }
        }
    }
</script>

<style scoped>

</style>
