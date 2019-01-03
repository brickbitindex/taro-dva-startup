export default {
  namespace: 'counter',
  state: {
    count: 0,
  },
  effects: {},
  reducers: {
    updateState(state, { payload }) {
      console.log(payload);
      const o = { ...state, ...payload };
      console.log(o);
      return { ...state, ...payload };
    }
  },
}