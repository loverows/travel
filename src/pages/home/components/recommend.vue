<template>
    <div>
      <div class="title">热销推荐</div>
      <ul>
        <router-link
          tag="li"
          class="item border-bottom"
          v-for="item of list"
          :key="item.id"
          :to="'/detail/' + item.id"
        >
          <img class="item-img" :src="item.imgUrl"/>
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
            <button class="item-button">查看详情</button>
          </div>
        </router-link>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "recommend",
        props:['list']
    }
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  .title
    margin-top:.2rem
    background:#eee
    text-indent .2rem
    line-height .6rem
  .item
    display: flex
    oveflow:hidden
    height: 1.9rem
    .item-img
      height:1.7rem
      padding:.1rem
      width:1.7rem
    .item-info
      flex :1
      min-width:0
      padding:.1rem
      .item-title
        font-size:.32rem
        line-height .54rem
        eleipsis()
      .item-desc
        color:#ccc;
        line-height .4rem
        eleipsis()
      .item-button
        margin-top:.16rem
        line-height .44rem
        color:#fff
        padding:0 .1rem
        border-radius:.06rem
        background:#ff9300
</style>
