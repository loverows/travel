<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-week-end :list="weekendList"></home-week-end>
  </div>
</template>

<script>
    import homeHeader from './components/header'
    import homeSwiper from './components/swiper'
    import homeIcons from './components/Icons'
    import homeRecommend from './components/recommend'
    import homeWeekEnd from './components/weekend'
    import axios from 'axios'
    import { mapState } from 'vuex'
    export default {
        name: "home",
        components:{
          homeHeader,
          homeSwiper,
          homeIcons,
          homeRecommend,
          homeWeekEnd
        },
        data(){
          return {
            lastCity: '',
            swiperList:[],
            iconList:[],
            recommendList:[],
            weekendList:[]
          }
        },
        computed:{
          ...mapState(['city'])
        },
        methods:{
          async getHomeInfo(){
            let {data} = await axios.get('/api/index.json?city='+ this.city)
            if(data.ret && data.data){
              this.swiperList = data.data.swiperList;
              this.iconList = data.data.iconList;
              this.recommendList = data.data.recommendList;
              this.weekendList = data.data.weekendList;
            }
          }
        },
        mounted(){
          this.getHomeInfo()
          this.lastCity = this.city
        },
        activated(){ // 使用 keepalive 之后 每次进入组件都会执行
          if( this.lastCity !== this.city){
            this.lastCity = this.city
            this.getHomeInfo()
          }
        }
    }
</script>

<style scoped>

</style>
