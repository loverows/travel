<template>
    <div class="list" ref="wrapper">
      <div>
        <div class="area">
          <div class="title border-topbottom">当前城市</div>
          <div class="button-list">
            <div class="button-wrapper">
              <div class="button">{{currentCity}}</div>
            </div>
          </div>
        </div>
        <div class="area">
          <div class="title border-topbottom">热门城市</div>
          <div class="button-list">
            <div
              class="button-wrapper"
              v-for="item of hotCityList"
              :key="item.id"
              @click="handleCityClick(item.name)"
            >
              <div class="button">{{item.name}}</div>
            </div>
          </div>
        </div>
        <div class="area"
             v-for="(key,value) of cityList"
             :key="key.id"
             :ref="value"
        >
          <div class="title border-topbottom">{{value}}</div>
          <div class="item-list">
            <div class="item border-bottom"
                 v-for="option of key"
                 :key="option.id"
                 @click="handleCityClick(option.name)"
            >{{option.name}}</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    import Bscroll from 'better-scroll'
    import { mapState , mapMutations } from 'vuex'
    export default {
        name: "list",
        props:['hotCityList','cityList','letter'],
        watch:{
          letter(){
            if(this.letter){
              const element = this.$refs[this.letter][0];
              this.scroll.scrollToElement(element)
            }
          }
        },
        computed:{
          ...mapState({
            currentCity:'city'
          })
        },
        mounted(){
          this.scroll = new Bscroll(this.$refs.wrapper)
        },
        methods:{
          handleCityClick(city){
              // this.$store.commit('changeCity',city);
              this.changeCity(city)
              this.$router.push('/')
          },
          ...mapMutations(['changeCity'])
        }
    }
</script>

<style lang="stylus" scoped>
  .border-topbottom
    &:before
      border-color #ccc
    &:after
      border-color #ccc
  .border-bottom
    &:before
      border-color #ccc
  .list
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    .title
      line-height .54rem
      background #eee
      padding-left .2rem
      font-size .26rem
      color #666
    .button-list
      padding .1rem .6rem .1rem .1rem
      overflow hidden
      .button-wrapper
        float:left
        width:33.33%
        .button
          text-align center
          padding .1rem 0
          border-radius .06rem
          margin:.1rem
          border:.02rem solid #ccc
    .item-list
      .item
        padding-left .2rem
        line-height .76rem

</style>
