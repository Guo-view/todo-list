<template>
  <view class="databox">
    <view class="dataitem" v-for="item in msg" :key="item.id">
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
  </view>
</template>

<script>
    export default {
      name: 'SwiperHots',
      props:['msg'],
      setup(props,context) {
        
      }
    }
</script>

<style lang="scss">
.imgbox img{
  width: 145px;
  height: 80px;
}
.dataitem{
  display: flex;
  margin: 10px;
}
.textbox{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.pricebox{
    display: flex;
    justify-content: space-between;
  }
</style>
