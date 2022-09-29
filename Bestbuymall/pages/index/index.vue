<template>
	<view class="content">
    <view class="btn-top">
      <u-button class='button'>搜索</u-button>
    </view>
    <!-- 轮播图 -->
   <view class="wrap">
   		<u-swiper :list="list"></u-swiper>
   	</view>
	</view>
</template>

<script lang="ts" setup>
  const list=[{
						image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
						title: '身无彩凤双飞翼，心有灵犀一点通'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
						title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
					}
				]
</script>

<style lang="scss">
  .wrap {
  		padding: 40rpx;
  	}
  .btn-top{
    width: 100%;
    height: 100rpx;
    padding: 10rpx;
    background-color: #eb4450;
    .button{
      height: 70rpx;
    }
  }
</style>
