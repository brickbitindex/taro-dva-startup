// import fetch from '../utils/fetch';

export default {
  namespace: 'counter',
  state: {
    count: 0,
  },
  effects: {
    async desCount({ payload }, { put }) {
      await put({
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