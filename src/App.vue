<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: { },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
  height: 100%;
  margin: 0px;
  padding: 0px;
}

html, body {
  height: 100%;
  margin: 0px;
  padding: 0px;
}
</style>
