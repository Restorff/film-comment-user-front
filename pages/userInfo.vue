<template>
    <div class="app-container">

<div id="topnav" class="head_box">
    <div class="header">
	<div class="head_a">
		<div class="head_logo">
			<!-- <a title="莱斯托夫的影视网站" class="logo logo_b" style="background-image: url(http://movie.lstf666.cn:666/template/conch/asset/img/logo_black.png);" href="/"></a> -->
			<a title="莱斯托夫的影视网站" class="logo logo_w" style="background-image: url(http://movie.lstf666.cn:666/template/conch/asset/img/logo_white.png);" href="/"></a>
		</div>
		<div class="head_menu_a hidden_xs hidden_mi">
	        <ul class="top_nav clearfix">
	        	<li ><a href="/" title="首页">首页</a></li>
            <li ><a href="/film">电影</a> </li>
            <li ><a href="#">连续剧</a></li>
            <li ><a href="#">综艺</a></li>
            <li ><a href="#">动漫</a></li>
            <li ><a href="#">资讯</a></li>
          </ul>
		</div>
		<div class="head_user">
		    <ul>
          <li > 
					<a class="mac_user" href="/userInfo" title="个人中心">个人中心</a>
           <span class="split_line"></span>
           <a class="mac_user" href="javascript:;" title="退出登录" @click="logout">退出登录</a>
          </li>
        </ul>
		</div>
	</div>
  </div>
</div>
<link rel="stylesheet" type="text/css" href="http://movie.lstf666.cn:666/template/conch/asset/css/mxstyle.css?v=4.0">
<link rel="stylesheet" type="text/css" href="http://movie.lstf666.cn:666/template/conch/asset/css/hlstyle.css?v=4.0">
<link rel="stylesheet" type="text/css" href="http://movie.lstf666.cn:666/template/conch/asset/css/gold.css?v=4.0" name="skin">
<link rel="stylesheet" type="text/css" href="http://movie.lstf666.cn:666/template/conch/asset/css/pink.css?v=4.0" name="color">

<div style="display:flex;justify-content:space-around;">
    <el-form ref="user" :model="user" label-width="120px" >
      <el-form-item label="用户名"  >
        <el-input v-model="user.username"  style="width:150px"/>
      </el-form-item>
      
      <el-form-item label="密码">
        <el-input v-model="user.password" style="width:140px"/>
      </el-form-item>
      
      <el-form-item label="邮箱">
        <el-input v-model="user.email" style="width:170px"/>
      </el-form-item>
    <el-form-item label="电话号码" >
        <el-input v-model="user.phone" :disabled="true" style="width:150px"/>
      </el-form-item>
       <!-- 封面图片 -->
<el-form-item label="个人头像">

   <el-upload
  class="avatar-uploader"
  action="http://wlj.lstf666.cn:8083/filmcomment/filmoss/uploadOssFile"
  :show-file-list="false"
  :on-success="handleAvatarSuccess"
  :before-upload="beforeAvatarUpload">
  <img v-if="user.avatar" :src="user.avatar" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>

</el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">更新</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
  </div>
</template>
<style>

  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>

<script>
import film from '@/api/film/film'
import loginApi from '@/api/login'
export default {
//   components: { ImageCropper, PanThumb },
  data() {
    
    return {
      ouser:{},
      user:{
        uid:1,
        username:'',
        avatar:'',
        email:'',
        phone:'',
        gmtCreate:'',
        password:'',
        },
        // imageUrl:'',
    }
  },

  mounted(){
    this.getUserByPhone()
  },
  methods: {
 
    
    logout(){
      this.$confirm('确定要退出登录吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        var phone = sessionStorage.getItem("user")
          if(phone!=null){
            loginApi.logout(phone)
            sessionStorage.removeItem("user")
            this.$message({
              type: 'success',
              offset: 300,
              message: "登出成功"
            })
            window.location.href = "/login"
          }else{
            this.$message({
              type: 'error',
              offset: 300,
              message: "当前未登录"
            })
          }
      }).catch(() => {
      });
    },
    getUserByPhone(){
      var phone = sessionStorage.getItem("user")
        film.getUserByPhone(phone)
        .then(response => {
                // console.log(response)
                this.user =  response.data.data.user
                this.ouser = JSON.parse(JSON.stringify(response.data.data.user))
                // this.total = response.data.total
                // console.log(this.user)
            })
            .catch(error =>{
                console.log(error)
            })
    },

       handleAvatarSuccess(res, file) {
         if(res.code == 20000) {
           this.$message({
          type: 'success',
          offset: 300,
          message: '上传成功'})
         }
        //  console.log(res)
        // this.imageUrl = URL.createObjectURL(file.raw);
        this.user.avatar = res.data.url
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
         this.$message({
          type: 'error',
          offset: 300,
          message: '图片必须是jpg格式!'})
        }
        if (!isLt2M) {
          this.$message({
            type: 'error',
            offset: 300,
            message: '上传头像图片大小不能超过2MB!'})
        }
        if(isJPG && isLt2M){
          this.$message({
          type: 'success',
          offset: 300,
          message: '正在上传'})
        }
        return isJPG && isLt2M;
      },
    
    onSubmit() {
    var change = false;
    for(var i in this.user)
    {
      if(this.user[i] != this.ouser[i])
        change = true;
    }
    // console.log(this.user[i]+"---"+this.ouser[i])

if(change == false){
  
   this.$message({
    type: 'error',
    offset: 300,
    message: '未做修改，无需更新!'})
    return
}
        film.updateUser(this.user)
        .then(response => {
                // console.log(response)
          this.$message({
            type: 'success',
            offset: 300,
            message: '更新成功!'})
                this.user = {}
                this.getUserByPhone()
            })
            .catch(error =>{
                console.log(error)
            })
    },
    onCancel() {
      
    }
    
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

