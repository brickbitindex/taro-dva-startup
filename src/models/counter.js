export default {
  namespace: 'counter',
  state: {
    count: 0,
  },
  effects: {
    * desCount({ payload }, { call, put }) {
      yield put({
        type: 'updateState',
        payload: {
          count: payload.count,
        },
      });
    },
  },
  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload };
    }
  },
}