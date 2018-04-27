import { Vue, sweetStore, sweetRouter } from '@sweetui/sweet';
import App from '@/modules/demo/app';
import Ajax from '@/modules/demo_plugin/ajax';
import '@/modules/demo_theme/index.scss';

// ajax启动
Ajax();

// 国际化启动之后，进行vue实例化
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
