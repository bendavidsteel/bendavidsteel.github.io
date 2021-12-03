<template>
  <div class="container">
    <AppHeader/>
    <HomePage/>
    <AppFooter/>
  </div>
</template>

<script>
import HomePage from '@/pages/HomePage'
import AppHeader from '@/components/layout/AppHeader'
import AppFooter from '@/components/layout/AppFooter'

export default {
  name: 'App',
  components: {
    HomePage,
    AppHeader,
    AppFooter
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
