// src/router.js
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'root',
        component: () => import('../components/Index.vue')
    },
    {
        path: '/list',
        name: 'list',
        component: () => import('../components/CountriesList.vue'),
        children: [
            {
                path: '/list/details',
                name: 'details',
                component: () => import('../components/CountriesDetails.vue')
            },
        ],
    },
    // {
    //     path: '/list/details',
    //     name: 'details',
    //     component: () => import('../components/CountriesDetails.vue')
    // },
];

const router = createRouter({
    history: createWebHistory('/'),
    routes,
    scrollBehavior() {
        document.getElementById('app').scrollIntoView();
    }
});

export default router;