import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue'

import App from './App';
import store from './store/index'

Vue.use(BootstrapVue);

import './base.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


new Vue({
	render: h => h(App),
	store,
}).$mount('#app');
