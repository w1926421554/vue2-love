//用户相关的逻辑接口
import request from "@/utlis/request"

//登录接口
export const $_userLogin = data => {
    return request({
        method: 'post',
        url: '/login',
        data
    })
}

// 发送验证码
export const $_getVerify = data => {
    return request({
        method: 'post',
        url: '/code',
        data
    })
}
// 手机注册
export const $_successRegister = data => {
    return request({
        method: 'post',
        url: '/register',
        data
    })
}

// 关注列表
export const $_followList = data => {
    return request({
        method:'post',
        url:'/follow_list',
        data
    })
}