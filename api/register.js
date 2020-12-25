import request from '@/utils/request'

export default {
    //根据手机号码发送短信
    getMobile(phone) {
        return request({
            url: `/user/sendSms/${phone}`,
            method: 'post'
        })
    },
    //用户注册
    submitRegister(captcha, form) {
        return request({
            url: `/user/saveUser/${captcha}`,
            method: 'post',
            data: form
        })
    }
}