<template>
  <div>
    <div class="father-warpper">
    <router-view />
      <van-tabbar route class="tabbar">
        <van-tabbar-item replace to="/liuxing">流行</van-tabbar-item>
        <van-tabbar-item replace to="/rexiao">热销</van-tabbar-item>
        <van-tabbar-item replace to="/shangxin">上新</van-tabbar-item>
    </van-tabbar>
    
    </div>
  </div>
</template>

<script>
export default {
  name: "VuecliFather",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.tabbar {
  position: fixed;
  top: 0;
}
.father-warpper{
    padding-top: 50px;
}
</style>