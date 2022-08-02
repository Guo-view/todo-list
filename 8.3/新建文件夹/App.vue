<template>
    <div id="app">
      <!-- <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </nav>
      <router-view/> -->
      <!-- <h1 v-show="persion.name">姓名: {{ persion.name }}</h1>
      <h1 v-if="persion.sex">性别: {{ persion.sex }}</h1>
      <h1 v-show="persion.age">年龄: {{ persion.age }}</h1>
      <h1>爱好: {{ persion.hobby }}</h1>
      <button @click="updateObj">修改姓名和爱好第一个</button>
      <button @click="addJobinfo">添加年龄</button>
      <button @click="deleteJobInfo">删除姓名</button> -->
      {{yiname}} <input type="text" v-model="yiname">
      {{twoname}} <input type="text" v-model="twoname">
       <input type="text" v-model="everyname">
    </div>
  </template>
  
  <script>
  import { get } from "http";
import Vue from "vue";
  export default {
    data() {
      return {
        persion: {
          name: "张三",
          sex: "男",
          hobby: ["抽烟", "喝酒", "烫头"],
        },
        yiname:'永',
        twoname:'恩'
      };
    },
    watch: {
      persion: {
        handler: function (newInfo, oldInfo) {
          console.log(
            "newValue:",
            newInfo,
            "oldValue:",
            oldInfo
          );
        },
        deep: true,
        // 深度侦听（可以监听到当前监听对象 内部数据的改变）
         immediate: true
        // 立即执行（如果开启立即执行，那么会在页面刚开始加载的时候先执行一次）
      },
  
      "persion.name": function (newInfo, oldInfo) {
        console.log(newInfo, oldInfo,'我是监听名字改变');
        //我们也可以监听对象中的某一个属性
      },
    },
    computed:{
        everyname:{
          get(){
            return this.yiname +'_'+ this.twoname 
          },
          set(value){
            let arr=value.split('_')
            this.yiname=arr[0]
            this.twoname=arr[1]
          }
        }
    },
    methods: {
      /**
       * 我要进行更改职位和年薪
       */
      updateObj() {
        this.persion.name = "打豆豆";
        this.persion.hobby[1] = "我爱打豆豆";
      },
  
      /**添加年龄 */
      addJobinfo() {
        //this.persion.age = 30
        this.$set(this.persion, "age", 20);
      },
      /**删除姓名 */
      deleteJobInfo() {
        //delete this.persion.name
        this.$delete(this.persion, "name");
      },
    },
  };
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  
  </style>