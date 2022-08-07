<template>
  <div class="index-wrapper">
    <el-container>
      <el-header>
        <div class="herder-left">
          <span>梦学谷会员管理系统</span>
        </div>
        <div class="herder-right">
          <el-dropdown :hide-on-click="false">
            <span class="el-dropdown-link">
              李吉森<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>修改密码</el-dropdown-item>
              <el-dropdown-item @click.native="outAdd">退出系统</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <!-- 左边菜单 -->
          <el-menu class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="pink"
            router>
            <el-menu-item index="/home">
              <i class="el-icon-menu"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <el-menu-item index="/member">
              <i class="el-icon-document"></i>
              <span slot="title">会员管理</span>
            </el-menu-item>
            <el-menu-item index="/supplier">
              <i class="el-icon-setting"></i>
              <span slot="title">供应商管理</span>
            </el-menu-item>
            <el-menu-item index="/goods">
              <i class="el-icon-setting"></i>
              <span slot="title">商品管理</span>
            </el-menu-item>
            <el-menu-item index="/staff">
              <i class="el-icon-setting"></i>
              <span slot="title">员工管理</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>


<script>
export default {
  data() {
    return {

    }
  },
  methods:{
    async outAdd(){
        let data = await this.$http.post('http://vue.mengxuegu.com/pro-api/user/logout')
        console.log(data);
        if(data.status === 200){
          this.$router.push('/')
        }
    }
  }
}
</script>


<style lang="less" scoped>
.el-header {
  display: flex;
  justify-content: space-between;
  height: 50px;
  line-height: 60px;
  background-color: cornflowerblue;
  color: white;
  padding: 0 20px;
  box-sizing: border-box;
  font-size: 16px;
  .herder-left{
    
  }
  .el-dropdown {
    color: white;
    font-size: 20px;
  }
}

.el-aside {
  overflow: hidden;
  height: 890px;
  .el-menu{
    height: 100%;
  }
}
.el-container{
  height: 900px;

}
</style>