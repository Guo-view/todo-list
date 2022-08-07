<template>
  <div class="login-wrapper-box">
    <img src="1.jpg" alt="" />
    <div class="content">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="账号" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="dl()"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        password :''
      },
      rules: {
        name: [
          { required: true, message: "请输入账号", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
      async dl(){
          let data = await this.$http.post('http://vue.mengxuegu.com/pro-api/user/login' , this.ruleForm )
            if(data.status === 200){
                this.$router.push('/index')
            }else{
                alert('账号密码错误')
            }
      }
  },
};
</script>

<style lang="less" scoped>
.login-wrapper-box {
  width: 100%;
  height: 1000px;
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
  .content {
    position: absolute;
    text-align: center;
    left: 40%;
    top: 40%;
    width: 400px;
    height: 300px;
    background: rgba(0, 0, 0, 0.775);
    display: flex;
    padding-top: 70px;
  }
}
</style>