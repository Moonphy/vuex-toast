<template>
  <div class="list-page">
    <header>
      <h1>我是全局事件页</h1>
    </header>
    <div class="container">
      <router-link :to="{ path: 'index' }" class="btn btn-primary">点我去单页事件页</router-link>
    </div>

    <div class="container">
      <a class="btn btn-success" @click="showGLoading">点我显示Gloading</a>
      <a class="btn btn-error" @click="hideGLoading">点我隐藏Gloading</a>
    </div>
    <div class="container">
      <a class="btn btn-success" @click="showGPullLoading">点我显示GpullLoading</a>
      <a class="btn btn-error" @click="hideGPullLoading">点我隐藏GpullLoading</a>
    </div>
    <div class="container">
      <a class="btn btn-info" @click="addGNotices1">点我显示Gnotices</a>
      <a class="btn btn-info" @click="addGNotices2">点我显示Gnotices</a>
      <a class="btn btn-info" @click="addGNotices3">点我显示Gnotices</a>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import globalMixins from '../mixins/index'

  export default {
    name: 'Global',
    mixins: [globalMixins]
  }
</script>
