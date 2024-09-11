// test.ts

import type { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/api/get',
    method: 'get',
    timeout: 1000,
    response: ({ query }) => {
      return {
        code: 0,
        data: {
          name: 'afe1',
        },
      }
    },
  },
] as MockMethod[]
