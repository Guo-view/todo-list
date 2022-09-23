<template>
  <view class="newsbox">
    <scroll-view class="scroll-view_H" scroll-x="true">
      <view class="dataitem scroll-view-item_H" v-for="item in msg" :key="item.id">
        <view class="imgbox">
          <img :src="item.mainImage
      " alt="">
        </view>
        <view class="textbox">
          <view class="titles">
            {{item.title}}
          </view>
          <view class="techer">
            {{item.nickName}}
          </view>
          <view class="pricebox">
            <view class="price">
              {{item.priceOriginal}}
            </view>
            <view class="totals">
              {{item.commTotal}}人在学
            </view>
          </view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
  export default {
    name: 'News',
    props: ['msg'],
    setup(props, context) {

    }
  }
</script>

<style>
  .scroll-view_H {
    white-space: nowrap;
    width: 100%;
  }

  .scroll-view-item_H {
    display: inline-block;
    width: 50%;
    height: 340rpx;
    text-align: center;
    font-size: 15px;
    overflow: hidden;
  }
  .imgbox img {
    width: 145px;
    height: 80px;
  }
</style>
