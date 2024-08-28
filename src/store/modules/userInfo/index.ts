import { defineStore } from 'pinia'

export const useUserInfo = defineStore('userInfo', {

  state: () => ({
    name: 'afe1',
  }),
  persist: {
    paths: ['name'],
  },

})
