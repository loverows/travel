<template>
  <div>
    <div class="title">周末去那儿</div>
    <ul>
      <li class="item" v-for="item of list" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl"/>
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "weekend",
    props:['list'],
  }
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  .title
    background:#eee
    text-indent .2rem
    line-height .6rem
  .item-img-wrapper
    overflow:hidden
    padding-bottom:37.09%
    height:0
    .item-img
      width:100%
  .item-info
    padding:.1rem
    .item-title
      font-size:.32rem
      line-height .54rem
      eleipsis()
    .item-desc
      color:#999;
      line-height .4rem
      eleipsis()
</style>
