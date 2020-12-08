export function wait(ms: number) {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}

export const defaultStoreOptions = {
  autoReset: false,
  devTools: true,
  name: 'dobuxStore',
}

export const config = {
  state: {
    count: 0,
    data: {},
  },
  reducers: {
    increase(state) {
      state.count++
    },
    decrease(state) {
      state.count--
    },
  },
  effects: (store, rootStore) => ({
    async increaseAsync() {
      await wait(500)
      store.reducers.increase()
    },

    async fetchError() {
      return new Promise((_, reject) => {
        reject('customer error')
      })
    },
  }),
}

export const defaultModelOptions = {
  storeName: 'dobuxStore',
  name: 'counter',
  config: {
    ...config,
    effects: {
      async increaseAsync() {
        await wait(500)
      },

      async fetchError() {
        return new Promise((_, reject) => {
          reject('customer error')
        })
      },
    },
  },
  rootModel: Object.create(null),
  autoReset: false,
  devTools: true,
}
