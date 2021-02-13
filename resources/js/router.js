export const routes = [
    {
        name: 'home',
        path: '/',
        component: () => import('./components/App/Giftbox.vue'),
    },
    {
        path: '/admin',
        component: () => import('./components/Admin/Admin.vue'),
        children: [
            {
                name: 'productsDashboard',
                path: 'products/dashboard',
                component: () => import('./components/Admin/Products/Index.vue')
            },

            {
                name: 'purchaseHistoryseDashboard',
                path: 'purchase-historyse/dashboard',
                component: () => import('./components/Admin/PurchaseHistoryse/Index.vue')
            },

            {
                name: 'rolesDashboard',
                path: 'roles/dashboard',
                component: () => import('./components/Admin/Roles/Index.vue')
            },

            {
                name: 'typesDashboard',
                path: 'types/dashboard',
                component: () => import('./components/Admin/Types/Index.vue')
            },

            {
                name: 'usersDashboard',
                path: 'users/dashboard',
                component: () => import('./components/Admin/Users/Index.vue')
            },

        ]
    }
];
