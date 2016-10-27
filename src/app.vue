/*
* @Author: henry yan
* @Date:   2016-10-19 16:47:00
* @Last Modified by:   henry yan
* @Last Modified time: 2016-10-19 16:47:00
* @describe
* 根组件，主要用于引入全局的css和js
*/
<template>
  <!--<div class="main">
    <router-view transition="expand" transition-mode="out-in"></router-view>
  </div>-->
  <div class="wrapper">
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    /* 注册顶层 App 的 store */
  }

</script>
<style lang="sass">
</style>

