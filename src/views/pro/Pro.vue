<template>
  <AppHeader/>
  <div class="content">
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
<style scoped>

.content {
    height: 100%;
    margin-bottom: 0px;
    margin-top: 100px;
    padding: 0px;
}
</style>
