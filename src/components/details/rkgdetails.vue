<template>
  <div id="hotdetails">
    <div class="hotdetails">
      <div class="hotdetails_ds">
        <!--<div class="hotdetails_ds" v-for="(hot,index) in hots" v-show="index==$route.params.index">-->
        <header>
          <router-link to="/r">返回</router-link>
        </header>
        <div class="top">
          <div class="l">
            `   <img :src="$route.params.hot.images.medium"/>
          </div>
          <div class="r">
            <h3>《{{$route.params.hot.title}}》</h3>
            <div class="pingfen">
              <div ref="star_con" class="star-vote">
                <span ref="add_star" class="add-star"></span>
                <span ref="del_star" class="del-star"></span>
              </div>
              <i>评分:</i><i>{{$route.params.hot.rating.average}}</i>
            </div>
            <p class="p"><i>（评分人数）</i>：<span>{{$route.params.hot.collect_count}}</span></p>
            <p class="p">时间：<span>{{$route.params.hot.year}}</span></p>
            <p class="p">时长：<span>130</span>分</p>
            <p class="p">类型：<span v-for="tp in $route.params.hot.genres">{{tp}},</span></p>
          </div>
          <div class="tb">
            <p class="left_p">想看</p>
            <p class="right_p">评分</p>
          </div>
        </div>
        <div class="center">
          <p class="p">演职人员</p>
          <swiper :options="swiperOption"  ref="mySwiper">
            <swiper-slide>
              <div class="img"><img src="../../assets/images/p1504775118.88.jpg"/></div>
              <p class="name">{{$route.params.hot.directors[0].name}}</p>
              <p class="dy">导演</p>
            </swiper-slide>
            <swiper-slide v-for="(cast,indexc) in $route.params.hot.casts" :key="indexc">
              <div class="img">
                <img src="../../assets/images/p1504775118.88.jpg"/>
              </div>
              <p class="name">{{cast.name}}</p>
              <p class="dy">演员</p>
            </swiper-slide>
          </swiper>
        </div>
        <div class="bottom">优惠购票</div>
      </div>
    </div>
  </div>
  <!--</div>-->
</template>

<script>
  import axios from 'axios'
  export default{
    name:'hotdetails',
    created(){
      console.log(this.$route.params);
      let p= this.$route.params.hot.rating.average;
      console.log(p);

      this.$nextTick(function() {
        this.showstar(p);
      });
    },
    methods: {
      showstar(n){
        let con_wid = this.$refs["star_con"];
        let con = con_wid.offsetWidth;
        let del_star = this.$refs["del_star"];
        let del_move = (n*con)/10;

        del_star.style.backgroundPosition=-del_move+"px 0px";
        del_star.style.left=del_move+"px";
        console.log(con_wid);
        console.log(con);
        console.log(del_star);
        console.log(del_move);
        console.log(this.$refs.mySwiper);
      }
    },
    mounted(){
    },
    data(){
      return {
        hots:[],
        swiperOption:{
          slidesPerView:2.5,
        },
      }
    },
  }

</script>

<style>
  #hotdetails, .hotdetails{
    width: 100%;
    max-width: 7.5rem;
    height: 100%;
    background: white;
    overflow: scroll;
    overflow-y: hidden;
    z-index: 100;
  }
  .hotdetails .hotdetails_ds{
    width: 100%;
    max-width: 7.5rem;
    height: 100%;
    z-index: 888;
    background: white;
    position: fixed;
    left: 50%;
    margin-left: -3.75rem;
  }
  .hotdetails .hotdetails_ds header{
    width: 100%;
    height: 8%;
    margin-top: 0rem;
    background: #f5f5f5;
    z-index: 966;
  }
  .hotdetails .hotdetails_ds header a{
    font-size: 0.46rem;
    color: green;
    text-decoration: none;
    padding-left: 0.3rem;
    line-height: 1rem;
  }
  .hotdetails .hotdetails_ds .top{
    width: 100%;
    height: 34%;
    overflow: hidden;
    border-bottom: 0.02rem solid #4a4a4a;
    background: #f5f5f5;
    margin-top: 10%;
  }
  .hotdetails .hotdetails_ds .top .l{
    width:100%;
    max-width: 2.2rem;
    height: 2.4rem;
    float: left;
    border: 0.2rem solid #c2c2c2;
    margin-top: 0.3rem;
    overflow: hidden;
    line-height:0rem;
    margin-left: 0.1rem;
    /*background: tan;*/
  }
  .hotdetails .hotdetails_ds .top .l img{
    width: 100%;
    height: 100%;
  }
  .hotdetails .hotdetails_ds .top .r{
    width:100%;
    max-width: 4.46rem;
    height: 2.6rem;
    float: left;
    margin-top: 0.3rem;
    overflow: hidden;
    padding-left: 0.3rem;
    padding-top: 0.2rem;
    /*background: blueviolet;*/
  }
  .hotdetails .hotdetails_ds .top .r h3{
    font-size: 0.38rem;
    height: 0.44rem;
    line-height: 0.38rem;
    font-weight: 300;
    /*background: yellowgreen;*/
  }
  .hotdetails .hotdetails_ds .top .r .pingfen{
    width: auto;
    height: 0.44rem;
    font-size: 0.28rem;
    line-height: 0.28rem;
    color: orangered;
    /*background: thistle;*/
  }
  .hotdetails .hotdetails_ds .top .r .pingfen .star-vote{
    float: left;
    width: 2.2rem;
    height: 0.38rem;
    /*  line-height: 0.36rem;*/
    overflow:hidden;
    position:relative;
    background: burlywood;
  }
  .hotdetails .hotdetails_ds .top .r .pingfen .star-vote>span{
    position:absolute;
    display: block;
    width: 2.2rem;
    height: 0.38rem;
    background-size:cover;
    background-repeat:no-repeat;
    left:0px;
    top:0px;
  }
  .hotdetails .hotdetails_ds .top .r .pingfen .star-vote .add-star{
    background-image: url(../../assets/images/y.png);
  }
  .hotdetails .hotdetails_ds .top .r .pingfen .star-vote .del-star{
    background-image: url(../../assets/images/w.png);
    background-color:white;
  }
  .hotdetails .hotdetails_ds .top .r .p{
    font-size: 0.3rem;
    /*background: turquoise;*/
  }
  .hotdetails .hotdetails_ds .top .tb{
    width: 100%;
    height: 1rem;
    margin-top: 3.3rem;
    overflow: hidden;
    /*background: chartreuse;*/
  }
  .hotdetails .hotdetails_ds .top .tb p{
    float: left;
    width: 2rem;
    height:0.6rem;
    border: 0.02rem solid #000000;
    margin-top: 0.2rem;
    line-height: 0.6rem;
    text-align: center;
    background: #f5f5f5;
    border-radius: 0.1rem;
  }
  .hotdetails .hotdetails_ds .top .tb .left_p{
    margin-left: 0.9rem;
  }
  .hotdetails .hotdetails_ds .top .tb .right_p{
    float: right;
    margin-right: 0.9rem;
  }
  .hotdetails .hotdetails_ds .center{
    width: 100%;
    height: 40%;
    margin-top: 10%;
    overflow: hidden;
    border-top: 0.02rem solid #4a4a4a;
    border-bottom: 0.02rem solid #4a4a4a;
    background: white;
  }
  .hotdetails .hotdetails_ds .center .p{
    width:100%;
    height: 1rem;
    line-height: 1rem;
    font-size: 0.4rem;
    padding-left: 0.2rem;
  }
  .hotdetails .hotdetails_ds .center div{
    width: auto;
    height: 100%;
    /*background: brown;*/
  }
  .hotdetails .hotdetails_ds .center div div{
    width: 0.3rem;
    height: 100%;
    float: left;
    margin-left: 0rem;
    margin-right: 0.2rem;
    /*background: yellowgreen;*/
  }
  .hotdetails .hotdetails_ds .center div div .img{
    clear: both;
    width:100%;
    height: 3.28rem;
    /*background: red;*/
    /*  border: 0.2rem solid #c2c2c2;*/
    overflow: hidden;
  }
  .hotdetails .hotdetails_ds .center div div .img img{
    width:100%;
    height: 100%;
  }
  .hotdetails .hotdetails_ds .center div div p{
    width: 100%;
    height: auto;
    text-align: center;
    font-size: 0.36rem;
  }
  .hotdetails .hotdetails_ds .center div div p.dy{
    color: #8f949a;
  }
  .hotdetails .hotdetails_ds .bottom{
    width:100%;
    max-width: 7.5rem;
    height: 10%;
    position: fixed;
    bottom: 0rem;
    left: 50%;
    margin-left: -3.75rem;
    background: #FF6600;
    overflow: hidden;
    border-top: 0.02rem solid #4a4a4a;
    border-top-left-radius: 0.16rem;
    border-top-right-radius: 0.16rem;
    text-align: center;
    font-size: 0.45rem;
    line-height: 1.2rem;
    z-index: 966;
  }
</style>
