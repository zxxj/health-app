<template>
  <view>
    <!-- 轮播图 -->
    <div class="swiper-container">
      <up-swiper :list="list3" indicator indicatorMode="line" circular></up-swiper>
    </div>
  </view>
</template>

<script setup>
  import {
    ref
  } from 'vue';

  // 使用 ref 创建响应式引用  
  const list3 = ref([
    'https://cdn.uviewui.com/uview/swiper/swiper3.png',
    'https://cdn.uviewui.com/uview/swiper/swiper2.png',
    'https://cdn.uviewui.com/uview/swiper/swiper1.png',
  ]);
</script>

<style lang="scss">

</style>