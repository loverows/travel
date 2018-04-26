<template>
    <div class="header">
      <div class="header-left">
        <div class="iconfont back-icon">&#xe624;</div>
      </div>
      <div class="header-input">
        <span class="iconfont">&#xe632;</span>
        输入城市/景点/游玩主题
      </div>
      <div class="header-right">
        <router-link tag="div" to="/city">
          {{city}}
          <span class="iconfont">&#xe6aa;</span>
        </router-link>
      </div>
    </div>
</template>

<script>
    import { mapState, mapGetters } from 'vuex'
    export default {
      name: "homeHeader",
      computed:{
        ...mapState(['city']),
        ...mapGetters(['doubleCity'])

      }
    }
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .header
    display:flex
    line-height: $headerHeight
    background: $bgColor
    color:#fff;
    .header-left
      width:.64rem
      float:left
      .back-icon
        text-align:center;
        font-size:.4rem
    .header-input
      flex:1
      background:#fff;
      height:.64rem
      line-height .64rem
      margin:.12rem 0 0 .2rem
      border-radius .1rem
      color:#ccc
      padding-left:.2rem
    .header-right
      min-width: 1.04rem
      padding 0 .1rem
      float:right
      text-align:center;
      span
        margin-left:-.04rem
</style>
