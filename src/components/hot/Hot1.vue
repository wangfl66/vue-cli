<template>
<div id="hot">
  <header>
    <div class="input">
      <input type="text" v-model='search'/>
    </div>
    <div class="btn">
      <p @click="searchData">搜索</p>
    </div>
  </header>
  <div class="hot" ref="hot_each" style="display: none">
    <div class="hot_h" v-for="(hot,index) in newsData">
      <router-link :to="{name:'hotd',params:{index:index,hot:hot}}">
        <div class="l">
          <img :src="hot.images.medium"/>
        </div>
        <div class="r">
          <h3>《{{hot.title}}》</h3>
          <p>主演：<span v-for="cast in hot.casts">{{cast.name}}、</span></p>
          <p>类型：<span v-for="genre in hot.genres">{{genre}}、</span></p>
          <i class="p">评分: <span>{{hot.rating.average}}</span></i>
        </div>
      </router-link>
    </div>
    <div class="bodyh">
      <router-view></router-view>
    </div>
  </div>
  <!--搜索end-->
  <div class="hot" ref="hot_h">
    <div class="hot_h" v-for="(hot,index) in hots">
      <router-link :to="{name:'hotd',params:{index:index,hot:hot}}">
        <div class="l">
          <img :src="hot.images.medium"/>
        </div>
        <div class="r">
          <h3>《{{hot.title}}》</h3>
          <p>主演：<span v-for="cast in hot.casts">{{cast.name}}、</span></p>
          <p>类型：<span v-for="genre in hot.genres">{{genre}}、</span></p>
          <i class="p">评分: <span>{{hot.rating.average}}</span></i>
        </div>
      </router-link>
    </div>
    <div class="bodyh">
      <router-view></router-view>
    </div>
  </div>
</div>
</template>

<script>
  import axios from 'axios'
  export default{
    name:'hot',
    created(){
      let that=this;
      axios({
        method:'get',
        url:'static/data/movie_in_theaters.json'
      }).then(function (res){
        console.log(res);
        that.hots = res.data.subjects;
        that.newsData = that.hots;
//        console.log(that.hots);
      });
    },
    data(){
      return {
        search: '',
        hots:[],
        newsData: []
      }
    },
    methods: {
      searchData () {
        let hot_h = this.$refs["hot_h"].style.display="none";
        let hot_each = this.$refs["hot_each"].style.display="block";
        /*console.log(hot_h);
        console.log(hot_each);*/
        console.log(this.search);
        let search = this.search;
        console.log(search);
        if (search) {
          this.newsData = this.hots.filter(function(product) {
            console.log(product);
            let b = product.title.indexOf(search);
            console.log(b);
            if(b >= 0){
              return true;
            }
            return false;

            /*return Object.keys(product).some(function(key) {
              console.log("<hr/>");
              console.log(key);
//              console.log(key);
              return String(product[key]).toLowerCase().indexOf(search) > -1
//              console.log(key);
            })*/
          })
          console.log(this.newsData);
        }else{
          this.newsData = this.hots;
        }
      }
    }

  }
</script>

<style>
  #hot{
    width:100%;
    max-width: 7.5rem;
    height: auto;
    margin: auto;
    background: white;
    /*background: greenyellow;*/
  }
.hot{
  width:100%;
  max-width: 7.5rem;
  height: auto;
  margin: auto;
  background: white;
  /*background: greenyellow;*/
}
#hot header{
  width: 100%;
  height: 1.46rem;
  /*background: red;*/
}
  #hot header div{
  float: left;
  height: 1.46rem;
}
  #hot header .input{
  width: 4.76rem;
  /*background: yellow;*/
}
  #hot header .input input{
  width: 3.5rem;
  height: 1rem;
  border: none;
  margin: 0.23rem 0.38rem;
  border-radius: 1rem;
  padding-left: 0.5rem;
  font-size: 0.4rem;
  color: #C8E0F0;
  background: #CCCCCC;
}
  #hot header .btn{
  width: 2.74rem;
  /*background: yellowgreen;*/
}
  #hot header .btn p{
  width: 2.74rem;
  height: 1.46rem;
  font-size: 0.6rem;
  font-weight: bold;
  color: black;
  text-align: center;
  line-height: 1.46rem;
}
  .hot .hot_h{
    width:100%;
    max-width: 7.5rem;
    height: 3rem;
    margin: auto;
    z-index: 777;
    position: relative;
    /*background: yellow;*/
  }
.hot>.hot_h+ .hot_h{
  margin-top: 0.3rem;
}
.hot .hot_h a{
  text-decoration: none;
  color: black;
}
.hot .hot_h a div{
  float: left;
}
.hot .hot_h a .l{
  width: 2rem;
  height:2rem;
  margin: 0.3rem 0rem;
  border:0.2rem solid #c2c2c2;
  overflow: hidden;
}
.hot .hot_h a .l img{
  width:100%;
  height: 100%;
}
.hot .hot_h a .r{
  width: 4.05rem;
  height: 2.3rem;
  margin: 0.3rem 0rem;
  padding-left: 0.3rem;
  padding-top: 0.1rem;
  position: relative;
  /*background: darkmagenta;*/
}
.hot .hot_h a .r h3{
  /*background: gold;*/
  width: 2rem;
  height: 0.66rem;
  font-size: 0.4rem;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}
.hot .hot_h a .r p{
  width:4rem;
  height: 0.66rem;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  font-size: 0.36rem;
  line-height: 0.66rem;

}
.hot .hot_h a .r .p{
  position: absolute;
  top: 0.16rem;
  right: 0.5rem;
  color: red;
}
.hot .bodyh{
  width: 100%;
  max-width: 7.5rem;
  margin: auto;
  height: 100%;
  position: absolute;
  top: 0rem;
}
</style>
