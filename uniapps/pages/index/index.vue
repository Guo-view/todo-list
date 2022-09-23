<template>
  <view class="content">
    <view class="header" :style="{'background-image': `linear-gradient(${backgrounds} 50%, #F8F9FB)`}">
      <input class="headipt" type="text" placeholder="请输入文本" />
      <view class="swipe">
        <swiper class="swiper" @change="chenge" circular :indicator-dots="indicatorDots" :autoplay="autoplay"
          :interval="interval" :duration="duration">
          <swiper-item v-for="item,index in swipelist.arr" :key="index">
            <img :src="item.url" alt="">
          </swiper-item>
        </swiper>
      </view>
    </view>
    <ul class='listsa'>
      <li v-for='item in datalists.arr' :key="item.id">{{item.name}}</li>
      <li>全部分类</li>
    </ul>

    <view class="hots">
      <view class="hotstitle">
        <view class="titles">
          热门推荐<view class="hoticon">
            HOT
          </view>
        </view>
       <view class="gengd">
          全部 >
       </view>
      </view>
      <swiper class="swiper" circular :interval="interval" :duration="duration">
        <swiper-item>
          <swiper-hots :msg='msg.arra'></swiper-hots>
        </swiper-item>
        <swiper-item>
          <swiper-hots :msg='msg.arrb'></swiper-hots>
        </swiper-item>
      </swiper>
    </view>
    <view class="futrue">
      <view class="hotstitle">
        <view class="titles">
          近期上新<view class="hoticon">
            NEW
          </view>
        </view>
       <view class="gengd">
          全部 >
       </view>
      </view>
      <view class="futruecontext">
        <news :msg='msg.arrn'></news>
      </view>
    </view>
    <view class="hots">
      <view class="hotstitle">
        <view class="titles">
          免费精选<view class="hoticon">
            FREE
          </view>
        </view>
       <view class="gengd">
          全部 >
       </view>
      </view>
      <swiper class="swiper" circular :interval="interval" :duration="duration">
        <swiper-item>
          <swiper-hots :msg='msg.arra'></swiper-hots>
        </swiper-item>
        <swiper-item>
          <swiper-hots :msg='msg.arrb'></swiper-hots>
        </swiper-item>
      </swiper>
    </view>
    <view class="hots">
      <view class="hotstitle">
        <view class="titles">
          付费精品<view class="hoticon">
            NICE
          </view>
        </view>
       <view class="gengd">
          全部 >
       </view>
      </view>
      <pay :msg='msg.arrn'></pay>
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
    getlist,
    datalist
  } from '../../api/api.js'
  console.log(reactive);
  let indicatorDots = ref(true)
  let autoplay = ref(true)
  let interval = ref(4000)
  let duration = ref(500)
  let backgrounds = ref('#45328C')
  let datahot=reactive({arr:[]})
  let msg=reactive({arra:[],arrb:[],arrn:[]})
  const hot = reactive({
    sort: "hot", 
    current: 1, 
    size: 8
  })
  const future=reactive({
    sort: "new",
    current: 1, 
    size: 10
  })
  const datalists = reactive({
    arr: []
  })
  const swipelist = reactive({
    arr: [{
        url: 'http://m.mengxuegu.com/static/images/banner1.jpg',
        background: '#45328C'
      },
      {
        url: 'http://m.mengxuegu.com/static/images/banner2.jpg',
        background: '#006C00'
      },
      {
        url: 'http://m.mengxuegu.com/static/images/banner3.jpg',
        background: '#0072B7'
      }
    ]
  })
  let getlists = async () => {
    await getlist().then((res) => {
      res.data.length = 7
      datalists.arr = res.data
      console.log(res.data);
    })
  }
  let datalistsa = async () => {
    await datalist(hot).then((res) => {
      datahot.arr=res.data.records
      msg.arra=datahot.arr.slice(0,5)
      msg.arrb=datahot.arr.slice(5,10)
      console.log(datahot.arr);
      console.log(msg);
    })
  }
  let datalistsb = async () => {
    await datalist(future).then((res) => {
      console.log(res);
      msg.arrn=res.data.records
    })
  }
  let chenge = (data) => {
    backgrounds.value = swipelist.arr[data.detail.current].background
  }
  onMounted(() => {
    getlists();
    datalistsa();
    datalistsb()
  })
</script>

<style>
  * {
    list-style: none;
  }
  .hots{
    width: 100%;
  }
  .futrue{
    width: 345px;
    height: 215px;
  }
  .futruecontext{
    width: 100%;
    height: 50px;
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 55px;
  }

  .logo {
    height: 200rpx;
    width: 200rpx;
    margin-top: 200rpx;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50rpx;
  }

  .listsa {
    margin-top: 15px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding-left: 0;
  }

  li {
    width: 22%;
    height: 30px;
    background-color: #faf9fa;
    font-size: 14px;
    text-align: center;
    line-height: 30px;
    border-radius: 7px;
    margin: 4px;
  }

  .text-area {
    display: flex;
    justify-content: center;
  }

  .title {
    font-size: 36rpx;
    color: #8f8f94;
  }

  .header {
    width: 100%;
    height: 235px;
  }

  .headipt {
    width: 365px;
    height: 30px;
    background-color: #fff;
    text-align: center;
    margin: 5px;
    border-radius: 10px;
  }

  .swipe {
    margin-top: 30px;
    padding: 0 15px;
  }

  .swipe img {
    width: 345px;
    height: 190px;
  }
  .hotstitle{
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  .titles{
    width: 150px;
    display: flex;
    margin: 0 10px;
  }
  .hots .swiper{
    height: 500px;
  }
  .hoticon{
    width: 35px;
    height: 18px;
    font-size: 14px;
    color: #fff;
    background-color: red;
    border-radius: 9px 9px 9px 0;
    margin-left: 10px;
  }
  .gengd{
    color: #aaa;
  }
</style>
