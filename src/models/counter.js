export default {
  namespace: 'counter',
  state: {
    count: 0,
  },
  effects: {},
  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload };
    }
  },
}