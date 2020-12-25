<template>
  <div class="main">
    <div class="title">
      <a class="active" href="/login">登录</a>
      <span>·</span>
      <a href="/register">注册</a>
    </div>

    <div class="sign-up-container">
      <el-form ref="userForm" :model="user">

        <el-form-item class="input-prepend restyle" prop="phone" :rules="[{ required: true, message: '请输入电话号码', trigger: 'blur' }]">
          <div >
            <el-input type="text" placeholder="电话号码" v-model="user.phone"/>
            <i class="iconfont icon-phone" />
          </div>
        </el-form-item>

        <el-form-item class="input-prepend" prop="password" :rules="[{ required: true, message: '请输入密码', trigger: 'blur' }]">
          <div>
            <el-input type="password" placeholder="密码" v-model="user.password"/>
            <i class="iconfont icon-password"/>
          </div>
        </el-form-item>

        <div class="btn">
          <input type="button" class="sign-in-button" value="登录" @click="submitLogin()">
        </div>
      </el-form>
      <!-- 更多登录方式 -->
      <div class="more-sign">
        <h6>社交帐号登录</h6>
        <ul>
          <li><a id="weixin" class="weixin"  href="#"><i class="iconfont icon-weixin"/></a></li>
          <li><a id="qq" class="qq"  href="#"><i class="iconfont icon-qq"/></a></li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
  import '~/assets/css/sign.css'
  import '~/assets/css/iconfont.css'
  import cookie from 'js-cookie'

  import loginApi from '@/api/login'
  export default {
    layout: 'sign',

    data () {
      return {
        user:{
          phone:'',
          password:''
        },
        loginInfo:{}
      }
    },

    methods: {
      submitLogin(){
        if(sessionStorage.getItem("user")!=null){
          this.$message({
          type: 'error',
          message: "请先登出！",})
          return 
         
        }
        loginApi.submitLogin(this.user).then(response => {
            console.log(response)
            if(response.data.code==20001){
                this.$message({
                type: 'error',
                message: response.data.data.msg
          })
            }else{
                this.$message({
                type: 'success',
                message: response.data.data.msg
            })
                
                sessionStorage.setItem("user", this.user.phone);
              window.location.href = "/film";
            }
        })
      },

      checkPhone (rule, value, callback) {
        //debugger
        if (!(/^1[34578]\d{9}$/.test(value))) {
          return callback(new Error('手机号码格式不正确'))
        }
        return callback()
      }
    }
  }
</script>
<style>
   .el-form-item__error{
    z-index: 9999999;
  }
</style>