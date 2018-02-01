<template>
  <div class="image-demo-page">
      <h1>图片等多媒体引入方式</h1>
      <h2>html中引入</h2>
      <div>
          <img :src="imgUrl" alt="">
      </div>

      <h2>CSS中引入</h2>

    <div class="avatar"></div>

  </div>
</template>

<script>
    export default {
        name: 'imageDemo',
        data() {
            return {
                imgUrl: require('./images/avatar.jpeg')
            };
        }
    };
</script>

<style lang="scss" src="./style.scss">

</style>
