import axios from 'axios'

export default function getInstance(options = {}) {
  
  const instance = axios.create()
  instance.interceptors.request.use(function(request) {
    return request
  })
  instance.interceptors.response.use(
    function(response) {
      return response
    },
    function(response) {}
      // 请求错误时做些事   
  )
  return instance
}