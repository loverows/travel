<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide
        v-for="item of pages"
        :key="item.id"
      >
        <div class="icon"
             v-for="con of item"
             :key="con.id"
        >
          <div class="icon-img">
            <img class="icon-img-content" :src="con.imgUrl" />
          </div>
          <p class="icon-desc">{{con.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>

    export default {
      components: {},
      name: "icons",
      props:['list'],
      data(){
        return {
          swiperOption:{
            autoplay:false
          }
        }
      },
      computed:{
        pages (){
          const pages = []
          this.list.forEach((item,index) => {
            const page = Math.floor(index / 8)
            if(!pages[page]){
              pages[page] = []
            }
            pages[page].push(item)
          })
          return pages
        }
      }
    }
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  @import "~styles/mixins.styl"
  .icons >>> .swiper-container
    height:0
    padding-bottom:50%
  .icons
    margin-top:.1rem
    .icon
      position:relative
      overflow:hidden
      height:0
      padding-bottom: 25%
      width: 25%
      float:left
      .icon-img
        top:0
        left:0
        right:0
        bottom:.44rem
        box-sizing: border-box
        padding:.1rem
        position:absolute
        .icon-img-content
          display: block
          margin:0 auto
          height:100%
      .icon-desc
        position:absolute
        left:0
        right:0
        line-height .44rem
        height:.44rem
        color:$darkTextColor
        text-align: center
        bottom:0
        eleipsis()
</style>
