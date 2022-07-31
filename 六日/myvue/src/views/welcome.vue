<template>
    <div>
        <h1 class="herer">
        梦学谷会员管理系统
        <el-button type="info" @click='inout'>退出</el-button>
    </h1>
        <el-container style="height: 500px; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu router>
          <el-menu-item :index="'/'+item.home" v-for="item,index in dizhi" :key="index">{{item.name}}</el-menu-item>
    </el-menu>
  </el-aside>
        <el-main>
          <router-view/>
        </el-main>
  <el-container>
    
  </el-container>
</el-container>
        
    </div>
</template>

<script>
export default {
    name: 'P6Welcome',

    data() {
        return {
            cebianlist:[],
            dizhi:[{home:'homepage',name:'首页'},{home:'users',name:'会员管理'},{home:'supplier',name:'供应商管理'},{home:'shop',name:'商品管理'},{home:'staff',name:'员工管理'},]
        };
    },

    created() {
        this.$axios.get('https://www.liulongbin.top:8888/api/private/v1/menus').then(res=>{
            console.log(res);
            this.cebianlist=res.data.data
        })
    },

    methods: {
        inout() {
      this.$confirm("此操作退出登录, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "退出成功!",
            });
            window.sessionStorage.clear();
            this.$router.push('/')
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消退出",
          });
        });
    },
    },
};
</script>

<style>
.herer{
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
}
</style>