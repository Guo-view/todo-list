<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/> -->
  <div>
    <h1>vue3简单语法</h1>
    <p>{{name}}</p>
    <p>{{pps}}</p>
    <button @click="getpp">信息</button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { ref } from 'vue'
export default defineComponent({
  data(){
    return {
      name:'小智',
      age:18
    }
  },
  created(){
    // steup调用优先于created生命周期函数
    console.log('woshicreated生命周期');
    
  },
  setup() {
    console.log('我是Steup方法函数调用');
    
    let name=ref('我是谁？')
    let pps='皮卡丘'
    const getpp=()=>{
      alert(`我是${name}主人是${pps}`)
    }
    return {
      name,
      pps,
      getpp
    }
  },
})
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style> -->
