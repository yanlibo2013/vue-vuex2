/*
* @Author: henry yan
* @Date:   2016-10-19 16:47:00
* @Last Modified by:   henry yan
* @Last Modified time: 2016-10-19 16:47:00
*/
<template>
    <h1>login111!!!</h1>
</template>
<style>
    .div-app{
        background-color:rebeccapurple;
    }
</style>

<script>
    export default {
        beforeCreate(){
            console.log("login beforeCreated function");
        },
        beforeMount(){
            console.log("login beforeMount function");
        },
        created () {
            console.log("login created function");
        }
    }
</script>