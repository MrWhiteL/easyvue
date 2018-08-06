<template>
  <div class="ev-header">
    <div class="logo">
      <img src="../../assets/images/logo_ev.png" style="height: 45px ">
    </div>
    <div class="menu">
    </div>
    <div class="user-bar">

    </div>
  </div>
</template>

<script>


  export default {
    name: "ev-header",
    components:{

    },
    data () {
      return {
        theme1: 'light',
    }
    }
  }
</script>

<style lang="scss">
  .ev-header{
    padding: 0px 20px;
    width: 100%;
    .logo{
        width: 200px;
        height: 60px;
        float: left;
        padding: 10px;
    }
    .menu{
        height: 60px;
        float: left;
    }

  }
</style>
