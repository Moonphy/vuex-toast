<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view class="view"></router-view>
      </keep-alive>
    </transition>

    <!--全局用 start-->
    <global-toast :Gnotices="Gnotices"></global-toast>
    <global-loading :Gloading="Gloading" :GpullLoading="GpullLoading"></global-loading>
    <!--全局用 end-->
  </div>
</template>

<script>
  // 这三个import是全局才用
  import globalToast from './components/globalToast'
  import globalLoading from './components/globalLoading.vue'
  import globalMixins from './mixins/index'

  export default {
    name: 'app',
    mixins: [globalMixins],
    components: {
      globalToast,
      globalLoading
    }
  }
</script>

<style lang="stylus">
  @import "assets/stylus/base.styl"
  @import "assets/stylus/_button.styl"
</style>
