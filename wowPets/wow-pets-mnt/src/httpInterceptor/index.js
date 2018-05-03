import axios from 'axios'

function init() {
  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
  axios.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded'
  // Add a request interceptor
  axios.interceptors.request.use(function(config) {
    // Do something before request is sent
    return config
  }, function(error) {
    // Do something with request error
    return Promise.reject(error)
  })
  // Add a response interceptor
  axios.interceptors.response.use(function(response) {
    if (response.status === 200) {
      return response.data
    }else {
      return Promise.reject(response)
    }
  }, function(error) {
    return Promise.reject(error)
  })
}
export default {
  init : init
}
