<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg" />
      <div class="banner-info">
        <div class="banner-title">{{title}}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe692;</span>
          {{imgNumber}}
        </div>
      </div>
    </div>
    <fade-animation>
      <common-gallary @close="closeGallary" :imgs="bannerImg" v-show="showGallary"></common-gallary>
    </fade-animation>
  </div>
</template>

<script>
    import commonGallary from 'common/gallary/Gallary'
    import fadeAnimation from 'common/fade/fade'
    export default {
        name: "banner",
        props:['title','bannerImg'],
        computed:{
          imgNumber(){
            return this.bannerImg.length
          }
        },
        data(){
          return {
            showGallary: false,
            imgs:[
              'http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_r_800x800_56e729ef.png',
              'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_r_800x800_e9c1d2be.jpg'
            ]
          }
        },
        methods:{
          handleBannerClick(){
            this.showGallary = !this.showGallary
          },
          closeGallary(){
            this.showGallary = !this.showGallary
          }
        },
        components:{
          commonGallary,
          fadeAnimation
        }
    }
</script>

<style lang="stylus" scoped>
  .banner
    height 0
    padding-bottom 55%
    overflow hidden
    position relative
    .banner-img
      width 100%
    .banner-info
      display flex
      position absolute
      right 0
      bottom 0
      line-height .6rem
      left 0
      background-image linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,.8))
      color #fff
      .banner-title
        font-size .32rem
        padding 0 .2rem
        flex 1
      .banner-number
        line-height .4rem
        height .32rem
        font-size .24rem
        border-radius .2rem
        background rgba(0,0,0,.8)
        margin-top .14rem
        padding 0 .4rem
        .banner-icon
          font-size .24rem

</style>
