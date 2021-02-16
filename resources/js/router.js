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
                name: 'rolesShow',
                path: 'roles/show/:id',
                component: () => import('./components/Admin/Roles/Show.vue')
            },
            {
                name: 'rolesEdit',
                path: 'roles/edit/:id',
                component: () => import('./components/Admin/Roles/Edit.vue')
            },
            {
                name: 'rolesAdd',
                path: 'roles/add',
                component: () => import('./components/Admin/Roles/Add.vue')
            },

            {
                name: 'typesDashboard',
                path: 'types/dashboard',
                component: () => import('./components/Admin/Types/Index.vue')
            },
            {
                name: 'typesShow',
                path: 'types/show/:id',
                component: () => import('./components/Admin/Types/Show.vue')
            },
            {
                name: 'typesEdit',
                path: 'types/edit/:id',
                component: () => import('./components/Admin/Types/Edit.vue')
            },
            {
                name: 'typesAdd',
                path: 'types/add',
                component: () => import('./components/Admin/Types/Add.vue')
            },

            {
                name: 'usersDashboard',
                path: 'users/dashboard',
                component: () => import('./components/Admin/Users/Index.vue')
            },

        ]
    },
];
