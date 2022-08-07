  <template>
  <el-container class="layout-container-demo" style="height: 100%">
    <el-aside width="200px">
      <el-scrollbar>
        <el-menu router>
          <el-menu-item index="heads">首页</el-menu-item>
          <el-menu-item index="users">会员管理</el-menu-item>
          <el-menu-item index="supplier">供应商管理</el-menu-item>
          <el-menu-item index="goods">商品管理</el-menu-item>
          <el-menu-item index="staff">员工管理</el-menu-item>
        </el-menu>
      </el-scrollbar>
    </el-aside>
    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <h1>梦学谷会员管理系统</h1>
        <div class="toolbar">
          <el-dropdown>
            <el-icon style="margin-right: 8px; margin-top: 1px">
              <setting />
            </el-icon>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>修改密码</el-dropdown-item>
                <el-dropdown-item>退出系统</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <span>郭俊</span>
        </div>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue'
</script>

<style scoped>
.layout-container-demo .el-header {
  position: relative;
  background-color: #15171a;
  color: var(--el-text-color-primary);
}

.layout-container-demo .el-aside {
  width: 200px;
  height: 860px;
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
  background-color: #434446;
  position: absolute;
  top: 70px;
}

.layout-container-demo .el-menu {
  border-right: none;
}

.layout-container-demo .el-main {
  padding: 0;
  margin-left: 200px;
}

.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
::v-deep.is-active{
  background-color: #c6e2ff;
  color:black
}
.el-header{
  display: flex;
  justify-content: space-between;
}
.el-header h1{
  font-size:22px;
  color: #fff;
}
.toolbar{
  color: #fff;
}
</style>
