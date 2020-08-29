import 'vue-material/dist/vue-material.min.css';

import App from './App.vue';
import VeeValidate from 'vee-validate';
import Vue from 'vue';
import VueMaterial from 'vue-material';
import router from './router';
import store from './store';

Vue.use(VeeValidate);
Vue.use(VueMaterial);
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
