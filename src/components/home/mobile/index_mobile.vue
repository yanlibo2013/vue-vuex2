/*
* @Author: henry yan
* @Date:   2016-10-19 16:47:00
* @Last Modified by:   henry yan
* @Last Modified time: 2016-10-19 16:47:00
*/
<template>
  <div>
     <h1 >home mobile!!!</h1>

     <button @click="showToast()">Toast</button>
  </div>

</template>
<style>

</style>

<script>
   import Vue from 'vue'
   import { Toast } from 'mint-ui';

   Vue.component(Toast.name, Toast);
   export default {
      /* 注册顶层 App 的 store */
      mounted () {

      },
      created () {
         //
      },
      methods:{
         showToast:function () {
            Toast('提示信息');
         }
      }
   }
</script>