/*
* @Author: henry yan
* @Date:   2016-10-19 16:47:00
* @Last Modified by:   henry yan
* @Last Modified time: 2016-10-19 16:47:00
* @describe
* 根组件，主要用于引入全局的css和js
*/
<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
  import {mapGetters, mapActions } from 'vuex'
  export default {
    /* 注册顶层 App 的 store */
    created () {
      this.$store.dispatch('getDevicetype');
    }
  }
/*

  console.log(mapGetters({
    deviceStatus: 'deviceStatus'
  }));
*/




</script>
<style lang="sass">
</style>

