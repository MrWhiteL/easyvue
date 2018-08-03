<template>
  <div id="ev-main">
      欢迎
    <Spin fix v-if="loading">
    <Icon type="ios-loading" size=18 class="demo-spin-icon-load"></Icon>
    <div>Loading</div>
    </Spin>

  </div>
</template>
<script>
  export  default {
    data(){
      return{
         loading:false
      }
    },
    methods:{

    },
    mounted:{

    }
  }
</script>
<style lang="scss" scoped="" type="text/css">
  #ev-main{
    height: 200px;
    width: 100%;
    background-color: antiquewhite;
    position: relative;
  }
  .demo-spin-icon-load{
    animation: ani-demo-spin 1s linear infinite;
  }
  @keyframes ani-demo-spin {
    from { transform: rotate(0deg);}
    50%  { transform: rotate(180deg);}
    to   { transform: rotate(360deg);}
  }
  .demo-spin-col{
    height: 100px;
    position: relative;
    border: 1px solid #eee;
  }
</style>
