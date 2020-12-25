<template>
  
  <div class="app-container">

     <div id="topnav" class="head_box">
    <div class="header">
	<div class="head_a">
		<div class="head_logo">
			<a title="莱斯托夫的影视网站" class="logo logo_b" style="background-image: url(http://movie.lstf666.cn:666/template/conch/asset/img/logo_black.png);" href="/"></a>
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
          <li class="top_ico">
            <a class="mac_user" href="/userInfo" title="个人中心">个人中心</a>
              <span class="split_line"></span>
              <a class="mac_user" href="javascript:;" title="退出登录" @click="logout">退出登录</a>
          </li>
        </ul>
		</div>
	</div>
  </div></div>
    <!-- css样式库 -->
    <link rel="stylesheet" type="text/css" href="http://movie.lstf666.cn:666/template/conch/asset/css/mxstyle.css?v=4.0">
    <link rel="stylesheet" type="text/css" href="http://movie.lstf666.cn:666/template/conch/asset/css/hlstyle.css?v=4.0">
    <link rel="stylesheet" type="text/css" href="http://movie.lstf666.cn:666/template/conch/asset/css/gold.css?v=4.0" name="skin">
    <link rel="stylesheet" type="text/css" href="http://movie.lstf666.cn:666/template/conch/asset/css/pink.css?v=4.0" name="color">

<meta name="referrer" content="never">

    <ul class="vodlist vodlist_wi  clearfix">
					<li class="vodlist_item num" v-for="(item) in list" :key='item.fid'>
	          <a class="vodlist_thumb lazyload" 
            :href="'detail?fid=' + item.fid" 
            :title="item.filmname"  
            :data-original="item.img" 
            :style="{backgroundImage: 'url(' + item.img+ ')'}">					
		          <span class="play hidden_xs"></span>
		          <span class="pic_text text_right text_dy">{{item.score}}</span>
        	  </a>
            <div class="vodlist_titbox">									
              <p class="vodlist_title">
              <a :href="'detail?fid=' + item.fid" title="item.filmname">{{item.filmname}}</a>
              </p>
              <p class="vodlist_sub">{{item.actor}}</p>
            </div>
          </li>
	  </ul>

  <!-- 页码 -->
  <ul class="page text_center cleafix">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-size="limit"
      layout="prev, pager, next, jumper"
      :total="total">
      </el-pagination>
</ul>
  </div>

</template>
<script type="text/javascript" src="http://movie.lstf666.cn:666/template/conch/asset/js/jquery.min.js"></script>
<script type="text/javascript" src="http://movie.lstf666.cn:666/template/conch/asset/js/jquery.cookie.js"></script>
<script type="text/javascript" src="http://movie.lstf666.cn:666/template/conch/asset/js/hlhtml.js?v=4.0"></script>
<script>
// import navbar from '@/layouts/Navbar'
import film from '@/api/film/film'
import loginApi from '@/api/login'
export default {
  data() {
    return {
      form: {
        filmname: '',
        regions: '',
        date1: '',
        // date2: '',
        // delivery: false,
        type: [],
        actor:'',
        img: '',
        intro: '',
        score:0,
      },
      total:1,
      limit:12,
      list:[],
      currentPage: 1
    }
  },
  mounted(){
    if(this.checkLogin()){
        this.getAllFilmsCount()
        this.getFilmList()    
    }
    
    },
    methods:{
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
      // this.$message({
      //   type: 'info',
      //   offset: 300,
      //   message: '已取消登录'
      // });          
    });

      
    },
      checkLogin(){
        // console.log(sessionStorage.getItem("user"))
        if(sessionStorage.getItem("user")==null){
           this.$message({
                type: 'error',
                message: "当前未登录"
              })
            // this.isLogin=false
            window.location.href = "/login"
            }
        return true;
      },
      getAllFilmsCount(){
        film.getAllFilmsCount()
            .then(response => {
                // console.log(response)
                this.total = response.data.data.allFilms
                // this.total = response.data.total
                // console.log(this.list)
            })
            .catch(error =>{
                console.log(error)
            })
      },
        getFilmList(page=1){
            this.page = page
            film.getFilmByPage(this.page,this.limit)
            .then(response => {
                // console.log(response)
                this.list = response.data.data.filmByPage
                // this.total = response.data.total
                // console.log(this.list)
            })
            .catch(error =>{
                console.log(error)
            })
        },
       
        deleteById(id){
          this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          teacher.deleteById(id).then(response => {
            this.$message({
              type: 'success',
              message: '删除成功!'
          });
            this.getList()
          })  
        }).catch(()=>{})

        },
        handleSizeChange(val) {
        // console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        // console.log(`当前页: ${val}`);
        this.list=[],
        this.getFilmList(val)
      },
    }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

