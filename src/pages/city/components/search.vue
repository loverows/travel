<template>
    <div>
      <div class="search">
        <input type="text" v-model="keyword" placeholder="输入城市名或拼音" class="search-input" />
      </div>
      <div
        v-show="keyword"
        class="search-content"
        ref="search">
        <ul>
          <li class="search-item border-bottom"
              v-for="item of list"
              :key="item.id"
              @click="handleCityClick(item.name)"
          >
            {{item.name}}
          </li>
          <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
        </ul>
      </div>
    </div>
</template>

<script>
    import Bscroll from 'better-scroll'
    import { mapMutations } from 'vuex'
    export default {
        name: "citySearch",
        props:['cities'],
        data(){
          return {
            keyword:'',
            list:[],
            timer: null
          }
        },
        computed:{
            hasNoData(){
              return !this.list.length
            }
        },
        watch:{
          keyword (){
            if(this.timer){
              clearTimeout(this.timer)
            }
            if(!this.keyword){
              this.list = []
              return
            }
            this.timer = setTimeout(() =>{
              const result = []
              for (let i in this.cities){
                this.cities[i].forEach((value) =>{
                  if(value.spell.indexOf(this.keyword) > -1 ||
                      value.name.indexOf(this.keyword) > -1
                  ){
                    result.push(value)
                  }
                })
              }
              this.list = result;
            },100)
          }
        },
        methods:{
          handleCityClick(city){
            this.changeCity(city)
            this.$router.push('/')
          },
          ...mapMutations(['changeCity'])
        },
        mounted(){
          this.scroll = new Bscroll(this.$refs.search);
        }
    }
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .search
    padding: 0 .1rem
    height: .72rem
    background: $bgColor
    .search-input
      box-sizing border-box
      width: 100%
      text-align: center
      border-radius: .06rem
      line-height: .62rem
      height: .62rem
      padding:0 .1rem
      color:#666
  .search-content
    position absolute
    overflow hidden
    left 0
    right 0
    z-index 1
    top 1.58rem
    bottom 0
    background #eee
    .search-item
      line-height .62rem
      padding-left .2rem
      background #fff
      color #666
</style>
