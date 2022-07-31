<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <el-form
      :model="loginform"
      status-icon
      :rules="rulesloginform"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
        <el-form-item label="用户名" prop="username">
        <el-input
          type="text"
          v-model="loginform.username"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model="loginform.password"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm"
          >提交</el-button
        >
        <el-button>重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginform: {
        username: "",
        password: "",
      },
       rulesloginform:{
        username: [
          { required: true, message: "请输入登录名称", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入登陆密码", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
        submitForm(){
            this.$axios.post('http://vue.mengxuegu.com/pro-api/user/login',this.loginform).then(res=>{
                console.log(res.data.data.token);
                sessionStorage.setItem('token',res.data.data.token)
                this.$router.push('/welcome')
            })
        }
  },
};
</script>