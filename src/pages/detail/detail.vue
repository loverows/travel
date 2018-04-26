<template>
  <div>
    <detail-banner :title="sightName" :bannerImg="bannerImg"></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
    import detailBanner from './components/banner'
    import detailHeader from './components/header'
    import detailList from './components/list'
    import axios from 'axios'
    export default {
        name: "detail",
        components:{
          detailBanner,
          detailHeader,
          detailList
        },
        data(){
          return {
            lastId:'',
            sightName:'',
            bannerImg:'',
            list:[
              {
                title:'学生票',
                children: [
                  {
                    title:'学生三馆联票'
                  },
                  {
                    title:'学生五馆联票',
                    children:[{
                      title:'--某某某连锁店'
                    }]
                  }
                ]
              },
              {
                title:'成人票'
              },
              {
                title:'老人票'
              },
              {
                title:'特惠票'
              }
            ]
          }
        },
        methods:{
          async getDetailInfo(){
              this.lastId = this.$route.params.id
              let { data } = await axios.get('/api/detail.json',{
                params:{
                  id: this.$route.params.id
                }
              })
              if( data.ret && data.data){
                let res = data.data
                this.sightName = res.sightName
                this.bannerImg = res.gallaryImgs
              }
          }
        },
        activated(){
          if(this.lastId !== this.$route.params.id){
            this.getDetailInfo()
          }
        },
        mounted(){
          this.getDetailInfo()
        }
    }
</script>

<style lang="stylus" scoped>
  .content
    height 50rem
</style>
