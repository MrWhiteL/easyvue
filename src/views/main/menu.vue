<template>
      <Submenu :name="item.name"  v-if="item.hasOwnProperty('children')" >
        <template slot="title">
          <Icon type="ios-stats"/>
          {{item.title}}
        </template>
        <ev-menu v-for='(child,index) in item.children' :item='child' :key="index"></ev-menu>
      </Submenu>
      <MenuItem :name="item.name" v-else-if="item.meta.visible">
        {{item.title}}
      </MenuItem>
</template>
<script>
    export default {
        name: "EvMenu",
        props:[
          'item'
        ],
        data(){
          return {

          }
        }
    }
</script>

<style scoped>

</style>
