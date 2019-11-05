/**
 * Created by admin on 2018/4/30 0030.
 */
import axios from 'axios'
import { APP_CONFIG } from "../config";
import { Loading, Message } from 'element-ui';
let loadingInstance;

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.timeout = 10000;
axios.defaults.baseURL = APP_CONFIG.baseURL;

// 请求时的拦截
axios.interceptors.request.use(function (config) {
  loadingInstance = Loading.service({})
  // 发送请求之前做一些处理
  let token = sessionStorage.getItem('token');
  if (token) {
    config.headers.authorization = token;
  }

  return config;
}, function (error) {
  loadingInstance.close();
  Message.error({message: '请求异常!'});
  // 当请求异常时做一些处理
  return Promise.reject(error);
});

// 响应时拦截
axios.interceptors.response.use(function (response) {
  loadingInstance.close()
  // 返回响应时做一些处理
  if (response.data.message == 'token已失效') {
    Message.error({message: 'token已失效!'});
    sessionStorage.removeItem('token');
    window.location = '/login';
  }
  return response;
}, function (error) {
  loadingInstance.close()
  Message.error({message: '服务器异常!'});
  // 当响应异常时做一些处理
  return Promise.reject(error);
});

function apiFn(apiConfig) {
  const serviceMap = {};
  apiConfig.map(({ name, url, method, urls }) => {
    serviceMap[name] = function(params, params2) {
      if (typeof params == 'string') {
        url = params
        params = ''
      }
      if (params2) {
        params = params2
      }

      if (method === 'get') {
        params = {
          params: params
        }
      }

      return new Promise((resolve, reject) => {
        axios[method](url, params)
          .then(response => {
            resolve(response.data);
          })
          .catch((error) => {
            reject(error);
          })
      })
    };
  });
  return serviceMap;
}

export default apiFn;
