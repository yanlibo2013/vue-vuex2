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
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import {mapGetters, mapActions } from 'vuex';
  import attachFastclick from 'fastclick';
  export default {
    /* 注册顶层 App 的 store */
    created () {
      this.$store.dispatch('getDevicetype');
      this.$store.dispatch('getList');
    },
    mounted () {
      attachFastclick.attach(window.document.body);
    }
  }

</script>
<style lang="sass">
  /*@import "assets/style/main.scss";*/
  .fade-enter-active, .fade-leave-active {
    transition: all .5s ease;
  }
  .fade-enter {
    opacity: 0;
    transform:translate(20px, 0);
  }
  .fade-leave-active {
    opacity: 0;
    transform:translate(20px, 0);
  }
</style>

