<template>
    <div class="sub-i18n-page">
        <div>
            <h3>模板模式</h3>
            {{message}}
        </div>
        <div>
            <h3>指令模式</h3>
            <span v-t="'subI18n.message'"></span>
        </div>

    </div>
</template>
<script>
export default {
    name: 'subI18n',
    computed: {
        message() {
            return this.$t('subI18n.message');
        }
    }
};
</script>
