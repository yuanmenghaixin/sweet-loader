import Vue from 'vue';
import { sweetStore, sweetRouter, SWTOOL } from '@sweetui/sweet';
import App from '@/modules/demo/app';
import Ajax from '@/modules/demo-plugin/ajax';
import '@/modules/demo-theme/index.scss';

Vue.use(SWTOOL);

// ajax启动
Ajax();

sweetStore.dispatch('initLang').then(i18n => {
    new Vue({
        el: '#app',
        router: sweetRouter,
        store: sweetStore,
        i18n,
        template: '<App/>',
        components: { App }
    });
});

// webpack热加载
if (module.hot) { module.hot.accept(); };
