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