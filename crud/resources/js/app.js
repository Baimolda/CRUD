require('./bootstrap');
window.Vue = require('vue');


import App from './components/App'
import Navbar from './components/Parts/Navbar'
import Posts from './components/Pages/Posts/index'
import ValidationErrors from './components/Parts/ValidationErrors'

Vue.component('navbar', Navbar);
Vue.component('posts', Posts);
Vue.component('validation-errors',ValidationErrors)


const app = new Vue({
    el: '#app',
    render: h => h(App)
});
