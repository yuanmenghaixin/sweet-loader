<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src='./home.scss'>


</style>
<template>
    <div class="home">
        <h1 v-t="'app.welcome'"></h1>
        <div>
            {{ msg }}
        </div>
    </div>
</template>
<script>
import store from './store';
import Clickoutside from 'element-ui/src/utils/clickoutside';


export default {
    name: 'hello',
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
