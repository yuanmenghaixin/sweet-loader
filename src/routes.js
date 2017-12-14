export default {
    routes: [
        {
            path: '/',
            name: 'Home',
            component: require('@/modules/demo/home').default
        },
        {
            path: '/i18n',
            name: 'I18N',
            component: require('@/modules/demo/i18n').default
        },
        {
            path: '/ui',
            name: 'UI',
            component: require('@/modules/demo/ui').default
        },
        {
            path: '/ajaxdemo',
            name: 'ajaxDemo',
            component: require('@/modules/demo/ajaxDemo').default
        }
    ]
};

