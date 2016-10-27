<template>
  <div id="app">
    <h1>Shopping Cart Example</h1>
    <hr>
    <h2>Products</h2>
    <product-list></product-list>
    <hr>
    <cart></cart>
  </div>
</template>

<script>
  import 'babel-polyfill'
  import Vue from 'vue'
  import App from './App.vue'
  import store from '../store'
  import { currency } from '../currency'
  import ProductList from './ProductList.vue'
  import Cart from './Cart.vue'

  Vue.filter('currency', currency);
  export default {
    store:store,
    components: { ProductList, Cart }
  }
</script>
<style lang="sass">
  /*@import '../../node_modules/bootstrap/dist/css/bootstrap.css';*/
  @import "../assets/css/index.scss";
</style>
