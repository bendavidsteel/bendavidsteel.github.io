<template>
  <div class="container">
    <AppHeader/>
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'

export default {
  name: 'App',
  components: {
    AppHeader
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
.container {
  display: table;
  width: 100%;
  height: 100%;
}
</style>
