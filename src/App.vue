<template>
  <div id="app">
    <Navbar></Navbar>

    <router-view/>
  </div>
</template>

<script>

import Navbar from '@/components/Navbar'
export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
html {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-image: -webkit-linear-gradient(right, rgb(233, 165, 18),rgb(253, 185, 11),rgb(253, 185, 11), rgb(253, 185, 11), rgb(233, 165, 18));
}
</style>
