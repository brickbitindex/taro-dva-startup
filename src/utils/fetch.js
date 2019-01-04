import 'whatwg-fetch'
import Taro from '@tarojs/taro'
import qs from 'qs'

const _fetch = window.fetch

function checkStatus(res) {
  if (res.status >= 200 && res.status < 300) return res;
  throw new Error(`[${res.status}] ${res.statusText}`);
}

function wrapper(method, url, data = {}, options = {}) {
  let queryUrl = url;
  let body = {};
  if (method === 'GET') {
    const params = qs.stringify({ ...data });
    queryUrl += '?' + params;
  } else if (method === 'POST' || method === 'PUT') {
    body = JSON.stringify({ ...data });
  }

  return _fetch(queryUrl, {
    headers: {
      'Content-Type': 'application/json'
    },
    ...options,
    body,
    credentials: 'include',
    method,
  })
  .then(checkStatus)
  .then(res => res.json())
  .then(d => d)
  .catch(res => {
    Taro.showToast({
      title: `${res.data.error.message}~` || res.data.error.code,
      icon: 'none',
      mask: true,
    });
  })
}

export default {
  get: wrapper.bind(null, 'GET'),
  post: wrapper.bind(null, 'POST'),
  put: wrapper.bind(null, 'PUT'),
  delete: wrapper.bind(null, 'DELETE'),
};
