<template>
  <view class="cate">
    <view class="header">
      <view class="">

      </view>
      <view class="title">
        分类
      </view>
      <view class="search">
        <icon type="search" size="18" />
      </view>
    </view>
    <view class="content">
      <view class="aside">
        <ul>
          <li v-for="item in data.asidelist" :key="item.id" @click='getidx(item.id)'>{{item.name}}</li>
        </ul>
      </view>
      <view class="textcont">
        <view class="texbox" v-for="item in data.listarr" :key="item.id">
          {{item.name}}
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
  import {
    ref,
    reactive,
    onMounted
  } from 'vue'
  import {
    getaside
  } from '../../api/api.js'
  const data = reactive({
    asidelist: [],
    listarr:[]
  })
  let getasides = async () => {
    await getaside().then((res) => {
      console.log(res);
      data.asidelist=res.data
      data.listarr=res.data[0].labelList
    })
  }
  const getidx=(id)=>{
    data.listarr=data.asidelist[id-1].labelList
    console.log(data.listarr);
  }
  onMounted(() => {
    getasides()
  })
</script>

<style>
  * {
    list-style: none;
  }
  .cate{
    width: 100%;
    height: 600px;
  }
  .header {
    box-sizing: border-box;
    width: 100%;
    height: 45px;
    line-height: 45px;
    color: aliceblue;
    background-color: rgb(52, 93, 194);
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
  }
  .content{
    width: 100%;
    height: 100%;
    display: flex;
  }
  .aside{
    width: 100px;
    height: 100%;
    background-color: #ccc;
    color: #555;
  }
  ul{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 0;
    align-items: center;
    padding-top: 20px;
  }
  li{
    height: 50px;
  }
  .search icon {
    color: aliceblue;
  }
  .textcont{
    flex: 1;
    height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: start;
    flex-wrap: wrap;
  }
  .texbox{
    width: 30%;
    height: 40px;
    line-height: 40px;
    border-radius: 20px;
    text-align: center;
    margin-top: 20px;
    border: 1px solid #ccc;
    overflow: hidden;
  }
</style>
