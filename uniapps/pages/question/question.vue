<template>
  <view class="article">
    <view class="head">
      <view class="headers">
        <icon type="search" size="18" />
        <input class="headipt" type="text" placeholder="请输入文本" />
      </view>
      <view class="asides">
        <view class="aside-item">热门回答</view>
        <view class="aside-item">最新问题</view>
        <view class="aside-item">等待回答</view>
      </view>
    </view>
    <view class="contexts">
      <quesdata></quesdata>
      {{types}}
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
    getaside,
    quesdatahot,
  } from '../../api/api.js'
  const data = reactive({
    listarr: [],
    arrn: [],
  })
  let types = ref('new')
  let getasides = async () => {
    await getaside().then((res) => {
      console.log(res);
      data.listarr = res.data
    })
  }
  let getlists = async () => {
    quesdatahot().then((res) => {
      console.log(res);
    })
  }
  onMounted(() => {
    getasides();
    getlists()
  })
</script>

<style>
  * {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .head {
    position: fixed;
    top: 0;
  }

  .headers {
    box-sizing: border-box;
    height: 40px;
    padding: 1px 20px;
    background-color: #45328C;
    position: relative;
  }

  .headers icon {
    position: absolute;
    left: 120px;
    top: 10px;
  }

  .headipt {
    width: 325px;
    height: 30px;
    background-color: #fff;
    text-align: center;
    margin: 5px;
    border-radius: 10px;
  }

  .aside-item {
    display: inline-block;
    width: 33%;
    height: 60rpx;
    line-height: 60rpx;
    text-align: center;
    font-size: 36rpx;
  }

  .asides {
    display: flex;
    width: 100%;
    border-bottom: 1px solid #ccc;
    background-color: #fff;
  }

  scroll-view ::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
    color: transparent;
  }

  .contexts {
    margin-top: 80px;
  }
</style>
