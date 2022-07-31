<template>
  <div>
    <div class="head">
      <div></div>
      <div class="head-left">用户注册</div>
      <div class="head-right" @click="getclass()">切换主题</div>
    </div>
    <div class="content">
      <input type="text" placeholder="手机号登录" :rules="[{required:true,message:'请输入手机号'},{pattern:'/^1[3-9]\d{9}$/',message:'请输入正确的手机号格式'}]">
      <input type="password" placeholder="密码" :rules="[{required:true,message:'请输入密码'}]">
    </div>
    <button @click="$router.push('/bookshop')" class="logingo">登录按钮</button>
  </div>
</template>

<script>
export default {
  name: 'BHome',

  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>
  .head{
    display: flex;
    justify-content: space-between;
    background-color: #c00;
    color: #fff;
    .head-left{
      font-size: 25px;

    }
  }
  .content{
    width: 300px;
    height: 90px;
    line-height: 40px;
    position: absolute;
    top: 40%;
    left: 50%;
    margin-left: -150px;
  }
  .logingo{
    background-color: #c00;
    color: #fff;
    display: inline-block;
    height: 40px;
    width: 150px;
    line-height: 40px;
    font-size: 30px;
    position: absolute;
    top: 70%;
    left: 50%;
    margin-left: -75px;
    border: 0;
    border-radius: 30px;
  }
</style>