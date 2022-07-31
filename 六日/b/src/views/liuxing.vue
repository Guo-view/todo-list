<template>
  <div>
    <div class="liuxing-warpper">
      <input type="text" v-model="shurukuang"/>
      <div class="button-box">
        <button @click="tianjia()">添加</button>
        <button @click="xiugai()" :disabled="queren" :style="color='#ccc'">删除</button>
      </div>
      <div class="queren-box" v-show="queren" >
        <p>是否清除数据？</p>
        <div class="button-twobox">
            <button @click="qingchus()">确定</button>
            <button @click="quxiao()">取消</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VuecliLiuxing",

  data() {
    return {
        queren:false,
        shurukuang:''
    };
  },

  mounted() {},

  methods: {
    xiugai(){
        this.queren=true
    },
    quxiao(){
        this.queren=false
    },
    qingchus(){
        this.shurukuang=''
        this.queren=false
    },
    tianjia(){
        this.$store.commit('addliuxing',this.shurukuang)
    }
  },
};
</script>

<style lang="scss" scoped>
.queren-box{
    margin-top: 100px;
    border: 1px solid #000;
}
</style>