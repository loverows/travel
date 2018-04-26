<template>
    <div>
      <city-header></city-header>
      <city-search :cities="cityList" ></city-search>
      <city-list :letter="letter" :hotCityList="hotCityList" :cityList="cityList" ></city-list>
      <city-alphabet @change="handleChange" :cityList="cityList"></city-alphabet>
    </div>
</template>

<script>
    import cityHeader from './components/header'
    import citySearch from './components/search'
    import cityList from './components/list'
    import cityAlphabet from './components/alphabet'
    import axios from 'axios'
    export default {
        name: "city",
        components: {
          cityHeader,
          citySearch,
          cityList,
          cityAlphabet
        },
        data(){
          return {
            hotCityList:[],
            cityList:{},
            letter:''
          }
        },
        methods:{
          async getCityList(){
            let {data} = await axios.get('/api/city.json')
            if(data.ret && data.data)
            this.hotCityList = data.data.hotCities
            this.cityList = data.data.cities
          },
          handleChange(letter){
            this.letter = letter;
          }
        },
        mounted(){
          this.getCityList()
        }
    }
</script>

<style lang="stylus" scoped>

</style>
