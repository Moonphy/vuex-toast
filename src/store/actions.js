import * as types from './mutation-types'

export const setNotices = ({commit}, notice) => {
  commit(types.SET_NOTICES, notice)

  setTimeout(() => {
    commit(types.REMOVE_NOTICES)
    notice.fn && notice.fn()
  }, notice.times || 3000)
}

export const removeNotice = ({ commit }) => commit('removeNotice')

// 全局
export const setGNotices = ({commit}, notice) => {
  commit(types.SET_G_NOTICES, notice)

  setTimeout(() => {
    commit(types.REMOVE_G_NOTICES)
    notice.fn && notice.fn()
  }, notice.times || 3000)
}

export const removeGNotice = ({ commit }) => commit('removeGNotice')
