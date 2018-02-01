<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
<script>
import store from './store';

export default {
    name: 'app',
    beforeCreate() {
        // 注册当前模块到Store
        console.log(this);
        if (!this.$store.state.app) {
        	this.$store.registerModule('app', store);
        }
    }
};

</script>
