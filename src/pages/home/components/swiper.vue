<template>
  <div class="wrap">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
    export default {
        name: "HomeSwiper",
        props:['list'],
        data() {
          return {
            swiperOption: {
              pagination:'.swiper-pagination',
              loop: true,
              autoplay:3000
            }
          }
        },
        computed:{
          showSwiper(){
            return this.list.length
          }
        }
    }
</script>

<style lang="stylus" scoped>
    .wrap >>> .swiper-pagination-bullet-active
      background:#fff
    .wrap
      overflow:hidden
      width: 100%
      height: 0
      padding-bottom:31.25%
      background:#f4f4f4
      .swiper-img
        width:100%
</style>
