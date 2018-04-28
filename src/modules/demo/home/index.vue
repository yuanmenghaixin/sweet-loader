<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src='./home.scss'>


</style>
<template>
    <div class="home">
        <h1 v-t="'app.welcome'"></h1>
        <div>
            {{ msg }}
        </div>

        <h2>Demo</h2>

        <ul>
            <li><router-link :to="{ name: 'RequestDemo' }">数据请求 Request</router-link></li>
            <li><router-link :to="{ name: 'ImageDemo' }">图片引用</router-link></li>
            <li><router-link :to="{ name: 'I18N' }">国际化 i18n</router-link></li>
        </ul>
    </div>
</template>
<script>
import store from './store';
import Clickoutside from 'element-ui/src/utils/clickoutside';


export default {
    name: 'home',
    beforeCreate() {
        // 注册当前模块到Store
        if (!this.$store.state.home) {
            this.$store.registerModule('home', store);
        }
    },
    directives: {
        Clickoutside
    },
    data() {
        return {
            msg: this.$store.state.home.msg
        };
    }
};

</script>
