import * as types from './mutation-types'

const matutations = {
  [types.SET_LOADING] (state, loading) {
    state.loading = loading
  },
  [types.SET_PULLLOADING] (state, pullLoading) {
    state.pullLoading = pullLoading
  },
  [types.SET_NOTICES] (state, notice) {
    state.notices.push(notice)
  },
  [types.REMOVE_NOTICES] (state) {
    state.notices.pop()
  },
  // 全局
  [types.SET_G_LOADING] (state, Gloading) {
    state.Gloading = Gloading
  },
  [types.SET_G_PULLLOADING] (state, GpullLoading) {
    state.GpullLoading = GpullLoading
  },
  [types.SET_G_NOTICES] (state, Gnotice) {
    state.Gnotices.push(Gnotice)
  },
  [types.REMOVE_G_NOTICES] (state) {
    state.Gnotices.pop()
  }
}

export default matutations
