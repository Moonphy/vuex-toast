<template>
  <div class="loading">
    <div class="loading-fixed" v-show="loading">
      <div class="icon-loading">
        <div class="dot dot1">
          <i class="dot-t"></i>
          <i class="dot-b"></i>
        </div>
        <div class="dot dot2">
          <i class="dot-t"></i>
          <i class="dot-b"></i>
        </div>
        <div class="dot dot3">
          <i class="dot-t"></i>
          <i class="dot-b"></i>
        </div>
        <div class="dot dot4">
          <i class="dot-t"></i>
          <i class="dot-b"></i>
        </div>
      </div>
    </div>

    <div class="loading-pull" v-show="pullLoading">
      <div class="icon-loading">
        <div class="dot dot1">
          <i class="dot-t"></i>
          <i class="dot-b"></i>
        </div>
        <div class="dot dot2">
          <i class="dot-t"></i>
          <i class="dot-b"></i>
        </div>
        <div class="dot dot3">
          <i class="dot-t"></i>
          <i class="dot-b"></i>
        </div>
        <div class="dot dot4">
          <i class="dot-t"></i>
          <i class="dot-b"></i>
        </div>
      </div>
      <p>加载中...</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex'
  export default {
    computed: {
      ...mapGetters([
        'loading',
        'pullLoading'
      ])
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../assets/stylus/_loading.styl"
</style>
