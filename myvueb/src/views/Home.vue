<template>
  <div>
    <h1 class="toubu">
      <p>
        <i class="el-icon-s-fold"></i>
        后台管理项目
      </p>
      <span>
        <i class="el-icon-rank"></i>
        全屏
      </span>
      <img src="../assets/logo.png" alt="">
    </h1>
    <el-container style="height: 850px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu default-active="2" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff"
          active-text-color="#ffd04b" router @select="gotabbers">
          <el-menu-item :index="item.path" v-for="item in asidelist" :key="item.id">
            <i :class="item.eicon"></i>
            <span slot="title">{{item.name}}</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { mapState,mapGetters } from 'vuex';
export default {
  name: 'HomeView',
  data() {
    return {
      
      asidelist:[
        { 
          id:1,
          path:'/users',
          name:'用户管理',
          eicon:'el-icon-menu'
        },
        { 
          id:2,
          path:'/tabbers',
          name:'标签页',
          eicon:'el-icon-setting'
        },
        { 
          id:3,
          path:'/gjhua',
          name:'国际化',
          eicon:'el-icon-menu'
        }
      ]
    };
  },
  methods: {
    gotabbers(val){
      this.asidelist.forEach(item=>{
        if(item.path==val){
          this.$store.commit('Homes/addasidelist',item)
        }
      })
    //  this.dynamicTags=this.homelist.list
    },
  },
}
</script>
<style scoped>
.toubu {
  height: 80px;
  display: flex;
  position: relative;
  line-height: 80px;
  justify-content: space-between;
  padding: 0 30px;
  text-align: right;
  padding-right: 200px;
  background-color: grey;
  color: #fff;
}

.toubu img {
  margin-top: 20px;
}

.el-menu-vertical-demo {
  height: 100%;
}

img {
  width: 40px;
  position: absolute;
  right: 50px;
}

img:hover {
  width: 120px;
}

.el-icon-rank {
  transform: rotate(45deg);
}
</style>