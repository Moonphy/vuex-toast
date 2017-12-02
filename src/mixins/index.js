import {mapGetters, mapMutations, mapActions} from 'vuex'

const globalMixins = {
  computed: {
    ...mapGetters([
      'Gnotices',
      'Gloading',
      'GpullLoading'
    ])
  },
  methods: {
    ...mapMutations({
      setGLoading: 'SET_G_LOADING',
      setGPullLoading: 'SET_G_PULLLOADING'
    }),
    ...mapActions([
      'setGNotices'
    ]),
    showGLoading () {
      this.setGLoading(true)
    },
    hideGLoading () {
      this.setGLoading(false)
    },
    showGPullLoading () {
      this.setGPullLoading(true)
    },
    hideGPullLoading () {
      this.setGPullLoading(false)
    },
    addGNotices1 () {
      this.setGNotices({type: 'error', content: '操作失败！'})
    },
    addGNotices2 () {
      this.setGNotices({type: 'success', content: '提交成功！'})
    },
    addGNotices3 () {
      this.setGNotices({type: 'info', content: '你点击了按钮3！'})
    }
  }
}

export default globalMixins
