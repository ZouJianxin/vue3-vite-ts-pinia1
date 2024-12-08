import { defineStore } from 'pinia'
import { UserState } from 'types/store'

// 第一个参数是id，唯一
export const useUserStore = defineStore('user', {
  state: () => {
    return {
      token: 'EFA68205747CB561BB7C0F85D5689856',
      userInfo: { name: 'weizwz', phone: '18392016879' }
    }
  },
  getters: {
    namePic: (state) => state.userInfo.name.substring(0, 1)
  },
  actions: {
    setToken(token: string) {
      this.token = token
    },
    setUserInfo(userInfo: UserState['userInfo']) {
      this.userInfo = { ...this.userInfo, ...userInfo }
    }
  }
})