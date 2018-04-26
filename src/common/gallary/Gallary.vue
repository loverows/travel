<template>
  <div class="container" @click="closeGallary">
    <div class="wrapper">
      <swiper :options="swiperOption" >
        <!-- slides -->
        <swiper-slide
          v-for="(item,index) in imgs"
          :key="index"

        >
          <img class="gallary-img" :src="item" />
        </swiper-slide>

        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
    export default {
        name: "commonGallary",
        props:['imgs'],
        data(){
          return {
            swiperOption:{
              pagination: '.swiper-pagination',
              paginationType: 'fraction',
              observeParents: true,
              observer: true
            }
          }
        },
        methods:{
          closeGallary(){
            this.$emit('close')
          }
        }
    }
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow inherit
  .container
    display flex
    flex-direction column
    justify-content center
    position fixed
    z-index 99
    background #000
    right 0
    top 0
    bottom 0
    left 0
    .wrapper
      width 100%
      height 0
      /*overflow hidden*/
      padding-bottom 100%
      .gallary-img
        width 100%
      .swiper-pagination
        color #fff
        bottom -1rem
</style>
