<template>
  <view class="article">
    <view class="head">
      <view class="headers">
        <icon type="search" size="18" />
        <input class="headipt" type="text" placeholder="请输入文本" />
      </view>
      <scroll-view class="scroll-view_H" scroll-x="true" scroll-left="120">
        <view id="demo1" class="scroll-view-item_H">推荐</view>
        <view id="demo2" class="scroll-view-item_H" v-for="item in data.listarr" :key="item.id">
          {{item.name}}
        </view>
      </scroll-view>
    </view>
    <view class="contexts">
      <pay :msg='data.arrn'></pay>
    </view>
  </view>
</template>

<script setup>
  import {ref,reactive,onMounted} from 'vue'
  import {getaside,datalist} from '../../api/api.js'
  const data = reactive({
    listarr:[],
    arrn:[]
  })
   const future=reactive({
    sort: "new",
    current: 1, 
    size: 10
  })
  let getasides = async () => {
    await getaside().then((res) => {
      console.log(res);
      data.listarr=res.data
    })
  }
  let getlists=async()=>{
    await datalist(future).then((res) => {
      console.log(res);
      data.arrn=res.data.records
    })
  }
  onMounted(()=>{
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
  .head{
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
  .scroll-view-item_H {
  		display: inline-block;
  		width: 20%;
  		height: 60rpx;
  		line-height: 60rpx;
  		text-align: center;
  		font-size: 36rpx;
  	}
    .scroll-view_H {
        border-bottom: 1px solid #ccc;
    		white-space: nowrap;
    		width: 100%;
        background-color: #fff;
    	}
    scroll-view ::-webkit-scrollbar {
       display: none;
       width: 0;
       height: 0;
       color: transparent;
      }
      .contexts{
        margin-top: 80px;
      }
</style>
