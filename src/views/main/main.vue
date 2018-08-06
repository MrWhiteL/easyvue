<template>
  <div class="ev-main ">
      <Header>
        <ev-header></ev-header>
      </Header>
      <div class="content">
        <div class="side-menu" >
          <Menu   active-name="home"  @on-select="menuSelected" class="menu">
            <ev-menu v-for="(item,index) in routers" :item="item" :key="index"></ev-menu>
          </Menu>
        </div>
        <div class="main-context">
          <router-view/>
        </div>
      </div>
  </div>
</template>
<script>
  import EvHeader from './header'
  import {routers} from "../../router/router";
  import EvMenu from './menu'
  export  default {
    data(){
      return{
         loading:false,
         routers:routers
      }
    },
    components: {
      EvHeader,
      EvMenu,
    },
    computed:{
      //routerName: this.$router
    },
    methods:{
      menuSelected(active){
        this.$router.push({ name: active })
      }
    },

  }
</script>
<style lang="scss" >
  .ev-main{
    height:100%;
    width: 100%;
    position: relative;
    .content{
      height: 100%;
      .side-menu{
        float: left;
        width: 223px;
        height: 100%;
        overflow: hidden;
        .menu{
          height: 100%;
          overflow: scroll
        }
      }
      .main-context{
        float: left;
        width: calc(100% - 223px);
        height: 100%;
        background-color: #f0eef5;
        padding: 15px;
      }
    }
    .ivu-layout-header{
      padding: 0;
    }
  }
</style>
