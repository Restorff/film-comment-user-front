<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        {{ name }}
      </h1>
      <h2 class="subtitle">
        {{ description }}
      </h2>
      <div class="links">
        <a
          href="/login"
          class="button--green">登录</a>
        <a
          href="/register"
          class="button--grey">注册</a>  
          <a
          href="http://film-comment.lstf666.cn:9529"
          target="_blank"
          class="button--green">管理员登录</a>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {

  data() {
    
    return {
      name:'影评系统入口',
      description:'请选择您的身份'
    }
  },
  components: {
    AppLogo
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

