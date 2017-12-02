<template>
  <div class="index-page">
    <header>
      <h1>我是单页事件页</h1>
    </header>
    <div class="container">
      <router-link :to="{ path: 'global' }" class="btn btn-primary">点我去全局事件页</router-link>
    </div>

    <div class="container">
      <a class="btn btn-success" @click="showLoading">点我显示loading</a>
      <a class="btn btn-error" @click="hideLoading">点我隐藏loading</a>
    </div>
    <div class="container">
      <a class="btn btn-success" @click="showPullLoading">点我显示pullLoading</a>
      <a class="btn btn-error" @click="hidePullLoading">点我隐藏pullLoading</a>
    </div>
    <div class="container">
      <a class="btn btn-info" @click="addNotices1">点我显示notices</a>
      <a class="btn btn-info" @click="addNotices2">点我显示notices</a>
      <a class="btn btn-info" @click="addNotices3">点我显示notices</a>
    </div>

    <!--单页用 start-->
    <toast></toast>
    <loading></loading>
    <!--单页用 end-->
  </div>
</template>

<script type="text/ecmascript-6">
  import toast from '../components/Toast'
  import loading from '../components/Loading.vue'

  import {mapMutations, mapActions} from 'vuex'

  export default {
    name: 'index',
    components: {
      toast,
      loading
    },
    methods: {
      ...mapMutations({
        setLoading: 'SET_LOADING',
        setPullLoading: 'SET_PULLLOADING'
      }),
      ...mapActions([
        'setNotices'
      ]),
      showLoading () {
        this.setLoading(true)
      },
      hideLoading () {
        this.setLoading(false)
      },
      showPullLoading () {
        this.setPullLoading(true)
      },
      hidePullLoading () {
        this.setPullLoading(false)
      },
      addNotices1 () {
        this.setNotices({type: 'error', content: '操作失败！'})
      },
      addNotices2 () {
        this.setNotices({type: 'success', content: '提交成功！'})
      },
      addNotices3 () {
        this.setNotices({type: 'info', content: '你点击了按钮3！'})
      }
    }
  }
</script>
