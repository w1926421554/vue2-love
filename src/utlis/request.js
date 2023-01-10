import axios from "axios";
// 配置服务器地址
const SERVER_AX = axios.create({
    baseURL: "/api", //服务器基本路径
    timeout: 8000, //超时
  });

// 请求拦截器
SERVER_AX.interceptors.request.use((config) => {
  return config;
});



export default SERVER_AX;