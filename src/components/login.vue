<template>
  <div>
    <div class="login">
      Login
    </div>

<!--    <router-link replace :to="{name:'User'}">user01</router-link>-->
<!--    <router-link replace :to="{name:'Reg'}">user02</router-link>-->

    <router-view/>
    <router-view name="user02"/>
    <router-view name="user03"/>
  </div>
</template>

<script setup lang="ts">

</script>

<style>
  .login{
    background: rgba(0, 128, 0, 1);
    height: 400px;
    width: 400px;
    font-size: 20px;
    color: white;
  }
</style>