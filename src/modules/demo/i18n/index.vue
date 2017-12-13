<template>
    <div class="i18n-page">
        <h1 v-t="'app.welcome'"></h1>
        <div>
            <h2>切换语言</h2>
            <el-radio-group v-model="locale" size="small">
                <el-radio-button label="zh-CN">中文</el-radio-button>
                <el-radio-button label="en">English</el-radio-button>
            </el-radio-group>
            {{ locale }}
        </div>
        <div class="block">
            <h2>模板中翻译</h2>
            <div v-t="'i18nModule.text'">
            </div>
        </div>
        <div class="block">
            <h2>双向绑定</h2>
            <el-input v-model="message" placeholder="请输入内容"></el-input>
            <p>Message is: {{ message }}</p>
        </div>
        <div class="block">
            <h2>ElementUI</h2>
            <el-date-picker v-model="value1" type="date" placeholder="选择日期" :picker-options="pickerOptions0">
            </el-date-picker>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
import {
    Input,
    RadioGroup,
    RadioButton,
    DatePicker
} from 'element-ui';
import store from './store';

Vue.use(Input);
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.use(DatePicker);

export default {
    name: 'i18nDemo',
    beforeCreate() {
        // 注册当前模块到Store
        if (!this.$store.state.i18n) {
            this.$store.registerModule('i18n', store);
        }
        console.log(this.$i18n.messages);
    },
    data() {
        return {
            message: this.$t('i18nModule.message'),
            pickerOptions0: {
                disabledDate(time) {
                    return time.getTime() < Date.now() - 8.64e7;
                }
            },
            value1: '',
            locale: this.$store.state.language
        };
    },
    watch: {
        locale(val) {
            this.$store.dispatch('updateLang', { lang: val, i18n: this.$i18n }).then(() => {
                this.message = this.$t('i18nModule.message');
            });
        }
    }
};

</script>
