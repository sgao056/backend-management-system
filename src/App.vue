<template>
  <div id="app">
    <Layout/>
    <router-view></router-view>
  </div>
</template>

<script>
import Layout from './Layout.vue'

export default {
  name: 'App',
  components: {
  Layout
  }
}
</script>

<style>
html,body{
  margin:0;
  padding:0;
  border:0;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif; 
}
</style>
