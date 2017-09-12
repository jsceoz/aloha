import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import SignUpIndex from './signup/Index.vue'
import SignUpList from './signup/List.vue'
import CreateSignUp from './signup/CreateSignUp.vue'

Vue.use(ElementUI);
Vue.use(VueRouter);

const routes = [{
    path: '/signup',
    component: SignUpIndex,
    children: [{
        path: '',
        component: SignUpList
    },{
        path: 'create',
        component: CreateSignUp
    }]
}]

const router = new VueRouter({
    routes
})

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
