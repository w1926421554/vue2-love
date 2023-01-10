import axios from "axios";
import local from '@/utlis/local'
// 配置服务器地址
const SERVER_AX = axios.create({
  baseURL: "/api", //服务器基本路径
  timeout: 8000, //超时
});


// 请求拦截器
SERVER_AX.interceptors.request.use((config) => {
  if (local.get("token")) {
    config.headers.token = local.get("token");
  }
  return config;
});

// 响应拦截器(接收到后端返回的数据前可以做一些事情)
// resonse: 后端正常返回了数据
// err: 后端返回了错误的信息
SERVER_AX.interceptors.response.use(response => {
  console.log('响应拦截器',response);
  // if(response.data.code != undefined && response.data.msg != undefined){
  //     if(response.data.code === 0){
  //         Message.success(response.data.msg)
  //     }
  // }
  return response
},err => {
  console.log(err,'err');
  if(err.response.status == 401){
      router.push('/login')
      return Promise.reject(err)
  }
})

export default SERVER_AX;
