require('./bootstrap');

window.Vue = require('vue');

window.VueRouter = require('vue-router').default;

window.VueAxios = require('vue-axios').default;

window.Axios = require('axios').default;

let AppLayout = require('./components/App.vue');

// show the list suprimentos template
const Listsuprimentos = Vue.component('Listsuprimentos', require('./components/Listsuprimentos.vue'));

// add suprimento template
const Addsuprimentos = Vue.component('Addsuprimentos', require('./components/Addsuprimentos.vue'));

// edit suprimento template
const Editsuprimentos = Vue.component('Editsuprimentos', require('./components/Editsuprimentos.vue'));

// delete suprimento template
const Deletesuprimentos = Vue.component('Deletesuprimentos', require('./components/Deletesuprimentos.vue'));

// view single suprimento template
const Viewsuprimentos = Vue.component('Viewsuprimentos', require('./components/Viewsuprimentos.vue'));


// Registering Modules

Vue.use(VueRouter, VueAxios, axios);

const routes = [{
        name: 'Listsuprimentos',
        path: '/',
        component: Listsuprimentos
    },
    {
        name: 'Addsuprimentos',
        path: '/add-suprimento',
        component: Addsuprimentos
    },
    {
        name: 'Editsuprimentos',
        path: '/edit/:id',
        component: Editsuprimentos
    },
    {
        name: 'Deletesuprimentos',
        path: '/suprimento-delete',
        component: Deletesuprimentos
    },
    {
        name: 'Viewsuprimentos',
        path: '/view/:id',
        component: Viewsuprimentos
    }

];

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

new Vue(
    Vue.util.extend({
            router
        },
        AppLayout
    )
).$mount('#app');
