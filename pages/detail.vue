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
          <li > 
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
    <link rel="stylesheet" type="text/css" href="http://movie.lstf666.cn:666/template/conch/asset/css/black.css?v=4.0" name="color">

 <div class="hot_banner ">
    
    <div class="detail_list_box">
         <div class="detail_list">
				<div class="content_box clearfix">
					<div class="content_thumb fl">											
						<a class="vodlist_thumb lazyload" :href="form.img" :title="form.filmname" :data-original="form.img" :style="{backgroundImage: 'url(' + form.img+ ')'}" target="_blank"><span class="play hidden_xs" ></span>
						</a>								
					</div>
					<div class="content_detail content_top fl">
						<div class="pannel_head clearfix">
								<span class="text_muted pull_right hidden_mb ">
								<a href="javascript:void(0);" class="open-share"><i class="iconfont shaixuan_i"></i>&nbsp;分享</a>
							</span>
							<h2 class="title">
								{{form.filmname}}							</h2>
						</div>
						<div id="detail_rating" class="fn-clear">
            <div id="rating" class="fn-left" data-mid="1" data-id="41689" data-score="2">
              <ul class="rating-s">
                <el-rate
                  v-model="form.score"
                  disabled
                  show-score
                  text-color="#ff9900"
                  :max = "10"
                  :allow-half = "true">
                </el-rate>
              </ul>
    </div>
                        </div>
                    </div>
                    <div class="content_detail content_min fl">
                        <ul>	
						<li class="data">
							<span class="text_muted hidden_xs">年份：</span><a href="javascript:void(0);" >{{form.date1}}</a>&nbsp;							<span class="split_line"></span>
							<span class="text_muted hidden_xs">地区：</span><a href="javascript:void(0);" >{{form.regions}}</a>&nbsp;							<span class="split_line"></span>
							<span class="text_muted hidden_xs">类型：</span><a href="javascript:void(0);" >{{form.type}}</a>&nbsp;			
						</li>
						<li class="data"><span>状态：</span><span class="data_style">BD超清中字</span>&nbsp;/&nbsp;<em>{{form.date1}}</em></li>
						<li class="data"><span>主演：</span><a href="javascript:void(0);">{{form.actor}}</a></li>
						<li class="data"><span>导演：</span><a href="javascript:void(0);" >{{form.director}}</a>&nbsp;</li>
						<li class="desc hidden_xs">
							<span class="left text_muted">简介：</span>{{form.intro}}<a href="#">详细&nbsp;&gt;</a>
						</li>
						</ul>
					</div>
					<div class="content_detail content_min content_btn fl">
                        						    

	<div class="playbtn o_like" style="margin-right: 0;">
        	    <a class="btn btn_like digg_link" data-id="41689" data-mid="1" data-type="up" href="javascript:void(0);"><i class="iconfont"></i>&nbsp;喜欢&nbsp;<em class="digg_num">{{form.scorePeople}}</em></a>
              
	        </div>
        <div class="playbtn o_share hidden_xs">
						<a class="btn btn_share" href="javascript:void(0);"><i class="iconfont"></i>&nbsp;评分</a>
						<div class="dropdown">
          <div class="bds_share_title">评分</div>
            <div class="bdsharebuttonbox bdshare-button-style0-32" data-tag="share_1" data-bd-bind="1608015628951">
                <a class="bds_weixin" data-cmd="weixin" title="分享到微信"></a>
                <a class="bds_sqq" data-cmd="sqq" title="分享到QQ好友"></a>
                <a class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a>
                <a class="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></a>
                <a class="bds_more" data-cmd="more"></a>
                  </div>
                      <span class="share_tips">在下方输入框提交评分(1-10)</span>
                <!-- <span id="short2" class="share_link shorturl">{{form.filmname}}--</span> -->
                <el-input label="评分" v-model="input_score" placeholder="请输入内容"></el-input>
                <!-- <span id="btn" class="copy_btn" data-clipboard-action="copy" data-clipboard-target="#short2">提交评分</span> -->
                <el-button type="warning" plain size="small" v-on:click.once="updateScore">提交评分</el-button>
                
		</div>
						</div>
											</div>
				</div>
         </div>
    </div>
    </div>


   <div class="container white_pal">
           <div class="input_row">
       <div class="pannel clearfix">
        <!--留言开始-->
        <div class="mac_msg_r">
            <form class="gbook_form gbook_font">
              <textarea class="gbook_content" name="gbook_content" placeholder="输入评论内容" v-model="comment.main"></textarea>
              <div class="msg_code">
                  <div class="remaining_w">提示：最多输入<span class="gbook_remaining remaining">200</span>字</div>
                    <input type="button" class="gbook_submit submit_btn" value="提交评论" @click="doComment">
              </div>
          </form>
        </div>
        <!--留言结束-->
        		
	   </div>
    </div>
	<div class="commlist_row">
	    <div class="comm_list pannel clearfix">
			<div class="pannel_head clearfix">
     <span class="pull_right">共&nbsp;<span class="mycol">{{list.length}}</span>&nbsp;条留言</span>
     <h2 class="title">留言</h2>								
    </div>
<ul class="part_rows" >
<li class="comm_each line_top margin" v-for="(item,index) in list" :key="item.cid">
<img class="comm_avat part_roun" :src="userList[index].avatar" v-if='userList[index]' >
<div class="comm_head">
<strong class="text_line" v-if='userList[index]'   >{{userList[index].username}}</strong>
  
<span class="part_tips hidden_xs" v-if='userList[index]' >{{userList[index].gmtCreate}}
  <span class="split_line"></span>
  <span class="mycol">
      <el-button type="warning" icon="el-icon-star-off" circle size="mini"  v-on:click.once="commentLove(item.cid)"></el-button>
    {{item.stars}}
    </span></span>

</div>
<div class="comm_cont" style="display: flex;">
<div class="comm_content" >{{item.main}}</div>

</div>
</li>
</ul>
<!--__ 翻页__-->
		</div>
	</div>
</div>
  </div>
  
</template>

<script>
import film from '@/api/film/film'
import loginApi from '@/api/login'
export default {
  data() {
    return {
      input_score:0,
        fid:0,
      form: {
        filmname: '',
        regions: '',
        date1: '',
        type: [],
        actor:'',
        img: '',
        intro: '',
        score:0,
        scorePeople:0,
      },
      comment:{
        // cid:1,
        // uid:1,
        fid:this.$route.query.fid,
        // gmtCreate:'',
        main:'',
        stars:0,
      },
      list:[],
      userList:[
        ],
      user:{
        uid:1,
        username:'',
        avatar:'',
        email:'',
        phone:'',
        gmtCreate:'',
        },
    
    }
  },
  mounted(){
    if(this.checkLogin()){
        this.fid = this.$route.query.fid;
    this.getFilmById(this.fid)
    this.getCommentsById(this.fid) 
    }
   
   
  },
  methods: {
      isInteger(obj){
        console.log(typeof obj)
         return typeof obj === 'number' && obj%1 === 0;      //是整数，则返回true，否则返回false
    },     
    updateScore(){
      if(!this.isInteger(parseInt(this.input_score)))
        {
          this.$message({
            type: 'error',
            offset: 300,
            message: '不是整数'})
          return
            }
      if(this.input_score>10 || this.input_score<1)
      {
        this.$message({
            type: 'error',
            offset: 300,
            message: '不在范围内'})
            
          return 
      }
      film.updateScore(this.fid,parseInt(this.input_score))
        .then(response => {
                // console.log(response)
          this.$message({
            type: 'success',
            offset: 300,
            message: '评分成功!'})
            })
            .catch(error =>{
                console.log(error)
            })
    },

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


      getUid(){
        var phone = sessionStorage.getItem("user")
        film.getIdByPhone(phone)
          .then(response => {
          // console.log(response)
            this.comment.uid = response.data.data.uid
            })
      },

      //给评论点赞
    commentLove(cid) {
      // console.log("ssss",this.userList)
          this.getUid()
      film.commentLove(this.comment.uid,cid)
      .then(response => {
        // console.log(response)
        if(response.data.code==20000){
          // this.$message({
          //     type: 'success',
          //     message: '点赞成功!'})
              
              this.getCommentsById(this.fid)
        }
    })
    .catch(error =>{
        console.log(error)
    })

    },

    //留言
    doComment(){
          //  console.log("list---",this.userList)
            this.getUid()
            // console.log(this.comment.uid)
            if(this.comment.uid==undefined)
            return
                this.getUid()
            //  console.log(this.comment.uid)   
             if(this.comment.main == ''){
               this.$message({
                  type: 'error',
                  offset: 300,
                  message: '评论不能是空!'})
                  return ;
             }
            film.comment(this.comment)
            .then(response => {
                // console.log(response)
                if(response.data.code==20000){
                  this.$message({
                  type: 'success',
                  offset: 300,
                  message: '评论成功!'})
                  this.list = []
                  this.userList=[]
                  this.comment.main=''
                  this.getCommentsById(this.fid)
                }
            })
            .catch(error =>{
                console.log(error)
            })
        },
    getFilmById(fid){
            film.getOneFilmById(fid)
            .then(response => {
                // console.log(response)
                this.form = response.data.data.film
                this.total = response.data.data.total
                // console.log(this.form)
            })
            .catch(error =>{
                console.log(error)
            })
        },
     getCommentsById(fid){
        film.getCommentsById(fid)
            .then(response => {
                // console.log(response)
                this.list = response.data.data.comments
                var i;
                let uids=[];
                for(i in response.data.data.comments){
                  // console.log(response.data.data.comments[i].uid)
                  uids.push(response.data.data.comments[i].uid)
                }
                  this.getUserByIds(uids)
            })
            .catch(error =>{
              console.log(error)
            })
            
    },
    async getUserByIds(uids){
      var uid;
      for(var i = 0, len = uids.length; i < len; i++){
        // console.log(i,"---",uids[i])
        await film.getUserById(uids[i])
            .then(response => {
              // console.log(response)
               this.userList.push(JSON.parse(JSON.stringify(response.data.data.user)))
            })
            .catch(error =>{
                console.log(error)
            })
}
      // console.log(uid)
      //根据id得到用户详细信息
    },
    
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

