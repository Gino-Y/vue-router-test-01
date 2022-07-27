<template>
  <div>
    <hr>
    <h1>根路由</h1>
    <router-link replace to="/content/login">Login</router-link>
    <router-link replace to="/content/reg">Reg</router-link>

    <router-link replace :to="{name:'Login'}">Login</router-link>
    <router-link replace :to="{name:'Reg'}">Reg</router-link>

    <button @click="toPage('Login')">Login</button>
    <button @click="toPage('Reg')">Reg</button>

    <router-view/>
  </div>
</template>

<script setup lang="ts">
import {useRouter} from 'vue-router'
const router = useRouter()
const toPage =(url:string)=>{
  router.push({name:url})
}
</script>

<style >

</style>