/*
* @Author: henry yan
* @Date:   2016-10-19 16:47:00
* @Last Modified by:   henry yan
* @Last Modified time: 2016-10-19 16:47:00
*/
<template>
  <root></root>
</template>
<style>
  .div-home{
      background-color:rebeccapurple;
  }
</style>

<script>
   import pc from './pc/index'
   import mobile from './mobile/index_mobile'
   import device from '../../common/device'
   let root=device.judge(pc,mobile);
   console.log(root);
   export default {
      components: {root}
   }
</script>