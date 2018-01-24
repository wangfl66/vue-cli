<template>
  <div id="app">
    <!--<img src="./assets/logo.png">&lt;!&ndash;&ndash;&gt;-->
      <transition name="fade">
        <div class="show" @click="show = !show" v-if="show">
            <div class="img">
              <img src="./assets/images/1.png"/>
            </div>
            <p class="text">来看电影吧</p>
        </div>
      </transition>
      <div class="neir">
       <!-- <header>
         <p class="p666">点我搜素</p></router-link>
        </header>-->

        <div class="k"></div>
        <div class="bodys">
          <router-view></router-view>
        </div>
        <div class="j"></div>
        <ul>
          <li>
            <router-link to="/h">正在热映</router-link>
          </li>
          <li>
            <router-link to="/b">即将上映</router-link>
          </li>
          <li>
            <router-link to="/r">排行榜</router-link>
          </li>
        </ul>
      </div>
    <div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'App',
  data() {
    return{
      show: true
    }
  },
  components: {

  }
}
</script>

<style>
  *{
    padding: 0;
    margin: 0;
  }
  html,body, #app{
    height:100%;
    position: relative;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 2s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .show{
    width: 100%;
    max-width: 7.5rem;
    height: 100%;
    background: white;
    position: fixed;
    left:50%;
    margin-left: -3.75rem;
    z-index: 999;
  }
  .show .img{
    width: 2rem;
    height: 2rem;
    background: #c2c2c2;
    position: fixed;
    left: 50%;
    margin-left: -1rem;
    top: 2rem;
    border-radius: 50%;
    overflow: hidden;
  }
  .show .img img{
    width: 100%;
    height: 100%;
  }
  .show .text{
    width: 0.8rem;
    height: auto;
    position: fixed;
    left:50%;
    margin-left: -0.4rem;
    top: 6rem;
    font-size: 0.8rem;
  }
  .neir{
    width: 100%;
    max-width: 7.5rem;
    /*background: gold;*/
    margin: auto;
    overflow: hidden;
  }
  .neir header{
    width: 100%;
    max-width: 7.5rem;
    height: 1.5rem;
    position: fixed;
    left: 50%;
    margin-left: -3.75rem;
    top: 0;
    background: white;
    z-index: 778;
  }
  .neir header a{
    text-decoration: none;
    color: black;
    font-size: 0.4rem;
    font-weight: bold;
  }
  .neir header .p666{
    height: 1rem;
    width: 6rem;
    margin: 0.25rem auto;
    border: 0.02rem solid #000000;
    border-radius: 1rem;
    overflow: hidden;
    text-align: center;
    line-height: 1rem;
    background: #c2c2c2;
  }
  .neir .k{
    height: 1rem;
  }
  .neir .bodys{
    width: 100%;
    max-width: 7.5rem;
    height: auto;
    margin: auto;
  }
  .neir .j{
    height: 1.2rem;
  }
  .neir ul{
    width: 100%;
    max-width: 7.5rem;
    height: 1rem;
    border-top: 0.02rem solid #c2c2c2;
    position: fixed;
    left: 50%;
    margin-left: -3.75rem;
    bottom: 0;
    background: white;
    z-index: 778;
  }

  .neir ul li{
    width: 33%;
    list-style: none;
    height: 0.8rem;
    float: left;
    text-align: center;
    line-height: 0.8rem;
    /*background: green;*/
  }
  .neir ul li a{
    text-decoration: none;
    color: black;
    font-size: 0.4rem;
  }
  .neir ul li a:hover{
    color: red;
  }
</style>
