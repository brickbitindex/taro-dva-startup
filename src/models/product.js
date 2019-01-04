
  export default {
    namespace: 'product',
    subscriptions: {},
    state: {},
    effects: {},
    reducers: {
      updateState(state, { payload }) {
        return { ...state, ...payload };
      }
    },
  }
